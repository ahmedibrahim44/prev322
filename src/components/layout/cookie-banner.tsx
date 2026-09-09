import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";

const KEY = "vitalida-cookie";

export function CookieBanner() {
  const { t } = useI18n();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-4">
      <div className="wrap max-w-3xl bg-forest text-cream rounded-[24px] p-5 sm:p-6 shadow-[0_24px_60px_-24px_rgba(13,28,24,0.6)] flex flex-col sm:flex-row sm:items-center gap-4">
        <p className="text-sm text-cream/85 leading-relaxed">
          {t({
            fr: "Ce site n'utilise qu'un seul témoin, pour se souvenir de votre choix ici. Aucun suivi publicitaire.",
            en: "This site uses a single cookie, to remember your choice here. No advertising tracking.",
          })}{" "}
          <Link to="/confidentialite" className="underline underline-offset-4">
            {t({ fr: "Notre politique de confidentialité", en: "Our privacy policy" })}
          </Link>
        </p>
        <Button
          variant="paper"
          className="shrink-0"
          onClick={() => {
            try {
              localStorage.setItem(KEY, "1");
            } catch {
              /* ignore */
            }
            setVisible(false);
          }}
        >
          {t({ fr: "J'ai compris", en: "Understood" })}
        </Button>
      </div>
    </div>
  );
}
