import { createFileRoute, Link } from "@tanstack/react-router";
import { img } from "@/assets/images";
import { CallButton, PageHero, PriceNote } from "@/components/site/ui";
import { categories } from "@/data/products";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/produse-funerare/")({
  head: () => ({
    meta: [
      { title: "Produse funerare | Casa Funerară Sf. Nectarie" },
      {
        name: "description",
        content:
          "Sicrie, cruci, coroane, accesorii, felinare, prosoape și cele necesare ceremoniei. Ofertă personalizată la cerere.",
      },
      { property: "og:title", content: "Produse funerare | Casa Funerară Sf. Nectarie" },
      {
        property: "og:description",
        content: "Catalog de produse funerare: sicrie, cruci, coroane și accesorii.",
      },
      { property: "og:url", content: "/produse-funerare" },
    ],
    links: [{ rel: "canonical", href: "/produse-funerare" }],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const { t, tr } = useLang();
  return (
    <>
      <PageHero title={t("products_title")} subtitle={t("products_lead")} image={img["capela-1.jpg"]} />
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <Link
              key={c.slug}
              to="/produse-funerare/$categorie"
              params={{ categorie: c.slug }}
              className="card-elegant group flex flex-col overflow-hidden"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={c.image}
                  alt={tr(c.title)}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h2 className="font-serif text-2xl text-foreground">{tr(c.title)}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {tr(c.description)}
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
