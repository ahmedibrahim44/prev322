import { createFileRoute } from "@tanstack/react-router";
import { ContactForm } from "@/components/contact-form";
import { Hours } from "@/components/hours";
import { InnerHero } from "@/components/inner-hero";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/nous-joindre")({
  component: ContactPage,
  head: () => ({ meta: [{ title: "Nous joindre · Vitalida Physio & Ostéo" }] }),
});

function ContactPage() {
  const { t } = useI18n();
  return (
    <>
      <InnerHero
        eyebrow={t({ fr: "Nous joindre", en: "Contact" })}
        title={
          <>
            {t({ fr: "Optimisez votre santé.", en: "Optimize your health." })}{" "}
            <em className="italic-em">{t({ fr: "Prenez rendez-vous.", en: "Book a session." })}</em>
          </>
        }
        lead={t({
          fr: "En ligne sur GOrendezvous, par téléphone, ou par ce formulaire. Nous recevons en français, en anglais et en espagnol.",
          en: "Online on GOrendezvous, by phone, or through this form. We receive you in French, English and Spanish.",
        })}
      />
      <section className="wrap pb-24 grid lg:grid-cols-2 gap-12">
        <div>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href={SITE.booking} target="_blank" rel="noreferrer">
                {t({ fr: "Réserver en ligne", en: "Book online" })}
              </a>
            </Button>
            <Button asChild variant="paper" size="lg">
              <a href={SITE.phoneHref}>{SITE.phone}</a>
            </Button>
          </div>
          <dl className="mt-10 space-y-4">
            <div>
              <dt className="text-xs tracking-[0.14em] uppercase text-water-deep">
                {t({ fr: "Adresse", en: "Address" })}
              </dt>
              <dd className="mt-1">
                Clinique de Santé NDG
                <br />
                {SITE.addressLine}
                <br />
                {SITE.city}
              </dd>
            </div>
            <div>
              <dt className="text-xs tracking-[0.14em] uppercase text-water-deep">
                {t({ fr: "Courriel", en: "Email" })}
              </dt>
              <dd className="mt-1">
                <a href={SITE.emailHref}>{SITE.email}</a>
              </dd>
            </div>
          </dl>
          <div className="mt-8 max-w-sm">
            <p className="text-xs tracking-[0.14em] uppercase text-water-deep mb-2">
              {t({ fr: "Heures d'ouverture", en: "Opening hours" })}
            </p>
            <Hours />
          </div>
        </div>
        <div className="rounded-[32px] bg-cream p-6 sm:p-8 shadow-[var(--shadow-card)]">
          <h2 className="text-2xl">{t({ fr: "Écrivez-nous", en: "Write to us" })}</h2>
          <p className="mt-2 mb-6 text-ink-soft">
            {t({
              fr: "Seuls votre nom et votre courriel sont requis. Nous vous répondons nous-mêmes.",
              en: "Only your name and email are required. We reply ourselves.",
            })}
          </p>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
