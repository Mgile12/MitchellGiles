import { Search, RefreshCw, BarChart3, DollarSign } from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const services = [
  {
    icon: Search,
    title: 'Search Campaigns',
    description:
      'Targeted search ads that appear when your ideal customers are actively looking for what you sell. Keyword research, ad copy, and bid strategy built for your specific Gold Coast market.',
    points: [
      'High-intent keyword targeting by suburb and service',
      'Ad copy that qualifies clicks before they cost you',
      'Negative keyword management to eliminate waste',
      'Ad extensions that maximise click-through rate',
    ],
  },
  {
    icon: RefreshCw,
    title: 'Remarketing',
    description:
      'Re-engage visitors who did not convert the first time. Stay top of mind with targeted display and search ads that bring warm prospects back to your site.',
    points: [
      'Website visitor retargeting across the Google network',
      'Customer list targeting for upsells and renewals',
      'Dynamic remarketing for product-based businesses',
      'Sequential messaging that builds trust over time',
    ],
  },
  {
    icon: BarChart3,
    title: 'Performance Tracking',
    description:
      'Full conversion tracking so you know exactly which keywords, ads, and landing pages drive real leads and sales. No guessing, no vanity metrics.',
    points: [
      'Call tracking and form submission attribution',
      'Google Analytics 4 integration and event tracking',
      'Cost per lead and cost per acquisition reporting',
      'Monthly performance reviews with clear action items',
    ],
  },
  {
    icon: DollarSign,
    title: 'Budget Optimisation',
    description:
      'Continuous refinement to reduce cost per lead and increase return on ad spend. Every dollar works harder month over month.',
    points: [
      'Bid strategy testing and adjustment',
      'Ad schedule optimisation for peak conversion times',
      'Geographic bid adjustments for Gold Coast suburbs',
      'Landing page testing to improve conversion rates',
    ],
  },
];

export default function GoogleAdsServices() {
  return (
    <section className="bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(200,161,78,0.04),transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <AnimateOnScroll className="text-center mb-14 sm:mb-20">
          <span className="inline-block text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4 font-sans">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5 font-serif">
            Google Ads Services for Gold Coast Businesses
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
              Four pillars of Google Ads management that turn ad spend into measurable, predictable revenue.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((item, index) => {
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
                <p className="text-sm text-slate-400 leading-relaxed mb-4 font-sans">{item.description}</p>
                <ul className="space-y-2">
                  {item.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-300 font-sans">
                      <span className="text-gold mt-1.5 text-[8px]">&#9670;</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
