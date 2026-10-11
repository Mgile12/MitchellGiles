import type { BarChartSpec } from '@/components/BarChart';

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
  /** Optional charts built from the figures in `measurement`, rendered after the screenshots. */
  charts?: BarChartSpec[];
  /** The hub listing's own copy of the lead image, named for the hub page. */
  hubImage?: { src: string; alt: string };
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
      { src: '/images/case-studies/polish-hub-marine-detailing-google-maps/polish-hub-marine-detailing-case-study-polish-hub-google-maps-ranking-before.jpg', alt: 'polish hub marine detailing case study: Polish Hub Google Maps ranking grid before', caption: 'Before: outside the top 10 across most of the grid.' },
      { src: '/images/case-studies/polish-hub-marine-detailing-google-maps/polish-hub-marine-detailing-case-study-polish-hub-google-maps-ranking-after.jpg', alt: 'polish hub marine detailing case study: Polish Hub Google Maps ranking grid after, top 3 across the grid', caption: 'After: top 3 across most of the grid, two days later.' },
    ],
    hubImage: { src: '/images/case-studies/hub/case-studies-polish-hub-google-maps-ranking-after.jpg', alt: 'case studies: Polish Hub Google Maps ranking grid after, top 3 across the grid' },
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
      { src: '/images/case-studies/ceramics-gold-coast-google-maps/ceramics-gold-coast-case-study-ceramics-gold-coast-google-maps-ranking-before.jpg', alt: 'ceramics gold coast case study: Ceramics Gold Coast Google Maps ranking grid before', caption: 'Before: outside the top 10 across most of the grid.' },
      { src: '/images/case-studies/ceramics-gold-coast-google-maps/ceramics-gold-coast-case-study-ceramics-gold-coast-google-maps-ranking-after.jpg', alt: 'ceramics gold coast case study: Ceramics Gold Coast Google Maps ranking grid after, top 3 across the grid', caption: 'After: top 3 across most of the grid, eleven days later.' },
    ],
    hubImage: { src: '/images/case-studies/hub/case-studies-ceramics-gold-coast-google-maps-ranking-after.jpg', alt: 'case studies: Ceramics Gold Coast Google Maps ranking grid after, top 3 across the grid' },
  },
  {
    slug: 'gold-coast-plumber-calls-from-google-nearly-tripled',
    client: 'Gold Coast plumber (white-label, not named)',
    industry: 'Plumbing',
    location: 'Southport, Gold Coast',
    service: 'Google Business Profile',
    serviceHref: '/google-business-profile-gold-coast',
    headline: 'Calls from Google nearly tripled: 43 to 118 in a quarter',
    figure: '2.7x',
    figureLabel: 'calls from Google, Jan to Mar vs Jul to Sep 2026',
    summary:
      'A plumber with a great reputation, 4.9 stars from more than 200 reviews, whose Google listing was only bringing in 10 to 18 calls a month at the start of 2026. Since the work started in April, every month from May to September has brought between 37 and 41 calls.',
    problem:
      'The profile was under-used: few photos, no Products, slow review replies, service areas not set, and more than 20 directory listings carrying an old phone number. The website had thin service pages. The listing was already in the top 3 on most of the Southport grid for the main search, but the calls did not match the position.',
    work: [
      'Regular photo posts and Google Products for the main services.',
      'Every review answered, service areas set properly.',
      'Phone number and directory clean-up across more than 20 listings.',
      'New and rewritten service pages on the website, matching the profile.',
      'Weekly maintenance since 16 April 2026.',
    ],
    period: 'Work started 16 April 2026. Before window: January to March 2026. After window: July to September 2026. Ranking scans 28 July and 1 October 2026.',
    measurement: [
      { label: 'Calls from Google', value: '43 (Jan to Mar 2026) to 118 (Jul to Sep 2026), up 174%. Same months last year: 52.' },
      { label: 'Website clicks', value: '83 to 185, up 123%' },
      { label: 'Calls each month, May to Sep 2026', value: '40, 41, 37, 41, 40' },
      { label: 'Maps ranking, ' + '“best plumber” + suburb', value: 'Top 3 at 40 of 49 map points (81.6%) on 28 Jul 2026 to 46 of 49 (93.9%) on 1 Oct 2026. Average position 1.82 to 1.45.' },
      { label: 'Grid', value: '7 x 7 points, 5 km radius, same centre both scans (Local Falcon)' },
    ],
    attribution:
      'Calls and clicks are the profile’s own performance data (Google Business Profile, via Local Falcon, pulled 11 October 2026). The two ranking scans are the same search term, grid and centre. No ads were run on this profile.',
    corroboration:
      'This is white-label work: the plumber is a client of another agency, so the business is not named here and the business name is cropped off the scans. The figures are from the profile and the scan exports.',
    limitations: [
      'Calls are taps on the Call button in Google, not answered calls or booked jobs.',
      'The map position was already strong before the work; the gain here is mostly calls, not rank.',
      'Weekly call counts swing a lot (5 one week, 19 another), so the comparison uses three-month totals.',
    ],
    images: [
      { src: '/images/case-studies/gold-coast-plumber-calls-from-google-nearly-tripled/gold-coast-plumber-case-study-gold-coast-plumber-google-maps-ranking-before.jpg', alt: 'gold coast plumber case study: Gold Coast plumber Google Maps ranking grid, 28 July 2026, top 3 at 40 of 49 points', caption: 'Before, 28 Jul 2026: top 3 at 40 of 49 points, average position 1.82.' },
      { src: '/images/case-studies/gold-coast-plumber-calls-from-google-nearly-tripled/gold-coast-plumber-case-study-gold-coast-plumber-google-maps-ranking-after.jpg', alt: 'gold coast plumber case study: Gold Coast plumber Google Maps ranking grid, 1 October 2026, top 3 at 46 of 49 points', caption: 'After, 1 Oct 2026: top 3 at 46 of 49 points, average position 1.45.' },
    ],
    hubImage: { src: '/images/case-studies/hub/case-studies-gold-coast-plumber-google-maps-ranking-after.jpg', alt: 'case studies: Gold Coast plumber Google Maps ranking grid, 1 October 2026, top 3 at 46 of 49 points' },
    charts: [
      {
        title: 'Three months before vs the latest three months',
        subtitle: 'Jan to Mar 2026 (before the work) vs Jul to Sep 2026',
        series: ['Jan to Mar 2026', 'Jul to Sep 2026'],
        groups: [
          { label: 'Calls', values: [43, 118] },
          { label: 'Website clicks', values: [83, 185] },
        ],
        note: 'Google Business Profile performance data via Local Falcon, pulled 11 Oct 2026. Calls = taps on the Call button. Website clicks = taps on Website.',
      },
    ],
  },
  {
    slug: 'logan-plumber-2-5x-calls-in-first-three-months',
    client: 'Logan plumber (white-label, not named)',
    industry: 'Plumbing and gas',
    location: 'Logan Reserve, Queensland',
    service: 'Google Business Profile',
    serviceHref: '/google-business-profile-gold-coast',
    headline: '2.5x the calls from Google in the first three months',
    figure: '2.5x',
    figureLabel: 'calls from Google, Apr to Jun vs Jul to Sep 2026',
    summary:
      'In the three months before this plumber handed over the profile, only about 200 people a month were seeing it. In the first three months of work it was seen 2,650 times, up from 635, and calls from Google went from 36 to 90.',
    problem:
      'A profile that Google barely showed: around 200 views a month, no offers, reviews unanswered, and a website with no page for the services people were searching for. On the ranking grid for “plumber near me” it was in the top 3 at fewer than half the points.',
    work: [
      'Profile brought into shape: categories, services, photos, description.',
      'Offers set up and reviews answered as they land.',
      'A blocked drains page and an updated hot water page on the website.',
      'Weekly maintenance from 1 July 2026.',
    ],
    period: 'Profile work from 1 July 2026. Before window: April to June 2026. After window: July to September 2026. Ranking scans 27 July and 1 October 2026.',
    measurement: [
      { label: 'Calls from Google', value: '36 (Apr to Jun 2026) to 90 (Jul to Sep 2026), up 150%. Same months last year: 29.' },
      { label: 'Website clicks', value: '74 to 144, up 95%' },
      { label: 'Profile views', value: '635 to 2,650, about 4x (Maps and Search, desktop and mobile)' },
      { label: 'Calls each month, Jun to Sep 2026', value: '8, 18, 37, 35' },
      { label: 'Maps ranking, “plumber near me”', value: 'Top 3 at 23 of 49 map points (46.9%) on 27 Jul 2026 to 29 of 49 (59.2%) on 1 Oct 2026. Average position 4.85 to 3.61.' },
      { label: 'Grid', value: '7 x 7 points, 5 km radius, same centre both scans (Local Falcon)' },
    ],
    attribution:
      'Calls, clicks and views are the profile’s own performance data (via Local Falcon, pulled 11 October 2026). The scans are the same term, grid and centre. The business was running Google Ads from May 2026, which overlaps the before window, so some of the lift in views may be ads-assisted; the ranking grid is organic Maps only.',
    corroboration:
      'White-label work for another agency, so the business is not named and the name is cropped off the scans. Figures are from the profile and the scan exports.',
    limitations: [
      'Calls are taps on the Call button in Google, not answered calls or booked jobs.',
      'Google Ads ran alongside the profile work, so the views figure is not purely organic.',
      'Rankings move week to week: this term sat at 61% top-3 on 1 August and 51% on 26 September. The comparison is the earliest and latest like-for-like scans.',
    ],
    images: [
      { src: '/images/case-studies/logan-plumber-2-5x-calls-in-first-three-months/logan-plumber-case-study-logan-plumber-google-maps-ranking-before.jpg', alt: 'logan plumber case study: Logan plumber Google Maps ranking grid, 27 July 2026, top 3 at 23 of 49 points', caption: 'Before, 27 Jul 2026: top 3 at 23 of 49 points, average position 4.85.' },
      { src: '/images/case-studies/logan-plumber-2-5x-calls-in-first-three-months/logan-plumber-case-study-logan-plumber-google-maps-ranking-after.jpg', alt: 'logan plumber case study: Logan plumber Google Maps ranking grid, 1 October 2026, top 3 at 29 of 49 points', caption: 'After, 1 Oct 2026: top 3 at 29 of 49 points, average position 3.61.' },
    ],
    hubImage: { src: '/images/case-studies/hub/case-studies-logan-plumber-google-maps-ranking-after.jpg', alt: 'case studies: Logan plumber Google Maps ranking grid, 1 October 2026, top 3 at 29 of 49 points' },
    charts: [
      {
        title: 'Three months before vs the first three months',
        subtitle: 'Apr to Jun 2026 (before the work) vs Jul to Sep 2026',
        series: ['Apr to Jun 2026', 'Jul to Sep 2026'],
        groups: [
          { label: 'Calls', values: [36, 90] },
          { label: 'Website clicks', values: [74, 144] },
        ],
        note: 'Google Business Profile performance data via Local Falcon, pulled 11 Oct 2026. Calls = taps on the Call button. Website clicks = taps on Website.',
      },
    ],
  },
  {
    slug: 'perth-plumber-number-1-across-the-whole-grid',
    client: 'Perth plumber (white-label, not named)',
    industry: 'Plumbing and gas',
    location: 'Swan View, Western Australia',
    service: 'Google Business Profile',
    serviceHref: '/google-business-profile-gold-coast',
    headline: 'Number 1 on Google Maps at every point of the grid',
    figure: '49 of 49',
    figureLabel: 'map points at number 1, up from 5 of 49',
    summary:
      'A plumber who already owned the home suburb on Maps but needed the wider area. Five weeks after the work started, the profile sat at number 1 on every one of the 49 scan points for “plumber” plus its suburb, and calls from Google rose from about 5 a week to about 8.',
    problem:
      'Second place across most of the grid for the main search, and barely visible for the service searches that matter most: top 3 at just 1 of 49 points for “emergency plumber” and 2 of 49 for “blocked drains”.',
    work: [
      'Service areas and service descriptions built out properly.',
      'Profile kept active with posts, and an offer set up.',
      'Hot water and blocked drains pages added to the website.',
      'Weekly maintenance from 29 June 2026.',
    ],
    period: 'Work started 29 June 2026. Ranking scans 24 July and 28 August 2026. Calls counted July to September 2026.',
    measurement: [
      { label: 'Maps ranking, “plumber” + suburb', value: 'Number 1 at 5 of 49 map points on 24 Jul 2026 to 49 of 49 on 28 Aug 2026. Average position 1.94 to 1.00.' },
      { label: 'Top 3 by service search, 24 Jul to 28 Aug 2026', value: 'Emergency plumber 1 to 19 of 49 points. Hot water repairs 11 to 25. Commercial plumbing 15 to 25. Blocked drains 2 to 6.' },
      { label: 'Calls from Google each month', value: 'July 12, August 26, September 33' },
      { label: 'Calls per week', value: 'About 5.3 a week in August (21 over 4 weeks) to about 8.4 a week from 31 Aug to 4 Oct (42 over 5 weeks)' },
      { label: 'Grid', value: '7 x 7 points, 5 km radius, same centre both scans (Local Falcon)' },
    ],
    attribution:
      'Rankings are like-for-like scans, same term, grid and centre. Calls are the profile’s own data via Local Falcon, pulled 11 October 2026. No ads were run on this profile.',
    corroboration:
      'White-label work for another agency, so the business is not named and the name is cropped off the scans.',
    limitations: [
      'Google shows no profile data before June 2026, even though the profile is older, so there is no before figure for calls. The call growth is July to September only.',
      'Website clicks fell from 55 in August to 38 in September, so clicks are not claimed here.',
      'Calls are taps on the Call button in Google, not answered calls or booked jobs.',
    ],
    images: [
      { src: '/images/case-studies/perth-plumber-number-1-across-the-whole-grid/perth-plumber-case-study-perth-plumber-google-maps-ranking-before.jpg', alt: 'perth plumber case study: Perth plumber Google Maps ranking grid, 24 July 2026, number 1 at 5 of 49 points', caption: 'Before, 24 Jul 2026: number 1 at 5 of 49 points, average position 1.94.' },
      { src: '/images/case-studies/perth-plumber-number-1-across-the-whole-grid/perth-plumber-case-study-perth-plumber-google-maps-ranking-after.jpg', alt: 'perth plumber case study: Perth plumber Google Maps ranking grid, 28 August 2026, number 1 at all 49 points', caption: 'After, 28 Aug 2026: number 1 at 49 of 49 points, average position 1.00.' },
    ],
    hubImage: { src: '/images/case-studies/hub/case-studies-perth-plumber-google-maps-ranking-after.jpg', alt: 'case studies: Perth plumber Google Maps ranking grid, 28 August 2026, number 1 at all 49 points' },
    charts: [
      {
        title: 'Map points in the top 3, first scan vs one month later',
        subtitle: 'Out of 49 points. 24 Jul 2026 vs 28 Aug 2026.',
        series: ['24 Jul 2026', '28 Aug 2026'],
        groups: [
          { label: 'Emergency plumber', values: [1, 19] },
          { label: 'Hot water repairs', values: [11, 25] },
          { label: 'Commercial plumbing', values: [15, 25] },
          { label: 'Blocked drains', values: [2, 6] },
        ],
        note: 'Local Falcon Google Maps scans, same 7 x 7 grid, same centre, 5 km radius.',
      },
      {
        title: 'From a quiet profile to steady calls',
        subtitle: 'Each month, Jun to Sep 2026. Google shows no profile activity before 24 Jun 2026. Work started 29 Jun.',
        series: ['Calls', 'Website clicks'],
        groups: [
          { label: 'Jun', values: [0, 0] },
          { label: 'Jul', values: [12, 25] },
          { label: 'Aug', values: [26, 55] },
          { label: 'Sep', values: [33, 38] },
        ],
        markBefore: 1,
        markLabel: 'Work starts',
        note: 'Google Business Profile performance data via Local Falcon, pulled 11 Oct 2026.',
      },
    ],
  },
  {
    slug: 'sunshine-coast-plumber-calls-doubled-first-month',
    client: 'Sunshine Coast plumber (white-label, not named)',
    industry: 'Plumbing and drainage',
    location: 'Doonan, Sunshine Coast',
    service: 'Google Business Profile',
    serviceHref: '/google-business-profile-gold-coast',
    headline: 'Calls more than doubled in the first full month',
    figure: '6 to 14',
    figureLabel: 'calls from Google, August to September 2026',
    summary:
      'Work started on 21 August 2026. September brought 14 calls from Google, up from 6 in August, the best month for calls in the 14 months of data Google holds for this profile. One month is early, so this one is logged as a start, not a result.',
    problem:
      'A profile that had drifted between 0 and 9 calls a month for over a year, with no Products, few posts and directory listings that had not been checked.',
    work: [
      'Photo posts with a Call button.',
      'Google Products for the main services.',
      'Directory listings checked and corrected.',
      'Weekly maintenance from 21 August 2026.',
    ],
    period: 'Work started 21 August 2026. Google holds data for this profile from August 2025.',
    measurement: [
      { label: 'Calls from Google', value: '6 (Aug 2026) to 14 (Sep 2026). Previous best month: 9 (Nov 2025).' },
      { label: 'Website clicks', value: '21 to 35' },
      { label: 'Maps ranking, “plumber” + suburb', value: 'Top 3 at 81 of 81 points on 1 Oct 2026 (9 x 9 grid, 4 km). This is the starting scan; there is no earlier like-for-like scan.' },
    ],
    attribution: 'Calls and clicks are the profile’s own data via Local Falcon, pulled 11 October 2026. No ads on this profile.',
    corroboration: 'White-label work for another agency, so the business is not named.',
    limitations: [
      'One month of data. A single month can be noise; this page will be updated after the next full quarter.',
      'No before-and-after ranking scan on the same grid yet. The first like-for-like comparison is the 1 November 2026 scan.',
      'Calls are taps on the Call button in Google, not answered calls or booked jobs.',
    ],
    images: [],
    charts: [
      {
        title: 'Calls and website clicks from Google, each month',
        subtitle: 'Aug 2025 to Sep 2026. Dashed line = when the work started (21 Aug 2026).',
        series: ['Calls', 'Website clicks'],
        groups: [
          { label: 'Aug 25', values: [2, 20] },
          { label: 'Sep', values: [8, 33] },
          { label: 'Oct', values: [7, 31] },
          { label: 'Nov', values: [9, 5] },
          { label: 'Dec', values: [3, 16] },
          { label: 'Jan 26', values: [8, 19] },
          { label: 'Feb', values: [6, 18] },
          { label: 'Mar', values: [1, 11] },
          { label: 'Apr', values: [0, 16] },
          { label: 'May', values: [4, 15] },
          { label: 'Jun', values: [2, 10] },
          { label: 'Jul', values: [2, 16] },
          { label: 'Aug', values: [6, 21] },
          { label: 'Sep 26', values: [14, 35] },
        ],
        markBefore: 12,
        markLabel: 'Work starts',
        note: 'Google Business Profile performance data via Local Falcon, pulled 11 Oct 2026.',
      },
    ],
  },
];
