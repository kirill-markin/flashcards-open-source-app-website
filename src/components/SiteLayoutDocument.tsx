import { JsonLdSchema } from "@/components/JsonLdSchema";
import { SiteAnalytics } from "@/components/SiteAnalytics";
import type { AppLocale } from "@/lib/i18n";
import { getAvailableLocalizedPathname } from "@/lib/routeTranslations";

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
      {children}
      <SiteAnalytics
        locale={locale}
        privacyPolicyPathname={getAvailableLocalizedPathname(locale, "/privacy/")}
      />
    </>
  );
}
