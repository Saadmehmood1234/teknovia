import { EdTechHero } from "@/components/edtech-solution/EdTechHero";
import { EdTechIndustries } from "@/components/edtech-solution/EdTechIndustries";
import { EdTechIntroduction } from "@/components/edtech-solution/EdTechIntroduction";
import { OurPhilosophy } from "@/components/edtech-solution/OurPhilosophy";

export default function EdTechPage() {
  return (
    <main>
      <EdTechHero />
      <EdTechIntroduction />
      <OurPhilosophy/>
      <EdTechIndustries />
    </main>
  );
}