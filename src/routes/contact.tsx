import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { img } from "@/assets/images";
import { ContactForm } from "@/components/site/ContactForm";
import { CallButton, PageHero, PriceNote } from "@/components/site/ui";
import { useLang, PHONE } from "@/lib/i18n";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact non-stop | Casa Funerară Sf. Nectarie" },
      {
        name: "description",
        content:
          "Suntem disponibili non-stop la 14808. Scrieți-ne sau sunați pentru consiliere și organizarea completă a serviciilor funerare.",
      },
      { property: "og:title", content: "Contact non-stop | Casa Funerară Sf. Nectarie" },
      {
        property: "og:description",
        content: "Linie telefonică non-stop 14808. Consiliere și sprijin imediat pentru familii.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t, tr } = useLang();

  return (
    <>
      <PageHero title={t("nav_contact")} subtitle={t("hero_subtitle")} image={img["capela-1.jpg"]} />
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <h2 className="font-serif text-3xl text-foreground">{t("brand")}</h2>
          <div className="mt-3 h-px w-14 bg-gold/70" />
          <ul className="mt-8 space-y-5 text-sm text-muted-foreground">
            <li className="flex items-start gap-4">
              <Phone className="mt-1 h-5 w-5 shrink-0 text-gold-deep" />
              <span>
                <a href={`tel:${PHONE}`} className="font-serif text-2xl text-foreground">
                  {PHONE}
                </a>
                <span className="mt-1 block text-xs uppercase tracking-[0.2em]">{t("nonstop")}</span>
              </span>
            </li>
            <li className="flex items-start gap-4">
              <Mail className="mt-1 h-5 w-5 shrink-0 text-gold-deep" />
              <a href="mailto:sfnectarie.info@gmail.com" className="hover:text-gold-deep">
                sfnectarie.info@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-4">
              <Clock className="mt-1 h-5 w-5 shrink-0 text-gold-deep" />
              <span>{t("available_nonstop")}</span>
            </li>
            <li className="flex items-start gap-4">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-gold-deep" />
              <span>
                {tr({
                  ro: "Ne deplasăm la spital, la domiciliu sau la locul solicitat, în cel mai scurt timp.",
                  ru: "Мы выезжаем в больницу, на дом или в указанное место в кратчайшие сроки.",
                })}
              </span>
            </li>
          </ul>
          <PriceNote className="mt-8" />
          <div className="mt-6">
            <CallButton />
          </div>
        </div>
        <div className="card-elegant p-7 sm:p-9">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
