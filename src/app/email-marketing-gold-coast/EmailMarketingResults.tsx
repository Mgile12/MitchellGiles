import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Eyebrow from '@/components/Eyebrow';
import RevealText from '@/components/RevealText';

const results = [
  {
    figure: '$60,632',
    label: 'from email in 30 days, 63.4% of the store’s revenue that month',
    href: '/case-studies/email-marketing-60k-in-30-days',
    img: { src: '/images/email-marketing-gold-coast/email-marketing-gold-coast-60632-dollars-from-email-in-30-days.webp', alt: 'email marketing gold coast: $60,632 attributed to email in 30 days, 63.4% of store revenue' },
  },
  {
    figure: '72%',
    label: 'open rate and 10.3% click rate on one campaign to a list the client already had',
    href: '/case-studies/email-campaign-72-percent-open-rate',
    img: { src: '/images/email-marketing-gold-coast/email-marketing-gold-coast-72-percent-open-rate-campaign.webp', alt: 'email marketing gold coast: 72% open rate and 10.3% click rate on one email campaign' },
  },
  {
    figure: '$82,574',
    label: 'in under three hours from a launch sequence to an event waitlist, no ads, done twice',
    href: '/case-studies/event-waitlist-launch-sequence-82k',
    img: { src: '/images/email-marketing-gold-coast/email-marketing-gold-coast-82574-dollars-event-launch-sequence.webp', alt: 'email marketing gold coast: $82,574 in sales from a launch sequence to an event waitlist, 31 orders' },
  },
];

export default function EmailMarketingResults() {
  return (
    <section className="relative bg-navy-950 overflow-hidden" aria-labelledby="email-results-heading">
      <div className="grid-ground absolute inset-0" aria-hidden="true" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <AnimateOnScroll className="text-center mb-10 sm:mb-14">
          <Eyebrow className="mb-4">Email case studies</Eyebrow>
          <h2 id="email-results-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink font-serif">
            <RevealText text="Three email results, with the screenshots." />
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-ink/65 font-sans">
            Each one is written up with the work, the period, how it was measured and what the number cannot prove.
          </p>
        </AnimateOnScroll>
        <AnimateOnScroll variant="group" className="grid gap-5 md:grid-cols-3">
          {results.map((r, i) => (
            <Link
              key={r.href}
              href={r.href}
              className={`rv-up ${i === 1 ? 'rv-delay-1' : i === 2 ? 'rv-delay-2' : ''} group flex flex-col rounded-2xl border border-ink/10 bg-white/55 overflow-hidden hover:border-ink/40 transition-colors duration-200`}
            >
              <div className="aspect-[16/10] overflow-hidden border-b border-ink/10 bg-white">
                <img src={r.img.src} alt={r.img.alt} loading="lazy" decoding="async" className="w-full h-full object-cover object-top" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <p className="text-3xl font-bold text-ink font-serif tabular-nums">{r.figure}</p>
                <p className="mt-2 text-sm text-ink/65 font-sans">{r.label}</p>
                <span className="mt-auto pt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink font-sans">
                  Read the case study <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </div>
            </Link>
          ))}
        </AnimateOnScroll>
      </div>
    </section>
  );
}
