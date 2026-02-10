import {
  Hero,
  FAQSection,
  RulesSection,
  CaseStudyTeaser,
  KillerResults,
  ServicesOverview,
  ProcessTimeline,
  FinalCTA,
} from '../components';

export default function HomePage() {
  return (
    <>
      <Hero />
      <FAQSection />
      <RulesSection />
      <CaseStudyTeaser />
      <KillerResults />
      <ServicesOverview />
      <ProcessTimeline />
      <FinalCTA />
    </>
  );
}
