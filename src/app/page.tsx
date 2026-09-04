import { AnimatedHero } from '@/components/ui/animated-hero';
import ServicesGrid from '@/components/ServicesGrid';
import AboutSection from '@/components/AboutSection';
import KillerResults from '@/components/KillerResults';
import CurrentClients from '@/components/CurrentClients';
import FinalCTA from '@/components/FinalCTA';

export default function HomePage() {
  return (
    <>
      <AnimatedHero />
      <ServicesGrid />
      <AboutSection />
      <KillerResults />
      <CurrentClients />
      <FinalCTA />
    </>
  );
}
