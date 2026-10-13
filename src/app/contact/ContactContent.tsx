import Link from 'next/link';
import { ArrowRight, CalendarCheck, ChevronRight, Mail, MapPin, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/business-info';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Eyebrow from '@/components/Eyebrow';
import LocationMap from '@/components/LocationMap';

const WAYS = [
  {
    icon: CalendarCheck,
    title: 'Book a 30-minute call',
    text: 'Pick a time that suits you. Tell me what you sell and what is not working. If I can help, you get a plan. If I can’t, I’ll say so.',
    href: BUSINESS_INFO.bookingUrl,
    label: 'Book a 30-minute call',
    primary: true,
    external: true,
  },
  {
    icon: Phone,
    title: 'Call me',
    text: 'You get me, not a receptionist. If I am on a client call I will ring you back the same day.',
    href: `tel:${BUSINESS_INFO.phoneFormatted}`,
    label: BUSINESS_INFO.phone,
    primary: false,
    external: false,
  },
  {
    icon: Mail,
    title: 'Email me',
    text: 'Send your business name and the suburb you work from. I reply within one business day, usually sooner.',
    href: `mailto:${BUSINESS_INFO.email}`,
    label: BUSINESS_INFO.email,
    primary: false,
    external: false,
  },
];

const STEPS = [
  {
    title: 'You tell me what you do and where',
    text: 'The service, the suburbs you want work from, and what is not happening right now: no calls, no Maps position, nothing from AI search.',
  },
  {
    title: 'I look at three things live',
    text: 'Your Google Business Profile, your website and the three businesses above you on the map. You see what I see on the screen.',
  },
  {
    title: 'You leave with a straight answer',
    text: 'What I would do first, roughly how long it takes, and whether it is worth doing at all. If I am not the right person I will tell you who is.',
  },
];

export default function ContactContent() {
  return (
    <div className="bg-navy-950 min-h-screen">
      <section className="relative bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.45),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,255,255,0.45),transparent_60%)]" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 pb-14 sm:pb-20">
          <nav className="flex items-center gap-2 text-sm text-ink/55 mb-10 animate-fade-in font-sans" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-gold transition-colors duration-200">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-ink/80">Contact</span>
          </nav>

          <div className="max-w-3xl">
            <Eyebrow align="left" className="mb-5">Contact</Eyebrow>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink font-serif leading-[1.08]">
              Contact MRG Marketing in Ormeau
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-ink/80 font-sans leading-relaxed">
              Three ways to reach me. The fastest is to book a time and we talk on the day. Every call is with me,
              Mitchell Giles, from {BUSINESS_INFO.address.full}.
            </p>
          </div>
        </div>
      </section>

      <section className="relative bg-navy-900 overflow-hidden" aria-labelledby="ways-heading">
        <div className="grid-ground absolute inset-0" aria-hidden="true" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 id="ways-heading" className="sr-only">Ways to get in touch</h2>
          <AnimateOnScroll variant="group" className="grid gap-5 lg:grid-cols-3">
            {WAYS.map((w, i) => {
              const Icon = w.icon;
              const cls = w.primary
                ? 'gold-flat-btn inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold group w-full sm:w-auto'
                : 'inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold border border-ink/20 bg-white text-ink hover:border-ink/50 transition-colors duration-200 group w-full sm:w-auto';
              return (
                <article
                  key={w.title}
                  className={`rv-up ${i === 1 ? 'rv-delay-1' : i === 2 ? 'rv-delay-2' : ''} flex flex-col rounded-2xl border border-ink/10 bg-white/55 p-7`}
                >
                  <div className="w-11 h-11 rounded-xl bg-ink/[0.06] flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-gold" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-ink font-serif">{w.title}</h3>
                  <p className="mt-3 text-base text-ink/75 font-sans leading-relaxed flex-1">{w.text}</p>
                  <div className="mt-6">
                    <a
                      href={w.href}
                      className={cls}
                      {...(w.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      {w.label}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </a>
                  </div>
                </article>
              );
            })}
          </AnimateOnScroll>

          <AnimateOnScroll className="mt-8 flex flex-wrap items-start gap-3 text-sm text-ink/70 font-sans">
            <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" aria-hidden="true" />
            <p>
              {BUSINESS_INFO.address.full}. Visits are by appointment. Most first calls happen online, and if you are in
              Ormeau, Pimpama, Coomera, Yatala or Beenleigh I am happy to come to you.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="relative bg-navy-950 overflow-hidden" aria-labelledby="steps-heading">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <AnimateOnScroll className="max-w-3xl mb-10 sm:mb-14">
            <Eyebrow align="left" className="mb-4">What happens on the call</Eyebrow>
            <h2 id="steps-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink font-serif">
              Thirty minutes, no pitch.
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll variant="group" className="grid gap-5 md:grid-cols-3">
            {STEPS.map((s, i) => (
              <div key={s.title} className={`rv-up ${i === 1 ? 'rv-delay-1' : i === 2 ? 'rv-delay-2' : ''} rounded-2xl border border-ink/10 bg-white/55 p-7`}>
                <span className="text-xs font-semibold tracking-[0.18em] uppercase text-ink/55 font-sans">Step {i + 1}</span>
                <h3 className="mt-3 text-lg font-bold text-ink font-serif leading-snug">{s.title}</h3>
                <p className="mt-3 text-base text-ink/75 font-sans leading-relaxed">{s.text}</p>
              </div>
            ))}
          </AnimateOnScroll>
          <AnimateOnScroll className="mt-10">
            <a
              href={BUSINESS_INFO.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="gold-flat-btn inline-flex items-center justify-center gap-2 rounded-lg px-8 py-4 text-base font-semibold group"
            >
              Book a 30-minute call <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </AnimateOnScroll>
        </div>
      </section>

      <LocationMap />
    </div>
  );
}
