export const consultation = [
  {
    id: 1,
    name: 'Barcha sohalar',
    current: false
  },
  {
    id: 2,
    name: 'O\'simliklarni himoya qilish vositalari bo\'yicha',
    iconDown: 'chevron-down',
    iconUp: 'chevron-up',
    children: [
      { name: 'text.tradingList', route: '/consultancy', current: false },
      { name: 'text.tradingCategories', route: '/consultancy', current: false }
    ],
    current: false
  },
  {
    id: 3,
    name: 'Maslahat kategoriyasi',
    iconDown: 'chevron-down',
    iconUp: 'chevron-up',
    children: [
      { name: 'text.newsList', route: '/consultancy', current: false },
      { name: 'text.newsCategories', route: '/consultancy', current: false },
      { name: 'text.interestingInformation', route: '/consultancy', current: false },
      { name: 'text.informationCategories', route: '/consultancy', current: false }
    ],
    current: false
  },
  {
    id: 4,
    name: 'Baliqchilik',
    iconDown: 'chevron-down',
    iconUp: 'chevron-up',
    children: [
      { name: 'text.newsList', route: '/consultancy', current: false },
      { name: 'text.newsCategories', route: '/consultancy', current: false },
      { name: 'text.interestingInformation', route: '/consultancy', current: false },
      { name: 'text.informationCategories', route: '/consultancy', current: false }
    ],
    current: false
  },
  {
    id: 5,
    name: 'Barqaror qishloq xo\'jaligi',
    iconDown: 'chevron-down',
    iconUp: 'chevron-up',
    children: [
      { name: 'text.newsList', route: '/consultancy', current: false },
      { name: 'text.newsCategories', route: '/consultancy', current: false },
      { name: 'text.interestingInformation', route: '/consultancy', current: false },
      { name: 'text.informationCategories', route: '/consultancy', current: false }
    ],
    current: false
  }
]
