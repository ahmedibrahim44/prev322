import { createFileRoute } from "@tanstack/react-router";
import { Hours } from "@/components/hours";
import { InnerHero } from "@/components/inner-hero";
import { Button } from "@/components/ui/button";
import { Photo } from "@/components/visual/photo";
import { useI18n } from "@/lib/i18n";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/la-clinique")({
  component: ClinicPage,
  head: () => ({ meta: [{ title: "La clinique · Vitalida Physio & Ostéo" }] }),
});

function ClinicPage() {
  const { t } = useI18n();
  return (
    <>
      <InnerHero
        eyebrow={t({ fr: "La Clinique de Santé NDG", en: "Clinique de Santé NDG" })}
        title={
          <>
            {t({ fr: "Une clinique de quartier,", en: "A neighbourhood clinic," })}{" "}
            <em className="italic-em">{t({ fr: "à deux pas du métro.", en: "steps from the metro." })}</em>
          </>
        }
        lead={t({
          fr: "Vitalida Physio & Ostéo se trouve au sein de la Clinique de Santé NDG, dans Notre-Dame-de-Grâce, en bordure de Westmount.",
          en: "Vitalida Physio & Ostéo is at the Clinique de Santé NDG, in Notre-Dame-de-Grâce, on the edge of Westmount.",
        })}
      />
      <section className="wrap pb-24 grid lg:grid-cols-2 gap-10">
        <div>
          <p className="text-ink-soft max-w-[46ch]">
            {t({
              fr: "Une heure, une salle privée, une seule thérapeute. Une atmosphère de calme, de confort et de confidentialité. En autobus 24 ou 105, à pied depuis le métro Villa-Maria ou Vendôme, ou en auto par la 15 et la 720.",
              en: "One hour, a private room, a single therapist. An atmosphere of calm, comfort and confidentiality. Bus 24 or 105, on foot from Villa-Maria or Vendôme metro, or by car via highways 15 and 720.",
            })}
          </p>
          <dl className="mt-8 space-y-2 text-sm">
            <div>
              <dt className="text-ink-faint">{t({ fr: "Adresse", en: "Address" })}</dt>
              <dd>
                {SITE.addressLine}
                <br />
                {SITE.city}
              </dd>
            </div>
          </dl>
          <div className="mt-8 max-w-sm">
            <p className="text-xs tracking-[0.14em] uppercase text-water-deep mb-2">
              {t({ fr: "Heures d'ouverture", en: "Opening hours" })}
            </p>
            <Hours />
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <a href={SITE.booking} target="_blank" rel="noreferrer">
                {t({ fr: "Prendre rendez-vous", en: "Book a session" })}
              </a>
            </Button>
            <Button asChild variant="paper">
              <a href={SITE.maps} target="_blank" rel="noreferrer">
                {t({ fr: "Itinéraire", en: "Directions" })}
              </a>
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <Photo src="/photos/clinique-devanture.jpg" alt="" className="col-span-2 aspect-[16/10]" />
          <Photo src="/photos/clinique-bureau.jpg" alt="" className="aspect-square" />
          <Photo src="/photos/clinique-jardin.jpg" alt="" className="aspect-square" />
        </div>
      </section>
    </>
  );
}
