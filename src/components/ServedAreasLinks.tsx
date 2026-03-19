import Link from 'next/link';
import { MapPin } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';

interface AreaLink {
  name: string;
  slug: string;
}

interface Props {
  areas: AreaLink[];
  heading?: string;
}

export default function ServedAreasLinks({ areas, heading = 'Areas We Serve' }: Props) {
  return (
    <section className="bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(12,134,234,0.04),transparent_60%)]" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <AnimateOnScroll className="mb-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
              <MapPin className="w-4 h-4 text-gold" />
            </div>
            <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase font-sans">Local Reach</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-serif">{heading}</h2>
        </AnimateOnScroll>
        <div className="flex flex-wrap gap-2">
          {areas.map((area) => (
            <Link
              key={area.slug}
              href={`/areas/${area.slug}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.02] text-sm text-slate-300 hover:text-gold hover:border-gold/30 hover:bg-white/[0.04] transition-all duration-200 font-sans"
            >
              <MapPin className="w-3 h-3 text-gold/60" />
              {area.name}
            </Link>
          ))}
          <Link
            href="/areas"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-gold/20 bg-gold/5 text-sm text-gold hover:bg-gold/10 hover:border-gold/40 transition-all duration-200 font-sans font-semibold"
          >
            View all areas →
          </Link>
        </div>
      </div>
    </section>
  );
}
