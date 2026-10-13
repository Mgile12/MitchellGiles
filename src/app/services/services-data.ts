// Topical-authority service pages. Each entry is one URL at the site root (the URLs Mitchell specified),
// listed on /services/ and rendered by ServicePageContent. Copy is Mitchell's voice: first person, Australian
// English, no prices, no guarantees.
import { TRADE_PAGES } from './services-data-trades';

interface ServiceSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  numbered?: string[];
}

export interface ServicePage {
  slug: string;
  group: 'core' | 'supporting' | 'trade';
  name: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  intro: string[];
  sections: ServiceSection[];
  table?: { caption: string; head: string[]; rows: string[][] };
  checklist?: { title: string; items: string[] };
  faqs: { question: string; answer: string }[];
  related: { label: string; href: string }[];
}

const CORE_LINKS = [
  { label: 'Local SEO', href: '/best-local-seo-expert-in-gold-coast' },
  { label: 'Google Business Profile optimisation', href: '/google-business-profile-gold-coast' },
  { label: 'AI Search (GEO)', href: '/ai-search-geo-gold-coast' },
];

export const SERVICE_PAGES: ServicePage[] = [
  // ------------------------------------------------------------------ CORE 3: AI Search (GEO)
  {
    slug: 'ai-search-geo-gold-coast',
    group: 'core',
    name: 'AI Search (GEO)',
    primaryKeyword: 'AI search optimisation Gold Coast',
    secondaryKeywords: ['generative engine optimisation', 'GEO', 'rank in ChatGPT', 'Google AI Overviews', 'get recommended by AI'],
    title: 'AI Search Optimisation Gold Coast (GEO) | Get Named When People Ask ChatGPT Who to Call',
    description:
      'AI search optimisation (GEO) for Gold Coast businesses: the work that gets a local business named when someone asks ChatGPT, Gemini, Copilot or Google AI who to call. Same local signals as Maps, tuned for how the models choose. Call me.',
    eyebrow: 'AI Search (GEO)',
    h1: 'AI search optimisation on the Gold Coast',
    intro: [
      'A growing share of your customers no longer type "plumber Coomera" into Google and scan the Maps pack. They ask. They ask ChatGPT, they ask Gemini, they ask Copilot, or they ask Google and read the AI Overview at the top instead of the ten blue links. The answer names two or three businesses. If yours is not one of them, that customer never knew you existed.',
      'Generative engine optimisation, GEO, is the work of becoming one of the businesses the models name. It is not magic and it is not separate from local SEO. The models build their answers from the same public record Google Maps uses: your Business Profile, your website, your reviews, the directories that list you, the pages that mention you. What changes is how that record is read, and what tips the decision.',
      'I have had enquiries land from ChatGPT recommending MRG Marketing by name for a service I offer. Below is what I do to make that happen for Gold Coast and Brisbane businesses, and what it cannot do.',
    ],
    sections: [
      {
        heading: 'How an AI answer picks a local business',
        paragraphs: [
          'When someone asks an AI assistant for a recommendation in a specific place, the model does three things quickly. It works out what kind of business is being asked for and where. It pulls in whatever it can read about businesses of that kind in that place: web pages, directory profiles, review snippets, Maps data where it has access. Then it writes an answer that names the businesses it is most confident are real, relevant and reputable.',
          'Confidence is the key word. A model will not name a business it is not sure about. It becomes sure when the same facts show up in several independent places and agree with each other: the name, the suburb, the services, the phone number, the kind of work, the reviews. It becomes unsure when the record is thin, contradictory or spread across old brand names and dead pages.',
        ],
        bullets: [
          'Entity clarity: one business name, one address, one phone number, everywhere',
          'Topical clarity: pages and a profile that plainly say what you do and where',
          'Corroboration: directories, reviews, mentions and case studies that agree with your own site',
          'Readability: facts stated in plain HTML text, not buried in images, sliders or PDFs',
          'Recency: signs the business is alive this month, not in 2021',
        ],
      },
      {
        heading: 'What GEO shares with local SEO, and where it differs',
        paragraphs: [
          'Most of GEO is local SEO done thoroughly. A complete Google Business Profile, a website with a page per service and per suburb, consistent citations, steady reviews: those are the inputs for both. If you are already in the top three on Maps for your searches, you are most of the way there.',
          'The differences are in emphasis. Maps leans on distance and the profile. AI answers lean on what can be read and cross-checked, so the website and third-party mentions carry more weight. Maps rewards one strong profile. AI answers reward a business that is described the same way in five places. Maps does not care whether your facts are in a table; a model finds a table easier to quote than a hero image.',
        ],
      },
      {
        heading: 'What I do on an AI search engagement',
        numbered: [
          'Baseline. I ask the main assistants the questions your customers ask, in fresh sessions, with the location set, three times each. I record who gets named, who gets cited and what they say about you, including mistakes.',
          'Entity clean-up. Business name, address, phone, categories and services made identical across your Business Profile, website, Bing Places, Apple Business Connect, the main Australian directories and your social profiles. Old brand names and dead URLs redirected or retired.',
          'Plain-text facts. Every page that matters gets its key facts in HTML text: what you do, where, for whom, since when, what it costs to find out more. Structured data (LocalBusiness, Service, FAQ, Person) describing the same facts.',
          'Proof the models can read. Case studies with dates, numbers and limitations in text, not screenshots alone. Reviews that mention the service and the suburb. Third-party pages that name you for the right thing.',
          'Question pages. The questions customers actually ask an assistant, answered on your site in your words, so the model has a source to quote.',
          'Re-test monthly. Same questions, same method, compared with the baseline. Fix the pages that miss.',
        ],
      },
      {
        heading: 'What the assistants are reading',
        paragraphs: [
          'Each assistant draws on a slightly different record, which is why the entity clean-up goes wider than Google. Copilot and the Bing-backed tools lean on the Bing index and Bing Places. Google AI Overviews and AI Mode draw on the normal Google index and your Business Profile. ChatGPT with search on reads live web pages and tends to favour sources that state facts plainly and are corroborated elsewhere. Perplexity cites its sources openly, which makes it the easiest to diagnose.',
        ],
      },
      {
        heading: 'What this cannot do',
        bullets: [
          'It cannot make a model name a business with no reviews, no website and a half-finished profile. The inputs have to exist.',
          'It cannot guarantee a mention. The models change, the answers vary between sessions, and the comparison is a sampled rate, not a rank.',
          'It does not replace Maps. Most local searches still go through Google, and the Maps pack still sends most of the calls.',
        ],
      },
    ],
    table: {
      caption: 'The same signal, read two ways',
      head: ['Signal', 'What Google Maps does with it', 'What an AI assistant does with it'],
      rows: [
        ['Business Profile', 'Primary ranking input, with distance', 'One source among several; must agree with the website'],
        ['Website service pages', 'Relevance for the profile and organic rankings', 'The main thing it reads and quotes; plain text wins'],
        ['Reviews', 'Prominence and click-through', 'Evidence of reputation; the words in reviews get read'],
        ['Directories and citations', 'Consistency check', 'Corroboration: more agreeing sources, more confidence'],
        ['Case studies with numbers', 'Little direct effect', 'Strong: specific, dated claims the model can cite'],
      ],
    },
    checklist: {
      title: 'Ten-minute AI visibility check for your own business',
      items: [
        'Open ChatGPT in a fresh session, set your suburb, and ask "Who should I call for [your service] in [suburb]?" three times. Are you named? Cited?',
        'Google your business name plus your suburb. Does every result show the same name, address and phone?',
        'Open your main service page. Could a stranger tell in ten seconds what you do, where and for whom, from the text alone?',
        'Read your last ten reviews. Do any of them say the service and the suburb in words?',
        'Search Bing for your business. Is there a Bing Places listing, and is it right?',
      ],
    },
    faqs: [
      { question: 'What is GEO, in plain words?', answer: 'Generative engine optimisation: the work of getting your business named when someone asks an AI assistant for a recommendation. It is mostly local SEO done thoroughly, with extra care for the facts the models read and cross-check.' },
      { question: 'Is AI search replacing Google Maps for local businesses?', answer: 'Not yet. Most local searches still run through Google and the Maps pack still sends most calls. AI answers are a growing second channel, and the businesses in it now are the ones with a clean record and real proof.' },
      { question: 'Can you guarantee my business will appear in ChatGPT?', answer: 'No, and nobody honest can. Answers vary between sessions and the models change. What I can do is measure the rate at which you are named before and after the work, with the same questions and method, and show you the change.' },
      { question: 'Do I need a separate website or special files for AI?', answer: 'No. Google says plainly that no special AI file is needed for its AI features, and the other assistants read normal web pages. You need the facts stated in text, structured data that matches, and corroboration elsewhere.' },
      { question: 'How is this different from the local SEO you already do?', answer: 'Same foundation, different emphasis. GEO goes wider on citations (Bing, Apple, directories), puts more weight on readable proof and third-party mentions, and adds a monthly test against the assistants themselves.' },
      { question: 'How long does it take?', answer: 'The clean-up and the proof pages take a few weeks. Being named is a rate that climbs as the record thickens. I baseline on day one and compare at 30, 60 and 90 days.' },
      { question: 'Does this work for a tradie or only for bigger businesses?', answer: 'It works best for exactly the businesses that are usually ignored by it: local trades and services with real reviews and a clear suburb. A plumber with 80 reviews and a tidy record is easy for a model to name with confidence.' },
      { question: 'What do you need from me to start?', answer: 'Access to the Business Profile and the website, your list of services and suburbs, and the questions customers ask you on the phone. The rest I pull from the public record.' },
    ],
    related: [CORE_LINKS[0], CORE_LINKS[1], { label: 'Local citations and directory listings', href: '/local-citations-gold-coast' }, { label: 'Review management', href: '/review-management-gold-coast' }, { label: 'Case studies', href: '/case-studies' }],
  },

  // ------------------------------------------------------------------ SUPPORTING: SEO for tradies
  {
    slug: 'seo-for-tradies-gold-coast',
    group: 'supporting',
    name: 'SEO for Tradies',
    primaryKeyword: 'SEO for tradies Gold Coast',
    secondaryKeywords: ['tradie SEO', 'local SEO for trades', 'Google Maps for tradies', 'get more trade jobs from Google'],
    title: 'SEO for Tradies Gold Coast | Get the Phone Ringing from Google Maps',
    description:
      'SEO for tradies on the Gold Coast and in Brisbane: Google Business Profile, a page per service and suburb, reviews on a schedule, and the weekly work that keeps a trade in the top 3 on Maps. Real numbers from plumbers. Call me.',
    eyebrow: 'SEO for tradies',
    h1: 'SEO for tradies on the Gold Coast',
    intro: [
      'Most of my clients are trades. Plumbers, electricians, builders, detailers, fencers, air-con installers. Trades are the businesses local SEO was made for, because the customer is a few kilometres away, has a problem right now, and searches on a phone standing in the kitchen with water on the floor. Google shows three businesses. One of them gets the call.',
      'Trade SEO is also where the worst advice lives. Agencies sell tradies five-page websites, a blog nobody reads and a monthly report full of impressions. None of that makes the phone ring. What makes the phone ring is being in the Maps pack for the searches that happen in your suburbs, with a profile that looks like a business someone would trust at 7pm.',
      'This page is how I do it, with the numbers from plumbers I do it for.',
    ],
    sections: [
      {
        heading: 'Why trades win or lose on Google Maps, not the website',
        paragraphs: [
          'For a trade, the Maps pack at the top of the results is the whole game. It appears above every website, it shows the phone number, and on a mobile the Call button is one tap. Two plumbers I work for took 208 calls from Google in a quarter, and almost every one of them came from the profile, not from a website visit.',
          'The website still matters, but for a different reason: it is what the profile stands on. Google reads the site to confirm what the business does and where. A trade with a two-paragraph home page and no suburb pages is asking Google to guess.',
        ],
      },
      {
        heading: 'The five things that decide a tradie’s Maps position',
        numbered: [
          'Primary category. "Plumber", not "Contractor". "Electrician", not "Business service". The single most common thing I fix.',
          'Services list. Every service you do, named the way customers name it: blocked drains, hot water repairs, switchboard upgrades, not "general plumbing".',
          'Reviews, recently and steadily. Not 200 reviews from 2019. Ten a month, every month, mentioning the job and the suburb.',
          'Photos of real work. Vans, jobs, the team. Stock photos of a smiling model with a spanner do nothing.',
          'A website that names the suburbs. One page per service, one page per suburb you want to be found in.',
        ],
      },
      {
        heading: 'Service-area businesses: the tradie problem Google created',
        paragraphs: [
          'Most trades work from home or a shed and go to the customer. Google calls that a service-area business and hides the address. It ranks you from where the pin is, which is usually your house, and the further a searcher is from that pin the harder it gets. You cannot fix that with a fake address; Google suspends profiles for it, and I have seen the damage.',
          'What you can do is set the service area honestly, build a page for each suburb that names it properly, win reviews from customers in those suburbs, and watch the ranking grid. A scan every month shows exactly how far your pin reaches and which suburbs need their own page.',
        ],
      },
      {
        heading: 'What the work looks like, week to week',
        bullets: [
          'Monday: review requests sent to last week’s customers; any new review answered.',
          'A post with a photo of a real job, with the service and suburb in the caption.',
          'Services, categories and hours checked against what the business is actually doing this season.',
          'One website improvement: a new suburb page, a service page expanded, a dead link fixed.',
          'Monthly: a 7 by 7 ranking scan for the main search, compared with last month, and a call about what moved.',
        ],
      },
      {
        heading: 'What to expect, by trade',
        paragraphs: [
          'Emergency trades (plumbers, electricians, locksmiths) see the fastest return because the search happens at the moment of need and the Call button closes it. Project trades (builders, landscapers, pool builders) see a slower, bigger return: fewer searches, bigger jobs, and the website does more of the convincing. Either way the Maps pack is where it starts.',
        ],
      },
    ],
    table: {
      caption: 'Two plumbers, three months before versus the latest three months',
      head: ['', 'Calls before', 'Calls after', 'Website clicks before', 'Website clicks after'],
      rows: [
        ['Gold Coast plumber', '43', '118', '83', '185'],
        ['Logan plumber', '36', '90', '74', '144'],
      ],
    },
    checklist: {
      title: 'The tradie profile check',
      items: [
        'Is the primary category your actual trade?',
        'Does the services list have at least ten real services?',
        'Did you get a review in the last 14 days?',
        'Are the last five photos of real jobs, with dates in the last three months?',
        'Does your website have a page that names your home suburb and the three next to it?',
        'Is your phone number identical on the profile, the website and your van?',
      ],
    },
    faqs: [
      { question: 'I am a one-man band. Is SEO worth it for me?', answer: 'It is worth more for you than for a big firm, because one extra job a week changes your year. A finished profile and a few suburb pages are the cheapest leads a sole trader will ever get.' },
      { question: 'Do I need a website, or is the Google profile enough?', answer: 'You can get into the pack on the profile alone. The website keeps you there and lets you rank in suburbs away from your pin. A simple site with a page per service and per suburb is enough.' },
      { question: 'How many reviews do I need?', answer: 'Fewer than you think, as long as they keep coming. Steady recent reviews beat a big old pile. The habit matters more than the number.' },
      { question: 'Can I rank in suburbs I do not live in?', answer: 'Yes, within reason. Service area set properly, a page for the suburb, reviews from customers there. The ranking scan shows how far you reach and where the next page should be.' },
      { question: 'My competitor has a fake second address. Should I do that?', answer: 'No. Google suspends profiles for it and reinstatement can take months with the phone silent. Report it if it is obvious, and beat them properly.' },
      { question: 'How long until I see more calls?', answer: 'For an emergency trade with a decent base of reviews, weeks. For a project trade, a few months. I plan for 90 days and tell you on the call what is realistic for your trade and area.' },
      { question: 'Do you only work with plumbers?', answer: 'No. Plumbers are the clearest numbers I can show, but the method is the same for electricians, builders, detailers, pest, air-con, landscaping and most other trades.' },
    ],
    related: [{ label: 'SEO for plumbers', href: '/seo-for-plumbers' }, { label: 'SEO for electricians', href: '/seo-for-electricians' }, { label: 'SEO for builders', href: '/seo-for-builders' }, CORE_LINKS[1], { label: 'Google Maps ranking', href: '/google-maps-ranking-gold-coast' }, { label: 'Case studies', href: '/case-studies' }],
  },

  // ------------------------------------------------------------------ SUPPORTING: Google Maps ranking
  {
    slug: 'google-maps-ranking-gold-coast',
    group: 'supporting',
    name: 'Google Maps Ranking',
    primaryKeyword: 'Google Maps ranking Gold Coast',
    secondaryKeywords: ['rank higher on Google Maps', 'Maps pack', 'local 3-pack', 'ranking grid', 'Local Falcon scan'],
    title: 'Google Maps Ranking Gold Coast | How the Top 3 Is Decided, and How to Get There',
    description:
      'How Google Maps ranking works on the Gold Coast: the three factors, why your position changes street by street, how a ranking grid scan measures it, and what moves a business into the top 3. With real before-and-after grids. Call me.',
    eyebrow: 'Google Maps ranking',
    h1: 'Google Maps ranking on the Gold Coast',
    intro: [
      'Ask a business owner where they rank on Google Maps and they will tell you a number. Ask them from where, and the conversation changes. Maps ranking is not one position. It is a different position at every point on the map, decided freshly for every search by where the person searching is standing.',
      'That is why a business can be number one from its own front door and invisible three kilometres away, and why "we rank first" means little without a grid. This page explains how the ranking is decided, how I measure it, and what actually moves it, with the scans to show it.',
    ],
    sections: [
      {
        heading: 'The three things Google weighs',
        paragraphs: [
          'Google says it ranks local results on relevance, distance and prominence, and that is honest. Relevance is whether your profile and website match the search: the right primary category, the services listed, the words on your pages. Distance is how far the profile’s pin is from the searcher, or from the place named in the search. Prominence is how well known the business looks: reviews, their recency and content, mentions on other sites, and the strength of the website.',
          'You cannot change distance except by moving. You can change relevance in an afternoon and prominence over a few months. Most businesses outside the top three have a relevance problem first, which is the good news, because it is the fastest to fix.',
        ],
      },
      {
        heading: 'Why your rank changes street by street',
        paragraphs: [
          'Because distance is one of the three factors, the result shifts as the searcher moves. On the Gold Coast, with businesses strung along the M1 and the coast, this matters more than in a compact city. A detailer in Nerang might own Nerang and Carrara and lose Robina to a competitor two kilometres closer. Neither business is "ranked first"; each has a territory.',
          'The job is to make your territory as big as the service area you actually work, and to know where its edges are.',
        ],
      },
      {
        heading: 'How a ranking grid scan works',
        paragraphs: [
          'A grid scan runs the same search from a lattice of points around the business, usually 7 by 7 or 9 by 9, spaced a kilometre or so apart, and records your position at each point. The result is a heatmap: green where you are in the top three, yellow where you are close, red where you are not on the first page. Two scans on the same grid, weeks apart, show exactly what moved.',
          'I use Local Falcon for this. The case studies on this site are those scans: a Gold Coast plumber in the top three at 40 of 49 points in July and 46 of 49 in October; a Perth plumber at number one on 5 of 49 points, then all 49 five weeks later. The numbers under each grid are the average position across the grid and the share of points in the top three.',
        ],
      },
      {
        heading: 'What moves a business into the top three',
        numbered: [
          'The right primary category and a complete services list. This alone has moved profiles from page two to the pack in days.',
          'A website that says the same thing as the profile, with a page per service and per suburb.',
          'Reviews that keep coming and mention the service and the suburb in words.',
          'Photos and posts that prove the business is alive this month.',
          'Citations that agree: the same name, address and phone on the directories Google trusts.',
          'Time, and the weekly work. Rankings drift the moment the work stops.',
        ],
      },
      {
        heading: 'Things that do not work, and some that get you suspended',
        bullets: [
          'Keyword stuffing the business name ("Joe’s Plumbing Gold Coast Emergency 24/7"). A violation, and competitors report it.',
          'A fake address or a virtual office to get a pin somewhere better. Suspension, and reinstatement can take months.',
          'Buying reviews. Google is better at spotting them than people think, and the penalty outlasts the gain.',
          'Spamming posts with the same keyword. No effect on rank; posts help by proving activity, not by repetition.',
        ],
      },
    ],
    table: {
      caption: 'Two grids, same search, same centre, weeks apart',
      head: ['Business', 'Search', 'Before', 'After', 'Days between'],
      rows: [
        ['Gold Coast plumber', '"best plumber" + suburb', 'Top 3 at 40 of 49 points, avg 1.82', 'Top 3 at 46 of 49, avg 1.45', '65'],
        ['Perth plumber', '"plumber" + suburb', 'Number 1 at 5 of 49 points, avg 1.94', 'Number 1 at 49 of 49, avg 1.00', '35'],
        ['Polish Hub Marine Detailing', 'boat detailing', 'Outside top 10 on most of the grid', 'Top 3 on most of the grid', '2'],
      ],
    },
    checklist: {
      title: 'Read your own Maps position properly',
      items: [
        'Search your main service from your business address, then from a friend’s house three suburbs away. Note both.',
        'Check the primary category on your profile against the top three competitors. If theirs is more specific, that is the gap.',
        'Count the services on your profile. Fewer than ten is a relevance problem.',
        'Look at the date of your newest review and newest photo. Older than a month is a prominence problem.',
        'Get a grid scan before changing anything, so the after means something.',
      ],
    },
    faqs: [
      { question: 'How do I check my real Google Maps ranking?', answer: 'Not by searching from your own desk. A grid scan runs the search from dozens of points around you and shows the position at each one. That is the only honest answer to "where do we rank".' },
      { question: 'How often should the grid be scanned?', answer: 'Monthly on the same grid and the same search term, so the comparison is like for like. Weekly scans just show noise.' },
      { question: 'Why did my ranking drop when nothing changed?', answer: 'Something changed: a competitor finished their profile, got a run of reviews, or Google adjusted. Rankings drift. The weekly work is what holds a position, which is why I do not do one-off projects.' },
      { question: 'Does the website affect Maps ranking?', answer: 'Yes, more than most people think. Google reads the site linked from the profile to confirm relevance. A site with a page per service and suburb lifts the profile; a one-page site drags it.' },
      { question: 'Can a service-area business rank far from its pin?', answer: 'Up to a point. Suburb pages, reviews from those suburbs and a correctly set service area stretch the territory. Past that, the only honest answer is a second real location.' },
      { question: 'How long to reach the top 3?', answer: 'Days to months, depending on the category and the competition. The case studies show two and eleven days for two Gold Coast businesses whose relevance was the problem. Contested categories take the full 90 days or more.' },
      { question: 'Is Google Maps ranking the same as local SEO?', answer: 'Maps ranking is the biggest part of local SEO, but local SEO also covers organic results, citations, reviews and the website. This site treats them as one job.' },
    ],
    related: [CORE_LINKS[1], CORE_LINKS[0], { label: 'Local SEO audit', href: '/local-seo-audit-gold-coast' }, { label: 'Review management', href: '/review-management-gold-coast' }, { label: 'Case studies', href: '/case-studies' }],
  },

  // ------------------------------------------------------------------ SUPPORTING: Review management
  {
    slug: 'review-management-gold-coast',
    group: 'supporting',
    name: 'Review Management',
    primaryKeyword: 'Google review management Gold Coast',
    secondaryKeywords: ['get more Google reviews', 'review requests', 'respond to reviews', 'remove fake reviews', 'review strategy for local business'],
    title: 'Google Review Management Gold Coast | More Reviews, Better Replies, and What To Do About Bad Ones',
    description:
      'Google review management for Gold Coast businesses: a request system that gets reviews every week, replies that help ranking, and the right way to handle unfair or fake reviews. Part of the local SEO work that keeps a business in the top 3 on Maps. Call 0474 870 535.',
    eyebrow: 'Review management',
    h1: 'Google review management on the Gold Coast',
    intro: [
      'Reviews are the one ranking factor your customers can see. They decide whether someone taps your listing or the one below it, and they feed Google’s view of how prominent you are. They are also the part of local SEO that most businesses leave to chance: a flurry when the business opened, then silence, then a panic when a one-star lands.',
      'Review management is turning that into a system. Reviews asked for after every job, replies written the same day, the words in reviews working for your rankings, and a calm process for the unfair ones. This is how I run it for clients, and why it matters more on the Gold Coast than almost anywhere.',
    ],
    sections: [
      {
        heading: 'Why recent reviews beat a big old pile',
        paragraphs: [
          'Google weighs review recency and velocity, not just the total. A business with 60 reviews and three new ones a month usually outranks one with 300 reviews and nothing since 2023, because the second looks like it might have closed. Customers read it the same way: the first thing most people check is the date of the newest review.',
          'The target is not a number. It is a rhythm. One or two reviews a week, every week, mentioning the job and the place.',
        ],
      },
      {
        heading: 'The request system that actually gets reviews',
        numbered: [
          'Ask at the right moment: when the job is done and the customer is pleased, not three weeks later in a newsletter.',
          'Make it one tap. A direct link to the review form, sent by text from the business number, with the customer’s name in the message.',
          'Say what to write, without scripting it: "If you could mention the job and the suburb, it helps other people find us."',
          'Follow up once, three days later, if nothing lands. Then stop.',
          'Track who was asked and who reviewed, so nobody is asked twice and the rate can be measured.',
        ],
      },
      {
        heading: 'Why the words in reviews matter for ranking',
        paragraphs: [
          'Google reads reviews. A review that says "fixed our blocked drain in Pimpama the same afternoon" tells Google three things your profile might not: the service, the suburb and the speed. Across fifty reviews, those words add up to relevance for searches you never wrote a page for. That is why the request message nudges customers toward the job and the place, and why generic "great service" reviews, while welcome, do less.',
        ],
      },
      {
        heading: 'Replies: what to say and why it counts',
        bullets: [
          'Reply to every review within a day. Google shows the reply, and customers read them to see how you handle people.',
          'Thank the reviewer by name, name the job and the suburb back, and keep it to three sentences.',
          'For a negative review: acknowledge, state the facts briefly, take it offline with a direct number. Never argue in public.',
          'Replies are written in the owner’s voice. If I write them, they sound like you, and you see them first.',
        ],
      },
      {
        heading: 'Fake, unfair and competitor reviews',
        paragraphs: [
          'Google removes reviews that break its policies: no real experience, conflict of interest, spam, off-topic. It does not remove reviews just because they are unfair. The process is to flag the review with the specific policy it breaks, follow up through the Business Profile support channel with evidence, and reply publicly in the meantime so other readers see your side. Most honest removals take one to three weeks. Some never happen, and the answer then is to bury it with real reviews.',
        ],
      },
      {
        heading: 'What not to do',
        bullets: [
          'Do not buy reviews or swap them with other businesses. Google detects patterns and the penalty is a filtered profile.',
          'Do not gate reviews, asking happy customers for Google and unhappy ones for a private form. It is against policy.',
          'Do not offer discounts for reviews. Also against policy, and it shows in the wording.',
          'Do not let staff review the business. Conflict of interest, and easy to spot.',
        ],
      },
    ],
    table: {
      caption: 'What a review contains and what it does',
      head: ['Review says', 'Customer reads it as', 'Google reads it as'],
      rows: [
        ['"Great service, thanks"', 'Fine, but vague', 'Positive sentiment, nothing else'],
        ['"Fixed our hot water in Coomera same day"', 'Specific, believable, recent', 'Service + suburb + speed: relevance'],
        ['"Second time we have used them"', 'Trust', 'Repeat business, prominence'],
        ['Owner reply naming the job', 'A business that pays attention', 'Engagement, more words to read'],
      ],
    },
    checklist: {
      title: 'The review health check',
      items: [
        'Newest review in the last 14 days?',
        'At least one review a week over the last two months?',
        'Every review replied to?',
        'Do half your recent reviews mention a service or a suburb?',
        'Is the review link on your invoice, your SMS template and your email signature?',
        'Any review that breaks policy still sitting unflagged?',
      ],
    },
    faqs: [
      { question: 'How many Google reviews does a Gold Coast business need?', answer: 'Enough to be credible against the top three competitors in your category, and then a steady rhythm. The rhythm matters more than the total.' },
      { question: 'Can you remove a bad Google review?', answer: 'Only if it breaks Google’s policies, and only Google can remove it. I flag it correctly, follow it up with evidence, and write the public reply while it is pending. Unfair but policy-compliant reviews stay, and get outweighed.' },
      { question: 'Is it OK to text customers asking for a review?', answer: 'Yes, as long as you do not offer anything for it and you ask everyone, not just the happy ones. A text from the business number with a direct link is the best-performing method I have used.' },
      { question: 'Should I reply to positive reviews too?', answer: 'Yes. Every one. It takes a minute, Google shows it, and it is the cheapest proof that the business is awake.' },
      { question: 'Do reviews on other sites matter?', answer: 'For Maps ranking, Google reviews matter most. For AI search and for trust, reviews on Facebook, industry sites and directories add corroboration. Google first, then the others.' },
      { question: 'What if a competitor is buying reviews?', answer: 'Report the obvious ones with evidence, then beat them on recency and content. Bought reviews cluster in bursts and say nothing specific; real ones arrive weekly and name the job.' },
      { question: 'Do you write the replies for me?', answer: 'I can, in your voice, with you approving them. Many clients prefer to write their own and have me handle the requests and the flagging.' },
    ],
    related: [CORE_LINKS[1], { label: 'Google Maps ranking', href: '/google-maps-ranking-gold-coast' }, CORE_LINKS[2], { label: 'SEO for tradies', href: '/seo-for-tradies-gold-coast' }],
  },

  // ------------------------------------------------------------------ SUPPORTING: Local citations
  {
    slug: 'local-citations-gold-coast',
    group: 'supporting',
    name: 'Local Citations and Directory Listings',
    primaryKeyword: 'local citations Gold Coast',
    secondaryKeywords: ['directory listings', 'NAP consistency', 'business listings Australia', 'Bing Places', 'Apple Business Connect'],
    title: 'Local Citations & Directory Listings Gold Coast | Consistent NAP That Google and AI Trust',
    description:
      'Local citations and directory listings for Gold Coast businesses: which Australian directories matter, how to make your name, address and phone identical everywhere, and why it matters for Google Maps and AI search. Call me.',
    eyebrow: 'Local citations',
    h1: 'Local citations and directory listings on the Gold Coast',
    intro: [
      'A citation is any place on the web that states your business name, address and phone number. Directories, industry associations, the council, suppliers who list their stockists, the local paper’s business guide. Google reads them to check that the business on the profile is real and is where it says it is. AI assistants read them to decide whether they are confident enough to name you.',
      'Citations are not glamorous and they do not move rankings overnight. They are the plumbing. When they are wrong, old phone numbers, a previous suburb, a brand name you stopped using, everything above them works a little worse. When they agree, everything else works a little better. Here is how I handle them for Gold Coast businesses.',
    ],
    sections: [
      {
        heading: 'NAP: the three facts that have to match',
        paragraphs: [
          'Name, address, phone. Written the same way everywhere. Not "MRG Marketing Agency" on one directory and "MRG Marketing" on another. Not "9 Laverton St" here and "Unit 1, 9 Laverton Street" there. Not a mobile on the website and a landline on the profile. Each small difference is a chance for Google or a model to treat two listings as two businesses, or to doubt both.',
          'The fix starts with deciding the canonical version of each fact, writing it down, and then making every listing match it exactly, including punctuation.',
        ],
      },
      {
        heading: 'The directories that matter in Australia',
        paragraphs: [
          'There are hundreds of directories and most are worthless. The ones that matter are the ones Google and the assistants actually read, and the ones your industry uses. For a Gold Coast local business, the list is shorter than agencies pretend.',
        ],
        bullets: [
          'Google Business Profile (the master record), Bing Places and Apple Business Connect',
          'Yellow Pages, True Local, Hotfrog, Yelp Australia, Localsearch',
          'Industry bodies and licence registers: Master Plumbers, Master Electricians, QBCC licence lookup, where they apply',
          'Facebook, Instagram and LinkedIn company pages, with the same NAP in the About section',
          'Local sources: Gold Coast council business directories, chambers of commerce, sponsor pages of clubs you support',
          'Supplier and brand stockist pages that list you by name',
        ],
      },
      {
        heading: 'How a citation audit works',
        numbered: [
          'Search every variation of the business name, old names included, with the phone number and the suburb, and list every page that mentions the business.',
          'Mark each one: correct, wrong, duplicate, or dead.',
          'Fix the ones you control, claim the ones you can, request corrections on the rest, and get duplicates merged or removed.',
          'Add the missing listings that matter for your industry and area.',
          'Record the canonical NAP and the list of listings, so the next change of phone or address takes an hour, not a year.',
        ],
      },
      {
        heading: 'Why this matters more for AI search',
        paragraphs: [
          'Google Maps mostly cares that citations do not contradict the profile. AI assistants treat them as evidence. A business described the same way on its site, its profile, Bing Places, two industry directories and a local council page is a business a model can name with confidence. One with three different phone numbers scattered across the web is one it will skip. The citation clean-up is the cheapest part of the AI search work, and it is where I start.',
        ],
      },
      {
        heading: 'Moved, rebranded, or changed numbers? Read this',
        paragraphs: [
          'The commonest citation mess on the Gold Coast is a business that moved from Southport to Ormeau, or from a trading name to a company name, and left a trail. Old listings keep ranking, customers ring dead numbers, and Google sees two businesses. The fix is methodical: update what you can, request changes on what you cannot, redirect old web pages to new ones, and keep the old number live and forwarding for a year while the record catches up.',
        ],
      },
    ],
    table: {
      caption: 'Citation errors and what they cost',
      head: ['Error', 'What happens', 'Fix'],
      rows: [
        ['Old phone number on three directories', 'Missed calls; Google doubts which number is right', 'Update or request correction; keep the old number forwarding'],
        ['Previous suburb still listed', 'Profile and citations disagree on location', 'Correct every listing; redirect any old location page'],
        ['Two names for one business', 'Split identity; AI assistants name neither', 'Pick one name; merge duplicates; update everywhere'],
        ['Duplicate Google profile', 'Reviews split; one profile may be suspended', 'Claim and merge through Business Profile support'],
      ],
    },
    checklist: {
      title: 'The thirty-minute citation check',
      items: [
        'Google your phone number in quotes. Does every result show the current business name and suburb?',
        'Google your old business name or old suburb. What still ranks?',
        'Open Bing and search the business. Is there a Bing Places listing, and is it right?',
        'Check the About section on Facebook and LinkedIn against the profile.',
        'Search Apple Maps for the business. Is it there, with the right pin?',
      ],
    },
    faqs: [
      { question: 'How many citations does a business need?', answer: 'The right ones, not many. The master record plus the main Australian directories, your industry bodies, and local sources. Twenty accurate listings beat two hundred random ones.' },
      { question: 'Do citations still matter for Google ranking in 2026?', answer: 'As a consistency check, yes. As a volume game, no. The damage from wrong citations is bigger than the lift from extra ones.' },
      { question: 'What about paid directory listings?', answer: 'Rarely worth paying for ranking alone. Pay only if the directory sends you actual customers, which you can check in your call and web analytics.' },
      { question: 'Can you fix listings I do not have logins for?', answer: 'Usually. Most directories have a correction or claim process, and the big ones respond within a couple of weeks. The ones that never respond get outweighed by the ones that do.' },
      { question: 'We changed our phone number. How long until Google catches up?', answer: 'Days for your own profile and site, weeks to months for the long tail. Keep the old number live and forwarding for at least a year.' },
      { question: 'Is this included in your local SEO work or separate?', answer: 'Included. The citation audit is part of the first month of any local SEO or AI search engagement, and the list is maintained after that.' },
    ],
    related: [CORE_LINKS[2], CORE_LINKS[1], { label: 'Local SEO audit', href: '/local-seo-audit-gold-coast' }, CORE_LINKS[0]],
  },

  // ------------------------------------------------------------------ SUPPORTING: Local SEO audit
  {
    slug: 'local-seo-audit-gold-coast',
    group: 'supporting',
    name: 'Local SEO Audit',
    primaryKeyword: 'local SEO audit Gold Coast',
    secondaryKeywords: ['Google Business Profile audit', 'local SEO checklist', 'why am I not ranking on Google Maps', 'SEO health check'],
    title: 'Local SEO Audit Gold Coast | Find Out Why You Are Not in the Top 3, in Plain English',
    description:
      'A local SEO audit for Gold Coast businesses: the profile, the website, the citations, the reviews and a ranking grid scan, written up in plain English with what to fix first. The first step of every engagement, and the way I decide whether I can help. Call me.',
    eyebrow: 'Local SEO audit',
    h1: 'A local SEO audit for Gold Coast businesses',
    intro: [
      'Every engagement I take on starts with an audit, because guessing is expensive. A business that is not in the top three on Maps has one of a short list of problems, and the fix for each is different. Changing the website when the problem is the primary category wastes a month. Chasing reviews when the problem is a suspended profile wastes more.',
      'This page is what my audit covers, what the report looks like, and how to run a rough version yourself before you call anyone. It is also how I decide, honestly, whether I can help: some businesses do not need me, and the audit says so.',
    ],
    sections: [
      {
        heading: 'What the audit covers',
        numbered: [
          'Ranking grid. A 7 by 7 scan around the business for the main search, so we start from a measured position instead of a feeling.',
          'Google Business Profile. Category, services, attributes, description, photos, posts, hours, service area, Q&A, products, and whether anything is suspended, pending or duplicated.',
          'Reviews. Count, recency, velocity, content, reply rate, and anything that looks like a policy breach either way.',
          'Website. Whether it names the services and suburbs the profile claims, speed on a phone, titles and headings, structured data, broken links, and how it looks beside the top three competitors’ sites.',
          'Citations. The business name, address and phone across the directories and sources that matter, with every mismatch listed.',
          'Competitors. The three businesses holding the pack for your main search: what they have that you do not, in categories, reviews, pages and citations.',
          'AI visibility. Whether ChatGPT, Gemini and Copilot name you when asked, and what they get wrong.',
        ],
      },
      {
        heading: 'What the report looks like',
        paragraphs: [
          'Plain English, in order of impact. The first page says what is holding you back and the three things I would do first. The rest is the evidence: the grid, the profile findings, the website findings, the citation list, and the competitor comparison. No jargon tables for their own sake, and no 60-page PDF nobody reads.',
          'The report is yours to act on whether or not you hire me. Some businesses take it to their web developer. That is fine.',
        ],
      },
      {
        heading: 'The eight problems I find most often on the Gold Coast',
        bullets: [
          'Wrong or vague primary category ("Contractor", "Business service").',
          'Three services listed when the business does thirty.',
          'A website that never names the suburbs the business works in.',
          'Reviews that stopped a year ago.',
          'An old suburb or phone number still living on half the directories.',
          'A duplicate profile splitting the reviews.',
          'A profile that was suspended after a well-meant edit, with nobody chasing reinstatement.',
          'Nothing wrong at all, except that the three businesses above you have simply done more, for longer.',
        ],
      },
      {
        heading: 'How to run a rough audit yourself',
        paragraphs: [
          'You can get a long way in an hour. Search your main service from your own address and from three suburbs away, and write down the top three each time. Open your profile and count the services. Read the date of your newest review. Open your website on your phone and see how long it takes before you can read anything. Google your phone number in quotes. If any of those made you wince, you have found your first fix.',
        ],
      },
      {
        heading: 'When the answer is "you do not need me"',
        paragraphs: [
          'Some audits come back clean: the profile is complete, reviews are steady, the site is fine, and the grid is green. Those businesses need a monthly check, not a retainer, and I say so. Others come back with a suspension or a duplicate that has to be resolved before any SEO is worth doing, and that is a different conversation. The audit is how we both find out.',
        ],
      },
    ],
    table: {
      caption: 'Symptom, likely cause, first fix',
      head: ['What you see', 'Most likely cause', 'What I would do first'],
      rows: [
        ['Top 3 at home, invisible 3 km away', 'Distance plus thin suburb coverage', 'Suburb pages, service area, reviews from those suburbs'],
        ['Not in the pack anywhere', 'Category or services wrong, or a suspension', 'Fix the category and services; check profile status'],
        ['In the pack but few calls', 'Weak photos, old reviews, poor replies', 'Review rhythm, real photos, replies'],
        ['Rankings dropped suddenly', 'Edit triggered a review, duplicate appeared, competitor surged', 'Check profile status and duplicates, then the grid'],
      ],
    },
    checklist: {
      title: 'What to have ready for the audit',
      items: [
        'Manager access to the Google Business Profile',
        'Your website login, or your developer’s contact',
        'The three searches you most want to be found for',
        'The suburbs you actually work in, in order',
        'Any old business names, addresses or phone numbers from the last five years',
      ],
    },
    faqs: [
      { question: 'Is the local SEO audit free?', answer: 'The call is free, and on it I look at the profile, the site and the top three competitors live and tell you what I see. The full written audit with the grid scan is the first step of an engagement.' },
      { question: 'How long does the audit take?', answer: 'About a week from access to report, including the grid scan and the citation search.' },
      { question: 'Do I have to hire you after the audit?', answer: 'No. The report is written so you or your developer can act on it. Some people do, some come back later, some hire me. All fine.' },
      { question: 'What tools do you use?', answer: 'Local Falcon for the ranking grid and Business Profile performance data, Google Search Console and Bing Webmaster Tools for the website, and a lot of manual searching for citations and competitors. The tools gather; the judgement is the audit.' },
      { question: 'Can you audit a business outside the Gold Coast?', answer: 'Yes. The method is the same anywhere. Most of my work is Gold Coast, Logan and Brisbane, with white-label clients around the country.' },
      { question: 'My profile is suspended. Is that part of the audit?', answer: 'It becomes the whole audit. A suspended profile has to be reinstated before anything else matters, and I have been through that process enough times to know what Google wants to see.' },
    ],
    related: [CORE_LINKS[0], CORE_LINKS[1], { label: 'Google Maps ranking', href: '/google-maps-ranking-gold-coast' }, { label: 'Local citations', href: '/local-citations-gold-coast' }, { label: 'Review management', href: '/review-management-gold-coast' }],
  },

  ...TRADE_PAGES,
];
