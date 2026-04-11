import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLdSchema } from "@/components/JsonLdSchema";
import type { AppLocale } from "@/lib/i18n";

interface SiteLayoutDocumentProps {
  readonly children: React.ReactNode;
  readonly locale: AppLocale;
}

export function SiteLayoutDocument({
  children,
  locale,
}: SiteLayoutDocumentProps): React.JSX.Element {
  return (
    <>
      <JsonLdSchema locale={locale} />
      <Header locale={locale} />
      <main>{children}</main>
      <Footer locale={locale} />
    </>
  );
}
