import Hero from '@/components/Hero';
import FAQSection from '@/components/FAQSection';
import ClientShowcase from '@/components/ClientShowcase';
import KillerResults from '@/components/KillerResults';
import PartnerBadges from '@/components/PartnerBadges';
import ServicesOverview from '@/components/ServicesOverview';
import LocalSeoSection from '@/components/LocalSeoSection';
import FinalCTA from '@/components/FinalCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <FAQSection />
      <ClientShowcase />
      <KillerResults />
      <PartnerBadges />
      <ServicesOverview />
      <LocalSeoSection />
      <FinalCTA />
    </>
  );
}
