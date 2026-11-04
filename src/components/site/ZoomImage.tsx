'use client';

import { useState, type ReactNode } from 'react';
import Lightbox from '@/components/Lightbox';

/** A screenshot that opens full size when tapped. The image itself stays in the server HTML. */
export default function ZoomImage({ src, label, children }: { src: string; label: string; children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className="s-shot" aria-label={label}>
        {children}
      </button>
      <Lightbox src={open ? src : null} onClose={() => setOpen(false)} />
    </>
  );
}
