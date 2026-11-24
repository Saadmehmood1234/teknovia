import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { TopBadge } from "@/components/ui/Top-Badge";
import Image from "next/image";
import { Fragment } from "react";
import { Calendar, Clock } from "lucide-react";

type HeroProps = {
  breadcrumb: string;
  badge: string;
  title: string;
  highlightedTitle: string;
  description: string;
  effectiveDate: string;
  lastUpdated: string;
  image?: string;
  imageAlt?: string;
};

export function Hero({
  breadcrumb,
  badge,
  title,
  highlightedTitle,
  description,
  effectiveDate,
  lastUpdated,
  image,
  imageAlt = "",
}: HeroProps) {
  return (
    <section
      className={`relative isolate overflow-hidden border-b border-gray-100 bg-[#F8FAFC] py-12 sm:py-16 ${
        !image ? "hero-grid" : ""
      }`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(0,150,137,0.10),rgba(255,255,255,0))]" />

      {image && (
        <Fragment key="policies-hero-image">
          <div className="absolute inset-0 -z-10">
            <Image
              src={image}
              alt={imageAlt}
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>
          <div className="absolute inset-0 bg-[#040506]/60 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,150,137,0.2),transparent_60%)]" />
        </Fragment>
      )}

      <Container className="relative z-10">
        <Breadcrumb
          items={[
            {
              label: breadcrumb,
            },
          ]}
          textColor={image ? "text-white" : "text-slate-600"}
        />

        <div className="mt-8 max-w-4xl">
          <div className="mb-4">
            <TopBadge data={badge} />
          </div>

          <h1
            className={`text-3xl font-extrabold tracking-tight sm:text-5xl ${
              image ? "text-white" : "text-slate-900"
            }`}
          >
            {title} <span className="text-primary">{highlightedTitle}</span>
          </h1>

          <p
            className={`mt-5 max-w-2xl text-base leading-relaxed sm:text-lg ${
              image ? "text-slate-200" : "text-slate-600"
            }`}
          >
            {description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-50/80 px-3.5 py-1.5 text-xs font-semibold text-primary shadow-xs backdrop-blur-sm">
              <Calendar className="h-3.5 w-3.5 text-primary" />
              Effective: {effectiveDate}
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-3.5 py-1.5 text-xs font-medium text-slate-600 shadow-xs backdrop-blur-sm">
              <Clock className="h-3.5 w-3.5 text-slate-400" />
              Last Updated: {lastUpdated}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
