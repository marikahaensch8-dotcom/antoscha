import type { Metadata } from "next";
import { PortfolioPage } from "@/components/PortfolioPage";

export const metadata: Metadata = {
  title: "Antoscha Haensch — Portfolio",
  description:
    "Antoscha Haensch — film student based in Berlin. Audiovisual work, writing and community projects.",
};

export default function HomeEn() {
  return <PortfolioPage locale="en" />;
}
