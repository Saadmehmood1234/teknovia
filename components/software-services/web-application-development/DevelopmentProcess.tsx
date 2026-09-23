import { Container } from "@/components/ui/Container";
import { developmentProcess } from "@/lib/data/software-services";
import Image from "next/image";

export default function DevelopmentProcess() {
  return (
    <section className="relative overflow-hidden bg-[#003F48] text-white sm:py-16 py-8">
      <Container>
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/images/web-dev-bg.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="pointer-events-none absolute inset-0 lg:bg-[#040506]/80 bg-[#040506]/90" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.10),transparent_60%)]" />

        <div className="relative px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col w-full justify-between items-center text-center gap-6">
            <div className="max-w-2xl">
              <p className="font-mono text-lg font-extrabold uppercase tracking-[0.2em] text-primary">
                OUR DEVELOPMENT PROCESS
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
                A Clear Process. Proven Results.
              </h2>
              <p className="mt-5 text-base leading-7 text-gray-200 sm:text-lg">
                We follow a structured and transparent development process to
                transform your requirements into a reliable web application.
              </p>
            </div>
          </div>
          <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6 2xl:gap-0">
            {developmentProcess.map((step, index) => {
              const Icon = step.icon;
              const isLast = index === developmentProcess.length - 1;

              return (
                <div
                  key={step.number}
                  className="relative flex flex-col items-center text-center"
                >
                  {!isLast && (
                    <div className="absolute left-[calc(50%+60px)] top-15 hidden w-[calc(100%-20px)] 2xl:block">
                      <div className="relative flex items-center">
                        <div className="h-px w-full border-t border-dashed border-[#009689]/70" />

                        <span className="absolute right-0 flex h-3 w-3 items-center justify-center">
                          <span className="h-0 w-0 border-y-[6px] border-l-[9px] border-y-transparent border-l-[#009689]" />
                        </span>
                      </div>
                    </div>
                  )}
                  <div className="relative z-10 flex h-30 w-30 items-center justify-center rounded-full border border-[#009689] bg-[#003F48] shadow-[0_0_25px_rgba(0,150,137,0.12)]">
                    <Icon strokeWidth={1.7} className="h-12 w-12 text-white" />
                    <div className="absolute -bottom-5 flex h-10 w-10 items-center justify-center rounded-full border border-[#009689] bg-[#00786f] text-sm font-bold text-white shadow-lg">
                      {step.number}
                    </div>
                  </div>
                  <div className="mt-10 max-w-52.5">
                    <h3 className="text-base font-bold leading-6 text-white">
                      {step.title}
                    </h3>

                    <p className="mt-4 text-sm leading-6 text-white/75">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
