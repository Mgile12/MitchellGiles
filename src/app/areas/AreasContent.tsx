import Link from 'next/link';
import { BUSINESS_INFO } from '@/lib/business-info';
import SiteShell from '@/components/site/SiteShell';
import { CtaSection, LinksSection, PageHero } from '@/components/site/Blocks';
import { SUBURBS, SUBURB_PAGES } from './suburbs';

const ORMEAU = { slug: 'ormeau', name: 'Ormeau', primaryKeyword: 'Local SEO Ormeau', tagline: 'Home base. Where I live and work, and where I know the map best.', minutes: null as number | null };
const CARDS = [ORMEAU, ...SUBURB_PAGES.map((s) => ({ slug: s.slug, name: s.name, primaryKeyword: s.primaryKeyword, tagline: s.tagline, minutes: s.drive.minutes as number | null }))];

export default function AreasContent() {
  return (
    <SiteShell>
      <PageHero
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Areas We Serve' }]}
        kicker="Local Coverage"
        title={<>Areas We <span className="s-accent">Serve</span></>}
        lead={
          <p>
            Based in {BUSINESS_INFO.address.locality}, we work with businesses across the Gold Coast, Brisbane and South East Queensland. Local expertise, real results. See our full range of{' '}
            <Link href="/services/">marketing services</Link> to find out what we can do for your business.
          </p>
        }
        variant="area-hub"
        image={{ src: '/images/home/mitchell-giles-local-seo-consultant-ormeau.webp', alt: 'Mitchell Giles, MRG Marketing, Ormeau', width: 920, height: 1150 }}
        caption="Mitchell Giles, Ormeau"
      />

      <section className="s-sec s-white" aria-labelledby="suburbs-heading">
        <div className="s-wrap s-stack-lg">
          <div className="s-stack-sm">
            <h2 id="suburbs-heading" data-rv="up" className="s-h2">Suburbs I work <span className="s-accent">in most</span></h2>
            <p data-rv="up" data-d=".1" className="s-lead">
              Ormeau is home. These are the twenty suburbs I work in, closest first. The ones with a link have their own page, because that is where the searches are; the rest are covered from the nearest one.
            </p>
          </div>
          <div className="s-cards">
            {CARDS.map((c, i) => (
              <Link key={c.slug} data-rv="up" data-d={String(Math.min(i, 3) * 0.08)} href={`/areas/${c.slug}/`} className="s-card">
                <span className="s-card-k">{c.minutes ? `${c.minutes} minutes from Ormeau` : 'Home base'}</span>
                <h3>{c.primaryKeyword}</h3>
                <span className="s-card-b">{c.tagline}</span>
                <span className="s-card-more">{c.name} →</span>
              </Link>
            ))}
          </div>
          <ul data-rv="up" className="s-chips" aria-label="All twenty suburbs">
            {SUBURBS.map((s) => (
              <li key={s.slug}>{s.hasPage ? <Link href={`/areas/${s.slug}/`}>{s.name}</Link> : <span>{s.name}</span>}</li>
            ))}
          </ul>
        </div>
      </section>

      <CtaSection title={<>Ready to grow your <span className="s-accent">local business?</span></>} variant="area-hub">
        <p>No matter where you are in South East Queensland, the process starts with a short video of your own Google Maps position, street by street. Free, within 48 hours.</p>
      </CtaSection>

      <LinksSection title="What I do in these suburbs" current="/areas/" />
    </SiteShell>
  );
}
