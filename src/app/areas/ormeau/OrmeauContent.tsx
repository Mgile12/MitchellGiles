import Link from 'next/link';
import { BUSINESS_INFO } from '@/lib/business-info';
import SiteShell from '@/components/site/SiteShell';
import { BigStats, CtaSection, FaqSection, LinksSection, PageHero, ServiceRows } from '@/components/site/Blocks';
import { SUBURBS } from '../suburbs';

// Google Business Profile: MRG Marketing, 9 Laverton St, Ormeau
const PLACE_ID = 'ChIJI7me_LgPkWsRiuaYKm_2oqc';

export const faqItems = [
  {
    question: 'Do you only work with businesses in Ormeau?',
    answer:
      "No. Ormeau is where I'm based, so it's where I know the map best. Most of my clients are between Beenleigh and Helensvale, and I work with businesses across the Gold Coast and Brisbane. If your customers are here, that's what matters.",
  },
  {
    question: 'How long until my business shows up on Google Maps around Ormeau?',
    answer:
      'It depends on your category, how many competitors sit inside a few kilometres of you, and how complete your profile is today. Some profiles move within days once the basics are fixed. I plan on 90 days and tell you on the call what I think is realistic for yours.',
  },
  {
    question: 'Do I need a website to rank on Google Maps?',
    answer:
      "You can show up on Maps with a strong profile alone, but a website that names your services and your area is what keeps you there and turns a search into a call. If you don't have one, I'll tell you the cheapest sensible version, not the most expensive.",
  },
  {
    question: 'Which areas around Ormeau do you cover?',
    answer:
      'Ormeau Hills, Yatala, Pimpama, Coomera, Upper Coomera, Helensvale, Oxenford, and up to Beenleigh and Logan. Most searches in this corridor happen on a phone in a car, so the work is about where your customers are when they search, not just where your shed is.',
  },
  {
    question: 'Do you work with tradies?',
    answer:
      'Mostly, yes. Trades and local services are the bulk of my clients, because Google Maps is the cheapest source of customers they will ever get. I also do the same work white-label for other agencies.',
  },
  {
    question: 'What happens on the 30-minute call?',
    answer:
      "You tell me what you sell and what's not working. I look at your profile, your site and the three businesses above you on the map. If I can help, you get a plan. If I can't, I'll say so and point you somewhere useful.",
  },
  {
    question: 'Can we meet in person?',
    answer:
      "Yes. I'm based in Ormeau and I come to you. Site visits anywhere from Beenleigh to Helensvale are part of the job, or we can do it on a call if that's easier.",
  },
];

const servicesHere = [
  { title: 'Google Business Profile', blurb: 'Top 3 on Maps for the searches that happen within a few kilometres of you.', href: '/google-business-profile-gold-coast/' },
  { title: 'Local SEO', blurb: 'A page for every service and every suburb you serve, so Google has something to rank.', href: '/best-local-seo-expert-in-gold-coast/' },
  { title: 'AI Search (GEO)', blurb: 'Named when someone in the corridor asks ChatGPT or Google AI who to call.', href: '/ai-search-geo-gold-coast/' },
];

const nearby = ['Ormeau Hills', 'Yatala', 'Pimpama', 'Coomera', 'Upper Coomera', 'Helensvale', 'Oxenford', 'Beenleigh'];

const STEPS = [
  {
      n: '01',
      title: 'Your Google Business Profile, before anything else',
      text:
        'The map pack around Ormeau shifts kilometre by kilometre. The right primary category, a full services list, photos from real jobs and a steady run of reviews move a profile more than any website change. It is also the cheapest source of customers a local business will ever have.',
      href: '/google-business-profile-gold-coast',
      cta: 'Google Business Profile',
    },
    {
      n: '02',
      title: 'A site that names your services and your suburbs',
      text:
        'Google needs something to rank. A page for each thing you do and each area you serve, written properly, with your name, address and phone on every one of them. This page is that, for me. Your version is what I build for you.',
      href: '/best-local-seo-expert-in-gold-coast',
      cta: 'Local SEO',
    },
    {
      n: '03',
      title: 'AI search for the corridor, not the whole coast',
      text:
        'When someone in Pimpama or Coomera asks ChatGPT or Google AI for a plumber, a detailer or a physio, the answer comes from the same signals Maps uses: a consistent business record, a profile that matches the website, and proof the models can read. I tune those so the answer is you.',
      cta: 'AI Search',
      href: '/ai-search-geo-gold-coast',
    },
];

