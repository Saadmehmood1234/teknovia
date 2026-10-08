import { ContentOverview } from "@/components/ui/ContentOverview";
import { IotBenefits } from "@/lib/data/software-services/iot-development-data";

export function IoTIntroduction() {
  return (
    <ContentOverview
      badge="Introduction"
      title="Teknovia's IoT & Automation Solutions Help Organizations"
      image={{
        src: "/images/iot-about.png",
        alt: "IoT and automation solutions",
      }}
      paragraphs={[]}
      gridClassName="lg:grid-cols-[1fr_1.05fr] lg:gap-12"
    >
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:gap-2 xl:gap-4">
        {IotBenefits.map((benefit) => {
          const Icon = benefit.icon;

          return (
            <article key={benefit.text}>
              <div className="flex items-center gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary">
                  <Icon className="size-6" />
                </div>

                <p className="text-sm font-semibold leading-6 text-gray-600">
                  {benefit.text}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </ContentOverview>
  );
}