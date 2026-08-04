import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { t } from './i18n'

// ---- 実際の物理値(km)。月半径=1になるよう、常にこれらから比率を算出する ----
const MOON_RADIUS_KM = 1737
const EARTH_RADIUS_KM = 6371
const SUN_RADIUS_KM = 696000
const EARTH_MOON_DIST_KM = 384400
const EARTH_SUN_DIST_KM = 149600000

const MOON_R = MOON_RADIUS_KM / MOON_RADIUS_KM
const EARTH_R = EARTH_RADIUS_KM / MOON_RADIUS_KM
const SUN_R = SUN_RADIUS_KM / MOON_RADIUS_KM
const EARTH_MOON_DIST = EARTH_MOON_DIST_KM / MOON_RADIUS_KM
const EARTH_SUN_DIST = EARTH_SUN_DIST_KM / MOON_RADIUS_KM

// 太陽を原点（この系で唯一動かない基準点）、Y=公転面(黄道面=XZ平面)の法線、
// 地球は+X方向、月は地球から+Z方向（v1は単純な固定配置。軌道運動は未実装）
const SUN_POS = new THREE.Vector3(0, 0, 0)
const EARTH_POS = new THREE.Vector3(EARTH_SUN_DIST, 0, 0)
const MOON_POS = new THREE.Vector3(EARTH_SUN_DIST, 0, EARTH_MOON_DIST)

// 地球の自転軸: 公転面の法線(Y)に対して実際の地軸傾斜23.44度だけ傾ける
const EARTH_AXIAL_TILT_DEG = 23.44
const EARTH_AXIS = new THREE.Vector3(0, 1, 0)
  .applyAxisAngle(new THREE.Vector3(0, 0, 1), THREE.MathUtils.degToRad(EARTH_AXIAL_TILT_DEG))

// クリックで注目対象を切り替えられる天体
const FOCUSABLE = [
  { pos: SUN_POS, radius: SUN_R },
  { pos: EARTH_POS, radius: EARTH_R },
  { pos: MOON_POS, radius: MOON_R },
] as const

export class ScaleModel3D {
  private renderer: THREE.WebGLRenderer
  private scene: THREE.Scene
  private camera: THREE.PerspectiveCamera
  private controls: OrbitControls
  private rafId: number | null = null
  private raycaster = new THREE.Raycaster()

  private sunMesh: THREE.Mesh
  private earthMesh: THREE.Mesh
  private moonMesh: THREE.Mesh

  private sunLabel: THREE.Sprite
  private earthLabel: THREE.Sprite
  private moonLabel: THREE.Sprite

  // 各ラベルのcanvas(256x64)全体に対する、実際に描画された文字の大きさの比率
  // （ctx.measureText()で実測。当たり判定・引き出し線の距離計算に使う。updateLabels()参照）
  private sunLabelFrac = { halfWFrac: 1, halfHFrac: 1 }
  private earthLabelFrac = { halfWFrac: 1, halfHFrac: 1 }
  private moonLabelFrac = { halfWFrac: 1, halfHFrac: 1 }

  // 天体の実座標とラベル位置の関係が分かるよう結ぶ引き出し線
  private sunLeader: THREE.Line
  private earthLeader: THREE.Line
  private moonLeader: THREE.Line

  // デバッグ用: 当たり判定・引き出し線の距離計算に実際に使っている「ラベルのサイズ」
  // (textHalfWs/textHalfHs、ctx.measureText()の実測値)を枠線で可視化する。
  // ScaleModel3D.DEBUG_SHOW_LABEL_SIZE を切り替えるだけでON/OFFできる
  private debugLabelSizeBoxes: THREE.LineLoop[] = []

  // カメラ情報の常時表示UI（テキスト）
  private debugHudEl = document.getElementById('scale-debug-hud')

  // カメラの向きインジケーター: メインの3Dワールドとは独立した固定サイズのミニビューポートに
  // 座標軸モデルを描画し、メインカメラの「向き」だけを毎フレーム同期する（位置・ズームは無視）
  private gizmoScene: THREE.Scene
  private gizmoCamera: THREE.PerspectiveCamera
  private gizmoRenderer: THREE.WebGLRenderer | null = null
  private gizmoCanvas = document.getElementById('scale-angle-gizmo') as HTMLCanvasElement | null

  private readonly onKeyDown: (e: KeyboardEvent) => void
  private readonly onClick: (e: MouseEvent) => void
  private readonly onSelectDown: (e: PointerEvent) => void
  private readonly onSelectMove: (e: PointerEvent) => void
  private readonly onSelectUp: (e: PointerEvent) => void

  private selectMode = false
  private selectStart: { x: number; y: number } | null = null
  private selectBoxEl = document.getElementById('scale-select-box')

