import Link from "next/link";
import type { AppLocale } from "@/lib/i18n";
import { getLocalizedPathname } from "@/lib/i18n";
import { getUiCopy } from "@/lib/uiCopy";
import { AuthButton } from "./AuthButton";
import { HeaderMobileMenu } from "./HeaderMobileMenu";
import { getHeaderLinks } from "./headerLinks";
import styles from "./Header.module.css";

interface HeaderProps {
  readonly locale: AppLocale;
  readonly signupLabel?: string;
  readonly hideLogin?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ locale, signupLabel, hideLogin = false }) => {
  const headerLinks = getHeaderLinks(locale);
  const uiCopy = getUiCopy(locale);
  const resolvedSignupLabel = signupLabel ?? uiCopy.auth.signUpFree;

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href={getLocalizedPathname(locale, "/")} className={styles.logo}>
          Nibomo
        </Link>

        <nav className={styles.desktopNav}>
          {headerLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className={styles.desktopAuth}>
          <AuthButton
            locale={locale}
            placement="header_desktop"
            signupLabel={resolvedSignupLabel}
            hideLogin={hideLogin}
          />
        </div>

        <HeaderMobileMenu
          locale={locale}
          headerLinks={headerLinks}
          signupLabel={resolvedSignupLabel}
          hideLogin={hideLogin}
        />
      </div>
    </header>
  );
};
