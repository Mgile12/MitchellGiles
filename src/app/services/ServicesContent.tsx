import Link from 'next/link';
import { BUSINESS_INFO } from '@/lib/business-info';
import SiteShell from '@/components/site/SiteShell';
import { CtaSection, LinksSection, PageHero, SectionHead, ServiceRows } from '@/components/site/Blocks';
import Industries from '@/components/Industries';
import Offers from '@/components/Offers';

const services = [
  {
    title: 'Google Business Profile Optimisation',
    description:
      'Categories, services, photos, reviews, posts and the website behind the profile, fixed once and then worked every week, so you sit in the top 3 on Google Maps for the searches that happen near you and stay there.',
    href: '/google-business-profile-gold-coast',
  },
  {
    title: 'Local SEO',
    description:
      'A page for every service and every suburb you serve, written for what people here actually type. It is what gives the profile something to rank for and what turns a Maps search into a call.',
    href: '/best-local-seo-expert-in-gold-coast',
  },
  {
    title: 'AI Search (GEO)',
    description:
      'When someone asks ChatGPT, Gemini or Google AI who to call, the answer is built from the same local signals: a consistent business record, a profile that matches the website, and proof the models can read. I tune all three so your business is the one that gets named.',
    href: '/ai-search-geo-gold-coast',
  },
];

const supporting = [
  { title: 'SEO for tradies', description: 'Why trades win or lose on Maps, the five things that decide a tradie’s position, and the numbers from plumbers.', href: '/seo-for-tradies-gold-coast' },
  { title: 'Google Maps ranking', description: 'How the top 3 is decided, why your rank changes street by street, and how a ranking grid measures it.', href: '/google-maps-ranking-gold-coast' },
  { title: 'Review management', description: 'A request system that gets reviews every week, replies that help ranking, and what to do about unfair ones.', href: '/review-management-gold-coast' },
  { title: 'Local citations and directory listings', description: 'Which Australian directories matter, and making your name, address and phone identical everywhere.', href: '/local-citations-gold-coast' },
  { title: 'Local SEO audit', description: 'What the audit covers, what the report looks like, and the eight problems I find most on the Gold Coast.', href: '/local-seo-audit-gold-coast' },
];

const trades = [
  { title: 'SEO for plumbers', description: 'The profile set-up for “plumber near me”, the pages a plumbing site needs, and two plumbers’ numbers.', href: '/seo-for-plumbers' },
  { title: 'SEO for electricians', description: 'Urgent versus planned electrical searches, and the switchboard, EV and solar pages that win quotes.', href: '/seo-for-electricians' },
  { title: 'SEO for builders', description: 'Fewer searches, bigger jobs: project pages, process, honest cost guides and the Remodeler category.', href: '/seo-for-builders' },
];

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description:
      "We talk. I want to know what you sell, who buys it, what you've tried and what you actually want out of this. I take it away. Nothing gets pitched on the first call.",
  },
  {
    number: '02',
    title: 'Market research',
    description:
      'I look at your local competitors, then the top operators nationally, then globally. Businesses that have spent millions working out what converts. I bring that standard back to your suburb.',
  },
  {
    number: '03',
    title: 'Your best customers',
    description:
      'I speak to your best current and past customers. They tell me why they chose you, in words your website has never used.',
  },
  {
    number: '04',
    title: 'Team review',
    description:
      'Everything I produce goes past my team, one by one, before you see it. Each review is reviewed. It is slower, and it is why the work holds up.',
  },
  {
    number: '05',
    title: 'Offer and channel',
    description:
      "We sharpen the offer and pick the channel that fits it. You might be certain it's your website. Often it's the profile.",
  },
  {
    number: '06',
    title: 'Launch, then cut fast',
    description:
      "We run it, watch it, and cut what doesn't work quickly. Budget goes where the results are, not where the plan said.",
  },
  {
    number: '07',
    title: 'Every Friday',
    description:
      'You get an update from me every Friday. Any message during the week is answered within two hours.',
  },
];

function Cards({ items }: { items: { title: string; description: string; href: string }[] }) {
  return (
    <div className="s-cards">
      {items.map((item, i) => (
        <Link key={item.href} data-rv="up" data-d={String(Math.min(i, 3) * 0.08)} href={item.href} className="s-card">
          <h3>{item.title}</h3>
          <span className="s-card-b">{item.description}</span>
          <span className="s-card-more">Read →</span>
        </Link>
      ))}
    </div>
  );
}

export default function ServicesContent() {
  return (
    <SiteShell>
      <PageHero
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }]}
        kicker="All services"
        title={<>Local SEO &amp; Google Business Profile, <span className="s-accent">Gold Coast</span></>}
        lead={<p>Local SEO, Google Business Profile optimisation and AI search are the job. The pages below explain each part of it, and how it plays out for the trades I work with most.</p>}
        variant="services-hub"
        image={{ src: '/images/home/mitchell-giles-local-seo-consultant-ormeau.webp', alt: 'Mitchell Giles, MRG Marketing, Ormeau', width: 920, height: 1150 }}
        caption="Mitchell Giles, Ormeau"
      />

      <section className="s-sec s-white">
        <div className="s-wrap s-stack-lg">
          <ServiceRows level={2} more="Learn more →" rows={services.map((s) => ({ title: s.title, blurb: s.description, href: s.href }))} />
          <div className="s-stack">
            <SectionHead title="Supporting pages" lead={<p>The parts of the job, each explained on its own page.</p>} />
            <Cards items={supporting} />
          </div>
          <div className="s-stack">
            <SectionHead title="By trade" lead={<p>The same method, written for the trades I work with most.</p>} />
            <Cards items={trades} />
          </div>
        </div>
      </section>

      <section id="services" className="s-sec s-ink" aria-labelledby="process-heading">
        <div className="s-wrap s-stack-lg">
          <SectionHead kicker="The process" id="process-heading" level={3} title="How working with me goes" lead={<p>No packages, no tiers. Seven steps, in the order they actually happen.</p>} />
          <div className="s-cols">
            {steps.map((step, i) => (
              <div key={step.number} data-rv="up" data-d={String(Math.min(i, 3) * 0.08)} className="s-col s-col-dark">
                <span className="s-col-k">{step.number}</span>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Industries />
      <Offers />

      <section className="s-sec s-white">
        <div className="s-wrap s-stack-lg">
          <SectionHead kicker="Location" title="Based in Ormeau" lead={<p>North end of the Gold Coast, half an hour from Brisbane. I work with businesses across both, and most of it happens over the phone and on site with you.</p>} />
          <div data-rv="up" className="s-framed" style={{ height: 'clamp(300px,45vw,450px)' }}>
            <iframe
              src={`https://www.google.com/maps?q=${encodeURIComponent(`${BUSINESS_INFO.address.full}, Australia`)}&z=14&output=embed`}
              width="100%"
              height="100%"
              style={{ height: '100%' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`MRG Marketing, ${BUSINESS_INFO.address.full}, on Google Maps`}
            />
          </div>
        </div>
      </section>

      <CtaSection title={<>Not sure <span className="s-accent">where to start?</span></>} variant="services-hub">
        <p>Tell me what you sell and the search you want to win. Within 48 hours I will send you a short video of where you stand, tell you where I would start, and recommend exactly where to focus first.</p>
      </CtaSection>

      <LinksSection title="Where I do this, and the proof" current="/services/" />
    </SiteShell>
  );
}
