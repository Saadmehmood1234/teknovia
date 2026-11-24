import { CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface JobDetailResponsibilitiesProps {
  responsibilities: string[];
}

export function JobDetailResponsibilities({
  responsibilities,
}: JobDetailResponsibilitiesProps) {
  return (
    <div className="rounded-3xl border border-slate-200/80 bg-white p-8 sm:p-10 shadow-sm">
      <SectionHeading
        badge="Responsibilities"
        title="What You'll Do"
        description="Core execution areas where you will take complete ownership from day one."
      />
      <ul className="mt-6 space-y-3.5">
        {responsibilities.map((item, index) => (
          <li
            key={index}
            className="flex items-start gap-3 text-sm leading-6 text-slate-700"
          >
            <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary mt-0.5">
              <CheckCircle2 className="size-3.5" />
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
