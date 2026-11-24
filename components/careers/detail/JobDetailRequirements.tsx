import { SectionHeading } from "@/components/ui/SectionHeading";

interface JobDetailRequirementsProps {
  requirements: string[];
}

export function JobDetailRequirements({
  requirements,
}: JobDetailRequirementsProps) {
  return (
    <div className="rounded-3xl border border-slate-200/80 bg-white p-8 sm:p-10 shadow-sm">
      <SectionHeading
        badge="Qualifications"
        title="What We're Looking For"
        description="Essential technical skills, mindsets, and background required for this role."
      />
      <ul className="mt-6 space-y-3.5">
        {requirements.map((req, index) => (
          <li
            key={index}
            className="flex items-start gap-3 text-sm leading-6 text-slate-700"
          >
            <span className="size-2 rounded-full bg-primary shrink-0 mt-2" />
            <span>{req}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
