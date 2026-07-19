// Central project data. Update copy, images, and case study fields here.
// Values marked "[Editable placeholder]" are intentionally blank until the
// client provides final content — do not fabricate results or testimonials.

export type Category = "Websites" | "Branding" | "Social Media" | "Strategy";

import vipBarberLogo from "@/assets/logos/vip-barber-lounge.jpg.asset.json";
import rootedLabLogo from "@/assets/logos/rooted-lab-co.png.asset.json";
import kimballRidgeLogo from "@/assets/logos/kimball-ridge.png.asset.json";

export interface Project {
  slug: string;
  name: string;
  industry: string;
  categories: Category[];
  services: string[];
  summary: string;
  imageAlt: string;
  logo?: { url: string; bg?: string };
  // Case study fields
  clientOverview: string;
  challenge: string;
  goals: string[];
  role: string;
  approach: string;
  solution: string;
  outcome: string;
  testimonial: string;
  testimonialAttribution: string;
  accent: "sage" | "camel" | "olive" | "cream";
}

const placeholder = "[Editable placeholder — add final content in the editor]";

export const projects: Project[] = [
  {
    slug: "the-perfect-part-comb",
    name: "The Perfect Part® Comb",
    industry: "Beauty & Grooming Product — by Rooted Lab & Co",
    categories: ["Websites", "Branding", "Social Media"],
    services: ["Website Design", "Brand Support", "Social Media Content"],
    summary:
      "Digital presence and creative support for a purpose-built grooming tool by Rooted Lab & Co, with a growing customer base.",
    imageAlt: "Rooted Lab & Co logo — parent brand of The Perfect Part® Comb",
    logo: { url: rootedLabLogo.url, bg: "#F5F3EA" },
    clientOverview: placeholder,
    challenge: placeholder,
    goals: [placeholder, placeholder, placeholder],
    role: placeholder,
    approach: placeholder,
    solution: placeholder,
    outcome: placeholder,
    testimonial: placeholder,
    testimonialAttribution: placeholder,
    accent: "camel",
  },
  {
    slug: "more-than-a-barber-podcast",
    name: "VIP Barber Lounge x More Than A Barber Podcast",
    industry: "Podcast & Community",
    categories: ["Branding", "Social Media", "Strategy"],
    services: ["Brand Support", "Social Media Content", "Digital Strategy"],
    summary:
      "Branded content, episode graphics, and platform support for a conversation-driven podcast presented by VIP Barber Lounge.",
    imageAlt: "VIP Barber Lounge logo",
    logo: { url: vipBarberLogo.url, bg: "#0A0A0A" },
    clientOverview: placeholder,
    challenge: placeholder,
    goals: [placeholder, placeholder, placeholder],
    role: placeholder,
    approach: placeholder,
    solution: placeholder,
    outcome: placeholder,
    testimonial: placeholder,
    testimonialAttribution: placeholder,
    accent: "olive",
  },
  {
    slug: "rising-builders",
    name: "Rising Builders",
    industry: "Community Organization",
    categories: ["Websites", "Branding", "Strategy"],
    services: ["Website Design", "Brand Support", "Digital Strategy"],
    summary:
      "Website design and digital organization for a growing community-focused initiative.",
    imageAlt: "Placeholder image for Rising Builders project",
    clientOverview: placeholder,
    challenge: placeholder,
    goals: [placeholder, placeholder, placeholder],
    role: placeholder,
    approach: placeholder,
    solution: placeholder,
    outcome: placeholder,
    testimonial: placeholder,
    testimonialAttribution: placeholder,
    accent: "sage",
  },
  {
    slug: "kimball-ridge-advisory-services",
    name: "Kimball Ridge Advisory Services",
    industry: "Professional Advisory",
    categories: ["Websites", "Branding"],
    services: ["Website Design", "Brand Support"],
    summary:
      "A refined, trustworthy website presence for a client-focused advisory practice.",
    imageAlt: "Kimball Ridge Advisory Services logo",
    logo: { url: kimballRidgeLogo.url, bg: "#F5F3EA" },
    clientOverview: placeholder,
    challenge: placeholder,
    goals: [placeholder, placeholder, placeholder],
    role: placeholder,
    approach: placeholder,
    solution: placeholder,
    outcome: placeholder,
    testimonial: placeholder,
    testimonialAttribution: placeholder,
    accent: "cream",
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
