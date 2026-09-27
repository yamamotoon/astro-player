import * as THREE from 'three'
import SunCalc from 'suncalc'

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

// ---- 実際の物理値(km)。月半径=1になるよう、常にこれらから比率を算出する ----
export const MOON_RADIUS_KM = 1737
export const EARTH_RADIUS_KM = 6371
export const SUN_RADIUS_KM = 696000
export const EARTH_MOON_DIST_KM = 384400
export const EARTH_SUN_DIST_KM = 149600000

export const MOON_R = MOON_RADIUS_KM / MOON_RADIUS_KM
export const EARTH_R = EARTH_RADIUS_KM / MOON_RADIUS_KM
export const SUN_R = SUN_RADIUS_KM / MOON_RADIUS_KM
export const EARTH_MOON_DIST = EARTH_MOON_DIST_KM / MOON_RADIUS_KM
export const EARTH_SUN_DIST = EARTH_SUN_DIST_KM / MOON_RADIUS_KM

// ---- 内惑星（水星・金星・火星）。地球の公転ビューアのみでON/OFFする(ScaleModelConfig.
// showInnerPlanets)。衛星は持たない前提（火星の衛星フォボス/ダイモスは省略） ----
export type InnerPlanetKey = 'mercury' | 'venus' | 'mars'
// 太陽に近い順（配置・ループの基準順）
export const INNER_PLANET_KEYS: readonly InnerPlanetKey[] = ['mercury', 'venus', 'mars']
export type BodyKey = 'sun' | InnerPlanetKey | 'earth' | 'moon'

const MERCURY_RADIUS_KM = 2439.7
const VENUS_RADIUS_KM = 6051.8
const MARS_RADIUS_KM = 3389.5
const MERCURY_SUN_DIST_KM = 57_900_000
const VENUS_SUN_DIST_KM = 108_200_000
const MARS_SUN_DIST_KM = 227_900_000

export const MERCURY_R = MERCURY_RADIUS_KM / MOON_RADIUS_KM
export const VENUS_R = VENUS_RADIUS_KM / MOON_RADIUS_KM
export const MARS_R = MARS_RADIUS_KM / MOON_RADIUS_KM
const MERCURY_SUN_DIST = MERCURY_SUN_DIST_KM / MOON_RADIUS_KM
const VENUS_SUN_DIST = VENUS_SUN_DIST_KM / MOON_RADIUS_KM
const MARS_SUN_DIST = MARS_SUN_DIST_KM / MOON_RADIUS_KM

// 公転周期(日)。地球のみdayOfYearFraction()（暦年基準、周期≒365.25日限定の簡略計算）を使うため、
// 他の惑星はこの日数を使う専用の角度計算(orbitalAngleFromEpoch())を別途用意している
export const INNER_PLANET_ORBIT_DAYS: Record<InnerPlanetKey, number> = {
  mercury: 87.969, venus: 224.701, mars: 686.980,
}
// 自転周期(日、恒星に対する周期)。負の値は逆向きの自転（金星は逆行自転）。
// 地軸の傾きは考慮せず、公転面に垂直な軸(Y)周りに回す簡略表現
export const INNER_PLANET_SPIN_DAYS: Record<InnerPlanetKey, number> = {
  mercury: 58.646, venus: -243.025, mars: 1.025957,
}

// ---- 配置パターン（実比率 / 見やすく） ----
export type PlanetKey = InnerPlanetKey | 'earth'
// 太陽に近い順
const PLANET_KEYS: readonly PlanetKey[] = ['mercury', 'venus', 'earth', 'mars']

export interface Layout {
  radius: Record<BodyKey, number>
  /** 太陽の中心〜惑星の中心 */
  sunDist: Record<PlanetKey, number>
  /** 地球の中心〜月の中心 */
  moonOrbit: number
}

export const REAL_LAYOUT: Layout = {
  radius: { sun: SUN_R, mercury: MERCURY_R, venus: VENUS_R, earth: EARTH_R, mars: MARS_R, moon: MOON_R },
  sunDist: { mercury: MERCURY_SUN_DIST, venus: VENUS_SUN_DIST, earth: EARTH_SUN_DIST, mars: MARS_SUN_DIST },
  moonOrbit: EARTH_MOON_DIST,
}

// 半径と、太陽側のとなりの天体とのすき間から配置を作る（すき間>0なら天体どうしは重ならない）。
// 地球は月の公転範囲の外側を端とする
function layoutFromGaps(radius: Record<BodyKey, number>, gap: Record<PlanetKey, number>, moonOrbit: number): Layout {
  const reach = (key: PlanetKey) => (key === 'earth' ? moonOrbit + radius.moon : radius[key])
  const sunDist = {} as Record<PlanetKey, number>
  let edge = radius.sun
  for (const key of PLANET_KEYS) {
    sunDist[key] = edge + gap[key] + reach(key)
    edge = sunDist[key] + reach(key)
  }
  return { radius, sunDist, moonOrbit }
}

// 長さは地球の半径=10の単位
export const DEFORM_LAYOUT = layoutFromGaps(
  { sun: 20, mercury: 6, venus: 9.7, earth: 10, mars: 7.1, moon: 5 },
  { mercury: 61, venus: 42, earth: 5, mars: 44 },
  25,
)

