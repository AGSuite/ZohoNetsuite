import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AGSuite Technologies: Integration Services | Integration Solutions',
  description:
    "Discover AGSuite Technologies' Integration Services, specializing in System Integration, Software Integration, Data Integration, and Integration Solutions for seamless business operations.",
  alternates: {
    canonical: 'https://agsuitetech.com/integration-services/',
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
    title: 'AGSuite Technologies: Integration Services | Integration Solutions',
    description:
      "Discover AGSuite Technologies' Integration Services, specializing in System Integration, Software Integration, Data Integration, and Integration Solutions for seamless business operations.",
    url: 'https://agsuitetech.com/integration-services/',
    images: [
      {
        url: 'https://agsuitetech.com/wp-content/uploads/2024/09/logo-img.png',
        alt: 'AGSuite Technologies',
      },
    ],
    modifiedTime: '2026-03-26T13:22:29+00:00',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AGSuite Technologies: Integration Services | Integration Solutions',
    description:
      "Discover AGSuite Technologies' Integration Services, specializing in System Integration, Software Integration, Data Integration, and Integration Solutions for seamless business operations.",
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
      '@id': 'https://agsuitetech.com/integration-services/',
      url: 'https://agsuitetech.com/integration-services/',
      name: 'AGSuite Technologies: Integration Services | Integration Solutions',
      description:
        "Discover AGSuite Technologies' Integration Services, specializing in System Integration, Software Integration, Data Integration, and Integration Solutions for seamless business operations.",
      dateModified: '2026-03-26T13:22:29+00:00',
      isPartOf: {
        '@id': 'https://agsuitetech.com/#website',
      },
      breadcrumb: {
        '@id': 'https://agsuitetech.com/integration-services/#breadcrumb',
      },
      inLanguage: 'en-US',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://agsuitetech.com/integration-services/#breadcrumb',
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
          name: 'Integration Services',
          item: 'https://agsuitetech.com/integration-services/',
        },
      ],
    },
  ],
};

export default function IntegrationServicesLayout({
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
