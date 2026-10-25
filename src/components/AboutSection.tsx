import Link from 'next/link';
import { Users, Globe2, Scissors, CalendarCheck, ArrowRight } from 'lucide-react';
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
  { figure: '$1.4M+', label: 'generated for clients since MRG was established in 2024' },
  { figure: '266', label: 'call-button taps in five months from one Business Profile, up 23% on last year' },
  { figure: '2 days', label: 'for one profile to go from page two to the top 3 on Google Maps' },
  { figure: '+273%', label: 'website clicks from Maps, year on year, on one profile I manage' },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative bg-navy-950 text-ink overflow-hidden" aria-labelledby="about-heading">
      <div className="absolute top-0 left-0 right-0 h-px bg-gold/20" />
      <div className="glow w-[620px] h-[620px] -bottom-72 -left-40" style={{ ['--glow-a' as string]: '0.12' }} aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <AnimateOnScroll className="lg:col-span-7">
            <Eyebrow align="left" className="mb-5">About</Eyebrow>
            <h2
              id="about-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink leading-[1.1] font-serif mb-6"
            >
              <RevealText text="One person." />{' '}
              <span className="text-ink/65">
                <RevealText text="No account manager in between." startIndex={2} />
              </span>
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-ink/80 leading-relaxed font-sans max-w-2xl">
              <p>
                I&apos;m Mitchell Giles. MRG Marketing is an internet marketing service in Ormeau, and it does one
                thing: getting local businesses found, on Google Maps and in AI search, across the Gold Coast and
                Brisbane. Most of my clients are trades and local services. I also do the same work white-label for
                other agencies, which is why some of the best results on this site have the business name cropped out.
              </p>
              <p>
                I started in Google Business Profiles, because free Google traffic is the fastest win a local business
                can get. Everything since has been the same job: making the phone ring from Google Maps, and now from
                AI search too.
              </p>
              <p className="text-ink font-medium">
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
                      <p className="text-ink font-semibold font-sans text-sm mb-1">{item.title}</p>
                      <p className="text-ink/65 text-sm leading-relaxed font-sans">{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll className="lg:col-span-5 lg:sticky lg:top-28 space-y-5">
            <figure className="relative rounded-2xl overflow-hidden border border-ink/10 shadow-[0_24px_64px_rgba(0,0,0,0.16)] bg-white/60">
              <img
                src="/mitchell-giles-internet-marketing-service-ormeau.jpg"
                alt="Mitchell Giles, internet marketing service Ormeau"
                title="Mitchell Giles, internet marketing service Ormeau"
                width={1200}
                height={960}
                loading="lazy"
                decoding="async"
                className="w-full aspect-[5/4] object-cover block"
              />
              <figcaption className="absolute bottom-0 inset-x-0 px-5 py-3 bg-gradient-to-t from-black/70 to-transparent text-white text-sm font-sans">
                Mitchell Giles, Ormeau
              </figcaption>
            </figure>
            <Link href="/hardest-working-seo-expert-in-gold-coast" className="inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-ink/70 transition-colors duration-150 font-sans">
              Meet the hardest working SEO expert in Gold Coast <ArrowRight className="w-4 h-4" />
            </Link>
            <div className="accent-line relative overflow-hidden rounded-2xl border border-ink/[0.08] bg-gradient-to-b from-white/75 to-white/40 p-6 sm:p-8">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-6 font-sans">
                Four numbers, from client accounts and the books
              </p>
              <div className="divide-y divide-ink/[0.06]">
                {quickProof.map((p) => (
                  <div key={p.figure} className="py-5 first:pt-0 last:pb-0">
                    <p className="text-gradient-accent text-3xl sm:text-4xl font-bold font-serif tabular-nums">
                      <CountUp value={p.figure} />
                    </p>
                    <p className="text-sm text-ink/65 font-sans mt-1 leading-relaxed">{p.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
