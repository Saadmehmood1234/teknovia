import type { Metadata } from "next";

import { EdTechHero } from "@/components/edtech-solution/EdTechHero";
import { EdTechIndustries } from "@/components/edtech-solution/EdTechIndustries";
import { EdTechIntroduction } from "@/components/edtech-solution/EdTechIntroduction";
import { OurPhilosophy } from "@/components/edtech-solution/OurPhilosophy";

export const metadata: Metadata = {
  title: "EdTech Solutions & Education Technology Services",

  description:
    "Teknovia Technologies provides EdTech solutions and education technology services including eLearning platforms, LMS development, digital learning solutions and technology for educational institutions and businesses.",

  keywords: [
    "EdTech solutions",
    "EdTech development company",
    "EdTech solutions company",
    "education technology solutions",
    "education technology company",
    "EdTech software development",
    "eLearning solutions",
    "eLearning platform development",
    "LMS development company",
    "learning management system development",
    "digital learning solutions",
    "online education platform development",
    "educational software development",
    "education app development",
    "EdTech platform development",
    "EdTech solutions in Noida",
    "EdTech company in Noida",
    "EdTech company in Delhi NCR",
    "education technology services",
  ],

  alternates: {
    canonical: "/edtech-solution",
  },

  openGraph: {
    title: "EdTech Solutions & Education Technology Services",
    description:
      "Build modern digital learning experiences with EdTech software, eLearning platforms, LMS solutions and education technology services from Teknovia Technologies.",
    url: "/edtech-solution",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Teknovia EdTech Solutions and Education Technology Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "EdTech Solutions & Education Technology Services",
    description:
      "EdTech software, eLearning platforms, LMS development and digital learning solutions from Teknovia Technologies.",
    images: ["/og-image.jpg"],
  },
};

export default function EdTechPage() {
  return (
    <main>
      <EdTechHero />
      <EdTechIntroduction />
      <OurPhilosophy />
      <EdTechIndustries />
    </main>
  );
}