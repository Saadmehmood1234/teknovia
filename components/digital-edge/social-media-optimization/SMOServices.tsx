import { BackgroundEffect } from "@/components/Background";
import { Card2 } from "@/components/ui/Card2";
import { Container } from "@/components/ui/Container";
import { TopBadge } from "@/components/ui/Top-Badge";
import {
  smoServiceFeatures,
  smoServices,
} from "@/lib/data/digital-edge/social-media-optimization-data";

export function SMOServices() {
  return (
    <section
      id="optimisation"
      className="relative overflow-hidden border-b border-gray-100 bg-white py-8 sm:py-16"
    >
      <div className="pointer-events-none absolute inset-0 hero-grid opacity-20" />

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <TopBadge data="OUR SMO Services" centerItem />

          <h2 className="mt-4 font-heading text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">
            Complete Social Media Solutions
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
            We help businesses build their brand, engage their audiences, and
            achieve remarkable growth on social media platforms.
          </p>
        </div>
        <ul className="mt-8 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {smoServices.map((item) => (
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

        <div className="relative mt-8 flex flex-col rounded-2xl border border-primary/15 bg-[#0D5C56] p-5 sm:p-6 lg:flex-row lg:items-center lg:justify-between">
          <BackgroundEffect />
          {smoServiceFeatures?.map((item, index) => (
            <div
              key={item.text}
              className={`flex min-w-0 flex-1 items-center gap-4 py-3 lg:justify-center lg:py-0 ${
                index < smoServiceFeatures.length - 1 &&
                "border-b border-primary-100/20 lg:border-b-0"
              }`}
            >
              <item.icon className="size-7 shrink-0 text-white sm:size-8 ml-2" />

              <p className="text-sm leading-5 text-white/70 sm:text-base sm:leading-6">
                {item.text}
              </p>
              {index < smoServiceFeatures.length - 1 && (
                <div className="w-px bg-primary-100/50 h-10 lg:block hidden" />
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
