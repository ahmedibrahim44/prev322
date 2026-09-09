import { createFileRoute, Link } from "@tanstack/react-router";
import { InnerHero } from "@/components/inner-hero";
import { Button } from "@/components/ui/button";
import { Photo } from "@/components/visual/photo";
import { useI18n } from "@/lib/i18n";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/equipe/alida-farrell")({
  component: AlidaPage,
  head: () => ({ meta: [{ title: "Alida Farrell · Vitalida Physio & Ostéo" }] }),
});

function AlidaPage() {
  const { t } = useI18n();
  return (
    <>
      <InnerHero
        eyebrow={t({
          fr: "Physiothérapeute · ostéopathe D.O. · coach de vie",
          en: "Physiotherapist · osteopath D.O. · life coach",
        })}
        title="Alida Farrell"
        lead={t({
          fr: "Physiothérapeute depuis 2000 et ostéopathe depuis 2013, elle réunit les deux approches dans une même séance.",
          en: "A physiotherapist since 2000 and an osteopath since 2013, she brings both approaches into a single session.",
        })}
      />
      <section className="wrap pb-24 grid lg:grid-cols-[0.9fr_1.1fr] gap-12">
        <Photo src="/photos/alida-portrait.jpg" alt="Alida Farrell" className="aspect-[3/4]" />
        <div>
          <p className="text-lg text-ink-soft">
            {t({
              fr: "Alida Farrell est physiothérapeute, membre de l'Ordre professionnel de la physiothérapie du Québec, et ostéopathe diplômée du Centre Ostéopathique du Québec. Elle évalue votre condition et la traite avec ses mains. En français, en anglais ou en espagnol.",
              en: "Alida Farrell is a physiotherapist, a member of Quebec's professional order of physiotherapy, and an osteopath trained at the Centre Ostéopathique du Québec. She assesses your condition and treats it with her hands. In French, English or Spanish.",
            })}
          </p>
          <ul className="mt-8 divide-y divide-line">
            {[
              { k: { fr: "Physiothérapie", en: "Physiotherapy" }, v: { fr: "Université McGill, 2000", en: "McGill University, 2000" } },
              { k: { fr: "Ostéopathie", en: "Osteopathy" }, v: { fr: "Centre Ostéopathique du Québec, D.O. en 2013", en: "Centre Ostéopathique du Québec, D.O. in 2013" } },
              { k: { fr: "Coaching de vie", en: "Life coaching" }, v: { fr: "Heroic, 2025 · pratique La Vie en Mauve", en: "Heroic, 2025 · La Vie en Mauve" } },
              { k: { fr: "Membre", en: "Member" }, v: { fr: "OPPQ et Ostéopathie Québec, reçus pour vos assurances", en: "OPPQ and Ostéopathie Québec, receipts for your insurance" } },
            ].map((row) => (
              <li key={row.k.fr} className="py-3 grid sm:grid-cols-[10rem_1fr] gap-2">
                <span className="text-ink-faint">{t(row.k)}</span>
                <span>{t(row.v)}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-ink-soft">
            {t({
              fr: "Depuis quelques années, elle étudie la longévité et les composantes de la santé globale — le corps et l'esprit, la Nature, la nourriture, le mouvement, le repos, les relations humaines.",
              en: "For some years she has been studying longevity and the components of whole health — body and mind, Nature, food, movement, rest, human relationships.",
            })}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild>
              <a href={SITE.booking} target="_blank" rel="noreferrer">
                {t({ fr: "Prendre rendez-vous", en: "Book a session" })}
              </a>
            </Button>
            <Button asChild variant="mauve">
              <Link to="/coaching">La Vie en Mauve</Link>
            </Button>
          </div>
        </div>
      </section>
      <section className="pb-24 wrap">
        <Photo
          src="/photos/alida-jardin.jpg"
          alt={t({
            fr: "Alida Farrell dans son jardin, un panier de tomates et de haricots dans les bras",
            en: "Alida Farrell in her garden, a basket of tomatoes and beans in her arms",
          })}
          className="aspect-[16/9]"
        />
      </section>
    </>
  );
}
