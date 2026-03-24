import { AnimatedHero } from '@/components/ui/animated-hero';
import FAQSection from '@/components/FAQSection';
import GoogleMapsOffer from '@/components/GoogleMapsOffer';
import CurrentClients from '@/components/CurrentClients';
import KillerResults from '@/components/KillerResults';
import PartnerBadges from '@/components/PartnerBadges';
import ServicesOverview from '@/components/ServicesOverview';
import LocalSeoSection from '@/components/LocalSeoSection';
import FinalCTA from '@/components/FinalCTA';

export default function HomePage() {
  return (
    <>
      <AnimatedHero />
      <FAQSection />
      <GoogleMapsOffer />
      <CurrentClients />
      <KillerResults />
      <PartnerBadges />
      <ServicesOverview />
      <FinalCTA />
      <LocalSeoSection />
    </>
  );
}
