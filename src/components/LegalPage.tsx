import type { ReactNode } from 'react';
import { BUSINESS_INFO } from '@/lib/business-info';

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
    <article className="bg-navy-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 pb-16 sm:pb-24 font-sans text-base sm:text-lg leading-relaxed text-ink/80 [&_a]:underline [&_a]:underline-offset-2 [&_a]:text-ink [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:font-serif [&_h2]:text-ink [&_h2]:scroll-mt-24 [&_p]:mb-4 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mb-2">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-ink font-serif">{title}</h1>
        <p className="mt-3 text-sm text-ink/60">Last updated {updated}</p>
        <div className="mt-6 text-lg sm:text-xl text-ink">{intro}</div>
        {children}
      </div>
    </article>
  );
}
