import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AGSuite Technologies: Training Services | Technical Training',
  description:
    "Enhance skills with AGSuite Technologies' Training Services, offering Professional Development, Technical Training, and Employee Training for optimal growth.",
  alternates: {
    canonical: 'https://agsuitetech.com/training-services/',
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
    title: 'AGSuite Technologies: Training Services | Technical Training',
    description:
      "Enhance skills with AGSuite Technologies' Training Services, offering Professional Development, Technical Training, and Employee Training for optimal growth.",
    url: 'https://agsuitetech.com/training-services/',
    images: [
      {
        url: 'https://agsuitetech.com/wp-content/uploads/2024/09/logo-img.png',
        alt: 'AGSuite Technologies',
      },
    ],
    modifiedTime: '2024-11-20T13:14:37+00:00',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AGSuite Technologies: Training Services | Technical Training',
    description:
      "Enhance skills with AGSuite Technologies' Training Services, offering Professional Development, Technical Training, and Employee Training for optimal growth.",
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
      '@id': 'https://agsuitetech.com/training-services/',
      url: 'https://agsuitetech.com/training-services/',
      name: 'AGSuite Technologies: Training Services | Technical Training',
      description:
        "Enhance skills with AGSuite Technologies' Training Services, offering Professional Development, Technical Training, and Employee Training for optimal growth.",
      dateModified: '2024-11-20T13:14:37+00:00',
      isPartOf: {
        '@id': 'https://agsuitetech.com/#website',
      },
      breadcrumb: {
        '@id': 'https://agsuitetech.com/training-services/#breadcrumb',
      },
      inLanguage: 'en-US',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://agsuitetech.com/training-services/#breadcrumb',
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
          name: 'Training Services',
          item: 'https://agsuitetech.com/training-services/',
        },
      ],
    },
  ],
};

import Script from 'next/script';

export default function TrainingServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        id="training-services-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
