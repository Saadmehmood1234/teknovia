import { BarChart3, Layers3, Rocket } from "lucide-react";

import { ContentOverview } from "@/components/ui/ContentOverview";

export function EdTechIntroduction() {
  return (
    <ContentOverview
      badge="About EduTech"
      title={
        <>
          Technology that makes{" "}
          <span className="text-primary">
            education more connected.
          </span>
        </>
      }
      image={{
        src: "/images/edtech-solution/edutech-about.png",
        alt: "EduTech learning platform",
        width: 1000,
        height: 800,
      }}
      imageOverlay
      gridClassName="lg:grid-cols-[0.95fr_1.05fr] lg:gap-16"
      imageBadge={{
        label: "EDUTECH ECOSYSTEM",
        text: "Learn. Analyze. Improve.",
        icon: Layers3,
      }}
      paragraphs={[
        <>
          EduTech refers to the integration of technology into education
          to enhance how people learn, teach, and manage academic
          processes. It enables institutions to deliver learning through
          digital platforms like LMS, mobile apps, and virtual
          classrooms.
        </>,
        <>
          EduTech goes beyond content delivery by incorporating
          analytics, automation, and personalized learning experiences.
          It helps educators track performance, improve engagement, and
          optimize outcomes.
        </>,
      ]}
    >
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
    </ContentOverview>
  );
}