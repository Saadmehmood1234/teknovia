import { Content } from "@/components/policies/Content";
import { Hero } from "@/components/policies/Hero";
import { Intro } from "@/components/policies/Intro";
import Link from "next/link";
export const metadata = {
  title: "Terms & Conditions | TEKNOVIA Technologies",
  description:
    "Read the Terms & Conditions governing access to and use of the TEKNOVIA Technologies website and its services.",
};

export const sections = [
  {
    id: "about-teknovia",
    number: "01",
    title: "About TEKNOVIA",
    content: (
      <>
        <p>
          TEKNOVIA Technologies Private Limited provides technology and
          business solutions including:
        </p>

        <ul>
          <li>Software Solutions</li>
          <li>Digital Marketing Services</li>
          <li>eCommerce Solutions & Applications</li>
          <li>Marketplace Solutions</li>
          <li>EduTech Solutions</li>
          <li>Talent Acquisition, Hiring & Staffing Services</li>
          <li>Customized technology and digital solutions</li>
        </ul>

        <p>
          Specific services may be governed by separate proposals,
          quotations, Statements of Work (SOW), Master Service Agreements
          (MSA), Service Level Agreements (SLA), or other contractual
          documents.
        </p>

        <p>
          In case of conflict between these Terms and a specific written
          agreement, the specific agreement shall prevail for the relevant
          services.
        </p>
      </>
    ),
  },
  {
    id: "website-use",
    number: "02",
    title: "Website Use",
    content: (
      <>
        <p>You may use the Website for lawful purposes only.</p>

        <p>You agree not to:</p>

        <ul>
          <li>Use the Website for any unlawful or fraudulent purpose.</li>
          <li>
            Attempt to gain unauthorized access to the Website, servers,
            systems, or databases.
          </li>
          <li>
            Introduce viruses, malware, malicious code, or other harmful
            material.
          </li>
          <li>Interfere with the security or operation of the Website.</li>
          <li>
            Copy, reproduce, modify, distribute, or commercially exploit
            Website content without authorization.
          </li>
          <li>
            Use automated systems to scrape, crawl, or extract Website content
            in a manner that may adversely affect the Website.
          </li>
          <li>Misrepresent your identity or relationship with TEKNOVIA.</li>
        </ul>

        <p>
          TEKNOVIA reserves the right to restrict or terminate access to the
          Website where misuse or unauthorized activity is identified.
        </p>
      </>
    ),
  },
  {
    id: "website-information",
    number: "03",
    title: "Information on the Website",
    content: (
      <>
        <p>
          TEKNOVIA makes reasonable efforts to keep Website information
          accurate and current. However, information may contain errors,
          omissions, inaccuracies, or become outdated.
        </p>

        <p>
          Website content is provided for general informational purposes and
          should not be treated as a binding quotation, guarantee, professional
          advice, or contractual commitment unless expressly stated otherwise.
        </p>

        <p>
          TEKNOVIA reserves the right to modify, update, suspend, or
          discontinue any Website content, service, feature, or functionality
          without prior notice.
        </p>
      </>
    ),
  },
  {
    id: "services-enquiries",
    number: "04",
    title: "Services and Enquiries",
    content: (
      <>
        <p>
          Information submitted through contact forms, enquiry forms,
          consultation requests, or other Website facilities does not
          automatically create a contractual relationship between you and
          TEKNOVIA.
        </p>

        <p>
          A service engagement becomes binding only after acceptance through
          an appropriate written agreement, proposal, quotation, purchase
          order, SOW, or other applicable contractual document.
        </p>

        <p>
          Service scope, timelines, deliverables, pricing, payment terms,
          revisions, support, maintenance, and other commercial conditions may
          vary depending on the individual project.
        </p>
      </>
    ),
  },
  {
    id: "pricing-payments",
    number: "05",
    title: "Pricing and Payments",
    content: (
      <>
        <p>
          Where prices are displayed on the Website, they are subject to
          change without prior notice unless expressly stated otherwise.
        </p>

        <p>
          Final pricing for products or services will be communicated through
          the applicable quotation, proposal, order, or agreement.
        </p>

        <p>
          Applicable taxes, including GST, may be charged in accordance with
          applicable law.
        </p>

        <p>
          Payment terms, cancellation provisions, refunds, and other
          commercial conditions will be governed by the relevant proposal,
          invoice, order, or agreement.
        </p>
      </>
    ),
  },
  {
    id: "intellectual-property",
    number: "06",
    title: "Intellectual Property",
    content: (
      <>
        <p>
          All content available on the Website, including but not limited to:
        </p>

        <ul>
          <li>Text</li>
          <li>Graphics</li>
          <li>Logos</li>
          <li>Icons</li>
          <li>Images</li>
          <li>Videos</li>
          <li>Designs</li>
          <li>Software</li>
          <li>Source code</li>
          <li>Documents</li>
          <li>Layouts</li>
          <li>Trademarks</li>
          <li>Brand elements</li>
        </ul>

        <p>
          is owned by or licensed to TEKNOVIA unless otherwise stated.
        </p>

        <p>
          The TEKNOVIA name, logo, trademarks, service marks, designs, and
          other brand assets may not be reproduced, modified, distributed, or
          used without prior written permission.
        </p>

        <p>
          Nothing on the Website grants you any ownership or license over
          TEKNOVIA&apos;s intellectual property except where expressly stated.
        </p>
      </>
    ),
  },
  {
    id: "client-materials",
    number: "07",
    title: "Client Materials and Third-Party Content",
    content: (
      <>
        <p>
          Where clients provide content, logos, images, documents, data,
          trademarks, or other materials to TEKNOVIA, the client remains
          responsible for ensuring that they have the necessary rights and
          permissions to use such materials.
        </p>

        <p>
          TEKNOVIA may use such materials solely for the purposes agreed with
          the client.
        </p>

        <p>
          The Website may also contain references, links, integrations, or
          information relating to third-party products and services. TEKNOVIA
          does not necessarily own or control such third-party services and is
          not responsible for their independent policies, availability,
          content, or performance.
        </p>
      </>
    ),
  },
  {
    id: "software-products",
    number: "08",
    title: "Software and Digital Products",
    content: (
      <>
        <p>
          Where TEKNOVIA provides software, SaaS products, applications, APIs,
          platforms, or other technology solutions, their use may be subject to
          additional licensing terms, subscription terms, user agreements, or
          project-specific contracts.
        </p>

        <p>
          Unless expressly agreed otherwise, access to software or digital
          products does not transfer ownership of the underlying intellectual
          property or source code.
        </p>
      </>
    ),
  },
  {
    id: "digital-marketing",
    number: "09",
    title: "Digital Marketing Services",
    content: (
      <>
        <p>
          Digital marketing services may include SEO, Local SEO, social media
          marketing, B2B marketing, WhatsApp marketing, branding, advertising,
          content, analytics, and related services.
        </p>

        <p>
          TEKNOVIA does not guarantee specific search-engine rankings,
          advertising results, traffic levels, leads, sales, conversions, or
          revenue because these may depend on factors outside TEKNOVIA&apos;s
          control, including search-engine algorithms, advertising platforms,
          market conditions, competition, client inputs, and third-party
          systems.
        </p>
      </>
    ),
  },
  {
    id: "third-party-platforms",
    number: "10",
    title: "Third-Party Platforms",
    content: (
      <>
        <p>
          Certain TEKNOVIA services may use third-party platforms and
          technologies, including but not limited to search engines, social
          media platforms, payment gateways, cloud infrastructure,
          communication platforms, analytics tools, and software APIs.
        </p>

        <p>
          The availability, functionality, policies, pricing, and terms of
          such third-party services are controlled by their respective
          providers.
        </p>

        <p>
          TEKNOVIA is not responsible for changes, interruptions, suspension,
          or discontinuation of third-party platforms beyond its reasonable
          control.
        </p>
      </>
    ),
  },
  {
    id: "privacy",
    number: "11",
    title: "Privacy and Personal Data",
    content: (
      <>
        <p>
          TEKNOVIA may collect and process personal information submitted
          through the Website in accordance with its Privacy Policy and
          applicable data-protection laws.
        </p>

        <p>
          Users should review the Privacy Policy to understand how personal
          information is collected, used, stored, and protected.
        </p>
      </>
    ),
  },
  {
    id: "confidentiality",
    number: "12",
    title: "Confidentiality",
    content: (
      <>
        <p>
          Information provided by a user through the Website will be handled
          in accordance with applicable law and TEKNOVIA&apos;s applicable
          privacy and confidentiality obligations.
        </p>

        <p>
          Confidential business information exchanged during a specific
          project or engagement may additionally be governed by a separate NDA
          or contractual agreement.
        </p>
      </>
    ),
  },
  {
    id: "disclaimer",
    number: "13",
    title: "Disclaimer",
    content: (
      <>
        <p>
          To the maximum extent permitted by applicable law, the Website and
          its content are provided on an &quot;as available&quot; and
          &quot;as is&quot; basis.
        </p>

        <p>TEKNOVIA does not warrant that:</p>

        <ul>
          <li>The Website will always be available or uninterrupted.</li>
          <li>The Website will be completely error-free.</li>
          <li>All information will always be complete or current.</li>
          <li>
            The Website will be free from technical defects or harmful
            components.
          </li>
          <li>
            Any particular business, marketing, software, or commercial
            outcome will be achieved.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "limitation-liability",
    number: "14",
    title: "Limitation of Liability",
    content: (
      <>
        <p>
          To the maximum extent permitted by applicable law, TEKNOVIA shall
          not be liable for indirect, incidental, consequential, special, or
          exemplary losses arising from or relating to the use of the Website.
        </p>

        <p>
          Nothing in these Terms shall exclude or limit any liability that
          cannot lawfully be excluded or limited under applicable law.
        </p>

        <p>
          For paid services, any limitation of liability applicable to a
          particular engagement shall be governed by the relevant written
          agreement.
        </p>
      </>
    ),
  },
  {
    id: "indemnification",
    number: "15",
    title: "Indemnification",
    content: (
      <>
        <p>
          You agree to indemnify and hold harmless TEKNOVIA Technologies
          Private Limited, its directors, employees, representatives, and
          service providers from claims, losses, liabilities, damages, costs,
          or expenses arising from:
        </p>

        <ul>
          <li>Your unlawful use of the Website.</li>
          <li>Your violation of these Terms.</li>
          <li>
            Your infringement of third-party intellectual property or other
            rights.
          </li>
          <li>
            Materials or information submitted by you that violate applicable
            law or third-party rights.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "third-party-links",
    number: "16",
    title: "Links to Other Websites",
    content: (
      <>
        <p>
          The Website may contain links to third-party websites for convenience
          or informational purposes.
        </p>

        <p>
          TEKNOVIA does not control and is not responsible for the content,
          availability, security, privacy practices, or terms of third-party
          websites.
        </p>

        <p>
          Accessing third-party websites is at your own discretion and subject
          to their respective terms and policies.
        </p>
      </>
    ),
  },
  {
    id: "suspension",
    number: "17",
    title: "Suspension or Termination",
    content: (
      <>
        <p>
          TEKNOVIA may suspend or restrict access to the Website where
          reasonably necessary, including for security, maintenance, legal
          compliance, misuse, or violation of these Terms.
        </p>

        <p>
          TEKNOVIA may also modify or discontinue any part of the Website or
          its functionality without liability to the extent permitted by law.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    number: "18",
    title: "Changes to These Terms",
    content: (
      <>
        <p>
          TEKNOVIA may update these Terms & Conditions from time to time.
        </p>

        <p>
          The updated version will be published on this page with the revised
          &quot;Last Updated&quot; date. Continued use of the Website after an
          update constitutes acceptance of the revised Terms, to the extent
          permitted by applicable law.
        </p>
      </>
    ),
  },
  {
    id: "governing-law",
    number: "19",
    title: "Governing Law and Jurisdiction",
    content: (
      <>
        <p>
          These Terms & Conditions shall be governed by and interpreted in
          accordance with the laws of India.
        </p>

        <p>
          Subject to any applicable statutory dispute-resolution rights,
          courts having appropriate jurisdiction in India shall have
          jurisdiction over disputes arising from or relating to these Terms or
          the Website.
        </p>

        <p>
          For specific client engagements, dispute-resolution provisions
          contained in the applicable written agreement shall prevail.
        </p>
      </>
    ),
  },
  {
    id: "force-majeure",
    number: "20",
    title: "Force Majeure",
    content: (
      <>
        <p>
          TEKNOVIA shall not be responsible for delays or failure to perform
          obligations caused by circumstances beyond its reasonable control,
          including natural disasters, acts of government, war, civil
          disturbance, telecommunications failures, internet or infrastructure
          failures, cyber incidents, strikes, pandemics, or failures of
          third-party service providers.
        </p>
      </>
    ),
  },
  {
    id: "severability",
    number: "21",
    title: "Severability",
    content: (
      <>
        <p>
          If any provision of these Terms is found to be invalid, unlawful, or
          unenforceable, the remaining provisions shall continue to remain
          effective to the extent permitted by law.
        </p>
      </>
    ),
  },
  {
    id: "entire-agreement",
    number: "22",
    title: "Entire Agreement",
    content: (
      <>
        <p>
          These Terms constitute the general terms governing use of the
          Website.
        </p>

        <p>
          Additional terms may apply to specific products, services,
          subscriptions, projects, or contractual engagements.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    number: "23",
    title: "Contact Us",
    content: (
      <>
        <p>
          For questions regarding these Terms & Conditions, please contact:
        </p>

        <div className="mt-6 rounded-xl border border-primary-100 bg-primary-50 p-5 sm:p-6">
          <p className="!mt-0 font-heading text-lg font-semibold text-gray-900">
            TEKNOVIA Technologies Private Limited
          </p>

          <div className="mt-4 space-y-2 text-sm">
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
          </div>
        </div>
      </>
    ),
  },
];


const EFFECTIVE_DATE = "11 October 2026";
const LAST_UPDATED = "11 October 2026";

export default function TermsAndConditionsPage() {
  return (
    <main>
      <Hero
        breadcrumb="Terms & Conditions"
        badge="Legal"
        title="Terms &"
        highlightedTitle="Conditions"
        description="Please read these Terms & Conditions carefully before using the TEKNOVIA website or engaging with our services."
        effectiveDate={EFFECTIVE_DATE}
        lastUpdated={LAST_UPDATED}
        // image="/terms-and-conditions.png"
      />

      <Intro
        label="Terms of Use"
        description="These terms govern your access to and use of the TEKNOVIA website and the services, information, content, and other offerings made available through it."
        message={
          <>
            Welcome to TEKNOVIA Technologies Private Limited
            (&quot;TEKNOVIA&quot;, &quot;Company&quot;, &quot;we&quot;,
            &quot;us&quot;, or &quot;our&quot;). By accessing or using this
            Website, you agree to be bound by these Terms & Conditions. If you
            do not agree with any part of these Terms, please discontinue use
            of the Website.
          </>
        }
      />

      <Content
        sections={sections}
        lastUpdated={LAST_UPDATED}
      />
    </main>
  );
}