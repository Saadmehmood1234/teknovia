"use client";

import { motion, useReducedMotion } from "motion/react";

import { stats } from "@/lib/data/hero-data";
import { animationConfig } from "@/lib/animations";

export function Stats() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.14,
      },
    },
  };

  const statVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : animationConfig.duration,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section className="border-b border-slate-100 bg-[#FAFAFA] pb-8">
      <motion.div
        className="mx-auto grid max-w-[1280px] grid-cols-2 divide-x divide-slate-100 px-4 sm:px-8 md:grid-cols-4 md:px-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: false,
          amount: animationConfig.viewportAmount,
        }}
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            className="px-5 py-4 text-center sm:py-4"
            variants={statVariants}
          >
            <p className="text-4xl font-extrabold tracking-tight text-primary">
              {stat.value}
            </p>

            <p className="mt-2 text-xs font-bold uppercase tracking-wider text-slate-500">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}