"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";

import {
  animationConfig,
  cardVariants,
  revealVariants,
  staggerContainerVariants,
} from "@/lib/animations";

interface AnimationProps {
  children: ReactNode;
  className?: string;
}

export function RevealGroup({
  children,
  className,
}: AnimationProps) {
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

export function AnimatedCard({
  children,
  className,
  direction = 1,
  vertical = false,
}: AnimatedCardProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: false,
        amount: animationConfig.viewportAmount,
      }}
      variants={
        vertical
          ? revealVariants
          : cardVariants(direction)
      }
      className={className}
    >
      {children}
    </motion.div>
  );
}
