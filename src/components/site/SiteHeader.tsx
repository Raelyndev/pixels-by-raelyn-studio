import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logoAsset from "@/assets/pixels-by-raelyn-logo.png.asset.json";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/85 backdrop-blur-md border-b border-border/70"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-10">
        <Link to="/" className="flex items-center gap-3" aria-label="Pixels by Raelyn home">
          <img
            src={logoAsset.url}
            alt="Pixels by Raelyn"
            width={44}
            height={44}
            className="h-10 w-10 rounded-sm object-cover"
          />
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="font-pixel text-[0.72rem] tracking-[0.14em] text-olive uppercase">Pixels</span>
            <span className="serif-italic text-lg text-charcoal -mt-1">by Raelyn</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="text-sm text-charcoal/80 hover:text-olive transition-colors"
              activeProps={{ className: "text-olive font-medium" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link to="/contact" className="hidden md:inline-flex btn-accent text-sm">
            Start a Project
          </Link>
          <button
            className="md:hidden inline-flex items-center justify-center w-10 h-10 border border-border rounded-sm"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${
          open ? "max-h-[80vh] border-t border-border" : "max-h-0"
        }`}
      >
        <nav className="bg-cream/95 backdrop-blur-md px-6 py-6 flex flex-col gap-1" aria-label="Mobile">
          {links.map((l, i) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: l.to === "/" }}
              className="flex items-baseline gap-4 py-3 border-b border-border/60 last:border-b-0"
              activeProps={{ className: "text-olive" }}
            >
              <span className="pixel-num text-xs">{String(i + 1).padStart(2, "0")}</span>
              <span className="serif-italic text-2xl text-charcoal">{l.label}</span>
            </Link>
          ))}
          <Link to="/contact" onClick={() => setOpen(false)} className="btn-accent mt-4 justify-center">
            Start a Project
          </Link>
        </nav>
      </div>
    </header>
  );
}
