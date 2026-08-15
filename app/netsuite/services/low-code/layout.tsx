import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AGSuite Technologies: Low-Code Application Development Solutions',
  description:
    "Explore AGSuite Technologies' Low-Code Application Development, offering top Low-Code Solutions and Application Development Software for seamless innovation.",
  alternates: {
    canonical: 'https://agsuitetech.com/low-code-application-development/',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  openGraph: {
    type: 'article',
    locale: 'en_US',
    siteName: 'AGSuite',
    title: 'AGSuite Technologies: Low-Code Application Development Solutions',
    description:
      "Explore AGSuite Technologies' Low-Code Application Development, offering top Low-Code Solutions and Application Development Software for seamless innovation.",
    url: 'https://agsuitetech.com/low-code-application-development/',
    images: [
      {
        url: 'https://agsuitetech.com/wp-content/uploads/2024/09/logo-img.png',
        alt: 'AGSuite Technologies',
      },
    ],
    modifiedTime: '2024-11-20T13:05:18+00:00',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AGSuite Technologies: Low-Code Application Development Solutions',
    description:
      "Explore AGSuite Technologies' Low-Code Application Development, offering top Low-Code Solutions and Application Development Software for seamless innovation.",
    images: ['https://agsuitetech.com/wp-content/uploads/2024/09/logo-img.png'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://agsuitetech.com/#website',
      url: 'https://agsuitetech.com/',
      name: 'AGSuite',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://agsuitetech.com/?s={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'WebPage',
      '@id': 'https://agsuitetech.com/low-code-application-development/',
      url: 'https://agsuitetech.com/low-code-application-development/',
      name: 'AGSuite Technologies: Low-Code Application Development Solutions',
      description:
        "Explore AGSuite Technologies' Low-Code Application Development, offering top Low-Code Solutions and Application Development Software for seamless innovation.",
      dateModified: '2024-11-20T13:05:18+00:00',
      isPartOf: {
        '@id': 'https://agsuitetech.com/#website',
      },
      breadcrumb: {
        '@id': 'https://agsuitetech.com/low-code-application-development/#breadcrumb',
      },
      inLanguage: 'en-US',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://agsuitetech.com/low-code-application-development/#breadcrumb',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://agsuitetech.com/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Low-Code Application Development',
          item: 'https://agsuitetech.com/low-code-application-development/',
        },
      ],
    },
  ],
};

export default function LowCodeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
