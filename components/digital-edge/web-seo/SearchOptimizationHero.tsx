import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Container } from "@/components/ui/Container";
import { TopBadge } from "@/components/ui/Top-Badge";
import { seoOptimizationTypes } from "@/lib/data/digital-edge";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function SearchOptimizationHero() {
  return (
    <section className="relative overflow-hidden py-8 text-white sm:py-16">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/digital-edge/webseobg.png"
          alt="Teknovia technology and business solutions"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-[#040506]/85" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,150,137,0.14),transparent_55%)]" />
      <Container className="relative z-10">
        <Breadcrumb
          items={[
            {
              label: "Digital Edge",
              href: "/digital-edge",
            },
            {
              label: "Search Engine Optimization",
            },
          ]}
          textColor="text-gray-400"
        />
          <div className="w-full mt-8">
            <TopBadge data="SEO • AEO • GEO • AIO" />
            <h1 className="max-w-3xl text-4xl font-bold leading-[1.2] tracking-tight text-white sm:text-5xl">
              Be Found. Be Answered.{" "}
              <span className="text-primary">Be Discovered by AI.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-md leading-7 text-gray-200 sm:leading-6">
              We help businesses improve their visibility across search engines,
              answer engines, and AI-powered platforms—bringing more relevant
              traffic, leads, and opportunities for sustainable growth.
            </p>

            <div className="mt-8 max-w-3xl grid gap-3 grid-cols-2 sm:grid-cols-4 w-full ">
              {seoOptimizationTypes.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.short} className="flex items-center gap-3">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="size-6" />
                    </div>

                    <div>
                      <p className="text-xs font-bold text-white">
                        {item.short}
                      </p>
                      <p className="text-xs text-white/60">{item.title}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-primary-600 hover:shadow-[0_8px_30px_rgba(0,150,137,0.3)]"
              >
                Get a Free Consultation
                <ArrowRight size={17} />
              </Link>

              <Link
                href="#seo-services"
                className="inline-flex items-center gap-2 rounded-lg border border-white/45 px-6 py-3.5 text-sm font-semibold text-primary transition hover:bg-white/10 hover:border-primary"
              >
                Explore SEO Services
              </Link>
            </div>
          </div>

          {/* <div className="relative w-full pb-8 sm:pb-10">
            <div className="relative aspect-3/2 overflow-hidden">
              <div className="relative h-full w-full">
                <Image
                  src="/images/digital-edge/webseobg.png"
                  alt="Teknovia technology and business solutions"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 38vw"
                />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,white_0%,transparent_12%,transparent_88%,white_100%)]" />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,white_0%,transparent_12%,transparent_85%,white_100%)]" />
              </div>
            </div>
          </div> */}
      </Container>
    </section>
  );
}
