import type { MetadataRoute } from "next";
import { SITE_URL } from "./lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/thank-you/", "/_next/", "/web_form_data/", "/ZohoNetsuite/", "/netsuite/", "/contact/", "/web-form-data/", "/netsuite/components", "/zoho/components"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
