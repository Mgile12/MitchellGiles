import Link from 'next/link';
import SiteShell from '@/components/site/SiteShell';
import ZoomImage from '@/components/site/ZoomImage';
import { CtaSection, FaqSection, LinksSection, PageHero, SectionHead } from '@/components/site/Blocks';

const heatmaps = [
  {
    client: 'Polish Hub Marine Detailing',
    result: '2 days',
    before: '/images/google-business-profile-gold-coast/google-business-profile-gold-coast-polish-hub-google-maps-ranking-before.jpg',
    after: '/images/google-business-profile-gold-coast/google-business-profile-gold-coast-polish-hub-google-maps-ranking-after.jpg',
  },
  {
    client: 'Ceramics Gold Coast',
    result: '11 days',
    before: '/images/google-business-profile-gold-coast/google-business-profile-gold-coast-ceramics-gold-coast-google-maps-ranking-before.jpg',
    after: '/images/google-business-profile-gold-coast/google-business-profile-gold-coast-ceramics-gold-coast-google-maps-ranking-after.jpg',
  },
];

const gbpProof = [
  { src: '/images/google-business-profile-gold-coast/google-business-profile-gold-coast-google-business-profile-calls-89-up-324-percent.png', stat: '89 calls', note: 'Up 324% on the same five months last year' },
  { src: '/images/google-business-profile-gold-coast/google-business-profile-gold-coast-google-business-profile-website-clicks-164-up-273-percent.png', stat: '164 website clicks', note: 'Up 273% year on year' },
  { src: '/images/google-business-profile-gold-coast/google-business-profile-gold-coast-google-business-profile-website-clicks-303-up-197-percent.png', stat: '303 website clicks', note: 'Up 197% year on year' },
  { src: '/images/google-business-profile-gold-coast/google-business-profile-gold-coast-google-business-profile-calls-168-up-83-percent.png', stat: '168 calls', note: 'Up 83% year on year' },
  { src: '/images/google-business-profile-gold-coast/google-business-profile-gold-coast-google-business-profile-calls-266-up-23-percent.png', stat: '266 calls', note: 'Up 23% through the wet season, the quietest stretch of the year' },
  { src: '/images/google-business-profile-gold-coast/google-business-profile-gold-coast-google-business-profile-website-clicks-227-august-up-21-percent.png', stat: '227 website clicks in August', note: 'Up 21% on last August' },
  { src: '/images/google-business-profile-gold-coast/google-business-profile-gold-coast-google-business-profile-interactions-306-up-18-percent.png', stat: '306 profile interactions', note: 'Up 18% year on year' },
  { src: '/images/google-business-profile-gold-coast/google-business-profile-gold-coast-google-business-profile-interactions-88-from-zero.png', stat: '88 interactions', note: 'From zero. Profile launched in June' },
  { src: '/images/google-business-profile-gold-coast/google-business-profile-gold-coast-google-business-profile-calls-33-from-zero.png', stat: '33 calls', note: 'Same new profile, first three months' },
];

const steps = [
  {
    title: 'Audit',
    text: 'I look at your profile, your website and the three businesses currently above you, and tell you on the call what is holding you back.',
  },
  {
    title: 'Fix both magnets',
    text: 'Your profile and your website, together. Most people only touch one, which is why most people stay on page two.',
  },
  {
    title: 'Weekly work',
    text: 'Reviews, posts, photos, categories, services. Every week, not once at the start.',
  },
  {
    title: 'Hold the spot',
    text: 'Rankings drift the moment the work stops. This is ongoing, and I take one business per industry, per area.',
  },
];

const testimonials = ['/images/google-business-profile-gold-coast/google-business-profile-gold-coast-client-message-1.jpg', '/images/google-business-profile-gold-coast/google-business-profile-gold-coast-client-message-2.jpg'];

