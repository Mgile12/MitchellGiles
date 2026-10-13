import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/business-info';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import Eyebrow from '@/components/Eyebrow';
import { caseStudies } from '../data';
import BarChart from '@/components/BarChart';
import LinkWeb from '@/components/LinkWeb';

const HUB = '/case-studies';

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const c = caseStudies.find((s) => s.slug === params.slug);
  if (!c) return {};
  const url = `${BUSINESS_INFO.url}${HUB}/${c.slug}/`;
  const title = `${c.headline} | ${c.client}`;
  return {
    title,
    description: c.summary,
    openGraph: { title: `${title} | MRG Marketing`, description: c.summary, type: 'article', url, locale: 'en_AU', images: c.images.length ? [{ url: c.images[c.images.length - 1].src, alt: c.images[c.images.length - 1].alt }] : [{ url: '/og-image.png', width: 1200, height: 630 }] },
    twitter: { card: 'summary_large_image', title: `${title} | MRG Marketing`, description: c.summary, images: c.images.length ? [c.images[c.images.length - 1].src] : ['/og-image.png'] },
    alternates: { canonical: url },
  };
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <AnimateOnScroll className="grid gap-4 sm:grid-cols-12 sm:gap-8 py-8 border-t border-ink/[0.08]">
      <h2 className="sm:col-span-3 text-xs font-semibold tracking-[0.2em] uppercase text-gold font-sans pt-1">{title}</h2>
      <div className="sm:col-span-9 text-base sm:text-lg text-ink/80 leading-relaxed font-sans">{children}</div>
    </AnimateOnScroll>
  );
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const c = caseStudies.find((s) => s.slug === params.slug);
  if (!c) notFound();
  const url = `${BUSINESS_INFO.url}${HUB}/${c.slug}/`;

  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: c.headline,
      description: c.summary,
      url,
      image: c.images.map((i) => `${BUSINESS_INFO.url}${i.src}`),
      author: { '@type': 'Person', name: BUSINESS_INFO.founder },
      publisher: { '@id': `${BUSINESS_INFO.url}/#business` },
      about: { '@type': 'Service', name: c.service, url: `${BUSINESS_INFO.url}${c.serviceHref}/` },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: BUSINESS_INFO.url },
        { '@type': 'ListItem', position: 2, name: 'Case studies', item: `${BUSINESS_INFO.url}${HUB}/` },
        { '@type': 'ListItem', position: 3, name: c.client, item: url },
      ],
    },
  ];

  return (
    <>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <div className="bg-navy-950 min-h-screen">
        <section className="relative overflow-hidden" aria-labelledby="page-heading">
          <div className="grid-ground absolute inset-0" aria-hidden="true" />
          <div className="glow w-[700px] h-[600px] -top-40 right-[-10%]" style={{ ['--glow-a' as string]: '0.14' }} aria-hidden="true" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12 sm:pt-32 sm:pb-16">
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
                  <Link href={HUB} className="hover:text-ink transition-colors duration-150">
                    Case studies
                  </Link>
                </li>
                <li aria-hidden="true">
                  <ChevronRight className="w-4 h-4" />
                </li>
                <li className="text-ink/80">{c.client}</li>
              </ol>
            </nav>
            <Eyebrow align="left" className="mb-5">
              {c.service}
            </Eyebrow>
            <h1 id="page-heading" className="text-3xl sm:text-5xl font-bold tracking-tight text-ink leading-[1.1] font-serif">
              {c.headline}
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-ink/80 leading-relaxed font-sans">{c.summary}</p>

            <dl className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-4 font-sans text-sm">
              {[
                ['Client', c.client],
                ['Industry', c.industry],
                ['Location', c.location],
                ['Service', c.service],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="text-xs font-semibold tracking-[0.18em] uppercase text-ink/55">{k}</dt>
                  <dd className="mt-1 text-ink">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="relative" aria-label="Evidence">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll variant="group" className={`grid gap-4 ${c.images.length > 1 ? 'sm:grid-cols-2' : ''}`}>
              {c.images.map((img, i) => (
                <figure key={img.src} className={`rv-up ${i ? 'rv-delay-1' : ''}`}>
                  <a href={img.src} target="_blank" rel="noopener noreferrer" className="block rounded-2xl overflow-hidden border border-ink/[0.08] bg-white/55 p-2 hover:border-gold/40 transition-colors duration-200">
                    <img src={img.src} alt={img.alt} decoding="async" className="w-full h-auto rounded-xl block" />
                  </a>
                  <figcaption className="mt-2 text-sm text-ink/65 font-sans">{img.caption}</figcaption>
                </figure>
              ))}
            </AnimateOnScroll>

            {c.charts && c.charts.length > 0 && (
              <AnimateOnScroll variant="group" className={`mt-6 grid gap-4 ${c.charts.length > 1 ? 'lg:grid-cols-2' : ''}`}>
                {c.charts.map((chart, i) => (
                  <div key={chart.title} className={`rv-up ${i ? 'rv-delay-1' : ''}`}>
                    <BarChart spec={chart} />
                  </div>
                ))}
              </AnimateOnScroll>
            )}

            <div className="mt-12">
              <Block title="The problem">
                <p>{c.problem}</p>
              </Block>
              <Block title="The work">
                <ol className="list-decimal pl-5 space-y-2 marker:text-gold">
                  {c.work.map((w) => (
                    <li key={w}>{w}</li>
                  ))}
                </ol>
              </Block>
              <Block title="Period">
                <p>{c.period}</p>
              </Block>
              <Block title="Measurement">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm sm:text-base">
                    <tbody>
                      {c.measurement.map((m) => (
                        <tr key={m.label} className="border-b border-ink/[0.06] last:border-0 align-top">
                          <th scope="row" className="py-3 pr-4 text-left font-semibold text-ink w-[38%]">
                            {m.label}
                          </th>
                          <td className="py-3 text-ink/80">{m.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Block>
              <Block title="Attribution">
                <p>{c.attribution}</p>
              </Block>
              <Block title="Corroboration">
                <p>{c.corroboration}</p>
              </Block>
              <Block title="Limitations">
                <ul className="list-disc pl-5 space-y-2 marker:text-gold">
                  {c.limitations.map((l) => (
                    <li key={l}>{l}</li>
                  ))}
                </ul>
              </Block>
            </div>
          </div>
        </section>

        <section className="relative bg-navy-900 mt-16 border-t border-ink/[0.06]" aria-label="Next step">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
            <AnimateOnScroll>
              <h2 className="text-2xl sm:text-3xl font-bold text-ink font-serif">Is this the kind of result you need?</h2>
              <p className="mt-4 text-ink/80 font-sans max-w-2xl mx-auto">
                Call me. I&apos;ll look at your profile, your site and the three businesses above you, and tell
                you what is realistic before you spend anything.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
                <Link href="tel:+61474870535" className="gold-flat-btn inline-flex items-center justify-center gap-2 rounded-lg px-8 py-4 text-base font-semibold group">
                  Call me <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
                <Link href={c.serviceHref} className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold/80 transition-colors duration-150 font-sans">
                  About the {c.service} service <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </section>
        <LinkWeb show={['services', 'guides', 'trades', 'areas']} heading="The work behind this result" />
      </div>
    </>
  );
}
