import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import type { AstroData, ConstellationDef, TriangleDef } from './astroCalc'
import { positionToXYZ, raDecToAltAz, ZODIAC_CONSTELLATIONS, FAMOUS_CONSTELLATIONS, BIG_TRIANGLES } from './astroCalc'
import { getLang } from './i18n'

const R = 5 // celestial sphere radius

export class Scene3D {
  private renderer: THREE.WebGLRenderer
  private scene: THREE.Scene
  private camera: THREE.PerspectiveCamera
  private controls: OrbitControls
  private sunMesh: THREE.Mesh
  private moonMesh: THREE.Mesh
  private sunLine: THREE.Line
  private moonLine: THREE.Line
  private rafId: number | null = null
  private constellationGroup: THREE.Group
  private constStarAttr: THREE.BufferAttribute | null = null
  private constLineAttr: THREE.BufferAttribute | null = null
  private constLabels: THREE.Sprite[] = []
  private famousGroup: THREE.Group
  private famousStarAttr: THREE.BufferAttribute | null = null
  private famousLineAttr: THREE.BufferAttribute | null = null
  private famousLabels: THREE.Sprite[] = []
  private triangleGroup: THREE.Group
  private triangleData: Array<{
    starAttr: THREE.BufferAttribute
    lineAttr: THREE.BufferAttribute
    starLabels: THREE.Sprite[]
    nameLabel: THREE.Sprite
  }> = []
  private cardinalSprites: Array<{ sprite: THREE.Sprite; dirKey: string; isNorth: boolean }> = []

  constructor(canvas: HTMLCanvasElement) {
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
    this.renderer.setPixelRatio(window.devicePixelRatio)
    this.renderer.setClearColor(0x05051a)

    this.scene = new THREE.Scene()

    this.camera = new THREE.PerspectiveCamera(55, 1, 0.1, 100)
    this.camera.position.set(0, 3, 9)
    this.camera.lookAt(0, 0, 0)

    this.controls = new OrbitControls(this.camera, canvas)
    this.controls.enableDamping = true
    this.controls.dampingFactor = 0.06
    this.controls.minDistance = 2
    this.controls.maxDistance = 18

    this.buildScene()

    // Sun
    const sunGeo = new THREE.SphereGeometry(0.2, 16, 16)
    const sunMat = new THREE.MeshBasicMaterial({ color: 0xffee44 })
    this.sunMesh = new THREE.Mesh(sunGeo, sunMat)
    this.scene.add(this.sunMesh)
    const glowGeo = new THREE.SphereGeometry(0.32, 16, 16)
    const glowMat = new THREE.MeshBasicMaterial({ color: 0xffee44, transparent: true, opacity: 0.18 })
    this.sunMesh.add(new THREE.Mesh(glowGeo, glowMat))

    // Moon
    const moonGeo = new THREE.SphereGeometry(0.13, 16, 16)
    const moonMat = new THREE.MeshBasicMaterial({ color: 0xccccdd })
    this.moonMesh = new THREE.Mesh(moonGeo, moonMat)
    this.scene.add(this.moonMesh)

    // Direction lines
    this.sunLine = this.makeLine(0xffee44)
    this.moonLine = this.makeLine(0xaaaacc)

    this.handleResize()
    window.addEventListener('resize', () => this.handleResize())
    this.startLoop()

    this.constellationGroup = new THREE.Group()
    this.constellationGroup.visible = false
    this.scene.add(this.constellationGroup)
    this.initConstellations()

    this.famousGroup = new THREE.Group()
    this.famousGroup.visible = false
    this.scene.add(this.famousGroup)
    this.initFamous()

    this.triangleGroup = new THREE.Group()
    this.triangleGroup.visible = false
    this.scene.add(this.triangleGroup)
    this.initTriangles()
  }

