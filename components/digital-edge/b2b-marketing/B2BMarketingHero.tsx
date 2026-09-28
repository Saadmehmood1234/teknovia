import { ArrowRight, ChartNoAxesColumn, Target, Users } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { TopBadge } from "@/components/ui/Top-Badge";
import Image from "next/image";

const channels = [
  {
    icon: Target,
    label: "Qualified Leads",
  },
  {
    icon: Users,
    label: "Reach Decision-Makers",
  },
  {
    icon: ChartNoAxesColumn,
    label: "Build Your Brand",
  },
  //   {
  //     icon: Handshake,
  //     label: "Long-Term Business Growth",
  //   }
];

export function B2BMarketingHero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-gray-200 bg-[#EFF3F6] pt-4 pb-8 sm:pb-16 sm:pt-8">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/digital-edge/b2b-bg.png"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-[#040506]/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,150,137,0.14),transparent_55%)]" />

      <Container className="relative">
        <Breadcrumb
          items={[
            {
              label: "Digital Services",
              href: "/digital-services",
            },
            {
              label: "B2B Marketing",
            },
          ]}
        />

        <div className="grid items-center gap-12 pt-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <TopBadge data="B2B MARKETING & LEAD GENERATION" />

            <h1 className=" max-w-3xl font-heading text-4xl font-bold leading-[1.08] tracking-tight text-gray-950 sm:text-5xl">
              B2B Marketing That Connects You With
              <span className="text-primary">the Right Businesses.</span>
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-7 text-gray-600 sm:text-base sm:leading-7">
              Build a stronger B2B presence, reach decision-makers, generate
              qualified leads, and turn business relationships into sustainable
              growth.
            </p>
            <div className="mt-2 flex max-w-xl flex-wrap gap-4 pt-6">
              {channels.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-2 text-sm font-semibold text-gray-500"
                  >
                    <Icon className="size-4 text-primary" />
                    {item.label}
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-primary-600 hover:shadow-[0_10px_30px_rgba(0,150,137,0.25)]"
              >
                Get a B2B Marketing Strategy
                <ArrowRight className="size-4" />
              </Link>

              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-3.5 text-sm font-semibold text-gray-800 transition hover:border-primary hover:text-primary"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
