'use client';

import { useEffect, useState } from 'react';
import { Pause, Play } from 'lucide-react';

// Headline results, every one from a client Business Profile or a ranking scan (see the case studies).
const STATS = [
  'Established 2024',
  '$1.4M+ generated for clients',
  'Top 3 on Google Maps in 2 days',
  '266 calls in five months from one profile',
  'Calls up 324% on the same five months last year',
  'Website clicks up 273% year on year',
  'Top 3 on Google Maps in 11 days',
  '33 calls from a brand-new profile in three months',
  'Website clicks up 197% year on year',
  '208 calls from Google in three months for two plumbers',
  'Number 1 on Maps at 49 of 49 grid points',
];

/** One slow stats ticker on a black band. CSS-driven so it never stutters while the page loads. */
export default function StatsTicker() {
  const [paused, setPaused] = useState(false);

  // One switch stops every looping animation on the page (ticker, chips, glows, logo rows)
  useEffect(() => {
    if (paused) document.documentElement.setAttribute('data-motion', 'paused');
    else document.documentElement.removeAttribute('data-motion');
  }, [paused]);

  return (
    <section className="ticker-in relative z-10 w-full bg-ink py-4" aria-label="Results in numbers">
      <button
        type="button"
        onClick={() => setPaused((p) => !p)}
        aria-pressed={paused}
        aria-label={paused ? 'Play moving content' : 'Pause moving content'}
        className="press absolute right-3 top-1/2 -translate-y-1/2 z-20 inline-flex items-center gap-1.5 rounded-full bg-white/15 hover:bg-white/25 text-white text-xs font-semibold px-3 py-2 font-sans"
      >
        {paused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
        <span className="hidden sm:inline">{paused ? 'Play' : 'Pause'}</span>
      </button>
      <div className="marquee" style={{ ['--marquee-duration' as string]: '90s' }}>
        <div className="marquee-track" data-direction="left">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0" aria-hidden={copy === 1}>
              {STATS.map((stat) => (
                <span key={`${copy}-${stat}`} className="whitespace-nowrap px-6 text-lg md:text-xl text-white font-bold tracking-wide font-sans">
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
    </section>
  );
}
