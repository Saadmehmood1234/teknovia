"use client";

import type { ReactNode } from "react";
import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
} from "motion/react";

interface RevealListItemProps extends Omit<HTMLMotionProps<"li">, "children"> {
  children: ReactNode;
  delay?: number;
}

export function RevealListItem({
  children,
  className,
  delay = 0,
  ...props
}: RevealListItemProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.li
      {...props}
      initial={{
        opacity: 0,
        y: shouldReduceMotion ? 0 : 16,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: false,
        amount: 0.1,
      }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.65,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.li>
  );
}