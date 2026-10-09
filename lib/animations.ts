
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

// For the main reason panel.
export const panelRevealVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -35,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// For the reason selector.
export const selectorRevealVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 25,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      delay: 0.12,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// For content inside the active reason.
export const reasonContentVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
};


