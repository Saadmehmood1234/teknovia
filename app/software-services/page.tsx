import { Container } from "@/components/ui/Container";
import { industries } from "@/lib/data/software-services";
import { SoftwareServiceHero } from "@/components/software-services/SoftwareServiceHero";
import Expertise from "@/components/software-services/Expertise";
import SoftwareOffering from "@/components/software-services/SoftwareOfferings";
import SoftwareIndusties from "@/components/software-services/SoftwareIndustries";

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
      <SoftwareIndusties/>
    </main>
  );
}
