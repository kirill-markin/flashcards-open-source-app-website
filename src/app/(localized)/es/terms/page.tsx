import type { Metadata } from "next";
import { MarketingPageView } from "@/components/MarketingPageView";
import { createMarketingPageMetadata } from "@/lib/seo/createMarketingPageMetadata";

export const metadata: Metadata = createMarketingPageMetadata("terms", "es");

export default async function SpanishTermsPage(): Promise<React.JSX.Element> {
  return <MarketingPageView locale="es" slug="terms" />;
}
