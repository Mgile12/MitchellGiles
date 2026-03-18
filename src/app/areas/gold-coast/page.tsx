import type { Metadata } from 'next';
import { BUSINESS_INFO } from '@/lib/business-info';
import AreaPlaceholderContent from '../AreaPlaceholderContent';

export const metadata: Metadata = {
  title: 'Marketing Agency Gold Coast | Full-Service Marketing',
  description: 'Gold Coast marketing agency gold coast specialising in SEO, Google Ads, email marketing, lead generation and automation. Based in Southport QLD.',
  alternates: { canonical: `${BUSINESS_INFO.url}/areas/gold-coast` },
};

export default function GoldCoastPage() {
  return (
    <AreaPlaceholderContent
      areaName="Gold Coast"
      description="The Gold Coast is one of Australia's fastest-growing regions with a competitive business landscape spanning from Coolangatta to Coomera. Whether you run a trade business, professional service, or retail operation, effective marketing is what separates growing businesses from stagnating ones."
    />
  );
}
