import { ServiceRoute, serviceMetadata } from '@/app/services/service-route';

export const metadata = serviceMetadata('seo-for-tradies-gold-coast');

export default function Page() {
  return <ServiceRoute slug="seo-for-tradies-gold-coast" />;
}
