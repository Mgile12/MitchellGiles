import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';

export default function ServicesOverview() {
  return (
    <section id="services" className="bg-white text-slate-900">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16"
      >
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
            What I actually do
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            No packages. No bronze, silver, gold. No full-stack solutions.
          </p>
          <p className="mt-2 text-base sm:text-lg text-slate-700">
            I build you a simple, predictable lead pipeline, built for real Aussie customers, not marketing textbooks.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="space-y-3"
        >
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -3 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="flex items-start gap-3 p-4 rounded-lg border border-slate-200 bg-slate-50 hover:shadow-sm transition-shadow duration-150"
          >
            <span className="text-orange-500 font-semibold text-lg">1.</span>
            <p className="text-sm sm:text-base text-slate-700">
              Clean up your offer so customers instantly get it
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -3 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="flex items-start gap-3 p-4 rounded-lg border border-slate-200 bg-slate-50 hover:shadow-sm transition-shadow duration-150"
          >
            <span className="text-orange-500 font-semibold text-lg">2.</span>
            <p className="text-sm sm:text-base text-slate-700">
              Build a dead-simple funnel that doesn't confuse anyone
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -3 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="flex items-start gap-3 p-4 rounded-lg border border-slate-200 bg-slate-50 hover:shadow-sm transition-shadow duration-150"
          >
            <span className="text-orange-500 font-semibold text-lg">3.</span>
            <p className="text-sm sm:text-base text-slate-700">
              Set up ads that work for your exact industry
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -3 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="flex items-start gap-3 p-4 rounded-lg border border-slate-200 bg-slate-50 hover:shadow-sm transition-shadow duration-150"
          >
            <span className="text-orange-500 font-semibold text-lg">4.</span>
            <p className="text-sm sm:text-base text-slate-700">
              Track your leads properly so you always know what's happening
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -3 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="flex items-start gap-3 p-4 rounded-lg border border-slate-200 bg-slate-50 hover:shadow-sm transition-shadow duration-150"
          >
            <span className="text-orange-500 font-semibold text-lg">5.</span>
            <p className="text-sm sm:text-base text-slate-700">
              Kill anything that wastes your money
            </p>
          </motion.div>
        </motion.div>

        <p className="mt-8 text-base sm:text-lg text-slate-700 font-semibold text-center md:text-left">
          You're not buying 'marketing.' You're buying peace of mind.
        </p>
      </motion.div>
    </section>
  );
}
