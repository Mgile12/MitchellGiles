import Link from 'next/link';
import { ArrowRight, ChevronRight, Map, Phone, MousePointerClick, FileText } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/business-info';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import CountUp from '@/components/CountUp';
import Eyebrow from '@/components/Eyebrow';
import RevealText from '@/components/RevealText';
import LinkWeb from '@/components/LinkWeb';

const IMAGE = '/best-local-seo-expert-in-gold-coast.jpg';
const ALT = 'best local seo expert in gold coast';

// Every figure is from a client Business Profile or a ranking scan; the screenshots are the ones already published on this site.
const headline = [
  { figure: '2 days', label: 'page two to the top 3 on Google Maps' },
  { figure: '11 days', label: 'for a second client to do the same' },
  { figure: '266', label: 'calls in five months from one profile' },
  { figure: '+273%', label: 'website clicks from Maps, year on year' },
];

const proof = [
  {
    icon: Map,
    title: 'Four plumbers, white-label',
    body:
      'Work I do for another agency, so the businesses are not named. Two plumbers went from 79 calls from Google in the three months before the work to 208 in the latest three, one of them 2.7x and the other 2.5x. A Perth plumber went from number 1 at 5 of 49 grid points to all 49 in five weeks. Each one is written up with dates, scans and caveats in the case studies.',
    images: [
      { src: '/images/best-local-seo-expert-in-gold-coast/best-local-seo-expert-in-gold-coast-gold-coast-plumber-google-maps-ranking-after.jpg', alt: 'best local seo expert in gold coast: Gold Coast plumber Google Maps ranking grid, 1 October 2026, top 3 at 46 of 49 points' },
      { src: '/images/best-local-seo-expert-in-gold-coast/best-local-seo-expert-in-gold-coast-perth-plumber-google-maps-ranking-after.jpg', alt: 'best local seo expert in gold coast: Perth plumber Google Maps ranking grid, 28 August 2026, number 1 at all 49 points' },
    ],
  },
  {
    icon: Map,
    title: 'Page two to the top 3, with the scans to show it',
    body:
      'Local SEO is measured on a map, not a keyword tool. Polish Hub Marine Detailing went from outside the top 10 across most of a ranking grid to the top 3 on most points in two days. Ceramics Gold Coast did the same in eleven, from an average rank of 20 across the grid to 3.02. Both are written up with dates, search terms and the limits of the scan in the case studies.',
    images: [
      { src: '/images/best-local-seo-expert-in-gold-coast/best-local-seo-expert-in-gold-coast-polish-hub-google-maps-ranking-after.jpg', alt: 'best local seo expert in gold coast: Polish Hub Google Maps ranking grid after, top 3 across the grid' },
      { src: '/images/best-local-seo-expert-in-gold-coast/best-local-seo-expert-in-gold-coast-ceramics-gold-coast-google-maps-ranking-after.jpg', alt: 'best local seo expert in gold coast: Ceramics Gold Coast Google Maps ranking grid after, top 3 across the grid' },
    ],
  },
  {
    icon: FileText,
    title: 'Why it moved: the website and the profile said the same thing',
    body:
      'Both fixes were the same. A page for each service and suburb, in the words people here actually type. The Business Profile set to the same categories and services as the website. Real photos, every review answered, then the weekly routine. Google rewards a business whose profile and website agree. Most local sites contradict their own listing.',
    images: [
      { src: '/images/best-local-seo-expert-in-gold-coast/best-local-seo-expert-in-gold-coast-polish-hub-google-maps-ranking-before.jpg', alt: 'best local seo expert in gold coast: Polish Hub Google Maps ranking grid before' },
      { src: '/images/best-local-seo-expert-in-gold-coast/best-local-seo-expert-in-gold-coast-ceramics-gold-coast-google-maps-ranking-before.jpg', alt: 'best local seo expert in gold coast: Ceramics Gold Coast Google Maps ranking grid before' },
    ],
  },
  {
    icon: Phone,
    title: 'Rankings that turn into calls',
    body:
      'One profile took 266 calls in five months, up 23% on the year before, through the quietest stretch of the year. Another did 89 calls in a month, up 324% on the same months last year. A brand-new profile went from zero to 33 calls in its first three months. "Calls" is Google’s own metric, taps on the call button, so it counts people who tried to ring, not jobs won.',
    images: [
      { src: '/images/best-local-seo-expert-in-gold-coast/best-local-seo-expert-in-gold-coast-google-business-profile-calls-266-up-23-percent.png', alt: 'best local seo expert in gold coast: 266 calls in five months from a Google Business Profile, up 23%' },
      { src: '/images/best-local-seo-expert-in-gold-coast/best-local-seo-expert-in-gold-coast-google-business-profile-calls-33-from-zero.png', alt: 'best local seo expert in gold coast: 33 calls in the first three months of a new Google Business Profile' },
    ],
  },
  {
    icon: MousePointerClick,
    title: 'And into website visits',
    body:
      'Website clicks from one profile rose 273% year on year to 164. Another rose 197% to 303. These are people who found the business on Maps and went looking for the site, which is where the service pages do their job and the booking happens.',
    images: [
      { src: '/images/best-local-seo-expert-in-gold-coast/best-local-seo-expert-in-gold-coast-google-business-profile-website-clicks-164-up-273-percent.png', alt: 'best local seo expert in gold coast: 164 website clicks from a Google Business Profile, up 273%' },
      { src: '/images/best-local-seo-expert-in-gold-coast/best-local-seo-expert-in-gold-coast-google-business-profile-website-clicks-303-up-197-percent.png', alt: 'best local seo expert in gold coast: 303 website clicks from a Google Business Profile, up 197%' },
    ],
  },
];

