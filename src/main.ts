import './style.css'
import { applyLang, getLang, t } from './i18n'
import { Scene3D } from './scene3d'
import { Compass2D } from './compass2d'
import { getAstroData } from './astroCalc'
import { ARView } from './ar'
import { ScaleModel3D, type ScaleModelConfig } from './scaleModel3d'
import { createSimPlaybackController } from './simPlayback'
import { CompassHeadingTracker } from './compassHeading'
import { setIcon } from './iconInjector'
import backIconSvg from './icons/back.svg?raw'
import gearIconSvg from './icons/gear.svg?raw'
import fullscreenExpandIconSvg from './icons/fullscreen-expand.svg?raw'
import fullscreenCollapseIconSvg from './icons/fullscreen-collapse.svg?raw'
import frameAllIconSvg from './icons/frame-all.svg?raw'

type SceneName = 'menu' | 'dashboard' | 'sky' | 'scale'

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

// ---- スケール系モード（既存の「スケール」/ 地球の公転ビューア / 地球の自転ビューア） ----
// 3つとも同じcanvas・同じDOM（#scene-scale, #scale-playback）を使い回す独立モード。
// 常に生きたインスタンスが1つだけになるようにする（=IDの衝突や多重描画が構造的に起きない）ため、
// モードに入る/離れるたびに必ずdispose()してから作り直す（issue #008）
const canvasScale = document.getElementById('canvas-scale') as HTMLCanvasElement
let scaleModel: ScaleModel3D | null = null

const SCALE_CONFIG_FULL: ScaleModelConfig = {
  availableModes: ['day', 'month', 'year'], defaultMode: 'day', deformDefault: false, defaultTarget: 'sun',
}
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

// 画面タイトル(#scale-scene-title)は3つの入口で共有しているDOMなので、入る時に文言を出し分ける。
// data-i18n属性は付けない（つけるとapplyLang()の一括スイープで固定文言に戻されてしまうため）。
// 言語切替時にも今のモードの文言で出し直せるよう、キー自体も覚えておく
const scaleSceneTitle = document.getElementById('scale-scene-title') as HTMLElement
let scaleSceneTitleKey = 'view-scale'

function enterScaleMode(config: ScaleModelConfig, titleKey: string, navTitleKey: string) {
  scaleModel?.dispose()
  scaleModel = new ScaleModel3D(canvasScale, config)
  scaleSceneTitle.textContent = t(titleKey)
  scaleSceneTitleKey = titleKey
  showScene('scale', navTitleKey)
}

const scaleFitBtn = document.getElementById('scale-fit-btn') as HTMLButtonElement
setIcon(scaleFitBtn, frameAllIconSvg)
scaleFitBtn.addEventListener('click', () => scaleModel?.frameAll())

// ---- シーン切り替え（メニュー / 3D+2D / SKY / スケールモデル） ----
const sceneMenu = document.getElementById('scene-menu') as HTMLElement
const sceneHud = document.getElementById('scene-hud') as HTMLElement
const skyPlaybackSection = document.getElementById('sky-playback') as HTMLElement
const dashboardPlaybackSection = document.getElementById('dashboard-playback') as HTMLElement
const scalePlayback = document.getElementById('scale-playback') as HTMLElement
const sceneDashboard = document.getElementById('scene-dashboard') as HTMLElement
const sceneSky = document.getElementById('scene-sky') as HTMLElement
const sceneScale = document.getElementById('scene-scale') as HTMLElement
const constToggles = document.getElementById('const-toggles') as HTMLElement
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

  setHeaderTitle(titleKey)

  const showHud = name === 'dashboard' || name === 'sky'
  sceneMenu.style.display = name === 'menu' ? '' : 'none'
  sceneHud.style.display = showHud ? '' : 'none'
  skyPlaybackSection.style.display = name === 'sky' ? '' : 'none'
  dashboardPlaybackSection.style.display = name === 'dashboard' ? '' : 'none'
  sceneDashboard.style.display = name === 'dashboard' ? '' : 'none'
  sceneSky.style.display = name === 'sky' ? '' : 'none'
  sceneScale.style.display = name === 'scale' ? '' : 'none'
  scalePlayback.style.display = name === 'scale' ? '' : 'none'
  constToggles.style.display = name === 'dashboard' ? '' : 'none'
  backToMenuBtn.hidden = name === 'menu'
  toggleControlsBtn.hidden = !showHud
  if (name !== 'sky') arView.stop()
  if (document.fullscreenElement) document.exitFullscreen()
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

// 針は「北」を指し続ける。画面(headingDeg方向を正面)がheadingDeg分回転して
// 見えているぶん、北を指す針は見た目上その逆方向へ回転させる
function applyCompassNeedleRotation() {
  const rotate = `rotate(${-compassHeadingDeg}deg)`
  if (compass3dEnabled) compassIcon3d.style.transform = rotate
  if (compass2dEnabled) compassIcon2d.style.transform = rotate
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
  if (!enabled) icon.style.transform = ''

  if (isCompassActive() && !compassTracker) {
    const tracker = new CompassHeadingTracker((heading) => {
      compassHeadingDeg = heading
      if (compass3dEnabled) scene3d.setCompassHeading(compassHeadingDeg)
      if (compass2dEnabled) updateDashboard(dashboardCurrentDate)
      applyCompassNeedleRotation()
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
menuScaleBtn.addEventListener('click', () => enterScaleMode(SCALE_CONFIG_FULL, 'view-scale', 'nav-scale'))
menuScaleOrbitBtn.addEventListener('click', () => enterScaleMode(SCALE_CONFIG_ORBIT, 'view-scale-orbit', 'nav-scale-orbit'))
menuScaleSpinBtn.addEventListener('click', () => enterScaleMode(SCALE_CONFIG_SPIN, 'view-scale-spin', 'nav-scale-spin'))
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

latInput.addEventListener('input', () => {
  updateDashboard(dashboardCurrentDate)
  updateSky(skyCurrentDate)
})
lngInput.addEventListener('input', () => {
  updateDashboard(dashboardCurrentDate)
  updateSky(skyCurrentDate)
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

// ---- フルスクリーン ----
const mainEl = document.querySelector('main') as HTMLElement

document.querySelectorAll<HTMLButtonElement>('.fullscreen-btn[data-target]').forEach(btn => {
  setIcon(btn, fullscreenExpandIconSvg)
  btn.addEventListener('click', () => {
    if (!document.fullscreenElement) {
      mainEl.dataset.fs = btn.dataset.target ?? ''
      mainEl.requestFullscreen().catch(() => {})
      setIcon(btn, fullscreenCollapseIconSvg)
    } else {
      document.exitFullscreen()
    }
  })
})

document.addEventListener('fullscreenchange', () => {
  if (!document.fullscreenElement) {
    delete mainEl.dataset.fs
    document.querySelectorAll<HTMLButtonElement>('.fullscreen-btn[data-target]').forEach(b => {
      setIcon(b, fullscreenExpandIconSvg)
    })
    scene3d.handleResize()
  } else {
    // フルスクリーン直後にThree.jsをリサイズ
    requestAnimationFrame(() => scene3d.handleResize())
  }
})

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
  scaleSceneTitle.textContent = t(scaleSceneTitleKey) // data-i18n化していないので手動で出し直す
  headerTitle.textContent = t(headerTitleKey)
})

// ---- 日/月/年モードの時間バー（3D+2D・SKY共通。simPlayback.ts参照）----
createSimPlaybackController('dashboard', updateDashboard)
createSimPlaybackController('sky', updateSky)
