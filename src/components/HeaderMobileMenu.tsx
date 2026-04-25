"use client";

import { useState } from "react";
import Link from "next/link";
import type { AppLocale } from "@/lib/i18n";
import { getUiCopy } from "@/lib/uiCopy";
import { AuthButton } from "./AuthButton";
import type { HeaderLink } from "./headerLinks";
import styles from "./Header.module.css";

interface HeaderMobileMenuProps {
  readonly headerLinks: ReadonlyArray<HeaderLink>;
  readonly locale: AppLocale;
}

export const HeaderMobileMenu: React.FC<HeaderMobileMenuProps> = ({
  headerLinks,
  locale,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const uiCopy = getUiCopy(locale);

  const toggleMobileMenu = (): void => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = (): void => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <button
        className={styles.mobileToggle}
        onClick={toggleMobileMenu}
        aria-expanded={mobileMenuOpen}
        aria-label={uiCopy.menuToggleLabel}
      >
        <span
          className={mobileMenuOpen ? styles.mobileToggleIconOpen : styles.mobileToggleIcon}
          aria-hidden="true"
        />
      </button>

      {mobileMenuOpen && (
        <nav className={styles.mobileNav}>
          {headerLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={closeMobileMenu}>
              {link.label}
            </Link>
          ))}
          <div className={styles.mobileAuth}>
            <AuthButton locale={locale} />
          </div>
        </nav>
      )}
    </>
  );
};
