import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { TopBadge } from "@/components/ui/Top-Badge";
import Image from "next/image";
import { highlights } from "@/lib/data/digital-edge/watsapp-marketing-data";
export function WhatsAppMarketingHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#031823] pt-8 pb-8 sm:pb-16 text-white">
      <Container className="relative z-10">
        <Breadcrumb
          items={[
            { label: "Digital Edge", href: "/digital-edge" },
            { label: "WhatsApp Marketing" },
          ]}
        />
        <div className="grid items-center gap-12 pt-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <TopBadge data="WHATSAPP MARKETING • BUSINESS API" />

            <h1 className="max-w-4xl font-heading text-4xl font-black leading-[1.03] tracking-[-0.045em] sm:text-5xl">
              Turn WhatsApp Conversations Into{" "}
              <span className="text-primary">Measurable Growth</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/65 sm:leading-8">
              Build a smarter WhatsApp communication system with automation, CRM
              integration, lead capture, follow-ups and hands-on account
              management—all in one place.
            </p>

            <div className="mt-7 flex flex-wrap gap-x-7 gap-y-4">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-center gap-2.5">
                    <Icon className="size-5 text-primary" />
                    <span className="text-sm font-semibold text-white/90">
                      {item.label}
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
                Start WhatsApp Growth
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="#key-features"
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-primary/50 hover:bg-white/5"
              >
                Explore Features
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3 text-xs text-white/40">
              <span className="size-1.5 rounded-full bg-primary" />
              WhatsApp Business API
              <span className="text-white/20">•</span>
              Automation
              <span className="text-white/20">•</span>
              CRM Integration
            </div>
          </div>

          <div className="relative w-full pb-8 sm:pb-10">
            <div className="relative aspect-4/3">
              <div className="relative h-full w-full overflow-hidden rounded-3xl">
                <Image
                  src="/images/digital-edge/watsapp.png"
                  alt="Teknovia technology and business solutions"
                  fill
                  priority
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 38vw"
                />
              </div>

              {/* Softly blends image edges into the background */}
              <div
                className="pointer-events-none absolute inset-0 rounded-3xl"
                style={{background: `radial-gradient(ellipse at center, transparent 45%, #031823 88%, #031823 100%`,}}/>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
