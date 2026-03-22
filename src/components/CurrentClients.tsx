"use client";

import React, { useEffect, useState } from "react";
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

const COLUMN_COUNT = 3;
const DISPLAY_DURATION = 2000;
const TICK_INTERVAL = 100;
const COLUMN_OFFSET = 200;

function buildColumnSequences(logos: ClientLogo[], columns: number): ClientLogo[][] {
  const shuffled = [...logos].sort(() => Math.random() - 0.5);
  const sequences: ClientLogo[][] = Array.from({ length: columns }, () => []);

  shuffled.forEach((logo, i) => {
    sequences[i % columns].push(logo);
  });

  const maxLen = Math.max(...sequences.map((s) => s.length));
  sequences.forEach((seq) => {
    while (seq.length < maxLen) {
      seq.push(...seq.slice(0, maxLen - seq.length));
    }
  });

  return sequences;
}

const columnSequences = buildColumnSequences(clients, COLUMN_COUNT);

function LogoColumn({
  sequence,
  columnIndex,
}: {
  sequence: ClientLogo[];
  columnIndex: number;
}) {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const offset = columnIndex * COLUMN_OFFSET;
    const start = Date.now();

    const id = setInterval(() => {
      const elapsed = Date.now() - start + offset;
      setTick(Math.floor(elapsed / DISPLAY_DURATION));
    }, TICK_INTERVAL);

    return () => clearInterval(id);
  }, [columnIndex]);

  const currentIndex = tick % sequence.length;
  const logo = sequence[currentIndex];

  return (
    <div
      className="flex items-center justify-center overflow-hidden"
      style={{ width: 220, height: 96 }}
    >
      <AnimatePresence mode="wait">
        <motion.a
          key={`${columnIndex}-${tick}`}
          href={logo.href}
          target={logo.href !== "#" ? "_blank" : undefined}
          rel="noopener noreferrer"
          draggable={false}
          onContextMenu={(e) => e.preventDefault()}
          className="flex items-center justify-center w-full h-full cursor-pointer"
          initial={{
            opacity: 0,
            y: "10%",
            filter: "blur(7px)",
          }}
          animate={{
            opacity: 0.7,
            y: "0%",
            filter: "blur(0px)",
            transition: {
              type: "spring",
              stiffness: 120,
              damping: 18,
              mass: 0.8,
            },
          }}
          exit={{
            opacity: 0,
            y: "-20%",
            filter: "blur(4px)",
            transition: {
              duration: 0.22,
              ease: "easeIn",
            },
          }}
          whileHover={{ opacity: 1 }}
        >
          <img
            src={logo.src}
            alt={logo.name}
            draggable={false}
            className="h-14 sm:h-16 md:h-20 w-auto max-w-[180px] sm:max-w-[200px] object-contain select-none"
            style={{ WebkitUserDrag: "none" } as React.CSSProperties}
            onContextMenu={(e) => e.preventDefault()}
          />
        </motion.a>
      </AnimatePresence>
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
          className="flex items-center justify-center gap-12 sm:gap-20 md:gap-28 lg:gap-36"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {columnSequences.map((sequence, i) => (
            <LogoColumn key={i} sequence={sequence} columnIndex={i} />
          ))}
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
