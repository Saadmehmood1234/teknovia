import { Card2 } from "@/components/ui/Card2";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IotSolutions } from "@/lib/data/software-services/iot-development-data";

export function IoTSolutions() {
  return (
    <section
      id="iot-solutions"
      className="border-b border-gray-100 bg-white py-8 sm:py-16"
    >
      <Container>
        <SectionHeading
          variant="centered"
          badge="IOT&nbsp;&&nbsp;AUTOMATION&nbsp;SOLUTIONS"
          title="Solutions Designed Around Your Operations."
          description="Connect assets, understand operations, automate workflows, and create intelligent systems designed around your specific operational environment."
        />
        <ul className="mt-8 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {IotSolutions.map((item) => (
            <Card2
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
              circle={item.circle}
              bar={item.bar}
            />
          ))}
        </ul>
      </Container>
    </section>
  );
}
