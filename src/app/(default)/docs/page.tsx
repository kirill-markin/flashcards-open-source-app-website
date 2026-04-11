import type { Metadata } from "next";
import { DocsPageView } from "@/components/DocsPageView";
import { createPageMetadata } from "@/lib/seo/createPageMetadata";
import { getUiCopy } from "@/lib/uiCopy";

const locale = "en" as const;
const uiCopy = getUiCopy(locale);

export const metadata: Metadata = createPageMetadata({
  title: uiCopy.docs.title,
  description:
    "Getting started, self-hosting guide, API reference, and architecture overview.",
  locale,
  routePathname: "/docs/",
  openGraphType: "website",
});

export default function DocsPage(): React.JSX.Element {
  return <DocsPageView locale={locale} />;
}
