'use client';

import AnimateOnScroll from './AnimateOnScroll';

const clients = [
  {
    name: 'Polish Hub',
    logo: '/Untitled_design_(99).png',
    href: 'https://polishhub.com.au/',
  },
  {
    name: 'EFA',
    logo: '/Asset_1@2x_transparent_(1).png',
    href: 'https://www.elitefootball.com.au/',
  },
  {
    name: 'MJLT Welding',
    logo: '/5fac5d_ae48250114174c80aa68a0394770fbb1~mv2_(1).png',
    href: '#',
  },
];

const preventSave = (e: React.MouseEvent | React.DragEvent) => {
  e.preventDefault();
};

export default function ClientShowcase() {
  return (
    <section className="bg-navy-950 text-slate-50" aria-labelledby="clients-heading">
      <AnimateOnScroll className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-14">
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

        <div className="flex flex-col sm:flex-row items-center justify-center gap-12 sm:gap-16 lg:gap-24">
          {clients.map((client) => (
            <a
              key={client.name}
              href={client.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300 select-none"
              style={{ userSelect: 'none' }}
              onContextMenu={preventSave}
              onDragStart={preventSave}
            >
              <div
                className="relative select-none"
                onContextMenu={preventSave}
                onDragStart={preventSave}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  draggable={false}
                  onContextMenu={preventSave}
                  onDragStart={preventSave}
                  className="h-16 sm:h-20 w-auto object-contain pointer-events-none select-none transition-all duration-300"
                  style={{ WebkitUserDrag: 'none' } as React.CSSProperties}
                />
                <div className="absolute inset-0" onContextMenu={preventSave} onDragStart={preventSave} />
              </div>
            </a>
          ))}
        </div>

        <div className="mt-14 text-center">
          <p className="text-sm text-slate-500 font-sans italic">
            Spots are limited. If you&apos;re a fit, let&apos;s talk.
          </p>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
