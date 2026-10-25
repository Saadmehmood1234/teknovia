
https://teknovia.deva3s.xyz/software-services
https://teknovia.deva3s.xyz/software-services/enterprise-software-solution
https://teknovia.deva3s.xyz/software-services/web-application-development
https://teknovia.deva3s.xyz/software-services/mobile-application-development
https://teknovia.deva3s.xyz/software-services/software-product
https://teknovia.deva3s.xyz/digital-marketing
https://teknovia.deva3s.xyz/digital-marketing/website-development
https://teknovia.deva3s.xyz/digital-marketing/local-seo
https://teknovia.deva3s.xyz/digital-marketing/web-seo
https://teknovia.deva3s.xyz/digital-marketing/social-media-optimization
https://teknovia.deva3s.xyz/digital-marketing/whatsapp-marketing
https://teknovia.deva3s.xyz/digital-marketing/b2b-marketing
https://teknovia.deva3s.xyz/digital-marketing/influencer-marketing
https://teknovia.deva3s.xyz/ecommerce-solutions
https://teknovia.deva3s.xyz/ecommerce-solutions/jio-mart
https://teknovia.deva3s.xyz/ecommerce-solutions/shopify
https://teknovia.deva3s.xyz/edtech-solution
https://teknovia.deva3s.xyz/industries
https://teknovia.deva3s.xyz/industries/education
https://teknovia.deva3s.xyz/industries/healthcare
https://teknovia.deva3s.xyz/industries/retail-ecommerce
https://teknovia.deva3s.xyz/industries/real-estate
https://teknovia.deva3s.xyz/industries/finance-accounting
https://teknovia.deva3s.xyz/industries/manufacturing
https://teknovia.deva3s.xyz/industries/logistics-supply-chain
https://teknovia.deva3s.xyz/industries/hospitality-travel
https://teknovia.deva3s.xyz/industries/professional-services

<!-- <Link href="/contact?tab=enquiry#contact-form">
  Discuss Your Project
</Link>

Other supported URLs:
- /contact?tab=message
- /contact?tab=callback
- /contact?tab=enquiry -->


```tsx
<RevealGroup className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
  {services.map((service, index) => (
    <AnimatedCard
      key={service.title}
      direction={index % 2 === 0 ? -1 : 1}
    >
      <ServiceCard
        image={service.image}
        title={service.title}
        href={service.href}
        description={service.description}
      />
    </AnimatedCard>
  ))}
</RevealGroup>
```


### Variant 1: Centered heading
CORE SERVICE DOMAINS
Built to Help Businesses Grow, Scale, and Succeed
Comprehensive technology, digital marketing, eCommerce, EduTech, and business development solutions designed to improve efficiency, accelerate growth, and help businesses build scalable, future-ready operations.

```tsx
<SectionHeading
  variant="centered"
  badge="Core Service Domains"
  title="Built to Help Businesses Grow, Scale, and Succeed"
  description="Comprehensive technology, digital marketing, eCommerce, EduTech, and business development solutions designed to improve efficiency, accelerate growth, and help businesses build scalable, future-ready operations."
/>
```

### Variant 2: Left-aligned heading

```tsx
<SectionHeading
  variant="left"
  badge="Our Services"
  title="Explore our service areas"
  description="Software, digital marketing, eCommerce, education and industry-focused solutions, all in one place."
/>
```

### Variant 3: Split heading

SOFTWARE OFFERINGS
Explore Our Software Solutions

Flexible technology solutions designed to support businesses from early-stage growth to enterprise scale.

```tsx
<SectionHeading
  variant="split"
  badge="Software Offerings"
  eyebrow
  title="Explore Our Software Solutions"
  description="Flexible technology solutions designed to support businesses from early-stage growth to enterprise scale."
/>
```


### Variant 4: sticky heading

```tsx
<SectionHeading
  variant="sticky"
  badge="What We Build"
  title={
    <>
      Web Applications{" "}
      <span className="text-primary">We Develop</span>
    </>
  }
  subtitle="Powerful Applications. Built for Real Business Impact."
  description="From customer-facing platforms to complex enterprise systems, we develop web applications designed to solve real business challenges and create measurable value."
  titleClassName="text-white"
  subtitleClassName="text-white/85"
  divider
/>
```

## Headless Blog CMS

The `/blog` listing and `/blog/[slug]` article pages read published content from the Headless Blog CMS using server-side requests. The site key is never exposed to browser JavaScript.

Add this environment variable in Vercel (**Project → Settings → Environment Variables**) and redeploy:

```dotenv
CMS_SITE_KEY=pk_your_teknovia_website_public_key
```

The API base defaults to `https://headless-cms-api-test.onrender.com/api/v1`. If your CMS API URL changes, optionally set `CMS_API_URL` to the full API base ending in `/api/v1`. Copy the **public site key** from the CMS website settings for the Teknovia website; do not use an admin token, session cookie, or webhook secret.

Publish posts in the CMS to make them publicly visible. The blog caches API responses for up to 60 seconds. CMS post titles, excerpts, featured images, categories, rich text, SEO metadata and published slugs are read from the CMS. Draft posts are not shown by the public API.
