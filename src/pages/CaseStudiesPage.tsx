import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, BarChart3, Image as ImageIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { fadeInUp } from '../utils/animations';

export default function CaseStudiesPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 transition-colors duration-200 mb-8"
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
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 sm:p-12 text-white shadow-xl">
            <p className="text-xs font-semibold uppercase tracking-wide text-orange-100 mb-3">
              Case Study
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Alan, Elite Football Agency, Gold Coast
            </h1>
            <p className="text-lg sm:text-xl text-orange-50 leading-relaxed">
              From grinding for 7 years to the first year that actually felt successful
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sm:p-8">
            <div className="prose prose-slate max-w-none">
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-4">
                Alan had been building Elite Football Agency for six years.
              </p>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-4">
                The passion was there. The talent was there. Inside the football community, his name carried weight.
              </p>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-4">
                But online, it looked like a side project.
              </p>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-4">
                The website did not show the level of trust, credibility, and authority they had earned.
                They were talking to kids instead of the parents who were pulling the wallet out.
                They had more than 5,000 people on their email list and almost none of it was being used.
              </p>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-4">
                Most of the marketing, ticketing, admin, ad management, and CRM work was manual.
                Alan was carrying all of it.
              </p>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-4">
                Running the programs.<br />
                Taking the sales calls.<br />
                Managing operations.<br />
                Trying to grow nationwide at the same time.
              </p>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-4">
                After seven years, he said something that stuck with me:
              </p>
              <p className="text-xl sm:text-2xl font-semibold text-slate-900 italic mb-4 pl-4 border-l-4 border-orange-500">
                "This was the first year I actually felt successful."
              </p>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                Not because the business was weak,<br />
                because the systems were not supporting the level he was playing at.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              The situation, before we started
            </h2>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6">
              When I stepped in, it was obvious Alan already had the raw ingredients for something huge.
              He did not need hype. He needed structure.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mb-4">The biggest gaps</h3>

            <div className="space-y-3 mb-6">
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                The website was not showing the trust, credibility, and results they had earned.
              </p>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                The email list was not being engaged or monetised.
              </p>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                The messaging was aimed at the wrong audience, talking to kids instead of parents.
              </p>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                There was no real tracking, so decisions were based on gut, not data.
              </p>
            </div>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              Nothing was falling apart.<br />
              It just was not set up to match the quality of what they were doing on the field.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              What we did, together
            </h2>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6">
              Everything we changed was built to support what Alan and his coaching team were already doing.
            </p>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6">
              My role was simple:<br />
              Bring structure, clarity, and systems that matched the level their brand deserved.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mb-4">Here is what we built together</h3>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                  A new website that finally reflected their authority, results, and track record
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                  Messaging that spoke directly to the real decision makers, the parents
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                  A full email marketing setup with campaigns and automations
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                  Automated pipelines that removed hours of manual admin and ticketing
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                  A cleaner, more powerful CRM that the team could actually use
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                  Funnels for events, waitlists, and upsells
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                  Tracking and analytics so decisions could be made with confidence, not guesswork
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                  New ad campaigns that targeted the right audience with the right message
                </p>
              </div>
            </div>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              The goal was not to change the soul of the business.<br />
              It was to help Alan amplify what was already great.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <BarChart3 className="w-6 h-6 text-orange-500" />
              The result, after the systems caught up
            </h2>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6">
              Once the systems matched the quality of the product, everything clicked.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mb-4">Together, we saw</h3>

            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="bg-orange-50 rounded-lg p-4 border border-orange-200"
              >
                <p className="text-2xl font-bold text-orange-600 mb-1">$50k → $425k</p>
                <p className="text-sm text-slate-700">Revenue growth in twelve months</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="bg-orange-50 rounded-lg p-4 border border-orange-200"
              >
                <p className="text-2xl font-bold text-orange-600 mb-1">$100k</p>
                <p className="text-sm text-slate-700">First 100k week</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="bg-orange-50 rounded-lg p-4 border border-orange-200"
              >
                <p className="text-2xl font-bold text-orange-600 mb-1">$82k</p>
                <p className="text-sm text-slate-700">Single day from waitlist and post event funnel</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="bg-orange-50 rounded-lg p-4 border border-orange-200"
              >
                <p className="text-2xl font-bold text-orange-600 mb-1">34 → 56</p>
                <p className="text-sm text-slate-700">Event attendees increase</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="bg-orange-50 rounded-lg p-4 border border-orange-200"
              >
                <p className="text-2xl font-bold text-orange-600 mb-1">$14k → $24k</p>
                <p className="text-sm text-slate-700">Event revenue increase</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="bg-orange-50 rounded-lg p-4 border border-orange-200"
              >
                <p className="text-2xl font-bold text-orange-600 mb-1">$100k+</p>
                <p className="text-sm text-slate-700">Generated through email alone</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="bg-orange-50 rounded-lg p-4 border border-orange-200"
              >
                <p className="text-2xl font-bold text-orange-600 mb-1">1,177%</p>
                <p className="text-sm text-slate-700">Total orders increase</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="bg-orange-50 rounded-lg p-4 border border-orange-200"
              >
                <p className="text-2xl font-bold text-orange-600 mb-1">3,554%</p>
                <p className="text-sm text-slate-700">Bookings surge</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="bg-orange-50 rounded-lg p-4 border border-orange-200"
              >
                <p className="text-2xl font-bold text-orange-600 mb-1">10x+</p>
                <p className="text-sm text-slate-700">ROAS on ad sets</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="bg-orange-50 rounded-lg p-4 border border-orange-200"
              >
                <p className="text-2xl font-bold text-orange-600 mb-1">2 → 9</p>
                <p className="text-sm text-slate-700">Team growth, plus head office on the way</p>
              </motion.div>
            </div>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6">
              It reached the point where Alan was asking to lower the ad budget because demand was overwhelming.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mb-4">Every win came from the combination of</h3>

            <div className="space-y-2">
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">Alan's vision</p>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">Elite Football Agency's team</p>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">The systems we built around them</p>
            </div>
          </div>

          <div className="bg-slate-100 rounded-xl shadow-sm border border-slate-200 p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <ImageIcon className="w-6 h-6 text-orange-500" />
              Visual proof
            </h2>
            <p className="text-slate-600 mb-6 text-center italic">
              No hype needed. The numbers and screenshots do the talking.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-lg overflow-hidden shadow-md border border-slate-200"
              >
                <img
                  src="/files_7126411-1763632208151-Before and After Image Youtube Thumbnail (4).png"
                  alt="Before and after results showcase"
                  className="w-full h-auto object-cover"
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-lg overflow-hidden shadow-md border border-slate-200"
              >
                <img
                  src="/files_7126411-1763632208203-Before and After Image Youtube Thumbnail (3).png"
                  alt="Revenue and performance metrics"
                  className="w-full h-auto object-cover"
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-lg overflow-hidden shadow-md border border-slate-200"
              >
                <img
                  src="/files_7126411-1763632208250-Before and After Image Youtube Thumbnail (5).png"
                  alt="Growth metrics and statistics"
                  className="w-full h-auto object-cover"
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-lg overflow-hidden shadow-md border border-slate-200"
              >
                <img
                  src="/files_7126411-1763632304045-Screenshot 2025-07-24 143236.png"
                  alt="Dashboard analytics screenshot"
                  className="w-full h-auto object-cover"
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-lg overflow-hidden shadow-md border border-slate-200"
              >
                <img
                  src="/image.png"
                  alt="Performance dashboard"
                  className="w-full h-auto object-cover"
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-lg overflow-hidden shadow-md border border-slate-200"
              >
                <img
                  src="/Screenshot 2025-08-04 132125.png"
                  alt="Ad account results"
                  className="w-full h-auto object-cover"
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-lg overflow-hidden shadow-md border border-slate-200 md:col-span-2"
              >
                <img
                  src="/Screenshot 2025-11-25 181608.png"
                  alt="Monitor performance metrics"
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl shadow-lg p-8 sm:p-12">
            <h2 className="text-2xl font-bold text-white mb-6">In Alan's words</h2>
            <blockquote className="text-xl sm:text-2xl font-semibold text-white italic pl-6 border-l-4 border-orange-500">
              "After 7 years of building, this was the first year I actually felt successful."
            </blockquote>
          </div>

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-8 sm:p-12 text-center shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Want systems that match the level you are playing at?
            </h2>
            <p className="text-lg text-orange-50 mb-6 max-w-2xl mx-auto">
              Alan did not need a new dream.<br />
              He needed a marketing system that supported what he had already built.
            </p>
            <p className="text-lg text-orange-50 mb-8 max-w-2xl mx-auto">
              If you are in the same spot, overloaded and under supported by your systems, let's talk.
            </p>
            <a
              href="https://app.usemotion.com/meet/mitchell-giles-xsnm/d2h4337"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg px-8 py-3 text-base font-semibold bg-white text-orange-600 hover:bg-orange-50 hover:scale-105 hover:shadow-lg transition-all duration-200"
            >
              Book a strategy call
            </a>
            <p className="text-sm text-orange-100 mt-4">
              to see what your business could look like with a pipeline that finally matches your ambition.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
