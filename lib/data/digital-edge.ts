import {
  BarChart3,
  Bot,
  Boxes,
  Building2,
  CalendarClock,
  ChartNoAxesCombined,
  CheckCircle2,
  ClipboardCheck,
  Code2,
  FileSearch,
  FileText,
  Globe2,
  Handshake,
  Layers3,
  Mail,
  MapPin,
  Megaphone,
  MessageCircleQuestion,
  MessageSquareQuote,
  MessageSquareText,
  MessagesSquare,
  MousePointerClick,
  Network,
  PhoneCall,
  Search,
  Send,
  Settings2,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  UserRoundCheck,
  Users,
  UsersRound,
} from "lucide-react";
import { BsGoogle, BsLinkedin } from "react-icons/bs";

export const localSeoServices = [
  {
    title: "Google Business Profile Setup & Optimization",
    description:
      "Set up and optimize your Google Business Profile for stronger visibility, trust, and local discoverability.",
    icon: Building2,
    txtColor: "text-[#f5544c]",
    iconColor: "bg-[#f5544c]/10",
    bgColor: "bg-[#f5544c]/5",
    borderColor:"border-[#f5544c]/20",
  },
  {
    title: "Business Information Management",
    description:
      "Maintain accurate and consistent Name, Address, and Phone information across Google and local directories.",
    icon: Settings2,
    txtColor: "text-[#5952eb]",
    iconColor: "bg-[#5952eb]/10",
    bgColor: "bg-[#5952eb]/5",
    borderColor:"border-[#5952eb]/20",
  },
  {
    title: "Local Keyword Research",
    description:
      "Identify high-intent local keywords and search terms customers use to find your business.",
    icon: Search,
    txtColor: "text-[#913a4b]",
    iconColor: "bg-[#913a4b]/10",
    bgColor: "bg-[#913a4b]/5",
    borderColor:"border-[#913a4b]/20",
  },
  {
    title: "Google Maps Ranking Optimization",
    description:
      "Optimize your local presence to improve visibility in Google Maps and Map Pack searches.",
    icon: MapPin,
    txtColor: "text-[#19b093]",
    iconColor: "bg-[#19b093]/10",
    bgColor: "bg-[#19b093]/5",
    borderColor:"border-[#19b093]/20",
  },
  {
    title: "Business Category & Service Optimization",
    description:
      "Optimize categories, services, and business attributes so Google understands your business correctly.",
    icon: Target,
    txtColor: "text-[#5f1c9e]",
    iconColor: "bg-[#5f1c9e]/10",
    bgColor: "bg-[#5f1c9e]/5",
    borderColor:"border-[#5f1c9e]/20",
  },
  {
    title: "Review & Reputation Management",
    description:
      "Improve your online reputation through review monitoring, response management, and customer engagement.",
    icon: MessageSquareQuote,
    txtColor: "text-[#e02f85]",
    iconColor: "bg-[#e02f85]/10",
    bgColor: "bg-[#e02f85]/5",
    borderColor:"border-[#e02f85]/20",
  },
  {
    title: "Local Citation Building",
    description:
      "Build accurate business citations across relevant local directories and industry platforms.",
    icon: Globe2,
    txtColor: "text-[#db25b0]",
    iconColor: "bg-[#db25b0]/10",
    bgColor: "bg-[#db25b0]/5",
    borderColor:"border-[#db25b0]/20",
  },
  {
    title: "Location-Based Content Optimization",
    description:
      "Create location-focused content targeting relevant cities, neighborhoods, and local search intent.",
    icon: FileSearch,
    txtColor: "text-[#7d1eeb]",
    iconColor: "bg-[#7d1eeb]/10",
    bgColor: "bg-[#7d1eeb]/5",
    borderColor:"border-[#7d1eeb]/20",
  },
  {
    title: "Local Landing Page Creation",
    description:
      "Create high-converting landing pages tailored to specific locations and services.",
    icon: MousePointerClick,
    txtColor: "text-[#148bd9]",
    iconColor: "bg-[#148bd9]/10",
    bgColor: "bg-[#148bd9]/5",
    borderColor:"border-[#148bd9]/20",
  },
  {
    title: "Competitor Analysis",
    description:
      "Analyze local competitors to uncover ranking gaps, keyword opportunities, and growth opportunities.",
    icon: ChartNoAxesCombined,
    txtColor: "text-[#067d48]",
    iconColor: "bg-[#067d48]/10",
    bgColor: "bg-[#067d48]/5",
    borderColor:"border-[#067d48]/20",
  },
  {
    title: "Monthly Performance Reporting",
    description:
      "Track calls, views, clicks, rankings, and traffic with clear monthly performance reports.",
    icon: BarChart3,
    txtColor: "text-[#75b005]",
    iconColor: "bg-[#75b005]/10",
    bgColor: "bg-[#75b005]/5",
    borderColor:"border-[#75b005]/20",
  },
  {
    title: "Multi-Location SEO Management",
    description:
      "Manage multiple business locations using location-specific strategies and consistent branding.",
    icon: Building2,
    txtColor: "text-[#e89607]",
    iconColor: "bg-[#e89607]/10",
    bgColor: "bg-[#e89607]/5",
    borderColor:"border-[#e89607]/20",
  },
];

