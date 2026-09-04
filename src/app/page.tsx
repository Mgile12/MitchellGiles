import { AnimatedHero } from '@/components/ui/animated-hero';
import GoogleMapsOffer from '@/components/GoogleMapsOffer';
import BeyondMaps from '@/components/BeyondMaps';
import KillerResults from '@/components/KillerResults';
import CurrentClients from '@/components/CurrentClients';
import PartnerBadges from '@/components/PartnerBadges';
import ServicesOverview from '@/components/ServicesOverview';
import FAQSection from '@/components/FAQSection';
import FinalCTA from '@/components/FinalCTA';

export default function HomePage() {
  return (
    <>
      <AnimatedHero />
      <GoogleMapsOffer />
      <BeyondMaps />
      <KillerResults />
      <CurrentClients />
      <PartnerBadges />
      <ServicesOverview />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
