import { createFileRoute, Link } from "@tanstack/react-router";
import { InnerHero } from "@/components/inner-hero";
import { Button } from "@/components/ui/button";
import { Photo } from "@/components/visual/photo";
import { useI18n } from "@/lib/i18n";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/coaching")({
  component: CoachingPage,
  head: () => ({ meta: [{ title: "La Vie en Mauve · Coaching de vie · Vitalida" }] }),
});

function CoachingPage() {
  const { t } = useI18n();
  return (
    <>
      <InnerHero
        eyebrow="La Vie en Mauve"
        title={
          <>
            {t({ fr: "Le coaching de vie,", en: "Life coaching," })}{" "}
            <em className="italic-em text-mauve-mist">
              {t({ fr: "le corps et l'esprit ensemble.", en: "body and mind together." })}
            </em>
          </>
        }
        lead={t({
          fr: "Un accompagnement personnalisé pendant une période de transition ou de grand défi. En clinique à NDG, ou à distance.",
          en: "Personal accompaniment during a period of transition or great challenge. At the clinic in NDG, or remotely.",
        })}
        image="/photos/soin-inspiree.jpg"
        imageAlt=""
      />
      <section className="wrap pb-8 grid lg:grid-cols-2 gap-12">
        <div>
          <p className="text-lg text-ink-soft">
            {t({
              fr: "Alida Farrell construit sa propre clientèle de coaching — pas seulement celle de Nicole. Question de pouvoir offrir des séances en ligne, un jour par semaine depuis chez elle, ou lorsqu'elle est plus loin.",
              en: "Alida Farrell is building her own coaching practice — not only Nicole's. So that sessions can be offered online, one day a week from home, or when she is further away.",
            })}
          </p>
          <p className="mt-5 text-ink-soft">
            {t({
              fr: "Le nom de cette pratique est La Vie en Mauve. Elle s'adresse à vous avec la même tenue que le reste de la clinique : vous, formellement, sans promesse de résultat.",
              en: "This practice is named La Vie en Mauve. It addresses you with the same formality as the rest of the clinic: no promise of an outcome.",
            })}
          </p>
        </div>
        <Photo src="/photos/alida-portrait.jpg" alt="Alida Farrell" className="aspect-[4/5] max-h-[520px]" />
      </section>
      <section className="bg-mauve-mist py-20 mt-8">
        <div className="wrap grid md:grid-cols-2 gap-8">
          <article className="rounded-[32px] bg-cream p-8 shadow-[var(--shadow-card)]">
            <p className="text-xs tracking-[0.14em] uppercase text-mauve">Alida Farrell</p>
            <h2 className="mt-2 text-3xl">
              {t({ fr: "Pour une santé qui se cultive", en: "For a health that is cultivated" })}
            </h2>
            <p className="mt-4 text-ink-soft">
              {t({
                fr: "Depuis quelques années, Alida étudie la longévité et les composantes de la santé globale : la relation entre le corps et l'esprit, la Nature, la nourriture, le mouvement, le repos et les relations humaines. Le coaching s'ajoute à sa pratique de physiothérapeute et d'ostéopathe, formée Heroic en 2025.",
                en: "For some years Alida has been studying longevity and the components of whole health: the relation between body and mind, Nature, food, movement, rest and human relationships. Coaching joins her practice as a physiotherapist and osteopath, trained with Heroic in 2025.",
              })}
            </p>
            <Button asChild className="mt-6" variant="mauve">
              <Link to="/equipe/alida-farrell">{t({ fr: "Sa biographie", en: "Her biography" })}</Link>
            </Button>
          </article>
          <article className="rounded-[32px] bg-cream p-8 shadow-[var(--shadow-card)]">
            <p className="text-xs tracking-[0.14em] uppercase text-mauve">Nicole Defoy</p>
            <h2 className="mt-2 text-3xl">
              {t({ fr: "Pour les grands passages", en: "For the great passages" })}
            </h2>
            <p className="mt-4 text-ink-soft">
              {t({
                fr: "Diplômée de l'École de Formation Syma en 2025, Nicole accompagne la retraite, le changement professionnel, le deuil, le déménagement, la proche aidance. Une approche humaniste, en complément des soins de la clinique.",
                en: "Graduated from École de Formation Syma in 2025, Nicole accompanies retirement, career change, grief, moving, caregiving. A humanist approach, complementary to the clinic's care.",
              })}
            </p>
            <Button asChild className="mt-6" variant="paper">
              <Link to="/equipe/nicole-defoy">{t({ fr: "Sa page", en: "Her page" })}</Link>
            </Button>
          </article>
        </div>
      </section>
      <section className="wrap py-20">
        <h2 className="chap-title max-w-[16ch]">
          {t({ fr: "Une séance de coaching,", en: "A coaching session," })}{" "}
          <em className="italic-em">{t({ fr: "en clinique ou à distance.", en: "in clinic or remotely." })}</em>
        </h2>
        <p className="mt-5 max-w-[54ch] text-ink-soft">
          {t({
            fr: "Écrivez-nous pour convenir d'un moment. Une demande n'est pas un rendez-vous confirmé : nous vous répondons pour l'organiser, y compris en visio.",
            en: "Write to us to arrange a time. A request is not a confirmed appointment: we reply to organise it, including by video.",
          })}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild variant="mauve">
            <Link to="/nous-joindre">{t({ fr: "Écrire pour le coaching", en: "Write about coaching" })}</Link>
          </Button>
          <Button asChild variant="paper">
            <a href={SITE.phoneHref}>{SITE.phone}</a>
          </Button>
        </div>
      </section>
    </>
  );
}
