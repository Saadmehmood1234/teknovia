import { BackgroundEffect } from "@/components/Background";
import { Container } from "@/components/ui/Container";
import { FeatureListItem } from "@/components/ui/ListItem";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { b2bBenefits } from "@/lib/data/digital-edge/b2b-marketing-data";

const flowSteps = ["Marketing", "Pipeline", "Revenue"];

export function B2BMarketingBenefits() {
  return (
    <section
      id="platform-capabilities"
      className="relative border-b border-gray-100 bg-white py-8 sm:py-16"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28 ">
              <SectionHeading
                variant="left"
                badge="WHY TEKNOVIA?"
                title="Strategy that connects marketing to revenue."
                description="B2B marketing needs more than visibility. We build strategies around your audience, sales cycle, business goals, and measurable opportunities."
              />
              <div className="relative mt-8 overflow-hidden rounded-md bg-[#18342F] p-6 text-white lg:mx-0">
                <BackgroundEffect />
                <p className="relative text-left text-[10px] font-bold uppercase tracking-[0.18em] text-white/50">
                  How it connects
                </p>

                <div className="relative mt-6 flex items-center">
                  {flowSteps.map((step, i) => (
                    <div
                      key={step}
                      className="flex flex-1 items-center last:flex-none"
                    >
                      <div className="flex flex-col items-center gap-2">
                        <span
                          className={`flex size-9 items-center justify-center rounded-full font-mono text-xs font-bold ${
                            i === flowSteps.length - 1
                              ? "bg-primary text-white shadow-[0_0_25px_rgba(0,150,137,0.6)]"
                              : "border border-primary/30 bg-primary/10 text-primary"
                          }`}
                        >
                          {i + 1}
                        </span>

                        <span className="whitespace-nowrap text-[11px] font-semibold text-white/80">
                          {step}
                        </span>
                      </div>

                      {i < flowSteps.length - 1 && (
                        <div className="mx-2 mb-6 h-px flex-1 bg-linear-to-r from-primary/60 to-primary/20" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <ul className="border-t border-gray-200 lg:col-span-7">
            {b2bBenefits.map((item, index) => (
              <FeatureListItem
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
                index={index}
              />
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
