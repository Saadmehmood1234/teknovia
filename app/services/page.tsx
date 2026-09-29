import { ProcessSection } from "@/components/pages/ProcessSection";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServiceTopics } from "@/components/services/ServiceTopics";
import { Container } from "@/components/ui/Container";
import { TopBadge } from "@/components/ui/Top-Badge";
export default function ServicesPage() {
  return (
    <main className="overflow-hidden bg-white">
      <ServicesHero />

      <section className="py-8 sm:py-16 border-b border-gray-100">
        <Container className="flex flex-col items-center justify-center">
          <div className="mx-auto max-w-3xl text-center">
            <TopBadge data="CORE SERVICES" centerItem />

            <h2 className="mt-4 font-heading text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">
              Digital Solutions Built
              <span className="text-primary pl-2">Around Your Business</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
              From software development to digital marketing and ecommerce, we
              help businesses build, launch and grow digital products that
              create measurable value.
            </p>
          </div>

          <ServicesGrid />
        </Container>
      </section>

      <ProcessSection />
      <ServiceTopics />
    </main>
  );
}
