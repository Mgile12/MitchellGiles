import type { ReactNode } from 'react';

/**
 * Section label with a short accent rule. Centered labels get a rule on both sides,
 * left-aligned labels get one on the left only.
 */
export default function Eyebrow({
  children,
  align = 'center',
  className = '',
}: {
  children: ReactNode;
  align?: 'center' | 'left';
  className?: string;
}) {
  return <span className={`eyebrow ${align === 'left' ? 'eyebrow-left' : ''} ${className}`.trim()}>{children}</span>;
}
