import { createFileRoute, notFound } from "@tanstack/react-router";
import { CallButton, OutlineLink, PageHero, PriceNote } from "@/components/site/ui";
import { services } from "@/data/services";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/servicii/$slug")({
  loader: ({ params }) => {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Serviciu indisponibil" }, { name: "robots", content: "noindex" }] };
    }
    const title = `${loaderData.service.title.ro} | Casa Funerară Sf. Nectarie`;
    return {
      meta: [
        { title },
        { name: "description", content: loaderData.service.short.ro },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.service.short.ro },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/servicii/${loaderData.service.slug}` },
      ],
      links: [{ rel: "canonical", href: `/servicii/${loaderData.service.slug}` }],
    };
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  const { t, tr } = useLang();

  return (
    <>
      <PageHero title={tr(service.title)} subtitle={tr(service.short)} image={service.image} />
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            {service.body.map((p, i) => (
              <p key={i}>{tr(p)}</p>
            ))}
          </div>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {service.points.map((p, i) => (
              <li key={i} className="flex gap-3 border-l-2 border-gold/60 bg-cream px-4 py-3">
                <span className="text-gold" aria-hidden>
                  ✦
                </span>
                <span className="text-sm text-foreground">{tr(p)}</span>
              </li>
            ))}
          </ul>
        </div>
        <aside className="card-elegant h-fit p-7">
          <h2 className="font-serif text-2xl text-foreground">{t("request_consult")}</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t("hero_subtitle")}</p>
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
