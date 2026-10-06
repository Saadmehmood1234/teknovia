import { BackgroundEffect } from "@/components/Background";
import { Container } from "@/components/ui/Container";
import { ProcessSteps } from "@/components/ui/ProcessSteps";
import { TopBadge } from "@/components/ui/Top-Badge";
import { developmentProcess } from "@/lib/data/software-services/web-application-development-data";

export default function DevelopmentProcess() {
  return (
    <section className="relative overflow-hidden bg-[#284545] text-white sm:py-16 py-8">
      <BackgroundEffect/>
      <Container>
        <div className="relative px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col w-full justify-between items-center text-center gap-6">
            <div className="max-w-2xl">
              <TopBadge
                data="OUR&nbsp;DEVELOPMENT&nbsp;PROCESS"
                centerItem={true}
              />

              <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
                A Clear Process. Proven Results.
              </h2>
              <p className="mt-5 text-base leading-7 text-gray-200 sm:text-lg">
                We follow a structured and transparent development process to
                transform your requirements into a reliable web application.
              </p>
            </div>
          </div>
          <ProcessSteps steps={developmentProcess} />
        </div>
      </Container>
    </section>
  );
}
