import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';
import StatCard from './StatCard';

export default function ProcessTimeline() {
  return (
    <section className="bg-slate-50 text-slate-900">
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
            How it works
          </h2>
        </div>

        <div className="hidden md:block h-px w-full bg-slate-200 mb-10"></div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid gap-8 md:grid-cols-3"
        >
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -3 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="h-full flex flex-col rounded-xl border border-slate-200 bg-white p-6 hover:shadow-sm transition-shadow duration-150"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
              className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-slate-50"
            >
              1
            </motion.div>
            <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-4">
              Step 1: Diagnose
            </h3>
            <div className="space-y-3">
              <p className="text-sm sm:text-base text-slate-700">
                We jump on a call. You show me what's happening. I'll tell you straight if you've been ripped off, what's broken, and what we can fix fast.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -3 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="h-full flex flex-col rounded-xl border border-slate-200 bg-white p-6 hover:shadow-sm transition-shadow duration-150"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, ease: "easeOut", delay: 0.25 }}
              className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-slate-50"
            >
              2
            </motion.div>
            <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-4">
              Step 2: Build Your Pipeline
            </h3>
            <div className="space-y-3">
              <p className="text-sm sm:text-base text-slate-700">
                We build the offer, funnel, ads, and tracking. Nothing fancy. Everything effective.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -3 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="h-full flex flex-col rounded-xl border border-slate-200 bg-white p-6 hover:shadow-sm transition-shadow duration-150"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, ease: "easeOut", delay: 0.3 }}
              className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-slate-50"
            >
              3
            </motion.div>
            <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-4">
              Step 3: Scale
            </h3>
            <div className="space-y-3">
              <p className="text-sm sm:text-base text-slate-700">
                We see what's working, double down, and keep killing what sucks.
              </p>
            </div>
          </motion.div>
        </motion.div>

        <p className="mt-8 text-center text-base sm:text-lg text-slate-600">
          It's not complicated. It's just honest.
        </p>
      </motion.div>
    </section>
  );
}
