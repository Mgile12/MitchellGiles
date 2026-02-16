'use client';

import AutomationHero from './AutomationHero';
import AutomationServices from './AutomationServices';
import AutomationSEOConnection from './AutomationSEOConnection';
import AutomationCTA from './AutomationCTA';

export default function AutomationContent() {
  return (
    <div className="bg-navy-950 min-h-screen">
      <AutomationHero />
      <AutomationServices />
      <AutomationSEOConnection />
      <AutomationCTA />
    </div>
  );
}
