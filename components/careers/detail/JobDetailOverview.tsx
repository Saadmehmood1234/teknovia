import { SectionHeading } from "@/components/ui/SectionHeading";

interface JobDetailOverviewProps {
  aboutRole: string[];
}

export function JobDetailOverview({ aboutRole }: JobDetailOverviewProps) {
  return (
    <div className="rounded-3xl border border-slate-200/80 bg-white p-8 sm:p-10 shadow-sm">
      <SectionHeading
        badge="Role Overview"
        title="About the Opportunity"
      />
      <div className="mt-6 space-y-4 text-sm leading-7 text-slate-600">
        {aboutRole.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}
