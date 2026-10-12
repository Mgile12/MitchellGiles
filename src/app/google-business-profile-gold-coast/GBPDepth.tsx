import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Eyebrow from '@/components/Eyebrow';
import RevealText from '@/components/RevealText';

const parts = [
  {
    title: 'Categories and services',
    text: 'The primary category is the single biggest lever on the profile and the most common thing I find wrong: "Contractor" where it should say "Plumber", "Business service" where it should say "Steel fabricator". Secondary categories cover what else is true. Then the services list, every job you do, in the words customers use, because Google matches searches against it and most profiles list three services for a business that does thirty.',
  },
  {
    title: 'Description, attributes and hours',
    text: 'The description says what you do, where, since when and for whom, in plain text, with the licence number if you hold one. Attributes (owner-run, wheelchair access, online quotes) are set honestly. Hours are what you actually answer, because a profile that says 24/7 and goes to voicemail at midnight earns one-star reviews, and Google reads those too.',
  },
  {
    title: 'Photos, posts and products',
    text: 'Real photos of real work, added every month: vans, jobs, the team, the premises. A post each week with a job and a suburb in the caption. Products set up for the things people buy as a unit: hot water systems, ceramic coating packages, service plans. None of this is decoration; together it is how Google tells a live business from a dormant one.',
  },
  {
    title: 'Reviews and replies',
    text: 'A request that goes out by text after every job, asking for the job and the suburb in the customer’s words. A reply to every review within a day, naming the job back. Flagging the ones that break policy with the right policy cited. The review stream is the one ranking factor customers can see, and it works best as a weekly habit rather than a quarterly push.',
  },
  {
    title: 'The website behind the profile',
    text: 'Google reads the site linked from the profile to confirm what the business does and where. A page for each service and each suburb, saying the same things the profile says, is what lets the profile rank beyond its pin and what turns a Maps search into a call. The profile and the website are two halves of the same job.',
  },
  {
    title: 'Measuring it: the grid and the calls',
    text: 'A ranking grid scan around the business before the work, and then monthly on the same grid, so the before and after mean something. Calls, website clicks and direction requests from the profile’s own performance data, month on month and against the same months last year. Calls are taps on the Call button, which Google defines, and I say so on every report.',
  },
];

const weekly = [
  'Review requests out, new reviews answered',
  'One post with a real job and the suburb',
  'Categories, services, hours and attributes checked against what the business is doing this season',
  'Photos added; Q&A answered; spam edits reverted',
  'One website improvement that supports the profile',
  'Monthly: the grid scan, the performance numbers, and a call about what moved',
];

export default function GBPDepth() {
  return (
    <section className="relative overflow-x-clip" aria-labelledby="depth-heading">
      <div className="grid-ground absolute inset-0" aria-hidden="true" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <AnimateOnScroll className="max-w-3xl mb-12">
          <Eyebrow align="left" className="mb-4">
            What the work actually is
          </Eyebrow>
          <h2 id="depth-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink font-serif mb-5">
            <RevealText text="Six parts of a Business Profile, and what I do with each." />
          </h2>
          <p className="text-base sm:text-lg text-ink/80 font-sans leading-relaxed">
            Google Business Profile optimisation is not a one-off set-up. It is a short list of things done properly once, and then kept up every week, because the profile that stops being worked is the profile that slides out of the top three. This is the list.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll variant="group" className="grid gap-5 md:grid-cols-2 mb-14">
          {parts.map((p, i) => (
            <div key={p.title} className={`rv-up ${i % 2 ? 'rv-delay-1' : ''} rounded-2xl border border-ink/10 bg-white/55 p-6`}>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-3 font-sans">Part {i + 1}</p>
              <h3 className="text-lg font-bold text-ink font-serif mb-2">{p.title}</h3>
              <p className="text-sm sm:text-base text-ink/75 font-sans leading-relaxed">{p.text}</p>
            </div>
          ))}
        </AnimateOnScroll>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-start">
          <AnimateOnScroll>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink font-serif mb-4">What a week looks like</h3>
            <ul className="space-y-3 font-sans">
              {weekly.map((w) => (
                <li key={w} className="flex items-start gap-3 text-ink/80">
                  <CheckCircle2 className="w-5 h-5 text-ink shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{w}</span>
                </li>
              ))}
            </ul>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink font-serif mb-4">Suspensions, duplicates and spam</h3>
            <p className="text-base sm:text-lg text-ink/80 font-sans leading-relaxed mb-4">
              Three things can undo months of work in a day. A profile suspended after a well-meant edit to the name or address. A duplicate profile that splits the reviews and confuses Google about which business is real. And competitors stuffing their names with keywords or sitting on fake addresses to steal the pack. I handle the first two through the reinstatement and merge processes, with the evidence Google asks for, and the third by reporting it properly and beating it on the fundamentals.
            </p>
            <p className="text-base sm:text-lg text-ink/80 font-sans leading-relaxed">
              If your profile is already suspended, that is the first and only job until it is back.{' '}
              <Link href="/local-seo-audit-gold-coast" className="underline underline-offset-4 hover:text-ink/70">
                The audit
              </Link>{' '}
              finds it,{' '}
              <Link href="/google-maps-ranking-gold-coast" className="underline underline-offset-4 hover:text-ink/70">
                the ranking grid
              </Link>{' '}
              measures what comes back, and{' '}
              <Link href="/review-management-gold-coast" className="underline underline-offset-4 hover:text-ink/70">
                review management
              </Link>{' '}
              keeps it there.
            </p>
            <Link href="/seo-for-tradies-gold-coast" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-ink/70 transition-colors duration-150 font-sans">
              How this works for tradies <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
