import type { Metadata } from "next";

import { CTA } from "@/components/CTA";
import { BlogList } from "@/components/blog/Bloglist";
import { BlogHero } from "@/components/blog/BlogHero";

export const metadata: Metadata = {
  title: "Blog | B2B Marketing, SEO & Technology Insights",

  description:
    "Practical articles from Teknovia Technologies on B2B marketing, lead generation, SEO, web development and technology solutions for growing businesses.",

  keywords: [
    "Teknovia blog",
    "B2B marketing blog",
    "lead generation tips",
    "local SEO checklist",
    "LinkedIn marketing for B2B",
    "website speed optimisation",
    "ERP for manufacturers",
    "digital marketing insights",
  ],

  alternates: {
    canonical: "/blog",
  },

  openGraph: {
    title: "Blog | B2B Marketing, SEO & Technology Insights",
    description:
      "Practical articles on B2B marketing, SEO, web development and technology from Teknovia Technologies.",
    url: "/blog",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Teknovia Technologies Blog",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Blog | B2B Marketing, SEO & Technology Insights",
    description:
      "Practical articles on B2B marketing, SEO, web development and technology from Teknovia Technologies.",
    images: ["/og-image.jpg"],
  },
};

export default function BlogPage() {
  return (
    <main>
      <BlogHero />
      <BlogList />

      <CTA
        title="Let's Build Smart Solutions Together"
        description="Partner with Teknovia to innovate, grow and lead in your industry."
        button={{
          label: "Get Free Consultation",
          href: "mailto:info@teknovia.in",
        }}
      />
    </main>
  );
}
