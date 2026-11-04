import Link from 'next/link';
import { BUSINESS_INFO } from '@/lib/business-info';
import SiteShell from '@/components/site/SiteShell';
import { CtaSection, FigureBand, LinksSection, PageHero, ProofRows, SectionHead } from '@/components/site/Blocks';

const IMAGE = '/best-local-seo-expert-in-gold-coast.jpg';
const ALT = 'best local seo expert in gold coast';

// Every figure is from a client Business Profile or a ranking scan; the screenshots are the ones already published on this site.
const figures = [
  { figure: '2 days', label: 'page two to the top 3 on Google Maps' },
  { figure: '11 days', label: 'for a second client to do the same' },
  { figure: '266', label: 'calls in five months from one profile' },
  { figure: '+273%', label: 'website clicks from Maps, year on year' },
];

const proof = [
  {
    title: 'Four plumbers, white-label',
    body:
      'Work I do for another agency, so the businesses are not named. Two plumbers went from 79 calls from Google in the three months before the work to 208 in the latest three, one of them 2.7x and the other 2.5x. A Perth plumber went from number 1 at 5 of 49 grid points to all 49 in five weeks. Each one is written up with dates, scans and caveats in the case studies.',
    images: [
      { src: '/images/best-local-seo-expert-in-gold-coast/best-local-seo-expert-in-gold-coast-gold-coast-plumber-google-maps-ranking-after.jpg', alt: 'best local seo expert in gold coast: Gold Coast plumber Google Maps ranking grid, 1 October 2026, top 3 at 46 of 49 points' },
      { src: '/images/best-local-seo-expert-in-gold-coast/best-local-seo-expert-in-gold-coast-perth-plumber-google-maps-ranking-after.jpg', alt: 'best local seo expert in gold coast: Perth plumber Google Maps ranking grid, 28 August 2026, number 1 at all 49 points' },
    ],
  },
  {
    title: 'Page two to the top 3, with the scans to show it',
    body:
      'Local SEO is measured on a map, not a keyword tool. Polish Hub Marine Detailing went from outside the top 10 across most of a ranking grid to the top 3 on most points in two days. Ceramics Gold Coast did the same in eleven, from an average rank of 20 across the grid to 3.02. Both are written up with dates, search terms and the limits of the scan in the case studies.',
    images: [
      { src: '/images/best-local-seo-expert-in-gold-coast/best-local-seo-expert-in-gold-coast-polish-hub-google-maps-ranking-after.jpg', alt: 'best local seo expert in gold coast: Polish Hub Google Maps ranking grid after, top 3 across the grid' },
      { src: '/images/best-local-seo-expert-in-gold-coast/best-local-seo-expert-in-gold-coast-ceramics-gold-coast-google-maps-ranking-after.jpg', alt: 'best local seo expert in gold coast: Ceramics Gold Coast Google Maps ranking grid after, top 3 across the grid' },
    ],
  },
  {
    title: 'Why it moved: the website and the profile said the same thing',
    body:
      'Both fixes were the same. A page for each service and suburb, in the words people here actually type. The Business Profile set to the same categories and services as the website. Real photos, every review answered, then the weekly routine. Google rewards a business whose profile and website agree. Most local sites contradict their own listing.',
    images: [
      { src: '/images/best-local-seo-expert-in-gold-coast/best-local-seo-expert-in-gold-coast-polish-hub-google-maps-ranking-before.jpg', alt: 'best local seo expert in gold coast: Polish Hub Google Maps ranking grid before' },
      { src: '/images/best-local-seo-expert-in-gold-coast/best-local-seo-expert-in-gold-coast-ceramics-gold-coast-google-maps-ranking-before.jpg', alt: 'best local seo expert in gold coast: Ceramics Gold Coast Google Maps ranking grid before' },
    ],
  },
  {
    title: 'Rankings that turn into calls',
    body:
      'One profile took 266 calls in five months, up 23% on the year before, through the quietest stretch of the year. Another did 89 calls in a month, up 324% on the same months last year. A brand-new profile went from zero to 33 calls in its first three months. "Calls" is Google’s own metric, taps on the call button, so it counts people who tried to ring, not jobs won.',
    images: [
      { src: '/images/best-local-seo-expert-in-gold-coast/best-local-seo-expert-in-gold-coast-google-business-profile-calls-266-up-23-percent.png', alt: 'best local seo expert in gold coast: 266 calls in five months from a Google Business Profile, up 23%' },
      { src: '/images/best-local-seo-expert-in-gold-coast/best-local-seo-expert-in-gold-coast-google-business-profile-calls-33-from-zero.png', alt: 'best local seo expert in gold coast: 33 calls in the first three months of a new Google Business Profile' },
    ],
  },
  {
    title: 'And into website visits',
    body:
      'Website clicks from one profile rose 273% year on year to 164. Another rose 197% to 303. These are people who found the business on Maps and went looking for the site, which is where the service pages do their job and the booking happens.',
    images: [
      { src: '/images/best-local-seo-expert-in-gold-coast/best-local-seo-expert-in-gold-coast-google-business-profile-website-clicks-164-up-273-percent.png', alt: 'best local seo expert in gold coast: 164 website clicks from a Google Business Profile, up 273%' },
      { src: '/images/best-local-seo-expert-in-gold-coast/best-local-seo-expert-in-gold-coast-google-business-profile-website-clicks-303-up-197-percent.png', alt: 'best local seo expert in gold coast: 303 website clicks from a Google Business Profile, up 197%' },
    ],
  },
];

