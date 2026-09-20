import { CTASection } from "@/components/pages/CTASection";
import { SectionHeading } from "@/components/pages/SectionHeading";
import { IndustriesHero } from "@/components/industries/IndustriesHero";
import { IndustriesGrid } from "@/components/industries/IndustriesGrid";

export default function IndustriesPage() {
  return (
    <main className="overflow-hidden bg-white">
      <IndustriesHero />

      <section className="section-padding">
        <div className="container-page">
          <SectionHeading
            eyebrow="INDUSTRIES WE SERVE"
            title="Digital Solutions Across Industries"
            description="We understand that every industry has different users, workflows and challenges. Our solutions are adapted to the specific needs of each business."
          />

          <IndustriesGrid />
        </div>
      </section>

      <section className="section-padding bg-slate-50/70">
        <div className="container-page">
          <SectionHeading
            eyebrow="OUR APPROACH"
            title="Industry Knowledge Meets Technology"
            description="We combine business understanding with modern technology to create solutions that fit the way your organization works."
          />

          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Understand",
                description:
                  "We learn about your industry, customers, processes and business challenges.",
              },
              {
                title: "Customize",
                description:
                  "We design technology around your workflows rather than forcing your business into a fixed solution.",
              },
              {
                title: "Scale",
                description:
                  "We build flexible solutions that can evolve as your organization and market change.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-8"
              >
                <h3 className="font-heading text-2xl font-semibold text-slate-900">
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
        title="Have a Challenge in Your Industry?"
        description="Let's discuss your business requirements and build a digital solution around them."
      />
    </main>
  );
}