  constructor(canvas: HTMLCanvasElement) {
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
    this.renderer.setPixelRatio(window.devicePixelRatio)
    this.renderer.setClearColor(0x05051a)

    this.scene = new THREE.Scene()

    this.camera = new THREE.PerspectiveCamera(50, 1, 0.5, 200000)
    const initOffset = new THREE.Vector3(EARTH_MOON_DIST * 2, EARTH_MOON_DIST * 1.2, EARTH_MOON_DIST * 2)
    this.camera.position.copy(EARTH_POS).add(initOffset)
    this.camera.lookAt(EARTH_POS)

    // カメラ向きギズモ用の独立したミニシーン（原点にX=赤/Y=緑/Z=青の座標軸モデルのみ）
    this.gizmoScene = new THREE.Scene()
    this.gizmoScene.add(new THREE.AxesHelper(1))
    this.gizmoCamera = new THREE.PerspectiveCamera(40, 1, 0.1, 10)
    if (this.gizmoCanvas) {
      // 固定サイズのビューポートなので、レイアウト依存のclientWidth/Height（非表示中は0になり得る）
      // ではなく、HTML側で宣言済みのwidth/height属性をそのまま使う
      const size = this.gizmoCanvas.width || 96
      this.gizmoRenderer = new THREE.WebGLRenderer({ canvas: this.gizmoCanvas, antialias: true, alpha: true })
      this.gizmoRenderer.setPixelRatio(window.devicePixelRatio)
      this.gizmoRenderer.setSize(size, size, false)
      this.gizmoCamera.aspect = 1
      this.gizmoCamera.updateProjectionMatrix()
    }

    this.controls = new OrbitControls(this.camera, canvas)
    this.controls.target.copy(EARTH_POS)
    this.controls.enableDamping = true
    this.controls.dampingFactor = 0.08
    this.controls.minDistance = MOON_R * 3
    this.controls.maxDistance = EARTH_SUN_DIST * 1.5

    // 太陽は光源そのものなので陰影の要らないMeshBasicMaterialのまま（常に一定の明るさで見せる）
    this.sunMesh = new THREE.Mesh(
      new THREE.SphereGeometry(SUN_R, 32, 24),
      new THREE.MeshBasicMaterial({ color: 0xffee44 })
    )
    this.sunMesh.position.copy(SUN_POS)
    this.sunMesh.userData.radius = SUN_R
    this.scene.add(this.sunMesh)

    // 地球・月はライティングに反応するMeshLambertMaterialにし、太陽光による陰影を付ける
    this.earthMesh = new THREE.Mesh(
      new THREE.SphereGeometry(EARTH_R, 32, 24),
      new THREE.MeshLambertMaterial({ map: this.makeEarthTexture() })
    )
    this.earthMesh.position.copy(EARTH_POS)
    this.earthMesh.userData.radius = EARTH_R
    this.scene.add(this.earthMesh)

    // 地球の自転軸（デバッグ表示）: 公転軸(Y)から実際の地軸傾斜23.44度だけ傾いた向きに描画する
    const axisLen = EARTH_R * 1.8
    const axisGeo = new THREE.BufferGeometry().setFromPoints([
      EARTH_AXIS.clone().multiplyScalar(-axisLen),
      EARTH_AXIS.clone().multiplyScalar(axisLen),
    ])
    const earthAxis = new THREE.Line(axisGeo, new THREE.LineBasicMaterial({ color: 0xff6666 }))
    earthAxis.position.copy(EARTH_POS)
    this.scene.add(earthAxis)

    this.moonMesh = new THREE.Mesh(
      new THREE.SphereGeometry(MOON_R, 16, 12),
      new THREE.MeshLambertMaterial({ color: 0xccccdd })
    )
    this.moonMesh.position.copy(MOON_POS)
    this.moonMesh.userData.radius = MOON_R
    this.scene.add(this.moonMesh)

    // 太陽→地球方向の平行光線（実際の太陽光の近似）。月もほぼ同じ方向で照らされるため、
    // Sun→Earthの1本のDirectionalLightを共用する
    const sunLight = new THREE.DirectionalLight(0xffffff, 1.6)
    sunLight.position.copy(SUN_POS)
    sunLight.target.position.copy(EARTH_POS)
    this.scene.add(sunLight)
    this.scene.add(sunLight.target)
    // 夜側が完全な真っ黒にならないよう、控えめな環境光を足す
    this.scene.add(new THREE.AmbientLight(0xffffff, 0.35))

    // ラベルは太陽・地球・月で常に画面上同じ大きさ・同じ「点からの距離」になるようにする
    // （ワールド座標の固定スケール/オフセットだと、ズームで距離が変わるたびに見た目の大きさや
    //   位置ズレがほぼ消えてしまう＝天体が小さくなるほど位置が分からなくなり、目的に反するため、
    //   毎フレーム「カメラからの距離」に応じて再計算する。updateLabels()参照）
    // 3天体が画面上で近接しても重ならないよう、天体ごとに異なる方向へオフセットする
    const sunLabelInfo = this.makeLabel(t('label-sun'), '#ffee44')
    this.sunLabel = sunLabelInfo.sprite
    this.sunLabelFrac = { halfWFrac: sunLabelInfo.halfWFrac, halfHFrac: sunLabelInfo.halfHFrac }
    this.scene.add(this.sunLabel)

    const earthLabelInfo = this.makeLabel(t('label-earth'), '#8fc0ff')
    this.earthLabel = earthLabelInfo.sprite
    this.earthLabelFrac = { halfWFrac: earthLabelInfo.halfWFrac, halfHFrac: earthLabelInfo.halfHFrac }
    this.scene.add(this.earthLabel)

    const moonLabelInfo = this.makeLabel(t('label-moon'), '#ccd4ee')
    this.moonLabel = moonLabelInfo.sprite
    this.moonLabelFrac = { halfWFrac: moonLabelInfo.halfWFrac, halfHFrac: moonLabelInfo.halfHFrac }
    this.scene.add(this.moonLabel)

    // 天体の実座標とラベル位置を結ぶ引き出し線（両端はupdateLabels()で毎フレーム更新する）
    this.sunLeader = this.makeLeaderLine('#8899bb')
    this.earthLeader = this.makeLeaderLine('#8899bb')
    this.moonLeader = this.makeLeaderLine('#8899bb')
    this.scene.add(this.sunLeader, this.earthLeader, this.moonLeader)

    // デバッグ用: ラベルサイズの枠線（-0.5〜0.5の単位正方形を、updateLabels()で
    // 実測したtextHalfW/textHalfHのワールドサイズに拡大縮小し、カメラの向きに合わせて配置する）
    if (ScaleModel3D.DEBUG_SHOW_LABEL_SIZE) {
      for (let i = 0; i < 3; i++) {
        const boxGeo = new THREE.BufferGeometry().setFromPoints([
          new THREE.Vector3(-0.5, -0.5, 0), new THREE.Vector3(0.5, -0.5, 0),
          new THREE.Vector3(0.5, 0.5, 0), new THREE.Vector3(-0.5, 0.5, 0),
        ])
        const box = new THREE.LineLoop(boxGeo, new THREE.LineBasicMaterial({
          color: 0xff3300, transparent: true, opacity: 0.9, depthTest: false, depthWrite: false,
        }))
        box.renderOrder = 999
        this.debugLabelSizeBoxes.push(box)
        this.scene.add(box)
      }
    }

    // クリックで太陽・地球・月のいずれかをクリックしたら、その天体を中心に回り込む
    // （「Home」キーで全天体がフレームに収まる位置へ、3Dツールの定番ショートカットに合わせている）
    // 矩形選択モード中は、こちらではなく onSelectDown/Move/Up 側で処理する
    this.onClick = (e: MouseEvent) => {
      if (this.selectMode) return
      const rect = canvas.getBoundingClientRect()
      const ndc = new THREE.Vector2(
        ((e.clientX - rect.left) / rect.width) * 2 - 1,
        -((e.clientY - rect.top) / rect.height) * 2 + 1
      )
      this.raycaster.setFromCamera(ndc, this.camera)
      const hits = this.raycaster.intersectObjects([this.sunMesh, this.earthMesh, this.moonMesh])
      if (hits.length === 0) return
      const hitMesh = hits[0].object as THREE.Mesh
      this.focusOn(hitMesh.position, hitMesh.userData.radius as number)
    }
    canvas.addEventListener('click', this.onClick)

    // 矩形選択モード: クリックだけでは狙いにくい小さい天体（縮小表示中の地球・月など）を
    // ドラッグで囲んで選択できるようにする。有効時はOrbitControlsのドラッグ操作を止めている
    this.onSelectDown = (e: PointerEvent) => {
      if (!this.selectMode) return
      this.selectStart = { x: e.clientX, y: e.clientY }
      canvas.setPointerCapture(e.pointerId)
      this.updateSelectBoxEl(e.clientX, e.clientY)
      if (this.selectBoxEl) this.selectBoxEl.hidden = false
    }
    this.onSelectMove = (e: PointerEvent) => {
      if (!this.selectMode || !this.selectStart) return
      this.updateSelectBoxEl(e.clientX, e.clientY)
    }
    this.onSelectUp = (e: PointerEvent) => {
      if (!this.selectMode || !this.selectStart) return
      const start = this.selectStart
      this.selectStart = null
      if (this.selectBoxEl) this.selectBoxEl.hidden = true

      const dx = e.clientX - start.x
      const dy = e.clientY - start.y
      if (Math.hypot(dx, dy) < 4) {
        // ほぼ動いていない = クリック相当。1点だけraycastで拾う
        const rect = canvas.getBoundingClientRect()
        const ndc = new THREE.Vector2(
          ((e.clientX - rect.left) / rect.width) * 2 - 1,
          -((e.clientY - rect.top) / rect.height) * 2 + 1
        )
        this.raycaster.setFromCamera(ndc, this.camera)
        const hits = this.raycaster.intersectObjects([this.sunMesh, this.earthMesh, this.moonMesh])
        if (hits.length > 0) {
          const hitMesh = hits[0].object as THREE.Mesh
          this.focusOn(hitMesh.position, hitMesh.userData.radius as number)
        }
        return
      }
      this.selectWithinScreenRect(
        Math.min(start.x, e.clientX), Math.min(start.y, e.clientY),
        Math.max(start.x, e.clientX), Math.max(start.y, e.clientY)
      )
    }
    canvas.addEventListener('pointerdown', this.onSelectDown)
    canvas.addEventListener('pointermove', this.onSelectMove)
    canvas.addEventListener('pointerup', this.onSelectUp)

    this.onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Home') this.frameAll()
    }
    window.addEventListener('keydown', this.onKeyDown)

