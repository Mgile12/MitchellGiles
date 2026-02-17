import type { Metadata } from 'next';
import { BUSINESS_INFO } from '@/lib/business-info';
import AreaPageContent from '@/components/AreaPageContent';
import { areaData } from './data';

export const metadata: Metadata = {
  title: areaData.seoTitle,
  description: areaData.metaDescription,
  alternates: { canonical: `${BUSINESS_INFO.url}/areas/austinville` },
};

export default function AustinvillePage() {
  return <AreaPageContent data={areaData} />;
}
