export const locales = ["de", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "de";

export const ui = {
  de: {
    siteTitle: "Antoscha Haensch",
    tagline:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
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
    placeholderNote:
      "Inhalt folgt — Platzhalter wird ausgetauscht, sobald die Originaldateien da sind.",
  },
  en: {
    siteTitle: "Antoscha Haensch",
    tagline:
      "Antoscha Haensch is a film student based in Berlin. Her practice moves between audiovisual essays, documentary shorts, writing and collective exhibitions. She is interested in memory, family, urban space and the question of how infrastructures can be sensed — as landscape, sound, taste. (Placeholder text, to be replaced.)",
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
