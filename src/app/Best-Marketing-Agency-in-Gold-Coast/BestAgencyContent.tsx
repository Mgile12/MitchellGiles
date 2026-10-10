import Link from 'next/link';
import { ArrowRight, ChevronRight, MapPin, Mail, Megaphone, Ticket, ShoppingCart } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/business-info';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import CountUp from '@/components/CountUp';
import Eyebrow from '@/components/Eyebrow';
import RevealText from '@/components/RevealText';

const IMAGE = '/best-marketing-agency-in-gold-coast.jpg';
const ALT = 'Mitchell Giles of MRG Marketing, best marketing agency in Gold Coast';

// Every figure is from a client account; the screenshots are the ones already published on this site.
const headline = [
  { figure: '6.88x', label: 'return on ad spend, three Meta ad sets' },
  { figure: '$60,632', label: 'from email in 30 days' },
  { figure: '266', label: 'calls in five months from one Business Profile' },
  { figure: '$425K', label: 'in a year, up 436%' },
];

const proof = [
  {
    icon: MapPin,
    title: 'Google Maps and the phone',
    body:
      'One Business Profile took 266 calls in five months, up 23% on the year before. Another did 89 calls in a month, up 324%. Website clicks from Maps rose 273% on one profile and 197% on another, and a new profile went from zero to 33 calls. These are trades and local services between Beenleigh and Helensvale, and the phone ringing is the whole point.',
    images: [
      { src: '/proof/gbp-calls-266-up-23.png', alt: '266 calls in five months, up 23%, from a client Google Business Profile' },
      { src: '/proof/gbp-calls-89-up-324.png', alt: '89 calls in a month, up 324%, from a client Google Business Profile' },
    ],
  },
  {
    icon: Mail,
    title: 'Email to a list they already had',
    body:
      'A store made $60,632 from email in 30 days, which was 63.4% of its revenue that month, from customers it had already paid to acquire once. One campaign to another list got a 72% open rate and a 10.3% click rate.',
    images: [
      { src: '/results/email-60k-in-30-days.webp', alt: '$60,632 in 30 days from email marketing, 63.4% of monthly revenue' },
      { src: '/results/email-72-open-rate.webp', alt: '72% open rate and 10.3% click rate on one email campaign' },
    ],
  },
  {
    icon: Megaphone,
    title: 'Meta Ads that paid for themselves',
    body: 'Three ad sets, 67 website purchases and more than $30,000 in sales for a 6.88x return on ad spend, straight from Ads Manager.',
    images: [{ src: '/results/meta-ads-6-88x-roas.webp', alt: '6.88x return on ad spend across three Meta ad sets, 67 purchases' }],
  },
  {
    icon: Ticket,
    title: 'Events',
    body:
      'A high-ticket upsell to the waitlist from a live event brought in $82,574 in under three hours with no ad spend. I ran the same sequence a second time and it worked again.',
    images: [{ src: '/results/event-upsell-82k.webp', alt: '$82,574 from one event upsell sequence in under three hours' }],
  },
  {
    icon: ShoppingCart,
    title: 'A full year',
    body:
      'One client finished twelve months at $425K, up 436%, on 1,801 orders and 1,425 bookings. The best week in that run did $100.3K from 49 orders and 87 form submissions without paid ads.',
    images: [
      { src: '/results/annual-425k.webp', alt: '$425K in twelve months, up 436%, 1,801 orders and 1,425 bookings' },
      { src: '/results/weekly-100k.webp', alt: '$100.3K in one week from 49 orders and 87 form submissions' },
    ],
  },
];

