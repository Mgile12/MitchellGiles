import type { Metadata } from 'next';
import { BUSINESS_INFO } from '@/lib/business-info';
import AreaPlaceholderContent from '../AreaPlaceholderContent';

export const metadata: Metadata = {
  title: 'Marketing Consultant Robina | Professional Services Marketing',
  description: 'Marketing consultant for Robina businesses. SEO, Google Ads, email marketing and lead generation for retail, professional services and health businesses.',
  alternates: { canonical: `${BUSINESS_INFO.url}/areas/robina` },
};

export default function RobinaPage() {
  return (
    <AreaPlaceholderContent
      areaName="Robina"
      description="Robina is a major commercial centre on the Gold Coast with Robina Town Centre, the hospital precinct, and a growing cluster of professional services. Businesses here serve both local residents and the wider Gold Coast region."
    />
  );
}