const REVIEWS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS_INFO.legalName)}&query_place_id=${BUSINESS_INFO.placeId}`;

export default function BestSeoContent() {
  return (
    <SiteShell>
      <PageHero
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Best Local SEO Expert in Gold Coast' }]}
        kicker='Local SEO'
        title={<>Best Local SEO Expert in <span className="s-accent">Gold Coast</span></>}
        lead={<p>MRG Marketing has been called the best local SEO expert in Gold Coast. I&apos;m Mitchell Giles, I run MRG from Ormeau, and local SEO is the whole job: getting a local business into the top 3 on Google Maps for the searches a few kilometres from its door, and keeping it there. &ldquo;Best&rdquo; is a big claim, so here is what it rests on. Every number is from a client Business Profile or a ranking scan.</p>}
        links={<Link href="/case-studies/">Read the case studies →</Link>}
        variant='best-local-seo'
        image={{ src: IMAGE, alt: ALT, title: ALT, width: 1200, height: 1200 }}
      />

      <FigureBand figures={figures} />

      <section className="s-sec s-white" aria-labelledby="proof-heading">
        <div className="s-wrap s-stack-lg">
          <SectionHead kicker='The proof' id="proof-heading" title={<>What local SEO looks like <span className="s-accent">when it works.</span></>} lead={<p>Rankings, calls and website clicks straight out of Google. Tap any screenshot to open it. Some business names are cropped out because the work is done white-label for other agencies.</p>} />
          <ProofRows rows={proof} />
        </div>
      </section>

      <CtaSection kicker='How I work' title={<>One service, one person, <span className="s-accent">until the numbers move.</span></>} variant='best-local-seo' after="No pitch.">
        <p>I only do local SEO, Google Business Profile and AI search work. The person you speak to on the call is the person in the account. No account manager, no packages, no lock-in. I plan for 90 days, tell you on the call what is realistic for your category, and you can check every result yourself, including the <a href={REVIEWS_URL} target="_blank" rel="noopener noreferrer">reviews on Google</a>.</p>
        <p>If you are looking for the best local SEO expert in Gold Coast, don&apos;t take the label on trust. Tell me what you do and where, and I&apos;ll send you a short video of your own map position, with the scans and profile numbers closest to your situation. If I can help, you get a plan. If I can&apos;t, I&apos;ll say so.</p>
      </CtaSection>

      <LinksSection title="Keep reading" intro="Where the proof comes from and where it goes: the services, the parts of the job, the trades, the suburbs." current='/best-local-seo-expert-in-gold-coast/' />
    </SiteShell>
  );
}
