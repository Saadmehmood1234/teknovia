import { Container } from "@/components/ui/Container";
import { TopBadge } from "@/components/ui/Top-Badge";
import { expertise } from "@/lib/data/software-services";
import { Card4 } from "../ui/Card4";

export default function Expertise() {
  return (
    <section className="border-b border-gray-100 py-10 sm:py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <TopBadge data="Our Expertise" centerItem />

          <h2 className="mt-5 font-heading text-3xl font-black tracking-tight text-gray-950 sm:text-4xl lg:text-[2.7rem]">
            Smart Solutions.
            <span className="pl-2 text-primary">Stronger Businesses.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
            From enterprise-grade systems to emerging technologies, we help
            organizations improve efficiency, automate processes, and accelerate
            growth.
          </p>
        </div>

        <div className="grid gap-5 lg:col-span-8">
         <Card4 items={expertise} />
        </div>
      </Container>
    </section>
  );
}
