"""地球儀テクスチャ(src/assets/earth-texture.png)を生成するスクリプト。

同ディレクトリの earth-continents.json (Natural Earth 110mの海岸線をDouglas-Peuckerで
簡略化した [経度, 緯度] 座標。生成方法は本ファイルの下部コメント参照) を正距円筒図法で
ラスタライズする。大陸の座標データや解像度を調整したくなったら、このスクリプトを直して
再実行すれば良い。

実写テクスチャに切り替えたい場合はこのスクリプトを使わず、
src/assets/earth-texture.png を実写画像で直接置き換えるだけでよい
（scaleModel3d.ts 側はファイルをimportしているだけなのでコード変更は不要）。

実行方法: python scripts/generate-earth-texture.py
"""
import json
import os
from PIL import Image, ImageDraw

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_PATH = os.path.join(SCRIPT_DIR, 'earth-continents.json')
OUT_PATH = os.path.join(SCRIPT_DIR, '..', 'src', 'assets', 'earth-texture.png')

WIDTH, HEIGHT = 1024, 512
OCEAN_COLOR = (0x2f, 0x6f, 0xb0)
LAND_COLOR = (0x4f, 0x9e, 0x5c)
ANTARCTICA_LAT = -65  # 正距円筒図法では極域が歪むため簡略化した帯で表現する


def lon_lat_to_xy(lon, lat):
    x = (lon + 180) / 360 * WIDTH
    y = (90 - lat) / 180 * HEIGHT
    return (x, y)


def main():
    with open(DATA_PATH, encoding='utf-8') as f:
        continents = json.load(f)

    img = Image.new('RGB', (WIDTH, HEIGHT), OCEAN_COLOR)
    draw = ImageDraw.Draw(img)

    for entry in continents:
        polygon = [lon_lat_to_xy(lon, lat) for lon, lat in entry['points']]
        draw.polygon(polygon, fill=LAND_COLOR)

    antarctica_top = lon_lat_to_xy(0, ANTARCTICA_LAT)[1]
    draw.rectangle([0, antarctica_top, WIDTH, HEIGHT], fill=LAND_COLOR)

    os.makedirs(os.path.dirname(OUT_PATH), exist_ok=True)
    img.save(OUT_PATH)
    print(f'wrote {OUT_PATH} ({WIDTH}x{HEIGHT}, {len(continents)} landmasses)')


if __name__ == '__main__':
    main()
