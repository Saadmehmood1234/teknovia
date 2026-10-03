import Image from "next/image";
import {
  ArrowRight,
} from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { TopBadge } from "@/components/ui/Top-Badge";
import Link from "next/link";
import { smoheroFeatures } from "@/lib/data/digital-edge/social-media-optimization-data";


export function SMOHero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-gray-100 bg-white pt-8 pb-8 sm:pb-16">
      <Container className="relative z-10">
        <Breadcrumb
          items={[
            { label: "Digital Edge", href: "/digital-edge" },
            { label: "Social Media Optimization" },
          ]}
        />
        <div className="grid items-center gap-12 pt-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div>
            <TopBadge data="Boost Your Brand. Grow Your Business" />

            <h1 className="max-w-4xl font-heading text-4xl text-black/90 font-black leading-[1.03] tracking-[-0.045em] sm:text-5xl">
              Turn Social Presence Into{" "}
              <span className="text-primary">Real Brand Growth.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-black/65 sm:leading-8">
              Grow your business with strategic Instagram and Facebook marketing
              designed to improve visibility, engeagement, and conversions.
            </p>

            <div className="mt-7 flex flex-wrap gap-x-7 gap-y-4">
              {smoheroFeatures.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.text} className="flex items-center gap-2.5">
                    <Icon className="size-5 text-primary" />
                    <span className="text-sm font-semibold text-black/60">
                      {item.text}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-primary-600 hover:shadow-[0_10px_30px_rgba(0,150,137,0.28)]"
              >
                Get Free Consultation
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="#key-features"
                className="inline-flex items-center gap-2 rounded-lg border border-black/15 px-6 py-3.5 text-sm font-semibold text-black/80 transition hover:border-primary/50 hover:bg-white/5"
              >
                View Our Work
              </Link>
            </div>
          </div>

          <div className="relative w-full">
            <div className="relative aspect-5/4">
              <div className="relative h-full w-full overflow-hidden rounded-3xl">
                <Image
                  src="/images/digital-edge/social-media-optimisation-bg.png"
                  alt="Teknovia technology and business solutions"
                  fill
                  priority
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 38vw"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
