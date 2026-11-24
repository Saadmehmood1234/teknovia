import { SectionHeading } from "@/components/ui/SectionHeading";

export function JobDetailHiringProcess() {
  const steps = [
    {
      number: "1",
      title: "Application",
      desc: "Submit form & resume. Fast 48-hr screening.",
    },
    {
      number: "2",
      title: "Initial Call",
      desc: "20-min chat on your goals and background.",
    },
    {
      number: "3",
      title: "Technical Chat",
      desc: "Real problem discussion with a team lead.",
    },
    {
      number: "4",
      title: "Offer",
      desc: "Clear offer letter and smooth onboarding.",
    },
  ];

  return (
    <div className="rounded-3xl border border-slate-200/80 bg-white p-8 sm:p-10 shadow-sm">
      <SectionHeading
        badge="Hiring Timeline"
        title="Our 4-Step Selection Process"
        description="Fast, transparent, and respectful of your schedule at every stage."
      />
      <div className="mt-8 grid gap-4 sm:grid-cols-4">
        {steps.map((s) => (
          <div
            key={s.number}
            className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4 text-center"
          >
            <span className="flex size-7 items-center justify-center rounded-lg bg-primary-100 text-xs font-bold text-primary mx-auto">
              {s.number}
            </span>
            <h3 className="mt-2 text-xs font-bold text-slate-950">{s.title}</h3>
            <p className="mt-1 text-[11px] text-slate-500 leading-4">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
