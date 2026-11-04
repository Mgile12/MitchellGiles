import type { ReactNode } from 'react';
import Link from 'next/link';
import { BUSINESS_INFO } from '@/lib/business-info';
import SiteShell from '@/components/site/SiteShell';
import { CtaSection, LinksSection, PageHero } from '@/components/site/Blocks';
import { type BlogPost, formatDate } from './posts';

/** Article shell: breadcrumb, H1, byline, featured image, prose body, closing form, link grid. */
export default function BlogArticle({ post, children }: { post: BlogPost; children: ReactNode }) {
  return (
    <SiteShell>
      <PageHero
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog/' }, { label: 'Local SEO for tradies' }]}
        kicker="Blog"
        title={post.h1}
        lead={
          <p>
            By <Link href="/hardest-working-seo-expert-in-gold-coast/">{BUSINESS_INFO.founder}</Link>, MRG Marketing, Ormeau. Published <time dateTime={post.datePublished}>{formatDate(post.datePublished)}</time>.
          </p>
        }
        form={false}
        image={{ src: post.image.src, alt: post.image.alt, width: 1200, height: 900 }}
      />
      <section className="s-sec s-white">
        <div className="s-wrap">
          <article className="s-prose">{children}</article>
        </div>
      </section>
      <CtaSection title={<>Not sure where your <span className="s-accent">profile stands?</span></>} variant={`blog-${post.slug}`}>
        <p>I look at your Google Business Profile, your site and the three businesses above you on the map, and send you a short video of what I would fix first. Within 48 hours.</p>
      </CtaSection>
      <LinksSection title="Keep reading" />
    </SiteShell>
  );
}
