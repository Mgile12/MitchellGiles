import { CheckCircle } from 'lucide-react';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const questions = [
  'Do you know your cost per lead across each marketing channel?',
  'Are you tracking which campaigns and keywords generate actual revenue, not just clicks?',
  'Do leads get followed up within 5 minutes of enquiring?',
  'Is there an automated nurture sequence for leads that do not convert immediately?',
  'Can you predict how many leads you will generate next month based on current data?',
  'Are your landing pages designed specifically for conversion, or are you sending ads to your homepage?',
];

export default function LeadGenChecklist() {
  return (
    <section className="bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(200,161,78,0.04),transparent_60%)]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <AnimateOnScroll className="text-center mb-12">
          <span className="inline-block text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4 font-sans">
            Self-Assessment
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-5 font-serif">
            Lead Generation Checklist
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans max-w-2xl mx-auto">
            If you cannot answer yes to all six, your lead generation system has gaps that are costing you money.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-8">
            <div className="space-y-5">
              {questions.map((question, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-gold/50 shrink-0 mt-0.5" />
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">{question}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
