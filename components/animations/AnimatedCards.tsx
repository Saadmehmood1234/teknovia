"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";

import {
  animationConfig,
  revealVariants,
  staggerContainerVariants,
} from "@/lib/animations";

interface AnimationProps {
  children: ReactNode;
  className?: string;
}

export function RevealGroup({ children, className }: AnimationProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: false,
        amount: animationConfig.viewportAmount,
      }}
      variants={staggerContainerVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface AnimatedCardProps extends AnimationProps {
  direction?: -1 | 1;
  vertical?: boolean;
}

export function AnimatedCard({ children, className }: AnimatedCardProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: animationConfig.viewportAmount,
      }}
      variants={revealVariants}
      className={`min-w-0 w-full ${className ?? ""}`}
    >
      {children}
    </motion.div>
  );
}
