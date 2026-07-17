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
  {
    id: 7,
    name: "All GC Hire",
    src: "https://iili.io/qPHnu8x.png",
    href: "https://allgchire.com.au/",
  },
  {
    id: 8,
    name: "Washroom Essential",
    src: "https://iili.io/ChPt9R4.md.webp",
    href: "#",
  },
  {
    id: 9,
    name: "Cleaning Melbourne",
    src: "https://iili.io/ChPtFs9.md.png",
    href: "#",
  },
  {
    id: 10,
    name: "Best Deal 4 U",
    src: "https://iili.io/ChPtxOQ.md.png",
    href: "#",
  },
  {
    id: 11,
    name: "Fleur",
    src: "https://iili.io/ChPZLxI.png",
    href: "#",
  },
];

const DISPLAY_DURATION = 2000;
const TICK_INTERVAL = 100;
const COLUMN_OFFSET = 700;

function seededShuffle<T>(arr: T[], seed: number): T[] {
  const result = [...arr];
  let s = seed;
  for (let i = result.length - 1; i > 0; i--) {
    s = (s * 1664525 + 1013904223) & 0xffffffff;
    const j = Math.abs(s) % (i + 1);
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function buildColumnSequences(logos: ClientLogo[], columns: number): ClientLogo[][] {
  return Array.from({ length: columns }, (_, col) => {
    const shuffled = seededShuffle(logos, col * 31337 + 9001);
    const sequence: ClientLogo[] = [];
    const targetLen = logos.length * 2;
    while (sequence.length < targetLen) {
      for (const logo of shuffled) {
        if (sequence.length === 0 || sequence[sequence.length - 1].id !== logo.id) {
          sequence.push(logo);
        }
        if (sequence.length >= targetLen) break;
      }
    }
    return sequence;
  });
}

const mobileSequences = buildColumnSequences(clients, 2);
const desktopSequences = buildColumnSequences(clients, 3);

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 639px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return isMobile;
}

function LogoColumn({
  sequence,
  columnIndex,
  containerWidth,
}: {
  sequence: ClientLogo[];
  columnIndex: number;
  containerWidth: number;
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
      style={{ width: containerWidth, height: 96 }}
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
            className="w-auto object-contain select-none"
            style={{
              height: logo.name === "Polish Hub" ? "auto" : undefined,
              width: logo.name === "Polish Hub" ? containerWidth - 8 : undefined,
              maxWidth: logo.name === "Polish Hub" ? containerWidth - 8 : containerWidth - 16,
              maxHeight: logo.name === "Polish Hub" ? 96 : 80,
              WebkitUserDrag: "none",
            } as React.CSSProperties}
            onContextMenu={(e) => e.preventDefault()}
          />
        </motion.a>
      </AnimatePresence>
    </div>
  );
}

export default function CurrentClients() {
  const isMobile = useIsMobile();
  const sequences = isMobile ? mobileSequences : desktopSequences;
  const containerWidth = isMobile ? 150 : 220;

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
          className="flex items-center justify-center gap-8 sm:gap-20 md:gap-28 lg:gap-36"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {sequences.map((sequence, i) => (
            <LogoColumn
              key={i}
              sequence={sequence}
              columnIndex={i}
              containerWidth={containerWidth}
            />
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
