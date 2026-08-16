import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import SunCalc from 'suncalc'
import { t } from './i18n'
import earthTextureUrl from './assets/earth-texture.png'
import moonTextureUrl from './assets/moon-texture.png'
import { PlaybackController } from './playbackController'

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

// ---- 内惑星（水星・金星・火星）。地球の公転ビューアのみでON/OFFする(ScaleModelConfig.
// showInnerPlanets)実験的な追加。衛星を持たない前提（火星の衛星フォボス/ダイモスは省略）で、
// 「系全体」ボタン(REAL_SATELLITE_ORBIT_RADIUS等)にもエントリを作らない ----
const MERCURY_RADIUS_KM = 2439.7
const VENUS_RADIUS_KM = 6051.8
const MARS_RADIUS_KM = 3389.5
const MERCURY_SUN_DIST_KM = 57_900_000
const VENUS_SUN_DIST_KM = 108_200_000
const MARS_SUN_DIST_KM = 227_900_000
// 公転周期(日)。地球のみdayOfYearFraction()（暦年基準、周期≒365.25日限定の簡略計算）を使うため、
// 他の惑星はこの日数を使う専用の角度計算(orbitalAngleFromEpoch())を別途用意する
const MERCURY_ORBIT_DAYS = 87.969
const VENUS_ORBIT_DAYS = 224.701
const MARS_ORBIT_DAYS = 686.980

const MERCURY_R = MERCURY_RADIUS_KM / MOON_RADIUS_KM
const VENUS_R = VENUS_RADIUS_KM / MOON_RADIUS_KM
const MARS_R = MARS_RADIUS_KM / MOON_RADIUS_KM
const MERCURY_SUN_DIST = MERCURY_SUN_DIST_KM / MOON_RADIUS_KM
const VENUS_SUN_DIST = VENUS_SUN_DIST_KM / MOON_RADIUS_KM
const MARS_SUN_DIST = MARS_SUN_DIST_KM / MOON_RADIUS_KM

// ---- デフォルメモード（issue #007。実験的）----
// 実際の相対サイズ比(約109:1)のままだと「認識できる大きさ」と「重ならない」が両立しないため、
// デフォルメ時は太陽・地球・月を全て同じ半径にする。距離は「表面間のギャップ」から逆算することで
// (中心間距離 = 半径×2 + ギャップ)、ギャップ>0である限り構造的に重なりようがない。
// 距離の比率(太陽〜地球 / 地球〜月)は、月の満ち欠け（太陽→地球方向を共用するDirectionalLightの
// 近似）にわずかな誤差を生むが、学習用途では無視できるレベルのため「見やすさ」を優先して決める
// （詳細はdocs/issue-007-scale-model-deform-mode.md参照）
const DEFORM_BODY_R = 10
const DEFORM_EARTH_MOON_GAP = 3 * DEFORM_BODY_R
const DEFORM_SUN_EARTH_GAP = 8 * DEFORM_BODY_R
const DEFORM_EARTH_MOON_DIST = 2 * DEFORM_BODY_R + DEFORM_EARTH_MOON_GAP
const DEFORM_SUN_EARTH_DIST = 2 * DEFORM_BODY_R + DEFORM_SUN_EARTH_GAP

// 内惑星のデフォルメ距離。既存のDEFORM_SUN_EARTH_DIST(=100)は変えない(既存3画面の見た目を
// 変えないため)。水星・金星はその内側、火星は外側に、隣り合うリングの中心間距離が
// 常に2*DEFORM_BODY_R(=20)以上空くように配置し、太陽・惑星同士がリング半径の差だけでは
// 重ならないようにする。ただし月は地球を中心に別途EARTH_MOON_DISTぶん動くため、月と
// 水星/金星/火星が特定の角度でごく稀に接近する可能性はこの計算だけでは排除できない
// （3天体(太陽・地球・月)だけを対象にしたissue #007の重なり回避保証は、6天体には及ばない
// 実験的な拡張であることの注記）
const DEFORM_MERCURY_SUN_DIST = 40
const DEFORM_VENUS_SUN_DIST = 70
const DEFORM_MARS_SUN_DIST = 170

// 太陽を原点（この系で唯一動かない基準点）、Y=公転面(黄道面=XZ平面)の法線。
// 地球・月の位置は円軌道で簡略化した公転運動により、毎フレームcomputeOrbitalPositions()が
// この2つのVector3を書き換える（他の箇所はこのオブジェクトへの参照を持ち続けるだけでよい）
const SUN_POS = new THREE.Vector3(0, 0, 0)
const EARTH_POS = new THREE.Vector3(EARTH_SUN_DIST, 0, 0)
const MOON_POS = new THREE.Vector3(EARTH_SUN_DIST, 0, EARTH_MOON_DIST)
const MERCURY_POS = new THREE.Vector3(MERCURY_SUN_DIST, 0, 0)
const VENUS_POS = new THREE.Vector3(VENUS_SUN_DIST, 0, 0)
const MARS_POS = new THREE.Vector3(MARS_SUN_DIST, 0, 0)

// 地球の自転軸: 公転面の法線(Y)に対して実際の地軸傾斜23.44度だけ傾ける。
// 符号は-EARTH_AXIAL_TILT_DEGにする(+だと北半球の夏至(6月)に北極が反太陽側を向いてしまい、
// 実際の季節と逆になるバグがあった。dayOfYearFraction()の公転角度の基準と、この傾きの
// 向きの組み合わせで初めて決まるものなので、数値検証で確認して修正した)
const EARTH_AXIAL_TILT_DEG = 23.44
const EARTH_AXIS = new THREE.Vector3(0, 1, 0)
  .applyAxisAngle(new THREE.Vector3(0, 0, 1), THREE.MathUtils.degToRad(-EARTH_AXIAL_TILT_DEG))

// 月の軌道面: 実際は地球の公転面(黄道面)に対して約5.14度傾いている。実際の昇交点は約18.6年周期で
// 歳差運動するが、簡略化のため固定軸(X軸)まわりの傾きとして扱う（このアプリの円軌道簡略化と同じ方針）
const MOON_ORBIT_INCLINATION_DEG = 5.14
const MOON_ORBIT_TILT_QUAT = new THREE.Quaternion()
  .setFromAxisAngle(new THREE.Vector3(1, 0, 0), THREE.MathUtils.degToRad(MOON_ORBIT_INCLINATION_DEG))

// 月の自転軸。実際の自転軸は公転面に対して約1.5度しか傾いていないため、EARTH_AXISと違い
// 傾きは無視してY軸のまま扱う（潮汐固定の見た目には影響しない誤差）
const MOON_SPIN_AXIS = new THREE.Vector3(0, 1, 0)

// 地球儀上の位置マーカー（東京）。アプリの緯度経度入力欄の既定値(index.html #lat/#lng)と同じ
const TOKYO_LAT_DEG = 35.6762
const TOKYO_LON_DEG = 139.6503
// マーカー(円錐)の大きさ。地球メッシュの子として実寸半径(EARTH_R)基準で置くので、
// デフォルメ時の拡大縮小(applyDeformVisuals()のscale)にも自動で追従する
const MARKER_HEIGHT = 0.5
const MARKER_RADIUS = 0.15

type BodyKey = 'sun' | 'mercury' | 'venus' | 'earth' | 'mars' | 'moon'
// 内惑星3つ(showInnerPlanets=trueの時だけ使う)。太陽に近い順（配置・ループの基準順）
const INNER_PLANET_KEYS = ['mercury', 'venus', 'mars'] as const
// 表示/非表示に関わらず全天体。scale適用など「見えているかは関係なく全部そろえておきたい」処理で使う
// （表示対象を絞るactiveBodyKeys()とは目的が違うので取り違えないよう別名にしている）
const ALL_BODY_KEYS: BodyKey[] = ['sun', 'mercury', 'venus', 'earth', 'mars', 'moon']

// 「系全体」ボタンで使う、その天体の衛星の公転半径（issue #006）。今日の実際の衛星の位置ではなく
// 公転半径そのものを使うことで、衛星が軌道上のどこにいても画面外に出ない、日付に依存しない距離に
// なる。月には衛星が無いためエントリが無い（UI側でボタン自体を隠す）。デフォルメモード（issue #007）
// では実際の距離ではなくデフォルメ後の距離を使う必要があるため、実寸/デフォルメの2セットを用意する
const REAL_SATELLITE_ORBIT_RADIUS: Partial<Record<BodyKey, number>> = {
  sun: EARTH_SUN_DIST,
  earth: EARTH_MOON_DIST,
}
const DEFORM_SATELLITE_ORBIT_RADIUS: Partial<Record<BodyKey, number>> = {
  sun: DEFORM_SUN_EARTH_DIST,
  earth: DEFORM_EARTH_MOON_DIST,
}
export type SimMode = 'day' | 'month' | 'year'

