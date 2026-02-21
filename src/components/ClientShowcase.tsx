'use client';

import { useRef } from 'react';
import AnimateOnScroll from './AnimateOnScroll';

const clients = [
  {
    name: 'Polish Hub',
    description: 'Auto Vehicle & Marine Detailing',
    logo: '/Untitled_design_(77).png',
    href: '#',
    bg: 'bg-white',
  },
  {
    name: 'Client Two',
    description: 'Industry Leader',
    logo: '/Asset_1@2x_transparent_(1).png',
    href: '#',
    bg: 'bg-[#1a2340]',
  },
  {
    name: 'MJLT Welding',
    description: 'Welding Fabrication & Repairs',
    logo: '/5fac5d_ae48250114174c80aa68a0394770fbb1~mv2_(1).png',
    href: '#',
    bg: 'bg-[#2a2a2a]',
  },
];

interface ClientCardProps {
  name: string;
  description: string;
  logo: string;
  href: string;
  bg: string;
}

function ClientCard({ name, description, logo, href, bg }: ClientCardProps) {
  const imgRef = useRef<HTMLImageElement>(null);

  const preventSave = (e: React.MouseEvent | React.DragEvent) => {
    e.preventDefault();
    return false;
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col items-center justify-center rounded-2xl border border-white/10 overflow-hidden transition-all duration-300 hover:border-gold/40 hover:shadow-[0_0_40px_rgba(0,0,0,0.4)] hover:-translate-y-1"
      style={{ userSelect: 'none' }}
    >
      <div className={`w-full flex items-center justify-center ${bg} p-10 min-h-[200px]`}>
        <div
          className="relative w-full max-w-[220px] select-none"
          onContextMenu={preventSave}
          onDragStart={preventSave}
        >
          <img
            ref={imgRef}
            src={logo}
            alt={name}
            draggable={false}
            onContextMenu={preventSave}
            onDragStart={preventSave}
            className="w-full h-auto object-contain max-h-[140px] pointer-events-none select-none"
            style={{
              WebkitUserDrag: 'none',
              userSelect: 'none',
            } as React.CSSProperties}
          />
          <div
            className="absolute inset-0"
            onContextMenu={preventSave}
            onDragStart={preventSave}
          />
        </div>
      </div>
      <div className="w-full px-6 py-5 bg-navy-900 border-t border-white/[0.06]">
        <p className="text-sm font-semibold text-white font-sans group-hover:text-gold transition-colors duration-200">
          {name}
        </p>
        <p className="text-xs text-slate-500 mt-0.5 font-sans">{description}</p>
      </div>
    </a>
  );
}

export default function ClientShowcase() {
  return (
    <section className="bg-navy-950 text-slate-50" aria-labelledby="clients-heading">
      <AnimateOnScroll className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-4">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-gold/70 font-sans mb-4">
            Current Clients
          </span>
          <h2
            id="clients-heading"
            className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-serif"
          >
            I work with a select few
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg max-w-xl mx-auto font-sans leading-relaxed">
            I deliberately keep my client list small. Every business I take on gets my full attention, not a junior account manager.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-5">
          {clients.map((client) => (
            <ClientCard key={client.name} {...client} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-slate-500 font-sans italic">
            Spots are limited. If you're a fit, let's talk.
          </p>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
