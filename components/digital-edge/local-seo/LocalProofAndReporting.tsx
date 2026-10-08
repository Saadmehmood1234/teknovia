import { Container } from "@/components/ui/Container";
import { FeatureListItem } from "@/components/ui/ListItem";
import { TopBadge } from "@/components/ui/Top-Badge";
import { localSeoEvidence } from "@/lib/data/digital-edge/local-seo-data";

export function LocalProofAndReporting() {
  return (
    <section
      id="platform-capabilities"
      className="relative border-b border-gray-100 bg-white py-8 sm:py-16"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <TopBadge data="PROOF & REPORTING" />

              <h2 className="mt-4 font-heading text-3xl font-black tracking-tight text-gray-950 sm:text-4xl lg:leading-[1.1]">
                We measure what
                <span className="text-primary">actually matters.</span>
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-gray-600 sm:text-base">
                Our reporting connects local SEO activity with measurable
                changes in visibility, rankings, reputation, and customer
                discovery.
              </p>

              <div className="mt-8 h-px w-16 bg-primary" />
            </div>
          </div>

          <ul className="border-t border-gray-200 lg:col-span-7">
            {localSeoEvidence.map((item, index) => (
              <FeatureListItem
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
                index={index}
              />
            ))}
          </ul>
        </div>
        
      </Container>
    </section>
  );
}
