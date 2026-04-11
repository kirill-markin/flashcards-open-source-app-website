import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DOC_SLUGS } from "@/data/docs";
import { getDocs } from "@/lib/docs";
import type { AppLocale } from "@/lib/i18n";
import { getLocalizedPathname } from "@/lib/i18n";
import { getUiCopy } from "@/lib/uiCopy";
import styles from "@/app/docs/page.module.css";

interface DocsPageViewProps {
  readonly locale: AppLocale;
}

export function DocsPageView({
  locale,
}: DocsPageViewProps): React.JSX.Element {
  const uiCopy = getUiCopy(locale);
  const docs = getDocs(locale, DOC_SLUGS);

  return (
    <div className={styles.container}>
      <section className={styles.intro}>
        <Breadcrumbs
          items={[
            {
              label: uiCopy.docs.breadcrumbLabel,
              href: getLocalizedPathname(locale, "/docs/"),
            },
          ]}
          locale={locale}
        />
        <h1 className={styles.title}>{uiCopy.docs.title}</h1>
      </section>
      <section className={styles.gridPanel}>
        <div className={styles.grid}>
          {docs.map((doc) => (
            <Link
              key={doc.slug}
              href={getLocalizedPathname(locale, `/docs/${doc.slug}/`)}
              className={styles.card}
            >
              <h2>{doc.title}</h2>
              <p>{doc.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
