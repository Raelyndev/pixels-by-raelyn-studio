import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { getNextProject, getProject } from "@/lib/projects";
import { ProjectVisual } from "@/components/site/ProjectVisual";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project, next: getNextProject(params.slug) };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Project not found — Pixels by Raelyn" }, { name: "robots", content: "noindex" }] };
    }
    const { project } = loaderData;
    return {
      meta: [
        { title: `${project.name} — Pixels by Raelyn` },
        { name: "description", content: project.summary },
        { property: "og:title", content: `${project.name} — Pixels by Raelyn` },
        { property: "og:description", content: project.summary },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/work/${project.slug}` },
      ],
      links: [{ rel: "canonical", href: `/work/${project.slug}` }],
    };
  },
  component: CaseStudy,
  notFoundComponent: NotFound,
});

function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-32">
      <span className="eyebrow">404 · Project</span>
      <h1 className="mt-4 text-4xl">Project not found.</h1>
      <Link to="/work" className="btn-ghost mt-6">Back to work</Link>
    </section>
  );
}

function CaseStudy() {
  const { project, next } = Route.useLoaderData();

  return (
    <>
      <section className="relative border-b border-border">
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-10 lg:px-10 lg:pt-24">
          <Link to="/work" className="text-sm text-charcoal/70 hover:text-camel transition-colors">
            ← All work
          </Link>
          <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:gap-14 items-end">
            <div className="lg:col-span-7">
              <span className="eyebrow">{project.industry}</span>
              <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-olive">
                {project.name}
              </h1>
              <p className="mt-6 max-w-xl text-lg text-charcoal/85 leading-relaxed">{project.summary}</p>
            </div>
            <div className="lg:col-span-5">
              <dl className="grid grid-cols-2 gap-y-5 gap-x-6 text-sm">
                <div>
                  <dt className="eyebrow-olive">Industry</dt>
                  <dd className="mt-1 text-charcoal">{project.industry}</dd>
                </div>
                <div>
                  <dt className="eyebrow-olive">Categories</dt>
                  <dd className="mt-1 text-charcoal">{project.categories.join(" · ")}</dd>
                </div>
                <div className="col-span-2">
                  <dt className="eyebrow-olive">Services provided</dt>
                  <dd className="mt-1 text-charcoal">{project.services.join(" · ")}</dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="mt-12">
            <ProjectVisual project={project} variant="landscape" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <span className="eyebrow">Case study</span>
            <p className="mt-3 text-charcoal/70 text-sm max-w-xs">
              The details below are editable placeholders — final content is added in the editor.
            </p>
          </div>
          <div className="lg:col-span-8 space-y-14">
            <Block title="Client overview" body={project.clientOverview} />
            <Block title="The challenge" body={project.challenge} />
            <div>
              <SectionTitle>Project goals</SectionTitle>
              <ul className="mt-5 space-y-3">
                {project.goals.map((g: string, i: number) => (
                  <li key={i} className="flex gap-3 text-charcoal/85">
                    <span className="pixel-num text-sm mt-1">·0{i + 1}</span>
                    <span>{g}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Block title="My role" body={project.role} />
            <Block title="Creative approach" body={project.approach} />
            <Block title="Final solution" body={project.solution} />

            {/* Gallery placeholders */}
            <div>
              <SectionTitle>Project gallery</SectionTitle>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {[0, 1, 2, 3].map((i) => (
                  <div key={i} className={i === 0 ? "sm:col-span-2" : ""}>
                    <ProjectVisual project={project} variant={i === 0 ? "landscape" : "square"} />
                  </div>
                ))}
              </div>
            </div>

            <Block title="Final outcome" body={project.outcome} />

            <div>
              <SectionTitle>Client testimonial</SectionTitle>
              <blockquote className="mt-5 border border-dashed border-border p-8 bg-card">
                <span className="eyebrow-olive">Editable placeholder</span>
                <p className="mt-3 serif-italic text-xl md:text-2xl text-olive/90 leading-snug">
                  “{project.testimonial}”
                </p>
                <footer className="mt-5 text-sm text-charcoal/70">— {project.testimonialAttribution}</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Next project */}
      <section className="relative bg-sage-light/50 border-y border-border">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span className="eyebrow">Next project</span>
              <h3 className="mt-3 text-3xl md:text-4xl lg:text-5xl text-olive leading-tight">
                {next.name}
              </h3>
              <p className="mt-3 text-charcoal/85 max-w-lg">{next.summary}</p>
            </div>
            <Link
              to="/work/$slug"
              params={{ slug: next.slug }}
              className="btn-primary self-start md:self-auto"
            >
              View next project <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h3 className="text-3xl md:text-4xl leading-tight">
          Have a project you'd like to talk about?
        </h3>
        <Link to="/contact" className="btn-accent mt-6">
          Start a Project <ArrowUpRight size={16} />
        </Link>
      </section>
    </>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl md:text-3xl text-olive">{children}</h2>;
}

function Block({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <SectionTitle>{title}</SectionTitle>
      <p className="mt-4 text-charcoal/85 leading-relaxed">{body}</p>
    </div>
  );
}
