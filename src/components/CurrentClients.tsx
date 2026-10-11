interface ClientLogo {
  name: string;
  src: string;
  href?: string;
  /** Square emblems get a little more height so they read at the same weight as the wordmarks. */
  tall?: boolean;
}

// Black-on-transparent bakes (the dark theme's white -mono files, inverted), shown faded on the sand ground
// so every mark sits at the same weight. Colour originals are still in public/.
const LOGOS: ClientLogo[] = [
  { name: 'Tradie Marketing Pros', src: '/clients/tradie-marketing-pros-ink.webp', href: 'https://tradiemarketingpros.com.au/' },
  { name: 'Polish Hub', src: '/clients/polish-hub-ink.webp', href: 'https://polishhub.com.au/', tall: true },
  { name: 'MJLT Services', src: '/clients/mjlt-services-ink.webp', href: 'https://www.mjltservices.com.au/' },
  { name: 'Ceramics Gold Coast', src: '/clients/ceramics-gold-coast-ink.webp', href: 'https://ceramicsgoldcoast.com.au/' },
  { name: 'Elite Football Academy', src: '/clients/elite-football-academy-ink.webp', href: 'https://www.elitefootball.com.au/' },
  { name: 'Viking Athletics', src: '/logos/va-ink.webp', tall: true },
  { name: 'All GC Hire', src: '/clients/all-gc-hire-ink.webp', href: 'https://allgchire.com.au/', tall: true },
  { name: 'Greenstone Karate', src: '/logos/greenstone-karate-ink.webp', tall: true },
  { name: 'Washroom Essential', src: '/clients/washroom-essentials-ink.webp' },
  { name: 'Best Deal 4 U', src: '/clients/best-deal-4-u-ink.webp' },
  { name: 'Fleur', src: '/clients/fleur-ink.webp' },
  { name: 'InHouseAI', src: '/clients/inhouseai-ink.webp' },
];

function LogoTile({ logo }: { logo: ClientLogo }) {
  const img = (
    <img
      src={logo.src}
      alt={logo.name}
      draggable={false}
      loading="lazy"
      decoding="async"
      className={`${logo.tall ? 'h-12 sm:h-14' : 'h-8 sm:h-10'} w-auto max-w-[140px] object-contain select-none`}
    />
  );
  // Faded at rest, full black on hover.
  const cls =
    'logo-tile flex items-center shrink-0 px-7 sm:px-9 opacity-60 hover:opacity-100 transition-opacity duration-200';
  return logo.href ? (
    <a href={logo.href} target="_blank" rel="noopener noreferrer" className={cls} aria-label={logo.name} tabIndex={-1}>
      {img}
    </a>
  ) : (
    <div className={cls} title={logo.name}>
      {img}
    </div>
  );
}

/**
 * Client logo strip: a quiet label on the left and one slow, continuous row of greyscale logos that
 * fades out at both edges. CSS-driven (the shared .marquee classes), pauses on hover and under the
 * hero's Pause switch; reduced motion shows a static row.
 */
export default function CurrentClients() {
  return (
    <section className="bg-navy-950" aria-label="Clients">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
          <p className="shrink-0 text-sm text-ink/55 font-sans">Working with…</p>
          <div className="marquee flex-1 min-w-0" style={{ ['--marquee-duration' as string]: '70s' }}>
            <div className="marquee-track" data-direction="left">
              {[0, 1].map((copy) => (
                <div key={copy} className="flex items-center shrink-0" aria-hidden={copy === 1}>
                  {LOGOS.map((logo) => (
                    <LogoTile key={`${copy}-${logo.name}`} logo={logo} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
