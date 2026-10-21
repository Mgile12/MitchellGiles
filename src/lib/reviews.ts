import { BUSINESS_INFO } from './business-info';

// Google reviews shown on the site, copied from the Google Business Profile. Keep the wording as the
// reviewer wrote it (spacing and obvious typos tidied only). No Review/AggregateRating schema: Google
// treats reviews a business republishes about itself as self-serving and ignores them for rich results.
export interface GoogleReview {
  name: string;
  /** What the reviewer runs, drawn from the review text itself */
  context: string;
  stars: 1 | 2 | 3 | 4 | 5;
  text: string;
}

export const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    name: 'Conrad Smith',
    context: 'Marine detailing, Gold Coast',
    stars: 5,
    text:
      'I honestly couldn’t believe how quickly Mitchell got results. On 13 March, my business was sitting around 7th on Google Maps for “marine detailer”. Two days later, we were ranking 1st. I messaged him straight away because I was genuinely shocked at how fast he’d managed to move things. The difference he made to our local SEO in such a short amount of time was seriously impressive. Mitchell clearly knows what he’s doing when it comes to Google, SEO and getting a local business seen by the right people. Really happy with the work so far and excited to see where he can take it from here. Highly recommend MRG Marketing.',
  },
  {
    name: 'Cathy-Ann Jones',
    context: 'Taxi company, Coffs Harbour',
    stars: 5,
    text:
      'I work with a taxi business in Coffs Harbour and have managed it for over 12 months. We were having difficulties appearing in the top 3 on Google as it is very competitive, and Uber being a problem. However he was able to get us 71 calls in the last four months. I don’t really understand local SEO but Mitchell had more than enough time to show me and break down how it works. I highly recommend MRG and will be telling my friends.',
  },
];

/** Opens the profile on Google Maps, where every review is visible */
export const GOOGLE_REVIEWS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS_INFO.legalName)}&query_place_id=${BUSINESS_INFO.placeId}`;

/** Google's own "write a review" link for the profile */
export const GOOGLE_WRITE_REVIEW_URL = `https://search.google.com/local/writereview?placeid=${BUSINESS_INFO.placeId}`;
