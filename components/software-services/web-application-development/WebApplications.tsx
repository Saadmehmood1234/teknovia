import { Container } from "@/components/ui/Container";
import { FeatureListItem } from "@/components/ui/ListItem";
import { webApplications } from "@/lib/data/software-services/web-application-development-data";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function WebApplications() {
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
              badge="What We Build"
              title="Web Applications We Develop."
              description="Powerful Applications. Built for Real Business Impact. From customer-facing platforms to complex enterprise systems, we develop web applications designed to solve real business challenges and create measurable value."
            />
          </div>

          <ul className="border-t border-gray-200 lg:col-span-7">
            {webApplications.map((item, index) => (
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
