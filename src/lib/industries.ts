// The local business types MRG works with, grouped for the "who I work with" section. Where a page
// exists for the type it is linked; the rest are listed so nobody reads the site as plumbers-only.
export interface IndustryGroup {
  name: string;
  industries: { name: string; examples: string; search: string; href?: string }[];
}

export const INDUSTRY_GROUPS: IndustryGroup[] = [
  {
    name: 'Trades and home services',
    industries: [
      { name: 'Building, construction and renovation', examples: 'builders, renovators, carpenters, kitchen and bathroom companies', search: 'home renovations near me', href: '/seo-for-builders' },
      { name: 'Roofing', examples: 'roof repairs, re-roofing, gutters', search: 'roof leak repair Coomera' },
      { name: 'Gas and heating', examples: 'gas fitters, hot water, heating and cooling', search: 'hot water repair Beenleigh', href: '/seo-for-plumbers' },
      { name: 'Paving and fencing', examples: 'pavers, fencing contractors, retaining walls', search: 'fencing contractor Pimpama' },
      { name: 'Locksmiths', examples: 'emergency, automotive and commercial locksmiths', search: 'locksmith near me' },
    ],
  },
  {
    name: 'Outdoors and cleaning',
    industries: [
      { name: 'Tree care', examples: 'arborists, tree surgeons, tree lopping, forestry and tree consultants', search: 'arborist near me' },
      { name: 'Landscaping and garden', examples: 'landscapers, turf, garden maintenance, irrigation', search: 'landscaper Upper Coomera' },
      { name: 'Cleaning', examples: 'pressure washing, house washing, commercial and end-of-lease cleaning', search: 'pressure washing Ormeau' },
    ],
  },
  {
    name: 'Weddings and hospitality',
    industries: [
      { name: 'Bridal, everything', examples: 'boutiques, hair and makeup, photographers, celebrants, florists, venues', search: 'wedding hair and makeup Gold Coast' },
      { name: 'Catering and private dining', examples: 'caterers, private chefs, grazing and event food', search: 'private chef Gold Coast' },
    ],
  },
  {
    name: 'Health, fitness and family',
    industries: [
      { name: 'Health and wellness', examples: 'physios, chiros, massage, allied health, clinics', search: 'physio near me' },
      { name: 'Gyms and fitness studios', examples: 'gyms, personal trainers, pilates and yoga studios', search: 'pilates studio Helensvale' },
      { name: 'Childcare and education', examples: 'childcare centres, kindergartens, tutors, swim schools', search: 'childcare Pimpama' },
    ],
  },
  {
    name: 'Property and professional',
    industries: [
      { name: 'Real estate agencies', examples: 'sales agencies, property managers, buyers agents', search: 'real estate agent Ormeau' },
      { name: 'Accountants and financial advisers', examples: 'accountants, bookkeepers, mortgage brokers, financial planners', search: 'accountant near me' },
    ],
  },
];
