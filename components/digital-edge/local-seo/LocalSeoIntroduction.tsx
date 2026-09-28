import { ArrowUpRight, MapPin, PhoneCall, Search, Star } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { TopBadge } from "@/components/ui/Top-Badge";
import Image from "next/image";

const highlights = [
  {
    text: "Appear in top 3 Google Map results (Map Pack)",
    icon: MapPin,
  },
  {
    text: "Get more calls and direction requests",
    icon: PhoneCall,
  },
  {
    text: "Improve visibility for “near me” searches",
    icon: Search,
  },
  {
    text: "Build credibility with 5-star reviews",
    icon: Star,
  },
  {
    text: "Increase local conversions and ROI",
    icon: ArrowUpRight,
  },
];

export function LocalSeoIntroduction() {
  return (
    <section className="border-b border-gray-100 bg-[#FAFAFA] py-8 sm:py-16">
      <Container>
        <div className="grid items-start gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-12">
          <div className="relative flex flex-col gap-4">
            <div className="relative w-full overflow-hidden rounded-3xl border border-gray-200 bg-white">
              <Image
                src="/images/digital-edge/seo-about.png"
                alt="Mobile application development"
                width={1000}
                height={750}
                className="h-auto w-full rounded-2xl object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
          <div>
            <TopBadge data="WHAT IS LOCAL SEO?" />

            <h2 className="mt-4 max-w-3xl text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">
              Make Your Business{" "}
              <span className="text-primary">
                Visible Where Customers Search
              </span>
            </h2>

            <div className="mt-6 max-w-3xl space-y-4 text-sm leading-7 text-gray-600 s">
              <p>
                Local SEO (GMB) is the process of optimizing your Google
                Business Profile to improve visibility in local search results
                and Google Maps.
              </p>

              <p>
                It helps businesses appear when customers search for services
                “near me” or in a specific location. This increases calls,
                website visits, and physical footfall from high-intent users.
              </p>

              <p>
                It builds trust through reviews, ratings, and accurate business
                information. Ultimately, it drives more local leads and
                conversions with minimal acquisition cost.
              </p>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.text}
                    className="flex items-center gap-3"
                  >
                    <div className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary">
                      <Icon className="size-4" />
                    </div>

                    <p className="text-sm leading-5 text-gray-800">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
