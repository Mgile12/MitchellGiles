import type { Metadata } from 'next';
import Link from 'next/link';
import LegalPage from '@/components/LegalPage';
import { BUSINESS_INFO } from '@/lib/business-info';

const DESCRIPTION =
  'How MRG Marketing in Ormeau collects, uses and protects your details, including the map video form, analytics, Meta advertising and the tools the site uses.';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: DESCRIPTION,
  alternates: { canonical: `${BUSINESS_INFO.url}/privacy/` },
  openGraph: { title: 'Privacy Policy | MRG Marketing', description: DESCRIPTION, type: 'website', url: `${BUSINESS_INFO.url}/privacy/`, locale: 'en_AU' },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy policy"
      name="Privacy"
      path="/privacy/"
      updated="14 November 2026"
      intro={<p>I collect what I need to make your map video and do the work, I don&apos;t sell your details, and you can ask me to see or delete them at any time.</p>}
    >
      <h2>Who this covers</h2>
      <p>
        This policy covers MRG Marketing Pty Ltd, ABN 20 700 519 893, trading as MRG Marketing (&quot;I&quot; or &quot;me&quot;), and the website mrgmarketing.com.au.
        I handle personal information in line with the Australian Privacy Principles.
      </p>

      <h2>What I collect</h2>
      <ul>
        <li><strong>When you ask for a map video:</strong> your business name or Google profile link, the search you want to win and your mobile number. I also record which page or ad version you came from.</li>
        <li><strong>When you use the missed calls calculator:</strong> your business name, suburb, the search you want to win and the numbers you enter. If you unlock the full report, your email and mobile too.</li>
        <li><strong>When you contact me or book a call:</strong> your name, email, phone number and whatever you choose to tell me. Bookings go through Notion Calendar.</li>
        <li><strong>If you become a client:</strong> business and billing details, plus the access and information the work needs.</li>
        <li><strong>When you use the website:</strong> pages viewed, approximate location, device and browser details, and how you arrived. This comes through cookies and similar tools, described below.</li>
      </ul>
      <p>I also look at public information about your business, such as your Google Business Profile, reviews, website and rankings, to prepare the video and my advice.</p>
      <p>You don&apos;t have to give me your details, but I can&apos;t make your video or work with you without them.</p>

      <h2>How I use it</h2>
      <ul>
        <li>To make your map video and text you the link.</li>
        <li>To run the calculator scan, email you the report you asked for, and follow up about it.</li>
        <li>To reply to you, run our calls and provide the services you ask for.</li>
        <li>To send invoices and keep the records the law requires.</li>
        <li>To see how the website and my advertising are working, and to improve them.</li>
      </ul>
      <p>
        I won&apos;t add you to a marketing list without your consent. Any marketing message I send will tell you how to opt out, and you can always reply STOP or email me.
        I don&apos;t sell your personal information.
      </p>

      <h2>Cookies, analytics and advertising</h2>
      <ul>
        <li><strong>Google Analytics</strong> shows me how people use the site. You can opt out with <a href="https://tools.google.com/dlpage/gaoptout" rel="noopener noreferrer">Google&apos;s browser add-on</a>.</li>
        <li><strong>Microsoft Clarity</strong> shows me how people use the site, including clicks, scrolling and recordings of visits. What you type into forms is masked.</li>
        <li><strong>Meta Pixel</strong> measures my Facebook and Instagram ads, including when a form is sent, and can be used to show ads to people who have visited the site. The form details you type are not passed to the pixel. You can change this in your <a href="https://www.facebook.com/adpreferences" rel="noopener noreferrer">Meta ad preferences</a>.</li>
        <li><strong>Netlify</strong> hosts the site, receives the map video and calculator forms and measures site performance.</li>
        <li><strong>DataForSEO</strong> runs the Google Maps searches for the calculator. It receives your business name, suburb and search, not your email or mobile. <strong>Resend</strong> sends the calculator report to the email address you give.</li>
        <li><strong>Embedded content</strong> from YouTube, Loom and Google Maps comes from those companies and is covered by their own privacy policies. The videos only load when you press play.</li>
      </ul>
      <p>You can block or clear cookies in your browser settings. The site will still work.</p>

      <h2>Who I share it with</h2>
      <p>I only share your details with the service providers that help me run the business, and only for that work. They include:</p>
      <ul>
        <li>hosting, forms, email, calendar, file storage and automation tools;</li>
        <li>ranking and research tools, which receive your business details rather than your mobile number;</li>
        <li>AI tools that help me organise leads and prepare videos, briefs and reports;</li>
        <li>accounting and payment providers, and the small team that checks my work.</li>
      </ul>
      <p>I may also disclose information if the law requires it.</p>

      <h2>Overseas</h2>
      <p>Many of these providers, including Google, Meta, Netlify and my AI and software tools, are based in or store data in other countries, mainly the United States. Using them means your information may be handled overseas.</p>

      <h2>Keeping it safe, and for how long</h2>
      <p>I use reputable providers and restrict access to the accounts that hold your details. No system is perfectly secure, so please don&apos;t send passwords through the form. I keep information while it is needed for the reasons above or to meet legal record-keeping duties, then delete it or de-identify it. If you asked for a map video and we don&apos;t work together, you can ask me to delete your details at any time.</p>

      <h2>Your rights</h2>
      <p>
        You can ask to see the personal information I hold about you, correct it or have it deleted. Email <a href={`mailto:${BUSINESS_INFO.email}`}>{BUSINESS_INFO.email}</a> and I will reply within 30 days.
      </p>

      <h2>Complaints</h2>
      <p>
        If you are unhappy with how I have handled your information, contact me first and I will try to fix it. If you are still not satisfied, you can complain to the <a href="https://www.oaic.gov.au/privacy/privacy-complaints" rel="noopener noreferrer">Office of the Australian Information Commissioner</a>.
      </p>

      <h2>Changes and contact</h2>
      <p>
        I may update this policy and will change the date at the top when I do. The <Link href="/terms/">terms</Link> cover how the services work.
      </p>
      <p>
        MRG Marketing, {BUSINESS_INFO.address.full}. <a href={`mailto:${BUSINESS_INFO.email}`}>{BUSINESS_INFO.email}</a>, <a href={`tel:${BUSINESS_INFO.phoneFormatted}`}>{BUSINESS_INFO.phone}</a>.
      </p>
    </LegalPage>
  );
}
