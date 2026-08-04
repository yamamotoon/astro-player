"""地球儀テクスチャ(src/assets/earth-texture.png)を生成するスクリプト。

同ディレクトリの earth-continents.json (Natural Earth 110mの海岸線をDouglas-Peuckerで
簡略化した [経度, 緯度] 座標。生成方法は本ファイルの下部コメント参照) を正距円筒図法で
ラスタライズする。大陸の座標データや解像度を調整したくなったら、このスクリプトを直して
再実行すれば良い。

実写テクスチャに切り替えたい場合はこのスクリプトを使わず、
src/assets/earth-texture.png を実写画像で直接置き換えるだけでよい
（scaleModel3d.ts 側はファイルをimportしているだけなのでコード変更は不要）。

実行方法:
  python scripts/generate-earth-texture.py [データJSON] [出力PNG]
  例: python scripts/generate-earth-texture.py earth-continents-50m.json ../src/assets/earth-texture-50m.png
  引数省略時は earth-continents.json -> src/assets/earth-texture.png (110m版)
"""
import json
import os
import sys
from PIL import Image, ImageDraw

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_PATH = os.path.join(SCRIPT_DIR, sys.argv[1] if len(sys.argv) > 1 else 'earth-continents.json')
OUT_PATH = os.path.join(SCRIPT_DIR, sys.argv[2] if len(sys.argv) > 2 else os.path.join('..', 'src', 'assets', 'earth-texture.png'))

WIDTH, HEIGHT = 1024, 512
OCEAN_COLOR = (0x2f, 0x6f, 0xb0)
LAND_COLOR = (0x4f, 0x9e, 0x5c)
ANTARCTICA_LAT = -65  # 正距円筒図法では極域が歪むため簡略化した帯で表現する

# PILのImageDraw.polygon()はアンチエイリアスなしで塗るため、海岸線がギザギザに出る。
# SUPERSAMPLE倍の解像度で描いてからLANCZOSで最終サイズへ縮小することで境界を滑らかにする
SUPERSAMPLE = 4


def lon_lat_to_xy(lon, lat, w, h):
    x = (lon + 180) / 360 * w
    y = (90 - lat) / 180 * h
    return (x, y)


def main():
    with open(DATA_PATH, encoding='utf-8') as f:
        continents = json.load(f)

    bigW, bigH = WIDTH * SUPERSAMPLE, HEIGHT * SUPERSAMPLE
    img = Image.new('RGB', (bigW, bigH), OCEAN_COLOR)
    draw = ImageDraw.Draw(img)

    for entry in continents:
        polygon = [lon_lat_to_xy(lon, lat, bigW, bigH) for lon, lat in entry['points']]
        draw.polygon(polygon, fill=LAND_COLOR)

    antarctica_top = lon_lat_to_xy(0, ANTARCTICA_LAT, bigW, bigH)[1]
    draw.rectangle([0, antarctica_top, bigW, bigH], fill=LAND_COLOR)

    img = img.resize((WIDTH, HEIGHT), Image.Resampling.LANCZOS)

    os.makedirs(os.path.dirname(OUT_PATH), exist_ok=True)
    img.save(OUT_PATH)
    print(f'wrote {OUT_PATH} ({WIDTH}x{HEIGHT}, supersampled {SUPERSAMPLE}x, {len(continents)} landmasses)')


if __name__ == '__main__':
    main()
