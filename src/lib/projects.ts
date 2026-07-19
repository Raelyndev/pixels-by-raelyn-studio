// Central project data. Update copy, images, and case study fields here.
// Do not fabricate metrics, testimonials, or outcomes. Only include verified
// information supplied by the client.

export type Category = "Websites" | "Branding" | "Social Media" | "Strategy";

import vipBarberLogo from "@/assets/logos/vip-barber-lounge.jpg.asset.json";
import rootedLabLogo from "@/assets/logos/rooted-lab-co.png.asset.json";
import kimballRidgeLogo from "@/assets/logos/kimball-ridge.png.asset.json";
import risingBuildersLogo from "@/assets/logos/rising-builders.jpg.asset.json";

export interface ProcessStep {
  name: string;
  description: string;
}

export interface GalleryItem {
  /** Short caption describing the image to add */
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
  status: string;
  liveUrl?: string;
  client: string;

  // Case study content
  clientOverview: string;
  clientNeeded: string;
  role: string;
  challenge: string;
  solution: string;
  solutionBullets?: string[];

  servicesIntro?: string;
  scope?: string[];

  processIntro?: string;
  process: ProcessStep[];

  features: FeatureItem[];
  metrics?: string[];
  outcome: string;
  skills?: string[];

  gallery: GalleryItem[];
}

