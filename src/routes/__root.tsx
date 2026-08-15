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
import { LanguageProvider, useLang, PHONE } from "@/lib/i18n";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-7xl text-gold">404</h1>
        <h2 className="mt-4 font-serif text-2xl text-foreground">Pagina nu a fost găsită</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Pagina căutată nu există sau a fost mutată.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center border border-gold bg-charcoal px-6 py-3 font-serif text-lg text-gold-soft"
          >
            Acasă
          </Link>
        </div>
      </div>
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
    <div className="flex min-h-[60vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-2xl text-foreground">Pagina nu s-a încărcat</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          A apărut o problemă. Puteți reîncerca sau ne puteți suna la {PHONE}.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="border border-gold bg-charcoal px-6 py-3 font-serif text-lg text-gold-soft"
          >
            Reîncearcă
          </button>
          <a href="/" className="border border-input px-6 py-3 font-serif text-lg text-foreground">
            Acasă
          </a>
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
      { title: "Casa Funerară Sf. Nectarie | Servicii Funerare Non-Stop" },
      {
        name: "description",
        content:
          "Casa Funerară Sf. Nectarie oferă servicii funerare, pachete și produse funerare, cu respect, compasiune și demnitate. Linie non-stop: 14808.",
      },
      { property: "og:site_name", content: "Casa Funerară Sf. Nectarie" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=PT+Sans:wght@400;700&display=swap",
      },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FuneralHome",
          name: "Casa Funerară Sf. Nectarie",
          slogan: "Respect • Compasiune • Demnitate",
          telephone: "14808",
          email: "sfnectarie.info@gmail.com",
          openingHours: "Mo-Su 00:00-23:59",
        }),
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
    <html lang="ro">
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

function MobileCallBar() {
  const { t } = useLang();
  return (
    <a
      href={`tel:${PHONE}`}
      className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-center gap-3 border-t border-gold/50 bg-charcoal py-3 text-gold-soft sm:hidden"
    >
      <span aria-hidden>☎</span>
      <span className="font-serif text-xl">{PHONE}</span>
      <span className="text-[0.6rem] uppercase tracking-[0.2em] text-cream/60">{t("nonstop")}</span>
    </a>
  );
}

function SiteLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pb-16 sm:pb-0">
        <Outlet />
      </main>
      <Footer />
      <MobileCallBar />
    </div>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <SiteLayout />
      </LanguageProvider>
    </QueryClientProvider>
  );
}
