import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Mail } from "lucide-react";
import logoAsset from "@/assets/pixels-by-raelyn-logo.png.asset.json";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-border bg-cream">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link to="/" className="flex items-center gap-3">
              <img
                src={logoAsset.url}
                alt="Pixels by Raelyn"
                width={48}
                height={48}
                className="h-12 w-12 rounded-sm object-cover"
                loading="lazy"
              />
              <span className="flex flex-col leading-tight">
                <span className="font-pixel text-[0.72rem] tracking-[0.14em] text-olive uppercase">Pixels</span>
                <span className="serif-italic text-xl text-charcoal -mt-1">by Raelyn</span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-charcoal/80 leading-relaxed">
              Thoughtful websites, content, and creative support for growing brands.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">Based in the Dallas–Fort Worth area · Working with clients across Texas and beyond.</p>
          </div>

          <div>
            <p className="eyebrow-olive mb-4">Explore</p>
            <ul className="space-y-2 text-charcoal/85">
              <li><Link to="/" className="hover:text-camel transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-camel transition-colors">Services</Link></li>
              <li><Link to="/work" className="hover:text-camel transition-colors">Work</Link></li>
              <li><Link to="/about" className="hover:text-camel transition-colors">About</Link></li>
              <li><Link to="/contact" className="hover:text-camel transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <p className="eyebrow-olive mb-4">Connect</p>
            <ul className="space-y-3 text-charcoal/85">
              <li>
                <a href="mailto:hello@pixelsbyraelyn.com" className="inline-flex items-center gap-2 hover:text-camel transition-colors">
                  <Mail size={16} /> hello@pixelsbyraelyn.com
                </a>
              </li>
              <li>
                <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-camel transition-colors">
                  <Instagram size={16} /> Instagram
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-camel transition-colors">
                  <Linkedin size={16} /> LinkedIn
                </a>
              </li>
            </ul>
            <Link to="/contact" className="btn-ghost mt-6 text-sm">Start a project</Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col-reverse gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Pixels by Raelyn. All rights reserved.</p>
          <p className="pixel-num text-[0.7rem] tracking-widest">STUDIO · EST. {year}</p>
        </div>
      </div>
    </footer>
  );
}
