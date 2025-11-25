import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';
import StatCard from './StatCard';

export default function Testimonials() {
  return (
    <section className="bg-white text-slate-900">
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
            What other owners say (so you don't just take my word for it).
          </h2>
          <div className="mt-4 space-y-2">
            <p className="text-base sm:text-lg text-slate-600">
              I can talk strategy all day.
            </p>
            <p className="text-base sm:text-lg text-slate-600">
              This is what it looks like on the other side of the screen.
            </p>
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid gap-6 md:grid-cols-2"
        >
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -4, scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="h-full rounded-xl border border-slate-200 bg-slate-50 p-6 flex flex-col shadow-sm hover:shadow-md transition-shadow duration-150"
          >
            <p className="text-base sm:text-lg font-semibold text-slate-900 mb-4">
              "Finally someone who speaks human. Not marketing-ese."
            </p>
            <div className="mt-auto pt-4 border-t border-slate-200 flex flex-col">
              <span className="text-sm font-semibold text-slate-900">Jarryd, Carpenter</span>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -4, scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="h-full rounded-xl border border-slate-200 bg-slate-50 p-6 flex flex-col shadow-sm hover:shadow-md transition-shadow duration-150"
          >
            <p className="text-base sm:text-lg font-semibold text-slate-900 mb-4">
              "He treated my money like it was his. Rare these days."
            </p>
            <div className="mt-auto pt-4 border-t border-slate-200 flex flex-col">
              <span className="text-sm font-semibold text-slate-900">Chris, Landscaper</span>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -4, scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="h-full rounded-xl border border-slate-200 bg-slate-50 p-6 flex flex-col shadow-sm hover:shadow-md transition-shadow duration-150"
          >
            <p className="text-base sm:text-lg font-semibold text-slate-900 mb-4">
              "I've hired 4 agencies. Mitchell is the only one who showed me where the leads came from."
            </p>
            <div className="mt-auto pt-4 border-t border-slate-200 flex flex-col">
              <span className="text-sm font-semibold text-slate-900">Toby, Gym Owner</span>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -4, scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="h-full rounded-xl border border-slate-200 bg-slate-50 p-6 flex flex-col shadow-sm hover:shadow-md transition-shadow duration-150"
          >
            <p className="text-base sm:text-lg font-semibold text-slate-900 mb-4">
              "3 weeks in and I've already hired another guy."
            </p>
            <div className="mt-auto pt-4 border-t border-slate-200 flex flex-col">
              <span className="text-sm font-semibold text-slate-900">Rhys, Plumber</span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