export const localSeoBenefits = [
  {
    title: "Higher Local Visibility",
    description:
      "Improve visibility in Google Maps and local search results when customers are looking for your services.",
    icon: TrendingUp,
  },
  {
    title: "More Qualified Local Leads",
    description:
      "Connect with users actively searching for your products or services in your target area.",
    icon: Users,
  },
  {
    title: "Increased Calls & Inquiries",
    description:
      "Generate more phone calls and customer inquiries directly from your Google Business Profile.",
    icon: PhoneCall,
  },
  {
    title: "Better Online Reputation",
    description:
      "Build credibility through reviews, ratings, accurate information, and active customer engagement.",
    icon: Star,
  },
  {
    title: "More Nearby Website Traffic",
    description:
      "Drive more website visits from customers discovering your business through local searches.",
    icon: Globe2,
  },
  {
    title: "Improved Local Conversions",
    description:
      "Reach customers with strong purchase intent at the moment they are ready to take action.",
    icon: CheckCircle2,
  },
];

export const localSeoTools = [
  {
    name: "Google Business Profile",
    description:
      "Manage business listings, updates, reviews, and customer interactions.",
    icon: BsGoogle,
  },
  {
    name: "Google Analytics",
    description:
      "Measure website traffic, user behavior, and conversion activity.",
    icon: BarChart3,
  },
  {
    name: "Search Console",
    description:
      "Monitor search performance, queries, clicks, and organic visibility.",
    icon: Search,
  },
  {
    name: "Local SEO Tools",
    description:
      "Track keywords, competitors, citations, and local search opportunities.",
    icon: Settings2,
  },
  {
    name: "Rank Tracking",
    description:
      "Monitor local rankings and measure progress across important search terms.",
    icon: TrendingUp,
  },
];

export const localSeoEvidence = [
  {
    number: "01",
    title: "Screenshots",
    description:
      "Before and after Google Maps rankings and Google Business Profile insights such as calls and views.",
    icon: FileSearch,
  },
  {
    number: "02",
    title: "Metrics Table",
    description:
      "Show measurable growth in calls, traffic, rankings, and other important local SEO metrics.",
    icon: BarChart3,
  },
  {
    number: "03",
    title: "30 / 60 / 90 Day Timeline",
    description:
      "Track local SEO progress and optimization milestones over time.",
    icon: TrendingUp,
  },
  {
    number: "04",
    title: "Reviews Proof",
    description:
      "Show verified client ratings, reviews, and customer testimonials.",
    icon: Star,
  },
  {
    number: "05",
    title: "Search Proof",
    description:
      "Compare before-and-after keyword rankings and local search visibility.",
    icon: Search,
  },
];

export const localSeoComingSoon = [
  {
    title: "Ranking Growth",
    value: "Coming Soon",
    icon: TrendingUp,
  },
  {
    title: "Call Increase",
    value: "Coming Soon",
    icon: PhoneCall,
  },
  {
    title: "Traffic Boost",
    value: "Coming Soon",
    icon: BarChart3,
  },
];

