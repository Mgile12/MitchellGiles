'use client';

import { useEffect, useRef } from 'react';
import { MoveRight, PhoneCall } from 'lucide-react';
import Link from 'next/link';
import HeroProofCard from '@/components/HeroProofCard';

function delay(ms: number) {
  return { ['--d' as string]: `${ms}ms` };
}

export function AnimatedHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const blob1 = useRef<HTMLDivElement>(null);
  const blob2 = useRef<HTMLDivElement>(null);

  // Desktop only: the two glows lean toward the pointer, lagging it by about a second
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    if (
      !window.matchMedia('(hover: hover) and (pointer: fine)').matches ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }
    let frame = 0;
    let nx = 0;
    let ny = 0;
    const apply = () => {
      frame = 0;
      if (blob1.current) blob1.current.style.transform = `translate(${(nx * 48).toFixed(1)}px, ${(ny * 32).toFixed(1)}px)`;
      if (blob2.current) blob2.current.style.transform = `translate(${(nx * -36).toFixed(1)}px, ${(ny * -24).toFixed(1)}px)`;
    };
    const onMove = (e: PointerEvent) => {
      nx = e.clientX / window.innerWidth - 0.5;
      ny = e.clientY / window.innerHeight - 0.5;
      if (!frame) frame = requestAnimationFrame(apply);
    };
    const onLeave = () => {
      if (frame) cancelAnimationFrame(frame);
      frame = 0;
      if (blob1.current) blob1.current.style.transform = '';
      if (blob2.current) blob2.current.style.transform = '';
    };
    section.addEventListener('pointermove', onMove, { passive: true });
    section.addEventListener('pointerleave', onLeave);
    return () => {
      section.removeEventListener('pointermove', onMove);
      section.removeEventListener('pointerleave', onLeave);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section ref={sectionRef} className="hero-grain relative w-full overflow-hidden bg-navy-950">
      {/* Ground: faint grid, two slow-drifting glows */}
      <div className="hero-grid absolute inset-0 z-0" aria-hidden="true" />
      <div ref={blob1} className="hero-blob-wrap absolute z-0 w-[520px] h-[520px] -top-40 -left-32" aria-hidden="true">
        <div className="hero-blob hero-blob-1 absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.55),transparent_60%)]" />
      </div>
      <div ref={blob2} className="hero-blob-wrap absolute z-0 w-[640px] h-[640px] -bottom-64 right-[-12%]" aria-hidden="true">
        <div className="hero-blob hero-blob-2 absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.4),transparent_60%)]" />
      </div>

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

            <h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tighter font-bold font-serif text-ink leading-[1.05]">
              Internet Marketing Service Ormeau
            </h1>

            <h2
              className="hero-in mt-4 text-xl sm:text-2xl lg:text-[1.75rem] font-bold font-serif text-ink/80 leading-snug tracking-tight max-w-2xl mx-auto lg:mx-0"
              style={delay(160)}
            >
              Marketing Agency &amp; Marketing Consultant for Local SEO, Google Business Profile Optimisation &amp; AI Search (GEO) in Ormeau
            </h2>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-ink/80 max-w-xl mx-auto lg:mx-0 mt-5 font-sans">
              I get local businesses into the top 3 on Google Maps, and named when people ask AI who to call. Local
              SEO, Google Business Profile optimisation and AI search. That is the whole service.
            </p>

            <div
              className="hero-in mt-8 flex flex-col sm:flex-row gap-3 items-center justify-center lg:justify-start"
              style={delay(320)}
            >
              <Link
                href="https://calendar.notion.com/meet/mitchellgiles134/tovi31rm"
                className="gold-flat-btn inline-flex items-center justify-center gap-3 h-12 rounded-lg px-7 text-sm font-semibold tracking-wide"
              >
                Book a 30-minute call <PhoneCall className="w-4 h-4" />
              </Link>
              <a
                href="#services"
                className="press inline-flex items-center justify-center gap-3 h-12 rounded-lg px-7 text-sm font-semibold tracking-wide border border-ink/25 text-ink bg-white/55 hover:bg-white/85 hover:border-ink/50"
              >
                See what I do <MoveRight className="w-4 h-4" />
              </a>
            </div>

            <p className="hero-in mt-8 text-sm font-semibold text-ink/70 font-sans text-center lg:text-left" style={delay(380)}>
              Established 2024 <span className="mx-2 text-ink/30" aria-hidden="true">|</span> $1.4M+ generated for clients
            </p>

          </div>

          <div className="lg:col-span-5">
            <HeroProofCard />
          </div>
        </div>
      </div>

    </section>
  );
}