const parts = [
  {
    title: 'Categories and services',
    text: 'The primary category is the single biggest lever on the profile and the most common thing I find wrong: "Contractor" where it should say "Plumber", "Business service" where it should say "Steel fabricator". Secondary categories cover what else is true. Then the services list, every job you do, in the words customers use, because Google matches searches against it and most profiles list three services for a business that does thirty.',
  },
  {
    title: 'Description, attributes and hours',
    text: 'The description says what you do, where, since when and for whom, in plain text, with the licence number if you hold one. Attributes (owner-run, wheelchair access, online quotes) are set honestly. Hours are what you actually answer, because a profile that says 24/7 and goes to voicemail at midnight earns one-star reviews, and Google reads those too.',
  },
  {
    title: 'Photos, posts and products',
    text: 'Real photos of real work, added every month: vans, jobs, the team, the premises. A post each week with a job and a suburb in the caption. Products set up for the things people buy as a unit: hot water systems, ceramic coating packages, service plans. None of this is decoration; together it is how Google tells a live business from a dormant one.',
  },
  {
    title: 'Reviews and replies',
    text: 'A request that goes out by text after every job, asking for the job and the suburb in the customer’s words. A reply to every review within a day, naming the job back. Flagging the ones that break policy with the right policy cited. The review stream is the one ranking factor customers can see, and it works best as a weekly habit rather than a quarterly push.',
  },
  {
    title: 'The website behind the profile',
    text: 'Google reads the site linked from the profile to confirm what the business does and where. A page for each service and each suburb, saying the same things the profile says, is what lets the profile rank beyond its pin and what turns a Maps search into a call. The profile and the website are two halves of the same job.',
  },
  {
    title: 'Measuring it: the grid and the calls',
    text: 'A ranking grid scan around the business before the work, and then monthly on the same grid, so the before and after mean something. Calls, website clicks and direction requests from the profile’s own performance data, month on month and against the same months last year. Calls are taps on the Call button, which Google defines, and I say so on every report.',
  },
];

const weekly = [
  'Review requests out, new reviews answered',
  'One post with a real job and the suburb',
  'Categories, services, hours and attributes checked against what the business is doing this season',
  'Photos added; Q&A answered; spam edits reverted',
  'One website improvement that supports the profile',
  'Monthly: the grid scan, the performance numbers, and a call about what moved',
];

interface FAQItem {
  question: string;
  answer: string;
}

