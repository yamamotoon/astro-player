import SunCalc from 'suncalc'

export interface CelestialPosition {
  azimuthRad: number  // SunCalc convention: 0=S, π/2=W, π=N, -π/2=E
  altitudeRad: number
  azimuthDeg: number  // North-based clockwise: 0=N, 90=E, 180=S, 270=W
  altitudeDeg: number
}

export interface AstroData {
  sun: CelestialPosition
  moon: CelestialPosition
  sunTimes: ReturnType<typeof SunCalc.getTimes>
  moonRise: Date | undefined
  moonSet: Date | undefined
}

// SunCalc azimuth (0=S clockwise toward W) → North-based clockwise degrees
function toNorthDeg(azRad: number): number {
  const deg = (azRad * 180 / Math.PI) + 180
  return ((deg % 360) + 360) % 360
}

export function getAstroData(date: Date, lat: number, lng: number): AstroData {
  const sunPos = SunCalc.getPosition(date, lat, lng)
  const moonPos = SunCalc.getMoonPosition(date, lat, lng)
  const sunTimes = SunCalc.getTimes(date, lat, lng)
  const moonTimes = SunCalc.getMoonTimes(date, lat, lng)

  const sun: CelestialPosition = {
    azimuthRad: sunPos.azimuth,
    altitudeRad: sunPos.altitude,
    azimuthDeg: toNorthDeg(sunPos.azimuth),
    altitudeDeg: sunPos.altitude * 180 / Math.PI,
  }

  const moon: CelestialPosition = {
    azimuthRad: moonPos.azimuth,
    altitudeRad: moonPos.altitude,
    azimuthDeg: toNorthDeg(moonPos.azimuth),
    altitudeDeg: moonPos.altitude * 180 / Math.PI,
  }

  const moonRise = 'rise' in moonTimes && moonTimes.rise instanceof Date ? moonTimes.rise : undefined
  const moonSet = 'set' in moonTimes && moonTimes.set instanceof Date ? moonTimes.set : undefined

  return { sun, moon, sunTimes, moonRise, moonSet }
}

// SunCalc azimuth/altitude → Three.js XYZ (X=East, Y=Up, Z=South)
export function positionToXYZ(az: number, alt: number, radius: number): [number, number, number] {
  const x = -Math.sin(az) * Math.cos(alt) * radius
  const y = Math.sin(alt) * radius
  const z = Math.cos(az) * Math.cos(alt) * radius
  return [x, y, z]
}

export function formatTime(date: Date | undefined): string {
  if (!date) return '-'
  return date.toLocaleTimeString('ja-JP', { hour: '2-digit', minute: '2-digit' })
}

// ---- 黄道12星座 ----

function julianDate(date: Date): number {
  return date.getTime() / 86400000 + 2440587.5
}

/** RA/Dec (degrees) → SunCalc azimuth convention + altitude (radians) */
export function raDecToAltAz(
  raDeg: number, decDeg: number,
  lat: number, lng: number, date: Date
): { altRad: number; azRad: number } {
  const jd = julianDate(date)
  const T = (jd - 2451545.0) / 36525
  const gmstDeg = ((280.46061837
    + 360.98564736629 * (jd - 2451545.0)
    + 0.000387933 * T * T
    - (T * T * T) / 38710000) % 360 + 360) % 360
  const lstDeg = ((gmstDeg + lng) % 360 + 360) % 360
  const haDeg = ((lstDeg - raDeg) % 360 + 360) % 360
  const haRad = haDeg * Math.PI / 180
  const decRad = decDeg * Math.PI / 180
  const latRad = lat * Math.PI / 180
  const sinAlt = Math.sin(decRad) * Math.sin(latRad)
    + Math.cos(decRad) * Math.cos(latRad) * Math.cos(haRad)
  const altRad = Math.asin(Math.max(-1, Math.min(1, sinAlt)))
  const cosAlt = Math.cos(altRad)
  const cosAz = cosAlt < 1e-10 ? 0
    : (Math.sin(decRad) - Math.sin(latRad) * sinAlt) / (Math.cos(latRad) * cosAlt)
  let azNorth = Math.acos(Math.max(-1, Math.min(1, cosAz))) // 0=North clockwise
  if (Math.sin(haRad) > 0) azNorth = 2 * Math.PI - azNorth
  return { altRad, azRad: azNorth - Math.PI } // SunCalc convention
}

