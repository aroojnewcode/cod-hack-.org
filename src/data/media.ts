export type SeoMediaItem = {
  image: string
  video?: string
  alt: string
  title: string
  caption: string
  videoTitle?: string
  videoDescription?: string
}

/** Warzone cheat gameplay stills — unique file per on-page use. */
export const COD_AIMBOT_ROOFTOP = '/media/cod-aimbot-rooftop.webp'
export const COD_ESP_DOORWAY = '/media/cod-esp-doorway.webp'
export const COD_RADAR_SMOKE = '/media/cod-radar-smoke.webp'
export const COD_ESP_CLOSE = '/media/cod-esp-close.webp'
export const COD_BUY_COVER = '/media/cod-product-cover.webp'
export const COD_SPECTATE_RELOAD = '/media/cod-spectate-reload.webp'
export const COD_LOOT_STAIRS = '/media/cod-loot-stairs.webp'
export const COD_CIRCLE_CLOSE = '/media/cod-circle-close.webp'
export const COD_ALLEY_ESP = '/media/cod-alley-esp.webp'
export const COD_ELIM_EXPLOSION = '/media/cod-elim-explosion.webp'
export const COD_ROOFTOP_WIDE = '/media/cod-rooftop-wide.webp'
export const COD_INDOOR_ESP = '/media/cod-indoor-esp.webp'
export const COD_HUD_MOUNT = '/media/cod-hud-mount.webp'
export const COD_BOUNTY_HUD = '/media/cod-bounty-hud.webp'
export const COD_ELIM_FEED = '/media/cod-elim-feed.webp'

/** Self-hosted COD preview clip — short muted mid-video loop. */
export const COD_PREVIEW_VIDEO = {
  id: 'ee0735e7-c9a3-4072-b818-98e2bb7f07ff',
  src: '/videos/preview-loop.mp4',
  poster: '/media/cod-preview-poster.webp',
  title: 'COD Hack Aimbot and ESP preview',
  caption: 'Short Warzone cheat gameplay loop — silent aim Aimbot, player ESP and radar on PC.',
} as const

export const PAGE_MEDIA = {
  home: {
    image: COD_AIMBOT_ROOFTOP,
    alt: 'Call of Duty Warzone Aimbot with red ESP box on a rooftop operator in the sniper reticle',
    title: 'COD Hack Aimbot rooftop gameplay',
    caption: 'Silent aim Aimbot and player ESP on a Warzone rooftop with the operator boxed in the optic.',
  },
  product: {
    image: COD_BUY_COVER,
    video: COD_PREVIEW_VIDEO.src,
    alt: 'Call of Duty Warzone key art with a skull-masked operator for COD Hack checkout',
    title: 'Buy COD Hack for Call of Duty Warzone',
    caption: 'COD Hack product art for Warzone on PC — silent aim Aimbot, ESP and radar hack checkout.',
    videoTitle: COD_PREVIEW_VIDEO.title,
    videoDescription: COD_PREVIEW_VIDEO.caption,
  },
  forums: {
    image: COD_RADAR_SMOKE,
    alt: 'Call of Duty radar hack overlay with ESP through smoke on Warzone',
    title: 'COD Hack radar and ESP in smoke',
    caption: '2D radar hack dots plus a red ESP box through smoke during a Warzone fight.',
  },
  reviews: {
    image: COD_ELIM_EXPLOSION,
    alt: 'Call of Duty Warzone kill with ESP boxes during an explosion after a second elimination',
    title: 'COD Hack elimination gameplay',
    caption: 'ESP and Aimbot tracking during a Warzone multi-kill with the reload prompt on screen.',
  },
  faq: {
    image: COD_SPECTATE_RELOAD,
    alt: 'Call of Duty Warzone spectate view showing ESP boxes and radar while reloading',
    title: 'COD Hack spectate ESP view',
    caption: 'ESP skeletons, radar overlay and bounty HUD visible while spectating a Warzone squad.',
  },
  support: {
    image: COD_CIRCLE_CLOSE,
    alt: 'Call of Duty Warzone circle-closing HUD with ESP names during a Prison fight',
    title: 'COD Hack in-match status HUD',
    caption: 'In-match ESP labels and kill feed while the Warzone circle closes — useful for load-status questions.',
  },
} as const satisfies Record<string, SeoMediaItem>

