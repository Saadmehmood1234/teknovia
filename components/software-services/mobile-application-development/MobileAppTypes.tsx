import { Container } from "@/components/ui/Container";
import { TopBadge } from "@/components/ui/Top-Badge";
import { Card2 } from "@/components/ui/Card2";
import { applications } from "@/lib/data/software-services/mobile-application-development-data";

export function MobileAppTypes() {
  return (
    <section className="relative overflow-hidden border-b border-gray-100 bg-white py-8 sm:py-16">
      <Container className="relative">
        <div className="flex w-full flex-col items-center justify-between gap-6 text-center">
          <div className="max-w-2xl">
            <TopBadge
              data="APPLICATIONS&nbsp;WE&nbsp;BUILD"
              centerItem={true}
            />

            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Mobile Solutions for Different Business Models
            </h2>

            <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg">
              We build mobile applications across industries and business
              models, adapting the technology, workflows, and user experience to
              your specific requirements.
            </p>
          </div>
        </div>

        <ul className="mt-8 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {applications.map((item) => (
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
