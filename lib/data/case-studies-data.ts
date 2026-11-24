export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  client: string;
  industry: "Manufacturing & ERP" | "eCommerce & Retail" | "Healthcare & MedTech" | "EdTech & Learning" | "FinTech & Logistics";
  service: string;
  timeline: string;
  techStack: string[];
  metrics: {
    label: string;
    value: string;
    change: string;
  }[];
  challenge: string;
  solution: string;
  architectureHighlights: string[];
  businessOutcome: string[];
  featured?: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "industrial-iot-erp-automation",
    title: "Real-Time Manufacturing ERP & Industrial Telemetry Engine",
    subtitle: "Modernizing a multi-facility manufacturing enterprise with automated assembly tracking, inventory forecasting, and real-time machine telemetry.",
    client: "Apex Precision Engineering Ltd.",
    industry: "Manufacturing & ERP",
    service: "Enterprise Software & IoT Development",
    timeline: "16 Weeks",
    techStack: ["Next.js 16", "Node.js", "PostgreSQL", "TimescaleDB", "MQTT", "AWS IoT Core", "Tailwind CSS"],
    metrics: [
      { label: "Downtime Reduction", value: "38%", change: "↓ Decrease in unplanned outages" },
      { label: "Inventory Accuracy", value: "99.4%", change: "↑ Automated batch tracking" },
      { label: "Report Generation", value: "1.2s", change: "↓ From 45 mins manual exports" },
    ],
    challenge:
      "The client operated across 3 manufacturing units with disconnected legacy desktop ERP software and manual paper-based shift logs. Machine telemetry was siloed, causing frequent stockouts, unrecorded production wastage, and delayed order fulfillment.",
    solution:
      "Teknovia engineered a centralized cloud ERP with role-based dashboards for factory floor technicians, inventory managers, and executive leadership. We integrated micro-controllers on critical CNC machines transmitting real-time vibration and temperature data over secure MQTT channels.",
    architectureHighlights: [
      "High-throughput timeseries telemetry ingestion engine handling 15,000 sensor pulses per minute.",
      "Offline-first Progressive Web App (PWA) for floor operators to record quality inspections with auto-sync.",
      "Predictive material replenishment alerts integrated with supplier communication channels via WhatsApp & email.",
    ],
    businessOutcome: [
      "Eliminated 40+ hours per week of manual data entry and invoice reconciliations.",
      "Identified and curbed material waste worth ₹42 Lakhs within the first 6 months of deployment.",
      "Achieved 99.4% production traceability meeting strict ISO 9001 compliance standards.",
    ],
    featured: true,
  },
  {
    id: "hyperlocal-ecommerce-marketplace",
    title: "High-Throughput D2C Marketplace with Sub-Second Checkout",
    subtitle: "Engineering an ultra-fast headless eCommerce platform handling 120,000+ monthly active shoppers with instant cart synchronizations.",
    client: "Zenvia Organic Living",
    industry: "eCommerce & Retail",
    service: "Web & Mobile eCommerce Engineering",
    timeline: "12 Weeks",
    techStack: ["Next.js App Router", "TypeScript", "Redis", "PostgreSQL", "Razorpay", "Tailwind CSS", "Vercel"],
    metrics: [
      { label: "Conversion Rate", value: "4.8%", change: "↑ +62% lift over Shopify" },
      { label: "LCP Load Time", value: "0.68s", change: "↓ Google Core Web Vitals 99" },
      { label: "Cart Abandonment", value: "-27%", change: "↓ 1-click checkout flow" },
    ],
    challenge:
      "The client's existing monolithic storefront suffered from 4.2-second mobile load times, frequent flash-sale checkout crashes, and rigid third-party plugin dependencies that limited custom subscription bundling.",
    solution:
      "We built a custom headless storefront on Next.js 16 App Router backed by Redis edge-caching and an automated order routing microservice. We designed a friction-free 2-step mobile checkout with unified UPI intent and saved delivery profiles.",
    architectureHighlights: [
      "Server Component edge rendering delivering sub-second Product Detail Page (PDP) loads globally.",
      "Distributed inventory locking mechanism preventing overselling during high-velocity flash sales.",
      "Automated post-purchase WhatsApp shipment tracking updates and review collections.",
    ],
    businessOutcome: [
      "Direct online revenues increased by 148% within 90 days post-relaunch.",
      "Handled Diwali peak traffic of 8,500 concurrent shoppers with zero downtime or transaction drops.",
      "Reduced monthly software licensing expenses by 35% by replacing bloated third-party plugins.",
    ],
    featured: true,
  },
  {
    id: "telehealth-clinic-management-app",
    title: "HIPAA-Aligned Telemedicine Platform & Digital Patient Records",
    subtitle: "Connecting patients with verified clinicians through end-to-end encrypted video consultations, digital prescription vaults, and smart lab bookings.",
    client: "CarePulse Health Technologies",
    industry: "Healthcare & MedTech",
    service: "Mobile App & Cloud Architecture",
    timeline: "14 Weeks",
    techStack: ["React Native", "Node.js", "WebRTC", "MongoDB", "AWS S3 (Encrypted)", "Docker"],
    metrics: [
      { label: "Active Consultations", value: "45,000+", change: "↑ Completed appointments" },
      { label: "Patient NPS", value: "91", change: "↑ App Store 4.8 Rating" },
      { label: "Prescription Delivery", value: "Instant", change: "↓ Digital QR-verified PDF" },
    ],
    challenge:
      "A multi-specialty healthcare clinic needed to modernize its remote patient consultations while strictly safeguarding sensitive personal health data, biometric records, and medical histories.",
    solution:
      "Teknovia engineered cross-platform iOS and Android apps alongside a responsive doctor web portal. The system features WebRTC peer-to-peer encrypted video, seamless digital prescription drafting, and automated appointment reminders.",
    architectureHighlights: [
      "Zero-knowledge encrypted document storage for patient laboratory test results and ultrasound scans.",
      "Integrated electronic medical records (EMR) system with automated appointment slots and calendar sync.",
      "Push notification dispatch system reminding patients of dosage schedules and follow-up reviews.",
    ],
    businessOutcome: [
      "Reduced patient clinic wait times from 45 minutes to under 5 minutes for virtual triage.",
      "Expanded client reach across Tier-2 and Tier-3 cities, increasing clinical revenue by 85%.",
      "Complied fully with Telemedicine Practice Guidelines and DPDP Act personal data regulations.",
    ],
    featured: true,
  },
  {
    id: "interactive-edtech-learning-platform",
    title: "Adaptive Learning Management System & Interactive Exam Engine",
    subtitle: "Empowering 80,000+ students with adaptive test simulations, real-time doubt resolution, and video lecture streaming.",
    client: "BrightMind Academy",
    industry: "EdTech & Learning",
    service: "Custom EdTech Solutions",
    timeline: "14 Weeks",
    techStack: ["Next.js", "React", "Python", "PostgreSQL", "Cloudflare Stream", "Tailwind CSS"],
    metrics: [
      { label: "Active Learners", value: "82,000+", change: "↑ Across 14 states" },
      { label: "Video Buffering", value: "<0.3s", change: "↓ Adaptive HLS streaming" },
      { label: "Course Completion", value: "+44%", change: "↑ Gamified milestones" },
    ],
    challenge:
      "The client relied on standard unbranded LMS tools that could not handle simultaneous proctored mock examinations or prevent unauthorized video downloads and screen recordings.",
    solution:
      "We developed a proprietary learning portal featuring dynamic watermarked video streaming, timed test engines with automated percentile evaluation, and interactive student leaderboards.",
    architectureHighlights: [
      "Dynamic DRM and on-the-fly forensic watermarking discouraging content leakage.",
      "Scalable test engine supporting 10,000 simultaneous test submissions with instantaneous scoring.",
      "Student analytics dashboards pinpointing weak chapters and recommending focused revisions.",
    ],
    businessOutcome: [
      "Platform scaled seamlessly during state-level mock entrance tests without server slowdowns.",
      "Course renewal rates jumped from 48% to 76% due to high student engagement.",
      "Protected proprietary intellectual curriculum worth an estimated ₹1.5 Crores.",
    ],
    featured: false,
  },
  {
    id: "b2b-digital-growth-engine",
    title: "Data-Driven SEO & High-Intent B2B Inbound Pipeline",
    subtitle: "Transforming organic visibility and generating qualified sales leads for a national corporate logistics provider.",
    client: "SwiftTrack Logistics Solutions",
    industry: "FinTech & Logistics",
    service: "Search & Digital Marketing (Digital Edge)",
    timeline: "6 Months Retainer",
    techStack: ["Next.js", "Schema.org", "Google Search Console", "Ahrefs", "HubSpot CRM", "Semrush"],
    metrics: [
      { label: "Organic Search Traffic", value: "+280%", change: "↑ 12k to 46k monthly visits" },
      { label: "B2B Qualified Leads", value: "3.4x", change: "↑ High-value freight RFQs" },
      { label: "Domain Authority", value: "48", change: "↑ +22 point search authority" },
    ],
    challenge:
      "A national supply chain and 3PL provider was spending heavily on pay-per-click ads with low customer lifetime values and practically zero organic search presence for high-intent logistics keywords.",
    solution:
      "Teknovia executed a technical SEO restructuring, implemented programmatically generated city-to-city freight landing pages, and optimized local Google Business Profiles across 18 regional hubs.",
    architectureHighlights: [
      "Comprehensive Core Web Vitals overhaul dropping average page weight by 65%.",
      "Structured schema markup for LogisticService, FAQs, and Breadcrumbs gaining Google Answer Boxes.",
      "Lead scoring webhook pipeline syncing form enquiries directly to sales CRM within 10 seconds.",
    ],
    businessOutcome: [
      "Captured #1 and #2 Google positions for 40+ high-intent freight and warehousing search terms.",
      "Reduced cost-per-acquisition (CPA) by 62% by substituting paid ads with organic inbound inquiries.",
      "Generated over ₹2.4 Crores in verified pipeline opportunities within two quarters.",
    ],
    featured: false,
  },
];
