"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

const desktopStreams = [
  { top: "4%", duration: 17, delay: -4, reverse: false, letter: "T" },
  { top: "11%", duration: 21, delay: -13, reverse: true, letter: "E" },
  { top: "18%", duration: 16, delay: -7, reverse: false, letter: "K" },
  { top: "25%", duration: 23, delay: -17, reverse: true, letter: "N" },
  { top: "32%", duration: 18, delay: -9, reverse: false, letter: "O" },
  { top: "39%", duration: 25, delay: -19, reverse: true, letter: "V" },
  { top: "46%", duration: 17, delay: -6, reverse: false, letter: "I" },
  { top: "53%", duration: 22, delay: -14, reverse: true, letter: "A" },
  { top: "60%", duration: 16, delay: -8, reverse: false, letter: "T" },
  { top: "67%", duration: 24, delay: -18, reverse: true, letter: "E" },
  { top: "74%", duration: 18, delay: -5, reverse: false, letter: "K" },
  { top: "81%", duration: 23, delay: -16, reverse: true, letter: "N" },
  { top: "88%", duration: 17, delay: -10, reverse: false, letter: "O" },
  { top: "94%", duration: 25, delay: -20, reverse: true, letter: "V" },
];

const mobileStreams = [
  { top: "6%", duration: 22, delay: -6, reverse: false, letter: "T" },
  { top: "18%", duration: 25, delay: -14, reverse: true, letter: "E" },
  { top: "30%", duration: 22, delay: -8, reverse: false, letter: "K" },
  { top: "42%", duration: 26, delay: -17, reverse: true, letter: "N" },
  { top: "55%", duration: 23, delay: -11, reverse: false, letter: "O" },
  { top: "68%", duration: 27, delay: -19, reverse: true, letter: "V" },
  { top: "80%", duration: 22, delay: -9, reverse: false, letter: "I" },
  { top: "92%", duration: 25, delay: -16, reverse: true, letter: "A" },
];

export function TeknoviaBackground() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const streams = isMobile ? mobileStreams : desktopStreams;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(0,150,137,0.09),transparent_58%)]" />

      {streams.map((stream, index) => (
        <MovingStream
          key={index}
          top={stream.top}
          duration={stream.duration}
          delay={stream.delay}
          reverse={stream.reverse}
          letter={stream.letter}
          isMobile={isMobile}
        />
      ))}
    </div>
  );
}

function MovingStream({
  top,
  duration,
  delay,
  reverse,
  letter,
  isMobile,
}: {
  top: string;
  duration: number;
  delay: number;
  reverse: boolean;
  letter: string;
  isMobile: boolean;
}) {
  return (
    <motion.div
      className="absolute"
      style={{ top }}
      initial={{
        x: reverse ? "110vw" : "-15vw",
      }}
      animate={{
        x: reverse ? "-15vw" : "110vw",
      }}
      transition={{
        duration: isMobile ? duration + 4 : duration,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <div className={`relative ${isMobile ? "h-9 w-44" : "h-12 w-64"}`}>
        {/* Trail */}
        <div
          className={`absolute top-1/2 -translate-y-1/2 ${
            isMobile ? "h-px w-36 blur-[0.5px]" : "h-0.5 w-56 blur-[1px]"
          } ${
            reverse
              ? "right-3 bg-linear-to-l from-primary/60 via-primary/25 to-transparent"
              : "left-3 bg-linear-to-r from-primary/60 via-primary/25 to-transparent"
          }`}
        />

        {/* Glow */}
        <motion.div
          className={`absolute top-1/2 -translate-y-1/2 rounded-full bg-primary ${
            isMobile
              ? "h-4 w-28 bg-primary/15 blur-lg"
              : "h-7 w-44 bg-primary/25 blur-xl"
          } ${reverse ? "right-2" : "left-2"}`}
          animate={{
            opacity: isMobile ? [0.15, 0.35, 0.15] : [0.25, 0.65, 0.25],
            scaleX: isMobile ? [0.9, 1.05, 0.9] : [0.85, 1.15, 0.85],
          }}
          transition={{
            duration: isMobile ? 2.2 : 1.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Outer blurred letter */}
        {!isMobile && (
          <span
            className={`absolute top-1/2 -translate-y-1/2 font-mono text-[20px] font-semibold tracking-[0.2em] text-primary/10 blur-xs ${
              reverse ? "right-2" : "left-2"
            }`}
          >
            {letter}
          </span>
        )}

        {/* Middle blurred letter */}
        <span
          className={`absolute top-1/2 -translate-y-1/2 font-mono font-semibold ${
            isMobile
              ? "text-[16px] tracking-[0.15em] text-primary/15 blur-[2px]"
              : "text-[20px] tracking-[0.2em] text-primary/20 blur-[3px]"
          } ${reverse ? "right-6" : "left-6"}`}
        >
          {letter}
        </span>

        {/* Main letter */}
        <span
          className={`absolute top-1/2 z-10 -translate-y-1/2 font-mono font-bold ${
            isMobile ? "text-[16px] tracking-[0.15em]" : "text-[20px] tracking-[0.2em]"
          } text-primary ${reverse ? "right-0" : "left-0"}`}
          style={{
            textShadow: isMobile
              ? "0 0 5px rgba(0,150,137,0.5), 0 0 10px rgba(0,150,137,0.25)"
              : "0 0 7px rgba(0,150,137,0.9), 0 0 16px rgba(0,150,137,0.65), 0 0 28px rgba(0,150,137,0.35)",
          }}
        >
          {letter}
        </span>

        {/* Dot */}
        <motion.span
          className={`absolute top-1/2 z-20 -translate-y-1/2 rounded-full bg-primary ${
            isMobile ? "h-0.5 w-0.5" : "h-1 w-1"
          } ${reverse ? "-right-0.5" : "-left-0.5"}`}
          animate={{
            opacity: isMobile ? [0.25, 0.6, 0.25] : [0.4, 1, 0.4],
            scale: isMobile ? [0.8, 1.2, 0.8] : [0.8, 1.7, 0.8],
          }}
          transition={{
            duration: isMobile ? 1.8 : 0.9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </motion.div>
  );
}
