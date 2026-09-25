export type Lang = 'ja' | 'en'

const TRANSLATIONS: Record<Lang, Record<string, string>> = {
  ja: {
    'page-title':          '天空プレイヤー - 太陽・月位置シミュレーター',
    'h1':                  '天空プレイヤー',
    'toggle-aria':         '設定を開閉',
    'nav-back':            'メニューに戻る',
    'nav-dashboard':       '🪐 3D+2D',
    'nav-sky':             '🔭 SKY',
    'nav-scale':           '🌍 スケール',
    'nav-scale-orbit':     '☀️ 地球の公転',
    'nav-scale-spin':      '🌓 地球の自転',
    'menu-dashboard-desc': '3D天球・2D方位図・天体情報',
    'menu-sky-desc':       'ジャイロで天球を見るARビュー',
    'menu-scale-desc':     '地球・月・太陽の距離と大きさを正確に再現',
    'menu-scale-orbit-desc': '太陽の周りを回る地球と、月の動き・満ち欠けを見る',
    'menu-scale-spin-desc':  '地球の自転（昼と夜）と、月がいつも同じ面を向けている様子を見る',
    'location':            '場所',
    'lat':                 '緯度',
    'lng':                 '経度',
    'show-constellations': '星座表示',
    'show-famous':         '有名な星座',
    'show-triangles':      '大三角形',
    'play-title':          '24時間シミュレーション 再生/停止',
    'view-3d':             '3D 天球',
    'compass-toggle-title': 'デバイスの向きに合わせる',
    'view-2d':             '2D 方位図',
    'scale-view-btn':      '視点',
    'scale-view-title':    '視点を選ぶ',
    'scale-view-moon-orbit':    '地球と月の軌道を見る',
    'scale-view-earth-orbit':   '地球の公転軌道を見る',
    'scale-view-focus-sun':     '太陽に寄る',
    'scale-view-focus-earth':   '地球に寄る',
    'scale-view-focus-moon':    '月に寄る',
    'scale-view-focus-mercury': '水星に寄る',
    'scale-view-focus-venus':   '金星に寄る',
    'scale-view-focus-mars':    '火星に寄る',
    'dialog-close':        '閉じる',
    'scale-fit-title':     '全体を表示 (Home)',
    'scale-display':       '表示',
    'scale-deform-real':   '実比率',
    'scale-deform-deform': '見やすく',
    'scale-mode-day':      '日',
    'scale-mode-month':    '月',
    'scale-mode-year':     '年',
    'now-btn':             'NOW',
    'now-title':           '現在時刻に戻す',
    'ar-start-text':       '🔭 タップして開始',
    'skyview-manual':      '🖥 手動',
    'skyview-gyro':        '🔄 ジャイロ',
    'dir-north':           '北(N)',
    'dir-south':           '南(S)',
    'dir-east':            '東(E)',
    'dir-west':            '西(W)',
    'label-sun':           '太陽',
    'label-moon':          '月',
    'label-earth':         '地球',
    'label-mercury':       '水星',
    'label-venus':         '金星',
    'label-mars':          '火星',
  },
  en: {
    'page-title':          'astro-player - Sun & Moon Simulator',
    'h1':                  'astro-player',
    'toggle-aria':         'Toggle settings',
    'nav-back':            'Back to menu',
    'nav-dashboard':       '🪐 3D+2D',
    'nav-sky':             '🔭 SKY',
    'nav-scale':           '🌍 Scale',
    'nav-scale-orbit':     '☀️ Earth\'s Orbit',
    'nav-scale-spin':      '🌓 Earth\'s Spin',
    'menu-dashboard-desc': '3D sky sphere, 2D compass, celestial info',
    'menu-sky-desc':       'AR sky view with gyro',
    'menu-scale-desc':     'Accurate Earth-Moon-Sun distance & size',
    'menu-scale-orbit-desc': 'Earth orbiting the Sun, the Moon\'s motion & phases',
    'menu-scale-spin-desc':  'Earth\'s day/night spin, and the Moon\'s tidal lock',
    'location':            'Location',
    'lat':                 'Lat',
    'lng':                 'Lng',
    'show-constellations': 'Constellations',
    'show-famous':         'Famous constellations',
    'show-triangles':      'Summer Triangle',
    'play-title':          '24h Simulation Play/Stop',
    'view-3d':             '3D Sky Sphere',
    'compass-toggle-title': 'Sync with device heading',
    'view-2d':             '2D Compass',
    'scale-view-btn':      'View',
    'scale-view-title':    'Choose a view',
    'scale-view-moon-orbit':    'View the Moon\'s orbit around Earth',
    'scale-view-earth-orbit':   'View Earth\'s orbit around the Sun',
    'scale-view-focus-sun':     'Zoom to the Sun',
    'scale-view-focus-earth':   'Zoom to Earth',
    'scale-view-focus-moon':    'Zoom to the Moon',
    'scale-view-focus-mercury': 'Zoom to Mercury',
    'scale-view-focus-venus':   'Zoom to Venus',
    'scale-view-focus-mars':    'Zoom to Mars',
    'dialog-close':        'Close',
    'scale-fit-title':     'Frame all (Home)',
    'scale-display':       'Display',
    'scale-deform-real':   'To scale',
    'scale-deform-deform': 'Easy view',
    'scale-mode-day':      'Day',
    'scale-mode-month':    'Month',
    'scale-mode-year':     'Year',
    'now-btn':             'NOW',
    'now-title':           'Jump to current time',
    'ar-start-text':       '🔭 Tap to start',
    'skyview-manual':      '🖥 Manual',
    'skyview-gyro':        '🔄 Gyro',
    'dir-north':           'N',
    'dir-south':           'S',
    'dir-east':            'E',
    'dir-west':            'W',
    'label-sun':           'Sun',
    'label-moon':          'Moon',
    'label-earth':         'Earth',
    'label-mercury':       'Mercury',
    'label-venus':         'Venus',
    'label-mars':          'Mars',
  },
}

let currentLang: Lang = 'ja'

export function t(key: string): string {
  return TRANSLATIONS[currentLang][key] ?? key
}

export function getLang(): Lang {
  return currentLang
}

export function applyLang(lang: Lang): void {
  currentLang = lang
  document.documentElement.lang = lang
  document.title = t('page-title')
  document.querySelectorAll<HTMLElement>('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n!)
  })
  document.querySelectorAll<HTMLElement>('[data-i18n-title]').forEach(el => {
    el.title = t(el.dataset.i18nTitle!)
  })
  document.querySelectorAll<HTMLElement>('[data-i18n-aria-label]').forEach(el => {
    el.setAttribute('aria-label', t(el.dataset.i18nAriaLabel!))
  })
}
