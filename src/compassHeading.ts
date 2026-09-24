// デバイスのコンパス方位（北基準・時計回り、0=北）を取得する共通ロジック。
// ar.tsのhandleAbsolute/handleOrientationと同じセンサー優先順位
// （absolute優先、webkitCompassHeadingはiOS Safari用フォールバック）を踏襲する。

export type HeadingCallback = (headingDeg: number) => void

export class CompassHeadingTracker {
  private hasAbsolute = false
  private onHeading: HeadingCallback
  private readonly handleAbsolute: (e: DeviceOrientationEvent) => void
  private readonly handleOrientation: (e: DeviceOrientationEvent) => void

  constructor(onHeading: HeadingCallback) {
    this.onHeading = onHeading
    this.handleAbsolute = (e: DeviceOrientationEvent) => {
      if (e.alpha === null && e.beta === null && e.gamma === null) return
      this.hasAbsolute = true
      this.onHeading(((360 - (e.alpha ?? 0)) % 360 + 360) % 360)
    }
    this.handleOrientation = (e: DeviceOrientationEvent) => {
      if (this.hasAbsolute) return
      const wk = (e as DeviceOrientationEvent & { webkitCompassHeading?: number }).webkitCompassHeading
      if (e.alpha === null && wk == null) return
      const heading = wk != null ? wk : (360 - (e.alpha ?? 0))
      this.onHeading(((heading % 360) + 360) % 360)
    }
  }

  async start(): Promise<boolean> {
    const DOE = DeviceOrientationEvent as unknown as { requestPermission?: () => Promise<string> }
    if (typeof DOE.requestPermission === 'function') {
      try {
        const perm = await DOE.requestPermission()
        if (perm !== 'granted') return false
      } catch {
        return false
      }
    }
    this.hasAbsolute = false
    window.addEventListener('deviceorientationabsolute', this.handleAbsolute as EventListener, true)
    window.addEventListener('deviceorientation', this.handleOrientation as EventListener, true)
    return true
  }

  stop() {
    window.removeEventListener('deviceorientationabsolute', this.handleAbsolute as EventListener, true)
    window.removeEventListener('deviceorientation', this.handleOrientation as EventListener, true)
  }
}
