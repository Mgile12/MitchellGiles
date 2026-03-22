"use client";

import React, { useEffect, useRef, useState } from "react";
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

const SLOT_COUNT = 3;

function DominoSlot({ clientId }: { clientId: number }) {
  const client = clients.find((c) => c.id === clientId)!;
  return (
    <motion.a
      key={clientId}
      href={client.href}
      target={client.href !== "#" ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="flex items-center justify-center opacity-55 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 0.55, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      whileHover={{ opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      draggable={false}
      onContextMenu={(e) => e.preventDefault()}
    >
      <img
        src={client.src}
        alt={client.name}
        draggable={false}
        className="h-16 sm:h-20 md:h-24 w-auto max-w-[160px] sm:max-w-[200px] md:max-w-[220px] object-contain select-none"
        style={{ WebkitUserDrag: "none" } as React.CSSProperties}
        onContextMenu={(e) => e.preventDefault()}
      />
    </motion.a>
  );
}

function DominoLogos() {
  const initialSlots = clients.slice(0, SLOT_COUNT).map((c) => c.id);
  const [slots, setSlots] = useState<number[]>(initialSlots);
  const nextSlotRef = useRef(0);
  const usedIdsRef = useRef<Set<number>>(new Set(initialSlots));

  useEffect(() => {
    const interval = setInterval(() => {
      const slotIndex = nextSlotRef.current;
      nextSlotRef.current = (nextSlotRef.current + 1) % SLOT_COUNT;

      const availableIds = clients
        .map((c) => c.id)
        .filter((id) => !usedIdsRef.current.has(id));

      if (availableIds.length === 0) {
        usedIdsRef.current = new Set(
          slots.filter((_, i) => i !== slotIndex)
        );
        const fallback = clients
          .map((c) => c.id)
          .find((id) => !usedIdsRef.current.has(id));
        if (!fallback) return;
        usedIdsRef.current.add(fallback);
        setSlots((prev) => {
          const next = [...prev];
          next[slotIndex] = fallback;
          return next;
        });
      } else {
        const nextId = availableIds[0];
        const outgoingId = slots[slotIndex];
        usedIdsRef.current.delete(outgoingId);
        usedIdsRef.current.add(nextId);
        setSlots((prev) => {
          const next = [...prev];
          next[slotIndex] = nextId;
          return next;
        });
      }
    }, 1800);

    return () => clearInterval(interval);
  }, [slots]);

  return (
    <div className="flex items-center justify-center gap-12 sm:gap-20 md:gap-28 lg:gap-36">
      {slots.map((clientId, i) => (
        <div
          key={i}
          className="flex items-center justify-center"
          style={{ minWidth: 140, minHeight: 80 }}
        >
          <AnimatePresence mode="wait">
            <DominoSlot key={`slot-${i}-${clientId}`} clientId={clientId} />
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

export default function CurrentClients() {
  return (
    <section className="bg-[#050a14]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-28 sm:py-36 md:py-44">
        <motion.div
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-slate-400 text-base sm:text-lg font-semibold font-sans mb-4 tracking-wide">
            The best are already here
          </p>
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white font-serif leading-none">
            We work with a select few
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <DominoLogos />
        </motion.div>

        <motion.p
          className="mt-16 sm:mt-20 text-center text-sm text-slate-500 font-sans italic"
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
