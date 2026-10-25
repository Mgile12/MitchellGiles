import { ArrowRight, CalendarCheck, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/business-info';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Eyebrow from '@/components/Eyebrow';
import RevealText from '@/components/RevealText';

// The headline offer. No price on the site: it is sold on the call.
const GUARANTEE = {
  id: 'top-3-in-90-days',
  headline: 'Top 3 on Google, or first page of Google, within 90 days or less. Or I keep working for free until you are.',
  body:
    'That is the offer. We agree the searches and the suburbs at the start, in writing. I do the Google Business Profile, local SEO and AI search work every week. If your business is not in the top 3 on Google Maps or on the first page of Google for those searches inside 90 days, the monthly work continues at no charge until it is.',
  terms:
    'Applies to the target searches and service area agreed in writing before work starts. Top 3 means the three businesses shown in the Google Maps result for the agreed search in the agreed area. First page means page one of the Google search result for the agreed search. Measured with a ranking grid scan and a search from the agreed area. If the target is not reached within 90 days of the start date, the same monthly work continues at no charge until it is reached. Requires the client to give the access and the proof material (reviews, photos, licences) requested during the 90 days. One agreement per business. MRG Marketing may decline a business where the target is not realistic, and will say so on the first call.',
  points: [
    { title: '90 days or less', text: 'The clock starts the day the work starts, not the day you sign.' },
    { title: 'Agreed in writing', text: 'The searches and the suburbs are set before day one, so there is nothing to argue about on day 90.' },
    { title: 'Free until it is done', text: 'Miss the target and the same weekly work continues, at no charge, until you are there.' },
  ],
};

export default function GuaranteeOffer() {
  return (
    <section id={GUARANTEE.id} className="relative bg-ink text-white overflow-hidden scroll-mt-24"
      style={{ ["--accent" as string]: "#ffffff", ["--accent-rgb" as string]: "255, 255, 255" }}
      aria-labelledby="guarantee-heading"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.12),transparent_55%)]" aria-hidden="true" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <AnimateOnScroll className="max-w-4xl">
          <Eyebrow align="left" className="mb-5">The offer</Eyebrow>
          <h2 id="guarantee-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-serif leading-[1.12] text-white">
            <RevealText text={GUARANTEE.headline} />
          </h2>
          <p className="mt-7 text-lg sm:text-xl text-white/80 font-sans leading-relaxed">{GUARANTEE.body}</p>
        </AnimateOnScroll>

        <AnimateOnScroll variant="group" className="mt-12 grid gap-5 md:grid-cols-3">
          {GUARANTEE.points.map((p, i) => (
            <div key={p.title} className={`rv-up ${i === 1 ? 'rv-delay-1' : i === 2 ? 'rv-delay-2' : ''} rounded-2xl border border-white/15 bg-white/[0.06] p-6`}>
              <h3 className="text-lg font-bold font-serif text-white">{p.title}</h3>
              <p className="mt-2 text-base text-white/75 font-sans leading-relaxed">{p.text}</p>
            </div>
          ))}
        </AnimateOnScroll>

        <AnimateOnScroll className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
          <a
            href={BUSINESS_INFO.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-white text-ink px-7 py-3.5 text-sm font-semibold hover:bg-white/90 transition-colors duration-200 group"
          >
            <CalendarCheck className="w-4 h-4" aria-hidden="true" />
            Book a 30-minute call
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
          <a href={`tel:${BUSINESS_INFO.phoneFormatted}`} className="inline-flex items-center gap-2 text-sm font-semibold text-white/85 hover:text-white transition-colors duration-150 font-sans">
            <Phone className="w-4 h-4" aria-hidden="true" /> Or call {BUSINESS_INFO.phone}
          </a>
        </AnimateOnScroll>

        <details className="mt-8 group max-w-4xl">
          <summary className="cursor-pointer text-xs font-semibold tracking-[0.18em] uppercase text-white/55 font-sans inline-flex items-center gap-1.5 list-none [&::-webkit-details-marker]:hidden">
            Terms and conditions <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-open:rotate-90" />
          </summary>
          <p className="mt-3 text-xs text-white/60 font-sans leading-relaxed">{GUARANTEE.terms}</p>
        </details>
      </div>
    </section>
  );
}
