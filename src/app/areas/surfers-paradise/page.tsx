import type { Metadata } from 'next';
import { BUSINESS_INFO } from '@/lib/business-info';
import AreaPlaceholderContent from '../AreaPlaceholderContent';

export const metadata: Metadata = {
  title: 'Marketing Consultant Surfers Paradise | Tourism & Hospitality Marketing',
  description: 'Marketing consultant for Surfers Paradise businesses. SEO, Google Ads, email marketing and lead generation for tourism, hospitality and retail.',
  alternates: { canonical: `${BUSINESS_INFO.url}/areas/surfers-paradise` },
};

export default function SurfersParadisePage() {
  return (
    <AreaPlaceholderContent
      areaName="Surfers Paradise"
      description="Surfers Paradise is the Gold Coast's tourism epicentre with intense competition across hospitality, retail, and entertainment. Seasonal traffic spikes create unique marketing opportunities for businesses that know how to capture demand at the right time."
    />
  );
}
