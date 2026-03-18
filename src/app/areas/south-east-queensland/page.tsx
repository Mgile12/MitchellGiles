import type { Metadata } from 'next';
import { BUSINESS_INFO } from '@/lib/business-info';
import AreaPlaceholderContent from '../AreaPlaceholderContent';

export const metadata: Metadata = {
  title: 'Marketing Agency Gold Coast South East Queensland | Regional Marketing Coverage',
  description: 'Marketing agency gold coast serving South East Queensland. SEO, Google Ads, email marketing and lead generation across the SEQ corridor from Gold Coast to Brisbane.',
  alternates: { canonical: `${BUSINESS_INFO.url}/areas/south-east-queensland` },
};

export default function SouthEastQueenslandPage() {
  return (
    <AreaPlaceholderContent
      areaName="South East Queensland"
      description="South East Queensland is Australia's fastest-growing corridor, spanning the Gold Coast through Logan, Ipswich, Redlands, and Moreton Bay to Brisbane. We serve businesses across the entire SEQ region with scalable marketing systems."
    />
  );
}
