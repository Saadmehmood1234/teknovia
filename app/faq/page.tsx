import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { CTA } from "@/components/CTA";
import { FaqPageView } from "@/components/faq/FaqPageView";
import { allFaqCategories } from "@/lib/data/faqs-data";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQs)",
  description:
    "Find answers to common questions about Teknovia Technologies software engineering, Next.js web development, mobile apps, enterprise cloud SaaS, SEO, and internship hiring.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "Frequently Asked Questions (FAQs) | Teknovia Technologies",
    description:
      "Explore comprehensive answers regarding custom web development, mobile apps, SaaS, IoT, digital marketing, and careers at Teknovia Technologies.",
    url: "/faq",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Teknovia Technologies FAQ",
      },
    ],
  },
};

export default function FAQPage() {
  const faqSchemaItems = allFaqCategories.flatMap((cat) =>
    cat.faqs.slice(0, 5).map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqSchemaItems,
  };

  return (
    <main>
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative overflow-hidden bg-white py-12 sm:py-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(0,150,137,0.08),rgba(255,255,255,0))]" />

        <Container className="relative z-10">
          <div className="mb-6 flex justify-center">
            <Breadcrumb
              items={[{ label: "Home", href: "/" }, { label: "FAQs" }]}
            />
          </div>

          <SectionHeading
            variant="left"
            badge="FAQs"
            title="Frequently Asked Questions"
            description="Everything you need to know about our engineering craft, technology stack, project delivery timelines, engagement models, and company culture."
          />
        </Container>
      </section>

      {/* Interactive FAQ Hub */}
      <FaqPageView />

      {/* Global Call to Action */}
      <CTA
        title="Ready to Start Your Next Project?"
        description="Schedule a technical discovery session with our engineering leads to explore architecture, cost estimations, and roadmap."
        button={{
          label: "Contact Our Team",
          href: "/contact",
        }}
      />
    </main>
  );
}
