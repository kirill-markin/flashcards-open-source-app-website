import Image from "next/image";
import Link from "next/link";
import type { ContentLink } from "@/lib/content/types";
import {
  CONNECTOR_DIRECTORIES,
  getConnectorDirectoryLabel,
} from "@/lib/connectorDirectories";
import type { AppLocale } from "@/lib/i18n";
import { getExternalLinkAttributes } from "@/lib/linkTargets";
import styles from "./AgentDirectoryLinks.module.css";

interface AgentDirectoryLinksProps {
  readonly locale: AppLocale;
  readonly documentationLink?: ContentLink;
  readonly appearance?: "default" | "home";
}

export function AgentDirectoryLinks({
  locale,
  documentationLink,
  appearance = "default",
}: AgentDirectoryLinksProps): React.JSX.Element {
  const homeAppearance = appearance === "home" || documentationLink !== undefined;
  const connectorEntries = CONNECTOR_DIRECTORIES.map((directory) => (
    <div key={directory.href} className={styles.entry}>
      <a
        href={directory.href}
        {...getExternalLinkAttributes(directory.href)}
        className={styles.directory}
        aria-label={`${directory.providerName}: ${getConnectorDirectoryLabel(locale, directory.name)}`}
        aria-describedby={`${directory.provider}-directory-products`}
        data-testid={`${directory.provider}-directory-link`}
      >
        <Image src={`/brands/${directory.provider}.svg`} width={20} height={20} alt="" className={styles.logo} />
        <span>{directory.providerName}</span>
      </a>
      <span id={`${directory.provider}-directory-products`} role="tooltip" className={styles.tooltip}>
        {directory.products}
      </span>
    </div>
  ));

  return (
    <div className={homeAppearance
      ? `${styles.directories} ${styles.homeDesign}`
      : styles.directories}>
      {connectorEntries}
      {documentationLink === undefined ? null : (
        <Link href={documentationLink.href} className={`${styles.directory} ${styles.documentation}`}>
          {documentationLink.label}
        </Link>
      )}
    </div>
  );
}
