import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AGSuite Technologies: Digital Transformation Solutions | Digital Integration',
  description:
    'Unlock Digital Transformation with AGSuite Technologies. Expertise in Digital Strategy, Digital Innovation, Business Transformation, and Digital Integration for business excellence.',
  alternates: {
    canonical: 'https://agsuitetech.com/digital-transformation/',
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
    title: 'AGSuite Technologies: Digital Transformation Solutions | Digital Integration',
    description:
      'Unlock Digital Transformation with AGSuite Technologies. Expertise in Digital Strategy, Digital Innovation, Business Transformation, and Digital Integration for business excellence.',
    url: 'https://agsuitetech.com/digital-transformation/',
    images: [
      {
        url: 'https://agsuitetech.com/wp-content/uploads/2024/09/logo-img.png',
        alt: 'AGSuite Technologies',
      },
    ],
    modifiedTime: '2025-02-25T11:52:21+00:00',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AGSuite Technologies: Digital Transformation Solutions | Digital Integration',
    description:
      'Unlock Digital Transformation with AGSuite Technologies. Expertise in Digital Strategy, Digital Innovation, Business Transformation, and Digital Integration for business excellence.',
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
      '@id': 'https://agsuitetech.com/digital-transformation/',
      url: 'https://agsuitetech.com/digital-transformation/',
      name: 'AGSuite Technologies: Digital Transformation Solutions | Digital Integration',
      description:
        'Unlock Digital Transformation with AGSuite Technologies. Expertise in Digital Strategy, Digital Innovation, Business Transformation, and Digital Integration for business excellence.',
      datePublished: '2024-03-09T10:16:03+00:00',
      dateModified: '2025-02-25T11:52:21+00:00',
      isPartOf: {
        '@id': 'https://agsuitetech.com/#website',
      },
      breadcrumb: {
        '@id': 'https://agsuitetech.com/digital-transformation/#breadcrumb',
      },
      inLanguage: 'en-US',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://agsuitetech.com/digital-transformation/#breadcrumb',
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
          name: 'Digital Transformation',
          item: 'https://agsuitetech.com/digital-transformation/',
        },
      ],
    },
  ],
};

export default function DigitalTransformationLayout({
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
