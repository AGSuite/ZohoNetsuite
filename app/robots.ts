import type { MetadataRoute } from "next";
import { SITE_URL } from "./lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/thank-you/",
          "/_next/",
          "/web_form_data/",
          "/web-form-data/",
          "/ZohoNetsuite/",
          "/maintenance/",
          "/netsuite/studio/",
          "/zoho/studio/",
          "/free-consultation/thankyou/",
          "/best-cloud-based-erp-software/free-consultation/thankyou/",
        ],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
