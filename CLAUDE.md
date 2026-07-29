# CLAUDE.md

## プロジェクト概要

太陽・月の位置をリアルタイムでシミュレートする Web アプリ。星座・大三角形の表示、24時間シミュレーション再生機能を搭載。

## コマンド

```bash
npm run dev      # 開発サーバー起動 (localhost:5173)
npm run build    # TypeScript コンパイル + Vite ビルド → dist/
npm run preview  # ビルド結果のプレビュー
```

## アーキテクチャ

```
main.ts
  ├── astroCalc.ts   : SunCalc → 方位角/高度角/出入り時刻の計算
  │                    RA/Dec→Alt/Az 変換 (raDecToAltAz)
  │                    星座データ (ZODIAC_CONSTELLATIONS / FAMOUS_CONSTELLATIONS / BIG_TRIANGLES)
  ├── scene3d.ts     : Three.js 3D天球シーン管理
  │                    星座・大三角形の描画・表示切替
  └── compass2d.ts   : HTML Canvas 2D方位図描画
```

## コーディング規約

- コミットメッセージは `type: 日本語説明` 形式（例: `feat: 月の満ち欠け表示を追加`）
- TypeScript strict モード有効
- 座標変換は `astroCalc.ts` の `positionToXYZ` / `toNorthDeg` に集約する
- 星座データは `astroCalc.ts` の定数に追加する

## ライブラリ

| パッケージ | 用途 |
|---|---|
| `suncalc` | 太陽・月の方位角・高度角・出入り時刻計算 |
| `three` | 3D 天球レンダリング |
| `three/examples/jsm/controls/OrbitControls` | ドラッグ視点操作 |

## 既知の座標変換

- **SunCalc azimuth**: 0=南, π/2=西（ラジアン）
- **表示用 azimuthDeg**: 0=北, 90=東（度）← `toNorthDeg()` で変換
- **Three.js 内部**: X=東, Y=上, Z=南 ← `positionToXYZ()` で変換
- **RA/Dec → Alt/Az**: `raDecToAltAz()` で変換（GMST→LST→時角→高度方位）
- 星座の星データは J2000.0 のRA/Dec（度）で管理

## 24時間シミュレーション

- `ANIM_DURATION_MS = 24_000`（1秒=1時間）でアニメーション
- シークバーはリアルタイムモード中も現在時刻に連動
- 再生開始位置はシークバーの現在位置（＝現在時刻）から