export default function BestSeoContent() {
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
              <li className="text-ink/80">Best Local SEO Expert in Gold Coast</li>
            </ol>
          </nav>

          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14 items-center">
            <div className="lg:col-span-7">
              <Eyebrow align="left" className="mb-5">
                Local SEO
              </Eyebrow>
              <h1
                id="page-heading"
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink leading-[1.08] font-serif"
              >
                Best Local SEO Expert in Gold Coast
              </h1>
              <p className="mt-7 text-lg sm:text-xl text-ink/80 leading-relaxed font-sans max-w-2xl">
                MRG Marketing has been called the best local SEO expert in Gold Coast. I&apos;m Mitchell Giles, I run
                MRG from Ormeau, and local SEO is the whole job: getting a local business into the top 3 on Google Maps
                for the searches a few kilometres from its door, and keeping it there. &ldquo;Best&rdquo; is a big
                claim, so here is what it rests on. Every number is from a client Business Profile or a ranking scan.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
                <Link
                  href="https://calendar.notion.com/meet/mitchellgiles134/tovi31rm"
                  className="gold-flat-btn inline-flex items-center justify-center gap-2 rounded-lg px-7 py-3.5 text-sm font-semibold group"
                >
                  Book a 30-minute call
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-ink/70 transition-colors duration-150 font-sans"
                >
                  Read the case studies <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <AnimateOnScroll className="lg:col-span-5">
              <div className="relative mx-auto max-w-sm lg:max-w-none">
                <div className="absolute -inset-3 rounded-[2rem] bg-white/60 blur-2xl" aria-hidden="true" />
                <img
                  src={IMAGE}
                  alt={ALT}
                  title={ALT}
                  width={1200}
                  height={1200}
                  className="relative w-full aspect-square object-cover rounded-3xl border border-ink/10 shadow-[0_24px_64px_rgba(0,0,0,0.16)]"
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
              The proof
            </Eyebrow>
            <h2 id="proof-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink font-serif">
              <RevealText text="What local SEO looks like when it works." />
            </h2>
            <p className="mt-5 text-base sm:text-lg text-ink/65 font-sans">
              Rankings, calls and website clicks straight out of Google. Tap any screenshot to open it. Some business
              names are cropped out because the work is done white-label for other agencies.
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
                        <img src={img.src} alt={img.alt} loading="lazy" decoding="async" className="w-full h-auto rounded-xl block" />
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
      <LinkWeb current="/best-local-seo-expert-in-gold-coast" intro="Where the proof comes from and where it goes: the services, the parts of the job, the trades, the suburbs." />
            {/* Why + CTA */}
      <section className="relative bg-navy-900 overflow-hidden" aria-labelledby="why-heading">
        <div className="absolute top-0 left-0 right-0 h-px bg-ink/10" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
          <AnimateOnScroll>
            <Eyebrow className="mb-4">How I work</Eyebrow>
            <h2 id="why-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink font-serif">
              <RevealText text="One service, one person, until the numbers move." />
            </h2>
            <p className="mt-7 text-lg text-ink/80 leading-relaxed font-sans">
              I only do local SEO, Google Business Profile and AI search work. The person you speak to on the call is
              the person in the account. No account manager, no packages, no lock-in. I plan for 90 days, tell you on
              the call what is realistic for your category, and you can check every result yourself, including the{' '}
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
              If you are looking for the best local SEO expert in Gold Coast, don&apos;t take the label on trust. Book
              30 minutes, tell me what you do and where, and I&apos;ll show you the scans and profile numbers closest to
              your situation. If I can help, you get a plan. If I can&apos;t, I&apos;ll say so.
            </p>
            <div className="mt-10">
              <Link
                href="https://calendar.notion.com/meet/mitchellgiles134/tovi31rm"
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
