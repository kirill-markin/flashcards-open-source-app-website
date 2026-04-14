import type { Metadata } from "next";
import { BlogPostPageView } from "@/components/BlogPostPageView";
import { BLOG_POST_SLUGS } from "@/data/blog";
import { createBlogPostMetadata } from "@/lib/seo/createBlogPostMetadata";

const locale = "en" as const;

export const generateStaticParams = (): Array<{ slug: string }> =>
  BLOG_POST_SLUGS.map((slug) => ({ slug }));

interface PageProps {
  readonly params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  return createBlogPostMetadata(locale, slug);
}

export default async function BlogPostPage({
  params,
}: PageProps): Promise<React.JSX.Element> {
  const { slug } = await params;

  return <BlogPostPageView locale={locale} slug={slug} />;
}
