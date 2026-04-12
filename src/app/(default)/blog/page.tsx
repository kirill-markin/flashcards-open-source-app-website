import type { Metadata } from "next";
import { BlogPageView } from "@/components/BlogPageView";
import { createPageMetadata } from "@/lib/seo/createPageMetadata";
import { getUiCopy } from "@/lib/uiCopy";

const locale = "en" as const;
const uiCopy = getUiCopy(locale);

export const metadata: Metadata = createPageMetadata({
  title: uiCopy.blog.title,
  description: uiCopy.blog.metaDescription,
  locale,
  routePathname: "/blog/",
  openGraphType: "website",
});

export default function BlogPage(): React.JSX.Element {
  return <BlogPageView locale={locale} />;
}
