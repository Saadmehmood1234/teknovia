import {
  ClipboardCheck,
  Code2,
  Lightbulb,
  PenTool,
  Rocket,
  Search,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import { Container } from "@/components/ui/Container";

const steps = [
  {
    number: "01",
    title: "DISCOVER",
    icon: Search,
    description:
      "Understand your business goals, users, market, technical requirements, and product vision.",
  },
  {
    number: "02",
    title: "DEFINE",
    icon: ClipboardCheck,
    description:
      "Define features, user journeys, project scope, priorities, architecture, and success criteria.",
  },
  {
    number: "03",
    title: "DESIGN",
    icon: PenTool,
    description:
      "Create intuitive interfaces, prototypes, design systems, and mobile-first user experiences.",
  },
  {
    number: "04",
    title: "DEVELOP",
    icon: Code2,
    description:
      "Build secure, scalable mobile applications and integrate APIs, databases, payments, and services.",
  },
  {
    number: "05",
    title: "TEST",
    icon: ShieldCheck,
    description:
      "Validate functionality, performance, security, responsiveness, and compatibility across devices.",
  },
  {
    number: "06",
    title: "LAUNCH & GROW",
    icon: Rocket,
    description:
      "Deploy to production, monitor performance, release improvements, and scale the product over time.",
  },
];

export function MobileAppProcess() {
  return (
    <section className="relative overflow-hidden border-b border-gray-100 bg-white py-8 sm:py-16">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-sm font-bold uppercase tracking-[0.18em] text-primary sm:text-base">
            OUR DEVELOPMENT APPROACH
          </p>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">
            From Idea to App Store
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
            A structured development process designed to reduce risk, maintain
            quality, and turn your product idea into a reliable mobile
            application.
          </p>
        </div>

        <div className="relative mx-auto mt-12 max-w-6xl">
          <div className="absolute left-[8.33%] right-[8.33%] top-12 hidden h-px bg-primary/20 lg:block" />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="group relative bg-white text-center lg:px-2"
                >
                  <div className="relative z-10 mx-auto flex size-24 items-center justify-center rounded-full border border-primary/25 bg-white shadow-[0_10px_35px_rgba(0,150,137,0.08)] transition-all duration-300 group-hover:border-primary group-hover:shadow-[0_15px_40px_rgba(0,150,137,0.15)]">
                    <Icon className="size-7 text-primary" />
                  </div>

                  <span className="mt-5 block font-mono text-xs font-bold tracking-widest text-primary">
                    {step.number}
                  </span>

                  <h3 className="mt-2 font-heading text-sm font-bold tracking-wide text-gray-950">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-xs leading-5 text-gray-500">
                    {step.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-12 grid gap-4 rounded-3xl border border-primary/20 bg-primary-50/40 p-5 sm:grid-cols-3 sm:p-7">
          <div className="flex items-center gap-4">
            <Lightbulb className="size-8 shrink-0 text-primary" />
            <div>
              <p className="text-sm font-bold text-gray-950">
                Product Thinking
              </p>
              <p className="mt-1 text-xs text-gray-600">
                Technology aligned with business goals.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 border-primary/20 sm:border-l sm:pl-5">
            <Smartphone className="size-8 shrink-0 text-primary" />
            <div>
              <p className="text-sm font-bold text-gray-950">
                Mobile-First UX
              </p>
              <p className="mt-1 text-xs text-gray-600">
                Interfaces designed for real-world usage.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 border-primary/20 sm:border-l sm:pl-5">
            <ShieldCheck className="size-8 shrink-0 text-primary" />
            <div>
              <p className="text-sm font-bold text-gray-950">
                Quality & Security
              </p>
              <p className="mt-1 text-xs text-gray-600">
                Tested before every production release.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}