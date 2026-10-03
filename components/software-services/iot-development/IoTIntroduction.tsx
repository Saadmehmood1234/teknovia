import { Container } from "@/components/ui/Container";
import Image from "next/image";
import { TopBadge } from "@/components/ui/Top-Badge";
import { IotBenefits } from "@/lib/data/software-services/iot-development-data";
export function IoTIntroduction() {
  return (
    <section className="border-b border-gray-100 bg-[#FAFAFA] py-8 sm:py-16">
      <Container>
        <div className="grid items-start gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-12">
          <div className="relative flex flex-col gap-4">
            <div className="relative w-full overflow-hidden rounded-3xl border border-gray-200 bg-white">
              <Image
                src="/images/iot-about.png"
                alt="Mobile application development"
                width={1000}
                height={750}
                className="h-auto w-full rounded-2xl object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
          <div>
            <TopBadge data="Introduction" />

            <h2 className="mt-3 text-3xl sm:text-4xl font-black leading-tight tracking-tight text-slate-950 ">
              Teknovia&apos;s IoT & Automation Solutions Help Organizatioms
            </h2>

            <div className="grid mt-8 xl:gap-4 gap-4 lg:gap-2 sm:grid-cols-2 relative">
              {IotBenefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <article key={benefit.text}>
                    <div className="flex items-center gap-4">
                      <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary">
                        <Icon className="size-6" />
                      </div>
                      <p className="xl:text-md text-md lg:text-sm font-semibold leading-6 text-gray-800">
                        {benefit.text}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
