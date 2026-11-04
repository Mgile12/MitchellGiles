import Link from 'next/link';
import { BUSINESS_INFO } from '@/lib/business-info';
import SiteShell from '@/components/site/SiteShell';
import { CtaSection, FigureBand, LinksSection, PageHero, ProofRows, SectionHead } from '@/components/site/Blocks';

const IMAGE = '/best-marketing-agency-in-gold-coast.jpg';
const ALT = 'best marketing agency in gold coast';

// Every figure is from a client Business Profile or a ranking scan; the screenshots are the ones already published on this site.
const figures = [
  { figure: '2 days', label: 'page two to the top 3 on Google Maps' },
  { figure: '266', label: 'calls in five months from one Business Profile' },
  { figure: '+324%', label: 'calls on the same five months last year' },
  { figure: '+273%', label: 'website clicks from Maps, year on year' },
];

const proof = [
  {
    title: 'Four plumbers, white-label',
    body:
      'Work I do for another agency, so the businesses are not named. Two plumbers went from 79 calls from Google in the three months before the work to 208 in the latest three, one of them 2.7x and the other 2.5x. A Perth plumber went from number 1 at 5 of 49 grid points to all 49 in five weeks. Each one is written up with dates, scans and caveats in the case studies.',
    images: [
      { src: '/images/best-marketing-agency-in-gold-coast/best-marketing-agency-in-gold-coast-gold-coast-plumber-google-maps-ranking-after.jpg', alt: 'best marketing agency in gold coast: Gold Coast plumber Google Maps ranking grid, 1 October 2026, top 3 at 46 of 49 points' },
      { src: '/images/best-marketing-agency-in-gold-coast/best-marketing-agency-in-gold-coast-perth-plumber-google-maps-ranking-after.jpg', alt: 'best marketing agency in gold coast: Perth plumber Google Maps ranking grid, 28 August 2026, number 1 at all 49 points' },
    ],
  },
  {
    title: 'Page two to the top 3 on Google Maps',
    body:
      'Two ranking scans, days apart. Polish Hub Marine Detailing went from outside the top 10 across most of the grid to the top 3 on most points in two days. Ceramics Gold Coast did the same in eleven, from an average rank of 20 to 3.02. Both are written up with the dates and the limits of the scan in the case studies.',
    images: [
      { src: '/images/best-marketing-agency-in-gold-coast/best-marketing-agency-in-gold-coast-polish-hub-google-maps-ranking-after.jpg', alt: 'best marketing agency in gold coast: Polish Hub Google Maps ranking grid after, top 3 across the grid' },
      { src: '/images/best-marketing-agency-in-gold-coast/best-marketing-agency-in-gold-coast-ceramics-gold-coast-google-maps-ranking-after.jpg', alt: 'best marketing agency in gold coast: Ceramics Gold Coast Google Maps ranking grid after, top 3 across the grid' },
    ],
  },
  {
    title: 'The phone',
    body:
      'One Business Profile took 266 calls in five months, up 23% on the year before, through the quietest stretch of the year. Another did 89 calls in a month, up 324% on the same five months last year. A third went from 168 calls to 83% more. "Calls" is Google’s own metric, taps on the profile’s call button, so it counts people who tried to ring, not jobs won.',
    images: [
      { src: '/images/best-marketing-agency-in-gold-coast/best-marketing-agency-in-gold-coast-google-business-profile-calls-266-up-23-percent.png', alt: 'best marketing agency in gold coast: 266 calls in five months from a Google Business Profile, up 23%' },
      { src: '/images/best-marketing-agency-in-gold-coast/best-marketing-agency-in-gold-coast-google-business-profile-calls-89-up-324-percent.png', alt: 'best marketing agency in gold coast: 89 calls from a Google Business Profile, up 324%' },
    ],
  },
  {
    title: 'Website clicks from Maps',
    body:
      'Website clicks from one profile rose 273% year on year to 164. Another rose 197% to 303. A third did 227 in August alone, up 21% on the August before. These are people who found the business on Maps and went looking for the website, which is where the booking happens.',
    images: [
      { src: '/images/best-marketing-agency-in-gold-coast/best-marketing-agency-in-gold-coast-google-business-profile-website-clicks-164-up-273-percent.png', alt: 'best marketing agency in gold coast: 164 website clicks from a Google Business Profile, up 273%' },
      { src: '/images/best-marketing-agency-in-gold-coast/best-marketing-agency-in-gold-coast-google-business-profile-website-clicks-303-up-197-percent.png', alt: 'best marketing agency in gold coast: 303 website clicks from a Google Business Profile, up 197%' },
    ],
  },
  {
    title: 'A profile from zero',
    body:
      'A brand-new Business Profile with nothing behind it: 33 calls and 88 interactions in its first three months, from zero. No ads, no list, no history. Just a profile set up properly and worked every week.',
    images: [
      { src: '/images/best-marketing-agency-in-gold-coast/best-marketing-agency-in-gold-coast-google-business-profile-calls-33-from-zero.png', alt: 'best marketing agency in gold coast: 33 calls in the first three months of a new Google Business Profile' },
      { src: '/images/best-marketing-agency-in-gold-coast/best-marketing-agency-in-gold-coast-google-business-profile-interactions-88-from-zero.png', alt: 'best marketing agency in gold coast: 88 interactions in the first three months of a new Google Business Profile' },
    ],
  },
];

