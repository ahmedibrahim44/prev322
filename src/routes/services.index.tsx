import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { InnerHero } from "@/components/inner-hero";
import { SERVICES } from "@/lib/content";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/services/")({
  component: ServicesIndex,
  head: () => ({ meta: [{ title: "Services · Vitalida Physio & Ostéo" }] }),
});

function ServicesIndex() {
  const { t } = useI18n();
  return (
    <>
      <InnerHero
        eyebrow={t({ fr: "Services", en: "Services" })}
        title={
          <>
            {t({ fr: "Cinq façons de prendre soin de vous,", en: "Five ways to care for you," })}{" "}
            <em className="italic-em">{t({ fr: "en une heure.", en: "in one hour." })}</em>
          </>
        }
        lead={t({
          fr: "Des séances individuelles et privées, à la Clinique de Santé NDG. Nous recevons la clientèle privée et la SAAQ. Le coaching a sa propre porte : La Vie en Mauve.",
          en: "Individual, private sessions at the Clinique de Santé NDG. We see private clients and SAAQ files. Coaching has its own door: La Vie en Mauve.",
        })}
      />
      <section className="wrap pb-24 grid gap-6">
        {SERVICES.map((s) => (
          <Link
            key={s.slug}
            to="/services/$slug"
            params={{ slug: s.slug }}
            className="group grid sm:grid-cols-[200px_1fr] gap-6 rounded-[32px] bg-cream p-3 shadow-[var(--shadow-card)]"
          >
            <div className="overflow-hidden rounded-[22px] aspect-[4/3] sm:aspect-auto sm:h-full">
              <img src={s.photo} alt="" className={`h-full w-full object-cover ${s.photoPos}`} />
            </div>
            <div className="p-4 sm:py-6">
              <p className="text-xs tracking-[0.16em] text-water-deep">{s.num}</p>
              <h2 className="mt-2 text-2xl">{t(s.title)}</h2>
              <p className="mt-2 text-ink-soft max-w-[50ch]">{t(s.lead)}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-water-deep">
                {t({ fr: "Lire la page", en: "Read the page" })}
                <ArrowRight className="size-4" />
              </span>
            </div>
          </Link>
        ))}
        <Link
          to="/coaching"
          className="rounded-[32px] bg-mauve-deep text-cream p-8 sm:p-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
        >
          <div>
            <p className="eyebrow text-mauve-mist before:bg-mauve-mist">La Vie en Mauve</p>
            <h2 className="mt-3 text-3xl text-cream">
              {t({ fr: "Le coaching de vie", en: "Life coaching" })}
            </h2>
            <p className="mt-2 text-cream/75 max-w-[46ch]">
              {t({
                fr: "Un accompagnement pendant une transition ou un grand défi. En clinique, ou à distance.",
                en: "Support during a transition or a great challenge. In clinic, or remotely.",
              })}
            </p>
          </div>
          <span className="inline-flex items-center gap-2 text-mauve-mist">
            {t({ fr: "La page coaching", en: "The coaching page" })}
            <ArrowRight className="size-4" />
          </span>
        </Link>
      </section>
    </>
  );
}