export interface ConstellationDef {
  nameJa: string
  nameEn: string
  stars: ReadonlyArray<readonly [number, number]>  // [RA deg, Dec deg]
  lines: ReadonlyArray<readonly [number, number]>
}

export const ZODIAC_CONSTELLATIONS: readonly ConstellationDef[] = [
  { nameJa: 'おひつじ座',   nameEn: 'Aries',
    stars: [[31.79,23.46],[28.66,20.81],[28.38,19.29]],
    lines: [[0,1],[1,2]] },
  { nameJa: 'おうし座',     nameEn: 'Taurus',
    stars: [[56.87,24.11],[67.15,19.18],[68.98,16.51],[66.37,15.96],[81.57,28.61]],
    lines: [[0,1],[1,2],[2,3],[1,4]] },
  { nameJa: 'ふたご座',     nameEn: 'Gemini',
    stars: [[95.74,22.51],[100.98,25.13],[99.43,16.40],[113.65,31.89],[116.33,28.03]],
    lines: [[0,1],[1,3],[1,2],[3,4]] },
  { nameJa: 'かに座',       nameEn: 'Cancer',
    stars: [[124.13,9.19],[128.03,18.15],[130.82,21.47],[134.62,11.86]],
    lines: [[0,1],[1,2],[1,3]] },
  { nameJa: 'しし座',       nameEn: 'Leo',
    stars: [[146.46,23.77],[154.17,23.42],[154.99,19.84],[152.09,11.97],[168.53,20.52],[177.27,14.57]],
    lines: [[0,1],[1,2],[2,3],[2,4],[4,5]] },
  { nameJa: 'おとめ座',     nameEn: 'Virgo',
    stars: [[177.67,1.76],[190.42,-1.45],[193.90,3.40],[195.54,10.96],[201.30,-11.16]],
    lines: [[0,1],[1,2],[2,3],[1,4]] },
  { nameJa: 'てんびん座',   nameEn: 'Libra',
    stars: [[222.72,-16.04],[229.25,-9.38],[233.88,-14.79]],
    lines: [[0,1],[1,2],[0,2]] },
  { nameJa: 'さそり座',     nameEn: 'Scorpius',
    stars: [[241.36,-19.81],[240.08,-22.62],[247.35,-26.43],[252.54,-34.29],[265.62,-39.03],[263.40,-37.10]],
    lines: [[0,1],[1,2],[2,3],[3,4],[4,5]] },
  { nameJa: 'いて座',       nameEn: 'Sagittarius',
    stars: [[282.65,-27.67],[275.25,-29.83],[276.04,-34.39],[274.41,-25.42],[283.82,-26.30],[285.65,-29.88]],
    lines: [[3,1],[1,2],[2,5],[5,4],[4,0],[0,3],[1,0]] },
  { nameJa: 'やぎ座',       nameEn: 'Capricornus',
    stars: [[304.51,-12.54],[305.25,-14.78],[321.67,-22.41],[325.02,-16.66],[326.76,-16.13]],
    lines: [[0,1],[1,2],[2,3],[3,4],[0,2]] },
  { nameJa: 'みずがめ座',   nameEn: 'Aquarius',
    stars: [[311.92,-9.50],[322.89,-5.57],[331.45,-0.32],[335.41,-1.39],[343.66,-15.82]],
    lines: [[0,1],[1,2],[2,3],[3,4]] },
  { nameJa: 'うお座',       nameEn: 'Pisces',
    stars: [[22.87,15.35],[30.51,2.76],[38.95,3.82],[35.60,6.86]],
    lines: [[0,1],[1,3],[3,2]] },
]

// ---- 有名な星座・北極星 ----

