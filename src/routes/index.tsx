import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import heroCollage from "@/assets/hero-collage.jpg";
import logoAsset from "@/assets/pixels-by-raelyn-logo.png.asset.json";
import { projects } from "@/lib/projects";
import { ProjectVisual } from "@/components/site/ProjectVisual";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pixels by Raelyn — Thoughtful design for brands ready to grow" },
      {
        name: "description",
        content:
          "A creative digital studio helping small businesses and founders with website design, brand support, content, and digital strategy.",
      },
      { property: "og:title", content: "Pixels by Raelyn — Thoughtful design for brands ready to grow" },
      {
        property: "og:description",
        content:
          "Website design, brand support, content, and digital strategy for growing businesses.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const services = [
  {
    n: "01",
    title: "Website Design & Optimization",
    body: "Strategic, user-friendly websites designed to help your business look professional, communicate clearly, and make it easier for customers to take action.",
  },
  {
    n: "02",
    title: "Brand & Creative Support",
    body: "Visual direction and branded materials that create a more recognizable and consistent presence across your digital platforms.",
  },
  {
    n: "03",
    title: "Social Media Content",
    body: "Intentional content design and support that helps your business show up consistently without losing its personality.",
  },
  {
    n: "04",
    title: "Digital Strategy & Support",
    body: "Practical guidance, platform support, and creative problem-solving for businesses that need help connecting the pieces.",
  },
];