const STATS = [
  { figure: '89', label: 'calls in five months from one Business Profile, up 324% on the same months last year' },
  { figure: '266', label: 'calls in five months from another, up 23% on last year' },
  { figure: '2', label: 'days for one profile to go from page two to the top 3 on Maps' },
];

export default function OrmeauContent() {
  return (
    <SiteShell>
      <PageHero
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Areas we serve', href: '/areas/' }, { label: 'Ormeau' }]}
        kicker="Ormeau, northern Gold Coast"
        title={<>Local SEO for <span className="s-accent">Ormeau businesses</span></>}
        lead={
          <p>
            I run an internet marketing service based at {BUSINESS_INFO.address.street}, Ormeau. If you run a business here, in Ormeau Hills, or anywhere along the M1 between Yatala and Coomera, this page is what works in this corridor, what doesn&apos;t, and what I&apos;d do first.
          </p>
        }
        variant="area-ormeau"
        searchHint="e.g. plumber Ormeau"
        image={{ src: '/images/home/mitchell-giles-local-seo-consultant-ormeau.webp', alt: 'Mitchell Giles, MRG Marketing, Ormeau', width: 920, height: 1150 }}
        caption="Mitchell Giles, Ormeau"
      />

      <section className="s-sec s-ink" aria-labelledby="ormeau-heading">
        <div className="s-wrap s-split">
          <div className="s-stack">
            <p data-rv="left" className="s-kicker">The place</p>
            <h2 id="ormeau-heading" data-rv="up" className="s-h2">Ormeau, from someone <span className="s-accent">who lives here.</span></h2>
            <div data-rv="up" data-d=".1" className="s-lead">
              <p>
                Ormeau sits on the M1 at the top of the Gold Coast, with the Yatala industrial area on one side and the Pimpama and Coomera growth corridor on the other. It is one of the fastest-growing stretches in South East Queensland, which means two things for a business here: there are more customers every year, and there are more competitors every year.
              </p>
              <p>
                Most of the businesses around here are trades, transport, automotive, fitness, allied health and home services. Their customers are spread from Beenleigh down to Helensvale, and they search from a phone, usually in a car, usually with &quot;near me&quot; on the end. Google answers those searches with the map first, and the map is decided by proximity, reviews and how complete a profile is. That is why so much of my work in Ormeau starts with Google Maps and not with a website.
              </p>
              <p>
                The agencies you will find when you search for marketing help on the Gold Coast are in Nerang, Burleigh and Brisbane. I am in Ormeau. I know which suburbs a Coomera plumber actually gets calls from, why a Yatala workshop should not be chasing Surfers Paradise, and how far a Pimpama gym&apos;s map ranking really reaches. That is not a slogan, it is the difference between a profile that ranks in your own suburb and one that ranks where your customers are.
              </p>
              <p>
                If we work together, it looks like this. We start with a look at the three businesses above you on the map. Then I fix the profile, build the pages your services and suburbs need, and only then spend money on ads. You deal with me, not an account manager. You get an update every Friday, and anything in between is answered the same day. Most of my Ormeau work is ongoing, because a map ranking is held, not won once.
              </p>
            </div>
          </div>
          <div className="s-stack">
            <BigStats kicker="From client profiles" stats={STATS} />
            <p data-rv="up"><Link href="/google-business-profile-gold-coast/" style={{ fontWeight: 700 }}>See the screenshots and heatmaps →</Link></p>
          </div>
        </div>
      </section>

      <section className="s-sec s-sand" aria-labelledby="found-heading">
        <div className="s-wrap s-stack-lg">
          <div className="s-stack-sm">
            <p data-rv="left" className="s-kicker">What works here</p>
            <h2 id="found-heading" data-rv="up" className="s-h2">Three things get an <span className="s-accent">Ormeau business found.</span></h2>
            <p data-rv="up" data-d=".1" className="s-lead">In this order, most of the time. I&apos;ll tell you if your situation is the exception.</p>
          </div>
          <div className="s-cols">
            {STEPS.map((step, i) => (
              <div key={step.n} data-rv="up" data-d={String(i * 0.1)} className="s-col">
                <span className="s-col-k">{step.n}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
                <Link href={step.href} style={{ fontWeight: 800 }}>{step.cta} →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mitchell on getting into the Maps top 3 (YouTube Short, 20 Oct 2026). VideoObject schema is in page.tsx. */}
      <section className="s-sec s-white" aria-labelledby="video-heading">
        <div className="s-wrap s-split" style={{ alignItems: 'center' }}>
          <div className="s-stack">
            <p data-rv="left" className="s-kicker">In 54 seconds</p>
            <h2 id="video-heading" data-rv="up" className="s-h2">How an Ormeau business gets into the <span className="s-accent">Google Maps top 3.</span></h2>
          </div>
          <div data-rv="scale" style={{ maxWidth: 340, margin: '0 auto', width: '100%' }}>
            <div className="s-framed" style={{ position: 'relative', paddingTop: '177.78%', background: '#111110' }}>
              <iframe
                src="https://www.youtube.com/embed/JS08Od_TN-g"
                title="SEO Ormeau: How to Get Into the Google Maps Top 3"
                style={{ position: 'absolute', inset: 0, height: '100%' }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services-here" className="s-sec s-sand" aria-labelledby="services-here-heading">
        <div className="s-wrap s-stack-lg">
          <div className="s-stack-sm">
            <p data-rv="left" className="s-kicker">Services in Ormeau</p>
            <h2 id="services-here-heading" data-rv="up" className="s-h2">Three things I do for <span className="s-accent">businesses here.</span></h2>
            <p data-rv="up" data-d=".1" className="s-lead">Not sure which one you need? Your map video will show you.</p>
          </div>
          <ServiceRows rows={servicesHere} />
        </div>
      </section>

      <section className="s-sec s-white" aria-labelledby="where-heading">
        <div className="s-wrap s-split">
          <div className="s-stack">
            <p data-rv="left" className="s-kicker">Where I am</p>
            <h2 id="where-heading" data-rv="up" className="s-h2">Ten minutes from <span className="s-accent">most of you.</span></h2>
            <address data-rv="up" className="s-address">
              <span>{BUSINESS_INFO.legalName}</span>
              <span>{BUSINESS_INFO.address.full}</span>
              <a href={`tel:${BUSINESS_INFO.phoneFormatted}`}>{BUSINESS_INFO.phone}</a>
              <a href={`mailto:${BUSINESS_INFO.email}`}>{BUSINESS_INFO.email}</a>
              <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS_INFO.legalName)}&query_place_id=${PLACE_ID}`} target="_blank" rel="noopener noreferrer">Open in Google Maps</a>
            </address>
            <p data-rv="up" data-d=".1" className="s-lead">
              I work from Ormeau and come to you. Site visits anywhere between Beenleigh and Helensvale are part of the job, and Brisbane or the southern Gold Coast are a call first.
            </p>
            <div className="s-stack-sm">
              <p data-rv="left" className="s-kicker">Nearby areas</p>
              <ul data-rv="up" className="s-chips">
                {nearby.map((area) => {
                  const hit = SUBURBS.find((x) => x.name === area);
                  return <li key={area}>{hit?.hasPage ? <Link href={`/areas/${hit.slug}/`}>{area}</Link> : <span>{area}</span>}</li>;
                })}
              </ul>
              <p data-rv="up"><Link href="/areas/" style={{ fontWeight: 700 }}>All areas I serve →</Link></p>
            </div>
          </div>
          <div data-rv="up" className="s-framed" style={{ height: 'clamp(300px,45vw,440px)' }}>
            {/* Keyless embed resolves a name + address query to the listing; place_id queries only work with the keyed Embed API */}
            <iframe
              src={`https://www.google.com/maps?q=${encodeURIComponent(`${BUSINESS_INFO.legalName}, ${BUSINESS_INFO.address.full}`)}&z=15&output=embed`}
              width="100%"
              height="100%"
              style={{ height: '100%' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="MRG Marketing on Google Maps, 9 Laverton St, Ormeau"
            />
          </div>
        </div>
      </section>

      <FaqSection kicker="Questions from Ormeau" title={<>What business owners here <span className="s-accent">ask me.</span></>} faqs={faqItems} />

      <CtaSection
        title={<>Bring your numbers. <span className="s-accent">I&apos;ll tell you what I&apos;d do with them.</span></>}
        variant="area-ormeau"
        searchHint="e.g. plumber Ormeau"
      >
        <p>From Ormeau, within 48 hours: a short video of your own Google Maps position, street by street, and the three things I&apos;d fix first. If I can help, you get a plan. If I can&apos;t, I&apos;ll say so.</p>
      </CtaSection>

      <LinksSection
        title="More for Ormeau businesses"
        intro="The services, the parts of the job, the trade guides, the other suburbs I work in, and the proof behind all of it."
        current="/areas/ormeau/"
      />
    </SiteShell>
  );
}
