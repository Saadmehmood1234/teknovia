import type { LucideIcon } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { TopBadge } from "@/components/ui/Top-Badge";

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
        <div className="flex w-full flex-col items-center justify-between gap-6 text-center">
          <div className="max-w-2xl">
            <TopBadge data={badge} centerItem />

            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              {title}
            </h2>
          </div>
        </div>

        <div className="mt-4 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6">
          {items.map((item) => {
            const Icon = item.icon;

            return (
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
            );
          })}
        </div>
      </Container>
    </section>
  );
}