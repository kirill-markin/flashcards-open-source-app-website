import Image from "next/image";
import Link from "next/link";
import type { ContentLink } from "@/lib/content/types";
import {
  CONNECTOR_DIRECTORIES,
  getConnectorDirectoryLabel,
  getOpenAiDirectoryNotice,
} from "@/lib/connectorDirectories";
import type { AppLocale } from "@/lib/i18n";
import { getExternalLinkAttributes } from "@/lib/linkTargets";
import styles from "./AgentDirectoryLinks.module.css";

interface AgentDirectoryLinksProps {
  readonly locale: AppLocale;
  readonly documentationLink?: ContentLink;
}

export function AgentDirectoryLinks({
  locale,
  documentationLink,
}: AgentDirectoryLinksProps): React.JSX.Element {
  const openAiEntry = (
    <div className={styles.entry}>
      <button
        type="button"
        className={`${styles.directory} ${styles.unavailable}`}
        aria-disabled="true"
        aria-describedby="openai-directory-notice"
        data-testid="openai-directory-unavailable"
      >
        <Image src="/brands/openai.svg" width={20} height={20} alt="" className={styles.logo} />
        <span>OpenAI</span>
      </button>
      <span id="openai-directory-notice" role="tooltip" className={styles.tooltip}>
        {getOpenAiDirectoryNotice(locale)}
      </span>
    </div>
  );
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
        Claude · Claude Code
      </span>
    </div>
  ));

  return (
    <div className={documentationLink === undefined
      ? styles.directories
      : `${styles.directories} ${styles.homeDesign}`}>
      {documentationLink === undefined ? null : connectorEntries}
      {openAiEntry}
      {documentationLink === undefined ? connectorEntries : (
        <Link href={documentationLink.href} className={`${styles.directory} ${styles.documentation}`}>
          {documentationLink.label}
        </Link>
      )}
    </div>
  );
}