export const localSeoBlogTopics = [
  "How to Rank #1 on Google Maps for Local Businesses",
  "Complete Guide to Google Business Profile Optimization (2026)",
  "Top 10 Local SEO Strategies to Get More Customers in Your Area",
  "How Reviews Impact Your Google Maps Ranking (and How to Get More)",
  "Local SEO vs Traditional SEO: What Works Best for Small Businesses",
];

export const localSeoFaqs = [
  {
    question: "What is Google Business Profile (GMB) and why is it important?",
    answer:
      "It’s your business listing on Google that appears in Search and Maps. It helps customers find, contact, and trust your business.",
  },
  {
    question: "How does Local SEO help my business grow?",
    answer:
      "It improves your visibility in local searches, bringing more calls, visits, and high-intent leads.",
  },
  {
    question: "How long does it take to rank on Google Maps?",
    answer:
      "Typically 60–90 days, depending on competition, profile strength, and consistency.",
  },
  {
    question: "Can you guarantee Top 3 ranking on Google Maps?",
    answer:
      "No one can guarantee it, but we use proven strategies to maximize your chances.",
  },
  {
    question: "How do reviews impact my local ranking?",
    answer:
      "Positive reviews can improve trust, encourage clicks, and contribute to your local search performance.",
  },
  {
    question: "Do I need a website for Local SEO?",
    answer:
      "A website is not mandatory, but it can significantly strengthen credibility, provide additional information to customers, and support your local search presence.",
  },
  {
    question: "What keywords should my business target locally?",
    answer:
      'Service + location keywords such as "SEO company in Delhi" as well as relevant local and "near me" searches.',
  },
  {
    question: "How often should my GMB profile be updated?",
    answer:
      "Weekly updates are recommended to keep your profile active and relevant.",
  },
  {
    question: "What is Map Pack ranking and why does it matter?",
    answer:
      "The Map Pack refers to the prominent local business listings shown in Google Search and Maps. Visibility there can put your business in front of customers actively searching locally.",
  },
  {
    question: "How do you track Local SEO performance?",
    answer:
      "We track insights such as calls, views, clicks, rankings, website traffic, and other local search performance metrics.",
  },
  {
    question: "Can you manage multiple business locations?",
    answer:
      "Yes. We can optimize and manage multiple locations using location-specific strategies.",
  },
  {
    question: "What makes Teknovia different from other agencies?",
    answer:
      "We focus on data-driven strategies, measurable business outcomes, and consistent improvement in local visibility.",
  },
];

export const b2bMarketingFaqs = [
  {
    question: "What is B2B marketing?",
    answer:
      "B2B marketing, or business-to-business marketing, is the process of promoting products and services to other businesses. It focuses on reaching relevant companies, decision-makers, and professional audiences while building trust and generating qualified business opportunities.",
  },
  {
    question: "How is B2B marketing different from B2C marketing?",
    answer:
      "B2B marketing usually involves longer buying cycles, multiple decision-makers, and more detailed evaluation before a purchase. Businesses often look for expertise, reliability, measurable value, and a strong return on their investment.",
  },
  {
    question: "What B2B marketing services does TEKNOVIA provide?",
    answer:
      "TEKNOVIA provides B2B lead generation, LinkedIn lead generation, content marketing, email marketing, account-based marketing, paid advertising, landing page optimization, marketing automation, CRM and lead management, and performance reporting.",
  },
  {
    question: "Can B2B marketing help generate qualified leads?",
    answer:
      "Yes. A focused B2B marketing strategy can help attract businesses that are relevant to your products or services. Audience targeting, valuable content, lead-generation campaigns, landing pages, and lead nurturing can work together to improve lead quality.",
  },
  {
    question: "Is LinkedIn effective for B2B marketing?",
    answer:
      "LinkedIn can be a valuable B2B marketing channel because it provides access to businesses, professionals, industry groups, and decision-makers. A focused LinkedIn strategy can support brand visibility, prospecting, relationship building, and lead generation.",
  },
  {
    question: "How long does B2B marketing take to show results?",
    answer:
      "The timeframe varies depending on your industry, target market, competition, marketing channels, budget, and sales cycle. Paid campaigns may generate enquiries relatively quickly, while content, organic visibility, and relationship-based marketing generally require consistent effort over a longer period.",
  },
  {
    question: "Can small businesses benefit from B2B marketing?",
    answer:
      "Yes. B2B marketing can be particularly useful for small and growing businesses that want to reach a specific industry, location, company type, or group of decision-makers.",
  },
  {
    question: "Does TEKNOVIA create customized B2B marketing strategies?",
    answer:
      "Yes. We develop B2B marketing strategies based on your business goals, target audience, industry, products or services, sales process, and market opportunities rather than using the same approach for every business.",
  },
  {
    question: "How do you measure B2B marketing performance?",
    answer:
      "B2B marketing performance can be measured using relevant business metrics such as qualified leads, enquiries, conversion rates, cost per lead, website engagement, campaign performance, and marketing-generated sales opportunities.",
  },
  {
    question: "Can B2B marketing help businesses enter new markets?",
    answer:
      "Yes. Digital B2B marketing can help businesses research and reach new industries, locations, countries, and professional audiences. Campaigns can be tailored to the market, language, industry requirements, and customer buying behaviour.",
  },
  {
    question: "Can B2B marketing support long-term customer relationships?",
    answer:
      "Yes. B2B marketing is not only about generating new leads. Content, email communication, lead nurturing, useful resources, and consistent brand communication can help businesses stay connected with prospects and existing customers throughout the buying journey.",
  },
  {
    question: "Can TEKNOVIA manage the complete B2B marketing process?",
    answer:
      "Yes. TEKNOVIA can support the complete B2B marketing journey, from strategy and audience research to lead generation, content, campaigns, landing pages, lead nurturing, analytics, and ongoing optimization.",
  },
];

