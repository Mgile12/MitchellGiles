import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
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
      className="border-b border-slate-800/50 overflow-hidden"
    >
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
        aria-expanded={isOpen}
      >
        <span className={`text-base sm:text-lg font-semibold transition-colors duration-200 font-sans ${
          isOpen ? 'text-gold' : 'text-white group-hover:text-gold/80'
        }`}>
          {question}
        </span>
        <motion.div
          animate={{
            rotate: isOpen ? 180 : 0,
          }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <ChevronDown
            className={`w-5 h-5 flex-shrink-0 transition-colors duration-200 ${
              isOpen ? 'text-gold' : 'text-slate-500 group-hover:text-gold/60'
            }`}
          />
        </motion.div>
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
              className="pb-6"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.3 }}
                className="border-l-2 border-gold/30 pl-4"
              >
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
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
    <section className="bg-[#121420] text-slate-50" aria-labelledby="faq-heading">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20"
      >
        <div className="mb-12">
          <h2 id="faq-heading" className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-serif">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400 font-sans">
            Real answers. No fluff.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="space-y-0"
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

        <div className="mt-12 pt-8 border-t border-slate-800/50 text-center">
          <p className="text-base text-slate-400 font-sans">
            Needs results ASAP?{' '}
            <a
              href="tel:0474870535"
              className="font-semibold text-gold hover:text-gold/80 underline underline-offset-2 transition-colors duration-150"
            >
              Jump on a call
            </a>
          </p>
        </div>
      </motion.div>
    </section>
  );
}
