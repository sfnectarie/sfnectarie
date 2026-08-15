import { createFileRoute, notFound } from "@tanstack/react-router";
import { CallButton, OutlineLink, PageHero, PriceNote } from "@/components/site/ui";
import { packages } from "@/data/packages";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/pachete-funerare/$slug")({
  loader: ({ params }) => {
    const pkg = packages.find((p) => p.slug === params.slug);
    if (!pkg) throw notFound();
    return { pkg };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Pachet indisponibil" }, { name: "robots", content: "noindex" }] };
    }
    const title = `${loaderData.pkg.title.ro} | Casa Funerară Sf. Nectarie`;
    return {
      meta: [
        { title },
        { name: "description", content: loaderData.pkg.subtitle.ro },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.pkg.subtitle.ro },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/pachete-funerare/${loaderData.pkg.slug}` },
      ],
      links: [{ rel: "canonical", href: `/pachete-funerare/${loaderData.pkg.slug}` }],
    };
  },
  component: PackageDetail,
});

function PackageDetail() {
  const { pkg } = Route.useLoaderData();
  const { t, tr } = useLang();

  return (
    <>
      <PageHero title={tr(pkg.title)} subtitle={tr(pkg.subtitle)} image={pkg.image} />
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="text-base leading-relaxed text-muted-foreground">{tr(pkg.description)}</p>

          <h2 className="mt-10 font-serif text-2xl text-foreground">
            {tr({ ro: "Produse incluse", ru: "Включённые товары" })}
          </h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {pkg.products.map((p, i) => (
              <li key={i} className="flex gap-3 border-l-2 border-gold/60 bg-cream px-4 py-3 text-sm">
                <span className="text-gold" aria-hidden>
                  ✦
                </span>
                {tr(p)}
              </li>
            ))}
          </ul>

          <h2 className="mt-10 font-serif text-2xl text-foreground">
            {tr({ ro: "Servicii incluse", ru: "Включённые услуги" })}
          </h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {pkg.services.map((s, i) => (
              <li key={i} className="flex gap-3 border-l-2 border-gold/60 bg-cream px-4 py-3 text-sm">
                <span className="text-gold" aria-hidden>
                  ✦
                </span>
                {tr(s)}
              </li>
            ))}
          </ul>

          <p className="mt-8 text-sm leading-relaxed text-muted-foreground">{tr(pkg.extra)}</p>
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
