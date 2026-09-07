import type { MetadataRoute } from "next";
import { SITE_URL, NETSUITE_PAGES, ZOHO_PAGES, INDUSTRY_PAGES } from "./lib/seo";
import { getPosts } from "../sanity/lib/fetch";
import { getZohoPosts } from "../sanity/lib/zohoFetch";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  // 1. Core & High-Priority Static Pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/netsuite`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/zoho`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/best-cloud-based-erp-software`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/best-cloud-based-crm`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/digital-transformation`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/netsuite-calculator`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/free-consultation`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/privacy-policy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/cookie-policy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/terms-conditions`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // 2. NetSuite Company & Navigation Pages
  const netsuiteCompanyPages: MetadataRoute.Sitemap = [
    "/netsuite/services",
    "/netsuite/solutions",
    "/netsuite/industries",
    "/netsuite/about-us",
    "/netsuite/careers",
    "/netsuite/contact",
    "/netsuite/support",
    "/netsuite/request-quote",
    "/netsuite/free-consultation",
    "/netsuite/our-offices",
    "/netsuite/life-at-agsuite",
    "/netsuite/next-ai",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // 3. Zoho Company & Navigation Pages
  const zohoCompanyPages: MetadataRoute.Sitemap = [
    "/zoho/services",
    "/zoho/solutions",
    "/zoho/industries",
    "/zoho/about-us",
    "/zoho/careers",
    "/zoho/contact",
    "/zoho/support",
    "/zoho/request-quote",
    "/zoho/free-consultation",
    "/zoho/our-offices",
    "/zoho/life-at-agsuite",
    "/zoho/marketing/campaigns",
    "/zoho/marketing/survey",
    "/zoho/service/desk",
    "/zoho/service/service",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // 4. Insights, Case Studies & Resources (NetSuite & Zoho)
  const resourcePages: MetadataRoute.Sitemap = [
    "/netsuite/blogs",
    "/netsuite/case-studies",
    "/netsuite/insights",
    "/netsuite/insights/blogs",
    "/netsuite/insights/case-studies",
    "/netsuite/insights/events",
    "/netsuite/insights/awards-achievements",
    "/zoho/blogs",
    "/zoho/case-studies",
    "/zoho/insights",
    "/zoho/insights/blogs",
    "/zoho/insights/case-studies",
    "/zoho/insights/events",
    "/zoho/insights/awards-achievements",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // 5. NetSuite Solution & Service Pages (from NETSUITE_PAGES)
  const netsuitePages: MetadataRoute.Sitemap = Object.keys(NETSUITE_PAGES).map(
    (path) => ({
      url: `${SITE_URL}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })
  );

  // Additional NetSuite Service Routes
  const additionalNetsuiteServices: MetadataRoute.Sitemap = [
    "/netsuite/digital-transformation",
    "/netsuite/low-code-application-development",
    "/netsuite/training-services",
    "/netsuite/solutions/addons",
    "/netsuite/solutions/addons/india-localization",
    "/netsuite/solutions/addons/data-backup",
    "/netsuite/solutions/addons/smart-commission",
    "/netsuite/solutions/addons/connectors/amazon",
    "/netsuite/solutions/addons/connectors/magento2",
    "/netsuite/solutions/addons/connectors/shopify",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // 6. Zoho Product & Service Pages (from ZOHO_PAGES)
  const zohoPages: MetadataRoute.Sitemap = Object.keys(ZOHO_PAGES).map(
    (path) => ({
      url: `${SITE_URL}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })
  );

  // Additional Zoho Service Routes
  const additionalZohoServices: MetadataRoute.Sitemap = [
    "/zoho/digital-transformation",
    "/zoho/low-code-application-development",
    "/zoho/training-services",
    "/zoho/managed-services",
    "/zoho/integration-services",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // 7. Industry Pages (NetSuite & Zoho)
  const industryPages: MetadataRoute.Sitemap = Object.keys(INDUSTRY_PAGES).map(
    (path) => ({
      url: `${SITE_URL}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })
  );

  // 8. Dynamic NetSuite Blog Posts (from Sanity CMS)
  let dynamicNetsuiteBlogs: MetadataRoute.Sitemap = [];
  try {
    const nsPosts = await getPosts();
    if (Array.isArray(nsPosts)) {
      dynamicNetsuiteBlogs = nsPosts
        .filter((post: any) => post?.slug?.current || (typeof post?.slug === "string" && post.slug))
        .map((post: any) => {
          const slug = post.slug?.current || post.slug;
          const postDate = post._updatedAt || post.publishedAt || post._createdAt;
          return {
            url: `${SITE_URL}/netsuite/blogs/${slug}`,
            lastModified: postDate ? new Date(postDate) : now,
            changeFrequency: "weekly" as const,
            priority: 0.7,
          };
        });
    }
  } catch (err) {
    console.error("Error fetching NetSuite blog posts for sitemap:", err);
  }

  // 9. Dynamic Zoho Blog Posts (from Sanity CMS)
  let dynamicZohoBlogs: MetadataRoute.Sitemap = [];
  try {
    const zohoPosts = await getZohoPosts();
    if (Array.isArray(zohoPosts)) {
      dynamicZohoBlogs = zohoPosts
        .filter((post: any) => post?.slug?.current || (typeof post?.slug === "string" && post.slug))
        .map((post: any) => {
          const slug = post.slug?.current || post.slug;
          const postDate = post._updatedAt || post.publishedAt || post._createdAt;
          return {
            url: `${SITE_URL}/zoho/blogs/${slug}`,
            lastModified: postDate ? new Date(postDate) : now,
            changeFrequency: "weekly" as const,
            priority: 0.7,
          };
        });
    }
  } catch (err) {
    console.error("Error fetching Zoho blog posts for sitemap:", err);
  }

  // Deduplicate URLs in case any path overlaps
  const allEntries = [
    ...staticPages,
    ...netsuiteCompanyPages,
    ...zohoCompanyPages,
    ...resourcePages,
    ...netsuitePages,
    ...additionalNetsuiteServices,
    ...zohoPages,
    ...additionalZohoServices,
    ...industryPages,
    ...dynamicNetsuiteBlogs,
    ...dynamicZohoBlogs,
  ];

  const uniqueUrls = new Map<string, MetadataRoute.Sitemap[number]>();
  for (const entry of allEntries) {
    // Normalize trailing slashes if any
    const normalizedUrl = entry.url.replace(/\/$/, "");
    const finalUrl = normalizedUrl === SITE_URL ? SITE_URL : normalizedUrl;
    if (!uniqueUrls.has(finalUrl)) {
      uniqueUrls.set(finalUrl, { ...entry, url: finalUrl });
    }
  }

  return Array.from(uniqueUrls.values());
}
