import type { MetadataRoute } from "next";
import { SITE_URL, NETSUITE_PAGES, ZOHO_PAGES, INDUSTRY_PAGES } from "./lib/seo";
import { getPostsForSitemap } from "../sanity/lib/fetch";
import { getZohoPostsForSitemap } from "../sanity/lib/zohoFetch";
import { getOdooPostsForSitemap } from "../sanity/lib/odooFetch";
import { odooAdditionalApps } from "./odoo/components/apps/odooAdditionalAppsData";
import { odooIndustries } from "./odoo/components/industries/odooIndustryData";
import { odooServices } from "./odoo/components/services/odooServiceData";

const ODOO_CORE_APP_SLUGS = [
  "accounting",
  "crm",
  "ecommerce",
  "employees",
  "helpdesk",
  "inventory",
  "manufacturing",
  "marketing",
  "projects",
  "purchase",
  "sales",
  "website",
] as const;

const ZOHO_CASE_STUDY_DOCUMENT_PATHS = [
  "/transforming-sales-operations-with-centralised-lead-management-region-wise-reporting-using-zoho-crm.pdf",
  "/centralising-customer-management-support-operations-with-zoho-one.pdf",
  "/streamlining-employee-management-performance-tracking-with-zoho-people.pdf",
  "/transforming-global-customer-management-with-zoho-crm.pdf",
  "/enhancing-jewellery-business-management-through-zoho-crm.pdf",
  "/email-transformation-cost-optimisation-with-zoho-mail.pdf",
  "/modernising-financial-management-with-zoho-books.pdf",
  "/streamlining-payroll-management-compliance-with-zoho-payroll.pdf",
  "/transforming-recruitment-operations-through-zoho-recruit-automation.pdf",
  "/centralising-customer-feedback-management-with-zoho-forms.pdf",
  "/transforming-customer-data-management-with-zoho-crm.pdf",
] as const;

// Keep newly published priority posts discoverable even if Sanity is temporarily unavailable.
// Dynamic Sanity results are deduplicated against these canonical URLs below.
const FEATURED_ZOHO_BLOG_POSTS = [
  {
    slug: "zoho-marketing-automation-features-benefits",
    publishedAt: "2026-11-23",
  },
  {
    slug: "how-zoho-erp-streamlines-business-operations-and-boosts-productivity",
    publishedAt: "2026-11-20",
  },
] as const;

interface SitemapPost {
  slug?: string | { current?: string };
  _createdAt?: string;
  _updatedAt?: string;
  publishedAt?: string;
}

function createBlogSitemapEntries(
  posts: unknown,
  basePath: string,
  fallbackDate: Date,
): MetadataRoute.Sitemap {
  if (!Array.isArray(posts)) return [];

  return posts.flatMap((post: SitemapPost) => {
    const slug = typeof post.slug === "string" ? post.slug : post.slug?.current;
    if (!slug) return [];

    const postDate = post._updatedAt || post.publishedAt || post._createdAt;
    return [{
      url: `${SITE_URL}${basePath}/${slug}`,
      lastModified: postDate ? new Date(postDate) : fallbackDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }];
  });
}

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
      url: `${SITE_URL}/odoo`,
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
    {
      url: `${SITE_URL}/terms-of-services-of-agsuite-india-localization-for-netsuite`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.4,
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
    "/zoho/customers",
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

  // 4. Insights, blog indexes, case-study indexes, and resource hubs.
  // Placeholder "content coming soon" child routes are intentionally excluded.
  const resourcePages: MetadataRoute.Sitemap = [
    "/netsuite/blogs",
    "/netsuite/case-studies",
    "/netsuite/insights",
    "/netsuite/insights/events",
    "/netsuite/insights/awards-achievements",
    "/zoho/blogs",
    "/zoho/case-studies",
    "/zoho/insights",
    "/zoho/insights/events",
    "/zoho/insights/awards-achievements",
    "/odoo/blogs",
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

  // 8. Complete Odoo navigation, app, service, and industry coverage.
  const odooCompanyPages: MetadataRoute.Sitemap = [
    "/odoo/about-us",
    "/odoo/our-offices",
    "/odoo/life-at-agsuite",
    "/odoo/apps",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const odooAppPages: MetadataRoute.Sitemap = [
    ...ODOO_CORE_APP_SLUGS,
    ...odooAdditionalApps.map((app) => app.slug),
  ].map((slug) => ({
    url: `${SITE_URL}/odoo/apps/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const odooServicePages: MetadataRoute.Sitemap = odooServices.map((service) => ({
    url: `${SITE_URL}/odoo/services/${service.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const odooIndustryPages: MetadataRoute.Sitemap = odooIndustries.map((industry) => ({
    url: `${SITE_URL}/odoo/industries/${industry.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Same-domain clean PDF URLs backed by Vercel Blob rewrites.
  const zohoCaseStudyDocuments: MetadataRoute.Sitemap = ZOHO_CASE_STUDY_DOCUMENT_PATHS.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  const featuredZohoBlogPages: MetadataRoute.Sitemap = FEATURED_ZOHO_BLOG_POSTS.map((post) => ({
    url: `${SITE_URL}/zoho/blogs/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // 9. Dynamic NetSuite Blog Posts (from Sanity CMS)
  let dynamicNetsuiteBlogs: MetadataRoute.Sitemap = [];
  try {
    const nsPosts = await getPostsForSitemap();
    dynamicNetsuiteBlogs = createBlogSitemapEntries(nsPosts, "/netsuite/blogs", now);
  } catch (err) {
    console.error("Error fetching NetSuite blog posts for sitemap:", err);
  }

  // 10. Dynamic Zoho Blog Posts (from Sanity CMS)
  let dynamicZohoBlogs: MetadataRoute.Sitemap = [];
  try {
    const zohoPosts = await getZohoPostsForSitemap();
    dynamicZohoBlogs = createBlogSitemapEntries(zohoPosts, "/zoho/blogs", now);
  } catch (err) {
    console.error("Error fetching Zoho blog posts for sitemap:", err);
  }

  // 11. Dynamic Odoo Blog Posts (from the isolated Odoo Sanity project)
  let dynamicOdooBlogs: MetadataRoute.Sitemap = [];
  try {
    const odooPosts = await getOdooPostsForSitemap();
    dynamicOdooBlogs = createBlogSitemapEntries(odooPosts, "/odoo/blogs", now);
  } catch (err) {
    console.error("Error fetching Odoo blog posts for sitemap:", err);
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
    ...odooCompanyPages,
    ...odooAppPages,
    ...odooServicePages,
    ...odooIndustryPages,
    ...zohoCaseStudyDocuments,
    ...featuredZohoBlogPages,
    ...dynamicNetsuiteBlogs,
    ...dynamicZohoBlogs,
    ...dynamicOdooBlogs,
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
