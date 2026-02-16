import { Compass, Megaphone, Search, Mail, BarChart3 } from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const layers = [
  {
    number: '01',
    icon: Compass,
    title: 'Strategy',
    description: 'Define your ideal customer, map their buying journey, and build a lead generation plan that targets the right people with the right message at the right time.',
  },
  {
    number: '02',
    icon: Megaphone,
    title: 'Paid Advertising',
    description: 'Google Ads and Meta Ads that put your business in front of high-intent prospects. Precision targeting, compelling creative, and landing pages built to convert.',
  },
  {
    number: '03',
    icon: Search,
    title: 'Lead Generation SEO',
    description: 'Organic rankings that generate leads without ongoing ad spend. Suburb-level keyword targeting, service page optimisation, and content that captures search intent.',
  },
  {
    number: '04',
    icon: Mail,
    title: 'Email Marketing Lead Generation',
    description: 'Automated nurture sequences that convert cold leads into warm prospects. Welcome flows, re-engagement campaigns, and behaviour-triggered messaging.',
  },
  {
    number: '05',
    icon: BarChart3,
    title: 'Tracking & Optimisation',
    description: 'Full conversion tracking across every channel. Know exactly which campaigns drive leads and revenue, then scale what works and cut what does not.',
  },
];

export default function LeadGenLayers() {
  return (
    <section className="bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(200,161,78,0.04),transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <AnimateOnScroll className="text-center mb-14 sm:mb-20">
          <span className="inline-block text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4 font-sans">
            The System
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5 font-serif">
            Five Layers of Lead Generation
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
              Effective lead generation is not a single tactic. It is a layered system where each component
              reinforces the others.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="relative">
          <div className="absolute left-8 sm:left-10 top-0 bottom-0 w-px bg-gradient-to-b from-gold/40 via-gold/20 to-transparent hidden md:block" />

          <div className="space-y-6 sm:space-y-8">
            {layers.map((layer, index) => {
              const Icon = layer.icon;
              return (
                <AnimateOnScroll key={index} stagger={index + 1} className="group relative">
                  <div className="md:pl-24 relative">
                    <div className="absolute left-0 top-6 hidden md:flex items-center justify-center">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gold/5 border border-gold/20 flex items-center justify-center group-hover:bg-gold/10 group-hover:border-gold/40 transition-all duration-300">
                        <span className="text-gold font-bold text-lg sm:text-xl font-serif">{layer.number}</span>
                      </div>
                    </div>

                    <div className="relative rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-6 sm:p-8 hover:border-gold/20 hover:bg-white/[0.04] hover:-translate-y-1 transition-all duration-300">
                      <div className="flex items-start gap-5">
                        <div className="md:hidden shrink-0 w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center">
                          <span className="text-gold font-bold text-sm font-serif">{layer.number}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-9 h-9 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                              <Icon className="w-4.5 h-4.5 text-gold" />
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-white font-serif">{layer.title}</h3>
                          </div>
                          <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-sans">{layer.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