const FORUM_MEDIA: Record<string, SeoMediaItem> = {
  'features-list': {
    image: COD_LOOT_STAIRS,
    alt: 'Call of Duty hack feature overlay on Warzone stairs showing ESP names, loot and radar',
    title: 'COD Hack features overlay',
    caption: 'ESP, loot callouts, radar and spectate notice together — the full COD Hack module overlay.',
  },
  'aimbot-settings': {
    image: COD_AIMBOT_ROOFTOP,
    alt: 'Call of Duty silent Aimbot holding a Warzone operator in a red ESP box inside a sniper reticle',
    title: 'COD Aimbot silent aim rooftop',
    caption: 'Silent aim Aimbot with FOV on a rooftop operator boxed by ESP in the optic.',
  },
  'esp-wallhack-guide': {
    image: COD_ESP_DOORWAY,
    alt: 'Call of Duty wallhack ESP skeleton visible through a doorway on a distant Warzone operator',
    title: 'COD ESP wallhack through doorway',
    caption: 'Player ESP / wallhack showing a red box and skeleton on an operator through a windowed doorway.',
  },
  'radar-hack-guide': {
    image: COD_RADAR_SMOKE,
    alt: 'Call of Duty radar hack 2D overlay tracking operators through Warzone smoke',
    title: 'COD radar hack through smoke',
    caption: 'Radar hack dots and an ESP box keep operators readable when smoke covers the street.',
  },
  hotkeys: {
    image: COD_INDOOR_ESP,
    alt: 'Call of Duty hack HUD with ESP box and mount prompt inside a Warzone room',
    title: 'COD Hack hotkey HUD',
    caption: 'In-game ESP box plus mount and weapon HUD — typical binds after a clean COD Hack load.',
  },
  'complete-setup': {
    image: COD_ROOFTOP_WIDE,
    alt: 'Call of Duty Warzone rooftop after setup with ESP names on operators near a lighthouse',
    title: 'COD Hack after complete setup',
    caption: 'Wide Warzone rooftop with ESP nameplates after Aimbot and ESP are enabled.',
  },
  'windows-setup': {
    image: COD_HUD_MOUNT,
    alt: 'Call of Duty Warzone first-person HUD with ESP box after a Windows PC load',
    title: 'COD Hack Windows load HUD',
    caption: 'ESP box and mount prompt on Windows PC after following the COD Hack load order.',
  },
  'disable-antivirus': {
    image: COD_BOUNTY_HUD,
    alt: 'Call of Duty Warzone bounty HUD with ESP loot and operator names after exclusions',
    title: 'COD Hack running after antivirus exclusions',
    caption: 'ESP names, loot and bounty timers after Windows Defender exclusions so the loader stays intact.',
  },
  'stream-proof-setup': {
    image: COD_SPECTATE_RELOAD,
    alt: 'Call of Duty Warzone spectate screen with ESP overlays that stream-proof setup is meant to hide from capture',
    title: 'COD Hack spectate overlay',
    caption: 'ESP boxes and radar on a spectate feed — what stream-proof settings keep out of OBS.',
  },
  'ricochet-status': {
    image: COD_CIRCLE_CLOSE,
    alt: 'Call of Duty Warzone Prison fight with ESP during a live match used to check Ricochet status',
    title: 'COD Hack live match after Ricochet check',
    caption: 'ESP labels in a live Warzone circle — only load when Ricochet status is clear on codhack.org.',
  },
  'undetected-status': {
    image: COD_ELIM_EXPLOSION,
    alt: 'Call of Duty Warzone second-kill explosion with ESP boxes while the build is listed undetected',
    title: 'COD Hack undetected Warzone fight',
    caption: 'ESP tracking through a Warzone elimination when the product page lists clear-to-load status.',
  },
  'ranked-play-guide': {
    image: COD_ALLEY_ESP,
    alt: 'Call of Duty Warzone Ranked alley fight with ESP boxes on operators on the stairs',
    title: 'COD Hack Ranked and Warzone alley',
    caption: 'ESP on stairwell operators in Warzone / Ranked — milder Aimbot and ESP settings for playlist play.',
  },
  'loader-errors': {
    image: COD_ELIM_FEED,
    alt: 'Call of Duty Warzone elimination feed and ESP names during a Prison interior fight',
    title: 'COD Hack match HUD after a successful load',
    caption: 'Kill feed and ESP names in-match — the overlay you should see after loader errors are fixed.',
  },
}

export function getForumMedia(slug: string): SeoMediaItem {
  return FORUM_MEDIA[slug] || PAGE_MEDIA.forums
}
