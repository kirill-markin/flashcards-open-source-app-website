import type { Metadata } from "next";
import "@/app/globals.css";
import {
  createLocaleLayoutMetadata,
  RootDocument,
} from "@/app/rootLayoutShared";
import { SiteLayoutDocument } from "@/components/SiteLayoutDocument";

export const metadata: Metadata = createLocaleLayoutMetadata("en");

export default function DefaultLocaleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.JSX.Element {
  return (
    <RootDocument lang="en">
      <SiteLayoutDocument locale="en">{children}</SiteLayoutDocument>
    </RootDocument>
  );
}
