import { Container } from "@/components/ui/Container";
import { TopBadge } from "@/components/ui/Top-Badge";
import { WebDevCapabilities } from "@/lib/data/software-services/web-application-development-data";
import { Card2 } from "@/components/ui/Card2";

export default function CoreCapabilities() {
  return (
    <section className="relative overflow-hidden bg-[#EFF3F6] py-8 sm:py-16">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 top-0 h-100 w-100 rounded-full bg-primary/5 blur-3xl" />

        <div className="absolute -left-40 bottom-0 h-100 w-100 rounded-full bg-white/70 blur-3xl" />
      </div>

      <Container>
        <div className="relative">
          <div className="flex w-full flex-col items-center justify-between gap-6 text-center">
            <div className="max-w-2xl">
              <TopBadge data="Core&nbsp;Capabilities" centerItem={true} />

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Built to Perform. Designed to Scale.
              </h2>

              <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg">
                Our applications are built with the capabilities businesses need
                to operate, scale, and adapt.
              </p>
            </div>
          </div>

          <ul className="mt-8 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
            {WebDevCapabilities.map((item) => (
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
        </div>
      </Container>
    </section>
  );
}
