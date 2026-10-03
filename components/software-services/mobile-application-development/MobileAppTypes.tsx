
import { Container } from "@/components/ui/Container";
import { TopBadge } from "@/components/ui/Top-Badge";
import { applications } from "@/lib/data/software-services/mobile-application-development-data";

export function MobileAppTypes() {
  return (
    <section className="border-b border-gray-100 bg-[#FAFAFA] py-8 sm:py-16">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <TopBadge
              data="APPLICATIONS&nbsp;WE&nbsp;BUILD"
            />
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-gray-950 sm:text-4xl">
              Mobile Solutions for Different Business Models
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-gray-600 sm:text-base">
              We build mobile applications across industries and business
              models, adapting the technology, workflows, and user experience to
              your specific requirements.
            </p>

            <div className="mt-8 h-px w-20 bg-primary" />
          </div>

          <div className="grid border-l border-t border-gray-200 sm:grid-cols-2">
            {applications.map((application, index) => {
              const Icon = application.icon;

              return (
                <article
                  key={application.title}
                  className="group cursor-pointer relative min-h-52 border-b border-r border-gray-200 bg-white p-6 transition-all duration-300 hover:bg-primary-50/40 sm:p-7"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex size-11 items-center justify-center rounded-xl border border-primary/15 bg-primary-50 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                      <Icon className="size-5" />
                    </div>

                    <span className="font-mono text-xs text-gray-300">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mt-8 font-heading text-xl font-semibold text-gray-950">
                    {application.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {application.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
