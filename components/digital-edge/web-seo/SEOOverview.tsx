import { Container } from "@/components/ui/Container";
import { TopBadge } from "@/components/ui/Top-Badge";
import { CheckCircle2, } from "lucide-react";
import Image from "next/image";

export function SEOOverview() {
  return (
    <section className="border-b border-gray-100 bg-[#FAFAFA] py-8 sm:py-16">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1fr] lg:gap-12">
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-2 shadow-sm">
              <Image
                src="/images/digital-edge/web-seo-about.jpg"
                alt="Teknovia Web Seo"
                width={1000}
                height={800}
                className="h-auto w-full object-cover rounded-2xl"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-5 right-5 rounded-2xl border border-primary/20 bg-white px-5 py-4 shadow-xl sm:right-8">
              <p className="font-mono text-xs font-bold uppercase tracking-wider text-primary">
                Organic Growth
              </p>
              <p className="mt-1 text-sm font-bold text-gray-950">
                Built for long-term visibility
              </p>
            </div>
          </div>

          <div>
            <TopBadge data="Search and AI Optimization" />

            <h2 className="mt-4 font-heading text-3xl font-black leading-tight tracking-tight text-gray-950 sm:text-4xl">
              Search Visibility That Connects You With the Right Audience
            </h2>

            <div className="mt-6 space-y-5 text-sm leading-7 text-gray-600 sm:text-base">
              <p>
                Search Engine Optimization (SEO) helps your website appear
                higher in search results when potential customers search for
                your products or services.
              </p>

              <p>
                It makes your website easier for search engines to understand,
                crawl, and rank. Effective SEO connects your business with
                people who are actively looking for what you offer.
              </p>

              <p>
                It helps attract relevant organic traffic without paying for
                every click. Over time, SEO builds online visibility,
                credibility, and sustainable business growth.
              </p>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Improve organic visibility",
                "Reach active searchers",
                "Build long-term authority",
                "Generate relevant traffic",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                  <span className="text-sm font-medium text-gray-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
