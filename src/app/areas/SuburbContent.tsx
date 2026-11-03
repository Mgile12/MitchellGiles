import { Fragment } from 'react';
import Link from 'next/link';
import { BUSINESS_INFO } from '@/lib/business-info';
import SiteShell from '@/components/site/SiteShell';
import { BigStats, CtaSection, FaqSection, LinksSection, PageHero, ServiceRows } from '@/components/site/Blocks';
import { SUBURBS, type SuburbPage } from './suburbs';

const services = [
  { title: 'Google Business Profile', blurb: 'Top 3 on Maps for the searches that happen a few kilometres from you.', href: '/google-business-profile-gold-coast/' },
  { title: 'Local SEO', blurb: 'A page for every service and every suburb you serve, so Google has something to rank.', href: '/best-local-seo-expert-in-gold-coast/' },
  { title: 'AI Search (GEO)', blurb: 'Named when someone here asks ChatGPT or Google AI who to call.', href: '/ai-search-geo-gold-coast/' },
];

const proof = [
  { figure: '2 days', label: 'page two to the top 3 on Maps, Gold Coast client' },
  { figure: '208', label: 'calls from Google in three months, two plumbers' },
  { figure: '49 of 49', label: 'grid points at number 1, one profile, five weeks' },
];

export default function SuburbContent({ s, images }: { s: SuburbPage; images: { portrait: { src: string; alt: string }; grid: { src: string; alt: string } } }) {
  const kw = s.primaryKeyword.toLowerCase();
  const nearbyLinks = s.nearby.map((name) => {
    const hit = SUBURBS.find((x) => x.name === name);
    return { name, href: hit && hit.hasPage ? `/areas/${hit.slug}/` : null };
  });
  const titleLead = s.primaryKeyword.slice(0, -s.name.length).trim();
  const hint = `e.g. plumber ${s.name}`;
  const variant = `area-${s.slug}`;

  return (
    <SiteShell>
      <PageHero
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Areas we serve', href: '/areas/' }, { label: s.name }]}
        kicker={`${s.name}, northern Gold Coast corridor`}
        title={<>{titleLead} <span className="s-accent">{s.name}</span></>}
        lead={<p>{s.tagline}</p>}
        variant={variant}
        searchHint={hint}
        image={{ ...images.portrait, title: images.portrait.alt, width: 1200, height: 960 }}
        caption={`Mitchell Giles, ${s.drive.minutes} minutes from ${s.name}`}
      />

      <div className="s-band" aria-hidden="true">
        <div data-marquee="">
          {s.landmarks.concat(s.landmarks).map((l, i) => (
            <span key={i} className="s-band-item">{l}<i /></span>
          ))}
        </div>
      </div>

      <section className="s-sec s-white">
        <div className="s-wrap s-split">
          <div className="s-stack">
            <p data-rv="left" className="s-kicker">Why {s.name}</p>
            <div data-rv="up" className="s-lead">
              {s.intro.map((p) => <p key={p.slice(0, 40)}>{p}</p>)}
            </div>
            <p data-rv="up" data-d=".1"><a href="#faq" style={{ fontWeight: 700 }}>Questions from {s.name} →</a></p>
          </div>
          <BigStats kicker="Three numbers, all from client accounts" stats={proof} />
        </div>
      </section>

      <section className="s-sec s-ink" aria-labelledby="place-heading">
        <div className="s-wrap s-split">
          <div className="s-stack">
            <p data-rv="left" className="s-kicker">The place</p>
            <h2 id="place-heading" data-rv="up" className="s-h2">{s.name}, as a customer <span className="s-accent">searches it.</span></h2>
            <p data-rv="up" data-d=".1" className="s-lead">
              Google ranks a business for the place the searcher is standing in, so the first job is to know where the searches in {s.name} actually come from. These are the places that come up.
            </p>
            <ul className="s-list">
              {s.landmarks.map((l, i) => (
                <li key={l} data-rv="up" data-d={String(Math.min(i, 5) * 0.05)}><span>{String(i + 1).padStart(2, '0')}</span><span>{l}</span></li>
              ))}
            </ul>
          </div>
          <div className="s-stack">
            <p data-rv="left" className="s-kicker">Who is searching</p>
            <h2 data-rv="up" className="s-h2">The businesses {s.name} <span className="s-accent">runs on.</span></h2>
            <ul className="s-list">
              {s.businessTypes.map((b, i) => (
                <li key={b} data-rv="up" data-d={String(Math.min(i, 5) * 0.05)}><span>{String(i + 1).padStart(2, '0')}</span><span>{b}</span></li>
              ))}
            </ul>
            <div data-rv="up" className="s-callout">
              <p className="s-kicker">What the Maps pack looks like in {s.name}</p>
              <p>{s.competition}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="s-sec s-sand" aria-labelledby="moves-heading">
        <div className="s-wrap s-stack-lg">
          <div className="s-stack-sm">
            <p data-rv="left" className="s-kicker">What I would do first</p>
            <h2 id="moves-heading" data-rv="up" className="s-h2">Three moves for a <span className="s-accent">{s.name} business.</span></h2>
          </div>
          <div className="s-cols">
            {s.firstMoves.map((m, i) => (
              <div key={m.title} data-rv="up" data-d={String(i * 0.1)} className="s-col">
                <span className="s-col-k">STEP {i + 1}</span>
                <h3>{m.title}</h3>
                <p>{m.text}</p>
              </div>
            ))}
          </div>
          <div className="s-stack">
            <h2 data-rv="up" className="s-h3">What I do for businesses in {s.name}</h2>
            <ServiceRows rows={services} />
          </div>
        </div>
      </section>

      <section className="s-sec s-white" aria-labelledby="directions-heading">
        <div className="s-wrap s-split">
          <div className="s-stack">
            <p data-rv="left" className="s-kicker">Where I am</p>
            <h2 id="directions-heading" data-rv="up" className="s-h2">{s.drive.minutes} minutes from <span className="s-accent">{s.name}.</span></h2>
            <p data-rv="up" data-d=".1" className="s-lead">
              MRG Marketing is at {BUSINESS_INFO.address.full}, about {s.drive.km} km from {s.name}: {s.drive.route}. Most of the work happens on a call, and I will come to you anywhere in {s.name} if that is easier.
            </p>
            <div data-rv="up" data-d=".15" className="s-address">
              <span>{s.drive.route}</span>
              <a href={`tel:${BUSINESS_INFO.phoneFormatted}`}>{BUSINESS_INFO.phone}</a>
              <a href={`https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(s.name + ' QLD')}&destination=${encodeURIComponent(BUSINESS_INFO.legalName + ', ' + BUSINESS_INFO.address.full)}`} target="_blank" rel="noopener noreferrer">
                Get directions from {s.name}
              </a>
            </div>
            <div className="s-stack-sm">
              <p data-rv="left" className="s-kicker">Nearby</p>
              <ul data-rv="up" className="s-chips">
                {nearbyLinks.map((n) => (
                  <Fragment key={n.name}>
                    <li>{n.href ? <Link href={n.href}>{n.name}</Link> : <span>{n.name}</span>}</li>
                  </Fragment>
                ))}
              </ul>
            </div>
          </div>
          <div className="s-stack-lg">
            <div data-rv="up" className="s-framed" style={{ height: 'clamp(300px,40vw,380px)' }}>
              <iframe
                src={`https://www.google.com/maps?q=${encodeURIComponent(`${BUSINESS_INFO.legalName}, ${BUSINESS_INFO.address.full}`)}&z=12&output=embed`}
                width="100%"
                height="100%"
                style={{ height: '100%' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`MRG Marketing in Ormeau, near ${s.name}, on Google Maps`}
              />
            </div>
            <figure data-rv="up" className="s-figure">
              <div className="s-framed">
                <img src={images.grid.src} alt={images.grid.alt} loading="lazy" decoding="async" />
              </div>
              <figcaption>What a finished grid looks like: a Gold Coast plumber in the top 3 at 46 of 49 scan points. The same scan is the first thing I run for a {s.name} business.</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <FaqSection kicker={`Questions from ${s.name}`} title={<>What {s.name} business owners <span className="s-accent">ask me.</span></>} faqs={s.faqs} />

      <CtaSection
        title={<>Find out where your {s.name} business <span className="s-accent">shows up.</span></>}
        variant={variant}
        searchHint={hint}
        after={<>Searching for {kw}? You are in the right place. <Link href="/case-studies/">The case studies</Link> show the work.</>}
      >
        <p>
          Within 48 hours you get a short video of your own Google Maps position in {s.name}, street by street: who&apos;s beating you, and the three things I&apos;d fix first. If I can&apos;t help, I will say so.
        </p>
      </CtaSection>

      <LinksSection
        title={`More for ${s.name} businesses`}
        intro="The services, the parts of the job, the trade guides, the other suburbs I work in, and the proof behind all of it."
        current={`/areas/${s.slug}/`}
      />
    </SiteShell>
  );
}
