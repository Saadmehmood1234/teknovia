import { Content } from "@/components/policies/Content";
import { Hero } from "@/components/policies/Hero";
import { Intro } from "@/components/policies/Intro";
import Link from "next/link";
export const metadata = {
  title: "Privacy Policy | TEKNOVIA Technologies",
  description:
    "Learn how TEKNOVIA Technologies collects, uses, protects, stores, and handles personal information when you use our website or communicate with us.",
};

const sections = [
  {
    id: "information-we-collect",
    number: "01",
    title: "Information We Collect",
    content: (
      <>
        <p>
          Depending on how you interact with our Website, we may collect the
          following information.
        </p>

        <h3>1.1 Information You Provide</h3>

        <p>
          When you contact us, submit an enquiry, request a consultation,
          apply for a service, or communicate with us, we may collect
          information such as:
        </p>

        <ul>
          <li>Full name</li>
          <li>Company or organization name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Business address</li>
          <li>Job title or designation</li>
          <li>Service requirements or project details</li>
          <li>Information included in your message or enquiry</li>
          <li>Documents or files voluntarily submitted by you</li>
          <li>Any other information you choose to provide</li>
        </ul>

        <p>
          You should avoid submitting sensitive personal information unless it
          is specifically required and there is an appropriate reason to do so.
        </p>

        <h3>1.2 Information Collected Automatically</h3>

        <p>
          When you access our Website, certain technical information may be
          collected automatically, including:
        </p>

        <ul>
          <li>IP address</li>
          <li>Browser type and version</li>
          <li>Device type</li>
          <li>Operating system</li>
          <li>Approximate geographic location</li>
          <li>Pages visited</li>
          <li>Time spent on pages</li>
          <li>Referring website or source</li>
          <li>Website interaction and usage information</li>
          <li>Date and time of access</li>
        </ul>

        <p>
          This information may be collected through server logs, cookies,
          analytics tools, and similar technologies.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use-information",
    number: "02",
    title: "How We Use Your Information",
    content: (
      <>
        <p>TEKNOVIA may use the information collected to:</p>

        <ul>
          <li>Respond to enquiries and requests.</li>
          <li>Contact you regarding our services.</li>
          <li>Understand your business or project requirements.</li>
          <li>Prepare proposals, quotations, or service information.</li>
          <li>Provide and improve our products and services.</li>
          <li>
            Communicate regarding ongoing or potential business relationships.
          </li>
          <li>Provide customer support.</li>
          <li>
            Improve Website performance, functionality, and user experience.
          </li>
          <li>Understand Website usage and visitor trends.</li>
          <li>Conduct marketing and promotional activities where permitted.</li>
          <li>
            Maintain Website security and prevent misuse, fraud, or
            unauthorized activity.
          </li>
          <li>
            Comply with applicable legal and regulatory requirements.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "communication-marketing",
    number: "03",
    title: "Communication and Marketing",
    content: (
      <>
        <p>
          If you provide your contact information, TEKNOVIA may contact you
          regarding enquiries, services, updates, offers, products, or other
          business-related information.
        </p>

        <p>
          Where required by applicable law, we will obtain appropriate consent
          before sending promotional communications.
        </p>

        <p>
          You may request to stop receiving promotional communications by
          contacting us or using an available unsubscribe mechanism.
        </p>

        <p>
          Please note that even after opting out of promotional communications,
          we may continue to send essential service-related or transactional
          communications where necessary.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    number: "04",
    title: "Cookies and Similar Technologies",
    content: (
      <>
        <p>
          Our Website may use cookies and similar technologies to improve
          functionality, understand Website usage, remember preferences, and
          support analytics or marketing activities.
        </p>

        <p>Cookies may be used for purposes such as:</p>

        <ul>
          <li>Essential Website functionality</li>
          <li>Security</li>
          <li>Performance monitoring</li>
          <li>Analytics</li>
          <li>User preferences</li>
          <li>Marketing and advertising, where applicable</li>
        </ul>

        <p>
          You may configure your browser to block or delete cookies. However,
          disabling certain cookies may affect Website functionality.
        </p>

        <p>
          Where required by applicable law, we may provide additional cookie
          controls or consent mechanisms.
        </p>
      </>
    ),
  },
  {
    id: "analytics",
    number: "05",
    title: "Analytics",
    content: (
      <>
        <p>
          TEKNOVIA may use third-party analytics services to understand how
          visitors interact with the Website.
        </p>

        <p>
          These services may collect information such as pages visited, device
          information, approximate location, referral sources, and Website
          interactions.
        </p>

        <p>
          Analytics information is generally used in aggregated or statistical
          form to improve our Website, services, content, and marketing
          activities.
        </p>
      </>
    ),
  },
  {
    id: "third-party-services",
    number: "06",
    title: "Third-Party Services",
    content: (
      <>
        <p>
          Our Website or services may use or link to third-party platforms and
          services, including:
        </p>

        <ul>
          <li>Google services</li>
          <li>Microsoft services</li>
          <li>Social media platforms</li>
          <li>Payment gateways</li>
          <li>Cloud and hosting providers</li>
          <li>Communication platforms</li>
          <li>Analytics and advertising platforms</li>
          <li>CRM and marketing tools</li>
          <li>Other technology or service providers</li>
        </ul>

        <p>
          Third-party providers may process information according to their own
          privacy policies and terms.
        </p>

        <p>
          TEKNOVIA does not control the privacy practices of third-party
          websites or services and recommends reviewing their respective
          privacy policies.
        </p>
      </>
    ),
  },
  {
    id: "sharing-information",
    number: "07",
    title: "Sharing of Information",
    content: (
      <>
        <p>
          TEKNOVIA does not sell or rent your personal information for monetary
          consideration.
        </p>

        <p>
          We may share information where reasonably necessary with:
        </p>

        <ul>
          <li>Employees and authorized personnel.</li>
          <li>Group companies or business partners, where applicable.</li>
          <li>Technology and service providers.</li>
          <li>Hosting, cloud, analytics, and communication providers.</li>
          <li>Professional advisors.</li>
          <li>
            Government authorities or regulators where legally required.
          </li>
          <li>
            Other parties where disclosure is necessary to protect our rights,
            security, or legal interests.
          </li>
        </ul>

        <p>
          We seek to ensure that information shared with service providers is
          handled appropriately and only for legitimate business purposes.
        </p>
      </>
    ),
  },
  {
    id: "data-security",
    number: "08",
    title: "Data Security",
    content: (
      <>
        <p>
          TEKNOVIA takes reasonable technical and organizational measures to
          protect personal information against unauthorized access, misuse,
          alteration, disclosure, loss, or destruction.
        </p>

        <p>
          However, no internet transmission or electronic storage system can be
          guaranteed to be completely secure.
        </p>

        <p>
          Accordingly, while we take reasonable measures to protect your
          information, we cannot guarantee absolute security.
        </p>
      </>
    ),
  },
  {
    id: "data-retention",
    number: "09",
    title: "Data Retention",
    content: (
      <>
        <p>
          We retain personal information only for as long as reasonably
          necessary for the purposes described in this Privacy Policy,
          including providing services, maintaining business records,
          resolving disputes, enforcing agreements, complying with legal
          obligations, and protecting our legitimate interests.
        </p>

        <p>
          When information is no longer required, we may securely delete,
          anonymize, or otherwise dispose of it in accordance with applicable
          requirements.
        </p>
      </>
    ),
  },
  {
    id: "privacy-rights",
    number: "10",
    title: "Your Privacy Rights",
    content: (
      <>
        <p>
          Depending on applicable law, you may have rights relating to your
          personal information, which may include the right to:
        </p>

        <ul>
          <li>
            Request information about the processing of your personal data.
          </li>
          <li>
            Request correction of inaccurate or incomplete information.
          </li>
          <li>
            Request deletion of personal information where legally applicable.
          </li>
          <li>
            Withdraw consent where processing is based on consent.
          </li>
          <li>
            Request information regarding how your personal data is handled.
          </li>
          <li>Raise a privacy-related complaint or grievance.</li>
        </ul>

        <p>
          Requests may be subject to verification and applicable legal
          requirements.
        </p>

        <p>
          To exercise an applicable privacy right, please contact us using the
          details provided in the Contact Us section.
        </p>
      </>
    ),
  },
  {
    id: "childrens-privacy",
    number: "11",
    title: "Children's Privacy",
    content: (
      <>
        <p>
          Our Website is intended primarily for businesses, professionals,
          organizations, and general users.
        </p>

        <p>
          We do not knowingly collect personal information from children where
          such collection is prohibited by applicable law.
        </p>

        <p>
          If you believe that a child has provided personal information to us
          without appropriate authorization, please contact us so that we can
          take appropriate action.
        </p>
      </>
    ),
  },
  {
    id: "international-transfers",
    number: "12",
    title: "International Data Transfers",
    content: (
      <>
        <p>
          Some third-party service providers used by TEKNOVIA may process or
          store information in locations outside India.
        </p>

        <p>
          Where personal information is transferred across jurisdictions,
          TEKNOVIA will take reasonable steps to ensure that such processing is
          carried out in accordance with applicable laws and contractual or
          organizational safeguards, where required.
        </p>
      </>
    ),
  },
  {
    id: "third-party-websites",
    number: "13",
    title: "Links to Third-Party Websites",
    content: (
      <>
        <p>
          Our Website may contain links to websites, applications, or services
          operated by third parties.
        </p>

        <p>
          This Privacy Policy does not apply to those third-party websites.
        </p>

        <p>
          TEKNOVIA is not responsible for the privacy practices, content, or
          security of third-party websites. We encourage you to review their
          privacy policies before providing personal information.
        </p>
      </>
    ),
  },
  {
    id: "business-transactions",
    number: "14",
    title: "Business Transactions",
    content: (
      <>
        <p>
          If TEKNOVIA undergoes a merger, acquisition, restructuring, sale of
          assets, investment, or other business transaction, personal
          information may be transferred as part of that transaction, subject
          to applicable law and appropriate safeguards.
        </p>
      </>
    ),
  },
  {
    id: "changes-policy",
    number: "15",
    title: "Changes to This Privacy Policy",
    content: (
      <>
        <p>
          TEKNOVIA may update this Privacy Policy from time to time to reflect
          changes in our services, technology, business practices, or applicable
          laws.
        </p>

        <p>
          The updated Privacy Policy will be published on this page along with
          the revised Last Updated date.
        </p>

        <p>We encourage you to review this page periodically.</p>
      </>
    ),
  },
  {
    id: "applicable-law",
    number: "16",
    title: "Applicable Law",
    content: (
      <>
        <p>
          This Privacy Policy shall be governed by and interpreted in
          accordance with the applicable laws of <strong>India</strong>,
          subject to any mandatory rights or protections available to
          individuals under applicable law.
        </p>
      </>
    ),
  },
  {
    id: "contact-us",
    number: "17",
    title: "Contact Us",
    content: (
      <>
        <p>
          If you have any questions, concerns, requests, or complaints
          regarding this Privacy Policy or the handling of your personal
          information, please contact us:
        </p>

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
              <span className="font-semibold text-gray-900">Phone:</span>{" "}
              Mr. Vishal Raghav
            </p>

            <p>
              <span className="font-semibold text-gray-900">
                Registered Office:
              </span>{" "}
              F3-104, Eco Village 2, Greater Noida West, India
            </p>
          </div>
        </div>

        <div className="mt-5 rounded-xl border border-gray-200 bg-gray-50 p-5 sm:p-6">
          <p className="!mt-0 font-heading text-base font-semibold text-gray-900">
            Privacy / Grievance Contact
          </p>

          <p className="mt-3">
            For privacy-related requests or complaints, please contact:
          </p>

          <div className="mt-4 space-y-2 text-sm">
            <p>
              <span className="font-semibold text-gray-900">Email:</span>{" "}
              <a
                href="mailto:vipin@teknovia.in"
                className="text-primary transition-colors hover:text-primary-dark"
              >
                vipin@teknovia.in
              </a>
            </p>

            <p>
              <span className="font-semibold text-gray-900">
                Contact Person:
              </span>{" "}
              Mr. Vipin Gehlot
            </p>
          </div>
        </div>

        <p className="mt-5">
          We will review and respond to privacy-related requests in accordance
          with applicable law.
        </p>
      </>
    ),
  },
];

const EFFECTIVE_DATE = "11 October 2026";
const LAST_UPDATED = "11 October 2026";


export default function PrivacyPolicyPage() {
  return (
    <main>
      <Hero
        breadcrumb="Privacy Policy"
        badge="Privacy"
        title="Privacy"
        highlightedTitle="Policy"
        description="Learn how TEKNOVIA collects, uses, protects, stores, and handles your personal information when you use our Website or communicate with us."
        effectiveDate={EFFECTIVE_DATE}
        lastUpdated={LAST_UPDATED}
      />

      <Intro
        label="Your Privacy Matters"
        description="This Privacy Policy explains how we collect, use, disclose, store, and protect information when you visit or use the TEKNOVIA Website or communicate with us through it."
        message={
          <>
            TEKNOVIA Technologies Private Limited respects your privacy and is
            committed to protecting the personal information you share with us.
            By using the Website, you acknowledge the practices described in
            this Privacy Policy.
          </>
        }
      />

      <Content
        sections={sections}
        lastUpdated={LAST_UPDATED}
        ctaTitle="Have a privacy-related question?"
        ctaDescription="Contact the TEKNOVIA team regarding your personal information or privacy requests."
      />
    </main>
  );
}