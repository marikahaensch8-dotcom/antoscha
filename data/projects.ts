import type { Locale } from "@/lib/i18n";

export type Category = "community" | "audiovisual" | "articles";

export type LocalizedString = Record<Locale, string>;

export type Media =
  | { type: "youtube"; videoId: string }
  | { type: "images"; sources: { src: string; alt: LocalizedString }[] }
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
    year: "2023",
    title: {
      de: "Art Space & Collective Exhibition — Rap100",
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
      de: "Kollektive Ausstellung im Rahmen von Rap100. Antoscha hat als Mit-Kuratorin den Raum mitgestaltet und drei Foto-Serien beigesteuert. Die Arbeiten zeigen Zwischenräume, Geräusche und Gesten aus dem kollektiven Probebetrieb. (Platzhaltertext, wird ersetzt.)",
      en: "Collective exhibition for Rap100. Antoscha co-curated the space and contributed three photo series. The works show in-between spaces, sounds, and gestures from collective rehearsal. (Placeholder text — to be replaced.)",
    },
    credits: { de: "Bilder: Platzhalter", en: "Pictures: Placeholder" },
    thumbnail: "/images/placeholder-1.jpg",
    aspect: "1 / 1",
    media: {
      type: "images",
      sources: [
        { src: "/images/placeholder-1.jpg", alt: { de: "Rap100 Foto 1", en: "Rap100 photo 1" } },
        { src: "/images/placeholder-2.jpg", alt: { de: "Rap100 Foto 2", en: "Rap100 photo 2" } },
        { src: "/images/placeholder-3.jpg", alt: { de: "Rap100 Foto 3", en: "Rap100 photo 3" } },
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
      de: "Kurzfilm über Rückkehr und das Fremdwerden des Vertrauten. Eine junge Frau kehrt nach Jahren zurück in das Dorf ihrer Kindheit und findet die alten Räume verändert vor. (Platzhaltertext, wird ersetzt.)",
      en: "Short film about returning home and the familiar turning unfamiliar. A young woman returns to her childhood village after years away and finds the old spaces changed. (Placeholder text — to be replaced.)",
    },
    credits: { de: "Regie & Schnitt: Antoscha Haensch", en: "Direction & editing: Antoscha Haensch" },
    thumbnail: "/images/placeholder-4.jpg",
    aspect: "4 / 5",
    media: { type: "youtube", videoId: "dQw4w9WgXcQ" },
    position: { top: "5%", left: "28%", width: "180px" },
  },
  {
    id: "hinter-glas",
    category: "audiovisual",
    caption: "(03)",
    year: "2024",
    title: { de: "Hinter Glas", en: "Behind Glass" },
    shortTitle: { de: "Hinter Glas", en: "Behind Glass" },
    subtitle: { de: "Audiovisueller Essay", en: "Audiovisual essay" },
    description: {
      de: "Beobachtung urbaner Räume durch Schaufenster, Spiegelungen und Regen. Die Kamera bleibt draußen, der Blick wandert durch Glasflächen — vom Stillstand zum vorbeiziehenden Schatten. (Platzhaltertext, wird ersetzt.)",
      en: "Observing urban spaces through shop windows, reflections and rain. The camera stays outside, the gaze drifts across glass — from stillness to passing shadow. (Placeholder text — to be replaced.)",
    },
    credits: { de: "Regie: Antoscha Haensch", en: "Direction: Antoscha Haensch" },
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
    title: { de: "A Childhood Tea Ceremony", en: "A Childhood Tea Ceremony" },
    shortTitle: { de: "Tea Ceremony", en: "Tea Ceremony" },
    subtitle: { de: "Essayistischer Kurzfilm", en: "Essay short" },
    description: {
      de: "Essayistischer Kurzfilm über Erinnerung, Geschmack und Familienritual. Eine Tasse Tee als Dispositiv für eine Kindheit zwischen Kontinenten. (Platzhaltertext, wird ersetzt.)",
      en: "Essayistic short on memory, taste and family ritual. A cup of tea as a device for a childhood split across continents. (Placeholder text — to be replaced.)",
    },
    credits: { de: "Regie: Antoscha Haensch", en: "Direction: Antoscha Haensch" },
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
    title: { de: "I Am an Anthropologist", en: "I Am an Anthropologist" },
    shortTitle: { de: "Anthropologist", en: "Anthropologist" },
    subtitle: { de: "Kurzfilm", en: "Short film" },
    description: {
      de: "Kurzfilm zwischen Selbstbeobachtung und ethnografischem Blick. Die Erzählerin betrachtet ihren eigenen Alltag mit der Distanz einer Feldforscherin. (Platzhaltertext, wird ersetzt.)",
      en: "Short film between self-observation and ethnographic gaze. The narrator observes her own daily life with the distance of a field researcher. (Placeholder text — to be replaced.)",
    },
    credits: { de: "Regie: Antoscha Haensch", en: "Direction: Antoscha Haensch" },
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
    title: { de: "Babushkas Pogreb", en: "Babushka's Pogreb" },
    shortTitle: { de: "Pogreb", en: "Pogreb" },
    subtitle: { de: "Essay", en: "Essay" },
    description: {
      de: "Essay über den Keller der Großmutter — Eingelegtes, Erinnerungen und Politik des Vorrats. Ein Text, der zwischen Familienarchiv und Reflexion über Nahrungssouveränität pendelt. (Platzhaltertext, wird ersetzt.)",
      en: "Essay on a grandmother's cellar — preserves, memory and the politics of the pantry. A text moving between family archive and reflection on food sovereignty. (Placeholder text — to be replaced.)",
    },
    credits: { de: "Text: Antoscha Haensch", en: "Text: Antoscha Haensch" },
    thumbnail: "/images/placeholder-2.jpg",
    aspect: "4 / 5",
    media: { type: "pdf", src: "/placeholders/pogreb.pdf", preview: "/images/placeholder-2.jpg" },
    position: { top: "38%", left: "38%", width: "190px" },
  },
  {
    id: "sensing-data-centres",
    category: "articles",
    caption: "(07)",
    year: "2024",
    title: { de: "Sensing Data Centres", en: "Sensing Data Centres" },
    shortTitle: { de: "Data Centres", en: "Data Centres" },
    subtitle: { de: "Auszug aus der Bachelorarbeit", en: "Bachelor thesis excerpt" },
    description: {
      de: "Auszug aus der Bachelorarbeit: Wie sich Rechenzentren als Landschaft, Geräusch und Infrastruktur erfahren lassen. Eine sinnliche Annäherung an unsichtbar gemachte Materialität. (Platzhaltertext, wird ersetzt.)",
      en: "Excerpt from the bachelor thesis: how data centres are sensed as landscape, sound and infrastructure. A sensorial approach to materiality made invisible. (Placeholder text — to be replaced.)",
    },
    credits: { de: "Text: Antoscha Haensch", en: "Text: Antoscha Haensch" },
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
    title: { de: "Coming home after an exchange semester", en: "Coming home after an exchange semester" },
    shortTitle: { de: "Coming Home", en: "Coming Home" },
    subtitle: { de: "Comic", en: "Comic" },
    description: {
      de: "Comic über das Zurückkommen — fremde Türen, alte Räume, neue Worte. Eine episodische Erzählung in kurzen Panels. (Platzhaltertext, wird ersetzt.)",
      en: "Comic about coming back — strange doors, old rooms, new words. An episodic narrative in short panels. (Placeholder text — to be replaced.)",
    },
    credits: { de: "Zeichnung & Text: Antoscha Haensch", en: "Drawings & text: Antoscha Haensch" },
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
