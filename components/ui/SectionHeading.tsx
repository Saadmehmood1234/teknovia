"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

import { TopBadge } from "@/components/ui/Top-Badge";
import { animationConfig } from "@/lib/animations";

type HeadingVariant = "centered" | "left" | "split" | "sticky";

interface SectionHeadingProps {
  badge?: string;
  title: ReactNode;
  description?: ReactNode;
  subtitle?: ReactNode;
  variant?: HeadingVariant;

  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  badgeClassName?: string;
  subtitleClassName?: string;

  titleAs?: "h2" | "h3" | "h4";
  eyebrow?: boolean;
  divider?: boolean;
  sticky?: boolean;
}

export function SectionHeading({
  badge,
  title,
  description,
  subtitle,
  variant = "left",
  className = "",
  titleClassName = "",
  descriptionClassName = "",
  badgeClassName = "",
  subtitleClassName = "",
  titleAs = "h2",
  eyebrow = false,
  divider = false,
  sticky = false,
}: SectionHeadingProps) {
  const shouldReduceMotion = useReducedMotion();
  const TitleTag = titleAs;

  const isCentered = variant === "centered";
  const isSplit = variant === "split";
  const isSticky = variant === "sticky" || sticky;

  const wrapperClasses: Record<HeadingVariant, string> = {
    centered: "mx-auto w-full max-w-3xl text-center",
    left: "max-w-2xl",
    split: "flex flex-col justify-between gap-5 sm:flex-row sm:items-end",
    sticky: "max-w-2xl lg:sticky lg:top-28",
  };

  const titleClasses: Record<HeadingVariant, string> = {
    centered:
      "mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl",
    left:
      "mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl",
    split:
      "mt-3 font-heading text-3xl font-bold text-gray-950 sm:text-4xl",
    sticky:
      "mt-4 font-heading text-3xl font-black tracking-tight text-gray-950 sm:text-4xl lg:leading-[1.1]",
  };

  const descriptionClasses: Record<HeadingVariant, string> = {
    centered: "mt-5 text-base leading-8 text-gray-500",
    left: "mt-4 text-base leading-7 text-slate-600",
    split: "max-w-md text-sm leading-6 text-gray-500",
    sticky: "mt-3 text-base leading-7 text-gray-400",
  };

  const viewport = {
    once: false,
    amount: animationConfig.viewportAmount,
  };

  const transition = (delay: number) => ({
    duration: shouldReduceMotion ? 0 : animationConfig.duration,
    delay: shouldReduceMotion ? 0 : delay,
    ease: [0.22, 1, 0.36, 1] as const,
  });

  const hiddenY = shouldReduceMotion ? 0 : 18;

  const badgeContent = badge ? (
    eyebrow ? (
      <span className={`eyebrow ${badgeClassName}`}>
        {badge}
      </span>
    ) : (
      <TopBadge data={badge} centerItem={isCentered} />
    )
  ) : null;

  const headingContent = (
    <>
      <motion.div
        initial={{ opacity: 0, y: hiddenY }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={transition(0)}
      >
        {badgeContent}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: hiddenY }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={transition(0.08)}
      >
        <TitleTag
          className={`${titleClasses[variant]} ${titleClassName}`}
        >
          {title}
        </TitleTag>
      </motion.div>

      {(description || subtitle) && (
        <motion.div
          initial={{ opacity: 0, y: hiddenY }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={transition(0.16)}
        >
          {subtitle && (
            <p
              className={`mt-3 text-lg font-semibold leading-8 text-slate-700 ${subtitleClassName}`}
            >
              {subtitle}
            </p>
          )}

          {description && (
            <p
              className={`${descriptionClasses[variant]} ${descriptionClassName}`}
            >
              {description}
            </p>
          )}
        </motion.div>
      )}

      {divider && (
        <motion.div
          className="mt-8 h-px w-16 bg-primary"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={viewport}
          transition={transition(0.24)}
          style={{ transformOrigin: "left" }}
        />
      )}
    </>
  );

  if (isSplit) {
    return (
      <div className={`${wrapperClasses.split} ${className}`}>
        <div className="min-w-0">
          <motion.div
            initial={{ opacity: 0, y: hiddenY }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={transition(0)}
          >
            {badgeContent}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: hiddenY }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={transition(0.08)}
          >
            <TitleTag
              className={`${titleClasses.split} ${titleClassName}`}
            >
              {title}
            </TitleTag>
          </motion.div>
        </div>

        {(description || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: hiddenY }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={transition(0.16)}
          >
            {subtitle && (
              <p
                className={`mb-3 text-lg font-semibold leading-8 text-slate-700 ${subtitleClassName}`}
              >
                {subtitle}
              </p>
            )}

            {description && (
              <p
                className={`${descriptionClasses.split} ${descriptionClassName}`}
              >
                {description}
              </p>
            )}
          </motion.div>
        )}
      </div>
    );
  }

  return (
    <div
      className={`${wrapperClasses[variant]} ${className} ${
        isSticky ? "lg:sticky lg:top-28" : ""
      }`}
    >
      {headingContent}
    </div>
  );
}