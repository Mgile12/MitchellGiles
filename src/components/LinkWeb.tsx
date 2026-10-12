import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { AREA_LINKS, CORE_SERVICE_LINKS, PROOF_LINKS, SUPPORTING_LINKS, TRADE_LINKS, type SiteLink } from '@/lib/site-links';

interface Column {
  title: string;
  links: SiteLink[];
}

function Pills({ links, current }: { links: SiteLink[]; current?: string }) {
  return (
    <ul className="flex flex-wrap gap-2 font-sans">
      {links
        .filter((l) => l.href !== current)
        .map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="press inline-flex items-center gap-1.5 rounded-full border border-ink/20 bg-white/55 px-3 py-1.5 text-sm font-semibold text-ink hover:bg-white/85">
              {l.label} <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </li>
        ))}
    </ul>
  );
}

/**
 * The cross-link block that ties service pages, suburb pages and proof pages together.
 * `current` is the page's own path (without trailing slash) so it is left out of its own list.
 * `show` picks which columns appear; defaults to all.
 */
export default function LinkWeb({
  current,
  show = ['services', 'guides', 'trades', 'areas', 'proof'],
  heading = 'Keep reading',
  intro,
}: {
  current?: string;
  show?: Array<'services' | 'guides' | 'trades' | 'areas' | 'proof'>;
  heading?: string;
  intro?: string;
}) {
  const columns: Column[] = [];
  if (show.includes('services')) columns.push({ title: 'The three services', links: CORE_SERVICE_LINKS });
  if (show.includes('guides')) columns.push({ title: 'The parts of the job', links: SUPPORTING_LINKS });
  if (show.includes('trades')) columns.push({ title: 'By trade', links: TRADE_LINKS });
  if (show.includes('areas')) columns.push({ title: 'Suburb pages', links: AREA_LINKS });
  if (show.includes('proof')) columns.push({ title: 'Proof', links: PROOF_LINKS });

  return (
    <section className="relative bg-navy-900 overflow-x-clip" aria-labelledby="linkweb-heading">
      <div className="absolute top-0 left-0 right-0 h-px bg-ink/10" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <h2 id="linkweb-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-ink font-serif mb-2">
          {heading}
        </h2>
        {intro && <p className="text-base text-ink/65 font-sans mb-8 max-w-2xl">{intro}</p>}
        <div className={`grid gap-8 ${columns.length >= 4 ? 'md:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-2'} ${intro ? '' : 'mt-6'}`}>
          {columns.map((c) => (
            <div key={c.title}>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-3 font-sans">{c.title}</p>
              <Pills links={c.links} current={current} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
