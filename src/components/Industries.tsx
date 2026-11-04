import Link from 'next/link';
import { BUSINESS_INFO } from '@/lib/business-info';
import { INDUSTRY_GROUPS } from '@/lib/industries';
import { SectionHead } from '@/components/site/Blocks';

/** "Local businesses I work with": the 15 business types, grouped, each with the search it needs to win. */
export default function Industries() {
  return (
    <section id="industries" className="s-sec s-white" aria-labelledby="industries-heading">
      <div className="s-wrap s-stack-lg">
        <SectionHead
          kicker="Who I work with"
          id="industries-heading"
          title={<>Local businesses, <span className="s-accent">not just tradies.</span></>}
          lead={<p>If people find you by searching your trade or service plus a suburb, and then ring, the work is the same: a Google Business Profile that wins the map, pages for what you do and where, and reviews that keep coming. These are the business types I work with most. If yours is not here, ask anyway.</p>}
        />
        <div className="s-industries">
          {INDUSTRY_GROUPS.map((g, i) => (
            <div key={g.name} data-rv="up" data-d={String(Math.min(i, 3) * 0.08)} className="s-ind">
              <h3>{g.name}</h3>
              <ul>
                {g.industries.map((ind) => (
                  <li key={ind.name}>
                    {ind.href ? <Link href={ind.href} className="s-ind-n">{ind.name}</Link> : <span className="s-ind-n">{ind.name}</span>}
                    <span className="s-ind-e">{ind.examples}</span>
                    <span className="s-ind-q">&ldquo;{ind.search}&rdquo;</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div data-rv="up" className="s-callout">
            <h3 style={{ color: '#fff' }}>Not on the list?</h3>
            <p style={{ fontWeight: 800, fontSize: 18, margin: '0 0 8px' }}>If your customers search for what you do and then call, I can probably help.</p>
            <p>Tell me what you do and where. I will look at the three businesses above you on the map and say whether it is worth doing. If it is not, I will say that too.</p>
            <p style={{ marginTop: 14 }}><a href="#get-video" style={{ color: '#fff', fontWeight: 800 }}>Get my map video →</a></p>
            <p style={{ marginTop: 6 }}><a href={BUSINESS_INFO.bookingUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>Book a 30-minute call</a></p>
          </div>
        </div>
      </div>
    </section>
  );
}