const REVIEWS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS_INFO.legalName)}&query_place_id=${BUSINESS_INFO.placeId}`;

export default function BestAgencyContent() {
  return (
    <SiteShell>
      <PageHero
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Best Marketing Agency in Gold Coast' }]}
        kicker='The proof'
        title={<>Best Marketing Agency in <span className="s-accent">Gold Coast</span></>}
        lead={<p>MRG Marketing has been called the best marketing agency in Gold Coast. I&apos;m Mitchell Giles, and MRG is an internet marketing service in Ormeau that does one thing: getting local businesses found, through local SEO, Google Business Profile optimisation and AI search. &ldquo;Best&rdquo; is a big word, so here is what the people who said it were looking at. Every number on this page comes from a client Business Profile or a ranking scan, and the screenshots are untouched.</p>}
        links={<Link href="/case-studies/">Read the case studies →</Link>}
        variant='best-agency'
        image={{ src: IMAGE, alt: ALT, width: 1200, height: 1200 }}
      />

      <FigureBand figures={figures} />

      <section className="s-sec s-white" aria-labelledby="proof-heading">
        <div className="s-wrap s-stack-lg">
          <SectionHead kicker='In numbers' id="proof-heading" title={<>What the best marketing agency in Gold Coast looks like <span className="s-accent">on a screen.</span></>} lead={<p>Rankings, calls and website clicks straight out of Google. Tap any screenshot to open it. Some business names are cropped out because the work is done white-label for other agencies.</p>} />
          <ProofRows rows={proof} />
        </div>
      </section>

      <CtaSection kicker='Why it works' title={<>One service, one person, <span className="s-accent">until the numbers move.</span></>} variant='best-agency' after="No pitch.">
        <p>I only do local SEO, Google Business Profile and AI search work, so every hour goes into the thing that makes a local phone ring. The person you speak to on the call is the person in the account. No account manager, no packages, no lock-in, and you can check every result yourself, including the <a href={REVIEWS_URL} target="_blank" rel="noopener noreferrer">reviews on Google</a>.</p>
        <p>If you are looking for the best marketing agency in Gold Coast, don&apos;t take the label on trust. Tell me what you do and where, and I&apos;ll send you a short video of your own map position, with the scans and the profile numbers closest to your situation. If I can help, you get a plan. If I can&apos;t, I&apos;ll say so.</p>
      </CtaSection>

      <LinksSection title="Keep reading" intro="Where the proof comes from and where it goes: the services, the parts of the job, the trades, the suburbs." current='/best-marketing-agency-in-gold-coast/' />
    </SiteShell>
  );
}
