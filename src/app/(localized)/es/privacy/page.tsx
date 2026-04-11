import type { Metadata } from "next";
import { MarketingPageView } from "@/components/MarketingPageView";
import { createMarketingPageMetadata } from "@/lib/seo/createMarketingPageMetadata";

export const metadata: Metadata = createMarketingPageMetadata("privacy", "es");

export default async function SpanishPrivacyPage(): Promise<React.JSX.Element> {
  return <MarketingPageView locale="es" slug="privacy" />;
}
