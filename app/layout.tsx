import type { Metadata, Viewport } from "next";
import { DM_Mono } from "next/font/google";
import "./globals.css";

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "Antoscha Haensch — Portfolio",
    template: "%s — Antoscha Haensch",
  },
  description:
    "Antoscha Haensch — Kulturanthropologin und interdisziplinäre Künstlerin in Leipzig. Audiovisuelle Arbeiten, Texte und Community-Projekte.",
  openGraph: {
    title: "Antoscha Haensch — Portfolio",
    description:
      "Antoscha Haensch — Kulturanthropologin und interdisziplinäre Künstlerin in Leipzig. Audiovisuelle Arbeiten, Texte und Community-Projekte.",
    type: "website",
    locale: "de_DE",
    alternateLocale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Antoscha Haensch — Portfolio",
    description:
      "Antoscha Haensch — Kulturanthropologin und interdisziplinäre Künstlerin in Leipzig. Audiovisuelle Arbeiten, Texte und Community-Projekte.",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={dmMono.variable}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
