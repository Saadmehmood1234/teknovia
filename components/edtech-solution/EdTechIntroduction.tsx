import {
  BarChart3,
  Layers3,
  Rocket,
} from "lucide-react";
import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { TopBadge } from "@/components/ui/Top-Badge";
export function EdTechIntroduction() {
  return (
    <section className="relative overflow-hidden border-b border-gray-100 bg-[#FAFAFA] py-8 sm:py-16">
      <Container className="relative">
        <div className="grid items-start gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white">
              <Image
                src="/images/edtech-solution/edutech-about.png"
                alt="EduTech learning platform"
                width={1000}
                height={800}
                className="h-auto w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <div className="flex items-center justify-between rounded-2xl border border-white/15 bg-black/55 p-4 text-white backdrop-blur-md">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/50">
                      EduTech Ecosystem
                    </p>
                    <p className="mt-1 font-heading text-lg font-bold">
                      Learn. Analyze. Improve.
                    </p>
                  </div>

                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary">
                    <Layers3 className="size-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <TopBadge data="About EduTech" />

            <h2 className="max-w-2xl font-heading text-3xl font-black leading-[1.08] tracking-tight text-gray-950 sm:text-4xl">
              Technology that makes{" "}
              <span className="text-primary">education more connected.</span>
            </h2>

            <p className="mt-6 text-sm leading-7 text-gray-600">
              EduTech refers to the integration of technology into education to
              enhance how people learn, teach, and manage academic processes.
              It enables institutions to deliver learning through digital
              platforms like LMS, mobile apps, and virtual classrooms.
            </p>

            <p className="mt-4 text-sm leading-7 text-gray-600">
              EduTech goes beyond content delivery by incorporating analytics,
              automation, and personalized learning experiences. It helps
              educators track performance, improve engagement, and optimize
              outcomes.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="flex gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary">
                  <BarChart3 className="size-5" />
                </div>

                <div>
                  <h3 className="font-heading text-sm font-bold text-gray-950">
                    Smarter Insights
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-gray-500">
                    Track learning and performance with meaningful data.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary">
                  <Rocket className="size-5" />
                </div>

                <div>
                  <h3 className="font-heading text-sm font-bold text-gray-950">
                    Scalable Learning
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-gray-500">
                    Deliver education across growing learner communities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}