import type { Metadata } from 'next';
import { BUSINESS_INFO } from '@/lib/business-info';
import AreaPlaceholderContent from '../AreaPlaceholderContent';

export const metadata: Metadata = {
  title: 'Marketing Consultant Broadbeach | Dining & Events Marketing',
  description: 'Marketing consultant for Broadbeach businesses. SEO, Google Ads, email marketing and lead generation for dining, events and lifestyle brands.',
  alternates: { canonical: `${BUSINESS_INFO.url}/areas/broadbeach` },
};

export default function BroadbeachPage() {
  return (
    <AreaPlaceholderContent
      areaName="Broadbeach"
      description="Broadbeach is the Gold Coast's dining and entertainment hub, home to Pacific Fair, The Star, and a vibrant dining precinct. Businesses here compete for attention from both locals and visitors year-round."
    />
  );
}
