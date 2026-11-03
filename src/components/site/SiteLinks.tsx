import { Fragment } from 'react';
import Link from 'next/link';

// The full site link set. Every page in the new design carries it, so nothing loses a link when it is rebuilt.
const siteLinks = [
  { h: 'SERVICES', links: [
    { t: 'Google Business Profile optimisation', href: '/google-business-profile-gold-coast/' },
    { t: 'Local SEO', href: '/best-local-seo-expert-in-gold-coast/' },
    { t: 'AI Search (GEO)', href: '/ai-search-geo-gold-coast/' },
    { t: 'All services', href: '/services/' },
    { t: 'Current offers', href: '/services/#offers' },
  ] },
  { h: 'THE PARTS OF THE JOB', links: [
    { t: 'SEO for tradies', href: '/seo-for-tradies-gold-coast/' },
    { t: 'Google Maps ranking', href: '/google-maps-ranking-gold-coast/' },
    { t: 'Review management', href: '/review-management-gold-coast/' },
    { t: 'Local citations', href: '/local-citations-gold-coast/' },
    { t: 'Local SEO audit', href: '/local-seo-audit-gold-coast/' },
    { t: 'Email marketing', href: '/email-marketing-gold-coast/' },
  ] },
  { h: 'BY TRADE', links: [
    { t: 'SEO for plumbers', href: '/seo-for-plumbers/' },
    { t: 'SEO for electricians', href: '/seo-for-electricians/' },
    { t: 'SEO for builders', href: '/seo-for-builders/' },
  ] },
  { h: 'MORE', links: [
    { t: 'Best local SEO expert in Gold Coast', href: '/best-local-seo-expert-in-gold-coast/' },
    { t: 'Best marketing agency in Gold Coast', href: '/best-marketing-agency-in-gold-coast/' },
    { t: 'Hardest working SEO expert in Gold Coast', href: '/hardest-working-seo-expert-in-gold-coast/' },
    { t: 'Best SEO agency for tradies in Australia', href: '/best-seo-agency-for-tradies-in-australia/' },
    { t: 'Case studies', href: '/case-studies/' },
    { t: 'Blog', href: '/blog/' },
    { t: 'Local SEO for tradies in 2026', href: '/blog/local-seo-gold-coast-tradies-2026/' },
    { t: 'Contact', href: '/contact/' },
  ] },
];

const AREA_PAGES: Record<string, string> = { Ormeau: 'ormeau', Pimpama: 'pimpama', Coomera: 'coomera', 'Upper Coomera': 'upper-coomera', Yatala: 'yatala', Stapylton: 'stapylton', Beenleigh: 'beenleigh' };
const areas = ['Ormeau', 'Ormeau Hills', 'Pimpama', 'Coomera', 'Upper Coomera', 'Yatala', 'Stapylton', 'Jacobs Well', 'Alberton', 'Willow Vale', 'Gilberton', 'Norwell', 'Woongoolba', 'Beenleigh', 'Eagleby', 'Bahrs Scrub', 'Waterford', 'Oxenford', 'Helensvale', 'Hope Island', 'Gold Coast', 'Brisbane'].map((t) => ({ t, href: AREA_PAGES[t] ? `/areas/${AREA_PAGES[t]}/` : '/areas/' }));

/** Areas served and the full link grid. `current` is the page's own path, left out of its own lists. */
export default function SiteLinks({ current }: { current?: string }) {
  const here = (href: string) => current !== undefined && href === current;
  const areaLinks = areas.filter((a) => !here(a.href) || a.href === '/areas/');
  const links = siteLinks.map((c) => ({ ...c, links: c.links.filter((l) => !here(l.href)) }));
  return (
    <>
<div style={{"display":"flex","flexDirection":"column","gap":"12px"}}>
      <div style={{"fontFamily":"var(--font-jb),monospace","fontSize":"11px","letterSpacing":".14em","color":"#55534d"}}>AREAS WE SERVE</div>
      <div data-rv="up" style={{"display":"flex","flexWrap":"wrap","gap":"6px"}}>
        {areaLinks.map((a, aIdx) => (<Fragment key={aIdx}>
          <Link className="hv3" href={a.href} style={{"border":"1px solid #111110","padding":"5px 10px","fontSize":"14px","color":"#111110","textDecoration":"none","background":"#fff"}}>{a.t}</Link>
        </Fragment>))}
      </div>
    </div>
    <div style={{"display":"grid","gridTemplateColumns":"repeat(auto-fit,minmax(min(100%,200px),1fr))","gap":"28px","borderTop":"1px solid #111110","paddingTop":"28px"}}>
      {links.map((col, colIdx) => (<Fragment key={colIdx}>
        <div style={{"display":"flex","flexDirection":"column","gap":"8px"}}>
          <div style={{"fontFamily":"var(--font-jb),monospace","fontSize":"11px","letterSpacing":".14em","color":"#55534d"}}>{col.h}</div>
          {col.links.map((l, lIdx) => (<Fragment key={lIdx}>
            <Link className="hv4" href={l.href} style={{"color":"#111110","textDecoration":"none","fontWeight":"600","fontSize":"15px"}}>{l.t}</Link>
          </Fragment>))}
        </div>
      </Fragment>))}
    </div>
  
    </>
  );
}
