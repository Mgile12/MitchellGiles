import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, BarChart3, Image as ImageIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { fadeInUp } from '../utils/animations';

export default function CaseStudiesPage() {
  return (
    <div className="bg-navy-950 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 pt-24 sm:pt-28">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-gold transition-colors duration-200 mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="relative rounded-2xl border border-gold/30 bg-navy-900 p-8 sm:p-12 text-white shadow-xl overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(200,161,78,0.08),transparent_60%)]" />
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3 font-sans">
                Case Study
              </p>
              <div className="mb-6">
                <img
                  src="/Asset 51x transparent.png"
                  alt="Elite Football Agency Logo"
                  className="h-16 sm:h-20 w-auto"
                />
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 font-serif">
                Alan, Elite Football Agency, Gold Coast
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-sans">
                From grinding for 7 years to the first year that actually felt successful
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-white/[0.06] bg-navy-900 p-6 sm:p-8">
            <div className="max-w-none">
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-4 font-sans">
                Alan had been building Elite Football Agency for six years.
              </p>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-4 font-sans">
                The passion was there. The talent was there. Inside the football community, his name carried weight.
              </p>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-4 font-sans">
                But online, it looked like a side project.
              </p>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-4 font-sans">
                The website did not show the level of trust, credibility, and authority they had earned.
                They were talking to kids instead of the parents who were pulling the wallet out.
                They had more than 5,000 people on their email list and almost none of it was being used.
              </p>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-4 font-sans">
                Most of the marketing, ticketing, admin, ad management, and CRM work was manual.
                Alan was carrying all of it.
              </p>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-4 font-sans">
                Running the programs.<br />
                Taking the sales calls.<br />
                Managing operations.<br />
                Trying to grow nationwide at the same time.
              </p>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-4 font-sans">
                After seven years, he said something that stuck with me:
              </p>
              <p className="text-xl sm:text-2xl font-semibold text-white italic mb-4 pl-4 border-l-4 border-gold font-serif">
                "This was the first year I actually felt successful."
              </p>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
                Not because the business was weak,<br />
                because the systems were not supporting the level he was playing at.
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-white/[0.06] bg-navy-900 p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-white mb-6 font-serif">
              The situation, before we started
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6 font-sans">
              When I stepped in, it was obvious Alan already had the raw ingredients for something huge.
              He did not need hype. He needed structure.
            </p>

            <h3 className="text-xl font-bold text-white mb-4 font-serif">The biggest gaps</h3>

            <div className="space-y-3 mb-6">
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
                The website was not showing the trust, credibility, and results they had earned.
              </p>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
                The email list was not being engaged or monetised.
              </p>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
                The messaging was aimed at the wrong audience, talking to kids instead of parents.
              </p>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
                There was no real tracking, so decisions were based on gut, not data.
              </p>
            </div>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
              Nothing was falling apart.<br />
              It just was not set up to match the quality of what they were doing on the field.
            </p>
          </div>

          <div className="rounded-xl border border-white/[0.06] bg-navy-900 p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-white mb-6 font-serif">
              What we did, together
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6 font-sans">
              Everything we changed was built to support what Alan and his coaching team were already doing.
            </p>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6 font-sans">
              My role was simple:<br />
              Bring structure, clarity, and systems that matched the level their brand deserved.
            </p>

            <h3 className="text-xl font-bold text-white mb-4 font-serif">Here is what we built together</h3>

            <div className="space-y-3 mb-6">
              {[
                'A new website that finally reflected their authority, results, and track record',
                'Messaging that spoke directly to the real decision makers, the parents',
                'A full email marketing setup with campaigns and automations',
                'Automated pipelines that removed hours of manual admin and ticketing',
                'A cleaner, more powerful CRM that the team could actually use',
                'Funnels for events, waitlists, and upsells',
                'Tracking and analytics so decisions could be made with confidence, not guesswork',
                'New ad campaigns that targeted the right audience with the right message',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                  <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
              The goal was not to change the soul of the business.<br />
              It was to help Alan amplify what was already great.
            </p>
          </div>

          <div className="rounded-xl border border-white/[0.06] bg-navy-900 p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3 font-serif">
              <BarChart3 className="w-6 h-6 text-gold" />
              The result, after the systems caught up
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6 font-sans">
              Once the systems matched the quality of the product, everything clicked.
            </p>

            <h3 className="text-xl font-bold text-white mb-4 font-serif">Together, we saw</h3>

            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {[
                { value: '$50k → $425k', label: 'Revenue growth in twelve months' },
                { value: '$100k', label: 'First 100k week' },
                { value: '$82k', label: 'Single day from waitlist and post event funnel' },
                { value: '34 → 56', label: 'Event attendees increase' },
                { value: '$14k → $24k', label: 'Event revenue increase' },
                { value: '$100k+', label: 'Generated through email alone' },
                { value: '1,177%', label: 'Total orders increase' },
                { value: '3,554%', label: 'Bookings surge' },
                { value: '10x+', label: 'ROAS on ad sets' },
                { value: '2 → 9', label: 'Team growth, plus head office on the way' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="bg-gold/10 rounded-lg p-4 border border-gold/20"
                >
                  <p className="text-2xl font-bold text-gold mb-1 font-serif">{stat.value}</p>
                  <p className="text-sm text-slate-300 font-sans">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6 font-sans">
              It reached the point where Alan was asking to lower the ad budget because demand was overwhelming.
            </p>

            <h3 className="text-xl font-bold text-white mb-4 font-serif">Every win came from the combination of</h3>

            <div className="space-y-2">
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">Alan's vision</p>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">Elite Football Agency's team</p>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">The systems we built around them</p>
            </div>
          </div>

          <div className="rounded-xl border border-white/[0.06] bg-navy-800 p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3 font-serif">
              <ImageIcon className="w-6 h-6 text-gold" />
              Visual proof
            </h2>
            <p className="text-slate-400 mb-6 text-center italic font-sans">
              No hype needed. The numbers and screenshots do the talking.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { src: '/files_7126411-1763632208151-Before and After Image Youtube Thumbnail (4).png', alt: 'Before and after results showcase' },
                { src: '/files_7126411-1763632208203-Before and After Image Youtube Thumbnail (3).png', alt: 'Revenue and performance metrics' },
                { src: '/files_7126411-1763632208250-Before and After Image Youtube Thumbnail (5).png', alt: 'Growth metrics and statistics' },
                { src: '/files_7126411-1763632304045-Screenshot 2025-07-24 143236.png', alt: 'Dashboard analytics screenshot' },
                { src: '/image.png', alt: 'Performance dashboard' },
                { src: '/Screenshot 2025-08-04 132125.png', alt: 'Ad account results' },
              ].map((img, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-lg overflow-hidden border border-white/[0.06] bg-navy-900"
                >
                  <img src={img.src} alt={img.alt} className="w-full h-auto object-cover" />
                </motion.div>
              ))}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="rounded-lg overflow-hidden border border-white/[0.06] bg-navy-900 md:col-span-2"
              >
                <img
                  src="/Screenshot 2025-11-25 181608.png"
                  alt="Monitor performance metrics"
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            </div>
          </div>

          <div className="rounded-xl border border-gold/20 bg-navy-800 p-8 sm:p-12">
            <h2 className="text-2xl font-bold text-white mb-6 font-serif">In Alan's words</h2>
            <blockquote className="text-xl sm:text-2xl font-semibold text-white italic pl-6 border-l-4 border-gold font-serif">
              "After 7 years of building, this was the first year I actually felt successful."
            </blockquote>
          </div>

          <div className="relative rounded-xl bg-navy-900 border border-gold/30 p-8 sm:p-12 text-center shadow-xl overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(200,161,78,0.06),transparent_70%)]" />
            <div className="relative">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-serif">
                Want systems that match the level you are playing at?
              </h2>
              <p className="text-lg text-slate-300 mb-6 max-w-2xl mx-auto font-sans">
                Alan did not need a new dream.<br />
                He needed a marketing system that supported what he had already built.
              </p>
              <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto font-sans">
                If you are in the same spot, overloaded and under supported by your systems, let's talk.
              </p>
              <a
                href="https://app.usemotion.com/meet/mitchell-giles-xsnm/d2h4337"
                target="_blank"
                rel="noopener noreferrer"
                className="gold-flat-btn inline-flex items-center justify-center rounded-lg px-8 py-4 text-base font-semibold tracking-wide"
              >
                Book a strategy call
              </a>
              <p className="text-sm text-slate-400 mt-4 font-sans">
                to see what your business could look like with a pipeline that finally matches your ambition.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
