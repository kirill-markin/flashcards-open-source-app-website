import type { Metadata } from "next";
import { BlogPageView } from "@/components/BlogPageView";
import { createPageMetadata } from "@/lib/seo/createPageMetadata";
import { getUiCopy } from "@/lib/uiCopy";

const locale = "es" as const;
const uiCopy = getUiCopy(locale);

export const metadata: Metadata = createPageMetadata({
  title: uiCopy.blog.title,
  description: "Novedades, tutoriales e ideas sobre Flashcards.",
  locale,
  routePathname: "/blog/",
  openGraphType: "website",
});

export default function SpanishBlogPage(): React.JSX.Element {
  return <BlogPageView locale={locale} />;
}
