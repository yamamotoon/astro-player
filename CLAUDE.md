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

SPA構成（1つの `index.html` / `main.ts`）。画面遷移は実際のページ遷移ではなく、`main.ts` の
`showScene('menu' | 'dashboard' | 'sky')` によるシーンの表示切替（DOM要素の `display` 切替）で行う。

```
main.ts
  ├── showScene()   : メニュー / 3D+2D / SKY のシーン切り替え・共有HUDの表示制御
  ├── scene3d.ts    : Three.js 3D天球シーン管理（星座・大三角形の描画・表示切替）
  ├── compass2d.ts  : HTML Canvas 2D方位図描画
  ├── ar.ts         : ジャイロ/手動操作のARスカイビュー（星座常時描画・ジャイロ→手動フォールバック）
  ├── astroCalc.ts  : SunCalc → 方位角/高度角/出入り時刻の計算
  │                   RA/Dec→Alt/Az 変換 (raDecToAltAz)
  │                   星座データ (ZODIAC_CONSTELLATIONS / FAMOUS_CONSTELLATIONS / BIG_TRIANGLES)
  └── i18n.ts       : 日本語/英語の文言テーブルと data-i18n 適用
```

設定パネル・24hシークバー（`#scene-hud`）は3シーン共通の1インスタンスで、メニュー以外の全シーンで表示される。

**SKY開始のジェスチャー保持に注意**: iOS Safari は `DeviceOrientationEvent.requestPermission()` を
ユーザー操作（クリック等）のイベントハンドラから直接呼び出した場合しか許可を出さない。ページ遷移を挟むと
このユーザー操作の文脈が失われ許可が下りないため、SPA化して「メニューのSKYカードのクリックハンドラ内で
`showScene('sky')` と `arView.start()` を同期的に呼ぶ」ことで、遷移を挟まずジェスチャーを保持している
（`main.ts` の `menuSkyBtn` クリックハンドラ参照）。Android/PCなど `requestPermission` 関数が存在しない
環境ではこの制約自体がない。

**概念モデル**: 「3D」「2D」「SKY」は独立した機能ではなく、同じ天球データを見るカメラ視点の違い
（3D=サードパーソン視点、2D=トップビュー、SKY=ファーストパーソン視点）。現状は描画実装が
`scene3d.ts`/`compass2d.ts`/`ar.ts` に分かれている（星座描画ロジックが `scene3d.ts` と `ar.ts` で重複）が、
将来的には1つの3Dシーン＋カメラ切り替えに統合する方針。


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
