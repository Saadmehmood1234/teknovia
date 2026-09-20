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
    description:
      "We explore your business, understand challenges, analyze opportunities, and define the right problem to solve.",
    detail:
      "Identify business needs, challenges, opportunities, and project objectives to establish a strong foundation.",
    icon: Compass,
    bgColor: "from-[#3272ED] to-[#1D4BCB]",
    txtColor: "text-[#1D4BCB]",
    borderColor: "border-[#1D4BCB]",
  },
  {
    number: "02",
    title: "Define",
    description:
      "We define clear requirements, prioritize features, identify KPIs, and create a roadmap aligned with your business goals.",
    detail:
      "Establish project scope, success metrics, requirements, priorities, and implementation strategy.",
    icon: ClipboardList,
    bgColor: "from-[#5D5CED] to-[#493FD7]",
    txtColor: "text-[#493FD7]",
    borderColor: "border-[#493FD7]",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We craft intuitive user experiences and robust architectures that are scalable, secure, and future-ready.",
    detail:
      "Create user-centric interfaces, workflows, system architecture, and solution blueprints.",
    icon: PenTool,
    bgColor: "from-[#804AEC] to-[#6123C2]",
    txtColor: "text-[#6123C2]",
    borderColor: "border-[#6123C2]",
  },
  {
    number: "04",
    title: "Develop",
    description:
      "We build clean, efficient, and secure code using industry best practices and modern technologies.",
    detail:
      "Develop scalable applications, integrations, and enterprise-grade software solutions.",
    icon: Code2,
    bgColor: "from-[#F56C13] to-[#D64D0C]",
    txtColor: "text-[#D64D0C]",
    borderColor: "border-[#D64D0C]",
  },
  {
    number: "05",
    title: "Deploy",
    description:
      "We ensure a smooth launch with seamless integration, data migration, testing, and user training.",
    detail:
      "Launch solutions efficiently while minimizing disruption and ensuring business continuity.",
    icon: Rocket,
    bgColor: "from-[#12AE9E] to-[#0F7F76]",
    txtColor: "text-[#0F7F76]",
    borderColor: "border-[#0F7F76]",
  },
  {
    number: "06",
    title: "Drive",
    description:
      "We continuously optimize, provide support, measure performance, and drive innovation for long-term business growth.",
    detail:
      "Enhance performance, support users, implement improvements, and scale for future growth.",
    icon: Zap,
    bgColor: "from-[#0DAA77] to-[#056A4D]",
    txtColor: "text-[#056A4D]",
    borderColor: "border-[#056A4D]",
  },
];

export function EnterpriseDevelopmentApproach() {
  return <DevelopmentApproach steps={developmentSteps} />;
}
