import { ServiceRoute, serviceMetadata } from '@/app/services/service-route';

export const metadata = serviceMetadata('seo-for-builders');

export default function Page() {
  return <ServiceRoute slug="seo-for-builders" />;
}
