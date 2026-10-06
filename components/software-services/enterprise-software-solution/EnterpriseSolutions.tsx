import { Card2 } from "@/components/ui/Card2";
import { Container } from "@/components/ui/Container";
import { TopBadge } from "@/components/ui/Top-Badge";
import { enterpriseSolutions } from "@/lib/data/software-services/enterprise-data";

export function EnterpriseSolutions() {
  return (
    <section className="py-8 sm:py-16 border-b border-gray-100">
      <Container>
        <div className="flex justify-center items-center">
          <div className="max-w-3xl flex items-center justify-center text-center flex-col">
            <TopBadge data="ENTERPRISE&nbsp;SOLUTIONS" centerItem />

            <h2 className="text-2xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl">
              Enterprise Software Solutions We Build
            </h2>

            <p className="mt-5 max-w-2xl text-center text-sm leading-7 text-slate-600 sm:text-base">
              Comprehensive enterprise platforms tailored to streamline
              operations, improve visibility, and accelerate digital
              transformation.
            </p>
          </div>
        </div>

          <ul className="mt-8 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {enterpriseSolutions.map((item) => (
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
