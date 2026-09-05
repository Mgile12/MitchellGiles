'use client';

import { useEffect, useRef, ReactNode } from 'react';

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  /** `group`: the wrapper only toggles `is-visible`; children declare their own entrance with rv-up / rv-left / rv-right. */
  variant?: 'block' | 'group';
}

export default function AnimateOnScroll({ children, className = '', stagger, variant = 'block' }: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const staggerClass = stagger ? `stagger-${stagger}` : '';
  const base = variant === 'group' ? 'reveal-group' : 'animate-on-scroll';

  return (
    <div ref={ref} className={`${base} ${staggerClass} ${className}`}>
      {children}
    </div>
  );
}
