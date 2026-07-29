import * as THREE from 'three'
import type { AstroData } from './astroCalc'
import { t, getLang } from './i18n'
import { positionToXYZ, raDecToAltAz, ZODIAC_CONSTELLATIONS, FAMOUS_CONSTELLATIONS } from './astroCalc'

const R = 9
const DRAG_DEG_PER_PX = 0.3

export class ARView {
  private renderer: THREE.WebGLRenderer
  private scene: THREE.Scene
  private camera: THREE.PerspectiveCamera
  private sunMesh: THREE.Mesh
  private moonMesh: THREE.Mesh
  private sunLabel: THREE.Sprite
  private moonLabel: THREE.Sprite
  private constGroup: THREE.Group
  private rafId: number | null = null
  private active = false
  private hasAbsolute = false

  // ジャイロ値
  private alpha = 0
  private beta  = 0
  private gamma = 0

  // モード管理
  private gyroReceived = false
  private manualMode = false
  private manualYaw   = 0   // 方位角 (0=北, 時計回り)
  private manualPitch = 0   // 仰角  (0=水平, +上)

  // ドラッグ
  private dragActive = false
  private lastX = 0
  private lastY = 0

  // HUD表示要素
  private modeEl: HTMLElement | null = null

  // 方位スプライト参照（言語更新用）
  private dirSprites: Array<{ sprite: THREE.Sprite; az: number }> = []

  // イベントハンドラ参照（removeEventListener用）
  private readonly onDown: (e: PointerEvent) => void
  private readonly onMove: (e: PointerEvent) => void
  private readonly onUp:   (e: PointerEvent) => void

  constructor(canvas: HTMLCanvasElement) {
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
    this.renderer.setPixelRatio(window.devicePixelRatio)
    this.renderer.setClearColor(0x02020f)
    this.scene = new THREE.Scene()
    this.camera = new THREE.PerspectiveCamera(70, 1, 0.1, 100)
    this.camera.position.set(0, 0, 0)

    this.buildStars()
    this.constGroup = new THREE.Group()
    this.scene.add(this.constGroup)

    const sunGeo = new THREE.SphereGeometry(0.35, 16, 16)
    this.sunMesh = new THREE.Mesh(sunGeo, new THREE.MeshBasicMaterial({ color: 0xffee44 }))
    this.scene.add(this.sunMesh)
    this.sunLabel = this.makeLabel(t('label-sun'), '#ffee44')
    this.scene.add(this.sunLabel)

    const moonGeo = new THREE.SphereGeometry(0.22, 16, 16)
    this.moonMesh = new THREE.Mesh(moonGeo, new THREE.MeshBasicMaterial({ color: 0xccd4ee }))
    this.scene.add(this.moonMesh)
    this.moonLabel = this.makeLabel(t('label-moon'), '#ccd4ee')
    this.scene.add(this.moonLabel)

    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(R, 0.012, 8, 128),
      new THREE.MeshBasicMaterial({ color: 0x33aa55, transparent: true, opacity: 0.6 })
    )
    ring.rotation.x = Math.PI / 2
    this.scene.add(ring)

    const arDirs = [
      { key: 'dir-north', az: 0 }, { key: 'dir-south', az: 180 },
      { key: 'dir-east',  az: 90 }, { key: 'dir-west',  az: 270 },
    ]
    for (const d of arDirs) {
      const text = t(d.key)
      const sp = this.makeLabel(text, d.key === 'dir-north' ? '#ff7777' : '#66cc77', 24)
      const azRad = d.az * Math.PI / 180
      const x = Math.sin(azRad) * R * 0.98
      const z = -Math.cos(azRad) * R * 0.98
      sp.position.set(x, -0.3, z)
      sp.scale.set(1.6, 0.8, 0.8)
      this.scene.add(sp)
      this.dirSprites.push({ sprite: sp, az: d.az })
    }

