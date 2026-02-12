import AnimateOnScroll from './AnimateOnScroll';

const rules = [
  {
    number: '01',
    title: 'Proof or We Stop.',
    description: "Every decision ties back to revenue. If something cannot be tracked, validated, or defended with numbers, it does not survive. Opinion never outranks data."
  },
  {
    number: '02',
    title: 'Full Visibility. Always.',
    description: "You will know what is running, why it is running, and what it is producing. No fluff. No hidden mechanics. No guessing where your money went."
  },
  {
    number: '03',
    title: 'Kill What Loses. Double Down on What Wins.',
    description: 'Anything that underperforms gets cut without emotion. What works gets fed aggressively. Speed beats comfort every time.'
  },
  {
    number: '04',
    title: 'One Core Offer. One Revenue System.',
    description: 'No scattered tactics. No random experiments. Everything is built to push a single offer through a single system designed to compound, not spike and die.'
  }
];

export default function RulesSection() {
  return (
    <section className="bg-navy-800 text-white" aria-labelledby="rules-heading">
      <AnimateOnScroll className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="mb-12">
          <h2 id="rules-heading" className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-serif">
            The Rules of the Game
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400 font-sans">
            If we work together, here is what does not change.
          </p>
        </div>

        <div className="space-y-8">
          {rules.map((rule, index) => (
            <div key={rule.number} className="relative">
              {index < rules.length - 1 && (
                <div className="absolute left-[17px] top-12 bottom-0 w-px bg-gradient-to-b from-gold/50 to-transparent" />
              )}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-9 h-9 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center relative z-10">
                    <span className="text-sm font-bold text-gold font-serif">{rule.number}</span>
                  </div>
                </div>
                <div className="flex-1 pb-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 font-serif">
                    {rule.title}
                  </h3>
                  <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
                    {rule.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </AnimateOnScroll>
    </section>
  );
}
