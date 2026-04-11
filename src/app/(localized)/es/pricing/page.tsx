import type { Metadata } from "next";
import { MarketingPageView } from "@/components/MarketingPageView";
import { createMarketingPageMetadata } from "@/lib/seo/createMarketingPageMetadata";

export const metadata: Metadata = createMarketingPageMetadata("pricing", "es");

export default async function SpanishPricingPage(): Promise<React.JSX.Element> {
  return <MarketingPageView locale="es" slug="pricing" />;
}
