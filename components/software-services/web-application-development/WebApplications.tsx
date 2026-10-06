import { Container } from "@/components/ui/Container";
import { TopBadge } from "@/components/ui/Top-Badge";
import { FeatureListItem } from "@/components/ui/ListItem";
import { webApplications } from "@/lib/data/software-services/web-application-development-data";

export default function WebApplications() {
  return (
    <section
      id="platform-capabilities"
      className="relative border-b border-gray-100 bg-white py-8 sm:py-16"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <TopBadge data="What We Build" />

              <h2 className="mt-4 font-heading text-3xl font-black tracking-tight text-gray-950 sm:text-4xl lg:leading-[1.1]">
                Web Applications{" "}
                <span className="text-primary">We Develop</span>
              </h2>

              <p className="text-lg font-semibold leading-8 text-white/85">
                Powerful Applications. Built for Real Business Impact.
              </p>
              <p className="mt-3 text-base leading-7 text-gray-400">
                From customer-facing platforms to complex enterprise systems, we
                develop web applications designed to solve real business
                challenges and create measurable value.
              </p>

              <div className="mt-8 h-px w-16 bg-primary" />
            </div>
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
