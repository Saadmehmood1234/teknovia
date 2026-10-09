import Image from "next/image";
import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { TopBadge } from "@/components/ui/Top-Badge";

export interface BackgroundHeroFeature {
  icon?: LucideIcon;
  label: string;
  description?: string;
}

export interface BackgroundHeroColors {
  breadcrumb?: string;
  badge?: string;
  title?: string;
  description?: string;

  featureIcon?: string;
  featureLabel?: string;
  featureDescription?: string;

  primaryButtonText?: string;
  primaryButtonBorder?: string;
  primaryButtonBackground?: string;
  secondaryButtonText?: string;
  secondaryButtonBorder?: string;
  secondaryButtonBackground?: string;
}

export interface BackgroundHeroProps {
  id?: string;

  breadcrumb: {
    label: string;
    href?: string;
  }[];

  badge?: string;

  title: ReactNode;
  description?: string;

  image: {
    src: string;
    alt?: string;
    imageObject?:string;
  };

  primaryButton?: {
    label: string;
    href: string;
  };

  secondaryButton?: {
    label: string;
    href: string;
  };

  features?: BackgroundHeroFeature[];

  overlay?: string;
  backgroundClass?: string;

  showGrid?: boolean;

  /**
   * Controls the color of individual text/icon elements.
   * Tailwind classes can be passed here.
   */
  colors?: BackgroundHeroColors;
}

export function BackgroundHero({
  id,
  breadcrumb,
  badge,
  title,
  description,
  image,
  primaryButton,
  secondaryButton,
  features,
  overlay = "bg-[#040506]/75",
  backgroundClass = "bg-[#040506]",
  showGrid = false,
  colors = {},
}: BackgroundHeroProps) {
  return (
    <section
      id={id}
      className={`relative isolate overflow-hidden py-8 ${backgroundClass} sm:pb-16`}
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src={image.src}
          alt={image.alt ?? ""}
          fill
          preload
          className={`${image.imageObject??"object-cover"} object-center`}
          sizes="100vw"
        />
      </div>

      <div className={`absolute inset-0 -z-10 ${overlay}`} />

      {/* Primary glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(0,150,137,0.14),transparent_55%)]" />

      {/* Optional grid */}
      {showGrid && (
        <div className="hero-grid pointer-events-none absolute inset-0 -z-10 opacity-20" />
      )}

      <Container className="relative z-10">
        <Breadcrumb
          items={breadcrumb}
          textColor={colors.breadcrumb ?? "text-gray-400"}
        />

        <div className="pt-8">
          {/* Badge */}
          {badge && (
            <div className={colors.badge}>
              <TopBadge data={badge} />
            </div>
          )}

          {/* Title */}
          <h1
            className={`mt-5 max-w-2xl text-4xl font-extrabold leading-[1.05] tracking-[-0.04em] sm:text-5xl ${
              colors.title ?? "text-white"
            }`}
          >
            {title}
          </h1>

          {/* Description */}
          {description && (
            <p
              className={`mt-6 max-w-2xl text-base leading-7 sm:leading-8 ${
                colors.description ?? "text-white/65"
              }`}
            >
              {description}
            </p>
          )}

          {features && features.length > 0 && (
            <div className="mt-8 flex max-w-3xl flex-wrap gap-x-7 gap-y-4">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.label}
                    className="flex items-center gap-2.5"
                  >
                    {Icon && (
                      <Icon
                        className={`size-5 shrink-0 ${
                          colors.featureIcon ?? "text-primary"
                        }`}
                      />
                    )}

                    <div>
                      <span
                        className={`text-sm font-semibold ${
                          colors.featureLabel ?? "text-white/85"
                        }`}
                      >
                        {feature.label}
                      </span>

                      {feature.description && (
                        <p
                          className={`text-xs ${
                            colors.featureDescription ?? "text-white/60"
                          }`}
                        >
                          {feature.description}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Buttons */}
          {(primaryButton || secondaryButton) && (
            <div className="mt-8 flex flex-wrap gap-4">
              {primaryButton && (
                <Link
                  href={primaryButton.href}
                  className={`inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold transition-all duration-300 hover:bg-primary-600 hover:shadow-[0_8px_20px_rgba(0,150,137,0.28)] ${
                    colors.primaryButtonText ?? "text-white"
                  }`}
                >
                  {primaryButton.label}
                  <ArrowRight className="size-4" />
                </Link>
              )}

              {secondaryButton && (
                <Link
                  href={secondaryButton.href}
                  className={`inline-flex items-center gap-2 rounded-lg border ${colors.secondaryButtonBorder??"border-white/25"} ${colors.secondaryButtonBackground??""} px-6 py-3.5 text-sm font-semibold transition ${
                    colors.secondaryButtonText ?? "text-white"
                  } hover:border-primary hover:text-primary hover:bg-white/5`}
                >
                  {secondaryButton.label}
                </Link>
              )}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
