import { Container } from "@/components/ui/Container";
import { principles } from "@/lib/data/industries";
import { enterpriseSolutions } from "@/lib/data/software-solutions";

export function EnterpriseSolutions() {
  return (
    <section className="py-8 sm:py-16 border-b border-gray-100">
      <Container>
        <div className="flex justify-center items-center">
          <div className="max-w-3xl flex items-center justify-center text-center flex-col">
            <p className="font-mono text-md sm:text-lg font-bold uppercase tracking-[0.18em] text-primary">
              ENTERPRISE SOLUTIONS
            </p>

            <h2 className="mt-3 text-2xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl">
              Enterprise Software Solutions We Build
            </h2>

            <p className="mt-5 max-w-2xl text-center text-sm leading-7 text-slate-600 sm:text-base">
              Comprehensive enterprise platforms tailored to streamline
              operations, improve visibility, and accelerate digital
              transformation.
            </p>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 border-t border-slate-200 sm:grid-cols-2 lg:grid-cols-3">
          {enterpriseSolutions.map((solution, index) => {
            const Icon = solution.icon;

            return (
              <a
                key={solution.id}
                href={solution.link}
                className="
                  group relative flex min-h-70 flex-col
                  border-b border-slate-200 p-6
                  transition-colors duration-300
                  hover:bg-primary-50/40
                  sm:min-h-75 sm:p-7
                  lg:border-r
                  lg:nth-[4n]:border-r-0
                  "
                  >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold tracking-[0.2em] text-slate-300 transition-colors duration-300 group-hover:text-primary/50">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <Icon className="size-6 text-primary transition-transform duration-300 group-hover:scale-110" />
                </div>

                <div className="mt-auto">
                  <h3 className="max-w-65 font-heading text-xl font-semibold leading-tight text-gray-950">
                    {solution.title}
                  </h3>

                  <p className="mt-3 max-w-75 text-sm leading-6 text-gray-600">
                    {solution.description}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-primary">
                    <span>Explore solution</span>

                    <svg
                      viewBox="0 0 20 20"
                      fill="none"
                      className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path
                        d="M4 10h11M10 5l5 5-5 5"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="absolute bottom-0 left-6 right-6 h-px origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100 sm:left-7 sm:right-7" />
                </div>
              </a>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
