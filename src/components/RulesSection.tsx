import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';

const rules = [
  {
    number: '01',
    title: 'No Proof, No Deal.',
    description: "If I can't show you where the money came from in 90 days, you don't pay. Simple."
  },
  {
    number: '02',
    title: 'No Fluff. No Black Box.',
    description: "If your numbers can't be read in under 30 seconds, it's not real transparency. I show you everything."
  },
  {
    number: '03',
    title: 'Cut Fast. Scale Hard.',
    description: 'We keep what works. Everything else dies immediately. No waiting, no dragging.'
  },
  {
    number: '04',
    title: 'One Offer. One System.',
    description: 'Agencies sell SEO. Funnels. Tricks. I build you a pipeline you can sleep on.'
  }
];

export default function RulesSection() {
  return (
    <section className="bg-slate-900 text-white" aria-labelledby="rules-heading">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20"
      >
        {/* Section Header */}
        <div className="mb-12">
          <h2 id="rules-heading" className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-serif">
            The Rules of the Game
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400 font-sans">
            If we work together, here's what you can expect — every time.
          </p>
        </div>

        {/* Rules Stack */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="space-y-8"
        >
          {rules.map((rule, index) => (
            <motion.div
              key={rule.number}
              variants={fadeInUp}
              className="relative"
            >
              {/* Vertical line connector (except for last item) */}
              {index < rules.length - 1 && (
                <div className="absolute left-[17px] top-12 bottom-0 w-px bg-gradient-to-b from-gold/50 to-transparent" />
              )}

              <div className="flex gap-6">
                {/* Number Badge */}
                <div className="flex-shrink-0">
                  <div className="w-9 h-9 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center relative z-10">
                    <span className="text-sm font-bold text-gold font-serif">{rule.number}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pb-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 font-serif">
                    {rule.title}
                  </h3>
                  <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
                    {rule.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
