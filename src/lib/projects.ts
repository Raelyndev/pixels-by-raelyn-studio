// Central project data. Update copy, images, and case study fields here.
// Values marked "[Editable placeholder]" are intentionally blank until the
// client provides final content — do not fabricate results or testimonials.

export type Category = "Websites" | "Branding" | "Social Media" | "Strategy";

import vipBarberLogo from "@/assets/logos/vip-barber-lounge.jpg.asset.json";
import rootedLabLogo from "@/assets/logos/rooted-lab-co.png.asset.json";
import kimballRidgeLogo from "@/assets/logos/kimball-ridge.png.asset.json";
import risingBuildersLogo from "@/assets/logos/rising-builders.jpg.asset.json";

export type ProcessStage =
  | "Discovery"
  | "Strategy"
  | "Design"
  | "Build"
  | "Testing & refinement"
  | "Launch & handoff";

export interface GalleryItem {
  /** Short caption describing the mockup */
  caption: string;
  /** Layout hint for the case study grid */
  layout: "full" | "half";
  /** Device framing for the placeholder */
  device: "desktop" | "mobile" | "tablet";
}

export interface FeatureItem {
  title: string;
  description: string;
}

export interface Project {
  slug: string;
  name: string;
  industry: string;
  categories: Category[];
  services: string[];
  summary: string;
  imageAlt: string;
  logo?: { url: string; bg?: string };
  accent: "sage" | "camel" | "olive" | "cream";

  // Hero meta
  categoryLabel: string;
  platforms: string[];
  year: string;
  liveUrl?: string;
  client: string;

  // Case study content
  clientOverview: string;
  clientNeeded: string;
  role: string;
  challenge: string;
  solution: string;
  solutionBullets?: string[];
  process: ProcessStage[];
  gallery: GalleryItem[];
  features: FeatureItem[];
  outcome: string;
}

const placeholder = "[Editable placeholder — add final content in the editor]";

