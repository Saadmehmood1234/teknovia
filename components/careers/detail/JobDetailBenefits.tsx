import { ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface JobDetailBenefitsProps {
  benefits: string[];
}

export function JobDetailBenefits({ benefits }: JobDetailBenefitsProps) {
  return (
    <div className="rounded-3xl border border-slate-200/80 bg-white p-8 sm:p-10 shadow-sm">
      <SectionHeading
        badge="Compensation & Perks"
        title="What We Offer"
        description="We invest in our teammates with mentorship, modern tooling, and strong compensation."
      />
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50/60 p-4 text-xs leading-5 text-slate-700"
          >
            <ShieldCheck className="size-4 text-primary shrink-0 mt-0.5" />
            <span>{benefit}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
