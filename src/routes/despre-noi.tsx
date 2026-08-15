import { createFileRoute } from "@tanstack/react-router";
import { img } from "@/assets/images";
import { CallButton, Ornament, OutlineLink, PageHero, SectionTitle } from "@/components/site/ui";
import { whyUs } from "@/data/services";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/despre-noi")({
  head: () => ({
    meta: [
      { title: "Despre noi | Casa Funerară Sf. Nectarie" },
      {
        name: "description",
        content:
          "Casa Funerară Sf. Nectarie este alături de familii în momente dificile, cu sprijin, consiliere și servicii funerare organizate cu discreție și respect.",
      },
      { property: "og:title", content: "Despre noi | Casa Funerară Sf. Nectarie" },
      {
        property: "og:description",
        content: "Respect, compasiune și demnitate. Servicii funerare complete, disponibile non-stop.",
      },
      { property: "og:url", content: "/despre-noi" },
    ],
    links: [{ rel: "canonical", href: "/despre-noi" }],
  }),
  component: About,
});

function About() {
  const { t, tr } = useLang();
  return (
    <>
      <PageHero title={t("brand")} subtitle={t("about_lead")} image={img["transport-3.jpg"]} />

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
        <div className="relative">
          <img src={img["capela-1.jpg"]} alt={t("brand")} className="w-full object-cover" />
          <div className="pointer-events-none absolute inset-3 border border-gold/40" />
        </div>
        <div>
          <SectionTitle eyebrow={t("motto")} title={t("about_title")} align="left" />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>{t("about_lead")}</p>
            <p>
              {tr({
                ro: "Înțelegem că fiecare familie trece printr-o situație unică. De aceea ascultăm mai întâi, explicăm calm etapele și organizăm ceremonia în funcție de dorințele și de tradiția familiei.",
                ru: "Мы понимаем, что каждая семья переживает свою, особую ситуацию. Поэтому мы сначала слушаем, спокойно объясняем этапы и организуем церемонию согласно пожеланиям и традиции семьи.",
              })}
            </p>
            <p>
              {tr({
                ro: "Ne ocupăm de transport, de pregătirea persoanei decedate, de acte și documente, de produsele funerare necesare și de organizarea completă a ceremoniei. Suntem disponibili non-stop, la 14808.",
                ru: "Мы занимаемся транспортом, подготовкой умершего, документами, необходимыми похоронными товарами и полной организацией церемонии. Мы доступны круглосуточно по номеру 14808.",
              })}
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <CallButton />
            <OutlineLink to="/servicii">{t("nav_services")}</OutlineLink>
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <SectionTitle eyebrow={t("motto")} title={t("why_title")} />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyUs.map((w) => (
              <div key={w.title.ro} className="card-elegant p-7">
                <span className="text-gold" aria-hidden>
                  ✦
                </span>
                <h3 className="mt-3 font-serif text-xl text-foreground">{tr(w.title)}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{tr(w.text)}</p>
              </div>
            ))}
          </div>
          <div className="mt-14 text-center">
            <Ornament />
            <p className="mx-auto mt-6 max-w-2xl font-serif text-2xl text-foreground">
              {t("cta_final")}
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <CallButton />
              <OutlineLink to="/contact">{t("request_consult")}</OutlineLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
