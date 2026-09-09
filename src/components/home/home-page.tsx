import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { Hours } from "@/components/hours";
import { Button } from "@/components/ui/button";
import { Arc } from "@/components/visual/arc";
import { Photo } from "@/components/visual/photo";
import { SERVICES, MOTIFS } from "@/lib/content";
import { useI18n } from "@/lib/i18n";
import { SITE } from "@/lib/site";

export function HomePage() {
  const { t } = useI18n();

  return (
    <>
      <Hero />
      <TwoDoors />
      <Dual />
      <PurposeBand />
      <ServicesNight />
      <How />
      <Team />
      <Motifs />
      <Sante />
      <Clinic />
      <Join />
    </>
  );
}

function Hero() {
  const { t } = useI18n();
  return (
    <section className="relative min-h-[100svh] bg-forest text-cream overflow-hidden">
      <img
        src="/photos/hero-montagnes.jpg"
        alt={t({
          fr: "Montagnes couvertes de forêt qui s'estompent dans la brume au lever du jour",
          en: "Forested mountains fading into mist at first light",
        })}
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,28,24,0.38)_0%,rgba(13,28,24,0.22)_38%,rgba(13,28,24,0.72)_100%)]" />
      <div className="absolute inset-y-0 left-0 w-[min(28vw,280px)] opacity-80 mix-blend-multiply pointer-events-none">
        <img src="/photos/feuilles.jpg" alt="" className="h-full w-full object-cover object-left" />
      </div>
      <div className="relative wrap pt-32 pb-40 sm:pt-40 sm:pb-48">
        <p className="eyebrow text-cream/80 before:bg-cream reveal">
          {t({
            fr: "Physiothérapie et ostéopathie · Montréal NDG",
            en: "Physiotherapy and osteopathy · Montreal NDG",
          })}
        </p>
        <h1 className="reveal delay-1 mt-6 max-w-[14ch] text-[clamp(3.1rem,8vw,6.4rem)] leading-[0.95] text-cream">
          {t({ fr: "Optimisez", en: "Optimize" })}{" "}
          <em className="italic-em text-water-mist not-italic text-[1.02em]">
            {t({ fr: "votre santé.", en: "your health." })}
          </em>
        </h1>
        <p className="reveal delay-2 mt-7 max-w-[42ch] text-[1.12rem] text-cream/85">
          {t({
            fr: "Physiothérapeute et ostéopathe en une seule personne, Alida Farrell vous reçoit en séance privée d'une heure, à la Clinique de Santé NDG.",
            en: "Physiotherapist and osteopath in one person, Alida Farrell sees you for a private one-hour session at the Clinique de Santé NDG.",
          })}
        </p>
        <div className="reveal delay-3 mt-8 flex flex-wrap gap-3">
          <Button asChild variant="paper" size="lg">
            <a href={SITE.booking} target="_blank" rel="noreferrer">
              {t({ fr: "Prendre rendez-vous", en: "Book a session" })}
            </a>
          </Button>
          <Button asChild variant="ghost" size="lg">
            <a href={SITE.phoneHref}>
              {t({ fr: "Appeler le", en: "Call" })} {SITE.phone}
            </a>
          </Button>
        </div>
        <ul className="reveal delay-4 mt-12 flex flex-wrap gap-x-8 gap-y-2 text-sm tracking-[0.04em] text-cream/75">
          <li>{t({ fr: "Du nourrisson à l'aîné", en: "From infants to elders" })}</li>
          <li>{t({ fr: "Reçus pour vos assurances", en: "Receipts for your insurance" })}</li>
          <li>{t({ fr: "Français, anglais, espagnol", en: "French, English, Spanish" })}</li>
        </ul>
      </div>
      <Arc from="forest" to="paper" className="absolute inset-x-0 bottom-0 h-[min(26vw,200px)]" />
    </section>
  );
}

