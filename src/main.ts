import './app.css' // 全画面の土台。各画面のCSSより先に読み込む
import './menu.css'
import './hud.css'
import './dashboard.css'
import * as THREE from 'three'
import { applyLang, getLang, t } from './i18n'
import { Scene3D } from './scene3d'
import { Compass2D } from './compass2d'
import { getAstroData } from './astroCalc'
import { ARView } from './ar'
import { ScaleModel3D, type ScaleModelConfig } from './scaleModel3d'
import { SizeComparison3D } from './sizeComparison3d'
import { createSimPlaybackController } from './simPlayback'
import { CompassHeadingTracker } from './compassHeading'
import { setIcon } from './iconInjector'
import backIconSvg from './icons/back.svg?raw'
import gearIconSvg from './icons/gear.svg?raw'
import frameAllIconSvg from './icons/frame-all.svg?raw'

type SceneName = 'menu' | 'dashboard' | 'sky' | 'scale' | 'size'

const latInput = document.getElementById('lat') as HTMLInputElement
const lngInput = document.getElementById('lng') as HTMLInputElement
const constCheck = document.getElementById('show-constellations') as HTMLInputElement
const famousCheck = document.getElementById('show-famous') as HTMLInputElement
const trianglesCheck = document.getElementById('show-triangles') as HTMLInputElement

function getLatLng() {
  const lat = parseFloat(latInput.value) || 35.6762
  const lng = parseFloat(lngInput.value) || 139.6503
  return { lat, lng }
}

const canvas3d = document.getElementById('canvas3d') as HTMLCanvasElement
const scene3d = new Scene3D(canvas3d)

const canvas2d = document.getElementById('canvas2d') as HTMLCanvasElement
const compass2d = new Compass2D(canvas2d)

const arCanvas = document.getElementById('ar-canvas') as HTMLCanvasElement
const arView = new ARView(arCanvas)

const zoomSlider = document.getElementById('zoom-slider') as HTMLInputElement
zoomSlider.addEventListener('input', () => {
  arView.setFov(parseFloat(zoomSlider.value))
})

// WebGLRendererはcanvasごとに1つだけ作り、アプリの間ずっと使い回す。canvasのWebGLの状態は
// rendererを破棄しても残るため、同じcanvasにrendererを作り直すと前の状態を引き継いでしまう
function createRenderer(canvasId: string, params: { alpha?: boolean } = {}): THREE.WebGLRenderer {
  const canvas = document.getElementById(canvasId) as HTMLCanvasElement
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, ...params })
  renderer.setPixelRatio(window.devicePixelRatio)
  return renderer
}

// ---- スケール系モード（地球の公転ビューア / 地球の自転ビューア） ----
// 2つとも同じcanvas・同じDOM（#scene-scale, #scale-playback）を使い回す独立モード。
// 常に生きたインスタンスが1つだけになるようにする（=IDの衝突や多重描画が構造的に起きない）ため、
// モードに入る/離れるたびに必ずdispose()してから作り直す（rendererは作り直さず使い回す）
const scaleRenderer = createRenderer('canvas-scale')
const scaleGizmoRenderer = createRenderer('scale-angle-gizmo', { alpha: true })
let scaleModel: ScaleModel3D | null = null

const SCALE_CONFIG_ORBIT: ScaleModelConfig = {
  // 地球の公転ビューア: 地球の公転・月の動き（満ち欠け）が主役。日モードは出さない。
  // 注視点は太陽（原点で動かない）。地球を注視点にすると毎フレーム地球へ追従してしまい、
  // 逆に太陽側が地球の周りを回っているように見えてしまうため。
  // 水星・金星・火星もここだけ表示する（実験的。フラグ1つで他画面には影響しない）
  availableModes: ['month', 'year'], defaultMode: 'month', deformDefault: true, defaultTarget: 'sun',
  showInnerPlanets: true,
}
const SCALE_CONFIG_SPIN: ScaleModelConfig = {
  // 地球の自転ビューア: 地球の自転(昼夜)・月の潮汐固定が主役。年モードは出さない
  availableModes: ['day', 'month'], defaultMode: 'day', deformDefault: true, defaultTarget: 'earth',
}

