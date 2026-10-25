import { AnimatedHero } from '@/components/ui/animated-hero';
import CurrentClients from '@/components/CurrentClients';
import GoogleReviews from '@/components/GoogleReviews';
import Industries from '@/components/Industries';
import StatsTicker from '@/components/StatsTicker';
import ServicesGrid from '@/components/ServicesGrid';
import Offers, { OFFERS } from '@/components/Offers';
import ProjectMaths from '@/components/ProjectMaths';
import AboutSection from '@/components/AboutSection';
import WhyMe from '@/components/WhyMe';
import LocationMap from '@/components/LocationMap';
import LinkWeb from '@/components/LinkWeb';
import FinalCTA from '@/components/FinalCTA';
import { BUSINESS_INFO } from '@/lib/business-info';

// The same three offers run as Offer posts on the Google Business Profile until 31 Dec 2026.
const offerSchema = {
  '@context': 'https://schema.org',
  '@type': 'OfferCatalog',
  name: 'Special Offers for Ormeau & Northern Gold Coast Businesses',
  url: `${BUSINESS_INFO.url}/#offers`,
  itemListElement: OFFERS.map((o) => ({
    '@type': 'Offer',
    name: o.title,
    description: o.body,
    url: `${BUSINESS_INFO.url}/#${o.id}`,
    validThrough: o.validThrough,
    availability: 'https://schema.org/InStock',
    areaServed: [
      { '@type': 'Place', name: 'Ormeau' },
      { '@type': 'Place', name: 'Northern Gold Coast' },
    ],
    offeredBy: { '@id': `${BUSINESS_INFO.url}/#business` },
    image: `${BUSINESS_INFO.url}${o.image.src}`,
  })),
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(offerSchema) }} />
      <AnimatedHero />
      <CurrentClients />
      <AboutSection />
      <ProjectMaths />
      <GoogleReviews />
      <Offers />
      <StatsTicker />
      <ServicesGrid />
      <Industries />
      <WhyMe />
      <LocationMap />
      <LinkWeb show={['guides', 'trades', 'areas', 'proof']} heading="Everything else on this site" intro="The parts of the job, the trades I write for, the suburbs I work in, and the proof." />
      <FinalCTA />
    </>
  );
}
