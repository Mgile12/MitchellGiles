import Link from 'next/link';
import { ArrowRight, Search } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/business-info';
import { INDUSTRY_GROUPS } from '@/lib/industries';
import AnimateOnScroll from './AnimateOnScroll';
import Eyebrow from './Eyebrow';
import RevealText from './RevealText';

/** "Local businesses I work with": the 15 business types, grouped, each with the search it needs to win. */
export default function Industries() {
  return (
    <section id="industries" className="relative bg-navy-900 overflow-hidden scroll-mt-24" aria-labelledby="industries-heading">
      <div className="grid-ground absolute inset-0" aria-hidden="true" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <AnimateOnScroll className="max-w-3xl mb-10 sm:mb-14">
          <Eyebrow align="left" className="mb-4">Who I work with</Eyebrow>
          <h2 id="industries-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink font-serif">
            <RevealText text="Local businesses, not just tradies." />
          </h2>
          <p className="mt-5 text-base sm:text-lg text-ink/70 font-sans leading-relaxed">
            If people find you by searching your trade or service plus a suburb, and then ring, the work is the same:
            a Google Business Profile that wins the map, pages for what you do and where, and reviews that keep coming.
            These are the business types I work with most. If yours is not here, ask anyway.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll variant="group" className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 items-start">
          {INDUSTRY_GROUPS.map((g, i) => (
            <div
              key={g.name}
              className={`rv-up ${i % 3 === 1 ? 'rv-delay-1' : i % 3 === 2 ? 'rv-delay-2' : ''} flex flex-col rounded-2xl border border-ink/10 bg-white/55 p-6 sm:p-7`}
            >
              <h3 className="text-xs font-semibold tracking-[0.18em] uppercase text-ink/55 font-sans">{g.name}</h3>
              <ul className="mt-4 space-y-4 flex-1">
                {g.industries.map((ind) => (
                  <li key={ind.name} className="font-sans">
                    {ind.href ? (
                      <Link href={ind.href} className="inline-flex items-center gap-1.5 text-base font-bold text-ink hover:underline underline-offset-4">
                        {ind.name} <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </Link>
                    ) : (
                      <p className="text-base font-bold text-ink">{ind.name}</p>
                    )}
                    <p className="mt-0.5 text-sm text-ink/65 leading-snug">{ind.examples}</p>
                    <p className="mt-1 inline-flex items-center gap-1.5 text-xs text-ink/55">
                      <Search className="w-3 h-3" aria-hidden="true" />
                      <span>&ldquo;{ind.search}&rdquo;</span>
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="rv-up rv-delay-2 flex flex-col justify-between rounded-2xl bg-ink text-white p-6 sm:p-7">
            <div>
              <h3 className="text-xs font-semibold tracking-[0.18em] uppercase text-white/55 font-sans">Not on the list?</h3>
              <p className="mt-4 text-lg font-bold font-serif text-white leading-snug">
                If your customers search for what you do and then call, I can probably help.
              </p>
              <p className="mt-3 text-sm text-white/75 font-sans leading-relaxed">
                Tell me what you do and where. I will look at the three businesses above you on the map and say
                whether it is worth doing. If it is not, I will say that too.
              </p>
            </div>
            <a
              href={BUSINESS_INFO.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-white text-ink px-5 py-3 text-sm font-semibold hover:bg-white/90 transition-colors duration-200 group"
            >
              Book a 30-minute call <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
