import Link from 'next/link';
import SiteShell from '@/components/site/SiteShell';
import { LinksSection, PageHero } from '@/components/site/Blocks';

export default function NotFound() {
  return (
    <SiteShell>
      <PageHero
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Page not found' }]}
        kicker="Page not found"
        title={<span className="s-accent">404</span>}
        lead={<p>Page not found</p>}
        links={<Link href="/">Back to Home →</Link>}
        variant="not-found"
        formId="get-video"
      />
      <LinksSection title="Everything else on this site" />
    </SiteShell>
  );
}
