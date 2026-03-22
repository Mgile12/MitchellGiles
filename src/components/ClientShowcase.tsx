'use client';

import AnimateOnScroll from './AnimateOnScroll';
import { LogoCarousel, type Logo } from './ui/logo-carousel';
import Link from 'next/link';

const clientLogos: Logo[] = [
  {
    name: 'Polish Hub',
    id: 1,
    imgSrc: 'https://iili.io/qjHQUpS.png',
    href: 'https://polishhub.com.au/',
  },
  {
    name: 'EFA',
    id: 2,
    imgSrc: 'https://iili.io/qjHQjQn.png',
    href: 'https://www.elitefootball.com.au/',
  },
  {
    name: 'MJLT Welding',
    id: 3,
    imgSrc: 'https://iili.io/qjJ2TYX.png',
    href: 'https://www.mjltservices.com.au/',
  },
  {
    name: 'Tradie Marketing Pros',
    id: 4,
    imgSrc: 'https://iili.io/qjHQXIt.webp',
    href: '#',
  },
  {
    name: 'Ceramic Coating Gold Coast',
    id: 5,
    imgSrc: 'https://iili.io/qjHQVpI.png',
    href: '#',
  },
];

export default function ClientShowcase() {
  return (
    <section className="bg-navy-950 text-slate-50" aria-labelledby="clients-heading">
      <AnimateOnScroll className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-gold/70 font-sans mb-4">
            Current Clients
          </span>
          <h3
            id="clients-heading"
            className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-serif"
          >
            I work with a select few
          </h3>
          <p className="mt-4 text-slate-400 text-base sm:text-lg max-w-xl mx-auto font-sans leading-relaxed">
            I deliberately keep my client list small. Every business I take on gets my full attention, not a junior account manager.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-navy-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-navy-950 to-transparent z-10 pointer-events-none" />
          <LogoCarousel columnCount={5} logos={clientLogos} />
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-slate-500 font-sans italic mb-4">
            Spots are limited. If you&apos;re a fit, let&apos;s talk.
          </p>
          <Link
            href="/book"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold-light transition-colors duration-200 font-sans"
          >
            Book a strategy call &rarr;
          </Link>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
