import Link from 'next/link';
import SiteShell from '@/components/site/SiteShell';
import { CtaSection, FaqSection, LinksSection, PageHero, SectionHead } from '@/components/site/Blocks';
import type { ServicePage } from './services-data';

export interface ServiceImages {
  portrait: { src: string; alt: string };
  grid: { src: string; alt: string };
}

export default function ServicePageContent({ s, images }: { s: ServicePage; images: ServiceImages }) {
  const [firstIntro, ...restIntro] = s.intro;
  const variant = `service-${s.slug}`;

  return (
    <SiteShell>
      <PageHero
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services/' }, { label: s.name }]}
        kicker={s.eyebrow}
        title={s.h1}
        lead={<p>{firstIntro}</p>}
        variant={variant}
        image={{ ...images.portrait, title: images.portrait.alt, width: 1200, height: 960 }}
        caption="Mitchell Giles, MRG Marketing, Ormeau"
      />

      <section className="s-sec s-white">
        <div className="s-wrap s-split">
          <div data-rv="up" className="s-copy">
            {restIntro.map((p) => <p key={p.slice(0, 40)}>{p}</p>)}
          </div>
          <nav aria-label="On this page" className="s-stack-sm" data-rv="up" data-d=".1">
            <p className="s-kicker">On this page</p>
            <ul className="s-related">
              {s.sections.map((sec, i) => (
                <li key={sec.heading}><a href={`#s-${i}`}>{sec.heading} <span aria-hidden="true">↓</span></a></li>
              ))}
              <li><a href="#faq">Questions <span aria-hidden="true">↓</span></a></li>
            </ul>
          </nav>
        </div>
      </section>

      {s.video && (
        <section className="s-sec s-sand" aria-labelledby="video-heading">
          <div className="s-wrap s-split" style={{ alignItems: 'center' }}>
            <SectionHead kicker="In under a minute" id="video-heading" title={s.video.heading} />
            <div data-rv="scale" style={{ maxWidth: 340, width: '100%', margin: '0 auto' }}>
              <div className="s-framed s-vert">
                <iframe
                  src={`https://www.youtube.com/embed/${s.video.youtubeId}`}
                  title={s.video.name}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="s-sec s-white" aria-label="Article" style={{ paddingTop: s.video ? undefined : 0 }}>
        <div className="s-wrap s-arows">
          {s.sections.map((sec, i) => (
            <div key={sec.heading} id={`s-${i}`} className="s-arow">
              <h2 data-rv="up">{sec.heading}</h2>
              <div className="s-arow-b s-copy" data-rv="up" data-d=".08">
                {sec.paragraphs?.map((p) => <p key={p.slice(0, 40)}>{p}</p>)}
                {sec.bullets && (
                  <ul className="s-ticks">
                    {sec.bullets.map((b) => <li key={b}>{b}</li>)}
                  </ul>
                )}
                {sec.numbered && (
                  <ol className="s-nums">
                    {sec.numbered.map((b) => <li key={b}>{b}</li>)}
                  </ol>
                )}
                {i === 1 && s.table && (
                  <div className="s-scroll">
                    <table className="s-table">
                      <caption>{s.table.caption}</caption>
                      <thead>
                        <tr>{s.table.head.map((h, hi) => <th key={hi} scope="col">{h}</th>)}</tr>
                      </thead>
                      <tbody>
                        {s.table.rows.map((r, ri) => (
                          <tr key={ri}>{r.map((c, ci) => <td key={ci}>{c}</td>)}</tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {s.checklist && (
        <section className="s-sec s-ink">
          <div className="s-wrap s-stack-lg">
            <SectionHead kicker="Checklist" title={s.checklist.title} />
            <ul data-rv="up" className="s-boxes">
              {s.checklist.items.map((c) => <li key={c}>{c}</li>)}
            </ul>
          </div>
        </section>
      )}

      <section className="s-sec s-sand">
        <div className="s-wrap s-split">
          <figure data-rv="up" className="s-figure">
            <div className="s-framed">
              <img src={images.grid.src} alt={images.grid.alt} loading="lazy" decoding="async" />
            </div>
            <figcaption>A finished ranking grid: a Gold Coast plumber in the top 3 at 46 of 49 scan points, 1 October 2026. Every engagement starts and is measured with a scan like this.</figcaption>
          </figure>
          <div className="s-stack-sm" data-rv="up" data-d=".1">
            <p className="s-kicker">Related</p>
            <ul className="s-related">
              {s.related.map((r) => (
                <li key={r.href}><Link href={r.href}>{r.label} <span aria-hidden="true">→</span></Link></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <FaqSection kicker="Questions" title={`What people ask about ${s.name}.`} faqs={s.faqs} />

      <CtaSection title={<>Bring your numbers. <span className="s-accent">I will tell you what I would do with them.</span></>} variant={variant}>
        <p>Within 48 hours you get a short video of your own Google Maps position, street by street, and the three things I&apos;d fix first. If I can help, you get a plan. If I can&apos;t, I will say so and point you somewhere useful.</p>
      </CtaSection>

      <LinksSection
        title="Keep reading"
        intro="Every page on this site links to the rest of the job: the three services, the parts that make them up, the trades I write for, the suburbs I work in, and the proof."
        current={`/${s.slug}/`}
      />
    </SiteShell>
  );
}
