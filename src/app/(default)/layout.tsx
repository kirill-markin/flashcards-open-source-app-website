import type { Metadata } from "next";
import { SiteLayoutDocument } from "@/components/SiteLayoutDocument";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
};

export default function DefaultLocaleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.JSX.Element {
  return <SiteLayoutDocument locale="en">{children}</SiteLayoutDocument>;
}
