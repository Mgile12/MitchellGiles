'use client';

import { useEffect, useRef, useState } from 'react';
import { EASE_OUT } from '@/lib/motion';

interface ClientLogo {
  name: string;
  src: string;
  href?: string;
  /** Logo is dark on a white ground; invert it and screen it onto the dark page. */
  invert?: boolean;
  /** Extra width for wide wordmarks. */
  wide?: boolean;
}

const LOGOS: ClientLogo[] = [
  { name: 'Tradie Marketing Pros', src: '/clients/tradie-marketing-pros.webp', href: 'https://tradiemarketingpros.com.au/' },
  { name: 'Polish Hub', src: '/clients/polish-hub.webp', href: 'https://polishhub.com.au/', wide: true },
  { name: 'MJLT Services', src: '/clients/mjlt-services.webp', href: 'https://www.mjltservices.com.au/' },
  { name: 'Ceramics Gold Coast', src: '/clients/ceramics-gold-coast.webp', href: 'https://ceramicsgoldcoast.com.au/' },
  { name: 'Elite Football Academy', src: '/clients/elite-football-academy.webp', href: 'https://www.elitefootball.com.au/' },
  { name: 'Viking Athletics', src: '/logos/va.png', invert: true },
  { name: 'All GC Hire', src: '/clients/all-gc-hire.webp', href: 'https://allgchire.com.au/' },
  { name: 'Greenstone Karate', src: '/logos/greenstone-karate.webp' },
  { name: 'Washroom Essential', src: '/clients/washroom-essentials.webp' },
  { name: 'Cleaning Melbourne', src: '/clients/cleaning-melbourne.webp' },
  { name: 'Best Deal 4 U', src: '/clients/best-deal-4-u.webp' },
  { name: 'Fleur', src: '/clients/fleur.webp' },
  { name: 'InHouseAI', src: '/clients/inhouseai.webp' },
];

// Five slots on desktop, four on tablet (one row), four on phones (two rows). Slot 5 is hidden below lg.
const SLOTS = 5;
// A wave swaps every visible slot 110 ms apart, then the wall holds. Each logo lives about 4.5 s.
const WAVE_MS = 4500;
const STAGGER_MS = 110;
const OUT_MS = 320;
const IN_MS = 480;
const EASE = `cubic-bezier(${EASE_OUT.join(', ')})`;

function shuffle<T>(items: T[]) {
  const a = [...items];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function LogoTile({ logo }: { logo: ClientLogo }) {
  const img = (
    <img
      src={logo.src}
      alt={logo.name}
      draggable={false}
      loading="lazy"
      className="max-h-12 sm:max-h-14 w-auto object-contain select-none"
      style={{
        maxWidth: logo.wide ? 180 : 130,
        filter: logo.invert ? 'invert(1)' : undefined,
        mixBlendMode: logo.invert ? 'screen' : undefined,
      }}
    />
  );
  const cls = 'logo-tile flex items-center justify-center h-20 sm:h-24 px-4 opacity-70';
  return logo.href ? (
    <a href={logo.href} target="_blank" rel="noopener noreferrer" className={cls} aria-label={logo.name}>
      {img}
    </a>
  ) : (
    <div className={cls} title={logo.name}>
      {img}
    </div>
  );
}

/**
 * Client logo wall. Five fixed slots; every few seconds a staggered wave squashes each logo out
 * and the next one in, so the wall keeps turning without a marquee. Pauses on hover, keyboard
 * focus, the hero's Pause switch, and while the tab is hidden. Reduced motion: opacity-only swaps.
 */
export default function CurrentClients() {
  const [shown, setShown] = useState<number[]>(() => Array.from({ length: SLOTS }, (_, i) => i));
  const shownRef = useRef(shown);
  const queue = useRef<number[]>(Array.from({ length: LOGOS.length - SLOTS }, (_, i) => SLOTS + i));
  const slotRefs = useRef<(HTMLDivElement | null)[]>([]);
  const paused = useRef(false);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let cancelled = false;
    const timers: number[] = [];

    // Warm the cache for the logos that start off screen, so the first wave reveals a loaded image
    queue.current.forEach((i) => {
      const im = new Image();
      im.src = LOGOS[i].src;
    });

    const swapSlot = (slot: number) => {
      const el = slotRefs.current[slot];
      if (cancelled || !el || el.offsetParent === null) return; // hidden at this breakpoint
      const next = queue.current.shift();
      if (next === undefined) return;

      const out = reduce ? [{ opacity: 1 }, { opacity: 0 }] : [{ transform: 'scaleY(1)', opacity: 1 }, { transform: 'scaleY(0)', opacity: 0 }];
      const back = reduce ? [{ opacity: 0 }, { opacity: 1 }] : [{ transform: 'scaleY(0)', opacity: 0 }, { transform: 'scaleY(1)', opacity: 1 }];

      const leave = el.animate(out, { duration: reduce ? 160 : OUT_MS, easing: EASE, fill: 'forwards' });
      leave.onfinish = () => {
        if (cancelled) return;
        const current = [...shownRef.current];
        queue.current.push(current[slot]);
        current[slot] = next;
        shownRef.current = current;
        setShown(current);
        // Let React paint the new logo behind the collapsed slot, then grow it back
        requestAnimationFrame(() => {
          if (cancelled) return;
          const enter = el.animate(back, { duration: reduce ? 200 : IN_MS, easing: EASE, fill: 'forwards' });
          enter.onfinish = () => {
            leave.cancel();
            enter.cancel();
          };
        });
      };
    };

    const wave = () => {
      if (cancelled) return;
      const hold =
        paused.current || document.hidden || document.documentElement.getAttribute('data-motion') === 'paused';
      if (!hold) {
        shuffle(Array.from({ length: SLOTS }, (_, i) => i)).forEach((slot, i) => {
          timers.push(window.setTimeout(() => swapSlot(slot), i * STAGGER_MS));
        });
      }
      timers.push(window.setTimeout(wave, WAVE_MS));
    };

    timers.push(window.setTimeout(wave, WAVE_MS));
    return () => {
      cancelled = true;
      timers.forEach((t) => window.clearTimeout(t));
    };
  }, []);

  return (
    <section className="bg-navy-950 overflow-hidden" aria-label="Clients">
      <div
        className="logo-wall max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-2 items-center justify-items-center"
        onPointerEnter={() => (paused.current = true)}
        onPointerLeave={() => (paused.current = false)}
        onFocusCapture={() => (paused.current = true)}
        onBlurCapture={() => (paused.current = false)}
      >
        {shown.map((logoIndex, slot) => (
          <div
            key={slot}
            ref={(el) => {
              slotRefs.current[slot] = el;
            }}
            className={`logo-slot ${slot === SLOTS - 1 ? 'hidden lg:block' : ''}`}
          >
            <LogoTile logo={LOGOS[logoIndex]} />
          </div>
        ))}
      </div>
    </section>
  );
}
