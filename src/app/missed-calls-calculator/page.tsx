import type { Metadata } from 'next';
import Link from 'next/link';
import { BUSINESS_INFO } from '@/lib/business-info';
import SiteShell from '@/components/site/SiteShell';
import { CtaSection, FaqSection, LinksSection, PageHero, SectionHead } from '@/components/site/Blocks';
import CallsCalculator from '@/components/site/CallsCalculator';

const PATH = '/missed-calls-calculator/';
const URL = `${BUSINESS_INFO.url}${PATH}`;
const TITLE = 'Google Maps Missed Calls Calculator';
const DESCRIPTION =
  'Enter your business and your own numbers. A live scan shows where you rank on Google Maps street by street, who is above you, and what the calls you are missing could be worth.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: { title: `${TITLE} | MRG Marketing`, description: DESCRIPTION, type: 'website', url: URL, locale: 'en_AU' },
};

const faqs = [
  {
    question: 'How does the calculator work out the calls I am missing?',
    answer:
      'It searches Google Maps for your service from 25 points around your address and records where you show at each one. It compares how visible you are now with being in the top 3 across most of that area, then scales the calls you told me you get today. The estimate is capped at three times your current calls.',
  },
  {
    question: 'Is the dollar figure a promise?',
    answer:
      'No. It is an estimate from your own numbers: the calls you get now, how many become jobs, and what a job is worth. Real results depend on your market, your competitors, your reviews and your website.',
  },
  {
    question: 'Why do you scan 25 points and not just my address?',
    answer:
      'Because Google ranks you from where the customer is standing. Most businesses show up in their own street and disappear a few streets away, and the calls they miss come from those streets.',
  },
  {
    question: 'Why do I need to give my email and mobile for the full report?',
    answer:
      'You see where you rank and the calls you could be missing without giving anything. The full report, with the dollar value, the competitor comparison and your map, is emailed to you, so I need somewhere to send it. I may text you about it, and there is no discovery call unless you ask.',
  },
  {
    question: 'What should I put if I do not know my calls a month?',
    answer:
      'Open your Google Business Profile, go to Performance and look at Calls for the last month. If you cannot find it, a fair guess is fine. The estimate updates if you change the number.',
  },
  {
    question: 'Does it work outside the Gold Coast?',
    answer: 'Yes. It works for any Australian business with a Google Business Profile.',
  },
];

export default function MissedCallsCalculatorPage() {
  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: BUSINESS_INFO.url },
        { '@type': 'ListItem', position: 2, name: 'Missed calls calculator', item: URL },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
    },
  ];

  return (
    <SiteShell>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <PageHero
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Missed calls calculator' }]}
        kicker="Free · live scan · about 30 seconds"
        title={<>How many calls is Google sending to <span className="s-accent">someone else?</span></>}
        lead={<p>Enter your business and your own numbers. I&apos;ll scan Google Maps street by street around you, show you who&apos;s above you, and work out what the calls you&apos;re missing could be worth.</p>}
        form={false}
      />

      <section className="s-sec s-white" aria-label="Calculator" style={{ paddingTop: 0 }}>
        <div className="s-wrap">
          <CallsCalculator />
        </div>
      </section>

      <section className="s-sec s-sand">
        <div className="s-wrap s-split">
          <SectionHead kicker="How it works" title={<>Your numbers. <span className="s-accent">Your map.</span></>} />
          <div data-rv="up" className="s-copy">
            <ol className="s-nums">
              <li>You tell me your business, the search you want to win, and three numbers: calls a month, how many become jobs, and what a job is worth.</li>
              <li>The calculator searches Google Maps for that service from 25 points around your address, 1.5 km apart, and records where you show at each one.</li>
              <li>You see your position, how much of your area you&apos;re winning, and an estimate of the calls going elsewhere.</li>
              <li>Add your email and mobile for the full report: the dollar value, the businesses above you with their reviews beside yours, and your map.</li>
            </ol>
            <p>It&apos;s the same idea as the <Link href="/google-maps-ranking-gold-coast/">ranking grids</Link> I use with clients, made quick enough to run yourself. For the why behind your result, the <Link href="/free-map-video/">free map video</Link> is the next step.</p>
          </div>
        </div>
      </section>

      <FaqSection kicker="Questions" title="How the estimate is made." faqs={faqs} />

      <CtaSection title={<>Want to know why they&apos;re <span className="s-accent">above you?</span></>} variant="calculator">
        <p>The calculator shows where you stand. The free map video shows why: I record your own map, the businesses above you, and the three things I&apos;d fix first. Within 48 hours.</p>
      </CtaSection>

      <LinksSection title="Keep reading" current={PATH} />
    </SiteShell>
  );
}
