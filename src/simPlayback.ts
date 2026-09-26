import { PlaybackController } from './playbackController'
import { setIcon } from './iconInjector'
import './simPlayback.css'
import playIconSvg from './icons/play.svg?raw'
import pauseIconSvg from './icons/pause.svg?raw'
import chevronLeft1Svg from './icons/chevron-left.svg?raw'
import chevronLeft2Svg from './icons/chevron-left-2.svg?raw'
import chevronLeft3Svg from './icons/chevron-left-3.svg?raw'
import chevronRight1Svg from './icons/chevron-right.svg?raw'
import chevronRight2Svg from './icons/chevron-right-2.svg?raw'
import chevronRight3Svg from './icons/chevron-right-3.svg?raw'

export type SimMode = 'day' | 'month' | 'year'

const DAY_MS = 24 * 60 * 60 * 1000
const SIM_PERIOD_MS: Record<SimMode, number> = {
  day: DAY_MS,
  month: 30 * DAY_MS,
  year: 365 * DAY_MS,
}
const SIM_REAL_DURATION_MS = 24_000 // 24秒で1周期を再生
const STEP_DELTA_MS: Record<'hour' | 'day' | 'month', number> = {
  hour: 60 * 60 * 1000, day: 24 * 60 * 60 * 1000, month: 30 * 24 * 60 * 60 * 1000,
}
const SEEKBAR_MAX = 1000

export interface SimPlaybackOptions {
  /** 起動直後に選択されているモード（省略時 'day'） */
  defaultMode?: SimMode
  /** 時間バーに表示するモードボタン（省略時は日/月/年すべて表示） */
  availableModes?: SimMode[]
}

export interface SimPlaybackController {
  /**
   * イベントリスナー・rAFループを止めて後始末する。3D+2D/SKYのようにアプリ生存中ずっと
   * 生きているコントローラーは呼ばなくてよいが、スケール系のように「モード切替のたびに
   * dispose()→作り直す」運用の画面では、呼ばないと古いリスナー/ループが残り続ける
   */
  dispose(): void
}

/**
 * 日/月/年モードの時間バーコンポーネント。外部のグローバル状態には一切依存せず、
 * 時刻が変わるたびonDateChangeを呼ぶだけ。呼び出し側は自分が必要な描画対象だけを
 * onDateChangeでバインドする（3D+2D/SKY/スケール系すべてで共通利用）。
 */
