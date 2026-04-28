/**
 * JsonLd — Reusable component to inject JSON-LD structured data into any page.
 *
 * Usage (in a Server Component or metadata.ts companion file):
 *   import JsonLd from "@/app/components/seo/JsonLd";
 *   import { buildServiceSchema, buildWebPageSchema } from "@/app/lib/seo";
 *
 *   // In your page.tsx JSX:
 *   <JsonLd schema={buildServiceSchema({ name: "NetSuite ERP", ... })} />
 *   <JsonLd schema={buildWebPageSchema({ title: "...", ... })} />
 */
export default function JsonLd({ schema }: { schema: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
