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
  telephone: "+91-XXXXXXXXXX",          // ← replace with real number
  address: {
    street: "Your Street Address",       // ← replace
    city: "Mumbai",
    state: "Maharashtra",
    postalCode: "400001",
    country: "IN",
  },
  geo: { lat: 19.076, lng: 72.8777 },   // ← Mumbai coords, adjust as needed
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
}) {
  const url = `${SITE_URL}${path}`;
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
      images: [
        { url: image, width: 1200, height: 630, alt: title, type: "image/jpeg" },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },

    // ── Twitter / X Card ─────────────────────────────────────────────────────
    twitter: {
      ...twitterBase,
      title,
      description,
      images: [{ url: image, alt: title }],
    },

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

/** WebPage schema — add to every solution page */
export function buildWebPageSchema({
  title,
  description,
  path,
  breadcrumbs,
  datePublished = "2024-01-01",
  dateModified = LAST_MODIFIED,
}: {
  title: string;
  description: string;
  path: string;
  breadcrumbs: { name: string; url: string }[];
  datePublished?: string;
  dateModified?: string;
}) {
  const url = `${SITE_URL}${path}`;
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": url,
    url,
    name: title,
    description,
    datePublished,
    dateModified,
    isPartOf: { "@type": "WebSite", "@id": SITE_URL, name: SITE_NAME, url: SITE_URL },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: { "@type": "ImageObject", url: COMPANY.logo },
    },
    breadcrumb: buildBreadcrumbSchema(breadcrumbs),
    inLanguage: "en-US",
    potentialAction: {
      "@type": "ReadAction",
      target: [url],
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
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  description:
    "Certified Zoho Advanced Partner & Oracle NetSuite Partner — ERP, CRM, HR, Finance cloud solutions",
  publisher: { "@type": "Organization", "@id": `${SITE_URL}/#organization` },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
  inLanguage: "en-US",
};

// ─── NetSuite page metadata map ───────────────────────────────────────────────
export const NETSUITE_PAGES: Record<
  string,
  { title: string; description: string; keywords: string[]; category: string; publishedTime: string }
> = {
  "/netsuite-suitesuccess": {
    title: "NetSuite SuiteSuccess — 100-Day ERP Go-Live | AGSuite",
    description:
      "Go live with NetSuite in 100 days using SuiteSuccess. Pre-built KPIs, industry best practices, and 300+ dashboards. AGSuite certified NetSuite partner.",
    keywords: ["NetSuite SuiteSuccess", "NetSuite implementation", "ERP go-live", "NetSuite partner India", "SuiteSuccess methodology", "AGSuite NetSuite"],
    category: "ERP Software",
    publishedTime: "2024-01-10T00:00:00Z",
  },
  "/netsuite-planning-and-budgeting": {
    title: "NetSuite Planning & Budgeting Software | Forecasting & Financial Planning",
    description:
      "Improve financial planning with NetSuite Planning and Budgeting. Automate forecasting, scenario planning, and what-if analysis to make smarter business decisions.",
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
    publishedTime: "2024-01-12T00:00:00Z",
  },
  "/netsuite-erp-solution": {
    title: "NetSuite ERP Solution Provider | ERP Software | ERP System | AGSuite Technologies",
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
    publishedTime: "2024-01-15T00:00:00Z",
  },
  "/netsuite-crm-solutions": {
    title: "NetSuite CRM Solutions — Sales Force Automation & Customer Management | AGSuite",
    description:
      "Unify sales, marketing, and support with NetSuite CRM. Real-time pipeline visibility, partner relationship management, and native ERP integration.",
    keywords: ["NetSuite CRM", "sales force automation", "NetSuite customer management", "CRM ERP integration", "AGSuite CRM"],
    category: "CRM Software",
    publishedTime: "2024-01-18T00:00:00Z",
  },
  "/netsuite-accounting-services": {
    title: "NetSuite Accounting Services — Automated Financial Management | AGSuite",
    description:
      "Automate accounts payable, receivable, and close processes with NetSuite Accounting. Multi-subsidiary, multi-currency, and real-time financial reporting.",
    keywords: ["NetSuite accounting", "cloud accounting software", "NetSuite financials", "automated accounting", "AGSuite accounting"],
    category: "Accounting Services",
    publishedTime: "2024-01-20T00:00:00Z",
  },
  "/netsuite-analytics-warehouse": {
    title: "NetSuite Analytics Warehouse — Business Intelligence & Reporting | AGSuite",
    description:
      "Unlock deeper insights with NetSuite Analytics Warehouse. Pre-built workbooks, AI-driven insights, and enterprise BI from your NetSuite data.",
    keywords: ["NetSuite Analytics Warehouse", "NetSuite BI", "business intelligence NetSuite", "data warehouse NetSuite", "AGSuite analytics"],
    category: "Business Intelligence",
    publishedTime: "2024-01-22T00:00:00Z",
  },
  "/netsuite-business-intelligence": {
    title: "NetSuite Business Intelligence | BI Software | NetSuite Partner",
    description:
      "AGSuite Technologies provides NetSuite Business Intelligence (BI) solutions to help businesses analyze data, improve decisions, and boost performance.",
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
    publishedTime: "2024-01-25T00:00:00Z",
  },
  "/netsuite-suite-commerce-site-builder": {
    title: "NetSuite SuiteCommerce — Unified B2C & B2B eCommerce | AGSuite",
    description:
      "Build powerful eCommerce experiences with NetSuite SuiteCommerce. Native ERP integration, real-time inventory, and seamless customer portal.",
    keywords: ["NetSuite SuiteCommerce", "NetSuite ecommerce", "B2B ecommerce ERP", "SuiteCommerce Site Builder", "AGSuite ecommerce"],
    category: "eCommerce Software",
    publishedTime: "2024-01-28T00:00:00Z",
  },
  "/netsuite-open-air-solution": {
    title: "NetSuite OpenAir — Professional Services Automation | AGSuite",
    description:
      "Optimize project delivery and resource utilization with NetSuite OpenAir. Time tracking, project accounting, resource management, and billing — fully integrated.",
    keywords: ["NetSuite OpenAir", "professional services automation", "PSA software", "project management ERP", "AGSuite OpenAir"],
    category: "PSA Software",
    publishedTime: "2024-02-01T00:00:00Z",
  },
  "/service-resource-planning": {
    title: "NetSuite Service Resource Planning — SRP for Services Businesses | AGSuite",
    description:
      "Align projects, resources, and financials with NetSuite Service Resource Planning. Real-time profitability and utilization for services organizations.",
    keywords: ["NetSuite SRP", "service resource planning", "professional services ERP", "resource management", "AGSuite SRP"],
    category: "ERP Software",
    publishedTime: "2024-02-05T00:00:00Z",
  },
  "/global-business-management": {
    title: "NetSuite Global Business Management — Multi-Currency & Multi-Subsidiary | AGSuite",
    description:
      "Manage global operations from one platform. NetSuite GBM supports multi-currency, multi-subsidiary, and local compliance for international businesses.",
    keywords: ["NetSuite global business management", "multi-subsidiary ERP", "NetSuite multi-currency", "international ERP", "AGSuite GBM"],
    category: "ERP Software",
    publishedTime: "2024-02-10T00:00:00Z",
  },
  "/india-localization-for-netsuite": {
    title: "NetSuite India Localization — GST, TDS & Indian Compliance | AGSuite",
    description:
      "Full GST, TDS, and Indian statutory compliance built into NetSuite. AGSuite India Localization keeps your NetSuite ERP fully compliant with Indian tax regulations.",
    keywords: ["NetSuite India localization", "NetSuite GST", "NetSuite TDS", "Indian ERP compliance", "AGSuite India"],
    category: "ERP Software",
    publishedTime: "2024-02-15T00:00:00Z",
  },
  "/artificial-intelligence-ai": {
    title: "NetSuite AI & Machine Learning — Intelligent ERP Automation | AGSuite",
    description:
      "Leverage AI in NetSuite for predictive analytics, intelligent automation, and smarter decision-making. AGSuite helps you activate NetSuite's AI capabilities.",
    keywords: ["NetSuite AI", "artificial intelligence ERP", "NetSuite machine learning", "intelligent automation", "AGSuite AI NetSuite"],
    category: "Artificial Intelligence",
    publishedTime: "2024-02-20T00:00:00Z",
  },
  "/why-netsuite": {
    title: "Why NetSuite? — The #1 Cloud ERP Platform | AGSuite",
    description:
      "Discover why 37,000+ organizations worldwide trust NetSuite. Scalable, real-time, and built for the cloud — the only ERP you'll ever need.",
    keywords: ["why NetSuite", "NetSuite vs SAP", "best cloud ERP", "NetSuite benefits", "AGSuite NetSuite"],
    category: "ERP Software",
    publishedTime: "2024-02-25T00:00:00Z",
  },
};

// ─── Zoho page metadata map ───────────────────────────────────────────────────
export const ZOHO_PAGES: Record<
  string,
  { title: string; description: string; keywords: string[]; category: string; publishedTime: string }
> = {
  "/zoho-crm": {
    title: "Zoho CRM — Sales Automation & Customer Management | AGSuite",
    description:
      "Boost sales by 45% with Zoho CRM. Lead management, AI-powered insights (Zia), omnichannel communication, and workflow automation. AGSuite Zoho Advanced Partner.",
    keywords: ["Zoho CRM", "CRM software India", "Zoho CRM implementation", "sales automation", "AGSuite Zoho CRM"],
    category: "CRM Software",
    publishedTime: "2024-01-05T00:00:00Z",
  },
  "/zoho-books-accounting-software": {
    title: "Zoho Books — Cloud Accounting Software | AGSuite",
    description:
      "Automate accounting, GST invoicing, and financial reporting with Zoho Books. Simple, powerful, and fully GST-compliant accounting for Indian businesses.",
    keywords: ["Zoho Books", "cloud accounting India", "GST accounting software", "Zoho Books implementation", "AGSuite Zoho Books"],
    category: "Accounting Software",
    publishedTime: "2024-01-08T00:00:00Z",
  },
  "/zoho-one": {
    title: "Zoho One — The Operating System for Business | AGSuite",
    description:
      "Run your entire business on Zoho One — 45+ integrated apps for sales, marketing, HR, finance, and more. One subscription, zero data silos.",
    keywords: ["Zoho One", "Zoho all-in-one", "business software suite", "Zoho One implementation", "AGSuite Zoho One"],
    category: "Business Suite",
    publishedTime: "2024-01-10T00:00:00Z",
  },
  "/zoho-crm-plus": {
    title: "Zoho CRM Plus — Unified Customer Experience Platform | AGSuite",
    description:
      "Deliver exceptional customer experiences with Zoho CRM Plus. Sales, marketing, support, and analytics — unified in one platform.",
    keywords: ["Zoho CRM Plus", "customer experience platform", "unified CRM", "AGSuite Zoho CRM Plus"],
    category: "CRM Software",
    publishedTime: "2024-01-12T00:00:00Z",
  },
  "/zoho-analytics": {
    title: "Zoho Analytics — Self-Service BI & Data Analytics | AGSuite",
    description:
      "Transform raw data into actionable insights with Zoho Analytics. AI-driven reports, drag-and-drop dashboards, and 500+ data connectors.",
    keywords: ["Zoho Analytics", "business intelligence software", "data analytics India", "Zoho BI", "AGSuite Zoho Analytics"],
    category: "Business Intelligence",
    publishedTime: "2024-01-15T00:00:00Z",
  },
  "/zoho-desk": {
    title: "Zoho Desk — Customer Support & Help Desk Software | AGSuite",
    description:
      "Deliver faster, smarter customer support with Zoho Desk. Ticketing, AI automation, multi-channel support, and advanced SLA management.",
    keywords: ["Zoho Desk", "help desk software", "customer support software", "Zoho Desk implementation", "AGSuite Zoho Desk"],
    category: "Customer Support",
    publishedTime: "2024-01-18T00:00:00Z",
  },
  "/zoho-people": {
    title: "Zoho People — HR Management Software | AGSuite",
    description:
      "Manage your entire HR lifecycle with Zoho People. Leave, attendance, performance, onboarding, and payroll — all in one cloud HR platform.",
    keywords: ["Zoho People", "HR software India", "HRMS software", "Zoho People implementation", "AGSuite Zoho People"],
    category: "HR Software",
    publishedTime: "2024-01-20T00:00:00Z",
  },
  "/zoho-payroll": {
    title: "Zoho Payroll — Automated Payroll Software for India | AGSuite",
    description:
      "Process accurate payroll with Zoho Payroll. Fully compliant with Indian payroll laws, TDS, PF, ESI, and seamlessly integrated with Zoho Books.",
    keywords: ["Zoho Payroll", "payroll software India", "Indian payroll compliance", "Zoho Payroll implementation", "AGSuite Zoho Payroll"],
    category: "Payroll Software",
    publishedTime: "2024-01-22T00:00:00Z",
  },
  "/zoho-inventory-software": {
    title: "Zoho Inventory — Inventory & Order Management Software | AGSuite",
    description:
      "Track stock, manage orders, and sync with sales channels using Zoho Inventory. Multi-warehouse support, barcode scanning, and real-time visibility.",
    keywords: ["Zoho Inventory", "inventory management software", "order management", "Zoho Inventory implementation", "AGSuite Zoho Inventory"],
    category: "Inventory Software",
    publishedTime: "2024-01-25T00:00:00Z",
  },
  "/zoho-projects": {
    title: "Zoho Projects — Project Management Software | AGSuite",
    description:
      "Plan, track, and deliver projects on time with Zoho Projects. Gantt charts, timesheets, milestones, and team collaboration built for every team size.",
    keywords: ["Zoho Projects", "project management software", "Zoho Projects implementation", "team collaboration tools", "AGSuite Zoho Projects"],
    category: "Project Management",
    publishedTime: "2024-01-28T00:00:00Z",
  },
  "/zoho-marketing-automation": {
    title: "Zoho Marketing Automation — B2B Marketing Platform | AGSuite",
    description:
      "Nurture leads and drive conversions with Zoho Marketing Automation. Email campaigns, lead scoring, journey builder, and CRM integration.",
    keywords: ["Zoho Marketing Automation", "B2B marketing software", "lead nurturing", "marketing automation India", "AGSuite Zoho marketing"],
    category: "Marketing Software",
    publishedTime: "2024-02-01T00:00:00Z",
  },
  "/zoho-recruit-hiring-software": {
    title: "Zoho Recruit — Applicant Tracking & Recruitment Software | AGSuite",
    description:
      "Hire smarter and faster with Zoho Recruit. Applicant tracking, AI-powered sourcing, interview scheduling, and offer management in one platform.",
    keywords: ["Zoho Recruit", "applicant tracking system", "ATS software India", "recruitment software", "AGSuite Zoho Recruit"],
    category: "HR Software",
    publishedTime: "2024-02-05T00:00:00Z",
  },
  "/zoho-expense": {
    title: "Zoho Expense — Automated Expense Management | AGSuite",
    description:
      "Streamline expense reporting and approvals with Zoho Expense. Receipt scanning, GST compliance, multi-level approval, and finance integration.",
    keywords: ["Zoho Expense", "expense management software", "expense reporting India", "Zoho Expense implementation", "AGSuite Zoho Expense"],
    category: "Expense Management",
    publishedTime: "2024-02-10T00:00:00Z",
  },
  "/zoho-flow": {
    title: "Zoho Flow — No-Code Business Process Automation | AGSuite",
    description:
      "Automate workflows across 800+ apps with Zoho Flow. No-code integration builder, trigger-based automation, and powerful data transformation.",
    keywords: ["Zoho Flow", "workflow automation", "no-code automation", "Zoho integration", "AGSuite Zoho Flow"],
    category: "Automation Software",
    publishedTime: "2024-02-15T00:00:00Z",
  },
  "/zoho-creator": {
    title: "Zoho Creator — Low-Code App Development Platform | AGSuite",
    description:
      "Build custom business apps 10x faster with Zoho Creator. Drag-and-drop builder, mobile-ready apps, and seamless Zoho ecosystem integration.",
    keywords: ["Zoho Creator", "low-code app builder", "custom app development", "Zoho Creator implementation", "AGSuite Zoho Creator"],
    category: "App Development",
    publishedTime: "2024-02-20T00:00:00Z",
  },
  "/zoho-erp": {
    title: "Zoho ERP — Integrated ERP Solution for SMEs | AGSuite",
    description:
      "Run a unified ERP on the Zoho platform. Finance, inventory, HR, sales, and operations — connected across the Zoho ecosystem for seamless business management.",
    keywords: ["Zoho ERP", "ERP software India", "SME ERP solution", "Zoho integrated ERP", "AGSuite Zoho ERP"],
    category: "ERP Software",
    publishedTime: "2024-02-25T00:00:00Z",
  },
  "/zoho-finance-plus": {
    title: "Zoho Finance Plus — Unified Financial Operations Suite | AGSuite",
    description:
      "Manage your complete financial stack with Zoho Finance Plus. Books, Inventory, Expense, Payroll, and Subscriptions — one suite, zero friction.",
    keywords: ["Zoho Finance Plus", "financial management software", "Zoho accounting suite", "AGSuite Zoho Finance"],
    category: "Financial Suite",
    publishedTime: "2024-03-01T00:00:00Z",
  },
  "/zoho-people-plus": {
    title: "Zoho People Plus — Complete HR Suite | AGSuite",
    description:
      "Manage the entire employee lifecycle with Zoho People Plus. HR, payroll, LMS, performance, and expense in one unified HR platform.",
    keywords: ["Zoho People Plus", "HR management suite", "employee management software", "AGSuite Zoho HR"],
    category: "HR Suite",
    publishedTime: "2024-03-05T00:00:00Z",
  },
  "/zoho-bigin": {
    title: "Zoho Bigin — Simple CRM for Small Businesses | AGSuite",
    description:
      "The simplest CRM for small businesses. Zoho Bigin helps you manage pipelines, contacts, and deals without the complexity of a full CRM.",
    keywords: ["Zoho Bigin", "small business CRM", "simple CRM software", "pipeline management", "AGSuite Zoho Bigin"],
    category: "CRM Software",
    publishedTime: "2024-03-10T00:00:00Z",
  },
  "/zoho-mail": {
    title: "Zoho Mail — Business Email Hosting | AGSuite",
    description:
      "Secure, ad-free business email with Zoho Mail. Custom domain email, team collaboration, and deep integration with the Zoho ecosystem.",
    keywords: ["Zoho Mail", "business email hosting", "custom domain email", "Zoho Mail setup", "AGSuite Zoho Mail"],
    category: "Email Hosting",
    publishedTime: "2024-03-15T00:00:00Z",
  },
  "/zoho-workplace": {
    title: "Zoho Workplace — Team Collaboration & Productivity Suite | AGSuite",
    description:
      "Collaborate seamlessly with Zoho Workplace. Email, chat, docs, meetings, and intranet — a complete productivity suite for modern teams.",
    keywords: ["Zoho Workplace", "team collaboration software", "productivity suite", "Zoho Workplace implementation", "AGSuite Zoho Workplace"],
    category: "Productivity Suite",
    publishedTime: "2024-03-20T00:00:00Z",
  },
  "/zoho-social-media-management": {
    title: "Zoho Social — Social Media Management Software | AGSuite",
    description:
      "Schedule posts, monitor brand mentions, and analyze social media performance with Zoho Social. Multi-channel publishing and team collaboration built in.",
    keywords: ["Zoho Social", "social media management", "social media scheduling", "Zoho Social implementation", "AGSuite Zoho Social"],
    category: "Social Media Software",
    publishedTime: "2024-03-25T00:00:00Z",
  },
  "/zoho-sites": {
    title: "Zoho Sites — Website Builder for Business | AGSuite",
    description:
      "Build professional websites without code using Zoho Sites. Responsive templates, SEO tools, and native Zoho CRM integration for lead capture.",
    keywords: ["Zoho Sites", "website builder", "no-code website", "Zoho Sites implementation", "AGSuite Zoho Sites"],
    category: "Website Builder",
    publishedTime: "2024-04-01T00:00:00Z",
  },
  "/zoho-commerce": {
    title: "Zoho Commerce — Online Store & eCommerce Platform | AGSuite",
    description:
      "Launch your online store with Zoho Commerce. Product management, secure checkout, inventory sync, and built-in marketing tools for growing businesses.",
    keywords: ["Zoho Commerce", "ecommerce platform India", "online store builder", "Zoho ecommerce"],
    category: "eCommerce Software",
    publishedTime: "2024-04-05T00:00:00Z",
  },
  "/zoho-marketing-plus": {
    title: "Zoho Marketing Plus — Unified Marketing Platform | AGSuite",
    description:
      "Plan, execute, and measure all your marketing from one platform with Zoho Marketing Plus. Email, social, events, webinars, and analytics — unified.",
    keywords: ["Zoho Marketing Plus", "unified marketing platform", "marketing software India", "AGSuite Zoho Marketing Plus"],
    category: "Marketing Suite",
    publishedTime: "2024-04-10T00:00:00Z",
  },
  "/zoho-salesiq-implementation": {
    title: "Zoho SalesIQ — Live Chat & Visitor Tracking | AGSuite",
    description:
      "Engage website visitors in real time with Zoho SalesIQ. AI chatbots, visitor tracking, lead scoring, and seamless CRM integration.",
    keywords: ["Zoho SalesIQ", "live chat software", "website visitor tracking", "Zoho SalesIQ implementation", "AGSuite SalesIQ"],
    category: "Engagement Software",
    publishedTime: "2024-04-15T00:00:00Z",
  },
  "/zoho-salesiq-marketing": {
    title: "Zoho SalesIQ for Marketing — Visitor Intelligence & Engagement | AGSuite",
    description:
      "Use Zoho SalesIQ to turn website visitors into leads. Behavioral tracking, intelligent chatbots, and marketing automation triggers.",
    keywords: ["Zoho SalesIQ marketing", "visitor intelligence", "marketing chatbot", "AGSuite SalesIQ marketing"],
    category: "Marketing Software",
    publishedTime: "2024-04-18T00:00:00Z",
  },
  "/zoho-fsm": {
    title: "Zoho FSM — Field Service Management Software | AGSuite",
    description:
      "Manage field technicians, work orders, and service appointments with Zoho FSM. Real-time scheduling, mobile app, and customer communication built in.",
    keywords: ["Zoho FSM", "field service management", "work order management", "Zoho FSM implementation", "AGSuite Zoho FSM"],
    category: "FSM Software",
    publishedTime: "2024-04-20T00:00:00Z",
  },
  "/zoho-sprint": {
    title: "Zoho Sprints — Agile Project Management Tool | AGSuite",
    description:
      "Plan and deliver sprints faster with Zoho Sprints. Scrum boards, backlogs, retrospectives, and seamless Zoho Projects integration.",
    keywords: ["Zoho Sprints", "agile project management", "scrum software", "Zoho Sprints implementation", "AGSuite Zoho Sprints"],
    category: "Project Management",
    publishedTime: "2024-04-22T00:00:00Z",
  },
  "/zoho-catalyst": {
    title: "Zoho Catalyst — Serverless App Development Platform | AGSuite",
    description:
      "Build and deploy scalable serverless applications with Zoho Catalyst. Cloud functions, data store, AI components, and full CI/CD pipeline.",
    keywords: ["Zoho Catalyst", "serverless development", "cloud app platform", "Zoho Catalyst implementation", "AGSuite Zoho Catalyst"],
    category: "Cloud Platform",
    publishedTime: "2024-04-25T00:00:00Z",
  },
  "/zoho-it-management": {
    title: "Zoho IT Management — IT Operations & Asset Management | AGSuite",
    description:
      "Simplify IT operations with Zoho's IT management suite. Asset tracking, service desk, patch management, and remote monitoring in one platform.",
    keywords: ["Zoho IT management", "IT asset management", "IT operations software", "AGSuite Zoho IT"],
    category: "IT Management",
    publishedTime: "2024-04-28T00:00:00Z",
  },
  "/zoho-creator-it-management": {
    title: "Zoho Creator for IT — Custom IT Apps & Automation | AGSuite",
    description:
      "Build custom IT management apps with Zoho Creator. Automate IT processes, create service portals, and integrate with your existing IT stack.",
    keywords: ["Zoho Creator IT", "IT app builder", "custom IT automation", "AGSuite Zoho Creator IT"],
    category: "App Development",
    publishedTime: "2024-05-01T00:00:00Z",
  },
  "/zoho-expense-finance": {
    title: "Zoho Expense for Finance — Enterprise Expense Management | AGSuite",
    description:
      "Control company spending with Zoho Expense for Finance. Budget enforcement, policy compliance, GST input credits, and ERP integration.",
    keywords: ["Zoho Expense finance", "enterprise expense management", "finance expense software", "AGSuite Zoho Expense"],
    category: "Expense Management",
    publishedTime: "2024-05-05T00:00:00Z",
  },
  "/zoho-payroll-finance": {
    title: "Zoho Payroll for Finance — Compliant Payroll Processing | AGSuite",
    description:
      "Ensure payroll accuracy and compliance with Zoho Payroll. Automated TDS, PF, ESI computation and direct salary disbursement for Indian businesses.",
    keywords: ["Zoho Payroll finance", "payroll compliance India", "automated payroll", "AGSuite Zoho Payroll"],
    category: "Payroll Software",
    publishedTime: "2024-05-10T00:00:00Z",
  },
};

// ─── Industry page metadata map ───────────────────────────────────────────────
export const INDUSTRY_PAGES: Record<
  string,
  { title: string; description: string; keywords: string[]; category: string; publishedTime: string }
> = {
  "/zoho/industries/advertising-marketing": {
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
  "/zoho/industries/it-services": {
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
  "/zoho/industries/manufacturing": {
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
  "/zoho/industries/media": {
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
  "/zoho/industries/retail": {
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
  "/zoho/industries/software": {
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
  "/zoho/industries/transport": {
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
  "/zoho/industries/wholesale": {
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
  "/netsuite/industries/advertising-marketing": {
    "title": "NetSuite for Advertising & Marketing Agencies | AGSuite",
    "description": "Run a more profitable agency with a cloud ERP purpose-built for project-based billing, resource management, and client financial visibility. NetSuite empowers a",
    "keywords": [
      "Advertising & Marketing",
      "ERP Solutions",
      "Cloud Business Software",
      "AGSuite Industries"
    ],
    "category": "Industry Solutions",
    "publishedTime": "2024-01-01T00:00:00Z"
  },
  "/netsuite/industries/it-services": {
    "title": "Scale Your IT Services Business Without Limits | AGSuite",
    "description": "Optimize billable utilization, accelerate project delivery, and automate complex billing with the #1 cloud ERP built for IT and consulting firms.",
    "keywords": [
      "IT & Professional Services",
      "ERP Solutions",
      "Cloud Business Software",
      "AGSuite Industries"
    ],
    "category": "Industry Solutions",
    "publishedTime": "2024-01-01T00:00:00Z"
  },
  "/netsuite/industries/manufacturing": {
    "title": "Build the Future of Your Factory Floor with NetSuite | AGSuite",
    "description": "Streamline discrete manufacturing, tighten supply chains, and gain real-time visibility with the #1 cloud ERP built for modern manufacturers.",
    "keywords": [
      "Manufacturing",
      "ERP Solutions",
      "Cloud Business Software",
      "AGSuite Industries"
    ],
    "category": "Industry Solutions",
    "publishedTime": "2024-01-01T00:00:00Z"
  },
  "/netsuite/industries/media": {
    "title": "NetSuite for Media & Publishing Companies | AGSuite",
    "description": "Manage subscriptions, advertising revenue, content licensing, and royalties on a single cloud ERP. NetSuite gives media and publishing companies the financial a",
    "keywords": [
      "Media & Publishing",
      "ERP Solutions",
      "Cloud Business Software",
      "AGSuite Industries"
    ],
    "category": "Industry Solutions",
    "publishedTime": "2024-01-01T00:00:00Z"
  },
  "/netsuite/industries/retail": {
    "title": "NetSuite for Retail & E-Commerce | AGSuite",
    "description": "Power your omnichannel retail operation from a single cloud platform. NetSuite connects your online store, physical locations, inventory, and financials — givin",
    "keywords": [
      "Retail & E-Commerce",
      "ERP Solutions",
      "Cloud Business Software",
      "AGSuite Industries"
    ],
    "category": "Industry Solutions",
    "publishedTime": "2024-01-01T00:00:00Z"
  },
  "/netsuite/industries/software": {
    "title": "NetSuite for Software & Technology Companies | AGSuite",
    "description": "Scale your SaaS, software, or tech company with a cloud ERP built for subscription revenue, ASC 606 compliance, and rapid growth. NetSuite is the platform of ch",
    "keywords": [
      "Software & Technology",
      "ERP Solutions",
      "Cloud Business Software",
      "AGSuite Industries"
    ],
    "category": "Industry Solutions",
    "publishedTime": "2024-01-01T00:00:00Z"
  },
  "/netsuite/industries/transport": {
    "title": "NetSuite for Transportation & Logistics | AGSuite",
    "description": "Gain end-to-end visibility across your logistics network. NetSuite connects fleet management, freight billing, warehouse operations, and financials in one cloud",
    "keywords": [
      "Transportation & Logistics",
      "ERP Solutions",
      "Cloud Business Software",
      "AGSuite Industries"
    ],
    "category": "Industry Solutions",
    "publishedTime": "2024-01-01T00:00:00Z"
  },
  "/netsuite/industries/wholesale": {
    "title": "Expand Your Distribution Enterprise Without Limits | AGSuite",
    "description": "Eliminate supply chain bottlenecks and accelerate order fulfillment with the world’s #1 cloud ERP tailored for wholesale distributors.",
    "keywords": [
      "Wholesale Distribution",
      "ERP Solutions",
      "Cloud Business Software",
      "AGSuite Industries"
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
    "description": "Discover Zoho cloud solutions tailored for your industry. Advertising, Media, Retail, Manufacturing, and more. Zoho Advanced Partner implementation.",
    "keywords": ["Zoho Industries", "CRM Solutions", "Industry Automation", "Zoho Partner"],
    "category": "Industry Solutions",
    "publishedTime": "2024-01-01T00:00:00Z"
  }
};
