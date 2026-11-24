import { Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface JobDetailWhoYouAreProps {
  whoYouAre: string[];
}

export function JobDetailWhoYouAre({ whoYouAre }: JobDetailWhoYouAreProps) {
  return (
    <div className="rounded-3xl border border-slate-200/80 bg-white p-8 sm:p-10 shadow-sm">
      <SectionHeading
        badge="Culture & Mindset"
        title="Who You Are"
        description="The qualities and working styles that flourish in our engineering culture."
      />
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {whoYouAre.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4 text-xs leading-5 text-slate-600"
          >
            <Sparkles className="size-4 text-primary mb-2" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
