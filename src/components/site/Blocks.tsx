import { Fragment, type ReactNode } from 'react';
import Link from 'next/link';
import { BUSINESS_INFO } from '@/lib/business-info';
import { LeadForm } from './SiteIslands';
import SiteLinks from './SiteLinks';

/** Building blocks for inner pages in the new design. Styles live in site.css under the s- prefix. */

function Crumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="s-crumbs">
      {items.map((c, i) => (
        <Fragment key={c.label}>
          {i > 0 && <span aria-hidden="true">/</span>}
          {c.href ? <Link href={c.href}>{c.label}</Link> : <span>{c.label}</span>}
        </Fragment>
      ))}
    </nav>
  );
}

/**
 * Page hero: copy and the map video form on the left, a picture or facts on the right.
 * `form={false}` is for pages that should be read first. `formId` makes the hero form the page's #get-video target.
 */
export function PageHero({
  crumbs,
  kicker,
  title,
  lead,
  links,
  variant,
  searchHint,
  image,
  caption,
  side,
  form = true,
  formId,
}: {
  crumbs: { label: string; href?: string }[];
  kicker: string;
  title: ReactNode;
  lead?: ReactNode;
  links?: ReactNode;
  variant?: string;
  searchHint?: string;
  image?: { src: string; alt: string; title?: string; width: number; height: number };
  caption?: string;
  side?: ReactNode;
  form?: boolean;
  formId?: string;
}) {
  return (
    <section className="mrg-rise s-hero">
      <div className="s-wrap">
        <Crumbs items={crumbs} />
        <div className="s-hero-grid">
          <div className="s-hero-copy">
            <p data-rv="left" className="s-kicker s-kicker-dot"><span className="s-dot" />{kicker}</p>
            <h1 data-rv="up" data-d=".05" className="s-h1">{title}</h1>
            {lead && <div data-rv="up" data-d=".15" className="s-lead">{lead}</div>}
            {form && (
              <div id={formId} data-hero-form="" data-rv="up" data-d=".25" className="s-formbox">
                <LeadForm variant={variant ?? 'page'} hero searchHint={searchHint} />
              </div>
            )}
            {links && <div data-rv="up" data-d=".3" className="s-hero-links">{links}</div>}
          </div>
          {image && (
            <figure data-rv="scale" data-d=".3" className="s-hero-pic">
              <img src={image.src} alt={image.alt} title={image.title} width={image.width} height={image.height} fetchPriority="high" decoding="async" />
              {caption && <figcaption>{caption}</figcaption>}
            </figure>
          )}
          {side && <div data-rv="up" data-d=".3" className="s-hero-side">{side}</div>}
        </div>
      </div>
    </section>
  );
}

export function SectionHead({ kicker, title, lead, id, level = 2 }: { kicker?: string; title: ReactNode; lead?: ReactNode; id?: string; level?: 2 | 3 }) {
  const Tag = level === 3 ? 'h3' : 'h2';
  return (
    <div className="s-stack-sm s-head">
      {kicker && <p data-rv="left" className="s-kicker">{kicker}</p>}
      <Tag id={id} data-rv="up" className="s-h2">{title}</Tag>
      {lead && <div data-rv="up" data-d=".1" className="s-lead">{lead}</div>}
    </div>
  );
}

