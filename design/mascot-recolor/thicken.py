"""Make Turnip line-weight variants: polished recolor + thicker plum lines.

Sarah picked "medium" on Oct 13, 2026; it is the app's mascot.png
(also saved here as turnip-2-polished-medium-line.png). The source is the
original mascot art from before the recolor. From the repo root:

    git show 63b96a8:apps/kids/assets/images/mascot.png > /tmp/turnip-source.png
    python3 design/mascot-recolor/thicken.py /tmp/turnip-source.png design/mascot-recolor

Writes turnip-now.png, turnip-medium.png, turnip-bold.png and compare.png.
Needs Pillow. Final art should still be redrawn as vector by an illustrator.
"""
import sys
from PIL import Image, ImageChops, ImageFilter

src, outdir = sys.argv[1], sys.argv[2]
im = Image.open(src).convert("RGBA")

SRC = [(0xE2, 0xD8, 0xCD), (0x8E, 0x88, 0xBE), (0x5B, 0x59, 0x7B), (0xAD, 0xCA, 0x7B), (0xFF, 0xFF, 0xFF)]
POLISHED = [(0xFF, 0xFF, 0xFF), (0x8B, 0x86, 0xB8), (0x4E, 0x4C, 0x6E), (0xA3, 0xCF, 0x68), (0xFF, 0xFF, 0xFF)]
PLUM = POLISHED[2]

cache = {}


def proj(c):
    if c in cache:
        return cache[c]
    ds = sorted(range(5), key=lambda i: sum((c[k] - SRC[i][k]) ** 2 for k in range(3)))
    i1, i2 = ds[0], ds[1]
    p1, p2 = SRC[i1], SRC[i2]
    seg = [p2[k] - p1[k] for k in range(3)]
    length = sum(s * s for s in seg) or 1
    t = max(0, min(1, sum((c[k] - p1[k]) * seg[k] for k in range(3)) / length))
    res = [c[k] - (p1[k] + seg[k] * t) for k in range(3)]
    cache[c] = (i1, i2, t, res)
    return cache[c]


# 1. Recolor to the polished palette (same method as design/mascot-recolor/recolor.py).
out = []
for r, g, b, a in im.getdata():
    if a == 0:
        out.append((0, 0, 0, 0))
        continue
    i1, i2, t, res = proj((r, g, b))
    q1, q2 = POLISHED[i1], POLISHED[i2]
    out.append(tuple(max(0, min(255, round(q1[k] + (q2[k] - q1[k]) * t + res[k]))) for k in range(3)) + (a,))
base = Image.new("RGBA", im.size)
base.putdata(out)

# Mask of the existing plum line work (glasses, face, edges, pupils).
line_mask = Image.new("L", im.size)
line_mask.putdata(
    [255 if a > 128 and sum((c - p) ** 2 for c, p in zip((r, g, b), PLUM)) < 40 ** 2 else 0 for r, g, b, a in base.getdata()]
)


# Solid shapes (the pupils) survive a strong erode; thin lines don't. Grow
# only the thin lines so the eyes and their white highlights stay as drawn.
blobs = line_mask.filter(ImageFilter.MinFilter(11)).filter(ImageFilter.MaxFilter(21))
thin_lines = ImageChops.subtract(line_mask, blobs)
eye_keep = blobs  # never paint over the eyes area


def variant(name, inner, outer):
    img = base.copy()
    if inner:
        grown = thin_lines.filter(ImageFilter.MaxFilter(inner))
        grown = ImageChops.subtract(grown, eye_keep)
        # Keep the growth inside Turnip's silhouette.
        grown = ImageChops.multiply(grown, img.split()[3])
        plum = Image.new("RGBA", im.size, PLUM + (255,))
        plum.putalpha(grown)
        img = Image.alpha_composite(img, plum)
    pad = 24
    big = Image.new("RGBA", (im.width + 2 * pad, im.height + 2 * pad))
    big.paste(img, (pad, pad))
    ring = big.split()[3].filter(ImageFilter.MaxFilter(outer))
    outline = Image.new("RGBA", big.size, PLUM + (255,))
    outline.putalpha(ring)
    big = Image.alpha_composite(outline, big)
    big = big.crop(big.getbbox())
    big.thumbnail((420, 480), Image.LANCZOS)
    big.save(f"{outdir}/turnip-{name}.png", optimize=True)
    return big


variants = [
    ("now", 0, 19),  # polished as in the app (outline 13 at the 419px export ≈ 19 at source size)
    ("medium", 5, 25),
    ("bold", 9, 31),
]
made = [variant(n, i, o) for n, i, o in variants]

# Comparison sheet on the header's Sprout Green.
w = 300
sheet = Image.new("RGBA", (w * len(made) + 40, 380), (0xB7, 0xD7, 0x7F, 255))
for i, m in enumerate(made):
    m2 = m.copy()
    m2.thumbnail((240, 300), Image.LANCZOS)
    sheet.alpha_composite(m2, (20 + i * w + (w - m2.width) // 2, 40))
sheet.save(f"{outdir}/compare.png")
print("ok")