export const b2bServices = [
  {
    title: "B2B Lead Generation",
    description:
      "Identify and attract relevant businesses and decision-makers through targeted campaigns designed to generate qualified enquiries and sales opportunities.",
    icon: Target,
    featured: true,
  },
  {
    title: "LinkedIn Lead Generation",
    description:
      "Reach business owners, professionals, and decision-makers through targeted LinkedIn prospecting and outreach.",
    icon: BsLinkedin,
  },
  {
    title: "Content Marketing",
    description:
      "Create case studies, industry insights, whitepapers, and business content that builds trust.",
    icon: FileText,
  },
  {
    title: "Email Marketing & Lead Nurturing",
    description:
      "Keep prospects engaged through personalized campaigns that gradually move leads toward a business conversation.",
    icon: Mail,
  },
  {
    title: "Account-Based Marketing",
    description:
      "Create focused campaigns for selected high-value companies with account-specific messaging and content.",
    icon: Building2,
  },
  {
    title: "B2B Paid Advertising",
    description:
      "Reach relevant industries, job roles, businesses, and decision-makers while tracking campaign performance.",
    icon: Megaphone,
  },
  {
    title: "Landing Pages & Conversion",
    description:
      "Build focused landing experiences designed to turn visitors into enquiries, registrations, and demo requests.",
    icon: MousePointerClick,
  },
  {
    title: "Marketing Automation",
    description:
      "Automate lead capture, follow-ups, email sequences, segmentation, and prospect engagement.",
    icon: Bot,
  },
  {
    title: "CRM & Lead Management",
    description:
      "Organize and track prospects throughout the marketing and sales journey.",
    icon: UsersRound,
  },
  {
    title: "Channel & Partner Marketing",
    description:
      "Find and engage distributors, resellers, strategic partners, and potential business collaborators.",
    icon: Network,
  },
  {
    title: "B2B Analytics & Reporting",
    description:
      "Measure lead quality, conversions, engagement, campaign performance, and opportunities for improvement.",
    icon: BarChart3,
  },
];

export const b2bBenefits = [
  {
    number: "01",
    title: "Industry-Focused Strategy",
    description:
      "Marketing aligned with your industry, audience, and sales cycle.",
    icon: Target,
  },
  {
    number: "02",
    title: "Data-Driven Decisions",
    description: "Campaigns are measured using meaningful business metrics.",
    icon: BarChart3,
  },
  {
    number: "03",
    title: "Multi-Channel Approach",
    description:
      "Combine SEO, LinkedIn, content, email, social media, and paid campaigns.",
    icon: Layers3,
  },
  {
    number: "04",
    title: "Lead Quality Focus",
    description:
      "Focus on reaching relevant prospects rather than simply generating traffic.",
    icon: UsersRound,
  },
  {
    number: "05",
    title: "Sales-Aligned Marketing",
    description:
      "Marketing activities are structured around your actual business and sales objectives.",
    icon: TrendingUp,
  },
];

