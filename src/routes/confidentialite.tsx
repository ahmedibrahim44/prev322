import type { ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { InnerHero } from "@/components/inner-hero";
import { useI18n } from "@/lib/i18n";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/confidentialite")({
  component: PrivacyPage,
  head: () => ({ meta: [{ title: "Politique de confidentialité · Vitalida" }] }),
});

function PrivacyPage() {
  const { t } = useI18n();
  return (
    <>
      <InnerHero
        eyebrow={t({ fr: "Loi 25", en: "Law 25" })}
        title={t({ fr: "Politique de confidentialité", en: "Privacy policy" })}
        lead={t({ fr: "Dernière mise à jour : septembre 2026", en: "Last updated: September 2026" })}
      />
      <article className="wrap pb-24 max-w-[68ch] space-y-8 text-ink-soft">
        <Section title={t({ fr: "Qui nous sommes", en: "Who we are" })}>
          {t({
            fr: `Vitalida Physio & Ostéo est la pratique d'Alida Farrell, physiothérapeute et ostéopathe, au sein de la Clinique de Santé NDG, ${SITE.addressLine}, ${SITE.city}. Nous nous engageons à protéger vos renseignements personnels conformément à la Loi sur la protection des renseignements personnels dans le secteur privé du Québec (Loi 25).`,
            en: `Vitalida Physio & Ostéo is the practice of Alida Farrell, physiotherapist and osteopath, at the Clinique de Santé NDG, ${SITE.addressLine}, ${SITE.city}. We are committed to protecting your personal information under Quebec's private-sector privacy act (Law 25).`,
          })}
        </Section>
        <Section title={t({ fr: "Responsable de la protection des renseignements personnels", en: "Privacy officer" })}>
          Alida Farrell · {SITE.email} · {SITE.phone}.
        </Section>
        <Section title={t({ fr: "Les renseignements que nous recueillons", en: "Information we collect" })}>
          {t({
            fr: "Par le formulaire de ce site : votre nom, votre courriel, votre téléphone si vous le donnez, le motif que vous choisissez et votre message. Rien d'autre n'est recueilli à votre insu. La prise de rendez-vous en ligne se fait sur GOrendezvous, un service distinct qui a sa propre politique.",
            en: "Through this site's form: your name, email, phone if you give it, the reason you choose and your message. Nothing else is collected without your knowledge. Online booking is through GOrendezvous, a separate service with its own policy.",
          })}
        </Section>
        <Section title={t({ fr: "Ce que nous en faisons", en: "What we do with it" })}>
          {t({
            fr: "Vous répondre, fixer un rendez-vous, préparer votre première rencontre. Vos renseignements ne servent à rien d'autre : aucune infolettre sans votre accord, aucune vente ni location de vos données.",
            en: "To reply to you, arrange a session, and prepare for your first meeting. Your information is used for nothing else: no newsletter without your consent, no sale or rental of your data.",
          })}
        </Section>
        <Section title={t({ fr: "Les témoins (cookies)", en: "Cookies" })}>
          {t({
            fr: "Ce site dépose un seul témoin, dans votre navigateur, pour se souvenir que vous avez pris connaissance de cet avis, et un second pour la langue d'affichage. Aucun témoin publicitaire, aucun outil de suivi.",
            en: "This site stores one cookie in your browser to remember that you have read this notice, and a second for display language. No advertising cookies, no tracking tools.",
          })}
        </Section>
        <Section title={t({ fr: "Conservation et sécurité", en: "Retention and security" })}>
          {t({
            fr: "Nous gardons vos messages le temps nécessaire pour vous répondre et assurer votre suivi, puis nous les supprimons de façon sécuritaire. L'accès est limité à Alida Farrell.",
            en: "We keep your messages as long as needed to reply and follow up, then delete them securely. Access is limited to Alida Farrell.",
          })}
        </Section>
        <Section title={t({ fr: "Vos droits", en: "Your rights" })}>
          {t({
            fr: `Vous pouvez demander l'accès à vos renseignements, les faire corriger ou supprimer, et retirer votre consentement à tout moment en écrivant à ${SITE.email}. Nous répondons dans les trente jours.`,
            en: `You may request access to your information, have it corrected or deleted, and withdraw consent at any time by writing to ${SITE.email}. We reply within thirty days.`,
          })}
        </Section>
        <Section title={t({ fr: "Plainte", en: "Complaint" })}>
          {t({
            fr: "Si vous estimez que vos droits ne sont pas respectés, vous pouvez vous adresser à la Commission d'accès à l'information du Québec (cai.gouv.qc.ca).",
            en: "If you believe your rights are not being respected, you may contact the Commission d'accès à l'information du Québec (cai.gouv.qc.ca).",
          })}
        </Section>
      </article>
    </>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="text-2xl text-ink">{title}</h2>
      <p className="mt-3">{children}</p>
    </section>
  );
}