// 太陽を原点（この系で唯一動かない基準点）、Y=公転面(黄道面=XZ平面)の法線。
// 地球・月・内惑星の位置は円軌道で簡略化した公転運動により、毎フレームcomputeOrbitalPositions()が
// これらのVector3を書き換える（呼び出し側はこのオブジェクトへの参照を持ち続けるだけでよい）
export const SUN_POS = new THREE.Vector3(0, 0, 0)
export const EARTH_POS = new THREE.Vector3(EARTH_SUN_DIST, 0, 0)
export const MOON_POS = new THREE.Vector3(EARTH_SUN_DIST, 0, EARTH_MOON_DIST)
const MERCURY_POS = new THREE.Vector3(MERCURY_SUN_DIST, 0, 0)
const VENUS_POS = new THREE.Vector3(VENUS_SUN_DIST, 0, 0)
const MARS_POS = new THREE.Vector3(MARS_SUN_DIST, 0, 0)
export const INNER_PLANET_POS: Record<InnerPlanetKey, THREE.Vector3> = {
  mercury: MERCURY_POS, venus: VENUS_POS, mars: MARS_POS,
}

// 地球の自転軸: 公転面の法線(Y)に対して実際の地軸傾斜23.44度だけ傾ける。
// 符号は-EARTH_AXIAL_TILT_DEGにする(+だと北半球の夏至(6月)に北極が反太陽側を向いてしまい、
// 実際の季節と逆になるバグがあった。dayOfYearFraction()の公転角度の基準と、この傾きの
// 向きの組み合わせで初めて決まるものなので、数値検証で確認して修正した)
const EARTH_AXIAL_TILT_DEG = 23.44
export const EARTH_AXIS = new THREE.Vector3(0, 1, 0)
  .applyAxisAngle(new THREE.Vector3(0, 0, 1), THREE.MathUtils.degToRad(-EARTH_AXIAL_TILT_DEG))

// 月の軌道面: 実際は地球の公転面(黄道面)に対して約5.14度傾いている。実際の昇交点は約18.6年周期で
// 歳差運動するが、簡略化のため固定軸(X軸)まわりの傾きとして扱う（このアプリの円軌道簡略化と同じ方針）
const MOON_ORBIT_INCLINATION_DEG = 5.14
export const MOON_ORBIT_TILT_QUAT = new THREE.Quaternion()
  .setFromAxisAngle(new THREE.Vector3(1, 0, 0), THREE.MathUtils.degToRad(MOON_ORBIT_INCLINATION_DEG))

// 月の自転軸。実際の自転軸は公転面に対して約1.5度しか傾いていないため、EARTH_AXISと違い
// 傾きは無視してY軸のまま扱う（潮汐固定の見た目には影響しない誤差）
export const MOON_SPIN_AXIS = new THREE.Vector3(0, 1, 0)

/**
 * 円軌道で簡略化した公転運動により、太陽・地球・月・内惑星の位置関係からEARTH_POS/MOON_POS/
 * INNER_PLANET_POSを書き換える（メッシュ等のシーングラフには触れない。呼び出し側
 * (scaleModel3d.tsのsyncSceneToOrbitalState())が別途反映する）。
 * 地球の公転角度は年内の経過日数から、月の公転角度は実際の月相(SunCalcの実測値。新月=0で
 * 地球と太陽の間、満月=0.5で太陽の反対側)を基準にしている。
 * 距離はlayoutのものを使う。角度の計算式は配置パターンによらないため、月の公転角度(=満ち欠けの形)は
 * 常に正確なまま
 */
export function computeOrbitalPositions(date: Date, layout: Layout): number {
  const sunEarthDist = layout.sunDist.earth
  const earthMoonDist = layout.moonOrbit

  // Z成分の符号を反転させて(cosθ, -sinθ)にすることで、+Y(北)から見て反時計回り
  // （実際の公転方向。地球の自転と同じ向き）になるようにしている。単純な(cosθ, sinθ)は
  // +Y側から見て時計回りになってしまうため(issue-009で発覚したバグの修正)
  const earthAngle = dayOfYearFraction(date) * Math.PI * 2
  EARTH_POS.set(Math.cos(earthAngle) * sunEarthDist, 0, -Math.sin(earthAngle) * sunEarthDist)

  const moonPhase = SunCalc.getMoonIllumination(date).phase // 0(新月)〜1(次の新月)
  const sunwardAngle = earthAngle + Math.PI // 地球から見て太陽がある方向
  const moonAngle = sunwardAngle + moonPhase * Math.PI * 2
  // 地球から見た月の方向(moonAngle)は地球の公転面(XZ平面)を基準に定義したうえで、
  // その平面自体をMOON_ORBIT_TILT_QUATで傾けることで、月の軌道面の傾きを再現する。
  // EARTH_POSと同じく(cosθ, -sinθ)の符号にして、月の公転も北から見て反時計回りにする
  const moonOffset = new THREE.Vector3(Math.cos(moonAngle) * earthMoonDist, 0, -Math.sin(moonAngle) * earthMoonDist)
    .applyQuaternion(MOON_ORBIT_TILT_QUAT)
  MOON_POS.set(EARTH_POS.x + moonOffset.x, moonOffset.y, EARTH_POS.z + moonOffset.z)

  // 内惑星（非表示中でも位置自体は常に計算しておく。表示切替した瞬間にも正しい位置になっている
  // 必要があるため。表示するかどうかはscaleModel3d.ts側の関心事）
  for (const key of INNER_PLANET_KEYS) {
    const dist = layout.sunDist[key]
    const angle = orbitalAngleFromEpoch(date, INNER_PLANET_ORBIT_DAYS[key])
    INNER_PLANET_POS[key].set(Math.cos(angle) * dist, 0, -Math.sin(angle) * dist)
  }
  return earthAngle
}
