# Teknovia Technologies — Master Project Documentation

> **Official comprehensive architectural, development, and operational documentation for the Teknovia Technologies enterprise platform.**

---

## 1. Executive Overview

**Teknovia Technologies** is a modern, enterprise-grade technology and digital transformation company offering end-to-end software engineering, cloud architecture, digital marketing, search engine optimization (SEO), and specialized industry solutions (EduTech & eCommerce).

This web platform serves as the primary digital interface for Teknovia, providing:
- High-converting service showcases and interactive domain exploration.
- Transparent engagement models and enterprise security/trust disclosures.
- A fully integrated, serverless recruitment portal with an HR management dashboard.
- Dynamic contact and consultation scheduling systems.

---

## 2. Technology Stack & Frameworks

| Layer | Technology | Version / Specification | Purpose |
| :--- | :--- | :--- | :--- |
| **Framework** | [Next.js](https://nextjs.org/) | `16.3.5` (App Router) | Server-Side Rendering (SSR), Static Site Generation (SSG), and Serverless API routes |
| **Bundler** | Turbopack | Next.js Native | Sub-second compilation and hot module reloading |
| **Language** | TypeScript | `v5+` (Strict Mode) | End-to-end type safety across data stores and components |
| **UI Library** | React | `19.0.0` | Reactive component architecture and concurrent features |
| **Styling** | Tailwind CSS | `v4.x` | Modern utility-first responsive styling with custom teal branding (`#0D9488`) |
| **Typography** | Google Fonts | `Manrope` (Body) + `Space Grotesk` (Headings) | Clean, authoritative modern typography |
| **Animations** | Motion (`motion/react`) | `v12.x` | Hardware-accelerated entrance reveals and reduced-motion fallbacks |
| **Icons** | Lucide React | `v0.5+` | Clean, lightweight SVG icon system |
| **Data Store** | Google Apps Script + Sheets | Serverless REST WebApp | Zero-cost serverless database for job openings, applications, and enquiries |

---

## 3. Directory Structure & Architecture

```plaintext
teknovia/
├── app/                                # Next.js App Router (Pages, Layouts & API)
│   ├── layout.tsx                      # Root HTML layout with Navbar & Footer
│   ├── page.tsx                        # Home page
│   ├── sitemap.ts                      # Dynamic XML sitemap generator
│   ├── robots.ts                       # Search engine crawler instructions
│   ├── corporate/                      # About Teknovia & Leadership
│   ├── services/                       # Comprehensive Services Catalog
│   ├── contact/                        # Contact & Consultation Form
│   ├── faq/                            # Frequently Asked Questions
│   ├── industries/                     # Industries We Serve (Interactive Tabs)
│   ├── engagement-models/              # Partnerships & Engagement Frameworks
│   ├── security/                       # Security & Enterprise Trust Center
│   ├── software-services/              # Software Engineering Hub & 5 Sub-services
│   ├── digital-edge/                   # Digital Marketing Hub & 5 Sub-services
│   ├── ecommerce-solutions/            # eCommerce & Marketplace Platform
│   ├── edtech-solution/                # EduTech & LMS Platform
│   ├── careers/                        # Careers Hub & Dynamic Application Flows
│   │   ├── [slug]/                     # Dynamic Job Detail Page
│   │   │   └── apply/                  # Dynamic Multi-step Job Application
│   │   └── admin/                      # Protected HR Management Dashboard
│   ├── blog/                           # Tech & Marketing Articles
│   ├── privacy-policy/                 # DPDP Act 2023 & GDPR Disclosures
│   ├── terms-and-conditions/           # Contractual Terms of Service
│   ├── disclaimer/                     # Statutory Disclaimers
│   ├── cookie-policy/                  # Cookie Taxonomy & Tracking Notice
│   └── api/                            # Serverless Backend Endpoints
│       └── careers/
│           ├── openings/               # Public openings cache
│           ├── apply/                  # Job application dispatcher
│           └── admin/                  # Admin authentication & opening CRUD
├── components/                         # Modular Reusable React Components
│   ├── ui/                             # Design System (Container, SectionHeading, Card2, Button)
│   ├── layout/                         # Header, Navbar, Footer
│   ├── home/                           # Home page modular sections
│   ├── careers/                        # Careers components & admin modals
│   ├── industries/                     # Interactive industry tabs
│   ├── engagement-models/              # Engagement models & comparison tables
│   ├── security/                       # Trust center & security safeguards
│   └── animations/                     # Motion reveal wrappers
├── lib/                                # Data models, stores, and utilities
│   ├── data/                           # Static & dynamic datasets
│   │   ├── openings-store.ts           # Central openings data engine
│   │   ├── security-data.ts            # Security pillars & standards
│   │   ├── engagement-models-data.ts   # Partnership tiers & criteria
│   │   └── footer.ts                   # Navigation link structures
│   ├── utils.ts                        # Styling & classnames helpers
│   └── cms-blog.ts                     # Blog fetching & normalization
├── public/                             # Static images, icons, and branding assets
├── scripts/                            # Operational automation
│   └── google-apps-script.js           # Production Google Apps Script webhook code
├── next.config.ts                      # Next.js configuration & image domains
├── package.json                        # Dependencies and build scripts
└── tsconfig.json                       # TypeScript compiler options
```

---

## 4. Complete Route & Page Directory

The application compiles into **39 production routes**:

### 4.1 Core Corporate & Services
| Route | Page Title | Primary Component | Purpose |
| :--- | :--- | :--- | :--- |
| `/` | **Home** | `app/page.tsx` | Main landing page, hero value proposition, ecosystem overview, and social proof. |
| `/corporate` | **About Teknovia** | `components/corporate/` | Company heritage, leadership team, core engineering values, and mission. |
| `/services` | **Our Services** | `components/services/` | Master catalog of software, digital marketing, eCommerce, and EduTech capabilities. |
| `/contact` | **Contact Us** | `components/contact/` | Tabbed inquiry form (`?tab=message`, `callback`, `enquiry`), office address, and contact links. |
| `/faq` | **Frequently Asked Questions** | `components/FAQ.tsx` | Categorized accordion FAQs covering development, marketing, pricing, and security. |
| `/industries` | **Industries We Serve** | `components/industries/IndustriesGrid.tsx` | Interactive tabbed showcase across 6 key industry verticals. |
| `/engagement-models` | **Engagement Models** | `components/engagement-models/EngagementView.tsx` | Dedicated pods, fixed-scope delivery, retainers, comparison matrix, and onboarding steps. |
| `/security` | **Trust & Security** | `components/security/SecurityView.tsx` | 4 Pillars of security, engineering rigor, disclosure program, and CTO FAQs. |

### 4.2 Software Services Engineering Hub
| Route | Service Focus | Key Capabilities Covered |
| :--- | :--- | :--- |
| `/software-services` | **Software Hub** | Overview of custom development, architecture philosophy, and 6D delivery model. |
| `/software-services/enterprise-software-solution` | **Enterprise Solutions** | Custom ERPs, workflow automation, legacy system modernization, and secure integrations. |
| `/software-services/web-application-development` | **Web Applications** | High-performance Next.js web applications, client portals, and progressive web apps. |
| `/software-services/mobile-application-development` | **Mobile Apps** | Native iOS, Android, and cross-platform Flutter / React Native applications. |
| `/software-services/software-product` | **SaaS Engineering** | Multi-tenant SaaS architectures, subscription billing, and cloud-native systems. |
| `/software-services/iot-development` | **IoT Solutions** | Smart device integration, telemetry dashboards, firmware, and edge computing. |

### 4.3 Digital Edge (Marketing & SEO) Hub
| Route | Service Focus | Key Capabilities Covered |
| :--- | :--- | :--- |
| `/digital-edge` | **Digital Edge Hub** | Full-funnel digital strategy, brand positioning, and channel overviews. |
| `/digital-edge/web-seo` | **Technical Web SEO** | Keyword ranking, on-page architecture, link building, and Core Web Vitals optimization. |
| `/digital-edge/local-seo` | **Local SEO** | Google Business Profile optimization, local citations, and geo-targeted traffic. |
| `/digital-edge/social-media-optimization` | **Social Media (SMO)** | Multi-channel social positioning, creative campaigns, and audience engagement. |
| `/digital-edge/b2b-marketing` | **B2B Marketing** | Account-Based Marketing (ABM), LinkedIn campaigns, and high-value lead generation. |
| `/digital-edge/whatsapp-marketing` | **WhatsApp Marketing** | Official WhatsApp Business API setup, broadcast campaigns, and automated bots. |

### 4.4 Specialized Industry Platforms
| Route | Platform Focus | Key Features |
| :--- | :--- | :--- |
| `/ecommerce-solutions` | **eCommerce & Marketplace** | Custom headless storefronts, Shopify, marketplace integrations, and checkout flows. |
| `/edtech-solution` | **EduTech & E-Learning** | Interactive LMS platforms, student portals, course builders, and assessments. |

### 4.5 Careers & Recruitment Portal
| Route | Access | Key Features |
| :--- | :--- | :--- |
| `/careers` | Public | Live openings list (jobs & internships), work culture (`Card2`), perks, and hiring FAQs. |
| `/careers/[slug]` | Public *(Dynamic)* | Individual role detail page, responsibilities, requirements, and compensation. |
| `/careers/[slug]/apply` | Public *(Dynamic)* | 3-step application form with degree dropdowns, CTC inputs, and PDF resume upload. |
| `/careers/admin` | Protected | HR authentication, opening creation modal, and instant status toggling (Active/Inactive). |

### 4.6 Legal, Statutory & Compliance
| Route | Scope |
| :--- | :--- |
| `/privacy-policy` | Indian DPDP Act 2023 & GDPR statutory compliance, consent handling, and user rights. |
| `/terms-and-conditions` | Contractual terms of engagement, code ownership, acceptable use, and warranties. |
| `/disclaimer` | Warranties disclaimer, project estimates disclosure, and external link policies. |
| `/cookie-policy` | Cookie taxonomy, analytics tracking declarations, and browser management instructions. |

---

## 5. UI Design System & Reusable Components

All layouts strictly adhere to the following design rules:
- **Maximum Width**: `Container` constraints content to `1320px` (`max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8`).
- **Brand Colors**:
  - `primary`: `#0D9488` (Teal-600)
  - `primary-dark`: `#0F766E` (Teal-700)
  - `primary-light`: `#14B8A6` (Teal-500)
  - `background`: `#FAFAFA` (Slate-50)
- **Reusable Core Components**:
  1. `<Container>`: Standard responsive wrapper for consistent page widths.
  2. `<SectionHeading>`: Unified section header supporting 4 layouts:
     - `variant="centered"`: Used for primary content sections.
     - `variant="left"`: Used for standard text-aligned introductions.
     - `variant="split"`: Headline on the left, descriptive paragraph on the right.
     - `variant="sticky"`: Sticky sidebar heading alongside scrolling accordion items.
  3. `<Card2>`: Standard high-impact feature card used across Careers Culture, Engineering Rigor, and Trust & Protections:
     ```tsx
     <Card2
       icon={item.icon}
       title={item.title}
       description={item.description}
       circle={item.circle}
       bar={item.bar}
     />
     ```
  4. `<BackgroundHero>`: Header banner with breadcrumbs, glowing background art, and responsive title.
  5. `<CTA>`: Universal pre-footer call-to-action banner with proposal request triggers.

---

## 6. Dynamic Backend & Google Apps Script Engine

Teknovia uses a serverless Google Apps Script backend (`scripts/google-apps-script.js`) connected to Google Sheets and Google Drive. This provides a resilient, zero-maintenance database.

### 6.1 Supported Form Types & Actions
1. `createOpening`: Creates a new job/internship opening in the "Job Openings" sheet.
2. `toggleOpeningStatus`: Toggles opening visibility between `Active` and `Inactive` in Column 16.
3. `getOpeningsList`: Returns all active openings (or all openings when queried by HR).
4. `careerApplication`: Processes job applications, parses base64-encoded PDF resumes, saves the file into a dedicated Google Drive folder, and appends a row with the direct Drive link into the "Career Applications" sheet.
5. `contact` / `message` / `callback` / `enquiry`: Appends client lead details into the "Contact Submissions" sheet.

### 6.2 Status Toggle & Cache Invalidation
- Status toggles in `/careers/admin` dispatch an awaited POST request to Google Apps Script.
- The Next.js API route utilizes `export const dynamic = "force-dynamic"` and `export const revalidate = 0` to prevent stale caching.
- Recent admin status changes are overlaid in memory to guarantee immediate persistence across cold reloads.

---

## 7. Security & Privacy Architecture

1. **Authentication**:
   - HR Admin dashboard uses cryptographically signed session tokens verified via server-side HTTP headers.
   - Admin passwords are never exposed to client-side bundles; verified via `/api/careers/admin/auth`.
2. **Data Privacy (DPDP Act 2023 & GDPR)**:
   - Zero third-party tracker leakage.
   - Resumes uploaded by candidates are stored in restricted private Google Drive folders accessible only by authorized personnel.
3. **Application Security (OWASP Top 10)**:
   - Dynamic Content Security Policies (CSP) configured in Next.js runtime.
   - Strict TypeScript mode eliminating null-pointer and runtime memory exceptions.
   - Automated input sanitization preventing Cross-Site Scripting (XSS) and SQL Injection (SQLi).

---

## 8. Environment Variables

Configure the following variables in `.env.local` for development and in your hosting dashboard (Vercel / Netlify / AWS) for production:

```bash
# Public Base URL for Canonical Tags & Sitemaps
NEXT_PUBLIC_BASE_URL="https://www.teknovia.in"

# Production Google Apps Script WebApp URL
GOOGLE_SCRIPT_WEBAPP_URL="https://script.google.com/macros/s/AKfycb.../exec"

# HR Careers Admin Dashboard Password
CAREERS_ADMIN_PASSWORD="your-secure-admin-password"

# Session Salt for Admin Token Generation
ADMIN_SESSION_SECRET="your-cryptographic-salt-key"
```

---

## 9. Build, Lint & Deployment Commands

```bash
# Install dependencies
npm install

# Run local development server (Turbopack)
npm run dev

# Run ESLint validation
npm run lint

# Compile optimized production build
npm run build

# Start production server
npm run start
```

---

## 10. Summary Checklist for Updates

- **Adding a new Job Opening**: Open `/careers/admin`, sign in with your admin code, click **"Post New Opening"**, fill in the details, and submit. It instantly reflects on `/careers` and syncs to Google Sheets.
- **Adding a new Service Page**: Create the route under `app/software-services/` or `app/digital-edge/`, add the link into `lib/data/footer.ts`, and register the route in `app/sitemap.ts`.
- **Modifying Legal Terms**: Update `app/privacy-policy/page.tsx` or `app/terms-and-conditions/page.tsx`.
