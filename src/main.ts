import './style.css'
import { applyLang, getLang, t } from './i18n'
import { Scene3D } from './scene3d'
import { Compass2D } from './compass2d'
import { getAstroData, formatTime } from './astroCalc'
import { ARView } from './ar'
import { ScaleModel3D } from './scaleModel3d'

type SceneName = 'menu' | 'dashboard' | 'sky' | 'scale'

const latInput = document.getElementById('lat') as HTMLInputElement
const lngInput = document.getElementById('lng') as HTMLInputElement
const datetimeInput = document.getElementById('datetime') as HTMLInputElement
const realtimeCheck = document.getElementById('realtime') as HTMLInputElement
const constCheck = document.getElementById('show-constellations') as HTMLInputElement
const famousCheck = document.getElementById('show-famous') as HTMLInputElement
const trianglesCheck = document.getElementById('show-triangles') as HTMLInputElement

function toDatetimeLocal(d: Date): string {
  const pad = (n: number) => String(n).padStart(2, '0')
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`
}

datetimeInput.value = toDatetimeLocal(new Date())

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

const canvasScale = document.getElementById('canvas-scale') as HTMLCanvasElement
const scaleModel = new ScaleModel3D(canvasScale)

const scaleFitBtn = document.getElementById('scale-fit-btn') as HTMLButtonElement
scaleFitBtn.addEventListener('click', () => scaleModel.frameAll())

function getSettings() {
  const lat = parseFloat(latInput.value) || 35.6762
  const lng = parseFloat(lngInput.value) || 139.6503
  const date = realtimeCheck.checked ? new Date() : new Date(datetimeInput.value)
  return { lat, lng, date }
}

function setText(id: string, value: string) {
  const el = document.getElementById(id)
  if (el) el.textContent = value
}

// ---- シーン切り替え（メニュー / 3D+2D / SKY / スケールモデル） ----
const sceneMenu = document.getElementById('scene-menu') as HTMLElement
const sceneHud = document.getElementById('scene-hud') as HTMLElement
const scenePlayback = document.getElementById('scene-playback') as HTMLElement
const scalePlayback = document.getElementById('scale-playback') as HTMLElement
const sceneDashboard = document.getElementById('scene-dashboard') as HTMLElement
const sceneSky = document.getElementById('scene-sky') as HTMLElement
const sceneScale = document.getElementById('scene-scale') as HTMLElement
const constToggles = document.getElementById('const-toggles') as HTMLElement
const backNav = document.getElementById('back-nav') as HTMLElement
const backToMenuBtn = document.getElementById('back-to-menu-btn') as HTMLButtonElement
const menuDashboardBtn = document.getElementById('menu-dashboard-btn') as HTMLButtonElement
const menuSkyBtn = document.getElementById('menu-sky-btn') as HTMLButtonElement
const menuScaleBtn = document.getElementById('menu-scale-btn') as HTMLButtonElement

function showScene(name: SceneName) {
  const showHud = name === 'dashboard' || name === 'sky'
  sceneMenu.style.display = name === 'menu' ? '' : 'none'
  sceneHud.style.display = showHud ? '' : 'none'
  scenePlayback.style.display = showHud ? '' : 'none'
  sceneDashboard.style.display = name === 'dashboard' ? '' : 'none'
  sceneSky.style.display = name === 'sky' ? '' : 'none'
  sceneScale.style.display = name === 'scale' ? '' : 'none'
  scalePlayback.style.display = name === 'scale' ? '' : 'none'
  constToggles.style.display = name === 'dashboard' ? '' : 'none'
  backNav.hidden = name === 'menu'
  if (name !== 'sky') arView.stop()
  if (document.fullscreenElement) document.exitFullscreen()
  if (name === 'dashboard') {
    // 非表示中はサイズ0で解像度が決まらないため、表示直後に再計算する
    requestAnimationFrame(() => scene3d.handleResize())
  }
  if (name === 'scale') {
    requestAnimationFrame(() => scaleModel.handleResize())
  }
}

menuDashboardBtn.addEventListener('click', () => showScene('dashboard'))
menuSkyBtn.addEventListener('click', () => {
  // ジェスチャーを保持したまま同じクリックハンドラ内で開始する
  // （iOS Safariのジャイロ許可はユーザー操作から直接呼ばないと通らないため）
  showScene('sky')
  arView.start(arCanvas)
})
menuScaleBtn.addEventListener('click', () => showScene('scale'))
backToMenuBtn.addEventListener('click', () => showScene('menu'))

// ---- 24時間シミュレーション（状態変数・DOM参照）----
const langBtn = document.getElementById('lang-btn') as HTMLButtonElement
const playBtn = document.getElementById('play-btn') as HTMLButtonElement
const seekbar = document.getElementById('seekbar') as HTMLInputElement
let isPlaying = false

function updateSeekbar(date: Date) {
  if (isPlaying) return // アニメーション中は applySimMinute 側が管理
  const minutes = date.getHours() * 60 + date.getMinutes()
  seekbar.value = String(minutes)
}

function update() {
  const { lat, lng, date } = getSettings()
  if (isNaN(date.getTime())) return

  if (realtimeCheck.checked) {
    datetimeInput.value = toDatetimeLocal(date)
  }

  updateSeekbar(date)

  const data = getAstroData(date, lat, lng)
  scene3d.update(data)
  compass2d.draw(data)
  arView.setData(data, lat, lng, date)

  setText('sun-az', `${data.sun.azimuthDeg.toFixed(1)}°`)
  setText('sun-alt', `${data.sun.altitudeDeg.toFixed(1)}°`)
  setText('moon-az', `${data.moon.azimuthDeg.toFixed(1)}°`)
  setText('moon-alt', `${data.moon.altitudeDeg.toFixed(1)}°`)
  setText('sun-rise', formatTime(data.sunTimes.sunrise))
  setText('sun-set', formatTime(data.sunTimes.sunset))
  setText('moon-rise', formatTime(data.moonRise))
  setText('moon-set', formatTime(data.moonSet))

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

latInput.addEventListener('input', update)
lngInput.addEventListener('input', update)
datetimeInput.addEventListener('input', update)
realtimeCheck.addEventListener('change', update)
constCheck.addEventListener('change', () => {
  scene3d.setConstellationsVisible(constCheck.checked)
  if (constCheck.checked) update()
})
famousCheck.addEventListener('change', () => {
  scene3d.setFamousVisible(famousCheck.checked)
  if (famousCheck.checked) update()
})
trianglesCheck.addEventListener('change', () => {
  scene3d.setTrianglesVisible(trianglesCheck.checked)
  if (trianglesCheck.checked) update()
})

// Real-time auto update every 10 seconds
let realtimeInterval: ReturnType<typeof setInterval> | null = null

function startRealtime() {
  stopRealtime()
  realtimeInterval = setInterval(() => {
    if (realtimeCheck.checked) update()
  }, 10000)
}

function stopRealtime() {
  if (realtimeInterval !== null) {
    clearInterval(realtimeInterval)
    realtimeInterval = null
  }
}

realtimeCheck.addEventListener('change', () => {
  if (realtimeCheck.checked) startRealtime()
  else stopRealtime()
})

startRealtime()
update()

// ---- フルスクリーン ----
const mainEl = document.querySelector('main') as HTMLElement

document.querySelectorAll<HTMLButtonElement>('.fullscreen-btn[data-target]').forEach(btn => {
  btn.addEventListener('click', () => {
    if (!document.fullscreenElement) {
      mainEl.dataset.fs = btn.dataset.target ?? ''
      mainEl.requestFullscreen().catch(() => {})
      btn.textContent = '✕'
    } else {
      document.exitFullscreen()
    }
  })
})

document.addEventListener('fullscreenchange', () => {
  if (!document.fullscreenElement) {
    delete mainEl.dataset.fs
    document.querySelectorAll<HTMLButtonElement>('.fullscreen-btn[data-target]').forEach(b => {
      b.textContent = '⛶'
    })
    scene3d.handleResize()
  } else {
    // フルスクリーン直後にThree.jsをリサイズ
    requestAnimationFrame(() => scene3d.handleResize())
  }
})

// ---- 設定パネル 折りたたみ ----
const toggleControlsBtn = document.getElementById('toggle-controls') as HTMLButtonElement
const controlsSection = document.querySelector('.controls') as HTMLElement

function refreshToggleBtn() {
  const isOpen = !controlsSection.classList.contains('collapsed')
  toggleControlsBtn.textContent = isOpen ? t('settings-open') : t('settings-close')
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
  scaleModel.refreshTextLabels()
})

// ---- 24時間シミュレーション ----
const ANIM_DURATION_MS = 24_000 // 24秒で24時間（1秒=1時間）

let animStartTime: number | null = null
let animStartMinute = 0
let animRafId: number | null = null

function getBaseDate(): Date {
  const d = new Date(datetimeInput.value)
  if (!isNaN(d.getTime())) return new Date(d.getFullYear(), d.getMonth(), d.getDate())
  const now = new Date()
  return new Date(now.getFullYear(), now.getMonth(), now.getDate())
}

function applySimMinute(minute: number) {
  const m = Math.max(0, Math.min(1439, minute))
  const h = Math.floor(m / 60)
  const min = Math.floor(m % 60)
  seekbar.value = String(Math.round(m))
  const base = getBaseDate()
  base.setHours(h, min, 0, 0)
  datetimeInput.value = toDatetimeLocal(base)
  update()
}

function stopAnim() {
  isPlaying = false
  playBtn.textContent = '▶'
  if (animRafId !== null) {
    cancelAnimationFrame(animRafId)
    animRafId = null
  }
}

function animStep(timestamp: number) {
  if (!isPlaying) return
  if (animStartTime === null) animStartTime = timestamp
  const elapsed = timestamp - animStartTime
  const minute = animStartMinute + (elapsed / ANIM_DURATION_MS) * 1440
  if (minute >= 1440) {
    applySimMinute(1439)
    stopAnim()
    return
  }
  applySimMinute(minute)
  animRafId = requestAnimationFrame(animStep)
}

function startAnim() {
  animStartMinute = parseInt(seekbar.value) || 0
  if (animStartMinute >= 1439) animStartMinute = 0
  animStartTime = null
  isPlaying = true
  playBtn.textContent = '⏸'
  realtimeCheck.checked = false
  stopRealtime()
  animRafId = requestAnimationFrame(animStep)
}

playBtn.addEventListener('click', () => {
  if (isPlaying) stopAnim()
  else startAnim()
})

seekbar.addEventListener('input', () => {
  stopAnim()
  realtimeCheck.checked = false
  stopRealtime()
  applySimMinute(parseInt(seekbar.value))
})
