import { MessageSquare, Globe2, Users, ClipboardCheck, Crosshair, Scissors, CalendarCheck } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';
import Eyebrow from './Eyebrow';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description:
      "We talk. I want to know what you sell, who buys it, what you've tried and what you actually want out of this. I take it away. Nothing gets pitched on the first call.",
    icon: MessageSquare,
  },
  {
    number: '02',
    title: 'Market research',
    description:
      'I look at your local competitors, then the top operators nationally, then globally. Businesses that have spent millions working out what converts. I bring that standard back to your suburb.',
    icon: Globe2,
  },
  {
    number: '03',
    title: 'Your best customers',
    description:
      'I speak to your best current and past customers. They tell me why they chose you, in words your website has never used.',
    icon: Users,
  },
  {
    number: '04',
    title: 'Team review',
    description:
      'Everything I produce goes past my team, one by one, before you see it. Each review is reviewed. It is slower, and it is why the work holds up.',
    icon: ClipboardCheck,
  },
  {
    number: '05',
    title: 'Offer and channel',
    description:
      "We sharpen the offer and pick the channel that fits it. You might be certain it's Google Ads. Often it isn't.",
    icon: Crosshair,
  },
  {
    number: '06',
    title: 'Launch, then cut fast',
    description:
      "We run it, watch it, and cut what doesn't work quickly. Budget goes where the results are, not where the plan said.",
    icon: Scissors,
  },
  {
    number: '07',
    title: 'Every Friday',
    description:
      'You get an update from me every Friday. Any message during the week is answered within two hours.',
    icon: CalendarCheck,
  },
];

export default function ServicesOverview() {
  return (
    <section id="services" className="bg-navy-900 relative overflow-hidden" aria-labelledby="process-heading">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(12,134,234,0.05),transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <AnimateOnScroll className="text-center mb-14 sm:mb-20">
          <Eyebrow className="mb-4">The process</Eyebrow>
          <h3
            id="process-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5 font-serif"
          >
            How working with me goes
          </h3>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-400 font-sans">
            No packages, no tiers. Seven steps, in the order they actually happen.
          </p>
        </AnimateOnScroll>

        <div className="relative">
          <div className="absolute left-8 sm:left-10 top-0 bottom-0 w-px bg-gradient-to-b from-gold/40 via-gold/20 to-transparent hidden md:block" />

          <div className="space-y-5 sm:space-y-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <AnimateOnScroll key={step.number} stagger={Math.min(index + 1, 7)} className="group relative">
                  <div className="md:pl-24 relative">
                    <div className="absolute left-0 top-6 hidden md:flex items-center justify-center">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gold/5 border border-gold/20 flex items-center justify-center group-hover:bg-gold/10 group-hover:border-gold/40 transition-colors duration-200">
                        <span className="text-gold font-bold text-lg sm:text-xl font-serif">{step.number}</span>
                      </div>
                    </div>

                    <div className="relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-8 hover:border-gold/20 hover:bg-white/[0.04] transition-colors duration-200">
                      <div className="flex items-start gap-5">
                        <div className="md:hidden shrink-0 w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center">
                          <span className="text-gold font-bold text-sm font-serif">{step.number}</span>
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-9 h-9 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                              <Icon className="w-4 h-4 text-gold" />
                            </div>
                            <h4 className="text-lg sm:text-xl font-bold text-white font-serif">{step.title}</h4>
                          </div>
                          <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-sans">
                            {step.description}
                          </p>
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
