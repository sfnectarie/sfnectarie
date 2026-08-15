import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import type { ReactNode } from "react";
import { useLang, PHONE } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function Ornament({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center gap-3", className)} aria-hidden>
      <span className="h-px w-12 bg-gradient-to-r from-transparent to-gold/70 sm:w-20" />
      <span className="text-gold">✦</span>
      <span className="h-px w-12 bg-gradient-to-l from-transparent to-gold/70 sm:w-20" />
    </div>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  lead,
  align = "center",
  invert = false,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "center" | "left";
  invert?: boolean;
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" ? "mx-auto text-center" : "text-left")}>
      {eyebrow && (
        <p className={cn("eyebrow", invert && "text-gold-soft")}>{eyebrow}</p>
      )}
      <h2
        className={cn(
          "mt-3 text-3xl leading-tight sm:text-4xl lg:text-[2.6rem]",
          invert ? "text-cream" : "text-foreground",
        )}
      >
        {title}
      </h2>
      <div className={cn("mt-5", align === "center" ? "mx-auto" : "")}>
        <Ornament className={align === "center" ? "" : "justify-start"} />
      </div>
      {lead && (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed",
            invert ? "text-cream/70" : "text-muted-foreground",
          )}
        >
          {lead}
        </p>
      )}
    </div>
  );
}

export function CallButton({ className }: { className?: string }) {
  const { t } = useLang();
  return (
    <a
      href={`tel:${PHONE}`}
      className={cn(
        "inline-flex items-center justify-center gap-2 border border-gold bg-gold px-7 py-3.5 text-sm uppercase tracking-[0.14em] text-charcoal transition-colors hover:bg-gold-deep hover:text-cream",
        className,
      )}
    >
      <Phone className="h-4 w-4" />
      {t("call_now")}
    </a>
  );
}

export function OutlineLink({
  to,
  children,
  className,
  invert = false,
}: {
  to: string;
  children: ReactNode;
  className?: string;
  invert?: boolean;
}) {
  return (
    <Link
      to={to as never}
      className={cn(
        "inline-flex items-center justify-center border px-7 py-3.5 text-sm uppercase tracking-[0.14em] transition-colors",
        invert
          ? "border-gold/60 text-cream hover:bg-gold hover:text-charcoal"
          : "border-charcoal/30 text-foreground hover:border-gold hover:text-gold-deep",
        className,
      )}
    >
      {children}
    </Link>
  );
}

export function PageHero({
  title,
  subtitle,
  image,
}: {
  title: string;
  subtitle?: string;
  image?: string;
}) {
  const { t } = useLang();
  return (
    <section className="relative overflow-hidden border-b border-gold/20 bg-charcoal">
      {image && (
        <img
          src={image}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/85 via-charcoal/80 to-charcoal" />
      <div className="relative mx-auto max-w-4xl px-6 py-20 text-center sm:py-24">
        <p className="eyebrow text-gold-soft">{t("motto")}</p>
        <h1 className="fade-up mt-4 text-4xl leading-tight text-cream sm:text-5xl">{title}</h1>
        <Ornament className="mt-6" />
        {subtitle && (
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-cream/75">{subtitle}</p>
        )}
      </div>
    </section>
  );
}

export function PriceNote({ className }: { className?: string }) {
  const { t } = useLang();
  return (
    <span
      className={cn(
        "inline-block border border-gold/40 bg-cream px-3 py-1 text-[0.68rem] uppercase tracking-[0.18em] text-gold-deep",
        className,
      )}
    >
      {t("price_on_request")}
    </span>
  );
}