function enterScaleMode(config: ScaleModelConfig, navTitleKey: string) {
  scaleModel?.dispose()
  scaleModel = new ScaleModel3D(scaleRenderer, scaleGizmoRenderer, config)
  const { lat, lng } = getLatLng()
  scaleModel.setLocation(lat, lng)
  showScene('scale', navTitleKey)
}

const scaleFitBtn = document.getElementById('scale-fit-btn') as HTMLButtonElement
setIcon(scaleFitBtn, frameAllIconSvg)
scaleFitBtn.addEventListener('click', () => scaleModel?.frameAll())

// ---- 大きさ比較モード（メニューの「スケール」。issue #013） ----
// スケール系モードと同じく、入るたびに作り直し、出る時に破棄する（rendererは使い回す）
const sizeRenderer = createRenderer('canvas-size')
const sizeGizmoRenderer = createRenderer('size-orient-gizmo-canvas', { alpha: true })
let sizeView: SizeComparison3D | null = null

function enterSizeMode() {
  sizeView?.dispose()
  sizeView = new SizeComparison3D(sizeRenderer, sizeGizmoRenderer)
  showScene('size', 'nav-scale')
}

// ---- シーン切り替え（メニュー / 3D+2D / SKY / スケールモデル / 大きさ比較） ----
const sceneMenu = document.getElementById('scene-menu') as HTMLElement
const sceneHud = document.getElementById('scene-hud') as HTMLElement
const skyPlaybackSection = document.getElementById('sky-playback') as HTMLElement
const dashboardPlaybackSection = document.getElementById('dashboard-playback') as HTMLElement
const scalePlayback = document.getElementById('scale-playback') as HTMLElement
const sceneDashboard = document.getElementById('scene-dashboard') as HTMLElement
const sceneSky = document.getElementById('scene-sky') as HTMLElement
const sceneScale = document.getElementById('scene-scale') as HTMLElement
const sceneSize = document.getElementById('scene-size') as HTMLElement
const constToggles = document.getElementById('const-toggles') as HTMLElement
const scaleDisplayGroup = document.getElementById('scale-display-group') as HTMLElement
const backToMenuBtn = document.getElementById('back-to-menu-btn') as HTMLButtonElement
setIcon(backToMenuBtn, backIconSvg)
const toggleControlsBtn = document.getElementById('toggle-controls') as HTMLButtonElement
setIcon(toggleControlsBtn, gearIconSvg)
const menuDashboardBtn = document.getElementById('menu-dashboard-btn') as HTMLButtonElement
const menuSkyBtn = document.getElementById('menu-sky-btn') as HTMLButtonElement
const menuScaleBtn = document.getElementById('menu-scale-btn') as HTMLButtonElement
const menuScaleOrbitBtn = document.getElementById('menu-scale-orbit-btn') as HTMLButtonElement
const menuScaleSpinBtn = document.getElementById('menu-scale-spin-btn') as HTMLButtonElement

// header中央のタイトル。メニューでは常にアプリ名、それ以外の画面では今の画面名に差し替える
// （言語切替時にも出し直せるよう、キー自体を覚えておく。data-i18n属性は付けない＝
// applyLang()の一括スイープで固定文言に戻されてしまうのを避けるため）
const headerTitle = document.getElementById('header-title') as HTMLElement
let headerTitleKey = 'h1'

function setHeaderTitle(titleKey: string) {
  headerTitleKey = titleKey
  headerTitle.textContent = t(titleKey)
}

