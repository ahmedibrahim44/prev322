import { createFileRoute } from "@tanstack/react-router";
import { InnerHero } from "@/components/inner-hero";
import { Button } from "@/components/ui/button";
import { MOTIFS } from "@/lib/content";
import { useI18n } from "@/lib/i18n";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/pourquoi-consulter")({
  component: MotifsPage,
  head: () => ({ meta: [{ title: "Pourquoi consulter · Vitalida Physio & Ostéo" }] }),
});

function MotifsPage() {
  const { t } = useI18n();
  return (
    <>
      <InnerHero
        eyebrow={t({ fr: "Pourquoi consulter", en: "Reasons to come" })}
        title={
          <>
            {t({ fr: "Ce qui amène quelqu'un", en: "What brings someone" })}{" "}
            <em className="italic-em">{t({ fr: "à pousser la porte.", en: "to walk through the door." })}</em>
          </>
        }
        lead={t({
          fr: "La liste est longue. Voici ce que nous entendons le plus souvent, et ce que la physiothérapie et l'ostéopathie peuvent regarder ensemble.",
          en: "The list is long. Here is what we hear most often, and what physiotherapy and osteopathy can look at together.",
        })}
      />
      <section className="wrap pb-24">
        <ol className="divide-y divide-line">
          {MOTIFS.map((m, i) => (
            <li key={m.fr} className="py-5 grid sm:grid-cols-[4rem_1fr] gap-4 items-baseline">
              <span className="text-xs tracking-[0.16em] text-water-deep">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-display text-2xl sm:text-3xl tracking-[-0.03em]">{t(m)}</span>
            </li>
          ))}
        </ol>
        <p className="mt-10 max-w-[54ch] text-ink-soft">
          {t({
            fr: "À tout âge, les traitements sont aussi utiles à titre préventif : réduire les tensions avant qu'elles ne causent de douleurs. Les motifs concernant les femmes — grossesse, après un accouchement, périménopause, fréquence ou urgence urinaire, fuites — sont des raisons de consulter, sans constituer un service affiché de santé pelvienne.",
            en: "At any age, treatments are also useful preventively: easing tensions before they cause pain. Reasons concerning women — pregnancy, after childbirth, perimenopause, urinary frequency or urgency, leaks — are reasons to come, without being listed as a pelvic-health service.",
          })}
        </p>
        <Button asChild className="mt-10">
          <a href={SITE.booking} target="_blank" rel="noreferrer">
            {t({ fr: "Prendre rendez-vous", en: "Book a session" })}
          </a>
        </Button>
      </section>
    </>
  );
}
