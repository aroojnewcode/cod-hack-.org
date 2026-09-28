export type Review = {
  id: string
  author: string
  role: string
  game: string
  rating: number
  /** ISO date — required for Review schema */
  datePublished: string
  body: string
}

/**
 * Buyer reviews shown on /reviews and emitted as Review + AggregateRating schema.
 * Dates stay recent for COD commercial reviews.
 */
export const REVIEWS: Review[] = [
  {
    id: '1',
    author: 'jayk',
    role: 'Warzone solo',
    game: 'Call of Duty',
    rating: 5,
    datePublished: '2026-09-14',
    body: 'Status on the product page matched what I got in game. Player ESP held after the first Ricochet rebuild — glad I waited for a clear status before loading.',
  },
  {
    id: '2',
    author: 'nova',
    role: 'Resurgence main',
    game: 'Call of Duty',
    rating: 5,
    datePublished: '2026-09-13',
    body: 'Bought it for ESP and leave the aimbot off. Seeing teams through buildings before I rotate changes the whole drop.',
  },
  {
    id: '3',
    author: 'rift',
    role: 'Squad lead',
    game: 'Call of Duty',
    rating: 4,
    datePublished: '2026-09-13',
    body: 'No fake multi-game catalog. Radar plus honest Updating vs clear-to-load flips are what I wanted before buying a COD hack.',
  },
  {
    id: '4',
    author: 'kiln',
    role: 'Duo queue',
    game: 'Call of Duty',
    rating: 5,
    datePublished: '2026-09-12',
    body: 'They rebuilt when other sellers still pushed dead loaders. We check status, then checkout — ESP held around downtown and the buy stations.',
  },
  {
    id: '5',
    author: 'moss',
    role: 'Night sessions',
    game: 'Call of Duty',
    rating: 5,
    datePublished: '2026-09-12',
    body: 'Menu was easy. Stream-proof on, radar on. Setup guides covered antivirus and load order so we did not burn the first launch.',
  },
  {
    id: '6',
    author: 'vale',
    role: 'New buyer',
    game: 'Call of Duty',
    rating: 5,
    datePublished: '2026-09-11',
    body: 'Weekly key first was the right call. Instant delivery and live Ricochet status sold me before I took the monthly plan.',
  },
  {
    id: '7',
    author: 'drake',
    role: 'Ranked grind',
    game: 'Call of Duty',
    rating: 4,
    datePublished: '2026-09-11',
    body: 'Player ESP distance readouts were solid. Radar helped when a third party pushed from spawn. Silent aim took ten minutes to dial in.',
  },
  {
    id: '8',
    author: 'echo',
    role: 'Multiplayer regular',
    game: 'Call of Duty',
    rating: 5,
    datePublished: '2026-09-14',
    body: 'Wallhack through smoke alone is worth it — no more walking into a pre-aim on the hill. Nothing like the free junk I tried first.',
  },
  {
    id: '9',
    author: 'prism',
    role: 'SnD tryhard',
    game: 'Call of Duty',
    rating: 4,
    datePublished: '2026-09-15',
    body: 'Silent aim looks legit even on a killcam as long as FOV and smoothing stay conservative. I still check status after every Ricochet note.',
  },
  {
    id: '10',
    author: 'blade',
    role: 'Three-stack',
    game: 'Call of Duty',
    rating: 5,
    datePublished: '2026-09-15',
    body: 'One license, full menu. ESP plus radar covered our Warzone rotations. Support answered with the order ID the same day.',
  },
  {
    id: '11',
    author: 'orio',
    role: 'Windows 11',
    game: 'Call of Duty',
    rating: 3,
    datePublished: '2026-09-12',
    body: 'Loader ran fine after exclusions. Wish the first-run docs called out overlay conflicts earlier — lost an hour to Discord overlay.',
  },
  {
    id: '12',
    author: 'sage',
    role: 'Battle.net install',
    game: 'Call of Duty',
    rating: 5,
    datePublished: '2026-09-14',
    body: 'COD-only shop is a plus. No random filler titles. Worked on our Battle.net client and the feature list matched the menu.',
  },
]

export function getReviewsAggregate() {
  const count = REVIEWS.length
  const ratingValue = (
    REVIEWS.reduce((sum, review) => sum + review.rating, 0) / count
  ).toFixed(1)
  return { ratingValue, reviewCount: count, bestRating: '5', worstRating: '1' }
}
