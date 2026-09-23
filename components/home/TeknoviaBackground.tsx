"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const letters = ["T", "E", "K", "N", "O", "V", "I", "A"];

const streams = [
  { top: "4%", duration: 17, delay: -4, reverse: false },
  { top: "11%", duration: 21, delay: -13, reverse: true },
  { top: "18%", duration: 16, delay: -7, reverse: false },
  { top: "25%", duration: 23, delay: -17, reverse: true },
  { top: "32%", duration: 18, delay: -9, reverse: false },
  { top: "39%", duration: 25, delay: -19, reverse: true },
  { top: "46%", duration: 17, delay: -6, reverse: false },
  { top: "53%", duration: 22, delay: -14, reverse: true },
  { top: "60%", duration: 16, delay: -8, reverse: false },
  { top: "67%", duration: 24, delay: -18, reverse: true },
  { top: "74%", duration: 18, delay: -5, reverse: false },
  { top: "81%", duration: 23, delay: -16, reverse: true },
  { top: "88%", duration: 17, delay: -10, reverse: false },
  { top: "94%", duration: 25, delay: -20, reverse: true },
];

export function TeknoviaBackground() {
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
}: {
  top: string;
  duration: number;
  delay: number;
  reverse: boolean;
}) {
  const [letterIndex, setLetterIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLetterIndex((current) => (current + 1) % letters.length);
    }, 600);

    return () => clearInterval(interval);
  }, []);

  const letter = letters[letterIndex];

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
        duration,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <div className="relative h-12 w-64">
        <div
          className={`absolute top-1/2 h-0.5 w-56 -translate-y-1/2 blur-[1px] ${
            reverse
              ? "right-3 bg-linear-to-l from-primary/60 via-primary/25 to-transparent"
              : "left-3 bg-linear-to-r from-primary/60 via-primary/25 to-transparent"
          }`}
        />

        {/* Glow */}
        <motion.div
          className={`absolute top-1/2 h-7 w-44 -translate-y-1/2 rounded-full bg-primary/25 blur-xl ${
            reverse ? "right-2" : "left-2"
          }`}
          animate={{
            opacity: [0.25, 0.65, 0.25],
            scaleX: [0.85, 1.15, 0.85],
          }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Outer blurred letter */}
        <motion.span
          className={`absolute top-1/2 -translate-y-1/2 font-mono text-[20px] font-semibold tracking-[0.2em] text-primary/10 blur-xs ${
            reverse ? "right-2" : "left-2"
          }`}
        >
          {letter}
        </motion.span>

        {/* Middle blurred letter */}
        <motion.span
          className={`absolute top-1/2 -translate-y-1/2 font-mono text-[20px] font-semibold tracking-[0.2em] text-primary/20 blur-[3px] ${
            reverse ? "right-6" : "left-6"
          }`}
        >
          {letter}
        </motion.span>

        {/* Inner blurred letter */}
        <motion.span
          className={`absolute top-1/2 -translate-y-1/2 font-mono text-[20px] font-semibold tracking-[0.2em] text-primary/35 blur-[1px] ${
            reverse ? "right-10" : "left-10"
          }`}
        >
          {letter}
        </motion.span>

        {/* Main animated letter */}
        <motion.span
          key={letterIndex}
          initial={{
            opacity: 0,
            filter: "blur(5px)",
            scale: 0.85,
          }}
          animate={{
            opacity: [0.45, 1, 0.8],
            filter: ["blur(4px)", "blur(0px)", "blur(0.5px)"],
            scale: [0.85, 1, 0.96],
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className={`absolute top-1/2 z-10 -translate-y-1/2 font-mono text-[20px] font-bold tracking-[0.2em] text-primary ${
            reverse ? "right-0" : "left-0"
          }`}
          style={{
            textShadow:
              "0 0 7px rgba(0,150,137,0.9), 0 0 16px rgba(0,150,137,0.65), 0 0 28px rgba(0,150,137,0.35)",
          }}
        >
          {letter}
        </motion.span>

        <motion.span
          className={`absolute top-1/2 z-20 h-1 w-1 -translate-y-1/2 rounded-full bg-primary ${
            reverse ? "-right-0.5" : "-left-0.5"
          }`}
          animate={{
            opacity: [0.4, 1, 0.4],
            scale: [0.8, 1.7, 0.8],
          }}
          transition={{
            duration: 0.9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </motion.div>
  );
}