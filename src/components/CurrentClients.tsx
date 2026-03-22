"use client";

import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface ClientLogo {
  id: number;
  name: string;
  src: string;
  href: string;
}

const clients: ClientLogo[] = [
  {
    id: 1,
    name: "Tradie Marketing Pros",
    src: "https://iili.io/qvDeeSe.webp",
    href: "https://tradiemarketingpros.com.au/",
  },
  {
    id: 2,
    name: "Polish Hub",
    src: "https://iili.io/qvDesl1.png",
    href: "https://polishhub.com.au/",
  },
  {
    id: 3,
    name: "MJLT Services",
    src: "https://iili.io/qvDeroQ.png",
    href: "https://www.mjltservices.com.au/",
  },
  {
    id: 4,
    name: "Ceramics Gold Coast",
    src: "https://iili.io/qvDejPS.png",
    href: "https://ceramicsgoldcoast.com.au/",
  },
  {
    id: 5,
    name: "Elite Football Academy",
    src: "https://iili.io/q87yt2t.md.png",
    href: "https://www.elitefootball.com.au/",
  },
  {
    id: 6,
    name: "Client 6",
    src: "https://iili.io/q8YGebS.png",
    href: "#",
  },
];

function ClientLogoItem({ client }: { client: ClientLogo }) {
  return (
    <motion.a
      href={client.href}
      target={client.href !== "#" ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="flex items-center justify-center px-4 py-3 opacity-70 hover:opacity-100 transition-opacity duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 0.7, y: 0 }}
      whileHover={{ opacity: 1, scale: 1.05 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      draggable={false}
      onContextMenu={(e) => e.preventDefault()}
    >
      <img
        src={client.src}
        alt={client.name}
        draggable={false}
        className="h-14 sm:h-16 md:h-20 w-auto max-w-[140px] sm:max-w-[160px] object-contain select-none"
        style={{ WebkitUserDrag: "none" } as React.CSSProperties}
        onContextMenu={(e) => e.preventDefault()}
      />
    </motion.a>
  );
}

function AnimatedClientRow() {
  const [visible, setVisible] = useState(true);
  const [currentBatch, setCurrentBatch] = useState(0);

  const toggle = useCallback(() => {
    setVisible(false);
    setTimeout(() => {
      setCurrentBatch((prev) => (prev + 1) % 1);
      setVisible(true);
    }, 400);
  }, []);

  useEffect(() => {
    const id = setInterval(toggle, 5000);
    return () => clearInterval(id);
  }, [toggle]);

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          key={currentBatch}
          className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 lg:gap-14"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {clients.map((client, i) => (
            <motion.a
              key={client.id}
              href={client.href}
              target={client.href !== "#" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="flex items-center justify-center opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 0.7, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: "easeOut" }}
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
            >
              <img
                src={client.src}
                alt={client.name}
                draggable={false}
                className="h-12 sm:h-16 md:h-20 w-auto max-w-[130px] sm:max-w-[160px] object-contain select-none"
                style={{ WebkitUserDrag: "none" } as React.CSSProperties}
                onContextMenu={(e) => e.preventDefault()}
              />
            </motion.a>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function CurrentClients() {
  return (
    <section className="bg-[#050a14] border-y border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#C9A84C]/70 font-sans mb-4">
            Current Clients
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-serif">
            I work with a select few
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg max-w-xl mx-auto font-sans leading-relaxed">
            I deliberately keep my client list small. Every business I take on gets my full attention — not a junior account manager.
          </p>
        </motion.div>

        <AnimatedClientRow />

        <motion.p
          className="mt-12 text-center text-sm text-slate-500 font-sans italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Spots are limited. If you&apos;re a fit, let&apos;s talk.
        </motion.p>
      </div>
    </section>
  );
}
