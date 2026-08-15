import { useState } from "react";
import { z } from "zod";
import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const FORMSPREE = "https://formspree.io/f/xvkpqpjd";

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  phone: z.string().trim().min(1).max(40),
  email: z.string().trim().email().max(255).or(z.literal("")),
  subject: z.string().trim().max(150),
  interest: z.string().trim().max(150),
  message: z.string().trim().min(1).max(2000),
});

const fieldClass =
  "w-full border border-input bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-gold";

export function ContactForm({ defaultInterest = "" }: { defaultInterest?: string }) {
  const { t, lang } = useLang();
  const [state, setState] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const values = {
      name: String(fd.get("name") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      email: String(fd.get("email") ?? ""),
      subject: String(fd.get("subject") ?? ""),
      interest: String(fd.get("interest") ?? ""),
      message: String(fd.get("message") ?? ""),
    };
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0]);
        next[key] = issue.code === "invalid_string" ? t("f_invalid_email") : t("f_required");
      }
      setErrors(next);
      return;
    }
    setErrors({});
    setState("sending");
    try {
      const res = await fetch(FORMSPREE, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({ ...parsed.data, _language: lang }),
      });
      if (!res.ok) throw new Error("failed");
      setState("ok");
      form.reset();
    } catch {
      setState("error");
    }
  }

  if (state === "ok") {
    return (
      <div className="border border-gold/50 bg-cream p-8 text-center">
        <p className="font-serif text-2xl text-foreground">{t("f_success")}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-xs uppercase tracking-[0.16em] text-muted-foreground">
            {t("f_name")}
          </label>
          <input name="name" maxLength={100} className={fieldClass} />
          {errors["name"] && <p className="mt-1 text-xs text-destructive">{errors["name"]}</p>}
        </div>
        <div>
          <label className="mb-1.5 block text-xs uppercase tracking-[0.16em] text-muted-foreground">
            {t("f_phone")}
          </label>
          <input name="phone" maxLength={40} className={fieldClass} />
          {errors["phone"] && <p className="mt-1 text-xs text-destructive">{errors["phone"]}</p>}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-xs uppercase tracking-[0.16em] text-muted-foreground">
            {t("f_email")}
          </label>
          <input name="email" type="email" maxLength={255} className={fieldClass} />
          {errors["email"] && <p className="mt-1 text-xs text-destructive">{errors["email"]}</p>}
        </div>
        <div>
          <label className="mb-1.5 block text-xs uppercase tracking-[0.16em] text-muted-foreground">
            {t("f_subject")}
          </label>
          <input name="subject" maxLength={150} className={fieldClass} />
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-xs uppercase tracking-[0.16em] text-muted-foreground">
          {t("f_interest")}
        </label>
        <input
          name="interest"
          maxLength={150}
          defaultValue={defaultInterest}
          className={fieldClass}
        />
      </div>

      <div>
        <label className="mb-1.5 block text-xs uppercase tracking-[0.16em] text-muted-foreground">
          {t("f_message")}
        </label>
        <textarea name="message" rows={5} maxLength={2000} className={cn(fieldClass, "resize-y")} />
        {errors["message"] && <p className="mt-1 text-xs text-destructive">{errors["message"]}</p>}
      </div>

      {state === "error" && <p className="text-sm text-destructive">{t("f_error")}</p>}

      <button
        type="submit"
        disabled={state === "sending"}
        className="w-full border border-gold bg-charcoal px-8 py-3.5 font-serif text-lg text-gold-soft transition-colors hover:bg-gold hover:text-charcoal disabled:opacity-60 sm:w-auto"
      >
        {state === "sending" ? t("f_sending") : t("f_send")}
      </button>
    </form>
  );
}