const process = [
  { n: "01", title: "Discover", body: "We clarify your goals, audience, challenges, and priorities." },
  { n: "02", title: "Plan", body: "I organize the project and develop a clear creative direction." },
  { n: "03", title: "Create", body: "Your website, content, or brand materials are thoughtfully developed." },
  { n: "04", title: "Refine & Launch", body: "We review the work, make final adjustments, and prepare everything for use." },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="watercolor left-[-140px] top-[-80px] h-[520px] w-[520px]" aria-hidden />
        <div className="watercolor right-[-120px] top-[220px] h-[380px] w-[380px]" aria-hidden />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-14 pb-24 lg:px-10 lg:pt-24 lg:pb-32">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-10 items-end">
            <div className="lg:col-span-7 relative">
              <span className="eyebrow mb-6">
                <span className="h-1.5 w-1.5 bg-camel" /> Pixels by Raelyn · Creative digital studio
              </span>
              <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.02] text-olive">
                Thoughtful{" "}
                <span className="serif-italic text-camel">design</span>{" "}
                for brands{" "}
                <span className="serif-italic">ready to grow.</span>
              </h1>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-charcoal/85">
                Pixels by Raelyn helps small businesses, founders, and growing organizations create clear, cohesive
                digital experiences through website design, brand support, content, and strategy.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link to="/contact" className="btn-accent">
                  Start a Project <ArrowRight size={16} />
                </Link>
                <Link to="/work" className="btn-ghost">
                  View My Work
                </Link>
              </div>
              <p className="mt-10 pixel-num text-[0.72rem] tracking-[0.2em] text-olive/80">
                WEB DESIGN · BRAND SUPPORT · CONTENT · DIGITAL STRATEGY
              </p>
            </div>

            {/* Editorial collage */}
            <div className="lg:col-span-5">
              <div className="relative pixel-frame">
                <img
                  src={heroCollage}
                  alt="Editable placeholder: replace with a photo of Raelyn or selected client work."
                  width={1408}
                  height={1600}
                  className="w-full h-[440px] sm:h-[520px] object-cover rounded-sm"
                />
                <div className="absolute -bottom-6 -left-6 hidden sm:flex flex-col items-start bg-cream p-4 border border-border shadow-[0_10px_40px_-20px_rgba(63,67,53,0.25)]">
                  <span className="eyebrow">Studio</span>
                  <span className="serif-italic text-xl text-olive mt-1">Est. Independent</span>
                </div>
                <div className="absolute -top-4 -right-4 hidden sm:block bg-sage-light/80 border border-border p-3">
                  <img src={logoAsset.url} alt="" width={40} height={40} className="h-10 w-10 rounded-sm" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="relative border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <span className="eyebrow">Design with direction</span>
              <div className="mt-6 h-px w-16 bg-camel" />
            </div>
            <div className="lg:col-span-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl leading-[1.1] text-olive">
                Your business deserves more than something that{" "}
                <span className="serif-italic text-camel">simply looks good.</span>
              </h2>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-charcoal/85">
                I create digital experiences that feel aligned, professional, and intentional. Whether you need a
                stronger website, more consistent content, or help bringing your ideas together, I turn scattered pieces
                into a clear and cohesive brand presence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW — editorial numbered list */}
      <section className="relative bg-[color-mix(in_oklab,var(--cream-warm)_60%,var(--cream))] border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-20 lg:px-10 lg:py-28">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span className="eyebrow">02 · Services</span>
              <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl leading-tight max-w-2xl">
                Creative support for your{" "}
                <span className="serif-italic text-camel">digital presence.</span>
              </h2>
            </div>
            <Link to="/services" className="btn-ghost self-start md:self-auto">
              Explore Services <ArrowRight size={16} />
            </Link>
          </div>

          <ul className="mt-14 divide-y divide-border border-t border-border">
            {services.map((s, i) => (
              <li key={s.n} className="group grid grid-cols-[auto_1fr] md:grid-cols-[80px_1fr_1.4fr_auto] items-start gap-6 py-8 md:py-10">
                <span className="pixel-num text-sm md:text-base pt-2">{s.n}</span>
                <h3 className="text-2xl md:text-3xl leading-tight text-olive col-span-1 md:col-span-1 max-w-md">
                  {s.title}
                </h3>
                <p className="text-charcoal/85 leading-relaxed max-w-xl col-span-2 md:col-span-1">
                  {s.body}
                </p>
                <Link
                  to="/services"
                  className="hidden md:inline-flex items-center gap-1 text-camel hover:text-camel-deep transition-colors self-center"
                  aria-label={`Learn more about ${s.title}`}
                >
                  <ArrowUpRight size={20} />
                </Link>
                {i === services.length - 1 && null}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-20 lg:px-10 lg:py-28">
          <div className="flex items-end justify-between gap-6 mb-14">
            <div>
              <span className="eyebrow">03 · Selected work</span>
              <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl leading-tight max-w-2xl">
                Selected work and{" "}
                <span className="serif-italic text-camel">collaborations.</span>
              </h2>
            </div>
            <Link to="/work" className="hidden sm:inline-flex btn-ghost">View all</Link>
          </div>

          <div className="grid gap-14 lg:gap-20">
            {projects.map((p, i) => {
              const reverse = i % 2 === 1;
              return (
                <article key={p.slug} className="grid gap-8 md:gap-12 md:grid-cols-12 items-center">
                  <div className={`md:col-span-7 ${reverse ? "md:order-2" : ""}`}>
                    <Link to="/projects/$slug" params={{ slug: p.slug }} className="block group">
                      <div className="overflow-hidden">
                        <div className="transition-transform duration-700 group-hover:scale-[1.02]">
                          <ProjectVisual project={p} variant={i === 0 ? "landscape" : i === 2 ? "landscape" : "landscape"} />
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className={`md:col-span-5 ${reverse ? "md:order-1" : ""}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="pixel-num text-xs">{String(i + 1).padStart(2, "0")}</span>
                      <span className="h-px flex-1 bg-border" />
                      <span className="eyebrow-olive">{p.industry}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl leading-tight text-olive">
                      {p.name}
                    </h3>
                    <p className="mt-4 text-charcoal/85 leading-relaxed">{p.summary}</p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {p.services.map((s) => (
                        <li key={s} className="text-xs px-2.5 py-1 border border-border text-charcoal/75">
                          {s}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/projects/$slug"
                      params={{ slug: p.slug }}
                      className="mt-6 inline-flex items-center gap-2 text-camel hover:text-camel-deep transition-colors"
                    >
                      View Project <ArrowUpRight size={16} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative bg-sage-light/40 border-y border-border">
        <div className="watercolor left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[560px] w-[720px] opacity-70" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-20 lg:px-10 lg:py-28">
          <div className="max-w-3xl">
            <span className="eyebrow">04 · Process</span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl leading-tight">
              A clear process from{" "}
              <span className="serif-italic text-camel">idea to execution.</span>
            </h2>
          </div>

          <ol className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {process.map((step, i) => (
              <li key={step.n} className={`relative ${i % 2 === 1 ? "lg:mt-14" : ""}`}>
                <div className="flex items-baseline gap-3">
                  <span className="pixel-num text-3xl md:text-4xl">{step.n}</span>
                  <span className="h-px flex-1 bg-camel/60" />
                </div>
                <h3 className="mt-4 text-xl md:text-2xl text-olive">{step.title}</h3>
                <p className="mt-3 text-charcoal/85 leading-relaxed">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* WHY */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <span className="eyebrow">05 · Why work with me</span>
              <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl leading-tight">
                Creative support that considers the{" "}
                <span className="serif-italic text-camel">whole picture.</span>
              </h2>
              <p className="mt-6 text-charcoal/85 leading-relaxed max-w-lg">
                I understand that a website, brand, and content strategy cannot operate separately. I look at how every
                part of your digital presence works together, then help you create something that is both visually
                strong and genuinely useful.
              </p>
            </div>
            <div className="lg:col-span-7 grid gap-8 sm:grid-cols-1">
              {[
                { t: "Strategy before decoration", b: "Every design decision should have a purpose." },
                { t: "Personalized creative direction", b: "Your business should not look or sound like everyone else." },
                { t: "Design for real business needs", b: "The final result should be beautiful, functional, and practical to maintain." },
              ].map((v, i) => (
                <div key={v.t} className="grid grid-cols-[auto_1fr] gap-5 items-start border-t border-border pt-6">
                  <span className="pixel-num text-sm mt-2">·0{i + 1}</span>
                  <div>
                    <h3 className="text-xl md:text-2xl text-olive">{v.t}</h3>
                    <p className="mt-2 text-charcoal/85 leading-relaxed">{v.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS placeholder */}
      <section className="relative bg-cream border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-20 lg:px-10 lg:py-24">
          <div className="max-w-3xl">
            <span className="eyebrow">06 · Testimonials</span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl leading-tight">
              Kind words from <span className="serif-italic text-camel">clients.</span>
            </h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {[1, 2].map((i) => (
              <blockquote key={i} className="border border-dashed border-border p-8 bg-card">
                <span className="eyebrow-olive">Editable placeholder</span>
                <p className="mt-4 serif-italic text-xl md:text-2xl leading-snug text-olive/90">
                  “Add a real client quote here in the editor. Do not fabricate testimonials.”
                </p>
                <footer className="mt-6 text-sm text-charcoal/70">
                  <span className="block font-medium text-charcoal">[Client name — placeholder]</span>
                  <span>[Business — placeholder]</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative bg-olive text-cream overflow-hidden">
        <div className="absolute inset-0 opacity-[0.08]" aria-hidden style={{
          backgroundImage: "radial-gradient(rgba(245,243,234,0.9) 1px, transparent 1px)",
          backgroundSize: "8px 8px",
        }} />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-24 lg:px-10 lg:py-32 text-center">
          <span className="font-pixel text-[0.72rem] tracking-[0.18em] uppercase text-camel">Let's build together</span>
          <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-cream">
            Ready to create a digital presence that feels{" "}
            <span className="serif-italic text-camel">like your business?</span>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-cream/85 leading-relaxed">
            Tell me what you're working on, what you need help with, and where you would like to go next.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-camel text-cream px-7 py-3.5 font-medium hover:bg-camel-deep transition-colors rounded-sm"
            >
              Start Your Project <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
