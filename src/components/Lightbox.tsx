'use client';

import { useEffect } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { X } from 'lucide-react';

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

interface LightboxProps {
  src: string | null;
  alt?: string;
  onClose: () => void;
}

/**
 * Full-screen image viewer. Enters over 200ms from scale(0.97) and leaves the same way
 * in 150ms, so closing never teleports. Escape and any click outside the image close it.
 */
export default function Lightbox({ src, alt = 'Expanded view', onClose }: LightboxProps) {
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!src) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
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
