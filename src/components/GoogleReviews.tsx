import { ArrowRight, Star } from 'lucide-react';
import { GOOGLE_REVIEWS, GOOGLE_REVIEWS_URL, GOOGLE_WRITE_REVIEW_URL } from '@/lib/reviews';
import AnimateOnScroll from './AnimateOnScroll';
import Eyebrow from './Eyebrow';
import RevealText from './RevealText';

function Stars({ n }: { n: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${n} out of 5 stars`} role="img">
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} className={`w-4 h-4 ${i < n ? 'fill-ink text-ink' : 'text-ink/20'}`} aria-hidden="true" />
      ))}
    </div>
  );
}

/** Google reviews copied from the Business Profile, with links to read the rest and to leave one. */
export default function GoogleReviews() {
  return (
    <section id="reviews" className="relative bg-navy-900 overflow-hidden scroll-mt-24" aria-labelledby="reviews-heading">
      <div className="grid-ground absolute inset-0" aria-hidden="true" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <AnimateOnScroll className="text-center mb-10 sm:mb-14">
          <Eyebrow className="mb-4">Google reviews</Eyebrow>
          <h2 id="reviews-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink font-serif">
            <RevealText text="What clients say on Google." />
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll variant="group" className="grid gap-5 lg:grid-cols-2">
          {GOOGLE_REVIEWS.map((r, i) => (
            <blockquote
              key={r.name}
              className={`rv-up ${i === 1 ? 'rv-delay-1' : ''} flex h-full flex-col rounded-2xl border border-ink/10 bg-white/55 p-7 sm:p-8`}
            >
              <Stars n={r.stars} />
              <p className="mt-5 text-base sm:text-lg text-ink/80 font-sans leading-relaxed flex-1">&ldquo;{r.text}&rdquo;</p>
              <footer className="mt-6 flex items-end justify-between gap-4">
                <div>
                  <cite className="not-italic text-base font-bold text-ink font-serif">{r.name}</cite>
                  <p className="text-sm text-ink/60 font-sans">{r.context}</p>
                </div>
                <span className="text-xs font-semibold tracking-[0.18em] uppercase text-ink/45 font-sans whitespace-nowrap">Google review</span>
              </footer>
            </blockquote>
          ))}
        </AnimateOnScroll>

        <AnimateOnScroll className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="gold-flat-btn inline-flex items-center justify-center gap-2 rounded-lg px-7 py-3.5 text-sm font-semibold group"
          >
            See all reviews on Google
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
          <a
            href={GOOGLE_WRITE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-ink/70 transition-colors duration-150 font-sans"
          >
            Worked with me? Leave a review <ArrowRight className="w-4 h-4" />
          </a>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
