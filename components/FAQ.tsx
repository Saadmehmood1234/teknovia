"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";

export type FAQItem = {
  question: string;
  answer: string;
};

type FAQProps = {
  title?: string;
  description?: string;
  faqs: FAQItem[];
};

export default function FAQ({
  title = "Frequently Asked Questions",
  description = "Common questions and answers",
  faqs,
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="py-8 sm:py-16 bg-[#FAFAFA]">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <SectionHeading
            variant="sticky"
            badge="FAQ"
            title={title}
            description={description}
          />

          <div className="divide-y divide-gray-200 border-y border-gray-200">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={faq.question}>
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="flex items-start gap-4">
                      <span className="mt-0.5 shrink-0 font-mono text-sm font-medium text-primary">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="font-semibold leading-6 text-gray-900 text-md">
                        {faq.question}
                      </span>
                    </span>

                    <span
                      className={`flex size-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                        isOpen
                          ? "border-primary bg-primary text-white"
                          : "border-gray-200 bg-white text-gray-600"
                      }`}
                    >
                      <ChevronDown
                        className={`size-4 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </span>
                  </button>

                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="pb-6 pl-12 pr-12 text-sm leading-7 text-gray-600">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
