import { CheckCircle2, Plug } from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const scalingSteps = [
  { step: '01', title: 'Validate Offer', desc: 'Confirm the offer converts at small spend before committing to scale.' },
  { step: '02', title: 'Stabilise CPA', desc: 'Achieve consistent cost per acquisition over 7–14 days at baseline spend.' },
  { step: '03', title: 'Increase Budget Incrementally', desc: 'Scale budget 20–30% at a time. Avoid disrupting the learning phase.' },
  { step: '04', title: 'Expand Audiences', desc: 'Allow GEM to identify new profitable clusters as data accumulates.' },
  { step: '05', title: 'Refresh Creatives', desc: 'Maintain 3–5 active creatives and rotate before fatigue sets in.' },
  { step: '06', title: 'Protect Signal Quality', desc: 'Never sacrifice tracking integrity for speed. Lattice models from what it receives.' },
];

const checklist = [
  'Meta Pixel installed and verified',
  'Conversion API (CAPI) active and deduplicated',
  'Events prioritised in funnel order',
  'Attribution window set correctly (7-day click, 1-day view)',
  'CRM syncing offline conversions',
  'At least 3–5 active creatives per ad set',
  'Clear CPA target established',
  'Weekly optimisation cadence confirmed',
  'Retargeting audiences configured',
  'Lookalike audiences built from quality seed data',
];

const comparison = [
  { surface: 'Talks about clicks and impressions', specialist: 'Talks about contribution margin and CPA' },
  { surface: 'Boosts posts and runs interest-stack targeting', specialist: 'Builds conversion funnels and tests creative systematically' },
  { surface: 'Blames the algorithm when results drop', specialist: 'Adjusts signals, creative and structure based on data' },
  { surface: 'Sends vanity metric reports', specialist: 'Shows pipeline attribution and revenue visibility' },
  { surface: 'Avoids technical questions', specialist: 'Explains Andromeda, GEM and Lattice clearly' },
];

export default function MetaAdsFramework() {
  return (
    <section className="bg-navy-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(200,161,78,0.05),transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <AnimateOnScroll className="text-center mb-14 sm:mb-20">
          <span className="inline-block text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4 font-sans">
            How We Scale
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5 font-serif">
            Predictable Scaling Framework
          </h2>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
            Scaling is not "increase the budget." It is controlled progression built on signal integrity,
            creative performance and algorithmic trust.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <AnimateOnScroll stagger={1}>
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-8 h-full">
              <h3 className="text-xl font-bold text-white mb-6 font-serif">The Six-Step Scaling Process</h3>
              <div className="space-y-5">
                {scalingSteps.map((step, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="shrink-0 w-9 h-9 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center mt-0.5">
                      <span className="text-gold font-bold text-xs font-serif">{step.step}</span>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white mb-1 font-serif">{step.title}</div>
                      <div className="text-sm text-slate-400 font-sans leading-relaxed">{step.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-white/[0.06] space-y-2">
                {[
                  'Strong signal integrity → Lattice models accurately',
                  'Strong creative → Andromeda ranks favourably',
                  'Structured distribution → GEM expands efficiently',
                ].map((point, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-slate-300 font-sans">
                    <span className="text-gold text-[8px] shrink-0">&#9670;</span>
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll stagger={2}>
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                  <Plug className="w-7 h-7 text-gold" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-serif">2025 Technical Checklist</h3>
                  <p className="text-xs text-slate-500 font-sans mt-0.5">Confirm before increasing spend</p>
                </div>
              </div>
              <div className="space-y-3">
                {checklist.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                    <span className="text-sm text-slate-300 font-sans">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-5 border-t border-white/[0.06] rounded-xl bg-gold/[0.04] border border-gold/20 p-4">
                <p className="text-sm text-slate-300 font-sans leading-relaxed">
                  <span className="text-gold font-semibold">If these are not in place, scaling is premature.</span>{' '}
                  Every item on this list directly affects how Andromeda, GEM or Lattice treats your campaigns.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>

        <AnimateOnScroll>
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden">
            <div className="px-6 py-5 border-b border-white/[0.06]">
              <h3 className="text-xl font-bold text-white font-serif">What to Look for in a Meta Ads Professional</h3>
              <p className="text-sm text-slate-400 font-sans mt-1">If they cannot explain how Meta ranks, distributes and models — that is a red flag.</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/[0.06]">
                    <th className="text-left px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-widest font-sans w-1/2">
                      Surface-Level Agency
                    </th>
                    <th className="text-left px-6 py-4 text-xs font-semibold text-gold uppercase tracking-widest font-sans w-1/2">
                      Real Meta Ads Specialist
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <tr
                      key={i}
                      className={`border-b border-white/[0.04] ${i % 2 === 0 ? 'bg-white/[0.01]' : ''}`}
                    >
                      <td className="px-6 py-4 text-sm text-slate-500 font-sans leading-relaxed">{row.surface}</td>
                      <td className="px-6 py-4 text-sm text-slate-200 font-sans leading-relaxed">{row.specialist}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
