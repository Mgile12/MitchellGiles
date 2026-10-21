import Link from 'next/link';
import { ArrowRight, ChevronRight, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/business-info';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Eyebrow from '@/components/Eyebrow';
import RevealText from '@/components/RevealText';
import type { ServicePage } from './services-data';
import LinkWeb from '@/components/LinkWeb';

export interface ServiceImages {
  portrait: { src: string; alt: string };
  grid: { src: string; alt: string };
}

function Para({ children }: { children: React.ReactNode }) {
  return <p className="text-base sm:text-lg text-ink/80 leading-relaxed font-sans mb-5">{children}</p>;
}

export default function ServicePageContent({ s, images }: { s: ServicePage; images: ServiceImages }) {
  return (
    <div className="bg-navy-950 min-h-screen">
      {/* Hero */}
      <section className="relative overflow-x-clip" aria-labelledby="page-heading">
        <div className="grid-ground absolute inset-0" aria-hidden="true" />
        <div className="glow w-[700px] h-[600px] -top-40 right-[-10%]" style={{ ['--glow-a' as string]: '0.14' }} aria-hidden="true" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12 sm:pt-32 sm:pb-16">
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
                <Link href="/services" className="hover:text-ink transition-colors duration-150">
                  Services
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
                {s.eyebrow}
              </Eyebrow>
              <h1 id="page-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink leading-[1.08] font-serif mb-7">
                {s.h1}
              </h1>
              {s.intro.map((p) => (
                <Para key={p.slice(0, 40)}>{p}</Para>
              ))}
              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
                <Link href="https://calendar.notion.com/meet/mitchellgiles134/tovi31rm" className="gold-flat-btn inline-flex items-center justify-center gap-2 rounded-lg px-7 py-3.5 text-sm font-semibold group">
                  Book a 30-minute call
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
                <a href="#faq" className="inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-ink/70 transition-colors duration-150 font-sans">
                  Questions <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
            <AnimateOnScroll className="lg:col-span-5 lg:sticky lg:top-28">
              <figure className="relative rounded-2xl overflow-hidden border border-ink/10 shadow-[0_24px_64px_rgba(0,0,0,0.16)] bg-white/60">
                <img src={images.portrait.src} alt={images.portrait.alt} title={images.portrait.alt} width={1200} height={960} loading="eager" decoding="async" className="w-full aspect-[5/4] object-cover block" />
                <figcaption className="absolute bottom-0 inset-x-0 px-5 py-3 bg-gradient-to-t from-black/70 to-transparent text-white text-sm font-sans">
                  Mitchell Giles, MRG Marketing, Ormeau
                </figcaption>
              </figure>
              <nav aria-label="On this page" className="mt-5 rounded-2xl border border-ink/[0.08] bg-gradient-to-b from-white/75 to-white/40 p-6">
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-3 font-sans">On this page</p>
                <ol className="space-y-2 font-sans text-sm">
                  {s.sections.map((sec, i) => (
                    <li key={sec.heading}>
                      <a href={`#s-${i}`} className="text-ink/80 hover:text-ink transition-colors duration-150">
                        {sec.heading}
                      </a>
                    </li>
                  ))}
                  <li>
                    <a href="#faq" className="text-ink/80 hover:text-ink transition-colors duration-150">
                      Questions
                    </a>
                  </li>
                </ol>
              </nav>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {s.video && (
        <section className="relative bg-navy-950 overflow-hidden" aria-labelledby="video-heading">
          <div className="grid-ground absolute inset-0" aria-hidden="true" />
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
            <AnimateOnScroll className="text-center mb-10">
              <Eyebrow className="mb-4">In under a minute</Eyebrow>
              <h2 id="video-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink font-serif">
                <RevealText text={s.video.heading} />
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll className="mx-auto w-full max-w-[360px]">
              <div className="relative overflow-hidden rounded-2xl border border-ink/10 bg-ink shadow-[0_24px_64px_rgba(0,0,0,0.16)]" style={{ paddingTop: '177.78%' }}>
                <iframe
                  src={`https://www.youtube.com/embed/${s.video.youtubeId}`}
                  title={s.video.name}
                  className="absolute inset-0 h-full w-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </AnimateOnScroll>
          </div>
        </section>
      )}

      {/* Body */}
      <section className="relative bg-navy-900 overflow-x-clip" aria-label="Article">
        <div className="grid-ground absolute inset-0" aria-hidden="true" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <article className="lg:col-span-8">
              {s.sections.map((sec, i) => (
                <div key={sec.heading} id={`s-${i}`} className="scroll-mt-28">
                <AnimateOnScroll className="mb-12">
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink font-serif mb-4">{sec.heading}</h2>
                  {sec.paragraphs?.map((p) => (
                    <Para key={p.slice(0, 40)}>{p}</Para>
                  ))}
                  {sec.bullets && (
                    <ul className="space-y-2.5 font-sans mb-5">
                      {sec.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3 text-base sm:text-lg text-ink/80 leading-relaxed">
                          <CheckCircle2 className="w-5 h-5 text-ink shrink-0 mt-1" aria-hidden="true" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {sec.numbered && (
                    <ol className="list-decimal pl-6 space-y-2.5 font-sans mb-5 marker:text-ink marker:font-semibold">
                      {sec.numbered.map((b) => (
                        <li key={b} className="text-base sm:text-lg text-ink/80 leading-relaxed pl-1">
                          {b}
                        </li>
                      ))}
                    </ol>
                  )}
                  {i === 1 && s.table && (
                    <figure className="mt-8 rounded-2xl border border-ink/10 bg-white/70 p-4 sm:p-6 overflow-x-auto">
                      <figcaption className="text-sm font-semibold text-ink font-sans mb-3">{s.table.caption}</figcaption>
                      <table className="w-full text-sm sm:text-base font-sans">
                        <thead>
                          <tr>
                            {s.table.head.map((h, hi) => (
                              <th key={hi} scope="col" className="text-left font-semibold text-ink py-2 pr-4 border-b border-ink/15">
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {s.table.rows.map((r, ri) => (
                            <tr key={ri} className="border-b border-ink/[0.06] last:border-0 align-top">
                              {r.map((c, ci) => (
                                <td key={ci} className={`py-2.5 pr-4 ${ci === 0 ? 'font-semibold text-ink' : 'text-ink/80'}`}>
                                  {c}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </figure>
                  )}
                </AnimateOnScroll>
                </div>
              ))}

              {s.checklist && (
                <AnimateOnScroll className="rounded-2xl border border-ink/10 bg-white/55 p-6 sm:p-8 mb-12">
                  <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-3 font-sans">Checklist</p>
                  <h2 className="text-xl sm:text-2xl font-bold text-ink font-serif mb-4">{s.checklist.title}</h2>
                  <ul className="space-y-2.5 font-sans">
                    {s.checklist.items.map((c) => (
                      <li key={c} className="flex items-start gap-3 text-base text-ink/80 leading-relaxed">
                        <span className="mt-1.5 inline-block w-4 h-4 rounded border border-ink/40 shrink-0" aria-hidden="true" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </AnimateOnScroll>
              )}

              <AnimateOnScroll className="rounded-2xl overflow-hidden border border-ink/10 bg-white/70 p-2 mb-4">
                <img src={images.grid.src} alt={images.grid.alt} loading="lazy" decoding="async" className="w-full h-auto rounded-xl block" />
                <p className="px-3 py-2 text-xs text-ink/55 font-sans">
                  A finished ranking grid: a Gold Coast plumber in the top 3 at 46 of 49 scan points, 1 October 2026. Every engagement starts and is measured with a scan like this.
                </p>
              </AnimateOnScroll>
            </article>

            <aside className="lg:col-span-4 space-y-5">
              <div className="rounded-2xl border border-ink/[0.08] bg-gradient-to-b from-white/75 to-white/40 p-6 lg:sticky lg:top-28">
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-3 font-sans">Related</p>
                <ul className="space-y-2.5 font-sans">
                  {s.related.map((r) => (
                    <li key={r.href}>
                      <Link href={r.href} className="inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-ink/70 transition-colors duration-150">
                        {r.label} <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-ink/[0.08]">
                  <p className="text-sm text-ink/80 font-sans leading-relaxed">
                    Thirty minutes, from Ormeau. Tell me what you do and where, and I will tell you what I would do first.
                  </p>
                  <Link href="https://calendar.notion.com/meet/mitchellgiles134/tovi31rm" className="gold-flat-btn mt-4 inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold group w-full">
                    Book a 30-minute call <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                  <p className="mt-3 text-xs text-ink/55 font-sans">
                    {BUSINESS_INFO.address.full} · {BUSINESS_INFO.phone}
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative overflow-x-clip scroll-mt-24" aria-labelledby="faq-heading">
        <div className="grid-ground absolute inset-0" aria-hidden="true" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <AnimateOnScroll className="text-center mb-10 sm:mb-14">
            <Eyebrow className="mb-4">Questions</Eyebrow>
            <h2 id="faq-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink font-serif">
              <RevealText text={`What people ask about ${s.name.toLowerCase()}.`} />
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
      <LinkWeb current={`/${s.slug}`} intro="Every page on this site links to the rest of the job: the three services, the parts that make them up, the trades I write for, the suburbs I work in, and the proof." />
            {/* CTA */}
      <section className="relative bg-navy-900 overflow-x-clip" aria-labelledby="cta-heading">
        <div className="absolute top-0 left-0 right-0 h-px bg-ink/10" />
        <AnimateOnScroll className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <Eyebrow className="mb-6">One call</Eyebrow>
            <h2 id="cta-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink leading-[1.15] font-serif">
              <RevealText text="Bring your numbers. I will tell you what I would do with them." />
            </h2>
            <p className="mt-8 text-lg sm:text-xl text-ink/80 leading-relaxed font-sans max-w-2xl mx-auto">
              Thirty minutes. If I can help, you get a plan. If I can&apos;t, I will say so and point you somewhere useful.
            </p>
            <div className="mt-10">
              <Link href="https://calendar.notion.com/meet/mitchellgiles134/tovi31rm" className="gold-flat-btn inline-flex items-center justify-center gap-2 rounded-lg px-8 py-4 text-base font-semibold group">
                Book a 30-minute call <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </div>
        </AnimateOnScroll>
      </section>
    </div>
  );
}
