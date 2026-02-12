import Link from 'next/link';
import { TrendingUp, Calendar, ArrowRight } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';

export default function CaseStudyTeaser() {
  return (
    <section className="bg-navy-800 text-white" aria-labelledby="case-study-heading">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <AnimateOnScroll>
          <Link
            href="/case-studies/elite-football-agency"
            className="block hover-lift relative rounded-2xl border-2 border-gold/40 bg-gradient-to-br from-navy-800/90 to-navy-900/90 p-8 sm:p-10 shadow-2xl hover:shadow-gold/10 hover:border-gold/60 transition-all duration-300 backdrop-blur-sm"
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="h-px w-8 bg-gold" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold font-sans">
                Case Study
              </p>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                <img
                  src="https://iili.io/fyXHQRf.png"
                  alt="Elite Football Agency Logo"
                  className="h-10 sm:h-12 w-auto"
                />
              </div>
            </div>

            <h2 id="case-study-heading" className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-3 font-serif">
              Alan, Elite Football Agency (Gold Coast)
            </h2>

            <p className="text-xl sm:text-2xl font-semibold text-gold/90 mb-5 leading-tight font-serif">
              Scaled from $50k to $425k in 12 months.
            </p>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 font-sans">
              Alan had the brand and the product, but no system to scale. I built a complete marketing engine from the ground up — demand became so strong he had to limit enrollment.
            </p>

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

            <span className="gold-flat-btn inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold font-sans tracking-wide text-sm">
              Read Full Case Study
              <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
