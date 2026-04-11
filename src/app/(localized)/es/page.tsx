import type { Metadata } from "next";
import { MarketingPageView } from "@/components/MarketingPageView";
import { createMarketingPageMetadata } from "@/lib/seo/createMarketingPageMetadata";

export const metadata: Metadata = createMarketingPageMetadata("home", "es");

export default async function SpanishHomePage(): Promise<React.JSX.Element> {
  return <MarketingPageView locale="es" slug="home" />;
}
