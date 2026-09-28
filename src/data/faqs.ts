export type FaqItem = {
  q: string
  a: string
}

/** Master FAQ — visible on /faq and reused in sections. */
export const SITE_FAQS: FaqItem[] = [
  {
    q: 'What is COD Hack?',
    a: 'COD Hack is a Call of Duty toolset on codhack.org — silent-aim Aimbot, player ESP, wallhack and a 2D radar hack — with live Ricochet status after game patches.',
  },
  {
    q: 'How much does a Call of Duty hack cost?',
    a: `COD Hack starts from $35 for short access. Longer licenses cost more. Always confirm live Ricochet status and the price on codhack.org before checkout.`,
  },
  {
    q: 'Do you sell hacks for other games?',
    a: 'No. codhack.org sells Call of Duty hack only — one product for Warzone and Multiplayer, no multi-game catalog.',
  },
  {
    q: 'Is Aimbot the main feature?',
    a: 'Aimbot is optional. Most buyers lead with COD ESP, wallhack and radar awareness, then enable silent aim only if they want it.',
  },
  {
    q: 'How do you handle Ricochet updates?',
    a: 'We publish live clear-to-load or Updating labels after Call of Duty and Ricochet patches. Always check status on codhack.org before you load.',
  },
  {
    q: 'What is COD ESP / wallhack?',
    a: 'COD ESP and wallhack show operators through walls, smoke and buildings with distance and health when supported. Radar fills the off-screen gap so you are not guessing rotations.',
  },
  {
    q: 'What is a COD radar hack?',
    a: 'The radar hack is a 2D overlay for off-screen operators and third parties — useful for Warzone rotations, hill holds and avoiding flanks in Multiplayer.',
  },
  {
    q: 'What features are included?',
    a: 'COD Aimbot with silent aim, player ESP, wallhack, radar hack, recoil tools, spoofer and stream-proof options — Call of Duty on Windows PC only. See the Features Checklist guide for the full list.',
  },
  {
    q: 'Does COD Hack work on Warzone and Multiplayer?',
    a: 'Yes. The hack runs on Call of Duty Multiplayer, Ranked and Warzone when the current build allows it. Playlist-specific limits can change after a title update — ask support before you buy if you only play one mode.',
  },
  {
    q: 'How do I buy COD Hack?',
    a: 'Start on the homepage, confirm live Ricochet status and review the price from $35. Open Product details for compatibility and features, then continue to checkout for digital delivery.',
  },
  {
    q: 'How do I load COD Hack?',
    a: 'After checkout, follow the Complete Setup forum thread for the current load order. If status is Updating, wait rather than forcing an outdated build.',
  },
  {
    q: 'Where do I get COD Hack support?',
    a: 'Use the Support page and your checkout order channel. Include current Ricochet status and whether you need load, menu or delivery help.',
  },
  {
    q: 'Where can I read COD Hack reviews?',
    a: 'Player reviews with ratings are on the Reviews page. They cover ESP usefulness, status honesty and patch survival before you buy.',
  },
  {
    q: 'What is your refund policy?',
    a: 'Digital licenses follow the Refunds page — delivery failures and extended Updating windows can qualify; change of mind after a working key does not.',
  },
  {
    q: 'Is this the official Call of Duty site?',
    a: 'No. We sell COD Hack only. Buy and play the game from callofduty.com. We are not affiliated with Activision, Treyarch, Infinity Ward or Sledgehammer Games.',
  },
]

/** Commercial questions shown on the homepage; FAQ schema lives on /faq only. */
export const HOME_FAQS: FaqItem[] = [
  SITE_FAQS[1],
  SITE_FAQS[4],
  SITE_FAQS[5],
  SITE_FAQS[9],
]

export const PRODUCT_PAGE_FAQS: FaqItem[] = [
  SITE_FAQS[1],
  SITE_FAQS[4],
  SITE_FAQS[5],
  SITE_FAQS[6],
  SITE_FAQS[9],
  SITE_FAQS[11],
]