export const projects: Project[] = [
  {
    slug: "perfect-part",
    name: "The Perfect Part® Comb",
    industry: "Beauty & Grooming Product, by Rooted Lab & Co.",
    categories: ["Websites", "Branding", "Social Media"],
    services: [
      "Website strategy",
      "Sitemap and page planning",
      "Squarespace website design",
      "Responsive design",
      "E-commerce setup",
      "Product page design",
      "Product copywriting",
      "Founder story development",
      "Waitlist landing page",
      "Email signup setup",
      "Welcome email development",
      "FAQ development",
      "Shipping and policy development",
      "Squarespace Payments configuration",
      "Easyship workflow planning",
      "Social media launch support",
      "Content planning",
      "Ongoing website updates",
    ],
    summary:
      "A complete digital launch experience for The Perfect Part® Comb, an adjustable sectioning comb created to help stylists, braiders, and everyday users make clean, evenly sized parts with greater consistency.",
    imageAlt: "Rooted Lab & Co. logo, parent brand of The Perfect Part® Comb",
    logo: { url: rootedLabLogo.url, bg: "#F5F3EA" },
    accent: "camel",

    categoryLabel: "E-commerce Website · Product Launch · Digital Strategy",
    platforms: [
      "Squarespace",
      "Squarespace Commerce",
      "Easyship",
      "Canva",
      "Email marketing tools",
    ],
    year: "2026",
    status: "Launched, with continued website and marketing support",
    client: "Rooted Lab & Co.",

    clientOverview:
      "Rooted Lab & Co. is the company behind The Perfect Part® Comb. Its founder, Mo, developed the product after recognizing how difficult and time-consuming it could be to create evenly sized sections consistently. Mo brought a problem-solving mindset shaped by 20 years in Army aviation and taught herself 3D printing to develop the comb. The product went through multiple prototypes, tests, and improvements before becoming ready for manufacturing and launch.",
    clientNeeded:
      "The product needed more than a standard online store. Because it introduced a new tool and method, customers needed to quickly understand what the comb does, how the adjustable guide works, who the product is for, why it is different from a traditional rat-tail comb, how to join the waitlist or purchase it, and what to expect after ordering. The brand also needed a system for collecting early interest before inventory became available.",
    role: "I served as the website designer, e-commerce strategist, copywriter, brand support partner, launch coordinator, and digital content strategist. I helped translate the product's technical details and founder story into a customer-facing website that was understandable, polished, and easy to navigate.",

    challenge:
      "My main challenge was introducing an unfamiliar product without overwhelming visitors. The website needed to educate customers, build trust in a product that had not yet entered the market, capture early demand, and eventually support pre-orders and sales. The project also evolved while the product was still being developed, so the website, messaging, policies, launch timeline, and visual direction had to stay flexible.",

    solution:
      "I designed a product-led digital experience that moves customers through three stages. First, I helped visitors understand the problem by explaining the difficulty of creating equal sections and why the product was created. Next, I introduced the product by presenting the adjustable guide sizes, locking mechanism, materials, and uses in clear language. Finally, I guided visitors toward the next step, whether that was joining the waitlist, exploring the product, pre-ordering, or purchasing.",
    solutionBullets: [
      "Product-first homepage that leads with the comb and its use cases",
      "Feature explanations covering the adjustable guide tooth and 13 locked click sizes",
      "Founder story that grounds the invention in Mo's real experience",
      "Waitlist landing page paired with an automated welcome email",
      "FAQ, shipping, return, and cancellation policies written in plain language",
    ],

    servicesIntro:
      "I handled strategy, design, copy, and configuration across the full launch experience, from the early-access page to the live storefront.",
    scope: [
      "Early-access landing page",
      "Homepage",
      "Shop page",
      "Product page",
      "About page",
      "FAQ page",
      "Email signup experience",
      "Order policies",
      "Shipping information",
      "Mobile optimization",
      "Pre-order and purchase flow",
    ],

    processIntro:
      "I worked in stages that matched where the product was in its development, so the site could grow with it from waitlist to live storefront.",
    process: [
      {
        name: "Discovery",
        description:
          "I met with the client to understand the invention, intended customer, product-development story, launch timeline, and business goals.",
      },
      {
        name: "Strategy",
        description:
          "I planned the website around the questions a customer would naturally have when meeting a new product for the first time.",
      },
      {
        name: "Content and design",
        description:
          "I developed the page hierarchy, product explanations, founder story, policies, calls to action, and visual layouts.",
      },
      {
        name: "E-commerce setup",
        description:
          "I configured the product experience, payment processing, order information, and shipping workflow.",
      },
      {
        name: "Testing and launch",
        description:
          "I reviewed the site across screen sizes, tested the customer journey, and supported the shift from waitlist to pre-orders and sales.",
      },
    ],

    features: [
      {
        title: "Product education",
        description:
          "Clear feature explanations help visitors understand how the adjustable guide tooth and 13 locked click sizes work.",
      },
      {
        title: "Waitlist funnel",
        description:
          "An early-access page collected prospective customer information before the product became available.",
      },
      {
        title: "E-commerce experience",
        description:
          "The site supports product discovery, ordering, payment, and clear shipping information.",
      },
      {
        title: "Founder storytelling",
        description:
          "The About content connects the invention to Mo's experience, persistence, and hands-on development process.",
      },
      {
        title: "Customer support content",
        description:
          "FAQs and policies answer the questions customers ask before and after purchase.",
      },
    ],

    metrics: [
      "Launch-day waitlist began with 34 subscribers",
      "Waitlist grew to 175 subscribers by February 2, 2026",
      "Moved from an early-access landing page into an active e-commerce and pre-order experience",
    ],

    outcome:
      "The final website gave The Perfect Part® Comb a dedicated digital home that educates customers, collects early demand, tells the founder's story, and supports the shift from product development to online sales.",

    skills: [
      "UX thinking",
      "E-commerce design",
      "Website strategy",
      "Responsive design",
      "Product storytelling",
      "Copywriting",
      "Email-list development",
      "Customer journey planning",
      "Platform configuration",
      "Client communication",
      "Launch coordination",
    ],

    gallery: [
      { caption: "Add desktop homepage screenshot", layout: "full", device: "desktop" },
      { caption: "Add desktop product page screenshot", layout: "half", device: "desktop" },
      { caption: "Add waitlist landing page screenshot", layout: "half", device: "desktop" },
      { caption: "Add mobile shop page screenshot", layout: "half", device: "mobile" },
      { caption: "Add mobile How It Works section screenshot", layout: "half", device: "mobile" },
    ],
  },

  {
    slug: "more-than-a-barber",
    name: "More Than a Barber",
    industry: "Podcast, Barbering & Community",
    categories: ["Websites", "Branding", "Social Media", "Strategy"],
    services: [
      "Website strategy",
      "Sitemap planning",
      "Squarespace website design",
      "Responsive design",
      "Booksy integration",
      "Podcast content organization",
      "Product-page setup",
      "Squarespace Commerce support",
      "Class registration setup",
      "Copywriting",
      "Domain and Google Workspace support",
      "Sponsorship deck",
      "One-page media kit",
      "Sponsorship rate guide",
      "Sponsorship outreach tracker",
      "Sponsorship package planning",
      "Ongoing website updates",
    ],
    summary:
      "A multi-purpose website and digital platform that connects AP's barbering services, podcast, education, grooming products, personal brand, and sponsorship opportunities.",
    imageAlt: "VIP Barber Lounge logo",
    logo: { url: vipBarberLogo.url, bg: "#0A0A0A" },
    accent: "olive",

    categoryLabel:
      "Personal Brand Website · Podcast Platform · E-commerce · Sponsorship Strategy",
    platforms: [
      "Squarespace",
      "Squarespace Commerce",
      "Booksy",
      "Canva",
      "Google Workspace",
      "Google Sheets",
    ],
    year: "2026",
    status: "Launched, with ongoing website and sponsorship support",
    client: "AP, More Than a Barber and VIP Barber Lounge",

    clientOverview:
      "AP is a barber, entrepreneur, educator, speaker, mentor, and host of the More Than a Barber podcast. His work is based on the belief that a person's skills can become the foundation for a much larger purpose. Through VIP Barber Lounge and More Than a Barber, AP combines grooming, education, entrepreneurship, conversations, mentorship, and personal development.",
    clientNeeded:
      "AP had several connected offerings that needed to be organized into one clear online experience. Visitors needed to understand who he was and easily find the part of the brand that mattered to them. The website had to support barber appointment booking, podcast discovery, episode viewing, educational classes, grooming product sales, AP's personal story, sponsorship opportunities, and general inquiries.",
    role: "I worked as the website designer, digital strategist, copywriter, e-commerce support partner, content organizer, sponsorship-material designer, and outreach-system developer.",

    challenge:
      "My challenge was bringing multiple sides of AP's work together without making the website feel disconnected or crowded. The platform needed to serve several audiences, including grooming clients, podcast viewers, aspiring barbers, class participants, product customers, and potential sponsors.",

    solution:
      "I built one connected platform with clear paths based on what each visitor wants to do. Local clients can book services through Booksy. Podcast viewers and aspiring professionals can find episodes, AP's story, and educational offerings. Product customers and potential sponsors can shop grooming products and explore partnership opportunities.",
    solutionBullets: [
      "Sitemap that separates services, podcast, classes, products, and sponsorship without isolating them",
      "Booksy booking connected directly to the barber services pages",
      "Podcast hub with host bio, featured episodes, and video links",
      "GENTRŪ product pages for beard oil, beard shampoo, and the Premium Beard Set",
      "Sponsorship deck, media kit, rate guide, and outreach tracker built as AP expanded into paid partnerships",
    ],

    servicesIntro:
      "I supported AP across several connected areas, from the day-to-day website to the sponsorship system that came later.",
    scope: [
      "Homepage",
      "About content",
      "Barber services",
      "Booksy booking access",
      "Podcast page",
      "Featured episode content",
      "Product pages",
      "Educational class information",
      "Registration and payment options",
      "Sponsorship materials",
      "Contact and inquiry pathways",
      "Mobile optimization",
    ],

    processIntro:
      "The project grew over time, so I worked in phases that matched the business as it added the podcast, classes, products, and sponsorship work.",
    process: [
      {
        name: "Discovery",
        description:
          "I reviewed AP's services, podcast, classes, products, audience, goals, and existing brand presence.",
      },
      {
        name: "Information architecture",
        description:
          "I organized the different areas of the business so visitors could see how they related without losing sight of the main brand.",
      },
      {
        name: "Design and content",
        description:
          "I created responsive page layouts and developed copy that presented AP as more than a service provider.",
      },
      {
        name: "Integrations and commerce",
        description:
          "I connected booking, products, class registration, payment options, and external content.",
      },
      {
        name: "Expansion",
        description:
          "As AP's sponsorship work grew, I developed the materials and tracking system needed to support sponsor outreach.",
      },
    ],

    features: [
      {
        title: "Booksy integration",
        description:
          "Visitors can move from the website into AP's appointment-booking experience.",
      },
      {
        title: "Podcast hub",
        description:
          "The podcast section highlights episodes, guests, video content, and the larger message behind More Than a Barber.",
      },
      {
        title: "Educational offerings",
        description:
          "Class pages provide clear information, pricing, registration options, and participant expectations.",
      },
      {
        title: "E-commerce",
        description:
          "The website features GENTRŪ Beard Oil, Beard Shampoo, and the Premium Beard Set.",
      },
      {
        title: "Sponsorship system",
        description:
          "The project expanded to include a sponsorship deck, one-page media kit, rate guide, package options, and collaborative outreach tracker.",
      },
    ],

    metrics: [
      "The More Than a Barber podcast reached its 100th episode milestone",
      "Episode 100 featured Raekwon of Wu-Tang Clan",
      "AP secured his first paid podcast sponsor, creating the need for a structured sponsorship system",
      "The Fully Booked Barber Experience class was offered at $397, with a $100 deposit option",
      "Three online registrations were recorded for the referenced class launch",
    ],

    outcome:
      "The website created one central destination for AP's services, content, products, education, and personal brand. The project later expanded into a sponsorship system that gave AP professional materials for presenting the podcast to potential partners and tracking outreach.",

    skills: [
      "Multi-audience website strategy",
      "Responsive web design",
      "Content organization",
      "Podcast platform planning",
      "E-commerce support",
      "Booking integration",
      "Copywriting",
      "Sponsorship strategy",
      "Presentation design",
      "CRM and tracker development",
      "Client support",
      "Digital brand expansion",
    ],

    gallery: [
      { caption: "Add desktop homepage screenshot", layout: "full", device: "desktop" },
      { caption: "Add desktop podcast page screenshot", layout: "half", device: "desktop" },
      { caption: "Add barber services page screenshot", layout: "half", device: "desktop" },
      { caption: "Add mobile product page screenshot", layout: "half", device: "mobile" },
      { caption: "Add sponsorship deck preview", layout: "half", device: "desktop" },
    ],
  },

  {
    slug: "rising-builders",
    name: "Rising Builders",
    industry: "Nonprofit · Trade Education",
    categories: ["Websites", "Strategy", "Social Media"],
    services: [
      "Website audit",
      "Website restructuring",
      "Navigation review",
      "GoDaddy website editing",
      "Mobile optimization",
      "Content organization",
      "Copy refinement",
      "About page updates",
      "Contact page corrections",
      "Image sizing and compression",
      "Contact-form alignment",
      "Donation-section planning",
      "Zeffy integration planning",
      "Leadership-content organization",
      "Social media strategy",
      "Social media content development",
    ],
    summary:
      "A website restructuring and content-support project for a community-focused organization working to connect people with trade education, practical skills, workforce development, and new career opportunities.",
    imageAlt: "Rising Builders Foundation Inc. logo",
    logo: { url: risingBuildersLogo.url, bg: "#003B7D" },
    accent: "sage",

    categoryLabel:
      "Website Restructure · Mobile Optimization · Digital Content Support",
    platforms: [
      "GoDaddy Website Builder",
      "Zeffy",
      "Canva",
      "Google Docs",
      "Social media platforms",
    ],
    year: "2026",
    status: "In progress, website improvements and content development ongoing",
    liveUrl: "https://risingbuilders.org/",
    client: "Rising Builders",

    clientOverview:
      "Rising Builders is a McKinney-based organization focused on trade education and workforce development. Its work is centered on helping participants build practical knowledge, professional confidence, and pathways toward sustainable careers.",
    clientNeeded:
      "The existing website contained useful information, but the organization and mobile presentation made it difficult for visitors to fully understand the program. The team needed a clearer website structure, better mobile layouts, stronger organizational messaging, correct placement of About and Contact content, improved image presentation, a clearer donation pathway, updated leadership information, and social media content support.",
    role: "I am supporting Rising Builders as a website strategist, website editor, mobile-layout specialist, content organizer, copywriter, and social media content partner.",

    challenge:
      "The website had structural and visual issues that affected usability, particularly on mobile devices. Some content appeared on the wrong pages, images and sections did not scale consistently, and the organization's mission and community impact needed clearer presentation. The project also required working within the layout and functionality available through the GoDaddy Website Builder.",

    solution:
      "I focused on improving the existing website rather than rebuilding it. I reorganized navigation and page content so visitors can find information more easily, corrected sizing, spacing, alignment, image ratios, and overlapping elements on mobile, refined the organization's language for students, families, community members, sponsors, and donors, and improved contact and donation pathways using Zeffy.",
    solutionBullets: [
      "Reorganized navigation and homepage hierarchy for clearer wayfinding",
      "Rebuilt mobile hero, spacing, image ratios, and overlapping sections",
      "Corrected About and Contact content so each page serves a clear purpose",
      "Planned a Zeffy donation section with a visible call to give",
      "Aligned website and social content around the organization's mission and programs",
    ],

    servicesIntro:
      "My work centers on cleaning up the existing site, improving mobile usability, and building a stronger foundation for donor and community communication.",
    scope: [
      "Homepage improvements",
      "Navigation restructuring",
      "About page improvements",
      "Contact page corrections",
      "Leadership content",
      "Mobile hero updates",
      "Image and spacing corrections",
      "Donation call to action",
      "Zeffy donation section",
      "Social media support",
      "Ongoing content refinement",
    ],

    processIntro:
      "Because this is an ongoing project inside an existing website builder, my process is focused on prioritized improvements rather than a rebuild.",
    process: [
      {
        name: "Audit",
        description:
          "I reviewed the website's structure, mobile experience, content placement, and visual inconsistencies.",
      },
      {
        name: "Prioritization",
        description:
          "I worked with the team to identify the most important corrections and the information visitors need first.",
      },
      {
        name: "Restructure",
        description:
          "I reorganized page content, navigation, imagery, and calls to action within GoDaddy's existing builder.",
      },
      {
        name: "Mobile refinement",
        description:
          "I corrected layout issues that affected readability and usability on smaller screens.",
      },
      {
        name: "Content expansion",
        description:
          "The scope expanded to include leadership content, donation planning, and social media development.",
      },
    ],

    features: [
      {
        title: "Clearer navigation",
        description:
          "The revised organization helps visitors understand where to find program, leadership, contact, and support information.",
      },
      {
        title: "Mobile optimization",
        description:
          "Hero sections, images, spacing, and content blocks are being adjusted for smaller screens.",
      },
      {
        title: "Correct content placement",
        description:
          "About and Contact information is being reorganized so each page serves a clear purpose.",
      },
      {
        title: "Donation pathway",
        description:
          "A Zeffy section is being developed to make financial support easier to understand and access.",
      },
      {
        title: "Brand consistency",
        description:
          "Website and social content are being aligned around the organization's mission, programs, and community impact.",
      },
    ],

    outcome:
      "This is an ongoing project. The work completed so far is creating a clearer, more professional, and easier-to-navigate digital presence while giving Rising Builders a stronger foundation for future program, donation, sponsor, and community communications.",

    skills: [
      "Website auditing",
      "Information architecture",
      "Mobile optimization",
      "Content strategy",
      "GoDaddy Website Builder",
      "Copywriting",
      "Nonprofit communication",
      "Donation integration planning",
      "Social media strategy",
      "Stakeholder collaboration",
      "Working within platform limitations",
    ],

    gallery: [
      { caption: "Add desktop homepage screenshot", layout: "full", device: "desktop" },
      { caption: "Add About page screenshot", layout: "half", device: "desktop" },
      { caption: "Add Contact page screenshot", layout: "half", device: "desktop" },
      { caption: "Add mobile hero screenshot", layout: "half", device: "mobile" },
      { caption: "Add mobile donation call-to-action screenshot", layout: "half", device: "mobile" },
    ],
  },

  {
    slug: "kimball-ridge",
    name: "Kimball Ridge Advisory Services and Candace N. Ford",
    industry: "Professional Advisory · Author Platform",
    categories: ["Branding", "Social Media", "Strategy"],
    services: [
      "Multi-brand content strategy",
      "Audience clarification",
      "Content-pillar development",
      "Brand-voice guidance",
      "Social media planning",
      "Sample post design",
      "Caption development",
      "Hashtag direction",
      "Asset-organization planning",
      "Client review workflow",
      "Ongoing content support",
    ],
    summary:
      "A connected content strategy developed for two brands owned by one client: Kimball Ridge Advisory Services and Candace N. Ford's author platform.",
    imageAlt: "Kimball Ridge Advisory Services logo",
    logo: { url: kimballRidgeLogo.url, bg: "#F5F3EA" },
    accent: "cream",

    categoryLabel: "Multi-Brand Content Strategy · Social Media Development",
    platforms: ["Canva", "Google Docs", "Google Drive", "Social media platforms"],
    year: "2026",
    status: "Strategy completed, with content development and ongoing support in progress",
    client: "Candace N. Ford",

    clientOverview:
      "Candace N. Ford operates two distinct but connected professional brands. Kimball Ridge Advisory Services provides advisory and educational content for organizations, including nonprofits. Candace's author platform focuses on her writing, ideas, expertise, and personal voice.",
    clientNeeded:
      "Candace needed a content system that could support both brands without making them feel identical. Kimball Ridge needed to communicate expertise, education, and practical value to organizational audiences. The author platform needed to feel more personal and conversational while still supporting Candace's professional credibility. She also needed a clearer way to organize and share brand assets for both businesses.",
    role: "I served as the content strategist, brand-support designer, social media planner, copywriter, sample-content designer, and client workflow organizer.",

    challenge:
      "My main challenge was developing two separate brand voices for one person while keeping a natural connection between them. The content could not feel overly promotional. Each brand needed educational and relationship-building content that would give its audience a reason to follow, engage, and return.",

    solution:
      "I developed a clear content direction for each brand. For Kimball Ridge Advisory Services, I focused on educational, authority-building content about nonprofit operations, financial awareness, leadership, and organizational sustainability. For Candace's author platform, I created a relatable, thoughtful, conversational voice centered on writing, personal insight, reflection, and audience connection. I also built a shared workflow for collecting assets, developing content, reviewing materials, and maintaining consistency.",
    solutionBullets: [
      "Two distinct content directions with separate audiences and tone",
      "Content pillars and posting recommendations for each brand",
      "Sample author post and sample Kimball Ridge educational post to model the strategy",
      "\"5 Financial Mistakes Nonprofits Make\" content concept for Kimball Ridge",
      "Organized process for sharing assets and reviewing content",
    ],

    servicesIntro:
      "My contribution focused on strategy, brand voice, and the day-to-day tools Candace needed to keep two brands running side by side.",
    scope: [
      "Complete content-strategy document",
      "Separate content direction for both brands",
      "Brand-specific content pillars",
      "Posting recommendations",
      "Caption and messaging guidance",
      "Sample Candace author post",
      "Sample Kimball Ridge educational post",
      "\"5 Financial Mistakes Nonprofits Make\" content concept",
      "Organized process for sharing and reviewing assets",
    ],

    processIntro:
      "I approached this as a strategy engagement first, then followed it with sample content and a workflow Candace could keep using.",
    process: [
      {
        name: "Discovery",
        description:
          "I reviewed Candace's goals, current pages, services, audience, and the relationship between the two brands.",
      },
      {
        name: "Brand separation",
        description:
          "I identified where the brands should connect and where their tone, topics, and visuals should differ.",
      },
      {
        name: "Strategy",
        description:
          "I created content pillars and recommendations that could guide ongoing posting instead of one-off ideas.",
      },
      {
        name: "Sample creation",
        description:
          "I designed sample posts to show how the strategy would translate into real social content.",
      },
      {
        name: "Workflow planning",
        description:
          "I developed a practical approach to asset sharing, content review, and collaboration.",
      },
    ],

    features: [
      {
        title: "Two distinct content directions",
        description:
          "Each brand has its own audience, tone, and content purpose.",
      },
      {
        title: "Educational content framework",
        description:
          "Kimball Ridge content is designed to demonstrate expertise by teaching, not constantly selling.",
      },
      {
        title: "Author-content framework",
        description:
          "Candace's author content is designed to sound human, thoughtful, and connected to her voice.",
      },
      {
        title: "Visual examples",
        description:
          "Sample designs show how the written strategy applies to real posts.",
      },
      {
        title: "Collaborative workflow",
        description:
          "The project includes a process for organizing materials and reviewing future content.",
      },
    ],

    outcome:
      "The completed strategy gives Candace a clearer foundation for managing two brands without blending their messages together. It also provides a repeatable system for developing content that supports credibility, connection, and long-term consistency.",

    skills: [
      "Content strategy",
      "Multi-brand planning",
      "Audience research",
      "Brand-voice development",
      "Social media design",
      "Copywriting",
      "Educational content development",
      "Client collaboration",
      "Workflow organization",
      "Canva design",
    ],

    gallery: [
      { caption: "Add content strategy document preview", layout: "full", device: "desktop" },
      { caption: "Add sample Kimball Ridge educational post", layout: "half", device: "mobile" },
      { caption: "Add sample Candace N. Ford author post", layout: "half", device: "mobile" },
      { caption: "Add content pillars overview graphic", layout: "half", device: "desktop" },
      { caption: "Add asset-organization workflow screenshot", layout: "half", device: "desktop" },
    ],
  },

  {
    slug: "pixels-by-raelyn",
    name: "Pixels by Raelyn",
    industry: "Personal Brand · Portfolio",
    categories: ["Websites", "Branding", "Strategy"],
    services: [
      "Portfolio strategy",
      "Sitemap and page planning",
      "UI design",
      "Front-end development",
      "Copywriting",
      "Case study writing",
      "Responsive design",
      "SEO metadata",
      "Inquiry form design",
    ],
    summary:
      "A personal portfolio and service-based website showcasing my work across web design, digital strategy, branding, content creation, and client support.",
    imageAlt: "Pixels by Raelyn wordmark",
    accent: "olive",

    categoryLabel: "Portfolio Design · Personal Branding · Front-End Development",
    platforms: ["TanStack Start", "React", "Tailwind CSS v4", "TypeScript", "Vite"],
    year: "2026",
    status: "Launched, with ongoing updates",
    client: "Personal brand project",

    clientOverview:
      "Pixels by Raelyn is my personal brand and professional home. It brings my design, development, strategy, copywriting, and client support work together in one place, aimed at both potential clients and hiring managers.",
    clientNeeded:
      "I needed a single professional home that could hold a growing range of skills without feeling unfocused. It had to speak clearly to small-business clients who want to hire me, and to employers evaluating my range and technical growth.",
    role: "I served as the brand strategist, UI designer, front-end developer, copywriter, and project manager.",

    challenge:
      "My challenge was pulling multiple disciplines under one brand without letting the site feel scattered. It needed to show real projects, my thinking, and my technical growth while staying inviting to a small-business client and credible to a hiring manager.",

    solution:
      "I built the site around a small set of pillars, services, work, about, and contact, and gave every project its own case study instead of collecting everything into a single gallery. I anchored the visual system to the Pixels by Raelyn logo, a sage and camel palette, and an editorial serif paired with a modern sans-serif.",
    solutionBullets: [
      "Personal brand introduction that leads with what I do and who I work with",
      "Services overview with clear scopes and starting points",
      "Individual case study for every featured client project",
      "About page that covers my story, working style, and toolkit",
      "Detailed inquiry form on the Contact page for scoping new projects",
    ],

    servicesIntro:
      "I designed, built, wrote, and shipped this site myself, treating it like a client engagement.",
    scope: [
      "Home page",
      "Services page",
      "Work index",
      "Individual case study pages",
      "About page",
      "Contact page with inquiry form",
      "Custom 404 page",
      "Responsive navigation and footer",
      "SEO metadata and sitemap",
    ],

    processIntro:
      "I followed the same process I use with clients, adapted for a personal brand where I acted as both designer and stakeholder.",
    process: [
      {
        name: "Discovery",
        description:
          "I clarified who this site is for, what it needs to prove, and how to balance client-facing and employer-facing goals.",
      },
      {
        name: "Strategy",
        description:
          "I mapped the sitemap, page hierarchy, and case study template around the pillars I wanted to lead with.",
      },
      {
        name: "Design",
        description:
          "I built the visual system from the Pixels by Raelyn logo, sage and camel palette, and editorial type pairing.",
      },
      {
        name: "Build",
        description:
          "I developed the site in TanStack Start with React, Tailwind, and TypeScript, focused on responsive layouts.",
      },
      {
        name: "Launch and iterate",
        description:
          "I continue to refine copy, add new case studies, and improve the site as my work grows.",
      },
    ],

    features: [
      {
        title: "Personal brand introduction",
        description:
          "The home page leads with a clear sense of who Pixels by Raelyn is for.",
      },
      {
        title: "Services overview",
        description:
          "Website design, front-end development, strategy, and content are broken out with clear starting points.",
      },
      {
        title: "Individual case studies",
        description:
          "Each featured client gets its own dedicated case study page instead of a single gallery.",
      },
      {
        title: "About page",
        description:
          "My story, working style, skills, and tools live in one organized place.",
      },
      {
        title: "Detailed inquiry form",
        description:
          "The Contact page includes a structured form for scoping new projects.",
      },
      {
        title: "Responsive layouts",
        description:
          "The site is designed phone-first and scaled up to desktop.",
      },
    ],

    outcome:
      "The portfolio gives me a central professional home and shows my ability to combine visual design, website development, strategy, copywriting, and client support in one cohesive project.",

    skills: [
      "Brand strategy",
      "UI design",
      "Front-end development",
      "Responsive design",
      "Copywriting",
      "Case study writing",
      "Information architecture",
      "SEO fundamentals",
      "Project management",
    ],

    gallery: [
      { caption: "Add home page screenshot", layout: "full", device: "desktop" },
      { caption: "Add services page screenshot", layout: "half", device: "desktop" },
      { caption: "Add case study template screenshot", layout: "half", device: "desktop" },
      { caption: "Add mobile navigation screenshot", layout: "half", device: "mobile" },
      { caption: "Add mobile inquiry form screenshot", layout: "half", device: "mobile" },
    ],
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
