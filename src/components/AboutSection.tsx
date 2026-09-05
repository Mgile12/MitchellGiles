import { Users, Globe2, Scissors, CalendarCheck } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';
import CountUp from './CountUp';
import Eyebrow from './Eyebrow';
import RevealText from './RevealText';

const howIWork = [
  {
    icon: Users,
    title: 'You deal with me',
    text: 'I do the research, the thinking and the work. A small team reviews every piece before it reaches you.',
  },
  {
    icon: Globe2,
    title: 'Local first, then the best in the world',
    text: 'I study your competitors here, then the top operators nationally and globally, and bring that standard back to your suburb.',
  },
  {
    icon: Scissors,
    title: 'No packages',
    text: 'I find the choke point, fix it, and cut what doesn\'t work. Budget goes where the results are.',
  },
  {
    icon: CalendarCheck,
    title: 'Every Friday',
    text: 'You get an update every Friday. Anything in between is answered the same day.',
  },
];

const quickProof = [
  { figure: '266', label: 'calls in five months from one Business Profile, up 23% on last year' },
  { figure: '$60,632', label: 'in 30 days from email, 63% of that store’s monthly revenue' },
  { figure: '6.88x', label: 'return on ad spend across three Meta campaigns' },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative bg-navy-950 text-white overflow-hidden" aria-labelledby="about-heading">
      <div className="absolute top-0 left-0 right-0 h-px bg-gold/20" />
      <div className="glow w-[620px] h-[620px] -bottom-72 -left-40" style={{ ['--glow-a' as string]: '0.12' }} aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <AnimateOnScroll className="lg:col-span-7">
            <Eyebrow align="left" className="mb-5">About</Eyebrow>
            <h2
              id="about-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.1] font-serif mb-6"
            >
              <RevealText text="One consultant." />{' '}
              <span className="text-slate-400">
                <RevealText text="No account manager in between." startIndex={2} />
              </span>
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-slate-300 leading-relaxed font-sans max-w-2xl">
              <p>
                I&apos;m Mitchell Giles, a marketing consultant in Ormeau working with businesses across the Gold
                Coast and Brisbane. Most of my clients are trades and local services. Some are event and e-commerce
                businesses doing six figures a month.
              </p>
              <p>
                I started in Google Business Profiles, because free Google traffic is the fastest win a local business
                can get. The paid, email and strategy work came from clients who wanted the phone to keep ringing
                after that.
              </p>
              <p className="text-white font-medium">
                Most of my work is ongoing. One-off jobs get one-off results.
              </p>
            </div>

            <div className="mt-10 grid sm:grid-cols-2 gap-4">
              {howIWork.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-9 h-9 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-gold" />
                    </div>
                    <div>
                      <p className="text-white font-semibold font-sans text-sm mb-1">{item.title}</p>
                      <p className="text-slate-400 text-sm leading-relaxed font-sans">{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll className="lg:col-span-5">
            <div className="accent-line relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-6 sm:p-8 lg:sticky lg:top-28">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-6 font-sans">
                Three numbers, all from client accounts
              </p>
              <div className="divide-y divide-white/[0.06]">
                {quickProof.map((p) => (
                  <div key={p.figure} className="py-5 first:pt-0 last:pb-0">
                    <p className="text-gradient-accent text-3xl sm:text-4xl font-bold font-serif tabular-nums">
                      <CountUp value={p.figure} />
                    </p>
                    <p className="text-sm text-slate-400 font-sans mt-1 leading-relaxed">{p.label}</p>
                  </div>
                ))}
              </div>
              <a
                href="#results"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold/80 transition-colors duration-150 font-sans"
              >
                See the screenshots below
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
