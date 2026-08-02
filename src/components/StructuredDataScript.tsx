import { serializeStructuredData } from "@/lib/seo/structuredData";

interface StructuredDataScriptProps {
  readonly value: object;
}

export function StructuredDataScript({
  value,
}: StructuredDataScriptProps): React.JSX.Element {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeStructuredData(value) }}
    />
  );
}
