import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import {
  getRecommendedBlogPosts,
  listBlogPosts,
  readBlogPostContent,
} from "@/lib/blog";
import { createPageMetadata } from "@/lib/seo/createPageMetadata";
import styles from "./page.module.css";

export const generateStaticParams = (): Array<{ slug: string }> => {
  return listBlogPosts().map((post) => ({ slug: post.slug }));
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

const SITE_URL = "https://flashcards-open-source-app.com";

export const generateMetadata = async ({
  params,
}: PageProps): Promise<Metadata> => {
  const { slug } = await params;
  const post = await readBlogPostContent(slug);
  if (!post) return { title: "Not Found" };
  return createPageMetadata({
    title: post.title,
    description: post.description,
    pathname: `/blog/${slug}/`,
    markdownPath: `/blog/${slug}.md`,
    openGraphType: "article",
    publishedTime: post.date,
  });
};

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await readBlogPostContent(slug);

  if (!post) {
    return (
      <div className={styles.container}>
        <section className={styles.intro}>
          <h1 className={styles.title}>Not Found</h1>
        </section>
        <section className={styles.contentPanel}>
          <p className={styles.empty}>This blog post does not exist.</p>
        </section>
      </div>
    );
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    url: `${SITE_URL}/blog/${slug}/`,
    publisher: {
      "@type": "Organization",
      name: "Flashcards",
      url: `${SITE_URL}/`,
    },
  };
  const recommendedPosts = getRecommendedBlogPosts(slug, 4);

  return (
    <article className={styles.container}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <section className={styles.intro}>
        <Breadcrumbs
          items={[
            { label: "Blog", href: "/blog/" },
            { label: post.title, href: `/blog/${slug}/` },
          ]}
        />
        <time className={styles.date}>{post.date}</time>
        <h1 className={styles.title}>{post.title}</h1>
      </section>
      <section className={styles.contentPanel}>
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </section>
      <section className={styles.relatedPanel}>
        <h2 className={styles.relatedHeading}>Read next</h2>
        <div className={styles.relatedList}>
          {recommendedPosts.map((recommendedPost) => (
            <Link
              key={recommendedPost.slug}
              href={`/blog/${recommendedPost.slug}/`}
              className={styles.relatedCard}
            >
              <time className={styles.date}>{recommendedPost.date}</time>
              <h3>{recommendedPost.title}</h3>
              <p className={styles.relatedDescription}>
                {recommendedPost.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}
