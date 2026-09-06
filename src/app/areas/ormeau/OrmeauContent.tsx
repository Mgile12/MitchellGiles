import Link from 'next/link';
import { MapPin, Search, Megaphone, Mail, Sparkles, Ticket, ArrowRight, ChevronRight, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/business-info';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import CountUp from '@/components/CountUp';
import Eyebrow from '@/components/Eyebrow';
import RevealText from '@/components/RevealText';
import SpotlightLink from '@/components/SpotlightLink';

// Google Business Profile: MRG Marketing, 9 Laverton St, Ormeau
const PLACE_ID = 'ChIJI7me_LgPkWsRiuaYKm_2oqc';

export const faqItems = [
  {
    question: 'Do you only work with businesses in Ormeau?',
    answer:
      "No. Ormeau is where I'm based, so it's where I know the map best. Most of my clients are between Beenleigh and Helensvale, and I work with businesses across the Gold Coast and Brisbane. If your customers are here, that's what matters.",
  },
  {
    question: 'How long until my business shows up on Google Maps around Ormeau?',
    answer:
      'It depends on your category, how many competitors sit inside a few kilometres of you, and how complete your profile is today. Some profiles move within days once the basics are fixed. I plan on 90 days and tell you on the call what I think is realistic for yours.',
  },
  {
    question: 'Do I need a website to rank on Google Maps?',
    answer:
      "You can show up on Maps with a strong profile alone, but a website that names your services and your area is what keeps you there and turns a search into a call. If you don't have one, I'll tell you the cheapest sensible version, not the most expensive.",
  },
  {
    question: 'Which areas around Ormeau do you cover?',
    answer:
      'Ormeau Hills, Yatala, Pimpama, Coomera, Upper Coomera, Helensvale, Oxenford, and up to Beenleigh and Logan. Most searches in this corridor happen on a phone in a car, so the work is about where your customers are when they search, not just where your shed is.',
  },
  {
    question: 'Do you work with tradies?',
    answer:
      'Mostly, yes. Trades and local services are the bulk of my clients, because Google Maps is the cheapest source of customers they will ever get. I also work with event, membership and e-commerce businesses.',
  },
  {
    question: 'What happens on the 30-minute call?',
    answer:
      "You tell me what you sell and what's not working. I look at your profile, your site and the three businesses above you on the map. If I can help, you get a plan. If I can't, I'll say so and point you somewhere useful.",
  },
  {
    question: 'Can we meet in person?',
    answer:
      "Yes. I'm at 9 Laverton St in Ormeau. I'll come to your site anywhere from Beenleigh to Helensvale, or we can do it on a call if that's easier.",
  },
];

const servicesHere = [
  {
    title: 'Google Business Profile',
    blurb: 'Top 3 on Maps for the searches that happen within a few kilometres of you.',
    href: '/google-business-profile-gold-coast',
    icon: MapPin,
  },
  {
    title: 'Local SEO',
    blurb: 'A page for every service and every suburb you serve, so Google has something to rank.',
    href: '/seo-gold-coast',
    icon: Search,
  },
  {
    title: 'Meta Ads',
    blurb: 'Offers to a 20-kilometre radius on Facebook and Instagram, tracked to the enquiry.',
    href: '/meta-ads-agency',
    icon: Megaphone,
  },
  {
    title: 'Email Marketing',
    blurb: 'The customers you already have, brought back. One client does 63% of monthly sales this way.',
    href: '/email-marketing-gold-coast',
    icon: Mail,
  },
  {
    title: 'AI Automations',
    blurb: 'Follow-up, review requests and booking reminders that run whether or not you are on the tools.',
    href: '/book',
    icon: Sparkles,
  },
  {
    title: 'Event Tickets',
    blurb: 'Fill the room and lift the spend per head. One upsell did $82K in three hours, twice.',
    href: '/book',
    icon: Ticket,
  },
];

const nearby = ['Ormeau Hills', 'Yatala', 'Pimpama', 'Coomera', 'Upper Coomera', 'Helensvale', 'Oxenford', 'Beenleigh'];

export default function OrmeauContent() {
  return (
    <div className="bg-navy-950 min-h-screen text-white">
      {/* Hero */}
      <section className="hero-grain relative overflow-hidden bg-navy-950">
        <div className="hero-grid absolute inset-0 z-0" aria-hidden="true" />
        <div className="glow w-[560px] h-[560px] -top-40 -left-32" style={{ ['--glow-a' as string]: '0.16' }} aria-hidden="true" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 lg:pt-40 pb-16 lg:pb-20">
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8 font-sans" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-gold transition-colors duration-200">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
            <Link href="/areas" className="hover:text-gold transition-colors duration-200">Areas we serve</Link>
            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
            <span className="text-slate-300">Ormeau</span>
          </nav>

          <div className="max-w-3xl">
            <Eyebrow align="left" className="mb-5">Ormeau, northern Gold Coast</Eyebrow>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-white leading-[1.05] font-serif">
              Marketing for Ormeau businesses
            </h1>
            <p className="mt-6 text-lg md:text-xl leading-relaxed text-slate-300 font-sans max-w-2xl">
              I&apos;m a marketing consultant based at {BUSINESS_INFO.address.street}, Ormeau. If you run a business here, in
              Ormeau Hills, or anywhere along the M1 between Yatala and Coomera, this page is what works in this
              corridor, what doesn&apos;t, and what I&apos;d do first.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/book"
                className="gold-flat-btn inline-flex items-center justify-center gap-3 h-12 rounded-lg px-7 text-sm font-semibold tracking-wide"
              >
                Book a 30-minute call <Phone className="w-4 h-4" />
              </Link>
              <a
                href="#services-here"
                className="press inline-flex items-center justify-center gap-3 h-12 rounded-lg px-7 text-sm font-semibold tracking-wide border border-white/20 text-white bg-white/5 hover:bg-white/10 hover:border-white/40"
              >
                What I do here <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Ormeau, from someone who lives here */}
      <section className="relative bg-navy-900 overflow-hidden" aria-labelledby="ormeau-heading">
        <div className="grid-ground absolute inset-0" aria-hidden="true" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <AnimateOnScroll className="lg:col-span-7">
              <Eyebrow align="left" className="mb-5">The place</Eyebrow>
              <h2 id="ormeau-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.1] font-serif mb-6">
                <RevealText text="Ormeau, from someone who lives here." />
              </h2>
              <div className="space-y-4 text-base sm:text-lg text-slate-300 leading-relaxed font-sans max-w-2xl">
                <p>
                  Ormeau sits on the M1 at the top of the Gold Coast, with the Yatala industrial area on one side and the
                  Pimpama and Coomera growth corridor on the other. It is one of the fastest-growing stretches in South
                  East Queensland, which means two things for a business here: there are more customers every year, and
                  there are more competitors every year.
                </p>
                <p>
                  Most of the businesses around here are trades, transport, automotive, fitness, allied health and home
                  services. Their customers are spread from Beenleigh down to Helensvale, and they search from a phone,
                  usually in a car, usually with &quot;near me&quot; on the end. Google answers those searches with the
                  map first, and the map is decided by proximity, reviews and how complete a profile is. That is why so
                  much of my work in Ormeau starts with Google Maps and not with a website.
                </p>
                <p>
                  The agencies you will find when you search for marketing help on the Gold Coast are in Nerang, Burleigh
                  and Brisbane. I am in Ormeau. I know which suburbs a Coomera plumber actually gets calls from, why a
                  Yatala workshop should not be chasing Surfers Paradise, and how far a Pimpama gym&apos;s map ranking
                  really reaches. That is not a slogan, it is the difference between a profile that ranks in your own
                  suburb and one that ranks where your customers are.
                </p>
                <p>
                  If we work together, it looks like this. We start with a 30-minute call and a look at the three
                  businesses above you on the map. Then I fix the profile, build the pages your services and suburbs
                  need, and only then spend money on ads. You deal with me, not an account manager. You get an update
                  every Friday, and anything in between is answered the same day. Most of my Ormeau work is ongoing,
                  because a map ranking is held, not won once.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll className="lg:col-span-5">
              <div className="accent-line relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-6 sm:p-8 lg:sticky lg:top-28">
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-6 font-sans">From client profiles</p>
                <div className="divide-y divide-white/[0.06]">
                  {[
                    { figure: '89', label: 'calls in five months from one Business Profile, up 324% on the same months last year' },
                    { figure: '266', label: 'calls in five months from another, up 23% on last year' },
                    { figure: '2', label: 'days for one profile to go from page two to the top 3 on Maps' },
                  ].map((p) => (
                    <div key={p.label} className="py-5 first:pt-0 last:pb-0">
                      <p className="text-gradient-accent text-3xl sm:text-4xl font-bold font-serif tabular-nums">
                        <CountUp value={p.figure} />
                      </p>
                      <p className="text-sm text-slate-400 font-sans mt-1 leading-relaxed">{p.label}</p>
                    </div>
                  ))}
                </div>
                <Link
                  href="/google-business-profile-gold-coast"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold/80 transition-colors duration-150 font-sans"
                >
                  See the screenshots and heatmaps <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* What gets Ormeau businesses found */}
      <section className="relative bg-navy-950 overflow-hidden" aria-labelledby="found-heading">
        <div className="glow w-[600px] h-[600px] -top-52 right-[-8%]" style={{ ['--glow-a' as string]: '0.12' }} aria-hidden="true" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <AnimateOnScroll className="text-center mb-12 sm:mb-16">
            <Eyebrow className="mb-4">What works here</Eyebrow>
            <h2 id="found-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5 font-serif">
              <RevealText text="Three things get an Ormeau business found." />
            </h2>
            <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-400 font-sans">
              In this order, most of the time. I&apos;ll tell you on the call if your situation is the exception.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll variant="group" className="grid gap-4 sm:gap-5 lg:grid-cols-3">
            {[
              {
                n: '01',
                title: 'Your Google Business Profile, before anything else',
                text:
                  'The map pack around Ormeau shifts kilometre by kilometre. The right primary category, a full services list, photos from real jobs and a steady run of reviews move a profile more than any website change. It is also the cheapest source of customers a local business will ever have.',
                href: '/google-business-profile-gold-coast',
                cta: 'Google Business Profile',
              },
              {
                n: '02',
                title: 'A site that names your services and your suburbs',
                text:
                  'Google needs something to rank. A page for each thing you do and each area you serve, written properly, with your name, address and phone on every one of them. This page is that, for me. Your version is what I build for you.',
                href: '/seo-gold-coast',
                cta: 'Local SEO',
              },
              {
                n: '03',
                title: 'Ads and email for the corridor, not the whole coast',
                text:
                  'Meta Ads to a radius that matches where you actually go, built around an offer rather than a boost button. Then email to bring the customers you already have back again. Paid only makes sense once the free source is working.',
                href: '/meta-ads-agency',
                cta: 'Meta Ads',
              },
            ].map((step, i) => (
              <div
                key={step.n}
                className={`rv-up ${i === 1 ? 'rv-delay-1' : i === 2 ? 'rv-delay-2' : ''} flex h-full flex-col rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-7`}
              >
                <p className="text-xs font-semibold tracking-[0.2em] text-gold font-sans mb-4">{step.n}</p>
                <h3 className="text-lg font-bold text-white font-serif mb-3">{step.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed font-sans flex-1">{step.text}</p>
                <Link href={step.href} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold/80 transition-colors duration-150 font-sans">
                  {step.cta} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </AnimateOnScroll>
        </div>
      </section>

      {/* Services here */}
      <section id="services-here" className="relative bg-navy-900 overflow-hidden" aria-labelledby="services-here-heading">
        <div className="grid-ground absolute inset-0" aria-hidden="true" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <AnimateOnScroll className="text-center mb-12 sm:mb-16">
            <Eyebrow className="mb-4">Services in Ormeau</Eyebrow>
            <h2 id="services-here-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5 font-serif">
              <RevealText text="Six things I do for businesses here." />
            </h2>
            <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-400 font-sans">
              Not sure which one you need? That&apos;s what the call is for.
            </p>
          </AnimateOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {servicesHere.map((s, index) => {
              const Icon = s.icon;
              return (
                <AnimateOnScroll key={s.title} stagger={Math.min(index + 1, 7)}>
                  <SpotlightLink
                    href={s.href}
                    className="proof-card spotlight group flex h-full flex-col rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 hover:bg-white/[0.04]"
                  >
                    <div className="card-icon w-10 h-10 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center mb-5">
                      <Icon className="w-5 h-5 text-gold" />
                    </div>
                    <h3 className="text-lg font-bold text-white font-serif mb-2">{s.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed font-sans">{s.blurb}</p>
                  </SpotlightLink>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* Where I am + nearby */}
      <section className="relative bg-navy-950 overflow-hidden" aria-labelledby="where-heading">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <AnimateOnScroll className="lg:col-span-5">
              <Eyebrow align="left" className="mb-5">Where I am</Eyebrow>
              <h2 id="where-heading" className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-[1.1] font-serif mb-6">
                <RevealText text="Ten minutes from most of you." />
              </h2>
              <address className="not-italic text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
                <span className="block font-semibold text-white">{BUSINESS_INFO.legalName}</span>
                <span className="block">{BUSINESS_INFO.address.full}</span>
                <a href={`tel:${BUSINESS_INFO.phoneFormatted}`} className="block text-gold hover:text-gold/80 transition-colors duration-150 mt-2">
                  {BUSINESS_INFO.phone}
                </a>
                <a href={`mailto:${BUSINESS_INFO.email}`} className="block text-gold hover:text-gold/80 transition-colors duration-150">
                  {BUSINESS_INFO.email}
                </a>
              </address>
              <p className="mt-6 text-base text-slate-400 leading-relaxed font-sans">
                I work from Ormeau and come to you. Site visits anywhere between Beenleigh and Helensvale are part of
                the job, and Brisbane or the southern Gold Coast are a call first.
              </p>

              <p className="mt-8 text-xs font-semibold tracking-[0.2em] uppercase text-gold font-sans mb-3">Nearby areas</p>
              <ul className="flex flex-wrap gap-2 font-sans">
                {nearby.map((area) => (
                  <li key={area} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-slate-300">
                    {area}
                  </li>
                ))}
              </ul>
              <Link href="/areas" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold/80 transition-colors duration-150 font-sans">
                All areas I serve <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimateOnScroll>

            <AnimateOnScroll className="lg:col-span-7">
              <div className="rounded-2xl overflow-hidden border border-white/[0.08] shadow-[0_24px_64px_rgba(0,0,0,0.5)]" style={{ height: '440px' }}>
                <iframe
                  src={`https://www.google.com/maps?q=place_id:${PLACE_ID}&z=14&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="MRG Marketing on Google Maps, 9 Laverton St, Ormeau"
                />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative bg-navy-900 overflow-hidden" aria-labelledby="faq-heading">
        <div className="grid-ground absolute inset-0" aria-hidden="true" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <AnimateOnScroll className="text-center mb-10 sm:mb-14">
            <Eyebrow className="mb-4">Questions from Ormeau</Eyebrow>
            <h2 id="faq-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-serif">
              <RevealText text="What business owners here ask me." />
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll variant="group" className="divide-y divide-white/[0.06] border-y border-white/[0.06]">
            {faqItems.map((item, i) => (
              <div key={item.question} className={`rv-up ${i % 3 === 1 ? 'rv-delay-1' : i % 3 === 2 ? 'rv-delay-2' : ''} py-6`}>
                <h3 className="text-lg font-bold text-white font-serif mb-2">{item.question}</h3>
                <p className="text-base text-slate-400 leading-relaxed font-sans">{item.answer}</p>
              </div>
            ))}
          </AnimateOnScroll>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative bg-navy-950 overflow-hidden" aria-labelledby="ormeau-cta-heading">
        <div className="absolute top-0 left-0 right-0 h-px bg-gold/20" />
        <div className="glow glow-breathe w-[700px] h-[500px] top-1/2 left-1/2" style={{ ['--glow-a' as string]: '0.14' }} aria-hidden="true" />
        <AnimateOnScroll className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <Eyebrow className="mb-6">One call</Eyebrow>
            <h2 id="ormeau-cta-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15] font-serif">
              <RevealText text="Bring your numbers. I'll tell you what I'd do with them." />
            </h2>
            <p className="mt-8 text-lg sm:text-xl text-slate-300 leading-relaxed font-sans max-w-2xl mx-auto">
              Thirty minutes, from Ormeau. Tell me what you sell and what&apos;s not working. If I can help, you get a
              plan. If I can&apos;t, I&apos;ll say so.
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
          </div>
        </AnimateOnScroll>
      </section>
    </div>
  );
}
