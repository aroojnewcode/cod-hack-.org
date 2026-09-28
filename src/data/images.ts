import { DAYZ_HERO, DAYZ_SOLDIER, DAYZ_COVER, DAYZ_MENU, DAYZ_ESP, DAYZ_TACTICAL } from './media'
import { DAYZ_OG, getOgImageForPath, PAGE_OG } from './og'

export { DAYZ_OG, getOgImageForPath, PAGE_OG }
export { forumOgImage } from './og'

export const DAYZ_PRODUCT_HERO = DAYZ_HERO
export const DAYZ_PRODUCT_COVER = DAYZ_COVER

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
    src: DAYZ_SOLDIER,
    og: PAGE_OG.home,
    alt: 'Call of Duty Warzone Aimbot and ESP on a rooftop sniper shot',
    title: 'COD Hack',
    caption: 'Silent aim Aimbot with a red ESP box on a Warzone rooftop operator.',
  },
  forums: {
    src: DAYZ_HERO,
    og: PAGE_OG.forums,
    alt: 'Call of Duty radar hack and ESP through Warzone smoke',
    title: 'COD Hack Guides',
    caption: 'Radar overlay and ESP box while rotating through smoke.',
  },
  reviews: {
    src: DAYZ_ESP,
    og: PAGE_OG.reviews,
    alt: 'Call of Duty Warzone elimination with ESP boxes during an explosion',
    title: 'COD Hack Reviews',
    caption: 'ESP tracking through a Warzone multi-kill used in buyer reviews.',
  },
  faq: {
    src: DAYZ_MENU,
    og: PAGE_OG.faq,
    alt: 'Call of Duty spectate HUD with ESP boxes while reloading in Warzone',
    title: 'COD Hack FAQ',
    caption: 'Spectate ESP and radar overlay for FAQ screenshots of the product in-game.',
  },
  support: {
    src: DAYZ_TACTICAL,
    og: PAGE_OG.support,
    alt: 'Call of Duty Warzone circle-closing fight with ESP name labels',
    title: 'COD Hack Support',
    caption: 'In-match ESP HUD used when documenting loader and status issues.',
  },
  product: {
    src: DAYZ_COVER,
    og: PAGE_OG.product,
    alt: 'Call of Duty Warzone key art with a skull-masked operator for COD Hack checkout',
    title: 'COD Hack Features',
    caption: 'Product cover for buying COD Hack on Call of Duty Warzone.',
  },
}

export function getGameImage(_slug: string): string {
  return DAYZ_PRODUCT_COVER
}

export function getProductHeroImage(_slug: string): string {
  return DAYZ_PRODUCT_COVER
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
