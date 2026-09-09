export const SITE = {
  name: "Vitalida Physio & Ostéo",
  short: "Vitalida",
  phone: "514 805-3516",
  phoneHref: "tel:+15148053516",
  email: "vitalidaphysioosteo@gmail.com",
  emailHref: "mailto:vitalidaphysioosteo@gmail.com",
  booking: "https://www.gorendezvous.com/alidafarrell",
  clinicUrl: "https://www.cliniquesantendg.com/",
  addressLine: "3792 boul. Décarie, bureau 8",
  city: "Montréal (Québec) H4A 3J7",
  maps: "https://www.google.com/maps/search/?api=1&query=3792+boulevard+D%C3%A9carie+bureau+8+Montr%C3%A9al",
  hours: [
    { day: { fr: "Lundi", en: "Monday" }, time: { fr: "8 h 30 à 20 h", en: "8:30 a.m. – 8:00 p.m." }, js: 1 },
    { day: { fr: "Mardi", en: "Tuesday" }, time: { fr: "11 h à 19 h", en: "11:00 a.m. – 7:00 p.m." }, js: 2 },
    { day: { fr: "Mercredi", en: "Wednesday" }, time: { fr: "8 h 30 à 20 h", en: "8:30 a.m. – 8:00 p.m." }, js: 3 },
    { day: { fr: "Jeudi", en: "Thursday" }, time: { fr: "8 h à 16 h", en: "8:00 a.m. – 4:00 p.m." }, js: 4 },
    { day: { fr: "Vendredi", en: "Friday" }, time: { fr: "8 h 30 à 15 h 30", en: "8:30 a.m. – 3:30 p.m." }, js: 5 },
    { day: { fr: "Samedi", en: "Saturday" }, time: { fr: "Fermé", en: "Closed" }, js: 6 },
    { day: { fr: "Dimanche", en: "Sunday" }, time: { fr: "Fermé", en: "Closed" }, js: 0 },
  ],
} as const;

export const NAV = [
  { to: "/la-clinique", label: { fr: "La clinique", en: "The clinic" } },
  { to: "/services", label: { fr: "Services", en: "Services" } },
  { to: "/coaching", label: { fr: "La Vie en Mauve", en: "La Vie en Mauve" }, accent: "mauve" as const },
  { to: "/equipe", label: { fr: "L'équipe", en: "The team" } },
  { to: "/pourquoi-consulter", label: { fr: "Pourquoi consulter", en: "Reasons to come" } },
  { to: "/nous-joindre", label: { fr: "Nous joindre", en: "Contact" } },
];
