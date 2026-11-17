import React from 'react';
import Script from 'next/script';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Cloud-Based CRM Software | Enterprise CRM Solutions | AGSuite Technologies',
  description:
    'Accelerate revenue growth with the best cloud-based CRM software. AGSuite delivers enterprise-grade Zoho CRM and Oracle NetSuite CRM implementation, sales pipeline automation, AI-powered forecasting, and omnichannel customer management.',
  keywords: [
    'best cloud based crm',
    'cloud based crm software',
    'enterprise crm solutions',
    'zoho crm partner india',
    'netsuite crm solutions',
    'sales pipeline automation',
    'ai crm software',
    'customer relationship management software',
    'agsuite technologies',
  ],
  alternates: {
    canonical: 'https://www.agsuitetech.com/best-cloud-based-crm/',
  },
  openGraph: {
    title: 'Best Cloud-Based CRM Software | AGSuite Technologies',
    description:
      'Empower your sales, marketing, and support teams with unified 360° cloud CRM solutions by AGSuite.',
    url: 'https://www.agsuitetech.com/best-cloud-based-crm/',
    siteName: 'AGSuite Technologies',
    type: 'website',
    images: [
      {
        url: '/images/Dashboard/CRM Dashboard_11zon.jpg',
        width: 1200,
        height: 630,
        alt: 'Best Cloud-Based CRM Software — AGSuite Technologies',
      },
    ],
  },
};

export default function BestCloudBasedCrmLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Google Tag Manager Script */}
      <Script id="gtm-init" strategy="lazyOnload">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-N59NPT6F');
        `}
      </Script>

      {/* GTM noscript */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-N59NPT6F"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>

      {children}

      {/* Zoho SalesIQ chatbot intentionally disabled on landing pages. */}

      {/* Zoho CRM Analytics script */}
      <Script
        src="https://crm.zoho.in/crm/javascript/zcga.js"
        strategy="lazyOnload"
      />
    </>
  );
}
