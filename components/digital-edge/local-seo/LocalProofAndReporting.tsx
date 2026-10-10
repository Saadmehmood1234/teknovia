import { Container } from "@/components/ui/Container";
import { FeatureListItem } from "@/components/ui/ListItem";
import { SectionHeading } from "@/components/ui/SectionHeading";
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
            <SectionHeading
              variant="sticky"
              badge="PROOF & REPORTING"
              title="We measure what actually matters."
              description="Our reporting connects local SEO activity with measurable changes in visibility, rankings, reputation, and customer discovery."
            />
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
