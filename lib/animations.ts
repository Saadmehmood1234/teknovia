import type { Variants } from "motion/react";

export const animationConfig = {
  duration: 0.9,
  stagger: 0.18,
  distance: 40,
  hoverDistance: 5,
  viewportAmount: 0.15,
} as const;

export const revealVariants: Variants = {
  hidden: {
    opacity: 0,
    y: animationConfig.distance,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: animationConfig.duration,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const staggerContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: animationConfig.stagger,
      delayChildren: 0.1,
    },
  },
};

export const cardVariants = (direction: number): Variants => ({
  hidden: {
    opacity: 0,
    x: direction * 60,
    y: 20,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: animationConfig.duration,
      ease: [0.22, 1, 0.36, 1],
    },
  },
});