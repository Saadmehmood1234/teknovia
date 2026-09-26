import FAQ from "@/components/FAQ";
import { IoTEcosystem } from "@/components/software-services/iot-development/IoTEcosystem";
import { IoTHero } from "@/components/software-services/iot-development/IoTHero";
import { IoTIntroduction } from "@/components/software-services/iot-development/IoTIntroduction";
import { IoTSolutions } from "@/components/software-services/iot-development/IoTSolutions";
import { iotFaqs } from "@/lib/data/software-services";


export default function IoTDevelopmentPage() {
  return (
    <main>
      <IoTHero />
      <IoTIntroduction />
      <IoTEcosystem />
      <IoTSolutions />

      <FAQ
        title="Frequently Asked Questions"
        description="Common questions about IoT and automation solutions"
        faqs={iotFaqs}
      />
    </main>
  );
}