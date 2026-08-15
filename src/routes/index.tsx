import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, Phone } from "lucide-react";
import { img } from "@/assets/images";
import { CallButton, Ornament, OutlineLink, PriceNote, SectionTitle } from "@/components/site/ui";
import { categories } from "@/data/products";
import { packages } from "@/data/packages";
import { services, whyUs } from "@/data/services";
import { useLang, PHONE } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Casa Funerară Sf. Nectarie | Servicii Funerare Non-Stop" },
      {
        name: "description",
        content:
          "Casa Funerară Sf. Nectarie oferă servicii funerare, pachete și produse funerare, cu respect, compasiune și demnitate. Linie non-stop: 14808.",
      },
      { property: "og:title", content: "Casa Funerară Sf. Nectarie | Servicii Funerare Non-Stop" },
      {
        property: "og:description",
        content:
          "Servicii funerare complete: transport funerar, organizarea înmormântării, acte și documente, produse funerare. Linie non-stop 14808.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});


const highlights = [
  {
    image: img["transport-1.jpg"],
    to: "/servicii",
    title: { ro: "Transport funerar", ru: "Ритуальный транспорт" },
    text: {
      ro: "Autovehicule funerare moderne și personal discret, disponibile non-stop pentru transport local sau la distanță, cu respectarea tuturor formalităților.",
      ru: "Современные катафалки и деликатный персонал, доступные круглосуточно для местной и междугородной перевозки, со всеми необходимыми формальностями.",
    },
  },
  {
    image: img["capela-1.jpg"],
    to: "/pachete-funerare",
    title: { ro: "Pachete funerare complete", ru: "Полные ритуальные пакеты" },
    text: {
      ro: "Pachete gândite pentru a acoperi întreaga ceremonie — de la sicriu și accesorii, până la organizare, acte și asistență permanentă.",
      ru: "Пакеты, охватывающие всю церемонию — от гроба и аксессуаров до организации, документов и постоянного сопровождения.",
    },
  },
  {
    image: img["showroom-1.jpg"],
    to: "/produse-funerare",
    title: { ro: "Produse funerare", ru: "Ритуальные товары" },
    text: {
      ro: "Sicrie, cruci, coroane și accesorii selectate cu grijă, disponibile în showroom-ul nostru, pentru o ceremonie demnă și îngrijită.",
      ru: "Гробы, кресты, венки и аксессуары, тщательно отобранные и представленные в нашем шоуруме для достойной церемонии.",
    },
  },
] as const;

function Home() {
  const { t, tr } = useLang();
  const homeServices = services.filter((s) => s.slug !== "imbalsamare");

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-charcoal">
        <img
          src={img["hero-chapel.jpg"]}
          alt=""
          aria-hidden
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/85 via-charcoal/80 to-charcoal" />

        <div className="relative mx-auto max-w-5xl px-6 py-20 text-center sm:py-28">
          <img
            src={img["logo-hero.png"]}
            alt={t("brand")}
            className="mx-auto w-auto max-w-[90%] sm:max-w-[520px] lg:max-w-[600px]"
          />
          <h1 className="fade-up mt-10 font-serif text-3xl leading-tight text-cream sm:text-5xl lg:text-[3.4rem]">
            {t("hero_title")}
          </h1>
          <Ornament className="mt-7" />
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-cream/75 sm:text-lg">
            {t("hero_subtitle")}
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CallButton className="w-full sm:w-auto" />
            <OutlineLink to="/contact" invert className="w-full sm:w-auto">
              {t("request_consult")}
            </OutlineLink>
          </div>
          <div className="mx-auto mt-10 inline-flex items-center gap-3 border border-gold/40 px-5 py-2.5 text-cream/85">
            <Clock className="h-4 w-4 text-gold" />
            <span className="text-xs uppercase tracking-[0.22em]">{t("available_nonstop")}</span>
          </div>
        </div>
      </section>

      {/* SERVICII */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle eyebrow={t("motto")} title={t("services_title")} lead={t("services_lead")} />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {homeServices.map((s) => (
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
                <h3 className="font-serif text-2xl text-foreground">{tr(s.title)}</h3>
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
      </section>


      {/* ALTERNANTE: text + imagine */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl space-y-16 px-6 py-20 lg:space-y-24">
          {highlights.map((h, i) => (
            <div
              key={h.image}
              className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="relative">
                  <img
                    src={h.image}
                    alt={tr(h.title)}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover"
                  />
                  <div className="pointer-events-none absolute inset-3 border border-gold/40" />
                </div>
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <SectionTitle eyebrow={t("motto")} title={tr(h.title)} align="left" />
                <p className="mt-6 text-base leading-relaxed text-muted-foreground">{tr(h.text)}</p>
                <div className="mt-8">
                  <OutlineLink to={h.to}>{t("view_details")}</OutlineLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DESPRE NOI */}
      <section className="bg-cream">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
          <div className="relative">
            <img
              src={img["transport-3.jpg"]}
              alt={t("brand")}
              loading="lazy"
              className="w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-3 border border-gold/40" />
          </div>
          <div>
            <SectionTitle
              eyebrow={t("motto")}
              title={t("about_title")}
              align="left"
            />
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">{t("about_lead")}</p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {tr({
                ro: "Ne ocupăm de fiecare etapă — de la primul telefon, până la ultimul detaliu al ceremoniei — pentru ca familia să aibă timpul și liniștea de care are nevoie.",
                ru: "Мы берём на себя каждый этап — от первого звонка до последней детали церемонии — чтобы у семьи было время и спокойствие, в которых она нуждается.",
              })}
            </p>
            <div className="mt-8">
              <OutlineLink to="/despre-noi">{t("view_details")}</OutlineLink>
            </div>
          </div>
        </div>
      </section>

      {/* DE CE NOI */}
      <section className="mx-auto max-w-7xl px-6 py-20">
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
      </section>

      {/* PACHETE */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <SectionTitle eyebrow={t("motto")} title={t("packages_title")} lead={t("packages_lead")} />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {packages.map((p) => (
              <div key={p.slug} className="card-elegant flex flex-col overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden bg-background">
                  <img
                    src={p.image}
                    alt={tr(p.title)}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-serif text-2xl text-foreground">{tr(p.title)}</h3>
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
        </div>
      </section>

      {/* CATEGORII PRODUSE */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle eyebrow={t("motto")} title={t("products_title")} lead={t("products_lead")} />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c) => (
            <Link
              key={c.slug}
              to="/produse-funerare/$categorie"
              params={{ categorie: c.slug }}
              className="card-elegant group relative overflow-hidden"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={c.image}
                  alt={tr(c.title)}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-transparent p-5 pt-14">
                <h3 className="font-serif text-xl text-cream">{tr(c.title)}</h3>
                <span className="mt-1 block text-[0.65rem] uppercase tracking-[0.2em] text-gold-soft">
                  {t("view_details")}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative overflow-hidden bg-charcoal">
        <img
          src={img["transport-4.jpg"]}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-charcoal/85" />
        <div className="relative mx-auto max-w-3xl px-6 py-20 text-center">
          <Ornament />
          <h2 className="mt-6 font-serif text-3xl leading-snug text-cream sm:text-4xl">
            {t("cta_final")}
          </h2>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CallButton className="w-full sm:w-auto" />
            <OutlineLink to="/contact" invert className="w-full sm:w-auto">
              {t("request_consult")}
            </OutlineLink>
          </div>
          <a
            href={`tel:${PHONE}`}
            className="mt-8 inline-flex items-center gap-3 text-cream/70 transition-colors hover:text-gold-soft"
          >
            <Phone className="h-4 w-4" />
            <span className="text-xs uppercase tracking-[0.22em]">
              {PHONE} — {t("nonstop")}
            </span>
          </a>
        </div>
      </section>
    </>
  );
}