function showScene(name: SceneName, titleKey: string = 'h1') {
  // スケール系モードは「今画面に出ている時だけ生きている」設計（issue #008）。
  // scale以外へ出ていく瞬間に必ず破棄し、非表示中に描画し続けないようにする
  if (name !== 'scale' && scaleModel) {
    scaleModel.dispose()
    scaleModel = null
  }
  if (name !== 'size' && sizeView) {
    sizeView.dispose()
    sizeView = null
  }

  setHeaderTitle(titleKey)

  const showHud = name !== 'menu' && name !== 'size'
  sceneMenu.style.display = name === 'menu' ? '' : 'none'
  sceneHud.style.display = showHud ? '' : 'none'
  skyPlaybackSection.style.display = name === 'sky' ? '' : 'none'
  dashboardPlaybackSection.style.display = name === 'dashboard' ? '' : 'none'
  sceneDashboard.style.display = name === 'dashboard' ? '' : 'none'
  sceneSky.style.display = name === 'sky' ? '' : 'none'
  sceneScale.style.display = name === 'scale' ? '' : 'none'
  sceneSize.style.display = name === 'size' ? '' : 'none'
  scalePlayback.style.display = name === 'scale' ? '' : 'none'
  constToggles.style.display = name === 'dashboard' ? '' : 'none'
  scaleDisplayGroup.style.display = name === 'scale' ? '' : 'none'
  backToMenuBtn.hidden = name === 'menu'
  toggleControlsBtn.hidden = !showHud
  if (name !== 'sky') arView.stop()
  if (name === 'dashboard') {
    // 非表示中はサイズ0で解像度が決まらないため、表示直後に再計算する。
    // 画面を開くたび毎回、天球が確実に収まる距離まで自動調整する
    requestAnimationFrame(() => scene3d.handleResize(true))
  }
  if (name === 'scale') {
    requestAnimationFrame(() => scaleModel?.handleResize())
  }
}

// ---- 3D/2D 表示切り替え（同時表示だとモバイルで操作しづらいため排他表示） ----
const viewEl3d = document.querySelector('#scene-dashboard .view-3d') as HTMLElement
const viewEl2d = document.querySelector('#scene-dashboard .view-2d') as HTMLElement
const viewToggle3dBtn = document.getElementById('view-toggle-3d') as HTMLButtonElement
const viewToggle2dBtn = document.getElementById('view-toggle-2d') as HTMLButtonElement
type DashboardView = '3d' | '2d'
let activeDashboardView: DashboardView = '3d'

function setDashboardView(view: DashboardView) {
  activeDashboardView = view
  viewEl3d.classList.toggle('active', view === '3d')
  viewEl2d.classList.toggle('active', view === '2d')
  viewToggle3dBtn.classList.toggle('active', view === '3d')
  viewToggle2dBtn.classList.toggle('active', view === '2d')
  if (view === '3d') {
    requestAnimationFrame(() => scene3d.handleResize())
  }
  // 非表示側のビューでデバイス方位センサーを回し続けない
  if (view !== '3d') setCompassEnabled('3d', false)
  if (view !== '2d') setCompassEnabled('2d', false)
}

viewToggle3dBtn.addEventListener('click', () => setDashboardView('3d'))
viewToggle2dBtn.addEventListener('click', () => setDashboardView('2d'))

// ---- 方位磁石モード: デバイスの向きに3D/2Dビューを連動させる ----
const compassToggle3dBtn = document.getElementById('compass-toggle-3d') as HTMLButtonElement
const compassToggle2dBtn = document.getElementById('compass-toggle-2d') as HTMLButtonElement
const compassIcon3d = compassToggle3dBtn.querySelector('.compass-fab-icon') as SVGElement
const compassIcon2d = compassToggle2dBtn.querySelector('.compass-fab-icon') as SVGElement
let compassHeadingDeg = 0
let compass3dEnabled = false
let compass2dEnabled = false
let compassTracker: CompassHeadingTracker | null = null

function isCompassActive(): boolean {
  return compass3dEnabled || compass2dEnabled
}

// 針は「北」を指し続ける。画面がheadingDeg方向を正面にしているぶん、北を指す針は見た目上その逆方向へ回転させる。
// 3Dは方位磁石モードON/OFFに関わらず、常にカメラの向きだけから針を決める（端末の向きはカメラ経由で反映される）
// 角度は前回からの差分で積み上げる（±180°をまたいだ時に、CSSのtransitionで針が逆回りに一周しないように）
let compassNeedleDeg3d = 0
function updateCompassNeedle3d() {
  const delta = normalizeDeltaDeg(-scene3d.getCameraHeadingDeg() - compassNeedleDeg3d)
  compassNeedleDeg3d += delta
  compassIcon3d.style.transform = `rotate(${compassNeedleDeg3d}deg)`
}
/** 角度差を -180〜180 に正規化する */
function normalizeDeltaDeg(deg: number): number {
  return ((deg % 360) + 540) % 360 - 180
}
scene3d.onCameraChange(updateCompassNeedle3d)
updateCompassNeedle3d()

