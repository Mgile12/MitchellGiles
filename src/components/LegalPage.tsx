import type { ReactNode } from 'react';
import { BUSINESS_INFO } from '@/lib/business-info';
import SiteShell from '@/components/site/SiteShell';
import { CtaSection, LinksSection, PageHero } from '@/components/site/Blocks';

/** Plain reading layout for the terms and privacy pages. */
export default function LegalPage({
  title,
  updated,
  intro,
  path,
  name,
  children,
}: {
  title: string;
  updated: string;
  intro: ReactNode;
  path: string;
  name: string;
  children: ReactNode;
}) {
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BUSINESS_INFO.url },
      { '@type': 'ListItem', position: 2, name, item: `${BUSINESS_INFO.url}${path}` },
    ],
  };

  return (
    <SiteShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <PageHero
        crumbs={[{ label: 'Home', href: '/' }, { label: name }]}
        kicker={`Last updated ${updated}`}
        title={title}
        lead={intro}
        form={false}
      />
      <section className="s-sec s-white">
        <div className="s-wrap">
          <article className="s-prose s-legal">{children}</article>
        </div>
      </section>
      <CtaSection title={<>Free: your Google Maps position, <span className="s-accent">on video.</span></>} variant={`legal-${name.toLowerCase()}`}>
        <p>Send me your business and the search you want to win. Within 48 hours you get a short video of where you stand, and the three things I&apos;d fix first.</p>
      </CtaSection>
      <LinksSection title="Keep reading" current={path} />
    </SiteShell>
  );
}
