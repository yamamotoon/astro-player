"""大きさ比較ビュー用の天体テクスチャ(src/assets/<天体>-texture.png)を生成するスクリプト。

正距円筒図法(1024x512)で描く。実写ではなく、ひと目でその天体と分かる特徴だけを描いた絵柄にしている。
- 縞模様の天体（木星・土星・天王星・海王星・金星）: 緯度ごとの帯の色。境界を少し波打たせ、帯の中にも弱い濃淡を入れる
- 岩石の天体（水星・火星・冥王星）: ノイズで地表の濃淡を作り、クレーター・暗い地域・極冠・ハート模様などを重ねる

Three.jsの球(SphereGeometry)では画像の経度-90°がカメラ正面に来る。正面から見せたい模様
（木星の大赤斑・冥王星のハート模様など）はその付近に置く。
色や模様を変えたくなったら、下の各 generate_* を直して再実行すれば良い。

実行方法:
  python scripts/planet-texture/generate-planet-textures.py
"""
import os
import numpy as np
from PIL import Image, ImageDraw, ImageFilter

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
OUT_DIR = os.path.join(SCRIPT_DIR, '..', '..', 'src', 'assets')

WIDTH, HEIGHT = 1024, 512


# ---- 共通 ----

def lat_lon_grid():
    lon = (np.arange(WIDTH) + 0.5) / WIDTH * 360 - 180
    lat = 90 - (np.arange(HEIGHT) + 0.5) / HEIGHT * 180
    return np.meshgrid(lon, lat)


def save(name, img):
    img = np.clip(img, 0, 255).astype(np.uint8)
    out_path = os.path.join(OUT_DIR, f'{name}-texture.png')
    Image.fromarray(img, 'RGB').save(out_path)
    print(f'wrote {out_path} ({WIDTH}x{HEIGHT})')


def blend(img, color, alpha):
    return img * (1 - alpha[..., None]) + np.array(color, dtype=float) * alpha[..., None]


def angular_offset(lon, lat, center_lon, center_lat):
    """中心からの経度・緯度方向のずれ（度）。経度方向は緯度に応じて縮め、形が歪まないようにする"""
    dlon = (lon - center_lon + 180) % 360 - 180
    return dlon * np.cos(np.radians(lat)), lat - center_lat


def ellipse_alpha(lon, lat, center_lon, center_lat, half_lon, half_lat, soft=0.35):
    """楕円の塗りの濃さ。中心はしっかり塗り、縁だけ soft の幅でぼかす"""
    dx, dy = angular_offset(lon, lat, center_lon, center_lat)
    d = np.sqrt((dx / half_lon) ** 2 + (dy / half_lat) ** 2)
    return np.clip((1 + soft / 2 - d) / soft, 0, 1)


