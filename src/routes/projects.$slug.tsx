import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, ArrowLeft, ExternalLink } from "lucide-react";
import { getNextProject, getProject, type GalleryItem, type Project } from "@/lib/projects";
import { ProjectVisual } from "@/components/site/ProjectVisual";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project, next: getNextProject(params.slug) };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Project not found — Pixels by Raelyn" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { project } = loaderData;
    const title = `${project.name} — Case Study · Pixels by Raelyn`;
    return {
      meta: [
        { title },
        { name: "description", content: project.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: project.summary },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/projects/${project.slug}` },
      ],
      links: [{ rel: "canonical", href: `/projects/${project.slug}` }],
    };
  },
  component: CaseStudy,
  notFoundComponent: NotFound,
});

function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-4 sm:px-6 py-32">
      <span className="eyebrow">404 · Project</span>
      <h1 className="mt-4 text-4xl">Project not found.</h1>
      <Link to="/work" className="btn-ghost mt-6">Back to projects</Link>
    </section>
  );
}

function CaseStudy() {
  const { project, next } = Route.useLoaderData() as { project: Project; next: Project };

  return (
    <div className="animate-fade-in">
      {/* 1. Hero */}
      <section className="relative border-b border-border">
        <div className="watercolor left-[-160px] top-[-120px] h-[520px] w-[520px]" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-14 pb-12 lg:px-10 lg:pt-20 lg:pb-16">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-sm text-charcoal/70 hover:text-camel transition-colors"
          >
            <ArrowLeft size={16} /> Back to Projects
          </Link>

          <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-14 items-end">
            <div className="lg:col-span-7">
              <span className="eyebrow">{project.categoryLabel}</span>
              <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-olive">
                {project.name}
              </h1>
              <p className="mt-6 max-w-xl text-lg text-charcoal/85 leading-relaxed">
                {project.summary}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-accent"
                  >
                    Visit Live Website <ExternalLink size={16} />
                  </a>
                )}
                <Link to="/contact" className="btn-ghost">Start a similar project</Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <dl className="grid grid-cols-2 gap-y-5 gap-x-6 text-sm">
                <MetaItem label="Client" value={project.client} />
                <MetaItem label="Year" value={project.year} />
                <MetaItem label="Status" value={project.status} className="col-span-2" />
                <MetaItem label="Category" value={project.categoryLabel} className="col-span-2" />
                <MetaItem label="Platform & tools" value={project.platforms.join(" · ")} className="col-span-2" />
              </dl>
            </div>
          </div>

          {/* Featured hero mockup */}
          <div className="mt-12 lg:mt-16">
            <DevicePlaceholder
              device="desktop"
              accent={project.accent}
              label={`Featured image for ${project.name}`}
              caption={project.gallery[0]?.caption ?? "Add featured screenshot"}
              logo={project.logo}
              imageAlt={project.imageAlt}
              project={project}
            />
          </div>
        </div>
      </section>

      {/* 2. Project overview */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 lg:px-10 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <span className="eyebrow">Overview</span>
            <h2 className="mt-3 text-3xl md:text-4xl text-olive leading-tight">
              About the client
            </h2>
          </div>
          <div className="lg:col-span-8 space-y-8">
            <Prose>{project.clientOverview}</Prose>
            <div>
              <h3 className="eyebrow-olive">What they needed</h3>
              <Prose className="mt-3">{project.clientNeeded}</Prose>
            </div>
            <div>
              <h3 className="eyebrow-olive">My role</h3>
              <Prose className="mt-3">{project.role}</Prose>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Challenge + 4. Solution */}
      <section className="bg-sage-light/40 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 lg:px-10 lg:py-24 grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="eyebrow">The challenge</span>
            <h2 className="mt-3 text-3xl md:text-4xl text-olive leading-tight">
              What needed solving
            </h2>
            <Prose className="mt-6">{project.challenge}</Prose>
          </div>
          <div>
            <span className="eyebrow">The solution</span>
            <h2 className="mt-3 text-3xl md:text-4xl text-olive leading-tight">
              What was designed
            </h2>
            <Prose className="mt-6">{project.solution}</Prose>
            {project.solutionBullets && project.solutionBullets.length > 0 && (
              <ul className="mt-6 space-y-3">
                {project.solutionBullets.map((s, i) => (
                  <li key={i} className="flex gap-3 text-charcoal/85 leading-relaxed">
                    <span className="pixel-num text-xs text-camel mt-1.5 shrink-0">·0{i + 1}</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </section>

      {/* 5. Services provided */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 lg:px-10 lg:py-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <span className="eyebrow">Services provided</span>
            <h2 className="mt-3 text-3xl md:text-4xl text-olive leading-tight">
              How I contributed
            </h2>
          </div>
          {project.servicesIntro && (
            <p className="text-sm text-charcoal/70 max-w-sm">
              {project.servicesIntro}
            </p>
          )}
        </div>
        <ul className="flex flex-wrap gap-2.5">
          {project.services.map((s) => (
            <li
              key={s}
              className="px-4 py-2 border border-border text-sm text-charcoal/85 bg-card hover:border-camel hover:text-camel transition-colors"
            >
              {s}
            </li>
          ))}
        </ul>

        {project.scope && project.scope.length > 0 && (
          <div className="mt-14">
            <span className="eyebrow">Project scope</span>
            <h3 className="mt-3 text-2xl md:text-3xl text-olive leading-tight">
              What was included
            </h3>
            <ul className="mt-6 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
              {project.scope.map((s, i) => (
                <li key={i} className="flex gap-3 text-sm text-charcoal/85 leading-relaxed">
                  <span className="pixel-num text-xs text-camel mt-1 shrink-0">·{String(i + 1).padStart(2, "0")}</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {/* 6. Process */}
      <section className="bg-cream border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 lg:px-10 lg:py-24">
          <div className="max-w-2xl">
            <span className="eyebrow">Process</span>
            <h2 className="mt-3 text-3xl md:text-4xl text-olive leading-tight">
              Design and development process
            </h2>
            {project.processIntro && (
              <p className="mt-4 text-charcoal/85">{project.processIntro}</p>
            )}
          </div>

          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {project.process.map((stage, i) => (
              <li
                key={stage.name}
                className="group relative border border-border bg-card p-6 transition-colors hover:border-camel"
              >
                <span className="pixel-num text-xs text-camel">·{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-2 text-xl text-olive group-hover:text-camel transition-colors">
                  {stage.name}
                </h3>
                <p className="mt-3 text-sm text-charcoal/80 leading-relaxed">
                  {stage.description}
                </p>
                <span className="absolute right-6 top-6 h-2 w-2" style={{ background: "var(--color-camel)" }} />
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 7. Gallery */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 lg:px-10 lg:py-24">
        <div className="max-w-2xl">
          <span className="eyebrow">Gallery</span>
          <h2 className="mt-3 text-3xl md:text-4xl text-olive leading-tight">
            Selected screens
          </h2>
          <p className="mt-4 text-charcoal/80">
            Final screenshots and mockups will replace these placeholders — each is captioned to show what the screen demonstrates.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:gap-8">
          {project.gallery.map((item, i) => (
            <GalleryFigure key={i} item={item} project={project} />
          ))}
        </div>
      </section>

      {/* 8. Key features */}
      <section className="bg-sage-light/40 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 lg:px-10 lg:py-24">
          <div className="max-w-2xl">
            <span className="eyebrow">Key features</span>
            <h2 className="mt-3 text-3xl md:text-4xl text-olive leading-tight">
              What the site does
            </h2>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {project.features.map((f, i) => (
              <article
                key={i}
                className="group border border-border bg-card p-6 transition-all hover:border-camel hover:-translate-y-0.5"
              >
                <span className="pixel-num text-xs text-camel">·{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-lg text-olive group-hover:text-camel transition-colors leading-tight">
                  {f.title}
                </h3>
                <p className="mt-3 text-sm text-charcoal/80 leading-relaxed">{f.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Outcome */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 py-20 lg:px-10 lg:py-28 text-center">
        <span className="eyebrow">Outcome</span>
        <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl text-olive leading-tight">
          The final <span className="serif-italic text-camel">result.</span>
        </h2>
        <Prose className="mt-8 text-lg mx-auto">{project.outcome}</Prose>

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-10"
          >
            Visit Live Website <ExternalLink size={16} />
          </a>
        )}
      </section>

      {/* 10. Next project */}
      <section className="relative bg-olive text-cream border-y border-olive">
        <Link
          to="/projects/$slug"
          params={{ slug: next.slug }}
          className="block group"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 lg:px-10 lg:py-24 grid gap-10 md:grid-cols-12 items-center">
            <div className="md:col-span-7">
              <span className="pixel-num text-xs text-camel">Next project</span>
              <h3 className="mt-4 text-3xl md:text-4xl lg:text-5xl leading-tight group-hover:text-camel transition-colors">
                {next.name}
              </h3>
              <p className="mt-4 text-cream/80 max-w-lg">{next.summary}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-camel">
                Continue reading
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </span>
            </div>
            <div className="md:col-span-5">
              <div className="overflow-hidden">
                <div className="transition-transform duration-700 group-hover:scale-[1.02]">
                  <ProjectVisual project={next} variant="landscape" />
                </div>
              </div>
            </div>
          </div>
        </Link>
      </section>
    </div>
  );
}

/* ---------- Helpers ---------- */

function MetaItem({
  label,
  value,
  className = "",
}: {
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <dt className="eyebrow-olive">{label}</dt>
      <dd className="mt-1 text-charcoal">{value}</dd>
    </div>
  );
}

function Prose({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={`text-charcoal/85 leading-relaxed max-w-2xl ${className}`}>{children}</p>
  );
}

function GalleryFigure({
  item,
  project,
}: {
  item: GalleryItem;
  project: ReturnType<typeof getProject> extends infer T ? Exclude<T, undefined> : never;
}) {
  return (
    <figure className={item.layout === "full" ? "md:col-span-2" : ""}>
      <DevicePlaceholder
        device={item.device}
        accent={project!.accent}
        label={item.caption}
        caption={item.caption}
        logo={project!.logo}
        imageAlt={project!.imageAlt}
        project={project!}
      />
      <figcaption className="mt-3 text-sm text-charcoal/70">{item.caption}</figcaption>
    </figure>
  );
}

function DevicePlaceholder({
  device,
  accent,
  label,
  caption,
  logo,
  imageAlt,
  project,
}: {
  device: "desktop" | "mobile" | "tablet";
  accent: "sage" | "camel" | "olive" | "cream";
  label: string;
  caption: string;
  logo?: { url: string; bg?: string };
  imageAlt: string;
  project: NonNullable<ReturnType<typeof getProject>>;
}) {
  // Aspect ratio + frame styling per device
  const isMobile = device === "mobile";
  const isTablet = device === "tablet";
  const aspect = isMobile
    ? "aspect-[9/16]"
    : isTablet
      ? "aspect-[4/3]"
      : "aspect-[16/10]";
  const maxW = isMobile ? "max-w-[280px] mx-auto" : "";
  const radius = isMobile ? "rounded-[2rem]" : isTablet ? "rounded-2xl" : "rounded-lg";

  return (
    <div
      className={`group relative ${maxW}`}
      role="img"
      aria-label={`${label} — placeholder`}
    >
      <div
        className={`relative overflow-hidden border border-border bg-card ${radius} shadow-sm transition-shadow group-hover:shadow-lg`}
      >
        {/* Faux browser / device chrome */}
        {!isMobile && (
          <div className="flex items-center gap-1.5 border-b border-border bg-cream/60 px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-sage" />
            <span className="h-2.5 w-2.5 rounded-full bg-sage-light" />
            <span className="h-2.5 w-2.5 rounded-full bg-camel/60" />
            <span className="ml-3 pixel-num text-[10px] text-olive/60 truncate">
              pixelsbyraelyn · {project.slug}
            </span>
          </div>
        )}
        {isMobile && (
          <div className="flex justify-center py-2">
            <span className="h-1 w-16 rounded-full bg-charcoal/20" />
          </div>
        )}

        <div className={`${aspect} relative`}>
          <ProjectVisual project={project} variant={isMobile ? "portrait" : "landscape"} />
          <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/[0.02] transition-colors" />
        </div>
      </div>

      {/* Placeholder label ribbon */}
      <span className="absolute right-3 top-3 px-2 py-0.5 text-[10px] tracking-wider uppercase bg-cream border border-border text-charcoal/70">
        Placeholder
      </span>

      {/* Screen-reader only fallback */}
      <span className="sr-only">
        {caption}. {imageAlt}. Final image pending. Accent theme: {accent}.
      </span>
    </div>
  );
}
