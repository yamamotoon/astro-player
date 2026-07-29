export type Lang = 'ja' | 'en'

const TRANSLATIONS: Record<Lang, Record<string, string>> = {
  ja: {
    'page-title':          'StarCanvas Hoshizora - 太陽・月位置シミュレーター',
    'h1':                  'StarCanvas Hoshizora \u2014 太陽・月位置シミュレーター',
    'toggle-aria':         '設定を開閉',
    'settings-open':       '設定 ▲',
    'settings-close':      '設定 ▼',
    'nav-menu':            '☰ メニュー',
    'nav-dashboard':       '🪐 3D+2D',
    'nav-sky':             '🔭 SKY',
    'menu-dashboard-desc': '3D天球・2D方位図・天体情報',
    'menu-sky-desc':       'ジャイロで天球を見るARビュー',
    'location':            '場所',
    'lat':                 '緯度',
    'lng':                 '経度',
    'datetime':            '日時',
    'realtime':            'リアルタイム更新',
    'show-constellations': '星座表示',
    'show-famous':         '有名な星座',
    'show-triangles':      '大三角形',
    'play-title':          '24時間シミュレーション 再生/停止',
    'view-3d':             '3D 天球',
    'fullscreen-title':    'フルスクリーン',
    'view-2d':             '2D 方位図',
    'view-sky':            'SKY（ジャイロで天球内を見る）',
    'ar-start-text':       '🔭 タップして開始',
    'celestial-info':      '天体情報',
    'col-item':            '項目',
    'col-sun':             '太陽',
    'col-moon':            '月',
    'row-az':              '方位角',
    'row-alt':             '高度角',
    'row-rise':            '出',
    'row-set':             '入り',
    'skyview-manual':      '🖥 手動',
    'skyview-gyro':        '🔄 ジャイロ',
    'dir-north':           '北(N)',
    'dir-south':           '南(S)',
    'dir-east':            '東(E)',
    'dir-west':            '西(W)',
    'label-sun':           '太陽☀',
    'label-moon':          '月🌙',
  },
  en: {
    'page-title':          'StarCanvas Hoshizora - Sun & Moon Simulator',
    'h1':                  'StarCanvas Hoshizora \u2014 Sun & Moon Simulator',
    'toggle-aria':         'Toggle settings',
    'settings-open':       'Settings ▲',
    'settings-close':      'Settings ▼',
    'nav-menu':            '☰ Menu',
    'nav-dashboard':       '🪐 3D+2D',
    'nav-sky':             '🔭 SKY',
    'menu-dashboard-desc': '3D sky sphere, 2D compass, celestial info',
    'menu-sky-desc':       'AR sky view with gyro',
    'location':            'Location',
    'lat':                 'Lat',
    'lng':                 'Lng',
    'datetime':            'Date / Time',
    'realtime':            'Realtime update',
    'show-constellations': 'Constellations',
    'show-famous':         'Famous constellations',
    'show-triangles':      'Summer Triangle',
    'play-title':          '24h Simulation Play/Stop',
    'view-3d':             '3D Sky Sphere',
    'fullscreen-title':    'Fullscreen',
    'view-2d':             '2D Compass',
    'view-sky':            'SKY (gyro sky view)',
    'ar-start-text':       '🔭 Tap to start',
    'celestial-info':      'Celestial Info',
    'col-item':            'Item',
    'col-sun':             'Sun',
    'col-moon':            'Moon',
    'row-az':              'Azimuth',
    'row-alt':             'Altitude',
    'row-rise':            'Rise',
    'row-set':             'Set',
    'skyview-manual':      '🖥 Manual',
    'skyview-gyro':        '🔄 Gyro',
    'dir-north':           'N',
    'dir-south':           'S',
    'dir-east':            'E',
    'dir-west':            'W',
    'label-sun':           'Sun☀',
    'label-moon':          'Moon🌙',
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
