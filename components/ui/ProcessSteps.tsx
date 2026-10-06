import type { LucideIcon } from "lucide-react";

interface ProcessStep {
  number: string | number;
  title: string;
  description: string;
  icon: LucideIcon;
}

interface ProcessStepsProps {
  steps: ProcessStep[];

  lineColor?: string;
  arrowColor?: string;
  circleBorderColor?: string;
  circleBgColor?: string;
  circleShadowColor?: string;
  iconColor?: string;
  numberBorderColor?: string;
  numberBgColor?: string;
  numberTextColor?: string;
  titleColor?: string;
  descriptionColor?: string;
}

export function ProcessSteps({
  steps,

  lineColor = "border-[#009689]/70",
  arrowColor = "border-l-[#009689]",
  circleBorderColor = "border-[#009689]",
  circleBgColor = "bg-[#003F48]",
  circleShadowColor = "shadow-[0_0_25px_rgba(0,150,137,0.12)]",
  iconColor = "text-white",
  numberBorderColor = "border-[#009689]",
  numberBgColor = "bg-[#00786f]",
  numberTextColor = "text-white",
  titleColor = "text-white",
  descriptionColor = "text-white/75",
}: ProcessStepsProps) {
  return (
    <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6 2xl:gap-0">
      {steps.map((step, index) => {
        const Icon = step.icon;
        const isLast = index === steps.length - 1;

        return (
          <div
            key={step.number}
            className="relative flex flex-col items-center text-center"
          >
            {!isLast && (
              <div className="absolute left-[calc(50%+60px)] top-12 hidden w-[calc(100%-20px)] 2xl:block">
                <div className="relative flex items-center">
                  <div
                    className={`h-px w-full border-t border-dashed ${lineColor}`}
                  />

                  <span className="absolute right-0 flex h-3 w-3 items-center justify-center">
                    <span
                      className={`h-0 w-0 border-y-[6px] border-l-[9px] border-y-transparent ${arrowColor}`}
                    />
                  </span>
                </div>
              </div>
            )}

            <div
              className={`relative z-10 flex h-24 w-24 items-center justify-center rounded-full border ${circleBorderColor} ${circleBgColor} ${circleShadowColor}`}
            >
              <Icon
                strokeWidth={1.7}
                className={`h-11 w-11 ${iconColor}`}
              />

              <div
                className={`absolute -bottom-5 flex h-8 w-8 items-center justify-center rounded-full border ${numberBorderColor} ${numberBgColor} text-xs font-bold ${numberTextColor} shadow-lg`}
              >
                {step.number}
              </div>
            </div>

            <div className="mt-10 max-w-44">
              <h3
                className={`text-sm font-bold leading-6 ${titleColor}`}
              >
                {step.title}
              </h3>

              <p
                className={`mt-4 text-xs leading-6 ${descriptionColor}`}
              >
                {step.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}