import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Pixels by Raelyn" },
      {
        name: "description",
        content:
          "Website design, redesign, audits, brand and creative support, social media content, and digital strategy for small businesses across Texas.",
      },
      { property: "og:title", content: "Services — Pixels by Raelyn" },
      {
        property: "og:description",
        content:
          "Creative services built around what your business needs next — websites, brand support, content, and digital strategy.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const groups = [
  {
    n: "01",
    title: "Website Design & Redesign",
    who: "Small businesses, founders, and organizations launching or refreshing a website.",
    items: [
      "Custom website design",
      "Website redesign",
      "Responsive mobile design",
      "Page structure and navigation",
      "User experience improvements",
      "Basic on-page SEO setup",
      "Contact forms and calls to action",
      "Platform setup and support",
      "Launch preparation",
    ],
  },
  {
    n: "02",
    title: "Website Audits & Optimization",
    who: "Businesses with an existing website that no longer reflects where they are headed.",
    items: [
      "Website review",
      "Mobile experience review",
      "Navigation improvements",
      "Content organization",
      "Visual consistency",
      "User experience recommendations",
      "Performance and usability improvements",
      "Updates to existing pages",
    ],
  },
  {
    n: "03",
    title: "Brand & Creative Support",
    who: "Founders who want a stronger, more recognizable presence across digital platforms.",
    items: [
      "Visual direction",
      "Brand consistency",
      "Digital graphics",
      "Marketing materials",
      "Presentation design",
      "Campaign creative",
      "Templates",
      "Creative consultation",
    ],
  },
  {
    n: "04",
    title: "Social Media Content",
    who: "Businesses that want to show up consistently without losing their personality.",
    items: [
      "Branded social media graphics",
      "Content planning",
      "Caption support",
      "Promotional content",
      "Educational carousels",
      "Launch content",
      "Reusable templates",
      "Ongoing content support",
    ],
  },
  {
    n: "05",
    title: "Digital Strategy & Support",
    who: "Businesses that need help connecting the pieces of their digital presence.",
    items: [
      "Digital presence review",
      "Platform recommendations",
      "Website and content strategy",
      "Digital organization",
      "Campaign planning",
      "Creative project support",
      "Ongoing website updates",
      "General digital troubleshooting",
    ],
  },
] as const;

function ServicesPage() {
  return (
    <>
      <section className="relative border-b border-border">
        <div className="watercolor right-[-160px] top-[-100px] h-[500px] w-[500px]" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-16 lg:px-10 lg:pt-28 lg:pb-24">
          <span className="eyebrow">Services · Custom to each business</span>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] max-w-4xl">
            Creative services built around what your business{" "}
            <span className="serif-italic text-camel">needs next.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-charcoal/85">
            Every engagement is shaped by your current goals, the platforms you already use, and the scope of the
            project. Below is a menu of how I can support you — most projects blend a few of these together.
          </p>
        </div>
      </section>

      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          {groups.map((g, i) => {
            const reverse = i % 2 === 1;
            return (
              <article
                key={g.n}
                className="grid gap-10 lg:gap-16 lg:grid-cols-12 border-b border-border py-16 lg:py-24 last:border-b-0"
              >
                <div className={`lg:col-span-5 ${reverse ? "lg:order-2" : ""}`}>
                  <div className="sticky top-28">
                    <span className="pixel-num text-4xl md:text-5xl">{g.n}</span>
                    <h2 className="mt-4 text-3xl sm:text-4xl leading-tight text-olive">{g.title}</h2>
                    <p className="mt-5 text-charcoal/85 leading-relaxed">
                      <span className="eyebrow-olive block mb-2">Designed for</span>
                      {g.who}
                    </p>
                    <p className="mt-6 serif-italic text-camel">Custom proposal based on project scope.</p>
                    <Link to="/contact" className="btn-primary mt-6">
                      Request a Custom Proposal <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
                <div className={`lg:col-span-7 ${reverse ? "lg:order-1" : ""}`}>
                  <span className="eyebrow-olive">Common deliverables</span>
                  <ul className="mt-5 grid gap-y-3 gap-x-8 sm:grid-cols-2">
                    {g.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-charcoal/90">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-camel" aria-hidden />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* "Not sure" section */}
      <section className="relative bg-sage-light/50 border-t border-border">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-10 lg:py-28 text-center">
          <span className="eyebrow">Not sure where to begin?</span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl leading-tight">
            Not sure where to start?{" "}
            <span className="serif-italic text-camel">Tell me about your business.</span>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-charcoal/85 leading-relaxed">
            If you are not certain which service fits, share where you are today and where you would like to go. I will
            respond with a thoughtful recommendation — whether that is one service, a combination, or a phased plan.
          </p>
          <Link to="/contact" className="btn-accent mt-8">
            Start a conversation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
