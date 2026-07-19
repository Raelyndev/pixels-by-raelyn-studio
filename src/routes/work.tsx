import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { ArrowUpRight } from "lucide-react";
import { projects, categories, type Category } from "@/lib/projects";
import { ProjectVisual } from "@/components/site/ProjectVisual";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Pixels by Raelyn" },
      {
        name: "description",
        content:
          "Selected work and collaborations from Pixels by Raelyn — websites, branding, social media content, and digital strategy.",
      },
      { property: "og:title", content: "Work — Pixels by Raelyn" },
      {
        property: "og:description",
        content: "Selected work and collaborations across websites, branding, social media, and strategy.",
      },
      { property: "og:url", content: "/work" },
    ],
    links: [{ rel: "canonical", href: "/work" }],
  }),
  component: WorkPage,
});

function WorkPage() {
  const [filter, setFilter] = useState<Category | "All">("All");
  const filtered = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.categories.includes(filter))),
    [filter],
  );

  return (
    <>
      <section className="relative border-b border-border">
        <div className="watercolor left-[-140px] top-[-100px] h-[500px] w-[500px]" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-20 pb-14 lg:px-10 lg:pt-28 lg:pb-20">
          <span className="eyebrow">Work · Selected projects</span>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] max-w-4xl">
            Selected work and{" "}
            <span className="serif-italic text-camel">collaborations.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-charcoal/85">
            A selection of projects across websites, branding, content, and strategy. Case study details are being
            added — reach out for a walk-through of any project in more depth.
          </p>
        </div>
      </section>

      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 lg:px-10 lg:py-20">
          {/* Filter tabs */}
          <div
            role="tablist"
            aria-label="Filter projects by category"
            className="flex flex-wrap items-center gap-2 border-b border-border pb-6"
          >
            {categories.map((c) => {
              const active = c === filter;
              return (
                <button
                  key={c}
                  role="tab"
                  aria-selected={active}
                  onClick={() => setFilter(c)}
                  className={`px-4 py-2 text-sm border transition-colors rounded-sm ${
                    active
                      ? "bg-olive text-cream border-olive"
                      : "bg-transparent border-border text-charcoal/80 hover:border-olive hover:text-olive"
                  }`}
                >
                  {c}
                </button>
              );
            })}
            <span className="ml-auto pixel-num text-xs text-olive/70">
              {String(filtered.length).padStart(2, "0")} · Projects
            </span>
          </div>

          {/* Varied grid: first project spans full width, others in staggered 2-col */}
          <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-14">
            {filtered.map((p, i) => {
              const wide = i === 0;
              return (
                <Link
                  key={p.slug}
                  to="/projects/$slug"
                  params={{ slug: p.slug }}
                  className={`group block ${wide ? "md:col-span-2" : ""}`}
                >
                  <div className="overflow-hidden">
                    <div className="transition-transform duration-700 group-hover:scale-[1.02]">
                      <ProjectVisual project={p} variant={wide ? "landscape" : (i % 2 === 1 ? "portrait" : "square")} />
                    </div>
                  </div>
                  <div className="mt-5 flex items-start justify-between gap-6">
                    <div>
                      <span className="eyebrow-olive">{p.industry}</span>
                      <h3 className="mt-2 text-2xl md:text-3xl text-olive group-hover:text-camel transition-colors">
                        {p.name}
                      </h3>
                      <p className="mt-2 text-charcoal/80 max-w-md">{p.summary}</p>
                    </div>
                    <ArrowUpRight
                      size={22}
                      className="mt-2 shrink-0 text-camel transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative bg-cream border-t border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 py-20 lg:px-10 text-center">
          <span className="eyebrow">Have a project in mind?</span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl leading-tight">
            Let's design something{" "}
            <span className="serif-italic text-camel">that feels like your business.</span>
          </h2>
          <Link to="/contact" className="btn-accent mt-8">Start a Project</Link>
        </div>
      </section>
    </>
  );
}
