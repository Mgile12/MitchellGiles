import { Database, Target, Mail, BarChart3 } from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const services = [
  {
    icon: Database,
    title: 'CRM Integration',
    description:
      'Connect your marketing channels to your CRM so sales teams get warm leads with full context. No manual handoffs, no dropped follow-ups, no duplicated data.',
    points: [
      'GoHighLevel, HubSpot, and custom CRM setup',
      'Lead source tracking and attribution',
      'Automated pipeline management',
      'Contact segmentation and tagging',
    ],
  },
  {
    icon: Target,
    title: 'Lead Scoring',
    description:
      'Not all leads are equal. Lead scoring prioritises follow-up with prospects who are actively engaged and ready to buy -- so your team focuses on the right conversations.',
    points: [
      'Behavioural scoring based on email and site activity',
      'Demographic scoring based on fit criteria',
      'Automatic qualification and routing',
      'Score-triggered notifications for sales teams',
    ],
  },
  {
    icon: Mail,
    title: 'Nurture Sequences',
    description:
      'Automated email and SMS sequences that build trust, deliver value, and move prospects through your pipeline without manual intervention.',
    points: [
      'Welcome sequences for new leads',
      'Re-engagement campaigns for cold contacts',
      'Post-purchase follow-up and upsell flows',
      'Event-triggered messaging based on behaviour',
    ],
  },
  {
    icon: BarChart3,
    title: 'Conversion Tracking',
    description:
      'Full visibility on what is working and what is not. Track every touchpoint from first click to closed deal so you can optimise with confidence.',
    points: [
      'Multi-touch attribution modelling',
      'Funnel drop-off analysis',
      'Revenue attribution by channel and campaign',
      'Automated reporting dashboards',
    ],
  },
];

export default function AutomationServices() {
  return (
    <section className="bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(200,161,78,0.04),transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <AnimateOnScroll className="text-center mb-14 sm:mb-20">
          <span className="inline-block text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4 font-sans">
            What We Build
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5 font-serif">
            Automation Services for Gold Coast Businesses
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
              Four pillars of marketing automation that turn manual processes into scalable systems.
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
