'use client';

import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { MoveRight, PhoneCall, Pause, Play } from 'lucide-react';
import Link from 'next/link';
import HeroProofCard from '@/components/HeroProofCard';
import { EASE_OUT } from '@/lib/motion';

// Mirrors the eight cards in ServicesGrid so the hero and the page say the same thing.
const services = [
  'Google Maps',
  'Local SEO',
  'Google Ads',
  'Meta Ads',
  'Email Marketing',
  'Lead Generation',
  'Marketing Automation',
  'AI Search (GEO)',
];

const STATS = [
  '$60,632 in 30 days from email',
  '$82,574 from a single event upsell',
  'Top 3 on Google Maps in 2 days',
  '72% open rate, 10.3% click rate',
  '$425K in sales, 436% growth',
  '$100.3K in weekly sales',
  '266 calls in five months from one profile',
];

const PARTNERS = [
  { src: '/new-Google-Partner-logo-png-large-size.png', alt: 'Google Partner' },
  { src: '/Met-Business-Partners.png', alt: 'Meta Business Partner' },
  { src: '/Mailchimp-Partner-logo-mad-cat-marketing.png', alt: 'Mailchimp Partner' },
];

const DISPLAY_MS = 3800;

function delay(ms: number) {
  return { ['--d' as string]: `${ms}ms` };
}

export function AnimatedHero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();
  const rotating = !paused && !reduce;

  useEffect(() => {
    if (!rotating) return;
    const timeoutId = setTimeout(() => {
      setTitleNumber((prev) => (prev === services.length - 1 ? 0 : prev + 1));
    }, DISPLAY_MS);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, rotating]);

  // One switch stops every looping animation on the page (ticker, chips, glows, logo rows)
  useEffect(() => {
    if (paused) document.documentElement.setAttribute('data-motion', 'paused');
    else document.documentElement.removeAttribute('data-motion');
  }, [paused]);

  return (
    <section className="hero-grain relative w-full overflow-hidden bg-navy-950">
      {/* Ground: faint grid, two slow-drifting glows */}
      <div className="hero-grid absolute inset-0 z-0" aria-hidden="true" />
      <div
        className="hero-blob hero-blob-1 absolute z-0 w-[520px] h-[520px] -top-40 -left-32 bg-[radial-gradient(circle,rgba(12,134,234,0.28),transparent_60%)]"
        aria-hidden="true"
      />
      <div
        className="hero-blob hero-blob-2 absolute z-0 w-[640px] h-[640px] -bottom-64 right-[-12%] bg-[radial-gradient(circle,rgba(61,160,240,0.16),transparent_60%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 lg:pt-40 pb-16 lg:pb-24">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          <div className="lg:col-span-7 text-center lg:text-left">
            <p
              className="hero-in inline-flex items-center gap-3 text-xs font-semibold tracking-[0.2em] uppercase text-gold font-sans mb-5"
              style={delay(0)}
            >
              <span className="hidden sm:block w-8 h-px bg-gold/60" aria-hidden="true" />
              Ormeau · Gold Coast · Brisbane
            </p>

            <h1
              className="hero-in text-4xl sm:text-5xl lg:text-6xl tracking-tighter font-bold font-serif text-white leading-[1.05]"
              style={delay(80)}
            >
              Marketing Consultant Ormeau
            </h1>

            <div
              className="hero-in relative overflow-hidden h-[48px] sm:h-[56px] lg:h-[64px] mt-3"
              style={delay(160)}
              aria-live="off"
            >
              {services.map((title, index) => {
                const isCurrent = titleNumber === index;
                const isPast = index < titleNumber || (titleNumber === 0 && index === services.length - 1);
                return (
                  <motion.span
                    key={title}
                    className="absolute inset-x-0 text-center lg:text-left text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-gold tracking-tighter whitespace-nowrap leading-none pt-1"
                    initial={false}
                    animate={
                      isCurrent
                        ? { opacity: 1, transform: 'translateX(0px)' }
                        : { opacity: 0, transform: isPast ? 'translateX(-64px)' : 'translateX(64px)' }
                    }
                    transition={isCurrent ? { duration: 0.9, ease: EASE_OUT } : { duration: 0.45, ease: EASE_OUT }}
                    aria-hidden={!isCurrent}
                  >
                    {title}
                  </motion.span>
                );
              })}
            </div>

            <p
              className="hero-in text-lg md:text-xl leading-relaxed tracking-tight text-slate-300 max-w-xl mx-auto lg:mx-0 mt-5 font-sans"
              style={delay(240)}
            >
              I find where your business is losing customers, fix it, and stay until the numbers move. Google Business
              Profile first, then ads, email and strategy.
            </p>

            <div
              className="hero-in mt-8 flex flex-col sm:flex-row gap-3 items-center justify-center lg:justify-start"
              style={delay(320)}
            >
              <Link
                href="/book"
                className="gold-flat-btn inline-flex items-center justify-center gap-3 h-12 rounded-lg px-7 text-sm font-semibold tracking-wide"
              >
                Book a 15-minute call <PhoneCall className="w-4 h-4" />
              </Link>
              <a
                href="#results"
                className="press inline-flex items-center justify-center gap-3 h-12 rounded-lg px-7 text-sm font-semibold tracking-wide border border-white/20 text-white bg-white/5 hover:bg-white/10 hover:border-white/40"
              >
                See the results <MoveRight className="w-4 h-4" />
              </a>
            </div>

            <div
              className="hero-in mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-x-8 gap-y-4"
              style={delay(420)}
            >
              <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-slate-400 font-sans">
                Accredited partner
              </span>
              <div className="flex items-center gap-6 sm:gap-8">
                {PARTNERS.map((p) => (
                  <img
                    key={p.alt}
                    src={p.src}
                    alt={p.alt}
                    className="h-6 sm:h-7 w-auto object-contain opacity-70"
                    style={{ filter: 'brightness(0) invert(1)' }}
                    loading="eager"
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <HeroProofCard />
          </div>
        </div>
      </div>

      {/* One slow stats ticker. CSS-driven so it never stutters while the page loads. */}
      <div className="relative z-10 w-full bg-[#0B6FC4] py-4">
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          aria-pressed={paused}
          aria-label={paused ? 'Play moving content' : 'Pause moving content'}
          className="press absolute right-3 top-1/2 -translate-y-1/2 z-20 inline-flex items-center gap-1.5 rounded-full bg-navy-950/70 hover:bg-navy-950/90 text-white text-xs font-semibold px-3 py-2 font-sans"
        >
          {paused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
          <span className="hidden sm:inline">{paused ? 'Play' : 'Pause'}</span>
        </button>
        <div className="marquee" style={{ ['--marquee-duration' as string]: '90s' }}>
          <div className="marquee-track" data-direction="left">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex shrink-0" aria-hidden={copy === 1}>
                {STATS.map((stat) => (
                  <span
                    key={`${copy}-${stat}`}
                    className="whitespace-nowrap px-6 text-lg md:text-xl text-white font-bold tracking-wide font-sans"
                  >
                    {stat}
                    <span className="ml-12 text-white/40" aria-hidden="true">
                      |
                    </span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
