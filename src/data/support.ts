export type SupportTopic = {
  heading: string
  body: string[]
}

export type SupportFaq = {
  q: string
  a: string
}

export const SUPPORT_INTRO =
  'Support for COD Hack buyers on codhack.org — loader setup, Ricochet status, menu config and delivery help after you purchase a Call of Duty hack.'

export const SUPPORT_TOPICS: SupportTopic[] = [
  {
    heading: 'Status before you load',
    body: [
      'Check live status on the product page. If it says Updating, do not load. Wait until it is clear to load again.',
      'Ricochet patches can invalidate yesterday’s build. Status honesty matters more than rushing a session.',
    ],
  },
  {
    heading: 'Loader and menu issues',
    body: [
      'Follow Complete Setup for antivirus exclusions and load order before you open a ticket.',
      'If the product is Updating, wait. If a clear-to-load build still fails after one clean retry, open a support request with your order ID.',
    ],
  },
  {
    heading: 'Delivery and refunds',
    body: [
      'Delivery failures and extended Updating windows are covered on the Refunds page. Include your order ID when you write in.',
    ],
  },
  {
    heading: 'What we can and cannot help with',
    body: [
      'Supported: Call of Duty on Windows, Warzone, Multiplayer and Ranked, loader and menu help for paid licenses.',
      'Not supported: other games, cracked loaders or third-party mirrors.',
    ],
  },
]

export const SUPPORT_FAQS: SupportFaq[] = [
  {
    q: 'How do I contact COD Hack support?',
    a: 'Open your order on codhack.org and use the checkout support channel tied to your purchase. Include a status screenshot (clear to load / Updating) and whether you need load, menu or delivery help.',
  },
  {
    q: 'The loader will not open — what first?',
    a: 'Follow the Complete Setup forum thread for the current load order. If status is Updating, wait; if a clear-to-load build fails, include your order ID in a support request.',
  },
  {
    q: 'Menu opened once then never again?',
    a: 'Do not spam launch. Restart Call of Duty, confirm antivirus exclusions, re-check status, then try one clean load. If it still fails, contact support with your order ID.',
  },
  {
    q: 'Do you support Warzone and Ranked?',
    a: 'Warzone, Multiplayer and Ranked are the supported playlists when the current build is clear to load. Playlist-specific limits can differ after a title update — ask support if you only play one mode.',
  },
  {
    q: 'Where is my delivery?',
    a: 'Delivery is digital after checkout on codhack.org. Use only that loader link. Third-party mirrors are unsupported and unsafe.',
  },
]
