"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

const letters = ["T", "E", "K", "N", "O", "V", "I", "A"];

const desktopStreams = [
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

const mobileStreams = [
  { top: "6%", duration: 22, delay: -6, reverse: false },
  { top: "18%", duration: 25, delay: -14, reverse: true },
  { top: "30%", duration: 22, delay: -8, reverse: false },
  { top: "42%", duration: 26, delay: -17, reverse: true },
  { top: "55%", duration: 23, delay: -11, reverse: false },
  { top: "68%", duration: 27, delay: -19, reverse: true },
  { top: "80%", duration: 22, delay: -9, reverse: false },
  { top: "92%", duration: 25, delay: -16, reverse: true },
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
  isMobile,
}: {
  top: string;
  duration: number;
  delay: number;
  reverse: boolean;
  isMobile: boolean;
}) {
  const [letterIndex, setLetterIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLetterIndex((current) => (current + 1) % letters.length);
    }, isMobile ? 1000 : 600);

    return () => clearInterval(interval);
  }, [isMobile]);

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
        duration: isMobile ? duration + 4 : duration,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <div
        className={`relative ${
          isMobile ? "h-9 w-44" : "h-12 w-64"
        }`}
      >
        {/* Trail */}
        <div
          className={`absolute top-1/2 -translate-y-1/2 ${
            isMobile
              ? "h-px w-36 blur-[0.5px]"
              : "h-0.5 w-56 blur-[1px]"
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
            opacity: isMobile
              ? [0.15, 0.35, 0.15]
              : [0.25, 0.65, 0.25],
            scaleX: isMobile
              ? [0.9, 1.05, 0.9]
              : [0.85, 1.15, 0.85],
          }}
          transition={{
            duration: isMobile ? 2.2 : 1.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Outer blurred letter */}
        {!isMobile && (
          <motion.span
            className={`absolute top-1/2 -translate-y-1/2 font-mono text-[20px] font-semibold tracking-[0.2em] text-primary/10 blur-xs ${
              reverse ? "right-2" : "left-2"
            }`}
          >
            {letter}
          </motion.span>
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
        <motion.span
          key={letterIndex}
          initial={{
            opacity: 0,
            filter: `blur(${isMobile ? 3 : 5}px)`,
            scale: 0.85,
          }}
          animate={{
            opacity: isMobile
              ? [0.3, 0.75, 0.55]
              : [0.45, 1, 0.8],
            filter: isMobile
              ? ["blur(2px)", "blur(0px)", "blur(0.5px)"]
              : ["blur(4px)", "blur(0px)", "blur(0.5px)"],
            scale: [0.9, 1, 0.96],
          }}
          transition={{
            duration: isMobile ? 0.8 : 0.6,
            ease: "easeOut",
          }}
          className={`absolute top-1/2 z-10 -translate-y-1/2 font-mono font-bold ${
            isMobile
              ? "text-[16px] tracking-[0.15em]"
              : "text-[20px] tracking-[0.2em]"
          } text-primary ${reverse ? "right-0" : "left-0"}`}
          style={{
            textShadow: isMobile
              ? "0 0 5px rgba(0,150,137,0.5), 0 0 10px rgba(0,150,137,0.25)"
              : "0 0 7px rgba(0,150,137,0.9), 0 0 16px rgba(0,150,137,0.65), 0 0 28px rgba(0,150,137,0.35)",
          }}
        >
          {letter}
        </motion.span>

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


// import type { CSSProperties } from "react";

// const streams = [
//   { top: "7%", duration: 24, delay: -8, reverse: false },
//   { top: "17%", duration: 29, delay: -19, reverse: true },
//   { top: "27%", duration: 26, delay: -12, reverse: false },
//   { top: "37%", duration: 31, delay: -24, reverse: true },
//   { top: "47%", duration: 25, delay: -6, reverse: false },
//   { top: "57%", duration: 30, delay: -17, reverse: true },
//   { top: "67%", duration: 27, delay: -11, reverse: false },
//   { top: "77%", duration: 32, delay: -26, reverse: true },
//   { top: "87%", duration: 26, delay: -15, reverse: false },
//   { top: "95%", duration: 30, delay: -21, reverse: true },
// ];

// const letters = ["T", "E", "K", "N", "O", "V", "I", "A"];

// export function TeknoviaBackground() {
//   return (
//     <div
//       aria-hidden="true"
//       className="teknovia-background pointer-events-none absolute inset-0 z-0 overflow-hidden"
//     >
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(0,150,137,0.09),transparent_58%)]" />

//       {streams.map((stream, index) => (
//         <div
//           key={stream.top}
//           className={`teknovia-stream ${
//             stream.reverse ? "teknovia-stream--reverse" : ""
//           } ${index >= 6 ? "teknovia-stream--desktop-only" : ""}`}
//           style={
//             {
//               top: stream.top,
//               "--stream-duration": `${stream.duration}s`,
//               "--stream-delay": `${stream.delay}s`,
//             } as CSSProperties
//           }
//         >
//           <div
//             className={`teknovia-stream__trail ${
//               stream.reverse
//                 ? "teknovia-stream__trail--reverse"
//                 : ""
//             }`}
//           />

//           <div
//             className={`teknovia-stream__glow ${
//               stream.reverse
//                 ? "teknovia-stream__glow--reverse"
//                 : ""
//             }`}
//           />

//           <span
//             className={`teknovia-stream__letter ${
//               stream.reverse
//                 ? "teknovia-stream__letter--reverse"
//                 : ""
//             }`}
//           >
//             {letters[index % letters.length]}
//           </span>

//           <span
//             className={`teknovia-stream__dot ${
//               stream.reverse
//                 ? "teknovia-stream__dot--reverse"
//                 : ""
//             }`}
//           />
//         </div>
//       ))}
//     </div>
//   );
// }