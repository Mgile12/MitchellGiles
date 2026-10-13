// The 20 suburbs, closest to Ormeau first. Only the ones with real search volume get a full page.
export interface Suburb {
  name: string;
  slug: string;
  hasPage: boolean;
}

export const SUBURBS: Suburb[] = [
  { name: 'Ormeau', slug: 'ormeau', hasPage: true },
  { name: 'Ormeau Hills', slug: 'ormeau-hills', hasPage: false },
  { name: 'Pimpama', slug: 'pimpama', hasPage: true },
  { name: 'Coomera', slug: 'coomera', hasPage: true },
  { name: 'Upper Coomera', slug: 'upper-coomera', hasPage: true },
  { name: 'Yatala', slug: 'yatala', hasPage: true },
  { name: 'Stapylton', slug: 'stapylton', hasPage: true },
  { name: 'Jacobs Well', slug: 'jacobs-well', hasPage: false },
  { name: 'Alberton', slug: 'alberton', hasPage: false },
  { name: 'Willow Vale', slug: 'willow-vale', hasPage: false },
  { name: 'Gilberton', slug: 'gilberton', hasPage: false },
  { name: 'Norwell', slug: 'norwell', hasPage: false },
  { name: 'Woongoolba', slug: 'woongoolba', hasPage: false },
  { name: 'Beenleigh', slug: 'beenleigh', hasPage: true },
  { name: 'Eagleby', slug: 'eagleby', hasPage: false },
  { name: 'Bahrs Scrub', slug: 'bahrs-scrub', hasPage: false },
  { name: 'Waterford', slug: 'waterford', hasPage: false },
  { name: 'Oxenford', slug: 'oxenford', hasPage: false },
  { name: 'Helensvale', slug: 'helensvale', hasPage: false },
  { name: 'Hope Island', slug: 'hope-island', hasPage: false },
];

export interface SuburbPage {
  slug: string;
  name: string;
  /** e.g. "Local SEO Pimpama" */
  primaryKeyword: string;
  title: string;
  description: string;
  /** Short line under the H1 */
  tagline: string;
  /** Local hook: two or three paragraphs that could only be about this suburb */
  intro: string[];
  /** The place in one line for the directions block */
  drive: { minutes: number; km: number; route: string };
  /** What is actually here: landmarks, centres, roads, events */
  landmarks: string[];
  /** Who runs businesses here and what they search for */
  businessTypes: string[];
  /** What the Maps grid looks like for this suburb, in plain words */
  competition: string;
  /** Three things I would do first for a business here */
  firstMoves: { title: string; text: string }[];
  /** Neighbouring suburbs for the 'nearby' chips and internal links */
  nearby: string[];
  faqs: { question: string; answer: string }[];
}

