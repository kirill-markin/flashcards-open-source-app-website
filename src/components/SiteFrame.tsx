import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LocaleSuggestionBanner } from "@/components/LocaleSuggestionBanner";
import type { AppLocale } from "@/lib/i18n";
import {
  getLocaleSuggestionTargetsForLocales,
  getRouteLocales,
} from "@/lib/routeTranslations";

interface SiteFrameProps {
  readonly children: React.ReactNode;
  readonly locale: AppLocale;
  readonly routePathname: string;
}

interface SiteFrameForRouteLocalesProps extends SiteFrameProps {
  readonly routeLocales: ReadonlyArray<AppLocale>;
}

interface SiteFrameLayoutProps extends SiteFrameProps {
  readonly localeSuggestionTargets: ReturnType<
    typeof getLocaleSuggestionTargetsForLocales
  >;
  readonly routeLocales: ReadonlyArray<AppLocale>;
}

function SiteFrameLayout({
  children,
  locale,
  localeSuggestionTargets,
  routeLocales,
  routePathname,
}: SiteFrameLayoutProps): React.JSX.Element {
  return (
    <>
      <Header locale={locale} />
      <main>{children}</main>
      <Footer
        locale={locale}
        routeLocales={routeLocales}
        routePathname={routePathname}
      />
      <LocaleSuggestionBanner
        currentLocale={locale}
        targets={localeSuggestionTargets}
      />
    </>
  );
}

export function SiteFrame({
  children,
  locale,
  routePathname,
}: SiteFrameProps): React.JSX.Element {
  const routeLocales = getRouteLocales(routePathname);
  const localeSuggestionTargets = getLocaleSuggestionTargetsForLocales(
    routePathname,
    locale,
    routeLocales,
  );

  return (
    <SiteFrameLayout
      locale={locale}
      localeSuggestionTargets={localeSuggestionTargets}
      routeLocales={routeLocales}
      routePathname={routePathname}
    >
      {children}
    </SiteFrameLayout>
  );
}

export function SiteFrameForRouteLocales({
  children,
  locale,
  routeLocales,
  routePathname,
}: SiteFrameForRouteLocalesProps): React.JSX.Element {
  const localeSuggestionTargets = getLocaleSuggestionTargetsForLocales(
    routePathname,
    locale,
    routeLocales,
  );

  return (
    <SiteFrameLayout
      locale={locale}
      localeSuggestionTargets={localeSuggestionTargets}
      routeLocales={routeLocales}
      routePathname={routePathname}
    >
      {children}
    </SiteFrameLayout>
  );
}
