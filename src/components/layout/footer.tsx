import { Link } from "@tanstack/react-router";
import { Wordmark } from "@/components/brand/leaf-mark";
import { useI18n } from "@/lib/i18n";
import { NAV, SITE } from "@/lib/site";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="bg-forest text-cream pt-16 pb-10">
      <div className="wrap grid gap-12 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Wordmark inverted />
          <p className="mt-5 max-w-sm text-cream/70 text-[0.95rem]">
            {t({
              fr: "Physiothérapie et ostéopathie à Montréal NDG, à la Clinique de Santé NDG. Du nourrisson à l'aîné. Français, anglais, espagnol.",
              en: "Physiotherapy and osteopathy in Montreal NDG, at the Clinique de Santé NDG. From infants to elders. French, English, Spanish.",
            })}
          </p>
          <p className="mt-6 text-cream/80 text-sm leading-relaxed">
            Clinique de Santé NDG
            <br />
            {SITE.addressLine}
            <br />
            {SITE.city}
          </p>
        </div>
        <div>
          <p className="eyebrow text-cream/70 before:bg-cream/50">
            {t({ fr: "Le site", en: "The site" })}
          </p>
          <ul className="mt-4 space-y-2">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-cream/85 hover:text-cream">
                  {t(item.label)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow text-cream/70 before:bg-cream/50">
            {t({ fr: "Nous joindre", en: "Reach us" })}
          </p>
          <ul className="mt-4 space-y-2 text-cream/85">
            <li>
              <a href={SITE.phoneHref}>{SITE.phone}</a>
            </li>
            <li>
              <a href={SITE.emailHref}>{SITE.email}</a>
            </li>
            <li>
              <a href={SITE.booking} target="_blank" rel="noreferrer">
                GOrendezvous
              </a>
            </li>
          </ul>
          <p className="mt-6 text-sm text-cream/60">
            {t({
              fr: "Français · English · Español à la clinique",
              en: "French · English · Spanish at the clinic",
            })}
          </p>
        </div>
      </div>
      <div className="wrap mt-14 pt-6 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between text-sm text-cream/50 border-t border-cream/10">
        <p>© {new Date().getFullYear()} Vitalida Physio & Ostéo</p>
        <p className="flex gap-4">
          <Link to="/confidentialite">
            {t({ fr: "Confidentialité", en: "Privacy" })}
          </Link>
          <Link to="/conditions">
            {t({ fr: "Conditions d'utilisation", en: "Terms of use" })}
          </Link>
        </p>
      </div>
    </footer>
  );
}
