import { createFileRoute, Link } from "@tanstack/react-router";
import { img } from "@/assets/images";
import { CallButton, PageHero, PriceNote } from "@/components/site/ui";
import { packages } from "@/data/packages";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/pachete-funerare/")({
  head: () => ({
    meta: [
      { title: "Pachete funerare | Casa Funerară Sf. Nectarie" },
      {
        name: "description",
        content:
          "Pachete funerare complete, de la variante esențiale până la premium, adaptate dorințelor familiei. Ofertă personalizată la cerere.",
      },
      { property: "og:title", content: "Pachete funerare | Casa Funerară Sf. Nectarie" },
      {
        property: "og:description",
        content: "Pachete funerare complete, adaptate nevoilor familiei. Sunați non-stop la 14808.",
      },
      { property: "og:url", content: "/pachete-funerare" },
    ],
    links: [{ rel: "canonical", href: "/pachete-funerare" }],
  }),
  component: PackagesPage,
});

function PackagesPage() {
  const { t, tr } = useLang();
  return (
    <>
      <PageHero title={t("packages_title")} subtitle={t("packages_lead")} image={img["capela-1.jpg"]} />
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((p) => (
            <div key={p.slug} className="card-elegant flex flex-col overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={tr(p.title)} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h2 className="font-serif text-2xl text-foreground">{tr(p.title)}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {tr(p.subtitle)}
                </p>
                <PriceNote className="mt-4 self-start" />
                <Link
                  to="/pachete-funerare/$slug"
                  params={{ slug: p.slug }}
                  className="mt-5 border border-charcoal/25 px-5 py-2.5 text-center font-serif text-base transition-colors hover:border-gold hover:text-gold-deep"
                >
                  {t("view_details")}
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-14 flex justify-center">
          <CallButton />
        </div>
      </section>
    </>
  );
}
