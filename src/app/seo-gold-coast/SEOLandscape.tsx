import { Map, Trophy, Building } from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const factors = [
  {
    icon: Map,
    title: 'Map Pack Dominance',
    description:
      'For local service searches, the Google Map Pack captures the majority of clicks. If your Google Business Profile is not optimised and ranking in the top three, you are invisible to local searchers. This is where most Gold Coast businesses lose leads without even knowing it.',
  },
  {
    icon: Trophy,
    title: 'Service-Based Competition',
    description:
      'Trades, health practitioners, real estate agents, and professional services all compete for a limited number of first-page spots. The businesses investing in proper SEO -- not just a basic website -- are the ones consistently capturing new enquiries.',
  },
  {
    icon: Building,
    title: 'Suburb Differentiation',
    description:
      'A customer in Burleigh Heads searching for a service is not the same as one in Southport. Each suburb has different demographics, competition levels, and search volumes. Effective Gold Coast SEO targets these micro-markets individually rather than treating the entire region as one keyword.',
  },
];

export default function SEOLandscape() {
  return (
    <section className="bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(200,161,78,0.04),transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <AnimateOnScroll className="text-center mb-14 sm:mb-20">
          <span className="inline-block text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4 font-sans">
            Local Context
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5 font-serif">
            Understanding the Gold Coast SEO Landscape
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
              The Gold Coast is a unique search market. Understanding how local search behaviour differs
              from capital cities is the first step to building an effective strategy.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {factors.map((item, index) => {
            const Icon = item.icon;
            return (
              <AnimateOnScroll
                key={index}
                stagger={index + 1}
                className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-8 hover:border-gold/20 hover:bg-white/[0.04] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 font-serif">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed font-sans">{item.description}</p>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
