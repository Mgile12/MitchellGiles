"use client";

import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { AnimatePresence, motion } from "framer-motion";

export interface Logo {
  name: string;
  id: number;
  img?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  imgSrc?: string;
  href?: string;
}

interface LogoColumnProps {
  logos: Logo[];
  index: number;
  currentTime: number;
}

const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const distributeLogos = (allLogos: Logo[], columnCount: number): Logo[][] => {
  const shuffled = shuffleArray(allLogos);
  const columns: Logo[][] = Array.from({ length: columnCount }, () => []);

  shuffled.forEach((logo, index) => {
    columns[index % columnCount].push(logo);
  });

  const maxLength = Math.max(...columns.map((col) => col.length));
  columns.forEach((col) => {
    while (col.length < maxLength) {
      col.push(shuffled[Math.floor(Math.random() * shuffled.length)]);
    }
  });

  return columns;
};

const LogoColumn: React.FC<LogoColumnProps> = React.memo(
  ({ logos, index, currentTime }) => {
    const cycleInterval = 2500;
    const columnDelay = index * 300;
    const adjustedTime =
      (currentTime + columnDelay) % (cycleInterval * logos.length);
    const currentIndex = Math.floor(adjustedTime / cycleInterval);
    const currentLogo = logos[currentIndex];
    const CurrentLogo = useMemo(
      () => currentLogo.img,
      [currentLogo]
    );

    return (
      <motion.div
        className="relative h-20 w-36 overflow-hidden md:h-28 md:w-52"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: index * 0.1,
          duration: 0.5,
          ease: "easeOut",
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={`${currentLogo.id}-${currentIndex}`}
            className="absolute inset-0 flex items-center justify-center px-3"
            initial={{ y: "15%", opacity: 0, filter: "blur(6px)" }}
            animate={{
              y: "0%",
              opacity: 1,
              filter: "blur(0px)",
              transition: {
                type: "spring",
                stiffness: 260,
                damping: 22,
                duration: 0.5,
              },
            }}
            exit={{
              y: "-15%",
              opacity: 0,
              filter: "blur(4px)",
              transition: {
                type: "tween",
                ease: "easeIn",
                duration: 0.3,
              },
            }}
          >
            {currentLogo.imgSrc ? (
              <img
                src={currentLogo.imgSrc}
                alt={currentLogo.name}
                draggable={false}
                className="max-h-16 md:max-h-20 w-auto max-w-full object-contain"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            ) : CurrentLogo ? (
              <CurrentLogo className="h-16 w-16 max-h-full max-w-full object-contain md:h-20 md:w-20" />
            ) : null}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    );
  }
);

LogoColumn.displayName = "LogoColumn";

interface LogoCarouselProps {
  columnCount?: number;
  logos: Logo[];
}

export function LogoCarousel({ columnCount = 5, logos }: LogoCarouselProps) {
  const [logoSets, setLogoSets] = useState<Logo[][]>([]);
  const [currentTime, setCurrentTime] = useState(0);

  const updateTime = useCallback(() => {
    setCurrentTime((prevTime) => prevTime + 100);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(updateTime, 100);
    return () => clearInterval(intervalId);
  }, [updateTime]);

  useEffect(() => {
    const distributedLogos = distributeLogos(logos, columnCount);
    setLogoSets(distributedLogos);
  }, [logos, columnCount]);

  return (
    <div className="flex items-center justify-center gap-4 md:gap-8 flex-wrap">
      {logoSets.map((logos, index) => (
        <LogoColumn
          key={index}
          logos={logos}
          index={index}
          currentTime={currentTime}
        />
      ))}
    </div>
  );
}

export { LogoColumn };
