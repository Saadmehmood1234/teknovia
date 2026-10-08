import { Card2 } from "@/components/ui/Card2";
import { Container } from "@/components/ui/Container";
import { TopBadge } from "@/components/ui/Top-Badge";
import { IotSolutions } from "@/lib/data/software-services/iot-development-data";

export function IoTSolutions() {
  return (
    <section
      id="iot-solutions"
      className="border-b border-gray-100 bg-white py-8 sm:py-16"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <TopBadge
            data="IOT&nbsp;&&nbsp;AUTOMATION&nbsp;SOLUTIONS"
            centerItem={true}
          />
          <h2 className="mt-4 text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">
            Solutions Designed Around{" "}
            <span className="text-primary">Your Operations</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
            Connect assets, understand operations, automate workflows, and
            create intelligent systems designed around your specific operational
            environment.
          </p>
        </div>
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
