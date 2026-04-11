import type { Metadata } from "next";
import { MarketingPageView } from "@/components/MarketingPageView";
import { createMarketingPageMetadata } from "@/lib/seo/createMarketingPageMetadata";

export const metadata: Metadata = createMarketingPageMetadata("support", "es");

export default async function SpanishSupportPage(): Promise<React.JSX.Element> {
  return <MarketingPageView locale="es" slug="support" />;
}
