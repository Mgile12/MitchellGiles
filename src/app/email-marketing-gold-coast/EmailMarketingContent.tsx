import Link from 'next/link';
import { BUSINESS_INFO } from '@/lib/business-info';
import SiteShell from '@/components/site/SiteShell';
import { CtaSection, FaqSection, LinksSection, PageHero, SectionHead } from '@/components/site/Blocks';

const benefits = [
  {
    title: 'Builds Relationships',
    description: 'Stay top-of-mind with past clients and warm leads without relying on algorithms.',
  },
  {
    title: 'Reduces Paid Ad Reliance',
    description: 'Generate revenue from your existing database instead of paying for every click.',
  },
  {
    title: 'Increases Lifetime Value',
    description: 'Turn one-time buyers into repeat customers through targeted follow-up sequences.',
  },
  {
    title: 'Smooths Seasonal Dips',
    description: 'Keep cash flow consistent through quieter months with strategic campaigns.',
  },
];

const stats = [
  { metric: '63.4%', label: 'of one store’s monthly revenue from email, in a 30-day window' },
  { metric: '72%', label: 'open rate on one campaign to a list the client already had' },
  { metric: '$60,632', label: 'attributed to email in 30 days, from the store’s own list' },
];

const results = [
  {
    figure: '$60,632',
    label: 'from email in 30 days, 63.4% of the store’s revenue that month',
    href: '/case-studies/email-marketing-60k-in-30-days',
    img: { src: '/images/email-marketing-gold-coast/email-marketing-gold-coast-60632-dollars-from-email-in-30-days.webp', alt: 'email marketing gold coast: $60,632 attributed to email in 30 days, 63.4% of store revenue' },
  },
  {
    figure: '72%',
    label: 'open rate and 10.3% click rate on one campaign to a list the client already had',
    href: '/case-studies/email-campaign-72-percent-open-rate',
    img: { src: '/images/email-marketing-gold-coast/email-marketing-gold-coast-72-percent-open-rate-campaign.webp', alt: 'email marketing gold coast: 72% open rate and 10.3% click rate on one email campaign' },
  },
  {
    figure: '$82,574',
    label: 'in under three hours from a launch sequence to an event waitlist, no ads, done twice',
    href: '/case-studies/event-waitlist-launch-sequence-82k',
    img: { src: '/images/email-marketing-gold-coast/email-marketing-gold-coast-82574-dollars-event-launch-sequence.webp', alt: 'email marketing gold coast: $82,574 in sales from a launch sequence to an event waitlist, 31 orders' },
  },
];

const pillars = [
  {
    number: '01',
    title: 'Strategy & Planning',
    points: [
      'Define your audience segments and buying triggers',
      'Map the customer journey from first touch to repeat purchase',
      'Set measurable goals tied to revenue, not vanity metrics',
      'Build a content calendar aligned with business objectives',
    ],
  },
  {
    number: '02',
    title: 'Database Growth',
    points: [
      'Grow your list with lead magnets that attract qualified prospects',
      'Implement sign-up forms and landing pages that convert',
      'Clean and segment your existing database for better targeting',
      'Build referral and re-engagement paths to recover lost contacts',
    ],
  },
  {
    number: '03',
    title: 'Automation Systems',
    points: [
      'Welcome sequences that convert subscribers into customers',
      'Abandoned cart and follow-up flows that recover lost sales',
      'Post-purchase sequences that drive reviews and repeat orders',
      'Re-engagement campaigns that reactivate dormant contacts',
    ],
  },
  {
    number: '04',
    title: 'Campaign Management',
    points: [
      'Regular campaigns with conversion-focused copywriting',
      'A/B testing subject lines, send times, and content layouts',
      'Seasonal and promotional campaigns timed to your business cycle',
      'Personalised content based on customer behaviour and preferences',
    ],
  },
  {
    number: '05',
    title: 'Reporting & Optimisation',
    points: [
      'Monthly performance reports in plain language',
      'Track open rates, click rates, conversions, and revenue attribution',
      'Identify what is working and cut what is not',
      'Continuous improvement based on real data, not assumptions',
    ],
  },
];

const serviceTypes = [
  { business: 'Trades & services', strategy: 'Automated follow-ups, seasonal reminders, quote nurture sequences' },
  { business: 'Real estate', strategy: 'Market updates, listing alerts, long-term database nurturing' },
  { business: 'E-commerce', strategy: 'Cart recovery, post-purchase flows, product launch campaigns' },
  { business: 'Hospitality & tourism', strategy: 'Event promotion, seasonal offers, loyalty and repeat visit campaigns' },
  { business: 'Event organisers', strategy: 'Ticket sales funnels, countdown sequences, post-event follow-ups' },
];

