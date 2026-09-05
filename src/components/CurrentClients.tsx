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
  { name: 'Tradie Marketing Pros', src: '/clients/tradie-marketing-pros.webp', href: 'https://tradiemarketingpros.com.au/' },
  { name: 'Polish Hub', src: '/clients/polish-hub.webp', href: 'https://polishhub.com.au/', wide: true },
  { name: 'MJLT Services', src: '/clients/mjlt-services.webp', href: 'https://www.mjltservices.com.au/' },
  { name: 'Ceramics Gold Coast', src: '/clients/ceramics-gold-coast.webp', href: 'https://ceramicsgoldcoast.com.au/' },
  { name: 'Elite Football Academy', src: '/clients/elite-football-academy.webp', href: 'https://www.elitefootball.com.au/' },
  { name: 'Viking Athletics', src: '/logos/va.png', invert: true },
  { name: 'All GC Hire', src: '/clients/all-gc-hire.webp', href: 'https://allgchire.com.au/' },
];

const rowTwo: ClientLogo[] = [
  { name: 'Greenstone Karate', src: '/logos/greenstone-karate.webp' },
  { name: 'Washroom Essential', src: '/clients/washroom-essentials.webp' },
  { name: 'Cleaning Melbourne', src: '/clients/cleaning-melbourne.webp' },
  { name: 'Best Deal 4 U', src: '/clients/best-deal-4-u.webp' },
  { name: 'Fleur', src: '/clients/fleur.webp' },
  { name: 'InHouseAI', src: '/clients/inhouseai.webp' },
];

function LogoTile({ logo, hidden = false }: { logo: ClientLogo; hidden?: boolean }) {
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

  const cls = 'logo-tile flex items-center justify-center h-20 sm:h-24 px-7 sm:px-10 opacity-70 shrink-0';

  return logo.href ? (
    <a href={logo.href} target="_blank" rel="noopener noreferrer" className={cls} aria-label={logo.name} tabIndex={hidden ? -1 : 0}>
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
              <LogoTile key={`${copy}-${logo.name}`} logo={logo} hidden={copy === 1} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/** Client logos, two slow rows, between the services and About. No heading by design. */
export default function CurrentClients() {
  return (
    <section className="bg-navy-950 overflow-hidden" aria-label="Clients">
      <div className="py-8 sm:py-10">
        <MarqueeRow logos={rowOne} direction="left" duration={55} />
        <MarqueeRow logos={rowTwo} direction="left" duration={62} />
      </div>
    </section>
  );
}
