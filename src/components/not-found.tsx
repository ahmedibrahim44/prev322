import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { I18nProvider, useI18n } from "@/lib/i18n";

export function NotFoundPage() {
  return (
    <I18nProvider>
      <NotFoundContent />
    </I18nProvider>
  );
}

function NotFoundContent() {
  const { t } = useI18n();
  return (
    <section className="min-h-[80svh] grid place-items-center px-6 pt-32 pb-20">
      <div className="max-w-lg text-center">
        <p className="eyebrow justify-center">{t({ fr: "Page introuvable", en: "Page not found" })}</p>
        <h1 className="mt-4 text-[clamp(2.4rem,6vw,4rem)]">
          {t({ fr: "Cette adresse n'existe pas.", en: "This address does not exist." })}
        </h1>
        <p className="mt-4 text-ink-soft">
          {t({
            fr: "Le lien est peut-être ancien. Revenez à l'accueil, ou prenez rendez-vous.",
            en: "The link may be outdated. Return home, or book a session.",
          })}
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Button asChild>
            <Link to="/">{t({ fr: "Accueil", en: "Home" })}</Link>
          </Button>
          <Button asChild variant="paper">
            <Link to="/nous-joindre">{t({ fr: "Nous joindre", en: "Contact" })}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
