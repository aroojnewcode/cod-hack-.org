export type GameStatus = 'Undetected' | 'Updating' | 'Use with caution'

export type Game = {
  slug: string
  name: string
  status: GameStatus
  popular?: boolean
}

/** Site is Call of Duty hack only — no other titles in the catalog. */
export const GAMES: Game[] = [
  { slug: 'cod', name: 'Call of Duty', status: 'Undetected', popular: true },
]

export function getGame(slug: string) {
  return GAMES.find((g) => g.slug === slug)
}

/** Buyer-facing status on the product card (Undetected → Clear). */
export function statusLabel(status: GameStatus) {
  if (status === 'Undetected') return 'Clear'
  if (status === 'Use with caution') return 'Caution'
  return status
}

export function guidePath(slug: string) {
  return `/${slug.toLowerCase()}-hack`
}

export function parseGuideSlug(param: string) {
  const lower = param.toLowerCase()
  return lower.endsWith('-hack') ? lower.slice(0, -5) : lower
}

export const GUIDE_FEATURES = [
  {
    name: 'COD Aimbot (silent aim)',
    text: 'Silent-aim tracking with FOV, smoothing and bone selection — fire near an operator and still land the hit, so it reads as legit even when a teammate or clip reviews it.',
  },
  {
    name: 'Player ESP / Wallhack',
    text: 'See enemies through walls, smoke and buildings with distance, health and loadout information when the build supports it — tell teammates from hostiles instantly.',
  },
  {
    name: 'UAV / Radar Hack',
    text: '2D radar awareness for off-screen operators across Warzone and Multiplayer — spot the third party before it reaches your circle or hill.',
  },
  {
    name: 'Recoil & aim assist tools',
    text: 'Optional recoil control and visibility checks so tracking stays human instead of a robotic snap that Ricochet reports love.',
  },
  {
    name: 'Warzone & Multiplayer support',
    text: 'Works on Call of Duty Multiplayer, Ranked and Warzone on Windows PC when the current build allows it.',
  },
  {
    name: 'Spoofer + Cleaner',
    text: 'Protect hardware identifiers and refresh traces after bans or hardware swaps — included with the package.',
  },
  {
    name: 'Stream-proof overlays',
    text: 'Keep supported ESP and radar overlays out of OBS and common capture tools while you still see them locally.',
  },
  {
    name: 'Ricochet status + support',
    text: 'Live clear-to-load or Updating status is reviewed after Ricochet and Call of Duty patches before you load.',
  },
] as const

/** @deprecated use PRODUCT_PAGE_FAQS from faqs.ts — kept as alias */
export { PRODUCT_PAGE_FAQS as PRODUCT_FAQS } from './faqs'
