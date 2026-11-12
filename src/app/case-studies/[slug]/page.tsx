import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BUSINESS_INFO } from '@/lib/business-info';
import SiteShell from '@/components/site/SiteShell';
import { CtaSection, LinksSection, PageHero } from '@/components/site/Blocks';
import { caseStudies } from '../data';
import BarChart from '@/components/BarChart';

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
    <div data-rv="up" className="s-block">
      <h2>{title}</h2>
      <div className="s-copy">{children}</div>
    </div>
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
    <SiteShell>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <PageHero
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Case studies', href: `${HUB}/` }, { label: c.client }]}
        kicker={c.service}
        title={c.headline}
        lead={<p>{c.summary}</p>}
        form={false}
        side={
          <dl className="s-facts">
            {c.logo && (
              <div style={{ gridColumn: '1 / -1' }}>
                <img src={c.logo.src} alt={c.logo.alt} width={96} height={96} style={{ width: 96, height: 96, objectFit: 'contain', display: 'block' }} />
              </div>
            )}
            <div className="s-facts-big">
              <p className="s-figure-n" style={{ color: '#2F6BFF' }}>{c.figure}</p>
              <p className="s-stat-l">{c.figureLabel}</p>
            </div>
            {[
              ['Client', c.client],
              ['Industry', c.industry],
              ['Location', c.location],
              ['Service', c.service],
            ].map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        }
      />

      <section className="s-sec s-white" aria-label="Evidence">
        <div className="s-wrap s-stack-lg">
          {c.images.length > 0 && (
            <div className="s-shots">
              {c.images.map((img, i) => (
                <figure key={img.src} data-rv="up" data-d={String(Math.min(i, 2) * 0.1)} className="s-figure">
                  <a href={img.src} target="_blank" rel="noopener noreferrer" className="s-shot">
                    <img src={img.src} alt={img.alt} decoding="async" />
                  </a>
                  <figcaption>{img.caption}</figcaption>
                </figure>
              ))}
            </div>
          )}
          {c.charts && c.charts.length > 0 && (
            <div className="s-charts">
              {c.charts.map((chart, i) => (
                <div key={chart.title} data-rv="up" data-d={String(Math.min(i, 2) * 0.1)}>
                  <BarChart spec={chart} />
                </div>
              ))}
            </div>
          )}
          <div className="s-blocks">
            {c.story && (
              <Block title="The story">
                {c.story.paragraphs.map((p) => <p key={p.slice(0, 40)}>{p}</p>)}
                {c.quotes?.map((q) => (
                  <blockquote key={q.text} style={{ margin: '18px 0 0', paddingLeft: 18, borderLeft: '4px solid #2F6BFF' }}>
                    <p style={{ margin: 0, fontWeight: 800, fontSize: 20, lineHeight: 1.3 }}>&ldquo;{q.text}&rdquo;</p>
                    <footer style={{ marginTop: 6, fontSize: 14, color: '#55534d' }}>{q.by}</footer>
                  </blockquote>
                ))}
                <p style={{ fontSize: 14, color: '#55534d' }}>{c.story.source}</p>
              </Block>
            )}
            <Block title="The problem"><p>{c.problem}</p></Block>
            <Block title="The work">
              <ol className="s-nums">{c.work.map((w) => <li key={w}>{w}</li>)}</ol>
            </Block>
            <Block title="Period"><p>{c.period}</p></Block>
            <Block title="Measurement">
              <div className="s-scroll">
                <table className="s-table">
                  <tbody>
                    {c.measurement.map((m) => (
                      <tr key={m.label}>
                        <th scope="row">{m.label}</th>
                        <td style={{ fontWeight: 400 }}>{m.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Block>
            <Block title="Attribution"><p>{c.attribution}</p></Block>
            <Block title="Corroboration"><p>{c.corroboration}</p></Block>
            <Block title="Limitations">
              <ul className="s-ticks">{c.limitations.map((l) => <li key={l}>{l}</li>)}</ul>
            </Block>
          </div>
        </div>
      </section>

      <CtaSection
        title={<>Is this the kind of result <span className="s-accent">you need?</span></>}
        variant={`case-${c.slug}`}
        after={<Link href={`${c.serviceHref}/`}>About the {c.service} service →</Link>}
      >
        <p>I&apos;ll look at your profile, your site and the three businesses above you, send you a short video of where you stand, and tell you what is realistic before you spend anything.</p>
      </CtaSection>

      <LinksSection title="The work behind this result" />
    </SiteShell>
  );
}
