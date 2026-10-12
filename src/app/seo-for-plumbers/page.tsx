import { ServiceRoute, serviceMetadata } from '@/app/services/service-route';

export const metadata = serviceMetadata('seo-for-plumbers');

export default function Page() {
  return <ServiceRoute slug="seo-for-plumbers" />;
}
