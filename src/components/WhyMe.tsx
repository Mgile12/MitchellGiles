import Link from 'next/link';
import { Clock, UserPlus, Building2, Check } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';
import Eyebrow from './Eyebrow';
import RevealText from './RevealText';

// The problem-agitate-solve beat: name the choke point, walk past the alternatives, land on the call.
// No prices and no guarantees here by design; those live on the sales call.
const alternatives = [
  {
    icon: Clock,
    title: 'Do it yourself',
    text: "It's a second full-time job on top of the one you already don't have time for. By the time you've worked out what actually converts, the season's gone.",
  },
  {
    icon: UserPlus,
    title: 'Put someone on',
    text: 'A good marketer is hard to find and dear to keep. Hire the wrong one and you have burned months and a wage before you know it.',
  },
  {
    icon: Building2,
    title: 'A big agency',
    text: "Unless you're spending tens of thousands a month, you're a small account. The work goes to a junior and you pay the retainer either way.",
  },
];

const mine = [
  'One consultant who does the work, not an account manager in between',
  'Answered the same day, with an update every Friday',
  'No lock-in, no packages, budget goes where the results are',
  'I stay until the numbers move',
];

export default function WhyMe() {
  return (
    <section id="why-me" className="relative bg-navy-900 overflow-hidden" aria-labelledby="whyme-heading">
      <div className="grid-ground absolute inset-0" aria-hidden="true" />
      <div className="glow w-[600px] h-[600px] -top-52 left-[-8%]" style={{ ['--glow-a' as string]: '0.12' }} aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <AnimateOnScroll className="text-center mb-12 sm:mb-16">
          <Eyebrow className="mb-4">Why me</Eyebrow>
          <h2
            id="whyme-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5 font-serif"
          >
            <RevealText text="Three ways to fix your marketing." />
          </h2>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-400 font-sans">
            Two of them cost you more than they make. You didn&apos;t start your business to run ads, but the phone
            won&apos;t ring on its own, and every month you wait is business walking to whoever did the work.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll variant="group" className="grid gap-4 sm:gap-5 lg:grid-cols-3 mb-5">
          {alternatives.map((a, i) => {
            const Icon = a.icon;
            return (
              <div
                key={a.title}
                className={`rv-up ${i === 1 ? 'rv-delay-1' : i === 2 ? 'rv-delay-2' : ''} flex h-full flex-col rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6`}
              >
                <div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-slate-500" />
                </div>
                <h3 className="text-lg font-bold text-slate-300 font-serif mb-2">{a.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed font-sans">{a.text}</p>
              </div>
            );
          })}
        </AnimateOnScroll>

        <AnimateOnScroll variant="group">
          <div className="accent-line rv-up relative overflow-hidden rounded-2xl border border-gold/30 bg-gradient-to-b from-gold/[0.08] to-white/[0.02] p-6 sm:p-8">
            <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-12 items-center">
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-4 font-sans">Or</p>
                <p className="text-xl sm:text-2xl font-bold text-white font-serif leading-snug mb-6">
                  You get one person who does the work, picks up the same day, and stays until the numbers move.
                </p>
                <ul className="space-y-2.5">
                  {mine.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-gold mt-1 shrink-0" />
                      <span className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:text-right">
                <Link
                  href="/book"
                  className="gold-flat-btn inline-flex items-center justify-center rounded-lg px-8 py-4 text-base font-semibold"
                >
                  Book a 30-minute call
                </Link>
                <p className="mt-4 text-sm text-slate-400 font-sans lg:max-w-[16rem] lg:ml-auto">
                  Tell me what&apos;s not working. If I can help, you get a plan. If I can&apos;t, I&apos;ll say so.
                </p>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
