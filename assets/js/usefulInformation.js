export const usefulInformation = [
  {
    id: 1,
    name: 'Barcha ma\'lumotlar',
    current: false
  },
  {
    id: 2,
    name: 'Osimliklarning kasallik va zararkunandalari',
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
    name: 'O\'zbekistonda',
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
    name: 'Axborot xizmati',
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
  }
]
