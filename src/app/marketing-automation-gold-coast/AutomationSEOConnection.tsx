import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const connections = [
  'Organic traffic from SEO lands on your site. Automation captures leads and routes them to the right nurture sequence.',
  'Google Ads drive prospects to landing pages. Automation scores them and triggers personalised follow-up based on their behaviour.',
  'Email marketing campaigns send targeted offers. Automation tracks engagement and escalates hot leads to your sales team.',
  'Every channel feeds the same system. No dropped leads, no manual handoffs, no missed opportunities.',
];

export default function AutomationSEOConnection() {
  return (
    <section className="bg-navy-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(200,161,78,0.05),transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <AnimateOnScroll>
            <span className="inline-block text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4 font-sans">
              Connected System
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-5 font-serif">
              How Automation Connects Every Channel
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 font-sans">
              Automation is the connective tissue between your marketing channels. Without it, leads fall through cracks
              and money gets left on the table.
            </p>
            <div className="space-y-5 mb-8">
              {connections.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center mt-0.5">
                    <span className="text-gold font-bold text-xs font-serif">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">{step}</p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll stagger={2}>
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-8">
              <h3 className="text-xl font-bold text-white mb-6 font-serif">Related Services</h3>
              <div className="space-y-4">
                {[
                  { href: '/seo-gold-coast', label: 'SEO Gold Coast', desc: 'Build organic traffic that feeds your automation system' },
                  { href: '/google-ads-gold-coast', label: 'Google Ads Gold Coast', desc: 'Drive immediate leads into automated nurture sequences' },
                  { href: '/email-marketing-gold-coast', label: 'Email Marketing Gold Coast', desc: 'Strategic campaigns and sequences powered by automation' },
                  { href: '/lead-generation-gold-coast', label: 'Lead Generation Gold Coast', desc: 'Fill your pipeline with qualified prospects' },
                ].map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="block rounded-xl border border-white/[0.06] p-4 hover:border-gold/20 hover:bg-white/[0.04] transition-all duration-200 group"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-semibold text-white group-hover:text-gold transition-colors duration-200 font-sans">
                        {item.label}
                      </span>
                      <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-gold group-hover:translate-x-1 transition-all duration-200" />
                    </div>
                    <p className="text-xs text-slate-500 font-sans">{item.desc}</p>
                  </Link>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
