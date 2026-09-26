import {
  Activity,
  ArrowRight,
  Network,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { TopBadge } from "@/components/ui/Top-Badge";
import Image from "next/image";

export function IoTHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#040706] pb-8 pt-8 text-white sm:pb-16">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/iot-bg.png"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-[#040506]/80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,150,137,0.14),transparent_55%)]" />
      <Container className="relative z-10">
        <Breadcrumb
          items={[
            {
              label: "Software Services",
              href: "/software-services",
            },
            {
              label: "IoT & Automation",
            },
          ]}
        />
        <div className="pt-8">
          <TopBadge data="Connected • Intelligent • Automated" />

          <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.03] tracking-[-0.045em] sm:text-5xl ">
            Connect the Physical World with{" "}
            <span className="text-primary">Intelligent Technology</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/65 sm:leading-8">
            Build connected, intelligent, and automated operations with
            TEKNOVIA&apos;s IoT development solutions. Connect devices, capture
            real-time data, automate processes, and turn operational information
            into actionable business intelligence.
          </p>
          <div className="mt-9 flex flex-wrap gap-x-7 gap-y-4">
            <div className="flex items-center gap-2.5">
              <Network className="size-5 text-primary" />
              <span className="text-sm font-semibold text-white/85">
                Connected Systems
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              <Activity className="size-5 text-primary" />
              <span className="text-sm font-semibold text-white/85">
                Real-Time Intelligence
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              <ShieldCheck className="size-5 text-primary" />
              <span className="text-sm font-semibold text-white/85">
                Secure by Design
              </span>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-primary-600 hover:shadow-[0_10px_30px_rgba(0,150,137,0.3)]"
            >
              Build Your IoT Solution
              <ArrowRight size={17} />
            </Link>

            <Link
              href="#iot-solutions"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-primary hover:bg-white/5"
            >
              Explore Solutions
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