export function createSimPlaybackController(
  idPrefix: string,
  onDateChange: (date: Date) => void,
  options: SimPlaybackOptions = {}
): SimPlaybackController {
  const modeButtons: Record<SimMode, HTMLButtonElement> = {
    day: document.getElementById(`${idPrefix}-mode-day`) as HTMLButtonElement,
    month: document.getElementById(`${idPrefix}-mode-month`) as HTMLButtonElement,
    year: document.getElementById(`${idPrefix}-mode-year`) as HTMLButtonElement,
  }
  const nowBtn = document.getElementById(`${idPrefix}-now-btn`) as HTMLButtonElement
  const playBtn = document.getElementById(`${idPrefix}-play-btn`) as HTMLButtonElement
  const seekbar = document.getElementById(`${idPrefix}-seekbar`) as HTMLInputElement
  const dateLabel = document.getElementById(`${idPrefix}-sim-date-label`) as HTMLElement

  const availableModes = options.availableModes ?? ['day', 'month', 'year']
  for (const key of ['day', 'month', 'year'] as const) {
    modeButtons[key].hidden = !availableModes.includes(key)
  }

  let simMode: SimMode = options.defaultMode ?? 'day'
  let simAnchorDate = new Date()
  const playback = new PlaybackController(SIM_PERIOD_MS[simMode], SIM_REAL_DURATION_MS)

  function currentSimDate(): Date {
    return new Date(simAnchorDate.getTime() + playback.elapsedMilliseconds)
  }

  function formatSimDate(date: Date): string {
    const pad = (n: number) => String(n).padStart(2, '0')
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}`
  }

  function applySimDate() {
    onDateChange(currentSimDate())
    updateUI()
  }

  // 再生アイコンは状態が変わった時だけ差し替える（毎フレームinnerHTMLを書き換えるのは無駄なため）
  let lastIsPlaying: boolean | null = null

  function updateUI() {
    for (const key of ['day', 'month', 'year'] as const) {
      modeButtons[key].classList.toggle('active', key === simMode)
    }
    if (playback.isPlaying !== lastIsPlaying) {
      lastIsPlaying = playback.isPlaying
      setIcon(playBtn, playback.isPlaying ? pauseIconSvg : playIconSvg)
    }
    seekbar.value = String(Math.round(playback.fraction * SEEKBAR_MAX))
    const simDateStr = formatSimDate(currentSimDate())
    dateLabel.textContent = simDateStr
    // 表示上「今」と区別が付かない時はNOWボタンを目立たせない（既にNOWの状態のため）
    const isAtNow = simDateStr === formatSimDate(new Date())
    nowBtn.classList.toggle('now-btn-active', !isAtNow)
  }

  /** モードは変えず、シミュレーション時刻だけを現在時刻に戻す（NOWボタン） */
  function resetToNow() {
    simAnchorDate = new Date()
    playback.setPeriod(SIM_PERIOD_MS[simMode])
    playback.reset()
    applySimDate()
  }

  /** 日/月/年モードを切り替える。シークバーは常に現在時刻を起点に先頭へリセットする */
  function setSimMode(mode: SimMode) {
    simMode = mode
    resetToNow()
  }

  /** シークバーの範囲に縛られず「今の時刻」そのものを±deltaMs動かす */
  function stepAnchorBy(deltaMs: number) {
    playback.pause()
    simAnchorDate = new Date(simAnchorDate.getTime() + deltaMs)
    playback.reset()
    applySimDate()
  }

  // dispose()で確実に後始末するための汎用リスナー登録ヘルパー
  const cleanupFns: Array<() => void> = []
  function on(target: EventTarget, type: string, handler: EventListenerOrEventListenerObject): void {
    target.addEventListener(type, handler)
    cleanupFns.push(() => target.removeEventListener(type, handler))
  }

  for (const key of ['day', 'month', 'year'] as const) {
    on(modeButtons[key], 'click', () => setSimMode(key))
  }

  on(nowBtn, 'click', () => resetToNow())

  on(playBtn, 'click', () => {
    playback.togglePlay()
    updateUI()
  })

  on(seekbar, 'input', () => {
    playback.pause()
    playback.seekFraction(parseInt(seekbar.value, 10) / SEEKBAR_MAX)
    applySimDate()
  })

  // ステップボタンの矢印の数(1〜3)は単位(時=1/日=2/月=3)を表す。向き(dir)で左右どちらの
  // 矢印アイコンを使うかを決める。複数の矢印は1つのSVGに描いた単一アイコンとして扱う
  // （svg要素を複数並べるとボタン幅が個別に伸び、狭い画面でボタン列が2段落ちするため）
  const STEP_CHEVRON_ICONS: Record<'hour' | 'day' | 'month', [left: string, right: string]> = {
    hour: [chevronLeft1Svg, chevronRight1Svg],
    day: [chevronLeft2Svg, chevronRight2Svg],
    month: [chevronLeft3Svg, chevronRight3Svg],
  }
  for (const btn of document.querySelectorAll<HTMLButtonElement>(
    `#${idPrefix}-step-back-b .step-btn, #${idPrefix}-step-fwd-b .step-btn`
  )) {
    const unit = btn.dataset.unit as 'hour' | 'day' | 'month'
    const dir = Number(btn.dataset.dir)
    const [leftIcon, rightIcon] = STEP_CHEVRON_ICONS[unit]
    setIcon(btn, dir < 0 ? leftIcon : rightIcon)
    on(btn, 'click', () => stepAnchorBy(STEP_DELTA_MS[unit] * dir))
  }

  applySimDate()

  // 継続的なrAFループ。playback.tick()は再生中でなければ何もしないため、常時回しっぱなしでよい
  let rafId: number | null = null
  let lastAnimTime: number | null = null
  function animLoop(timestamp: number) {
    rafId = requestAnimationFrame(animLoop)
    const dt = lastAnimTime === null ? 0 : (timestamp - lastAnimTime) / 1000
    lastAnimTime = timestamp
    if (!playback.isPlaying) return
    playback.tick(dt)
    applySimDate()
  }
  rafId = requestAnimationFrame(animLoop)

  return {
    dispose() {
      if (rafId !== null) cancelAnimationFrame(rafId)
      for (const cleanup of cleanupFns) cleanup()
      cleanupFns.length = 0
    },
  }
}
