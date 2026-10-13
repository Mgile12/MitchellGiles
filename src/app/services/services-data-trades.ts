import type { ServicePage } from './services-data';

const tradeLinks = [
  { label: 'SEO for tradies', href: '/seo-for-tradies-gold-coast' },
  { label: 'Google Business Profile optimisation', href: '/google-business-profile-gold-coast' },
  { label: 'Google Maps ranking', href: '/google-maps-ranking-gold-coast' },
  { label: 'Review management', href: '/review-management-gold-coast' },
  { label: 'Case studies', href: '/case-studies' },
];

export const TRADE_PAGES: ServicePage[] = [
  // ------------------------------------------------------------------ Plumbers
  {
    slug: 'seo-for-plumbers',
    group: 'trade',
    name: 'SEO for Plumbers',
    primaryKeyword: 'SEO for plumbers',
    secondaryKeywords: ['plumber SEO', 'plumbing Google Business Profile', 'rank plumber on Google Maps', 'emergency plumber searches'],
    title: 'SEO for Plumbers | How Plumbing Businesses Win the Google Maps Pack, With Real Numbers',
    description:
      'SEO for plumbers, from someone who runs it for plumbing businesses every week: what decides the Maps pack for "plumber near me", the service pages that matter, reviews that rank, and the numbers from two plumbers who went from 79 calls a quarter to 208. Call me.',
    eyebrow: 'SEO for plumbers',
    h1: 'SEO for plumbers',
    intro: [
      'Plumbing is the trade I have the most data for, so this page is specific. Two plumbers I work for went from 79 calls from Google in the three months before the work to 208 in the latest three. A third sits at number one on every point of a 49-point ranking grid for "plumber" plus its suburb. None of that came from clever tricks. It came from doing the same handful of things properly, every week, for businesses whose competitors were not.',
      'Plumbing searches are the purest local intent there is. "Blocked drain Coomera", "hot water repair Beenleigh", "emergency plumber near me" at 9pm. The person is at home, the problem is now, and Google shows three businesses with a Call button. Here is how to be one of them.',
    ],
    sections: [
      {
        heading: 'What plumbing customers actually search',
        paragraphs: [
          'Most plumbing searches fall into four groups, and each one wants something different from your profile and your website.',
        ],
        bullets: [
          'Emergency: "emergency plumber", "plumber near me", "burst pipe". Wants the Call button, 24-hour hours if true, and reviews that say "came out the same night".',
          'Specific repair: "blocked drain", "hot water system repair", "leaking tap". Wants a service page that names the job, roughly what is involved, and the suburb.',
          'Installation and replacement: "hot water system replacement", "bathroom renovation plumber". Bigger job, more research; wants photos, a process, and proof.',
          'Gas and compliance: "gas fitter", "gas compliance certificate". Wants the licence number visible and the right category on the profile.',
        ],
      },
      {
        heading: 'The profile set-up that wins "plumber near me"',
        numbered: [
          'Primary category "Plumber". Secondary categories for what else is true: "Gas installation service", "Hot water system supplier", "Drainage service". Not "Contractor".',
          'A services list with every job you do, named the way customers say it: blocked drains, hot water repairs, hot water replacement, leaking taps, toilet repairs, burst pipes, gas fitting, bathroom plumbing, backflow testing.',
          'Hours that are true. If you answer the phone at 2am, say so. If you do not, "24/7" on the profile and voicemail at midnight is a one-star review waiting to happen.',
          'Products set up for the big-ticket items: hot water systems by brand and size, with a price range if you are comfortable, and a photo.',
          'Photos of vans, jobs, the team and the yard. Monthly, dated, real.',
          'Service area set to the suburbs you actually drive to, no further.',
        ],
      },
      {
        heading: 'The pages a plumbing website needs',
        paragraphs: [
          'A plumbing site does not need a blog. It needs a page for each service and a page for each suburb, each one written to answer the search that lands on it. The service pages do the convincing for the researched jobs; the suburb pages let the profile rank away from the pin.',
        ],
        bullets: [
          'Service pages: blocked drains, hot water (repair and replacement separately), gas fitting, leak detection, bathroom plumbing, commercial plumbing if you do it',
          'Suburb pages: your home suburb and the five you most want to win, each with the estates, the common problems there, and a review from a customer in that suburb',
          'One honest emergency page: what you can attend tonight, what you cannot, what the call-out involves',
          'Licence numbers, insurance and the owner’s name and photo on every page footer',
        ],
      },
      {
        heading: 'Reviews that rank a plumber',
        paragraphs: [
          'Plumbing customers are grateful and busy, which means they will review you if asked in the moment and forget if asked next week. The request goes by text from the van before you leave the driveway, with a direct link and one line: "If you could say what we fixed and which suburb, it helps the next person find us." Across a year that produces a review stream that names blocked drains in Pimpama, hot water in Yatala and burst pipes in Beenleigh, which is relevance you did not have to write.',
        ],
      },
      {
        heading: 'What the numbers look like when it works',
        paragraphs: [
          'The Gold Coast plumber below had 4.9 stars from over 200 reviews and was still only taking 10 to 18 calls a month from Google at the start of 2026, because the profile was under-used and the directories carried an old number. After the work started in April, every month from May to September brought 37 to 41 calls. The Logan plumber handed over a profile that 200 people a month were seeing; in the first three months it was seen 2,650 times. Both are written up in full, with dates and caveats, in the case studies.',
        ],
      },
    ],
    table: {
      caption: 'Two plumbers, before and after, three-month windows',
      head: ['', 'Before', 'After', 'Change'],
      rows: [
        ['Gold Coast plumber, calls', '43', '118', '+174%'],
        ['Gold Coast plumber, website clicks', '83', '185', '+123%'],
        ['Logan plumber, calls', '36', '90', '+150%'],
        ['Logan plumber, profile views', '635', '2,650', 'about 4x'],
      ],
    },
    checklist: {
      title: 'The plumber profile check',
      items: [
        'Primary category is "Plumber"',
        'At least twelve services listed, in customer language',
        'Hours are what you actually answer',
        'A review in the last two weeks that names a job and a suburb',
        'A hot water product with a photo',
        'Licence number on the profile and the website',
        'Same phone number on the van, the profile, the website and Yellow Pages',
      ],
    },
    faqs: [
      { question: 'How long does SEO take for a plumber?', answer: 'Faster than most trades, because the searches are urgent and the pack is decided mostly by the profile. With a decent review base, weeks. The two plumbers in the table moved inside one quarter. I plan for 90 days.' },
      { question: 'Should I run Google Ads as well?', answer: 'I do not run ads, so I have no stake in the answer. Ads can fill the gap while the profile climbs, but the Maps pack sends cheaper calls and keeps sending them when the ads stop. Fix the profile first either way.' },
      { question: 'I cover the whole Gold Coast. Can one profile rank everywhere?', answer: 'No. A service-area business ranks from its pin outward. Suburb pages and reviews from each suburb stretch the reach; past that, the honest options are to focus the area or open a second real location.' },
      { question: 'Do "24/7" and "emergency" in my business name help?', answer: 'They get profiles suspended. Keep the real business name on the profile, and put the emergency service in the services list, the hours, and an emergency page on the site.' },
      { question: 'What about plumbing directories and lead sites?', answer: 'Listings on the main directories help citations. Paying lead-generation sites per lead is a separate decision; it does nothing for your own ranking and the leads are shared.' },
      { question: 'Can you work with my existing website?', answer: 'Usually. Most plumbing sites need pages added and a few fixed, not a rebuild. If the site cannot be edited or is slow on a phone, I will say so.' },
      { question: 'Do you work with plumbers outside the Gold Coast?', answer: 'Yes. The Logan plumber in the table is one; I also do this white-label for a trades agency with plumbers in several states.' },
    ],
    related: tradeLinks,
  },

  // ------------------------------------------------------------------ Electricians
  {
    slug: 'seo-for-electricians',
    group: 'trade',
    name: 'SEO for Electricians',
    primaryKeyword: 'SEO for electricians',
    secondaryKeywords: ['electrician SEO', 'rank electrician on Google Maps', 'electrical Google Business Profile', 'emergency electrician searches'],
    title: 'SEO for Electricians | Win the Maps Pack for Electrical Work in Your Suburbs',
    description:
      'SEO for electricians: the Google Business Profile set-up for "electrician near me", the service pages for switchboards, solar, EV chargers and rewires, reviews that rank, and the licence and safety proof customers look for. From someone who runs it for trades every week. Call 0474 870 535.',
    eyebrow: 'SEO for electricians',
    h1: 'SEO for electricians',
    intro: [
      'Electrical work splits into two kinds of search, and most electricians rank for neither. The urgent kind, "electrician near me", "power out half the house", "smoke alarm beeping", goes straight to the Maps pack and the Call button. The planned kind, "switchboard upgrade cost", "EV charger installation", "solar electrician", starts with research and ends with a quote request from a website that answered the questions.',
      'An electrician who wins both has a profile set up for the urgent search and a website built for the planned one. This page is how I set that up, where electricians usually go wrong, and what it looks like when it is working.',
    ],
    sections: [
      {
        heading: 'What electrical customers search for',
        bullets: [
          'Urgent: "electrician near me", "emergency electrician", "no power", "safety switch tripping". Decided by the profile and the Call button.',
          'Repairs and small jobs: "power point installation", "ceiling fan installation", "smoke alarm replacement". Service pages with clear scope.',
          'Upgrades: "switchboard upgrade", "rewiring old house", "3 phase power". Research-heavy; wants process, photos and a licence.',
          'Growth categories: "EV charger installer", "solar electrician", "battery installation". Newer searches with less competition and bigger jobs.',
          'Compliance: "electrical safety certificate", "test and tag", "electrical inspection". Wants the licence number up front.',
        ],
      },
      {
        heading: 'The profile set-up for "electrician near me"',
        numbered: [
          'Primary category "Electrician". Secondaries where true: "Solar energy contractor", "Electric vehicle charging station contractor", "Electrical installation service".',
          'Services in customer language: switchboard upgrades, safety switches, power points, lighting, ceiling fans, smoke alarms, rewiring, EV chargers, solar, data cabling, test and tag.',
          'Licence number in the description and on the website, because it is the first thing a careful customer checks.',
          'Hours that match reality, and a clear line on after-hours work.',
          'Photos: switchboards before and after, installs, the van, the team. Dated and real.',
        ],
      },
      {
        heading: 'The pages an electrical website needs',
        paragraphs: [
          'The planned searches are won on the website, so the service pages carry more weight for electricians than for most trades. Each big job type gets a page that explains what is involved, how long it takes, what can go wrong in older Gold Coast houses, and what the customer should have ready. Suburb pages let the profile reach beyond the pin, and the estates matter: a page about EV chargers in Coomera reads differently from one about rewiring in Southport.',
        ],
        bullets: [
          'Switchboard upgrades, safety switches and smoke alarms (the compliance trio)',
          'EV charger installation, with the brands you fit and the home set-up questions',
          'Solar and battery, if licensed, with the accreditation shown',
          'Rewiring and renovations, with photos of real jobs',
          'Suburb pages for your home suburb and the five you want most',
        ],
      },
      {
        heading: 'Reviews and the safety story',
        paragraphs: [
          'Electrical customers care about safety and tidiness more than speed, and their reviews should say so. The request after each job asks for the work and the suburb, and the replies name the job back. Over time the review stream reads as "upgraded our switchboard in Upper Coomera, tidy and explained everything", which is exactly what the next searcher wants to read and exactly the relevance Google rewards.',
        ],
      },
      {
        heading: 'Where electricians usually lose',
        bullets: [
          'The business name padded with "24 Hour" or the suburb. A policy breach, and a reason for suspension.',
          'A primary category of "Contractor" or "Electrical engineer" instead of "Electrician".',
          'A website with one page that lists twenty services in a bullet list and explains none.',
          'No licence number anywhere online.',
          'Solar and EV work done but never named, so the fastest-growing searches go to someone else.',
        ],
      },
    ],
    table: {
      caption: 'Which channel wins each electrical search',
      head: ['Search', 'Decided mostly by', 'What to fix first'],
      rows: [
        ['"electrician near me"', 'Profile: category, reviews, distance', 'Category, services, review rhythm'],
        ['"switchboard upgrade [suburb]"', 'Website page plus profile', 'A real switchboard page, suburb pages'],
        ['"EV charger installer"', 'Website page, secondary category', 'EV page, category, photos of installs'],
        ['"electrical safety certificate"', 'Website, licence visibility', 'Compliance page with the licence number'],
      ],
    },
    checklist: {
      title: 'The electrician profile check',
      items: [
        'Primary category is "Electrician"',
        'Licence number on the profile and every web page',
        'Services list names switchboards, smoke alarms, EV and solar if you do them',
        'A review in the last two weeks naming a job and a suburb',
        'Photos of switchboards and installs from the last three months',
        'Service area matches where you actually go',
      ],
    },
    faqs: [
      { question: 'How is SEO for electricians different from plumbers?', answer: 'More of the valuable searches are planned rather than urgent, so the website carries more weight. The profile still decides "electrician near me"; the service pages decide switchboards, EV chargers and solar.' },
      { question: 'Should I have a separate page for EV chargers?', answer: 'Yes, if you install them. It is one of the fastest-growing electrical searches and most electricians have not written the page yet.' },
      { question: 'Do I need to show my licence number online?', answer: 'Yes. It is the first thing careful customers check, it is required in advertising in Queensland, and it helps AI assistants treat you as a real licensed business.' },
      { question: 'How long until the phone rings more?', answer: 'Urgent searches move in weeks once the profile is right. Planned searches build over a few months as the pages rank. I plan for 90 days.' },
      { question: 'Can one profile cover domestic and commercial work?', answer: 'Yes, with the services and pages split clearly. If commercial becomes half the business, a second profile at a real commercial premises can make sense.' },
      { question: 'Do you work with electricians outside the Gold Coast?', answer: 'Yes. The method is the same anywhere, and I do it white-label for a trades agency with clients in several states.' },
    ],
    related: tradeLinks,
  },

  // ------------------------------------------------------------------ Builders
  {
    slug: 'seo-for-builders',
    group: 'trade',
    name: 'SEO for Builders',
    primaryKeyword: 'SEO for builders',
    secondaryKeywords: ['builder SEO', 'renovation builder Google ranking', 'home builder local SEO', 'get building leads from Google'],
    title: 'SEO for Builders | Fewer Searches, Bigger Jobs: Winning Google for Renovations and New Builds',
    description:
      'SEO for builders and renovation companies: how building searches differ from emergency trades, the project pages and photos that win quotes, the Google Business Profile set-up for builders, and the suburb pages that bring in the right jobs. Call me.',
    eyebrow: 'SEO for builders',
    h1: 'SEO for builders',
    intro: [
      'A builder’s SEO is the opposite of a plumber’s. Nobody searches "builder near me" in a panic at 9pm. They search "renovation builder Gold Coast" on a Sunday afternoon, then "kitchen renovation cost", then "deck builder Upper Coomera", over weeks, while they decide whether to spend eighty thousand dollars with a stranger. There are far fewer searches, every one is worth more, and the website does most of the convincing.',
      'That changes what to build. The Maps pack still matters, because it is where the shortlist starts, but a builder wins on the pages behind it: real projects, real photos, a clear process, the licence, and proof that you have done this exact kind of job in this exact kind of house. Here is how I set it up.',
    ],
    sections: [
      {
        heading: 'What building customers search, and when',
        bullets: [
          'Discovery: "renovation builder [suburb]", "home builder Gold Coast", "builders near me". The Maps pack and the first page; this is where the shortlist forms.',
          'Project type: "kitchen renovation builder", "second storey addition", "granny flat builder", "deck builder", "bathroom renovation". Wants a page per project type.',
          'Cost and process: "how much does a renovation cost on the Gold Coast", "how long does a second storey take". Wants honest ranges and a process, not "contact us for a quote".',
          'Trust: "[your business] reviews", "QBCC licence check". Wants the licence, insurance, and reviews that name finished projects.',
        ],
      },
      {
        heading: 'The profile set-up for a builder',
        numbered: [
          'Primary category that matches the main work: "Home builder", "Remodeler" (Google’s word for renovation builder), "Construction company" for commercial. Not "Contractor".',
          'Services named by project: kitchen renovations, bathroom renovations, extensions, second storeys, decks and pergolas, granny flats, new homes, knock-down rebuilds.',
          'A description that says what you build, where, and your QBCC licence number.',
          'Photos organised by project, with before and after, and new ones every month while jobs are running.',
          'Reviews from finished projects, requested at handover when the client is happiest.',
        ],
      },
      {
        heading: 'The pages a builder’s website needs',
        paragraphs: [
          'Project pages are the whole game. One page per project type, each with three or four real projects on it: the brief, the suburb, the problem with the house, what you did, how long it took, and photos. A general "our services" list does not win an eighty-thousand-dollar job; a page that shows you have rebuilt three Queenslanders in Beenleigh does.',
        ],
        bullets: [
          'A page per project type, with real projects and photos',
          'A process page: first call, site visit, concept, fixed price, build, handover, with rough timelines',
          'An honest cost guide: ranges for the common jobs on the Gold Coast, and what moves the price',
          'Suburb pages for the areas you build in, with the housing stock named: post-war in Southport, new estates in Pimpama, acreage in Willow Vale',
          'Licence, insurance, warranty and the owner on every page',
        ],
      },
      {
        heading: 'Reviews that win building jobs',
        paragraphs: [
          'A builder gets fewer reviews than a plumber, so each one has to work harder. Ask at handover, in person, and follow with the link. Ask the client to say what was built, where, and what it was like to live through. A review that says "second storey in Coomera, on time, kept the site clean, communicated every week" answers the three fears every renovation client has.',
        ],
      },
      {
        heading: 'Where builders usually lose',
        bullets: [
          'A beautiful website with no suburb or project type in the text, so Google cannot tell what you build or where.',
          'Photos in a gallery with no captions, which neither Google nor an AI assistant can read.',
          'No cost information at all, so the researcher leaves for a competitor who gave a range.',
          'A profile category of "Contractor" competing against "Home builder".',
          'Reviews that stopped when the last big job finished.',
        ],
      },
    ],
    table: {
      caption: 'Plumber versus builder: what changes',
      head: ['', 'Plumber', 'Builder'],
      rows: [
        ['Typical search', '"plumber near me", tonight', '"renovation builder [suburb]", over weeks'],
        ['Where it is won', 'Maps pack, Call button', 'Shortlist from Maps, decided on the website'],
        ['Reviews', 'Volume and recency', 'Fewer, each one detailed'],
        ['Pages that matter', 'Service and suburb pages', 'Project pages with real jobs, process, cost guide'],
      ],
    },
    checklist: {
      title: 'The builder website check',
      items: [
        'Does each project type have its own page with real projects on it?',
        'Does every photo have a caption that names the job and the suburb?',
        'Is there a process page with timelines?',
        'Is there any cost information at all?',
        'Is the QBCC licence number on every page?',
        'Did you get a review at your last handover?',
      ],
    },
    faqs: [
      { question: 'Is local SEO worth it for a builder with a long sales cycle?', answer: 'More than for most trades. Each job is large, the searches are deliberate, and a website that answers the research questions wins jobs the Maps pack alone never would.' },
      { question: 'Should I put prices on my website?', answer: 'Ranges, yes. A customer who cannot find any idea of cost leaves. A page that says what moves the price on the Gold Coast builds trust and filters out people who were never going to proceed.' },
      { question: 'How many project photos do I need?', answer: 'Three or four finished projects per project type, with captions, is enough to start. Add one every time a job finishes.' },
      { question: 'What category should a renovation builder use on Google?', answer: 'Google calls it "Remodeler". It feels American but it is the category Google ranks for renovation searches. "Home builder" for new builds, and both if you do both.' },
      { question: 'How long does builder SEO take?', answer: 'Longer than an emergency trade: the searches are fewer and the pages have to rank, not just the profile. Expect a few months before enquiries change, and a year before the pages are fully pulling.' },
      { question: 'Do you work with builders outside the Gold Coast?', answer: 'Yes. The method is the same anywhere, and the housing stock on the suburb pages is the only thing that changes.' },
    ],
    related: tradeLinks,
  },
];
