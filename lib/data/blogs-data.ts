import {
  Factory,
  Gauge,
  Handshake,
  MapPin,
  Target,
  Users,
  type LucideIcon,
} from "lucide-react";

export interface BlogSection {
  heading: string;
  paragraphs?: string[];
  points?: string[];
}

interface BlogPostInput {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  /** ISO date (YYYY-MM-DD) */
  date: string;
  author: string;
  icon: LucideIcon;
  image: string;
  imageAlt: string;
  intro: string;
  sections: BlogSection[];
}

export interface BlogPost extends BlogPostInput {
  readTime: number;
}

const posts: BlogPostInput[] = [
  {
    slug: "b2b-lead-generation-system",
    title: "How to Build a Predictable B2B Lead Generation System",
    excerpt:
      "Referrals and one-off campaigns are hard to forecast. Here is how to turn lead generation into a repeatable process with clear stages, owners and metrics.",
    category: "B2B Marketing",
    date: "2026-09-24",
    author: "Teknovia Team",
    icon: Target,
    image: "/images/blog/b2b-lead-generation.jpg",
    imageAlt: "B2B lead generation system",
    intro:
      "Referrals and one-off campaigns can bring in leads, but they are hard to plan around. A predictable system treats lead generation as a process you can measure and improve every month.",
    sections: [
      {
        heading: "Start with a clear ideal customer profile",
        paragraphs: [
          "List the industries, company sizes and job titles that buy from you most often and close fastest. Every channel, message and landing page should be built for that profile, not for everyone.",
          "A narrow profile usually produces fewer leads, but better ones.",
        ],
      },
      {
        heading: "Pick two or three channels and run them well",
        paragraphs: [
          "Spreading budget across six channels gives thin results on all of them. Choose the channels where your buyers already spend time, such as search, LinkedIn and email, and give each one a clear goal and an owner.",
        ],
      },
      {
        heading: "Qualify leads before sales spends time on them",
        points: [
          "Agree on what counts as a qualified lead",
          "Score leads on fit (company, role) and intent (pages visited, enquiries made)",
          "Send only qualified leads to sales and keep the rest in nurture",
        ],
      },
      {
        heading: "Measure the whole funnel",
        paragraphs: [
          "Track cost per qualified lead, lead-to-opportunity rate and revenue by source. Cost per lead alone can hide a channel that brings cheap but unqualified enquiries.",
        ],
      },
    ],
  },
  {
    slug: "linkedin-marketing-for-b2b",
    title: "LinkedIn Marketing for B2B: What Actually Drives Qualified Leads",
    excerpt:
      "From profile setup to content and outreach, a practical look at how B2B companies can use LinkedIn to start real sales conversations.",
    category: "B2B Marketing",
    date: "2026-09-10",
    author: "Teknovia Team",
    icon: Users,
    image: "/images/blog/linkedin-marketing.jpg",
    imageAlt: "LinkedIn marketing for B2B",
    intro:
      "LinkedIn is where many B2B buyers research vendors, but posting often is not the same as generating leads. The basics below make the biggest difference.",
    sections: [
      {
        heading: "Optimise the company page and key profiles",
        paragraphs: [
          "Buyers check your page before they reply. Make sure the headline says what you do and who you do it for, your services are listed, and the profiles of your leadership team match.",
        ],
      },
      {
        heading: "Post about the problems your buyers are solving",
        paragraphs: [
          "Case studies, how-to posts and honest comparisons perform better than company announcements. A steady rhythm of a few posts a week beats occasional bursts.",
        ],
      },
      {
        heading: "Support organic reach with ads and outreach",
        paragraphs: [
          "Sponsored content and lead forms let you reach decision-makers by job title and industry. Keep outreach messages short and relevant, and lead with a problem rather than a pitch.",
        ],
      },
      {
        heading: "Track conversations, not just impressions",
        points: [
          "Profile views from target accounts",
          "Replies and meeting requests",
          "Leads and opportunities by source",
        ],
      },
    ],
  },
  {
    slug: "local-seo-checklist-noida-delhi-ncr",
    title:
      "A Practical Local SEO Checklist for Businesses in Noida and Delhi NCR",
    excerpt:
      "Show up when nearby customers search. Four areas to fix first: your Google Business Profile, service pages, reviews and technical basics.",
    category: "SEO",
    date: "2026-08-30",
    author: "Teknovia Team",
    icon: MapPin,
    image: "/images/blog/local-seo.jpg",
    imageAlt: "Local SEO for businesses",
    intro:
      "When someone searches for a service near them, Google shows the businesses it trusts most in that area. Local SEO is about giving it clear, consistent signals.",
    sections: [
      {
        heading: "Complete your Google Business Profile",
        paragraphs: [
          "Choose accurate categories and add your services, opening hours, photos and a local phone number. Keep your business name, address and phone number identical everywhere it appears online.",
        ],
      },
      {
        heading: "Create pages for the services and areas you cover",
        paragraphs: [
          "One services page rarely ranks for every location. Write a useful page for each main service and, where it makes sense, for each area you serve, with real details instead of copied text.",
        ],
      },
      {
        heading: "Collect and answer reviews",
        paragraphs: [
          "Ask happy customers for a review soon after the work is done, and reply to every review, including critical ones. Reviews influence both rankings and the decision to get in touch.",
        ],
      },
      {
        heading: "Check the technical basics",
        points: [
          "Mobile-friendly, fast-loading pages",
          "Title tags and meta descriptions that include the service and location",
          "Structured data (schema) for your business details",
        ],
      },
    ],
  },
  {
    slug: "website-speed-and-conversions",
    title: "Why Website Speed Matters for Leads, Not Just Rankings",
    excerpt:
      "A slow page loses visitors before they read a word. Learn what slows websites down and how to fix the biggest problems first.",
    category: "Web Development",
    date: "2026-08-12",
    author: "Teknovia Team",
    icon: Gauge,
    image: "/images/blog/website-speed.jpg",
    imageAlt: "Website speed and conversions",
    intro:
      "Speed is often treated as a technical score, but visitors experience it as trust. If a page stalls, many will leave before they see your offer.",
    sections: [
      {
        heading: "Slow pages lose visitors before they read anything",
        paragraphs: [
          "People on mobile networks leave quickly when a page hesitates. Every extra second between the click and the content costs enquiries, especially on landing pages that paid campaigns send traffic to.",
        ],
      },
      {
        heading: "Fix the biggest causes first",
        points: [
          "Compress and correctly size images, and use modern formats",
          "Load only the scripts and fonts a page needs",
          "Use caching and a CDN for static files",
          "Set image and embed dimensions to avoid layout shifts",
        ],
      },
      {
        heading: "Make the next step obvious",
        paragraphs: [
          "Speed gets people onto the page. Clear headings, a visible call to action and a short enquiry form turn them into leads. Test the form on a real phone before launch.",
        ],
      },
      {
        heading: "Measure with real-user data",
        paragraphs: [
          "Run Lighthouse and PageSpeed Insights, then check Core Web Vitals in Google Search Console for field data. Re-test after every major release.",
        ],
      },
    ],
  },
  {
    slug: "erp-for-manufacturers",
    title: "5 Signs Your Manufacturing Business Has Outgrown Spreadsheets",
    excerpt:
      "Stock mismatches, slow reports and duplicate data entry are signs it may be time to move to an ERP system.",
    category: "Technology",
    date: "2026-07-29",
    author: "Teknovia Team",
    icon: Factory,
    image: "/images/blog/erp-manufacturers.jpg",
    imageAlt: "ERP software for manufacturing businesses",
    intro:
      "Spreadsheets work well until the business gets busy. When teams keep re-entering the same data, an ERP system usually pays for itself in time saved and fewer mistakes.",
    sections: [
      {
        heading: "Stock numbers rarely match the shelf",
        paragraphs: [
          "If physical counts and records regularly disagree, planning and purchasing are based on guesswork.",
        ],
      },
      {
        heading: "Production and sales work from different files",
        paragraphs: [
          "When sales cannot see what production has capacity for, delivery promises get missed.",
        ],
      },
      {
        heading: "Reports take days to prepare",
        paragraphs: [
          "Collecting numbers from several files means decisions are made on old data.",
        ],
      },
      {
        heading: "Costing and invoicing are manual",
        paragraphs: [
          "Manual calculations add errors and delay payments, and they are hard to audit.",
        ],
      },
      {
        heading: "Growth means more people entering the same data",
        paragraphs: [
          "If hiring is the only way to keep up with data entry, the process is the problem, not the headcount.",
        ],
      },
      {
        heading: "What to do next",
        paragraphs: [
          "List the processes that cause the most rework, then look for a system that covers those first, such as inventory, purchasing and production planning. A phased rollout with trained users is safer than switching everything at once.",
        ],
      },
    ],
  },
  {
    slug: "choosing-a-technology-partner",
    title: "How to Choose the Right Technology Partner for Your Project",
    excerpt:
      "Compare scope, communication and support, not just price, when you hire a team to build your website, software or digital platform.",
    category: "Technology",
    date: "2026-07-15",
    author: "Teknovia Team",
    icon: Handshake,
    image: "/images/blog/technology-partner.jpg",
    imageAlt: "Choosing the right technology partner",
    intro:
      "The right partner saves months of rework. These checks help you find a team that fits your project, not just your budget.",
    sections: [
      {
        heading: "Define the problem before the solution",
        paragraphs: [
          "Write down what you need to achieve, who will use it and how you will know it worked. A clear brief makes quotes easier to compare and reduces scope changes later.",
        ],
      },
      {
        heading: "Look for relevant experience",
        paragraphs: [
          "Ask for examples from your industry or from projects of a similar size, and speak to past clients if you can.",
        ],
      },
      {
        heading: "Check how they communicate",
        paragraphs: [
          "Notice how clearly they ask questions in the first conversations. A team that agrees to everything without asking anything may not be thinking about your goals.",
        ],
      },
      {
        heading: "Understand support and ownership",
        points: [
          "You own the code, designs and data",
          "Support terms and response times are written down",
          "Documentation and handover are included",
        ],
      },
      {
        heading: "Compare scope, not just price",
        paragraphs: [
          "Two quotes with different prices often cover different work. Line up deliverables, timelines and post-launch support before deciding.",
        ],
      },
    ],
  },
];

function getReadTime(post: BlogPostInput) {
  const text = [
    post.intro,
    ...post.sections.flatMap((s) => [
      s.heading,
      ...(s.paragraphs ?? []),
      ...(s.points ?? []),
    ]),
  ].join(" ");

  return Math.max(2, Math.ceil(text.split(/\s+/).length / 200));
}

export const blogPosts: BlogPost[] = posts
  .map((post) => ({ ...post, readTime: getReadTime(post) }))
  .sort((a, b) => b.date.localeCompare(a.date));

export const blogCategories = [
  "All",
  ...Array.from(new Set(blogPosts.map((post) => post.category))),
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedPosts(post: BlogPost, limit = 3) {
  return blogPosts
    .filter((p) => p.slug !== post.slug)
    .sort(
      (a, b) =>
        Number(b.category === post.category) -
        Number(a.category === post.category),
    )
    .slice(0, limit);
}

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export function formatPostDate(date: string) {
  const [year, month, day] = date.split("-").map(Number);
  return `${day} ${MONTHS[month - 1]} ${year}`;
}
