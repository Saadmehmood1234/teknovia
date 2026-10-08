import Image from "next/image";
import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { TopBadge } from "@/components/ui/Top-Badge";

export interface HeroFeature {
  icon: LucideIcon;
  text: string;
  desc?: string;
}

export interface HeroButton {
  label: string;
  href: string;
  external?: boolean;
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

export interface SplitHeroProps {
  breadcrumb: {
    label: string;
    href?: string;
  }[];

  badge: string;

  title: ReactNode;
  description: string;

  image: {
    src: string;
    alt: string;
    aspectClass?: string;
    objectClass?: string;
    blend?: boolean;
  };

  features?: HeroFeature[];

  primaryButton: HeroButton;
  secondaryButton?: HeroButton;

  meta?: ReactNode;

  backgroundClass?: string;
  textClass?: string;
  descriptionClass?: string;
  featureTextClass?: string;
  featureDescClass?:string;
  headingClass?: string;

  id?: string;
  colors?: BackgroundHeroColors;
}

export function SplitHero({
  breadcrumb,
  badge,
  title,
  description,
  image,
  features,
  primaryButton,
  secondaryButton,
  meta,
  backgroundClass = "bg-[#EFF3F6]",
  textClass = "text-slate-950",
  descriptionClass = "text-gray-600",
  featureTextClass = "text-gray-600",
  featureDescClass="text-gray-500",
  headingClass = "font-heading text-4xl font-bold leading-[1.2] tracking-tight sm:text-5xl",
  id,
  colors = {},
}: SplitHeroProps) {
  return (
    <section
      id={id}
      className={`relative isolate overflow-hidden border-b border-gray-200 py-8 sm:pb-16 ${backgroundClass} ${textClass}`}
    >
      <Container className="relative z-10">
        <Breadcrumb items={breadcrumb} />

        <div className="grid items-center gap-12 pt-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <TopBadge data={badge} />

            <h1 className={`mt-5 max-w-4xl ${headingClass}`}>{title}</h1>

            <p
              className={`mt-6 max-w-2xl text-base leading-7 sm:leading-8 ${descriptionClass}`}
            >
              {description}
            </p>

            {features && features.length > 0 && (
              <div className="mt-7 flex max-w-2xl flex-wrap gap-x-7 gap-y-4">
                {features.map((feature) => {
                  const Icon = feature.icon;

                  return (
                    <div
                      key={feature.text}
                      className="flex items-center gap-2.5"
                    >
                      <Icon className="size-5 shrink-0 text-primary" />

                      <span
                        className={`text-sm font-semibold ${featureTextClass}`}
                      >
                        {feature.text}
                      </span>

                      <p className={`text-xs ${featureDescClass}`}>{feature.desc}</p>
                    </div>
                  );
                })}
              </div>
            )}

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href={primaryButton.href}
                className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-primary-600 hover:shadow-[0_10px_30px_rgba(0,150,137,0.28)]"
              >
                {primaryButton.label}
                <ArrowRight className="size-4" />
              </Link>

              {secondaryButton && (
                <Link
                  href={secondaryButton.href}
                  className={`inline-flex cursor-pointer items-center gap-2 rounded-lg border ${colors.secondaryButtonBorder ?? "border-black/25"} ${colors.secondaryButtonBackground ?? ""} px-6 py-3.5 text-sm font-semibold transition ${
                    colors.secondaryButtonText ?? "text-black"
                  } hover:border-primary hover:text-primary hover:bg-white/5`}
                >
                  {secondaryButton.label}
                </Link>
              )}
            </div>

            {meta && (
              <div className="mt-8 flex flex-wrap items-center gap-3 text-xs text-white/40">
                {meta}
              </div>
            )}
          </div>

          <div className="relative w-full pb-8 sm:pb-10">
            <div className={`relative ${image.aspectClass ?? "aspect-3/2"}`}>
              <div className="relative h-full w-full overflow-hidden rounded-3xl">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority
                  className={image.objectClass ?? "object-cover"}
                  sizes="(max-width: 1024px) 100vw, 38vw"
                />
              </div>

              {image.blend && (
                <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(ellipse_at_center,transparent_45%,#031823_88%,#031823_100%)]" />
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
