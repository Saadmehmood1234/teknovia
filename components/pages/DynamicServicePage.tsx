import type { DynamicPageData } from "@/lib/data/teknovia-pages";

import { FeatureCard } from "./FeatureCard";
import { CTASection } from "./CTASection";
import { FAQSection } from "./FAQSection";
import { ProcessSection } from "./ProcessSection";
import { SectionHeading } from "./SectionHeading";
import { ServiceHero } from "./ServiceHero";

type Props = {
  data: DynamicPageData;
};

export default function DynamicServicePage({ data }: Props) {
  return (
    <main className="overflow-hidden bg-white">
      <ServiceHero data={data} />

      {data.features && data.features.length > 0 && (
        <section className="section-padding">
          <div className="container-page">
            <SectionHeading
              eyebrow="WHY TEKNOVIA"
              title="Built Around Your Business"
              description="Technology should solve real business problems. Our solutions combine usability, scalability, performance and measurable business value."
            />

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {data.features.map((item) => (
                <FeatureCard
                  key={item.title}
                  {...item}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {data.services && data.services.length > 0 && (
        <section className="section-padding bg-slate-50/70">
          <div className="container-page">
            <SectionHeading
              eyebrow="OUR EXPERTISE"
              title="Solutions Designed Around Your Needs"
              description="From strategy and design to development and optimization, we provide practical solutions that support your business goals."
            />

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {data.services.map((item, index) => (
                <FeatureCard
                  key={item.title}
                  {...item}
                  number={String(index + 1).padStart(2, "0")}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {data.process && data.process.length > 0 && (
        <ProcessSection process={data.process} />
      )}

      {data.solutions && data.solutions.length > 0 && (
        <section className="section-padding">
          <div className="container-page">
            <SectionHeading
              eyebrow="SOLUTIONS WE BUILD"
              title="Powerful Digital Products. Built for Real Impact."
              description="We build solutions that are practical, scalable and designed around real users and business requirements."
            />

            <div className="grid gap-5 md:grid-cols-2">
              {data.solutions.map((item, index) => (
                <FeatureCard
                  key={item.title}
                  {...item}
                  number={String(index + 1).padStart(2, "0")}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {data.technologies && data.technologies.length > 0 && (
        <section className="section-padding bg-slate-950 text-white">
          <div className="container-page">
            <SectionHeading
              eyebrow="TECHNOLOGY"
              title="Modern Technologies. Reliable Architecture."
              description="We select technologies based on the requirements of the product, business and users."
            />

            <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-3">
              {data.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/90"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {data.faqs && data.faqs.length > 0 && (
        <FAQSection faqs={data.faqs} />
      )}

      <CTASection
        title={
          data.cta?.title ??
          "Let's Build Something Great Together"
        }
        description={
          data.cta?.description ??
          "Tell us about your project and we'll help you find the right solution."
        }
      />
    </main>
  );
}