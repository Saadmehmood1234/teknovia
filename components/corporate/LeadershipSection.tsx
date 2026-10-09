import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animations/Reveal";
import { leaders } from "@/lib/data/corporate-data";
import { SectionHeading } from "../ui/SectionHeading";

export function LeadershipSection() {
  return (
    <section className="py-16">
      <Container>
        <SectionHeading
          className="max-w-xl"
          variant="centered"
          badge="Our Leadership"
          title="Meet the leaders driving Teknovia forward."
        />

        <div className="mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-2">
          {leaders.map((leader, index) => (
            <Reveal key={leader.name} delay={index * 0.12} className="h-full">
              <article className="group relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl hover:shadow-slate-900/5">
                <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 rounded-full bg-primary/5 blur-2xl transition-colors duration-300 group-hover:bg-primary/10" />

                <div className="relative flex items-start gap-5">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-black text-white transition-transform duration-300 group-hover:scale-105">
                    {leader.initials}
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-md font-extrabold text-slate-950">
                      {leader.name}
                    </h3>

                    <p className="mt-1 text-sm font-bold uppercase tracking-wider text-primary">
                      {leader.role}
                    </p>

                    <p className="mt-4 text-sm leading-6 text-slate-500">
                      {leader.description}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
