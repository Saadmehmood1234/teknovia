import { ChevronDown } from "lucide-react";

import { SectionHeading } from "./SectionHeading";

type FAQ = {
  question: string;
  answer: string;
};

export function FAQSection({
  faqs,
}: {
  faqs: FAQ[];
}) {
  return (
    <section className="section-padding bg-slate-50/70">
      <div className="container-page">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          description="Answers to common questions about our services and solutions."
        />

        <div className="mx-auto max-w-4xl space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-slate-200 bg-white"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-5 font-heading text-base font-semibold text-slate-900 [&::-webkit-details-marker]:hidden">
                {faq.question}

                <ChevronDown
                  size={19}
                  className="shrink-0 text-primary transition-transform group-open:rotate-180"
                />
              </summary>

              <div className="border-t border-slate-100 px-6 py-5 text-sm leading-7 text-slate-600">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}