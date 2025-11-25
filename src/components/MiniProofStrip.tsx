import { motion } from 'framer-motion';
import { fadeIn } from '../utils/animations';

export default function MiniProofStrip() {
  return (
    <section className="bg-slate-900 text-slate-300 border-t border-slate-800" aria-label="Proof strip">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8"
      >
        <ul className="space-y-2">
          <li className="flex items-start gap-2 text-sm sm:text-base text-slate-300 transition-colors duration-150 hover:text-slate-100">
            <span className="text-green-400 mt-0.5">✔</span>
            <span>Agencies going from a team of 2 to 9 in 12 months</span>
          </li>
          <li className="flex items-start gap-2 text-sm sm:text-base text-slate-300 transition-colors duration-150 hover:text-slate-100">
            <span className="text-green-400 mt-0.5">✔</span>
            <span>Local businesses seeing leads pop off before breakfast</span>
          </li>
          <li className="flex items-start gap-2 text-sm sm:text-base text-slate-300 transition-colors duration-150 hover:text-slate-100">
            <span className="text-green-400 mt-0.5">✔</span>
            <span>Blokes who'd sworn off marketing finally getting predictable enquiry flow</span>
          </li>
          <li className="flex items-start gap-2 text-sm sm:text-base text-slate-300 transition-colors duration-150 hover:text-slate-100">
            <span className="text-green-400 mt-0.5">✔</span>
            <span>Zero fluff, zero confusion, zero "optimising" (whatever the hell that means)</span>
          </li>
        </ul>

        <p className="mt-4 text-sm text-slate-400">
          You don't need magic — you need a simple system you can understand without a translator.
        </p>
      </motion.div>
    </section>
  );
}
