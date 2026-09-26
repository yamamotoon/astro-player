import * as THREE from 'three'

// 天体の向きを示す座標軸の表示。渡された模型（orientationGizmoModel.ts）を、指定された向きに回して描くだけ。
// 操作（向きの決め方）は持たない（orientationControl.ts）

export class OrientationGizmoView {
  private renderer: THREE.WebGLRenderer
  private scene = new THREE.Scene()
  private camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 100)

  constructor(canvas: HTMLCanvasElement, private model: THREE.Object3D) {
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
    this.renderer.setPixelRatio(window.devicePixelRatio)
    // CSSサイズはレイアウト前だと0になり得るため、canvasのHTML属性の固定サイズを使う
    this.renderer.setSize(canvas.width, canvas.height, false)

    this.scene.add(new THREE.AmbientLight(0xffffff, 1.0))
    const light = new THREE.DirectionalLight(0xffffff, 2.0)
    light.position.set(-1, 1, 2)
    this.scene.add(light)
    this.scene.add(model)
    this.fitCamera()
  }

  /**
   * 模型がどの向きでも収まるよう、原点から最も遠い頂点までの距離に合わせてカメラの範囲を決める
   * （Box3の外接球だと、球の模型では箱の対角線ぶん大きく見積もってしまう）
   */
  private fitCamera() {
    this.model.updateMatrixWorld(true)
    let radius = 0
    const v = new THREE.Vector3()
    this.model.traverse(obj => {
      if (!(obj instanceof THREE.Mesh || obj instanceof THREE.Line)) return
      const pos = obj.geometry.attributes.position
      for (let i = 0; i < pos.count; i++) {
        radius = Math.max(radius, v.fromBufferAttribute(pos, i).applyMatrix4(obj.matrixWorld).length())
      }
    })
    const r = radius * 1.05
    this.camera.left = -r
    this.camera.right = r
    this.camera.top = r
    this.camera.bottom = -r
    this.camera.position.set(0, 0, r * 4)
    this.camera.updateProjectionMatrix()
  }

  /** 向きが変わった時だけ呼べばよい（向き以外に表示が変わる要素はない） */
  setOrientation(orientation: THREE.Quaternion) {
    this.model.quaternion.copy(orientation)
    this.renderer.render(this.scene, this.camera)
  }

  dispose() {
    this.scene.traverse(obj => {
      if (obj instanceof THREE.Mesh || obj instanceof THREE.Line) {
        obj.geometry.dispose()
        const materials = Array.isArray(obj.material) ? obj.material : [obj.material]
        for (const m of materials) m.dispose()
      }
    })
    this.renderer.dispose()
  }
}
