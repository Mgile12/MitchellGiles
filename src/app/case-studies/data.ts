// Case studies built only from evidence already published on this site. Every figure is from a client
// account screenshot in public/proof or public/results. Fields the audit asked for that are not on
// record (search phrase, grid spacing, exact scan dates) are stated as unavailable rather than filled in.

export interface CaseStudy {
  slug: string;
  client: string;
  industry: string;
  location: string;
  service: string;
  serviceHref: string;
  headline: string;
  figure: string;
  figureLabel: string;
  summary: string;
  problem: string;
  work: string[];
  period: string;
  measurement: { label: string; value: string }[];
  attribution: string;
  corroboration: string;
  limitations: string[];
  images: { src: string; alt: string; caption: string }[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'polish-hub-marine-detailing-google-maps',
    client: 'Polish Hub Marine Detailing',
    industry: 'Marine and vehicle detailing',
    location: 'Gold Coast, Queensland',
    service: 'Google Business Profile',
    serviceHref: '/google-business-profile-gold-coast',
    headline: 'From page two to the top 3 on Google Maps in two days',
    figure: '2 days',
    figureLabel: 'between the before and after ranking scans',
    summary:
      'A detailing business with a good reputation and a Business Profile that Google was not showing anyone. Two days after the first round of fixes, the ranking grid went from mostly red to mostly green.',
    problem:
      'The profile sat outside the top 10 across most of the ranking grid for its main service search, so the business was invisible on Maps to people a few kilometres away who were ready to book. The before scan is the first image below.',
    work: [
      'Audited the profile against the three businesses ranking above it: categories, services, photos, reviews, posts and the website it pointed to.',
      'Set the primary and secondary categories to match what customers actually search for, and filled the services list with the real menu rather than three generic items.',
      'Rewrote the business description, added photos of real work, and answered every review.',
      'Checked the website named the same services and the same suburbs as the profile, so the two stopped contradicting each other.',
      'Re-scanned the grid two days later.',
    ],
    period:
      '13 to 15 March 2026, the two days between the scans shown. The profile has been managed weekly since: reviews, posts, photos and services, because rankings drift the moment the work stops.',
    measurement: [
      { label: 'Tool', value: 'Google Maps ranking heatmap: a grid of scan points around the business, each showing the profile’s rank for the search term' },
      { label: 'Before, 13 March 2026', value: 'Search term “boat detailing gold coast”. Seventh in the competitor list, outside the top 10 on most of the grid (red)' },
      { label: 'After, 15 March 2026', value: 'Search term “boat detailing service”. First in the competitor list, average rank 4.01 across the grid, top 3 on most points (green)' },
      { label: 'Grid', value: 'Same grid and scan location on both scans' },
    ],
    attribution:
      'Same grid and scan location, two days apart. The two exports were run on neighbouring wordings of the service search (“boat detailing gold coast” before, “boat detailing service” after), so this is a strong signal of the move rather than a strict like-for-like. No ads were running on the profile and no reviews landed between the scans.',
    corroboration:
      'Polish Hub Marine Detailing is named here with the client’s knowledge and its logo appears in the client wall on the homepage. The heatmaps are untouched exports.',
    limitations: [
      'A heatmap shows ranking positions, not calls or jobs. It proves visibility moved, not revenue.',
      'Two scans two days apart show a jump, not a twelve-month trend. The ongoing weekly work is what holds the position.',
      'The before and after exports use two wordings of the same search. I have kept both untouched rather than re-cropping them to match.',
      'Results this fast are not typical. I plan for 90 days and tell you on the call what is realistic for your category and competition.',
    ],
    images: [
      { src: '/proof/heatmap-polish-hub-before.jpg', alt: 'Google Maps ranking heatmap for Polish Hub Marine Detailing before the work, mostly red', caption: 'Before: outside the top 10 across most of the grid.' },
      { src: '/proof/heatmap-polish-hub-after.jpg', alt: 'Google Maps ranking heatmap for Polish Hub Marine Detailing two days later, mostly green', caption: 'After: top 3 across most of the grid, two days later.' },
    ],
  },
  {
    slug: 'ceramics-gold-coast-google-maps',
    client: 'Ceramics Gold Coast',
    industry: 'Ceramic coating and paint protection',
    location: 'Gold Coast, Queensland',
    service: 'Google Business Profile',
    serviceHref: '/google-business-profile-gold-coast',
    headline: 'Top 3 on Google Maps in eleven days',
    figure: '11 days',
    figureLabel: 'between the before and after ranking scans',
    summary:
      'A ceramic coating specialist competing against larger detailing shops for the same Maps searches. Eleven days of profile and website work took the grid from red to green.',
    problem:
      'Bigger competitors with more reviews held the top three on Maps across the service area, and this profile ranked outside the top 10 on most of the grid for its main service term. The before scan is the first image below.',
    work: [
      'Audited the profile and the website against the top three competitors and listed what they had that this profile did not.',
      'Fixed categories and services, rewrote the description around the actual service and the suburbs served, and added real photos of finished work.',
      'Lined the website up with the profile: same service names, same area, a page Google could rank for the term.',
      'Started the weekly routine of posts, review replies and photo uploads.',
      'Re-scanned the grid after eleven days.',
    ],
    period: 'Eleven days between the two scans shown, the second on 4 March 2026, then ongoing weekly management.',
    measurement: [
      { label: 'Tool', value: 'Google Maps ranking heatmap, same method as the Polish Hub study. Scan points 1 mile (1.6 km) apart' },
      { label: 'Before', value: 'Search term “ceramic coating”. Average rank 20.0 across the grid, in the top 3 at 0% of points, 21st in the competitor list' },
      { label: 'After, 4 March 2026', value: 'Search term “ceramic coating gold coast”. Average rank 3.02, in the top 3 at 71% of points, second in the competitor list' },
      { label: 'Grid', value: 'Same grid and scan location on both scans' },
    ],
    attribution:
      'Same grid and scan location on both scans, eleven days apart. The exports were run on the short and the suburb-qualified wording of the same search (“ceramic coating” before, “ceramic coating gold coast” after). The business was not running ads to the profile in this window, so the movement is from the profile and website changes.',
    corroboration:
      'Ceramics Gold Coast is named here with the client’s knowledge and appears in the client wall on the homepage. The heatmaps are untouched exports.',
    limitations: [
      'Ranking scans show where the profile appears, not how many people called or booked.',
      'Eleven days is faster than I plan for. Competition and category decide the speed, and some profiles take the full 90 days.',
      'The two exports use two wordings of the same search. Both are kept untouched.',
    ],
    images: [
      { src: '/proof/heatmap-ceramics-before.jpg', alt: 'Google Maps ranking heatmap for Ceramics Gold Coast before the work, mostly red', caption: 'Before: outside the top 10 across most of the grid.' },
      { src: '/proof/heatmap-ceramics-after.jpg', alt: 'Google Maps ranking heatmap for Ceramics Gold Coast eleven days later, mostly green', caption: 'After: top 3 across most of the grid, eleven days later.' },
    ],
  },
  {
    slug: 'email-marketing-60k-in-30-days',
    client: 'Online retailer (not named publicly)',
    industry: 'E-commerce',
    location: 'Australia',
    service: 'Email Marketing',
    serviceHref: '/email-marketing-gold-coast',
    headline: '$60,632 from email in 30 days, from a list the store already owned',
    figure: '$60,632',
    figureLabel: 'attributed to email in 30 days, 63.4% of the store’s revenue',
    summary:
      'A store with thousands of past customers on a list it rarely emailed. In one 30-day window, campaigns and automations to that list attributed $60,632, which was 63.4% of everything the store sold that month.',
    problem:
      'The store had paid once, through ads, to acquire every customer on its list, then left the list alone. Email was a small share of revenue and most of the list had not heard from the brand in months.',
    work: [
      'Cleaned and segmented the list by purchase history and engagement.',
      'Built the core automations: welcome, browse and cart recovery, post-purchase and win-back.',
      'Ran a calendar of campaigns to the engaged segments with one clear offer each, not a weekly newsletter.',
      'Tracked attributed revenue in the email platform against total store revenue for the same 30 days.',
    ],
    period: 'The 30-day window shown in the screenshot, compared with the previous 30 days.',
    measurement: [
      { label: 'Attributed revenue', value: '$60,632 in 30 days, up $46,065 on the previous 30 days' },
      { label: 'Store revenue', value: '$95,593 in the same 30 days, up $30,825' },
      { label: 'Share of revenue from email', value: '63.4%' },
      { label: 'Source', value: 'The email platform’s revenue report, screenshot untouched' },
    ],
    attribution:
      'Attributed revenue is the email platform’s own last-click attribution: orders placed after a click on an email, within its attribution window. Store revenue is every order in the period. The email figure is a share of the store figure, not on top of it.',
    corroboration: 'The screenshot is from the client’s email platform. The client is not named at their request.',
    limitations: [
      'Platform attribution gives email credit for orders that may have happened anyway. Treat 63.4% as the platform’s view, not a controlled test.',
      'The store’s total revenue also rose that month, so part of the lift is a busier month, not only email.',
      'A list this size and a product people reorder are the conditions that make this possible. A new store with no list cannot expect the same in 30 days.',
    ],
    images: [
      { src: '/results/email-60k-in-30-days.webp', alt: 'Email platform revenue report: $60,632 attributed to email in 30 days, 63.4% of store revenue', caption: 'Attributed revenue A$60,632 against store revenue A$95,593 for the same 30 days.' },
    ],
  },
];
