import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import logoAsset from "@/assets/pixels-by-raelyn-logo.png.asset.json";

function NotFoundComponent() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-start justify-center px-6 py-24">
        <span className="eyebrow mb-6">Error · 404</span>
        <p className="pixel-num text-6xl mb-4">404</p>
        <h1 className="text-4xl sm:text-5xl leading-tight">This page has wandered off.</h1>
        <p className="mt-4 max-w-lg text-charcoal/80">
          The page you're looking for doesn't exist, or has moved. Let's get you back to something useful.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/" className="btn-primary">Return home</Link>
          <Link to="/work" className="btn-ghost">Browse work</Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="max-w-md">
        <span className="eyebrow">Something went wrong</span>
        <h1 className="mt-4 text-3xl">This page didn't load.</h1>
        <p className="mt-3 text-charcoal/80">
          Try again in a moment or head back home.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="btn-primary"
          >
            Try again
          </button>
          <a href="/" className="btn-ghost">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Pixels by Raelyn — Creative digital studio for small businesses" },
      {
        name: "description",
        content:
          "Pixels by Raelyn is a creative digital studio helping small businesses, founders, and growing organizations with thoughtful website design, brand support, content, and digital strategy.",
      },
      { name: "author", content: "Raelyn Brown" },
      { name: "theme-color", content: "#F5F3EA" },
      { property: "og:site_name", content: "Pixels by Raelyn" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Pixels by Raelyn — Creative digital studio" },
      {
        property: "og:description",
        content:
          "Thoughtful website design, brand support, content, and digital strategy for small businesses and founders.",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: logoAsset.url, type: "image/png" },
      { rel: "apple-touch-icon", href: logoAsset.url },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..600;1,9..144,300..500&family=Manrope:wght@300;400;500;600;700&family=Silkscreen:wght@400;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <SiteHeader />
      <main id="main">
        <Outlet />
      </main>
      <SiteFooter />
    </QueryClientProvider>
  );
}
