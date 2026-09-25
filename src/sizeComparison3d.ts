import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { t } from './i18n'
import { setIcon } from './iconInjector'
import frameAllIconSvg from './icons/frame-all.svg?raw'
import earthTextureUrl from './assets/earth-texture.png'
import moonTextureUrl from './assets/moon-texture.png'

// 天体の大きさ比較ビュー（issue #013）。太陽系の天体を1列に並べ、大きさだけを実際の比率で見せる。
// 距離は実際の値ではなく、見比べやすい一定の間隔で並べる。時間の要素は持たない（静止表示）。
// 単位: 1 = 1000km

type SizeBodyKey =
  | 'sun' | 'mercury' | 'venus' | 'earth' | 'moon' | 'mars'
  | 'jupiter' | 'saturn' | 'uranus' | 'neptune' | 'pluto'

interface SizeBody {
  key: SizeBodyKey
  radius: number
  color: number
  // テクスチャ画像。無い天体は color の単色に陰影を付けて描く。画像を用意したらここに足すだけでよい
  textureUrl?: string
  ring?: { inner: number; outer: number; color: number }
}

const BODIES: Record<SizeBodyKey, SizeBody> = {
  sun:     { key: 'sun',     radius: 696.34,  color: 0xffdd55 },
  mercury: { key: 'mercury', radius: 2.4397,  color: 0x9c9490 },
  venus:   { key: 'venus',   radius: 6.0518,  color: 0xe8d4a0 },
  earth:   { key: 'earth',   radius: 6.371,   color: 0x5b9bff, textureUrl: earthTextureUrl },
  moon:    { key: 'moon',    radius: 1.7374,  color: 0xccd4ee, textureUrl: moonTextureUrl },
  mars:    { key: 'mars',    radius: 3.3895,  color: 0xc1440e },
  jupiter: { key: 'jupiter', radius: 69.911,  color: 0xd9b38c },
  saturn:  { key: 'saturn',  radius: 58.232,  color: 0xe3cf9c, ring: { inner: 74.658, outer: 136.775, color: 0xcdbb8f } },
  uranus:  { key: 'uranus',  radius: 25.362,  color: 0x9fd8e0 },
  neptune: { key: 'neptune', radius: 24.622,  color: 0x4f7fd9 },
  pluto:   { key: 'pluto',   radius: 1.1883,  color: 0xcdb9a5 },
}

