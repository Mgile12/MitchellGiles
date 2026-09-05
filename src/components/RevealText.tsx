import { Fragment } from 'react';

/**
 * Splits a heading into words that slide up from behind a mask once an ancestor gets `.is-visible`
 * (any AnimateOnScroll wrapper). Word i waits `--rw-base + i * 45ms`. Server component, no JS.
 * Words stay separated by real spaces so wrapping and screen readers behave as plain text.
 */
export default function RevealText({
  text,
  startIndex = 0,
  className = '',
}: {
  text: string;
  /** Continue the stagger from an earlier RevealText in the same heading. */
  startIndex?: number;
  /** Classes for the visible word, e.g. a text gradient. */
  className?: string;
}) {
  return (
    <>
      {text.split(' ').map((word, i) => (
        <Fragment key={`${i}-${word}`}>
          {i > 0 && ' '}
          <span className="rw" style={{ ['--i' as string]: String(startIndex + i) }}>
            <span className={`rw-in ${className}`.trim()}>{word}</span>
          </span>
        </Fragment>
      ))}
    </>
  );
}
