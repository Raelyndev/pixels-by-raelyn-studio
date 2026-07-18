import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import logoAsset from "@/assets/pixels-by-raelyn-logo.png.asset.json";
import sageWash from "@/assets/sage-wash.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Raelyn Brown — Pixels by Raelyn" },
      {
        name: "description",
        content:
          "Raelyn Brown is the designer behind Pixels by Raelyn — a creative digital studio based in the Dallas–Fort Worth area supporting small businesses across Texas and beyond.",
      },
      { property: "og:title", content: "About Raelyn Brown — Pixels by Raelyn" },
      {
        property: "og:description",
        content:
          "A creative problem-solver combining design, strategy, and structure to help small businesses grow.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const capabilities = [
  "Website design",
  "Responsive design",
  "User experience",
  "Website optimization",
  "Brand development",
  "Graphic design",
  "Social media content",
  "Content strategy",
  "Digital platform setup",
  "Creative project support",
];

const tools = ["Squarespace", "Shopify", "WordPress", "Canva", "Figma", "HTML", "CSS", "JavaScript"];

function AboutPage() {
  return (
    <>
      <section className="relative border-b border-border">
        <div className="watercolor right-[-140px] top-[-100px] h-[500px] w-[500px]" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-16 lg:px-10 lg:pt-28 lg:pb-24">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
            <div className="lg:col-span-7">
              <span className="eyebrow">About · Raelyn Brown</span>
              <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05]">
                I bring creativity, strategy, and{" "}
                <span className="serif-italic text-camel">structure together.</span>
              </h1>
              <div className="mt-8 space-y-5 text-lg text-charcoal/85 leading-relaxed max-w-2xl">
                <p>
                  I'm Raelyn Brown, the designer and creative problem-solver behind Pixels by Raelyn. I work with small
                  businesses, founders, and community-focused organizations to create stronger digital experiences.
                </p>
                <p>
                  My work often begins with a website, social media page, or creative idea that no longer reflects
                  where a business is headed. I help organize the vision, clarify the message, and design the tools
                  needed to move forward confidently.
                </p>
                <p>
                  With experience across web design, user experience, branding, content creation, and digital
                  platforms, I approach every project by considering both how it looks and how it works.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative pixel-frame">
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-sage-light">
                  <img
                    src={sageWash}
                    alt="Editable placeholder — replace with a professional portrait of Raelyn Brown."
                    width={1600}
                    height={1200}
                    className="w-full h-full object-cover opacity-90"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
                    <img src={logoAsset.url} alt="" width={72} height={72} className="h-16 w-16 rounded-sm" />
                    <p className="mt-6 serif-italic text-2xl text-olive">Raelyn Brown</p>
                    <p className="eyebrow-olive mt-1">Designer & Creative Studio Founder</p>
                    <p className="mt-6 max-w-[240px] text-xs text-charcoal/70">
                      Editable placeholder — replace with your portrait image.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <span className="eyebrow">My approach</span>
              <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl leading-tight">
                Thoughtful, collaborative, and grounded in{" "}
                <span className="serif-italic text-camel">your goals.</span>
              </h2>
            </div>
            <div className="lg:col-span-8">
              <p className="text-lg text-charcoal/85 leading-relaxed max-w-2xl">
                Every business arrives in a different place, so no two projects look the same. My approach is
                collaborative, organized, and tailored to each client instead of forcing every business into the same
                process or visual style. We take the time to understand what you actually need — then design toward
                that, not toward a template.
              </p>
              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                {[
                  { t: "Collaborative", b: "You are part of the process from beginning to end." },
                  { t: "Organized", b: "Clear phases, timelines, and expectations at every step." },
                  { t: "Considered", b: "Every design choice ties back to a business decision." },
                  { t: "Tailored", b: "Your project should look and feel like your business, not a template." },
                ].map((item) => (
                  <div key={item.t} className="border-t border-border pt-4">
                    <p className="serif-italic text-xl text-olive">{item.t}</p>
                    <p className="mt-2 text-charcoal/85">{item.b}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="relative bg-sage-light/40 border-y border-border">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <span className="eyebrow">Capabilities</span>
              <h2 className="mt-4 text-3xl sm:text-4xl leading-tight">What I work on</h2>
              <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-y-3">
                {capabilities.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-charcoal/90">
                    <span className="mt-2 h-1.5 w-1.5 bg-camel" aria-hidden />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="eyebrow">Platforms & tools</span>
              <h2 className="mt-4 text-3xl sm:text-4xl leading-tight">What I build with</h2>
              <ul className="mt-8 divide-y divide-border border-y border-border">
                {tools.map((t, i) => (
                  <li
                    key={t}
                    className="flex items-baseline justify-between py-3 text-charcoal"
                  >
                    <span className="serif-italic text-xl md:text-2xl">{t}</span>
                    <span className="pixel-num text-xs">{String(i + 1).padStart(2, "0")}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-10 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl leading-tight">
            Let's design something that feels like{" "}
            <span className="serif-italic text-camel">your business.</span>
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="btn-accent">
              Start a Project <ArrowRight size={16} />
            </Link>
            <Link to="/work" className="btn-ghost">View my work</Link>
          </div>
        </div>
      </section>
    </>
  );
}