// 太陽の後ろに1列に並べる天体（太陽からの距離の順）。月は列に入れず地球の横に置く
const ROW_KEYS: SizeBodyKey[] = ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune', 'pluto']
// 視点ダイアログの並び
const DIALOG_KEYS: SizeBodyKey[] = ['sun', 'mercury', 'venus', 'earth', 'moon', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune', 'pluto']

const GAP = 12 // 天体同士の間隔
const MOON_GAP = 7 // 地球と月の間隔
const SUN_EDGE_VISIBLE = 25 // 全体表示で見せる太陽の縁の幅
// 土星の輪を真横(0度)ではなく少し傾けて見せる。輪の見かけの縦幅は外径×cos(この角度)
const RING_TILT = THREE.MathUtils.degToRad(72)
const FIT_MARGIN = 0.9 // 画面に収める時の余白（画面サイズに対する割合）

// 陰影の付き方。平行光は太陽の方向から当て、環境光で影側も暗くなりすぎないようにする
const DIRECT_LIGHT_INTENSITY = 2.5
const AMBIENT_LIGHT_INTENSITY = 1.2

type Orientation = 'horizontal' | 'vertical'

/** 画面上の範囲（ワールド座標のXY）。天体の見た目の大きさ・土星の輪も含めた外接矩形 */
interface Box { minX: number; maxX: number; minY: number; maxY: number }

export class SizeComparison3D {
  private renderer: THREE.WebGLRenderer
  private scene = new THREE.Scene()
  private camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10000)
  private controls: OrbitControls
  private light = new THREE.DirectionalLight(0xffffff, DIRECT_LIGHT_INTENSITY)
  private meshByKey = {} as Record<SizeBodyKey, THREE.Mesh>
  private labelByKey = {} as Record<SizeBodyKey, HTMLDivElement>
  private orientation: Orientation | null = null
  private width = 0
  private height = 0
  private rafId: number | null = null
  private cleanupFns: Array<() => void> = []

  private labelsLayer: HTMLElement
  private viewDialog = document.getElementById('size-view-dialog') as HTMLDialogElement
  private viewList = document.getElementById('size-view-list') as HTMLElement

  constructor(private canvas: HTMLCanvasElement) {
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
    this.renderer.setPixelRatio(window.devicePixelRatio)
    this.renderer.setClearColor(0x05051a)

    // 正投影カメラ。frustumを画面のピクセル数で取り、camera.zoom = 1単位あたりのピクセル数として扱う
    this.camera.position.set(0, 0, 5000)
    this.controls = new OrbitControls(this.camera, canvas)
    this.controls.enableRotate = false
    this.controls.screenSpacePanning = true
    this.controls.zoomToCursor = true
    this.controls.mouseButtons = { LEFT: THREE.MOUSE.PAN, MIDDLE: THREE.MOUSE.DOLLY, RIGHT: THREE.MOUSE.PAN }
    this.controls.touches = { ONE: THREE.TOUCH.PAN, TWO: THREE.TOUCH.DOLLY_PAN }
    this.controls.minZoom = 0.05
    this.controls.maxZoom = 2000

    this.scene.add(this.light)
    this.scene.add(new THREE.AmbientLight(0xffffff, AMBIENT_LIGHT_INTENSITY))
    this.createBodies()

    this.labelsLayer = document.getElementById('size-labels') as HTMLElement
    this.createLabels()

    const fitBtn = document.getElementById('size-fit-btn') as HTMLButtonElement
    setIcon(fitBtn, frameAllIconSvg)
    this.on(fitBtn, 'click', () => this.frameAll())
    this.setupViewDialog()
    this.on(window, 'keydown', (e) => {
      if (this.viewDialog.open) return
      if ((e as KeyboardEvent).key === 'Home') this.frameAll()
    })

    const resizeObserver = new ResizeObserver(() => this.handleResize())
    resizeObserver.observe(canvas.parentElement!)
    this.cleanupFns.push(() => resizeObserver.disconnect())

    this.startLoop()
  }

  private on(target: EventTarget, type: string, handler: EventListener) {
    target.addEventListener(type, handler)
    this.cleanupFns.push(() => target.removeEventListener(type, handler))
  }

  private createBodies() {
    const loader = new THREE.TextureLoader()
    for (const body of Object.values(BODIES)) {
      const segments = body.radius > 20 ? 64 : 32
      const material = body.key === 'sun'
        ? new THREE.MeshBasicMaterial({ color: body.color })
        : new THREE.MeshLambertMaterial(
          body.textureUrl ? { map: loader.load(body.textureUrl) } : { color: body.color }
        )
      const mesh = new THREE.Mesh(new THREE.SphereGeometry(body.radius, segments, segments * 3 / 4), material)
      if (body.ring) {
        const ring = new THREE.Mesh(
          new THREE.RingGeometry(body.ring.inner, body.ring.outer, 128),
          new THREE.MeshLambertMaterial({
            color: body.ring.color, side: THREE.DoubleSide, transparent: true, opacity: 0.85,
          })
        )
        ring.rotation.x = RING_TILT
        mesh.add(ring)
      }
      this.scene.add(mesh)
      this.meshByKey[body.key] = mesh
    }
  }

  /** 画面上での天体の半分の幅・高さ（土星は輪を含む）。輪の長軸は常に画面の横方向 */
  private static halfSize(body: SizeBody): { x: number; y: number } {
    if (!body.ring) return { x: body.radius, y: body.radius }
    return { x: body.ring.outer, y: Math.max(body.radius, body.ring.outer * Math.cos(RING_TILT)) }
  }

  /**
   * 並べる向きに合わせて天体を配置する。横なら太陽が左で右へ、縦なら太陽が上で下へ並べる。
   * 太陽の縁（列の先頭側の端）を原点に置く
   */
  private layout(orientation: Orientation) {
    this.orientation = orientation
    const horizontal = orientation === 'horizontal'
    // 並びの方向・月を置く方向（並びと90度）
    const axis = horizontal ? new THREE.Vector3(1, 0, 0) : new THREE.Vector3(0, -1, 0)
    const cross = horizontal ? new THREE.Vector3(0, -1, 0) : new THREE.Vector3(1, 0, 0)
    const along = (body: SizeBody) => {
      const half = SizeComparison3D.halfSize(body)
      return horizontal ? half.x : half.y
    }

    this.meshByKey.sun.position.copy(axis).multiplyScalar(-BODIES.sun.radius)
    let s = 0
    for (const key of ROW_KEYS) {
      const extent = along(BODIES[key])
      s += GAP + extent
      this.meshByKey[key].position.copy(axis).multiplyScalar(s)
      s += extent
    }
    this.meshByKey.moon.position.copy(this.meshByKey.earth.position)
      .addScaledVector(cross, BODIES.earth.radius + MOON_GAP + BODIES.moon.radius)

    // 光は太陽の方向（並びの先頭側）から、少し手前寄りに当てる
    this.light.position.copy(axis).multiplyScalar(-1).add(new THREE.Vector3(0, 0, 1.2))
  }

  private bodyBox(key: SizeBodyKey): Box {
    const p = this.meshByKey[key].position
    const half = SizeComparison3D.halfSize(BODIES[key])
    return { minX: p.x - half.x, maxX: p.x + half.x, minY: p.y - half.y, maxY: p.y + half.y }
  }

  /** 太陽は大きすぎるため、縁だけを範囲に入れる（全体表示・水星に寄る時） */
  private sunEdgeBox(): Box {
    return this.orientation === 'horizontal'
      ? { minX: -SUN_EDGE_VISIBLE, maxX: 0, minY: 0, maxY: 0 }
      : { minX: 0, maxX: 0, minY: 0, maxY: SUN_EDGE_VISIBLE }
  }

  private fitBoxes(boxes: Box[]) {
    if (this.width === 0 || this.height === 0) return
    const box = boxes.reduce((a, b) => ({
      minX: Math.min(a.minX, b.minX), maxX: Math.max(a.maxX, b.maxX),
      minY: Math.min(a.minY, b.minY), maxY: Math.max(a.maxY, b.maxY),
    }))
    const w = Math.max(box.maxX - box.minX, 1e-6)
    const h = Math.max(box.maxY - box.minY, 1e-6)
    const zoom = Math.min(this.width * FIT_MARGIN / w, this.height * FIT_MARGIN / h)
    const cx = (box.minX + box.maxX) / 2
    const cy = (box.minY + box.maxY) / 2
    this.controls.target.set(cx, cy, 0)
    this.camera.position.set(cx, cy, 5000)
    this.camera.zoom = THREE.MathUtils.clamp(zoom, this.controls.minZoom, this.controls.maxZoom)
    this.camera.updateProjectionMatrix()
    this.controls.update()
  }

  /** 並び全体（太陽は縁だけ）が収まるようにする */
  frameAll() {
    this.fitBoxes([this.sunEdgeBox(), ...ROW_KEYS.map(k => this.bodyBox(k)), this.bodyBox('moon')])
  }

  /** 天体に寄る。その天体と両隣の天体（地球・月は互いも）が収まる大きさにして、大きさを対比できるようにする */
  private focusOn(key: SizeBodyKey) {
    if (key === 'sun') {
      this.fitBoxes([this.bodyBox('sun'), this.bodyBox(ROW_KEYS[0])])
      return
    }
    const rowKey = key === 'moon' ? 'earth' : key
    const i = ROW_KEYS.indexOf(rowKey)
    const boxes = [this.bodyBox(rowKey)]
    boxes.push(i === 0 ? this.sunEdgeBox() : this.bodyBox(ROW_KEYS[i - 1]))
    if (i < ROW_KEYS.length - 1) boxes.push(this.bodyBox(ROW_KEYS[i + 1]))
    if (rowKey === 'earth') boxes.push(this.bodyBox('moon'))
    this.fitBoxes(boxes)
  }

  private labelText(key: SizeBodyKey): string {
    return key === 'pluto' ? `${t('label-pluto')}${t('size-dwarf-note')}` : t(`label-${key}`)
  }

  private createLabels() {
    for (const key of Object.keys(BODIES) as SizeBodyKey[]) {
      const el = document.createElement('div')
      el.className = key === 'sun' ? 'size-label size-label-sun' : 'size-label'
      this.labelsLayer.appendChild(el)
      this.labelByKey[key] = el
    }
    this.refreshTextLabels()
    this.cleanupFns.push(() => { this.labelsLayer.innerHTML = '' })
  }

  refreshTextLabels() {
    for (const key of Object.keys(BODIES) as SizeBodyKey[]) {
      this.labelByKey[key].textContent = this.labelText(key)
    }
    this.renderViewDialogItems()
  }

  /** ラベルを天体の横に置く。横並びなら上、縦並びなら左（月は地球と反対側）。太陽は見えている縁の上 */
  private updateLabels() {
    const zoom = this.camera.zoom
    const target = this.controls.target
    const toScreen = (x: number, y: number) => ({
      sx: this.width / 2 + (x - target.x) * zoom,
      sy: this.height / 2 - (y - target.y) * zoom,
    })
    const horizontal = this.orientation === 'horizontal'
    for (const key of Object.keys(BODIES) as SizeBodyKey[]) {
      const el = this.labelByKey[key]
      if (key === 'sun') {
        // 太陽の縁の見えている部分の中ほどに置く
        const edge = horizontal ? toScreen(-SUN_EDGE_VISIBLE / 2, target.y) : toScreen(target.x, SUN_EDGE_VISIBLE / 2)
        el.style.transform = `translate(${edge.sx}px, ${edge.sy}px) translate(-50%, -50%)`
        continue
      }
      const p = this.meshByKey[key].position
      const half = SizeComparison3D.halfSize(BODIES[key])
      const { sx, sy } = toScreen(p.x, p.y)
      let transform: string
      if (key === 'moon') {
        transform = horizontal
          ? `translate(${sx}px, ${sy + half.y * zoom + 4}px) translate(-50%, 0)`
          : `translate(${sx + half.x * zoom + 6}px, ${sy}px) translate(0, -50%)`
      } else {
        transform = horizontal
          ? `translate(${sx}px, ${sy - half.y * zoom - 4}px) translate(-50%, -100%)`
          : `translate(${sx - half.x * zoom - 6}px, ${sy}px) translate(-100%, -50%)`
      }
      el.style.transform = transform
    }
  }

  private setupViewDialog() {
    this.on(document.getElementById('size-view-btn')!, 'click', () => this.viewDialog.showModal())
    this.on(document.getElementById('size-view-dialog-close')!, 'click', () => this.viewDialog.close())
    // ダイアログの外側（::backdrop）を押した時は、イベントの対象がdialog要素自体になる
    this.on(this.viewDialog, 'click', (e) => {
      if (e.target === this.viewDialog) this.viewDialog.close()
    })
    this.cleanupFns.push(() => {
      if (this.viewDialog.open) this.viewDialog.close()
      this.viewList.innerHTML = ''
    })
  }

  private renderViewDialogItems() {
    this.viewList.innerHTML = ''
    const makeGroup = () => {
      const group = document.createElement('div')
      group.className = 'scale-view-dialog-list'
      this.viewList.appendChild(group)
      return group
    }
    const makeItem = (group: HTMLElement, text: string, color: string | null, onSelect: () => void) => {
      const btn = document.createElement('button')
      if (color) {
        const dot = document.createElement('span')
        dot.className = 'body-dot'
        dot.style.setProperty('--dot', color)
        btn.appendChild(dot)
      }
      btn.appendChild(document.createTextNode(text))
      btn.addEventListener('click', () => {
        onSelect()
        this.viewDialog.close()
      })
      group.appendChild(btn)
    }

    makeItem(makeGroup(), t('size-view-all'), null, () => this.frameAll())
    const bodies = makeGroup()
    for (const key of DIALOG_KEYS) {
      const color = `#${BODIES[key].color.toString(16).padStart(6, '0')}`
      makeItem(bodies, t('size-focus').replace('{name}', t(`label-${key}`)), color, () => this.focusOn(key))
    }
  }

  private handleResize() {
    const parent = this.canvas.parentElement!
    const w = parent.clientWidth
    const h = parent.clientHeight
    if (w === 0 || h === 0) return
    this.width = w
    this.height = h
    this.renderer.setSize(w, h)
    this.camera.left = -w / 2
    this.camera.right = w / 2
    this.camera.top = h / 2
    this.camera.bottom = -h / 2
    this.camera.updateProjectionMatrix()

    // 画面の長いほうに沿って並べる。向きが変わった時（初回を含む）だけ並べ直して全体表示に戻す
    const orientation: Orientation = w >= h ? 'horizontal' : 'vertical'
    if (orientation !== this.orientation) {
      this.layout(orientation)
      this.frameAll()
    }
  }

  private startLoop() {
    const loop = () => {
      this.rafId = requestAnimationFrame(loop)
      if (this.width === 0) return
      this.updateLabels()
      this.renderer.render(this.scene, this.camera)
    }
    loop()
  }

  dispose() {
    if (this.rafId !== null) cancelAnimationFrame(this.rafId)
    for (const cleanup of this.cleanupFns) cleanup()
    this.cleanupFns = []
    this.controls.dispose()
    this.scene.traverse(obj => {
      if (obj instanceof THREE.Mesh) {
        obj.geometry.dispose()
        const material = obj.material as THREE.MeshBasicMaterial | THREE.MeshLambertMaterial
        material.map?.dispose()
        material.dispose()
      }
    })
    this.renderer.dispose()
  }
}
