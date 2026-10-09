"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";

import {
  animationConfig,
  cardVariants,
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
  hover?: boolean;
  direction?: -1 | 1;
}

export function AnimatedCard({
  children,
  className,
  hover = true,
  direction = 1,
}: AnimatedCardProps) {
  return (
    <motion.div
      variants={cardVariants(direction)}
      whileHover={hover ? { y: -5 } : undefined}
      transition={{ duration: 0.25 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}