import Link from 'next/link';
import { ArrowRight, ChevronRight, MapPin, Search, Sparkles, Phone, Car, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/business-info';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import CountUp from '@/components/CountUp';
import Eyebrow from '@/components/Eyebrow';
import RevealText from '@/components/RevealText';
import SpotlightLink from '@/components/SpotlightLink';
import { SUBURBS, type SuburbPage } from './suburbs';
import LinkWeb from '@/components/LinkWeb';

const services = [
  { title: 'Google Business Profile', blurb: 'Top 3 on Maps for the searches that happen a few kilometres from you.', href: '/google-business-profile-gold-coast', icon: MapPin },
  { title: 'Local SEO', blurb: 'A page for every service and every suburb you serve, so Google has something to rank.', href: '/best-local-seo-expert-in-gold-coast', icon: Search },
  { title: 'AI Search (GEO)', blurb: 'Named when someone here asks ChatGPT or Google AI who to call.', href: '/ai-search-geo-gold-coast', icon: Sparkles },
];

const proof = [
  { figure: '2 days', label: 'page two to the top 3 on Maps, Gold Coast client' },
  { figure: '208', label: 'calls from Google in three months, two plumbers' },
  { figure: '49 of 49', label: 'grid points at number 1, one profile, five weeks' },
];

export default function SuburbContent({ s, images }: { s: SuburbPage; images: { portrait: { src: string; alt: string }; grid: { src: string; alt: string } } }) {
  const kw = s.primaryKeyword.toLowerCase();
  const nearbyLinks = s.nearby.map((name) => {
    const hit = SUBURBS.find((x) => x.name === name);
    return { name, href: hit && hit.hasPage ? `/areas/${hit.slug}` : null };
  });

  return (
    <div className="bg-navy-950 min-h-screen">
      {/* Hero */}
      <section className="relative overflow-x-clip" aria-labelledby="page-heading">
        <div className="grid-ground absolute inset-0" aria-hidden="true" />
        <div className="glow w-[700px] h-[600px] -top-40 right-[-10%]" style={{ ['--glow-a' as string]: '0.14' }} aria-hidden="true" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 sm:pt-32 sm:pb-20">
          <nav aria-label="Breadcrumb" className="mb-8 font-sans text-sm text-ink/65">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-ink transition-colors duration-150">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="w-4 h-4" />
              </li>
              <li>
                <Link href="/areas" className="hover:text-ink transition-colors duration-150">
                  Areas we serve
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="w-4 h-4" />
              </li>
              <li className="text-ink/80">{s.name}</li>
            </ol>
          </nav>

          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14 items-start">
            <div className="lg:col-span-7">
              <Eyebrow align="left" className="mb-5">
                {s.name}, northern Gold Coast corridor
              </Eyebrow>
              <h1 id="page-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink leading-[1.08] font-serif">
                {s.primaryKeyword}
              </h1>
              <p className="mt-5 text-lg sm:text-xl text-ink/80 leading-relaxed font-sans max-w-2xl">{s.tagline}</p>
              <div className="mt-7 space-y-5">
                {s.intro.map((p) => (
                  <p key={p.slice(0, 40)} className="text-base sm:text-lg text-ink/80 leading-relaxed font-sans">
                    {p}
                  </p>
                ))}
              </div>
              <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
                <Link href="https://calendar.notion.com/meet/mitchellgiles134/tovi31rm" className="gold-flat-btn inline-flex items-center justify-center gap-2 rounded-lg px-7 py-3.5 text-sm font-semibold group">
                  Book a 30-minute call
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
                <a href="#faq" className="inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-ink/70 transition-colors duration-150 font-sans">
                  Questions from {s.name} <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <AnimateOnScroll className="lg:col-span-5 lg:sticky lg:top-28">
              <figure className="relative rounded-2xl overflow-hidden border border-ink/10 shadow-[0_24px_64px_rgba(0,0,0,0.16)] bg-white/60">
                <img src={images.portrait.src} alt={images.portrait.alt} title={images.portrait.alt} width={1200} height={960} loading="eager" decoding="async" className="w-full aspect-[5/4] object-cover block" />
                <figcaption className="absolute bottom-0 inset-x-0 px-5 py-3 bg-gradient-to-t from-black/70 to-transparent text-white text-sm font-sans">
                  Mitchell Giles, {s.drive.minutes} minutes from {s.name}
                </figcaption>
              </figure>
              <div className="mt-5 rounded-2xl border border-ink/[0.08] bg-gradient-to-b from-white/75 to-white/40 p-6">
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-4 font-sans">Three numbers, all from client accounts</p>
                <div className="divide-y divide-ink/[0.06]">
                  {proof.map((p) => (
                    <div key={p.figure} className="py-4 first:pt-0 last:pb-0">
                      <p className="text-3xl font-bold font-serif tabular-nums text-ink">
                        <CountUp value={p.figure} />
                      </p>
                      <p className="text-sm text-ink/65 font-sans mt-1">{p.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* The place */}
      <section className="relative bg-navy-900 overflow-x-clip" aria-labelledby="place-heading">
        <div className="grid-ground absolute inset-0" aria-hidden="true" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <AnimateOnScroll>
              <Eyebrow align="left" className="mb-4">
                The place
              </Eyebrow>
              <h2 id="place-heading" className="text-3xl sm:text-4xl font-bold tracking-tight text-ink font-serif mb-5">
                <RevealText text={`${s.name}, as a customer searches it.`} />
              </h2>
              <p className="text-base sm:text-lg text-ink/80 font-sans leading-relaxed mb-6">
                Google ranks a business for the place the searcher is standing in, so the first job is to know where the searches in {s.name} actually come from. These are the places that come up.
              </p>
              <ul className="space-y-3 font-sans">
                {s.landmarks.map((l) => (
                  <li key={l} className="flex items-start gap-3 text-ink/80">
                    <MapPin className="w-5 h-5 text-ink shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{l}</span>
                  </li>
                ))}
              </ul>
            </AnimateOnScroll>
            <AnimateOnScroll>
              <Eyebrow align="left" className="mb-4">
                Who is searching
              </Eyebrow>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink font-serif mb-5">
                <RevealText text={`The businesses ${s.name} runs on.`} />
              </h2>
              <ul className="space-y-3 font-sans mb-8">
                {s.businessTypes.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-ink/80">
                    <CheckCircle2 className="w-5 h-5 text-ink shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="rounded-2xl border border-ink/10 bg-white/55 p-6">
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-3 font-sans">What the Maps pack looks like in {s.name}</p>
                <p className="text-base text-ink/80 font-sans leading-relaxed">{s.competition}</p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* First moves + services */}
      <section className="relative overflow-x-clip" aria-labelledby="moves-heading">
        <div className="grid-ground absolute inset-0" aria-hidden="true" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <AnimateOnScroll className="text-center mb-10 sm:mb-14">
            <Eyebrow className="mb-4">What I would do first</Eyebrow>
            <h2 id="moves-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink font-serif">
              <RevealText text={`Three moves for a ${s.name} business.`} />
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll variant="group" className="grid gap-5 md:grid-cols-3 mb-14">
            {s.firstMoves.map((m, i) => (
              <div key={m.title} className={`rv-up ${i === 1 ? 'rv-delay-1' : i === 2 ? 'rv-delay-2' : ''} rounded-2xl border border-ink/10 bg-white/55 p-6`}>
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-3 font-sans">Step {i + 1}</p>
                <h3 className="text-lg font-bold text-ink font-serif mb-2">{m.title}</h3>
                <p className="text-sm text-ink/70 font-sans leading-relaxed">{m.text}</p>
              </div>
            ))}
          </AnimateOnScroll>

          <AnimateOnScroll className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink font-serif">
              <RevealText text={`What I do for businesses in ${s.name}`} />
            </h2>
          </AnimateOnScroll>
          <div className="grid gap-4 sm:gap-5 md:grid-cols-3">
            {services.map((sv, index) => {
              const Icon = sv.icon;
              return (
                <AnimateOnScroll key={sv.title} stagger={Math.min(index + 1, 7)}>
                  <SpotlightLink href={sv.href} className="proof-card spotlight group flex h-full flex-col rounded-2xl border border-ink/10 bg-white/55 p-6 hover:bg-white/85">
                    <div className="card-icon inline-flex items-center justify-center w-11 h-11 rounded-xl bg-white/70 border border-ink/10 mb-5">
                      <Icon className="w-5 h-5 text-ink" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-bold text-ink font-serif mb-2">{sv.title}</h3>
                    <p className="text-sm text-ink/70 font-sans leading-relaxed">{sv.blurb}</p>
                  </SpotlightLink>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* Proof grid + directions + map */}
      <section className="relative bg-navy-900 overflow-x-clip" aria-labelledby="directions-heading">
        <div className="grid-ground absolute inset-0" aria-hidden="true" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12 items-start">
            <AnimateOnScroll className="lg:col-span-5">
              <Eyebrow align="left" className="mb-4">
                Where I am
              </Eyebrow>
              <h2 id="directions-heading" className="text-3xl sm:text-4xl font-bold tracking-tight text-ink font-serif mb-5">
                <RevealText text={`${s.drive.minutes} minutes from ${s.name}.`} />
              </h2>
              <p className="text-base sm:text-lg text-ink/80 font-sans leading-relaxed">
                MRG Marketing is at {BUSINESS_INFO.address.full}, about {s.drive.km} km from {s.name}: {s.drive.route}. Most of the work happens on a call, and I will come to you anywhere in {s.name} if that is easier.
              </p>
              <ul className="mt-6 space-y-3 font-sans">
                <li className="flex items-start gap-3 text-ink/80">
                  <Car className="w-5 h-5 text-ink shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{s.drive.route}</span>
                </li>
                <li className="flex items-start gap-3 text-ink/80">
                  <Phone className="w-5 h-5 text-ink shrink-0 mt-0.5" aria-hidden="true" />
                  <a href={`tel:${BUSINESS_INFO.phoneFormatted}`} className="hover:text-ink transition-colors duration-150">
                    {BUSINESS_INFO.phone}
                  </a>
                </li>
              </ul>
              <a
                href={`https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(s.name + ' QLD')}&destination=${encodeURIComponent(BUSINESS_INFO.legalName + ', ' + BUSINESS_INFO.address.full)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-ink/70 transition-colors duration-150 font-sans"
              >
                Get directions from {s.name} <ArrowRight className="w-4 h-4" />
              </a>

              <p className="mt-10 text-xs font-semibold tracking-[0.2em] uppercase text-gold font-sans mb-3">Nearby</p>
              <ul className="flex flex-wrap gap-2 font-sans">
                {nearbyLinks.map((n) =>
                  n.href ? (
                    <li key={n.name}>
                      <Link href={n.href} className="press inline-flex items-center gap-1.5 rounded-full border border-ink/25 bg-white/55 px-3 py-1.5 text-sm font-semibold text-ink hover:bg-white/85">
                        {n.name} <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </li>
                  ) : (
                    <li key={n.name} className="rounded-full border border-ink/10 bg-white/55 px-3 py-1.5 text-sm text-ink/80">
                      {n.name}
                    </li>
                  ),
                )}
              </ul>
            </AnimateOnScroll>

            <AnimateOnScroll className="lg:col-span-7 space-y-5">
              <div className="rounded-2xl overflow-hidden border border-ink/[0.08] shadow-[0_24px_64px_rgba(0,0,0,0.16)]" style={{ height: '360px' }}>
                <iframe
                  src={`https://www.google.com/maps?q=${encodeURIComponent(`${BUSINESS_INFO.legalName}, ${BUSINESS_INFO.address.full}`)}&z=12&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`MRG Marketing in Ormeau, near ${s.name}, on Google Maps`}
                />
              </div>
              <figure className="rounded-2xl overflow-hidden border border-ink/10 bg-white/70 p-2">
                <img src={images.grid.src} alt={images.grid.alt} loading="lazy" decoding="async" className="w-full h-auto rounded-xl block" />
                <figcaption className="px-3 py-2 text-xs text-ink/55 font-sans">
                  What a finished grid looks like: a Gold Coast plumber in the top 3 at 46 of 49 scan points. The same scan is the first thing I run for a {s.name} business.
                </figcaption>
              </figure>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative overflow-x-clip scroll-mt-24" aria-labelledby="faq-heading">
        <div className="grid-ground absolute inset-0" aria-hidden="true" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <AnimateOnScroll className="text-center mb-10 sm:mb-14">
            <Eyebrow className="mb-4">Questions from {s.name}</Eyebrow>
            <h2 id="faq-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink font-serif">
              <RevealText text={`What ${s.name} business owners ask me.`} />
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll variant="group" className="divide-y divide-ink/[0.06] border-y border-ink/[0.06]">
            {s.faqs.map((item, i) => (
              <div key={item.question} className={`rv-up ${i % 3 === 1 ? 'rv-delay-1' : i % 3 === 2 ? 'rv-delay-2' : ''} py-6`}>
                <h3 className="text-lg font-bold text-ink font-serif mb-2">{item.question}</h3>
                <p className="text-base text-ink/65 leading-relaxed font-sans">{item.answer}</p>
              </div>
            ))}
          </AnimateOnScroll>
        </div>
      </section>

{/* Cross-links */}
      <LinkWeb current={`/areas/${s.slug}`} heading={`More for ${s.name} businesses`} intro="The services, the parts of the job, the trade guides, the other suburbs I work in, and the proof behind all of it." />
            {/* CTA */}
      <section className="relative bg-navy-900 overflow-x-clip" aria-labelledby="cta-heading">
        <div className="absolute top-0 left-0 right-0 h-px bg-ink/10" />
        <AnimateOnScroll className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <Eyebrow className="mb-6">One call</Eyebrow>
            <h2 id="cta-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink leading-[1.15] font-serif">
              <RevealText text={`Find out where your ${s.name} business shows up.`} />
            </h2>
            <p className="mt-8 text-lg sm:text-xl text-ink/80 leading-relaxed font-sans max-w-2xl mx-auto">
              Thirty minutes. Tell me what you do and where. I will look at your profile, your site and the three businesses above you on the {s.name} map, and tell you what I would do first. If I can&apos;t help, I will say so.
            </p>
            <div className="mt-10">
              <Link href="https://calendar.notion.com/meet/mitchellgiles134/tovi31rm" className="gold-flat-btn inline-flex items-center justify-center gap-2 rounded-lg px-8 py-4 text-base font-semibold group">
                Book a 30-minute call <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <p className="mt-5 text-sm text-ink/65 font-sans">
                Searching for {kw}? You are in the right place.{' '}
                <Link href="/case-studies" className="underline underline-offset-4 hover:text-ink">
                  The case studies
                </Link>{' '}
                show the work.
              </p>
            </div>
          </div>
        </AnimateOnScroll>
      </section>
    </div>
  );
}
