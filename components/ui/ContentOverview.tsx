"use client";

import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { CheckCircle2 } from "lucide-react";
import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

import { Container } from "@/components/ui/Container";
import { TopBadge } from "@/components/ui/Top-Badge";
import { animationConfig } from "@/lib/animations";

export interface OverviewPoint {
  text: string;
  icon?: LucideIcon;
}

export interface OverviewImageBadge {
  label: string;
  text: string;
  icon?: LucideIcon;
}

export interface ContentOverviewProps {
  id?: string;
  badge: string;
  title: ReactNode;
  paragraphs: ReactNode[];

  image: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    priority?: boolean;
    className?: string;
    sizes?: string;
  };

  points?: OverviewPoint[];
  imageBadge?: OverviewImageBadge;
  imageOverlay?: boolean;

  backgroundClass?: string;
  sectionClassName?: string;
  gridClassName?: string;
  contentClassName?: string;

  children?: ReactNode;
}

export function ContentOverview({
  id,
  badge,
  title,
  paragraphs,
  image,
  points,
  imageBadge,
  imageOverlay = false,
  backgroundClass = "bg-[#FAFAFA]",
  sectionClassName = "",
  gridClassName = "lg:grid-cols-[1fr_1.05fr] lg:gap-12",
  contentClassName = "",
  children,
}: ContentOverviewProps) {
  const shouldReduceMotion = useReducedMotion();

  const imageVariants = {
    hidden: {
      opacity: 0,
      x: shouldReduceMotion ? 0 : -50,
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

  const contentVariants = {
    hidden: {
      opacity: 0,
      x: shouldReduceMotion ? 0 : 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : animationConfig.duration,
        delay: shouldReduceMotion ? 0 : 0.12,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section
      id={id}
      className={`overflow-hidden border-b border-gray-100 py-8 sm:py-16 ${backgroundClass} ${sectionClassName}`}
    >
      <Container>
        <div className={`grid items-start gap-12 ${gridClassName}`}>
          {/* Image: enters from the left */}
          <motion.div
            className="relative pb-4 lg:pb-6"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: false,
              amount: animationConfig.viewportAmount,
            }}
          >
            <div className="relative w-full overflow-hidden rounded-3xl border border-gray-200 bg-white">
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width ?? 1000}
                height={image.height ?? 750}
                priority={image.priority}
                className={
                  image.className ??
                  "h-auto w-full rounded-2xl object-cover"
                }
                sizes={
                  image.sizes ??
                  "(max-width: 1024px) 100vw, 50vw"
                }
              />

              {imageOverlay && (
                <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />
              )}
            </div>

            {imageBadge && (
              <div className="absolute -bottom-1 right-5 rounded-2xl border border-primary/20 bg-white px-5 py-4 shadow-xl sm:right-8">
                <div className="flex items-center gap-3">
                  {imageBadge.icon && (
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary">
                      <imageBadge.icon className="size-5" />
                    </div>
                  )}

                  <div>
                    <p className="font-mono text-xs font-bold uppercase tracking-wider text-primary">
                      {imageBadge.label}
                    </p>
                    <p className="mt-1 text-sm font-bold text-gray-950">
                      {imageBadge.text}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </motion.div>

          {/* Content: enters from the right */}
          <motion.div
            className={contentClassName}
            variants={contentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: false,
              amount: animationConfig.viewportAmount,
            }}
          >
            <TopBadge data={badge} />

            <h2 className="mt-4 max-w-3xl font-heading text-3xl font-black leading-tight tracking-tight text-gray-950 sm:text-4xl">
              {title}
            </h2>

            <div className="mt-6 space-y-5 text-sm leading-7 text-gray-600 sm:text-base">
              {paragraphs.map((paragraph, index) => (
                <div key={index}>{paragraph}</div>
              ))}
            </div>

            {points && points.length > 0 && (
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {points.map((point) => {
                  const Icon = point.icon ?? CheckCircle2;

                  return (
                    <div
                      key={point.text}
                      className="flex items-start gap-3"
                    >
                      <Icon className="mt-0.5 size-5 shrink-0 text-primary" />
                      <span className="text-sm font-medium text-gray-700">
                        {point.text}
                      </span>
                    </div>
                  );
                })}
              </div>
            )}

            {children}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}