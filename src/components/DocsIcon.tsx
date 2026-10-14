const ICON_CONTENT: Readonly<Record<string, React.ReactNode>> = {
  "getting-started": <path d="M4 19.5V5a2 2 0 0 1 2-2h14v18H6a2 2 0 0 1 0-4h14M8 7h8M8 11h5" />,
  "self-hosting": <><rect x="3" y="3" width="18" height="7" rx="2" /><rect x="3" y="14" width="18" height="7" rx="2" /><path d="M7 6.5h.01M7 17.5h.01M14 6.5h3M14 17.5h3" /></>,
  api: <path d="m8 6-6 6 6 6m8-12 6 6-6 6M14 4l-4 16" />,
  "mcp-connector": <path d="M9 3v5m6-5v5M7 8h10v3a5 5 0 0 1-10 0V8Zm5 8v5" />,
  architecture: <><rect x="8" y="2" width="8" height="6" rx="1.5" /><rect x="2" y="16" width="8" height="6" rx="1.5" /><rect x="14" y="16" width="8" height="6" rx="1.5" /><path d="M12 8v4M6 16v-4h12v4" /></>,
};

export function DocsIcon({ slug }: { readonly slug: string }): React.JSX.Element {
  const content = ICON_CONTENT[slug];
  if (content === undefined) {
    throw new Error(`Documentation guide "${slug}" needs an icon in DocsIcon.tsx.`);
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      {content}
    </svg>
  );
}

export function DocsArrow(): React.JSX.Element {
  return <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" focusable="false"><path d="M4 10h12m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
