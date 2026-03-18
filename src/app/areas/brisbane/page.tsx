import type { Metadata } from 'next';
import { BUSINESS_INFO } from '@/lib/business-info';
import AreaPlaceholderContent from '../AreaPlaceholderContent';

export const metadata: Metadata = {
  title: 'Marketing Agency Gold Coast Brisbane | Gold Coast Marketing Expertise for Brisbane',
  description: 'Marketing agency gold coast serving Brisbane businesses. SEO, Google Ads, email marketing and lead generation from our Gold Coast base.',
  alternates: { canonical: `${BUSINESS_INFO.url}/areas/brisbane` },
};

export default function BrisbanePage() {
  return (
    <AreaPlaceholderContent
      areaName="Brisbane"
      description="Brisbane is Queensland's capital and largest business market. We extend our Gold Coast marketing expertise to Brisbane businesses across CBD, South Bank, Fortitude Valley, West End, and the wider metro area."
    />
  );
}
