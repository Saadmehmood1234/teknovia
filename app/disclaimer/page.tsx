import Link from "next/link";
import { Hero } from "@/components/policies/Hero";
import { Intro } from "@/components/policies/Intro";
import { Content } from "@/components/policies/Content";
export const metadata = {
  title: "Disclaimer | TEKNOVIA Technologies",
  description:
    "Read the disclaimer governing the use of information, services, technology content, AI-generated materials, and third-party references on the TEKNOVIA website.",
};

const sections = [
  {
    id: "general-information",
    number: "01",
    title: "General Information",
    content: (
      <>
        <p>
          TEKNOVIA makes reasonable efforts to ensure that the information
          presented on the Website is accurate, relevant, and up to date.
        </p>

        <p>
          However, information may contain errors, omissions, inaccuracies, or
          become outdated due to changes in technology, services, pricing,
          business practices, regulations, or other circumstances.
        </p>

        <p>
          The information provided on the Website should not be considered a
          substitute for professional, legal, financial, technical, or other
          specialized advice.
        </p>

        <p>
          You should obtain appropriate professional advice before making
          decisions based on information published on the Website.
        </p>
      </>
    ),
  },
  {
    id: "no-guarantee-of-results",
    number: "02",
    title: "No Guarantee of Results",
    content: (
      <>
        <p>
          Descriptions of TEKNOVIA&apos;s services, solutions, technologies,
          capabilities, case studies, examples, or business outcomes are
          provided for general information and illustration.
        </p>

        <p>TEKNOVIA does not guarantee any particular:</p>

        <ul>
          <li>Business result</li>
          <li>Revenue</li>
          <li>Sales</li>
          <li>Lead generation</li>
          <li>Search-engine ranking</li>
          <li>Website traffic</li>
          <li>Advertising performance</li>
          <li>Conversion rate</li>
          <li>Return on investment</li>
          <li>Software performance</li>
          <li>Business growth</li>
          <li>Market position</li>
        </ul>

        <p>
          Actual results may vary depending on factors including market
          conditions, competition, client requirements, budgets, implementation,
          third-party platforms, algorithms, technology, and other circumstances
          outside TEKNOVIA&apos;s control.
        </p>
      </>
    ),
  },
  {
    id: "digital-marketing-seo",
    number: "03",
    title: "Digital Marketing and SEO Disclaimer",
    content: (
      <>
        <p>
          Search engine optimization, local SEO, social media marketing, online
          advertising, content marketing, and other digital marketing activities
          depend partly on third-party platforms and constantly changing
          algorithms.
        </p>

        <p>
          Accordingly, TEKNOVIA does not guarantee specific rankings,
          impressions, clicks, traffic, leads, conversions, or revenue unless
          expressly agreed in a separate written contract.
        </p>

        <p>
          Any examples, projections, estimates, or performance references
          presented on the Website should not be interpreted as a guarantee of
          future results.
        </p>
      </>
    ),
  },
  {
    id: "software-technology",
    number: "04",
    title: "Software and Technology Disclaimer",
    content: (
      <>
        <p>
          Information about software, SaaS platforms, applications, APIs,
          integrations, features, or technology solutions may describe current
          or planned capabilities.
        </p>

        <p>
          Features, specifications, availability, integrations, technology
          stacks, pricing, and functionality may change without prior notice.
        </p>

        <p>
          Specific software functionality and deliverables will be governed by
          the applicable proposal, quotation, SOW, subscription agreement,
          license agreement, or other contractual document.
        </p>
      </>
    ),
  },
  {
    id: "ai-generated-content",
    number: "05",
    title: "AI-Generated Content and Images",
    content: (
      <>
        <p>
          TEKNOVIA may use{" "}
          <strong>
            artificial intelligence (AI), generative AI, machine-learning tools,
            and related technologies
          </strong>{" "}
          in the creation, development, enhancement, or presentation of certain
          Website content and digital materials.
        </p>

        <p>This may include:</p>

        <ul>
          <li>Images and illustrations</li>
          <li>Graphics and visual concepts</li>
          <li>Marketing creatives</li>
          <li>Website content</li>
          <li>Written copy</li>
          <li>Product or service descriptions</li>
          <li>Design concepts</li>
          <li>Presentations and other digital materials</li>
          <li>Other creative or informational content</li>
        </ul>

        <h3>5.1 Nature of AI-Generated Material</h3>

        <p>
          Certain visual or textual materials published on the Website may be
          fully or partially generated, enhanced, edited, or assisted by AI
          technologies.
        </p>

        <p>
          Such materials may be used for{" "}
          <strong>
            illustrative, conceptual, marketing, informational, or creative
            purposes
          </strong>{" "}
          and may not always represent an actual product, person, facility,
          location, process, project, or client environment unless expressly
          stated.
        </p>

        <h3>5.2 Accuracy of AI-Generated Content</h3>

        <p>
          AI-generated content can occasionally contain inaccuracies, omissions,
          unintended similarities, or factual errors.
        </p>

        <p>
          TEKNOVIA makes reasonable efforts to review and validate AI-assisted
          content before publication where appropriate. However, TEKNOVIA does
          not warrant that every AI-assisted image, text, description,
          illustration, or other material is completely accurate, exhaustive, or
          error-free.
        </p>

        <p>
          Users should independently verify important information before relying
          on it for business or other significant decisions.
        </p>

        <h3>5.3 AI-Generated Images</h3>

        <p>
          Images created or enhanced using AI may be{" "}
          <strong>conceptual or representative</strong> and should not
          automatically be interpreted as photographs or exact representations
          of TEKNOVIA&apos;s offices, employees, customers, products, projects,
          infrastructure, or services.
        </p>

        <p>
          Where an image is intended to represent an actual real-world subject,
          TEKNOVIA may provide additional context where appropriate.
        </p>

        <h3>5.4 Intellectual Property and Third-Party Rights</h3>

        <p>
          TEKNOVIA takes reasonable steps to use AI tools and generated
          materials responsibly and in accordance with applicable laws,
          licenses, platform terms, and contractual requirements.
        </p>

        <p>
          However, because AI-generated outputs may involve complex
          intellectual-property considerations, TEKNOVIA does not represent that
          every AI-generated output is exclusively protectable, completely free
          from similarity to third-party material, or capable of being
          registered as intellectual property in every jurisdiction.
        </p>

        <p>
          Where specific intellectual-property rights are important to a
          project, those rights will be addressed through the applicable
          agreement and relevant legal review.
        </p>
      </>
    ),
  },
  {
    id: "third-party-services",
    number: "06",
    title: "Third-Party Platforms and Services",
    content: (
      <>
        <p>
          The Website may contain references to or integrations with third-party
          products, platforms, technologies, websites, APIs, payment services,
          social media platforms, analytics services, hosting providers, or
          other services.
        </p>

        <p>
          TEKNOVIA does not control the operation, availability, policies,
          security, content, or performance of third-party services.
        </p>

        <p>
          Any use of third-party services is subject to the applicable third
          party&apos;s terms and policies.
        </p>
      </>
    ),
  },
  {
    id: "external-links",
    number: "07",
    title: "External Links",
    content: (
      <>
        <p>
          The Website may contain links to external websites for reference,
          convenience, or informational purposes.
        </p>

        <p>
          TEKNOVIA does not endorse or guarantee the accuracy, reliability,
          security, availability, or content of third-party websites unless
          expressly stated.
        </p>

        <p>Users access external websites at their own discretion and risk.</p>
      </>
    ),
  },
  {
    id: "testimonials-case-studies",
    number: "08",
    title: "Testimonials, Case Studies and Examples",
    content: (
      <>
        <p>
          Testimonials, case studies, examples, statistics, project
          descriptions, and other business results displayed on the Website may
          represent individual experiences or specific circumstances.
        </p>

        <p>
          Past performance or results should not be interpreted as a guarantee
          that another customer will achieve identical or similar results.
        </p>

        <p>
          Where applicable, names, logos, trademarks, or references to
          third-party organizations are used with appropriate authorization or
          for legitimate reference purposes.
        </p>
      </>
    ),
  },
  {
    id: "website-availability",
    number: "09",
    title: "Availability of the Website",
    content: (
      <>
        <p>
          TEKNOVIA makes reasonable efforts to maintain the availability and
          security of the Website.
        </p>

        <p>However, uninterrupted availability cannot be guaranteed.</p>

        <p>The Website may occasionally be unavailable due to:</p>

        <ul>
          <li>Maintenance</li>
          <li>Technical issues</li>
          <li>Hosting or infrastructure failures</li>
          <li>Internet or network problems</li>
          <li>Cybersecurity incidents</li>
          <li>Third-party service interruptions</li>
          <li>Force majeure events</li>
          <li>Other circumstances beyond TEKNOVIA&apos;s reasonable control</li>
        </ul>
      </>
    ),
  },
  {
    id: "professional-advice",
    number: "10",
    title: "No Professional Advice",
    content: (
      <>
        <p>
          Information published on the Website is not intended to constitute
          legal, financial, tax, accounting, investment, medical, employment, or
          other professional advice.
        </p>

        <p>
          Users should consult appropriately qualified professionals where
          specialized advice is required.
        </p>
      </>
    ),
  },
  {
    id: "limitation-of-liability",
    number: "11",
    title: "Limitation of Liability",
    content: (
      <>
        <p>
          To the maximum extent permitted by applicable law, TEKNOVIA
          Technologies Private Limited shall not be liable for any direct,
          indirect, incidental, consequential, special, or other losses arising
          from reliance on information available on the Website.
        </p>

        <p>
          Nothing in this Disclaimer shall exclude or limit liability that
          cannot lawfully be excluded or limited under applicable law.
        </p>

        <p>
          For specific services or projects, liability shall be governed by the
          applicable written agreement.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    number: "12",
    title: "Changes to This Disclaimer",
    content: (
      <>
        <p>
          TEKNOVIA may update this Disclaimer from time to time to reflect
          changes in its services, Website content, technologies, business
          practices, or applicable laws.
        </p>

        <p>
          The updated version will be published on this page with the revised
          <strong> Last Updated</strong> date.
        </p>
      </>
    ),
  },
  {
    id: "governing-law",
    number: "13",
    title: "Governing Law",
    content: (
      <>
        <p>
          This Disclaimer shall be governed by and interpreted in accordance
          with the applicable laws of <strong>India</strong>.
        </p>

        <p>
          Subject to applicable law and any specific contractual arrangement,
          disputes shall be subject to the jurisdiction of the appropriate
          courts in India.
        </p>
      </>
    ),
  },
  {
    id: "contact-us",
    number: "14",
    title: "Contact Us",
    content: (
      <>
        <p>If you have questions regarding this Disclaimer, please contact:</p>

        <div className="mt-6 rounded-xl border border-primary-100 bg-primary-50 p-5 sm:p-6">
          <p className="!mt-0 font-heading text-lg font-semibold text-gray-900">
            TEKNOVIA Technologies Private Limited
          </p>

          <div className="mt-5 space-y-3 text-sm">
            <p>
              <span className="font-semibold text-gray-900">Website:</span>{" "}
              <Link
                href="https://www.teknovia.in/"
                className="text-primary transition-colors hover:text-primary-dark"
              >
                www.teknovia.in
              </Link>
            </p>

            <p>
              <span className="font-semibold text-gray-900">Email:</span>{" "}
              <a
                href="mailto:info@teknovia.in"
                className="text-primary transition-colors hover:text-primary-dark"
              >
                info@teknovia.in
              </a>
            </p>

            <p>
              <span className="font-semibold text-gray-900">
                Registered Office:
              </span>{" "}
              F3-104, Eco Village 2, Greater Noida West
            </p>
          </div>
        </div>
      </>
    ),
  },
];

const EFFECTIVE_DATE = "11 October 2026";
const LAST_UPDATED = "11 October 2026";

export default function DisclaimerPage() {
  return (
    <main>
      <Hero
        breadcrumb="Disclaimer"
        badge="Legal Information"
        title="Website"
        highlightedTitle="Disclaimer"
        description="Important information about the content, services, technology, AI-generated materials, third-party services, and business results presented on the TEKNOVIA website."
        effectiveDate={EFFECTIVE_DATE}
        lastUpdated={LAST_UPDATED}
      />

      <Intro
        label="Important Notice"
        description="Please review this Disclaimer carefully before relying on information published on the Website."
        message={
          <>
            The information provided on <strong>www.teknovia.in</strong> is
            published by <strong>TEKNOVIA Technologies Private Limited</strong>{" "}
            for general informational and business purposes. By accessing or
            using this Website, you acknowledge and agree to the terms of this
            Disclaimer.
          </>
        }
      />

      <Content
        sections={sections}
        lastUpdated={LAST_UPDATED}
        ctaTitle="Have questions about this Disclaimer?"
        ctaDescription="Contact TEKNOVIA if you need clarification about the information published on our Website."
      />
    </main>
  );
}
