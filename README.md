# Antoscha Haensch — Portfolio

Ein zweisprachiges (DE / EN) Portfolio für Antoscha Haensch, gebaut mit Next.js und deployed auf Cloudflare Pages.

## Stack

- **Next.js 16** (App Router, Static Export → `next.config.ts` hat `output: "export"`)
- **Tailwind CSS v4** (Theme-Tokens in `app/globals.css`)
- **Fonts:** Schoolbell (handgeschrieben), Quicksand (Sans), DM Mono (Monospace) — alle via `next/font/google`

## Lokal entwickeln

```bash
npm install
npm run dev
```

Dann http://localhost:3000 im Browser öffnen.

## Bauen (Static Export)

```bash
npm run build
```

Erzeugt einen `out/`-Ordner mit allen statischen HTML-Dateien.

## Deployment auf Cloudflare Pages

### Variante A — über das Cloudflare-Dashboard (empfohlen, einfachster Weg)

1. Code auf GitHub pushen (Repo `antoscha`).
2. Cloudflare-Dashboard → **Pages → Create application → Connect to Git**.
3. Repo auswählen, Build-Einstellungen:
   - **Framework preset:** Next.js (Static HTML Export)
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
   - **Root directory:** (leer)
   - **Environment variables:** keine nötig
4. Deploy klicken. Bei Erfolg ist die Site unter `antoscha.pages.dev` erreichbar (der genaue Subdomain-Name ergibt sich aus dem Projekt-Namen in Cloudflare).

### Variante B — über Wrangler CLI

```bash
npm install -g wrangler
wrangler pages deploy out --project-name=antoscha
```

## Inhalte austauschen

### Projekte

Alle Projektdaten (Titel, Beschreibungen, Medien, Position auf der Seite) liegen in **`data/projects.ts`**. Pro Projekt:

- `title.de` / `title.en` — Titel in beiden Sprachen
- `description.de` / `description.en` — Beschreibungstext
- `media` — eines von:
  - `{ type: "youtube", videoId: "abc123" }` — YouTube-Video einbetten
  - `{ type: "images", sources: [...] }` — Foto-Galerie
  - `{ type: "pdf", src: "/path.pdf", preview: "/path.svg" }` — PDF mit Vorschaubild
  - `{ type: "comic", sources: [...] }` — vertikaler Comic-Stack
- `thumbnail` — Bild auf der Übersichtsseite
- `position` — `top`, `left`, `rotate`, `width` für Desktop-Layout

### Bilder & PDFs

Liegen in `public/`:

- `public/cv-placeholder.pdf` → ersetzen durch echten **Lebenslauf** (oder Datei umbenennen und Pfad in `components/Hero.tsx` anpassen).
- `public/thesis-placeholder.pdf` → ersetzen durch echte **Bachelorarbeit**.
- `public/placeholders/*.svg` → ersetzen durch echte Projektbilder. Pfade in `data/projects.ts` aktualisieren.
- `public/placeholders/*.pdf` → echte Artikel/Auszüge (Babushkas Pogreb, Sensing Data Centres).

### YouTube-Videos

In `data/projects.ts` bei den `audiovisual`-Projekten: `videoId` durch die echte YouTube-Video-ID ersetzen (z. B. aus URL `https://youtube.com/watch?v=XYZ` → `videoId: "XYZ"`).

Bis dahin verlinken alle Videos auf einen Platzhalter.

### Texte & Übersetzungen

UI-Texte (Buttons, Filter, Sprachschalter) in **`lib/i18n.ts`**.

## Struktur

```
app/
  layout.tsx          # Root-Layout (Fonts, Metadata)
  page.tsx            # / → Deutsch
  en/page.tsx         # /en → Englisch
  globals.css         # Tailwind + Theme-Tokens
components/
  PortfolioPage.tsx   # Haupt-Komponente (Hero + Filter + Cloud + Modal)
  Hero.tsx
  CategoryFilter.tsx
  ProjectsCloud.tsx
  ProjectCard.tsx
  ProjectModal.tsx
  LanguageSwitcher.tsx
  Scribble.tsx        # SVG-Akzente
data/
  projects.ts         # Inhalt
lib/
  i18n.ts             # Übersetzungen
public/
  placeholders/       # Platzhalter-Bilder & -PDFs
  cv-placeholder.pdf
  thesis-placeholder.pdf
```

## Hinweise

- Videos werden grundsätzlich via YouTube eingebettet (kein Self-Hosting). Für nicht-öffentliche Filme empfiehlt sich der **„Nicht gelistet"**-Status auf YouTube.
- Cloudflare Pages Free Tier hat keine relevanten Limits für statische Seiten dieser Größe.
