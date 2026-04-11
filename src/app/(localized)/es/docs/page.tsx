import type { Metadata } from "next";
import { DocsPageView } from "@/components/DocsPageView";
import { createPageMetadata } from "@/lib/seo/createPageMetadata";
import { getUiCopy } from "@/lib/uiCopy";

const locale = "es" as const;
const uiCopy = getUiCopy(locale);

export const metadata: Metadata = createPageMetadata({
  title: uiCopy.docs.title,
  description:
    "Primeros pasos, guia de autoalojamiento, referencia de la API y resumen de la arquitectura.",
  locale,
  routePathname: "/docs/",
  openGraphType: "website",
});

export default function SpanishDocsPage(): React.JSX.Element {
  return <DocsPageView locale={locale} />;
}
