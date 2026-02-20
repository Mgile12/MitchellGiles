import Hero from '@/components/Hero';
import FAQSection from '@/components/FAQSection';
import RulesSection from '@/components/RulesSection';
import KillerResults from '@/components/KillerResults';
import TrustedPlatforms from '@/components/TrustedPlatforms';
import ServicesOverview from '@/components/ServicesOverview';
import LocalSeoSection from '@/components/LocalSeoSection';
import FinalCTA from '@/components/FinalCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <FAQSection />
      <RulesSection />
      <KillerResults />
      <TrustedPlatforms />
      <ServicesOverview />
      <LocalSeoSection />
      <FinalCTA />
    </>
  );
}
