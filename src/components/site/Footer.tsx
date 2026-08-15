import { Link } from "@tanstack/react-router";
import { Mail, Phone } from "lucide-react";
import { img } from "@/assets/images";
import { categories } from "@/data/products";
import { useLang, PHONE } from "@/lib/i18n";

const links = [
  { to: "/", key: "nav_home" },
  { to: "/despre-noi", key: "nav_about" },
  { to: "/servicii", key: "nav_services" },
  { to: "/pachete-funerare", key: "nav_packages" },
  { to: "/produse-funerare", key: "nav_products" },
  { to: "/contact", key: "nav_contact" },
] as const;

export function Footer() {
  const { t, tr } = useLang();

  return (
    <footer className="mt-24 border-t border-gold/25 bg-charcoal text-cream/80">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <img src={img["logo-dark.jpg"]} alt={t("brand")} className="h-24 w-auto" />
          <p className="mt-5 text-xs uppercase tracking-[0.22em] text-gold-soft">{t("motto")}</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/65">{t("about_lead")}</p>
        </div>

        <div>
          <h3 className="font-serif text-xl text-cream">{t("footer_links")}</h3>
          <div className="mt-3 h-px w-12 bg-gold/60" />
          <ul className="mt-4 space-y-2 text-sm">
            {links.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-gold-soft">
                  {t(l.key)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-xl text-cream">{t("footer_categories")}</h3>
          <div className="mt-3 h-px w-12 bg-gold/60" />
          <ul className="mt-4 space-y-2 text-sm">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link
                  to="/produse-funerare/$categorie"
                  params={{ categorie: c.slug }}
                  className="transition-colors hover:text-gold-soft"
                >
                  {tr(c.title)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-xl text-cream">{t("nav_contact")}</h3>
          <div className="mt-3 h-px w-12 bg-gold/60" />
          <a href={`tel:${PHONE}`} className="mt-5 flex items-center gap-3 text-gold-soft">
            <Phone className="h-5 w-5 shrink-0" />
            <span>
              <span className="block font-serif text-3xl leading-none">{PHONE}</span>
              <span className="block text-[0.65rem] uppercase tracking-[0.2em] text-cream/60">
                {t("nonstop")}
              </span>
            </span>
          </a>
          <a
            href="mailto:sfnectarie.info@gmail.com"
            className="mt-5 flex items-center gap-3 text-sm transition-colors hover:text-gold-soft"
          >
            <Mail className="h-4 w-4 shrink-0" />
            sfnectarie.info@gmail.com
          </a>
          <p className="mt-5 text-xs leading-relaxed text-cream/50">{t("no_prices_note")}</p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 text-center text-xs text-cream/45">
          © {new Date().getFullYear()} {t("brand")}. {t("rights")}
        </div>
      </div>
    </footer>
  );
}
