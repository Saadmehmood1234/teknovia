import { SoftwareServiceHero } from "@/components/software-services/SoftwareServiceHero";
import Expertise from "@/components/software-services/Expertise";
import SoftwareOffering from "@/components/software-services/SoftwareOfferings";
import SoftwareIndusties from "@/components/software-services/SoftwareIndustries";
import { CTA } from "@/components/CTA";

export const metadata = {
  title: "Software Services",
  description:
    "Custom software solutions, enterprise applications, web applications, mobile apps, SaaS products, and digital systems built for modern businesses.",
};

export default function SoftwareServicesPage() {
  return (
    <main>
      <SoftwareServiceHero />
      <Expertise />
      <SoftwareOffering />
      <SoftwareIndusties />
      <CTA
        title="Let's Build Smart Solutions Together"
        description="Partner with Teknovia to innovate, grow and lead in your industry."
        button={{
          label: "Get Free Consultation",
          href: "mailto:info@teknovia.in",
        }}
      />
    </main>
  );
}
