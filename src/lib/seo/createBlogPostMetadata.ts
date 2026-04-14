import type { Metadata } from "next";
import { getBlogPostImageUrl, readBlogPost } from "@/lib/blog";
import type { AppLocale } from "@/lib/i18n";
import { createPageMetadata } from "@/lib/seo/createPageMetadata";
import { getUiCopy } from "@/lib/uiCopy";

export function createBlogPostMetadata(
  locale: AppLocale,
  slug: string
): Metadata {
  const uiCopy = getUiCopy(locale);
  const post = readBlogPost(locale, slug);

  if (post === null) {
    return { title: uiCopy.blog.notFoundTitle };
  }

  const imageUrl = getBlogPostImageUrl(post);

  return createPageMetadata({
    title: post.title,
    description: post.description,
    locale,
    routePathname: `/blog/${slug}/`,
    openGraphType: "article",
    openGraphImageUrl: imageUrl,
    twitterImageUrl: imageUrl,
    publishedTime: post.date,
    modifiedTime: post.updated,
  });
}
