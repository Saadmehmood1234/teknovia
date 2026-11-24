export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.teknovia.in/#organization",
        name: "Teknovia Technologies",
        alternateName: "Teknovia Technologies Private Limited",
        url: "https://www.teknovia.in",
        logo: {
          "@type": "ImageObject",
          url: "https://www.teknovia.in/teknovia-logo.png",
          caption: "Teknovia Technologies Logo",
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+91-97129-80864",
            contactType: "customer service",
            areaServed: "IN",
            availableLanguage: ["English", "Hindi"],
          },
          {
            "@type": "ContactPoint",
            telephone: "+91-98970-53555",
            contactType: "sales",
            areaServed: "IN",
            availableLanguage: ["English", "Hindi"],
          },
        ],
        sameAs: [
          "https://www.linkedin.com/company/teknovia-tech",
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.teknovia.in/#localbusiness",
        name: "Teknovia Technologies",
        image: "https://www.teknovia.in/teknovia-logo.png",
        telephone: "+91-97129-80864",
        email: "info@teknovia.in",
        url: "https://www.teknovia.in",
        address: {
          "@type": "PostalAddress",
          streetAddress: "CLR Complex, Sector - 149",
          addressLocality: "Noida",
          addressRegion: "Uttar Pradesh",
          postalCode: "201310",
          addressCountry: "IN",
        },
        priceRange: "$$",
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:30",
            closes: "18:30",
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://www.teknovia.in/#website",
        url: "https://www.teknovia.in",
        name: "Teknovia Technologies",
        description:
          "Software Development and Digital Marketing Company offering custom software, web and mobile apps, SaaS, eCommerce, EdTech, and SEO solutions.",
        publisher: {
          "@id": "https://www.teknovia.in/#organization",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
