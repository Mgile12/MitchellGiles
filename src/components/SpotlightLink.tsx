'use client';

import Link from 'next/link';
import type { PointerEvent, ReactNode } from 'react';

/**
 * A card link that records the pointer position as --mx / --my on itself so the `.spotlight`
 * highlight in index.css can follow the cursor. Paint-only; touch devices never show the highlight
 * because the CSS is gated behind a hover media query.
 */
export default function SpotlightLink({
  href,
  className = '',
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  const onMove = (e: PointerEvent<HTMLAnchorElement>) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${Math.round(e.clientX - r.left)}px`);
    el.style.setProperty('--my', `${Math.round(e.clientY - r.top)}px`);
  };

  return (
    <Link href={href} className={className} onPointerMove={onMove}>
      {children}
    </Link>
  );
}