function applyCompassNeedleRotation2d() {
  if (compass2dEnabled) compassIcon2d.style.transform = `rotate(${-compassHeadingDeg}deg)`
}

async function setCompassEnabled(view: DashboardView, enabled: boolean) {
  const btn = view === '3d' ? compassToggle3dBtn : compassToggle2dBtn
  const icon = view === '3d' ? compassIcon3d : compassIcon2d
  if (view === '3d') {
    compass3dEnabled = enabled
    // ONの間はOrbitControlsの水平ドラッグを無効化する（手動で回すとコンパス角と
    // 取り合いになりガクつくため）。上下方向のドラッグは引き続き許可する
    scene3d.setCompassLocked(enabled)
  } else {
    compass2dEnabled = enabled
  }
  btn.classList.toggle('active', enabled)
  btn.setAttribute('aria-pressed', String(enabled))
  if (view === '2d' && !enabled) icon.style.transform = ''

  if (isCompassActive() && !compassTracker) {
    const tracker = new CompassHeadingTracker((heading) => {
      compassHeadingDeg = heading
      if (compass3dEnabled) scene3d.setCompassHeading(compassHeadingDeg)
      if (compass2dEnabled) updateDashboard(dashboardCurrentDate)
      applyCompassNeedleRotation2d()
    })
    const ok = await tracker.start()
    if (!ok) {
      alert(getLang() === 'ja'
        ? 'センサーの使用が許可されませんでした。'
        : 'Sensor access was not granted.')
      if (view === '3d') {
        compass3dEnabled = false
        scene3d.setCompassLocked(false)
      } else {
        compass2dEnabled = false
      }
      btn.classList.remove('active')
      btn.setAttribute('aria-pressed', 'false')
      return
    }
    compassTracker = tracker
  } else if (!isCompassActive() && compassTracker) {
    compassTracker.stop()
    compassTracker = null
  }
}

compassToggle3dBtn.addEventListener('click', () => setCompassEnabled('3d', !compass3dEnabled))
compassToggle2dBtn.addEventListener('click', () => setCompassEnabled('2d', !compass2dEnabled))

menuDashboardBtn.addEventListener('click', () => {
  showScene('dashboard', 'nav-dashboard')
  setDashboardView(activeDashboardView)
})
menuSkyBtn.addEventListener('click', () => {
  // ジェスチャーを保持したまま同じクリックハンドラ内で開始する
  // （iOS Safariのジャイロ許可はユーザー操作から直接呼ばないと通らないため）
  showScene('sky', 'nav-sky')
  arView.start(arCanvas)
})
menuScaleBtn.addEventListener('click', enterSizeMode)
menuScaleOrbitBtn.addEventListener('click', () => enterScaleMode(SCALE_CONFIG_ORBIT, 'nav-scale-orbit'))
menuScaleSpinBtn.addEventListener('click', () => enterScaleMode(SCALE_CONFIG_SPIN, 'nav-scale-spin'))
backToMenuBtn.addEventListener('click', () => showScene('menu'))

// ---- 天体位置の共通更新処理 ----
const langBtn = document.getElementById('lang-btn') as HTMLButtonElement

// 3D+2D画面が今見ている日時（createSimPlaybackController('dashboard')が管理）。
// lat/lng変更時にその場で再描画するため、直近の値をここに保持する
let dashboardCurrentDate = new Date()

function updateDashboard(date: Date) {
  dashboardCurrentDate = date
  const { lat, lng } = getLatLng()
  const data = getAstroData(date, lat, lng)
  scene3d.update(data)
  compass2d.draw(data, compass2dEnabled ? compassHeadingDeg : 0)

  if (constCheck.checked) {
    scene3d.updateConstellations(lat, lng, date)
  }
  if (famousCheck.checked) {
    scene3d.updateFamous(lat, lng, date)
  }
  if (trianglesCheck.checked) {
    scene3d.updateTriangles(lat, lng, date)
  }
}

