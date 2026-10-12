"use client";
import { CheckCircle2 } from "lucide-react";
import { ContentOverview } from "@/components/ui/ContentOverview";
import { highlights } from "@/lib/data/digital-edge/social-media-optimization-data";
import {Fragment} from "react"
export function SMOIntroduction() {
  return (
    <ContentOverview
      badge="WHY SOCIAL MEDIA OPTIMIZATION?"
      title={
        <Fragment key="why-social-media-optimisation-title">
          Make Your Brand{" "}
          <span className="text-primary">Worth Following.</span>
        </Fragment>
      }
      image={{
        src: "/images/digital-edge/smo-about.jpg",
        alt: "Social media optimization",
      }}
      gridClassName="lg:grid-cols-[0.9fr_1.1fr] lg:gap-20"
      paragraphs={[
        <Fragment key="why-social-media-optimisation-desc1">
          In today’s digital world, your audience spends more time on
          social media than ever before. Social Media Optimization (SMO)
          helps businesses build a strong online presence, improve
          engagement, increase brand awareness, and generate quality leads
          through platforms like Instagram and Facebook.
        </Fragment>,
        <Fragment key="why-social-media-optimisation-desc2">
          Social Media Optimization is the process of optimizing your
          social media profiles, content, and engagement strategies to
          improve visibility, audience interaction, and brand credibility
          across social platforms.
        </Fragment>,
        <Fragment key="why-social-media-optimisation-desc3">
          At TEKNOVIA Technologies Private Limited, we create data-driven
          social media strategies designed to connect your brand with the
          right audience and turn followers into customers.
        </Fragment>,
      ]}
      points={highlights.map((item) => ({
        text: item.title,
        icon: item.icon,
      }))}
      imageBadge={{
        label: "SOCIAL GROWTH",
        text: "Built for meaningful engagement",
        icon: CheckCircle2,
      }}
    />
  );
}