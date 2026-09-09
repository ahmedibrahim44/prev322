export const SERVICES = [
  {
    slug: "physiotherapie",
    num: "01",
    photo: "/photos/soin-physio.jpg",
    photoPos: "object-[center_20%]",
    title: {
      fr: "Physiothérapie avec approche ostéo",
      en: "Physiotherapy with an osteopathic approach",
    },
    lead: {
      fr: "Une heure en salle privée : évaluation, traitement manuel, exercices prescrits et enseignés.",
      en: "One hour in a private room: assessment, manual treatment, prescribed and taught exercises.",
    },
    body: {
      fr: "Chez Vitalida, nous choisissons d'utiliser beaucoup de techniques manuelles plutôt que des machines, ce qui veut dire que votre thérapeute reste avec vous tout le temps de la séance. Une approche ostéopathique est souvent retenue, parfois avec une rééducation posturale de type Mézières ou des techniques de McKenzie.",
      en: "At Vitalida we choose to use many manual techniques rather than machines, which means your therapist stays with you for the whole session. An osteopathic approach is often used, sometimes with Mézières-type postural re-education or McKenzie techniques.",
    },
  },
  {
    slug: "osteopathie",
    num: "02",
    photo: "/photos/soin-osteo.jpg",
    photoPos: "object-center",
    title: { fr: "Ostéopathie", en: "Osteopathy" },
    lead: {
      fr: "Une heure, en douceur, de la naissance jusqu'à l'âge d'or.",
      en: "One hour, gently, from birth through later life.",
    },
    body: {
      fr: "Séance personnalisée et privée d'une heure avec une ostéopathe d'expérience, membre d'Ostéopathie Québec et aussi physiothérapeute. Une approche douce, du nourrisson à l'aîné.",
      en: "A private, personal one-hour session with an experienced osteopath, a member of Ostéopathie Québec who is also a physiotherapist. A gentle approach, from infants to elders.",
    },
  },
  {
    slug: "discussion-inspiree",
    num: "03",
    photo: "/photos/soin-inspiree.jpg",
    photoPos: "object-center",
    title: {
      fr: "Physio et ostéo, avec discussion inspirée",
      en: "Physio and osteo, with inspired conversation",
    },
    lead: {
      fr: "Le traitement manuel, et le temps de parler de ce qui pèse. Une heure où le corps et la tête avancent ensemble.",
      en: "Manual treatment, and time to speak about what weighs on you. An hour where body and mind move together.",
    },
    body: {
      fr: "C'est l'un des services favoris d'Alida. La séance réunit le travail des mains et une conversation attentive : ce qui se passe dans le corps, et ce qui l'accompagne. Le titre vient de son ancienne pratique ; le texte ci-dessus est une proposition, à confirmer avec elle.",
      en: "This is one of Alida's favourite services. The session brings together hands-on work and an attentive conversation: what is happening in the body, and what comes with it.",
    },
  },
  {
    slug: "pediatrique",
    num: "04",
    photo: "/photos/soin-bebe.jpg",
    photoPos: "object-center",
    title: { fr: "Soin pédiatrique", en: "Paediatric care" },
    lead: {
      fr: "Évaluation et traitement pour votre bébé ou votre enfant, 50 à 60 minutes.",
      en: "Assessment and treatment for your baby or child, 50 to 60 minutes.",
    },
    body: {
      fr: "Une séance douce, adaptée à l'âge. Parmi les motifs les plus fréquents : tête plate, torticolis, régurgitations, coliques. Alida reçoit aussi les enfants plus grands.",
      en: "A gentle session, adapted to age. Among the most frequent reasons: flat head, torticollis, regurgitation, colic. Alida also sees older children.",
    },
  },
  {
    slug: "therapie-par-le-mouvement",
    num: "05",
    photo: "/photos/soin-mouvement.jpg",
    photoPos: "object-center",
    title: { fr: "Thérapie par le mouvement", en: "Movement therapy" },
    lead: {
      fr: "Physio, ostéo et yoga : le corps qui réapprend à bouger.",
      en: "Physio, osteo and yoga: the body relearning how to move.",
    },
    body: {
      fr: "Une séance qui unit le travail manuel et le mouvement. Des exercices prescrits et enseignés pour que le travail continue chez vous.",
      en: "A session that unites manual work and movement. Prescribed and taught exercises so the work continues at home.",
    },
  },
] as const;

export const MOTIFS = [
  { fr: "Le mal de dos", en: "Back pain" },
  { fr: "Le cou, les maux de tête et les migraines", en: "The neck, headaches and migraines" },
  { fr: "La sciatique", en: "Sciatica" },
  { fr: "Les tendinites", en: "Tendonitis" },
  { fr: "Le tunnel carpien", en: "Carpal tunnel" },
  { fr: "La mâchoire", en: "The jaw" },
  { fr: "Les reflux, ballonnements et constipation", en: "Reflux, bloating and constipation" },
  {
    fr: "Le bébé : tête plate, torticolis, régurgitations, coliques",
    en: "The baby: flat head, torticollis, regurgitation, colic",
  },
  { fr: "La grossesse et l'après-accouchement", en: "Pregnancy and after childbirth" },
  {
    fr: "Après un accouchement, en périménopause ou plus tard : fréquence ou urgence urinaire, fuites",
    en: "After childbirth, during perimenopause or later: urinary frequency or urgency, leaks",
  },
];
