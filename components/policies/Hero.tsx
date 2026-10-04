import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { TopBadge } from "@/components/ui/Top-Badge";
import Image from "next/image";

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
      className={`relative isolate overflow-hidden border-b border-gray-200 bg-[#EFF3F6] pt-8 pb-12 ${!image && "hero-grid "}`}
    >
      {image && (
        <>
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
          <div className="absolute inset-0 bg-[#040506]/50" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,150,137,0.14),transparent_55%)]" />
        </>
      )}

      <Container>
        <Breadcrumb
          items={[
            {
              label: breadcrumb,
            },
          ]}
          textColor="text-white"
        />

        <div className="relative mt-8 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          <div className="w-full">
            <TopBadge data={badge} />

            <h1 className="max-w-4xl text-4xl font-bold leading-[1.2] tracking-tight text-black sm:text-5xl">
              {title} <span className="text-primary">{highlightedTitle}</span>
            </h1>

            <p className="mt-6 max-w-2xl text-md leading-7 text-gray-600 sm:leading-6">
              {description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary-100 bg-white/80 px-4 py-2 text-xs font-medium text-gray-600 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Effective: {effectiveDate}
              </div>

              <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-4 py-2 text-xs font-medium text-gray-600 backdrop-blur-sm">
                Last Updated: {lastUpdated}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
