import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { img } from "@/assets/images";
import { useLang, PHONE } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", key: "nav_home" },
  { to: "/despre-noi", key: "nav_about" },
  { to: "/servicii", key: "nav_services" },
  { to: "/pachete-funerare", key: "nav_packages" },
  { to: "/produse-funerare", key: "nav_products" },
  { to: "/contact", key: "nav_contact" },
] as const;

function LangSwitch({ className }: { className?: string }) {
  const { lang, setLang } = useLang();
  return (
    <div className={cn("flex items-center gap-1 text-xs tracking-widest", className)}>
      <button
        type="button"
        onClick={() => setLang("ro")}
        className={cn(
          "px-1.5 py-0.5 transition-colors",
          lang === "ro" ? "text-gold" : "text-muted-foreground hover:text-foreground",
        )}
        aria-pressed={lang === "ro"}
      >
        RO
      </button>
      <span className="opacity-40">|</span>
      <button
        type="button"
        onClick={() => setLang("ru")}
        className={cn(
          "px-1.5 py-0.5 transition-colors",
          lang === "ru" ? "text-gold" : "text-muted-foreground hover:text-foreground",
        )}
        aria-pressed={lang === "ru"}
      >
        RU
      </button>
    </div>
  );
}

export function Header() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-border/70 bg-background transition-shadow",
        scrolled && "shadow-[0_10px_30px_-26px_rgba(0,0,0,0.8)]",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3 sm:px-6 lg:py-4">
        <Link to="/" className="flex min-w-0 items-center" aria-label={t("brand")}>
          <img
            src={img["logo.png"]}
            alt={t("brand")}
            className="h-10 w-auto shrink-0 sm:h-12 lg:h-14"
            width={420}
            height={220}
          />
        </Link>

        <nav className="hidden items-center gap-9 xl:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-gold-deep" }}
              className="text-[0.78rem] uppercase tracking-[0.16em] text-foreground/75 transition-colors hover:text-gold-deep"
            >
              {t(l.key)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <LangSwitch className="hidden xl:flex" />

          <a
            href={`tel:${PHONE}`}
            className="hidden items-center gap-2 border border-gold/70 px-4 py-2 text-sm tracking-[0.12em] text-gold-deep transition-colors hover:bg-gold hover:text-charcoal sm:inline-flex"
          >
            <Phone className="h-3.5 w-3.5" />
            {PHONE}
          </a>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="grid h-10 w-10 shrink-0 place-items-center border border-border text-foreground xl:hidden"
            aria-label={t("menu")}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-[100] h-[100dvh] w-screen overflow-y-auto bg-charcoal text-cream xl:hidden">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-4">
            <span className="font-serif text-xl text-gold-soft">{t("brand")}</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={t("close")}
              className="grid h-10 w-10 place-items-center border border-white/15"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="flex flex-col px-4 py-2">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="border-b border-white/10 py-4 font-serif text-2xl text-cream transition-colors hover:text-gold-soft"
              >
                {t(l.key)}
              </Link>
            ))}
          </nav>
          <div className="flex items-center justify-between px-4 py-6">
            <LangSwitch />
            <a
              href={`tel:${PHONE}`}
              className="flex items-center gap-2 border border-gold/60 px-5 py-3 text-gold-soft"
            >
              <Phone className="h-4 w-4" />
              <span className="font-serif text-xl">{PHONE}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
