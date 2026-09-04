import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const points = [
  'Use SEO keyword data to find high-converting search terms for your ad campaigns',
  'Run ads for immediate visibility while organic rankings build over months',
  'Reduce overall ad spend as organic traffic grows and captures free clicks',
  'Share landing page performance data between paid and organic channels',
  'Dominate both paid and organic results for your most valuable Gold Coast keywords',
];

export default function GoogleAdsSEOConnection() {
  return (
    <section className="bg-navy-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(200,161,78,0.05),transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <AnimateOnScroll>
            <span className="inline-block text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4 font-sans">
              Better Together
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-5 font-serif">
              How Google Ads Connects to SEO
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 font-sans">
              The smartest Gold Coast businesses do not choose between Google Ads and SEO. They use both.
              Ads drive immediate leads while SEO builds a compounding organic asset.
            </p>
            <ul className="space-y-3 mb-8">
              {points.map((point, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-slate-300 font-sans">
                  <span className="text-gold mt-1.5 text-[8px]">&#9670;</span>
                  {point}
                </li>
              ))}
            </ul>
            <Link
              href="/seo-gold-coast"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold-light transition-colors duration-200 font-sans group"
            >
              Learn about SEO Gold Coast
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </AnimateOnScroll>

          <AnimateOnScroll stagger={2}>
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-8">
              <h3 className="text-xl font-bold text-white mb-6 font-serif">The Combined Approach</h3>
              <div className="space-y-5">
                {[
                  'Week 1: Google Ads launch drives immediate qualified traffic to optimised landing pages.',
                  'Month 1-3: SEO audit and implementation begins. Ads continue generating leads while organic foundation is built.',
                  'Month 3-6: Organic rankings start climbing. Ad budget can be reallocated to highest-performing campaigns.',
                  'Month 6+: Organic traffic grows. Total cost per lead decreases. Both channels compound together.',
                ].map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="shrink-0 w-8 h-8 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center mt-0.5">
                      <span className="text-gold font-bold text-xs font-serif">{String(index + 1).padStart(2, '0')}</span>
                    </div>
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
