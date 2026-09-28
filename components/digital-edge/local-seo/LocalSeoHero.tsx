import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { TopBadge } from "@/components/ui/Top-Badge";
import Image from "next/image";

export function LocalSeoHero() {
  return (
    <section
      id="web-dev-hero"
      className="relative pt-8 border-b border-gray-200 pb-12 isolate overflow-hidden bg-[#EFF3F6] gap-10"
    >
      <Container>
        <Breadcrumb
          items={[
            {
              label: "Digital Services",
              href: "/digital-services",
            },
            {
              label: "Local SEO (GMB)",
            },
          ]}
        />
        <div className="flex flex-col gap-8 mt-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          <div className="w-full">
            <TopBadge data="LOCAL SEO • GOOGLE BUSINESS PROFILE" />
            <h1 className="max-w-4xl text-4xl font-bold leading-[1.2] tracking-tight text-black sm:text-5xl">
              Get Found Locally.
              <br />
              <span className="text-primary">
                Turn Searches Into Customers.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-md leading-7 text-gray-600 sm:leading-6">
              Optimize your Google Business Profile, improve your Google Maps
              visibility, and connect with high-intent customers searching for
              your services locally.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-primary-600 hover:shadow-[0_8px_20px_rgba(0,150,137,0.28)]"
              >
                Start Your Project
                <ArrowRight size={17} />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg border border-black/25 px-6 py-3.5 text-sm font-semibold text-primary transition hover:bg-white/10 hover:border-primary"
              >
                Explore Services
              </a>
            </div>
          </div>

          <div className="relative w-full bg-[#EFF3F6]">
            <div className="relative aspect-3/2">
              <div
                className="absolute -inset-3 rounded-4xl bg-[#EFF3F6] blur-xl"
                aria-hidden="true"
              />
              <div className="relative h-full w-full overflow-hidden rounded-3xl">
                <Image
                  src="/images/digital-edge/local-seo-bg.png"
                  alt="Teknovia technology and business solutions"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 38vw"
                />
                <div
                  className="pointer-events-none absolute inset-0 rounded-3xl"
                  style={{
                    boxShadow: "inset 0 0 45px 25px #EFF3F6",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

