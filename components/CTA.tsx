"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

import { BackgroundEffect } from "./Background";
import { animationConfig } from "@/lib/animations";

interface CTAProps {
  id?: string;
  title: string;
  description: string;
  button: {
    label: string;
    href: string;
  };
  image?: string;
  imageAlt?: string;
}

export function CTA({
  id = "contact",
  title,
  description,
  button,
  image = "/images/home-hero.jpg",
  imageAlt = "",
}: CTAProps) {
  const shouldReduceMotion = useReducedMotion();

  const contentVariants = {
    hidden: {
      opacity: 0,
      x: shouldReduceMotion ? 0 : -35,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : animationConfig.duration,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const buttonVariants = {
    hidden: {
      opacity: 0,
      x: shouldReduceMotion ? 0 : 35,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : animationConfig.duration,
        delay: shouldReduceMotion ? 0 : 0.15,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section
      id={id}
      className="relative flex w-full items-center justify-center overflow-hidden"
    >
      <Image
        src={image}
        alt={imageAlt}
        fill
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-[#18342F]/90" />

      <BackgroundEffect />

      <div className="relative flex w-full max-w-345 flex-col items-center justify-between gap-10 px-8 py-8 sm:py-16 lg:flex-row">
        {/* Text enters from the left */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
            amount: animationConfig.viewportAmount,
          }}
          variants={contentVariants}
          className="w-full"
        >
          <p className="text-2xl font-bold text-white sm:text-3xl">
            {title}
          </p>

          <h2 className="mt-4 max-w-2xl text-base leading-7 text-white/90">
            {description}
          </h2>
        </motion.div>

        {/* Button enters from the right */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
            amount: animationConfig.viewportAmount,
          }}
          variants={buttonVariants}
          className="shrink-0"
        >
          <Link
            href={button.href}
            className="inline-flex w-fit items-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-slate-100"
          >
            {button.label}
            <ArrowRight size={17} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}