export const b2bAudienceTypes = [
  {
    icon: UsersRound,
    title: "Decision-makers",
  },
  {
    icon: Globe2,
    title: "New markets",
  },
  {
    icon: Handshake,
    title: "Partners",
  },
  {
    icon: Megaphone,
    title: "Business buyers",
  },
];


export const whatsappFaqs = [
  {
    question: "What is WhatsApp Business API?",
    answer:
      "It is an official solution that allows businesses to automate chats, manage leads, and scale communication.",
  },
  {
    question: "How is it different from WhatsApp Business App?",
    answer:
      "The API supports automation, multiple users, and CRM integration, unlike the basic app.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Typically 2–5 working days, depending on verification.",
  },
  {
    question: "Is it approved by Meta?",
    answer:
      "Yes, it is an official solution provided via Meta Platforms.",
  },
  {
    question: "What are the messaging charges?",
    answer:
      "Meta charges per conversation within the applicable 24-hour window, based on message category such as marketing or utility.",
  },
  {
    question: "Can I send bulk messages?",
    answer:
      "Yes, through approved templates and broadcast campaigns.",
  },
  {
    question: "Do I need technical knowledge to use it?",
    answer:
      "No, Teknovia can manage setup, automation, and daily operations for you.",
  },
  {
    question: "Can multiple team members use it?",
    answer:
      "Yes, it supports multi-agent access with a shared inbox.",
  },
  {
    question: "Will it integrate with my CRM or website?",
    answer:
      "Yes, it can be integrated with CRM, website, and ad platforms.",
  },
  {
    question: "Is it suitable for small businesses?",
    answer:
      "Yes, especially if you want to automate and grow customer communication efficiently.",
  },
];

export const watsappBlogTopics = [
  "WhatsApp Business API vs WhatsApp Business App – Which One is Right for You?",
  "How to Generate Leads Using WhatsApp Marketing (Step-by-Step Guide)",
  "Top 7 WhatsApp Automation Strategies to Increase Conversions",
  "WhatsApp Marketing Pricing Explained (India) – Complete Cost Breakdown",
  "How Small Businesses Can Scale Using WhatsApp CRM & Automation",
];

export const watsappServices = [
  {
    title: "Complete WhatsApp handling",
    description:
      "We manage your entire WhatsApp communication, from first inquiry to follow-up. Your team stops replying and tracking by hand.",
    icon: MessageSquareText,
  },
  {
    title: "Campaign execution and scheduling",
    description:
      "We plan, write and send broadcasts for you, so promotions and offers go out on time and customers stay engaged.",
    icon: CalendarClock,
  },
  {
    title: "Daily chat management",
    description:
      "We answer queries, share information and nurture leads, so no inquiry goes unanswered.",
    icon: UserRoundCheck,
  },
  {
    title: "Template and content management",
    description:
      "We create and maintain approved message templates, keeping every message professional and compliant.",
    icon: ClipboardCheck,
  },
  {
    title: "Lead tracking and follow-ups",
    description:
      "Every lead is tracked, categorized and followed up in a set routine, so fewer opportunities slip away.",
    icon: CheckCircle2,
  },
];


export const watsAppFeatures = [
  {
    title: "Team Inbox",
    description:
      "All customer messages come into one place so your team can reply together without confusion. No more missed chats or switching between phones.",
    icon: MessagesSquare,
  },
  {
    title: "Auto Replies & Follow-ups",
    description:
      "Customers get instant replies even when you’re busy. Follow-ups happen automatically so no lead is forgotten.",
    icon: Bot,
  },
  {
    title: "Customer Segmentation",
    description:
      "Group customers based on interest or stage—new, interested, or existing—so you can send the right message to the right people.",
    icon: UsersRound,
  },
  {
    title: "Lead Capture from Ads",
    description:
      "When someone clicks your ad, they can directly start a WhatsApp chat. Capture qualified leads without relying on lengthy forms.",
    icon: Megaphone,
  },
  {
    title: "Performance Tracking",
    description:
      "See how many people messaged, replied, and converted. Clear insights help you understand what is working.",
    icon: BarChart3,
  },
  {
    title: "Broadcast Messaging",
    description:
      "Send offers, updates, and reminders to many customers at once for promotions and repeat sales.",
    icon: Send,
  },
  {
    title: "Reliable & Scalable System",
    description:
      "Handle a large number of chats through a structured communication system and grow without worrying about fragmented operations.",
    icon: Boxes,
  },
];


