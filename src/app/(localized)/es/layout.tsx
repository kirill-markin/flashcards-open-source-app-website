import type { Metadata } from "next";
import "@/app/globals.css";
import {
  createLocaleLayoutMetadata,
  RootDocument,
} from "@/app/rootLayoutShared";
import { SiteLayoutDocument } from "@/components/SiteLayoutDocument";

export const metadata: Metadata = createLocaleLayoutMetadata("es");

export default function SpanishLocaleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.JSX.Element {
  return (
    <RootDocument lang="es">
      <SiteLayoutDocument locale="es">{children}</SiteLayoutDocument>
    </RootDocument>
  );
}
