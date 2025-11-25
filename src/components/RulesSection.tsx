import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';

export default function RulesSection() {
  return (
    <section className="bg-white text-slate-900" aria-labelledby="rules-heading">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16"
      >
        {/* Section Header */}
        <h2 id="rules-heading" className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 text-center md:text-left">
          Here's how I operate. Non-negotiable.
        </h2>

        {/* Rules Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="mt-8 grid gap-6 md:grid-cols-2"
        >
          {/* Rule Card 1 */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -4, scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="h-full rounded-xl border border-slate-200 bg-slate-50 p-5 shadow-sm hover:shadow-md flex flex-col transition-shadow duration-150"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Rule 1
            </p>
            <h3 className="mt-2 text-sm sm:text-base font-semibold text-slate-900">
              If I can't show you where the money came from in 90 days, I don't want your business.
            </h3>
            <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
              Simple. Either it works or it doesn't. No grey area.
            </p>
          </motion.div>

          {/* Rule Card 2 */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -4, scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="h-full rounded-xl border border-slate-200 bg-slate-50 p-5 shadow-sm hover:shadow-md flex flex-col transition-shadow duration-150"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Rule 2
            </p>
            <h3 className="mt-2 text-sm sm:text-base font-semibold text-slate-900">
              No black-box reports.
            </h3>
            <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
              If you can't read your numbers in under 30 seconds, it's fake transparency.
            </p>
          </motion.div>

          {/* Rule Card 3 */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -4, scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="h-full rounded-xl border border-slate-200 bg-slate-50 p-5 shadow-sm hover:shadow-md flex flex-col transition-shadow duration-150"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Rule 3
            </p>
            <h3 className="mt-2 text-sm sm:text-base font-semibold text-slate-900">
              Kill what sucks, fast.
            </h3>
            <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
              We keep what works. Everything else gets dropped on the spot.
            </p>
          </motion.div>

          {/* Rule Card 4 */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -4, scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="h-full rounded-xl border border-slate-200 bg-slate-50 p-5 shadow-sm hover:shadow-md flex flex-col transition-shadow duration-150"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Rule 4
            </p>
            <h3 className="mt-2 text-sm sm:text-base font-semibold text-slate-900">
              Agencies sell SEO or funnels. I sell one thing: a pipeline you can sleep on.
            </h3>
            <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
              You're tired of chaos. I build stability.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
