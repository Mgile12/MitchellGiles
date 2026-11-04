import type { Metadata } from 'next';
import Link from 'next/link';
import { BUSINESS_INFO } from '@/lib/business-info';
import SiteShell from '@/components/site/SiteShell';
import { CtaSection, LinksSection, PageHero } from '@/components/site/Blocks';
import { caseStudies } from './data';

const PATH = '/case-studies';
const DESCRIPTION =
  'MRG Marketing case studies with the problem, the work, the dates, how the result was measured and what the numbers cannot prove. Google Maps rankings from client accounts.';

export const metadata: Metadata = {
  title: 'Case Studies | Google Maps Results, Measured',
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
      hasPart: caseStudies.filter((c) => !c.hidden).map((c) => ({ '@type': 'Article', headline: c.headline, url: `${BUSINESS_INFO.url}${PATH}/${c.slug}/` })),
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
    <SiteShell>
      {buildJsonLd().map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <PageHero
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Case studies' }]}
        kicker="Case studies"
        title={<>The work, the dates, and what the numbers <span className="s-accent">can and can&apos;t prove.</span></>}
        lead={<p>Each study has the problem, the changes I made, the period, how the result was measured and where the measurement falls short. The screenshots are untouched. Where a client is named, it is with their knowledge.</p>}
        form={false}
      />

      <section className="s-sec s-white" aria-label="Case study list">
        <div className="s-wrap s-cards">
          {caseStudies.filter((c) => !c.hidden).map((c, i) => (
            <Link key={c.slug} data-rv="up" data-d={String(Math.min(i % 3, 2) * 0.08)} href={`${PATH}/${c.slug}/`} className="s-card">
              {c.hubImage ? (
                <img src={c.hubImage.src} alt={c.hubImage.alt} loading="lazy" decoding="async" className="s-card-img" />
              ) : (
                <span className="s-card-figure">{c.figure}</span>
              )}
              <span className="s-card-k">{c.service}</span>
              <span className="s-case-big">{c.figure}</span>
              <span className="s-card-b">{c.figureLabel}</span>
              <h2>{c.headline}</h2>
              <span className="s-card-b">{c.client} · {c.industry}</span>
              <span className="s-card-more">Read the case study →</span>
            </Link>
          ))}
        </div>
      </section>

      <CtaSection title={<>Want the one that matches <span className="s-accent">your business?</span></>} variant="case-studies">
        <p>Tell me what you sell and what&apos;s not working. I&apos;ll send you a short video of your own map position, show you the screenshots closest to your situation, and say so if I don&apos;t have one.</p>
      </CtaSection>

      <LinksSection title="The work behind the numbers" current="/case-studies/" />
    </SiteShell>
  );
}