  private makeLine(color: number): THREE.Line {
    const mat = new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.4 })
    const pts = [new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 1, 0)]
    const geo = new THREE.BufferGeometry().setFromPoints(pts)
    const line = new THREE.Line(geo, mat)
    this.scene.add(line)
    return line
  }

  private buildScene() {
    // Celestial sphere wireframe
    this.scene.add(new THREE.Mesh(
      new THREE.SphereGeometry(R, 24, 16),
      new THREE.MeshBasicMaterial({ color: 0x1a3060, wireframe: true, transparent: true, opacity: 0.15 })
    ))

    // Horizon plane
    const horizon = new THREE.Mesh(
      new THREE.CircleGeometry(R, 64),
      new THREE.MeshBasicMaterial({ color: 0x0a2210, transparent: true, opacity: 0.4, side: THREE.DoubleSide })
    )
    horizon.rotation.x = -Math.PI / 2
    this.scene.add(horizon)

    const ring = new THREE.Mesh(
      new THREE.RingGeometry(R - 0.02, R + 0.02, 64),
      new THREE.MeshBasicMaterial({ color: 0x33aa55, side: THREE.DoubleSide })
    )
    ring.rotation.x = -Math.PI / 2
    this.scene.add(ring)

    // Cardinal labels: 北/南/東/西
    // Three.js coord: X=East, Z=South → N is -Z direction
    const cardinalDefs = [
      { dirKey: 'dir-north', x: 0, z: -R, isNorth: true },
      { dirKey: 'dir-south', x: 0, z: R,  isNorth: false },
      { dirKey: 'dir-east',  x: R, z: 0,  isNorth: false },
      { dirKey: 'dir-west',  x: -R, z: 0, isNorth: false },
    ]
    cardinalDefs.forEach(({ dirKey, x, z, isNorth }) => {
      const label = dirKey === 'dir-north' ? '北(N)' : dirKey === 'dir-south' ? '南(S)' : dirKey === 'dir-east' ? '東(E)' : '西(W)'
      const s = this.makeLabel(label, isNorth)
      s.position.set(x * 1.08, 0.3, z * 1.08)
      this.scene.add(s)
      this.cardinalSprites.push({ sprite: s, dirKey, isNorth })
    })

    // Observer dot
    this.scene.add(new THREE.Mesh(
      new THREE.SphereGeometry(0.07, 8, 8),
      new THREE.MeshBasicMaterial({ color: 0xffffff })
    ))

    // Zenith line
    const zMat = new THREE.LineBasicMaterial({ color: 0x334466, transparent: true, opacity: 0.5 })
    const zGeo = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(0, R, 0),
    ])
    this.scene.add(new THREE.Line(zGeo, zMat))
  }

  private makeLabel(text: string, isNorth = false): THREE.Sprite {
    const c = document.createElement('canvas')
    c.width = 128; c.height = 64
    const ctx = c.getContext('2d')!
    ctx.font = 'bold 36px Arial'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillStyle = isNorth ? '#ff7777' : '#66cc77'
    ctx.fillText(text, 64, 32)
    const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(c) }))
    s.scale.set(1.3, 0.65, 0.65)
    return s
  }

  update(data: AstroData) {
    const [sx, sy, sz] = positionToXYZ(data.sun.azimuthRad, data.sun.altitudeRad, R)
    this.sunMesh.position.set(sx, sy, sz)
    this.setLine(this.sunLine, sx, sy, sz)
    const sMat = this.sunMesh.material as THREE.MeshBasicMaterial
    sMat.opacity = data.sun.altitudeRad < 0 ? 0.25 : 1.0
    sMat.transparent = data.sun.altitudeRad < 0

    const [mx, my, mz] = positionToXYZ(data.moon.azimuthRad, data.moon.altitudeRad, R)
    this.moonMesh.position.set(mx, my, mz)
    this.setLine(this.moonLine, mx, my, mz)
    const mMat = this.moonMesh.material as THREE.MeshBasicMaterial
    mMat.opacity = data.moon.altitudeRad < 0 ? 0.25 : 1.0
    mMat.transparent = data.moon.altitudeRad < 0
  }

  private setLine(line: THREE.Line, x: number, y: number, z: number) {
    const attr = line.geometry.attributes['position'] as THREE.BufferAttribute
    attr.setXYZ(1, x, y, z)
    attr.needsUpdate = true
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
    const loop = () => {
      this.rafId = requestAnimationFrame(loop)
      this.controls.update()
      this.renderer.render(this.scene, this.camera)
    }
    loop()
  }

  private initConstellations() {
    const totalStars = ZODIAC_CONSTELLATIONS.reduce((s, c) => s + c.stars.length, 0)
    const starsGeo = new THREE.BufferGeometry()
    this.constStarAttr = new THREE.BufferAttribute(new Float32Array(totalStars * 3), 3)
    starsGeo.setAttribute('position', this.constStarAttr)
    this.constellationGroup.add(new THREE.Points(starsGeo,
      new THREE.PointsMaterial({ color: 0xffffaa, size: 0.07, transparent: true, opacity: 0.8 })))

    const totalLineVerts = ZODIAC_CONSTELLATIONS.reduce((s, c) => s + c.lines.length * 2, 0)
    const linesGeo = new THREE.BufferGeometry()
    this.constLineAttr = new THREE.BufferAttribute(new Float32Array(totalLineVerts * 3), 3)
    linesGeo.setAttribute('position', this.constLineAttr)
    this.constellationGroup.add(new THREE.LineSegments(linesGeo,
      new THREE.LineBasicMaterial({ color: 0x886633, transparent: true, opacity: 0.5 })))

    for (const c of ZODIAC_CONSTELLATIONS) {
      const sp = this.makeConstLabel(getLang() === 'en' ? c.nameEn : c.nameJa)
      this.constellationGroup.add(sp)
      this.constLabels.push(sp)
    }
  }

  private makeConstLabel(text: string): THREE.Sprite {
    const canvas = document.createElement('canvas')
    canvas.width = 160; canvas.height = 40
    const ctx = canvas.getContext('2d')!
    ctx.font = 'bold 18px Arial'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillStyle = '#ccaa55'
    ctx.fillText(text, 80, 20)
    const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(canvas), transparent: true, opacity: 0.85 }))
    sp.scale.set(1.2, 0.3, 0.3)
    return sp
  }

  updateConstellations(lat: number, lng: number, date: Date) {
    if (!this.constStarAttr || !this.constLineAttr) return
    const starXYZ: Array<Array<[number, number, number]>> = []
    let si = 0
    for (const c of ZODIAC_CONSTELLATIONS) {
      const xyz: Array<[number, number, number]> = []
      for (const [ra, dec] of c.stars) {
        const { altRad, azRad } = raDecToAltAz(ra, dec, lat, lng, date)
        const [x, y, z] = positionToXYZ(azRad, altRad, R)
        this.constStarAttr.setXYZ(si++, x, y, z)
        xyz.push([x, y, z])
      }
      starXYZ.push(xyz)
    }
    this.constStarAttr.needsUpdate = true

    let li = 0
    for (let ci = 0; ci < ZODIAC_CONSTELLATIONS.length; ci++) {
      const xyz = starXYZ[ci]
      for (const [a, b] of ZODIAC_CONSTELLATIONS[ci].lines) {
        this.constLineAttr.setXYZ(li++, xyz[a][0], xyz[a][1], xyz[a][2])
        this.constLineAttr.setXYZ(li++, xyz[b][0], xyz[b][1], xyz[b][2])
      }
    }
    this.constLineAttr.needsUpdate = true

    for (let ci = 0; ci < ZODIAC_CONSTELLATIONS.length; ci++) {
      const xyz = starXYZ[ci]
      let cx = 0, cy = 0, cz = 0
      for (const [x, y, z] of xyz) { cx += x; cy += y; cz += z }
      cx /= xyz.length; cy /= xyz.length; cz /= xyz.length
      const len = Math.sqrt(cx * cx + cy * cy + cz * cz)
      if (len > 0.01) {
        const s = (R + 0.25) / len
        this.constLabels[ci].position.set(cx * s, cy * s + 0.15, cz * s)
      }
    }
  }

  setConstellationsVisible(v: boolean) {
    this.constellationGroup.visible = v
  }

  // ---- 有名な星座 (北極星・オリオン・北斗七星・カシオペア) ----

  private initFamous() {
    const totalStars = FAMOUS_CONSTELLATIONS.reduce((s, c) => s + c.stars.length, 0)
    const sGeo = new THREE.BufferGeometry()
    this.famousStarAttr = new THREE.BufferAttribute(new Float32Array(totalStars * 3), 3)
    sGeo.setAttribute('position', this.famousStarAttr)
    this.famousGroup.add(new THREE.Points(sGeo,
      new THREE.PointsMaterial({ color: 0x88ddff, size: 0.1 })))

    const totalLineVerts = FAMOUS_CONSTELLATIONS.reduce((s, c) => s + c.lines.length * 2, 0)
    const lGeo = new THREE.BufferGeometry()
    this.famousLineAttr = new THREE.BufferAttribute(new Float32Array(totalLineVerts * 3), 3)
    lGeo.setAttribute('position', this.famousLineAttr)
    this.famousGroup.add(new THREE.LineSegments(lGeo,
      new THREE.LineBasicMaterial({ color: 0x4499cc, transparent: true, opacity: 0.6 })))

    for (const c of FAMOUS_CONSTELLATIONS) {
      const canvas = document.createElement('canvas')
      canvas.width = 180; canvas.height = 44
      const ctx = canvas.getContext('2d')!
      ctx.font = 'bold 20px Arial'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      const name = getLang() === 'en' ? c.nameEn : c.nameJa
      ctx.fillStyle = c.nameEn === 'Polaris ★' ? '#ffffff' : '#88ddff'
      ctx.fillText(name, 90, 22)
      const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(canvas), transparent: true }))
      sp.scale.set(1.4, 0.35, 0.35)
      this.famousGroup.add(sp)
      this.famousLabels.push(sp)
    }
  }

  updateFamous(lat: number, lng: number, date: Date) {
    if (!this.famousStarAttr || !this.famousLineAttr) return
    const allXYZ: Array<Array<[number, number, number]>> = []
    let si = 0
    for (const c of FAMOUS_CONSTELLATIONS) {
      const xyz: Array<[number, number, number]> = []
      for (const [ra, dec] of c.stars) {
        const { altRad, azRad } = raDecToAltAz(ra, dec, lat, lng, date)
        const [x, y, z] = positionToXYZ(azRad, altRad, R)
        this.famousStarAttr.setXYZ(si++, x, y, z)
        xyz.push([x, y, z])
      }
      allXYZ.push(xyz)
    }
    this.famousStarAttr.needsUpdate = true

    let li = 0
    for (let ci = 0; ci < FAMOUS_CONSTELLATIONS.length; ci++) {
      const xyz = allXYZ[ci]
      for (const [a, b] of FAMOUS_CONSTELLATIONS[ci].lines) {
        this.famousLineAttr.setXYZ(li++, xyz[a][0], xyz[a][1], xyz[a][2])
        this.famousLineAttr.setXYZ(li++, xyz[b][0], xyz[b][1], xyz[b][2])
      }
    }
    this.famousLineAttr.needsUpdate = true

    for (let ci = 0; ci < FAMOUS_CONSTELLATIONS.length; ci++) {
      const xyz = allXYZ[ci]
      let cx = 0, cy = 0, cz = 0
      for (const [x, y, z] of xyz) { cx += x; cy += y; cz += z }
      cx /= xyz.length; cy /= xyz.length; cz /= xyz.length
      const len = Math.sqrt(cx * cx + cy * cy + cz * cz)
      if (len > 0.01) {
        const s = (R + 0.28) / len
        this.famousLabels[ci].position.set(cx * s, cy * s + 0.15, cz * s)
      }
    }
  }

  setFamousVisible(v: boolean) {
    this.famousGroup.visible = v
  }

  // ---- 夏・冬の大三角形 ----

  private initTriangles() {
    for (const tri of BIG_TRIANGLES) {
      const hexStr = '#' + tri.colorHex.toString(16).padStart(6, '0')

      const sGeo = new THREE.BufferGeometry()
      const sAttr = new THREE.BufferAttribute(new Float32Array(9), 3)
      sGeo.setAttribute('position', sAttr)
      this.triangleGroup.add(new THREE.Points(sGeo,
        new THREE.PointsMaterial({ color: tri.colorHex, size: 0.15 })))

      const lGeo = new THREE.BufferGeometry()
      const lAttr = new THREE.BufferAttribute(new Float32Array(18), 3)
      lGeo.setAttribute('position', lAttr)
      this.triangleGroup.add(new THREE.LineSegments(lGeo,
        new THREE.LineBasicMaterial({ color: tri.colorHex, transparent: true, opacity: 0.65 })))

      const starLabels = tri.stars.map(s => {
        const c = document.createElement('canvas')
        c.width = 130; c.height = 36
        const ctx = c.getContext('2d')!
        ctx.font = 'bold 17px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'
        ctx.fillStyle = hexStr
        ctx.fillText(getLang() === 'en' ? s.nameEn : s.nameJa, 65, 18)
        const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(c), transparent: true }))
        sp.scale.set(0.95, 0.27, 0.27)
        this.triangleGroup.add(sp)
        return sp
      })

      const nc = document.createElement('canvas')
      nc.width = 220; nc.height = 44
      const nctx = nc.getContext('2d')!
      nctx.font = 'bold 18px Arial'; nctx.textAlign = 'center'; nctx.textBaseline = 'middle'
      nctx.fillStyle = hexStr
      nctx.fillText(getLang() === 'en' ? tri.nameEn : tri.nameJa, 110, 22)
      const nameLabel = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(nc), transparent: true }))
      nameLabel.scale.set(1.5, 0.3, 0.3)
      this.triangleGroup.add(nameLabel)

      this.triangleData.push({ starAttr: sAttr, lineAttr: lAttr, starLabels, nameLabel })
    }
  }

  updateTriangles(lat: number, lng: number, date: Date) {
    for (let i = 0; i < BIG_TRIANGLES.length; i++) {
      const tri = BIG_TRIANGLES[i]
      const d = this.triangleData[i]
      const pos: Array<[number, number, number]> = []
      for (let j = 0; j < 3; j++) {
        const s = tri.stars[j]
        const { altRad, azRad } = raDecToAltAz(s.raDeg, s.decDeg, lat, lng, date)
        const [x, y, z] = positionToXYZ(azRad, altRad, R)
        pos.push([x, y, z])
        d.starAttr.setXYZ(j, x, y, z)
        d.starLabels[j].position.set(x * 1.04, y + 0.16, z * 1.04)
      }
      d.starAttr.needsUpdate = true
      for (let j = 0; j < 3; j++) {
        const a = pos[j], b = pos[(j + 1) % 3]
        d.lineAttr.setXYZ(j * 2,     a[0], a[1], a[2])
        d.lineAttr.setXYZ(j * 2 + 1, b[0], b[1], b[2])
      }
      d.lineAttr.needsUpdate = true
      const cx = (pos[0][0] + pos[1][0] + pos[2][0]) / 3
      const cy = (pos[0][1] + pos[1][1] + pos[2][1]) / 3
      const cz = (pos[0][2] + pos[1][2] + pos[2][2]) / 3
      d.nameLabel.position.set(cx, cy + 0.35, cz)
    }
  }

  setTrianglesVisible(v: boolean) {
    this.triangleGroup.visible = v
  }

  private rewriteSprite(sprite: THREE.Sprite, text: string, color: string, w: number, h: number, fontSize: number) {
    const c = document.createElement('canvas')
    c.width = w; c.height = h
    const ctx = c.getContext('2d')!
    ctx.font = `bold ${fontSize}px Arial`
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillStyle = color
    ctx.fillText(text, w / 2, h / 2)
    const mat = sprite.material as THREE.SpriteMaterial
    mat.map?.dispose()
    mat.map = new THREE.CanvasTexture(c)
    mat.needsUpdate = true
  }

  refreshTextLabels() {
    const en = getLang() === 'en'

    // Cardinal directions
    for (const { sprite, dirKey, isNorth } of this.cardinalSprites) {
      const dirLabels: Record<string, [string, string]> = {
        'dir-north': ['北(N)', 'N'], 'dir-south': ['南(S)', 'S'],
        'dir-east':  ['東(E)', 'E'], 'dir-west':  ['西(W)', 'W'],
      }
      const text = en ? dirLabels[dirKey][1] : dirLabels[dirKey][0]
      this.rewriteSprite(sprite, text, isNorth ? '#ff7777' : '#66cc77', 128, 64, 36)
    }

    // Zodiac constellation labels
    for (let i = 0; i < ZODIAC_CONSTELLATIONS.length; i++) {
      const c = ZODIAC_CONSTELLATIONS[i]
      this.rewriteSprite(this.constLabels[i], en ? c.nameEn : c.nameJa, '#ccaa55', 160, 40, 18)
    }

    // Famous constellation labels
    for (let i = 0; i < FAMOUS_CONSTELLATIONS.length; i++) {
      const c = FAMOUS_CONSTELLATIONS[i]
      const color = c.nameEn === 'Polaris ★' ? '#ffffff' : '#88ddff'
      this.rewriteSprite(this.famousLabels[i], en ? c.nameEn : c.nameJa, color, 180, 44, 20)
    }

    // Triangle labels
    for (let i = 0; i < BIG_TRIANGLES.length; i++) {
      const tri = BIG_TRIANGLES[i]
      const hexStr = '#' + tri.colorHex.toString(16).padStart(6, '0')
      const d = this.triangleData[i]
      this.rewriteSprite(d.nameLabel, en ? tri.nameEn : tri.nameJa, hexStr, 220, 44, 18)
      for (let j = 0; j < tri.stars.length; j++) {
        this.rewriteSprite(d.starLabels[j], en ? tri.stars[j].nameEn : tri.stars[j].nameJa, hexStr, 130, 36, 17)
      }
    }
  }

  dispose() {
    if (this.rafId !== null) cancelAnimationFrame(this.rafId)
    this.renderer.dispose()
  }
}
