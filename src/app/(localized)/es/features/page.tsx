import type { Metadata } from "next";
import { MarketingPageView } from "@/components/MarketingPageView";
import { createMarketingPageMetadata } from "@/lib/seo/createMarketingPageMetadata";

export const metadata: Metadata = createMarketingPageMetadata("features", "es");

export default async function SpanishFeaturesPage(): Promise<React.JSX.Element> {
  return <MarketingPageView locale="es" slug="features" />;
}
