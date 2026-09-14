import { Container } from "@/components/ui/Container";
import { industries } from "@/lib/data/site";
import { BottomImageCard } from "../ui/BottomImageCard";

export function Industries() {
  return (
    <section id="industries" className="sm:py-16 py-8 bg-surface bg-[#FAFAFA]">
      <Container>
        <div className="text-center">
          <p className="font-mono text-lg font-extrabold uppercase tracking-widest text-primary">
            Industries We Serve
          </p>

          <h2 className="mt-4 sm:text-4xl text-3xl font-extrabold tracking-tight text-[#040506]">
            Multi-Industry Expertise
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-md leading-8 text-slate-600">
            Technology solutions tailored to the unique needs of every sector we
            serve.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <BottomImageCard
              key={industry.title}
              image={industry.image}
              title={industry.title}
              description={industry.description}
              href="#contact"
            />
          ))}
        </div>

        <div className="w-full flex justify-center mt-8 items-center">
          <a
            className="text-slate-600 border border-slate-300 px-6 py-3 hover:border-primary hover:text-primary hover:bg-primary-300/20 cursor-pointer transition-all duration-200 rounded-xl"
          >
            View all industries
          </a>
        </div>
      </Container>
    </section>
  );
}
