import { Container } from "@/components/ui/Container";
import {
  principles,
  process,
} from "@/lib/data/digital-edge/social-media-optimization-data";
import { BackgroundEffect } from "@/components/Background";
import { ProcessSteps } from "@/components/ui/ProcessSteps";

export function SMOProcess() {
  return (
    <section
      aria-labelledby="process-heading"
      className="relative overflow-hidden border-b border-gray-100 bg-[#FAFAFA] py-8 sm:py-16"
    >
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="process-heading"
            className="font-heading text-4xl font-black uppercase tracking-tight text-gray-950 "
          >
            How we <span className="text-primary">work</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-800">
            A simple, transparent and result-driven process to{" "}
            <span className="font-semibold text-primary">grow your brand</span>{" "}
            on social media.
          </p>
        </div>
        <ProcessSteps
          steps={process}
          lineColor="border-primary/40"
          arrowColor="border-l-primary"
          circleBorderColor="border-primary/40"
          circleBgColor="bg-white"
          circleShadowColor="shadow-[0_0_25px_rgba(0,150,137,0.12)]"
          iconColor="text-primary"
          numberBorderColor="border-primary"
          numberBgColor="bg-primary"
          numberTextColor="text-white"
          titleColor="text-gray-950"
          descriptionColor="text-gray-600"
        />

        <div className="mx-auto mt-14 max-w-6xl overflow-hidden rounded-3xl bg-[#0D5C56] text-white shadow-xl shadow-primary/20">
          <BackgroundEffect />
          <ul className="grid divide-y divide-white/15 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
            {principles.map((item) => {
              const Icon = item.icon;

              return (
                <li
                  key={item.title}
                  className="flex items-start gap-4 p-6 sm:p-7"
                >
                  <Icon className="size-10 shrink-0 text-white" aria-hidden />

                  <div>
                    <h3 className="font-heading text-base font-bold">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-white/80">
                      {item.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}
