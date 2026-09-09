import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Wordmark } from "@/components/brand/leaf-mark";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { NAV, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const { t, lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const overHero = pathname === "/" && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-[background-color,box-shadow,color] duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
        overHero
          ? "bg-transparent"
          : "bg-paper/92 shadow-[0_1px_0_rgba(19,36,30,0.08)] backdrop-blur-md",
      )}
    >
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-forest focus:text-cream focus:px-4 focus:py-2 focus:rounded-md"
      >
        {t({ fr: "Aller au contenu", en: "Skip to content" })}
      </a>
      <div className="wrap flex items-center justify-between gap-4 h-[4.5rem]">
        <Link to="/" onClick={() => setOpen(false)} className="shrink-0">
          <Wordmark inverted={overHero} />
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Principal">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "px-3 py-2 text-[0.92rem] rounded-full transition-[color,background-color] duration-150",
                overHero
                  ? "text-cream/80 hover:text-cream hover:bg-cream/10"
                  : "text-ink-soft hover:text-ink hover:bg-paper-2",
                item.accent === "mauve" && !overHero && "text-mauve",
              )}
            >
              {t(item.label)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div
            className={cn(
              "hidden sm:flex items-center text-xs tracking-[0.12em] uppercase",
              overHero ? "text-cream/70" : "text-ink-soft",
            )}
          >
            <button
              type="button"
              onClick={() => setLang("fr")}
              className={cn(
                "px-2 py-1 rounded-full min-h-10",
                lang === "fr" && (overHero ? "text-cream" : "text-ink"),
              )}
              aria-pressed={lang === "fr"}
            >
              FR
            </button>
            <span aria-hidden="true">·</span>
            <button
              type="button"
              onClick={() => setLang("en")}
              className={cn(
                "px-2 py-1 rounded-full min-h-10",
                lang === "en" && (overHero ? "text-cream" : "text-ink"),
              )}
              aria-pressed={lang === "en"}
            >
              EN
            </button>
          </div>
          <Button
            asChild
            variant={overHero ? "ghost" : "primary"}
            size="sm"
            className="hidden md:inline-flex"
          >
            <a href={SITE.booking} target="_blank" rel="noreferrer">
              {t({ fr: "Prendre rendez-vous", en: "Book a session" })}
            </a>
          </Button>
          <button
            type="button"
            className={cn(
              "lg:hidden size-11 grid place-items-center rounded-full",
              overHero ? "text-cream" : "text-ink",
            )}
            aria-expanded={open}
            aria-controls="menu-mobile"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X strokeWidth={1.6} /> : <Menu strokeWidth={1.6} />}
            <span className="sr-only">
              {open
                ? t({ fr: "Fermer le menu", en: "Close menu" })
                : t({ fr: "Ouvrir le menu", en: "Open menu" })}
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="menu-mobile"
          className="lg:hidden bg-paper border-t border-line min-h-[calc(100dvh-4.5rem)]"
        >
          <nav className="wrap py-6 flex flex-col gap-1" aria-label="Mobile">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={cn(
                  "py-3 text-2xl font-display tracking-[-0.03em]",
                  item.accent === "mauve" ? "text-mauve" : "text-ink",
                )}
              >
                {t(item.label)}
              </Link>
            ))}
            <div className="flex gap-2 pt-4">
              <button
                type="button"
                onClick={() => setLang("fr")}
                className={cn(
                  "min-h-11 px-4 rounded-full",
                  lang === "fr" ? "bg-forest text-cream" : "bg-paper-2 text-ink",
                )}
              >
                Français
              </button>
              <button
                type="button"
                onClick={() => setLang("en")}
                className={cn(
                  "min-h-11 px-4 rounded-full",
                  lang === "en" ? "bg-forest text-cream" : "bg-paper-2 text-ink",
                )}
              >
                English
              </button>
            </div>
            <Button asChild className="mt-6 w-full" size="lg">
              <a href={SITE.booking} target="_blank" rel="noreferrer">
                {t({ fr: "Prendre rendez-vous", en: "Book a session" })}
              </a>
            </Button>
            <a href={SITE.phoneHref} className="mt-3 text-center text-ink-soft py-3">
              {SITE.phone}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
