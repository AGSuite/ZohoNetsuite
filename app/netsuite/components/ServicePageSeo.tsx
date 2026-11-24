import type { Metadata } from "next";

const SITE_URL = "https://www.agsuitetech.com";

type ServiceSeoConfig = {
  title: string;
  description: string;
  path: string;
  serviceName: string;
  image: string;
  keywords?: string[];
};

function absoluteUrl(path: string) {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function createServiceMetadata({
  title,
  description,
  path,
  image,
  keywords,
}: ServiceSeoConfig): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    // Preserve the exact approved title and prevent parent layout templates
    // from appending the brand name a second time.
    title: { absolute: title },
    description,
    keywords,
    alternates: { canonical: url },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: "AGSuite Technologies",
      title,
      description,
      url,
      images: [{ url: imageUrl, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export function ServicePageJsonLd({
  title,
  description,
  path,
  serviceName,
  image,
}: ServiceSeoConfig) {
  const url = absoluteUrl(path);
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: title,
        description,
        primaryImageOfPage: absoluteUrl(image),
        isPartOf: { "@id": `${SITE_URL}/#website` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        inLanguage: "en-US",
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: serviceName,
        description,
        url,
        provider: {
          "@type": "Organization",
          name: "AGSuite Technologies",
          url: SITE_URL,
        },
        areaServed: "Worldwide",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${SITE_URL}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "NetSuite",
            item: `${SITE_URL}/netsuite`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: serviceName,
            item: url,
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