// SKY画面が今見ている日時（createSimPlaybackController('sky')が管理）
let skyCurrentDate = new Date()

function updateSky(date: Date) {
  skyCurrentDate = date
  const { lat, lng } = getLatLng()
  const data = getAstroData(date, lat, lng)
  arView.setData(data, lat, lng, date)
}

function onLocationInput() {
  updateDashboard(dashboardCurrentDate)
  updateSky(skyCurrentDate)
  const { lat, lng } = getLatLng()
  scaleModel?.setLocation(lat, lng)
}
latInput.addEventListener('input', onLocationInput)
lngInput.addEventListener('input', onLocationInput)

// 端末の位置情報から緯度・経度を入れる。入力欄の刻み(0.0001)に合わせて丸める
const locateBtn = document.getElementById('locate-btn') as HTMLButtonElement
locateBtn.addEventListener('click', () => {
  if (!navigator.geolocation) {
    alert(t('locate-error'))
    return
  }
  locateBtn.disabled = true
  locateBtn.textContent = t('locate-btn-busy')
  const done = () => {
    locateBtn.disabled = false
    locateBtn.textContent = t('locate-btn')
  }
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      latInput.value = pos.coords.latitude.toFixed(4)
      lngInput.value = pos.coords.longitude.toFixed(4)
      onLocationInput()
      done()
    },
    () => {
      done()
      alert(t('locate-error'))
    },
    { enableHighAccuracy: false, timeout: 15000, maximumAge: 60000 }
  )
})
constCheck.addEventListener('change', () => {
  scene3d.setConstellationsVisible(constCheck.checked)
  if (constCheck.checked) updateDashboard(dashboardCurrentDate)
})
famousCheck.addEventListener('change', () => {
  scene3d.setFamousVisible(famousCheck.checked)
  if (famousCheck.checked) updateDashboard(dashboardCurrentDate)
})
trianglesCheck.addEventListener('change', () => {
  scene3d.setTrianglesVisible(trianglesCheck.checked)
  if (trianglesCheck.checked) updateDashboard(dashboardCurrentDate)
})
// 起動時のチェック状態（星座表示・有名な星座は初期ON）を3D側の表示に反映する
scene3d.setConstellationsVisible(constCheck.checked)
scene3d.setFamousVisible(famousCheck.checked)
scene3d.setTrianglesVisible(trianglesCheck.checked)

// ---- 設定パネル 折りたたみ ----
const controlsSection = document.querySelector('.controls') as HTMLElement

function refreshToggleBtn() {
  const isOpen = !controlsSection.classList.contains('collapsed')
  toggleControlsBtn.classList.toggle('active', isOpen)
}

toggleControlsBtn.addEventListener('click', () => {
  const isOpen = !controlsSection.classList.contains('collapsed')
  if (isOpen) {
    controlsSection.classList.add('collapsed')
    toggleControlsBtn.setAttribute('aria-expanded', 'false')
  } else {
    controlsSection.classList.remove('collapsed')
    toggleControlsBtn.setAttribute('aria-expanded', 'true')
  }
  refreshToggleBtn()
})

// ---- 言語切り替え ----
applyLang('ja')
refreshToggleBtn()

langBtn.addEventListener('click', () => {
  const next = getLang() === 'ja' ? 'en' : 'ja'
  applyLang(next)
  refreshToggleBtn()
  langBtn.textContent = next === 'ja' ? 'EN' : 'JP'
  scene3d.refreshTextLabels()
  arView.refreshDirLabels()
  scaleModel?.refreshTextLabels()
  sizeView?.refreshTextLabels()
  headerTitle.textContent = t(headerTitleKey)
})

// ---- 日/月/年モードの時間バー（3D+2D・SKY共通。simPlayback.ts参照）----
createSimPlaybackController('dashboard', updateDashboard)
createSimPlaybackController('sky', updateSky)
