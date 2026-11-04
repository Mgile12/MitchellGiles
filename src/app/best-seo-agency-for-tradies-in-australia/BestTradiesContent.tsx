import Link from 'next/link';
import { BUSINESS_INFO } from '@/lib/business-info';
import SiteShell from '@/components/site/SiteShell';
import { CtaSection, FigureBand, LinksSection, PageHero, ProofRows, SectionHead } from '@/components/site/Blocks';

const PATH = '/best-seo-agency-for-tradies-in-australia';
const IMAGE = `${PATH}.jpg`;
const ALT = 'Best SEO Agency For Tradies in Australia';
const IMG = `/images/best-seo-agency-for-tradies-in-australia/best-seo-agency-for-tradies-in-australia`;

// Every figure is from a client Business Profile or a ranking scan, and each one is written up in the case studies.
const figures = [
  { figure: '208', label: 'calls in a quarter, two plumbers, from 79' },
  { figure: '49 of 49', label: 'grid points at number 1, Perth plumber, from 5' },
  { figure: '2.7x', label: 'calls, Gold Coast plumber, 43 to 118' },
  { figure: '2.5x', label: 'calls, Logan plumber, 36 to 90' },
];

const proof = [
  {
    title: 'Two plumbers, 79 calls to 208',
    body:
      'A Gold Coast plumber was getting 10 to 18 calls a month from Google at the start of 2026. Fixed and worked every week from April, the profile took 118 calls in July to September, up from 43 in the quarter before the work. A Logan plumber handed over a profile that about 200 people a month were seeing. In the first three months it was seen 2,650 times and calls went from 36 to 90.',
    images: [
      { src: `${IMG}-gold-coast-plumber-google-maps-ranking-after.jpg`, alt: `${ALT}: Gold Coast plumber Google Maps ranking grid, 1 October 2026, top 3 at 46 of 49 points` },
      { src: `${IMG}-logan-plumber-google-maps-ranking-after.jpg`, alt: `${ALT}: Logan plumber Google Maps ranking grid, 1 October 2026, after three months of work` },
    ],
  },
  {
    title: 'Number 1 at every point of the grid',
    body:
      'A Perth plumber already owned the home suburb but sat second across most of the map. Five weeks after the work started, the profile was number 1 on all 49 scan points for “plumber” plus its suburb, up from 5, and calls rose from about 5 a week to about 8. That is the test for a tradie: not one suburb, the whole area they drive to.',
    images: [
      { src: `${IMG}-perth-plumber-google-maps-ranking-before.jpg`, alt: `${ALT}: Perth plumber Google Maps ranking grid, 24 July 2026, number 1 at 5 of 49 points` },
      { src: `${IMG}-perth-plumber-google-maps-ranking-after.jpg`, alt: `${ALT}: Perth plumber Google Maps ranking grid, 28 August 2026, number 1 at all 49 points` },
    ],
  },
  {
    title: 'The befores, and what the numbers mean',
    body:
      'The grids from before the work, so you can see the gap. “Calls” is Google’s count of taps on the Call button: people who tried to ring, not jobs won. Each grid is one search wording on one day. Every case study states its dates, windows and limits, because a number without those is a claim, not proof.',
    images: [
      { src: `${IMG}-gold-coast-plumber-google-maps-ranking-before.jpg`, alt: `${ALT}: Gold Coast plumber Google Maps ranking grid before the work` },
      { src: `${IMG}-logan-plumber-google-maps-ranking-before.jpg`, alt: `${ALT}: Logan plumber Google Maps ranking grid, 27 July 2026, before the work` },
    ],
  },
];

const REVIEWS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS_INFO.legalName)}&query_place_id=${BUSINESS_INFO.placeId}`;

export default function BestTradiesContent() {
  return (
    <SiteShell>
      <PageHero
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Best SEO Agency For Tradies in Australia' }]}
        kicker='The proof'
        title={<>Best SEO Agency For Tradies in <span className="s-accent">Australia</span></>}
        lead={<p>MRG Marketing has been called the Best SEO Agency For Tradies in Australia. I&apos;m Mitchell Giles, and MRG is an internet marketing service in Ormeau, Queensland, that does one job: getting tradies into the top 3 on Google Maps, from Queensland to Western Australia. Most of the work is white-label for other agencies, so the businesses are not named. The numbers are, and every one comes from a client&apos;s Google Business Profile or a ranking scan.</p>}
        links={<Link href="/seo-for-tradies-gold-coast/">How I do SEO for tradies →</Link>}
        variant='best-tradies'
        image={{ src: IMAGE, alt: ALT, title: ALT, width: 1536, height: 1024 }}
      />

      <FigureBand figures={figures} />

      <section className="s-sec s-white" aria-labelledby="proof-heading">
        <div className="s-wrap s-stack-lg">
          <SectionHead kicker='In numbers' id="proof-heading" title={<>What the Best SEO Agency For Tradies in Australia looks like <span className="s-accent">on a screen.</span></>} lead={<p>Ranking grids straight out of the scanning tool, before and after. Business names are cropped out because the work is done white-label for other agencies.</p>} />
          <ProofRows rows={proof} />
        </div>
      </section>

      <CtaSection kicker='Why it works for trades' title={<>One trade at a time, one suburb at a time, <span className="s-accent">every week.</span></>} variant='best-tradies' after="No pitch.">
        <p>Tradie searches are the purest local intent there is: the person is at home, the problem is now, and they ring the first profile that looks right. So I start with the suburbs closest to you and push outwards, and the person you speak to is the person in the account. You can check every result yourself, including the <a href={REVIEWS_URL} target="_blank" rel="noopener noreferrer">reviews on Google</a>.</p>
        <p>If you are looking for the Best SEO Agency For Tradies in Australia, don&apos;t take the label on trust. Tell me your trade and your suburbs, and I&apos;ll send you a short video of your own map position, with the scans closest to your situation. If I can help, you get a plan. If I can&apos;t, I&apos;ll say so.</p>
      </CtaSection>

      <LinksSection title="Keep reading" intro="Where the proof comes from and where it goes: the services, the parts of the job, the trades, the suburbs." current='/best-seo-agency-for-tradies-in-australia/' />
    </SiteShell>
  );
}