/** A row of headline numbers on black, like the proof strip on the homepage. */
export function FigureBand({ figures, label = 'Headline results' }: { figures: { figure: string; label: string }[]; label?: string }) {
  return (
    <section className="s-ink s-band-figures" aria-label={label}>
      <div className="s-wrap s-figures">
        {figures.map((h, i) => (
          <div key={h.label} data-rv="up" data-d={String(i * 0.08)}>
            <p className="s-figure-n">{h.figure}</p>
            <p className="s-figure-l">{h.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/** Text beside two screenshots, alternating sides. Images link to the full size file. */
export function ProofRows({ rows }: { rows: { title: string; body: string; images: { src: string; alt: string; title?: string }[] }[] }) {
  return (
    <div className="s-proofs">
      {rows.map((p, i) => (
        <div key={p.title} className={`s-proof${i % 2 ? ' s-proof-flip' : ''}`}>
          <div className="s-stack-sm" data-rv="up">
            <span className="s-col-k">{String(i + 1).padStart(2, '0')}</span>
            <h3 className="s-proof-t">{p.title}</h3>
            <p className="s-lead">{p.body}</p>
          </div>
          <div className="s-proof-imgs" data-rv="up" data-d=".1">
            {p.images.map((img) => (
              <a key={img.src} href={img.src} target="_blank" rel="noopener noreferrer" className="s-shot">
                <img src={img.src} alt={img.alt} title={img.title} loading="lazy" decoding="async" />
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/** Numbers from client accounts, large. */
export function BigStats({ kicker, stats }: { kicker: string; stats: { figure: string; label: string }[] }) {
  return (
    <div className="s-stats">
      <p data-rv="up" className="s-kicker">{kicker}</p>
      {stats.map((p, i) => (
        <div key={p.label} data-rv="up" data-d={String(i * 0.1)} className="s-stat">
          <p className={`s-stat-n${i === 0 ? ' s-accent' : ''}`}>{p.figure}</p>
          <p className="s-stat-l">{p.label}</p>
        </div>
      ))}
    </div>
  );
}

/** Numbered link rows, same as "Three things. Done properly." on the homepage. */
export function ServiceRows({ rows, level = 3, more = 'How it works →' }: { rows: { title: string; blurb: string; href: string }[]; level?: 2 | 3; more?: string }) {
  const Tag = level === 2 ? 'h2' : 'h3';
  return (
    <div className="s-rows">
      {rows.map((r, i) => (
        <Link key={r.href} data-rv="up" data-d={String(i * 0.1)} href={r.href} className="s-row">
          <span className="s-row-n">{String(i + 1).padStart(2, '0')}</span>
          <Tag className="s-row-t">{r.title}</Tag>
          <span className="s-row-b">{r.blurb}</span>
          <span className="s-row-more">{more}</span>
        </Link>
      ))}
    </div>
  );
}

export function FaqSection({ kicker, title, faqs }: { kicker?: string; title: ReactNode; faqs: { question: string; answer: string }[] }) {
  return (
    <section id="faq" className="s-sec s-sand" aria-labelledby="faq-heading">
      <div className="s-wrap s-narrow s-stack">
        {kicker && <p data-rv="left" className="s-kicker">{kicker}</p>}
        <h2 id="faq-heading" data-rv="up" className="s-h2">{title}</h2>
        <div className="s-faq">
          {faqs.map((f, i) => (
            <details key={f.question} data-rv="up" data-d={String(Math.min(i, 4) * 0.05)}>
              <summary><h3>{f.question}</h3><span aria-hidden="true">+</span></summary>
              <p>{f.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/** The closing map video form. Keeps the page's own heading, so the heading text stays indexed. */
export function CtaSection({ kicker, title, children, variant, searchHint, after }: { kicker?: string; title: ReactNode; children: ReactNode; variant: string; searchHint?: string; after?: ReactNode }) {
  return (
    <section id="get-video" data-final="" className="s-sec s-ink" aria-labelledby="cta-heading">
      <div className="s-wrap s-split">
        <div className="s-stack">
          {kicker && <p data-rv="left" className="s-kicker">{kicker}</p>}
          <h2 id="cta-heading" data-rv="up" className="s-h2">{title}</h2>
          <div data-rv="up" data-d=".1" className="s-lead">{children}</div>
          {after && <div data-rv="up" data-d=".15" className="s-small">{after}</div>}
        </div>
        <div data-rv="up" data-d=".15" className="s-split-form">
          <div className="s-formbox s-formbox-dark"><LeadForm variant={variant} searchHint={searchHint} /></div>
          <p className="s-small s-rather s-rather-c">
            Rather talk now? <a href={BUSINESS_INFO.bookingUrl}>Book a 30-minute call</a> or ring <a href={`tel:${BUSINESS_INFO.phoneFormatted}`}>{BUSINESS_INFO.phone}</a>
          </p>
        </div>
      </div>
    </section>
  );
}

/** Heading plus the full site link grid: the block that carries a page's internal links. */
export function LinksSection({ title, intro, current }: { title: string; intro?: string; current?: string }) {
  return (
    <section className="s-sec-sm s-sand" aria-labelledby="links-heading">
      <div className="s-wrap s-stack-lg">
        <div className="s-stack-sm">
          <h2 id="links-heading" data-rv="up" className="s-h3">{title}</h2>
          {intro && <p data-rv="up" data-d=".1" className="s-lead">{intro}</p>}
        </div>
        <SiteLinks current={current} />
      </div>
    </section>
  );
}
