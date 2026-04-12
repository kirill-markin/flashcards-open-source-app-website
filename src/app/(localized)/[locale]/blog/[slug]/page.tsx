import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogPostPageView } from "@/components/BlogPostPageView";
import { BLOG_POST_SLUGS } from "@/data/blog";
import { getLocalizedRouteStaticParams, resolveNonDefaultLocaleOrNotFound } from "@/app/localizedRouteHelpers";
import { listTranslatedBlogPostSlugs, readBlogPost } from "@/lib/blog";
import { createPageMetadata } from "@/lib/seo/createPageMetadata";
import { getUiCopy } from "@/lib/uiCopy";

export const dynamicParams = false;

export const generateStaticParams = (): Array<{ locale: string; slug: string }> =>
  getLocalizedRouteStaticParams().flatMap(({ locale }) =>
    listTranslatedBlogPostSlugs(locale, BLOG_POST_SLUGS).map((slug) => ({
      locale,
      slug,
    }))
  );

interface PageProps {
  readonly params: Promise<{ locale: string; slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  const locale = resolveNonDefaultLocaleOrNotFound(rawLocale);
  const uiCopy = getUiCopy(locale);
  const post = readBlogPost(locale, slug);

  if (post === null) {
    return { title: uiCopy.blog.notFoundTitle };
  }

  return createPageMetadata({
    title: post.title,
    description: post.description,
    locale,
    routePathname: `/blog/${slug}/`,
    openGraphType: "article",
    publishedTime: post.date,
  });
}

export default async function LocalizedBlogPostPage({
  params,
}: PageProps): Promise<React.JSX.Element> {
  const { locale: rawLocale, slug } = await params;
  const locale = resolveNonDefaultLocaleOrNotFound(rawLocale);
  const post = readBlogPost(locale, slug);

  if (post === null) {
    notFound();
  }

  return <BlogPostPageView locale={locale} slug={slug} />;
}
