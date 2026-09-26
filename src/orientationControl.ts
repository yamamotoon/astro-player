import * as THREE from 'three'

// 天体の向きを操作するロジック（向きの状態とドラッグ入力）。描画は持たない（表示はorientationGizmoView.ts）

export interface OrientationControlOptions {
  initialTiltDeg: number // 北極を手前へ倒す初期角度
  maxTiltDeg: number     // 倒せる上限（上下とも）
  degPerPx: number       // ドラッグ量あたりの回転角
}

const DEFAULT_OPTIONS: OrientationControlOptions = {
  initialTiltDeg: 0,
  maxTiltDeg: 90,
  degPerPx: 1.5,
}

export class OrientationControl {
  private options: OrientationControlOptions
  private tiltDeg: number
  private spinDeg = 0
  private quat = new THREE.Quaternion()
  private cleanupFns: Array<() => void> = []

  /**
   * target上の上下のドラッグで北極を手前・奥へ倒し、左右のドラッグで自転の向きに回す。
   * 向きが変わるたびにonChangeを呼ぶ（作成直後にも初期の向きで1回呼ぶ）
   */
  constructor(
    private target: HTMLElement,
    private onChange: (orientation: THREE.Quaternion) => void,
    options: Partial<OrientationControlOptions> = {},
  ) {
    this.options = { ...DEFAULT_OPTIONS, ...options }
    this.tiltDeg = this.options.initialTiltDeg
    this.setupDrag()
    this.notify()
  }

  private on(target: EventTarget, type: string, handler: EventListener) {
    target.addEventListener(type, handler)
    this.cleanupFns.push(() => target.removeEventListener(type, handler))
  }

  private setupDrag() {
    let drag: { id: number; x: number; y: number } | null = null
    this.on(this.target, 'pointerdown', (e) => {
      const pe = e as PointerEvent
      if (drag) return
      this.target.setPointerCapture(pe.pointerId)
      drag = { id: pe.pointerId, x: pe.clientX, y: pe.clientY }
    })
    this.on(this.target, 'pointermove', (e) => {
      const pe = e as PointerEvent
      if (!drag || pe.pointerId !== drag.id) return
      const { degPerPx, maxTiltDeg } = this.options
      this.spinDeg += (pe.clientX - drag.x) * degPerPx
      this.tiltDeg = THREE.MathUtils.clamp(this.tiltDeg + (pe.clientY - drag.y) * degPerPx, -maxTiltDeg, maxTiltDeg)
      drag.x = pe.clientX
      drag.y = pe.clientY
      this.notify()
    })
    const end = (e: Event) => {
      if (drag && (e as PointerEvent).pointerId === drag.id) drag = null
    }
    this.on(this.target, 'pointerup', end)
    this.on(this.target, 'pointercancel', end)
  }

  private notify() {
    this.quat.setFromEuler(new THREE.Euler(
      THREE.MathUtils.degToRad(this.tiltDeg), THREE.MathUtils.degToRad(this.spinDeg), 0, 'XYZ'
    ))
    this.onChange(this.quat)
  }

  dispose() {
    for (const cleanup of this.cleanupFns) cleanup()
    this.cleanupFns = []
  }
}
