import { motion } from 'framer-motion';
import { TrendingUp, Calendar } from 'lucide-react';
import { fadeInUp } from '../utils/animations';

export default function CaseStudyTeaser() {
  return (
    <section className="bg-navy-800 text-white" aria-labelledby="case-study-heading">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative rounded-2xl border-2 border-gold/40 bg-gradient-to-br from-navy-800/90 to-navy-900/90 p-8 sm:p-10 shadow-2xl hover:shadow-gold/10 hover:border-gold/60 transition-all duration-300 backdrop-blur-sm"
          >
            {/* Case Study Label */}
            <div className="flex items-center gap-2 mb-6">
              <span className="h-px w-8 bg-gold" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold font-sans">
                Case Study
              </p>
            </div>

            {/* Logo */}
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                <img
                  src="https://freeimage.host/i/asset-1-at-2x-transparent-1.fyXHQRf"
                  alt="Elite Football Agency Logo"
                  className="h-10 sm:h-12 w-auto"
                />
              </div>
            </div>

            {/* Title */}
            <h2 id="case-study-heading" className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-3 font-serif">
              Alan, Elite Football Agency (Gold Coast)
            </h2>

            {/* Headline - Lead with outcome */}
            <p className="text-xl sm:text-2xl font-semibold text-gold/90 mb-5 leading-tight font-serif">
              Scaled from $50k to $425k in 12 months.
            </p>

            {/* Body Copy */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 font-sans">
              Alan had the brand and the product, but no system to scale. I built a complete marketing engine from the ground up — demand became so strong he had to limit enrollment.
            </p>

            {/* Stats Badges */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-lg px-4 py-2">
                <TrendingUp className="w-4 h-4 text-gold" />
                <div>
                  <p className="text-xs text-gold/70 font-semibold uppercase tracking-wide font-sans">Revenue Increase</p>
                  <p className="text-sm font-bold text-white font-serif">$375k</p>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-lg px-4 py-2">
                <Calendar className="w-4 h-4 text-gold" />
                <div>
                  <p className="text-xs text-gold/70 font-semibold uppercase tracking-wide font-sans">Timeframe</p>
                  <p className="text-sm font-bold text-white font-serif">12 Months</p>
                </div>
              </div>
            </div>

            <div className="inline-flex items-center px-8 py-4 bg-navy-950/60 border border-white/[0.06] text-slate-400 font-semibold rounded-lg font-sans tracking-wide text-sm">
              Coming Soon
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
