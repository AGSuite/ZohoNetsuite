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
import Script from "next/script";

export default function JsonLd({ schema, id }: { schema: Record<string, unknown>; id?: string }) {
  const scriptId = id || `jsonld-${Math.random().toString(36).substring(2, 9)}`;
  return (
    <Script
      id={scriptId}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}




