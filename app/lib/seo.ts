// ─── Central SEO Configuration ───────────────────────────────────────────────
// Edit SITE_URL when you go live. All canonical & OG URLs are derived from here.

export const SITE_URL = "https://www.agsuitetech.com";
export const SITE_NAME = "AGSuite Technologies";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/og/og-default.jpg`;
export const LAST_MODIFIED = new Date().toISOString();

// ─── Company / Local Business info ───────────────────────────────────────────
export const COMPANY = {
  name: SITE_NAME,
  legalName: "AGSuite Technologies Pvt. Ltd.",
  url: SITE_URL,
  logo: `${SITE_URL}/images/netsuiteimages/netsuitelogos/netsuitepartner1.png`,
  email: "info@agsuitetech.com",
  telephone: "+91-9461046161",
  address: {
    street: "1111, 11th Floor, Gera Imperium Rise, Wipro Circle, Hinjawadi Phase 2 Rd, opposite Wipro Phase 2, Hinjawadi Phase II, Rajiv Gandhi Infotech Park",
    city: "Pune",
    state: "Maharashtra",
    postalCode: "411057",
    country: "IN",
  },
  geo: { lat: 18.5936, lng: 73.7301 },
  sameAs: [
    "https://www.linkedin.com/company/agsuitetech",
    "https://twitter.com/AGSuiteTech",
  ],
};

// ─── Shared Twitter / OG defaults ────────────────────────────────────────────
export const twitterBase = {
  card: "summary_large_image" as const,
  site: "@AGSuiteTech",
  creator: "@AGSuiteTech",
};

export const openGraphBase = {
  siteName: SITE_NAME,
  locale: "en_US",
  type: "website" as const,
};

// ─── Helper: build a full Metadata object for a page ─────────────────────────
export function buildMetadata({
  title,
  description,
  path,
  ogImage,
  keywords,
  noIndex = false,
  category = "Technology",
  publishedTime,
  modifiedTime = LAST_MODIFIED,
  canonicalUrl,
  ogType = "website",
  ogSiteName,
  twitterCard = "summary_large_image",
  twitterLabel1,
  twitterData1,
}: {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  keywords?: string[];
  noIndex?: boolean;
  category?: string;
  publishedTime?: string;
  modifiedTime?: string;
  canonicalUrl?: string;
  ogType?: string;
  ogSiteName?: string;
  twitterCard?: "summary" | "summary_large_image" | "app" | "player";
  twitterLabel1?: string;
  twitterData1?: string;
}) {
  const url = canonicalUrl ?? `${SITE_URL}${path}`;
  const image = ogImage ?? DEFAULT_OG_IMAGE;

  return {
    // ── Core ──────────────────────────────────────────────────────────────────
    title,
    description,
    ...(keywords && { keywords }),
    category,

    // ── Crawling / indexing ───────────────────────────────────────────────────
    metadataBase: new URL(SITE_URL),
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          nocache: false,
          googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            "max-image-preview": "large" as const,
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },

    // ── Canonical & alternates ────────────────────────────────────────────────
    alternates: {
      canonical: url,
      languages: {
        "en-US": url,
        "en-IN": url,
        "x-default": url,
      },
    },

    // ── Open Graph ────────────────────────────────────────────────────────────
    openGraph: {
      ...openGraphBase,
      title,
      description,
      url,
      type: ogType as any,
      siteName: ogSiteName ?? SITE_NAME,
      images: [
        { url: image, width: 1200, height: 630, alt: title, type: "image/jpeg" },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },

    // ── Twitter / X Card ─────────────────────────────────────────────────────
    twitter: {
      ...twitterBase,
      card: twitterCard,
      title,
      description,
      images: [{ url: image, alt: title }],
    },

    // ── Custom arbitrary tags ─────────────────────────────────────────────────
    ...((twitterLabel1 && twitterData1) && {
      other: {
        "twitter:label1": twitterLabel1,
        "twitter:data1": twitterData1,
      },
    }),

    // ── Author / Publisher ────────────────────────────────────────────────────
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME,
    publisher: SITE_NAME,

    // ── Referrer policy ──────────────────────────────────────────────────────
    referrer: "origin-when-cross-origin" as const,

    // ── Format detection ─────────────────────────────────────────────────────
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
  };
}

// ─── JSON-LD Builders ─────────────────────────────────────────────────────────

/** Organisation schema — injected globally in root layout */
export const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: COMPANY.legalName,
  alternateName: SITE_NAME,
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: COMPANY.logo,
    width: 300,
    height: 100,
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: COMPANY.telephone,
      contactType: "customer service",
      areaServed: ["IN", "US", "GB", "AU"],
      availableLanguage: ["English"],
    },
    {
      "@type": "ContactPoint",
      telephone: COMPANY.telephone,
      contactType: "sales",
      areaServed: "IN",
      availableLanguage: "English",
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: COMPANY.address.street,
    addressLocality: COMPANY.address.city,
    addressRegion: COMPANY.address.state,
    postalCode: COMPANY.address.postalCode,
    addressCountry: COMPANY.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: COMPANY.geo.lat,
    longitude: COMPANY.geo.lng,
  },
  sameAs: COMPANY.sameAs,
  foundingDate: "2015",
  numberOfEmployees: { "@type": "QuantitativeValue", value: 50 },
  areaServed: ["IN", "US", "GB", "AU", "AE"],
};

/** LocalBusiness schema — use on contact / about pages */
export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService", "ITService"],
    name: COMPANY.legalName,
    url: SITE_URL,
    telephone: COMPANY.telephone,
    email: COMPANY.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.address.street,
      addressLocality: COMPANY.address.city,
      addressRegion: COMPANY.address.state,
      postalCode: COMPANY.address.postalCode,
      addressCountry: COMPANY.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: COMPANY.geo.lat,
      longitude: COMPANY.geo.lng,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    priceRange: "$$",
    currenciesAccepted: "INR, USD",
    paymentAccepted: "Invoice",
    areaServed: ["India", "United States", "United Kingdom", "Australia"],
  };
}

export const localBusinessSchema = buildLocalBusinessSchema();

/** WebPage schema — add to every solution page */
export function buildWebPageSchema({
  title,
  description,
  path,
  breadcrumbs,
  datePublished = "2024-01-01",
  dateModified = LAST_MODIFIED,
  url,
}: {
  title: string;
  description: string;
  path: string;
  breadcrumbs: { name: string; url: string }[];
  datePublished?: string;
  dateModified?: string;
  url?: string;
}) {
  const pageUrl = url ?? `${SITE_URL}${path}`;
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": pageUrl,
    url: pageUrl,
    name: title,
    description,
    datePublished,
    dateModified,
    isPartOf: { "@type": "WebSite", "@id": "https://agsuitetech.com/#website", name: "AGSuite", url: "https://agsuitetech.com" },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: { "@type": "ImageObject", url: COMPANY.logo },
    },
    breadcrumb: buildBreadcrumbSchema(breadcrumbs),
    inLanguage: "en-US",
    potentialAction: {
      "@type": "ReadAction",
      target: [pageUrl],
    },
  };
}

/** BreadcrumbList schema */
export function buildBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}

/** Service schema — for ERP/CRM/HR solution pages */
export function buildServiceSchema({
  name,
  description,
  path,
  category,
  provider = SITE_NAME,
}: {
  name: string;
  description: string;
  path: string;
  category: string;
  provider?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${SITE_URL}${path}`,
    serviceType: category,
    provider: {
      "@type": "Organization",
      name: provider,
      url: SITE_URL,
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${name} Services`,
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: `${name} Implementation`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: `${name} Consulting`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: `${name} Support`,
          },
        },
      ],
    },
  };
}

/** SoftwareApplication schema — for product/feature pages */
export function buildSoftwareSchema({
  name,
  description,
  applicationCategory,
  operatingSystem = "Web Browser, iOS, Android",
  offers,
}: {
  name: string;
  description: string;
  applicationCategory: string;
  operatingSystem?: string;
  offers?: { price: string; priceCurrency?: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    description,
    applicationCategory,
    operatingSystem,
    ...(offers && {
      offers: offers.map((o) => ({
        "@type": "Offer",
        price: o.price,
        priceCurrency: o.priceCurrency ?? "USD",
      })),
    }),
    author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
  };
}

/** FAQPage schema — pass your FAQ Q&A array */
export function buildFAQSchema(
  faqs: { q: string; a: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
}

/** WebSite schema with SearchAction (enables Google Sitelinks search box) */
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://agsuitetech.com/#website",
  url: "https://agsuitetech.com",
  name: "AGSuite",
  description: "Precise Cloud Solutions, Designed for Your Business Success.",
  publisher: { "@type": "Organization", "@id": "https://agsuitetech.com/#organization" },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://agsuitetech.com/?s={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
  inLanguage: "en-US",
};

// ─── NetSuite page metadata map ───────────────────────────────────────────────
export const NETSUITE_PAGES: Record<
  string,
  {
    title: string;
    description: string;
    keywords: string[];
    category: string;
    publishedTime: string;
    dateModified?: string;
    canonicalUrl?: string;
    ogImage?: string;
    ogType?: string;
    ogSiteName?: string;
    twitterLabel1?: string;
    twitterData1?: string;
    breadcrumbs?: { name: string; url: string }[];
  }
> = {
  "/netsuite-products": {
    title: "Top NetSuite Implantation Partner in Pune | Mumbai | Bangalore - AGSuite",
    description:
      "AGSuite Technologies: Best NetSuite Implementation Partner and NetSuite Solution Provider in India. Trusted NetSuite Partner in Pune, Mumbai, Bangalore for expert services and support.",
    keywords: ["NetSuite Implementation Partner", "NetSuite Partner Pune", "NetSuite Partner Mumbai", "NetSuite Partner Bangalore", "NetSuite Solution Provider India"],
    category: "ERP Software",
    publishedTime: "2024-03-06T00:00:00Z",
    dateModified: "2026-03-27",
    canonicalUrl: "https://agsuitetech.com/netsuite-products/",
    ogImage: "https://agsuitetech.com/wp-content/uploads/2024/09/logo-img.png",
    ogType: "article",
    ogSiteName: "AGSuite",
    twitterLabel1: "Est. reading time",
    twitterData1: "26 minutes",
    breadcrumbs: [
      { name: "Home", url: "https://agsuitetech.com/" },
      { name: "NetSuite Products", url: "https://agsuitetech.com/netsuite-products/" },
    ],
  },
  "/netsuite-suitesuccess": {
    title: "SuiteSuccess Implementation Partner",
    description:
      "AGSuite Technologies is your trusted NetSuite SuiteSuccess Implementation Partner delivering rapid go-live, tailored setups, and end-to-end support for faster ROI and scalable growth.",
    keywords: ["NetSuite SuiteSuccess", "NetSuite implementation", "ERP go-live", "NetSuite partner India", "SuiteSuccess methodology", "AGSuite NetSuite"],
    category: "ERP Software",
    publishedTime: "2024-03-06T00:00:00Z",
    dateModified: "2025-11-17",
    canonicalUrl: "https://agsuitetech.com/netsuite-suitesuccess/",
    ogImage: "https://agsuitetech.com/wp-content/uploads/2024/09/logo-img.png",
    ogType: "article",
    ogSiteName: "AGSuite",
    twitterLabel1: "Est. reading time",
    twitterData1: "20 minutes",
    breadcrumbs: [
      { name: "Home", url: "https://agsuitetech.com/" },
      { name: "NetSuite SuiteSuccess", url: "https://agsuitetech.com/netsuite-suitesuccess/" },
    ],
  },
  "/netsuite-planning-and-budgeting": {
    title: "NetSuite Planning and Budgeting | NetSuite Financial Services",
    description:
      "Streamline your planning and budgeting processes and enhance forecast precision with NetSuite Planning and Budgeting. Leverage scenario planning and conduct what-if analyses to make informed decisions.",
    keywords: [
      "NetSuite Planning and Budgeting",
      "Financial Planning Software",
      "Budgeting Tools ERP",
      "Forecasting Software",
      "Scenario Planning Tools",
      "NetSuite FP&A",
      "Business Budget Planning",
      "Cloud Financial Planning",
    ],
    category: "Financial Software",
    publishedTime: "2024-10-16T00:00:00Z",
    dateModified: "2025-06-30",
    canonicalUrl: "https://agsuitetech.com/netsuite-planning-and-budgeting/",
    ogImage: "https://agsuitetech.com/wp-content/uploads/2024/09/logo-img.png",
    ogType: "article",
    ogSiteName: "AGSuite",
    twitterLabel1: "Est. reading time",
    twitterData1: "37 minutes",
    breadcrumbs: [
      { name: "Home", url: "https://agsuitetech.com/" },
      { name: "NetSuite Planning and Budgeting", url: "https://agsuitetech.com/netsuite-planning-and-budgeting/" },
    ],
  },
  "/netsuite-erp-solution": {
    title: "NetSuite ERP Solution Provider | ERP Software | ERP System",
    description:
      "AGSuite Technologies is a trusted NetSuite ERP Solution Provider offering robust ERP Software, ERP Solutions, and ERP System services. We specialize in NetSuite ERP and NetSuite Financial Services to streamline your business operations.",
    keywords: [
      "NetSuite ERP",
      "ERP Software",
      "ERP System",
      "NetSuite Implementation",
      "NetSuite ERP Solution Provider",
      "Cloud ERP Solutions",
      "NetSuite Financial Services",
      "NetSuite India",
      "ERP Services",
    ],
    category: "ERP Software",
    publishedTime: "2024-03-06T00:00:00Z",
    dateModified: "2025-12-17",
    canonicalUrl: "https://agsuitetech.com/netsuite-erp-solution/",
    ogImage: "https://agsuitetech.com/wp-content/uploads/2024/09/logo-img.png",
    ogType: "article",
    ogSiteName: "AGSuite",
    twitterLabel1: "Est. reading time",
    twitterData1: "25 minutes",
    breadcrumbs: [
      { name: "Home", url: "https://agsuitetech.com/" },
      { name: "NetSuite ERP Solution", url: "https://agsuitetech.com/netsuite-erp-solution/" },
    ],
  },
  "/netsuite-crm-solutions": {
    title: "NetSuite CRM Solution Provider | Best CRM Software for Business",
    description:
      "AGSuite is a leading NetSuite CRM Solution Provider offering powerful CRM software to help businesses stay connected with customers, streamline sales processes, and drive revenue growth. Discover advanced CRM solutions with our cloud CRM system and CRM application tailored to your needs.",
    keywords: ["NetSuite CRM", "sales force automation", "NetSuite customer management", "CRM ERP integration", "AGSuite CRM"],
    category: "CRM Software",
    publishedTime: "2024-03-06T00:00:00Z",
    dateModified: "2025-12-17",
    canonicalUrl: "https://agsuitetech.com/netsuite-crm-solutions/",
    ogImage: "https://agsuitetech.com/wp-content/uploads/2024/09/logo-img.png",
    ogType: "article",
    ogSiteName: "AGSuite",
    twitterLabel1: "Est. reading time",
    twitterData1: "27 minutes",
    breadcrumbs: [
      { name: "Home", url: "https://agsuitetech.com/" },
      { name: "NetSuite CRM Solutions", url: "https://agsuitetech.com/netsuite-crm-solutions/" },
    ],
  },
  "/netsuite-accounting-services": {
    title: "Netsuite Accounting Services | netsuite implementation partners",
    description:
      "AGSuite is a leading Netsuite accounting service providers. NetSuite Financial management Planning is a cloud-based planning application that includes budgeting, forecasting, financial reporting, and analysis.",
    keywords: ["NetSuite accounting", "cloud accounting software", "NetSuite financials", "automated accounting", "AGSuite accounting"],
    category: "Accounting Services",
    publishedTime: "2024-03-13T00:00:00Z",
    dateModified: "2024-11-29",
    canonicalUrl: "https://agsuitetech.com/netsuite-accounting-services/",
    ogImage: "https://agsuitetech.com/wp-content/uploads/2024/09/logo-img.png",
    ogType: "article",
    ogSiteName: "AGSuite",
    twitterLabel1: "Est. reading time",
    twitterData1: "26 minutes",
    breadcrumbs: [
      { name: "Home", url: "https://agsuitetech.com/" },
      { name: "NetSuite Accounting Services", url: "https://agsuitetech.com/netsuite-accounting-services/" },
    ],
  },
  "/netsuite-analytics-warehouse": {
    title: "NetSuite Analytics Warehouse (NSAW)",
    description:
      "Unlock the power of the NetSuite Analytics Warehouse (NSAW) for comprehensive data management, seamless integration, and in-depth reporting. Centralize your business data for better insights and decision-making.",
    keywords: ["NetSuite Analytics Warehouse", "NetSuite BI", "business intelligence NetSuite", "data warehouse NetSuite", "AGSuite analytics"],
    category: "Business Intelligence",
    publishedTime: "2024-10-17T00:00:00Z",
    dateModified: "2025-11-07",
    canonicalUrl: "https://agsuitetech.com/netsuite-analytics-warehouse/",
    ogImage: "https://agsuitetech.com/wp-content/uploads/2024/09/logo-img.png",
    ogType: "article",
    ogSiteName: "AGSuite",
    twitterLabel1: "Est. reading time",
    twitterData1: "34 minutes",
    breadcrumbs: [
      { name: "Home", url: "https://agsuitetech.com/" },
      { name: "NetSuite Analytics Warehouse (NSAW)", url: "https://agsuitetech.com/netsuite-analytics-warehouse/" },
    ],
  },
  "/netsuite-business-intelligence": {
    title: "NetSuite Business Intelligence | NetSuite Partner",
    description:
      "AGSuite Technologies - NetSuite Business Intelligence Software (BI) is a data analysis process that organizations use to gain insights into business performance and improve operational decision-making and strategic.",
    keywords: [
      "NetSuite Business Intelligence",
      "BI Software",
      "NetSuite Analytics",
      "Business Intelligence Tools",
      "Data Analytics ERP",
      "NetSuite BI India",
      "ERP Reporting Tools",
      "Cloud BI Solutions",
    ],
    category: "Business Intelligence",
    publishedTime: "2024-03-06T00:00:00Z",
    dateModified: "2024-11-22",
    canonicalUrl: "https://agsuitetech.com/netsuite-business-intelligence/",
    ogImage: "https://agsuitetech.com/wp-content/uploads/2024/09/logo-img.png",
    ogType: "article",
    ogSiteName: "AGSuite",
    twitterLabel1: "Est. reading time",
    twitterData1: "24 minutes",
    breadcrumbs: [
      { name: "Home", url: "https://agsuitetech.com/" },
      { name: "NetSuite Business Intelligence", url: "https://agsuitetech.com/netsuite-business-intelligence/" },
    ],
  },
  "/netsuite-suite-commerce-site-builder": {
    title: "NetSuite Suite Commerce Site Builder | NetSuite SuiteSuccess Implementation Partner",
    description:
      "AGSuite Provides NetSuite SuiteCommerce services in India & USA. Ecommerce software is complete package for integrating ecommerce websites. It helps to manages all transactions and customer interactions via the Web, mobile and social.",
    keywords: ["NetSuite SuiteCommerce", "NetSuite ecommerce", "B2B ecommerce ERP", "SuiteCommerce Site Builder", "AGSuite ecommerce"],
    category: "eCommerce Software",
    publishedTime: "2024-03-20T00:00:00Z",
    dateModified: "2024-11-21",
    canonicalUrl: "https://agsuitetech.com/netsuite-suite-commerce-site-builder/",
    ogImage: "https://agsuitetech.com/wp-content/uploads/2024/09/logo-img.png",
    ogType: "article",
    ogSiteName: "AGSuite",
    twitterLabel1: "Est. reading time",
    twitterData1: "26 minutes",
    breadcrumbs: [
      { name: "Home", url: "https://agsuitetech.com/" },
      { name: "NetSuite E-Commerce", url: "https://agsuitetech.com/netsuite-suite-commerce-site-builder/" },
    ],
  },
  "/netsuite-open-air-solution": {
    title: "NetSuite OpenAir Software Integration",
    description:
      "AGSuite Technologies specializes in NetSuite OpenAir software integration for efficient open-air project management solutions.",
    keywords: ["NetSuite SuiteProject Pro", "SuiteProject Pro", "professional services automation", "PSA software", "project management ERP", "AGSuite SuiteProject Pro", "NetSuite OpenAir"],
    category: "PSA Software",
    publishedTime: "2024-03-06T00:00:00Z",
    dateModified: "2024-11-22",
    canonicalUrl: "https://agsuitetech.com/netsuite-open-air-solution/",
    ogImage: "https://agsuitetech.com/wp-content/uploads/2024/09/logo-img.png",
    ogType: "article",
    ogSiteName: "AGSuite",
    twitterLabel1: "Est. reading time",
    twitterData1: "20 minutes",
    breadcrumbs: [
      { name: "Home", url: "https://agsuitetech.com/" },
      { name: "Open Air", url: "https://agsuitetech.com/netsuite-open-air-solution/" },
    ],
  },
  "/service-resource-planning": {
    title: "Service Resource Planning",
    description:
      "AGSuite Technologies -Services Resource Planning (SRP) Solution Tool helps you complete projects more quickly, decrease accounts receivable cycles, and generate invoices accurately and efficiently.",
    keywords: ["NetSuite SRP", "service resource planning", "professional services ERP", "resource management", "AGSuite SRP"],
    category: "ERP Software",
    publishedTime: "2024-03-06T00:00:00Z",
    dateModified: "2024-11-22",
    canonicalUrl: "https://agsuitetech.com/service-resource-planning/",
    ogImage: "https://agsuitetech.com/wp-content/uploads/2024/09/logo-img.png",
    ogType: "article",
    ogSiteName: "AGSuite",
    twitterLabel1: "Est. reading time",
    twitterData1: "16 minutes",
    breadcrumbs: [
      { name: "Home", url: "https://agsuitetech.com/" },
      { name: "SRP", url: "https://agsuitetech.com/service-resource-planning/" },
    ],
  },
  "/global-business-management": {
    title: "NetSuite Global Business Management Software",
    description:
      "Discover NetSuite global business management software at AGSuite Technologies. Expert solutions for your global business management software needs.",
    keywords: ["NetSuite global business management", "multi-subsidiary ERP", "NetSuite multi-currency", "international ERP", "AGSuite GBM"],
    category: "ERP Software",
    publishedTime: "2024-03-06T00:00:00Z",
    dateModified: "2024-11-22",
    canonicalUrl: "https://agsuitetech.com/global-business-management/",
    ogImage: "https://agsuitetech.com/wp-content/uploads/2024/09/logo-img.png",
    ogType: "article",
    ogSiteName: "AGSuite",
    twitterLabel1: "Est. reading time",
    twitterData1: "22 minutes",
    breadcrumbs: [
      { name: "Home", url: "https://agsuitetech.com/" },
      { name: "Global Business Management", url: "https://agsuitetech.com/global-business-management/" },
    ],
  },
  "/india-localization-for-netsuite": {
    title: "India Tax Solution | Accounting & Taxation services",
    description:
      "AGSuite Technologies offers comprehensive tax solutions, India tax solution, and Accounting & Taxation services. Discover expert tax solutions tailored to your needs.",
    keywords: ["NetSuite India localization", "NetSuite GST", "NetSuite TDS", "Indian ERP compliance", "AGSuite India", "India Tax Solution"],
    category: "ERP Software",
    publishedTime: "2024-03-08T00:00:00Z",
    dateModified: "2025-07-25",
    canonicalUrl: "https://agsuitetech.com/india-localization-for-netsuite/",
    ogImage: "https://agsuitetech.com/wp-content/uploads/2024/09/logo-img.png",
    ogType: "article",
    ogSiteName: "AGSuite",
    twitterLabel1: "Est. reading time",
    twitterData1: "27 minutes",
    breadcrumbs: [
      { name: "Home", url: "https://agsuitetech.com/" },
      { name: "India Localization for NetSuite", url: "https://agsuitetech.com/india-localization-for-netsuite/" },
    ],
  },
  "/agsuite-india-localization-for-netsuite": {
    title: "AGSuite India Localization for Oracle NetSuite | 100% Tax & Statutory Compliance",
    description:
      "Automate Indian statutory tax compliance with AGSuite India Localization SuiteApp for Oracle NetSuite. 100% GST, e-Invoicing, e-Way Bill, TDS/TCS, MCA Audit Trail, and Schedule III reporting.",
    keywords: ["NetSuite India localization", "NetSuite GST", "NetSuite TDS", "Indian ERP compliance", "AGSuite India", "India Tax Solution", "NetSuite e-Invoicing"],
    category: "ERP Software",
    publishedTime: "2024-03-08T00:00:00Z",
    dateModified: "2026-08-20",
    canonicalUrl: "https://www.agsuitetech.com/agsuite-india-localization-for-netsuite/",
    ogImage: "https://www.agsuitetech.com/images/Dashboard/netsuite_executive_erp_dashboard.webp",
    ogType: "article",
    ogSiteName: "AGSuite Technologies",
    twitterLabel1: "Est. reading time",
    twitterData1: "27 minutes",
    breadcrumbs: [
      { name: "Home", url: "https://agsuitetech.com/" },
      { name: "AGSuite India Localization for NetSuite", url: "https://www.agsuitetech.com/agsuite-india-localization-for-netsuite/" },
    ],
  },
  "/artificial-intelligence-ai": {
    title: "Artificial Intelligence in NetSuite",
    description:
      "Discover how Artificial Intelligence in NetSuite streamlines business processes with predictive analytics, automation, and smarter decision-making. Explore AI-driven solutions for enhanced efficiency.",
    keywords: ["NetSuite AI", "artificial intelligence ERP", "NetSuite machine learning", "intelligent automation", "AGSuite AI NetSuite"],
    category: "Artificial Intelligence",
    publishedTime: "2024-10-18T00:00:00Z",
    dateModified: "2025-05-05",
    canonicalUrl: "https://agsuitetech.com/artificial-intelligence-ai/",
    ogImage: "https://agsuitetech.com/wp-content/uploads/2024/09/logo-img.png",
    ogType: "article",
    ogSiteName: "AGSuite",
    twitterLabel1: "Est. reading time",
    twitterData1: "31 minutes",
    breadcrumbs: [
      { name: "Home", url: "https://agsuitetech.com/" },
      { name: "Artificial Intelligence in NetSuite", url: "https://agsuitetech.com/artificial-intelligence-ai/" },
    ],
  },
  "/why-netsuite": {
    title: "Why NetSuite: Unlock Efficiency with the #1 Cloud ERP",
    description:
      "Discover why NetSuite is the #1 cloud ERP solution for businesses. Streamline operations, enhance scalability, and gain real-time insights with NetSuite's comprehensive suite of tools.",
    keywords: ["why NetSuite", "NetSuite vs SAP", "best cloud ERP", "NetSuite benefits", "AGSuite NetSuite"],
    category: "ERP Software",
    publishedTime: "2024-10-17T00:00:00Z",
    dateModified: "2025-05-05",
    canonicalUrl: "https://agsuitetech.com/why-netsuite/",
    ogImage: "https://agsuitetech.com/wp-content/uploads/2024/09/logo-img.png",
    ogType: "article",
    ogSiteName: "AGSuite",
    twitterLabel1: "Est. reading time",
    twitterData1: "28 minutes",
    breadcrumbs: [
      { name: "Home", url: "https://agsuitetech.com/" },
      { name: "Why NetSuite", url: "https://agsuitetech.com/why-netsuite/" },
    ],
  },
  "/netsuite-connector": {
    title: "Other Solutions & Services",
    description:
      "Explore other solutions and services by AGSuite Technologies. We offer a wide range of customized options to meet your unique business needs. Discover more today!",
    keywords: ["NetSuite Connectors", "NetSuite Add-ons", "NetSuite Integration", "Custom Solutions", "AGSuite Technologies"],
    category: "ERP Software",
    publishedTime: "2024-03-06T00:00:00Z",
    dateModified: "2024-12-02T10:35:36+00:00",
    canonicalUrl: "https://agsuitetech.com/netsuite-connector/",
    ogImage: "https://agsuitetech.com/wp-content/uploads/2024/09/logo-img.png",
    ogType: "article",
    ogSiteName: "AGSuite",
    twitterLabel1: "Est. reading time",
    twitterData1: "26 minutes",
    breadcrumbs: [
      { name: "Home", url: "https://agsuitetech.com/" },
      { name: "Other Solutions & Services", url: "https://agsuitetech.com/netsuite-connector/" },
    ],
  },
  "/magento-2-netsuite-connector": {
    title: "Magento 2 NetSuite Connector & Integration Services",
    description:
      "AGSuite Technologies offers Magento 2 NetSuite Connector and Magento 2 NetSuite Integration Services for seamless eCommerce and ERP integration.",
    keywords: [
      "Magento 2 NetSuite Connector",
      "Magento 2 NetSuite Integration",
      "eCommerce ERP Integration",
      "AGSuite Technologies",
    ],
    category: "ERP Software",
    publishedTime: "2024-03-06T00:00:00Z",
    dateModified: "2024-12-02T10:37:39+00:00",
    canonicalUrl: "https://agsuitetech.com/magento-2-netsuite-connector/",
    ogImage: "https://agsuitetech.com/wp-content/uploads/2024/09/logo-img.png",
    ogType: "article",
    ogSiteName: "AGSuite",
    twitterLabel1: "Est. reading time",
    twitterData1: "27 minutes",
    breadcrumbs: [
      { name: "Home", url: "https://agsuitetech.com/" },
      { name: "Magento 2 NetSuite Connector", url: "https://agsuitetech.com/magento-2-netsuite-connector/" },
    ],
  },
  "/amazon-netsuite-connector": {
    title: "Amazon NetSuite Connector & Integration Services",
    description:
      "AGSuite Technologies provides Amazon NetSuite Connector and Amazon NetSuite Integration Services for efficient eCommerce and ERP integration. Optimize your business now.",
    keywords: [
      "Amazon NetSuite Connector",
      "Amazon NetSuite Integration",
      "eCommerce ERP Integration",
      "AGSuite Technologies",
    ],
    category: "ERP Software",
    publishedTime: "2024-03-06T00:00:00Z",
    dateModified: "2024-12-02T10:39:03+00:00",
    canonicalUrl: "https://agsuitetech.com/amazon-netsuite-connector/",
    ogImage: "https://agsuitetech.com/wp-content/uploads/2024/09/logo-img.png",
    ogType: "article",
    ogSiteName: "AGSuite",
    twitterLabel1: "Est. reading time",
    twitterData1: "26 minutes",
    breadcrumbs: [
      { name: "Home", url: "https://agsuitetech.com/" },
      { name: "Amazon NetSuite Connector", url: "https://agsuitetech.com/amazon-netsuite-connector/" },
    ],
  },
  "/shopify-netsuite-connector": {
    title: "NetSuite Shopify Connector",
    description:
      "AGSuite Technologies offers Shopify NetSuite Connector and Shopify NetSuite Integration Services for seamless eCommerce and ERP integration. Optimize your business operations today.",
    keywords: [
      "NetSuite Shopify Connector",
      "Shopify NetSuite Integration",
      "eCommerce ERP Integration",
      "AGSuite Technologies",
    ],
    category: "ERP Software",
    publishedTime: "2024-03-08T18:11:54+00:00",
    dateModified: "2024-12-02T10:48:02+00:00",
    canonicalUrl: "https://agsuitetech.com/shopify-netsuite-connector/",
    ogImage: "https://agsuitetech.com/wp-content/uploads/2024/09/logo-img.png",
    ogType: "article",
    ogSiteName: "AGSuite",
    twitterLabel1: "Est. reading time",
    twitterData1: "27 minutes",
    breadcrumbs: [
      { name: "Home", url: "https://agsuitetech.com/" },
      { name: "Shopify NetSuite Connector", url: "https://agsuitetech.com/shopify-netsuite-connector/" },
    ],
  },
  "/smart-commission-app": {
    title: "Smart Commission App",
    description:
      "Discover AGSuite Technologies' Smart Commission App for streamlined commission tracking and management. Enhance your sales operations with our innovative solution.",
    keywords: [
      "Smart Commission App",
      "NetSuite Commission Management",
      "Sales Commission Software",
      "AGSuite Technologies",
    ],
    category: "ERP Software",
    publishedTime: "2024-03-06T00:00:00Z",
    dateModified: "2024-12-02T10:52:02+00:00",
    canonicalUrl: "https://agsuitetech.com/smart-commission-app/",
    ogImage: "https://agsuitetech.com/wp-content/uploads/2024/09/logo-img.png",
    ogType: "article",
    ogSiteName: "AGSuite",
    twitterLabel1: "Est. reading time",
    twitterData1: "17 minutes",
    breadcrumbs: [
      { name: "Home", url: "https://agsuitetech.com/" },
      { name: "Smart Commission App", url: "https://agsuitetech.com/smart-commission-app/" },
    ],
  },
  "/netsuite-data-backup-solution": {
    title: "NetSuite Data Backup Solution",
    description:
      "Protect and secure your critical business records with AGSuite Technologies' NetSuite Data Backup Solution. Automated off-site backups, point-in-time recovery, and enterprise data security.",
    keywords: [
      "NetSuite Data Backup Solution",
      "NetSuite Backup Software",
      "Cloud ERP Data Backup",
      "AGSuite Technologies",
    ],
    category: "ERP Software",
    publishedTime: "2024-03-06T00:00:00Z",
    dateModified: "2025-06-24T13:23:50+00:00",
    canonicalUrl: "https://agsuitetech.com/netsuite-data-backup-solution/",
    ogImage: "https://agsuitetech.com/wp-content/uploads/2024/09/logo-img.png",
    ogType: "article",
    ogSiteName: "AGSuite",
    twitterLabel1: "Est. reading time",
    twitterData1: "37 minutes",
    breadcrumbs: [
      { name: "Home", url: "https://agsuitetech.com/" },
      { name: "NetSuite Data Backup Solution", url: "https://agsuitetech.com/netsuite-data-backup-solution/" },
    ],
  },
};

// ─── Zoho page metadata map ───────────────────────────────────────────────────
export const ZOHO_PAGES: Record<
  string,
  {
    title: string;
    description: string;
    keywords: string[];
    category: string;
    publishedTime: string;
    dateModified?: string;
    canonicalUrl?: string;
    ogImage?: string;
    ogType?: string;
    ogSiteName?: string;
    twitterLabel1?: string;
    twitterData1?: string;
    breadcrumbs?: { name: string; url: string }[];
  }
> = {
  "/fixed-asset-management": {
    title: "Fixed Asset Management Software",
    description:
      "Streamline your asset lifecycle from procurement to disposal with AGSuite Technologies' Fixed Asset Management tool built on Zoho Creator. Automated depreciation, QR tracking, and statutory compliance.",
    keywords: [
      "Fixed Asset Management Software",
      "Fixed Asset Management Tracker",
      "Zoho Creator Fixed Asset Management",
      "Companies Act Depreciation",
      "Income Tax Depreciation",
      "AGSuite Technologies",
    ],
    category: "Asset Management Software",
    publishedTime: "2024-03-06T00:00:00Z",
    dateModified: "2025-06-24T13:23:50+00:00",
    canonicalUrl: "https://agsuitetech.com/fixed-asset-management/",
    ogImage: "https://agsuitetech.com/wp-content/uploads/2024/09/logo-img.png",
    ogType: "article",
    ogSiteName: "AGSuite",
    twitterLabel1: "Est. reading time",
    twitterData1: "15 minutes",
    breadcrumbs: [
      { name: "Home", url: "https://agsuitetech.com/zoho" },
      { name: "Zoho Add-Ons", url: "https://agsuitetech.com/zoho/solutions" },
      { name: "Fixed Asset Management", url: "https://agsuitetech.com/fixed-asset-management/" },
    ],
  },
  "/zoho-crm": {
    title: "Zoho Integration Services | Zoho CRM Implementation Services | Zoho CRM Consulting Services",
    description:
      "Elevate your business with our tailored Zoho Integration, CRM Implementation, and Consulting Services. Streamline processes and maximize efficiency with AGSuite Technologies.",
    keywords: ["Zoho CRM", "CRM software India", "Zoho CRM implementation", "sales automation", "AGSuite Zoho CRM"],
    category: "CRM Software",
    publishedTime: "2024-01-05T00:00:00Z",
  },
  "/zoho-books-accounting-software": {
    title: "Zoho Books Accounting Software | Cloud Based Accounting Software",
    description:
      "Empower your business with Zoho Books Accounting Software, a cloud-based solution for streamlined financial management. Elevate your accounting processes with AGSuite Technologies.",
    keywords: ["Zoho Books", "cloud accounting India", "GST accounting software", "Zoho Books implementation", "AGSuite Zoho Books"],
    category: "Accounting Software",
    publishedTime: "2024-01-08T00:00:00Z",
  },
  "/zoho-one": {
    title: "Zoho One | All In One Business Management Software",
    description:
      "Zoho one - Empower your business growth with comprehensive software for sales, marketing, accounting, project management, and more, all in one integrated solution.",
    keywords: ["Zoho One", "Zoho all-in-one", "business software suite", "Zoho One implementation", "AGSuite Zoho One"],
    category: "Business Suite",
    publishedTime: "2024-01-10T00:00:00Z",
  },
  "/zoho-crm-plus": {
    title: "Top Zoho CRM Plus Partner | Implementation Service",
    description:
      "AGSuite Technologies: Expert Zoho CRM Plus Partner offering seamless Zoho CRM Plus implementation and top-notch Zoho CRM Plus Implementation Service for your business needs.",
    keywords: ["Zoho CRM Plus", "customer experience platform", "unified CRM", "AGSuite Zoho CRM Plus"],
    category: "CRM Software",
    publishedTime: "2024-01-12T00:00:00Z",
  },
  "/zoho-analytics": {
    title: "Zoho Analytics Software | Zoho Business Intelligence",
    description:
      "Explore Zoho Analytics software and Zoho Business Intelligence solutions at AGSuite Technologies. Enhance data-driven decisions with our expert implementation and support.",
    keywords: ["Zoho Analytics", "business intelligence software", "data analytics India", "Zoho BI", "AGSuite Zoho Analytics"],
    category: "Business Intelligence",
    publishedTime: "2024-04-12T00:00:00Z",
    dateModified: "2024-11-29",
    canonicalUrl: "https://agsuitetech.com/zoho-analytics/",
    ogImage: "https://agsuitetech.com/wp-content/uploads/2024/09/logo-img.png",
    ogType: "article",
    ogSiteName: "AGSuite",
    twitterLabel1: "Est. reading time",
    twitterData1: "17 minutes",
    breadcrumbs: [
      { name: "Home", url: "https://agsuitetech.com/" },
      { name: "Zoho Analytics", url: "https://agsuitetech.com/zoho-analytics/" }
    ]
  },
  "/zoho-desk": {
    title: "Zoho Desk & Customer Service Help Desk Software",
    description:
      "Discover efficient Zoho Desk and customer service help desk software solutions at AGSuite Technologies. Enhance customer support capabilities. Contact us today for tailored solutions!",
    keywords: ["Zoho Desk", "help desk software", "customer support software", "Zoho Desk implementation", "AGSuite Zoho Desk"],
    category: "Customer Support",
    publishedTime: "2024-01-18T00:00:00Z",
  },
  "/zoho-people": {
    title: "HR Software Solutions | Cloud HRMS | Zoho People",
    description:
      "Discover top HR software solutions with AGSuite Technologies. Implement cloud-based HRMS like Zoho People for seamless management. Contact us today!",
    keywords: ["Zoho People", "HR software India", "HRMS software", "Zoho People implementation", "AGSuite Zoho People"],
    category: "HR Software",
    publishedTime: "2024-01-20T00:00:00Z",
  },
  "/zoho-payroll": {
    title: "Zoho Payroll Implementation | Online Payroll Software",
    description:
      "Optimize your payroll with AGSuite Technologies' Zoho Payroll Integration, Online Payroll Software, and HRMS Payroll Integration services. Streamline your payroll processes today!",
    keywords: ["Zoho Payroll", "payroll software India", "Indian payroll compliance", "Zoho Payroll implementation", "AGSuite Zoho Payroll"],
    category: "Payroll Software",
    publishedTime: "2024-01-22T00:00:00Z",
  },
  "/zoho-inventory-software": {
    title: "Zoho Inventory Management Software",
    description:
      "AGSuite Technologies – Provides Zoho inventory management software. Zoho Inventory is small business inventory management software allowing you to increase sales and complete orders more powerfully.",
    keywords: ["Zoho Inventory", "inventory management software", "order management", "Zoho Inventory implementation", "AGSuite Zoho Inventory"],
    category: "Inventory Software",
    publishedTime: "2024-01-25T00:00:00Z",
  },
  "/zoho-projects": {
    title: "Zoho Project Management Software | Online Project Tracking Tool",
    description:
      "Zoho Projects is a project management software that helps you track and manage work. The in-built issue tracker module helps you resolve issues while keeping track of deadlines.",
    keywords: ["Zoho Projects", "project management software", "Zoho Projects implementation", "team collaboration tools", "AGSuite Zoho Projects"],
    category: "Project Management",
    publishedTime: "2024-01-28T00:00:00Z",
  },
  "/zoho-marketing-automation": {
    title: "Zoho Marketing Automation Software",
    description:
      "Enhance your marketing with Zoho Marketing Automation Software. AGSuite Technologies provides expert solutions to streamline your campaigns and drive results.",
    keywords: ["Zoho Marketing Automation", "B2B marketing software", "lead nurturing", "marketing automation India", "AGSuite Zoho marketing"],
    category: "Marketing Software",
    publishedTime: "2024-02-01T00:00:00Z",
    canonicalUrl: "https://agsuitetech.com/zoho-marketing-automation/",
    ogImage: "https://agsuitetech.com/wp-content/uploads/2024/09/logo-img.png",
    ogType: "article",
    ogSiteName: "AGSuite",
    twitterLabel1: "Est. reading time",
    twitterData1: "20 minutes",
    breadcrumbs: [
      { name: "Home", url: "https://agsuitetech.com/" },
      { name: "Zoho Marketing Automation", url: "https://agsuitetech.com/zoho-marketing-automation/" }
    ]
  },
  "/zoho-recruit-hiring-software": {
    title: "Zoho Hiring Software | Zoho Recruit | Recruitment Solution",
    description:
      "AGSuite Technologies provides zoho Recruiting Software in USA & India. Zoho Recruit is a web-based recruiting solution for small to mid-sized businesses. The software's comprehensive applicant tracking system",
    keywords: ["Zoho Recruit", "applicant tracking system", "ATS software India", "recruitment software", "AGSuite Zoho Recruit"],
    category: "HR Software",
    publishedTime: "2024-02-05T00:00:00Z",
  },
  "/zoho-expense": {
    title: "Zoho Expense Management | Travel Expense Tracker",
    description:
      "Streamline your expenses with AGSuite Technologies' Zoho Expense Management. Our Zoho Expense Tracker and Travel and Expense Management Software ensure efficient and accurate tracking.",
    keywords: ["Zoho Expense", "expense management software", "expense reporting India", "Zoho Expense implementation", "AGSuite Zoho Expense"],
    category: "Expense Management",
    publishedTime: "2024-02-10T00:00:00Z",
  },
  "/zoho-flow": {
    title: "Zoho Flow | Zoho Flow Integration",
    description:
      "Discover Zoho Flow and seamless Zoho Flow integration services at AGSuite Technologies. Optimize your workflows with our expert solutions and support.",
    keywords: ["Zoho Flow", "workflow automation", "no-code automation", "Zoho integration", "AGSuite Zoho Flow"],
    category: "Automation Software",
    publishedTime: "2024-02-15T00:00:00Z",
    canonicalUrl: "https://agsuitetech.com/zoho-flow/",
    ogImage: "https://agsuitetech.com/wp-content/uploads/2024/09/logo-img.png",
    ogType: "article",
    ogSiteName: "AGSuite",
    twitterLabel1: "Est. reading time",
    twitterData1: "16 minutes",
    breadcrumbs: [
      { name: "Home", url: "https://agsuitetech.com/" },
      { name: "Zoho Flow", url: "https://agsuitetech.com/zoho-flow/" }
    ]
  },
  "/zoho-creator": {
    title: "Zoho App Creator | Zoho Creator Consultant & Integrations",
    description:
      "Enhance your business with Zoho app creator, Zoho creator consultant, and Zoho Creator integrations from AGSuite Technologies. Build and integrate apps seamlessly.",
    keywords: ["Zoho Creator", "low-code app builder", "custom app development", "Zoho Creator implementation", "AGSuite Zoho Creator"],
    category: "App Development",
    publishedTime: "2024-04-17T00:00:00Z",
    dateModified: "2024-11-29",
    canonicalUrl: "https://agsuitetech.com/zoho-creator/",
    ogType: "article",
    ogSiteName: "AGSuite",
    twitterLabel1: "Est. reading time",
    twitterData1: "24 minutes",
    breadcrumbs: [
      { name: "Home", url: "https://agsuitetech.com/" },
      { name: "Zoho Creator", url: "https://agsuitetech.com/zoho-creator/" }
    ]
  },
  "/zoho-erp": {
    title: "Zoho ERP Software | Zoho ERP Solutions | Zoho ERP System",
    description:
      "AGSuite provides Zoho ERP integrates finance, inventory, sales, HR, & operations into one scalable, cloud-based system with automation, analytics, & tailored implementation for growth.",
    keywords: ["Zoho ERP", "ERP software India", "SME ERP solution", "Zoho integrated ERP", "AGSuite Zoho ERP"],
    category: "ERP Software",
    publishedTime: "2024-02-25T00:00:00Z",
  },
  "/zoho-finance-plus": {
    title: "Zoho Finance Plus | Integrated Finance Suite",
    description:
      "Transform your business with AGSuite Technologies' Zoho Finance Plus. Our Integrated Finance Suite for Businesses streamlines accounting, invoicing, and expense management for seamless operations.",
    keywords: ["Zoho Finance Plus", "financial management software", "Zoho accounting suite", "AGSuite Zoho Finance"],
    category: "Financial Suite",
    publishedTime: "2024-03-01T00:00:00Z",
  },
  "/zoho-people-plus": {
    title: "Zoho People Plus Implementation | Cloud HRMS Software",
    description:
      "Implement seamless Zoho People Plus integration and enhance HR management with our advanced cloud-based HRMS solutions. Learn more today!",
    keywords: ["Zoho People Plus", "HR management suite", "employee management software", "AGSuite Zoho HR"],
    category: "HR Suite",
    publishedTime: "2024-03-05T00:00:00Z",
  },
  "/zoho-bigin": {
    title: "Zoho Bigin Implementation, Integration & Consulting Solution",
    description:
      "Empower your business with AGSuite Technologies' expert Zoho Bigin CRM solutions. We specialize in Zoho Bigin Implementation, Integration, Consulting, Support, and Customization.",
    keywords: ["Zoho Bigin", "small business CRM", "simple CRM software", "pipeline management", "AGSuite Zoho Bigin"],
    category: "CRM Software",
    publishedTime: "2024-03-10T00:00:00Z",
  },
  "/zoho-mail": {
    title: "Zoho Mail Integration | Zoho Business Email",
    description:
      "Enhance your email efficiency with AGSuite Technologies' Zoho Mail solutions. We offer Zoho Business Email, Zoho Mail Integration, and Zoho Mail Hosting for seamless...",
    keywords: ["Zoho Mail", "business email hosting", "custom domain email", "Zoho Mail setup", "AGSuite Zoho Mail"],
    category: "Email Hosting",
    publishedTime: "2024-03-15T00:00:00Z",
  },
  "/zoho-workplace": {
    title: "Zoho Workplace Solutions | Collaboration Software",
    description:
      "Elevate your team's productivity with AGSuite Technologies' Zoho Workplace Solutions. Our Zoho Workplace Software offers seamless Integration and Collaboration tools for businesses.",
    keywords: ["Zoho Workplace", "team collaboration software", "productivity suite", "Zoho Workplace implementation", "AGSuite Zoho Workplace"],
    category: "Productivity Suite",
    publishedTime: "2024-03-20T00:00:00Z",
  },
  "/zoho-social-media-management": {
    title: "Zoho Social Media Marketing | Zoho Social Implementation",
    description:
      "Boost your online presence with Zoho Social Media Marketing Software and expert Zoho Social Implementation by AGSuite Technologies. Enhance your social strategy today!",
    keywords: ["Zoho Social", "social media management", "social media scheduling", "Zoho Social implementation", "AGSuite Zoho Social"],
    category: "Social Media Software",
    publishedTime: "2024-03-25T00:00:00Z",
    canonicalUrl: "https://agsuitetech.com/zoho-social-media-management/",
    ogImage: "https://agsuitetech.com/wp-content/uploads/2024/09/logo-img.png",
    ogType: "article",
    ogSiteName: "AGSuite",
    twitterLabel1: "Est. reading time",
    twitterData1: "26 minutes",
    breadcrumbs: [
      { name: "Home", url: "https://agsuitetech.com/" },
      { name: "Zoho Social", url: "https://agsuitetech.com/zoho-social-media-management/" }
    ]
  },
  "/zoho-sites": {
    title: "Zoho Site Builder | Zoho Sites Integrations",
    description:
      "Create stunning websites with Zoho Site and Zoho website builder. Enhance functionality with Zoho Sites integrations from AGSuite Technologies. Build your site today!",
    keywords: ["Zoho Sites", "website builder", "no-code website", "Zoho Sites implementation", "AGSuite Zoho Sites"],
    category: "Website Builder",
    publishedTime: "2024-04-01T00:00:00Z",
    canonicalUrl: "https://agsuitetech.com/zoho-sites/",
    ogImage: "https://agsuitetech.com/wp-content/uploads/2024/09/logo-img.png",
    ogType: "article",
    ogSiteName: "AGSuite",
    twitterLabel1: "Est. reading time",
    twitterData1: "21 minutes",
    breadcrumbs: [
      { name: "Home", url: "https://agsuitetech.com/" },
      { name: "Zoho Sites", url: "https://agsuitetech.com/zoho-sites/" }
    ]
  },
  "/zoho-commerce": {
    title: "Zoho Commerce | Build Your Online Store",
    description:
      "Build your online store with Zoho Commerce. AGSuite Technologies helps you leverage Zoho Commerce to create a seamless and efficient e-commerce platform.",
    keywords: ["Zoho Commerce", "ecommerce platform India", "online store builder", "Zoho ecommerce"],
    category: "eCommerce Software",
    publishedTime: "2024-04-05T00:00:00Z",
    canonicalUrl: "https://agsuitetech.com/zoho-commerce/",
    ogImage: "https://agsuitetech.com/wp-content/uploads/2024/09/logo-img.png",
    ogType: "article",
    ogSiteName: "AGSuite",
    twitterLabel1: "Est. reading time",
    twitterData1: "17 minutes",
    breadcrumbs: [
      { name: "Home", url: "https://agsuitetech.com/" },
      { name: "Zoho Commerce", url: "https://agsuitetech.com/zoho-commerce/" }
    ]
  },
  "/zoho-marketing-plus": {
    title: "Zoho Marketing Plus Solutions",
    description:
      "Discover powerful Zoho Marketing Plus solutions with AGSuite Technologies. Enhance your marketing strategies efficiently. Contact us today!",
    keywords: ["Zoho Marketing Plus", "unified marketing platform", "marketing software India", "AGSuite Zoho Marketing Plus"],
    category: "Marketing Suite",
    publishedTime: "2024-04-10T00:00:00Z",
    canonicalUrl: "https://agsuitetech.com/zoho-marketing-plus/",
    ogImage: "https://agsuitetech.com/wp-content/uploads/2024/09/logo-img.png",
    ogType: "article",
    ogSiteName: "AGSuite",
    twitterLabel1: "Est. reading time",
    twitterData1: "18 minutes",
    breadcrumbs: [
      { name: "Home", url: "https://agsuitetech.com/" },
      { name: "Zoho Marketing Plus", url: "https://agsuitetech.com/zoho-marketing-plus/" }
    ]
  },
  "/zoho-salesiq-implementation": {
    title: "Zoho SalesIQ Implementation Software",
    description:
      "AGSuite Technologies – Zoho SalesIQ Implementation Software. It’s to track their website visitors. Not only tracking, but it also facilitates businesses to offer live chat support.",
    keywords: ["Zoho SalesIQ", "live chat software", "website visitor tracking", "Zoho SalesIQ implementation", "AGSuite SalesIQ"],
    category: "Engagement Software",
    publishedTime: "2024-04-15T00:00:00Z",
  },
  "/zoho-fsm": {
    title: "Zoho FSM | Field Service Management Software",
    description:
      "Discover Zoho FSM, a powerful field service management software solution. Partner with AGSuite Technologies for seamless implementation and support.",
    keywords: ["Zoho FSM", "field service management", "work order management", "Zoho FSM implementation", "AGSuite Zoho FSM"],
    category: "FSM Software",
    publishedTime: "2024-04-20T00:00:00Z",
  },
  "/zoho-sprint": {
    title: "Zoho Sprints | Agile Project Management Software",
    description:
      "Manage agile projects with Zoho Sprints. Discover the best online agile project management software with AGSuite Technologies for seamless project execution.",
    keywords: ["Zoho Sprints", "agile project management", "scrum software", "Zoho Sprints implementation", "AGSuite Zoho Sprints"],
    category: "Project Management",
    publishedTime: "2024-04-22T00:00:00Z",
  },
  "/zoho-catalyst": {
    title: "Zoho Catalyst | Cloud Computing Services",
    description:
      "Discover Zoho Catalyst cloud computing services at AGSuite Technologies. Streamline operations with our expert implementation and support.",
    keywords: ["Zoho Catalyst", "serverless development", "cloud app platform", "Zoho Catalyst implementation", "AGSuite Zoho Catalyst"],
    category: "Cloud Platform",
    publishedTime: "2024-04-17T00:00:00Z",
    dateModified: "2024-11-29",
    canonicalUrl: "https://agsuitetech.com/zoho-catalyst/",
    ogImage: "https://agsuitetech.com/wp-content/uploads/2024/09/logo-img.png",
    ogType: "article",
    ogSiteName: "AGSuite",
    twitterLabel1: "Est. reading time",
    twitterData1: "26 minutes",
    breadcrumbs: [
      { name: "Home", url: "https://agsuitetech.com/" },
      { name: "Zoho Catalyst", url: "https://agsuitetech.com/zoho-catalyst/" }
    ]
  },
  "/zoho-it-management": {
    title: "Zoho IT Project Management | Cloud Data Solution",
    description:
      "Optimize your business with Zoho IT Project Management Software and cloud-based data management solution from AGSuite Technologies. Achieve seamless project control.",
    keywords: ["Zoho IT management", "IT asset management", "IT operations software", "AGSuite Zoho IT"],
    category: "IT Management",
    publishedTime: "2024-04-12T00:00:00Z",
    dateModified: "2024-11-29",
    canonicalUrl: "https://agsuitetech.com/zoho-it-management/",
    ogImage: "https://agsuitetech.com/wp-content/uploads/2024/09/logo-img.png",
    ogType: "article",
    ogSiteName: "AGSuite",
    twitterLabel1: "Est. reading time",
    twitterData1: "21 minutes",
    breadcrumbs: [
      { name: "Home", url: "https://agsuitetech.com/" },
      { name: "Zoho IT Management", url: "https://agsuitetech.com/zoho-it-management/" }
    ]
  },
  "/zoho-creator-it-management": {
    title: "Zoho Creator for IT — Custom IT Apps & Automation",
    description:
      "Build custom IT management apps with Zoho Creator. Automate IT processes, create service portals, and integrate with your existing IT stack.",
    keywords: ["Zoho Creator IT", "IT app builder", "custom IT automation", "AGSuite Zoho Creator IT"],
    category: "App Development",
    publishedTime: "2024-05-01T00:00:00Z",
  },
};

// ─── Industry page metadata map ───────────────────────────────────────────────
export const INDUSTRY_PAGES: Record<
  string,
  { title: string; description: string; keywords: string[]; category: string; publishedTime: string }
> = {
  "/zoho/advertising-and-digital-marketing-agencies": {
    "title": "Manage Campaigns & Margins Effectively with Zoho | AGSuite",
    "description": "Integrate your project management and financials to gain real-time visibility into campaign profitability. Zoho helps agencies optimize resource allocation and ",
    "keywords": [
      "Advertising & Marketing",
      "ERP Solutions",
      "Cloud Business Software",
      "AGSuite Industries"
    ],
    "category": "Industry Solutions",
    "publishedTime": "2024-01-01T00:00:00Z"
  },
  "/zoho/it-and-professional-services": {
    "title": "Maximize Billable Hours & Delivery with Zoho | AGSuite",
    "description": "Streamline project accounting, automate resource allocation, and gain real-time visibility with the unified Zoho cloud suite built for modern IT service provide",
    "keywords": [
      "IT Services",
      "ERP Solutions",
      "Cloud Business Software",
      "AGSuite Industries"
    ],
    "category": "Industry Solutions",
    "publishedTime": "2024-01-01T00:00:00Z"
  },
  "/zoho/manufacturing": {
    "title": "Build the Future of Your Factory Floor with Zoho | AGSuite",
    "description": "Streamline production cycles, tighten supply chains, and gain real-time visibility with the unified Zoho cloud suite built for modern manufacturers.",
    "keywords": [
      "Manufacturing",
      "ERP Solutions",
      "Cloud Business Software",
      "AGSuite Industries"
    ],
    "category": "Industry Solutions",
    "publishedTime": "2024-01-01T00:00:00Z"
  },
  "/zoho/media-and-publishing": {
    "title": "Optimize Ad Sales & Subscriptions with Zoho | AGSuite",
    "description": "Manage the entire content lifecycle—from ad sales to subscriber management—on a single cloud platform. Drive digital transformation for your media house.",
    "keywords": [
      "Media & Publishing",
      "ERP Solutions",
      "Cloud Business Software",
      "AGSuite Industries"
    ],
    "category": "Industry Solutions",
    "publishedTime": "2024-01-01T00:00:00Z"
  },
  "/zoho/retail-and-e-commerce": {
    "title": "Deliver Perfect Omnichannel Experiences with Zoho | AGSuite",
    "description": "Connect your online store, physical POS, and warehouse back-office on a single cloud platform. Deliver unified, personalized customer journeys across every chan",
    "keywords": [
      "Retail & E-commerce",
      "ERP Solutions",
      "Cloud Business Software",
      "AGSuite Industries"
    ],
    "category": "Industry Solutions",
    "publishedTime": "2024-01-01T00:00:00Z"
  },
  "/zoho/software-and-technology": {
    "title": "Accelerate Your SaaS Growth with Zoho | AGSuite",
    "description": "Automate complex subscription billing, revenue recognition, and global financial consolidations with the unified Zoho cloud suite tailored for high-growth tech ",
    "keywords": [
      "Software & Technology",
      "ERP Solutions",
      "Cloud Business Software",
      "AGSuite Industries"
    ],
    "category": "Industry Solutions",
    "publishedTime": "2024-01-01T00:00:00Z"
  },
  "/zoho/transportation-and-logistics": {
    "title": "Drive Operational Excellence with Zoho | AGSuite",
    "description": "Gain complete visibility across your global shipments, fleet management, and logistics financials with the unified Zoho cloud suite tailored for the transportat",
    "keywords": [
      "Transportation & Logistics",
      "ERP Solutions",
      "Cloud Business Software",
      "AGSuite Industries"
    ],
    "category": "Industry Solutions",
    "publishedTime": "2024-01-01T00:00:00Z"
  },
  "/zoho/wholesale-distribution": {
    "title": "Maximize Supply Chain Efficiency with Zoho | AGSuite",
    "description": "Run your entire distribution business on a unified cloud suite. Automate procurement, optimize warehouse operations, and improve order fulfillment to scale glob",
    "keywords": [
      "Wholesale Distribution",
      "ERP Solutions",
      "Cloud Business Software",
      "AGSuite Industries"
    ],
    "category": "Industry Solutions",
    "publishedTime": "2024-01-01T00:00:00Z"
  },
  "/zoho/telecom-industry": {
    "title": "Zoho for Telecom Industry — Billing, CRM & Analytics | AGSuite",
    "description": "Modernize your telecom operations with Zoho's unified cloud suite. Automate subscription billing, CRM integration, and real-time analytics. AGSuite Zoho Premium Partner.",
    "keywords": [
      "Zoho Telecom",
      "Telecom CRM Zoho",
      "Subscription Billing Zoho",
      "Telecom Analytics",
      "Zoho OSS BSS Integration",
      "AGSuite Zoho Telecom"
    ],
    "category": "Industry Solutions",
    "publishedTime": "2024-01-01T00:00:00Z"
  },
  "/zoho/financial-services": {
    "title": "Zoho for Financial Services — Compliance, Risk & Reporting | AGSuite",
    "description": "Streamline financial operations with Zoho's integrated suite. Compliance automation, real-time analytics, multi-entity management, and enterprise-grade security.",
    "keywords": [
      "Zoho Financial Services",
      "Financial Compliance Zoho",
      "Zoho Books Finance",
      "Multi-Entity Zoho",
      "Financial Analytics Zoho",
      "AGSuite Zoho Finance"
    ],
    "category": "Industry Solutions",
    "publishedTime": "2024-01-01T00:00:00Z"
  },
  "/netsuite/advertising-and-digital-marketing-agencies": {
    "title": "Brand Promotion & Digital Advertising | AGSuite Technologies",
    "description": "Boost your brand with AGSuite Technologies. Expert in publication design, media planning, digital advertising, and online advertising platforms.",
    "keywords": [
      "Advertising & Marketing",
      "ERP Solutions",
      "Cloud Business Software",
      "AGSuite Industries"
    ],
    "category": "Industry Solutions",
    "publishedTime": "2024-01-01T00:00:00Z"
  },
  "/netsuite/it-and-professional-services": {
    "title": "IT Consulting & Managed IT Services | AGSuite Technologies",
    "description": "Get expert IT consulting, managed IT services, IT support solutions, cloud services, and software development services with AGSuite Technologies.",
    "keywords": [
      "IT & Professional Services",
      "ERP Solutions",
      "Cloud Business Software",
      "AGSuite Industries"
    ],
    "category": "Industry Solutions",
    "publishedTime": "2024-01-01T00:00:00Z"
  },
  "/netsuite/manufacturing": {
    "title": "Manufacturing Technology Solutions | Cost Reduction - AGSuite Technologies",
    "description": "Discover top manufacturing technology solutions with AGSuite Technologies. Enhance production planning, operations management, and reduce costs effectively.",
    "keywords": [
      "Manufacturing",
      "ERP Solutions",
      "Cloud Business Software",
      "AGSuite Industries"
    ],
    "category": "Industry Solutions",
    "publishedTime": "2024-01-01T00:00:00Z"
  },
  "/netsuite/media-and-publishing": {
    "title": "Media and Publishing Solutions | AGSuite Technologies",
    "description": "Manage subscriptions, advertising revenue, content licensing, and royalties with one powerful cloud ERP. AGSuite Technologies helps media and publishing companies streamline finances, improve visibility, and drive growth.",
    "keywords": [
      "Media & Publishing",
      "ERP Solutions",
      "Cloud Business Software",
      "AGSuite Industries"
    ],
    "category": "Industry Solutions",
    "publishedTime": "2024-01-01T00:00:00Z"
  },
  "/netsuite/retail-and-e-commerce": {
    "title": "E-Commerce Solutions | Website Development & Marketing | AGSuite Technologies",
    "description": "AGSuite Technologies offers expert e-commerce solutions, website development, marketing, and growth strategies to elevate your online store",
    "keywords": [
      "Retail & E-Commerce",
      "ERP Solutions",
      "Cloud Business Software",
      "AGSuite Industries"
    ],
    "category": "Industry Solutions",
    "publishedTime": "2024-01-01T00:00:00Z"
  },
  "/netsuite/software-and-technology": {
    "title": "Technology Solutions | IT Consulting & Custom Software - AGSuite Technologies",
    "description": "Explore AGSuite Technologies for top technology solutions, IT consulting services, custom software solutions, and expert software project management.",
    "keywords": [
      "Software & Technology",
      "ERP Solutions",
      "Cloud Business Software",
      "AGSuite Industries"
    ],
    "category": "Industry Solutions",
    "publishedTime": "2024-01-01T00:00:00Z"
  },
  "/netsuite/transportation-and-logistics": {
    "title": "Logistics & Transportation Solutions | AGSuite Technologies",
    "description": "AGSuite Technologies provides comprehensive logistics services, transportation solutions, warehousing solutions, and shipping logistics to streamline your supply chain.",
    "keywords": [
      "Transportation & Logistics",
      "ERP Solutions",
      "Cloud Business Software",
      "AGSuite Industries"
    ],
    "category": "Industry Solutions",
    "publishedTime": "2024-01-01T00:00:00Z"
  },
  "/netsuite/wholesale-distribution": {
    "title": "Industrial Wholesale Suppliers | B2B Distribution - AGSuite Technologies",
    "description": "Find top industrial wholesale suppliers and efficient B2B distribution channels with AGSuite Technologies. Explore bulk distribution services now!",
    "keywords": [
      "Wholesale Distribution",
      "ERP Solutions",
      "Cloud Business Software",
      "AGSuite Industries"
    ],
    "category": "Industry Solutions",
    "publishedTime": "2024-01-01T00:00:00Z"
  },
  "/netsuite/telecom-industry": {
    "title": "Oracle NetSuite ERP for Telecom Industry | Streamline Operations",
    "description": "Transform your telecom business with Oracle NetSuite ERP. Automate billing, manage operations, and gain real-time insights for growth and efficiency.",
    "keywords": [
      "NetSuite Telecom",
      "Telecom ERP",
      "Subscription Billing ERP",
      "Telecom Revenue Recognition",
      "OSS BSS Integration NetSuite",
      "AGSuite Telecom",
      "Cloud ERP Telecom"
    ],
    "category": "Industry Solutions",
    "publishedTime": "2024-01-01T00:00:00Z"
  },
  "/netsuite/financial-services": {
    "title": "NetSuite for Financial Services | Cloud ERP for Banks, Insurance & Investment Firms",
    "description": "Discover how NetSuite helps financial services companies streamline accounting, ensure compliance, and gain real-time visibility. Manage finance, CRM, and reporting in one unified cloud platform.",
    "keywords": [
      "NetSuite Financial Services",
      "Financial Services ERP",
      "Regulatory Compliance ERP",
      "Multi-Entity Financial ERP",
      "NetSuite Banking",
      "AGSuite Financial Services",
      "Cloud ERP Finance"
    ],
    "category": "Industry Solutions",
    "publishedTime": "2024-01-01T00:00:00Z"
  },
  "/netsuite/industries": {
    "title": "Cloud ERP Industry Solutions | NetSuite | AGSuite",
    "description": "Explore industry-specific NetSuite cloud ERP solutions for Manufacturing, Retail, Software, Wholesale, and more. AGSuite certified NetSuite partner.",
    "keywords": ["NetSuite Industries", "ERP Solutions", "Industry Best Practices", "Cloud ERP"],
    "category": "Industry Solutions",
    "publishedTime": "2024-01-01T00:00:00Z"
  },
  "/zoho/industries": {
    "title": "Zoho Industry Solutions | CRM & ERP for Every Business | AGSuite",
    "description": "Discover Zoho cloud solutions tailored for your industry. Advertising, Media, Retail, Manufacturing, and more. Zoho Premium Partner implementation.",
    "keywords": ["Zoho Industries", "CRM Solutions", "Industry Automation", "Zoho Partner"],
    "category": "Industry Solutions",
    "publishedTime": "2024-01-01T00:00:00Z"
  },
  "/smart-commission-app": {
    "title": "NetSuite Smart Commission App — Automated Sales Commission | AGSuite",
    "description": "Automate every sales commission calculation natively inside NetSuite. Multi-tier plans, quota tracking, manager approvals, and real-time rep dashboards.",
    "keywords": ["NetSuite Smart Commission", "NetSuite Sales Commission App", "Commission Automation NetSuite", "AGSuite Smart Commission"],
    "category": "Addon Solutions",
    "publishedTime": "2024-01-01T00:00:00Z"
  },
  "/netsuite-data-backup-solution": {
    "title": "NetSuite India Data Backup Solution — MCA Rule 3 Compliance | AGSuite",
    "description": "Stay fully compliant with MCA Rule 3 by securely backing up your global NetSuite data to Indian servers daily. Encrypted, automated daily sync via Zoho Books.",
    "keywords": ["NetSuite Data Backup", "MCA Rule 3 Compliance NetSuite", "NetSuite India Backup", "AGSuite NetSuite Backup"],
    "category": "Addon Solutions",
    "publishedTime": "2024-01-01T00:00:00Z"
  },
  "/magento-2-netsuite-connector": {
    "title": "NetSuite Magento Connector — Adobe Commerce Integration | AGSuite",
    "description": "Connect Adobe Commerce (Magento) with NetSuite ERP for unified B2B and B2C operations — orders, multi-source inventory, catalog, tier pricing, and customers synced automatically.",
    "keywords": ["NetSuite Magento Connector", "Adobe Commerce NetSuite Integration", "Magento ERP Sync", "AGSuite Magento Connector"],
    "category": "Addon Solutions",
    "publishedTime": "2024-01-01T00:00:00Z"
  },
  "/amazon-netsuite-connector": {
    "title": "NetSuite Amazon Connector — FBA & FBM Automated Sync | AGSuite",
    "description": "Automate your entire Amazon business inside NetSuite — sync FBA and FBM orders, real-time inventory, settlement reports, and customers without manual export.",
    "keywords": ["NetSuite Amazon Connector", "Amazon FBA NetSuite Integration", "Amazon Settlement Reconciliation", "AGSuite Amazon Connector"],
    "category": "Addon Solutions",
    "publishedTime": "2024-01-01T00:00:00Z"
  },
  "/shopify-netsuite-connector": {
    "title": "NetSuite Shopify Connector — Bi-Directional eCommerce Sync | AGSuite",
    "description": "Connect your Shopify store to NetSuite ERP — sync orders, real-time inventory, fulfillments, customers, and returns automatically with zero manual data entry.",
    "keywords": ["NetSuite Shopify Connector", "Shopify Plus NetSuite Integration", "Shopify ERP Sync", "AGSuite Shopify Connector"],
    "category": "Addon Solutions",
    "publishedTime": "2024-01-01T00:00:00Z"
  },
  "/netsuite-connector": {
    "title": "NetSuite Add-Ons & Connectors — Purpose-Built Automation | AGSuite",
    "description": "Extend NetSuite ERP with purpose-built SuiteApps and connectors for sales commission management, MCA data backup, India localization, Amazon, Shopify, and Magento.",
    "keywords": ["NetSuite Connectors", "NetSuite Add-Ons", "NetSuite SuiteApp", "NetSuite Integration Partner", "AGSuite NetSuite"],
    "category": "Addon Solutions",
    "publishedTime": "2024-01-01T00:00:00Z"
  }
};