def fbm(rng, base_freq, octaves=5):
    """経度方向につながる（左右の端が継ぎ目にならない）なめらかなノイズ。値はおよそ -1〜1"""
    total = np.zeros((HEIGHT, WIDTH))
    amplitude, norm = 1.0, 0.0
    for i in range(octaves):
        fx = base_freq * 2 ** i
        fy = max(fx // 2, 1)
        grid = rng.uniform(-1, 1, (fy + 1, fx)).astype(np.float32)
        # 横に3枚並べて拡大し、真ん中だけ切り出すことで左右の端をつなげる
        tiled = np.tile(grid, (1, 3))
        big = Image.fromarray(tiled, 'F').resize((WIDTH * 3, HEIGHT), Image.Resampling.BICUBIC)
        total += np.asarray(big)[:, WIDTH:WIDTH * 2] * amplitude
        norm += amplitude
        amplitude *= 0.5
    return total / norm


# ---- 縞模様の天体 ----

def band_colors(lat, bands, blend_deg):
    """緯度ごとの帯の色。bands は (北端の緯度, 南端の緯度, RGB) を北から隙間なく並べたもの。
    境界の前後 blend_deg 度で隣の帯の色へなめらかに移る"""
    colors = np.array([c for _, _, c in bands], dtype=float)
    # 各帯の重みを「帯の範囲内なら1、境界からblend_deg外側で0」の台形で与え、正規化して混ぜる
    weights = []
    for north, south, _ in bands:
        w = np.clip((north - lat) / blend_deg + 0.5, 0, 1) * np.clip((lat - south) / blend_deg + 0.5, 0, 1)
        weights.append(w)
    weights = np.stack(weights, axis=-1)
    weights /= np.maximum(weights.sum(axis=-1, keepdims=True), 1e-9)
    return weights @ colors


def wobble(lon, lat, rng, amplitude):
    """帯の境界を経度方向に波打たせるための緯度のずらし量。緯度ごとに位相・周期を変える"""
    offset = np.zeros_like(lat)
    for _ in range(4):
        k = rng.integers(3, 12)
        phase = rng.uniform(0, 2 * np.pi)
        lat_freq = rng.uniform(0.05, 0.2)
        offset += np.sin(np.radians(lon) * k + lat * lat_freq + phase)
    return offset / 4 * amplitude


def streaks(lon, lat, rng, strength):
    """帯の中の弱い濃淡（経度方向に流れる筋）"""
    shade = np.zeros_like(lat)
    for _ in range(6):
        k = rng.integers(1, 8)
        lat_freq = rng.uniform(0.5, 2.0)
        phase = rng.uniform(0, 2 * np.pi)
        shade += np.sin(lat * lat_freq + np.sin(np.radians(lon) * k + phase) * 0.8)
    return 1 + shade / 6 * strength


def banded(bands, blend_deg, wobble_deg, streak_strength, seed):
    rng = np.random.default_rng(seed)
    lon, lat = lat_lon_grid()
    img = band_colors(lat + wobble(lon, lat, rng, wobble_deg), bands, blend_deg)
    img *= streaks(lon, lat, rng, streak_strength)[..., None]
    return img, lon, lat


def generate_jupiter():
    bands = [
        (90, 58, (150, 138, 122)),   # 極域
        (58, 45, (190, 170, 145)),
        (45, 35, (222, 208, 184)),
        (35, 27, (178, 140, 108)),   # 北温帯縞
        (27, 18, (232, 220, 198)),   # 北熱帯
        (18, 7, (170, 110, 78)),     # 北赤道縞
        (7, -7, (238, 226, 205)),    # 赤道帯
        (-7, -19, (176, 118, 84)),   # 南赤道縞
        (-19, -27, (232, 218, 194)), # 南熱帯（大赤斑がある帯）
        (-27, -35, (184, 146, 112)), # 南温帯縞
        (-35, -45, (220, 204, 178)),
        (-45, -58, (186, 166, 140)),
        (-58, -90, (150, 138, 122)), # 極域
    ]
    img, lon, lat = banded(bands, blend_deg=2.0, wobble_deg=1.5, streak_strength=0.06, seed=1)
    # 大赤斑: 正面から少しずらした位置に置く
    img = blend(img, (196, 110, 80), ellipse_alpha(lon, lat, -65, -22.5, 14, 6) * 0.9)
    save('jupiter', img)


def generate_saturn():
    bands = [
        (90, 70, (160, 164, 166)),   # 極域
        (70, 55, (196, 178, 140)),
        (55, 40, (214, 196, 156)),
        (40, 28, (200, 176, 132)),
        (28, 15, (226, 208, 164)),
        (15, 5, (210, 184, 136)),
        (5, -5, (236, 220, 178)),    # 赤道帯
        (-5, -15, (212, 188, 140)),
        (-15, -28, (228, 210, 166)),
        (-28, -40, (204, 180, 136)),
        (-40, -55, (218, 200, 160)),
        (-55, -70, (198, 180, 142)),
        (-70, -90, (170, 162, 144)), # 極域
    ]
    img, _, _ = banded(bands, blend_deg=3.0, wobble_deg=0.6, streak_strength=0.03, seed=2)
    save('saturn', img)


def generate_uranus():
    # ほぼ模様のない青緑色。ごく淡い縞と、少し明るい極域だけ
    bands = [
        (90, 55, (196, 232, 234)),
        (55, 25, (172, 222, 226)),
        (25, -25, (164, 216, 222)),
        (-25, -55, (170, 220, 224)),
        (-55, -90, (184, 226, 230)),
    ]
    img, _, _ = banded(bands, blend_deg=8.0, wobble_deg=0.5, streak_strength=0.02, seed=3)
    save('uranus', img)


def generate_neptune():
    # 深い青に淡い縞。大暗斑と、その近くの白い雲の筋
    bands = [
        (90, 60, (72, 104, 196)),
        (60, 35, (84, 122, 214)),
        (35, 10, (74, 112, 206)),
        (10, -10, (88, 128, 220)),
        (-10, -35, (72, 110, 204)),
        (-35, -60, (82, 120, 212)),
        (-60, -90, (66, 98, 190)),
    ]
    img, lon, lat = banded(bands, blend_deg=6.0, wobble_deg=1.0, streak_strength=0.04, seed=4)
    img = blend(img, (36, 56, 130), ellipse_alpha(lon, lat, -75, -20, 12, 6) * 0.9)  # 大暗斑
    img = blend(img, (236, 242, 255), ellipse_alpha(lon, lat, -70, -30, 10, 1.6) * 0.8)  # 白い雲の筋
    img = blend(img, (236, 242, 255), ellipse_alpha(lon, lat, -115, 25, 14, 1.4) * 0.6)
    save('neptune', img)


def generate_venus():
    # 厚い雲に覆われた淡い黄白色。ごく弱い雲の筋と、ノイズによるゆるい濃淡だけ
    bands = [
        (90, 50, (214, 196, 152)),
        (50, 15, (226, 208, 164)),
        (15, -15, (232, 214, 170)),
        (-15, -50, (224, 206, 162)),
        (-50, -90, (212, 194, 150)),
    ]
    rng = np.random.default_rng(5)
    img, _, _ = banded(bands, blend_deg=12.0, wobble_deg=4.0, streak_strength=0.05, seed=5)
    img *= (1 + fbm(rng, 4) * 0.06)[..., None]
    save('venus', img)


# ---- 岩石の天体 ----

def craters(img, lon, lat, rng, count, min_r, max_r, floor_shade, rim_shade):
    """クレーター。小さいものほど多くなるように半径を選び、底を暗く、縁を明るくする"""
    for _ in range(count):
        # 半径はべき分布（小さいものが多い）
        r = min_r * (max_r / min_r) ** (rng.uniform() ** 2.5)
        c_lon = rng.uniform(-180, 180)
        c_lat = np.degrees(np.arcsin(rng.uniform(-1, 1)))  # 球面上で一様
        dx, dy = angular_offset(lon, lat, c_lon, c_lat)
        d = np.sqrt(dx ** 2 + dy ** 2) / r
        floor = np.clip((1.0 - d) / 0.25, 0, 1)
        rim = np.clip(1 - np.abs(d - 1.05) / 0.12, 0, 1)
        img = img * (1 - floor[..., None] * (1 - floor_shade)) * (1 + rim[..., None] * (rim_shade - 1))
    return img


def generate_mercury():
    # 月に似た灰色の地表と多数のクレーター
    rng = np.random.default_rng(6)
    lon, lat = lat_lon_grid()
    img = np.ones((HEIGHT, WIDTH, 3)) * np.array([150, 144, 138], dtype=float)
    img *= (1 + fbm(rng, 4) * 0.14)[..., None]
    img = craters(img, lon, lat, rng, count=260, min_r=1.2, max_r=12, floor_shade=0.82, rim_shade=1.12)
    save('mercury', img)


def generate_mars():
    # 赤茶色の地表に、実際のおおよその位置の暗い地域・白い極冠・マリネリス峡谷
    rng = np.random.default_rng(7)
    lon, lat = lat_lon_grid()
    img = np.ones((HEIGHT, WIDTH, 3)) * np.array([196, 104, 62], dtype=float)
    img *= (1 + fbm(rng, 4) * 0.12)[..., None]

    edge_noise = fbm(rng, 8) * 0.35  # 暗い地域・極冠の縁をぎざぎざにする
    dark = (112, 58, 40)
    # (経度, 緯度, 経度方向の半幅, 緯度方向の半幅, 濃さ)。経度は東経を正とする
    dark_regions = [
        (70, 10, 10, 18, 0.8),     # 大シルチス
        (-30, 45, 22, 10, 0.7),    # アキダリアの海
        (-30, -22, 28, 9, 0.7),    # エリトリアの海
        (0, -5, 18, 5, 0.65),      # 子午線の湾
        (145, -20, 30, 8, 0.6),    # キンメリアの海
        (-155, -30, 22, 8, 0.6),   # セイレーンの海
        (110, 45, 25, 10, 0.4),    # ユートピア平原
    ]
    for c_lon, c_lat, h_lon, h_lat, strength in dark_regions:
        dx, dy = angular_offset(lon, lat, c_lon, c_lat)
        d = np.sqrt((dx / h_lon) ** 2 + (dy / h_lat) ** 2) + edge_noise
        img = blend(img, dark, np.clip((1.1 - d) / 0.5, 0, 1) * strength)

    # マリネリス峡谷: 赤道のすぐ南を東西に走る暗い筋
    dx, dy = angular_offset(lon, lat, -70, -8)
    canyon = np.clip(1 - np.abs(dy + dx * 0.08) / 2.4, 0, 1) * np.clip((32 - np.abs(dx)) / 6, 0, 1)
    img = blend(img, (100, 48, 32), canyon * 0.8)

    # 極冠
    north_cap = np.clip((lat - 76 + edge_noise * 6) / 3, 0, 1)
    south_cap = np.clip((-lat - 80 + edge_noise * 6) / 3, 0, 1)
    img = blend(img, (240, 236, 230), np.maximum(north_cap, south_cap))
    save('mars', img)


def generate_pluto():
    # 薄茶色の地表に、正面のハート模様（トンボー領域）と、その西隣の暗い地域（クトゥルフ領域）
    rng = np.random.default_rng(8)
    lon, lat = lat_lon_grid()
    img = np.ones((HEIGHT, WIDTH, 3)) * np.array([196, 170, 140], dtype=float)
    img *= (1 + fbm(rng, 4) * 0.12)[..., None]
    edge_noise = fbm(rng, 8)

    # クトゥルフ領域: 赤道沿いに東西に長い暗い赤茶色の地域
    dx, dy = angular_offset(lon, lat, -145, -8)
    d = np.sqrt((dx / 45) ** 2 + (dy / 12) ** 2) + edge_noise * 0.25
    img = blend(img, (110, 62, 46), np.clip((1.1 - d) / 0.4, 0, 1) * 0.85)

    # ハート模様: ハート形の輪郭 x=16sin³t, y=13cos t-5cos2t-2cos3t-cos4t を多角形にして塗り、縁を少しぼかす
    img = blend(img, (238, 230, 214), heart_alpha(center_lon=-85, center_lat=12, size_deg=48) * 0.95)
    save('pluto', img)


def heart_alpha(center_lon, center_lat, size_deg):
    """ハート形の塗りの濃さ（先端が下向き）。size_deg はハートの横幅（度）"""
    t = np.linspace(0, 2 * np.pi, 400)
    hx = 16 * np.sin(t) ** 3
    hy = 13 * np.cos(t) - 5 * np.cos(2 * t) - 2 * np.cos(3 * t) - np.cos(4 * t)
    scale = size_deg / 32  # hx の幅は -16〜16
    lat_pts = center_lat + hy * scale
    # 経度方向は緯度に応じて広げ、球に貼った時に形が歪まないようにする
    lon_pts = center_lon + hx * scale / np.cos(np.radians(lat_pts))
    polygon = [((lo + 180) / 360 * WIDTH, (90 - la) / 180 * HEIGHT) for lo, la in zip(lon_pts, lat_pts)]
    mask = Image.new('L', (WIDTH, HEIGHT), 0)
    ImageDraw.Draw(mask).polygon(polygon, fill=255)
    mask = mask.filter(ImageFilter.GaussianBlur(2.5))
    return np.asarray(mask, dtype=float) / 255


def main():
    os.makedirs(OUT_DIR, exist_ok=True)
    generate_mercury()
    generate_venus()
    generate_mars()
    generate_jupiter()
    generate_saturn()
    generate_uranus()
    generate_neptune()
    generate_pluto()


if __name__ == '__main__':
    main()
