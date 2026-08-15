import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CallButton, PageHero, PriceNote } from "@/components/site/ui";
import { categories, products } from "@/data/products";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/produse-funerare/$categorie/")({
  loader: ({ params }) => {
    const category = categories.find((c) => c.slug === params.categorie);
    if (!category) throw notFound();
    return { category, items: products.filter((p) => p.category === category.slug) };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Categorie indisponibilă" }, { name: "robots", content: "noindex" }] };
    }
    const title = `${loaderData.category.title.ro} | Casa Funerară Sf. Nectarie`;
    return {
      meta: [
        { title },
        { name: "description", content: loaderData.category.description.ro },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.category.description.ro },
        { property: "og:url", content: `/produse-funerare/${loaderData.category.slug}` },
      ],
      links: [{ rel: "canonical", href: `/produse-funerare/${loaderData.category.slug}` }],
    };
  },
  component: CategoryPage,
});

function CategoryPage() {
  const { category, items } = Route.useLoaderData();
  const { t, tr } = useLang();

  return (
    <>
      <PageHero title={tr(category.title)} subtitle={tr(category.description)} image={category.image} />
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <Link
              key={p.slug}
              to="/produse-funerare/$categorie/$slug"
              params={{ categorie: category.slug, slug: p.slug }}
              className="card-elegant group flex flex-col overflow-hidden"
            >
              <div className="aspect-[4/3] overflow-hidden bg-cream">
                <img
                  src={p.images[0]}
                  alt={tr(p.title)}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h2 className="font-serif text-xl text-foreground">{tr(p.title)}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {tr(p.short)}
                </p>
                <span className="mt-4 text-xs uppercase tracking-[0.2em] text-gold-deep">
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
