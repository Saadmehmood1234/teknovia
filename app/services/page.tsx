import { CTASection } from "@/components/pages/CTASection";
import { ProcessSection } from "@/components/pages/ProcessSection";
import { SectionHeading } from "@/components/pages/SectionHeading";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServiceTopics } from "@/components/services/ServiceTopics";
import { Container } from "@/components/ui/Container";
export default function ServicesPage() {
  return (
    <main className="overflow-hidden bg-white">
      <ServicesHero />

      <section className="py-8 border-b border-gray-100">
        <Container className="flex flex-col items-center justify-center">
          <SectionHeading
            eyebrow="OUR SERVICES"
            title="Digital Solutions Built Around Your Business"
            description="From software development to digital marketing and ecommerce, we help businesses build, launch and grow digital products that create measurable value."
          />

          <ServicesGrid />
        </Container>
      </section>

      <ProcessSection />
      <ServiceTopics />

      <section className="section-padding bg-slate-50/70">
        <div className="container-page">
          <SectionHeading
            eyebrow="WHY TEKNOVIA"
            title="Technology That Supports Real Business Growth"
            description="We combine strategy, design and engineering to create digital solutions that are practical, scalable and built for long-term growth."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Business Focused",
                description:
                  "Every solution starts with your business objectives and user requirements.",
              },
              {
                title: "Modern Technology",
                description:
                  "We use modern technologies and development practices to build reliable products.",
              },
              {
                title: "Scalable Solutions",
                description:
                  "Our architecture is designed to support changing business requirements and growth.",
              },
              {
                title: "Long-Term Partnership",
                description:
                  "We continue to support, optimize and evolve your digital products after launch.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-7"
              >
                <h3 className="font-heading text-xl font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Let's Build Your Next Digital Solution"
        description="Tell us about your business challenge and we'll help you identify the right technology and strategy."
      />
    </main>
  );
}
