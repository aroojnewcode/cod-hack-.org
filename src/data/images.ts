import {
  COD_AIMBOT_ROOFTOP,
  COD_BUY_COVER,
  COD_CIRCLE_CLOSE,
  COD_ELIM_EXPLOSION,
  COD_ROOFTOP_WIDE,
  COD_SPECTATE_RELOAD,
} from './media'
import { PRODUCT_OG, getOgImageForPath, PAGE_OG } from './og'

export { PRODUCT_OG, getOgImageForPath, PAGE_OG }
export { forumOgImage } from './og'

export const PRODUCT_COVER = COD_BUY_COVER

export type ImageSeoFields = {
  alt: string
  title: string
  caption: string
}

export const IMAGE_SEO: Record<
  string,
  ImageSeoFields & {
    heroAlt: string
    heroTitle: string
    heroCaption: string
  }
> = {
  cod: {
    alt: 'Call of Duty Warzone key art with a skull-masked operator for COD Hack',
    title: 'COD Hack Product Details',
    caption: 'Buy COD Hack for Warzone — Aimbot, ESP, wallhack and radar hack',
    heroAlt: 'Call of Duty Warzone artwork for buying COD Hack on PC',
    heroTitle: 'Buy COD Hack',
    heroCaption: 'Warzone operator key art on the COD Hack product checkout card',
  },
}

type PageImage = ImageSeoFields & { src: string; og: string }

/** On-page media + dedicated OG JPEG for Google SERP thumbnails. */
export const PAGE_IMAGES: Record<
  'home' | 'forums' | 'reviews' | 'faq' | 'support' | 'product',
  PageImage
> = {
  home: {
    src: COD_AIMBOT_ROOFTOP,
    og: PAGE_OG.home,
    alt: 'Call of Duty Warzone Aimbot and ESP on a rooftop sniper shot',
    title: 'COD Hack',
    caption: 'Silent aim Aimbot with a red ESP box on a Warzone rooftop operator.',
  },
  forums: {
    src: COD_ROOFTOP_WIDE,
    og: PAGE_OG.forums,
    alt: 'Call of Duty radar hack and ESP through Warzone smoke',
    title: 'COD Hack Guides',
    caption: 'Radar overlay and ESP box while rotating through smoke.',
  },
  reviews: {
    src: COD_ELIM_EXPLOSION,
    og: PAGE_OG.reviews,
    alt: 'Call of Duty Warzone elimination with ESP boxes during an explosion',
    title: 'COD Hack Reviews',
    caption: 'ESP tracking through a Warzone multi-kill used in buyer reviews.',
  },
  faq: {
    src: COD_SPECTATE_RELOAD,
    og: PAGE_OG.faq,
    alt: 'Call of Duty spectate HUD with ESP boxes while reloading in Warzone',
    title: 'COD Hack FAQ',
    caption: 'Spectate ESP and radar overlay for FAQ screenshots of the product in-game.',
  },
  support: {
    src: COD_CIRCLE_CLOSE,
    og: PAGE_OG.support,
    alt: 'Call of Duty Warzone circle-closing fight with ESP name labels',
    title: 'COD Hack Support',
    caption: 'In-match ESP HUD used when documenting loader and status issues.',
  },
  product: {
    src: COD_BUY_COVER,
    og: PAGE_OG.product,
    alt: 'Call of Duty Warzone key art with a skull-masked operator for COD Hack checkout',
    title: 'COD Hack Features',
    caption: 'Product cover for buying COD Hack on Call of Duty Warzone.',
  },
}

export function getGameImage(_slug: string): string {
  return PRODUCT_COVER
}

export function getProductHeroImage(_slug: string): string {
  return PRODUCT_COVER
}

export function getOgImage(path?: string): string {
  return getOgImageForPath(path)
}

export function getPageImage(key: keyof typeof PAGE_IMAGES) {
  return PAGE_IMAGES[key]
}

export function getImageAlt(
  slug: string,
  name: string,
  variant: 'catalog' | 'product' = 'catalog',
): string {
  const seo = IMAGE_SEO[slug]
  if (seo) return variant === 'product' ? seo.heroAlt : seo.alt
  return variant === 'product' ? `${name} product details` : `${name} product artwork`
}

export function getImageTitle(
  slug: string,
  name: string,
  variant: 'catalog' | 'product' = 'catalog',
): string {
  const seo = IMAGE_SEO[slug]
  if (seo) return variant === 'product' ? seo.heroTitle : seo.title
  return `${name} product`
}
