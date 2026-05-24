/**
 * Generates favicons from public/images/logo-mark.png
 * Requires: pip install pillow
 */
import { spawnSync } from 'node:child_process'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const src = join(root, 'public/images/logo-mark.png')
const publicDir = join(root, 'public')

const py = `
from PIL import Image
import struct, io, os

src = ${JSON.stringify(src)}
public = ${JSON.stringify(publicDir)}

im = Image.open(src).convert('RGBA')
px = im.load()
w, h = im.size
for y in range(h):
    for x in range(w):
        r, g, b, a = px[x, y]
        if r < 40 and g < 40 and b < 40:
            px[x, y] = (r, g, b, 0)

bbox = im.getbbox()
if bbox:
    im = im.crop(bbox)

# square with padding
bw, bh = im.size
side = max(bw, bh)
pad = int(side * 0.08)
canvas = Image.new('RGBA', (side + pad * 2, side + pad * 2), (0, 0, 0, 0))
ox = (side + pad * 2 - bw) // 2
oy = (side + pad * 2 - bh) // 2
canvas.paste(im, (ox, oy), im)

def save_png(size, name):
    out = canvas.resize((size, size), Image.Resampling.LANCZOS)
    out.save(os.path.join(public, name), 'PNG', optimize=True)

save_png(32, 'favicon-32x32.png')
save_png(180, 'apple-touch-icon.png')
save_png(512, 'icon-512.png')

# favicon.ico (16 + 32)
sizes = [16, 32]
images = [canvas.resize((s, s), Image.Resampling.LANCZOS) for s in sizes]
ico_path = os.path.join(public, 'favicon.ico')
images[0].save(
    ico_path,
    format='ICO',
    sizes=[(s, s) for s in sizes],
    append_images=images[1:],
)
print('OK:', ico_path)
`

const result = spawnSync('python3', ['-c', py], { stdio: 'inherit' })
process.exit(result.status ?? 1)
