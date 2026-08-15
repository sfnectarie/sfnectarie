import { createFileRoute, Link } from "@tanstack/react-router";
import { CallButton, PageHero, PriceNote } from "@/components/site/ui";
import { services } from "@/data/services";
import { useLang } from "@/lib/i18n";
import { img } from "@/assets/images";

export const Route = createFileRoute("/servicii/")({
  head: () => ({
    meta: [
      { title: "Servicii funerare | Casa Funerară Sf. Nectarie" },
      {
        name: "description",
        content:
          "Transport funerar, pregătirea persoanei decedate, îmbălsămare, acte și documente, organizarea completă a ceremoniei. Disponibili non-stop.",
      },
      { property: "og:title", content: "Servicii funerare | Casa Funerară Sf. Nectarie" },
      {
        property: "og:description",
        content: "Servicii funerare complete, organizate cu respect și discreție. Linie non-stop 14808.",
      },
      { property: "og:url", content: "/servicii" },
    ],
    links: [{ rel: "canonical", href: "/servicii" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const { t, tr } = useLang();
  return (
    <>
      <PageHero title={t("services_title")} subtitle={t("services_lead")} image={img["capela-1.jpg"]} />
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.slug}
              to="/servicii/$slug"
              params={{ slug: s.slug }}
              className="card-elegant group flex flex-col overflow-hidden"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={s.image}
                  alt={tr(s.title)}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h2 className="font-serif text-2xl text-foreground">{tr(s.title)}</h2>
                <div className="mt-3 h-px w-10 bg-gold/70" />
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {tr(s.short)}
                </p>
                <span className="mt-5 text-xs uppercase tracking-[0.2em] text-gold-deep">
                  {t("view_details")}
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-14 flex flex-col items-center gap-4">
          <PriceNote />
          <CallButton />
        </div>
      </section>
    </>
  );
}
