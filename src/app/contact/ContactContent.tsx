import { BUSINESS_INFO } from '@/lib/business-info';
import SiteShell from '@/components/site/SiteShell';
import { LinksSection, PageHero, SectionHead } from '@/components/site/Blocks';
import LocationMap from '@/components/LocationMap';

const WAYS = [
  {
    title: 'Book a 30-minute call',
    text: 'Pick a time that suits you. Tell me what you sell and what is not working. If I can help, you get a plan. If I can’t, I’ll say so.',
    href: BUSINESS_INFO.bookingUrl,
    label: 'Book a 30-minute call',
    primary: true,
    external: true,
  },
  {
    title: 'Call me',
    text: 'You get me, not a receptionist. If I am on a client call I will ring you back the same day.',
    href: `tel:${BUSINESS_INFO.phoneFormatted}`,
    label: BUSINESS_INFO.phone,
    primary: false,
    external: false,
  },
  {
    title: 'Email me',
    text: 'Send your business name and the suburb you work from. I reply within one business day, usually sooner.',
    href: `mailto:${BUSINESS_INFO.email}`,
    label: BUSINESS_INFO.email,
    primary: false,
    external: false,
  },
];

const STEPS = [
  {
    title: 'You tell me what you do and where',
    text: 'The service, the suburbs you want work from, and what is not happening right now: no calls, no Maps position, nothing from AI search.',
  },
  {
    title: 'I look at three things live',
    text: 'Your Google Business Profile, your website and the three businesses above you on the map. You see what I see on the screen.',
  },
  {
    title: 'You leave with a straight answer',
    text: 'What I would do first, roughly how long it takes, and whether it is worth doing at all. If I am not the right person I will tell you who is.',
  },
];

export default function ContactContent() {
  return (
    <SiteShell>
      <PageHero
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
        kicker="Contact"
        title={<>Contact MRG Marketing <span className="s-accent">in Ormeau</span></>}
        lead={<p>Three ways to reach me. The fastest is to book a time and we talk on the day. Every call is with me, Mitchell Giles, from {BUSINESS_INFO.address.full}.</p>}
        links={<a href={BUSINESS_INFO.bookingUrl} target="_blank" rel="noopener noreferrer">Book a 30-minute call →</a>}
        variant="contact"
        formId="get-video"
        image={{ src: '/images/home/mitchell-giles-local-seo-consultant-ormeau.webp', alt: 'Mitchell Giles, MRG Marketing, Ormeau', width: 920, height: 1150 }}
        caption="Mitchell Giles, Ormeau"
      />

      <section className="s-sec s-white" aria-labelledby="ways-heading">
        <div className="s-wrap s-stack-lg">
          <h2 id="ways-heading" className="sr-only">Ways to get in touch</h2>
          <div className="s-offers">
            {WAYS.map((w, i) => (
              <article key={w.title} data-rv="up" data-d={String(i * 0.1)} className="s-offer">
                <div className="s-offer-b">
                  <h3>{w.title}</h3>
                  <p style={{ flex: 1 }}>{w.text}</p>
                  <a href={w.href} className={`s-btn${w.primary ? '' : ' s-btn-ghost'}`} {...(w.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                    {w.label}
                  </a>
                </div>
              </article>
            ))}
          </div>
          <p data-rv="up" className="s-lead">
            {BUSINESS_INFO.address.full}. Visits are by appointment. Most first calls happen online, and if you are in Ormeau, Pimpama, Coomera, Yatala or Beenleigh I am happy to come to you.
          </p>
        </div>
      </section>

      <section className="s-sec s-ink" aria-labelledby="steps-heading">
        <div className="s-wrap s-stack-lg">
          <SectionHead kicker="What happens on the call" id="steps-heading" title={<>Thirty minutes, <span className="s-accent">no pitch.</span></>} />
          <div className="s-cols">
            {STEPS.map((s, i) => (
              <div key={s.title} data-rv="up" data-d={String(i * 0.1)} className="s-col s-col-dark">
                <span className="s-col-k">STEP {i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
          <p data-rv="up"><a href={BUSINESS_INFO.bookingUrl} target="_blank" rel="noopener noreferrer" className="s-btn">Book a 30-minute call →</a></p>
        </div>
      </section>

      <LocationMap />
      <LinksSection title="Everything else on this site" current="/contact/" />
    </SiteShell>
  );
}
