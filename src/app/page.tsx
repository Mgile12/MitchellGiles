import Hero from '@/components/Hero';
import FAQSection from '@/components/FAQSection';
import RulesSection from '@/components/RulesSection';
import KillerResults from '@/components/KillerResults';
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
      <ServicesOverview />
      <LocalSeoSection />
      <FinalCTA />
    </>
  );
}
