import { CheckCircle2 } from "lucide-react";

import { Container } from "@/components/ui/Container";

type IntroProps = {
  label: string;
  description: string;
  message: React.ReactNode;
};

export function Intro({
  label,
  description,
  message,
}: IntroProps) {
  return (
    <section className="border-b border-gray-100 bg-white">
      <Container>
        <div className="grid gap-10 py-14 sm:py-16 lg:grid-cols-[280px_1fr] lg:gap-16 lg:py-20">
          <div>
            <div className="sticky top-28">
              <p className="eyebrow">{label}</p>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                {description}
              </p>
            </div>
          </div>

          <div className="max-w-3xl">
            <div className="flex items-start gap-3 rounded-xl border border-primary-100 bg-primary-50/60 p-5 sm:p-6">
              <CheckCircle2
                size={20}
                className="mt-0.5 shrink-0 text-primary"
              />

              <p className="text-sm leading-6 text-gray-700">{message}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}