export const projects: Project[] = [
  {
    slug: "perfect-part",
    name: "The Perfect Part® Comb",
    industry: "Beauty & Grooming Product — by Rooted Lab & Co",
    categories: ["Websites", "Branding", "Social Media"],
    services: ["Website Design", "Brand Support", "Social Media Content"],
    summary:
      "An e-commerce experience and digital launch platform for an adjustable sectioning comb designed for stylists, braiders, and everyday users.",
    imageAlt: "Rooted Lab & Co logo — parent brand of The Perfect Part® Comb",
    logo: { url: rootedLabLogo.url, bg: "#F5F3EA" },
    accent: "camel",

    categoryLabel: "E-commerce Web Design · Product Launch · Brand Strategy",
    platforms: ["Squarespace", "Canva", "Easyship", "Email marketing tools"],
    year: "2026",
    client: "Rooted Lab & Co.",

    clientOverview:
      "Rooted Lab & Co. is the company behind The Perfect Part® Comb. Founder Mo developed the product after recognizing the need for a more consistent and efficient way to create evenly sized sections. The comb was refined through multiple prototypes and testing over roughly two years before launch.",
    clientNeeded:
      "A professional online home that could educate first-time visitors, communicate the comb's unique features, collect early interest through a waitlist, and eventually support pre-orders and ongoing online sales.",
    role: "Website designer, brand strategist, launch support, e-commerce setup, copywriter, content planner, and customer-experience planner.",

    challenge:
      "The product needed a digital home that could clearly explain what made it different — an adjustable guide tooth, 13 locked click sizes, and durable materials — without overwhelming a visitor who had never seen a comb like this before. It also had to move that visitor from curiosity to waitlist signup and, later, to pre-order.",

    solution:
      "The site was structured around the product itself: what it is, how it works, and who it's for. A dedicated waitlist landing page collected early interest before launch, and a full storefront followed to support pre-orders, shipping, and repeat customers.",
    solutionBullets: [
      "Product-first homepage that leads with the comb and its use cases",
      "\"How It Works\" section explaining the adjustable guide tooth and 13 locked sizes",
      "Founder story from Mo that grounds the product in real experience",
      "Waitlist landing page and welcome email flow for pre-launch interest",
      "FAQ, shipping, return, and cancellation policies written in plain language",
      "Mobile-first product pages optimized for scroll and tap",
    ],

    process: [
      "Discovery",
      "Strategy",
      "Design",
      "Build",
      "Testing & refinement",
      "Launch & handoff",
    ],

    gallery: [
      { caption: "Homepage hero introducing the comb and its adjustable guide tooth", layout: "full", device: "desktop" },
      { caption: "Product page — features, sizing, and story", layout: "half", device: "desktop" },
      { caption: "Waitlist landing page and email capture", layout: "half", device: "desktop" },
      { caption: "Mobile shop experience", layout: "half", device: "mobile" },
      { caption: "How It Works section on mobile", layout: "half", device: "mobile" },
    ],

    features: [
      { title: "Product-focused homepage", description: "Leads with the comb, its use cases, and a clear path to shop or join the waitlist." },
      { title: "Shop and product pages", description: "Structured to explain features quickly and support pre-order and purchase." },
      { title: "How It Works", description: "Breaks down the adjustable guide tooth and 13 locked click sizes." },
      { title: "Founder story", description: "Grounds the product in Mo's real experience developing it." },
      { title: "FAQs and policies", description: "Shipping, returns, and cancellations written in plain language." },
      { title: "Waitlist & email capture", description: "Built to collect early interest and send a welcome email automatically." },
      { title: "Pre-order & purchase flow", description: "E-commerce configuration and shipping workflow ready for launch." },
      { title: "Mobile-friendly layouts", description: "Optimized for the way most shoppers browse — thumb-first." },
    ],

    outcome:
      "The final experience gave The Perfect Part® Comb a dedicated digital home that could educate visitors, collect early interest, support the launch, and guide customers from product discovery to purchase.",
  },

  {
    slug: "more-than-a-barber",
    name: "More Than a Barber",
    industry: "Podcast, Barbering & Community",
    categories: ["Websites", "Branding", "Social Media", "Strategy"],
    services: ["Website Design", "Content Strategy", "E-commerce Support"],
    summary:
      "A multi-purpose platform bringing AP's barbering services, podcast, classes, grooming products, and personal brand into one professional online home.",
    imageAlt: "VIP Barber Lounge logo",
    logo: { url: vipBarberLogo.url, bg: "#0A0A0A" },
    accent: "olive",

    categoryLabel: "Service-Based Website · Podcast Platform · E-commerce",
    platforms: ["Squarespace", "Booksy", "Canva", "Google Workspace"],
    year: "2026",
    client: "AP & VIP Barber Lounge",

    clientOverview:
      "AP is a barber, entrepreneur, educator, speaker, and host of the More Than a Barber podcast. His work extends beyond barbering into mentorship, education, media, entrepreneurship, and personal development.",
    clientNeeded:
      "One clear digital brand that could hold barbering services, a growing podcast, educational classes, grooming products, and his personal mission — without feeling crowded or confusing.",
    role: "Website designer, content strategist, copywriter, e-commerce support, podcast and sponsorship strategy support.",

    challenge:
      "AP's different services and business ventures needed to feel connected under one roof. Visitors had to be able to book an appointment, listen to the podcast, register for a class, purchase a product, and understand AP's larger mission — all without the website feeling stretched thin.",

    solution:
      "The site was organized around distinct but connected pillars: barbering, podcast, classes, products, and sponsorship. Each section leads with what a visitor came for while pointing them toward the rest of AP's world.",
    solutionBullets: [
      "Sitemap that separates services, podcast, classes, and products without silo-ing them",
      "Booksy booking integrated directly into the barbering pages",
      "Podcast hub with host bio, featured episodes, and video links",
      "GENTRŪ product pages for beard oil and beard shampoo",
      "Class registration pages and sponsorship information",
      "Google Workspace and domain support during setup",
    ],

    process: [
      "Discovery",
      "Strategy",
      "Design",
      "Build",
      "Launch & handoff",
    ],

    gallery: [
      { caption: "Homepage bringing barbering, podcast, and products together", layout: "full", device: "desktop" },
      { caption: "More Than a Barber podcast hub", layout: "half", device: "desktop" },
      { caption: "Booksy-integrated barbering services page", layout: "half", device: "desktop" },
      { caption: "GENTRŪ grooming product page", layout: "half", device: "mobile" },
      { caption: "Class registration on mobile", layout: "half", device: "mobile" },
    ],

    features: [
      { title: "Booksy booking integration", description: "Clients can book barbering appointments directly from the site." },
      { title: "Barber service information", description: "Clear service listings, expectations, and location details." },
      { title: "Podcast hub", description: "Home base for More Than a Barber with host bio and featured episodes." },
      { title: "Featured episodes & video", description: "Links to audio and video episodes for easy sharing." },
      { title: "GENTRŪ grooming products", description: "Product pages for beard oil and beard shampoo, ready for checkout." },
      { title: "Class registration", description: "Dedicated pages for educational offerings and enrollment." },
      { title: "Sponsorship info", description: "A clear path for brands to explore podcast partnerships." },
      { title: "Mobile-responsive experience", description: "Built to feel just as considered on phone as on desktop." },
    ],

    outcome:
      "The finished website created one central platform for AP's barbering business, podcast, products, classes, and growing personal brand — making the different parts of his work easier to understand and access. The More Than a Barber podcast reached its 100th episode milestone, with Episode 100 featuring Raekwon of Wu-Tang Clan.",
  },

  {
    slug: "rising-builders",
    name: "Rising Builders",
    industry: "Nonprofit · Trade Education",
    categories: ["Websites", "Strategy", "Social Media"],
    services: ["Website Redesign", "Mobile Optimization", "Content Strategy"],
    summary:
      "A website restructuring and mobile optimization project for a McKinney-based trade education organization serving individuals seeking practical skills and career development.",
    imageAlt: "Rising Builders Foundation Inc. logo",
    logo: { url: risingBuildersLogo.url, bg: "#003B7D" },
    accent: "sage",

    categoryLabel: "Nonprofit Website Redesign · Mobile Optimization · Content Strategy",
    platforms: ["GoDaddy Website Builder", "Canva", "Zeffy"],
    year: "2026",
    liveUrl: "https://risingbuilders.org/",
    client: "Rising Builders",

    clientOverview:
      "Rising Builders is a McKinney-based organization focused on trade education, workforce development, community impact, and helping individuals build sustainable career paths.",
    clientNeeded:
      "A clearer, more organized website with stronger messaging, cleaner mobile layouts, and easier ways for students, community members, and supporters to take action.",
    role: "Website strategist, website designer, mobile optimization specialist, content organizer, and social media content support.",

    challenge:
      "The existing website had important information that was difficult to find, page content in the wrong places, and mobile layouts with spacing, sizing, and alignment issues. It needed to feel more professional while making it obvious how to learn, get involved, or donate.",

    solution:
      "The project focused on restructuring what was already there — clearer navigation, corrected content placement, tightened mobile layouts, and a stronger call to give. Nothing was rebuilt for the sake of rebuilding.",
    solutionBullets: [
      "Restructured navigation and homepage hierarchy",
      "Corrected About and Contact content placement",
      "Rebuilt mobile hero section with proper spacing and image ratios",
      "Fixed overlapping elements and contact form alignment",
      "Clearer organization information and community-focused messaging",
      "Zeffy donation integration with a visible call-to-action",
    ],

    process: [
      "Discovery",
      "Strategy",
      "Design",
      "Build",
      "Testing & refinement",
      "Launch & handoff",
    ],

    gallery: [
      { caption: "Restructured homepage hierarchy", layout: "full", device: "desktop" },
      { caption: "Corrected About page layout", layout: "half", device: "desktop" },
      { caption: "Contact page with fixed form alignment", layout: "half", device: "desktop" },
      { caption: "Rebuilt mobile hero section", layout: "half", device: "mobile" },
      { caption: "Donation call-to-action on mobile", layout: "half", device: "mobile" },
    ],

    features: [
      { title: "Restructured navigation", description: "Reorganized so key information is one tap or click away." },
      { title: "Improved homepage hierarchy", description: "Clearer flow from mission to programs to how to get involved." },
      { title: "Corrected content placement", description: "About and Contact pages now hold the right information in the right places." },
      { title: "Updated mobile hero", description: "Rebuilt to sit correctly on phones with proper spacing and image ratios." },
      { title: "Cleaner spacing & ratios", description: "Consistent image sizing and breathing room across pages." },
      { title: "Fixed contact form alignment", description: "Form fields, labels, and submit button aligned on every screen size." },
      { title: "Donation call-to-action", description: "A clear, always-visible way for supporters to give through Zeffy." },
      { title: "Mobile-friendly layouts", description: "Rebuilt where mobile broke first — hero, forms, and image blocks." },
    ],

    outcome:
      "The restructured website gives Rising Builders a clearer, more professional online presence and makes it easier for students, community members, sponsors, and supporters to understand the organization and take action.",
  },

  {
    slug: "kimball-ridge",
    name: "Kimball Ridge Advisory Services",
    industry: "Professional Advisory",
    categories: ["Websites", "Branding"],
    services: ["Website Design", "Brand Support"],
    summary:
      "A refined, trustworthy website presence for a client-focused advisory practice.",
    imageAlt: "Kimball Ridge Advisory Services logo",
    logo: { url: kimballRidgeLogo.url, bg: "#F5F3EA" },
    accent: "cream",

    categoryLabel: "Advisory Website · Brand Support",
    platforms: [placeholder],
    year: "2026",
    client: "Kimball Ridge Advisory Services",

    clientOverview: placeholder,
    clientNeeded: placeholder,
    role: placeholder,
    challenge: placeholder,
    solution: placeholder,
    solutionBullets: [placeholder, placeholder, placeholder],

    process: ["Discovery", "Design", "Build", "Launch & handoff"],

    gallery: [
      { caption: "Homepage — editable placeholder", layout: "full", device: "desktop" },
      { caption: "Services page — editable placeholder", layout: "half", device: "desktop" },
      { caption: "Mobile view — editable placeholder", layout: "half", device: "mobile" },
    ],

    features: [
      { title: "Editable placeholder", description: placeholder },
      { title: "Editable placeholder", description: placeholder },
      { title: "Editable placeholder", description: placeholder },
    ],

    outcome: placeholder,
  },

  {
    slug: "pixels-by-raelyn",
    name: "Pixels by Raelyn",
    industry: "Personal Brand · Portfolio",
    categories: ["Websites", "Branding", "Strategy"],
    services: ["Portfolio Design", "Front-End Development", "Personal Branding"],
    summary:
      "A personal portfolio and service-based website showcasing Raelyn Brown's work across web design, digital strategy, branding, content creation, and client support.",
    imageAlt: "Pixels by Raelyn wordmark",
    accent: "olive",

    categoryLabel: "Portfolio Design · Personal Branding · Front-End Development",
    platforms: ["TanStack Start", "React", "Tailwind CSS v4", "TypeScript", "Vite"],
    year: "2026",
    client: "Personal brand project",

    clientOverview:
      "Pixels by Raelyn represents Raelyn's transition into professional website design and digital strategy. The brand combines creative design with practical business solutions for entrepreneurs, service providers, and growing organizations.",
    clientNeeded:
      "A single professional home that communicates a growing range of skills — design, development, strategy, copywriting, and client support — without feeling unfocused. It had to speak to both potential clients and employers.",
    role: "Brand strategist, UI designer, front-end developer, copywriter, and project manager.",

    challenge:
      "Pulling multiple disciplines under one clear brand without letting the site feel scattered. It needed to show real projects, thought process, and technical growth while staying inviting to a small-business client and credible to a hiring manager.",

    solution:
      "The site is built around a small set of pillars — services, work, about, and contact — with each project getting its own case study rather than a single gallery. The visual system is anchored to the Pixels by Raelyn logo, sage and camel palette, and an editorial serif paired with a modern sans-serif.",
    solutionBullets: [
      "Strong personal brand introduction that leads with what Raelyn does and who it's for",
      "Services overview with clear scopes and starting points",
      "Individual project case studies for every featured client",
      "About page with story, skills, and tools",
      "Detailed inquiry form on the Contact page",
      "Consistent visual system built on the Pixels by Raelyn logo and brand colors",
    ],

    process: [
      "Discovery",
      "Strategy",
      "Design",
      "Build",
      "Testing & refinement",
      "Launch & handoff",
    ],

    gallery: [
      { caption: "Home page — editorial hero and featured work", layout: "full", device: "desktop" },
      { caption: "Services page", layout: "half", device: "desktop" },
      { caption: "Case study template", layout: "half", device: "desktop" },
      { caption: "Mobile navigation and hero", layout: "half", device: "mobile" },
      { caption: "Inquiry form on mobile", layout: "half", device: "mobile" },
    ],

    features: [
      { title: "Personal brand introduction", description: "Leads with a clear sense of who Pixels by Raelyn is for." },
      { title: "Services overview", description: "Website design, front-end development, strategy, and content." },
      { title: "Individual case studies", description: "Each project gets its own dedicated page and story." },
      { title: "About page", description: "Story, working style, skills, and tools in one place." },
      { title: "Skills & tools", description: "A transparent look at the stack behind the work." },
      { title: "Detailed inquiry form", description: "A structured form on Contact for scoping new projects." },
      { title: "Responsive navigation", description: "Consistent header and footer across every route." },
      { title: "Mobile-friendly layouts", description: "Designed for phone first, then scaled up." },
    ],

    outcome:
      "The portfolio creates a central professional home for Raelyn's work and demonstrates her ability to combine visual design, website development, strategy, copywriting, and client support.",
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
export const getNextProject = (slug: string) => {
  const i = projects.findIndex((p) => p.slug === slug);
  if (i === -1) return projects[0];
  return projects[(i + 1) % projects.length];
};

export const categories: (Category | "All")[] = [
  "All",
  "Websites",
  "Branding",
  "Social Media",
  "Strategy",
];