export default function GBPContent({ faqItems }: { faqItems: FAQItem[] }) {
  return (
    <SiteShell>
      <PageHero
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services/' }, { label: 'Google Business Profile' }]}
        kicker="Google Business Profile"
        title={<>Top 3 on Google Maps. <span className="s-accent">Planned for 90 days, often faster.</span></>}
        lead={<p>The top three Maps listings take around <strong>70% of local clicks</strong>. Everyone else splits what&apos;s left. I get Gold Coast businesses into that pack and keep them there.</p>}
        links={<a href="#heatmaps">See the heatmaps ↓</a>}
        variant="service-google-business-profile"
        image={{ src: '/images/home/mitchell-giles-local-seo-consultant-ormeau.webp', alt: 'Mitchell Giles, MRG Marketing, Ormeau', width: 920, height: 1150 }}
        caption="Mitchell Giles, Ormeau"
      />

      <section id="heatmaps" className="s-sec s-white">
        <div className="s-wrap s-stack-lg">
          <SectionHead
            title={<>Two clients. Two heatmaps. <span className="s-accent">Before and after.</span></>}
            lead={<p>Live Google Maps ranking heatmaps. The number is how many days it took. Both are written up in full, with the work and the limits of the measurement, in the <Link href="/case-studies/">case studies</Link>.</p>}
          />
          <div className="s-shots">
            {heatmaps.map((item) => (
              <div key={item.client} data-rv="up" className="s-box">
                <div className="s-box-head"><span>{item.client}</span><span className="s-tag">{item.result}</span></div>
                <div className="s-pair">
                  {(['before', 'after'] as const).map((k) => (
                    <div key={k}>
                      <span className="s-pair-k">{k}</span>
                      <ZoomImage src={item[k]} label={`${item.client} ${k}, open full size`}>
                        <img src={item[k]} alt={`google business profile gold coast: ${item.client} Google Maps ranking grid ${k}`} loading="lazy" />
                      </ZoomImage>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="s-sec s-sand">
        <div className="s-wrap s-stack-lg">
          <SectionHead
            title={<>Nine charts. <span className="s-accent">Straight out of Google.</span></>}
            lead={<p>Calls, website clicks and interactions from Business Profiles I manage, April to August 2026. Untouched screenshots. Tap any to enlarge. &ldquo;Calls&rdquo; is Google&apos;s own metric: taps on the profile&apos;s call button, not a count of answered phone calls.</p>}
          />
          <div className="s-shots">
            {gbpProof.map((item, i) => (
              <div key={item.src} data-rv="up" data-d={String((i % 3) * 0.08)}>
                <ZoomImage src={item.src} label={`${item.stat}. ${item.note}. Open full size.`}>
                  <img src={item.src} alt={`google business profile gold coast: performance chart, ${item.stat}`} loading="lazy" width={914} height={505} />
                  <span className="s-shot-note"><strong>{item.stat}</strong><span>{item.note}</span></span>
                </ZoomImage>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="s-sec s-white">
        <div className="s-wrap s-stack-lg">
          <SectionHead title="What clients say" lead={<p>Screenshots, not testimonials I wrote.</p>} />
          <div className="s-shots" style={{ maxWidth: 820 }}>
            {testimonials.map((src, i) => (
              <div key={src} data-rv="up" data-d={String(i * 0.1)}>
                <ZoomImage src={src} label={`Client message ${i + 1}, open full size`}>
                  <img src={src} alt={`google business profile gold coast: client message ${i + 1}`} loading="lazy" />
                </ZoomImage>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="s-sec s-ink">
        <div className="s-wrap s-stack-lg">
          <SectionHead kicker="How it works" title={<>Four steps. <span className="s-accent">The last one never ends.</span></>} />
          <div className="s-cols">
            {steps.map((s, i) => (
              <div key={s.title} data-rv="up" data-d={String(i * 0.08)} className="s-col s-col-dark">
                <span className="s-col-k">{String(i + 1).padStart(2, '0')}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="s-sec s-sand" aria-labelledby="depth-heading">
        <div className="s-wrap s-stack-lg">
          <SectionHead
            kicker="What the work actually is"
            id="depth-heading"
            title={<>Six parts of a Business Profile, <span className="s-accent">and what I do with each.</span></>}
            lead={<p>Google Business Profile optimisation is not a one-off set-up. It is a short list of things done properly once, and then kept up every week, because the profile that stops being worked is the profile that slides out of the top three. This is the list.</p>}
          />
          <div className="s-cols">
            {parts.map((p, i) => (
              <div key={p.title} data-rv="up" data-d={String((i % 3) * 0.08)} className="s-col">
                <span className="s-col-k">PART {i + 1}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
          <div className="s-split">
            <div className="s-stack-sm">
              <h3 data-rv="up" className="s-h3">What a week looks like</h3>
              <ul data-rv="up" className="s-ticks s-copy">
                {weekly.map((w) => <li key={w}>{w}</li>)}
              </ul>
            </div>
            <div className="s-stack-sm">
              <h3 data-rv="up" className="s-h3">Suspensions, duplicates and spam</h3>
              <div data-rv="up" className="s-copy">
                <p>Three things can undo months of work in a day. A profile suspended after a well-meant edit to the name or address. A duplicate profile that splits the reviews and confuses Google about which business is real. And competitors stuffing their names with keywords or sitting on fake addresses to steal the pack. I handle the first two through the reinstatement and merge processes, with the evidence Google asks for, and the third by reporting it properly and beating it on the fundamentals.</p>
                <p>
                  If your profile is already suspended, that is the first and only job until it is back. <Link href="/local-seo-audit-gold-coast/">The audit</Link> finds it, <Link href="/google-maps-ranking-gold-coast/">the ranking grid</Link> measures what comes back, and <Link href="/review-management-gold-coast/">review management</Link> keeps it there.
                </p>
                <p><Link href="/seo-for-tradies-gold-coast/">How this works for tradies →</Link></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FaqSection title="Questions I get asked" faqs={faqItems} />

      <CtaSection title={<>Find out where you sit <span className="s-accent">on the map</span></>} variant="service-google-business-profile">
        <p>Within 48 hours you get a short video of your own Google Maps position and what I&apos;d do first. If your industry and area are already taken, I&apos;ll say so.</p>
      </CtaSection>

      <LinksSection title="Keep reading" intro="The parts of the job, the trades I write for, the suburbs I work in, and the proof." current="/google-business-profile-gold-coast/" />
    </SiteShell>
  );
}
