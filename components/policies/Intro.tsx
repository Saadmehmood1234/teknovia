import { ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";

type IntroProps = {
  label: string;
  description: string;
  message: React.ReactNode;
};

export function Intro({ label, description, message }: IntroProps) {
  return (
    <section className="border-b border-slate-100 bg-white">
      <Container>
        <div className="grid gap-8 py-12 sm:py-16 lg:grid-cols-[280px_1fr] lg:gap-14 lg:py-16">
          <div>
            <div className="sticky top-28">
              <span className="inline-flex items-center rounded-md bg-slate-100 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-slate-700">
                {label}
              </span>

              <p className="mt-3 text-sm leading-relaxed text-slate-500">
                {description}
              </p>
            </div>
          </div>

          <div className="max-w-3xl">
            <div className="flex items-start gap-4 rounded-2xl border border-primary-100/80 bg-gradient-to-br from-primary-50/50 to-white p-6 shadow-xs ring-1 ring-primary/10">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-100 text-primary">
                <ShieldCheck className="h-5 w-5" />
              </div>

              <div className="text-sm leading-relaxed text-slate-700">
                {message}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
