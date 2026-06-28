import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LocaleSuggestionBanner } from "@/components/LocaleSuggestionBanner";
import type { AppLocale } from "@/lib/i18n";
import { getLocaleSuggestionTargets } from "@/lib/routeTranslations";

interface SiteFrameProps {
  readonly children: React.ReactNode;
  readonly locale: AppLocale;
  readonly routePathname: string;
}

export function SiteFrame({
  children,
  locale,
  routePathname,
}: SiteFrameProps): React.JSX.Element {
  const localeSuggestionTargets = getLocaleSuggestionTargets(
    routePathname,
    locale
  );

  return (
    <>
      <Header locale={locale} />
      <main>{children}</main>
      <Footer locale={locale} routePathname={routePathname} />
      <LocaleSuggestionBanner
        currentLocale={locale}
        targets={localeSuggestionTargets}
      />
    </>
  );
}