export default function BestAgencyContent() {
  return (
    <div className="bg-navy-950 min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden" aria-labelledby="page-heading">
        <div className="grid-ground absolute inset-0" aria-hidden="true" />
        <div className="glow w-[700px] h-[600px] -top-40 right-[-10%]" style={{ ['--glow-a' as string]: '0.14' }} aria-hidden="true" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 sm:pt-32 sm:pb-24">
          <nav aria-label="Breadcrumb" className="mb-8 font-sans text-sm text-slate-400">
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/" className="hover:text-white transition-colors duration-150">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="w-4 h-4" />
              </li>
              <li className="text-slate-300">Best Marketing Agency in Gold Coast</li>
            </ol>
          </nav>

          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14 items-center">
            <div className="lg:col-span-7">
              <Eyebrow className="mb-5">The proof</Eyebrow>
              <h1
                id="page-heading"
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08] font-serif"
              >
                Best Marketing Agency in Gold Coast
              </h1>
              <p className="mt-7 text-lg sm:text-xl text-slate-300 leading-relaxed font-sans max-w-2xl">
                MRG Marketing has been called the best marketing agency in Gold Coast. I&apos;m Mitchell Giles, and
                MRG is mostly me, working from Ormeau on the northern Gold Coast. &ldquo;Best&rdquo; is a big word,
                so here is what the people who said it were looking at. Every number on this page comes from a
                client account, and the screenshots are on this site for you to check.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
                <Link
                  href="/book"
                  className="gold-flat-btn inline-flex items-center justify-center gap-2 rounded-lg px-7 py-3.5 text-sm font-semibold group"
                >
                  Book a 30-minute call
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
                <Link
                  href="/#services"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold/80 transition-colors duration-150 font-sans"
                >
                  What I do <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <AnimateOnScroll className="lg:col-span-5">
              <div className="relative mx-auto max-w-sm lg:max-w-none">
                <div className="absolute -inset-3 rounded-[2rem] bg-gold/10 blur-2xl" aria-hidden="true" />
                <img
                  src={IMAGE}
                  alt={ALT}
                  width={1200}
                  height={1200}
                  className="relative w-full aspect-square object-cover rounded-3xl border border-white/10 shadow-[0_24px_64px_rgba(0,0,0,0.5)]"
                  decoding="async"
                  fetchPriority="high"
                />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Headline numbers */}
      <section className="relative bg-navy-900 border-y border-white/[0.06]" aria-label="Headline results">
        <AnimateOnScroll variant="group" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {headline.map((h) => (
            <div key={h.figure} className="rv-up">
              <p className="text-3xl sm:text-4xl font-bold text-white font-serif tabular-nums">
                <CountUp value={h.figure} />
              </p>
              <p className="mt-1.5 text-sm text-slate-400 font-sans leading-snug">{h.label}</p>
            </div>
          ))}
        </AnimateOnScroll>
      </section>

      {/* Proof */}
      <section className="relative overflow-hidden" aria-labelledby="proof-heading">
        <div className="grid-ground absolute inset-0" aria-hidden="true" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <AnimateOnScroll className="max-w-3xl mb-12 sm:mb-16">
            <Eyebrow className="mb-4">In numbers</Eyebrow>
            <h2 id="proof-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-serif">
              <RevealText text="What the best marketing agency in Gold Coast looks like on a screen." />
            </h2>
            <p className="mt-5 text-base sm:text-lg text-slate-400 font-sans">
              Revenue, calls and bookings, not impressions. Tap any screenshot to open it.
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
                    <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-gold/10 border border-gold/20 mb-5">
                      <Icon className="w-5 h-5 text-gold" aria-hidden="true" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white font-serif tracking-tight">{p.title}</h3>
                    <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-sans">{p.body}</p>
                  </div>
                  <div className={`lg:col-span-7 rv-up rv-delay-1 grid gap-4 ${p.images.length > 1 ? 'sm:grid-cols-2' : ''}`}>
                    {p.images.map((img) => (
                      <a
                        key={img.src}
                        href={img.src}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block rounded-2xl overflow-hidden border border-white/[0.08] bg-white/[0.03] p-2 hover:border-gold/40 transition-colors duration-200"
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

      {/* Why + CTA */}
      <section className="relative bg-navy-900 overflow-hidden" aria-labelledby="why-heading">
        <div className="absolute top-0 left-0 right-0 h-px bg-gold/20" />
        <div className="glow glow-breathe w-[700px] h-[500px] top-1/2 left-1/2" style={{ ['--glow-a' as string]: '0.12' }} aria-hidden="true" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
          <AnimateOnScroll>
            <Eyebrow className="mb-4">Why it works</Eyebrow>
            <h2 id="why-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-serif">
              <RevealText text="One consultant, in the account, until the numbers move." />
            </h2>
            <p className="mt-7 text-lg text-slate-300 leading-relaxed font-sans">
              The person you speak to on the call is the person doing the work. There is no account manager in
              between, no packages, and no lock-in. Budget goes where the results are, and you can check every
              result yourself, including the{' '}
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS_INFO.legalName)}&query_place_id=ChIJI7me_LgPkWsRiuaYKm_2oqc`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-gold/80 transition-colors duration-150"
              >
                reviews on Google
              </a>
              .
            </p>
            <p className="mt-5 text-lg text-slate-300 leading-relaxed font-sans">
              If you are looking for the best marketing agency in Gold Coast, don&apos;t take the label on trust. Book
              30 minutes, tell me what you sell and what&apos;s not working, and I&apos;ll show you the screenshots that
              match your situation. If I can help, you get a plan. If I can&apos;t, I&apos;ll say so.
            </p>
            <div className="mt-10">
              <Link
                href="/book"
                className="gold-flat-btn inline-flex items-center justify-center gap-2 rounded-lg px-8 py-4 text-base font-semibold group"
              >
                Book a 30-minute call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <p className="mt-4 text-sm text-slate-400 font-sans">No pitch.</p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
