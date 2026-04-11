import Link from "next/link";
import { LocaleSwitcher } from "@/components/LocaleSwitcher";
import type { AppLocale } from "@/lib/i18n";
import { getLocalizedPathname } from "@/lib/i18n";
import { AuthButton } from "./AuthButton";
import { HeaderMobileMenu } from "./HeaderMobileMenu";
import { getHeaderLinks } from "./headerLinks";
import styles from "./Header.module.css";

interface HeaderProps {
  readonly locale: AppLocale;
}

export const Header: React.FC<HeaderProps> = ({ locale }) => {
  const headerLinks = getHeaderLinks(locale);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href={getLocalizedPathname(locale, "/")} className={styles.logo}>
          Flashcards
        </Link>

        <nav className={styles.desktopNav}>
          {headerLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className={styles.desktopLocale}>
          <LocaleSwitcher />
        </div>

        <div className={styles.desktopAuth}>
          <AuthButton locale={locale} />
        </div>

        <HeaderMobileMenu locale={locale} />
      </div>
    </header>
  );
};