export const seoOptimizationTypes = [
  {
    icon: Search,
    short: "SEO",
    title: "Get Found in Search",
    description:
      "Improve your visibility in traditional search results and attract people actively looking for your products and services.",
  },
  {
    icon: MessageCircleQuestion,
    short: "AEO",
    title: "Be the Answer",
    description:
      "Structure your content around real questions so search and answer engines can understand and surface your information.",
  },
  {
    icon: Sparkles,
    short: "GEO",
    title: "Be Referenced by AI",
    description:
      "Build useful, authoritative information that can be understood and potentially referenced by AI-powered search experiences.",
  },
  {
    icon: Bot,
    short: "AIO",
    title: "Be AI-Ready",
    description:
      "Make your website, content, brand, products, and business information easier for modern AI systems to understand.",
  },
];

export const seoServices = [
  {
    title: "SEO Audit",
    description:
      "In-depth website audit to identify technical issues, content gaps & growth opportunities.",
    icon: FileSearch,
  },
  {
    title: "Keyword Research",
    description:
      "Find the right keywords your customers search for and target them strategically.",
    icon: Search,
  },
  {
    title: "On-Page SEO",
    description:
      "Optimize titles, meta tags, content, headings, images and internal links for better rankings.",
    icon: Target,
  },
  {
    title: "Technical SEO",
    description:
      "Improve website speed, mobile-friendliness, indexing, crawlability & overall performance.",
    icon: Settings2,
  },
  {
    title: "Content SEO",
    description:
      "Create and optimize high-quality content that ranks and engages.",
    icon: FileSearch,
  },
  {
    title: "Off-Page SEO",
    description:
      "Build high-authority backlinks to increase your website's authority and trust.",
    icon: Network,
  },
  {
    title: "Local SEO",
    description:
      "Optimize Google Business Profile and local citations to rank higher in local search results.",
    icon: MapPin,
  },
  {
    title: "Schema & Structured Data",
    description:
      "Implement schema markup to help search engines understand your content better.",
    icon: Code2,
  },
  {
    title: "E-Commerce SEO",
    description:
      "Optimize product pages, categories & site structure to boost sales and visibility.",
    icon: TrendingUp,
  },
  {
    title: "SEO Reporting",
    description:
      "Monthly performance reports with key metrics, insights & actionable strategies.",
    icon: BarChart3,
  },
];

export const aeoServices = [
  {
    title: "Question & Search Intent Research",
    description:
      "We identify the questions your customers are asking across search engines and answer platforms. This helps us target the right search intent, conversational queries, and customer needs.",
  },
  {
    title: "Answer-Focused Content",
    description:
      "We create clear, useful content that directly answers the questions your audience is searching for. The content is structured to make important information easy for search and answer engines to understand.",
  },
  {
    title: "FAQ Optimization",
    description:
      "We develop relevant FAQs based on real customer questions, search behaviour, and industry topics.",
  },
  {
    title: "Featured Snippet Optimization",
    description:
      "We optimize suitable content to provide concise and well-structured answers to specific search queries.",
  },
  {
    title: "Conversational Search Optimization",
    description:
      "We optimize content for the way people naturally ask questions, including longer and conversational searches.",
  },
  {
    title: "Voice Search Optimization",
    description:
      "We create content that answers common questions in a clear, concise, and conversational format.",
  },
  {
    title: "Structured Content & Schema",
    description:
      "We organize your website content with clear headings, logical sections, lists, FAQs, and relevant structured data.",
  },
  {
    title: "Knowledge & Entity Optimization",
    description:
      "We strengthen how your business, products, services, and expertise are represented across your website and digital presence.",
  },
  {
    title: "AI & Answer Platform Optimization",
    description:
      "We prepare your content to be clear, factual, useful, and easy for modern AI-powered search and answer systems to interpret.",
  },
  {
    title: "AEO Performance & Monitoring",
    description:
      "We monitor how your content performs across search and answer experiences and identify opportunities for improvement.",
  },
];

