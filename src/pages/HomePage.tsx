import {
  Hero,
  MiniProofStrip,
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
      <MiniProofStrip />
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
