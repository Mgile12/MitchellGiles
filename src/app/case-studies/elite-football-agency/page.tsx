import type { Metadata } from 'next';
import CaseStudyContent from './CaseStudyContent';

export const metadata: Metadata = {
  title: 'Elite Football Agency Case Study - $50k to $425k in 12 Months',
  description:
    'How Mitchell Giles helped Elite Football Agency scale from $50k to $425k in 12 months through email marketing, paid ads, automation, and CRM systems on the Gold Coast.',
  openGraph: {
    title: 'Elite Football Agency Case Study - Mitchell Giles Marketing',
    description:
      'From $50k to $425k in 12 months. See how Elite Football Agency transformed with the right marketing systems.',
  },
  alternates: {
    canonical: 'https://mitchellgiles.com/case-studies/elite-football-agency',
  },
};

export default function CaseStudyPage() {
  return <CaseStudyContent />;
}
