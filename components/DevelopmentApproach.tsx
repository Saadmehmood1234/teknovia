"use client";

import { useEffect, useState } from "react";
import { LucideIcon, Check, ChevronRight, ChevronLeft } from "lucide-react";

import { Container } from "./ui/Container";

interface DevelopmentStep {
  number: string;
  title: string;
  description: string;
  detail?: string;
  icon?: LucideIcon;
  bgColor?: string;
  txtColor?: string;
  borderColor?: string;
}

interface DevelopmentApproachProps {
  steps: DevelopmentStep[];
}

export function DevelopmentApproach({ steps }: DevelopmentApproachProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (steps.length <= 1) return;

    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % steps.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [steps.length]);

  const activeStep = steps[activeIndex];

  if (!activeStep) return null;

  return (
    <section className="py-8">
      <Container>
        <div className="flex flex-col rounded-3xl border border-gray-100 bg-white md:p-10 p-4 shadow-sm shadow-gray-200">
          <div className="relative flex items-start justify-between">
            <div className="absolute left-1 md:left-0 right-0 top-5 md:top-6 z-0 h-0.5 md:h-1 bg-gray-200">
              <div
                className="h-full bg-primary transition-all duration-500"
                style={{
                  width: `${(activeIndex / (steps.length - 1)) * 100}%`,
                }}
              />
            </div>

            {steps.map((step, index) => {
              const isActive = index === activeIndex;

              return (
                <div
                  key={step.number}
                  className="relative z-10 flex flex-col items-center gap-1"
                >
                  <button
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Show ${step.title} step`}
                    aria-current={isActive ? "step" : undefined}
                    className={`flex bg-white md:h-12 md:w-12 h-10 w-10 items-center justify-center rounded-full border-2 font-mono md:text-sm text-xs font-semibold transition-all duration-300 ${
                      isActive
                        ? `scale-110 border-2 ${activeStep.borderColor} ${activeStep.txtColor} shadow-lg shadow-primary/20`
                        : "border-primary text-primary hover:bg-primary-50"
                    }`}
                  >
                    {step.number}
                  </button>

                  <p
                    className={`text-xs transition-colors ${
                      isActive
                        ? `font-semibold ${activeStep.txtColor}`
                        : "text-gray-500"
                    }`}
                  >
                    {step.title}
                  </p>
                </div>
              );
            })}
          </div>

          <div
            key={activeStep.number}
            className="md:mt-12 mt-6 flex w-full flex-col overflow-hidden rounded-3xl border border-gray-100 md:flex-row"
          >
            <div
              className={`relative md:min-h-75 min-h-56 w-full overflow-hidden bg-linear-to-br md:p-8 p-4 text-white md:w-1/2 ${activeStep.bgColor}`}
            >
              <div className="flex flex-col gap-4">
                {activeStep.icon && (
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
                    <activeStep.icon size={26} />
                  </div>
                )}

                <span className="text-xs font-semibold tracking-wider text-white/80">
                  STEP {activeStep.number}
                </span>
              </div>
              <p className="absolute -bottom-10 -right-2 select-none text-[150px] font-black leading-none text-white/10">
                {activeStep.number}
              </p>
            </div>

            <div className="flex w-full flex-col justify-center gap-2 md:gap-5 bg-white md:p-8 p-4 md:w-1/2 lg:p-10">
              <span className="text-xs font-extrabold tracking-wider text-primary">
                PHASE {activeStep.number}
              </span>

              <h2 className="font-heading text-3xl font-bold text-slate-900">
                {activeStep.title}
              </h2>

              <p className="text-sm leading-7 text-slate-600">
                {activeStep.description}
              </p>

              {activeStep.detail && (
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary">
                    <Check size={14} strokeWidth={3} />
                  </div>

                  <p className="text-sm leading-6 text-slate-600">
                    {activeStep.detail}
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="mt-8 flex items-center gap-4">
            <button
              type="button"
              onClick={() => setActiveIndex((prev) => prev - 1)}
              disabled={activeIndex === 0}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition-all hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-gray-200 disabled:hover:text-gray-600"
              aria-label="Previous step"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex flex-1 items-center gap-2">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${
                    index <= activeIndex ? "bg-primary" : "bg-gray-200"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => setActiveIndex((prev) => prev + 1)}
              disabled={activeIndex === steps.length - 1}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition-all hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-gray-200 disabled:hover:text-gray-600"
              aria-label="Next step"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
