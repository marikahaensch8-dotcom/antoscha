import type { Locale } from "@/lib/i18n";

export type Category = "community" | "audiovisual" | "articles";

export type LocalizedString = Record<Locale, string>;

export type PdfDownload = {
  src: string;
  label: LocalizedString;
};

export type Media =
  | { type: "youtube"; videoId: string }
  | {
      type: "images";
      sources: { src: string; alt: LocalizedString }[];
      pdfDownload?: PdfDownload;
    }
  | { type: "pdf"; src: string; preview?: string }
  | { type: "comic"; sources: string[] };

export type Project = {
  id: string;
  category: Category;
  caption: string;
  year: string;
  title: LocalizedString;
  shortTitle: LocalizedString;
  description: LocalizedString;
  subtitle?: LocalizedString;
  collaboration?: LocalizedString;
  credits?: LocalizedString;
  thumbnail: string;
  media: Media;
  aspect?: string;
  position: {
    top: string;
    left: string;
    width: string;
  };
};

export const projects: Project[] = [
  {
    id: "rap100",
    category: "community",
    caption: "(01)",
    year: "2025",
    title: {
      de: "Kunstraum & Kollektive Ausstellung — Rap100",
      en: "Art Space & Collective Exhibition — Rap100",
    },
    shortTitle: { de: "Rap100", en: "Rap100" },
    subtitle: {
      de: "Kollektive Ausstellung",
      en: "Collective exhibition",
    },
    collaboration: {
      de: "in Zusammenarbeit mit Rap100",
      en: "in collaboration with Rap100",
    },
    description: {
      de: "Rap 100 ist ein Community Center in Leiden, Niederlande. 2025 habe ich dort als Teil des studentischen Teams etwa zweimal im Monat offene Kunsträume organisiert. Das Format war offen für alle, ohne Eintrittsbarriere, mit Materialien und Snacks, damit die Teilnahme so niederschwellig wie möglich blieb. Im Mai 2025 haben wir außerdem eine größere kollektive Ausstellung veranstaltet, bei der sich alle anmelden konnten, um ihre Arbeiten zu zeigen — Gedichte, Nähprojekte, Musik, woran sie gerade arbeiteten. Der Tag wechselte zwischen Künstler:innen, die ihre Werke erklärten, und einem Tisch, an dem gleichzeitig gemeinsam etwas Neues entstand.",
      en: "Rap 100 is a community center in Leiden, the Netherlands, where I organized open art spaces roughly twice a month in 2025 as part of the student team. The format was open to everyone, no entry barrier, materials and snacks provided so that participation is as accessible as possible. In May 2025 we also held a larger collective exhibition, where anyone could register to show their work — poetry, sewing, music, whatever they were working on at that moment. The day was a mix between the artists explaining their artwork and a table where people could simultaneously create.",
    },
    thumbnail: "/assets/rap100/01.jpg",
    aspect: "4 / 3",
    media: {
      type: "images",
      sources: [
        { src: "/assets/rap100/01.jpg", alt: { de: "Rap100 Foto 1", en: "Rap100 photo 1" } },
        { src: "/assets/rap100/02.jpg", alt: { de: "Rap100 Foto 2", en: "Rap100 photo 2" } },
        { src: "/assets/rap100/03.jpg", alt: { de: "Rap100 Foto 3", en: "Rap100 photo 3" } },
        { src: "/assets/rap100/04.jpg", alt: { de: "Rap100 Foto 4", en: "Rap100 photo 4" } },
      ],
    },
    position: { top: "14%", left: "3%", width: "180px" },
  },
  {
    id: "die-heimkehr",
    category: "audiovisual",
    caption: "(02)",
    year: "2024",
    title: { de: "Die Heimkehr", en: "Die Heimkehr (The Homecoming)" },
    shortTitle: { de: "Heimkehr", en: "Homecoming" },
    subtitle: { de: "Kurzfilm", en: "Short film" },
    description: {
      de: "Eine Frau kehrt nach Hause zurück. Sie hat gerade ihren Job und ihren Platz in der Stadt verloren und ringt damit, sich dem Haus ihrer Kindheit zu nähern. Bevor sie die Tür öffnet, stellt sie sich dem, was sie in sich trägt.\n\nIn den 1920er Jahren angesiedelt, ist Die Heimkehr eine Hommage an den impressionistischen Film. Es ist mein erster veröffentlichter Kurzfilm, entstanden während meiner Zeit an der SAE Berlin. Kamera: Ludwig Schulz",
      en: "A woman returns home. Just having lost her job and place in the city, she struggles to approach her childhood home. Before opening the door, she confronts what she has been carrying inside.\n\nSet in the 1920s, Die Heimkehr is a homage to impressionist filmmaking. It is my first published short film produced during my time in the SAE Berlin. DOP: Ludwig Schulz",
    },
    thumbnail: "/images/placeholder-4.jpg",
    aspect: "4 / 5",
    media: { type: "youtube", videoId: "dQw4w9WgXcQ" },
    position: { top: "5%", left: "28%", width: "180px" },
  },
  {
    id: "hinter-glas",
    category: "audiovisual",
    caption: "(03)",
    year: "2021",
    title: { de: "Hinter Glas", en: "Behind Glass" },
    shortTitle: { de: "Hinter Glas", en: "Behind Glass" },
    subtitle: { de: "Kurzfilm", en: "Short film" },
    description: {
      de: "Eine Zusammenarbeit mit dem Theaterkollektiv Die Quadriga GmbH — Marie Bretschneider, Ulrike Langenbein, Rike Schuberty, Veronika Thieme. Wir haben während der Coronazeit einen Kurzfilm als Teaser für ihre spätere Performance gedreht. Aus dem experimentellen Projekt ist ein eigenständiges Kunstwerk geworden.\n\nKamera und Schnitt: Antoscha, Kreativleitung: Ulli",
      en: "A collaboration with the theater collective Die Quadriga GmbH — Marie Bretschneider, Ulrike Langenbein, Rike Schuberty, Veronika Thieme. We created a short film during covid times as a teaser for their later performance. It is an experimental project that became alive as its own artwork.\n\nCamera and editing: Antoscha, Creative direction: Ulli",
    },
    thumbnail: "/images/placeholder-5.jpg",
    aspect: "4 / 5",
    media: { type: "youtube", videoId: "dQw4w9WgXcQ" },
    position: { top: "40%", left: "8%", width: "190px" },
  },
  {
    id: "tea-ceremony",
    category: "audiovisual",
    caption: "(04)",
    year: "2023",
    title: { de: "Eine Teezeremonie aus der Kindheit", en: "A Childhood Tea Ceremony" },
    shortTitle: { de: "Teezeremonie", en: "Tea Ceremony" },
    subtitle: { de: "Kurzfilm für Visual Anthropology", en: "Short film for Visual Anthropology" },
    description: {
      de: "Teekannen, Samoware, Erinnerungen, die in Objekten weiterleben, mündliche Geschichten, Klänge. Meine Großmutter und ich sitzen zusammen und lassen Dinge auftauchen — eine Zusammenarbeit und eine Form des Zuhörens.\n\nKurzfilm für Visual Anthropology.",
      en: "Teapots, samowars, memories held in objects, oral histories, sounds. My grandmother and I sit together and let things surface — a collaboration and a way of listening.\n\nShort film for Visual Anthropology.",
    },
    thumbnail: "/images/placeholder-6.jpg",
    aspect: "5 / 4",
    media: { type: "youtube", videoId: "dQw4w9WgXcQ" },
    position: { top: "70%", left: "22%", width: "190px" },
  },
  {
    id: "anthropologist",
    category: "audiovisual",
    caption: "(05)",
    year: "2024",
    title: { de: "Ich bin Anthropologin", en: "I Am an Anthropologist" },
    shortTitle: { de: "Anthropologin", en: "Anthropologist" },
    subtitle: { de: "Videoessay", en: "Video essay" },
    description: {
      de: "Was bedeutet es, Anthropolog:in zu sein? Wie wollen wir diese Disziplin in unser Leben integrieren? Wie schätzen wir ihren Einfluss auf uns ein? Finn und ich experimentieren, reflektieren und führen offene Gespräche in diesem Videoessay — er ist zum einen ein Abschluss unseres Anthropologiestudiums, zum anderen der Anfang unserer eigenen Praxis.\n\nVideoessay von Finn Bergmann und Antoscha Haensch.",
      en: "What does it mean to be an anthropologist? How do we want to include this discipline in our life? How do we estimate its impact on us? Finn and I experiment, reflect and have some open conversations in this video essay — on one hand an ending to our anthropology degree, yet the beginning of our own practice in the future.\n\nVideo essay by Finn Bergmann and Antoscha Haensch.",
    },
    thumbnail: "/images/placeholder-7.jpg",
    aspect: "3 / 2",
    media: { type: "youtube", videoId: "dQw4w9WgXcQ" },
    position: { top: "12%", left: "56%", width: "190px" },
  },
  {
    id: "babushkas-pogreb",
    category: "articles",
    caption: "(06)",
    year: "2023",
    title: { de: "Babuschkas Pogreb", en: "Babushka's Pogreb" },
    shortTitle: { de: "Pogreb", en: "Pogreb" },
    subtitle: { de: "Artikel & Foto-Serie", en: "Article & photo series" },
    description: {
      de: "Ein Gespräch mit meiner Oma über ihren Pogreb — den Vorratskeller — führt uns zu Fragen über veränderte Mentalitäten zwischen den Generationen, Abhängigkeiten von Supermärkten oder vom eigenen Garten und über Lebensentwürfe im Ruhestand. Romantisierter Garten oder gelebte Erhaltungsarbeit: Der Text beginnt mit einem Interview und öffnet den Pogreb als gelebte Wirklichkeit und Zeugen sich wandelnder Zeiten.\n\nDen Artikel und die begleitende Foto-Serie habe ich für das Journal toxic von Marika Haensch verfasst.",
      en: "A dialogue with my grandma about her pogreb — a food-preservation cellar — leads us to address changing mentalities between generations, dependencies on supermarkets or on the own garden, and thoughts about life purposes for pensioners. Romanticized garden or lived maintenance: the article starts from an interview and opens up the pogreb as a lived reality and a witness of changing times.\n\nI wrote this article and made the accompanying photo series as part of the journal toxic by Marika Haensch.",
    },
    thumbnail: "/assets/babushkas-pogreb/01.jpg",
    aspect: "3 / 4",
    media: {
      type: "images",
      sources: [
        { src: "/assets/babushkas-pogreb/01.jpg", alt: { de: "Babuschkas Pogreb 1", en: "Babushka's Pogreb 1" } },
        { src: "/assets/babushkas-pogreb/02.jpg", alt: { de: "Babuschkas Pogreb 2", en: "Babushka's Pogreb 2" } },
        { src: "/assets/babushkas-pogreb/03.jpg", alt: { de: "Babuschkas Pogreb 3", en: "Babushka's Pogreb 3" } },
        { src: "/assets/babushkas-pogreb/04.jpg", alt: { de: "Babuschkas Pogreb 4", en: "Babushka's Pogreb 4" } },
        { src: "/assets/babushkas-pogreb/05.jpg", alt: { de: "Babuschkas Pogreb 5", en: "Babushka's Pogreb 5" } },
        { src: "/assets/babushkas-pogreb/06.jpg", alt: { de: "Babuschkas Pogreb 6", en: "Babushka's Pogreb 6" } },
        { src: "/assets/babushkas-pogreb/07.jpg", alt: { de: "Babuschkas Pogreb 7", en: "Babushka's Pogreb 7" } },
        { src: "/assets/babushkas-pogreb/08.jpg", alt: { de: "Babuschkas Pogreb 8", en: "Babushka's Pogreb 8" } },
        { src: "/assets/babushkas-pogreb/09.jpg", alt: { de: "Babuschkas Pogreb 9", en: "Babushka's Pogreb 9" } },
      ],
      pdfDownload: {
        src: "/assets/babushkas-pogreb-leseprobe.pdf",
        label: { de: "LESEPROBE HERUNTERLADEN", en: "DOWNLOAD READING SAMPLE" },
      },
    },
    position: { top: "38%", left: "38%", width: "190px" },
  },
  {
    id: "sensing-data-centres",
    category: "articles",
    caption: "(07)",
    year: "2024",
    title: { de: "Sensing Data Centres", en: "Sensing Data Centres" },
    shortTitle: { de: "Rechenzentren", en: "Data Centres" },
    subtitle: { de: "Auszug aus der Bachelorarbeit", en: "Bachelor thesis excerpt" },
    description: {
      de: "Rechenzentren gehören zu den am schnellsten wachsenden Industrien weltweit — vorangetrieben von einer Handvoll US-amerikanischer Tech-Konzerne und zunehmend in den kälteren Regionen Nordeuropas konzentriert. Sie sind ressourcenintensiv, schaffen Abhängigkeiten und tauchen erstaunlich selten in der öffentlichen Debatte auf.\n\nMeine Bachelorarbeit nähert sich diesem Problem aus einer anthropologischen Perspektive — genauer: aus der der Sinne. Ich frage, wie Rechenzentren gespürt, diskutiert und kollektiv verstanden werden können. Anhand von Bürgerinitiativen und Praktiken kollektiver Wissensbildung argumentiere ich, dass ein Einstieg über sinnliche Erfahrung — Geräusch, Hitze, Unbehagen, Geschwindigkeit — einen Zugang zur öffentlichen Auseinandersetzung eröffnet, den die abstrakte technische Debatte verschließt. Informierte Entscheidungen über digitale Infrastruktur setzen voraus, dass Menschen sich überhaupt berechtigt fühlen, ein Gespräch darüber zu führen.",
      en: "Data centres are one of the fastest-growing industries in the world, led by a handful of US-based tech companies and increasingly concentrated in colder regions of Northern Europe. They are resource-intensive, dependency-creating, and remarkably absent from public conversation.\n\nMy bachelor thesis approaches this problem from an anthropological angle — more specifically the senses. I ask how data centres can be felt, discussed, and collectively understood. Drawing on citizen initiatives and practices of collective knowledge-making, I argue that beginning with sensory experience — sound, heat, anxiety, speed — opens a way into public discourse that abstract technical debate does not. Informed decision-making about digital infrastructure requires that people first feel entitled to have a conversation about it.",
    },
    thumbnail: "/images/placeholder-3.jpg",
    aspect: "4 / 5",
    media: { type: "pdf", src: "/placeholders/data-centres.pdf", preview: "/images/placeholder-3.jpg" },
    position: { top: "44%", left: "62%", width: "180px" },
  },
  {
    id: "coming-home-comic",
    category: "articles",
    caption: "(08)",
    year: "2023",
    title: { de: "Heimkommen nach einem Auslandssemester", en: "Coming home after an exchange semester" },
    shortTitle: { de: "Heimkommen", en: "Coming Home" },
    subtitle: { de: "Comic", en: "Comic" },
    description: {
      de: "Wie fühlt es sich an, nach einem Auslandssemester nach Hause zu kommen? In ein leeres Zimmer, aber eine vertraute Wohnung. Zwischen Wärme und Kälte bewege ich mich in dieser Geschichte zwischen vertraut und fremd.\n\nEin Comic, entstanden im Kurs Mediated Anthropology.",
      en: "How does it feel to come home after an exchange semester abroad? To an empty room, yet a familiar flat. Between warmth and cold, I navigate this story between feeling familiar and strange.\n\nA comic created in the course Mediated Anthropology.",
    },
    thumbnail: "/images/placeholder-1.jpg",
    aspect: "5 / 4",
    media: {
      type: "comic",
      sources: ["/images/placeholder-5.jpg", "/images/placeholder-6.jpg", "/images/placeholder-7.jpg"],
    },
    position: { top: "72%", left: "50%", width: "170px" },
  },
];

export const categories: Category[] = ["community", "audiovisual", "articles"];
