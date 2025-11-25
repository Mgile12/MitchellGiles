import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Zap } from 'lucide-react';
import { useState } from 'react';
import { fadeInUp, staggerContainer } from '../utils/animations';

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
}

function FAQItem({ question, answer, index }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{
        scale: 1.01,
        transition: { duration: 0.2, ease: 'easeOut' }
      }}
      className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
    >
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-4 p-5 text-left relative group"
        aria-expanded={isOpen}
        whileTap={{ scale: 0.99 }}
      >
        <div className="flex items-start gap-3 flex-1">
          <motion.div
            animate={{
              rotate: isOpen ? 180 : 0,
              scale: isOpen ? 1.1 : 1,
            }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
              isOpen
                ? 'bg-orange-500 text-white'
                : 'bg-slate-100 text-slate-600 group-hover:bg-orange-50 group-hover:text-orange-500'
            } transition-colors duration-200`}
          >
            <Zap className="w-4 h-4" />
          </motion.div>
          <span className={`text-base sm:text-lg font-semibold transition-colors duration-200 ${
            isOpen ? 'text-orange-500' : 'text-slate-900 group-hover:text-slate-700'
          }`}>
            {question}
          </span>
        </div>
        <motion.div
          animate={{
            rotate: isOpen ? 180 : 0,
            scale: isOpen ? 1.1 : 1,
          }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <ChevronDown
            className={`w-5 h-5 flex-shrink-0 transition-colors duration-200 ${
              isOpen ? 'text-orange-500' : 'text-slate-400 group-hover:text-slate-600'
            }`}
          />
        </motion.div>

        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-orange-50/0 via-orange-50/50 to-orange-50/0 pointer-events-none"
          initial={{ x: '-100%', opacity: 0 }}
          whileHover={{ x: '100%', opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        />
      </motion.button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: 'auto',
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              height: { duration: 0.3, ease: 'easeOut' },
              opacity: { duration: 0.25, ease: 'easeOut' }
            }}
            className="overflow-hidden"
          >
            <motion.div
              initial={{ y: -10 }}
              animate={{ y: 0 }}
              exit={{ y: -10 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="px-5 pb-5 pt-1 pl-16"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.3 }}
                className="border-l-2 border-orange-200 pl-4"
              >
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  {answer}
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  const faqs = [
    {
      question: "How long until I see results?",
      answer: "Most clients see their first enquiries within 2-3 weeks. Consistent flow? Usually by week 6-8. If you don't have clear, trackable leads within 90 days, I don't want your money."
    },
    {
      question: "What if I've been burned by agencies before?",
      answer: "Good. That means you'll actually appreciate transparency. I'll show you exactly where every lead comes from, what's working, and what's not. No dashboards designed to confuse you."
    },
    {
      question: "How much does it cost?",
      answer: "Depends on what you need and where you're at. We'll talk straight on the call. No surprise invoices, no hidden fees. You'll know exactly what you're paying and why."
    },
    {
      question: "Do I need to sign a long-term contract?",
      answer: "No lock-ins. If it's not working, you can walk. Simple as that. I'd rather you stay because it's working, not because you're trapped."
    },
  ];

  return (
    <section className="bg-slate-50 text-slate-900" aria-labelledby="faq-heading">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16"
      >
        <div className="mb-10">
          <h2 id="faq-heading" className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
            Questions I get asked (a lot)
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Straight answers. No sales talk.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              index={index}
            />
          ))}
        </motion.div>

        <div className="mt-10 text-center">
          <p className="text-base text-slate-600">
            Needs results ASAP?{' '}
            <a
              href="tel:0474870535"
              className="font-semibold text-orange-500 hover:text-orange-600 underline underline-offset-2 transition-colors duration-150"
            >
              Jump on a call
            </a>
          </p>
        </div>
      </motion.div>
    </section>
  );
}
