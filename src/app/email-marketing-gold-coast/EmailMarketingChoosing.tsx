import { CheckCircle, XCircle } from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const whatToAsk = [
  'Do they build strategy around your specific business goals?',
  'Can they show measurable results from previous clients?',
  'Do they handle automation, not just one-off campaigns?',
  'Will you get clear reporting tied to revenue?',
  'Do they understand the Gold Coast market?',
];

const redFlags = [
  'No strategy discussion before quoting',
  'Promising specific open rates without seeing your data',
  'No mention of segmentation or automation',
  'Charging per email instead of per outcome',
];

export default function EmailMarketingChoosing() {
  return (
    <section className="bg-navy-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(200,161,78,0.04),transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <AnimateOnScroll className="text-center mb-14 sm:mb-20">
          <span className="inline-block text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4 font-sans">
            Choosing Right
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5 font-serif">
            Choosing the Right Gold Coast Email Marketing Services
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
              Hiring someone to &ldquo;send emails&rdquo; is not the same as hiring someone to build a revenue
              channel. Here is what to look for -- and what to avoid.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimateOnScroll>
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-8 h-full">
              <h3 className="text-xl font-bold text-white mb-6 font-serif">What to Ask</h3>
              <ul className="space-y-4">
                {whatToAsk.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll stagger={2}>
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-8 h-full">
              <h3 className="text-xl font-bold text-white mb-6 font-serif">Red Flags</h3>
              <ul className="space-y-4">
                {redFlags.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400/70 shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>
        </div>

        <AnimateOnScroll className="mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.08]">
              <img
                src="/email-marketing-services-gold-coast-planning.jpg"
                alt="Email marketing strategy planning session in a Gold Coast office"
                className="w-full h-auto object-cover aspect-[4/3]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 via-transparent to-transparent" />
            </div>

            <div className="rounded-2xl border border-gold/15 bg-gold/[0.03] p-6 sm:p-8">
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-sans">
                <span className="text-gold font-semibold">Prioritise strategy over frequency.</span>{' '}
                One well-targeted email per week will outperform five generic blasts. The right provider will
                focus on building a system that generates revenue, not just filling inboxes.
              </p>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
