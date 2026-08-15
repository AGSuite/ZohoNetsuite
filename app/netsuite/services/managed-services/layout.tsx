import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Managed IT & Cloud Services | AGSuite Technologies',
  description:
    'AGSuite Technologies offers Managed IT & Cloud Services including 24/7 monitoring, proactive maintenance, cloud infrastructure, and IT support.',
  alternates: {
    canonical: 'https://agsuitetech.com/managed-services/',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'AGSuite',
    title: 'Managed IT & Cloud Services | AGSuite Technologies',
    description:
      'AGSuite Technologies offers Managed IT & Cloud Services including 24/7 monitoring, proactive maintenance, cloud infrastructure, and IT support.',
    url: 'https://agsuitetech.com/managed-services/',
    images: [
      {
        url: 'https://agsuitetech.com/wp-content/uploads/2024/09/logo-img.png',
        alt: 'AGSuite Technologies Managed Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Managed IT & Cloud Services | AGSuite Technologies',
    description:
      'AGSuite Technologies offers Managed IT & Cloud Services including 24/7 monitoring, proactive maintenance, cloud infrastructure, and IT support.',
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
      '@id': 'https://agsuitetech.com/managed-services/',
      url: 'https://agsuitetech.com/managed-services/',
      name: 'Managed IT & Cloud Services | AGSuite Technologies',
      description:
        'AGSuite Technologies offers Managed IT & Cloud Services including 24/7 monitoring, proactive maintenance, cloud infrastructure, and IT support.',
      isPartOf: {
        '@id': 'https://agsuitetech.com/#website',
      },
      breadcrumb: {
        '@id': 'https://agsuitetech.com/managed-services/#breadcrumb',
      },
      inLanguage: 'en-US',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://agsuitetech.com/managed-services/#breadcrumb',
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
          name: 'Managed Services',
          item: 'https://agsuitetech.com/managed-services/',
        },
      ],
    },
  ],
};

export default function ManagedServicesLayout({
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
