export const locales = ["de", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "de";

export const ui = {
  de: {
    siteTitle: "Antoscha Haensch",
    tagline:
      "Als Kulturanthropologin und interdisziplinäre Künstlerin erforsche ich die Welt als neugierigen, zugleich komplexen und politischen Raum. Digitale Infrastrukturen, sich wandelnde Generationen, das Gefühl, an einen Ort zurückzukehren, der sich verändert hat. Mit Sitz in Leipzig bewegt sich meine Arbeit zwischen Wissenschaft und Kunst. Forschung, Film und Community-Arbeit sind für mich keine getrennten Bereiche, sondern Wege, denselben Fragen nachzugehen: Wie verstehen wir die Welt, in der wir leben, wie schaffen wir Wissen gemeinsam und wie bringen wir es in eine fundierte politische Praxis ein?\n\nIch glaube, dass Lernen im Dialog geschieht. Ob ich offene Kunsträume organisiere, Filme mache oder eine Abschlussarbeit schreibe — Wissen ist für mich kollektiv. Ich lerne durch verschiedene Perspektiven, Wissensformen und mit ausreichend Empathie, um zwischen ihnen zu navigieren.",
    cv: "Lebenslauf",
    thesis: "Bachelorarbeit",
    download: "↓ Herunterladen",
    filterLabel: "Kategorie",
    filterAll: "Alle",
    filterCommunity: "Community",
    filterAudiovisual: "Audiovisuell",
    filterArticles: "Texte",
    close: "Schließen",
    languageOther: "EN",
    languageNameSelf: "Deutsch",
    languageNameOther: "English",
    yearLabel: "Jahr",
    categoryLabel: "Kategorie",
    moreInfo: "Mehr lesen",
    prev: "Zurück",
    next: "Weiter",
    openPdf: "PDF öffnen",
    placeholderNote:
      "Inhalt folgt — Platzhalter wird ausgetauscht, sobald die Originaldateien da sind.",
  },
  en: {
    siteTitle: "Antoscha Haensch",
    tagline:
      "As a cultural anthropologist and interdisciplinary artist I am drawn to explore the world as a curious, yet complex and political space. Digital infrastructures, shifting generations, the feeling of coming home to somewhere that has changed. Based in Leipzig, my work moves in the inbetween of academic and creative. Research, filmmaking and community-organizing are not separate, but a way for me to explore the same questions: How do we understand the world we live in, how do we build knowledge collectively and how do we apply it for informed policy-making?\n\nI believe that learning happens in dialogue. Whether I am organizing open art spaces, making films, or writing a thesis, I recognize the knowledge as collective. I learn through different perspectives, ways of knowing and a good amount of empathy to navigate them.",
    cv: "CV",
    thesis: "Bachelor thesis",
    download: "↓ Download",
    filterLabel: "Category",
    filterAll: "All",
    filterCommunity: "Community",
    filterAudiovisual: "Audiovisual",
    filterArticles: "Writing",
    close: "Close",
    languageOther: "DE",
    languageNameSelf: "English",
    languageNameOther: "Deutsch",
    yearLabel: "Year",
    categoryLabel: "Category",
    moreInfo: "Read more",
    prev: "Prev",
    next: "Next",
    openPdf: "Open PDF",
    placeholderNote:
      "Content coming — placeholder will be swapped once originals are in.",
  },
} as const;

export type UiStrings = (typeof ui)[Locale];

export const categoryLabel: Record<
  "community" | "audiovisual" | "articles",
  Record<Locale, string>
> = {
  community: { de: "Community", en: "Community" },
  audiovisual: { de: "Audiovisuell", en: "Audiovisual" },
  articles: { de: "Texte", en: "Writing" },
};
