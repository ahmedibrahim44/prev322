import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input, Label, Select, Textarea } from "@/components/ui/field";
import { useI18n } from "@/lib/i18n";
import { SITE } from "@/lib/site";

const REASONS = [
  { fr: "Une douleur ou une blessure", en: "Pain or an injury" },
  { fr: "Un suivi en ostéopathie", en: "Osteopathy follow-up" },
  { fr: "Mon bébé ou mon enfant", en: "My baby or child" },
  { fr: "La grossesse ou l'après-accouchement", en: "Pregnancy or after childbirth" },
  { fr: "Une séance avec discussion inspirée", en: "A session with inspired conversation" },
  { fr: "Le coaching de vie — La Vie en Mauve", en: "Life coaching — La Vie en Mauve" },
  { fr: "Autre chose", en: "Something else" },
];

export function ContactForm({ id = "formulaire" }: { id?: string }) {
  const { t, lang } = useI18n();
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    if (!name || !email) {
      setStatus("err");
      return;
    }
    try {
      const payload = {
        name,
        email,
        phone: String(data.get("phone") || ""),
        reason: String(data.get("reason") || ""),
        message: String(data.get("message") || ""),
        at: new Date().toISOString(),
      };
      const prev = JSON.parse(localStorage.getItem("vitalida-messages") || "[]");
      prev.push(payload);
      localStorage.setItem("vitalida-messages", JSON.stringify(prev));
      setStatus("ok");
      e.currentTarget.reset();
    } catch {
      setStatus("err");
    }
  }

  if (status === "ok") {
    return (
      <div
        id={id}
        className="rounded-[28px] bg-water-mist p-8 text-ink"
        role="status"
      >
        <p className="font-display text-2xl tracking-[-0.03em]">
          {t({
            fr: "Merci, votre message est parti.",
            en: "Thank you, your message has been received.",
          })}
        </p>
        <p className="mt-3 text-ink-soft">
          {t({
            fr: "Nous vous répondons nous-mêmes, rapidement.",
            en: "We reply ourselves, promptly.",
          })}
        </p>
      </div>
    );
  }

  return (
    <form id={id} onSubmit={onSubmit} className="grid gap-5" noValidate>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <Label htmlFor="name">{t({ fr: "Votre nom", en: "Your name" })}</Label>
          <Input id="name" name="name" autoComplete="name" required />
        </div>
        <div>
          <Label htmlFor="phone">{t({ fr: "Téléphone", en: "Phone" })}</Label>
          <Input id="phone" name="phone" type="tel" autoComplete="tel" />
        </div>
      </div>
      <div>
        <Label htmlFor="email">{t({ fr: "Courriel", en: "Email" })}</Label>
        <Input id="email" name="email" type="email" autoComplete="email" required />
      </div>
      <div>
        <Label htmlFor="reason">
          {t({ fr: "Qu'est-ce qui vous amène?", en: "What brings you?" })}
        </Label>
        <Select id="reason" name="reason" defaultValue="">
          <option value="" disabled>
            {t({ fr: "Choisir un motif", en: "Choose a reason" })}
          </option>
          {REASONS.map((r) => (
            <option key={r.fr} value={r[lang]}>
              {r[lang]}
            </option>
          ))}
        </Select>
      </div>
      <div>
        <Label htmlFor="message">{t({ fr: "Votre message", en: "Your message" })}</Label>
        <Textarea id="message" name="message" rows={5} />
      </div>
      {status === "err" ? (
        <p className="text-sm text-mauve-deep" role="alert">
          {t({
            fr: `L'envoi a échoué. Appelez-nous au ${SITE.phone} ou réessayez plus tard.`,
            en: `Sending failed. Call us at ${SITE.phone} or try again later.`,
          })}
        </p>
      ) : null}
      <Button type="submit" variant="forest" size="lg">
        {t({ fr: "Envoyer", en: "Send" })}
      </Button>
      <p className="text-sm text-ink-faint">
        {t({
          fr: "Seuls votre nom et votre courriel sont requis. En envoyant ce formulaire, vous acceptez notre politique de confidentialité.",
          en: "Only your name and email are required. By sending this form, you accept our privacy policy.",
        })}
      </p>
    </form>
  );
}
