import { motion } from 'framer-motion';
import { fadeInUp } from '../utils/animations';

export default function FinalCTA() {
  return (
    <section className="bg-slate-950 text-slate-50">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16"
      >
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">
            Ready to stop gambling with your leads?
          </h2>

          <div className="mt-6 space-y-3">
            <p className="text-base sm:text-lg text-slate-300">
              I'll tell you where your pipeline is leaking, what's stealing your money, and what we can fix in the next 90 days.
            </p>
          </div>

          <div className="mt-10">
            <a
              href="https://app.usemotion.com/meet/mitchell-giles-xsnm/d2h4337"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-semibold bg-orange-500 text-white hover:bg-orange-600 hover:scale-105 hover:shadow-lg transition-transform transition-shadow duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              Book a Call
            </a>
          </div>

          <div className="mt-6">
            <button
              type="button"
              className="text-xs sm:text-sm font-medium text-slate-300 underline underline-offset-4 decoration-slate-500 hover:text-slate-100 hover:decoration-slate-300 transition-colors duration-150"
            >
              Not ready yet? Grab the free guide instead.
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
