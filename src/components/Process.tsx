import { ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/business-info';
import AnimateOnScroll from './AnimateOnScroll';
import Eyebrow from './Eyebrow';
import RevealText from './RevealText';

// The first 90 days, as the client experiences it. Order and timing follow the delivery workflow
// (benchmark → profile → on-page basics → pages → citations → weekly), written for the buyer, not the operator.
const STEPS = [
  {
    weeks: 'Week 1',
    title: 'Benchmark',
    what: 'You give me access to your Google Business Profile and website. I run a ranking grid scan on your main search across your service area, and look at the three businesses above you: their reviews, photos, categories and pages.',
    get: 'You get the grid, dated, and a short list of the obvious gaps. This is the "before" we measure everything against.',
  },
  {
    weeks: 'Weeks 2 to 4',
    title: 'Fix the profile',
    what: 'Categories cut to the ones that rank, a full services list with descriptions, every profile feature filled, photos, a booking link and a FAQ. Reviews start coming in on a schedule.',
    get: 'This is where the first jump usually shows. Two of my clients moved into the top 3 inside this window.',
  },
  {
    weeks: 'Week 5',
    title: 'Fix the website basics',
    what: 'Title, headings, name, address and phone matching the profile on every page, an embedded map and business schema. Small changes, done once, that most sites get wrong.',
    get: 'Nothing visible changes for your customers. Google reads a different site.',
  },
  {
    weeks: 'Weeks 6 to 8',
    title: 'Build out the pages',
    what: 'A page for each service you want calls for and each suburb you want them from, written properly and linked to each other. This is what gives the profile something to rank for beyond your home suburb.',
    get: 'Your site goes from a brochure to the biggest site in your category in your area. I write it; you check the facts.',
  },
  {
    weeks: 'Weeks 9 to 10',
    title: 'Citations',
    what: 'Your business listed, with identical details, on the directories and maps Google and the AI models trust most, plus the ones already ranking for your search. Old numbers and addresses cleaned up.',
    get: 'Some listings need you to click a verification email. I send them in batches of three to five a week.',
  },
  {
    weeks: 'Every week, from week 1',
    title: 'Keep it moving',
    what: 'A post and geotagged photos on the profile every week, reviews answered as they land, the grid re-scanned every month, and an update from me every Friday.',
    get: 'Week 12 we sit down with the before and after grids and decide what is next. If the agreed target is not met, the work continues at no charge.',
  },
];

/** "How it works": the first 90 days as six numbered steps. */
export default function Process() {
  return (
    <section id="how-it-works" className="relative bg-navy-950 overflow-hidden scroll-mt-24" aria-labelledby="process-heading">
      <div className="grid-ground absolute inset-0" aria-hidden="true" />
      <div className="glow w-[600px] h-[600px] -top-52 left-[-8%]" style={{ ['--glow-a' as string]: '0.1' }} aria-hidden="true" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <AnimateOnScroll className="max-w-3xl mb-12 sm:mb-16">
          <Eyebrow align="left" className="mb-4">How it works</Eyebrow>
          <h2 id="process-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink font-serif">
            <RevealText text="The first 90 days, step by step." />
          </h2>
          <p className="mt-5 text-base sm:text-lg text-ink/70 font-sans leading-relaxed">
            Same six steps for every client, in this order, because the order is what makes it work. The profile moves
            fastest, so it goes first. Everything after it is there to hold the position and widen it.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll variant="group" className="grid gap-5 md:grid-cols-2">
          {STEPS.map((s, i) => (
            <article
              key={s.title}
              className={`rv-up ${i % 2 ? 'rv-delay-1' : ''} flex gap-5 rounded-2xl border border-ink/10 bg-white/55 p-6 sm:p-7`}
            >
              <div className="shrink-0 w-12 h-12 rounded-xl bg-ink text-white flex items-center justify-center text-lg font-bold font-serif tabular-nums" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold tracking-[0.18em] uppercase text-ink/55 font-sans">{s.weeks}</p>
                <h3 className="mt-1 text-xl sm:text-2xl font-bold text-ink font-serif">
                  <span className="sr-only">Step {i + 1}: </span>
                  {s.title}
                </h3>
                <p className="mt-3 text-base text-ink/80 font-sans leading-relaxed">{s.what}</p>
                <p className="mt-3 text-sm text-ink/65 font-sans leading-relaxed border-l-2 border-ink/20 pl-3">{s.get}</p>
              </div>
            </article>
          ))}
        </AnimateOnScroll>

        <AnimateOnScroll className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
          <a
            href={BUSINESS_INFO.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="gold-flat-btn inline-flex items-center justify-center gap-2 rounded-lg px-7 py-3.5 text-sm font-semibold group"
          >
            Book a 30-minute call
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
          <p className="text-sm text-ink/65 font-sans">Week 1 starts the day you give me access.</p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
