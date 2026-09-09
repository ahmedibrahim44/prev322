import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { InnerHero } from "@/components/inner-hero";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/equipe/")({
  component: TeamIndex,
  head: () => ({ meta: [{ title: "L'équipe · Vitalida Physio & Ostéo" }] }),
});

function TeamIndex() {
  const { t } = useI18n();
  return (
    <>
      <InnerHero
        eyebrow={t({ fr: "Notre équipe", en: "Our team" })}
        title={
          <>
            {t({ fr: "Deux femmes,", en: "Two women," })}{" "}
            <em className="italic-em">
              {t({ fr: "deux approches complémentaires.", en: "two complementary approaches." })}
            </em>
          </>
        }
        lead={t({
          fr: "Dans ce métier, on ne choisit pas un service : on choisit quelqu'un. La structure peut accueillir une page employée, le jour où elle sera confirmée.",
          en: "In this work you do not choose a service: you choose someone. The structure can host an employee page, the day it is confirmed.",
        })}
      />
      <section className="wrap pb-24 grid md:grid-cols-2 gap-6">
        <PersonCard
          to="/equipe/alida-farrell"
          img="/photos/alida-portrait.jpg"
          imgAlt="Alida Farrell"
          role={t({
            fr: "Physiothérapeute · ostéopathe D.O. · coach de vie",
            en: "Physiotherapist · osteopath D.O. · life coach",
          })}
          name="Alida Farrell"
          cta={t({ fr: "Sa page", en: "Her page" })}
        />
        <PersonCard
          to="/equipe/nicole-defoy"
          monogram="ND"
          role={t({
            fr: "Coach de vie · transitions de vie et deuils",
            en: "Life coach · life transitions and grief",
          })}
          name="Nicole Defoy"
          cta={t({ fr: "Sa page", en: "Her page" })}
        />
      </section>
    </>
  );
}

function PersonCard({
  to,
  img,
  imgAlt,
  monogram,
  role,
  name,
  cta,
}: {
  to: "/equipe/alida-farrell" | "/equipe/nicole-defoy";
  img?: string;
  imgAlt?: string;
  monogram?: string;
  role: string;
  name: string;
  cta: string;
}) {
  return (
    <Link to={to} className="group rounded-[32px] bg-cream overflow-hidden shadow-[var(--shadow-card)]">
      {img ? (
        <div className="aspect-[4/5] overflow-hidden">
          <img src={img} alt={imgAlt} className="h-full w-full object-cover object-top group-hover:scale-[1.03] transition-[transform] duration-500" />
        </div>
      ) : (
        <div className="aspect-[4/5] bg-mauve-mist grid place-items-center">
          <span className="font-display text-7xl text-mauve">{monogram}</span>
        </div>
      )}
      <div className="p-7">
        <p className="text-xs tracking-[0.12em] uppercase text-water-deep">{role}</p>
        <h2 className="mt-2 text-3xl">{name}</h2>
        <span className="mt-4 inline-flex items-center gap-2 text-water-deep">
          {cta}
          <ArrowRight className="size-4" />
        </span>
      </div>
    </Link>
  );
}
