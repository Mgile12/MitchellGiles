import { AnimatedHero } from '@/components/ui/animated-hero';
import CurrentClients from '@/components/CurrentClients';
import ServicesGrid from '@/components/ServicesGrid';
import AboutSection from '@/components/AboutSection';
import WhyMe from '@/components/WhyMe';
import FinalCTA from '@/components/FinalCTA';

export default function HomePage() {
  return (
    <>
      <AnimatedHero />
      <ServicesGrid />
      <CurrentClients />
      <AboutSection />
      <WhyMe />
      <FinalCTA />
    </>
  );
}
