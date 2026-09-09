import type { ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { InnerHero } from "@/components/inner-hero";
import { useI18n } from "@/lib/i18n";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/conditions")({
  component: TermsPage,
  head: () => ({ meta: [{ title: "Conditions d'utilisation · Vitalida" }] }),
});

function TermsPage() {
  const { t } = useI18n();
  return (
    <>
      <InnerHero
        eyebrow={t({ fr: "Le cadre", en: "The framework" })}
        title={t({ fr: "Conditions d'utilisation", en: "Terms of use" })}
        lead={t({ fr: "Dernière mise à jour : septembre 2026", en: "Last updated: September 2026" })}
      />
      <article className="wrap pb-24 max-w-[68ch] space-y-8 text-ink-soft">
        <Block title={t({ fr: "Acceptation", en: "Acceptance" })}>
          {t({
            fr: "En consultant ce site, vous acceptez les présentes conditions. Si vous n'êtes pas d'accord, nous vous invitons à ne pas l'utiliser.",
            en: "By consulting this site, you accept these terms. If you do not agree, we invite you not to use it.",
          })}
        </Block>
        <Block title={t({ fr: "Le contenu du site", en: "Site content" })}>
          {t({
            fr: "Les informations de ce site décrivent nos services de physiothérapie, d'ostéopathie et de coaching de vie à titre indicatif. Elles ne remplacent pas une évaluation en personne ni un avis médical. Le contenu peut être modifié sans préavis.",
            en: "The information on this site describes our physiotherapy, osteopathy and life-coaching services for information. It does not replace an in-person assessment or a medical opinion. Content may change without notice.",
          })}
        </Block>
        <Block title={t({ fr: "Utilisation du site", en: "Use of the site" })}>
          {t({
            fr: "Vous pouvez consulter et partager ce site librement. Il est interdit d'en copier le contenu à des fins commerciales, d'en extraire les données de façon automatisée ou de nuire à son fonctionnement.",
            en: "You may consult and share this site freely. Copying its content for commercial purposes, extracting data automatically, or harming its operation is forbidden.",
          })}
        </Block>
        <Block title={t({ fr: "Formulaire et rendez-vous", en: "Form and appointments" })}>
          {t({
            fr: "Une demande envoyée par le formulaire n'est pas un rendez-vous confirmé : nous vous répondons pour convenir d'un moment. La réservation en ligne se fait sur GOrendezvous, aux conditions de ce service. Vous vous engagez à fournir des renseignements exacts.",
            en: "A request sent through the form is not a confirmed appointment: we reply to arrange a time. Online booking is through GOrendezvous, under that service's terms. You agree to provide accurate information.",
          })}
        </Block>
        <Block title={t({ fr: "Propriété intellectuelle", en: "Intellectual property" })}>
          {t({
            fr: "Les textes, les photos et le nom Vitalida Physio & Ostéo appartiennent à Alida Farrell. Toute reproduction sans autorisation est interdite.",
            en: "The texts, photographs and the name Vitalida Physio & Ostéo belong to Alida Farrell. Any reproduction without permission is forbidden.",
          })}
        </Block>
        <Block title={t({ fr: "Liens et services tiers", en: "Links and third parties" })}>
          {t({
            fr: "Ce site contient des liens vers GOrendezvous, la Clinique de Santé NDG et d'autres services qui ont leurs propres conditions. Nous ne sommes pas responsables de leur contenu.",
            en: "This site contains links to GOrendezvous, the Clinique de Santé NDG and other services with their own terms. We are not responsible for their content.",
          })}
        </Block>
        <Block title={t({ fr: "Limitation de responsabilité", en: "Limitation of liability" })}>
          {t({
            fr: "Nous faisons de notre mieux pour que ce site soit exact et disponible, sans pouvoir l'assurer en tout temps. Nous ne pouvons être tenus responsables d'un dommage lié à l'utilisation du site ou à une interruption de service.",
            en: "We do our best to keep this site accurate and available, without being able to guarantee it at all times. We cannot be held responsible for damage linked to use of the site or an interruption of service.",
          })}
        </Block>
        <Block title={t({ fr: "Droit applicable", en: "Governing law" })}>
          {t({
            fr: "Les présentes conditions sont régies par les lois du Québec et du Canada.",
            en: "These terms are governed by the laws of Quebec and Canada.",
          })}
        </Block>
        <p>
          Vitalida Physio & Ostéo · Clinique de Santé NDG · {SITE.addressLine} · {SITE.city} ·{" "}
          {SITE.phone} · {SITE.email}
        </p>
      </article>
    </>
  );
}

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="text-2xl text-ink">{title}</h2>
      <p className="mt-3">{children}</p>
    </section>
  );
}
