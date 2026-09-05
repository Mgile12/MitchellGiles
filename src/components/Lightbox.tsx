'use client';

import { useEffect, useRef } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { X } from 'lucide-react';
import { EASE_OUT } from '@/lib/motion';

interface LightboxProps {
  src: string | null;
  alt?: string;
  onClose: () => void;
}

/**
 * Full-screen image viewer. Enters over 200ms from scale(0.97) and leaves the same way
 * in 150ms, so closing never teleports. Escape and any click outside the image close it.
 * Focus moves to the close button on open, stays inside while open, and returns to
 * whatever opened it on close.
 */
export default function Lightbox({ src, alt = 'Expanded view', onClose }: LightboxProps) {
  const reduce = useReducedMotion();
  const closeRef = useRef<HTMLButtonElement>(null);
  const openerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!src) return;
    openerRef.current = document.activeElement as HTMLElement | null;
    const t = window.setTimeout(() => closeRef.current?.focus(), 30);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'Tab') {
        // the close button is the only control; keep focus on it
        e.preventDefault();
        closeRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.clearTimeout(t);
      window.removeEventListener('keydown', onKey);
      openerRef.current?.focus?.();
    };
  }, [src, onClose]);

  const hidden = { opacity: 0, transform: reduce ? 'scale(1)' : 'scale(0.97)' };

  return (
    <AnimatePresence>
      {src && (
        <motion.div
          key="lightbox"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.15, ease: EASE_OUT } }}
          transition={{ duration: 0.2, ease: EASE_OUT }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={alt}
        >
          <button
            ref={closeRef}
            onClick={onClose}
            className="press absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full z-10"
            aria-label="Close"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          <motion.div
            className="relative max-w-6xl max-h-[90vh] cursor-default"
            initial={hidden}
            animate={{ opacity: 1, transform: 'scale(1)' }}
            exit={{ ...hidden, transition: { duration: 0.15, ease: EASE_OUT } }}
            transition={{ duration: 0.2, ease: EASE_OUT }}
            onClick={(e) => e.stopPropagation()}
          >
            <img src={src} alt={alt} className="w-full h-full object-contain rounded-lg shadow-2xl" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
