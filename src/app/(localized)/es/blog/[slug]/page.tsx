import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogPostPageView } from "@/components/BlogPostPageView";
import { BLOG_POST_SLUGS } from "@/data/blog";
import { listTranslatedBlogPostSlugs, readBlogPost } from "@/lib/blog";
import { createPageMetadata } from "@/lib/seo/createPageMetadata";
import { getUiCopy } from "@/lib/uiCopy";

const locale = "es" as const;
const uiCopy = getUiCopy(locale);

export const dynamicParams = false;

export const generateStaticParams = (): Array<{ slug: string }> =>
  listTranslatedBlogPostSlugs(locale, BLOG_POST_SLUGS).map((slug) => ({ slug }));

interface PageProps {
  readonly params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
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

export default async function SpanishBlogPostPage({
  params,
}: PageProps): Promise<React.JSX.Element> {
  const { slug } = await params;
  const post = readBlogPost(locale, slug);

  if (post === null) {
    notFound();
  }

  return <BlogPostPageView locale={locale} slug={slug} />;
}
