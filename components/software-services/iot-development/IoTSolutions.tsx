import { Factory } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { TopBadge } from "@/components/ui/Top-Badge";
import { IotSolutions } from "@/lib/data/software-services";
import Image from "next/image";

function SolutionCard({
  title,
  description,
  icon: Icon,
  index,
  image,
}: {
  title: string;
  description: string;
  icon: typeof Factory;
  index: number;
  image: string;
}) {
  return (
    <article
      className="
        relative flex h-full flex-col overflow-hidden
        rounded-3xl border border-gray-200 bg-[#FAFAFA]
      "
    >
      <div className="flex flex-1 flex-col p-4 text-center items-center">
        <span
          className="
            absolute left-6 top-6
            font-mono text-xs font-bold tracking-wider
            text-gray-500
          "
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <div
          className="
            flex items-center justify-center text-[#005D66]
          "
        >
          <Icon className="size-10" />
        </div>
        <h3
          className="
            mt-2 max-w-[85%]
            font-heading text-lg font-bold leading-7
            text-[#005D66]
          "
        >
          {title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-gray-600">{description}</p>
      </div>
      <div className="relative mt-0 h-40 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
    </article>
  );
}

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
          <h2 className="mt-4 text-3xl font-black tracking-tight text-gray-950 sm:text-4xl lg:text-5xl">
            Solutions Designed Around{" "}
            <span className="text-primary">Your Operations</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
            Connect assets, understand operations, automate workflows, and
            create intelligent systems designed around your specific operational
            environment.
          </p>
        </div>

        <div className="mt-12 grid items-stretch gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {IotSolutions.map((solution, index) => (
            <SolutionCard
              key={solution.title}
              title={solution.title}
              description={solution.description}
              icon={solution.icon}
              index={index}
              image={solution.image}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
