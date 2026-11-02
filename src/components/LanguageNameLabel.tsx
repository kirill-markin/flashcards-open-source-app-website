interface LanguageNameLabelProps {
  readonly englishName: string;
  readonly lang: string;
  readonly nativeName: string;
}

/**
 * Each half is direction-isolated so the pair keeps its order on LTR and RTL pages.
 * The pair is one inline run, so the flex parent sees a single item.
 */
export function LanguageNameLabel({
  englishName,
  lang,
  nativeName,
}: LanguageNameLabelProps): React.JSX.Element {
  if (nativeName === englishName) {
    return <bdi lang={lang}>{nativeName}</bdi>;
  }

  return (
    <span>
      <bdi lang={lang}>{nativeName}</bdi>
      {" — "}
      <bdi lang="en">{englishName}</bdi>
    </span>
  );
}
