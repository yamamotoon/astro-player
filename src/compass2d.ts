import type { AstroData } from './astroCalc'

export class Compass2D {
  private ctx: CanvasRenderingContext2D
  private w: number
  private h: number
  private cx: number
  private cy: number
  private r: number

  constructor(canvas: HTMLCanvasElement) {
    this.ctx = canvas.getContext('2d')!
    this.w = canvas.width
    this.h = canvas.height
    this.cx = this.w / 2
    this.cy = this.h / 2
    this.r = Math.min(this.w, this.h) / 2 - 28
  }

  /**
   * @param headingDeg 画面上部に表示する方位（北基準・時計回り）。
   *   0=北固定表示。方位磁石モードONの時はデバイスの向いている方角(コンパス方位)を渡す
   *   ことで、その方角が画面上部に来るよう図全体を回転させる。
   */
  draw(data: AstroData, headingDeg = 0) {
    const { ctx, cx, cy, r } = this
    ctx.clearRect(0, 0, this.w, this.h)

    // Background
    ctx.fillStyle = '#05051a'
    ctx.fillRect(0, 0, this.w, this.h)

    // Altitude rings (25%, 50%, 75% = 67.5°, 45°, 22.5° altitude)
    for (const f of [0.25, 0.5, 0.75]) {
      ctx.beginPath()
      ctx.arc(cx, cy, r * f, 0, Math.PI * 2)
      ctx.strokeStyle = '#1a1a3a'
      ctx.lineWidth = 0.8
      ctx.stroke()
    }

    // Horizon circle
    ctx.beginPath()
    ctx.arc(cx, cy, r, 0, Math.PI * 2)
    ctx.strokeStyle = '#33aa55'
    ctx.lineWidth = 1.5
    ctx.stroke()

    // Degree ticks
    for (let deg = 0; deg < 360; deg += 10) {
      const rad = (deg - 90) * Math.PI / 180
      const len = deg % 30 === 0 ? 9 : 4
      ctx.beginPath()
      ctx.moveTo(cx + Math.cos(rad) * (r - len), cy + Math.sin(rad) * (r - len))
      ctx.lineTo(cx + Math.cos(rad) * r, cy + Math.sin(rad) * r)
      ctx.strokeStyle = '#334455'
      ctx.lineWidth = 1
      ctx.stroke()
    }

    // Crosshairs
    ctx.beginPath()
    ctx.moveTo(cx - r, cy); ctx.lineTo(cx + r, cy)
    ctx.moveTo(cx, cy - r); ctx.lineTo(cx, cy + r)
    ctx.strokeStyle = '#1a2a3a'
    ctx.lineWidth = 0.5
    ctx.stroke()

    // Cardinal labels (0=N is top = -90° in canvas)
    const cards = [
      { label: '北(N)', deg: 0,   color: '#ff7777' },
      { label: '東(E)', deg: 90,  color: '#66cc77' },
      { label: '南(S)', deg: 180, color: '#66cc77' },
      { label: '西(W)', deg: 270, color: '#66cc77' },
    ]
    ctx.font = 'bold 11px Arial'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    for (const { label, deg, color } of cards) {
      const rad = (deg - headingDeg - 90) * Math.PI / 180
      ctx.fillStyle = color
      ctx.fillText(label, cx + Math.cos(rad) * (r + 16), cy + Math.sin(rad) * (r + 16))
    }

    // Draw sun and moon
    this.drawBody(data.sun.azimuthDeg - headingDeg, data.sun.altitudeDeg, '#ffee44', '☀')
    this.drawBody(data.moon.azimuthDeg - headingDeg, data.moon.altitudeDeg, '#aaaadd', '☽')

    // Legend
    ctx.font = '10px Arial'
    ctx.textAlign = 'left'
    ctx.globalAlpha = 0.8
    ctx.fillStyle = '#ffee44'
    ctx.fillText('● 太陽', 6, this.h - 20)
    ctx.fillStyle = '#aaaadd'
    ctx.fillText('● 月', 6, this.h - 8)
    ctx.fillStyle = '#556677'
    ctx.textAlign = 'right'
    ctx.fillText('外縁=地平線 中心=天頂', this.w - 6, this.h - 8)
    ctx.globalAlpha = 1.0
  }

  private drawBody(azDeg: number, altDeg: number, color: string, symbol: string) {
    const { ctx, cx, cy, r } = this
    // azDeg: North-based clockwise. Canvas: 0°=East=right, so offset by -90°
    const azRad = (azDeg - 90) * Math.PI / 180
    // altitude 90°=zenith(center), 0°=horizon(edge r), negative=outside
    const dist = r * (1 - altDeg / 90)
    const clampDist = Math.min(dist, r * 1.25)
    const px = cx + Math.cos(azRad) * clampDist
    const py = cy + Math.sin(azRad) * clampDist
    const belowHorizon = altDeg < 0

    // Radial line
    ctx.beginPath()
    ctx.moveTo(cx, cy)
    ctx.lineTo(px, py)
    ctx.strokeStyle = color
    ctx.lineWidth = 0.8
    ctx.globalAlpha = belowHorizon ? 0.2 : 0.4
    ctx.stroke()

    // Body circle
    ctx.globalAlpha = belowHorizon ? 0.35 : 1.0
    ctx.beginPath()
    ctx.arc(px, py, 9, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()

    // Symbol
    ctx.globalAlpha = belowHorizon ? 0.5 : 1.0
    ctx.font = '10px Arial'
    ctx.fillStyle = '#111'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText(symbol, px, py)
    ctx.globalAlpha = 1.0
  }
}
