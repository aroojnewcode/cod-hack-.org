import { PRODUCT_OG } from './images'
import { PAGE_OG } from './og'

export const SITE_URL = 'https://codhack.org'
export const SITE_NAME = 'COD Hack'
export const SITE_HOST = 'codhack.org'
export const PRODUCT_PATH = '/cod-hack'
export const GAME_SLUG = 'cod'

/**
 * Sole purpose — used in schema + about copy.
 * Single-product site: Call of Duty / Warzone / Multiplayer hacks for PC (worldwide).
 * Canonical host is apex https://codhack.org (www 301s to apex in the Worker).
 */
export const SITE_PURPOSE =
  'Buy Call of Duty hack for Warzone and Multiplayer on Windows PC — silent-aim Aimbot, player ESP, wallhack, radar hack and live Ricochet status with instant digital delivery.'

export const SITE_ABOUT = [
  'call of duty hack',
  'cod hack',
  'cod hacks',
  'warzone hack',
  'warzone cheats',
  'cod aimbot',
  'cod esp',
  'cod wallhack',
  'cod radar hack',
  'ricochet cod hack',
  'undetected cod hack',
] as const

/** Offer prices shown on product schema + purchase UI. */
export const PRODUCT_PRICE_USD = '35'
export const PRODUCT_PRICE_LIFETIME_USD = '150'

export const SEO_REGIONS = [
  { hreflang: 'en', label: 'English' },
  { hreflang: 'x-default', label: 'Default' },
] as const

export const OG_IMAGE = PRODUCT_OG

export type PageSeo = {
  title: string
  description: string
  path: string
  ogType?: 'website' | 'article' | 'product'
  /** Prefer /og/*.jpg (1200x630) for Google SERP thumbnails */
  image?: string
  imageAlt?: string
  robots?: string
}

const INDEX_ROBOTS =
  'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'

export const SEO = {
  home: {
    title: 'Call of Duty Hack | Aimbot, ESP & Radar from $35',
    description:
      'Buy Call of Duty hack for Warzone and Multiplayer on PC — silent aim Aimbot, player ESP, wallhack and radar hack from $35. Check live Ricochet status, then checkout.',
    path: '/',
    ogType: 'website',
    image: PAGE_OG.home,
    imageAlt: 'COD Hack — Call of Duty Aimbot, ESP and radar hack for PC',
    robots: INDEX_ROBOTS,
  },
  forums: {
    title: 'COD Hack Guides | Aimbot, ESP, Radar & Setup',
    description:
      'Call of Duty hack guides: silent aim, player ESP, radar hack, antivirus exclusions, loader setup and Ricochet status. Read before you buy COD Hack from $35.',
    path: '/forums',
    ogType: 'website',
    image: PAGE_OG.forums,
    imageAlt: 'COD Hack setup guides for Aimbot, ESP and Ricochet',
    robots: INDEX_ROBOTS,
  },
  reviews: {
    title: 'COD Hack Reviews | Warzone & Multiplayer Buyers',
    description:
      'Read Call of Duty hack reviews on silent aim, player ESP, wallhack and Ricochet rebuilds before you buy a Warzone or Multiplayer license for Windows PC.',
    path: '/reviews',
    ogType: 'website',
    image: PAGE_OG.reviews,
    imageAlt: 'COD Hack buyer reviews for Call of Duty on PC',
    robots: INDEX_ROBOTS,
  },
  faq: {
    title: 'COD Hack FAQ | Price, Ricochet Status & Setup',
    description:
      'FAQ for buying Call of Duty hack on Windows PC: price from $35, Aimbot and ESP features, Ricochet status, Warzone and Multiplayer support, loader setup and delivery.',
    path: '/faq',
    ogType: 'website',
    image: PAGE_OG.faq,
    imageAlt: 'COD Hack FAQ — price, Ricochet and setup',
    robots: INDEX_ROBOTS,
  },
  support: {
    title: 'COD Hack Support | Loader, Delivery & Windows',
    description:
      'Get help buying and loading Call of Duty hack: delivery email, Windows setup, antivirus exclusions, loader errors and Ricochet status updates on codhack.org.',
    path: '/support',
    ogType: 'website',
    image: PAGE_OG.support,
    imageAlt: 'COD Hack support for loader and delivery help',
    robots: INDEX_ROBOTS,
  },
  product: {
    title: 'COD Hack Price & Checkout | Aimbot, ESP, Radar',
    description:
      'Call of Duty hack price and checkout — silent aim Aimbot, player ESP, wallhack, radar hack, spoofer and live Ricochet status from $35.',
    path: PRODUCT_PATH,
    ogType: 'product',
    image: PAGE_OG.product,
    imageAlt: 'Call of Duty Aimbot, ESP and radar hack product details',
    robots: INDEX_ROBOTS,
  },
} as const satisfies Record<string, PageSeo>

export const HOME_HEADINGS = {
  h1: 'Call of Duty Hack — COD Hack Aimbot, ESP & Hacks',
  h2Features: 'COD Aimbot, ESP, wallhack & radar hack',
  h2Featured: 'COD ESP and silent aim Aimbot',
  h2About: 'Clear Ricochet status before you buy COD Hack',
  h2Access: 'Buy COD Hack',
  h2Faq: 'COD Hack FAQ',
} as const

export function absoluteUrl(path: string) {
  if (!path || path === '/') return `${SITE_URL}/`
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}
