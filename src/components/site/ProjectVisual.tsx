// A tasteful, on-brand illustrated placeholder for each project so the site
// looks polished before real project imagery is added. Replace with real
// <img> when client photography is provided.
import type { Project } from "@/lib/projects";

const palettes = {
  sage:   { bg: "#D5DBCF", block: "#AAB5A0", accent: "#B48A50", ink: "#3F4335" },
  camel:  { bg: "#EFE5D2", block: "#B48A50", accent: "#7E8062", ink: "#3F4335" },
  olive:  { bg: "#CDD1BE", block: "#7E8062", accent: "#B48A50", ink: "#F5F3EA" },
  cream:  { bg: "#F5F3EA", block: "#D5DBCF", accent: "#B48A50", ink: "#3F4335" },
} as const;

export function ProjectVisual({
  project,
  variant = "landscape",
}: {
  project: Project;
  variant?: "landscape" | "portrait" | "square";
}) {
  const p = palettes[project.accent];
  const aspect =
    variant === "portrait" ? "aspect-[3/4]"
    : variant === "square"  ? "aspect-square"
                            : "aspect-[16/11]";
  const initials = project.name
    .replace(/[^A-Za-z ]/g, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

  return (
    <div className={`relative w-full ${aspect} overflow-hidden`} role="img" aria-label={project.imageAlt}>
      <div className="absolute inset-0" style={{ background: p.bg }} />
      {/* watercolor blob */}
      <div
        className="absolute -top-16 -right-10 h-72 w-72 rounded-full opacity-60"
        style={{ background: `radial-gradient(ellipse at center, ${p.block} 0%, transparent 65%)`, filter: "blur(6px)" }}
      />
      {/* offset block */}
      <div className="absolute bottom-6 left-6 right-24 top-16 border" style={{ borderColor: p.ink, opacity: 0.15 }} />
      <div
        className="absolute bottom-10 left-10 right-20 top-24"
        style={{ background: p.block, opacity: 0.85 }}
      />
      {/* pixel corner marks */}
      <div className="absolute top-4 left-4 flex gap-1">
        {[0, 1, 2].map((i) => (
          <span key={i} className="h-1.5 w-1.5" style={{ background: p.accent }} />
        ))}
      </div>
      <div className="absolute bottom-4 right-4 flex flex-col gap-1 items-end">
        {[0, 1, 2].map((i) => (
          <span key={i} className="h-1.5 w-1.5" style={{ background: p.accent }} />
        ))}
      </div>
      {/* initials mark */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className="font-serif text-6xl sm:text-7xl md:text-8xl italic"
          style={{ color: p.ink, opacity: 0.85 }}
        >
          {initials}
        </span>
      </div>
      {/* accent stripe */}
      <div className="absolute left-6 bottom-6 h-1 w-16" style={{ background: p.accent }} />
    </div>
  );
}
