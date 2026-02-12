import { Search, Target, Database, Filter } from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const integrations = [
  {
    icon: Search,
    title: 'SEO Traffic Conversion',
    description:
      'Capture organic visitors with targeted lead magnets and convert them into email subscribers. Turn search traffic into a retargetable audience.',
  },
  {
    icon: Target,
    title: 'Paid Ad Retargeting',
    description:
      'Use email engagement data to build custom audiences for Meta and Google Ads. Reduce cost per acquisition by re-engaging warm prospects.',
  },
  {
    icon: Database,
    title: 'CRM Automation',
    description:
      'Connect email directly to your CRM so sales teams get warm leads with full context. No manual handoffs, no dropped follow-ups.',
  },
  {
    icon: Filter,
    title: 'Lead Qualification',
    description:
      'Score and segment leads based on email behaviour. Prioritise follow-up with prospects who are actively engaged and ready to buy.',
  },
];

const examples = [
  'A Google Ad drives traffic to a landing page. The visitor opts in. A welcome sequence warms them. A retargeting ad closes the sale.',
  'An SEO blog post ranks locally. The reader downloads a guide. Email automation nurtures them for 30 days. They book a call.',
  'A past customer receives a re-engagement sequence. They click through. A personalised offer brings them back for a repeat purchase.',
];

export default function EmailMarketingIntegration() {
  return (
    <section className="bg-navy-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(200,161,78,0.05),transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <AnimateOnScroll className="text-center mb-14 sm:mb-20">
          <span className="inline-block text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4 font-sans">
            Full-Stack Approach
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5 font-serif">
            How Email Integrates With Your Broader Strategy
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
              Email does not exist in isolation. It amplifies every other channel and creates compounding returns
              when connected to your wider marketing system.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
          {integrations.map((item, index) => {
            const Icon = item.icon;
            return (
              <AnimateOnScroll
                key={index}
                stagger={index + 1}
                className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-7 hover:border-gold/20 hover:bg-white/[0.04] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-gold" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 font-serif">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed font-sans">{item.description}</p>
              </AnimateOnScroll>
            );
          })}
        </div>

        <AnimateOnScroll>
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-8">
            <h3 className="text-xl font-bold text-white mb-6 font-serif">How the Channels Connect</h3>
            <div className="space-y-5">
              {examples.map((example, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center mt-0.5">
                    <span className="text-gold font-bold text-xs font-serif">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">{example}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
