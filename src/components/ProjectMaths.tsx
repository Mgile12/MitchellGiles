'use client';

import { useId, useState } from 'react';
import { ArrowRight, CalendarCheck, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/business-info';
import AnimateOnScroll from './AnimateOnScroll';
import Eyebrow from './Eyebrow';
import RevealText from './RevealText';

const aud = new Intl.NumberFormat('en-AU', { style: 'currency', currency: 'AUD', maximumFractionDigits: 0 });
const num = new Intl.NumberFormat('en-AU', { maximumFractionDigits: 0 });
const one = new Intl.NumberFormat('en-AU', { maximumFractionDigits: 1 });

function Field({
  id,
  label,
  hint,
  children,
}: {
  id: string;
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-ink font-sans">
        {label}
      </label>
      {hint && <p className="mt-0.5 text-xs text-ink/55 font-sans">{hint}</p>}
      <div className="mt-2">{children}</div>
    </div>
  );
}

const inputCls =
  'w-full rounded-lg border border-ink/20 bg-white px-3 py-2.5 text-base text-ink font-sans tabular-nums focus:outline-none focus:border-ink';

/**
 * Project maths: what the top 3 on Google Maps could be worth, from the visitor's own numbers.
 * Calls-based, because every result on this site is measured in calls from Google.
 */
export default function ProjectMaths() {
  const uid = useId();
  const [calls, setCalls] = useState(20);
  const [jobValue, setJobValue] = useState(800);
  const [closeRate, setCloseRate] = useState(30);
  const [uplift, setUplift] = useState(2);
  const [investment, setInvestment] = useState('');

  const callsAfter = calls * uplift;
  const extraCalls = callsAfter - calls;
  const extraJobs = extraCalls * (closeRate / 100);
  const extraMonth = extraJobs * jobValue;
  const extraYear = extraMonth * 12;
  const spend = Number(investment) || 0;
  const net = extraMonth - spend;
  const jobsToCover = spend > 0 && jobValue > 0 ? spend / jobValue : 0;

  return (
    <section
      id="project-maths"
      className="relative bg-ink text-white overflow-hidden scroll-mt-24"
      style={{ ['--accent' as string]: '#ffffff', ['--accent-rgb' as string]: '255, 255, 255' }}
      aria-labelledby="maths-heading"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.12),transparent_55%)]" aria-hidden="true" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <AnimateOnScroll className="max-w-3xl">
          <Eyebrow align="left" className="mb-5">Project maths</Eyebrow>
          <h2 id="maths-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-serif leading-[1.12] text-white">
            <RevealText text="What would the top 3 on Google Maps be worth to you?" />
          </h2>
          <p className="mt-6 text-lg text-white/80 font-sans leading-relaxed">
            Put in your own numbers. It is an estimate to think with, not a forecast. The 2x default is below what the two
            plumbers in the case studies did, 2.5x and 2.7x the calls in a quarter.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll className="mt-10 grid gap-5 lg:grid-cols-12">
          <form className="lg:col-span-6 rounded-2xl bg-white text-ink p-6 sm:p-7 grid gap-5" onSubmit={(e) => e.preventDefault()} aria-label="Your numbers">
            <Field id={`${uid}-calls`} label="Calls from Google a month, right now" hint="Google Business Profile shows this under Performance. Guess if you have to.">
              <input id={`${uid}-calls`} type="number" min={0} max={2000} value={calls} onChange={(e) => setCalls(Math.max(0, Number(e.target.value) || 0))} className={inputCls} inputMode="numeric" />
            </Field>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field id={`${uid}-value`} label="Average job value" hint="What a typical job is worth to you, in dollars.">
                <input id={`${uid}-value`} type="number" min={0} step={50} value={jobValue} onChange={(e) => setJobValue(Math.max(0, Number(e.target.value) || 0))} className={inputCls} inputMode="numeric" />
              </Field>
              <Field id={`${uid}-close`} label="Calls that become jobs" hint={`${closeRate}% of calls`}>
                <input id={`${uid}-close`} type="range" min={5} max={90} step={5} value={closeRate} onChange={(e) => setCloseRate(Number(e.target.value))} className="w-full accent-ink" />
              </Field>
            </div>
            <Field id={`${uid}-uplift`} label="Calls at a top-3 position" hint={`${one.format(uplift)}x your current calls${uplift === 2 ? ' (conservative)' : ''}`}>
              <input id={`${uid}-uplift`} type="range" min={1} max={4} step={0.5} value={uplift} onChange={(e) => setUplift(Number(e.target.value))} className="w-full accent-ink" />
              <div className="mt-1 flex justify-between text-xs text-ink/50 font-sans" aria-hidden="true">
                <span>1x</span>
                <span>2x</span>
                <span>3x</span>
                <span>4x</span>
              </div>
            </Field>
            <Field id={`${uid}-spend`} label="What you would spend a month on this (optional)" hint="Your own budget for the work, not my price. Leave blank to see revenue only.">
              <input id={`${uid}-spend`} type="number" min={0} step={100} value={investment} onChange={(e) => setInvestment(e.target.value)} placeholder="$" className={inputCls} inputMode="numeric" />
            </Field>
          </form>

          <div className="lg:col-span-6 rounded-2xl border border-white/15 bg-white/[0.06] p-6 sm:p-7 flex flex-col" aria-live="polite" aria-atomic="true">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-white/55 font-sans">At a top-3 position</p>
            <dl className="mt-5 grid gap-5 sm:grid-cols-2">
              <div>
                <dt className="text-sm text-white/65 font-sans">Calls a month</dt>
                <dd className="mt-1 text-3xl font-bold font-serif tabular-nums text-white">{num.format(callsAfter)}</dd>
                <dd className="text-xs text-white/55 font-sans">up from {num.format(calls)}</dd>
              </div>
              <div>
                <dt className="text-sm text-white/65 font-sans">Extra jobs a month</dt>
                <dd className="mt-1 text-3xl font-bold font-serif tabular-nums text-white">{one.format(extraJobs)}</dd>
                <dd className="text-xs text-white/55 font-sans">from {num.format(extraCalls)} extra calls</dd>
              </div>
              <div>
                <dt className="text-sm text-white/65 font-sans">Extra revenue a month</dt>
                <dd className="mt-1 text-3xl font-bold font-serif tabular-nums text-white">{aud.format(extraMonth)}</dd>
              </div>
              <div>
                <dt className="text-sm text-white/65 font-sans">Extra revenue a year</dt>
                <dd className="mt-1 text-3xl font-bold font-serif tabular-nums text-white">{aud.format(extraYear)}</dd>
              </div>
            </dl>
            {spend > 0 && (
              <div className="mt-6 pt-5 border-t border-white/15">
                <p className="text-sm text-white/65 font-sans">After what you would spend</p>
                <p className="mt-1 text-2xl font-bold font-serif tabular-nums text-white">{aud.format(net)} a month</p>
                <p className="mt-1 text-xs text-white/55 font-sans">
                  {jobsToCover > 0 && `About ${one.format(jobsToCover)} extra job${jobsToCover > 1.05 ? 's' : ''} a month covers it.`}{' '}
                  {net < 0 && 'At these numbers it does not pay. Say so on the call and I will tell you what would need to change.'}
                </p>
              </div>
            )}
            <p className="mt-auto pt-6 text-xs text-white/50 font-sans leading-relaxed">
              Estimates only. Results depend on your market, your competition, your website and your reviews. Calls means taps on
              the Call button in Google, which is how every number on this site is measured.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll className="mt-10 max-w-3xl">
          <p className="text-base sm:text-lg text-white/80 font-sans leading-relaxed">
            The target is agreed in writing before work starts, measured with a ranking grid scan, and if it is not met in 90
            days the work continues at no charge.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-4">
            <a
              href={BUSINESS_INFO.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white text-ink px-7 py-3.5 text-sm font-semibold hover:bg-white/90 transition-colors duration-200 group"
            >
              <CalendarCheck className="w-4 h-4" aria-hidden="true" />
              Book a 30-minute call
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <a href={`tel:${BUSINESS_INFO.phoneFormatted}`} className="inline-flex items-center gap-2 text-sm font-semibold text-white/85 hover:text-white transition-colors duration-150 font-sans">
              <Phone className="w-4 h-4" aria-hidden="true" /> Or call {BUSINESS_INFO.phone}
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
