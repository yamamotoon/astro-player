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
`showScene('menu' | 'dashboard' | 'sky' | 'scale' | 'size')` によるシーンの表示切替（DOM要素の `display` 切替）で行う。

```
main.ts
  ├── showScene()       : メニュー / 3D+2D / SKY / スケールモデル / 大きさ比較 のシーン切り替え・共有HUDの表示制御
  ├── scene3d.ts        : Three.js 3D天球シーン管理（星座・大三角形の描画・表示切替、観測者視点）
  ├── compass2d.ts      : HTML Canvas 2D方位図描画
  ├── ar.ts             : ジャイロ/手動操作のARスカイビュー（星座常時描画・ジャイロ→手動フォールバック）
  ├── scaleModel3d.ts   : 地球の公転/自転ビューア。地球・月・太陽の距離/大きさを実際の比率で再現する3Dモデル
  │                       （星座は含まない。scene3d.tsとは独立した別モード）
  │     └── orbitalMath.ts : scaleModel3d.ts用の軌道計算・物理定数（DOM/Three.jsのシーンに依存しない）
  ├── sizeComparison3d.ts : メニューの「スケール」。太陽系の天体を1列に並べて大きさを比較する
  │                       （正投影カメラ・静止表示。scaleModel3d.tsとは独立）
  ├── astroCalc.ts      : SunCalc → 方位角/高度角/出入り時刻の計算
  │                       RA/Dec→Alt/Az 変換 (raDecToAltAz)
  │                       星座データ (ZODIAC_CONSTELLATIONS / FAMOUS_CONSTELLATIONS / BIG_TRIANGLES)
  └── i18n.ts           : 日本語/英語の文言テーブルと data-i18n 適用
```

設定パネル（`#scene-hud`）はメニュー以外の全シーン共通の1インスタンスで、シーンごとに項目の表示を切り替える
（星座は3D+2Dだけ、表示（実比率/見やすく）はスケールモデルだけ）。時間バーはシーンごとに別インスタンス。

**スケールモデルの単位系・座標変換**: `scaleModel3d.ts`は独自の単位系・座標変換（月半径基準の比率、
公転軌道の角度計算、緯度経度→地表方向など）を持つ。`orbitalMath.ts`の各定義のコメントを参照・遵守すること。

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
- 3D+2D/SKYモードの座標変換は `astroCalc.ts` の `positionToXYZ` / `toNorthDeg` に集約する
  （スケールモデルは別の座標系。「既知の座標変換」節参照）
- 星座データは `astroCalc.ts` の定数に追加する

## ライブラリ

| パッケージ | 用途 |
|---|---|
| `suncalc` | 太陽・月の方位角・高度角・出入り時刻計算 |
| `three` | 3D 天球レンダリング |
| `three/examples/jsm/controls/OrbitControls` | ドラッグ視点操作 |

## 既知の座標変換（3D+2D/SKYモード）

SunCalc azimuth・表示用azimuthDeg・Three.js内部座標・RA/Dec→Alt/Az等の変換規約は、
`astroCalc.ts`の`toNorthDeg()`/`positionToXYZ()`/`raDecToAltAz()`それぞれの定義直上の
コメントを参照・遵守すること（スケールモデルは別の座標系を持つ。上記参照）。
星座の星データはJ2000.0のRA/Dec（度）で管理する。

## 24時間シミュレーション

- `ANIM_DURATION_MS = 24_000`（1秒=1時間）でアニメーション
- シークバーはリアルタイムモード中も現在時刻に連動
- 再生開始位置はシークバーの現在位置（＝現在時刻）から
