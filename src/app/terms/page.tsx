import type { Metadata } from 'next';
import Link from 'next/link';
import LegalPage from '@/components/LegalPage';
import { BUSINESS_INFO } from '@/lib/business-info';

const DESCRIPTION =
  'Terms for MRG Marketing in Ormeau: the free map video, month-to-month services, who owns the work, and the full conditions of the 90-day top 3 guarantee.';

export const metadata: Metadata = {
  title: 'Terms and 90-Day Top 3 Guarantee',
  description: DESCRIPTION,
  alternates: { canonical: `${BUSINESS_INFO.url}/terms/` },
  openGraph: { title: 'Terms and 90-Day Top 3 Guarantee | MRG Marketing', description: DESCRIPTION, type: 'website', url: `${BUSINESS_INFO.url}/terms/`, locale: 'en_AU' },
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms and 90-day top 3 guarantee"
      name="Terms"
      path="/terms/"
      updated="9 November 2026"
      intro={<p>The plain version: month to month, you own what I build, and if you do your part and you're not in the top 3 on Google Maps for your agreed search in 90 days, you get back the management fees you paid in those 90 days. If you cancel early, there are no refunds.</p>}
    >
      <h2>Who these terms are with</h2>
      <p>
        MRG Marketing is the trading name of MRG Marketing Pty Ltd, ABN 20 700 519 893, of {BUSINESS_INFO.address.full}. &quot;I&quot; and &quot;me&quot; means MRG Marketing.
        &quot;You&quot; means the business using my services or this website. If a written proposal or agreement between us says something different, the written document applies.
      </p>

      <h2>The free map video</h2>
      <p>
        The map video is free and you owe nothing for it. It is a look at your Google Maps position for the search you choose, and my opinion on what to fix first. You can use that advice however you like.
        I make a limited number each week, so I may decline or delay a request, including if it is outside the areas or business types I can help.
      </p>

      <h2>Services and fees</h2>
      <ul>
        <li>What I will do and what it costs is agreed in writing before work starts. Fees are not published on this site.</li>
        <li>Services run month to month. There is no lock-in contract.</li>
        <li>Your first month includes a one-off onboarding fee on top of the monthly fee, for the setup work that happens at the start. The amount is in your written proposal.</li>
        <li>You can cancel at any time by email. The service then stops at the end of the month you have already paid for.</li>
        <li>You give me the access and information the work needs, such as your Google Business Profile and website. The timeline starts the day I have that access.</li>
        <li>Third-party costs, such as advertising, domains, hosting and paid directory listings, are yours and are separate from my fees unless we agree otherwise in writing.</li>
      </ul>

      <h2 id="refunds">Cancelling early: no refunds</h2>
      <p>
        <strong>If you cancel early, you get no refund.</strong> That covers monthly fees already paid, part-months, and the onboarding fee. The 90-day top 3 guarantee also ends the day you cancel, so it can&apos;t be claimed afterwards.
        The onboarding fee is never refunded, because that work is done at the start.
      </p>
      <p>The only exceptions are a valid claim under the guarantee below, and any rights the law gives you that can&apos;t be excluded.</p>

      <h2 id="guarantee">The 90-day top&nbsp;3 guarantee</h2>
      <p>This guarantee applies to new monthly management clients, once per business.</p>
      <p><strong>How it works</strong></p>
      <ul>
        <li><strong>The target.</strong> Before I start, we agree in writing your main search, such as &quot;plumber Coomera&quot;. The target is the top 3 on Google Maps for that search.</li>
        <li><strong>The 90 days.</strong> The 90 days start on the start date we record in writing, which will not be before I have the access I need.</li>
        <li><strong>How it is checked.</strong> On the last day of the 90 days, I run a ranking scan for the agreed search centred on your business address. Top 3 means your profile shows in the top 3 Google Maps results at that point.</li>
        <li><strong>Your part.</strong> In each week of the 90 days, you get at least 3 new reviews from genuine customers and supply at least 7 photos of real jobs.</li>
        <li><strong>The refund.</strong> If you did your part and you are not in the top 3 for the agreed search at the end of the 90 days, I refund the management fees you paid me for those 90 days, including any GST you paid on them.</li>
      </ul>
      <p><strong>Making a claim</strong></p>
      <p>
        Email <a href={`mailto:${BUSINESS_INFO.email}`}>{BUSINESS_INFO.email}</a> within 14 days after the 90 days end. We check the ranking scan together.
        If the conditions are met, I refund you within 14 days, to the account you paid from. You keep all the work done up to that point.
      </p>
      <p><strong>When the guarantee does not apply</strong></p>
      <ul>
        <li>You cancel, or stop paying the agreed fees, before the 90 days end.</li>
        <li>You miss your weekly reviews or photos, unless we agreed a change in writing. I will tell you at the time if you fall behind, so it is never a surprise at the end.</li>
        <li>You remove my access, or you or someone else changes the profile or website in a way that works against the plan without talking to me first.</li>
        <li>Google suspends or restricts your profile because of something outside my work, or your business closes, moves or changes its main service during the 90 days. If this happens we will talk it through, and we can agree in writing to pause the 90 days.</li>
        <li>Reviews were paid for, incentivised or not from genuine customers. Those break Google&apos;s rules and can put your profile at risk.</li>
      </ul>
      <p>The refund covers my monthly management fees only. It does not cover the onboarding fee, third-party costs, advertising, one-off project work, or lost income.</p>

      <h2>What is and isn&apos;t promised</h2>
      <p>
        Apart from the guarantee above, I can&apos;t promise a specific ranking, number of calls or amount of revenue. Google and AI tools make their own decisions, and results depend on your market, competitors, website and reviews.
        Results on this site are real results for those businesses, not a prediction of yours. The calculator gives an estimate based on the numbers you enter.
      </p>

      <h2>Who owns the work</h2>
      <p>You own your Google Business Profile, your website and the pages I write for you. If we stop working together, they stay yours. I keep ownership of my own tools, templates and methods.</p>

      <h2>Your rights under Australian law</h2>
      <p>
        Nothing in these terms, including the conditions on the guarantee, excludes or limits your rights under the Australian Consumer Law. The guarantee is in addition to those rights.
        Where the law allows me to limit my liability for a failure to meet a consumer guarantee, it is limited to supplying the services again or paying the cost of having them supplied again.
        To the extent the law allows, I am not liable for indirect loss, including lost profit.
      </p>

      <h2>Using this website</h2>
      <p>The content on this site is general information, not advice for your situation. Please don&apos;t copy it without asking. How I handle your details is covered in the <Link href="/privacy/">privacy policy</Link>.</p>

      <h2>Changes and governing law</h2>
      <p>I may update these terms and will change the date at the top when I do. A change won&apos;t affect a guarantee period that has already started. These terms are governed by the laws of Queensland, Australia.</p>

      <h2>Questions</h2>
      <p>
        Email <a href={`mailto:${BUSINESS_INFO.email}`}>{BUSINESS_INFO.email}</a> or ring <a href={`tel:${BUSINESS_INFO.phoneFormatted}`}>{BUSINESS_INFO.phone}</a>. You can also use the <Link href="/contact/">contact page</Link>.
      </p>
    </LegalPage>
  );
}