    this.onDown = (e) => {
      this.dragActive = true
      this.lastX = e.clientX
      this.lastY = e.clientY
      ;(e.target as Element).setPointerCapture(e.pointerId)
    }
    this.onMove = (e) => {
      if (!this.dragActive || !this.manualMode) return
      const dx = e.clientX - this.lastX
      const dy = e.clientY - this.lastY
      this.lastX = e.clientX
      this.lastY = e.clientY
      this.manualYaw   = ((this.manualYaw - dx * DRAG_DEG_PER_PX) + 360) % 360
      this.manualPitch = Math.max(-85, Math.min(85, this.manualPitch - dy * DRAG_DEG_PER_PX))
    }
    this.onUp = () => { this.dragActive = false }
  }

  private buildStars() {
    // ランダム星屑は削除済み。将来的に実際の恒星データで置き換え予定
  }

  private makeLabel(text: string, color: string, fontSize = 22): THREE.Sprite {
    const c = document.createElement('canvas')
    c.width = 256; c.height = 64
    const ctx = c.getContext('2d')!
    ctx.font = `bold ${fontSize}px Arial`
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.shadowColor = '#000'
    ctx.shadowBlur = 8
    ctx.fillStyle = color
    ctx.fillText(text, 128, 32)
    const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(c), transparent: true }))
    sp.scale.set(1.6, 0.5, 0.5)
    return sp
  }

  async start(canvas: HTMLCanvasElement): Promise<boolean> {
    const DOE = DeviceOrientationEvent as unknown as { requestPermission?: () => Promise<string> }
    if (typeof DOE.requestPermission === 'function') {
      try {
        const perm = await DOE.requestPermission()
        if (perm !== 'granted') {
          alert('\u30BB\u30F3\u30B5\u30FC\u306E\u4F7F\u7528\u304C\u8A31\u53EF\u3055\u308C\u307E\u305B\u3093\u3067\u3057\u305F\u3002')
          return false
        }
      } catch {
        return false
      }
    }

    this.gyroReceived = false
    this.manualMode   = false
    this.hasAbsolute  = false
    this.manualYaw    = 0
    this.manualPitch  = 0

    window.addEventListener('deviceorientationabsolute', this.handleAbsolute as EventListener, true)
    window.addEventListener('deviceorientation',         this.handleOrientation as EventListener, true)

    // 1.5秒以内にジャイロが来なければ手動モードへ
    setTimeout(() => {
      if (!this.gyroReceived) {
        this.manualMode = true
        this.updateModeEl()
      }
    }, 1500)

    canvas.addEventListener('pointerdown',   this.onDown)
    canvas.addEventListener('pointermove',   this.onMove)
    canvas.addEventListener('pointerup',     this.onUp)
    canvas.addEventListener('pointercancel', this.onUp)

    this.modeEl = document.getElementById('skyview-mode')

    this.active = true
    this.resize(canvas)
    window.addEventListener('resize', () => this.resize(canvas))
    this.loop()
    return true
  }

  stop() {
    this.active = false
    if (this.rafId !== null) { cancelAnimationFrame(this.rafId); this.rafId = null }
    window.removeEventListener('deviceorientationabsolute', this.handleAbsolute as EventListener, true)
    window.removeEventListener('deviceorientation',         this.handleOrientation as EventListener, true)
    const canvas = this.renderer.domElement
    canvas.removeEventListener('pointerdown',   this.onDown)
    canvas.removeEventListener('pointermove',   this.onMove)
    canvas.removeEventListener('pointerup',     this.onUp)
    canvas.removeEventListener('pointercancel', this.onUp)
  }

  setData(data: AstroData, lat?: number, lng?: number, date?: Date) {
    const [sx, sy, sz] = positionToXYZ(data.sun.azimuthRad, data.sun.altitudeRad, R)
    this.sunMesh.position.set(sx, sy, sz)
    this.sunLabel.position.set(sx, sy + 0.5, sz)
    const sm = this.sunMesh.material as THREE.MeshBasicMaterial
    sm.opacity = data.sun.altitudeRad < 0 ? 0.3 : 1.0
    sm.transparent = data.sun.altitudeRad < 0

    const [mx, my, mz] = positionToXYZ(data.moon.azimuthRad, data.moon.altitudeRad, R)
    this.moonMesh.position.set(mx, my, mz)
    this.moonLabel.position.set(mx, my + 0.38, mz)
    const mm = this.moonMesh.material as THREE.MeshBasicMaterial
    mm.opacity = data.moon.altitudeRad < 0 ? 0.3 : 1.0
    mm.transparent = data.moon.altitudeRad < 0

    if (lat !== undefined && lng !== undefined && date) {
      this.updateConstellations(lat, lng, date)
    }
  }

  private updateConstellations(lat: number, lng: number, date: Date) {
    this.constGroup.clear()
    const allConst = [...ZODIAC_CONSTELLATIONS, ...FAMOUS_CONSTELLATIONS]
    for (const c of allConst) {
      const xyz: Array<[number, number, number]> = []
      for (const [ra, dec] of c.stars) {
        const { altRad, azRad } = raDecToAltAz(ra, dec, lat, lng, date)
        xyz.push(positionToXYZ(azRad, altRad, R))
      }
      const pos = new Float32Array(xyz.length * 3)
      xyz.forEach(([x, y, z], i) => { pos[i*3]=x; pos[i*3+1]=y; pos[i*3+2]=z })
      const geo = new THREE.BufferGeometry()
      geo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
      this.constGroup.add(new THREE.Points(geo,
        new THREE.PointsMaterial({ color: 0xffffaa, size: 0.09 })))

      if (c.lines.length > 0) {
        const linePts: number[] = []
        for (const [a, b] of c.lines) {
          if (a < xyz.length && b < xyz.length) {
            linePts.push(...xyz[a], ...xyz[b])
          }
        }
        if (linePts.length > 0) {
          const lGeo = new THREE.BufferGeometry()
          lGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(linePts), 3))
          this.constGroup.add(new THREE.LineSegments(lGeo,
            new THREE.LineBasicMaterial({ color: 0x886633, transparent: true, opacity: 0.5 })))
        }
      }
      // 星座名ラベル（星の重心）
      if (xyz.length > 0) {
        const cx = xyz.reduce((s, p) => s + p[0], 0) / xyz.length
        const cy = xyz.reduce((s, p) => s + p[1], 0) / xyz.length
        const cz = xyz.reduce((s, p) => s + p[2], 0) / xyz.length
        const label = this.makeLabel(getLang() === 'en' ? c.nameEn : c.nameJa, '#aaddff', 22)
        label.position.set(cx, cy + 0.4, cz)
        label.scale.set(1.8, 0.56, 0.56)
        this.constGroup.add(label)
      }
    }
  }

  private handleAbsolute = (e: DeviceOrientationEvent) => {
    if (!this.gyroReceived) { this.gyroReceived = true; this.manualMode = false; this.updateModeEl() }
    this.hasAbsolute = true
    this.alpha = e.alpha ?? 0
    this.beta  = e.beta  ?? 0
    this.gamma = e.gamma ?? 0
  }

  private handleOrientation = (e: DeviceOrientationEvent) => {
    if (this.hasAbsolute) return
    if (!this.gyroReceived) { this.gyroReceived = true; this.manualMode = false; this.updateModeEl() }
    const wk = (e as DeviceOrientationEvent & { webkitCompassHeading?: number }).webkitCompassHeading
    this.alpha = wk != null ? (360 - wk) % 360 : (e.alpha ?? 0)
    this.beta  = e.beta  ?? 0
    this.gamma = e.gamma ?? 0
  }

  private updateModeEl() {
    if (this.modeEl) {
      this.modeEl.textContent = this.manualMode ? t('skyview-manual') : t('skyview-gyro')
    }
  }

  refreshDirLabels() {
    const dirKeys = ['dir-north', 'dir-south', 'dir-east', 'dir-west']
    for (let i = 0; i < this.dirSprites.length; i++) {
      const { sprite } = this.dirSprites[i]
      const text = t(dirKeys[i])
      const color = i === 0 ? '#ff7777' : '#66cc77'
      const c = document.createElement('canvas')
      c.width = 256; c.height = 64
      const ctx = c.getContext('2d')!
      ctx.font = 'bold 24px Arial'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.shadowColor = '#000'
      ctx.shadowBlur = 8
      ctx.fillStyle = color
      ctx.fillText(text, 128, 32)
      const mat = sprite.material as THREE.SpriteMaterial
      mat.map?.dispose()
      mat.map = new THREE.CanvasTexture(c)
      mat.needsUpdate = true
    }

    // 太陽・月ラベルも更新
    const rewrite = (sprite: THREE.Sprite, text: string, color: string) => {
      const c = document.createElement('canvas')
      c.width = 256; c.height = 64
      const ctx = c.getContext('2d')!
      ctx.font = 'bold 22px Arial'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.shadowColor = '#000'
      ctx.shadowBlur = 8
      ctx.fillStyle = color
      ctx.fillText(text, 128, 32)
      const mat = sprite.material as THREE.SpriteMaterial
      mat.map?.dispose()
      mat.map = new THREE.CanvasTexture(c)
      mat.needsUpdate = true
    }
    rewrite(this.sunLabel,  t('label-sun'),  '#ffee44')
    rewrite(this.moonLabel, t('label-moon'), '#ccd4ee')
  }

  private loop = () => {
    if (!this.active) return
    this.rafId = requestAnimationFrame(this.loop)
    if (this.manualMode) this.applyManual()
    else                 this.applyGyro()
    this.renderer.render(this.scene, this.camera)
  }

  private applyGyro() {
    const euler = new THREE.Euler(
      THREE.MathUtils.degToRad(this.beta),
      THREE.MathUtils.degToRad(this.alpha),
      THREE.MathUtils.degToRad(-this.gamma),
      'YXZ'
    )
    const q1 = new THREE.Quaternion(-Math.sqrt(0.5), 0, 0, Math.sqrt(0.5))
    this.camera.quaternion.setFromEuler(euler)
    this.camera.quaternion.multiply(q1)
  }

  private applyManual() {
    // applyGyroと同じ式で: beta=90-pitch（水平時beta=90）
    const euler = new THREE.Euler(
      THREE.MathUtils.degToRad(90 - this.manualPitch),
      THREE.MathUtils.degToRad(this.manualYaw),
      0,
      'YXZ'
    )
    const q1 = new THREE.Quaternion(-Math.sqrt(0.5), 0, 0, Math.sqrt(0.5))
    this.camera.quaternion.setFromEuler(euler)
    this.camera.quaternion.multiply(q1)
  }

  private resize(canvas: HTMLCanvasElement) {
    const w = canvas.clientWidth
    const h = canvas.clientHeight
    if (w === 0 || h === 0) return
    this.renderer.setSize(w, h, false)
    this.camera.aspect = w / h
    this.camera.updateProjectionMatrix()
  }
}
