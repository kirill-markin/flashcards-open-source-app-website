const BLOG_ARTICLE_PATH_PATTERN = /^(?:\/[^/]+)?\/blog\/[^/]+\/?$/;

export const BLOG_ARTICLE_PROXY_PATH_PATTERN = "(?:[^/]+/)?blog/(?![^/]+\\.(?:svg|png|jpg|jpeg|gif|webp|ico)/?$)[^/]+/?$";

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
