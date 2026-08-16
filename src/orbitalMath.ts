import * as THREE from 'three'

/**
 * スケールモデル（scaleModel3d.ts）の軌道計算のうち、DOM・Three.jsのシーン/カメラに一切触れない
 * 純粋な部分だけを切り出したモジュール（日付・角度・方向ベクトルを計算して返すだけ）。
 * Three.jsを使ってはいるが、Vector3は値オブジェクト（数学ライブラリ）としての利用であり、
 * シーングラフ（Scene/Mesh/Camera等）には一切依存しない。
 *
 * 元々はScaleModel3Dクラスのメソッド/静的メソッドとして、Three.jsのメッシュ生成やDOMのイベント
 * 配線と同じクラスに同居していた。テスト・再利用のしやすさのためにここへ切り出した
 * （このファイル自体は他のどのビュー/DOM関連ファイルからもimportされない、末端の純粋モジュール）
 */

export const DAY_MS = 24 * 60 * 60 * 1000

/** その年の1月1日からの経過日数の割合(0〜1未満)。円軌道の公転角度の基準に使う簡略計算 */
export function dayOfYearFraction(date: Date): number {
  const startOfYear = new Date(date.getFullYear(), 0, 1, 0, 0, 0, 0)
  const days = (date.getTime() - startOfYear.getTime()) / DAY_MS
  return (days / 365.25) % 1
}

// 内惑星（水星・金星・火星）用。公転周期が1年から大きくずれる（水星88日・火星687日）ため、
// dayOfYearFraction()のような「暦年で割ってmod 1」という簡略化は使えない
// （年境界(12/31→1/1)で角度が不連続に飛んでしまう）。固定の基準日からの経過日数をそのまま
// 周期で割ることで、年をまたいでも連続的に回り続けるようにする
export const ORBIT_EPOCH_MS = Date.UTC(2000, 0, 1)
export function orbitalAngleFromEpoch(date: Date, periodDays: number): number {
  const elapsedDays = (date.getTime() - ORBIT_EPOCH_MS) / DAY_MS
  return (elapsedDays / periodDays) * Math.PI * 2
}

/**
 * UTC時刻から、赤道上で今どの経度が太陽の正面（南中）にあるかを求める（分点補正は考慮しない
 * 簡略計算）。UTC12時に経度0（グリニッジ）が南中する
 */
export function subsolarLonRad(date: Date): number {
  const utcHours = date.getUTCHours() + date.getUTCMinutes() / 60 + date.getUTCSeconds() / 3600
  const lonDeg = ((12 - utcHours) * 15 + 180) % 360 - 180
  return THREE.MathUtils.degToRad(lonDeg < -180 ? lonDeg + 360 : lonDeg)
}

/**
 * SphereGeometryの頂点式(vertex.x=-r·cosφ, vertex.z=r·sinφ, φ=π+lon)から逆算した、
 * 経度→メッシュのローカル座標系での方向（回転前、赤道上）
 */
export function localDirForLon(lonRad: number): THREE.Vector3 {
  return localDirForLatLon(0, lonRad)
}

/**
 * localDirForLon()を緯度ありに一般化したもの。SphereGeometryの極角θ=π/2-latを上の頂点式に
 * 代入すると、緯度latの分だけY成分(cos θ = sin lat)が加わり、赤道方向の成分にcos latが掛かる形
 * になる（lat=0で元のlocalDirForLon()と一致する）。都市マーカーなど地表の任意の点を
 * 地球メッシュのローカル座標で表すのに使う
 */
export function localDirForLatLon(latRad: number, lonRad: number): THREE.Vector3 {
  return new THREE.Vector3(
    Math.cos(lonRad) * Math.cos(latRad),
    Math.sin(latRad),
    -Math.sin(lonRad) * Math.cos(latRad)
  )
}
