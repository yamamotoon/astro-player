"""実写の月面モザイク画像から、3階調(海/高地/光条クレーター)に減色した
src/assets/moon-texture.png を生成するスクリプト。

ソース画像は NASA GSFC/SVS の LROC Color Mosaic
(Lunar Reconnaissance Orbiter, WACカメラの実写を正距円筒図法で合成したもの。
米国政府機関の成果物のためパブリックドメイン)を使う。
  出典: https://svs.gsfc.nasa.gov/4720
  ダウンロードURL: https://svs.gsfc.nasa.gov/vis/a000000/a004700/a004720/lroc_color_2k.jpg
このスクリプトの経度0(画像中央)は実際の月の経度0(地球から見て正面)と一致している
（正距円筒図法の標準的な向きのため、lon_lat_to_xy()の変換とも整合する）。

処理の流れ:
  1. グレースケール化した輝度に軽くガウスぼかしをかけ、クレーターの粒状ノイズを均す
     （地形の大きな模様=海の輪郭は残しつつ、小さな凹凸だけ均される）
  2. ぼかした輝度のパーセンタイルで暗い方から「海」「高地」「光条クレーター」の3階調に分ける
     （固定の輝度値ではなくパーセンタイルを使うことで、画像全体の明るさに依存しない）
  3. 各階調に属するピクセルの実写の平均色を、その階調の塗り色として使う
     （色も実写の値を反映する。ハードコードした色ではない）

実行方法:
  python scripts/moon-texture/posterize-moon-texture.py [ソースJPG] [出力PNG]
  引数省略時はスクリプトと同じ階層にキャッシュしたソース画像 -> src/assets/moon-texture.png
  ソース画像が無い場合は上記URLから自動ダウンロードを試みる。
"""
import os
import sys
import urllib.request

import numpy as np
from PIL import Image, ImageFilter

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
SOURCE_URL = 'https://svs.gsfc.nasa.gov/vis/a000000/a004700/a004720/lroc_color_2k.jpg'
SRC_PATH = os.path.join(SCRIPT_DIR, sys.argv[1] if len(sys.argv) > 1 else 'moon-source-lroc-2k.jpg')
OUT_PATH = os.path.join(SCRIPT_DIR, sys.argv[2] if len(sys.argv) > 2 else os.path.join('..', '..', 'src', 'assets', 'moon-texture.png'))

BLUR_RADIUS = 6  # クレーターの粒状ノイズを均すためのガウスぼかし半径(px)
MARE_PERCENTILE = 25    # 暗い方からここまでを「海」とする
RAY_PERCENTILE = 97     # 明るい方からここまでを「光条クレーター」とする(残りは「高地」)
FINAL_SMOOTH_RADIUS = 1  # 塗り分け後の境界のジャギーを和らげる仕上げのぼかし


def ensure_source():
    if not os.path.exists(SRC_PATH):
        print(f'source not found, downloading from {SOURCE_URL}')
        urllib.request.urlretrieve(SOURCE_URL, SRC_PATH)


def main():
    ensure_source()
    img = Image.open(SRC_PATH).convert('RGB')
    rgb = np.asarray(img).astype(np.float32)

    gray = img.convert('L').filter(ImageFilter.GaussianBlur(BLUR_RADIUS))
    luminance = np.asarray(gray).astype(np.float32)

    mare_thresh = np.percentile(luminance, MARE_PERCENTILE)
    ray_thresh = np.percentile(luminance, RAY_PERCENTILE)

    mare_mask = luminance <= mare_thresh
    ray_mask = luminance >= ray_thresh
    highland_mask = ~mare_mask & ~ray_mask

    out = np.zeros_like(rgb)
    for mask in (mare_mask, highland_mask, ray_mask):
        mean_color = rgb[mask].mean(axis=0)
        out[mask] = mean_color

    out_img = Image.fromarray(out.astype(np.uint8), 'RGB')
    if FINAL_SMOOTH_RADIUS > 0:
        out_img = out_img.filter(ImageFilter.GaussianBlur(FINAL_SMOOTH_RADIUS))

    os.makedirs(os.path.dirname(OUT_PATH), exist_ok=True)
    out_img.save(OUT_PATH)
    print(f'wrote {OUT_PATH} ({out_img.width}x{out_img.height})')
    print(f'  mare {mare_mask.mean()*100:.1f}% mean_rgb={rgb[mare_mask].mean(axis=0).astype(int)}')
    print(f'  highland {highland_mask.mean()*100:.1f}% mean_rgb={rgb[highland_mask].mean(axis=0).astype(int)}')
    print(f'  ray {ray_mask.mean()*100:.1f}% mean_rgb={rgb[ray_mask].mean(axis=0).astype(int)}')


if __name__ == '__main__':
    main()
