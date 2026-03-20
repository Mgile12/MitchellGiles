import { Target, Layers, Rocket, BarChart3, Scissors } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';

const services = [
  {
    number: '01',
    title: 'Sharpen Your Offer',
    description: 'Refine your offer until customers understand it immediately. Clear positioning that converts.',
    icon: Target,
  },
  {
    number: '02',
    title: 'Build the Funnel',
    description: 'A clear funnel that guides prospects from interest to purchase. Simple, direct, and built to make money.',
    icon: Layers,
  },
  {
    number: '03',
    title: 'Deploy the Right Channels',
    description: 'SEO, paid ads, email, automation -- whatever actually works for your business. No wasted effort, just the channels that bring in customers.',
    icon: Rocket,
  },
  {
    number: '04',
    title: 'Track Every Lead',
    description: 'Full visibility on your pipeline. Know where every dollar goes and where every lead comes from.',
    icon: BarChart3,
  },
  {
    number: '05',
    title: "Cut What Doesn't Work",
    description: 'Eliminate anything that wastes your budget. Continuous optimization where every dollar performs.',
    icon: Scissors,
  },
];

export default function ServicesOverview() {
  return (
    <section id="services" className="bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(12,134,234,0.05),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(12,134,234,0.03),transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <AnimateOnScroll className="text-center mb-14 sm:mb-20">
          <span className="inline-block text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4 font-sans">
            The Process
          </span>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5 font-serif">
            What I Do in 5 Steps
          </h3>
          <div className="max-w-2xl mx-auto space-y-2">
            <p className="text-base sm:text-lg text-slate-400 font-sans">
              No generic packages. No tiered pricing games.
            </p>
            <p className="text-base sm:text-lg text-slate-300 font-sans">
              I build you a simple, predictable lead pipeline -- built for real Aussie customers, not marketing textbooks.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="relative">
          <div className="absolute left-8 sm:left-10 top-0 bottom-0 w-px bg-gradient-to-b from-gold/40 via-gold/20 to-transparent hidden md:block" />

          <div className="space-y-6 sm:space-y-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <AnimateOnScroll key={index} stagger={index + 1} className="group relative">
                  <div className="md:pl-24 relative">
                    <div className="absolute left-0 top-6 hidden md:flex items-center justify-center">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gold/5 border border-gold/20 flex items-center justify-center group-hover:bg-gold/10 group-hover:border-gold/40 transition-all duration-300">
                        <span className="text-gold font-bold text-lg sm:text-xl font-serif">{service.number}</span>
                      </div>
                    </div>

                    <div className="relative rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-6 sm:p-8 hover:border-gold/20 hover:bg-white/[0.04] hover:-translate-y-1 transition-all duration-300">
                      <div className="flex items-start gap-5">
                        <div className="md:hidden shrink-0 w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center">
                          <span className="text-gold font-bold text-sm font-serif">{service.number}</span>
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-9 h-9 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                              <Icon className="w-4.5 h-4.5 text-gold" />
                            </div>
                            <h4 className="text-lg sm:text-xl font-bold text-white font-serif">
                              {service.title}
                            </h4>
                          </div>
                          <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-sans">
                            {service.description}
                          </p>
                        </div>
                      </div>

                      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-gold/[0.03] to-transparent rounded-2xl pointer-events-none" />
                    </div>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>

        <AnimateOnScroll className="mt-14 sm:mt-20 text-center">
          <div className="inline-block relative">
            <div className="absolute -inset-x-6 -inset-y-3 bg-gold/5 rounded-2xl blur-sm" />
            <p className="relative text-lg sm:text-xl text-white font-semibold font-serif">
              You&apos;re not buying marketing services.
              <span className="text-gold"> You&apos;re buying predictable growth.</span>
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