    this.handleResize()
    window.addEventListener('resize', () => this.handleResize())
    this.startLoop()
  }

  /**
   * 現在の視線方向（角度）を保ったまま、指定した注視点・距離へカメラを移動する。
   * enableDamping中は直前のドラッグの残存角速度(sphericalDelta)がOrbitControls内部に
   * 残っており、そのままだと次フレーム以降に角度がずれてしまうため、一旦ダンピングを
   * 切って即座に同期し、残存角速度をクリアしてから元に戻す。
   */
  private moveCameraTo(target: THREE.Vector3, distance: number) {
    const dir = this.camera.position.clone().sub(this.controls.target)
    if (dir.lengthSq() < 1e-9) dir.set(1, 0.6, 1)
    dir.normalize()
    this.controls.target.copy(target)
    this.camera.position.copy(target).addScaledVector(dir, distance)
    this.camera.lookAt(target)

    // デバッグ用: カメラの現在状態を出力
    console.log('[ScaleModel3D] moveCameraTo', {
      target: target.toArray().map(v => +v.toFixed(2)),
      cameraPos: this.camera.position.toArray().map(v => +v.toFixed(2)),
      distance: +distance.toFixed(2),
      dir: dir.toArray().map(v => +v.toFixed(4)),
      fovVertical: this.camera.fov,
      aspect: +this.camera.aspect.toFixed(4),
    })
  }

  /** 半径boundingRadiusの球がちょうど画面に収まる（余白margin倍）距離を求める（単一天体用）。
   *  縦横どちらのFOVでもはみ出さないよう、両方をチェックして厳しい方（大きい方）の距離を採用する */
  private frameDistance(boundingRadius: number, margin: number): number {
    const vFovRad = THREE.MathUtils.degToRad(this.camera.fov)
    const hFovRad = 2 * Math.atan(Math.tan(vFovRad / 2) * this.camera.aspect)
    const distV = boundingRadius / Math.sin(vFovRad / 2)
    const distH = boundingRadius / Math.sin(hFovRad / 2)
    const distance = Math.min(Math.max(distV, distH) * margin, this.controls.maxDistance)
    console.log('[ScaleModel3D] frameDistance', {
      boundingRadius: +boundingRadius.toFixed(3), margin,
      aspect: +this.camera.aspect.toFixed(4),
      distV: +distV.toFixed(2), distH: +distH.toFixed(2), distance: +distance.toFixed(2),
    })
    return distance
  }

  /**
   * 複数天体向け: 「どの角度から見ても収まる球」ではなく、現在のカメラ視線方向に対する
   * 実際の投影サイズから距離を計算する。天体ごとにカメラからの奥行き（center基準の
   * 前後のズレ）が異なる点を考慮する必要がある — center より手前にある天体は、同じ横方向の
   * ズレでも遠近法でより大きく外側にズレて見えるため、その分だけ余計にカメラを下げる。
   */
  private frameDistanceForBodies(
    bodies: ReadonlyArray<{ pos: THREE.Vector3; radius: number }>,
    center: THREE.Vector3,
    margin: number
  ): number {
    // dir: target→cameraの単位ベクトル（moveCameraToが使うのと同じ視線方向）
    const dir = this.camera.position.clone().sub(this.controls.target)
    if (dir.lengthSq() < 1e-9) dir.set(1, 0.6, 1)
    dir.normalize()
    const right = new THREE.Vector3(1, 0, 0).applyQuaternion(this.camera.quaternion)
    const up = new THREE.Vector3(0, 1, 0).applyQuaternion(this.camera.quaternion)
    const offset = new THREE.Vector3()

    const vFovRad = THREE.MathUtils.degToRad(this.camera.fov)
    const hFovRad = 2 * Math.atan(Math.tan(vFovRad / 2) * this.camera.aspect)
    const tanV = Math.tan(vFovRad / 2)
    const tanH = Math.tan(hFovRad / 2)

    // 各天体について「その天体がフレームに収まるために最低限必要な距離」を求め、最大値を採用する
    let required = 0
    const perBodyLog: unknown[] = []
    for (const b of bodies) {
      offset.copy(b.pos).sub(center)
      const nearerByThisMuch = offset.dot(dir) // カメラに近い天体ほど大きい正の値
      const lateralW = Math.abs(offset.dot(right)) + b.radius
      const lateralH = Math.abs(offset.dot(up)) + b.radius
      const need = nearerByThisMuch + Math.max(lateralW / tanH, lateralH / tanV)
      required = Math.max(required, need)
      perBodyLog.push({
        pos: b.pos.toArray().map(v => +v.toFixed(2)),
        radius: +b.radius.toFixed(2),
        nearerByThisMuch: +nearerByThisMuch.toFixed(2),
        lateralW: +lateralW.toFixed(2), lateralH: +lateralH.toFixed(2),
        need: +need.toFixed(2),
      })
    }

    const distance = Math.min(Math.max(required, 0) * margin, this.controls.maxDistance)
    console.log('[ScaleModel3D] frameDistanceForBodies', {
      center: center.toArray().map(v => +v.toFixed(2)),
      dir: dir.toArray().map(v => +v.toFixed(4)),
      aspect: +this.camera.aspect.toFixed(4),
      margin, required: +required.toFixed(2), distance: +distance.toFixed(2),
      bodies: perBodyLog,
    })
    return distance
  }

  /** 指定した天体が画面いっぱいに大きく収まる距離まで寄る */
  private focusOn(target: THREE.Vector3, radius: number) {
    const distance = Math.max(this.frameDistance(radius, 1.4), this.controls.minDistance)
    this.moveCameraTo(target, distance)
  }

  /** 太陽・地球・月すべてがカメラに収まる位置まで引く（Homeキー / 全体表示ボタン） */
  frameAll() {
    const center = new THREE.Vector3()
    for (const b of FOCUSABLE) center.add(b.pos)
    center.divideScalar(FOCUSABLE.length)

    this.moveCameraTo(center, this.frameDistanceForBodies(FOCUSABLE, center, 1.15))
  }

  /** 矩形選択モードの有効/無効を切り替える。有効時はOrbitControlsのドラッグ操作を止める */
  setSelectMode(on: boolean) {
    this.selectMode = on
    this.controls.enabled = !on
    if (!on && this.selectBoxEl) this.selectBoxEl.hidden = true
  }

  private updateSelectBoxEl(curX: number, curY: number) {
    if (!this.selectBoxEl || !this.selectStart) return
    const rect = this.renderer.domElement.getBoundingClientRect()
    const x0 = this.selectStart.x - rect.left
    const y0 = this.selectStart.y - rect.top
    const x1 = curX - rect.left
    const y1 = curY - rect.top
    this.selectBoxEl.style.left = `${Math.min(x0, x1)}px`
    this.selectBoxEl.style.top = `${Math.min(y0, y1)}px`
    this.selectBoxEl.style.width = `${Math.abs(x1 - x0)}px`
    this.selectBoxEl.style.height = `${Math.abs(y1 - y0)}px`
  }

  /** 画面座標の矩形(left/top/right/bottom, クライアント座標)内に入っている天体を選択し、フレームする */
  private selectWithinScreenRect(left: number, top: number, right: number, bottom: number) {
    const rect = this.renderer.domElement.getBoundingClientRect()
    const selected: Array<{ pos: THREE.Vector3; radius: number }> = []
    for (const body of FOCUSABLE) {
      const ndc = body.pos.clone().project(this.camera)
      if (ndc.z < -1 || ndc.z > 1) continue // カメラの後ろ側は対象外
      const sx = rect.left + (ndc.x * 0.5 + 0.5) * rect.width
      const sy = rect.top + (-ndc.y * 0.5 + 0.5) * rect.height
      if (sx >= left && sx <= right && sy >= top && sy <= bottom) selected.push(body)
    }
    if (selected.length === 0) return
    if (selected.length === 1) {
      this.focusOn(selected[0].pos, selected[0].radius)
      return
    }
    const center = new THREE.Vector3()
    for (const b of selected) center.add(b.pos)
    center.divideScalar(selected.length)
    this.moveCameraTo(center, this.frameDistanceForBodies(selected, center, 1.15))
  }

  /**
   * canvas全体(256×64)に対して、実際に描画される文字がどれだけの割合を占めるかを
   * ctx.measureText()で実測する。canvasは常に固定サイズ(透明な余白込み)だが、当たり判定・
   * 引き出し線の距離計算では「見えている文字」までの距離を知りたいため、この比率を使って
   * 実際の文字サイズを算出する（updateLabels()参照）
   */
  private measureLabelTextFrac(ctx: CanvasRenderingContext2D, text: string, canvasW: number, canvasH: number) {
    const m = ctx.measureText(text)
    const textW = m.width
    const textH = (m.actualBoundingBoxAscent ?? 14) + (m.actualBoundingBoxDescent ?? 14)
    const halfWFrac = THREE.MathUtils.clamp((textW / 2) / (canvasW / 2), 0.05, 1)
    const halfHFrac = THREE.MathUtils.clamp((textH / 2) / (canvasH / 2), 0.05, 1)
    return { halfWFrac, halfHFrac }
  }

  private makeLabel(text: string, color: string): { sprite: THREE.Sprite; halfWFrac: number; halfHFrac: number } {
    const c = document.createElement('canvas')
    c.width = 256; c.height = 64
    const ctx = c.getContext('2d')!
    ctx.font = 'bold 28px Arial'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.shadowColor = '#000'
    ctx.shadowBlur = 8
    ctx.fillStyle = color
    ctx.fillText(text, 128, 32)
    const { halfWFrac, halfHFrac } = this.measureLabelTextFrac(ctx, text, c.width, c.height)
    const sprite = new THREE.Sprite(new THREE.SpriteMaterial({
      map: new THREE.CanvasTexture(c),
      transparent: true,
      depthTest: false, // 球の裏側に回っても隠れず、常に手前に見えるようにする
      depthWrite: false,
    }))
    sprite.renderOrder = 999
    return { sprite, halfWFrac, halfHFrac }
  }

  /** 天体の実座標とラベル位置を結ぶ引き出し線（両端はupdateLabels()で毎フレーム書き換える） */
  private makeLeaderLine(color: string): THREE.Line {
    const geo = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(), new THREE.Vector3(),
    ])
    const mat = new THREE.LineBasicMaterial({
      color, transparent: true, opacity: 0.25,
      depthTest: false, depthWrite: false, // ラベルと同様、常に手前に見えるようにする
    })
    const line = new THREE.Line(geo, mat)
    line.renderOrder = 998
    // 毎フレームgeometryの頂点座標だけを書き換えており、geometry.boundingSphereは
    // 初回描画時の位置のまま更新されない。デフォルトのfrustumCulled=trueのままだと、
    // その固定されたboundingSphereが視錐台の外に出た瞬間、実際の座標に関わらず
    // 描画から除外されてしまう（ズーム操作で線が消える不具合の原因）ため無効化する
    line.frustumCulled = false
    return line
  }

  /** 簡易的な地球風テクスチャ（海+大陸のイラスト調。正確な地形ではない） */
  private makeEarthTexture(): THREE.Texture {
    const c = document.createElement('canvas')
    c.width = 512; c.height = 256
    const ctx = c.getContext('2d')!
    ctx.fillStyle = '#2f6fb0'
    ctx.fillRect(0, 0, c.width, c.height)
    ctx.fillStyle = '#4f9e5c'
    const blob = (cx: number, cy: number, rx: number, ry: number, rot: number) => {
      ctx.beginPath()
      ctx.ellipse(cx, cy, rx, ry, rot, 0, Math.PI * 2)
      ctx.fill()
    }
    blob(90, 95, 55, 68, 0.4)
    blob(140, 175, 38, 30, -0.3)
    blob(300, 60, 68, 40, 0.2)
    blob(345, 150, 48, 58, -0.5)
    blob(420, 205, 34, 24, 0.1)
    blob(470, 90, 30, 22, -0.2)
    return new THREE.CanvasTexture(c)
  }

  // ラベルの高さを、画面高さに対する割合で管理する（太陽・地球・月とも同じ値=同じ見た目の大きさ）
  private static readonly LABEL_HEIGHT_FRACTION = 0.035
  // 天体の外周〜ラベルの外周を、次の3区間の画面ピクセル値で構成する。天体の見た目のサイズや
  // ズームに関係なく常にこの値を保つ（数値を変えるだけで間隔を調整できる）
  // 天体の外周 → (MODEL_TO_LINE_PX) → 引き出し線の始点 → (LINE_LENGTH_PX) → 引き出し線の終点
  //   → (LINE_TO_LABEL_PX) → ラベルの外周
  private static readonly MODEL_TO_LINE_PX = 10
  private static readonly LINE_LENGTH_PX = 20
  private static readonly LINE_TO_LABEL_PX = 10
  // 衝突をほぐす反復回数（天体3つ・判定ペアは少数なので数回で十分収束する）
  private static readonly LABEL_COLLISION_ITERATIONS = 6
  // デバッグ用: 実際に当たり判定に使っている「ラベルのサイズ」の枠線表示のON/OFF
  private static readonly DEBUG_SHOW_LABEL_SIZE = false

  /**
   * ラベルは基本的に天体の実座標にそのまま置く（オフセットなし＝天体本体と重なった状態から
   * 出発する）。そこから、①ラベル同士、②ラベルと天体本体（球）、それぞれ画面上で重なって
   * いる組があれば押し離す。判定は「視線からの角度(tan)」空間で行うことで、距離による
   * 遠近（近いほど大きく見える）を正しく考慮する。グローバルな基準点は使わず、衝突している
   * 相手との関係だけを見るローカルな判定にしている。
   */
  private updateLabels() {
    const fovVRad = THREE.MathUtils.degToRad(this.camera.fov)
    const right = new THREE.Vector3(1, 0, 0).applyQuaternion(this.camera.quaternion)
    const up = new THREE.Vector3(0, 1, 0).applyQuaternion(this.camera.quaternion)
    const forward = new THREE.Vector3(0, 0, -1).applyQuaternion(this.camera.quaternion)

    // 「視線からの角度のtan」空間へ投影する（距離に関わらず、実際の見た目のズレ量を
    // そのまま比較できる。歪みのないNDCに近いイメージ）
    const project = (pos: THREE.Vector3) => {
      const v = pos.clone().sub(this.camera.position)
      const depth = Math.max(v.dot(forward), 1e-6)
      return { x: v.dot(right) / depth, y: v.dot(up) / depth, depth }
    }

    const labelHalfH = Math.tan(fovVRad / 2) * ScaleModel3D.LABEL_HEIGHT_FRACTION
    const labelHalfW = labelHalfH * 4

    // 画面ピクセルを、このフレームのtan角度空間の値に変換するヘルパー。
    // レイアウト確定前（display:noneから切り替わった直後など）はclientHeightが一瞬0になり得る。
    // 0除算でInfinityになり、さらにフォールバック方向(0,1)との掛け算でNaNへ波及するのを防ぐため
    // 最低1にクランプする
    const canvasHeightPx = Math.max(this.renderer.domElement.clientHeight, 1)
    const pxToTan = (px: number) => px * 2 * Math.tan(fovVRad / 2) / canvasHeightPx
    const modelToLineTan = pxToTan(ScaleModel3D.MODEL_TO_LINE_PX)
    const lineLengthTan = pxToTan(ScaleModel3D.LINE_LENGTH_PX)
    const lineToLabelTan = pxToTan(ScaleModel3D.LINE_TO_LABEL_PX)
    const totalGapTan = modelToLineTan + lineLengthTan + lineToLabelTan

    // 天体の見た目の半径(r = 実半径/深度)から、遠近法で見た実際の輪郭（シルエット）が
    // tan角度空間でどこに見えるかを求める。中心と同じ深度のまま横にrだけずらした点は、
    // 3D的には球の表面上だが、遠近法で投影すると実際の輪郭より内側に見えてしまうため、
    // tanθ = r / √(1 - r²) （θ=輪郭の視半径、sinθ=rとなる直角三角形から導出）で補正する。
    // r→1(カメラが天体の半径より近づく。minDistanceは天体ごとに調整していないため起こり得る)
    // で式が発散するため、rを安全な範囲にクランプしてから計算する
    const sphereEdgeTan = (r: number) => {
      const rSafe = Math.min(Math.abs(r), 0.98)
      return rSafe / Math.sqrt(Math.max(1 - rSafe * rSafe, 1e-6))
    }

    // ラベル（横長の長方形）の中心から、指定した方向(ux,uy)にある辺までの距離。
    // hypot(halfW,halfH)（対角線方向の円近似）は方向によって実際の辺よりかなり大きく
    // 見積もってしまう（特に真上方向に押し出される典型ケースでは半分の高さが正しく、
    // 対角円近似は数倍大きい）ため、天体からの押し出し量を決める際はこちらを使う。
    // halfW/halfHは呼び出し側で「箱」でも「実際の文字」でも渡せるようにしている
    const labelEdgeDistTo = (ux: number, uy: number, halfW: number, halfH: number) => {
      const tx = Math.abs(ux) > 1e-9 ? halfW / Math.abs(ux) : Infinity
      const ty = Math.abs(uy) > 1e-9 ? halfH / Math.abs(uy) : Infinity
      return Math.min(tx, ty)
    }

    // 天体(円)とラベル(長方形)専用の押し出し判定。ラベル側の「半径」を方向ごとに正しく計算する。
    // ここでのhalfW/halfHは「実際に見えている文字」のサイズ（ctx.measureText()の実測値ベース）を
    // 渡す。線とラベルの間隔を「見た目の文字」までの距離として保証するため
    const overlapSphereLabel = (
      sphere: { x: number; y: number; r: number }, lx: number, ly: number,
      textHalfW: number, textHalfH: number, extraGapTan: number
    ) => {
      const dx = lx - sphere.x, dy = ly - sphere.y
      const dist = Math.hypot(dx, dy)
      const nx = dist < 1e-6 ? 0 : dx / dist
      const ny = dist < 1e-6 ? 1 : dy / dist
      const required = sphereEdgeTan(sphere.r) + labelEdgeDistTo(nx, ny, textHalfW, textHalfH) + extraGapTan
      const overlap = required - dist
      if (overlap <= 0) return null
      return { nx, ny, overlap }
    }

    // 天体ごと（太陽・地球・月の順、labels/spheresと同じ順）の「実際に見えている文字」の
    // 半幅・半高（tan空間）。canvas全体(箱)のhalfW/halfHに、ctx.measureText()で測った比率を掛ける
    const labelFracs = [this.sunLabelFrac, this.earthLabelFrac, this.moonLabelFrac]
    const textHalfWs = labelFracs.map(f => labelHalfW * f.halfWFrac)
    const textHalfHs = labelFracs.map(f => labelHalfH * f.halfHFrac)
    // ラベル同士の衝突回避（①）用の半径。ここも実測テキストサイズを使わないと、天体同士が
    // 画面上で接近する場面（例: 地球と月）で①の「箱基準の大きい反発」が支配的になり、
    // ②で精密にコントロールしたはずの間隔が台無しになる
    const textRadii = textHalfWs.map((w, i) => Math.hypot(w, textHalfHs[i]))

    type LabelState = {
      sprite: THREE.Sprite; leader: THREE.Line; bodyPos: THREE.Vector3
      depth: number; baseX: number; baseY: number; x: number; y: number
    }
    const makeLabelState = (sprite: THREE.Sprite, leader: THREE.Line, bodyPos: THREE.Vector3): LabelState => {
      const p = project(bodyPos)
      const h = 2 * labelHalfH * p.depth
      sprite.scale.set(h * 4, h, 1) // ラベル用canvasは256x64(4:1)なので幅は高さの4倍
      return { sprite, leader, bodyPos, depth: p.depth, baseX: p.x, baseY: p.y, x: p.x, y: p.y }
    }
    const labels = [
      makeLabelState(this.sunLabel, this.sunLeader, SUN_POS),
      makeLabelState(this.earthLabel, this.earthLeader, EARTH_POS),
      makeLabelState(this.moonLabel, this.moonLeader, MOON_POS),
    ]

    const spheres = FOCUSABLE.map(b => {
      const p = project(b.pos)
      return { x: p.x, y: p.y, r: b.radius / p.depth }
    })

    // 円同士の押し離し。重なっていなければnull、重なっていれば押し出す方向と量を返す
    const overlapOf = (ax: number, ay: number, ar: number, bx: number, by: number, br: number) => {
      const dx = bx - ax, dy = by - ay
      const dist = Math.hypot(dx, dy)
      const overlap = ar + br - dist
      if (overlap <= 0) return null
      // 中心が完全に一致（ラベル生成直後、天体本体の真上にいる場合など）はフォールバック方向を使う
      return dist < 1e-6 ? { nx: 0, ny: 1, overlap } : { nx: dx / dist, ny: dy / dist, overlap }
    }

    for (let iter = 0; iter < ScaleModel3D.LABEL_COLLISION_ITERATIONS; iter++) {
      // ① ラベル同士（実測テキストサイズを使う。箱基準のlabelRadiusのままだと、天体同士が
      // 画面上で接近する場面でここが支配的になり、②の精密な距離コントロールを台無しにする）
      for (let i = 0; i < labels.length; i++) {
        for (let j = i + 1; j < labels.length; j++) {
          const a = labels[i], b = labels[j]
          const hit = overlapOf(a.x, a.y, textRadii[i], b.x, b.y, textRadii[j])
          if (!hit) continue
          const push = hit.overlap / 2
          a.x -= hit.nx * push; a.y -= hit.ny * push
          b.x += hit.nx * push; b.y += hit.ny * push
        }
      }
      // ② ラベル と 天体本体（自分の球も含め、全ての球から押し出す）。overlapSphereLabelが
      // 遠近法補正後の輪郭・方向ごとの正しい「実際の文字」の辺・3区間合計(totalGapTan)の
      // 隙間をすべて考慮して必要な距離を計算する
      for (let li = 0; li < labels.length; li++) {
        const label = labels[li]
        for (const sphere of spheres) {
          const hit = overlapSphereLabel(sphere, label.x, label.y, textHalfWs[li], textHalfHs[li], totalGapTan)
          if (!hit) continue
          label.x += hit.nx * hit.overlap
          label.y += hit.ny * hit.overlap
        }
      }
    }

    for (let i = 0; i < labels.length; i++) {
      const s = labels[i]
      const sphere = spheres[i] // labels/spheresは同じ順番（太陽・地球・月）で作っている

      // tan角度空間でのズレ量に、そのラベル自身の深度を掛けてワールド座標のオフセットへ戻す
      s.sprite.position.copy(s.bodyPos)
        .addScaledVector(right, (s.x - s.baseX) * s.depth)
        .addScaledVector(up, (s.y - s.baseY) * s.depth)

      // デバッグ用: ラベルサイズの枠線を、ラベルと同じ位置・カメラの向きに合わせ、
      // 実測したtextHalfW/textHalfHのワールドサイズに拡大縮小する
      if (ScaleModel3D.DEBUG_SHOW_LABEL_SIZE) {
        const box = this.debugLabelSizeBoxes[i]
        box.position.copy(s.sprite.position)
        box.quaternion.copy(this.camera.quaternion)
        box.scale.set(textHalfWs[i] * 2 * s.depth, textHalfHs[i] * 2 * s.depth, 1)
      }

      // 引き出し線: 天体の外周から MODEL_TO_LINE_PX 離れた点 〜 さらに LINE_LENGTH_PX 先の点
      // だけを引く（天体本体にもラベルにも触れない。残りの LINE_TO_LABEL_PX 分はラベル手前の
      // 空白として残る）
      const dx = s.x - s.baseX, dy = s.y - s.baseY
      const dist = Math.hypot(dx, dy)
      const ux = dist > 1e-6 ? dx / dist : 0
      const uy = dist > 1e-6 ? dy / dist : 1
      const edgeTan = sphereEdgeTan(sphere.r)
      const startX = s.baseX + ux * (edgeTan + modelToLineTan)
      const startY = s.baseY + uy * (edgeTan + modelToLineTan)
      const endX = startX + ux * lineLengthTan
      const endY = startY + uy * lineLengthTan
      const toWorld = (tx: number, ty: number) =>
        s.bodyPos.clone()
          .addScaledVector(right, (tx - s.baseX) * s.depth)
          .addScaledVector(up, (ty - s.baseY) * s.depth)
      const lineStart = toWorld(startX, startY)
      const lineEnd = toWorld(endX, endY)

      const posAttr = s.leader.geometry.attributes.position as THREE.BufferAttribute
      posAttr.setXYZ(0, lineStart.x, lineStart.y, lineStart.z)
      posAttr.setXYZ(1, lineEnd.x, lineEnd.y, lineEnd.z)
      posAttr.needsUpdate = true
    }
  }

  /** カメラの位置・注視点・距離・回転角（OrbitControls基準の方位角/極角）を常時表示するUI */
  private updateDebugHud() {
    if (!this.debugHudEl) return
    const p = this.camera.position
    const t = this.controls.target
    const azimuthDeg = THREE.MathUtils.radToDeg(this.controls.getAzimuthalAngle())
    const polarDeg = THREE.MathUtils.radToDeg(this.controls.getPolarAngle())
    const fmt = (n: number) => n.toFixed(1).padStart(9)
    this.debugHudEl.textContent =
      `camera pos    x:${fmt(p.x)} y:${fmt(p.y)} z:${fmt(p.z)}\n` +
      `target        x:${fmt(t.x)} y:${fmt(t.y)} z:${fmt(t.z)}\n` +
      `distance      ${this.controls.getDistance().toFixed(1)}\n` +
      `azimuth(θ)    ${azimuthDeg.toFixed(1)}°\n` +
      `polar(φ)      ${polarDeg.toFixed(1)}°\n` +
      `fov / aspect  ${this.camera.fov.toFixed(0)}° / ${this.camera.aspect.toFixed(2)}`
  }

  /**
   * ミニビューポートのカメラを、メインカメラの「向き」だけをコピーして原点周りの固定距離に置く。
   * 位置やズーム距離は一切参照しないため、メイン画面をどれだけズームしても、このギズモの
   * 大きさ・見え方はカメラの向きが変わらない限り変化しない。
   */
  private renderGizmo() {
    if (!this.gizmoRenderer) return
    const backward = new THREE.Vector3(0, 0, 1).applyQuaternion(this.camera.quaternion)
    this.gizmoCamera.position.copy(backward).multiplyScalar(3)
    this.gizmoCamera.up.copy(this.camera.up)
    this.gizmoCamera.lookAt(0, 0, 0)
    this.gizmoRenderer.render(this.gizmoScene, this.gizmoCamera)
  }

  refreshTextLabels() {
    const rewrite = (sprite: THREE.Sprite, text: string, color: string) => {
      const c = document.createElement('canvas')
      c.width = 256; c.height = 64
      const ctx = c.getContext('2d')!
      ctx.font = 'bold 28px Arial'
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
      return this.measureLabelTextFrac(ctx, text, c.width, c.height)
    }
    this.sunLabelFrac = rewrite(this.sunLabel, t('label-sun'), '#ffee44')
    this.earthLabelFrac = rewrite(this.earthLabel, t('label-earth'), '#8fc0ff')
    this.moonLabelFrac = rewrite(this.moonLabel, t('label-moon'), '#ccd4ee')
  }

  handleResize() {
    const parent = this.renderer.domElement.parentElement!
    const w = parent.clientWidth
    const h = parent.clientHeight
    if (w === 0 || h === 0) return
    this.renderer.setSize(w, h)
    this.camera.aspect = w / h
    this.camera.updateProjectionMatrix()
  }

  // 地球の自転速度: このアプリの24hシミュレーション（実時間1秒=1時間、24秒で1日）の換算に合わせる
  private static readonly EARTH_SPIN_RAD_PER_SEC = (Math.PI * 2) / 24

  private startLoop() {
    let lastTime: number | null = null
    const loop = (time: number) => {
      this.rafId = requestAnimationFrame(loop)
      const dt = lastTime === null ? 0 : (time - lastTime) / 1000
      lastTime = time
      this.earthMesh.rotateOnWorldAxis(EARTH_AXIS, ScaleModel3D.EARTH_SPIN_RAD_PER_SEC * dt)
      this.controls.update()
      this.updateLabels()
      this.updateDebugHud()
      this.renderer.render(this.scene, this.camera)
      this.renderGizmo()
    }
    this.rafId = requestAnimationFrame(loop)
  }

  dispose() {
    if (this.rafId !== null) cancelAnimationFrame(this.rafId)
    window.removeEventListener('keydown', this.onKeyDown)
    const canvas = this.renderer.domElement
    canvas.removeEventListener('click', this.onClick)
    canvas.removeEventListener('pointerdown', this.onSelectDown)
    canvas.removeEventListener('pointermove', this.onSelectMove)
    canvas.removeEventListener('pointerup', this.onSelectUp)
  }
}
