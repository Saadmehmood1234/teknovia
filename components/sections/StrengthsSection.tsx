import type { LucideIcon } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animations/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export interface StrengthItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface StrengthsSectionProps {
  badge: string;
  title: string;
  items: StrengthItem[];
}

export function StrengthsSection({
  badge,
  title,
  items,
}: StrengthsSectionProps) {
  return (
    <section className="bg-[#FAFAFA] py-8 sm:py-16">
      <Container>
        <SectionHeading
          className="max-w-xl"
          variant="centered"
          badge={badge}
          title={title}
        />
        <div className="mt-4 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.title} delay={index * 0.08} className="h-full">
                <article
                  key={item.title}
                  className="flex flex-col items-center justify-center gap-4 rounded-2xl p-3 sm:p-6"
                >
                  <div className="flex items-center justify-center rounded-xl border border-primary-100 bg-primary/10 p-3 text-primary">
                    <Icon className="size-5" />
                  </div>

                  <div className="flex flex-col items-center justify-center text-center">
                    <h3 className="text-md font-extrabold text-slate-950">
                      {item.title}
                    </h3>

                    <p className="text-sm leading-6 text-slate-500">
                      {item.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
