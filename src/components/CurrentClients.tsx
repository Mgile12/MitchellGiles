'use client';

import { motion } from 'framer-motion';

interface ClientLogo {
  name: string;
  src: string;
  href?: string;
  /** Logo is dark on a white ground; invert it and screen it onto the dark page. */
  invert?: boolean;
  /** Extra width for wide wordmarks. */
  wide?: boolean;
}

const rowOne: ClientLogo[] = [
  { name: 'Tradie Marketing Pros', src: 'https://iili.io/qvDeeSe.webp', href: 'https://tradiemarketingpros.com.au/' },
  { name: 'Polish Hub', src: 'https://iili.io/qvDesl1.png', href: 'https://polishhub.com.au/', wide: true },
  { name: 'MJLT Services', src: 'https://iili.io/qvDeroQ.png', href: 'https://www.mjltservices.com.au/' },
  { name: 'Ceramics Gold Coast', src: 'https://iili.io/qvDejPS.png', href: 'https://ceramicsgoldcoast.com.au/' },
  { name: 'Elite Football Academy', src: 'https://iili.io/q87yt2t.md.png', href: 'https://www.elitefootball.com.au/' },
  { name: 'Viking Athletics', src: '/logos/va.png', invert: true },
  { name: 'All GC Hire', src: 'https://iili.io/qPHnu8x.png', href: 'https://allgchire.com.au/' },
];

const rowTwo: ClientLogo[] = [
  { name: 'Greenstone Karate', src: '/logos/greenstone-karate.png' },
  { name: 'Washroom Essential', src: 'https://iili.io/ChPt9R4.md.webp' },
  { name: 'Cleaning Melbourne', src: 'https://iili.io/ChPtFs9.md.png' },
  { name: 'Best Deal 4 U', src: 'https://iili.io/ChPtxOQ.md.png' },
  { name: 'Fleur', src: 'https://iili.io/ChPZLxI.png' },
  { name: 'InHouseAI', src: 'https://iili.io/q8YGebS.png' },
];

function LogoTile({ logo }: { logo: ClientLogo }) {
  const img = (
    <img
      src={logo.src}
      alt={logo.name}
      draggable={false}
      loading="lazy"
      className="max-h-14 sm:max-h-16 w-auto object-contain select-none"
      style={{
        maxWidth: logo.wide ? 200 : 140,
        filter: logo.invert ? 'invert(1)' : undefined,
        mixBlendMode: logo.invert ? 'screen' : undefined,
      }}
    />
  );

  const cls = 'logo-tile flex items-center justify-center h-24 sm:h-28 px-8 sm:px-12 opacity-70 shrink-0';

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

function MarqueeRow({
  logos,
  direction,
  duration,
}: {
  logos: ClientLogo[];
  direction: 'left' | 'right';
  duration: number;
}) {
  // Two copies side by side; the track travels exactly one copy's width, so the loop is seamless.
  const style = { '--marquee-duration': `${duration}s` } as React.CSSProperties;
  return (
    <div className="marquee">
      <div className="marquee-track" data-direction={direction} style={style}>
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0" aria-hidden={copy === 1}>
            {logos.map((logo) => (
              <LogoTile key={`${copy}-${logo.name}`} logo={logo} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CurrentClients() {
  return (
    <section className="bg-[#050a14] overflow-hidden" aria-labelledby="clients-heading">
      <div className="py-24 sm:py-32">
        <motion.div
          className="text-center mb-14 sm:mb-16 px-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        >
          <p className="text-slate-400 text-base sm:text-lg font-semibold font-sans mb-4 tracking-wide">
            The best are already here
          </p>
          <h2
            id="clients-heading"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white font-serif leading-none"
          >
            We work with a select few
          </h2>
        </motion.div>

        <div className="space-y-2">
          <MarqueeRow logos={rowOne} direction="left" duration={42} />
          <MarqueeRow logos={rowTwo} direction="right" duration={38} />
        </div>

        <p className="mt-14 sm:mt-16 text-center text-sm text-slate-500 font-sans italic px-4">
          Spots are limited. If you&apos;re a fit, let&apos;s talk.
        </p>
      </div>
    </section>
  );
}
