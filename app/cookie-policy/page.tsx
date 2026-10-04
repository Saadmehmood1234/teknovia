import Link from "next/link";
import { Hero } from "@/components/policies/Hero";
import { Intro } from "@/components/policies/Intro";
import { Content } from "@/components/policies/Content";

export const metadata = {
  title: "Cookie Policy | TEKNOVIA Technologies",
  description:
    "Learn how TEKNOVIA Technologies uses cookies and similar technologies on its website.",
};

const sections = [
  {
    id: "what-are-cookies",
    number: "01",
    title: "What Are Cookies?",
    content: (
      <>
        <p>
          Cookies are small text files placed on your device when you visit a
          website.
        </p>

        <p>
          They help websites remember information about your visit, understand
          how users interact with the website, improve functionality, and
          provide a better user experience.
        </p>

        <p>Cookies may be:</p>

        <ul>
          <li>
            <strong>Session Cookies</strong> – deleted when you close your
            browser.
          </li>
          <li>
            <strong>Persistent Cookies</strong> – remain on your device for a
            specified period or until deleted.
          </li>
          <li>
            <strong>First-Party Cookies</strong> – placed directly by TEKNOVIA.
          </li>
          <li>
            <strong>Third-Party Cookies</strong> – placed by third-party
            services used on the Website.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "why-we-use-cookies",
    number: "02",
    title: "Why We Use Cookies",
    content: (
      <>
        <p>
          TEKNOVIA may use cookies and similar technologies for the following
          purposes:
        </p>

        <h3>2.1 Strictly Necessary Cookies</h3>

        <p>These cookies are required for the Website to function properly.</p>

        <p>They may support:</p>

        <ul>
          <li>Website navigation</li>
          <li>Security</li>
          <li>Session management</li>
          <li>Form functionality</li>
          <li>Basic technical operations</li>
        </ul>

        <p>
          These cookies generally cannot be disabled through Website cookie
          settings where they are essential for Website operation.
        </p>

        <h3>2.2 Preference Cookies</h3>

        <p>
          These cookies help remember choices and preferences made by visitors,
          such as language, region, or other Website settings.
        </p>

        <h3>2.3 Analytics and Performance Cookies</h3>

        <p>These cookies help us understand how visitors use our Website.</p>

        <p>They may provide information such as:</p>

        <ul>
          <li>Number of visitors</li>
          <li>Pages viewed</li>
          <li>Time spent on pages</li>
          <li>Traffic sources</li>
          <li>Device and browser information</li>
          <li>General Website interaction patterns</li>
        </ul>

        <p>
          We may use analytics services such as{" "}
          <strong>Google Analytics</strong> or similar technologies where
          applicable.
        </p>

        <p>
          The information collected helps us improve Website performance,
          content, navigation, and user experience.
        </p>

        <h3>2.4 Marketing and Advertising Cookies</h3>

        <p>
          Where applicable, TEKNOVIA may use marketing or advertising
          technologies to understand campaign performance and provide more
          relevant advertising.
        </p>

        <p>
          These technologies may be provided by third-party platforms such as
          search engines, social media networks, or advertising providers.
        </p>

        <p>
          Marketing cookies will be used subject to applicable consent and legal
          requirements.
        </p>
      </>
    ),
  },
  {
    id: "third-party-cookies",
    number: "03",
    title: "Third-Party Cookies",
    content: (
      <>
        <p>
          Some features or services available through the Website may be
          provided by third parties.
        </p>

        <p>
          These third parties may place their own cookies or similar
          technologies on your device.
        </p>

        <p>Examples may include:</p>

        <ul>
          <li>Google</li>
          <li>Microsoft</li>
          <li>Meta</li>
          <li>LinkedIn</li>
          <li>YouTube</li>
          <li>
            Other analytics, advertising, social media, hosting, or technology
            providers
          </li>
        </ul>

        <p>
          The use of third-party cookies is governed by the respective third
          party&apos;s privacy and cookie policies.
        </p>

        <p>
          TEKNOVIA does not control cookies placed directly by third-party
          providers.
        </p>
      </>
    ),
  },
  {
    id: "cookie-consent",
    number: "04",
    title: "Cookie Consent",
    content: (
      <>
        <p>
          Where required by applicable law, TEKNOVIA may display a cookie
          consent banner or preference mechanism when you first visit the
          Website.
        </p>

        <p>Depending on the applicable requirements, you may be able to:</p>

        <ul>
          <li>Accept cookies.</li>
          <li>Reject non-essential cookies.</li>
          <li>Select specific categories of cookies.</li>
          <li>Change your cookie preferences.</li>
        </ul>

        <p>
          Your consent choices may be stored so that we can remember your
          preferences.
        </p>
      </>
    ),
  },
  {
    id: "managing-cookies",
    number: "05",
    title: "Managing Cookies",
    content: (
      <>
        <p>You can control or delete cookies through your browser settings.</p>

        <p>Most modern browsers allow you to:</p>

        <ul>
          <li>View stored cookies.</li>
          <li>Delete existing cookies.</li>
          <li>Block cookies.</li>
          <li>Allow cookies only from selected websites.</li>
          <li>Receive notifications before cookies are stored.</li>
        </ul>

        <p>
          Please note that disabling or deleting certain cookies may affect the
          functionality, performance, or availability of some Website features.
        </p>
      </>
    ),
  },
  {
    id: "do-not-track",
    number: "06",
    title: "Do Not Track Signals",
    content: (
      <>
        <p>Some browsers provide &quot;Do Not Track&quot; settings.</p>

        <p>
          Because there is currently no universally accepted technical standard
          for responding to all Do Not Track signals, the Website may not
          respond to such signals in every circumstance.
        </p>

        <p>
          Where legally required, TEKNOVIA will comply with applicable
          requirements relating to user choices and tracking technologies.
        </p>
      </>
    ),
  },
  {
    id: "cookies-personal-information",
    number: "07",
    title: "Cookies and Personal Information",
    content: (
      <>
        <p>
          Cookies may sometimes be associated with information that can identify
          or relate to an individual.
        </p>

        <p>
          Where cookies involve personal information, TEKNOVIA will handle such
          information in accordance with our{" "}
          <Link href="/privacy-policy">Privacy Policy</Link> and applicable
          data-protection laws.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    number: "08",
    title: "Changes to This Cookie Policy",
    content: (
      <>
        <p>
          TEKNOVIA may update this Cookie Policy from time to time to reflect
          changes in:
        </p>

        <ul>
          <li>Website functionality</li>
          <li>Cookies and technologies used</li>
          <li>Third-party services</li>
          <li>Business practices</li>
          <li>Applicable laws or regulatory requirements</li>
        </ul>

        <p>
          The updated version will be published on this page with the revised
          <strong> Last Updated</strong> date.
        </p>
      </>
    ),
  },
  {
    id: "contact-us",
    number: "09",
    title: "Contact Us",
    content: (
      <>
        <p>
          If you have any questions regarding this Cookie Policy or our use of
          cookies, please contact:
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
              <span className="font-semibold text-gray-900">
                Registered Office:
              </span>{" "}
              F3-104, Eco Village 2, Greater Noida West
            </p>
          </div>
        </div>

        <div className="mt-5 rounded-xl border border-gray-200 bg-gray-50 p-5 sm:p-6">
          <p className="!mt-0 font-heading text-base font-semibold text-gray-900">
            Privacy-related Requests or Complaints
          </p>

          <p className="mt-3">
            For privacy-related requests or complaints, please contact:
          </p>

          <p className="mt-3 text-sm">
            <span className="font-semibold text-gray-900">Email:</span>{" "}
            <a
              href="mailto:vipin@teknovia.in"
              className="text-primary transition-colors hover:text-primary-dark"
            >
              vipin@teknovia.in
            </a>
          </p>
        </div>
      </>
    ),
  },
];

const EFFECTIVE_DATE = "11 October 2026";
const LAST_UPDATED = "11 October 2026";

export default function CookiePolicyPage() {
  return (
    <main>
      <Hero
        breadcrumb="Cookie Policy"
        badge="Privacy & Cookies"
        title="Cookie"
        highlightedTitle="Policy"
        description="Understand how TEKNOVIA uses cookies and similar technologies to support website functionality, analytics, preferences, and marketing activities."
        effectiveDate={EFFECTIVE_DATE}
        lastUpdated={LAST_UPDATED}
      />

      <Intro
        label="Cookie Preferences"
        description="This policy explains how TEKNOVIA uses cookies and similar technologies on our Website and how you can manage them."
        message={
          <>
            This Cookie Policy explains how TEKNOVIA Technologies Private
            Limited uses cookies and similar technologies on www.teknovia.in. By
            continuing to use the Website, you acknowledge the use of cookies as
            described in this Policy, subject to any consent requirements
            applicable under law.
          </>
        }
      />

      <Content
        sections={sections}
        lastUpdated={LAST_UPDATED}
        ctaTitle="Have a question about cookies?"
        ctaDescription="Contact the TEKNOVIA team if you have questions about our use of cookies or similar technologies."
      />
    </main>
  );
}