export const geoServices = [
  {
    title: "AI Search Visibility Optimization",
    description:
      "Improve your business presence across AI-powered search and generative answer platforms.",
  },
  {
    title: "AI Content Optimization",
    description:
      "Create clear, authoritative and well-structured content that AI systems can understand and reference.",
  },
  {
    title: "Entity & Brand Optimization",
    description:
      "Strengthen how your business, products, services and expertise are understood as entities across the web.",
  },
  {
    title: "Citation & Reference Optimization",
    description:
      "Build credible sources, mentions and references that can support your brand's inclusion in AI-generated answers.",
  },
  {
    title: "Topical Authority Building",
    description:
      "Develop comprehensive content around important topics to establish depth and expertise in your industry.",
  },
  {
    title: "AI-Friendly Content Structure",
    description:
      "Organize information using clear headings, definitions, facts, FAQs, comparisons and structured content.",
  },
  {
    title: "Original Data & Research Content",
    description:
      "Develop original insights, statistics, studies and resources that provide information AI systems can reference.",
  },
  {
    title: "Digital Brand Presence",
    description:
      "Strengthen consistent business information across websites, directories, publications and relevant online platforms.",
  },
  {
    title: "AI Recommendation Optimization",
    description:
      "Optimize business information and content to improve discoverability when users ask AI platforms for products, services or recommendations.",
  },
  {
    title: "GEO Monitoring & Reporting",
    description:
      "Monitor AI visibility, mentions, citations and referenced content to identify opportunities for continuous improvement.",
  },
];

export const aioServices = [
  {
    title: "AI Readiness Audit",
    description:
      "Analyze your website and digital presence to identify how easily AI systems can understand your business, services, products, and content.",
  },
  {
    title: "AI-Friendly Content Optimization",
    description:
      "Optimize website content so information is clear, accurate, structured, and easy for AI systems to interpret.",
  },
  {
    title: "Brand & Entity Optimization",
    description:
      "Improve the consistency and clarity of your business identity, services, expertise, and brand information across digital platforms.",
  },
  {
    title: "Business Information Optimization",
    description:
      "Organize important business information such as services, locations, products, expertise, contact details, and company information.",
  },
  {
    title: "Knowledge Base Optimization",
    description:
      "Structure FAQs, guides, documentation, product information, and other knowledge resources so AI systems can understand and retrieve them effectively.",
  },
  {
    title: "Structured Data & AI-Readable Content",
    description:
      "Implement appropriate structured data and clear content structures to help machines better interpret important information.",
  },
  {
    title: "AI Assistant Optimization",
    description:
      "Prepare business information and content for discovery through AI assistants and AI-powered search experiences.",
  },
  {
    title: "Product & Service AI Optimization",
    description:
      "Structure product and service information clearly so AI systems can better understand what you offer and who it is relevant to.",
  },
  {
    title: "AI Visibility & Mention Monitoring",
    description:
      "Track how your brand, products, and services appear across relevant AI-powered search and answer experiences.",
  },
  {
    title: "AI Optimization Strategy & Reporting",
    description:
      "Analyze findings, identify gaps, and continuously improve your digital presence for changing AI-driven discovery.",
  },
];

export const seoTools = [
  "Google Search Console",
  "Google Analytics",
  "Google Business Profile",
  "Bing Webmaster Tools",
  "Semrush",
  "Ahrefs",
  "Schema.org",
  "AI Search",
];

