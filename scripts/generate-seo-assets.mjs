/**
 * Auto-generate 1200x630 JPEG Open Graph images for every indexed URL.
 * Google SERP / social crawlers fetch these for right-side thumbnails.
 * Never overwrites first-party COD /media gameplay stills.
 */
import { access, mkdir, readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const root = join(fileURLToPath(new URL('.', import.meta.url)), '..')
const ogDir = join(root, 'public', 'og')
const mediaDir = join(root, 'public', 'media')
const blogsPath = join(root, 'src', 'data', 'blogs.ts')

await mkdir(ogDir, { recursive: true })
await mkdir(mediaDir, { recursive: true })

function escapeXml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}

async function exists(path) {
  try {
    await access(path)
    return true
  } catch {
    return false
  }
}

const requiredMedia = [
  join(mediaDir, 'cod-rooftop-wide.webp'),
  join(mediaDir, 'cod-product-cover.webp'),
  join(mediaDir, 'cod-alley-esp.webp'),
  join(mediaDir, 'cod-spectate-reload.webp'),
  join(mediaDir, 'cod-esp-doorway.webp'),
  join(mediaDir, 'cod-preview-poster.webp'),
]

for (const path of requiredMedia) {
  if (!(await exists(path))) {
    throw new Error(`Missing COD media asset (do not regenerate): ${path}`)
  }
}

function overlaySvg(width, height, eyebrow, title, subtitle) {
  const titleSize = Math.min(54, Math.round(width * 0.042))
  const lines = String(title).match(/.{1,28}(\s|$)/g)?.map((s) => s.trim()).filter(Boolean) || [
    title,
  ]
  const titleLines = lines.slice(0, 2)
  return Buffer.from(`
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="shade" x1="0" y1="0" x2="1" y2="1">
          <stop stop-color="#08060f" stop-opacity="0.55"/>
          <stop offset="0.45" stop-color="#08060f" stop-opacity="0.72"/>
          <stop offset="1" stop-color="#14081f" stop-opacity="0.88"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#shade)"/>
      <text x="64" y="210" fill="#c084fc" font-size="22" font-family="Arial, sans-serif" font-weight="700" letter-spacing="4">${escapeXml(eyebrow)}</text>
      ${titleLines
        .map(
          (line, i) =>
            `<text x="64" y="${290 + i * 64}" fill="#ffffff" font-size="${titleSize}" font-family="Arial, sans-serif" font-weight="700">${escapeXml(line)}</text>`,
        )
        .join('\n')}
      <text x="64" y="480" fill="#c9bdd2" font-size="26" font-family="Arial, sans-serif">${escapeXml(subtitle)}</text>
      <text x="64" y="560" fill="#9299a3" font-size="20" font-family="Arial, sans-serif">codhack.org</text>
    </svg>
  `)
}

async function writeOgJpeg(outPath, sourcePath, eyebrow, title, subtitle) {
  const base = sharp(sourcePath).resize(1200, 630, { fit: 'cover', position: 'centre' })
  const overlay = sharp(overlaySvg(1200, 630, eyebrow, title, subtitle))
  await sharp({
    create: { width: 1200, height: 630, channels: 3, background: '#08060f' },
  })
    .composite([
      { input: await base.toBuffer(), top: 0, left: 0 },
      { input: await overlay.png().toBuffer(), top: 0, left: 0 },
    ])
    .jpeg({ quality: 90, chromaSubsampling: '4:4:4', mozjpeg: true })
    .toFile(outPath)
}

function loadForumSlugs(src) {
  return [...src.matchAll(/slug:\s*['"]([^'"]+)['"]/g)].map((m) => m[1])
}

function loadForumMeta(src) {
  const pattern =
    /slug:\s*['"]([^'"]+)['"],[\s\S]*?metaTitle:\s*['"]([^'"]+)['"],[\s\S]*?metaDescription:\s*['"]([^'"]+)['"]/g
  return [...src.matchAll(pattern)].map((m) => ({
    slug: m[1],
    title: m[2],
    description: m[3],
  }))
}

const heroFull = join(mediaDir, 'cod-rooftop-wide.webp')
const coverArt = join(mediaDir, 'cod-product-cover.webp')
const espGif = join(mediaDir, 'cod-esp-doorway.webp')
const menuGif = join(mediaDir, 'cod-spectate-reload.webp')
const videoThumb = join(mediaDir, 'cod-preview-poster.webp')

const staticOg = [
  {
    file: 'home.jpg',
    source: heroFull,
    eyebrow: 'COD HACK',
    title: 'Call of Duty Aimbot, ESP & Radar',
    subtitle: 'COD Hack from $35 · live Ricochet status',
  },
  {
    file: 'cod-hack.jpg',
    source: coverArt,
    eyebrow: 'PRODUCT DETAILS',
    title: 'COD Aimbot, ESP & Radar',
    subtitle: 'Features, Ricochet status and price',
  },
  {
    file: 'forums.jpg',
    source: menuGif,
    eyebrow: 'GUIDES',
    title: 'COD Hack Setup Forums',
    subtitle: 'Aimbot, ESP, loader and Ricochet guides',
  },
  {
    file: 'reviews.jpg',
    source: espGif,
    eyebrow: 'REVIEWS',
    title: 'COD Hack Buyer Reviews',
    subtitle: 'Real COD Aimbot and ESP feedback',
  },
  {
    file: 'faq.jpg',
    source: menuGif,
    eyebrow: 'FAQ',
    title: 'COD Hack FAQ',
    subtitle: 'Price, Ricochet status and setup answers',
  },
  {
    file: 'support.jpg',
    source: videoThumb,
    eyebrow: 'SUPPORT',
    title: 'COD Hack Support',
    subtitle: 'Loader, delivery and Windows help',
  },
  {
    file: 'privacy.jpg',
    source: heroFull,
    eyebrow: 'POLICY',
    title: 'Privacy Policy',
    subtitle: 'How codhack.org handles order data',
  },
  {
    file: 'terms.jpg',
    source: heroFull,
    eyebrow: 'POLICY',
    title: 'Terms of Use',
    subtitle: 'License rules for COD Hack',
  },
  {
    file: 'refunds.jpg',
    source: coverArt,
    eyebrow: 'POLICY',
    title: 'Refund Policy',
    subtitle: 'Digital license refund rules',
  },
]

const created = []

for (const item of staticOg) {
  const out = join(ogDir, item.file)
  await writeOgJpeg(out, item.source, item.eyebrow, item.title, item.subtitle)
  created.push(item.file)
}

const blogsSrc = await readFile(blogsPath, 'utf8')
const forums = loadForumMeta(blogsSrc)
if (!forums.length) {
  for (const slug of loadForumSlugs(blogsSrc)) {
    forums.push({
      slug,
      title: `COD Hack ${slug}`,
      description: 'COD Hack guide on codhack.org',
    })
  }
}

for (const forum of forums) {
  const file = `forums-${forum.slug}.jpg`
  const out = join(ogDir, file)
  const source =
    /esp|wallhack|radar|ranked/i.test(forum.slug)
      ? espGif
      : /aimbot|features|hotkeys|setup|windows|antivirus|loader|stream/i.test(forum.slug)
        ? menuGif
        : coverArt
  await writeOgJpeg(
    out,
    source,
    'COD GUIDE',
    forum.title.replace(/\s*\|\s*.*$/, '').slice(0, 48),
    'COD Hack · codhack.org',
  )
  created.push(file)
}

console.log(`SEO OG images ready (${created.length}): ${created.slice(0, 8).join(', ')}…`)
