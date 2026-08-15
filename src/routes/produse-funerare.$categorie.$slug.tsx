import { createFileRoute, notFound } from "@tanstack/react-router";
import { CallButton, OutlineLink, PageHero, PriceNote } from "@/components/site/ui";
import { categories, extraInfo, products } from "@/data/products";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/produse-funerare/$categorie/$slug")({
  loader: ({ params }) => {
    const category = categories.find((c) => c.slug === params.categorie);
    const product = products.find((p) => p.slug === params.slug && p.category === params.categorie);
    if (!category || !product) throw notFound();
    return { category, product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Produs indisponibil" }, { name: "robots", content: "noindex" }] };
    }
    const { product, category } = loaderData;
    const title = `${product.title.ro} | Casa Funerară Sf. Nectarie`;
    return {
      meta: [
        { title },
        { name: "description", content: product.short.ro },
        { property: "og:title", content: title },
        { property: "og:description", content: product.short.ro },
        { property: "og:type", content: "product" },
        { property: "og:url", content: `/produse-funerare/${category.slug}/${product.slug}` },
      ],
      links: [{ rel: "canonical", href: `/produse-funerare/${category.slug}/${product.slug}` }],
    };
  },
  component: ProductDetail,
});

function ProductDetail() {
  const { product, category } = Route.useLoaderData();
  const { t, tr } = useLang();

  return (
    <>
      <PageHero title={tr(product.title)} subtitle={tr(category.title)} image={product.images[0] ?? category.image} />
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <div className="grid gap-4 sm:grid-cols-2">
            {product.images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={tr(product.title)}
                loading="lazy"
                className="w-full border border-charcoal/10 bg-cream object-cover"
              />
            ))}
          </div>
          <p className="mt-8 text-base leading-relaxed text-muted-foreground">
            {tr(product.description)}
          </p>
          {product.features && (
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {product.features.map((f, i) => (
                <li key={i} className="flex gap-3 border-l-2 border-gold/60 bg-cream px-4 py-3 text-sm">
                  <span className="text-gold" aria-hidden>
                    ✦
                  </span>
                  {tr(f)}
                </li>
              ))}
            </ul>
          )}
          <p className="mt-8 text-sm leading-relaxed text-muted-foreground">{tr(extraInfo)}</p>
        </div>
        <aside className="card-elegant h-fit p-7">
          <h2 className="font-serif text-2xl text-foreground">{t("request_consult")}</h2>
          <PriceNote className="mt-5" />
          <div className="mt-6 flex flex-col gap-3">
            <CallButton />
            <OutlineLink to="/contact">{t("nav_contact")}</OutlineLink>
          </div>
        </aside>
      </section>
    </>
  );
}