export const seoFaqs = [
  {
    question: "What is Search Engine Optimization (SEO)?",
    answer:
      "SEO helps improve your website's visibility in traditional search results. It focuses on technical performance, relevant content, keywords, website structure, and authority to attract more organic visitors.",
  },
  {
    question: "What is Answer Engine Optimization (AEO)?",
    answer:
      "AEO helps your content provide clear answers to questions people ask online. It focuses on FAQs, conversational searches, structured content, and direct answers that search and answer engines can easily understand.",
  },
  {
    question: "What is Generative Engine Optimization (GEO)?",
    answer:
      "GEO focuses on improving your chances of being mentioned or referenced in AI-generated answers. It uses useful content, strong topical authority, accurate information, and credible digital references.",
  },
  {
    question: "What is AI Optimization (AIO)?",
    answer:
      "AIO focuses on making your website, content, products, services, brand, and business information easier for AI systems to understand. It supports better visibility across AI-powered search and discovery experiences.",
  },
  {
    question: "What is the difference between SEO, AEO, GEO and AIO?",
    answer:
      "SEO focuses primarily on search visibility, AEO on answer visibility, GEO on AI-generated visibility, and AIO on the broader optimization of your digital presence for AI systems. Together, they address different ways customers discover information online.",
  },
  {
    question: "Do I need SEO if I am already focusing on AI search?",
    answer:
      "Yes. SEO remains an important foundation for search and AI-powered discovery. A strong technical foundation, useful content, clear website structure, and authoritative information can support visibility across multiple search experiences.",
  },
  {
    question: "How can SEO help my business get more customers?",
    answer:
      "SEO helps your business appear when people are actively searching for products, services, or information related to what you offer. Better visibility can bring more relevant organic traffic and create opportunities for enquiries and conversions.",
  },
  {
    question: "Can AEO help my website appear in featured answers?",
    answer:
      "AEO can help you create content that directly addresses specific questions in a clear and structured way. This may improve the suitability of your content for answer-focused search features, although search engines ultimately decide which content they display.",
  },
  {
    question: "How can GEO improve my visibility in AI-generated answers?",
    answer:
      "GEO focuses on making your information clear, trustworthy, relevant, and well-supported so AI-powered systems can better understand and potentially reference it when generating answers.",
  },
  {
    question: "How long does it take to see results from SEO, AEO and GEO?",
    answer:
      "Results vary depending on your website, competition, industry, content quality, authority, and current online presence. SEO and related optimization are generally ongoing processes rather than one-time activities.",
  },
  {
    question: "How do you measure SEO, AEO, GEO and AIO performance?",
    answer:
      "We can track metrics such as organic traffic, search visibility, rankings, impressions, clicks, featured-answer visibility, AI mentions or citations, brand visibility, leads, and conversions, depending on the optimization strategy.",
  },
  {
    question: "Can TEKNOVIA provide SEO, AEO, GEO and AIO together?",
    answer:
      "Yes. TEKNOVIA can combine SEO, AEO, GEO, and AIO into an integrated Search & AI Optimization strategy, helping your business build visibility across traditional search, answer-based experiences, and AI-powered discovery.",
  },
];


export const smoFaqs = [
  {
    question: "What is Social Media Optimization (SMO)?",
    answer:
      "Social Media Optimization is the process of improving your social media profiles, content, publishing strategy, discoverability, and audience engagement to build a stronger online presence.",
  },
  {
    question: "Which social media platforms do you optimize?",
    answer:
      "Our SMO service focuses primarily on Instagram and Facebook. The strategy can be adapted based on your audience, business goals, and the platforms that matter most to your brand.",
  },
  {
    question: "What does your Instagram SMO service include?",
    answer:
      "Instagram optimization can include profile optimization, content strategy, feed planning, Reels and Stories strategy, captions, hashtags, engagement, content ideas, and performance analysis.",
  },
  {
    question: "What does your Facebook SMO service include?",
    answer:
      "Facebook SMO can include page optimization, content planning, community engagement, campaign content, audience development, and performance reporting.",
  },
  {
    question: "Can you create a social media content strategy for our business?",
    answer:
      "Yes. We can develop content pillars, topics, formats, campaign ideas, publishing schedules, and platform-specific content directions based on your business and target audience.",
  },
  {
    question: "How long does it take to see results from SMO?",
    answer:
      "Social media growth is cumulative and depends on factors such as your starting presence, audience, content quality, consistency, industry, and engagement. We focus on building a sustainable system rather than promising a fixed result within a specific timeframe.",
  },
  {
    question: "Do you provide social media reporting?",
    answer:
      "Yes. Reporting can include relevant metrics such as reach, engagement, content performance, audience growth, and other indicators aligned with your objectives.",
  },
];