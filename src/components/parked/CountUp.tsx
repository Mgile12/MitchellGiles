'use client';

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';

/**
 * A number that counts up from zero the first time it scrolls into view.
 *
 * The server render and no-JS visitors get the final value. On the client the value resets to
 * zero before the first paint, then counts up once 35% of it is in the viewport. Prefix, suffix,
 * decimals and thousands separators follow the source string ("$60,632", "6.88x", "72%", "$425K").
 * Screen readers only ever get the final value. Reduced motion: final value, no animation.
 */
const NUMBER = /^([^0-9]*)([0-9][0-9,]*)(\.[0-9]+)?(.*)$/;

// Same feel as the CSS --ease-out token: fast start, long settle
const easeOut = (t: number) => 1 - Math.pow(1 - t, 4);

interface Parsed {
  prefix: string;
  suffix: string;
  decimals: number;
  grouping: boolean;
  target: number;
}

function parse(value: string): Parsed | null {
  const m = NUMBER.exec(value);
  if (!m) return null;
  const [, prefix, intPart, decPart = '', suffix] = m;
  return {
    prefix,
    suffix,
    decimals: decPart ? decPart.length - 1 : 0,
    grouping: intPart.includes(','),
    target: parseFloat(intPart.replace(/,/g, '') + decPart),
  };
}

function format(n: number, p: Parsed) {
  const body = p.grouping
    ? n.toLocaleString('en-AU', { minimumFractionDigits: p.decimals, maximumFractionDigits: p.decimals })
    : n.toFixed(p.decimals);
  return `${p.prefix}${body}${p.suffix}`;
}

const useBeforePaint = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export default function CountUp({
  value,
  duration = 900,
  delay = 0,
  className = '',
}: {
  value: string;
  duration?: number;
  delay?: number;
  className?: string;
}) {
  const parsed = useMemo(() => parse(value), [value]);
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);
  const [armed, setArmed] = useState(false);

  // Reset to zero before the browser paints, unless the visitor prefers reduced motion
  useBeforePaint(() => {
    if (!parsed) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
    setDisplay(format(0, parsed));
    setArmed(true);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!armed || !el || !parsed) return;
    let frame = 0;
    let timer = 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        timer = window.setTimeout(() => {
          const start = performance.now();
          const tick = (now: number) => {
            const t = Math.min(1, (now - start) / duration);
            setDisplay(t < 1 ? format(parsed.target * easeOut(t), parsed) : value);
            if (t < 1) frame = requestAnimationFrame(tick);
          };
          frame = requestAnimationFrame(tick);
        }, delay);
      },
      { threshold: 0.35 }
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      window.clearTimeout(timer);
      cancelAnimationFrame(frame);
    };
  }, [armed, parsed, value, duration, delay]);

  if (!parsed) return <span className={className}>{value}</span>;

  return (
    <span ref={ref} className={className}>
      <span className="sr-only">{value}</span>
      <span aria-hidden="true" className="tabular-nums">
        {display}
      </span>
    </span>
  );
}
