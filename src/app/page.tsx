import { AnimatedHero } from '@/components/ui/animated-hero';
import CurrentClients from '@/components/CurrentClients';
import ServicesGrid from '@/components/ServicesGrid';
import AboutSection from '@/components/AboutSection';
import WhyMe from '@/components/WhyMe';
import LocationMap from '@/components/LocationMap';
import LinkWeb from '@/components/LinkWeb';
import FinalCTA from '@/components/FinalCTA';

export default function HomePage() {
  return (
    <>
      <AnimatedHero />
      <ServicesGrid />
      <CurrentClients />
      <AboutSection />
      <WhyMe />
      <LocationMap />
      <LinkWeb show={['guides', 'trades', 'areas', 'proof']} heading="Everything else on this site" intro="The parts of the job, the trades I write for, the suburbs I work in, and the proof." />
      <FinalCTA />
    </>
  );
}
