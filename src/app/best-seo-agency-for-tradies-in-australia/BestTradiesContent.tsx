import Link from 'next/link';
import { ArrowRight, ChevronRight, Map, Phone, ClipboardCheck } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/business-info';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import CountUp from '@/components/CountUp';
import Eyebrow from '@/components/Eyebrow';
import RevealText from '@/components/RevealText';
import LinkWeb from '@/components/LinkWeb';

const PATH = '/best-seo-agency-for-tradies-in-australia';
const IMAGE = `${PATH}.jpg`;
const ALT = 'Best SEO Agency For Tradies in Australia';
const IMG = `/images/best-seo-agency-for-tradies-in-australia/best-seo-agency-for-tradies-in-australia`;

// Every figure is from a client Business Profile or a ranking scan, and each one is written up in the case studies.
const headline = [
  { figure: '208', label: 'calls in a quarter, two plumbers, from 79' },
  { figure: '49 of 49', label: 'grid points at number 1, Perth plumber, from 5' },
  { figure: '2.7x', label: 'calls, Gold Coast plumber, 43 to 118' },
  { figure: '2.5x', label: 'calls, Logan plumber, 36 to 90' },
];

const proof = [
  {
    icon: Phone,
    title: 'Two plumbers, 79 calls to 208',
    body:
      'A Gold Coast plumber was getting 10 to 18 calls a month from Google at the start of 2026. Fixed and worked every week from April, the profile took 118 calls in July to September, up from 43 in the quarter before the work. A Logan plumber handed over a profile that about 200 people a month were seeing. In the first three months it was seen 2,650 times and calls went from 36 to 90.',
    images: [
      { src: `${IMG}-gold-coast-plumber-google-maps-ranking-after.jpg`, alt: `${ALT}: Gold Coast plumber Google Maps ranking grid, 1 October 2026, top 3 at 46 of 49 points` },
      { src: `${IMG}-logan-plumber-google-maps-ranking-after.jpg`, alt: `${ALT}: Logan plumber Google Maps ranking grid, 1 October 2026, after three months of work` },
    ],
  },
  {
    icon: Map,
    title: 'Number 1 at every point of the grid',
    body:
      'A Perth plumber already owned the home suburb but sat second across most of the map. Five weeks after the work started, the profile was number 1 on all 49 scan points for “plumber” plus its suburb, up from 5, and calls rose from about 5 a week to about 8. That is the test for a tradie: not one suburb, the whole area they drive to.',
    images: [
      { src: `${IMG}-perth-plumber-google-maps-ranking-before.jpg`, alt: `${ALT}: Perth plumber Google Maps ranking grid, 24 July 2026, number 1 at 5 of 49 points` },
      { src: `${IMG}-perth-plumber-google-maps-ranking-after.jpg`, alt: `${ALT}: Perth plumber Google Maps ranking grid, 28 August 2026, number 1 at all 49 points` },
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'The befores, and what the numbers mean',
    body:
      'The grids from before the work, so you can see the gap. “Calls” is Google’s count of taps on the Call button: people who tried to ring, not jobs won. Each grid is one search wording on one day. Every case study states its dates, windows and limits, because a number without those is a claim, not proof.',
    images: [
      { src: `${IMG}-gold-coast-plumber-google-maps-ranking-before.jpg`, alt: `${ALT}: Gold Coast plumber Google Maps ranking grid before the work` },
      { src: `${IMG}-logan-plumber-google-maps-ranking-before.jpg`, alt: `${ALT}: Logan plumber Google Maps ranking grid, 27 July 2026, before the work` },
    ],
  },
];

export default function BestTradiesContent() {
  return (
    <div className="bg-navy-950 min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden" aria-labelledby="page-heading">
        <div className="grid-ground absolute inset-0" aria-hidden="true" />
        <div className="glow w-[700px] h-[600px] -top-40 right-[-10%]" style={{ ['--glow-a' as string]: '0.14' }} aria-hidden="true" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 sm:pt-32 sm:pb-24">
          <nav aria-label="Breadcrumb" className="mb-8 font-sans text-sm text-ink/65">
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/" className="hover:text-ink transition-colors duration-150">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="w-4 h-4" />
              </li>
              <li className="text-ink/80">Best SEO Agency For Tradies in Australia</li>
            </ol>
          </nav>

          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14 items-center">
            <div className="lg:col-span-6">
              <Eyebrow align="left" className="mb-5">
                The proof
              </Eyebrow>
              <h1
                id="page-heading"
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink leading-[1.08] font-serif"
              >
                Best SEO Agency For Tradies in Australia
              </h1>
              <p className="mt-7 text-lg sm:text-xl text-ink/80 leading-relaxed font-sans max-w-2xl">
                MRG Marketing has been called the Best SEO Agency For Tradies in Australia. I&apos;m Mitchell Giles, and
                MRG is an internet marketing service in Ormeau, Queensland, that does one job: getting tradies into the
                top 3 on Google Maps, from Queensland to Western Australia. Most of the work is white-label for other
                agencies, so the businesses are not named. The numbers are, and
                every one comes from a client&apos;s Google Business Profile or a ranking scan.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
                <Link
                  href={BUSINESS_INFO.bookingUrl}
                  className="gold-flat-btn inline-flex items-center justify-center gap-2 rounded-lg px-7 py-3.5 text-sm font-semibold group"
                >
                  Book a 30-minute call
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
                <Link
                  href="/seo-for-tradies-gold-coast"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-ink/70 transition-colors duration-150 font-sans"
                >
                  How I do SEO for tradies <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <AnimateOnScroll className="lg:col-span-6">
              <div className="relative">
                <div className="absolute -inset-3 rounded-[2rem] bg-white/60 blur-2xl" aria-hidden="true" />
                <img
                  src={IMAGE}
                  alt={ALT}
                  title={ALT}
                  width={1536}
                  height={1024}
                  className="relative w-full aspect-[3/2] object-cover rounded-3xl border border-ink/10 shadow-[0_24px_64px_rgba(0,0,0,0.16)]"
                  decoding="async"
                  fetchPriority="high"
                />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Headline numbers */}
      <section className="relative bg-navy-900 border-y border-ink/[0.08]" aria-label="Headline results">
        <AnimateOnScroll variant="group" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {headline.map((h) => (
            <div key={h.figure} className="rv-up">
              <p className="text-3xl sm:text-4xl font-bold text-ink font-serif tabular-nums">
                <CountUp value={h.figure} />
              </p>
              <p className="mt-1.5 text-sm text-ink/65 font-sans leading-snug">{h.label}</p>
            </div>
          ))}
        </AnimateOnScroll>
      </section>

      {/* Proof */}
      <section className="relative overflow-hidden" aria-labelledby="proof-heading">
        <div className="grid-ground absolute inset-0" aria-hidden="true" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <AnimateOnScroll className="max-w-3xl mb-12 sm:mb-16">
            <Eyebrow align="left" className="mb-4">
              In numbers
            </Eyebrow>
            <h2 id="proof-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink font-serif">
              <RevealText text="What the Best SEO Agency For Tradies in Australia looks like on a screen." />
            </h2>
            <p className="mt-5 text-base sm:text-lg text-ink/65 font-sans">
              Ranking grids straight out of the scanning tool, before and after. Business names are cropped out
              because the work is done white-label for other agencies.
            </p>
          </AnimateOnScroll>

          <div className="space-y-14 sm:space-y-20">
            {proof.map((p, i) => {
              const Icon = p.icon;
              return (
                <AnimateOnScroll
                  key={p.title}
                  variant="group"
                  className={`grid gap-8 lg:grid-cols-12 lg:gap-12 items-center ${i % 2 ? 'lg:[&>*:first-child]:order-2' : ''}`}
                >
                  <div className="lg:col-span-5 rv-up">
                    <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-white/70 border border-ink/10 mb-5">
                      <Icon className="w-5 h-5 text-ink" aria-hidden="true" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-ink font-serif tracking-tight">{p.title}</h3>
                    <p className="mt-4 text-base sm:text-lg text-ink/80 leading-relaxed font-sans">{p.body}</p>
                  </div>
                  <div className="lg:col-span-7 rv-up rv-delay-1 grid gap-4 sm:grid-cols-2">
                    {p.images.map((img) => (
                      <a
                        key={img.src}
                        href={img.src}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block rounded-2xl overflow-hidden border border-ink/10 bg-white/70 p-2 hover:border-ink/40 transition-colors duration-200"
                      >
                        <img src={img.src} alt={img.alt} title={img.alt} loading="lazy" decoding="async" className="w-full h-auto rounded-xl block" />
                      </a>
                    ))}
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cross-links */}
      <LinkWeb current={PATH} intro="Where the proof comes from and where it goes: the services, the parts of the job, the trades, the suburbs." />

      {/* Why + CTA */}
      <section className="relative bg-navy-900 overflow-hidden" aria-labelledby="why-heading">
        <div className="absolute top-0 left-0 right-0 h-px bg-ink/10" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
          <AnimateOnScroll>
            <Eyebrow className="mb-4">Why it works for trades</Eyebrow>
            <h2 id="why-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink font-serif">
              <RevealText text="One trade at a time, one suburb at a time, every week." />
            </h2>
            <p className="mt-7 text-lg text-ink/80 leading-relaxed font-sans">
              Tradie searches are the purest local intent there is: the person is at home, the problem is now, and
              they ring the first profile that looks right. So I start with the suburbs closest to you and push
              outwards, and the person you speak to is the person in the account. You can check every result
              yourself, including the{' '}
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS_INFO.legalName)}&query_place_id=${BUSINESS_INFO.placeId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-ink/70 transition-colors duration-150"
              >
                reviews on Google
              </a>
              .
            </p>
            <p className="mt-5 text-lg text-ink/80 leading-relaxed font-sans">
              If you are looking for the Best SEO Agency For Tradies in Australia, don&apos;t take the label on trust.
              Book 30 minutes, tell me your trade and your suburbs, and I&apos;ll show you the scans closest to your
              situation. If I can help, you get a plan. If I can&apos;t, I&apos;ll say so.
            </p>
            <div className="mt-10">
              <Link
                href={BUSINESS_INFO.bookingUrl}
                className="gold-flat-btn inline-flex items-center justify-center gap-2 rounded-lg px-8 py-4 text-base font-semibold group"
              >
                Book a 30-minute call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <p className="mt-4 text-sm text-ink/65 font-sans">No pitch.</p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
