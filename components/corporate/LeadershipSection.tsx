import { Container } from "@/components/ui/Container";
import { TopBadge } from "@/components/ui/Top-Badge";
import { leaders } from "@/lib/data/corporate-data";

export function LeadershipSection() {
  return (
    <section className="py-16">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <TopBadge data="Our Leadership" centerItem />

          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            Meet the leaders driving Teknovia forward.
          </h2>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-2">
          {leaders.map((leader) => (
            <article
              key={leader.name}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5"
            >
              <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-primary/5 blur-2xl" />

              <div className="relative flex items-start gap-5">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-black text-white">
                  {leader.initials}
                </div>

                <div>
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
          ))}
        </div>
      </Container>
    </section>
  );
}