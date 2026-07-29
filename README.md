# StarCanvas Hoshizora — 星空キャンバス

太陽・月の位置をリアルタイムでシミュレートする Web アプリケーション。  
A web application that simulates the real-time positions of the sun, moon, and constellations.

---

## 機能 / Features

| 機能 | Feature | 説明 |
|---|---|---|
| 3D 天球 | 3D Sky Sphere | Three.js で描画。ドラッグ回転・ホイールズーム対応 |
| 2D 方位図 | 2D Compass | 北基準の俯瞰図。中心=天頂、外縁=地平線 |
| リアルタイム更新 | Real-time Update | 10 秒ごとに現在時刻で自動更新 |
| 日時指定 | Date & Time Input | 任意の日時を入力して過去・未来を確認 |
| 場所指定 | Location Input | 緯度・経度を入力（デフォルト: 東京） |
| 出入り時刻 | Rise & Set Times | 日の出・日の入り・月の出・月の入りを表示 |
| 24時間シミュレーション | 24h Simulation | シークバーで時刻ジャンプ。▶ で 1秒=1時間 の速度で自動再生 |
| スカイビュー | Sky View | ジャイロ連動で天球内を見渡す。未対応端末はドラッグ操作 |
| 黄道12星座 | Zodiac Constellations | 牡羊〜魚座を3D天球上に表示（時刻連動） |
| 有名な星座 | Famous Constellations | オリオン・北斗七星・カシオペア・はくちょうなど |
| 大三角形 | Great Triangles | 夏の大三角形（青）・冬の大三角形（橙） |
| 言語切り替え | Language Switch | 日本語 / English の切り替え対応 |

---

## スクリーンショット / Screenshots

*(Coming soon)*

---

## 技術スタック / Tech Stack

| パッケージ | Version | 用途 |
|---|---|---|
| [Vite](https://vitejs.dev/) | 5.x | ビルドツール・開発サーバー |
| [TypeScript](https://www.typescriptlang.org/) | 5.x | 型安全な開発 |
| [Three.js](https://threejs.org/) | 0.163 | 3D 天球レンダリング |
| [SunCalc](https://github.com/mourner/suncalc) | 1.9 | 太陽・月の位置計算 |

---

## セットアップ / Getting Started

```bash
git clone https://github.com/shinichiroy/StarCanvas-Hoshizora.git
cd StarCanvas-Hoshizora
npm install
npm run dev
```

ブラウザで表示される URL を開く。  
Open the URL shown in the terminal.

## ビルド / Build

```bash
npm run build    # dist/ に出力 / Output to dist/
npm run preview  # ビルド結果をローカルで確認 / Preview build locally
```

---

## プロジェクト構成 / Project Structure

```
StarCanvas-Hoshizora/
├── index.html              # エントリーポイント
├── package.json
├── tsconfig.json
├── vite.config.ts
└── src/
    ├── main.ts             # UIイベント・ループ制御・24hシミュレーション
    ├── astroCalc.ts        # 天体位置計算（SunCalc / RA-Dec変換・星座データ）
    ├── scene3d.ts          # Three.js 3D天球シーン・星座描画
    ├── compass2d.ts        # Canvas 2D方位図
    ├── ar.ts               # スカイビュー（ジャイロ/ドラッグ操作）
    ├── i18n.ts             # 日本語/英語 切り替え
    └── style.css           # スタイル
```

---

## 座標系 / Coordinate Systems

| 系 / System | 方位基準 / Reference | 正方向 / Positive |
|---|---|---|
| SunCalc | 南 / South (0) | 西回り / Westward |
| アプリ表示 / Display | 北 / North (0°) | 東回り / Eastward (clockwise) |
| Three.js 内部 / Internal | X=東, Y=上, Z=南 | 右手系 / Right-handed |

---

## デフォルト場所 / Default Location

東京 / Tokyo（緯度 / Lat: 35.6762°, 経度 / Lon: 139.6503°）