export const SUBURB_PAGES: SuburbPage[] = [
  {
    slug: 'pimpama',
    name: 'Pimpama',
    primaryKeyword: 'Local SEO Pimpama',
    title: 'Local SEO Pimpama | Google Business Profile & Maps Ranking for Pimpama Businesses',
    description:
      'Local SEO and Google Business Profile optimisation for Pimpama businesses, from an internet marketing service ten minutes up the M1 in Ormeau. Top 3 on Google Maps for the searches that happen in Pimpama. Call me.',
    tagline: 'Google Business Profile, local SEO and AI search for one of the fastest-growing suburbs in the country.',
    intro: [
      'Pimpama has gone from paddocks to one of the fastest-growing suburbs in Australia in about fifteen years. Gainsborough Greens, The Heights, the estates either side of Pimpama-Jacobs Well Road: thousands of new families, most of them under 40, most of them searching for everything on a phone because they have no idea yet who the good local plumber, dentist or physio is.',
      'That is the whole opportunity. In an older suburb people already know who to call. In Pimpama they Google it, and Google shows them the three businesses in the Maps pack. If you are not one of the three, you are not in the conversation.',
      'I am in Ormeau, one exit up the M1. I have driven through the Pimpama Junction and Pimpama City roundabouts more times than I can count, and I know which businesses here own the map and which ones are still invisible.',
    ],
    drive: { minutes: 8, km: 7, route: 'M1 south from Exit 45 to Exit 49, or straight down the Old Pacific Highway' },
    landmarks: [
      'Pimpama Junction and Pimpama City shopping centres on Pimpama-Jacobs Well Road',
      'Exit 49 on the M1, the Pimpama and Jacobs Well interchange',
      'Pimpama Sports Hub, the aquatic and tennis centre that opened in 2022',
      'Pimpama State Secondary College and the primary schools feeding it',
      'The Coomera Connector, the second M1, under construction on the eastern side',
      'Gainsborough Greens, The Heights and the newer estates off Yawalpah Road',
    ],
    businessTypes: [
      'Trades building and finishing the new estates: fencing, landscaping, air conditioning, electrical, plumbing',
      'Childcare, swim schools, tutoring and sports clubs for a suburb full of young families',
      'Dentists, physios, chiros and GPs opening in the new medical precincts',
      'Cafes, takeaway and personal services around the two shopping centres',
      'Car detailers, mechanics and tyre shops serving two-car households with long commutes',
    ],
    competition:
      'For most trade and health searches in Pimpama the Maps pack is still soft. Plenty of businesses have a profile, few have it set up properly, and almost none work it every week. A finished profile with the right categories, real photos and a website that names Pimpama can reach the top three faster here than almost anywhere else on the Gold Coast. The exceptions are dentists, childcare and gyms, where the pack is contested and the website has to carry its share.',
    firstMoves: [
      { title: 'Fix the profile before anything else', text: 'Primary category, the full services list, service area set to Pimpama and the surrounding estates, photos of real jobs, and every review answered. Most profiles here have three of those missing.' },
      { title: 'Give Google a Pimpama page', text: 'One page on the website that names Pimpama, the services you do here, the estates you work in and the questions customers ask. Not a copy of the Coomera page with the name swapped.' },
      { title: 'Scan the grid and keep working it', text: 'A 7 by 7 ranking scan centred on Pimpama tells us where you show up and where you do not. Then weekly posts, reviews, photos and fixes, until the grid goes green and after.' },
    ],
    nearby: ['Ormeau', 'Coomera', 'Upper Coomera', 'Jacobs Well', 'Yatala', 'Ormeau Hills'],
    faqs: [
      { question: 'Do you work with businesses in Pimpama or only in Ormeau?', answer: 'Both. Ormeau is where I am based and Pimpama is the next exit down the M1. A good share of my local clients are between Yatala and Coomera, and Pimpama is the suburb where new businesses most often need the profile and the website set up from scratch.' },
      { question: 'My business is in a new estate in Pimpama. Does that hurt on Google Maps?', answer: 'No. Google ranks the profile on relevance, distance and prominence, not on how old the street is. What hurts is a half-finished profile. New estates are full of people searching for the first time, which is an advantage if your profile is ready for them.' },
      { question: 'How long does it take to get into the top 3 on Maps in Pimpama?', answer: 'For most trades and services here, the pack is soft enough that a properly finished profile and one good page can move within weeks. I plan for 90 days and tell you on the call what I think is realistic for your category. Dentists, childcare and gyms take longer.' },
      { question: 'Do I need a website, or is the Google profile enough?', answer: 'You can get into the pack with a strong profile alone, but the website is what keeps you there and what turns a search into a call. A single page that names Pimpama and your services is usually enough to start.' },
      { question: 'I serve Pimpama but my shed is in Ormeau or Yatala. Can I still rank in Pimpama?', answer: 'Yes, within reason. A service-area business with Pimpama set in its service area and a page about the work it does here can rank across most of the suburb. The further the pin is from the searcher, the harder it gets, which is why the grid scan matters.' },
      { question: 'Will the Coomera Connector change anything for Pimpama businesses?', answer: 'Not for how Google ranks you, but it will change who drives past and where people shop. More traffic through the eastern side means more phones searching from the car. The profile and the page need to be ready before the road opens, not after.' },
      { question: 'What does it cost?', answer: 'It depends on where you are starting from and how contested your category is. I quote after the call and a look at your profile, not from a price list, and there are no packages or lock-in.' },
      { question: 'Can we meet in person?', answer: 'Yes. I am at 9 Laverton Street in Ormeau, about eight minutes away, and I will come to you anywhere in Pimpama. A call is fine too.' },
    ],
  },
  {
    slug: 'coomera',
    name: 'Coomera',
    primaryKeyword: 'Local SEO Coomera',
    title: 'Local SEO Coomera | Google Business Profile & Maps Ranking for Coomera Businesses',
    description:
      'Local SEO and Google Business Profile optimisation for Coomera businesses, from an internet marketing service in nearby Ormeau. Top 3 on Google Maps around Westfield Coomera, the train station and the estates. Call me.',
    tagline: 'Google Business Profile, local SEO and AI search for the suburb with the busiest shopping centre on the northern Gold Coast.',
    intro: [
      'Coomera is where the northern Gold Coast goes to shop, catch the train and take the kids to Dreamworld. Westfield Coomera on Foxwell Road changed the suburb when it opened, and the estates around Coomera Rivers and the Town Centre have filled in behind it. On a Saturday the car parks are full of people from Pimpama, Upper Coomera and Hope Island, and every one of them has a phone.',
      'For a local business that means two kinds of search. The locals, who search from home for a plumber, a physio or a dog groomer. And the visitors, who search from the Westfield car park or the station for something nearby right now. Both go through the same Maps pack, and the pack around the Westfield is one of the most contested on the northern Gold Coast.',
      'I am in Ormeau, twelve minutes up the M1. Coomera is the suburb I drive to most for client meetings, and I know the difference between ranking at the Town Centre and ranking out at Coomera Rivers.',
    ],
    drive: { minutes: 12, km: 11, route: 'M1 south from Exit 45 to Exit 54, Foxwell Road' },
    landmarks: [
      'Westfield Coomera on Foxwell Road and the Coomera Town Centre around it',
      'Coomera train station on the Gold Coast line',
      'Dreamworld and WhiteWater World, which are in Coomera rather than the Gold Coast strip',
      'Exit 54 on the M1 and the Foxwell Road and Days Road interchange',
      'Coomera Indoor Sports Centre',
      'Coomera Rivers and the newer estates north of the Town Centre',
    ],
    businessTypes: [
      'Retail and food around the Westfield, where the fight is for the top three near the centre',
      'Trades serving a suburb that is still building: builders, electricians, plumbers, pool and landscaping',
      'Physios, chiros, dentists and GPs in the Town Centre precinct',
      'Gyms, swim schools and kids activities for families within a few kilometres of the station',
      'Car detailers, mechanics and tyre shops along the industrial pockets near the M1',
    ],
    competition:
      'Around Westfield Coomera and the station, the Maps pack is contested for almost every category: there are more businesses within two kilometres than anywhere else on the northern Gold Coast. Winning there takes a finished profile, a steady flow of reviews, and a website that genuinely covers Coomera. Out in the estates and toward Coomera Rivers it is softer, and a business set up properly can own that side of the grid while it builds toward the centre.',
    firstMoves: [
      { title: 'Work out which Coomera you are ranking in', text: 'A 7 by 7 grid scan over the suburb shows whether you win near the Westfield, out in the estates, or nowhere. The plan is different for each, so this comes first.' },
      { title: 'Finish the profile and feed it', text: 'Categories, services, products, real photos, service area, and a review request that actually goes out after every job. Contested packs are won on reviews and consistency, not on tricks.' },
      { title: 'A Coomera page that names the places', text: 'The Town Centre, the station, the estates, the roads. Google needs to see that you do the work here, and customers need to see that you know the place.' },
    ],
    nearby: ['Upper Coomera', 'Pimpama', 'Hope Island', 'Helensvale', 'Oxenford', 'Ormeau'],
    faqs: [
      { question: 'Is Coomera harder to rank in than other northern Gold Coast suburbs?', answer: 'Near the Westfield and the station, yes. There are more businesses competing for the same three Maps spots than anywhere else north of Helensvale. Out toward Coomera Rivers and the estates it is much softer. The scan tells us which one you are in.' },
      { question: 'Do you work with businesses in Coomera?', answer: 'Yes. I am based in Ormeau, twelve minutes up the M1, and Coomera is where most of my client meetings happen. Trades, health and retail around the Town Centre are the usual mix.' },
      { question: 'How long until my business is in the top 3 on Maps in Coomera?', answer: 'Depends where you are starting and what you sell. For a trade with a decent review base, weeks. For a cafe or a gym near the Westfield, longer, because the pack is full. I plan for 90 days and tell you on the call what is realistic.' },
      { question: 'My customers come from Pimpama and Upper Coomera too. Can one profile cover all three?', answer: 'The profile can, with the service area set properly. The website needs a page for each suburb, because Google ranks pages for places, and a Coomera page will not rank in Pimpama.' },
      { question: 'Does being near Dreamworld or the Westfield help or hurt?', answer: 'It brings more searches but more competitors. If your category is relevant to visitors, like food, detailing or a pharmacy, it is a plus. If it is not, you are just competing in a busier pack and the estates may be the better target.' },
      { question: 'I run a service business from home in Coomera Rivers. Can I rank without a shopfront?', answer: 'Yes. A service-area business with a hidden address can rank across the suburb if the profile is complete and the website backs it up. Plenty of the top-ranked trades on the northern Gold Coast run from a home office.' },
      { question: 'What does it cost?', answer: 'It depends on where you are starting from and how contested your category is. I quote after the call and a look at your profile, not from a price list. No packages, no lock-in.' },
      { question: 'Can we meet at the Town Centre?', answer: 'Yes. I am in Coomera most weeks and happy to meet at a cafe near the Westfield or at your premises. A call works too.' },
    ],
  },
  {
    slug: 'upper-coomera',
    name: 'Upper Coomera',
    primaryKeyword: 'Local SEO Upper Coomera',
    title: 'Local SEO Upper Coomera | Google Business Profile & Maps Ranking for Upper Coomera Businesses',
    description:
      'Local SEO and Google Business Profile optimisation for Upper Coomera businesses, from an internet marketing service in nearby Ormeau. Top 3 on Google Maps along Days Road, Reserve Road and Old Coach Road. Call me.',
    tagline: 'Google Business Profile, local SEO and AI search for the family suburb between the M1 and the hills.',
    intro: [
      'Upper Coomera is the big family suburb on the western side of the M1: Days Road, Reserve Road, Old Coach Road, the schools, the shops at the Upper Coomera Centre and Coomera Grand, and estate after estate climbing toward the hinterland. It is the kind of place where a good trade or a good physio can be flat out for years on word of mouth, and where the ones who also own the Maps pack are the ones who never have a quiet month.',
      'Searches here come from home, usually in the evening or on a Saturday, and usually with a suburb name attached. "Plumber Upper Coomera", "dentist Upper Coomera", "dog groomer Upper Coomera". Google answers with the Maps pack, and the pack is decided by whose profile is finished and whose website actually says Upper Coomera.',
      'I am in Ormeau, about fifteen minutes north. I know the Upper Coomera grid from scans for clients in the trades, and the pattern is the same every time: the businesses that do the basics every week win it.',
    ],
    drive: { minutes: 15, km: 14, route: 'M1 south to Exit 54 or Exit 57, then Days Road or Reserve Road' },
    landmarks: [
      'Upper Coomera Centre on Reserve Road and Coomera Grand on Days Road',
      'Coomera Anglican College and Upper Coomera State College',
      'Old Coach Road, the spine of the older part of the suburb',
      'Highland Reserve and the estates toward the hinterland',
      'Pacific Pines next door, which shares most of the same searches',
      'Exits 54 and 57 on the M1',
    ],
    businessTypes: [
      'Home services for a suburb of owner-occupied family homes: plumbing, electrical, air conditioning, pest, cleaning',
      'Dentists, physios, chiros, podiatrists and allied health around the two centres',
      'Childcare, tutoring, swim schools, dance and martial arts',
      'Mechanics, tyre shops and detailers for two-car households',
      'Cafes, hairdressers, barbers and beauty around Reserve Road and Days Road',
    ],
    competition:
      'Upper Coomera has a lot of businesses but they are spread out, so the Maps pack changes depending on where the search is made. Near the two centres it is contested for health and beauty. Across the estates it is open for most trades. A profile with the service area set to Upper Coomera, Pacific Pines and Coomera, backed by a page for each, usually covers the whole grid within a few months.',
    firstMoves: [
      { title: 'Set the profile up for the whole suburb', text: 'Service area covering Upper Coomera and the neighbours people actually search from, the right categories, every service listed, photos of real jobs in the estates.' },
      { title: 'Build the Upper Coomera page', text: 'Name the roads, the centres, the schools, the estates. Answer the questions people here ask. Link it to the Coomera and Pacific Pines pages so Google sees one business covering the area.' },
      { title: 'Reviews on a schedule', text: 'This is a word-of-mouth suburb. Turning the word of mouth into Google reviews, consistently, is what separates the top three from the rest.' },
    ],
    nearby: ['Coomera', 'Pacific Pines', 'Oxenford', 'Pimpama', 'Helensvale', 'Ormeau'],
    faqs: [
      { question: 'Do you work with businesses in Upper Coomera?', answer: 'Yes. I am in Ormeau, about fifteen minutes north on the M1, and I work with trades, health and family services across Upper Coomera and Pacific Pines.' },
      { question: 'Is Upper Coomera one search area or several?', answer: 'Several, in practice. Searches near the Upper Coomera Centre and Coomera Grand behave like a town centre, and searches from the estates behave like a suburb. A grid scan shows where you are strong and where you are missing.' },
      { question: 'How long to get into the top 3 on Maps in Upper Coomera?', answer: 'For most trades, weeks once the profile is finished and the page is live. For dentists, beauty and childcare near the centres, longer. I plan for 90 days and tell you what is realistic on the call.' },
      { question: 'Should I target Pacific Pines as well?', answer: 'Usually yes. The two suburbs share the same customers and the same searches, and a business that ranks in one and not the other is leaving half its area on the table. That is a second page and a service-area setting, not a second business.' },
      { question: 'My reviews are good but I am still not in the pack. Why?', answer: 'Reviews are one of three things Google weighs. The other two are relevance, which is categories, services and the website, and distance. Most businesses with good reviews and no pack position have a category or a website problem, and both are fixable.' },
      { question: 'Can a home-based business in Upper Coomera rank on Maps?', answer: 'Yes. Hide the address, set the service area, finish the profile, and give it a page that names the suburb. Several of the best-ranked trades on the northern Gold Coast work from a home office.' },
      { question: 'What does it cost?', answer: 'It depends on where you are starting and how contested your category is. I quote after the call and a look at the profile. No packages, no lock-in.' },
      { question: 'Can you come to me?', answer: 'Yes. Anywhere in Upper Coomera is an easy drive from Ormeau, or we can do it on a call.' },
    ],
  },
  {
    slug: 'beenleigh',
    name: 'Beenleigh',
    primaryKeyword: 'Local SEO Beenleigh',
    title: 'Local SEO Beenleigh | Google Business Profile & Maps Ranking for Beenleigh Businesses',
    description:
      'Local SEO and Google Business Profile optimisation for Beenleigh businesses, from an internet marketing service in Ormeau, twelve minutes down the M1. Top 3 on Google Maps for Beenleigh, Eagleby and Mount Warren Park. Call me.',
    tagline: 'Google Business Profile, local SEO and AI search for the oldest town on the corridor.',
    intro: [
      'Beenleigh is older than the Gold Coast and acts like it. It has a proper town centre around George Street and the Town Square, a train station on the Brisbane line, the rum distillery that has been there since 1884, and a ring of suburbs, Eagleby, Mount Warren Park, Bahrs Scrub, Waterford, that all treat it as their shopping and service centre.',
      'That gives Beenleigh businesses a bigger catchment than the suburb name suggests, and a different kind of competition. The businesses here have been around longer, the reviews run deeper, and the Maps pack for the core trades and services is held by names people have known for twenty years. You beat them the same way you beat anyone: a profile that is more complete and more active than theirs, and a website that covers the whole catchment, not just Beenleigh.',
      'I am in Ormeau, twelve minutes south on the M1. Beenleigh is the northern end of the corridor I work in, and the first suburb where my clients start competing with Logan and Brisbane businesses rather than Gold Coast ones.',
    ],
    drive: { minutes: 12, km: 12, route: 'M1 north from Exit 45 to Exit 35, then into George Street' },
    landmarks: [
      'George Street and Beenleigh Town Square, the town centre',
      'Beenleigh train station, where the Brisbane and Gold Coast lines meet',
      'Beenleigh Rum Distillery, operating since 1884',
      'Beenleigh Marketplace and the retail strip along the Pacific Highway',
      'Exit 35 on the M1 and the Logan River crossings to Eagleby and Waterford',
      'Mount Warren Park and Bahrs Scrub on the hill side',
    ],
    businessTypes: [
      'Established trades and mechanics serving Beenleigh, Eagleby and the surrounding suburbs',
      'Lawyers, accountants, conveyancers and financial advisers in the town centre',
      'Medical, dental, physio and aged-care services for an older population mix',
      'Retail, cafes and takeaway around George Street and the Marketplace',
      'Industrial services spilling over from Yatala and Stapylton to the south',
    ],
    competition:
      'Beenleigh has the deepest review counts on the corridor and the most entrenched Maps packs, especially for trades, legal and medical. Beating them is a longer job, but the catchment is worth it because Eagleby, Mount Warren Park, Waterford and Bahrs Scrub all search for Beenleigh businesses. A profile set up for the whole catchment and a website with a page per suburb can win the edges first and work inward.',
    firstMoves: [
      { title: 'Scan the catchment, not just the suburb', text: 'A grid that covers Beenleigh and the suburbs that shop here shows where the incumbents are weak. That is usually Eagleby and Bahrs Scrub, not George Street.' },
      { title: 'Out-finish the incumbents', text: 'Long-established profiles are often half-empty: old photos, no services, no posts, reviews unanswered. A finished, active profile overtakes them on relevance even before the review gap closes.' },
      { title: 'Pages for Beenleigh and its neighbours', text: 'Beenleigh, Eagleby, Mount Warren Park, Waterford. Each one a real page with the places named and the questions answered, all pointing back to the one profile.' },
    ],
    nearby: ['Eagleby', 'Bahrs Scrub', 'Waterford', 'Yatala', 'Stapylton', 'Ormeau'],
    faqs: [
      { question: 'Do you work in Beenleigh, or is it too far from Ormeau?', answer: 'Beenleigh is twelve minutes up the M1 and the northern end of the corridor I cover. I work with trades, professional services and medical businesses in Beenleigh and the suburbs around it.' },
      { question: 'Beenleigh businesses have hundreds of reviews. How do I compete?', answer: 'Reviews are one of three ranking factors. Established profiles are often weak on the other two: categories, services, posts and a website that names the suburbs. Finish those, win the edges of the catchment first, and close the review gap with a request that goes out after every job.' },
      { question: 'Is Beenleigh Gold Coast or Logan on Google?', answer: 'Logan City, officially. For Maps it does not matter: Google ranks by where the searcher is. For the website it matters a little, because people here search for Beenleigh, Logan and sometimes Brisbane south, and the pages should reflect that.' },
      { question: 'How long to reach the top 3 in Beenleigh?', answer: 'Longer than Pimpama or Yatala for the core trades and professional services, because the packs are entrenched. I plan for 90 days to be winning the surrounding suburbs and tell you on the call what the town centre will take.' },
      { question: 'Should I make a page for Eagleby and Mount Warren Park too?', answer: 'Yes, if you work there. They search for Beenleigh businesses but Google still ranks pages for places, so a page each, with real content, is what gets the whole catchment.' },
      { question: 'My business is near the train station. Does that help?', answer: 'For searches made in the town centre, yes, distance is on your side. For searches from Eagleby or Waterford it is neutral. The profile and the pages decide the rest.' },
      { question: 'What does it cost?', answer: 'It depends on where you are starting and how entrenched your category is. I quote after the call and a look at your profile. No packages, no lock-in.' },
      { question: 'Can we meet in Beenleigh?', answer: 'Yes. I am happy to come to your premises or meet near the Town Square. A call is fine too.' },
    ],
  },
  {
    slug: 'yatala',
    name: 'Yatala',
    primaryKeyword: 'Local SEO Yatala',
    title: 'Local SEO Yatala | Google Business Profile & Maps Ranking for Yatala Businesses',
    description:
      'Local SEO and Google Business Profile optimisation for Yatala businesses, from an internet marketing service five minutes away in Ormeau. Top 3 on Google Maps for the Yatala Enterprise Area and the suburbs it serves. Call me.',
    tagline: 'Google Business Profile, local SEO and AI search for the biggest industrial precinct between Brisbane and the Gold Coast.',
    intro: [
      'Yatala is the working end of the corridor. The Yatala Enterprise Area runs from the M1 at Exit 38 across to Stapylton and is one of the largest industrial precincts in South East Queensland: manufacturing, logistics, trade suppliers, equipment hire, workshops, and the pie shop that has fed all of them since 1914.',
      'Most Yatala businesses sell to other businesses or to trades, which changes what local SEO has to do. The searches are specific, "hydraulic hose repair Yatala", "pallet racking Yatala", "truck tyres Yatala", and they come from phones in utes and from office desks across the whole corridor, not just from inside the suburb. The Maps pack still decides who gets the call, but the website has to do more of the work, because the searcher wants to know you do the exact thing before they ring.',
      'I am in Ormeau, five minutes down the Old Pacific Highway. Yatala is the suburb I drive through every day, and most of my industrial and trade-supplier clients are here or in Stapylton.',
      'One more thing that makes Yatala different: the people searching are often professionals buying for a business, which means they search during work hours, from a desk, and they read the website before they ring. A profile gets you into the pack. A page that names the exact products, brands and services you carry is what gets you the purchase order.',
    ],
    drive: { minutes: 6, km: 5, route: 'Old Pacific Highway north from Laverton Street, or M1 Exit 38' },
    landmarks: [
      'The Yatala Enterprise Area, the industrial precinct between the M1 and Stapylton',
      'Exit 38 on the M1',
      'Yatala Pie Shop on the Old Pacific Highway, open since 1914',
      'Darlington Park and the Albert River on the northern edge',
      'The Old Pacific Highway, which links Yatala straight to Ormeau and Beenleigh',
      'Stapylton Road and the industrial estates that continue into Stapylton',
    ],
    businessTypes: [
      'Manufacturers, fabricators and engineering workshops',
      'Trade suppliers: steel, timber, plumbing, electrical, landscape and building supplies',
      'Transport, logistics, warehousing and equipment hire',
      'Truck, trailer and fleet services, tyres and mechanical',
      'Commercial cleaning, signage, printing and other business-to-business services',
    ],
    competition:
      'Yatala packs are decided by specificity. There are plenty of businesses, but most have a vague profile with one generic category and a website that never names the suburb or the exact service. A profile with the right primary category, a full services list and a Yatala page that spells out what you do and who you do it for usually jumps a crowded pack, because nobody else bothered.',
    firstMoves: [
      { title: 'Get the category and services exact', text: 'Industrial categories are where most Yatala profiles go wrong: "Business service" instead of "Steel fabricator". The right primary category and a complete services list fix half the problem on their own.' },
      { title: 'A Yatala page written for the searcher in the ute', text: 'What you do, what you stock, what you repair, who you supply, and where you are off Exit 38. Plain language, the actual product names, the suburb in the right places.' },
      { title: 'Reviews from trade customers', text: 'Business-to-business customers rarely leave reviews unless asked. A request sent to the account contact after each job builds the review count the pack needs.' },
    ],
    nearby: ['Stapylton', 'Ormeau', 'Beenleigh', 'Alberton', 'Willow Vale', 'Ormeau Hills'],
    faqs: [
      { question: 'Does local SEO work for an industrial business in Yatala?', answer: 'Yes, and often faster than for a consumer business, because the searches are specific and most competitors have never set the profile up properly. The website matters more here: the searcher wants to confirm you do the exact thing before calling.' },
      { question: 'My customers are across Brisbane and the Gold Coast, not just Yatala. Does a Yatala page still matter?', answer: 'Yes. Google ranks the profile on where the searcher is, and plenty of searches say "Yatala" because people know that is where the suppliers are. The Yatala page wins those, and service pages win the rest.' },
      { question: 'How long to get into the top 3 on Maps in Yatala?', answer: 'For most trade and industrial categories, weeks once the category, services and page are right. I plan for 90 days and tell you on the call what I think your category will take.' },
      { question: 'We are in a big shed with no walk-in customers. Should the address be on the profile?', answer: 'Usually yes. A physical premises that customers can visit, even trade customers, ranks better with the address shown. If nobody visits, we set it up as a service-area business instead.' },
      { question: 'Can you help with the Google profile for a business with several locations?', answer: 'Yes. Each location gets its own profile and its own page, with the categories and services matched, so they do not compete with each other.' },
      { question: 'Our competitors have been here for decades. Can we overtake them?', answer: 'On Maps, often, because long-established profiles are frequently unfinished and inactive. On the website it is a longer job, but a page that names the exact services and the suburb beats a home page that names nothing.' },
      { question: 'What does it cost?', answer: 'It depends on where you are starting and how specific your category is. I quote after the call and a look at the profile. No packages, no lock-in.' },
      { question: 'Can you come to the site?', answer: 'Yes. Yatala is five minutes from my office in Ormeau, so a site visit is easy.' },
    ],
  },
  {
    slug: 'stapylton',
    name: 'Stapylton',
    primaryKeyword: 'Local SEO Stapylton',
    title: 'Local SEO Stapylton | Google Business Profile & Maps Ranking for Stapylton Businesses',
    description:
      'Local SEO and Google Business Profile optimisation for Stapylton businesses, from an internet marketing service in Ormeau, a few minutes down the highway. Top 3 on Google Maps for the industrial corridor off Exit 41. Call me.',
    tagline: 'Google Business Profile, local SEO and AI search for the industrial corridor between Yatala and the Albert River.',
    intro: [
      'Stapylton is the quieter half of the Yatala industrial corridor: the estates off Exit 41 and Stapylton Road, the transport yards, the civil and equipment businesses, the sheds that supply the trades on the whole northern Gold Coast, and the drive-in that everyone still calls the Yatala Drive-In even though it sits in Stapylton.',
      'Almost nobody searches for a Stapylton business from inside Stapylton. The searches come from Beenleigh, Ormeau, Pimpama and across Logan, from people who know the suppliers are "up at Yatala" and type Stapylton or Yatala to narrow it down. So a Stapylton page has to do two things: rank for the suburb name, and tell the searcher in plain words what you actually do before they drive out.',
      'I am in Ormeau, a few minutes down the Old Pacific Highway. Stapylton and Yatala are where most of my industrial and trade-supplier clients are, and the fixes are nearly always the same.',
      'The other thing about Stapylton is that it is changing. The estates north of Exit 41 keep filling with new sheds, the Albert River flats are slowly turning from cane into industrial land, and every new business that opens arrives with no Google presence at all. For an established business that is a threat and an opportunity in the same breath: the newcomers will claim their profiles eventually, so the time to own the Stapylton map is before they do.',
    ],
    drive: { minutes: 8, km: 7, route: 'Old Pacific Highway north through Yatala, or M1 Exit 41' },
    landmarks: [
      'Exit 41 on the M1 and Stapylton Road',
      'The industrial estates that continue north from the Yatala Enterprise Area',
      'The drive-in theatre, in Stapylton despite the Yatala name',
      'The Albert River and the flats toward Alberton and Woongoolba',
      'Quarry Road and the transport and civil yards along it',
      'The Old Pacific Highway link to Yatala, Ormeau and Beenleigh',
    ],
    businessTypes: [
      'Transport, logistics and container yards',
      'Civil, earthmoving and equipment hire',
      'Manufacturing, fabrication and engineering workshops',
      'Trade and building suppliers serving the whole corridor',
      'Fleet, truck and heavy vehicle services',
    ],
    competition:
      'Stapylton packs are thin. Many businesses here have no profile at all, or one that was auto-created and never claimed. A claimed, finished profile with the right category and a page that names Stapylton and Yatala can take a top-three spot quickly. The harder part is the website: the searches are specific and business-to-business, so the page has to say exactly what you supply or do.',
    firstMoves: [
      { title: 'Claim and finish the profile', text: 'A surprising number of Stapylton profiles are unclaimed. Claim it, set the primary category to what you actually are, list every service, add photos of the yard and the work.' },
      { title: 'One page that names both suburbs', text: 'Stapylton and Yatala, because customers use both. What you do, who for, what you stock, where you are off Exit 41. Written for the person in the ute, not for Google.' },
      { title: 'A review request that goes to the account contact', text: 'Trade and business customers do not leave reviews on their own. Ask after every job and the review count follows.' },
    ],
    nearby: ['Yatala', 'Alberton', 'Ormeau', 'Beenleigh', 'Woongoolba', 'Jacobs Well'],
    faqs: [
      { question: 'Do people actually search for businesses in Stapylton?', answer: 'Yes, but mostly from outside it. Trades and businesses across the corridor know the suppliers are in Yatala and Stapylton, and they add the suburb to narrow the search. A page that names both suburbs wins those searches.' },
      { question: 'Should my page say Yatala or Stapylton?', answer: 'Both, honestly. Say where you are, which is Stapylton, and that you are in the Yatala industrial corridor, which is how customers think of it. Google handles the rest.' },
      { question: 'How long to get into the top 3 on Maps in Stapylton?', answer: 'Often fast, because the packs are thin and many competitors have unclaimed or unfinished profiles. I plan for 90 days and usually see movement well inside that.' },
      { question: 'We sell to businesses, not the public. Is Google Maps still worth it?', answer: 'Yes. The person buying for a business still searches on Google, still looks at the Maps pack, and still rings the one with the right category, real photos and reviews. Business-to-business just means the website has to be specific.' },
      { question: 'Our profile was created by Google and we never claimed it. Is that a problem?', answer: 'It is the most common problem in Stapylton. Unclaimed profiles cannot be edited, have no services or photos, and get wrong details. Claiming it is the first thing I do.' },
      { question: 'Can you help if we also have a yard in Yatala or Beenleigh?', answer: 'Yes. Each location gets its own profile and page, matched so they support each other rather than compete.' },
      { question: 'What does it cost?', answer: 'It depends on where you are starting from. I quote after the call and a look at the profile. No packages, no lock-in.' },
      { question: 'Can you come to the yard?', answer: 'Yes. Stapylton is a few minutes from Ormeau, so a site visit is easy, or we can do it on a call.' },
    ],
  },
];
