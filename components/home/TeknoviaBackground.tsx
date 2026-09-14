"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const letters = ["T", "E", "K", "N", "O", "V", "I", "A"];

const streams = [
  { top: "9%", duration: 15, delay: -3, reverse: false },
  { top: "19%", duration: 21, delay: -12, reverse: true },
  { top: "30%", duration: 17, delay: -7, reverse: false },
  { top: "41%", duration: 24, delay: -18, reverse: true },
  { top: "53%", duration: 16, delay: -9, reverse: false },
  { top: "64%", duration: 22, delay: -15, reverse: true },
  { top: "75%", duration: 18, delay: -5, reverse: false },
  { top: "86%", duration: 25, delay: -20, reverse: true },
  { top: "96%", duration: 19, delay: -11, reverse: false },
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
        x: reverse ? "110vw" : "-10vw",
      }}
      animate={{
        x: reverse ? "-10vw" : "110vw",
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <div className="relative h-8 w-44">
        {/* Long atmospheric trail */}
        <div
          className={`absolute top-1/2 h-px w-40 -translate-y-1/2 blur-[1px] ${
            reverse
              ? "right-3 bg-gradient-to-l from-primary/50 via-primary/20 to-transparent"
              : "left-3 bg-gradient-to-r from-primary/50 via-primary/20 to-transparent"
          }`}
        />

        {/* Soft glow underneath the trail */}
        <motion.div
          className={`absolute top-1/2 h-5 w-32 -translate-y-1/2 rounded-full bg-primary/20 blur-xl ${
            reverse ? "right-2" : "left-2"
          }`}
          animate={{
            opacity: [0.25, 0.55, 0.25],
            scaleX: [0.85, 1.1, 0.85],
          }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Temporal ghost 3 */}
        <motion.span
          className={`absolute top-1/2 -translate-y-1/2 font-mono text-[12px] font-semibold tracking-[0.2em] text-primary/10 blur-[3px] ${
            reverse ? "right-2" : "left-2"
          }`}
        >
          {letter}
        </motion.span>

        {/* Temporal ghost 2 */}
        <motion.span
          className={`absolute top-1/2 -translate-y-1/2 font-mono text-[12px] font-semibold tracking-[0.2em] text-primary/20 blur-[2px] ${
            reverse ? "right-5" : "left-5"
          }`}
        >
          {letter}
        </motion.span>

        {/* Temporal ghost 1 */}
        <motion.span
          className={`absolute top-1/2 -translate-y-1/2 font-mono text-[12px] font-semibold tracking-[0.2em] text-primary/35 blur-[1px] ${
            reverse ? "right-8" : "left-8"
          }`}
        >
          {letter}
        </motion.span>

        {/* Main character */}
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
          className={`absolute top-1/2 z-10 -translate-y-1/2 font-mono text-[12px] font-bold tracking-[0.2em] text-primary ${
            reverse ? "right-0" : "left-0"
          }`}
          style={{
            textShadow:
              "0 0 5px rgba(0,150,137,0.9), 0 0 12px rgba(0,150,137,0.65), 0 0 22px rgba(0,150,137,0.35)",
          }}
        >
          {letter}
        </motion.span>

        {/* Tiny bright core */}
        <motion.span
          className={`absolute top-1/2 z-20 h-[2px] w-[2px] -translate-y-1/2 rounded-full bg-primary ${
            reverse ? "right-[-2px]" : "left-[-2px]"
          }`}
          animate={{
            opacity: [0.4, 1, 0.4],
            scale: [0.8, 1.5, 0.8],
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