// 各モード（既存の「スケール」／地球の公転ビューア／地球の自転ビューア）は独立させ、
// 同時に複数インスタンスを存在させない前提にする（呼び出し側がモード切替のたびに
// dispose()→newで作り直す）。だからこそ画面ごとの違いは、この設定オブジェクトだけで表現できる
export interface ScaleModelConfig {
  /** 時間バーに表示するモードボタン（この順でUIに並ぶ） */
  availableModes: SimMode[]
  /** 起動直後に選択されているモード。availableModesに含まれている必要がある */
  defaultMode: SimMode
  /** デフォルメ表示（issue #007）で起動するか */
  deformDefault: boolean
  /** カメラが最初にフォーカスする対象天体 */
  defaultTarget: BodyKey
  /** 水星・金星・火星を表示するか（実験的。既定はfalseで既存3画面の見た目を変えない） */
  showInnerPlanets?: boolean
}

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

  // 衛星の公転ルート（軌道円）: 半径1の円ジオメトリを毎フレームscaleで実際の軌道半径に広げる。
  // earthOrbitLineは太陽(原点)中心で固定、moonOrbitLineは地球の位置を追って毎フレーム再配置する
  private earthOrbitLine!: THREE.LineLoop
  private moonOrbitLine!: THREE.LineLoop

  // デバッグ用: 当たり判定・引き出し線の距離計算に実際に使っている「ラベルのサイズ」
  // (textHalfWs/textHalfHs、ctx.measureText()の実測値)を枠線で可視化する。
  // ScaleModel3D.DEBUG_SHOW_LABEL_SIZE を切り替えるだけでON/OFFできる
  private debugLabelSizeBoxes: THREE.LineLoop[] = []

  // カメラ情報の常時表示UI（テキスト）
  private debugHudEl = document.getElementById('scale-debug-hud')

  // 時間バー（日/月/年切り替え・シークバー・再生/停止。issue #004）
  private modeButtons = {
    day: document.getElementById('scale-mode-day') as HTMLButtonElement,
    month: document.getElementById('scale-mode-month') as HTMLButtonElement,
    year: document.getElementById('scale-mode-year') as HTMLButtonElement,
  }
  private playbackPlayBtn = document.getElementById('scale-play-btn') as HTMLButtonElement
  private playbackSeekbar = document.getElementById('scale-seekbar') as HTMLInputElement
  private playbackDateLabel = document.getElementById('scale-sim-date-label') as HTMLElement
  private static readonly SEEKBAR_MAX = 1000

  // ---- ステップ再生 A/B比較用（一時的。docs/issue-009。判断がついたら片方を削除する） ----
  private stepAbToggleBtn = document.getElementById('scale-step-ab-toggle') as HTMLButtonElement
  private stepGroupBackA = document.getElementById('scale-step-back-a') as HTMLElement
  private stepGroupFwdA = document.getElementById('scale-step-fwd-a') as HTMLElement
  private stepGroupBackB = document.getElementById('scale-step-back-b') as HTMLElement
  private stepGroupFwdB = document.getElementById('scale-step-fwd-b') as HTMLElement
  private stepABackBtn = document.getElementById('scale-step-a-back') as HTMLButtonElement
  private stepAFwdBtn = document.getElementById('scale-step-a-fwd') as HTMLButtonElement
  private stepUiVariant: 'A' | 'B' = 'B'
  // 案A: 選択中のモードに応じて1ステップの刻み幅を変える（日→1時間、月→1日、年→1か月）。
  // クラス先頭側のフィールド初期化子はDAY_MS（クラス下部で定義）より先に評価されるため、
  // ここでは参照できず素の値を書く
  private static readonly STEP_A_DELTA_MS: Record<SimMode, number> = {
    day: 60 * 60 * 1000,
    month: 24 * 60 * 60 * 1000,
    year: 30 * 24 * 60 * 60 * 1000,
  }
  private static readonly STEP_A_LABEL: Record<SimMode, string> = {
    day: '1時間', month: '1日', year: '1か月',
  }
  // 案B: モードに関わらず時/日/月の3段を常に表示する
  private static readonly STEP_B_DELTA_MS: Record<'hour' | 'day' | 'month', number> = {
    hour: 60 * 60 * 1000, day: 24 * 60 * 60 * 1000, month: 30 * 24 * 60 * 60 * 1000,
  }

  // 画面上部中央に常時表示する、現在シミュレーションしている日時（シークバー横の小さいラベルとは別）
  private dateHudEl = document.getElementById('scale-date-hud') as HTMLElement

  // カメラの向きインジケーター: メインの3Dワールドとは独立した固定サイズのミニビューポートに
  // 座標軸モデルを描画し、メインカメラの「向き」だけを毎フレーム同期する（位置・ズームは無視）
  private gizmoScene: THREE.Scene
  private gizmoCamera: THREE.PerspectiveCamera
  private gizmoRenderer: THREE.WebGLRenderer | null = null
  private gizmoCanvas = document.getElementById('scale-angle-gizmo') as HTMLCanvasElement | null

  private readonly onKeyDown: (e: KeyboardEvent) => void
  private readonly onPointerDown: (e: PointerEvent) => void
  private readonly onPointerUp: (e: PointerEvent) => void
  private readonly onPointerCancel: (e: PointerEvent) => void

  // dispose()で確実に後始末するための汎用リスナー登録ヘルパー。addEventListenerした分だけ
  // removeEventListenerする関数を積んでおき、dispose()で全部呼ぶ（個別にフィールドを持たなくて済む）
  private cleanupFns: Array<() => void> = []
  private on(target: EventTarget, type: string, handler: EventListenerOrEventListenerObject): void {
    target.addEventListener(type, handler)
    this.cleanupFns.push(() => target.removeEventListener(type, handler))
  }

  // このインスタンスで表示するモード（ScaleModelConfig.availableModes）。時間バーのボタン表示に使う
  private availableModes: SimMode[] = ['day', 'month', 'year']
  // 水星・金星・火星を表示するか（ScaleModelConfig.showInnerPlanets）。activeBodyKeys()が
  // ラベル・当たり判定・軌道円などループ対象を絞るのに使う唯一の分岐点
  private showInnerPlanets = false

  // タップ/クリック判定用（ブラウザのclickイベントはドラッグ後のmouseupでも発火してしまうため、
  // pointerdown/pointerup間の移動量を自前で見て「実質動いていない時だけタップ扱い」にする）。
  // pointerIdで指を区別する: 2本目の指が触れた時点でタップ候補を無効化することで、
  // ピンチ/パン中に一方の指を離した際に誤ってタップと判定されるのを防ぐ
  private tapCandidate: { pointerId: number; x: number; y: number } | null = null
  private activePointerCount = 0
  private static readonly TAP_MOVE_THRESHOLD_PX = 6

  // 注視点として選んでいる天体。常に天体1つだけを指す（issue #006）。カメラを動かすのは
  // 「フォーカス」「系全体」ボタンだけで、タップ自体はこの対象を切り替えるだけでカメラは動かさない
  private targetBody: BodyKey = 'sun'
  private targetFocusBtn = document.getElementById('scale-target-focus-btn') as HTMLButtonElement
  private targetSystemBtn = document.getElementById('scale-target-system-btn') as HTMLButtonElement

  // デフォルメモード（issue #007。実験的）: 太陽・地球・月を全て同じ半径(DEFORM_BODY_R)にし、
  // 距離もDEFORM_EARTH_MOON_DIST/DEFORM_SUN_EARTH_DISTに置き換える単純な2状態トグル。
  // 実寸⇔デフォルメの切替のみで、中間の倍率は持たない（過去の連続スライダー案は撤去。
  // backup/deform-distance-scale-wipブランチ参照）
  private deformMode = false
  private deformToggleBtn = document.getElementById('scale-deform-toggle-btn') as HTMLButtonElement

  // 対象の天体へのカメラ追従（issue #005）。前フレームの位置との差分だけ注視点・カメラ位置の
  // 両方に加算する「平行移動」方式。対象が変わった瞬間はhandleTap()側でnullにリセットされ、
  // いきなり大きくジャンプしないようにする
  private lastTrackedPos: THREE.Vector3 | null = null

  // キー付きで天体を引けるようにするルックアップ（当たり判定・選択・フォーカスで使う）
  private meshByKey!: Record<BodyKey, THREE.Mesh>
  private posByKey!: Record<BodyKey, THREE.Vector3>
  private radiusByKey!: Record<BodyKey, number>
  private labelMaps!: Record<BodyKey, { normal: THREE.Texture; selected: THREE.Texture }>
  // 選択中の天体を示す輪郭（本体をわずかに拡大し裏面だけ描画する殻。本体のテクスチャ/マテリアルには
  // 一切触れないので見た目が変わらない）
  private outlineByKey!: Record<BodyKey, THREE.Mesh>
  // ラベル・引き出し線もキーで引けるようにする（updateLabels()等の汎用ループ用。sun/earth/moonは
  // sunLabel等の個別フィールドとしても持ち続けるが、こちらはループ処理専用の参照先）
  private labelByKey!: Record<BodyKey, THREE.Sprite>
  private labelFracByKey!: Record<BodyKey, { halfWFrac: number; halfHFrac: number }>
  private leaderByKey!: Record<BodyKey, THREE.Line>

  // 内惑星（水星・金星・火星）専用のメッシュ・軌道円ルックアップ。showInnerPlanets=falseの時は
  // 常に3つとも存在はするが.visible=falseで非表示にする（activeBodyKeys()もこのキーを含めない）
  private innerPlanetMeshByKey: Partial<Record<BodyKey, THREE.Mesh>> = {}
  private innerPlanetOrbitLineByKey: Partial<Record<BodyKey, THREE.LineLoop>> = {}
  private static readonly REAL_INNER_PLANET_DIST: Record<'mercury' | 'venus' | 'mars', number> = {
    mercury: MERCURY_SUN_DIST, venus: VENUS_SUN_DIST, mars: MARS_SUN_DIST,
  }
  private static readonly DEFORM_INNER_PLANET_DIST: Record<'mercury' | 'venus' | 'mars', number> = {
    mercury: DEFORM_MERCURY_SUN_DIST, venus: DEFORM_VENUS_SUN_DIST, mars: DEFORM_MARS_SUN_DIST,
  }
  private static readonly INNER_PLANET_ORBIT_DAYS: Record<'mercury' | 'venus' | 'mars', number> = {
    mercury: MERCURY_ORBIT_DAYS, venus: VENUS_ORBIT_DAYS, mars: MARS_ORBIT_DAYS,
  }
  // モジュール直下のMERCURY_POS等（EARTH_POS/MOON_POSと同じく、computeOrbitalPositions()が
  // 毎フレーム書き換える共有Vector3）をキーで引けるようにする
  private static readonly INNER_PLANET_POS: Record<'mercury' | 'venus' | 'mars', THREE.Vector3> = {
    mercury: MERCURY_POS, venus: VENUS_POS, mars: MARS_POS,
  }

  // ---- 時間連動（自転・公転・シークバー） ----
  // シークバーの起点(0%)は常に「モードに入った時点の実時刻」。そこから未来方向にのみ進む
  // （モード切り替えのたびに現在時刻へリセットする。issue #004参照）
  private simAnchorDate = new Date()
  private simMode: SimMode = 'day'
  private playback = new PlaybackController(ScaleModel3D.SIM_PERIOD_MS.day, ScaleModel3D.SIM_REAL_DURATION_MS)
  // 地球の地軸傾斜の基準姿勢（EARTH_AXIS方向にローカルY軸を向けた回転）。毎フレームこれに
  // その時点の自転角度を合成して絶対的な向きを求める（フレーム差分の累積だと、シークバーで
  // 巻き戻した時に正しい向きに戻せないため）
  private earthTiltQuaternion = new THREE.Quaternion()
  private earthAxisLine!: THREE.Line
  private sunLightTarget!: THREE.Object3D

  private static readonly DAY_MS = 24 * 60 * 60 * 1000
  private static readonly SIM_PERIOD_MS: Record<SimMode, number> = {
    day: ScaleModel3D.DAY_MS,
    month: 30 * ScaleModel3D.DAY_MS,
    year: 365 * ScaleModel3D.DAY_MS,
  }
  // 日/月/年どのモードも、既存の24hシミュレーションと同じ体感速度（1周期を24秒で再生）に揃える
  private static readonly SIM_REAL_DURATION_MS = 24_000

  constructor(canvas: HTMLCanvasElement, config: ScaleModelConfig) {
    // configをフィールドへ反映するのは、下のcomputeOrbitalPositions()（deformModeを見る）や
    // 時間バーの初期化より前でなければならない
    this.availableModes = config.availableModes
    this.deformMode = config.deformDefault
    this.simMode = config.defaultMode
    this.targetBody = config.defaultTarget
    this.showInnerPlanets = config.showInnerPlanets ?? false
    this.playback.setPeriod(ScaleModel3D.SIM_PERIOD_MS[config.defaultMode])

    // カメラの初期位置がEARTH_POSを参照するため、メッシュ等を作る前に一度、実際の現在時刻
    // (simAnchorDate、フィールド初期化子で既に設定済み)に基づく公転位置を計算しておく
    this.computeOrbitalPositions(this.currentSimDate())

    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
    this.renderer.setPixelRatio(window.devicePixelRatio)
    this.renderer.setClearColor(0x05051a)

    this.scene = new THREE.Scene()

    // far=500,000: 縦長画面でのframeAll()が必要とする距離（EARTH_SUN_DIST比で数倍になりうる。
    // moveCameraTo()参照）より確実に大きくしておかないと、距離自体は正しく計算されても
    // 描画がクリッピングされて見えなくなってしまう
    this.camera = new THREE.PerspectiveCamera(50, 1, 0.5, 500000)
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
    // パンは廃止（issue #005）。天体への追従が注視点を動かし続けるため、パンで手動でも
    // 注視点を動かせるようにすると常に競合する。回転・ズームは注視点を動かさないため影響しない
    this.controls.enablePan = false

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
      new THREE.MeshLambertMaterial({ map: new THREE.TextureLoader().load(earthTextureUrl) })
    )
    this.earthMesh.position.copy(EARTH_POS)
    this.earthMesh.userData.radius = EARTH_R
    // SphereGeometryのUV規約ではテクスチャの北極/南極はメッシュのローカルY軸上に来る。
    // 初期状態のままだとローカルY軸=ワールドY軸（傾き0°）のため、EARTH_AXIS（23.44度傾いた軸）で
    // 自転させるとテクスチャの極とEARTH_AXISが一致せず、自転につれて極がぶれてしまう。
    // ここで基準姿勢としてローカルY軸をEARTH_AXISへ向けておき、毎フレームsyncSceneToOrbitalState()が
    // この姿勢に自転角度を合成することで、極を動かさず赤道面だけを回すようになる
    this.earthTiltQuaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), EARTH_AXIS)
    this.earthMesh.quaternion.copy(this.earthTiltQuaternion)
    this.scene.add(this.earthMesh)

    // 東京の位置マーカー（円錐）。earthMeshの子にすることで、自転・公転・デフォルメの
    // 拡大縮小すべてに自動で追従する（別途フレームごとに位置を更新する必要がない）
    const tokyoDir = ScaleModel3D.localDirForLatLon(
      THREE.MathUtils.degToRad(TOKYO_LAT_DEG), THREE.MathUtils.degToRad(TOKYO_LON_DEG)
    )
    const tokyoMarker = new THREE.Mesh(
      new THREE.ConeGeometry(MARKER_RADIUS, MARKER_HEIGHT, 12),
      new THREE.MeshBasicMaterial({ color: 0xff3b3b })
    )
    // 先端(頂点)がピンポイントで地表に接し、底面が外側に広がる「逆さの円錐」にする。
    // meshの中心位置はさっきと同じ式のままでよい（向きを反転した分、先端が内側(EARTH_R)、
    // 底面が外側(EARTH_R+MARKER_HEIGHT)に来るよう自動的にずれる）
    tokyoMarker.position.copy(tokyoDir).multiplyScalar(EARTH_R + MARKER_HEIGHT / 2)
    // ConeGeometryは既定でローカル+Y方向が底面→先端。地表の法線(tokyoDir)の「逆向き」に
    // 先端を向けることで、先端が地球の中心側＝地表のピンポイントを指すようにする
    tokyoMarker.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), tokyoDir.clone().negate())
    this.earthMesh.add(tokyoMarker)

    // 地球の自転軸（デバッグ表示）: 公転軸(Y)から実際の地軸傾斜23.44度だけ傾いた向きに描画する。
    // 主役の天体・ラベルより控えめに見えるよう、短め・半透明の細い線にしている
    const axisLen = EARTH_R * 1.2
    const axisGeo = new THREE.BufferGeometry().setFromPoints([
      EARTH_AXIS.clone().multiplyScalar(-axisLen),
      EARTH_AXIS.clone().multiplyScalar(axisLen),
    ])
    this.earthAxisLine = new THREE.Line(axisGeo, new THREE.LineBasicMaterial({
      color: 0xaa7777, transparent: true, opacity: 0.4,
    }))
    this.earthAxisLine.position.copy(EARTH_POS)
    this.scene.add(this.earthAxisLine)

    // 衛星の公転ルート（軌道円）。半径1のXZ平面上の円を作り、毎フレーム実際の軌道半径にscaleする
    // （syncSceneToOrbitalState()参照）。主役の天体を邪魔しないよう控えめな半透明の線にしている
    this.earthOrbitLine = this.makeOrbitLine(0x6a86b8)
    this.moonOrbitLine = this.makeOrbitLine(0x9098a8)
    // 月の軌道面の傾き(MOON_ORBIT_TILT_QUAT)は固定なので、姿勢はここで一度だけ設定すればよい
    this.moonOrbitLine.quaternion.copy(MOON_ORBIT_TILT_QUAT)
    this.scene.add(this.earthOrbitLine, this.moonOrbitLine)

    this.moonMesh = new THREE.Mesh(
      new THREE.SphereGeometry(MOON_R, 16, 12),
      new THREE.MeshLambertMaterial({ map: new THREE.TextureLoader().load(moonTextureUrl) })
    )
    this.moonMesh.position.copy(MOON_POS)
    this.moonMesh.userData.radius = MOON_R
    this.scene.add(this.moonMesh)

    // 内惑星（水星・金星・火星。showInnerPlanets時のみ表示。実験的な追加）。
    // 専用のテクスチャ画像は用意していないため、実際の見た目に近い単色球で代用する。
    // 衛星を持たない前提（火星の衛星は省略）で、地球のような自転軸傾斜・自転アニメーションも
    // 持たせず、太陽を周回する動きだけを表現する
    const innerPlanetVisual: Record<typeof INNER_PLANET_KEYS[number], { radius: number; color: number }> = {
      mercury: { radius: MERCURY_R, color: 0x9c9490 },
      venus: { radius: VENUS_R, color: 0xe8d4a0 },
      mars: { radius: MARS_R, color: 0xc1440e },
    }
    const innerPlanetPos: Record<typeof INNER_PLANET_KEYS[number], THREE.Vector3> = {
      mercury: MERCURY_POS, venus: VENUS_POS, mars: MARS_POS,
    }
    for (const key of INNER_PLANET_KEYS) {
      const { radius, color } = innerPlanetVisual[key]
      const mesh = new THREE.Mesh(
        new THREE.SphereGeometry(radius, 24, 18),
        new THREE.MeshLambertMaterial({ color })
      )
      mesh.position.copy(innerPlanetPos[key])
      mesh.userData.radius = radius
      mesh.visible = this.showInnerPlanets
      this.scene.add(mesh)
      this.innerPlanetMeshByKey[key] = mesh

      const orbitLine = this.makeOrbitLine(0x6a86b8)
      orbitLine.scale.setScalar(this.deformMode ? ScaleModel3D.DEFORM_INNER_PLANET_DIST[key] : ScaleModel3D.REAL_INNER_PLANET_DIST[key])
      orbitLine.visible = this.showInnerPlanets
      this.scene.add(orbitLine)
      this.innerPlanetOrbitLineByKey[key] = orbitLine
    }

    // 太陽→地球方向の平行光線（実際の太陽光の近似）。月もほぼ同じ方向で照らされるため、
    // Sun→Earthの1本のDirectionalLightを共用する
    const sunLight = new THREE.DirectionalLight(0xffffff, 1.6)
    sunLight.position.copy(SUN_POS)
    this.sunLightTarget = sunLight.target
    this.sunLightTarget.position.copy(EARTH_POS)
    this.scene.add(sunLight)
    this.scene.add(this.sunLightTarget)
    // 夜側が完全な真っ黒にならない程度に、ごく控えめな環境光を足す
    this.scene.add(new THREE.AmbientLight(0xffffff, 0.12))

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

    // 内惑星のラベル・引き出し線（showInnerPlanets=falseの間はメッシュと同様.visible=falseにする）。
    // labelByKey等の全キー分をここで一度に作る都合上、いったんローカルに集めてから
    // 下の最終的なRecord組み立てでsun/earth/moonの分とまとめて代入する
    const innerPlanetLabelColor: Record<typeof INNER_PLANET_KEYS[number], string> = {
      mercury: '#b8afa8', venus: '#e8d4a0', mars: '#e08050',
    }
    const innerPlanetLabelKeyName: Record<typeof INNER_PLANET_KEYS[number], string> = {
      mercury: 'label-mercury', venus: 'label-venus', mars: 'label-mars',
    }
    const innerPlanetLabelSprite: Partial<Record<BodyKey, THREE.Sprite>> = {}
    const innerPlanetLabelFrac: Partial<Record<BodyKey, { halfWFrac: number; halfHFrac: number }>> = {}
    const innerPlanetLabelMap: Partial<Record<BodyKey, { normal: THREE.Texture; selected: THREE.Texture }>> = {}
    const innerPlanetLeader: Partial<Record<BodyKey, THREE.Line>> = {}
    const innerPlanetOutline: Partial<Record<BodyKey, THREE.Mesh>> = {}
    for (const key of INNER_PLANET_KEYS) {
      const info = this.makeLabel(t(innerPlanetLabelKeyName[key]), innerPlanetLabelColor[key])
      info.sprite.visible = this.showInnerPlanets
      this.scene.add(info.sprite)
      innerPlanetLabelSprite[key] = info.sprite
      innerPlanetLabelFrac[key] = { halfWFrac: info.halfWFrac, halfHFrac: info.halfHFrac }
      innerPlanetLabelMap[key] = { normal: info.normalMap, selected: info.selectedMap }

      const leader = this.makeLeaderLine('#8899bb')
      leader.visible = this.showInnerPlanets
      this.scene.add(leader)
      innerPlanetLeader[key] = leader

      innerPlanetOutline[key] = this.makeOutlineHull(this.innerPlanetMeshByKey[key]!)
    }

    this.meshByKey = {
      sun: this.sunMesh, earth: this.earthMesh, moon: this.moonMesh,
      mercury: this.innerPlanetMeshByKey.mercury!, venus: this.innerPlanetMeshByKey.venus!, mars: this.innerPlanetMeshByKey.mars!,
    }
    this.posByKey = {
      sun: SUN_POS, earth: EARTH_POS, moon: MOON_POS,
      mercury: MERCURY_POS, venus: VENUS_POS, mars: MARS_POS,
    }
    this.radiusByKey = {
      sun: SUN_R, earth: EARTH_R, moon: MOON_R,
      mercury: MERCURY_R, venus: VENUS_R, mars: MARS_R,
    }
    // config.deformDefault=trueで起動した場合、ここでメッシュのscale・カメラの最小ズーム距離を
    // 最初から合わせておく（toggleDeformMode()参照。実寸起動時はscale=1になるだけで無害）
    this.applyDeformVisuals()
    this.outlineByKey = {
      sun: this.makeOutlineHull(this.sunMesh),
      earth: this.makeOutlineHull(this.earthMesh),
      moon: this.makeOutlineHull(this.moonMesh),
      mercury: innerPlanetOutline.mercury!, venus: innerPlanetOutline.venus!, mars: innerPlanetOutline.mars!,
    }
    this.labelMaps = {
      sun: { normal: sunLabelInfo.normalMap, selected: sunLabelInfo.selectedMap },
      earth: { normal: earthLabelInfo.normalMap, selected: earthLabelInfo.selectedMap },
      moon: { normal: moonLabelInfo.normalMap, selected: moonLabelInfo.selectedMap },
      mercury: innerPlanetLabelMap.mercury!, venus: innerPlanetLabelMap.venus!, mars: innerPlanetLabelMap.mars!,
    }

    // 天体の実座標とラベル位置を結ぶ引き出し線（両端はupdateLabels()で毎フレーム更新する）
    this.sunLeader = this.makeLeaderLine('#8899bb')
    this.earthLeader = this.makeLeaderLine('#8899bb')
    this.moonLeader = this.makeLeaderLine('#8899bb')
    this.scene.add(this.sunLeader, this.earthLeader, this.moonLeader)

    // ラベル・引き出し線をキーで引けるようにまとめる（updateLabels()等の汎用ループで使う）
    this.labelByKey = {
      sun: this.sunLabel, earth: this.earthLabel, moon: this.moonLabel,
      mercury: innerPlanetLabelSprite.mercury!, venus: innerPlanetLabelSprite.venus!, mars: innerPlanetLabelSprite.mars!,
    }
    this.labelFracByKey = {
      sun: this.sunLabelFrac, earth: this.earthLabelFrac, moon: this.moonLabelFrac,
      mercury: innerPlanetLabelFrac.mercury!, venus: innerPlanetLabelFrac.venus!, mars: innerPlanetLabelFrac.mars!,
    }
    this.leaderByKey = {
      sun: this.sunLeader, earth: this.earthLeader, moon: this.moonLeader,
      mercury: innerPlanetLeader.mercury!, venus: innerPlanetLeader.venus!, mars: innerPlanetLeader.mars!,
    }

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

    // 天体を押す(クリック/タップ)たびに選択に追加し、既に選択済みの天体を押すと選択中の天体
    // すべてにフォーカスする。ブラウザのclickイベントはドラッグ後のmouseupでも発火してしまうため
    // (軌道回転の指を離した場所がたまたま天体の上だと誤発火する)、pointerdown/pointerupの
    // 移動量を自前で見て「実質動いていない時だけタップ扱い」にする
    this.onPointerDown = (e: PointerEvent) => {
      this.activePointerCount++
      // 1本目の指(または最初のマウスダウン)だけをタップ候補にする。2本目以降が触れた時点で
      // 複数指の操作(ピンチ/パン)だと分かるので、どちらの指が先に離れてもタップ扱いしない
      this.tapCandidate = this.activePointerCount === 1
        ? { pointerId: e.pointerId, x: e.clientX, y: e.clientY }
        : null
    }
    this.onPointerUp = (e: PointerEvent) => {
      this.activePointerCount = Math.max(0, this.activePointerCount - 1)
      const candidate = this.tapCandidate
      if (!candidate || candidate.pointerId !== e.pointerId) return
      this.tapCandidate = null
      const moved = Math.hypot(e.clientX - candidate.x, e.clientY - candidate.y)
      if (moved > ScaleModel3D.TAP_MOVE_THRESHOLD_PX) return
      this.handleTap(e.clientX, e.clientY)
    }
    // ブラウザ側の都合でタッチが打ち切られた場合(pointerup無しで終わる)も、カウント/候補を
    // 正しく後始末しないとactivePointerCountが狂ったままになり、以降タップが一切効かなくなる
    this.onPointerCancel = (e: PointerEvent) => {
      this.activePointerCount = Math.max(0, this.activePointerCount - 1)
      if (this.tapCandidate?.pointerId === e.pointerId) this.tapCandidate = null
    }
    canvas.addEventListener('pointerdown', this.onPointerDown)
    canvas.addEventListener('pointerup', this.onPointerUp)
    canvas.addEventListener('pointercancel', this.onPointerCancel)

    // 「Home」キーで全天体がフレームに収まる位置へ（3Dツールの定番ショートカット）。
    // Enter/Fキーは対象の天体へのフォーカス（フォーカスボタンと同じ効果のPC向け近道）
    this.onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Home') this.frameAll()
      if (e.key === 'Enter' || e.key === 'f' || e.key === 'F') this.focusOnTarget()
    }
    window.addEventListener('keydown', this.onKeyDown)

    // 「フォーカス」「系全体」ボタン（issue #006）。対象の天体は変えず、カメラの距離だけを
    // プリセットの距離にジャンプさせる。そこから先の手動ズーム・回転は制限しない
    this.on(this.targetFocusBtn, 'click', () => this.focusOnTarget())
    this.on(this.targetSystemBtn, 'click', () => this.focusOnSystemView())

    // デフォルメモード切り替え（実験的機能）
    this.on(this.deformToggleBtn, 'click', () => this.toggleDeformMode())
    this.updateDeformButtonUI()

    // 時間バー: 日/月/年切り替え・シークバー・再生/停止（issue #004）。availableModesに
    // 含まれないモードのボタンはこのインスタンスでは隠す（例: 地球の公転ビューアには「日」を出さない）
    for (const key of ['day', 'month', 'year'] as const) {
      const btn = this.modeButtons[key]
      btn.hidden = !this.availableModes.includes(key)
      this.on(btn, 'click', () => this.setSimMode(key))
    }
    this.on(this.playbackPlayBtn, 'click', () => this.togglePlayback())
    this.on(this.playbackSeekbar, 'input', () => {
      // 手動でシークバーを動かしたら再生を止める（既存の24hシミュレーションと同じ挙動）
      this.playback.pause()
      this.playback.seekFraction(parseInt(this.playbackSeekbar.value, 10) / ScaleModel3D.SEEKBAR_MAX)
    })

    // ステップ再生 A/B比較用（一時的）
    this.on(this.stepAbToggleBtn, 'click', () => {
      this.stepUiVariant = this.stepUiVariant === 'A' ? 'B' : 'A'
      this.updateStepUiVariant()
    })
    this.on(this.stepABackBtn, 'click', () => this.stepBy(-ScaleModel3D.STEP_A_DELTA_MS[this.simMode]))
    this.on(this.stepAFwdBtn, 'click', () => this.stepBy(ScaleModel3D.STEP_A_DELTA_MS[this.simMode]))
    for (const btn of document.querySelectorAll<HTMLButtonElement>('#scale-step-back-b .step-btn, #scale-step-fwd-b .step-btn')) {
      const unit = btn.dataset.unit as 'hour' | 'day' | 'month'
      const dir = Number(btn.dataset.dir)
      this.on(btn, 'click', () => this.stepAnchorBy(ScaleModel3D.STEP_B_DELTA_MS[unit] * dir))
    }
    this.updateStepUiVariant()
    this.updateStepALabels()

    this.updatePlaybackUI() // ボタンの見た目・シークバー・ラベルを初期状態に同期する

    this.handleResize()

    // 起動時: targetBodyの初期値の「系全体」（対象の衛星が軌道上のどこにいても収まる距離）から
    // スタートする。handleResize()の後に呼ぶことで、正しいアスペクト比で距離を計算できる
    this.focusOnSystemView()
    this.updateTargetButtonsUI()

    this.on(window, 'resize', () => this.handleResize())
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
    // controls.maxDistanceは本来「手動ズームでどこまで離れられるか」の上限だが、
    // OrbitControls.update()は毎フレームカメラ距離をこの上限以内に強制する。
    // frameDistance()/frameDistanceForBodies()側では計算結果をこの上限でクランプしなくなった
    // ため（縦長画面ではEARTH_SUN_DISTの1.5倍を超える距離が正しく必要になりうる。
    // frameAll()参照）、ここで動かす直前に上限そのものを必要な分だけ引き上げておく
    if (distance > this.controls.maxDistance) this.controls.maxDistance = distance
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
    // controls.maxDistance（手動ズームの上限）ではクランプしない。縦長画面など状況によっては
    // その上限を超える距離が正しく必要になるため（moveCameraTo()側で上限自体を引き上げる）
    const distance = Math.max(distV, distH) * margin
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

    // controls.maxDistance（手動ズームの上限）ではクランプしない。理由はframeDistance()と同じ
    const distance = Math.max(required, 0) * margin
    console.log('[ScaleModel3D] frameDistanceForBodies', {
      center: center.toArray().map(v => +v.toFixed(2)),
      dir: dir.toArray().map(v => +v.toFixed(4)),
      aspect: +this.camera.aspect.toFixed(4),
      margin, required: +required.toFixed(2), distance: +distance.toFixed(2),
      bodies: perBodyLog,
    })
    return distance
  }

  /**
   * frameDistanceForBodies()の「今の視線方向基準」の考え方を、衛星の公転軌道
   * （中心＝対象の天体位置、XZ平面上の半径orbitRadiusの円。issue #004の円軌道簡略化と同じ平面）
   * に適用したもの。円上の点φごとの必要距離 need(φ) = dot(dir,φ) + max(|dot(right,φ)|/tanH, |dot(up,φ)|/tanV)
   * は、絶対値をmax(+,-)に展開すると4本の単一正弦波 dot(dir±right/tanH, φ) / dot(dir±up/tanV, φ) の
   * 各点ごとの最大値になり、「φについてのmaxのmax」は展開前後で入れ替え可能なため、
   * 円全体でのneed(φ)の最大値は、この4本それぞれの振幅（sqrt(v.x²+v.z²)、三角関数の合成公式）の
   * 最大値に等しい。円上の全φを走査せずに厳密解が求まる（ブルートフォースサンプリングで検証済み）
   */
  private frameDistanceForOrbit(orbitRadius: number, margin: number): number {
    const dir = this.camera.position.clone().sub(this.controls.target)
    if (dir.lengthSq() < 1e-9) dir.set(1, 0.6, 1)
    dir.normalize()
    const right = new THREE.Vector3(1, 0, 0).applyQuaternion(this.camera.quaternion)
    const up = new THREE.Vector3(0, 1, 0).applyQuaternion(this.camera.quaternion)

    const vFovRad = THREE.MathUtils.degToRad(this.camera.fov)
    const hFovRad = 2 * Math.atan(Math.tan(vFovRad / 2) * this.camera.aspect)
    const tanV = Math.tan(vFovRad / 2)
    const tanH = Math.tan(hFovRad / 2)

    const amplitudeXZ = (v: THREE.Vector3) => Math.hypot(v.x, v.z)
    const rW = right.clone().divideScalar(tanH)
    const uV = up.clone().divideScalar(tanV)
    const required = orbitRadius * Math.max(
      amplitudeXZ(dir.clone().add(rW)),
      amplitudeXZ(dir.clone().sub(rW)),
      amplitudeXZ(dir.clone().add(uV)),
      amplitudeXZ(dir.clone().sub(uV)),
    )
    const distance = Math.max(required, 0) * margin
    console.log('[ScaleModel3D] frameDistanceForOrbit', {
      orbitRadius: +orbitRadius.toFixed(2),
      dir: dir.toArray().map(v => +v.toFixed(4)),
      margin, required: +required.toFixed(2), distance: +distance.toFixed(2),
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
    const bodies = this.focusableBodies()
    const center = new THREE.Vector3()
    for (const b of bodies) center.add(b.pos)
    center.divideScalar(bodies.length)

    this.moveCameraTo(center, this.frameDistanceForBodies(bodies, center, 1.15))
  }

  // ---- 時間連動（自転・公転・シークバー。issue #004） ----

  private currentSimDate(): Date {
    return new Date(this.simAnchorDate.getTime() + this.playback.elapsedMilliseconds)
  }

  /** その年の1月1日からの経過日数の割合(0〜1未満)。円軌道の公転角度の基準に使う簡略計算 */
  private static dayOfYearFraction(date: Date): number {
    const startOfYear = new Date(date.getFullYear(), 0, 1, 0, 0, 0, 0)
    const days = (date.getTime() - startOfYear.getTime()) / ScaleModel3D.DAY_MS
    return (days / 365.25) % 1
  }

  // 内惑星（水星・金星・火星）用。公転周期が1年から大きくずれる（水星88日・火星687日）ため、
  // dayOfYearFraction()のような「暦年で割ってmod 1」という簡略化は使えない
  // （年境界(12/31→1/1)で角度が不連続に飛んでしまう）。固定の基準日からの経過日数をそのまま
  // 周期で割ることで、年をまたいでも連続的に回り続けるようにする
  private static readonly ORBIT_EPOCH_MS = Date.UTC(2000, 0, 1)
  private static orbitalAngleFromEpoch(date: Date, periodDays: number): number {
    const elapsedDays = (date.getTime() - ScaleModel3D.ORBIT_EPOCH_MS) / ScaleModel3D.DAY_MS
    return (elapsedDays / periodDays) * Math.PI * 2
  }

  /**
   * 円軌道で簡略化した公転運動により、太陽・地球・月の位置関係からEARTH_POS/MOON_POSを書き換える
   * （メッシュ等のシーングラフには触れない。syncSceneToOrbitalState()が別途反映する）。
   * 地球の公転角度は年内の経過日数から、月の公転角度は実際の月相(SunCalcの実測値。新月=0で
   * 地球と太陽の間、満月=0.5で太陽の反対側)を基準にしている
   */
  private computeOrbitalPositions(date: Date): number {
    // デフォルメモード（issue #007）中は、実際の距離ではなくDEFORM_*_DISTを使う。角度の計算式は
    // 変えないため、月の公転角度(=満ち欠けの形)はどちらのモードでも常に正確なまま
    const sunEarthDist = this.deformMode ? DEFORM_SUN_EARTH_DIST : EARTH_SUN_DIST
    const earthMoonDist = this.deformMode ? DEFORM_EARTH_MOON_DIST : EARTH_MOON_DIST

    // Z成分の符号を反転させて(cosθ, -sinθ)にすることで、+Y(北)から見て反時計回り
    // （実際の公転方向。地球の自転と同じ向き）になるようにしている。単純な(cosθ, sinθ)は
    // +Y側から見て時計回りになってしまうため(issue-009で発覚したバグの修正)
    const earthAngle = ScaleModel3D.dayOfYearFraction(date) * Math.PI * 2
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

    // 内惑星（showInnerPlanets=falseでも非表示なだけで位置自体は常に計算しておく。
    // 表示切替した瞬間にも正しい位置になっている必要があるため）
    for (const key of INNER_PLANET_KEYS) {
      const dist = this.deformMode
        ? ScaleModel3D.DEFORM_INNER_PLANET_DIST[key] : ScaleModel3D.REAL_INNER_PLANET_DIST[key]
      const angle = ScaleModel3D.orbitalAngleFromEpoch(date, ScaleModel3D.INNER_PLANET_ORBIT_DAYS[key])
      ScaleModel3D.INNER_PLANET_POS[key].set(Math.cos(angle) * dist, 0, -Math.sin(angle) * dist)
    }
    return earthAngle
  }

  // 自転角度の基準（EARTH_AXIS周りの角度を測るための、軸に直交する2つの基準ベクトル）。
  // EARTH_AXISはZ成分を持たない（Yを Z軸周りに傾けているだけ）ため(0,0,1)と直交する
  private static readonly EARTH_AXIS_REF1 = new THREE.Vector3(0, 0, 1)
  private earthAxisRef2 = new THREE.Vector3().crossVectors(EARTH_AXIS, ScaleModel3D.EARTH_AXIS_REF1).normalize()

  private angleAroundEarthAxis(v: THREE.Vector3): number {
    return Math.atan2(v.dot(this.earthAxisRef2), v.dot(ScaleModel3D.EARTH_AXIS_REF1))
  }

  /**
   * UTC時刻から、赤道上で今どの経度が太陽の正面（南中）にあるかを求める（分点補正は考慮しない
   * 簡略計算）。UTC12時に経度0（グリニッジ）が南中する
   */
  private static subsolarLonRad(date: Date): number {
    const utcHours = date.getUTCHours() + date.getUTCMinutes() / 60 + date.getUTCSeconds() / 3600
    const lonDeg = ((12 - utcHours) * 15 + 180) % 360 - 180
    return THREE.MathUtils.degToRad(lonDeg < -180 ? lonDeg + 360 : lonDeg)
  }

  /**
   * SphereGeometryの頂点式(vertex.x=-r·cosφ, vertex.z=r·sinφ, φ=π+lon)から逆算した、
   * 経度→メッシュのローカル座標系での方向（回転前、赤道上）
   */
  private static localDirForLon(lonRad: number): THREE.Vector3 {
    return ScaleModel3D.localDirForLatLon(0, lonRad)
  }

  /**
   * localDirForLon()を緯度ありに一般化したもの。SphereGeometryの極角θ=π/2-latを上の頂点式に
   * 代入すると、緯度latの分だけY成分(cos θ = sin lat)が加わり、赤道方向の成分にcos latが掛かる形
   * になる（lat=0で元のlocalDirForLon()と一致する）。都市マーカーなど地表の任意の点を
   * 地球メッシュのローカル座標で表すのに使う
   */
  private static localDirForLatLon(latRad: number, lonRad: number): THREE.Vector3 {
    return new THREE.Vector3(
      Math.cos(lonRad) * Math.cos(latRad),
      Math.sin(latRad),
      -Math.sin(lonRad) * Math.cos(latRad)
    )
  }

  /** computeOrbitalPositions()で求めたEARTH_POS/MOON_POSと、その時点の自転角度をシーンに反映する */
  private syncSceneToOrbitalState(earthOrbitAngle: number) {
    this.earthMesh.position.copy(EARTH_POS)
    this.moonMesh.position.copy(MOON_POS)
    this.earthAxisLine.position.copy(EARTH_POS)
    this.sunLightTarget.position.copy(EARTH_POS)

    // 衛星の公転ルート。earthOrbitLineは太陽(原点)中心で固定なので位置は変えず半径だけ更新する。
    // moonOrbitLineは地球を追って毎フレーム再配置する（地球自身が公転で動くため）
    this.earthOrbitLine.scale.setScalar(this.deformMode ? DEFORM_SUN_EARTH_DIST : EARTH_SUN_DIST)
    this.moonOrbitLine.position.copy(EARTH_POS)
    this.moonOrbitLine.scale.setScalar(this.deformMode ? DEFORM_EARTH_MOON_DIST : EARTH_MOON_DIST)

    // 内惑星: 位置とその軌道円の半径を毎フレーム反映する（showInnerPlanets=falseでも非表示なだけで
    // 位置計算・同期自体は続ける。表示切替した瞬間に正しい位置になっている必要があるため）
    for (const key of INNER_PLANET_KEYS) {
      this.innerPlanetMeshByKey[key]!.position.copy(ScaleModel3D.INNER_PLANET_POS[key])
      this.innerPlanetOrbitLineByKey[key]!.scale.setScalar(
        this.deformMode ? ScaleModel3D.DEFORM_INNER_PLANET_DIST[key] : ScaleModel3D.REAL_INNER_PLANET_DIST[key]
      )
    }

    // 月は自転周期=公転周期(潮汐固定)で、常に同じ面(テクスチャの経度0=実写で地球側だった面)を
    // 地球へ向け続ける。自転速度を時間から積分するのではなく、地球への方向ベクトルから毎フレーム
    // 直接姿勢を求める（位置さえ正しければ自転も自動的に正しくなり、シークバーの巻き戻しにも強い）
    const moonToEarth = new THREE.Vector3().subVectors(EARTH_POS, MOON_POS)
    const moonSpinAngle = Math.atan2(-moonToEarth.z, moonToEarth.x)
    this.moonMesh.quaternion.setFromAxisAngle(MOON_SPIN_AXIS, moonSpinAngle)

    // 自転角度は「フレームごとの差分回転」ではなく、経過時間から絶対角度を求めて毎フレーム
    // 姿勢を再計算する（差分の累積だとシークバーで巻き戻した時に正しい向きに戻せないため）。
    // かつ、単なる時刻の端数ではなく「実際に今どの経度が太陽側を向くべきか」から逆算することで、
    // 地球儀のテクスチャ上の実在の経度（例: 日本 135°E）が実際の昼夜と対応するようにする
    const date = this.currentSimDate()
    const subsolarLon = ScaleModel3D.subsolarLonRad(date)
    const localDir = ScaleModel3D.localDirForLon(subsolarLon)
    const tiltedDir = localDir.applyQuaternion(this.earthTiltQuaternion)
    const tiltedAngle = this.angleAroundEarthAxis(tiltedDir)

    const sunwardAngle = earthOrbitAngle + Math.PI // 地球から見た太陽の方向。computeOrbitalPositions()と同じ定義
    // computeOrbitalPositions()のEARTH_POS/moonOffsetと同じ(cosθ, -sinθ)の符号に合わせる
    const sunwardDir = new THREE.Vector3(Math.cos(sunwardAngle), 0, -Math.sin(sunwardAngle))
    const targetAngle = this.angleAroundEarthAxis(sunwardDir)

    const spinAngle = targetAngle - tiltedAngle
    const spinQuat = new THREE.Quaternion().setFromAxisAngle(EARTH_AXIS, spinAngle)
    this.earthMesh.quaternion.copy(spinQuat).multiply(this.earthTiltQuaternion)
  }

  /** 日/月/年モードを切り替える。シークバーは常に現在時刻を起点に先頭へリセットする */
  setSimMode(mode: SimMode) {
    this.simMode = mode
    this.simAnchorDate = new Date()
    this.playback.setPeriod(ScaleModel3D.SIM_PERIOD_MS[mode])
    this.playback.reset()
    this.updateStepALabels() // 案Aのステップ幅表示はモードに連動するため、切替のたびに更新する
  }

  // ---- ステップ再生 A/B比較用（一時的。docs/issue-009。判断がついたら片方を削除する） ----

  /** 案A用: 現在の再生位置から±deltaMsだけ移動する（シークバーの周期範囲でクランプ）。
   *  手動シークと同様、再生中なら止める */
  private stepBy(deltaMs: number) {
    this.playback.pause()
    this.playback.seekMs(this.playback.elapsedMilliseconds + deltaMs)
  }

  /**
   * 案B用: シークバーの範囲に縛られず「今の時刻」そのものを±deltaMs動かす。stepBy()（案A）は
   * シークバーの起点(モードに入った時点)〜終端(起点+周期)の中でしかクランプ移動できないため、
   * 起点より前や終端より先へは進めなかった。こちらはsimAnchorDate自体をずらすことで、
   * どれだけステップしても際限なく時間移動できるようにする。シークバー上の位置(elapsedMs)は
   * リセットして常に「新しい今」を起点(0%)から見せる
   */
  private stepAnchorBy(deltaMs: number) {
    this.playback.pause()
    this.simAnchorDate = new Date(this.simAnchorDate.getTime() + deltaMs)
    this.playback.reset()
  }

  /** 案Aの◀/▶ボタンの表示を、選択中モードの刻み幅に合わせて書き換える */
  private updateStepALabels() {
    const label = ScaleModel3D.STEP_A_LABEL[this.simMode]
    this.stepABackBtn.textContent = `◀${label}`
    this.stepAFwdBtn.textContent = `${label}▶`
  }

  /** A/B比較トグル: 表示するステップボタン群を切り替える */
  private updateStepUiVariant() {
    const isA = this.stepUiVariant === 'A'
    this.stepGroupBackA.hidden = !isA
    this.stepGroupFwdA.hidden = !isA
    this.stepGroupBackB.hidden = isA
    this.stepGroupFwdB.hidden = isA
    this.stepAbToggleBtn.textContent = isA ? '案A' : '案B'
  }

  get currentSimMode(): SimMode {
    return this.simMode
  }

  togglePlayback() {
    this.playback.togglePlay()
  }

  get isPlaybackPlaying(): boolean {
    return this.playback.isPlaying
  }

  seekPlaybackFraction(f: number) {
    this.playback.seekFraction(f)
  }

  get playbackFraction(): number {
    return this.playback.fraction
  }

  /** UI表示用: 現在シミュレーションしている日時 */
  get simulatedDate(): Date {
    return this.currentSimDate()
  }

  /** 日モードは日時まで、月/年モードは日付までを表示する（分単位は誤差の範囲で意味が薄いため） */
  private static formatSimDate(date: Date, mode: SimMode): string {
    const pad = (n: number) => String(n).padStart(2, '0')
    const dateStr = `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`
    if (mode === 'day') return `${dateStr} ${pad(date.getHours())}:${pad(date.getMinutes())}`
    return dateStr
  }

  /** 画面上部の常時表示HUD用: 「今どの時点の天体を見ているか」を明確にするため、モードに関わらず
   *  常に時刻まで表示する（formatSimDate()は下部シークバー横の小さいラベル用で役割が異なる） */
  private static formatSimDateFull(date: Date): string {
    const pad = (n: number) => String(n).padStart(2, '0')
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}`
  }

  /** 時間バー(モードボタンの見た目・シークバーの位置・再生ボタンのアイコン・日時ラベル)を毎フレーム同期する */
  private updatePlaybackUI() {
    for (const key of ['day', 'month', 'year'] as const) {
      this.modeButtons[key].classList.toggle('active', key === this.simMode)
    }
    this.playbackPlayBtn.textContent = this.playback.isPlaying ? '⏸' : '▶'
    // 常にplayback.fractionをそのまま反映する。ユーザーのドラッグ('input'イベント)は既に
    // playback.seekFraction()へ即時反映済みなので、ここでの同期は既存の値をなぞるだけで
    // 競合しない。再生中の進行だけでなく、モード切り替え直後のリセット(→0)もこれで反映される
    this.playbackSeekbar.value = String(Math.round(this.playback.fraction * ScaleModel3D.SEEKBAR_MAX))
    const simDate = this.currentSimDate()
    this.playbackDateLabel.textContent = ScaleModel3D.formatSimDate(simDate, this.simMode)
    this.dateHudEl.textContent = ScaleModel3D.formatSimDateFull(simDate)
  }

  // ラベルの当たり判定は常に画面上一定サイズの箱として扱う（本体をタップするより少し広めに取り、
  // 特にモバイルでの指での操作をしやすくする）
  private static readonly LABEL_HIT_PADDING = 1.5

  /**
   * 天体を押した(クリック/タップ)時の処理（issue #006）。押した天体を対象(targetBody)に
   * 置き換えるだけで、カメラは一切動かさない（カメラを動かすのは「フォーカス」「系全体」
   * ボタンだけ）。既に対象になっている天体を押した場合、何もない場所を押した場合は無視する
   */
  private handleTap(clientX: number, clientY: number) {
    const hit = this.hitTestBody(clientX, clientY)
    if (!hit || hit === this.targetBody) return
    this.targetBody = hit
    this.lastTrackedPos = null // 対象が変わった瞬間なので追従の基準点をリセットする
    this.updateTargetButtonsUI()
  }

  /**
   * 天体本体(球体メッシュ)への通常のレイキャストと、常に画面上一定サイズを保つラベルへの
   * 2D当たり判定をORで見る。ズームインして天体が大きい時は前者が、ズームアウトして天体が
   * ほぼ点になっている時は後者が有効に働く
   */
  private hitTestBody(clientX: number, clientY: number): BodyKey | null {
    const rect = this.renderer.domElement.getBoundingClientRect()
    const ndc = new THREE.Vector2(
      ((clientX - rect.left) / rect.width) * 2 - 1,
      -((clientY - rect.top) / rect.height) * 2 + 1
    )
    this.raycaster.setFromCamera(ndc, this.camera)
    // recursive=falseを明示: 選択中の輪郭殻(makeOutlineHull)が各天体の子オブジェクトとして
    // ぶら下がっており、既定のrecursive=trueだとそちらまで拾ってしまうため
    const activeKeys = this.activeBodyKeys()
    const hits = this.raycaster.intersectObjects(activeKeys.map(key => this.meshByKey[key]), false)
    if (hits.length > 0) {
      const mesh = hits[0].object
      for (const key of activeKeys) {
        if (this.meshByKey[key] === mesh) return key
      }
    }
    return this.hitTestLabel(clientX, clientY, rect)
  }

  private hitTestLabel(clientX: number, clientY: number, rect: DOMRect): BodyKey | null {
    // labelHalfH(tan空間) = tan(fovV/2)*LABEL_HEIGHT_FRACTION をピクセルに変換すると
    // tan(fovV/2)が打ち消し合い、FOVによらず常に「画面高さの一定割合」になる
    // （updateLabels()のpxToTan()と対になる変換）
    const canvasHeightPx = Math.max(this.renderer.domElement.clientHeight, 1)
    const halfHPx = (ScaleModel3D.LABEL_HEIGHT_FRACTION / 2) * canvasHeightPx * ScaleModel3D.LABEL_HIT_PADDING
    const halfWPx = halfHPx * 4 // ラベル用canvasは256x64(4:1)
    for (const key of this.activeBodyKeys()) {
      const sprite = this.labelByKey[key]
      const ndc = sprite.position.clone().project(this.camera)
      if (ndc.z < -1 || ndc.z > 1) continue // カメラの後ろ側は対象外
      const sx = rect.left + (ndc.x * 0.5 + 0.5) * rect.width
      const sy = rect.top + (-ndc.y * 0.5 + 0.5) * rect.height
      if (Math.abs(clientX - sx) <= halfWPx && Math.abs(clientY - sy) <= halfHPx) return key
    }
    return null
  }

  /** 対象の天体自体をじっくり見る距離までカメラを移動する（issue #006「フォーカス」ボタン） */
  private focusOnTarget() {
    this.focusOn(this.posByKey[this.targetBody], this.displayRadius(this.targetBody))
  }

  /**
   * 天体の「見た目の」半径。デフォルメモード中は全天体が同じDEFORM_BODY_Rになっているため、
   * フィット計算・ラベル当たり判定など「画面上どれだけの大きさに見えるか」を基準にする箇所では
   * radiusByKey（実寸半径）ではなくこちらを使う
   */
  private displayRadius(key: BodyKey): number {
    return this.deformMode ? DEFORM_BODY_R : this.radiusByKey[key]
  }

  /**
   * ラベル表示・当たり判定・frameAll()等の対象にする天体一覧。太陽・地球・月は常に対象。
   * 水星・金星・火星はthis.showInnerPlanetsがtrueの時だけ対象に含める（falseの間はメッシュ・
   * ラベルとも.visible=falseにしてあるので、タップ判定やラベル衝突計算からも除外し無駄を省く）
   */
  private activeBodyKeys(): BodyKey[] {
    return this.showInnerPlanets ? ALL_BODY_KEYS : (['sun', 'earth', 'moon'] as const)
  }

  /** frameAll()・ラベル当たり判定で使う、今の見た目(デフォルメ込み)の天体一覧 */
  private focusableBodies(): { pos: THREE.Vector3; radius: number }[] {
    return this.activeBodyKeys().map(key => ({
      pos: this.posByKey[key], radius: this.displayRadius(key),
    }))
  }

  /**
   * デフォルメモード（issue #007。実験的）の切り替え。太陽・地球・月を全て同じ見た目の半径
   * (DEFORM_BODY_R)にする。天体ごとに実際の半径が異なるため、各メッシュに掛けるscale倍率は
   * それぞれ別の値になる（DEFORM_BODY_R / 実際の半径）。距離はcomputeOrbitalPositions()側が
   * this.deformModeを見て別の距離定数に切り替える（本メソッドでは位置の再計算は行わないが、
   * 毎フレームの描画ループが次フレームで自動的に反映する）。
   * 輪郭殻(outlineByKey)は本体メッシュの子オブジェクトのため、親のscaleにより見た目の拡大は
   * 自動的に追従する（updateLabels()側で輪郭線の太さだけ補正が必要。該当箇所のコメント参照）
   */
  private toggleDeformMode() {
    this.deformMode = !this.deformMode
    this.applyDeformVisuals()
    this.updateDeformButtonUI()

    // 実寸⇔デフォルメで距離のスケールが大きく変わる（例: 地球〜月間は実寸221.3→デフォルメ50）ため、
    // カメラを動かさないままだと収まり方がおかしくなる。「系全体」ボタンと同じ計算
    // (focusOnSystemView())で対象の系がちょうど収まる距離に再フィットする
    this.focusOnSystemView()
  }

  /**
   * 現在のthis.deformModeに、天体メッシュのscale・地軸線のscale・カメラの最小ズーム距離を合わせる。
   * toggleDeformMode()（実験的機能。手動切替時）と、コンストラクタ（ScaleModelConfig.deformDefault=
   * trueで最初からデフォルメ起動する時）の両方から呼ぶ。片方だけ（toggleDeformMode内）に書いて
   * いた際、デフォルメ起動時にメッシュが実寸サイズ(例: 太陽半径400.7)のまま位置だけデフォルメ距離
   * (太陽〜地球=100)になり、巨大な太陽メッシュにカメラが埋まる不具合があった
   */
  private applyDeformVisuals() {
    for (const key of ALL_BODY_KEYS) {
      const scale = this.deformMode ? DEFORM_BODY_R / this.radiusByKey[key] : 1
      this.meshByKey[key].scale.setScalar(scale)
    }
    this.earthAxisLine.scale.setScalar(this.deformMode ? DEFORM_BODY_R / EARTH_R : 1)
    this.controls.minDistance = (this.deformMode ? DEFORM_BODY_R : MOON_R) * 3
  }

  private updateDeformButtonUI() {
    this.deformToggleBtn.textContent = t(this.deformMode ? 'scale-deform-deform' : 'scale-deform-real')
    this.deformToggleBtn.classList.toggle('active', this.deformMode)
  }

  /**
   * 対象の天体の衛星の公転軌道（XZ平面上の半径orbitRadiusの円）が、今のカメラ視線方向で
   * ちょうど収まる距離までカメラを移動する（issue #006「系全体」ボタン）。
   * 「どの角度から見ても収まる」保証はあえて持たせない: カメラは回転しない前提でフィットし、
   * 後で手動回転して衛星が画面外に出た場合は、ユーザーが同じボタンをもう一度押してその向きで
   * 合わせ直す運用（frameAll()と同じ「今の視線方向基準」の考え方）。
   * 衛星を持たない天体(月)はUI側でボタン自体を隠す
   */
  private focusOnSystemView() {
    const orbitRadii = this.deformMode ? DEFORM_SATELLITE_ORBIT_RADIUS : REAL_SATELLITE_ORBIT_RADIUS
    const orbitRadius = orbitRadii[this.targetBody]
    if (orbitRadius === undefined) return
    const distance = Math.max(this.frameDistanceForOrbit(orbitRadius, 1.15), this.controls.minDistance)
    this.moveCameraTo(this.posByKey[this.targetBody], distance)
  }

  /** 「系全体」ボタンの表示/非表示を対象の天体に応じて切り替える（衛星を持たない月では隠す）。
   *  どのキーが定義されているかは実寸/デフォルメで変わらないため、どちらを見ても同じ結果になる */
  private updateTargetButtonsUI() {
    this.targetSystemBtn.hidden = REAL_SATELLITE_ORBIT_RADIUS[this.targetBody] === undefined
  }

  /**
   * 対象の天体にカメラを追従させる（issue #005）。天体は時間経過で動き続けるため、フォーカス時に
   * 注視点を1回だけ合わせるだけだと、時間を進めるほど天体が画面からずれていく。前フレームの位置
   * との差分(delta)だけ注視点・カメラ位置の両方に加算する「平行移動」にすることで、ユーザーが
   * 設定した距離・見る角度は変えずに天体だけ追いかける。
   * OrbitControlsは回転・ズームでは注視点を動かさずパンだけが動かすため、結果としてパンだけが
   * 実質無効化される（次フレームで追従により上書きされるため）。
   * 対象が変わった瞬間の基準点リセットはhandleTap()側で行う（lastTrackedPos = null）
   */
  private updateCameraTracking() {
    const pos = this.posByKey[this.targetBody]
    if (this.lastTrackedPos) {
      const delta = pos.clone().sub(this.lastTrackedPos)
      this.controls.target.add(delta)
      this.camera.position.add(delta)
    }
    this.lastTrackedPos = pos.clone()
  }

  // 選択中の天体を示す輪郭殻の、本体からのはみ出し量（画面ピクセル基準。updateLabels()で
  // 毎フレーム、その時のカメラ距離に応じたワールドサイズへ変換する）
  private static readonly OUTLINE_THICKNESS_PX = 1

  /**
   * 天体本体のジオメトリを再利用し、わずかに拡大した「殻」を子オブジェクトとして追加する。
   * 裏面(BackSide)だけを描画するため、普段は本体に完全に隠れて見えず、本体の輪郭からわずかに
   * はみ出た部分だけが縁取りのように見える。本体側のマテリアル/テクスチャには一切触れない。
   * 拡大率は固定値ではなく、updateLabels()が毎フレームカメラ距離に応じて設定する
   */
  private makeOutlineHull(bodyMesh: THREE.Mesh): THREE.Mesh {
    const hull = new THREE.Mesh(
      bodyMesh.geometry,
      new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.BackSide })
    )
    hull.visible = false
    bodyMesh.add(hull)
    return hull
  }

  private static readonly ORBIT_LINE_SEGMENTS = 128

  /**
   * 半径1・XZ平面上の円（衛星の公転ルート表示用）。実際の軌道半径はobject.scaleで毎フレーム
   * 反映する（syncSceneToOrbitalState()参照）ため、ここでは単位円を1つ作るだけでよい
   */
  private makeOrbitLine(color: number): THREE.LineLoop {
    const points: THREE.Vector3[] = []
    for (let i = 0; i < ScaleModel3D.ORBIT_LINE_SEGMENTS; i++) {
      const theta = (i / ScaleModel3D.ORBIT_LINE_SEGMENTS) * Math.PI * 2
      points.push(new THREE.Vector3(Math.cos(theta), 0, Math.sin(theta)))
    }
    const geometry = new THREE.BufferGeometry().setFromPoints(points)
    return new THREE.LineLoop(geometry, new THREE.LineBasicMaterial({
      color, transparent: true, opacity: 0.35,
    }))
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

  /**
   * ラベルのcanvas(256x64)を描く。selected=trueの時は文字の背後に強調用の枠を足す
   * （選択中であることを示す視覚フィードバック。文字そのものの位置・大きさは変えないため、
   * measureLabelTextFrac()で測る当たり判定サイズはselected/normalどちらでも同じになる）
   */
  private drawLabelCanvas(text: string, color: string, selected: boolean): HTMLCanvasElement {
    const c = document.createElement('canvas')
    c.width = 256; c.height = 64
    const ctx = c.getContext('2d')!
    if (selected) {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.22)'
      ctx.fillRect(6, 6, c.width - 12, c.height - 12)
      ctx.strokeStyle = color
      ctx.lineWidth = 3
      ctx.strokeRect(6, 6, c.width - 12, c.height - 12)
    }
    ctx.font = 'bold 28px Arial'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.shadowColor = '#000'
    ctx.shadowBlur = 8
    ctx.fillStyle = color
    ctx.fillText(text, 128, 32)
    return c
  }

  private makeLabel(text: string, color: string): {
    sprite: THREE.Sprite; halfWFrac: number; halfHFrac: number
    normalMap: THREE.CanvasTexture; selectedMap: THREE.CanvasTexture
  } {
    const normalCanvas = this.drawLabelCanvas(text, color, false)
    const { halfWFrac, halfHFrac } = this.measureLabelTextFrac(
      normalCanvas.getContext('2d')!, text, normalCanvas.width, normalCanvas.height
    )
    const normalMap = new THREE.CanvasTexture(normalCanvas)
    const selectedMap = new THREE.CanvasTexture(this.drawLabelCanvas(text, color, true))
    const sprite = new THREE.Sprite(new THREE.SpriteMaterial({
      map: normalMap,
      transparent: true,
      depthTest: false, // 球の裏側に回っても隠れず、常に手前に見えるようにする
      depthWrite: false,
    }))
    sprite.renderOrder = 999
    return { sprite, halfWFrac, halfHFrac, normalMap, selectedMap }
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
  // デバッグ用: カメラの位置・注視点・距離・回転角を常時表示するHUDのON/OFF
  private static readonly DEBUG_SHOW_CAMERA_HUD = false

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
      // 中心が完全一致した場合(初期状態はここが必ず発火する)の既定の押し出し方向。
      // ここが実質的にラベルの既定位置(天体の下)を決めている
      const nx = dist < 1e-6 ? 0 : dx / dist
      const ny = dist < 1e-6 ? -1 : dy / dist
      const required = sphereEdgeTan(sphere.r) + labelEdgeDistTo(nx, ny, textHalfW, textHalfH) + extraGapTan
      const overlap = required - dist
      if (overlap <= 0) return null
      return { nx, ny, overlap }
    }

    // 天体ごと（activeBodyKeys()の順、labels/spheresと同じ順）の「実際に見えている文字」の
    // 半幅・半高（tan空間）。canvas全体(箱)のhalfW/halfHに、ctx.measureText()で測った比率を掛ける
    const activeKeys = this.activeBodyKeys()
    const labelFracs = activeKeys.map(key => this.labelFracByKey[key])
    const textHalfWs = labelFracs.map(f => labelHalfW * f.halfWFrac)
    const textHalfHs = labelFracs.map(f => labelHalfH * f.halfHFrac)
    // ラベル同士の衝突回避（①）用の半径。ここも実測テキストサイズを使わないと、天体同士が
    // 画面上で接近する場面（例: 地球と月）で①の「箱基準の大きい反発」が支配的になり、
    // ②で精密にコントロールしたはずの間隔が台無しになる
    const textRadii = textHalfWs.map((w, i) => Math.hypot(w, textHalfHs[i]))

    type LabelState = {
      key: BodyKey; sprite: THREE.Sprite; leader: THREE.Line; bodyPos: THREE.Vector3
      depth: number; baseX: number; baseY: number; x: number; y: number
    }
    const makeLabelState = (key: BodyKey, sprite: THREE.Sprite, leader: THREE.Line, bodyPos: THREE.Vector3): LabelState => {
      const p = project(bodyPos)
      const h = 2 * labelHalfH * p.depth
      sprite.scale.set(h * 4, h, 1) // ラベル用canvasは256x64(4:1)なので幅は高さの4倍
      // 対象の天体かどうかで、強調用の枠付きテクスチャに差し替える（当たり判定サイズは同じなので
      // ①②の押し出し計算には影響しない）
      const mat = sprite.material as THREE.SpriteMaterial
      const wantMap = key === this.targetBody ? this.labelMaps[key].selected : this.labelMaps[key].normal
      if (mat.map !== wantMap) { mat.map = wantMap; mat.needsUpdate = true }
      return { key, sprite, leader, bodyPos, depth: p.depth, baseX: p.x, baseY: p.y, x: p.x, y: p.y }
    }
    const labels = activeKeys.map(key =>
      makeLabelState(key, this.labelByKey[key], this.leaderByKey[key], this.posByKey[key])
    )

    const spheres = this.focusableBodies().map(b => {
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
      return dist < 1e-6 ? { nx: 0, ny: -1, overlap } : { nx: dx / dist, ny: dy / dist, overlap }
    }

    for (let iter = 0; iter < ScaleModel3D.LABEL_COLLISION_ITERATIONS; iter++) {
      // ① ラベル同士（実測テキストサイズを使う。箱基準のlabelRadiusのままだと、天体同士が
      // 画面上で接近する場面でここが支配的になり、②の精密な距離コントロールを台無しにする）。
      // labels配列は[太陽,地球,月]の優先順位の並びそのもの: iの方がjより常に優先度が高いので、
      // 優先度の高いa(親)は動かさず、低いb(子)だけを重なり量ぶん全量押し出す
      for (let i = 0; i < labels.length; i++) {
        for (let j = i + 1; j < labels.length; j++) {
          const a = labels[i], b = labels[j]
          const hit = overlapOf(a.x, a.y, textRadii[i], b.x, b.y, textRadii[j])
          if (!hit) continue
          b.x += hit.nx * hit.overlap; b.y += hit.ny * hit.overlap
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

      // 対象の天体の輪郭殻: 本体からのはみ出し量(OUTLINE_THICKNESS_PX)を毎フレーム画面ピクセル基準で
      // 一定に保つ。固定の拡大率(例: 1.12倍)のままだとズームアウトして天体が小さくなるほど
      // 輪郭も一緒に縮んで見えなくなってしまう（ラベルが常に一定サイズを保つのと同じ理由）
      const outline = this.outlineByKey[s.key]
      outline.visible = s.key === this.targetBody
      if (outline.visible) {
        // 殻は本体メッシュの子オブジェクトなので、このscaleは親のローカル空間(=実寸半径)基準。
        // デフォルメモード中は親のmesh.scaleが既にDEFORM_BODY_R/実寸半径倍されているため、ここは
        // 常に実寸半径(radiusByKey)を使い、はみ出し量の項だけ親の拡大率で割って打ち消しておく
        // （そうしないと輪郭の太さ自体が親と一緒に拡大されて見えてしまう）
        const bodyRadius = this.radiusByKey[s.key]
        const parentScale = this.deformMode ? DEFORM_BODY_R / bodyRadius : 1
        const desiredRadius = bodyRadius + (s.depth * pxToTan(ScaleModel3D.OUTLINE_THICKNESS_PX)) / parentScale
        outline.scale.setScalar(desiredRadius / bodyRadius)
      }

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
    if (!ScaleModel3D.DEBUG_SHOW_CAMERA_HUD) {
      this.debugHudEl.textContent = ''
      return
    }
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
    const rewrite = (key: BodyKey, text: string, color: string) => {
      const normalCanvas = this.drawLabelCanvas(text, color, false)
      const frac = this.measureLabelTextFrac(
        normalCanvas.getContext('2d')!, text, normalCanvas.width, normalCanvas.height
      )
      this.labelMaps[key].normal.dispose()
      this.labelMaps[key].selected.dispose()
      this.labelMaps[key] = {
        normal: new THREE.CanvasTexture(normalCanvas),
        selected: new THREE.CanvasTexture(this.drawLabelCanvas(text, color, true)),
      }
      // 実際にどちらのmapを貼るかはupdateLabels()が毎フレーム選択状態を見て同期する
      this.labelFracByKey[key] = frac // labelFracByKeyもここで直接更新しないとupdateLabels()に反映されない
      return frac
    }
    this.sunLabelFrac = rewrite('sun', t('label-sun'), '#ffee44')
    this.earthLabelFrac = rewrite('earth', t('label-earth'), '#8fc0ff')
    this.moonLabelFrac = rewrite('moon', t('label-moon'), '#ccd4ee')
    rewrite('mercury', t('label-mercury'), '#b8afa8')
    rewrite('venus', t('label-venus'), '#e8d4a0')
    rewrite('mars', t('label-mars'), '#e08050')
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

  private startLoop() {
    let lastTime: number | null = null
    const loop = (time: number) => {
      this.rafId = requestAnimationFrame(loop)
      const dt = lastTime === null ? 0 : (time - lastTime) / 1000
      lastTime = time
      this.playback.tick(dt)
      const earthOrbitAngle = this.computeOrbitalPositions(this.currentSimDate())
      this.syncSceneToOrbitalState(earthOrbitAngle)
      this.updatePlaybackUI()
      this.updateCameraTracking()
      this.controls.update()
      this.updateLabels()
      this.updateDebugHud()
      this.renderer.render(this.scene, this.camera)
      this.renderGizmo()
    }
    this.rafId = requestAnimationFrame(loop)
  }

  /**
   * このインスタンスが持つ全リソースを解放する。呼び出し側（main.ts）は「別のモードへ切り替える
   * 時／画面を離れる時に必ずdispose()してから次のインスタンスを作る」運用にすることで、
   * 常に生きたインスタンスが1つだけになるようにする（ID衝突・多重描画を構造的に起こさないため）。
   * イベントリスナー(cleanupFns・キー/ポインタ系)とThree.jsのGPUリソース(geometry/material/
   * texture/renderer)の両方を解放する
   */
  dispose() {
    if (this.rafId !== null) cancelAnimationFrame(this.rafId)
    window.removeEventListener('keydown', this.onKeyDown)
    const canvas = this.renderer.domElement
    canvas.removeEventListener('pointerdown', this.onPointerDown)
    canvas.removeEventListener('pointerup', this.onPointerUp)
    canvas.removeEventListener('pointercancel', this.onPointerCancel)
    for (const cleanup of this.cleanupFns) cleanup()
    this.cleanupFns = []

    ScaleModel3D.disposeObject3D(this.scene)
    ScaleModel3D.disposeObject3D(this.gizmoScene)
    this.controls.dispose()
    this.renderer.dispose()
    this.gizmoRenderer?.dispose()
  }

  /** シーングラフを辿り、Mesh/Line/LineLoop/SpriteのgeometryとmaterialとテクスチャをGPUから解放する */
  private static disposeObject3D(root: THREE.Object3D) {
    root.traverse(obj => {
      if (obj instanceof THREE.Mesh || obj instanceof THREE.Line) {
        obj.geometry.dispose()
        const materials = Array.isArray(obj.material) ? obj.material : [obj.material]
        for (const m of materials) ScaleModel3D.disposeMaterial(m)
      } else if (obj instanceof THREE.Sprite) {
        ScaleModel3D.disposeMaterial(obj.material)
      }
    })
  }

  private static disposeMaterial(material: THREE.Material) {
    // map(テクスチャ)を持つマテリアル種別ぶんだけ、寿命を共有するテクスチャも一緒に解放する
    const withMap = material as THREE.Material & { map?: THREE.Texture | null }
    withMap.map?.dispose()
    material.dispose()
  }
}