const industries = [
  {
    title: 'Trades & Home Services',
    description:
      'Automated follow-ups after quotes, seasonal maintenance reminders, and referral prompts that keep your calendar full without chasing leads.',
  },
  {
    title: 'Professional Services',
    description:
      'Build trust and authority with educational content sequences. Stay top-of-mind so when prospects are ready to buy, you are the first call.',
  },
  {
    title: 'Hospitality & Tourism',
    description:
      'Stabilise seasonal revenue with targeted promotions, event announcements, and loyalty campaigns that drive repeat visits year-round.',
  },
  {
    title: 'Real Estate',
    description:
      'Database marketing at scale. Market updates, new listing alerts, and long-term nurture sequences that keep you top-of-mind across buying cycles.',
  },
  {
    title: 'Event-Based Businesses',
    description:
      'Ticket sales funnels, countdown email sequences, waitlist campaigns, and post-event follow-ups that maximise attendance and lifetime value.',
  },
];

const whatToAsk = [
  'Do they build strategy around your specific business goals?',
  'Can they show measurable results from previous clients?',
  'Do they handle automation, not just one-off campaigns?',
  'Will you get clear reporting tied to revenue?',
  'Do they understand the Gold Coast market?',
];

const redFlags = [
  'No strategy discussion before quoting',
  'Promising specific open rates without seeing your data',
  'No mention of segmentation or automation',
  'Charging per email instead of per outcome',
];

const checklistItems = [
  'Do you have a defined email marketing strategy?',
  'Are your campaigns segmented by audience behaviour?',
  'Do you have at least one active automation sequence?',
  'Can you track revenue generated from email?',
  'Are you growing your list with intentional lead capture?',
];

const benchmarks = [
  { metric: 'Open Rate', range: '20 - 40%' },
  { metric: 'Click Rate', range: '2 - 8%' },
  { metric: 'Conversion Rate', range: '1 - 5%' },
  { metric: 'Unsubscribe Rate', range: 'Under 0.5%' },
];

const integrations = [
  {
    title: 'SEO Traffic Conversion',
    href: '/best-local-seo-expert-in-gold-coast',
    description:
      'Capture organic visitors with targeted lead magnets and convert them into email subscribers. Turn search traffic into a retargetable audience.',
  },
  {
    title: 'CRM Automation',
    href: 'https://calendar.notion.com/meet/mitchellgiles134/tovi31rm',
    description:
      'Connect email directly to your CRM so sales teams get warm leads with full context. No manual handoffs, no dropped follow-ups.',
  },
  {
    title: 'Lead Qualification',
    href: '/google-business-profile-gold-coast',
    description:
      'Score and segment leads based on email behaviour, and send the customers who found you on Maps a review request while the job is fresh.',
  },
];

const examples = [
  'Someone finds the business on Google Maps and books once. A post-job sequence asks for the review, then brings them back next season.',
  'An SEO blog post ranks locally. The reader downloads a guide. Email automation nurtures them for 30 days. They book a call.',
  'A past customer receives a re-engagement sequence. They click through. A personalised offer brings them back for a repeat purchase.',
];

interface FAQItem {
  question: string;
  answer: string;
}

const Pic = ({ src, alt }: { src: string; alt: string }) => (
  <div data-rv="up" className="s-framed"><img src={src} alt={alt} loading="lazy" decoding="async" /></div>
);

