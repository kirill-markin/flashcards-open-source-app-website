import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import type { AppLocale } from "@/lib/i18n";

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
  return (
    <>
      <Header locale={locale} />
      <main>{children}</main>
      <Footer locale={locale} routePathname={routePathname} />
    </>
  );
}
