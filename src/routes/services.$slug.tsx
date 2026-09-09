import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { InnerHero } from "@/components/inner-hero";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/lib/content";
import { useI18n } from "@/lib/i18n";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/services/$slug")({
  component: ServicePage,
  loader: ({ params }) => {
    const service = SERVICES.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => ({
    meta: [{ title: `${loaderData?.service.title.fr ?? "Service"} · Vitalida` }],
  }),
});

function ServicePage() {
  const { service } = Route.useLoaderData();
  const { t } = useI18n();
  return (
    <>
      <InnerHero
        eyebrow={service.num}
        title={t(service.title)}
        lead={t(service.lead)}
        image={service.photo}
        imageAlt=""
      />
      <section className="wrap pb-24 grid lg:grid-cols-[1fr_0.7fr] gap-12">
        <div>
          <p className="text-lg text-ink-soft max-w-[54ch]">{t(service.body)}</p>
          <p className="mt-8 text-ink-soft max-w-[54ch]">
            {t({
              fr: "Une heure en salle privée, à la Clinique de Santé NDG. Clientèle privée et SAAQ. Notre clinique n'est pas adaptée aux dossiers de la CSST.",
              en: "One hour in a private room at the Clinique de Santé NDG. Private clients and SAAQ. Our clinic is not set up for CSST files.",
            })}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild>
              <a href={SITE.booking} target="_blank" rel="noreferrer">
                {t({ fr: "Prendre rendez-vous", en: "Book a session" })}
              </a>
            </Button>
            <Button asChild variant="paper">
              <Link to="/services">{t({ fr: "Tous les services", en: "All services" })}</Link>
            </Button>
          </div>
        </div>
        <aside className="rounded-[32px] bg-cream p-7 h-fit shadow-[var(--shadow-card)]">
          <p className="font-display text-2xl tracking-[-0.03em]">
            {t({ fr: "Une séance, en pratique", en: "A session, in practice" })}
          </p>
          <ul className="mt-4 space-y-3 text-ink-soft">
            <li>{t({ fr: "Durée : une heure (50 à 60 minutes en pédiatrie)", en: "Length: one hour (50 to 60 minutes in paediatrics)" })}</li>
            <li>{t({ fr: "Salle privée, une seule thérapeute", en: "Private room, a single therapist" })}</li>
            <li>{t({ fr: "Évaluation, puis traitement manuel", en: "Assessment, then manual treatment" })}</li>
            <li>{t({ fr: "Français, anglais ou espagnol", en: "French, English or Spanish" })}</li>
          </ul>
        </aside>
      </section>
    </>
  );
}
