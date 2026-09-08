'use client';

import { useEffect, useRef, type PointerEvent, type ReactNode } from 'react';

const MAX_DEG = 4;

/**
 * Tilts its content toward the pointer (at most 4 degrees each way) and drifts a soft light under
 * the cursor. Desktop only: touch devices and reduced-motion visitors get a static card. The
 * transform is set directly on this element, never through a variable on a parent.
 */
export default function TiltCard({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const enabled = useRef(false);

  useEffect(() => {
    enabled.current =
      window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || !enabled.current) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    // The edge under the pointer comes toward the viewer
    const rx = ((py - 0.5) * MAX_DEG * 2).toFixed(2);
    const ry = ((0.5 - px) * MAX_DEG * 2).toFixed(2);
    el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.02)`;
    el.style.setProperty('--mx', `${Math.round(e.clientX - r.left)}px`);
    el.style.setProperty('--my', `${Math.round(e.clientY - r.top)}px`);
  };

  const onLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = '';
  };

  return (
    <div ref={ref} className={`tilt relative ${className}`.trim()} onPointerMove={onMove} onPointerLeave={onLeave}>
      {children}
      <div className="tilt-light" aria-hidden="true" />
    </div>
  );
}