function TwoDoors() {
  const { t } = useI18n();
  return (
    <section className="relative z-10 -mt-28 sm:-mt-32 pb-8">
      <div className="wrap grid gap-4 md:grid-cols-2">
        <Link
          to="/la-clinique"
          className="group rounded-[32px] bg-cream p-3 shadow-[var(--shadow-card)] transition-[transform] duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1"
        >
          <div className="overflow-hidden rounded-[22px] h-52">
            <img
              src="/photos/clinique-devanture.jpg"
              alt={t({
                fr: "La devanture de la Clinique de Santé NDG, pierre et escaliers dans la verdure",
                en: "The façade of the Clinique de Santé NDG, stone and stairs in greenery",
              })}
              className="h-full w-full object-cover transition-[transform] duration-500 group-hover:scale-[1.03]"
            />
          </div>
          <div className="p-5 sm:p-6">
            <p className="eyebrow">{t({ fr: "La clinique", en: "The clinic" })}</p>
            <h2 className="mt-3 text-[1.7rem] sm:text-3xl">
              {t({
                fr: "Physio et ostéo, en une personne.",
                en: "Physio and osteo, in one person.",
              })}
            </h2>
            <p className="mt-3 text-ink-soft max-w-[42ch]">
              {t({
                fr: "Une heure, une salle privée, à Notre-Dame-de-Grâce. Alida évalue votre condition et la traite avec ses mains.",
                en: "One hour, a private room, in Notre-Dame-de-Grâce. Alida assesses your condition and treats it with her hands.",
              })}
            </p>
            <span className="mt-5 inline-flex items-center gap-2 text-water-deep">
              {t({ fr: "Entrer à la clinique", en: "Enter the clinic" })}
              <ArrowRight className="size-4" />
            </span>
          </div>
        </Link>
        <Link
          to="/coaching"
          className="group rounded-[32px] bg-mauve-deep p-3 shadow-[var(--shadow-card)] transition-[transform] duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1"
        >
          <div className="overflow-hidden rounded-[22px] h-52">
            <img
              src="/photos/soin-inspiree.jpg"
              alt={t({
                fr: "Une personne assise face à un grand paysage au crépuscule",
                en: "A person sitting before a wide dusk landscape",
              })}
              className="h-full w-full object-cover transition-[transform] duration-500 group-hover:scale-[1.03]"
            />
          </div>
          <div className="p-5 sm:p-6 text-cream">
            <p className="eyebrow text-mauve-mist before:bg-mauve-mist">La Vie en Mauve</p>
            <h2 className="mt-3 text-[1.7rem] sm:text-3xl text-cream">
              {t({
                fr: "Le coaching, aussi le sien.",
                en: "Coaching, hers as well.",
              })}
            </h2>
            <p className="mt-3 text-cream/75 max-w-[42ch]">
              {t({
                fr: "Un accompagnement pendant une transition ou un grand défi, le corps et l'esprit ensemble. En clinique, ou à distance.",
                en: "Support during a transition or a great challenge, body and mind together. In clinic, or remotely.",
              })}
            </p>
            <span className="mt-5 inline-flex items-center gap-2 text-mauve-mist">
              {t({ fr: "Découvrir le coaching", en: "Discover coaching" })}
              <ArrowRight className="size-4" />
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}

function Dual() {
  const { t } = useI18n();
  const facts = [
    {
      k: { fr: "Deux formations", en: "Two trainings" },
      v: {
        fr: "Alida Farrell est physiothérapeute, membre de l'Ordre professionnel de la physiothérapie du Québec, et ostéopathe diplômée du Centre Ostéopathique du Québec. Elle évalue votre condition et la traite avec ses mains.",
        en: "Alida Farrell is a physiotherapist, a member of Quebec's professional order of physiotherapy, and an osteopath trained at the Centre Ostéopathique du Québec. She assesses your condition and treats it with her hands.",
      },
    },
    {
      k: { fr: "Pourquoi choisir Vitalida", en: "Why Vitalida" },
      v: {
        fr: "Notre raison d'être est d'aller à la racine de votre mal, pas seulement au symptôme. Nous refusons l'approche à la chaîne : une heure, une salle privée, une seule thérapeute.",
        en: "Our reason for being is to go to the root of your discomfort, not only the symptom. We refuse the assembly-line approach: one hour, a private room, a single therapist.",
      },
    },
    {
      k: { fr: "Pour qui", en: "For whom" },
      v: {
        fr: "Une approche douce, du nourrisson à l'aîné. Vous pouvez recevoir vos soins en français, en anglais ou en espagnol.",
        en: "A gentle approach, from infants to elders. You may receive care in French, English or Spanish.",
      },
    },
    {
      k: { fr: "Où", en: "Where" },
      v: {
        fr: "Au sein de la Clinique de Santé NDG, 3792 boul. Décarie, à deux pas du métro Villa-Maria. En autobus 24 ou 105, ou en auto par la 15 et la 720.",
        en: "At the Clinique de Santé NDG, 3792 Décarie Blvd, steps from Villa-Maria metro. Bus 24 or 105, or by car via highways 15 and 720.",
      },
    },
  ];
  return (
    <section className="bg-paper pt-20 pb-8">
      <div className="wrap grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-start">
        <div>
          <p className="eyebrow">{t({ fr: "Notre mission : votre bien-être", en: "Our mission: your well-being" })}</p>
          <h2 className="chap-title mt-4">
            {t({ fr: "Le meilleur de deux professions,", en: "The best of two professions," })}{" "}
            <em className="italic-em">{t({ fr: "en une seule personne.", en: "in one person." })}</em>
          </h2>
          <Button asChild variant="link" className="mt-8">
            <Link to="/equipe/alida-farrell">
              {t({ fr: "L'équipe, une page par personne", en: "The team, one page each" })}
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
          {facts.map((f) => (
            <div key={f.k.fr}>
              <h3 className="font-sans text-[0.95rem] font-medium text-ink">{t(f.k)}</h3>
              <p className="mt-2 text-ink-soft text-[0.98rem]">{t(f.v)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PurposeBand() {
  const { t } = useI18n();
  return (
    <section className="relative mt-10">
      <div className="relative min-h-[52vh] overflow-hidden">
        <img
          src="/photos/mer-crepuscule.jpg"
          alt={t({
            fr: "La mer au crépuscule, des palmiers en silhouette et une île au loin",
            en: "The sea at dusk, palmiers in silhouette and an island in the distance",
          })}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-forest/45" />
        <div className="relative wrap py-24 sm:py-32">
          <p className="font-display italic text-cream text-[clamp(1.8rem,4vw,3rem)] max-w-[16ch] leading-[1.12]">
            {t({ fr: "Le corps et l'esprit, en équilibre.", en: "Body and mind, in balance." })}
          </p>
        </div>
      </div>
      <div className="bg-water-mist">
        <ul className="wrap grid sm:grid-cols-2 lg:grid-cols-4 gap-8 py-10">
          {[
            { k: { fr: "Physiothérapeute à Montréal", en: "Physiotherapist in Montreal" }, v: { fr: "depuis 2000", en: "since 2000" } },
            { k: { fr: "Physiothérapie", en: "Physiotherapy" }, v: { fr: "Université McGill, 2000", en: "McGill University, 2000" } },
            { k: { fr: "Ostéopathie", en: "Osteopathy" }, v: { fr: "Centre Ostéopathique du Québec, D.O. en 2013", en: "Centre Ostéopathique du Québec, D.O. in 2013" } },
            { k: { fr: "Coaching de vie", en: "Life coaching" }, v: { fr: "Heroic, 2025 · OPPQ et Ostéopathie Québec", en: "Heroic, 2025 · OPPQ and Ostéopathie Québec" } },
          ].map((item) => (
            <li key={item.k.fr}>
              <p className="text-xs tracking-[0.14em] uppercase text-water-deep">{t(item.k)}</p>
              <p className="mt-2 font-display text-xl tracking-[-0.03em]">{t(item.v)}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ServicesNight() {
  const { t } = useI18n();
  return (
    <section id="services" className="bg-forest text-cream">
      <Arc from="paper" to="forest" />
      <div className="wrap py-8 sm:py-12">
        <p className="eyebrow text-water-mist before:bg-water">{t({ fr: "Services", en: "Services" })}</p>
        <h2 className="chap-title mt-4 max-w-[18ch] text-cream">
          {t({ fr: "Cinq façons de prendre soin de vous,", en: "Five ways to care for you," })}{" "}
          <em className="italic-em text-water-mist">{t({ fr: "en une heure.", en: "in one hour." })}</em>
        </h2>
        <p className="mt-5 max-w-[52ch] text-cream/75">
          {t({
            fr: "Des séances individuelles et privées, à la Clinique de Santé NDG. Nous recevons la clientèle privée et la SAAQ.",
            en: "Individual, private sessions at the Clinique de Santé NDG. We see private clients and SAAQ files.",
          })}
        </p>
        <div className="mt-10 flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory lg:grid lg:grid-cols-5 lg:overflow-visible lg:pb-0">
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="snap-start min-w-[78%] sm:min-w-[46%] lg:min-w-0 group rounded-[32px] bg-moss p-2.5"
            >
              <div className="overflow-hidden rounded-[22px] aspect-[4/5]">
                <img
                  src={s.photo}
                  alt=""
                  className={`h-full w-full object-cover ${s.photoPos} transition-[transform] duration-500 group-hover:scale-[1.04]`}
                />
              </div>
              <div className="p-4">
                <p className="text-[0.72rem] tracking-[0.16em] text-water-mist">{s.num}</p>
                <h3 className="mt-2 text-[1.05rem] leading-snug text-cream font-display tracking-[-0.02em]">
                  {t(s.title)}
                </h3>
                <p className="mt-2 text-sm text-cream/70 line-clamp-3">{t(s.lead)}</p>
              </div>
            </Link>
          ))}
        </div>
        <p className="mt-6 text-sm text-cream/55">
          {t({
            fr: "Notre clinique n'est pas adaptée aux dossiers de la CSST.",
            en: "Our clinic is not set up for CSST files.",
          })}
        </p>
        <Link
          to="/coaching"
          className="mt-10 flex flex-col sm:flex-row sm:items-center gap-6 rounded-[32px] bg-mauve-deep p-6 sm:p-8"
        >
          <div className="sm:flex-1">
            <p className="eyebrow text-mauve-mist before:bg-mauve-mist">La Vie en Mauve</p>
            <h3 className="mt-3 text-2xl sm:text-3xl text-cream">
              {t({
                fr: "Et le coaching, qui n'est plus un service parmi d'autres.",
                en: "And coaching, no longer one service among others.",
              })}
            </h3>
            <p className="mt-3 text-cream/75 max-w-[50ch]">
              {t({
                fr: "Alida construit sa propre clientèle de coaching, en clinique et en ligne. Nicole accompagne les grands passages.",
                en: "Alida is building her own coaching practice, in clinic and online. Nicole accompanies the great passages of life.",
              })}
            </p>
          </div>
          <span className="inline-flex items-center gap-2 text-mauve-mist">
            {t({ fr: "La page coaching", en: "The coaching page" })}
            <ArrowUpRight className="size-4" />
          </span>
        </Link>
      </div>
    </section>
  );
}

function How() {
  const { t } = useI18n();
  const steps = [
    {
      n: "01",
      photo: "/photos/clinique-devanture.jpg",
      alt: { fr: "La devanture de la Clinique de Santé NDG", en: "The façade of the Clinique de Santé NDG" },
      title: { fr: "Vous arrivez.", en: "You arrive." },
      body: {
        fr: "À la Clinique de Santé NDG, au 3792 boulevard Décarie. À pied depuis le métro Villa-Maria ou Vendôme, par l'autobus 24 ou 105, ou en auto par la 15 et la 720. Une atmosphère de calme, de confort et de confidentialité.",
        en: "At the Clinique de Santé NDG, 3792 Décarie Boulevard. On foot from Villa-Maria or Vendôme metro, by bus 24 or 105, or by car via highways 15 and 720. An atmosphere of calm, comfort and confidentiality.",
      },
    },
    {
      n: "02",
      photo: "/photos/clinique-salle.jpg",
      alt: { fr: "Une personne allongée sur la table de traitement, la porte ouverte sur le jardin", en: "Someone lying on the treatment table, the door open to the garden" },
      title: { fr: "On évalue, puis on traite.", en: "We assess, then we treat." },
      body: {
        fr: "D'abord un questionnaire détaillé sur vos antécédents : on cherche la cause, pas seulement le symptôme. Puis beaucoup de techniques manuelles plutôt que des machines, donc votre thérapeute reste avec vous tout le temps de la séance.",
        en: "First a detailed questionnaire on your history: we look for the cause, not only the symptom. Then many manual techniques rather than machines, so your therapist stays with you for the whole session.",
      },
    },
    {
      n: "03",
      photo: "/photos/clinique-jardin.jpg",
      alt: { fr: "Le jardin arrière de la clinique", en: "The clinic's back garden" },
      title: { fr: "Le mouvement continue chez vous.", en: "Movement continues at home." },
      body: {
        fr: "Des exercices prescrits et enseignés pour compléter le travail, parfois de la rééducation posturale de type Mézières ou McKenzie. Et quand il le faut, nous collaborons avec d'autres professionnels de la Clinique de Santé NDG.",
        en: "Prescribed and taught exercises to complete the work, sometimes Mézières or McKenzie postural re-education. And when needed, we collaborate with other professionals at the Clinique de Santé NDG.",
      },
    },
  ];
  return (
    <section className="bg-paper">
      <Arc from="forest" to="paper" />
      <div className="wrap py-8 sm:py-16">
        <p className="eyebrow">{t({ fr: "Comment ça se passe", en: "How a session unfolds" })}</p>
        <h2 className="chap-title mt-4 max-w-[18ch]">
          {t({ fr: "Une heure, une salle privée,", en: "One hour, a private room," })}{" "}
          <em className="italic-em">{t({ fr: "et quelqu'un qui reste avec vous.", en: "and someone who stays with you." })}</em>
        </h2>
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {steps.map((s) => (
            <article key={s.n}>
              <Photo src={s.photo} alt={t(s.alt)} className="aspect-[4/3]" />
              <p className="mt-5 text-xs tracking-[0.16em] text-water-deep">{s.n}</p>
              <h3 className="mt-2 text-2xl">{t(s.title)}</h3>
              <p className="mt-3 text-ink-soft">{t(s.body)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Team() {
  const { t } = useI18n();
  return (
    <section className="bg-paper-2 py-20">
      <div className="wrap">
        <p className="eyebrow">{t({ fr: "Notre équipe", en: "Our team" })}</p>
        <h2 className="chap-title mt-4 max-w-[16ch]">
          {t({ fr: "Deux femmes,", en: "Two women," })}{" "}
          <em className="italic-em">{t({ fr: "deux approches complémentaires.", en: "two complementary approaches." })}</em>
        </h2>
        <p className="mt-5 max-w-[54ch] text-ink-soft">
          {t({
            fr: "Vous ne savez pas si vous devriez voir un physiothérapeute ou un ostéopathe? Avec Alida, vous n'avez pas à choisir. Et pour les grands passages de la vie, Nicole est là.",
            en: "Unsure whether you should see a physiotherapist or an osteopath? With Alida, you do not have to choose. And for the great passages of life, Nicole is there.",
          })}
        </p>
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <Link
            to="/equipe/alida-farrell"
            className="group rounded-[32px] bg-cream overflow-hidden shadow-[var(--shadow-card)]"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="/photos/alida-portrait.jpg"
                alt="Alida Farrell"
                className="h-full w-full object-cover object-top transition-[transform] duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="p-6 sm:p-8">
              <p className="text-xs tracking-[0.12em] uppercase text-water-deep">
                {t({
                  fr: "Physiothérapeute · ostéopathe D.O. · coach de vie",
                  en: "Physiotherapist · osteopath D.O. · life coach",
                })}
              </p>
              <h3 className="mt-2 text-3xl">Alida Farrell</h3>
              <p className="mt-3 text-ink-soft">
                {t({
                  fr: "Physiothérapeute depuis 2000 et ostéopathe depuis 2013, elle réunit les deux approches dans une même séance : évaluer, traiter, puis vous enseigner les exercices qui sont les vôtres. En français, en anglais ou en espagnol.",
                  en: "A physiotherapist since 2000 and an osteopath since 2013, she brings both approaches into a single session: assess, treat, then teach you the exercises that are yours. In French, English or Spanish.",
                })}
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-water-deep">
                {t({ fr: "Sa page", en: "Her page" })}
                <ArrowRight className="size-4" />
              </span>
            </div>
          </Link>
          <Link
            to="/equipe/nicole-defoy"
            className="group rounded-[32px] bg-cream overflow-hidden shadow-[var(--shadow-card)]"
          >
            <div className="aspect-[4/5] bg-mauve-mist grid place-items-center">
              <div className="text-center">
                <span className="font-display text-7xl text-mauve tracking-[-0.04em]">ND</span>
                <p className="mt-3 text-sm text-mauve/80 max-w-[20ch] mx-auto">
                  {t({
                    fr: "Portrait à venir — un vrai photographie remplacera ce monogramme.",
                    en: "Portrait to come — a real photograph will replace this monogram.",
                  })}
                </p>
              </div>
            </div>
            <div className="p-6 sm:p-8">
              <p className="text-xs tracking-[0.12em] uppercase text-mauve">
                {t({
                  fr: "Coach de vie · transitions de vie et deuils",
                  en: "Life coach · life transitions and grief",
                })}
              </p>
              <h3 className="mt-2 text-3xl">Nicole Defoy</h3>
              <p className="mt-3 text-ink-soft">
                {t({
                  fr: "Diplômée en coaching professionnel de l'École de Formation Syma en 2025, elle accompagne les grands passages : retraite, changement professionnel, deuil, déménagement, proche aidance. Une approche humaniste, en complément des soins de la clinique.",
                  en: "Graduated in professional coaching from École de Formation Syma in 2025, she accompanies the great passages: retirement, career change, grief, moving, caregiving. A humanist approach, complementary to the clinic's care.",
                })}
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-mauve">
                {t({ fr: "Sa page", en: "Her page" })}
                <ArrowRight className="size-4" />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

function Motifs() {
  const { t } = useI18n();
  return (
    <section className="bg-paper py-20">
      <div className="wrap grid lg:grid-cols-[0.9fr_1.1fr] gap-12">
        <div>
          <p className="eyebrow">{t({ fr: "Pourquoi consulter", en: "Reasons to come" })}</p>
          <h2 className="chap-title mt-4">
            {t({ fr: "Ce qui amène quelqu'un", en: "What brings someone" })}{" "}
            <em className="italic-em">{t({ fr: "à pousser la porte.", en: "to walk through the door." })}</em>
          </h2>
          <p className="mt-5 text-ink-soft max-w-[46ch]">
            {t({
              fr: "La liste est longue. Voici ce que nous entendons le plus souvent, et ce que la physiothérapie et l'ostéopathie peuvent regarder ensemble.",
              en: "The list is long. Here is what we hear most often, and what physiotherapy and osteopathy can look at together.",
            })}
          </p>
          <Button asChild variant="link" className="mt-6">
            <Link to="/pourquoi-consulter">
              {t({ fr: "Toutes les pages Pourquoi consulter", en: "All Reasons to come pages" })}
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
        <ul className="divide-y divide-line">
          {MOTIFS.map((m) => (
            <li key={m.fr} className="py-3.5 font-display text-xl sm:text-2xl tracking-[-0.03em]">
              {t(m)}
            </li>
          ))}
        </ul>
      </div>
      <p className="wrap mt-10 text-ink-soft max-w-[62ch]">
        {t({
          fr: "À tout âge, les traitements sont aussi utiles à titre préventif : réduire les tensions avant qu'elles ne causent de douleurs.",
          en: "At any age, treatments are also useful preventively: easing tensions before they cause pain.",
        })}
      </p>
    </section>
  );
}

function Sante() {
  const { t } = useI18n();
  return (
    <section className="relative">
      <div className="grid lg:grid-cols-2">
        <div className="bg-forest text-cream px-[max(1.5rem,calc((100vw-1180px)/2+1.5rem))] py-20 lg:py-28">
          <p className="eyebrow text-water-mist before:bg-water">
            {t({ fr: "Une santé qui se cultive", en: "A health that is cultivated" })}
          </p>
          <h2 className="chap-title mt-4 max-w-[14ch] text-cream">
            {t({ fr: "Le corps, l'esprit,", en: "The body, the mind," })}{" "}
            <em className="italic-em text-water-mist">{t({ fr: "et ce qu'on met autour.", en: "and what we place around them." })}</em>
          </h2>
          <blockquote className="mt-10 max-w-[46ch]">
            <p className="font-display italic text-[1.25rem] leading-snug text-cream/90">
              «{" "}
              {t({
                fr: "Depuis quelques années, j'étudie la longévité et je réfléchis beaucoup aux composantes de la santé globale. En particulier à la relation entre le corps et l'esprit, à l'importance de la connexion avec la Nature et de nos relations avec la nourriture, le mouvement, le repos et les relations humaines.",
                en: "For some years now I have been studying longevity and thinking a great deal about the components of whole health. In particular the relation between body and mind, the importance of connection with Nature, and our relations with food, movement, rest and human relationships.",
              })}{" "}
              »
            </p>
            <footer className="mt-5 text-sm text-cream/60">
              Alida Farrell, {t({ fr: "physiothérapeute et ostéopathe", en: "physiotherapist and osteopath" })}
            </footer>
          </blockquote>
          <p className="mt-8 max-w-[46ch] text-cream/75">
            {t({
              fr: "C'est dans cet esprit que le coaching de vie s'est ajouté à la clinique : un accompagnement personnalisé pendant une période de transition ou de grand défi, qui combine le corps et l'esprit.",
              en: "It is in this spirit that life coaching was added to the clinic: personal accompaniment during a period of transition or great challenge, combining body and mind.",
            })}
          </p>
          <Button asChild variant="ghost" className="mt-8">
            <Link to="/coaching">
              {t({ fr: "La page du coaching de vie", en: "The life coaching page" })}
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
        <figure className="relative min-h-[420px]">
          <img
            src="/photos/alida-jardin.jpg"
            alt={t({
              fr: "Alida Farrell dans son jardin, un panier de tomates et de haricots dans les bras",
              en: "Alida Farrell in her garden, a basket of tomatoes and beans in her arms",
            })}
            className="absolute inset-0 h-full w-full object-cover object-top"
          />
          <figcaption className="absolute bottom-5 left-5 right-5 text-cream text-sm">
            {t({ fr: "Alida, dans son jardin.", en: "Alida, in her garden." })}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

function Clinic() {
  const { t } = useI18n();
  return (
    <section className="bg-paper py-20">
      <div className="wrap">
        <p className="eyebrow">{t({ fr: "La Clinique de Santé NDG", en: "Clinique de Santé NDG" })}</p>
        <h2 className="chap-title mt-4 max-w-[16ch]">
          {t({ fr: "Une clinique de quartier,", en: "A neighbourhood clinic," })}{" "}
          <em className="italic-em">{t({ fr: "à deux pas du métro.", en: "steps from the metro." })}</em>
        </h2>
        <p className="mt-5 max-w-[54ch] text-ink-soft">
          {t({
            fr: "Vitalida Physio & Ostéo se trouve au sein de la Clinique de Santé NDG, dans Notre-Dame-de-Grâce, en bordure de Westmount.",
            en: "Vitalida Physio & Ostéo is at the Clinique de Santé NDG, in Notre-Dame-de-Grâce, on the edge of Westmount.",
          })}
        </p>
        <div className="mt-12 grid lg:grid-cols-[0.9fr_1.1fr] gap-10">
          <div className="rounded-[32px] bg-cream p-7 shadow-[var(--shadow-card)]">
            <dl className="space-y-3 text-sm">
              <Row k={t({ fr: "Adresse", en: "Address" })} v={`${SITE.addressLine}, ${SITE.city}`} />
              <Row k={t({ fr: "Métro", en: "Metro" })} v="Villa-Maria ou Vendôme" />
              <Row k={t({ fr: "Autobus", en: "Bus" })} v="24 et 105" />
              <Row k={t({ fr: "En auto", en: "By car" })} v={t({ fr: "Autoroutes 15 et 720", en: "Highways 15 and 720" })} />
              <Row k={t({ fr: "Langues", en: "Languages" })} v={t({ fr: "Français, anglais, espagnol", en: "French, English, Spanish" })} />
              <Row k={t({ fr: "Clientèle", en: "Clients" })} v={t({ fr: "Privée et SAAQ, pas de dossiers CSST", en: "Private and SAAQ, no CSST files" })} />
              <Row k={t({ fr: "Reçus", en: "Receipts" })} v={t({ fr: "Pour vos assurances", en: "For your insurance" })} />
            </dl>
            <div className="mt-8">
              <p className="text-xs tracking-[0.14em] uppercase text-water-deep mb-2">
                {t({ fr: "Heures d'ouverture", en: "Opening hours" })}
              </p>
              <Hours />
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <Link to="/la-clinique">{t({ fr: "La page de la clinique", en: "The clinic page" })}</Link>
              </Button>
              <Button asChild variant="paper">
                <a href={SITE.clinicUrl} target="_blank" rel="noreferrer">
                  {t({ fr: "Le site de la Clinique de Santé NDG", en: "Clinique de Santé NDG website" })}
                </a>
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Photo
              src="/photos/clinique-bureau.jpg"
              alt={t({
                fr: "Le bureau d'Alida, mur turquoise, table de bois, diplômes encadrés et la table de traitement",
                en: "Alida's office, turquoise wall, wooden table, framed diplomas and the treatment table",
              })}
              className="col-span-2 aspect-[16/9]"
            />
            <Photo
              src="/photos/clinique-salle-2.jpg"
              alt={t({
                fr: "Une salle de traitement claire, la table, une toile au mur et la porte vitrée sur la verdure",
                en: "A bright treatment room, the table, a painting on the wall and a glass door onto greenery",
              })}
              className="aspect-[4/5]"
            />
            <Photo src="/photos/aigrette.jpg" alt={t({ fr: "Une aigrette parmi les feuilles", en: "An egret among the leaves" })} className="aspect-[4/5]" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="grid grid-cols-[7.5rem_1fr] gap-3">
      <dt className="text-ink-faint">{k}</dt>
      <dd>{v}</dd>
    </div>
  );
}

function Join() {
  const { t } = useI18n();
  return (
    <section id="joindre" className="bg-forest text-cream">
      <Arc from="paper" to="forest" />
      <div className="wrap py-12 sm:py-16 grid lg:grid-cols-2 gap-12 lg:gap-20 pb-24">
        <div>
          <p className="eyebrow text-water-mist before:bg-water">
            {t({ fr: "Prendre rendez-vous", en: "Book a session" })}
          </p>
          <h2 className="chap-title mt-4 text-cream">
            {t({ fr: "Optimisez votre santé.", en: "Optimize your health." })}{" "}
            <em className="italic-em text-water-mist">{t({ fr: "Prenez rendez-vous.", en: "Book a session." })}</em>
          </h2>
          <p className="mt-5 text-cream/75 max-w-[46ch]">
            {t({
              fr: "En ligne sur GOrendezvous, par téléphone au 514 805-3516, ou par ce formulaire. Nous recevons en français, en anglais et en espagnol.",
              en: "Online on GOrendezvous, by phone at 514 805-3516, or through this form. We receive you in French, English and Spanish.",
            })}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="paper" size="lg">
              <a href={SITE.booking} target="_blank" rel="noreferrer">
                {t({ fr: "Réserver en ligne", en: "Book online" })}
              </a>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <a href={SITE.phoneHref}>
                {t({ fr: "Appeler le", en: "Call" })} {SITE.phone}
              </a>
            </Button>
          </div>
          <p className="mt-10 text-sm text-cream/60 max-w-[42ch] leading-relaxed">
            {t({ fr: "Où", en: "Where" })}
            <br />
            Clinique de Santé NDG · {SITE.addressLine} · {SITE.city}
            <br />
            {t({
              fr: "Métro Villa-Maria ou Vendôme · autobus 24 et 105 · autoroutes 15 et 720",
              en: "Villa-Maria or Vendôme metro · bus 24 and 105 · highways 15 and 720",
            })}
          </p>
          <p className="mt-4">
            <a href={SITE.emailHref} className="text-water-mist">
              {SITE.email}
            </a>
          </p>
        </div>
        <div className="rounded-[32px] bg-cream p-6 sm:p-8 text-ink">
          <h3 className="text-2xl">{t({ fr: "Écrivez-nous", en: "Write to us" })}</h3>
          <p className="mt-2 text-ink-soft mb-6">
            {t({
              fr: "Seuls votre nom et votre courriel sont requis. Nous vous répondons nous-mêmes.",
              en: "Only your name and email are required. We reply ourselves.",
            })}
          </p>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
