'use client';

import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import AnimateOnScroll from './AnimateOnScroll';

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/[0.06] overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
        aria-expanded={isOpen}
      >
        <span className={`text-base sm:text-lg font-semibold transition-colors duration-200 font-sans ${
          isOpen ? 'text-gold' : 'text-white group-hover:text-gold/80'
        }`}>
          {question}
        </span>
        <div
          className={`transition-transform duration-300 ease-out ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        >
          <ChevronDown
            className={`w-5 h-5 flex-shrink-0 transition-colors duration-200 ${
              isOpen ? 'text-gold' : 'text-slate-500 group-hover:text-gold/60'
            }`}
          />
        </div>
      </button>

      <div
        className={`grid transition-all duration-300 ease-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="pb-6">
            <div className="border-l-2 border-gold/30 pl-4">
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
                {answer}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const faqs = [
  {
    question: "How long until I see results?",
    answer: "First enquiries typically arrive within 2-3 weeks. Consistent flow by week 6-8. Clear, trackable leads within 90 days, or you do not pay."
  },
  {
    question: "What if I've been burned by agencies before?",
    answer: "Then you understand the value of transparency. You will see exactly where every lead comes from, what is working, and what is not. Clear reporting that makes sense in 30 seconds."
  },
  {
    question: "How much does it cost?",
    answer: "It depends on your situation and goals. We will discuss everything transparently on the call. No hidden fees, no surprise invoices."
  },
  {
    question: "Do I need to sign a long-term contract?",
    answer: "No lock-ins. If it is not working, you can walk. You stay because the results keep you here, not a contract."
  },
];

export default function FAQSection() {
  return (
    <section className="bg-navy-900 text-slate-50" aria-labelledby="faq-heading">
      <AnimateOnScroll className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="mb-12">
          <h2 id="faq-heading" className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-serif">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/[0.06] text-center">
          <p className="text-base text-slate-400 font-sans">
            Ready to move fast?{' '}
            <a
              href="tel:0474870535"
              className="font-semibold text-gold hover:text-gold/80 underline underline-offset-2 transition-colors duration-150"
            >
              Jump on a call
            </a>
          </p>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
