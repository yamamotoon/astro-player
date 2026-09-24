import './style.css'
import { applyLang, getLang, t } from './i18n'
import { Scene3D } from './scene3d'
import { Compass2D } from './compass2d'
import { getAstroData } from './astroCalc'
import { ARView } from './ar'
import { ScaleModel3D, type ScaleModelConfig } from './scaleModel3d'
import { PlaybackController } from './playbackController'
import { CompassHeadingTracker } from './compassHeading'

type SceneName = 'menu' | 'dashboard' | 'sky' | 'scale'

const latInput = document.getElementById('lat') as HTMLInputElement
const lngInput = document.getElementById('lng') as HTMLInputElement
const datetimeInput = document.getElementById('datetime') as HTMLInputElement
const realtimeCheck = document.getElementById('realtime') as HTMLInputElement
const constCheck = document.getElementById('show-constellations') as HTMLInputElement
const famousCheck = document.getElementById('show-famous') as HTMLInputElement
const trianglesCheck = document.getElementById('show-triangles') as HTMLInputElement

function toDatetimeLocal(d: Date): string {
  const pad = (n: number) => String(n).padStart(2, '0')
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`
}

datetimeInput.value = toDatetimeLocal(new Date())

const canvas3d = document.getElementById('canvas3d') as HTMLCanvasElement
const scene3d = new Scene3D(canvas3d)

const canvas2d = document.getElementById('canvas2d') as HTMLCanvasElement
const compass2d = new Compass2D(canvas2d)

const arCanvas = document.getElementById('ar-canvas') as HTMLCanvasElement
const arView = new ARView(arCanvas)

const zoomSlider = document.getElementById('zoom-slider') as HTMLInputElement
zoomSlider.addEventListener('input', () => {
  arView.setFov(parseFloat(zoomSlider.value))
})

// ---- スケール系モード（既存の「スケール」/ 地球の公転ビューア / 地球の自転ビューア） ----
// 3つとも同じcanvas・同じDOM（#scene-scale, #scale-playback）を使い回す独立モード。
// 常に生きたインスタンスが1つだけになるようにする（=IDの衝突や多重描画が構造的に起きない）ため、
// モードに入る/離れるたびに必ずdispose()してから作り直す（issue #008）
const canvasScale = document.getElementById('canvas-scale') as HTMLCanvasElement
let scaleModel: ScaleModel3D | null = null

const SCALE_CONFIG_FULL: ScaleModelConfig = {
  availableModes: ['day', 'month', 'year'], defaultMode: 'day', deformDefault: false, defaultTarget: 'sun',
}
const SCALE_CONFIG_ORBIT: ScaleModelConfig = {
  // 地球の公転ビューア: 地球の公転・月の動き（満ち欠け）が主役。日モードは出さない。
  // 注視点は太陽（原点で動かない）。地球を注視点にすると毎フレーム地球へ追従してしまい、
  // 逆に太陽側が地球の周りを回っているように見えてしまうため。
  // 水星・金星・火星もここだけ表示する（実験的。フラグ1つで他画面には影響しない）
  availableModes: ['month', 'year'], defaultMode: 'month', deformDefault: true, defaultTarget: 'sun',
  showInnerPlanets: true,
}
const SCALE_CONFIG_SPIN: ScaleModelConfig = {
  // 地球の自転ビューア: 地球の自転(昼夜)・月の潮汐固定が主役。年モードは出さない
  availableModes: ['day', 'month'], defaultMode: 'day', deformDefault: true, defaultTarget: 'earth',
}

// 画面タイトル(#scale-scene-title)は3つの入口で共有しているDOMなので、入る時に文言を出し分ける。
// data-i18n属性は付けない（つけるとapplyLang()の一括スイープで固定文言に戻されてしまうため）。
// 言語切替時にも今のモードの文言で出し直せるよう、キー自体も覚えておく
const scaleSceneTitle = document.getElementById('scale-scene-title') as HTMLElement
let scaleSceneTitleKey = 'view-scale'

function enterScaleMode(config: ScaleModelConfig, titleKey: string) {
  scaleModel?.dispose()
  scaleModel = new ScaleModel3D(canvasScale, config)
  scaleSceneTitle.textContent = t(titleKey)
  scaleSceneTitleKey = titleKey
  showScene('scale')
}

const scaleFitBtn = document.getElementById('scale-fit-btn') as HTMLButtonElement
scaleFitBtn.addEventListener('click', () => scaleModel?.frameAll())

function getSettings() {
  const lat = parseFloat(latInput.value) || 35.6762
  const lng = parseFloat(lngInput.value) || 139.6503
  const date = realtimeCheck.checked ? new Date() : new Date(datetimeInput.value)
  return { lat, lng, date }
}

// ---- シーン切り替え（メニュー / 3D+2D / SKY / スケールモデル） ----
const sceneMenu = document.getElementById('scene-menu') as HTMLElement
const sceneHud = document.getElementById('scene-hud') as HTMLElement
const scenePlayback = document.getElementById('scene-playback') as HTMLElement
const dashboardPlaybackSection = document.getElementById('dashboard-playback') as HTMLElement
const scalePlayback = document.getElementById('scale-playback') as HTMLElement
const sceneDashboard = document.getElementById('scene-dashboard') as HTMLElement
const sceneSky = document.getElementById('scene-sky') as HTMLElement
const sceneScale = document.getElementById('scene-scale') as HTMLElement
const constToggles = document.getElementById('const-toggles') as HTMLElement
const backToMenuBtn = document.getElementById('back-to-menu-btn') as HTMLButtonElement
const toggleControlsBtn = document.getElementById('toggle-controls') as HTMLButtonElement
const menuDashboardBtn = document.getElementById('menu-dashboard-btn') as HTMLButtonElement
const menuSkyBtn = document.getElementById('menu-sky-btn') as HTMLButtonElement
const menuScaleBtn = document.getElementById('menu-scale-btn') as HTMLButtonElement
const menuScaleOrbitBtn = document.getElementById('menu-scale-orbit-btn') as HTMLButtonElement
const menuScaleSpinBtn = document.getElementById('menu-scale-spin-btn') as HTMLButtonElement

function showScene(name: SceneName) {
  // スケール系モードは「今画面に出ている時だけ生きている」設計（issue #008）。
  // scale以外へ出ていく瞬間に必ず破棄し、非表示中に描画し続けないようにする
  if (name !== 'scale' && scaleModel) {
    scaleModel.dispose()
    scaleModel = null
  }

  const showHud = name === 'dashboard' || name === 'sky'
  sceneMenu.style.display = name === 'menu' ? '' : 'none'
  sceneHud.style.display = showHud ? '' : 'none'
  scenePlayback.style.display = name === 'sky' ? '' : 'none'
  dashboardPlaybackSection.style.display = name === 'dashboard' ? '' : 'none'
  sceneDashboard.style.display = name === 'dashboard' ? '' : 'none'
  sceneSky.style.display = name === 'sky' ? '' : 'none'
  sceneScale.style.display = name === 'scale' ? '' : 'none'
  scalePlayback.style.display = name === 'scale' ? '' : 'none'
  constToggles.style.display = name === 'dashboard' ? '' : 'none'
  backToMenuBtn.hidden = name === 'menu'
  toggleControlsBtn.hidden = !showHud
  if (name !== 'sky') arView.stop()
  if (document.fullscreenElement) document.exitFullscreen()
  if (name === 'dashboard') {
    // 非表示中はサイズ0で解像度が決まらないため、表示直後に再計算する
    requestAnimationFrame(() => scene3d.handleResize())
  }
  if (name === 'scale') {
    requestAnimationFrame(() => scaleModel?.handleResize())
  }
}

// ---- 3D/2D 表示切り替え（同時表示だとモバイルで操作しづらいため排他表示） ----
const viewEl3d = document.querySelector('#scene-dashboard .view-3d') as HTMLElement
const viewEl2d = document.querySelector('#scene-dashboard .view-2d') as HTMLElement
const viewToggle3dBtn = document.getElementById('view-toggle-3d') as HTMLButtonElement
const viewToggle2dBtn = document.getElementById('view-toggle-2d') as HTMLButtonElement
type DashboardView = '3d' | '2d'
let activeDashboardView: DashboardView = '3d'

function setDashboardView(view: DashboardView) {
  activeDashboardView = view
  viewEl3d.classList.toggle('active', view === '3d')
  viewEl2d.classList.toggle('active', view === '2d')
  viewToggle3dBtn.classList.toggle('active', view === '3d')
  viewToggle2dBtn.classList.toggle('active', view === '2d')
  if (view === '3d') {
    requestAnimationFrame(() => scene3d.handleResize())
  }
  // 非表示側のビューでデバイス方位センサーを回し続けない
  if (view !== '3d') setCompassEnabled('3d', false)
  if (view !== '2d') setCompassEnabled('2d', false)
}

viewToggle3dBtn.addEventListener('click', () => setDashboardView('3d'))
viewToggle2dBtn.addEventListener('click', () => setDashboardView('2d'))

// ---- 方位磁石モード: デバイスの向きに3D/2Dビューを連動させる ----
const compassToggle3dBtn = document.getElementById('compass-toggle-3d') as HTMLButtonElement
const compassToggle2dBtn = document.getElementById('compass-toggle-2d') as HTMLButtonElement
const compassIcon3d = compassToggle3dBtn.querySelector('.compass-fab-icon') as SVGElement
const compassIcon2d = compassToggle2dBtn.querySelector('.compass-fab-icon') as SVGElement
let compassHeadingDeg = 0
let compass3dEnabled = false
let compass2dEnabled = false
let compassTracker: CompassHeadingTracker | null = null

function isCompassActive(): boolean {
  return compass3dEnabled || compass2dEnabled
}

// 針は「北」を指し続ける。画面(headingDeg方向を正面)がheadingDeg分回転して
// 見えているぶん、北を指す針は見た目上その逆方向へ回転させる
function applyCompassNeedleRotation() {
  const rotate = `rotate(${-compassHeadingDeg}deg)`
  if (compass3dEnabled) compassIcon3d.style.transform = rotate
  if (compass2dEnabled) compassIcon2d.style.transform = rotate
}

async function setCompassEnabled(view: DashboardView, enabled: boolean) {
  const btn = view === '3d' ? compassToggle3dBtn : compassToggle2dBtn
  const icon = view === '3d' ? compassIcon3d : compassIcon2d
  if (view === '3d') {
    compass3dEnabled = enabled
    // ONの間はOrbitControlsの水平ドラッグを無効化する（手動で回すとコンパス角と
    // 取り合いになりガクつくため）。上下方向のドラッグは引き続き許可する
    scene3d.setCompassLocked(enabled)
  } else {
    compass2dEnabled = enabled
  }
  btn.classList.toggle('active', enabled)
  btn.setAttribute('aria-pressed', String(enabled))
  if (!enabled) icon.style.transform = ''

  if (isCompassActive() && !compassTracker) {
    const tracker = new CompassHeadingTracker((heading) => {
      compassHeadingDeg = heading
      if (compass3dEnabled) scene3d.setCompassHeading(compassHeadingDeg)
      if (compass2dEnabled) update()
      applyCompassNeedleRotation()
    })
    const ok = await tracker.start()
    if (!ok) {
      alert(getLang() === 'ja'
        ? 'センサーの使用が許可されませんでした。'
        : 'Sensor access was not granted.')
      if (view === '3d') {
        compass3dEnabled = false
        scene3d.setCompassLocked(false)
      } else {
        compass2dEnabled = false
      }
      btn.classList.remove('active')
      btn.setAttribute('aria-pressed', 'false')
      return
    }
    compassTracker = tracker
  } else if (!isCompassActive() && compassTracker) {
    compassTracker.stop()
    compassTracker = null
  }
}

compassToggle3dBtn.addEventListener('click', () => setCompassEnabled('3d', !compass3dEnabled))
compassToggle2dBtn.addEventListener('click', () => setCompassEnabled('2d', !compass2dEnabled))

menuDashboardBtn.addEventListener('click', () => {
  showScene('dashboard')
  setDashboardView(activeDashboardView)
})
menuSkyBtn.addEventListener('click', () => {
  // ジェスチャーを保持したまま同じクリックハンドラ内で開始する
  // （iOS Safariのジャイロ許可はユーザー操作から直接呼ばないと通らないため）
  showScene('sky')
  arView.start(arCanvas)
})
menuScaleBtn.addEventListener('click', () => enterScaleMode(SCALE_CONFIG_FULL, 'view-scale'))
menuScaleOrbitBtn.addEventListener('click', () => enterScaleMode(SCALE_CONFIG_ORBIT, 'view-scale-orbit'))
menuScaleSpinBtn.addEventListener('click', () => enterScaleMode(SCALE_CONFIG_SPIN, 'view-scale-spin'))
backToMenuBtn.addEventListener('click', () => showScene('menu'))

// ---- 24時間シミュレーション（状態変数・DOM参照）----
const langBtn = document.getElementById('lang-btn') as HTMLButtonElement
const playBtn = document.getElementById('play-btn') as HTMLButtonElement
const seekbar = document.getElementById('seekbar') as HTMLInputElement
const ANIM_DURATION_MS = 24_000 // 24秒で24時間（1秒=1時間）
const DAY_MS = 24 * 60 * 60 * 1000
const playback = new PlaybackController(DAY_MS, ANIM_DURATION_MS)

function updateSeekbar(date: Date) {
  if (playback.isPlaying) return // アニメーション中はplayback駆動のanimLoop側が管理
  const minutes = date.getHours() * 60 + date.getMinutes()
  seekbar.value = String(minutes)
}

function update() {
  const { lat, lng, date } = getSettings()
  if (isNaN(date.getTime())) return

  if (realtimeCheck.checked) {
    datetimeInput.value = toDatetimeLocal(date)
  }

  updateSeekbar(date)

  const data = getAstroData(date, lat, lng)
  scene3d.update(data)
  compass2d.draw(data, compass2dEnabled ? compassHeadingDeg : 0)
  arView.setData(data, lat, lng, date)

  if (constCheck.checked) {
    scene3d.updateConstellations(lat, lng, date)
  }
  if (famousCheck.checked) {
    scene3d.updateFamous(lat, lng, date)
  }
  if (trianglesCheck.checked) {
    scene3d.updateTriangles(lat, lng, date)
  }
}

latInput.addEventListener('input', update)
lngInput.addEventListener('input', update)
datetimeInput.addEventListener('input', update)
realtimeCheck.addEventListener('change', update)
constCheck.addEventListener('change', () => {
  scene3d.setConstellationsVisible(constCheck.checked)
  if (constCheck.checked) update()
})
famousCheck.addEventListener('change', () => {
  scene3d.setFamousVisible(famousCheck.checked)
  if (famousCheck.checked) update()
})
trianglesCheck.addEventListener('change', () => {
  scene3d.setTrianglesVisible(trianglesCheck.checked)
  if (trianglesCheck.checked) update()
})

// Real-time auto update every 10 seconds
let realtimeInterval: ReturnType<typeof setInterval> | null = null

function startRealtime() {
  stopRealtime()
  realtimeInterval = setInterval(() => {
    if (realtimeCheck.checked) update()
  }, 10000)
}

function stopRealtime() {
  if (realtimeInterval !== null) {
    clearInterval(realtimeInterval)
    realtimeInterval = null
  }
}

realtimeCheck.addEventListener('change', () => {
  if (realtimeCheck.checked) startRealtime()
  else stopRealtime()
})

startRealtime()
update()

// ---- フルスクリーン ----
const mainEl = document.querySelector('main') as HTMLElement

document.querySelectorAll<HTMLButtonElement>('.fullscreen-btn[data-target]').forEach(btn => {
  btn.addEventListener('click', () => {
    if (!document.fullscreenElement) {
      mainEl.dataset.fs = btn.dataset.target ?? ''
      mainEl.requestFullscreen().catch(() => {})
      btn.textContent = '✕'
    } else {
      document.exitFullscreen()
    }
  })
})

document.addEventListener('fullscreenchange', () => {
  if (!document.fullscreenElement) {
    delete mainEl.dataset.fs
    document.querySelectorAll<HTMLButtonElement>('.fullscreen-btn[data-target]').forEach(b => {
      b.textContent = '⛶'
    })
    scene3d.handleResize()
  } else {
    // フルスクリーン直後にThree.jsをリサイズ
    requestAnimationFrame(() => scene3d.handleResize())
  }
})

// ---- 設定パネル 折りたたみ ----
const controlsSection = document.querySelector('.controls') as HTMLElement

function refreshToggleBtn() {
  const isOpen = !controlsSection.classList.contains('collapsed')
  toggleControlsBtn.textContent = isOpen ? t('settings-open') : t('settings-close')
}

toggleControlsBtn.addEventListener('click', () => {
  const isOpen = !controlsSection.classList.contains('collapsed')
  if (isOpen) {
    controlsSection.classList.add('collapsed')
    toggleControlsBtn.setAttribute('aria-expanded', 'false')
  } else {
    controlsSection.classList.remove('collapsed')
    toggleControlsBtn.setAttribute('aria-expanded', 'true')
  }
  refreshToggleBtn()
})

// ---- 言語切り替え ----
applyLang('ja')
refreshToggleBtn()

langBtn.addEventListener('click', () => {
  const next = getLang() === 'ja' ? 'en' : 'ja'
  applyLang(next)
  refreshToggleBtn()
  langBtn.textContent = next === 'ja' ? 'EN' : 'JP'
  scene3d.refreshTextLabels()
  arView.refreshDirLabels()
  scaleModel?.refreshTextLabels()
  scaleSceneTitle.textContent = t(scaleSceneTitleKey) // data-i18n化していないので手動で出し直す
})

// ---- 24時間シミュレーション ----
// ANIM_DURATION_MS/DAY_MS/playbackは既にファイル冒頭側(状態変数・DOM参照)で定義済み

function getBaseDate(): Date {
  const d = new Date(datetimeInput.value)
  if (!isNaN(d.getTime())) return new Date(d.getFullYear(), d.getMonth(), d.getDate())
  const now = new Date()
  return new Date(now.getFullYear(), now.getMonth(), now.getDate())
}

function applySimMinute(minute: number) {
  const m = Math.max(0, Math.min(1439, minute))
  const h = Math.floor(m / 60)
  const min = Math.floor(m % 60)
  seekbar.value = String(Math.round(m))
  const base = getBaseDate()
  base.setHours(h, min, 0, 0)
  datetimeInput.value = toDatetimeLocal(base)
  update()
}

function stopAnim() {
  playback.pause()
  playBtn.textContent = '▶'
}

function startAnim() {
  // 既存動作を踏襲: シークバーが終端付近(1439分=23:59)にある状態で再生すると先頭に戻る
  const startMinute = parseInt(seekbar.value) || 0
  playback.seekMs((startMinute >= 1439 ? 0 : startMinute) * 60_000)
  playback.play()
  playBtn.textContent = '⏸'
  realtimeCheck.checked = false
  stopRealtime()
}

playBtn.addEventListener('click', () => {
  if (playback.isPlaying) stopAnim()
  else startAnim()
})

seekbar.addEventListener('input', () => {
  stopAnim()
  realtimeCheck.checked = false
  stopRealtime()
  applySimMinute(parseInt(seekbar.value))
})

// 継続的なrAFループ。playback.tick()は再生中でなければ何もしないため、常時回しっぱなしでよい
let lastAnimTime: number | null = null
function animLoop(timestamp: number) {
  requestAnimationFrame(animLoop)
  const dt = lastAnimTime === null ? 0 : (timestamp - lastAnimTime) / 1000
  lastAnimTime = timestamp
  if (!playback.isPlaying) return
  playback.tick(dt)
  applySimMinute(playback.elapsedMilliseconds / 60_000)
  if (!playback.isPlaying) playBtn.textContent = '▶' // 周期終端に達して自動停止した場合
}
requestAnimationFrame(animLoop)

// ---- 3D+2D専用: 日/月/年モードの時間バー（scaleModel3d.tsの時間制御と同じ仕組み）----
// SKYの24hシミュレーション（playback/seekbar/playBtn、上のブロック）とは完全に別状態・別DOM。
// ここで進めた時刻はdatetimeInput.valueへ反映し、既存のupdate()で天体位置に反映させる
type DashboardSimMode = 'day' | 'month' | 'year'
const DASHBOARD_SIM_PERIOD_MS: Record<DashboardSimMode, number> = {
  day: DAY_MS,
  month: 30 * DAY_MS,
  year: 365 * DAY_MS,
}
const DASHBOARD_SIM_REAL_DURATION_MS = 24_000 // 24hシミュレーションと同じ体感速度に揃える
const DASHBOARD_STEP_DELTA_MS: Record<'hour' | 'day' | 'month', number> = {
  hour: 60 * 60 * 1000, day: 24 * 60 * 60 * 1000, month: 30 * 24 * 60 * 60 * 1000,
}
const DASHBOARD_SEEKBAR_MAX = 1000

let dashboardSimMode: DashboardSimMode = 'day'
let dashboardSimAnchorDate = new Date()
const dashboardPlayback = new PlaybackController(DASHBOARD_SIM_PERIOD_MS.day, DASHBOARD_SIM_REAL_DURATION_MS)

const dashboardModeButtons: Record<DashboardSimMode, HTMLButtonElement> = {
  day: document.getElementById('dashboard-mode-day') as HTMLButtonElement,
  month: document.getElementById('dashboard-mode-month') as HTMLButtonElement,
  year: document.getElementById('dashboard-mode-year') as HTMLButtonElement,
}
const dashboardPlaybackPlayBtn = document.getElementById('dashboard-play-btn') as HTMLButtonElement
const dashboardNowBtn = document.getElementById('dashboard-now-btn') as HTMLButtonElement
const dashboardPlaybackSeekbar = document.getElementById('dashboard-seekbar') as HTMLInputElement
const dashboardPlaybackDateLabel = document.getElementById('dashboard-sim-date-label') as HTMLElement

function dashboardCurrentSimDate(): Date {
  return new Date(dashboardSimAnchorDate.getTime() + dashboardPlayback.elapsedMilliseconds)
}

function formatDashboardSimDate(date: Date, mode: DashboardSimMode): string {
  const pad = (n: number) => String(n).padStart(2, '0')
  const dateStr = `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`
  if (mode === 'day') return `${dateStr} ${pad(date.getHours())}:${pad(date.getMinutes())}`
  return dateStr
}

/** 日/月/年モードを切り替える。シークバーは常に現在時刻を起点に先頭へリセットする */
function setDashboardSimMode(mode: DashboardSimMode) {
  dashboardSimMode = mode
  resetDashboardToNow()
}

/** モードは変えず、シミュレーション時刻だけを現在時刻に戻す（NOWボタン） */
function resetDashboardToNow() {
  dashboardSimAnchorDate = new Date()
  dashboardPlayback.setPeriod(DASHBOARD_SIM_PERIOD_MS[dashboardSimMode])
  dashboardPlayback.reset()
  realtimeCheck.checked = false
  stopRealtime()
  applyDashboardSimDate()
}

/** シークバーの範囲に縛られず「今の時刻」そのものを±deltaMs動かす */
function stepDashboardAnchorBy(deltaMs: number) {
  dashboardPlayback.pause()
  dashboardSimAnchorDate = new Date(dashboardSimAnchorDate.getTime() + deltaMs)
  dashboardPlayback.reset()
  realtimeCheck.checked = false
  stopRealtime()
  applyDashboardSimDate()
}

function applyDashboardSimDate() {
  datetimeInput.value = toDatetimeLocal(dashboardCurrentSimDate())
  update()
  updateDashboardPlaybackUI()
}

/** 時間バー(モードボタンの見た目・シークバーの位置・再生ボタンのアイコン・日時ラベル)を同期する */
function updateDashboardPlaybackUI() {
  for (const key of ['day', 'month', 'year'] as const) {
    dashboardModeButtons[key].classList.toggle('active', key === dashboardSimMode)
  }
  dashboardPlaybackPlayBtn.textContent = dashboardPlayback.isPlaying ? '⏸' : '▶'
  dashboardPlaybackSeekbar.value = String(Math.round(dashboardPlayback.fraction * DASHBOARD_SEEKBAR_MAX))
  dashboardPlaybackDateLabel.textContent = formatDashboardSimDate(dashboardCurrentSimDate(), dashboardSimMode)
}

for (const key of ['day', 'month', 'year'] as const) {
  dashboardModeButtons[key].addEventListener('click', () => setDashboardSimMode(key))
}

dashboardNowBtn.addEventListener('click', () => resetDashboardToNow())

dashboardPlaybackPlayBtn.addEventListener('click', () => {
  dashboardPlayback.togglePlay()
  if (dashboardPlayback.isPlaying) {
    realtimeCheck.checked = false
    stopRealtime()
  }
  updateDashboardPlaybackUI()
})

dashboardPlaybackSeekbar.addEventListener('input', () => {
  dashboardPlayback.pause()
  dashboardPlayback.seekFraction(parseInt(dashboardPlaybackSeekbar.value, 10) / DASHBOARD_SEEKBAR_MAX)
  realtimeCheck.checked = false
  stopRealtime()
  applyDashboardSimDate()
})

for (const btn of document.querySelectorAll<HTMLButtonElement>('#dashboard-step-back-b .step-btn, #dashboard-step-fwd-b .step-btn')) {
  const unit = btn.dataset.unit as 'hour' | 'day' | 'month'
  const dir = Number(btn.dataset.dir)
  btn.addEventListener('click', () => stepDashboardAnchorBy(DASHBOARD_STEP_DELTA_MS[unit] * dir))
}

updateDashboardPlaybackUI()

// 継続的なrAFループ（SKY側のanimLoopと同じ仕組みの独立版）
let lastDashboardAnimTime: number | null = null
function dashboardAnimLoop(timestamp: number) {
  requestAnimationFrame(dashboardAnimLoop)
  const dt = lastDashboardAnimTime === null ? 0 : (timestamp - lastDashboardAnimTime) / 1000
  lastDashboardAnimTime = timestamp
  if (!dashboardPlayback.isPlaying) return
  dashboardPlayback.tick(dt)
  applyDashboardSimDate()
}
requestAnimationFrame(dashboardAnimLoop)
