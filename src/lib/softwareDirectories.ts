interface SoftwareDirectory {
  readonly name: string;
  readonly href: string;
}

export const SOFTWARE_DIRECTORIES: readonly SoftwareDirectory[] = [
  { name: "Just Learn", href: "https://justlearn.com/ai-tools/nibomo/" },
  { name: "LibHunt", href: "https://www.libhunt.com/r/flashcards-open-source-app" },
  { name: "AlternativeTo", href: "https://alternativeto.net/software/nibomo/about/" },
  { name: "Tool Finder", href: "https://toolfinder.com/tools/nibomo" },
];
