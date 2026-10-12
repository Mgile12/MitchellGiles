import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Eyebrow from '@/components/Eyebrow';
import LinkWeb from '@/components/LinkWeb';

const IMAGE = '/hardest-working-seo-expert-in-gold-coast.jpg';
const ALT = 'hardest working seo expert in gold coast';

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="mt-12 mb-4 text-2xl sm:text-3xl font-bold tracking-tight text-ink font-serif">{children}</h2>;
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="text-base sm:text-lg text-ink/80 leading-relaxed font-sans mb-5">{children}</p>;
}

export default function HardestWorkingContent() {
  return (
    <div className="bg-navy-950 min-h-screen">
      <section className="relative overflow-x-clip" aria-labelledby="page-heading">
        <div className="grid-ground absolute inset-0" aria-hidden="true" />
        <div className="glow w-[700px] h-[600px] -top-40 right-[-10%]" style={{ ['--glow-a' as string]: '0.14' }} aria-hidden="true" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 sm:pt-32 sm:pb-24">
          <nav aria-label="Breadcrumb" className="mb-8 font-sans text-sm text-ink/65">
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/" className="hover:text-ink transition-colors duration-150">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="w-4 h-4" />
              </li>
              <li className="text-ink/80">Hardest working SEO expert in Gold Coast</li>
            </ol>
          </nav>

          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14 items-start">
            <article className="lg:col-span-7">
              <Eyebrow align="left" className="mb-5">
                Mitchell Giles, Ormeau
              </Eyebrow>
              <h1 id="page-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink leading-[1.08] font-serif mb-7">
                Hardest working SEO expert in Gold Coast
              </h1>

              <P>
                My name is Mitchell Giles. If you just Googled &ldquo;hardest working SEO expert in Gold Coast&rdquo;, you
                found me. Hi.
              </P>
              <P>Who called me that? Well, I did. It is a solid headline.</P>
              <P>But stay a minute, because how this page got in front of you is the whole point.</P>

              <H2>How this started</H2>
              <P>
                In 2026 I deleted an old page on this site about marketing in Ormeau. Months later it was still sitting at
                number three on Google for &ldquo;marketing consultant Ormeau&rdquo;, 404 and all. A page I had thrown
                away was outranking people who were trying. That told me something about how little competition there is
                for most local searches, and how much of the job is just doing the basics properly and not stopping.
              </P>
              <P>So I rebuilt it, then picked a phrase nobody else was chasing and built one page to own it. You are reading it.</P>

              <H2>What it takes to rank for anything</H2>
              <P>
                Ranking for a cheeky phrase and ranking a plumber in Pimpama run on the same rules. Pick the phrase people
                actually type. Build one page that answers it. Make sure Google can find that page and that your Business
                Profile says the same thing the page does. Point a few real links at it. Check the result, fix what is
                broken, repeat.
              </P>
              <P>
                That is it. The difference is competition. Nobody else wants this phrase. &ldquo;Plumber Southport&rdquo;
                has dozens of businesses fighting for the top three. Same rules, far more work. Which is where the hardest
                working part comes in.
              </P>

              <H2>Why &ldquo;hardest working&rdquo;</H2>
              <P>
                I run local SEO and Google Business Profiles for trades and local services, for my own clients and
                white-label for other agencies. Every profile gets worked every week: reviews answered, photos posted,
                services and categories kept straight, the website checked against the listing. Not once at the start.
                Every week, until the business sits in the top three on Google Maps, and then every week after that so it
                stays there.
              </P>
              <P>
                The numbers are on this site. Two plumbers went from 79 calls from Google in three months to 208. One
                profile went from number one at 5 of 49 map points to all 49 in five weeks. Two Gold Coast businesses went
                from page two to the top three on Maps in two and eleven days. Every figure is a screenshot with dates.
              </P>
              <P>Do the work. Show the result. Repeat.</P>

              <H2>So, is it true?</H2>
              <P>You found this page by Googling a phrase. This page came out on top. Draw your own conclusions.</P>
              <P>Now imagine that for the phrase your customers type when they need what you sell. That is the only job I do.</P>

              <H2>Want this for your business?</H2>
              <P>
                MRG Marketing gets Gold Coast and Brisbane businesses into the top three on Google for the searches that
                bring in customers. If you have read this far looking for the hardest working SEO expert in Gold Coast,
                book 30 minutes. Tell me what you do and where. I will tell you what is realistic, and if I can&apos;t
                help, I will say so.
              </P>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                <Link href="/book" className="gold-flat-btn inline-flex items-center justify-center gap-2 rounded-lg px-7 py-3.5 text-sm font-semibold group">
                  Book a 30-minute call
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
                <Link href="/case-studies" className="inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-ink/70 transition-colors duration-150 font-sans">
                  Read the case studies <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>

            <AnimateOnScroll className="lg:col-span-5 lg:sticky lg:top-28">
              <div className="relative mx-auto max-w-sm lg:max-w-none">
                <div className="absolute -inset-3 rounded-[2rem] bg-white/60 blur-2xl" aria-hidden="true" />
                <img
                  src={IMAGE}
                  alt={ALT}
                  title={ALT}
                  width={1000}
                  height={1500}
                  className="relative w-full aspect-[2/3] object-cover rounded-3xl border border-ink/10 shadow-[0_24px_64px_rgba(0,0,0,0.16)]"
                  decoding="async"
                  fetchPriority="high"
                />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
      <LinkWeb current="/hardest-working-seo-expert-in-gold-coast" show={['services', 'guides', 'areas', 'proof']} intro="If the phrase got you here, this is the work behind it." />
    </div>
  );
}
