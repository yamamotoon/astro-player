import * as THREE from 'three'

// 座標軸の表示(OrientationGizmoView)に渡す模型。見た目を変えたい時はこのファイルだけを直せばよい。
// 模型は原点中心・+Yが北極の向きで作る

const STYLE = {
  wireColor: 0x5070a0,  // 球のワイヤーフレームの色
  wireRadius: 0.012,    // ワイヤーフレームの管の太さ（WebGLの線は端末の画素密度で細さが変わるため管で描く）
  meridians: 12,        // 経線の本数
  latitudeBands: 6,     // 緯線で分ける帯の数（緯線は帯の境目なので本数はこれ-1）
  axisColors: { x: 0xe05555, y: 0x55c060, z: 0x5588e0 },
  axisRadius: 0.012,    // 座標軸の太さ（色で区別できるのでワイヤーフレームと同じ）
  axisLength: 1,        // 中心から先端までの長さ（球の半径と同じ）
  tipRadius: 0.04,      // プラス側の先端の点
  negativeDarken: 0.6,  // マイナス側を基本色からどれだけ暗くするか(0〜1)
}

/** 球のワイヤーフレーム（経線・緯線）と、RGBの座標軸からなる模型 */
export function createGlobeGizmoModel(): THREE.Object3D {
  const model = new THREE.Group()
  model.add(createOccluder(), createWireSphere())
  model.add(createAxis(new THREE.Vector3(1, 0, 0), STYLE.axisColors.x))
  model.add(createAxis(new THREE.Vector3(0, 1, 0), STYLE.axisColors.y))
  model.add(createAxis(new THREE.Vector3(0, 0, 1), STYLE.axisColors.z))
  return model
}

/**
 * 奥半分の線を隠すための、見えない球。色は描かず奥行きだけを書き込み、ワイヤーフレームより先に描く。
 * 線（管）の内側より少しだけ小さくして、手前側の線を隠さないようにする
 */
function createOccluder(): THREE.Mesh {
  const occluder = new THREE.Mesh(
    new THREE.SphereGeometry(0.98, 32, 24),
    new THREE.MeshBasicMaterial({ colorWrite: false }),
  )
  occluder.renderOrder = -1
  return occluder
}

function createWireSphere(): THREE.Group {
  const wire = new THREE.Group()
  const ring = (radius: number) => new THREE.Mesh(
    new THREE.TorusGeometry(radius, STYLE.wireRadius, 6, 64),
    new THREE.MeshBasicMaterial({ color: STYLE.wireColor }),
  )
  // 経線: 北極・南極を通る大円（TorusGeometryはXY平面＝経度0の大円）を経度ごとに回す。
  // 大円1つが向かい合う経線2本になるので、本数の半分だけ作る
  for (let m = 0; m < STYLE.meridians / 2; m++) {
    const meridian = ring(1)
    meridian.rotation.y = (m / STYLE.meridians) * Math.PI * 2
    wire.add(meridian)
  }
  // 緯線: 帯の境目ごとに、赤道面(XZ平面)に平行な円
  for (let b = 1; b < STYLE.latitudeBands; b++) {
    const lat = Math.PI / 2 - (b / STYLE.latitudeBands) * Math.PI
    const latitude = ring(Math.cos(lat))
    latitude.rotation.x = Math.PI / 2
    latitude.position.y = Math.sin(lat)
    wire.add(latitude)
  }
  return wire
}

/** 1本の座標軸。プラス側は基本色で先端に点、マイナス側は暗い色。球の奥に回っても隠さない */
function createAxis(dir: THREE.Vector3, color: number): THREE.Group {
  const positive = new THREE.Color(color)
  const negative = positive.clone().lerp(new THREE.Color(0x000000), STYLE.negativeDarken)
  // depthTestを切ると奥行きで隠れなくなるため、重なり順は描く順で決まる。transparentにすると
  // Three.jsが奥の物から順に描くので、手前の軸が上に重なる
  const material = (c: THREE.Color) => new THREE.MeshBasicMaterial({ color: c, depthTest: false, transparent: true })

  // CylinderGeometryはY方向に伸びるので、中心から+Y側・-Y側の半分ずつを作り、軸の向きへ回す
  const half = (c: THREE.Color, sign: 1 | -1) => {
    const mesh = new THREE.Mesh(
      new THREE.CylinderGeometry(STYLE.axisRadius, STYLE.axisRadius, STYLE.axisLength, 12),
      material(c),
    )
    mesh.position.y = sign * STYLE.axisLength / 2
    return mesh
  }
  const tip = new THREE.Mesh(new THREE.SphereGeometry(STYLE.tipRadius, 16, 12), material(positive))
  tip.position.y = STYLE.axisLength

  const axis = new THREE.Group()
  axis.add(half(positive, 1), half(negative, -1), tip)
  axis.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir)
  return axis
}
