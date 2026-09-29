import {
  ClipboardList,
  Code2,
  Compass,
  PenTool,
  Rocket,
  Zap,
} from "lucide-react";
import { DevelopmentApproach } from "../DevelopmentApproach";

const developmentSteps = [
  {
    number: "01",
    title: "Discover",
    image: "/images/steps/discover1.png",
    description:
      "We explore your business, understand challenges, analyze opportunities, and define the right problem to solve.",
    detail:
      "Identify business needs, challenges, opportunities, and project objectives to establish a strong foundation.",
    icon: Compass,
    bgColor: "from-[#A5CBF9] to-[#2C5FD4]",
    txtColor: "text-[#1D4BCB]",
    borderColor: "border-[#1D4BCB]",
  },
  {
    number: "02",
    title: "Define",
    image: "/images/steps/define1.png",
    description:
      "We define clear requirements, prioritize features, identify KPIs, and create a roadmap aligned with your business goals.",
    detail:
      "Establish project scope, success metrics, requirements, priorities, and implementation strategy.",
    icon: ClipboardList,
    bgColor: "from-[#D1C5F6] to-[#BDA9ED]",
    txtColor: "text-[#493FD7]",
    borderColor: "border-[#493FD7]",
  },
  {
    number: "03",
    title: "Design",
    image: "/images/steps/design1.png",
    description:
      "We craft intuitive user experiences and robust architectures that are scalable, secure, and future-ready.",
    detail:
      "Create user-centric interfaces, workflows, system architecture, and solution blueprints.",
    icon: PenTool,
    bgColor: "from-[#BCA4F3] to-[#B599EE]",
    txtColor: "text-[#6123C2]",
    borderColor: "border-[#6123C2]",
  },
  {
    number: "04",
    title: "Develop",
    image: "/images/steps/develop1.png",
    description:
      "We build clean, efficient, and secure code using industry best practices and modern technologies.",
    detail:
      "Develop scalable applications, integrations, and enterprise-grade software solutions.",
    icon: Code2,
    bgColor: "from-[#FFCF99] to-[#FBA05A]",
    txtColor: "text-[#D64D0C]",
    borderColor: "border-[#D64D0C]",
  },
  {
    number: "05",
    title: "Deploy",
    image: "/images/steps/deploy1.png",
    description:
      "We ensure a smooth launch with seamless integration, data migration, testing, and user training.",
    detail:
      "Launch solutions efficiently while minimizing disruption and ensuring business continuity.",
    icon: Rocket,
    bgColor: "from-[#81C5C7] to-[#81C5C7]",
    txtColor: "text-[#0F7F76]",
    borderColor: "border-[#0F7F76]",
  },
  {
    number: "06",
    title: "Drive",
    image: "/images/steps/drive1.png",
    description:
      "We continuously optimize, provide support, measure performance, and drive innovation for long-term business growth.",
    detail:
      "Enhance performance, support users, implement improvements, and scale for future growth.",
    icon: Zap,
    bgColor: "from-[#6C9366] to-[#2E5B40]",
    txtColor: "text-[#056A4D]",
    borderColor: "border-[#056A4D]",
  },
];

export function EnterpriseDevelopmentApproach() {
  return <DevelopmentApproach steps={developmentSteps} />;
}