export const FAMOUS_CONSTELLATIONS: readonly ConstellationDef[] = [
  { nameJa: '北極星 ★',   nameEn: 'Polaris ★',
    stars: [[37.95, 89.26]],
    lines: [] },
  { nameJa: 'オリオン座',  nameEn: 'Orion',
    // 0:Betelgeuse 1:Rigel 2:Bellatrix 3:Mintaka 4:Alnilam 5:Alnitak 6:Saiph
    stars: [[88.79,7.41],[78.63,-8.20],[81.28,6.35],[83.86,-0.30],[84.05,-1.20],[85.19,-1.94],[86.94,-9.67]],
    lines: [[0,2],[2,3],[3,4],[4,5],[5,6],[6,1],[3,1],[0,4]] },
  { nameJa: '北斗七星',    nameEn: 'Big Dipper',
    // 0:Dubhe 1:Merak 2:Phecda 3:Megrez 4:Alioth 5:Mizar 6:Alkaid
    stars: [[165.93,61.75],[165.46,56.38],[178.46,53.69],[183.86,57.03],[193.51,55.96],[200.98,54.93],[206.89,49.31]],
    lines: [[0,1],[0,3],[1,2],[2,3],[3,4],[4,5],[5,6]] },
  { nameJa: 'カシオペア座', nameEn: 'Cassiopeia',
    // 0:Schedar 1:Caph 2:γCas 3:Ruchbah 4:εCas
    stars: [[10.13,56.54],[2.29,59.15],[14.18,60.72],[21.45,60.24],[28.60,63.67]],
    lines: [[1,0],[0,2],[2,3],[3,4]] },
  { nameJa: 'こと座',      nameEn: 'Lyra',
    // 0:Vega 1:ε2Lyr 2:ζLyr 3:βLyr 4:γLyr
    stars: [[279.23,38.78],[282.52,39.67],[284.74,37.61],[282.52,33.36],[284.74,32.69]],
    lines: [[0,1],[1,2],[2,4],[4,3],[3,1],[2,3]] },
  { nameJa: 'はくちょう座', nameEn: 'Cygnus',
    // 0:Deneb 1:Sadr(γ) 2:Albireo(β) 3:δ 4:ε
    stars: [[310.36,45.28],[305.56,40.26],[292.68,27.96],[296.24,45.13],[311.55,33.97]],
    lines: [[2,1],[1,0],[3,1],[1,4]] },
  { nameJa: 'わし座',      nameEn: 'Aquila',
    // 0:Altair(α) 1:Tarazed(γ) 2:Alshain(β) 3:δ 4:ζ
    stars: [[297.70,8.87],[296.56,10.61],[298.83,6.41],[293.77,3.11],[286.35,13.86]],
    lines: [[1,0],[0,2],[4,1],[1,3]] },
  { nameJa: '大熊座',      nameEn: 'Ursa Major',
    // 0:Dubhe 1:Merak 2:Phecda 3:Megrez 4:Alioth 5:Mizar 6:Alkaid(ひしゃく)
    // 7:θUMa 8:ιUMa 9:κUMa 10:μUMa 11:νUMa (胴体)
    stars: [
      [165.93,61.75],[165.46,56.38],[178.46,53.69],[183.86,57.03],
      [193.51,55.96],[200.98,54.93],[206.89,49.31],
      [143.49,51.68],[132.83,48.03],[136.76,47.16],[141.80,41.50],[141.49,33.09],
    ],
    lines: [[0,1],[1,2],[2,3],[3,0],[3,4],[4,5],[5,6],
            [0,7],[7,8],[8,9],[9,10],[10,11],[1,10]] },
  { nameJa: 'こぐま座',    nameEn: 'Ursa Minor',
    // 0:Polaris(α) 1:δ 2:ε 3:ζ 4:η 5:Kochab(β) 6:Pherkad(γ)
    stars: [
      [37.95,89.26],[259.00,86.59],[261.06,82.03],[211.10,77.00],
      [236.55,74.16],[222.68,74.16],[230.18,71.83],
    ],
    lines: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,3]] },
]

// ---- 大三角形 ----

export interface TriangleDef {
  nameJa: string
  nameEn: string
  colorHex: number
  stars: ReadonlyArray<{ nameJa: string; nameEn: string; raDeg: number; decDeg: number }>
}

export const BIG_TRIANGLES: readonly TriangleDef[] = [
  { nameJa: '夏の大三角形', nameEn: 'Summer Triangle', colorHex: 0x44aaff,
    stars: [
      { nameJa: 'ベガ',       nameEn: 'Vega',   raDeg: 279.23, decDeg:  38.78 },
      { nameJa: 'デネブ',     nameEn: 'Deneb',  raDeg: 310.36, decDeg:  45.28 },
      { nameJa: 'アルタイル', nameEn: 'Altair', raDeg: 297.70, decDeg:   8.87 },
    ] },
  { nameJa: '冬の大三角形', nameEn: 'Winter Triangle', colorHex: 0xff8844,
    stars: [
      { nameJa: 'シリウス',     nameEn: 'Sirius',    raDeg: 101.29, decDeg: -16.72 },
      { nameJa: 'ベテルギウス', nameEn: 'Betelgeuse', raDeg:  88.79, decDeg:   7.41 },
      { nameJa: 'プロキオン',   nameEn: 'Procyon',   raDeg: 114.83, decDeg:   5.23 },
    ] },
]
