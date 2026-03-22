import { AnimatedHero } from '@/components/ui/animated-hero';
import Hero from '@/components/Hero';
import FAQSection from '@/components/FAQSection';
import ClientShowcase from '@/components/ClientShowcase';
import GoogleMapsOffer from '@/components/GoogleMapsOffer';
import KillerResults from '@/components/KillerResults';
import PartnerBadges from '@/components/PartnerBadges';
import ServicesOverview from '@/components/ServicesOverview';
import LocalSeoSection from '@/components/LocalSeoSection';
import FinalCTA from '@/components/FinalCTA';

export default function HomePage() {
  return (
    <>
      <AnimatedHero />
      <Hero />
      <FAQSection />
      <ClientShowcase />
      <GoogleMapsOffer />
      <PartnerBadges />
      <KillerResults />
      <ServicesOverview />
      <FinalCTA />
      <LocalSeoSection />
    </>
  );
}
