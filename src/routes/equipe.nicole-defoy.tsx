import { createFileRoute, Link } from "@tanstack/react-router";
import { InnerHero } from "@/components/inner-hero";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/equipe/nicole-defoy")({
  component: NicolePage,
  head: () => ({ meta: [{ title: "Nicole Defoy · Vitalida Physio & Ostéo" }] }),
});

function NicolePage() {
  const { t } = useI18n();
  return (
    <>
      <InnerHero
        eyebrow={t({
          fr: "Coach de vie · transitions de vie et deuils",
          en: "Life coach · life transitions and grief",
        })}
        title="Nicole Defoy"
        lead={t({
          fr: "Une approche humaniste, en complément des soins de la clinique.",
          en: "A humanist approach, complementary to the clinic's care.",
        })}
      />
      <section className="wrap pb-24 grid lg:grid-cols-[0.7fr_1.1fr] gap-12">
        <div className="rounded-[32px] bg-mauve-mist aspect-[3/4] grid place-items-center">
          <div className="text-center p-8">
            <p className="font-display text-8xl text-mauve tracking-[-0.04em]">ND</p>
            <p className="mt-4 text-sm text-mauve max-w-[22ch] mx-auto">
              {t({
                fr: "Un vrai portrait photographique remplacera ce monogramme dès qu'il sera fourni.",
                en: "A real photographic portrait will replace this monogram as soon as it is provided.",
              })}
            </p>
          </div>
        </div>
        <div>
          <p className="text-lg text-ink-soft">
            {t({
              fr: "Diplômée en coaching professionnel de l'École de Formation Syma en 2025, Nicole Defoy accompagne les grands passages : retraite, changement professionnel, deuil, déménagement, proche aidance.",
              en: "Graduated in professional coaching from École de Formation Syma in 2025, Nicole Defoy accompanies the great passages: retirement, career change, grief, moving, caregiving.",
            })}
          </p>
          <p className="mt-5 text-ink-soft">
            {t({
              fr: "Elle travaille aux côtés d'Alida, dont la pratique de coaching — La Vie en Mauve — s'adresse aussi à celles et ceux qui veulent un accompagnement du corps et de l'esprit, y compris à distance.",
              en: "She works alongside Alida, whose coaching practice — La Vie en Mauve — is also for those who want accompaniment of body and mind, including remotely.",
            })}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild>
              <Link to="/nous-joindre">{t({ fr: "Écrire à la clinique", en: "Write to the clinic" })}</Link>
            </Button>
            <Button asChild variant="paper">
              <Link to="/coaching">La Vie en Mauve</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