export default function EmailMarketingContent({ faqItems }: { faqItems: FAQItem[] }) {
  return (
    <SiteShell>
      <PageHero
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Email Marketing Gold Coast' }]}
        kicker="Email Marketing Services"
        title={<>Email Marketing Gold Coast <span className="s-accent" style={{ display: 'block', fontSize: '.5em', lineHeight: 1.05, marginTop: 10 }}>Strategic Campaigns &amp; Automation That Drive Revenue</span></>}
        lead={<><p>&ldquo;Email is dead.&rdquo;</p><p>It is not. What is dead is lazy, batch-and-blast email with no strategy behind it. Done well, email marketing remains one of the highest-returning channels available to any Gold Coast business -- whether you are a tradie, a property agent, a hospitality venue, or a professional service provider.</p></>}
        links={<a href="#why-email">See What This Involves ↓</a>}
        variant="service-email-marketing"
        image={{ src: '/email/email-marketing-hero.jpg', alt: 'Team planning email marketing strategy for Gold Coast business', width: 500, height: 500 }}
      />

      <section id="why-email" className="s-sec s-white">
        <div className="s-wrap s-stack-lg">
          <SectionHead
            kicker="Why Email Works Here"
            title="Why Email Marketing Still Wins on the Gold Coast"
            lead={<p>The Gold Coast is one of the most competitive local markets in Australia. High competition, seasonal tourism swings, a strong SME presence, and customers who expect repeat value -- this is exactly the environment where email marketing delivers the strongest returns.</p>}
          />
          <div className="s-split">
            <div className="s-cols">
              {benefits.map((b, i) => (
                <div key={b.title} data-rv="up" data-d={String(i * 0.08)} className="s-col">
                  <h3>{b.title}</h3>
                  <p>{b.description}</p>
                </div>
              ))}
            </div>
            <Pic src="/email/email-marketing-why.jpg" alt="Gold Coast business owner reviewing email campaign analytics and performance data" />
          </div>
          <div className="s-figures">
            {stats.map((s, i) => (
              <div key={s.metric} data-rv="up" data-d={String(i * 0.08)}>
                <p className="s-figure-n" style={{ color: '#2F6BFF' }}>{s.metric}</p>
                <p className="s-stat-l">{s.label}</p>
              </div>
            ))}
          </div>
          <p data-rv="up" className="s-lead">
            Unlike social media, where reach is dictated by algorithms and ad spend, your email list is an <strong>owned asset</strong>. No platform changes can take it away. That makes it one of the most reliable growth channels available to any Gold Coast business.
          </p>
        </div>
      </section>

      <section className="s-sec s-sand" aria-labelledby="email-results-heading">
        <div className="s-wrap s-stack-lg">
          <SectionHead
            kicker="Email case studies"
            id="email-results-heading"
            title={<>Three email results, <span className="s-accent">with the screenshots.</span></>}
            lead={<p>Each one is written up with the work, the period, how it was measured and what the number cannot prove.</p>}
          />
          <div className="s-cards">
            {results.map((r, i) => (
              <Link key={r.href} data-rv="up" data-d={String(i * 0.08)} href={`${r.href}/`} className="s-card">
                <img src={r.img.src} alt={r.img.alt} loading="lazy" decoding="async" className="s-card-img" />
                <span className="s-case-big">{r.figure}</span>
                <span className="s-card-b">{r.label}</span>
                <span className="s-card-more">Read the case study →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="s-sec s-ink">
        <div className="s-wrap s-stack-lg">
          <SectionHead
            kicker="The Service"
            title="What Gold Coast Email Marketing Actually Involves"
            lead={<p>Most people think email marketing is sending a newsletter once a month. It is not. A proper email marketing service covers five core pillars -- each one contributing to measurable business growth.</p>}
          />
          <div className="s-cols">
            {pillars.map((p, i) => (
              <div key={p.number} data-rv="up" data-d={String(Math.min(i, 3) * 0.08)} className="s-col s-col-dark">
                <span className="s-col-k">{p.number}</span>
                <h3>{p.title}</h3>
                <ul className="s-ticks">
                  {p.points.map((pt) => <li key={pt}>{pt}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <p data-rv="up" className="s-callout-line">Without these layers, email becomes noise. <span className="s-accent">With them, it becomes revenue.</span></p>
        </div>
      </section>

      <section className="s-sec s-white">
        <div className="s-wrap s-stack-lg">
          <SectionHead title="Types of Email Marketing Services Gold Coast Businesses Use" lead={<p>Different businesses need different approaches. Here is what works for each.</p>} />
          <div data-rv="up" className="s-scroll">
            <table className="s-table">
              <thead><tr><th scope="col">Business Type</th><th scope="col">Most Effective Strategy</th></tr></thead>
              <tbody>
                {serviceTypes.map((r) => <tr key={r.business}><td>{r.business}</td><td>{r.strategy}</td></tr>)}
              </tbody>
            </table>
          </div>
          <Pic src="/email/email-marketing-services.jpg" alt="Laptop showing email automation workflow for Gold Coast business" />
        </div>
      </section>

      <section className="s-sec s-sand">
        <div className="s-wrap s-stack-lg">
          <SectionHead kicker="Industry Focus" title="Local Gold Coast Industries That Benefit Most" lead={<p>Email marketing works across industries, but the strategy must fit the business. Here is how we approach each.</p>} />
          <div className="s-cols">
            {industries.map((x, i) => (
              <div key={x.title} data-rv="up" data-d={String(Math.min(i, 3) * 0.08)} className="s-col">
                <h3>{x.title}</h3>
                <p>{x.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="s-sec s-white">
        <div className="s-wrap s-stack-lg">
          <SectionHead kicker="Choosing Right" title="Choosing the Right Gold Coast Email Marketing Services" lead={<p>Hiring someone to &ldquo;send emails&rdquo; is not the same as hiring someone to build a revenue channel. Here is what to look for -- and what to avoid.</p>} />
          <div className="s-split">
            <div className="s-col" data-rv="up">
              <h3>What to Ask</h3>
              <ul className="s-ticks s-copy">{whatToAsk.map((x) => <li key={x}>{x}</li>)}</ul>
            </div>
            <div className="s-col" data-rv="up" data-d=".1">
              <h3>Red Flags</h3>
              <ul className="s-ticks s-copy">{redFlags.map((x) => <li key={x}>{x}</li>)}</ul>
            </div>
          </div>
          <div className="s-split" style={{ alignItems: 'center' }}>
            <Pic src="/email/email-marketing-choosing.jpg" alt="Email marketing strategy planning session in a Gold Coast office" />
            <div data-rv="up" className="s-callout">
              <p><strong>Prioritise strategy over frequency.</strong> One well-targeted email per week will outperform five generic blasts. The right provider will focus on building a system that generates revenue, not just filling inboxes.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="s-sec s-sand">
        <div className="s-wrap s-stack-lg">
          <SectionHead kicker="Self-Assessment" title="Practical Email Marketing Checklist for Managers" lead={<p>Before you hire anyone, audit what you already have. Answer these five questions honestly.</p>} />
          <div className="s-split">
            <div className="s-stack">
              <ul data-rv="up" className="s-boxes" style={{ gridTemplateColumns: '1fr' }}>{checklistItems.map((x) => <li key={x}>{x}</li>)}</ul>
              <div data-rv="up" className="s-callout"><p>If you answered <strong>no to 3 or more</strong>, there is immediate opportunity to improve your email marketing performance and recover lost revenue.</p></div>
            </div>
            <div data-rv="up" className="s-box">
              <h3 style={{ margin: 0, fontWeight: 800, fontSize: 20 }}>Performance Benchmarks</h3>
              <p style={{ margin: '4px 0 12px', color: '#55534d', fontSize: 14 }}>Healthy ranges for Gold Coast businesses</p>
              <table className="s-table s-table-end">
                <thead><tr><th scope="col">Metric</th><th scope="col">Healthy Range</th></tr></thead>
                <tbody>{benchmarks.map((r) => <tr key={r.metric}><td>{r.metric}</td><td>{r.range}</td></tr>)}</tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="s-sec s-white">
        <div className="s-wrap s-stack-lg">
          <SectionHead kicker="Full-Stack Approach" title="How Email Integrates With Your Broader Strategy" lead={<p>Email does not exist in isolation. It amplifies every other channel and creates compounding returns when connected to your wider marketing system.</p>} />
          <div className="s-cards">
            {integrations.map((x, i) => (
              <Link key={x.title} data-rv="up" data-d={String(i * 0.08)} href={x.href} className="s-card">
                <h3>{x.title}</h3>
                <span className="s-card-b">{x.description}</span>
              </Link>
            ))}
          </div>
          <div className="s-stack-sm">
            <h3 data-rv="up" className="s-h3">How the Channels Connect</h3>
            <ul className="s-list">
              {examples.map((x, i) => <li key={x} data-rv="up"><span>{String(i + 1).padStart(2, '0')}</span><span>{x}</span></li>)}
            </ul>
          </div>
        </div>
      </section>

      <FaqSection kicker="Common Questions" title="Frequently Asked Questions" faqs={faqItems} />

      <CtaSection
        title="Email marketing is not about blasting promotions."
        variant="service-email-marketing"
        after={<><a href={BUSINESS_INFO.bookingUrl}>Book a 30-minute call</a> and we&apos;ll find the revenue already sitting in your database. Ready to move fast? <a href="tel:0474870535">Jump on a call</a></>}
      >
        <p>It is about building relationships, guiding prospects, and increasing customer lifetime value. For Gold Coast businesses serious about growth, email marketing is not optional -- it is foundational.</p>
      </CtaSection>

      <LinksSection title="Keep reading" current="/email-marketing-gold-coast/" />
    </SiteShell>
  );
}
