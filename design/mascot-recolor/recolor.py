import sys
from PIL import Image
src, outdir = sys.argv[1], sys.argv[2]
im = Image.open(src).convert("RGBA")
SRC = [(0xE2,0xD8,0xCD),(0x8E,0x88,0xBE),(0x5B,0x59,0x7B),(0xAD,0xCA,0x7B),(0xFF,0xFF,0xFF)]
hx = lambda h: tuple(int(h[i:i+2],16) for i in (1,3,5))
VARIANTS = {
 "1-original":       ["#E2D8CD","#8E88BE","#5B597B","#ADCA7B"],
 "2-polished":       ["#FFFFFF","#8B86B8","#4E4C6E","#A3CF68"],
 "3-fresh-lavender": ["#F3F1FB","#9A8FE0","#4A476E","#9FD45E"],
 "4-turnip-violet":  ["#FFFFFF","#8A5CC2","#433A63","#93C957"],
}
px = list(im.getdata())
# precompute nearest-two-palette projection per unique color
cache = {}
def proj(c):
    if c in cache: return cache[c]
    ds = sorted(range(5), key=lambda i: sum((c[k]-SRC[i][k])**2 for k in range(3)))
    i1, i2 = ds[0], ds[1]
    p1, p2 = SRC[i1], SRC[i2]
    seg = [p2[k]-p1[k] for k in range(3)]
    L = sum(s*s for s in seg) or 1
    t = max(0, min(1, sum((c[k]-p1[k])*seg[k] for k in range(3))/L))
    res = [c[k]-(p1[k]+seg[k]*t) for k in range(3)]
    cache[c] = (i1, i2, t, res); return cache[c]
for name, cols in VARIANTS.items():
    T = [hx(c) for c in cols]+[(255,255,255)]
    out = []
    for r,g,b,a in px:
        if a == 0: out.append((0,0,0,0)); continue
        i1,i2,t,res = proj((r,g,b))
        q1,q2 = T[i1],T[i2]
        out.append(tuple(max(0,min(255,round(q1[k]+(q2[k]-q1[k])*t+res[k]))) for k in range(3))+(a,))
    img = Image.new("RGBA", im.size); img.putdata(out)
    if name != "1-original":
        from PIL import ImageFilter
        pad = 16
        big = Image.new("RGBA", (im.width+2*pad, im.height+2*pad)); big.paste(img, (pad,pad))
        dil = big.split()[3].filter(ImageFilter.MaxFilter(13))
        ol = Image.new("RGBA", big.size, T[2]+(255,)); ol.putalpha(dil)
        img = Image.alpha_composite(ol, big)
    img.thumbnail((420,480)); img.save(f"{outdir}/turnip-{name}.png", optimize=True)
    print(name, "ok")
