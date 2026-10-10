import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/business-info';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Eyebrow from '@/components/Eyebrow';
import RevealText from '@/components/RevealText';
import { caseStudies } from './data';

const PATH = '/case-studies';
const DESCRIPTION =
  'Three MRG Marketing case studies with the problem, the work, the dates, how the result was measured and what the numbers cannot prove. Google Maps rankings and email revenue, from client accounts.';

export const metadata: Metadata = {
  title: 'Case Studies | Google Maps and Email Results, Measured',
  description: DESCRIPTION,
  openGraph: {
    title: 'Case Studies | MRG Marketing',
    description: DESCRIPTION,
    type: 'website',
    url: `${BUSINESS_INFO.url}${PATH}/`,
    locale: 'en_AU',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'Case Studies | MRG Marketing', description: DESCRIPTION, images: ['/og-image.png'] },
  alternates: { canonical: `${BUSINESS_INFO.url}${PATH}/` },
};

function buildJsonLd() {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Case studies',
      description: DESCRIPTION,
      url: `${BUSINESS_INFO.url}${PATH}/`,
      about: { '@id': `${BUSINESS_INFO.url}/#business` },
      hasPart: caseStudies.map((c) => ({ '@type': 'Article', headline: c.headline, url: `${BUSINESS_INFO.url}${PATH}/${c.slug}/` })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: BUSINESS_INFO.url },
        { '@type': 'ListItem', position: 2, name: 'Case studies', item: `${BUSINESS_INFO.url}${PATH}/` },
      ],
    },
  ];
}

export default function CaseStudiesPage() {
  return (
    <>
      {buildJsonLd().map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <div className="bg-navy-950 min-h-screen">
        <section className="relative overflow-hidden" aria-labelledby="page-heading">
          <div className="grid-ground absolute inset-0" aria-hidden="true" />
          <div className="glow w-[700px] h-[600px] -top-40 right-[-10%]" style={{ ['--glow-a' as string]: '0.14' }} aria-hidden="true" />
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12 sm:pt-32 sm:pb-16">
            <nav aria-label="Breadcrumb" className="mb-8 font-sans text-sm text-slate-400">
              <ol className="flex items-center gap-2">
                <li>
                  <Link href="/" className="hover:text-white transition-colors duration-150">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">
                  <ChevronRight className="w-4 h-4" />
                </li>
                <li className="text-slate-300">Case studies</li>
              </ol>
            </nav>
            <Eyebrow align="left" className="mb-5">
              Case studies
            </Eyebrow>
            <h1 id="page-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08] font-serif max-w-3xl">
              The work, the dates, and what the numbers can and can&apos;t prove.
            </h1>
            <p className="mt-7 text-lg sm:text-xl text-slate-300 leading-relaxed font-sans max-w-2xl">
              Each study has the problem, the changes I made, the period, how the result was measured and where the
              measurement falls short. The screenshots are untouched. Where a client is named, it is with their
              knowledge.
            </p>
          </div>
        </section>

        <section className="relative" aria-label="Case study list">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
            <AnimateOnScroll variant="group" className="grid gap-5 lg:grid-cols-3">
              {caseStudies.map((c, i) => (
                <Link
                  key={c.slug}
                  href={`${PATH}/${c.slug}`}
                  className={`rv-up ${i === 1 ? 'rv-delay-1' : i === 2 ? 'rv-delay-2' : ''} group flex flex-col rounded-2xl border border-white/[0.08] bg-white/[0.03] overflow-hidden hover:border-gold/40 transition-colors duration-200`}
                >
                  <div className="aspect-[16/10] overflow-hidden border-b border-white/[0.06] bg-navy-900">
                    <img src={c.images[c.images.length - 1].src} alt={c.images[c.images.length - 1].alt} loading="lazy" decoding="async" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold font-sans">{c.service}</p>
                    <p className="mt-3 text-3xl font-bold text-white font-serif tabular-nums">{c.figure}</p>
                    <p className="text-sm text-slate-400 font-sans">{c.figureLabel}</p>
                    <h2 className="mt-4 text-lg font-bold text-white font-serif leading-snug">{c.headline}</h2>
                    <p className="mt-2 text-sm text-slate-400 font-sans">
                      {c.client} · {c.industry}
                    </p>
                    <span className="mt-auto pt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold font-sans">
                      Read the case study <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </span>
                  </div>
                </Link>
              ))}
            </AnimateOnScroll>

            <AnimateOnScroll className="mt-14 sm:mt-20 max-w-3xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-serif">
                <RevealText text="Want the one that matches your business?" />
              </h2>
              <p className="mt-4 text-slate-300 font-sans">
                Tell me what you sell and what&apos;s not working. I&apos;ll show you the screenshots closest to your
                situation, and say so if I don&apos;t have one.
              </p>
              <Link href="/book" className="gold-flat-btn mt-8 inline-flex items-center justify-center gap-2 rounded-lg px-8 py-4 text-base font-semibold group">
                Book a 30-minute call <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </AnimateOnScroll>
          </div>
        </section>
      </div>
    </>
  );
}
