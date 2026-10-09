import { Container } from "../ui/Container";
import { principles } from "@/lib/data/industries";
import { TopBadge } from "../ui/Top-Badge";
import { Card2 } from "../ui/Card2";

export const industries = [
  "Educational Institutions",
  "SMEs",
  "Manufacturers",
  "Retail Businesses",
  "Healthcare Organizations",
  "Logistics Companies",
  "Enterprises",
];

export function IndustriesOverview() {
  return (
    <section className="pt-8 sm:pt-16">
      <Container>
        <div className="flex justify-center items-center">
          <div className="max-w-3xl flex items-center justify-center text-center flex-col">
            <TopBadge data="How&nbsp;We&nbsp;Build" centerItem={true} />

            <h2 className="mt-3 text-2xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl">
              Designed for real-world
              <span className="text-primary">business needs.</span>
            </h2>

            <p className="mt-5 max-w-2xl text-center text-sm leading-7 text-slate-600 sm:text-base">
              Every solution is developed with a focus on usability,
              scalability, reliability, and long-term business value.
            </p>
          </div>
        </div>

        <ul className="my-8 grid gap-4 sm:my-16 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((item) => (
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
      {/* <div className="relative overflow-hidden border">
        <Image
          src="/images/industries-bg.png"
          alt=""
          fill
          preload
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0B7B74]/70" />
        <div className="relative z-10 py-8">
          <Container>
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <p className="font-mono text-lg font-extrabold uppercase tracking-widest text-primary">
                  Built For Diverse Industries
                </p>

                <h3 className="mt-3 text-2xl font-black tracking-tight text-white sm:text-3xl">
                  Technology that solves real business challenges.
                </h3>

                <p className="mt-4 max-w-xl text-sm leading-6 text-white/80">
                  We work with organizations across different sectors to deliver
                  technology solutions that improve operations, efficiency, and
                  sustainable business growth.
                </p>
              </div>

              <div className="flex flex-wrap gap-2.5 lg:justify-end">
                {industries.map((industry) => (
                  <div
                    key={industry}
                    className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-2 text-xs font-semibold text-white shadow-sm backdrop-blur-sm"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />
                    {industry}
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </div>
      </div> */}
    </section>
  );
}
