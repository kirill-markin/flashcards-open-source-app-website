const BLOG_ARTICLE_PATH_PATTERN = /^(?:\/[^/]+)?\/blog\/[^/]+\/?$/;

export function getBlogTrailingSlashRedirect(pathname: string): string | null {
  if (!BLOG_ARTICLE_PATH_PATTERN.test(pathname)) {
    return null;
  }
  if (/\.[\w]+\/$/.test(pathname)) {
    return pathname.slice(0, -1);
  }
  if (/\/[^/.]+$/.test(pathname)) {
    return `${pathname}/`;
  }
  return null;
}

export function createBlogAwareTrailingSlashRedirects(): Array<{
  source: string;
  destination: string;
  permanent: true;
  missing?: Array<{ type: "header"; key: string }>;
}> {
  // Next's automatic slash redirects run before Proxy. Keep them for other paths;
  // blog article paths must reach Proxy so retired variants can return 410 directly.
  const outsideBlog = "(?!(?:[^/]+/)?blog/(?![^/]+\\.(?:svg|png|jpg|jpeg|gif|webp|ico)/?$)[^/]+/?$)";
  return [
    {
      source: `/:file(${outsideBlog}(?!\\.well-known(?:/.*)?)(?:[^/]+/)*[^/]+\\.\\w+)/`,
      destination: "/:file",
      permanent: true,
      missing: [{ type: "header", key: "x-nextjs-data" }],
    },
    {
      // Next adds an optional slash to custom redirects, so reject it explicitly.
      source: `/:notfile(${outsideBlog}(?!\\.well-known(?:/.*)?)(?:[^/]+/)*[^/\\.]+(?!/))`,
      destination: "/:notfile/",
      permanent: true,
    },
  ];
}
