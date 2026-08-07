/**
 * 「ある長さの周期(periodMs)を、実時間で何ミリ秒かけて再生し切るか(realDurationMs)」を
 * 管理する汎用の再生コントローラー。DOM操作は一切行わない。シークバー・再生/停止ボタンを
 * 持つ画面（24hシミュレーション、スケールモデルの日/月/年モード等）で共通して使うことを想定。
 */
export class PlaybackController {
  private elapsedMs = 0
  private playing = false

  constructor(private periodMs: number, private realDurationMs: number) {}

  get fraction(): number {
    return this.periodMs === 0 ? 0 : this.elapsedMs / this.periodMs
  }

  get elapsedMilliseconds(): number {
    return this.elapsedMs
  }

  get isPlaying(): boolean {
    return this.playing
  }

  /** 周期の長さを変更する（現在の再生位置・再生状態は変えない） */
  setPeriod(periodMs: number) {
    this.periodMs = periodMs
  }

  seekFraction(f: number) {
    this.elapsedMs = Math.max(0, Math.min(1, f)) * this.periodMs
  }

  seekMs(ms: number) {
    this.elapsedMs = Math.max(0, Math.min(this.periodMs, ms))
  }

  play() {
    if (this.elapsedMs >= this.periodMs) this.elapsedMs = 0
    this.playing = true
  }

  pause() {
    this.playing = false
  }

  togglePlay() {
    if (this.playing) this.pause(); else this.play()
  }

  /** 再生位置・再生状態を先頭に戻す */
  reset() {
    this.elapsedMs = 0
    this.playing = false
  }

  /** 毎フレーム呼ぶ。dtSecは実時間の経過秒数。周期の終端に達したら自動的に停止する */
  tick(dtSec: number) {
    if (!this.playing) return
    this.elapsedMs += dtSec * 1000 * (this.periodMs / this.realDurationMs)
    if (this.elapsedMs >= this.periodMs) {
      this.elapsedMs = this.periodMs
      this.playing = false
    }
  }
}
