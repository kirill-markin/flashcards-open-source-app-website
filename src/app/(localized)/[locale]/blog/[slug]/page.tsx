import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogPostPageView } from "@/components/BlogPostPageView";
import { BLOG_POST_SLUGS } from "@/data/blog";
import { getLocalizedRouteStaticParams, resolveNonDefaultLocaleOrNotFound } from "@/app/localizedRouteHelpers";
import { listTranslatedBlogPostSlugs, readBlogPost } from "@/lib/blog";
import { createBlogPostMetadata } from "@/lib/seo/createBlogPostMetadata";

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

  return createBlogPostMetadata(locale, slug);
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
