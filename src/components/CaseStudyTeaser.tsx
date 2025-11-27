import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { fadeInUp } from '../utils/animations';

export default function CaseStudyTeaser() {
  return (
    <section className="bg-slate-50 text-slate-900" aria-labelledby="case-study-heading">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-orange-500 mb-3">
              Case Study
            </p>

            <div className="flex items-center gap-4 mb-4">
              <img
                src="/Asset 51x transparent.png"
                alt="Elite Football Agency Logo"
                className="h-12 sm:h-16 w-auto"
              />
            </div>

            <h2 id="case-study-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-4 sm:mb-5">
              Alan, Elite Football Agency (Gold Coast)
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 sm:mb-8">
              Alan already had the programs, reputation, and results. What he did not have was a system.
              In twelve months we turned his manual, messy setup into a clean marketing engine, taking
              Elite Football Agency from <span className="font-semibold text-slate-900">50k to 425k</span> with
              packed events and demand he had to slow down.
            </p>

            <Link to="/case-studies/elite-football-agency">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.15 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                See the full case study
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
