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
      <Script id="gtm-init" strategy="afterInteractive">
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

      {/* Google Ads */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-10876325873"
        strategy="lazyOnload"
        onError={(e) => {
          console.warn("Google Ads script failed to load:", e);
        }}
      />
      <Script id="google-ads-init" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-10876325873');
        `}
      </Script>

      {/* Zoho SalesIQ */}
      <Script
        id="zsiqchat"
        strategy="lazyOnload"
        onError={(e) => {
          console.warn("Zoho SalesIQ script failed to load:", e);
        }}
      >
        {`
          var $zoho=$zoho || {};
          $zoho.salesiq = $zoho.salesiq || {
            widgetcode: "siq35ed179fbb63b96bebd9bc669caab3cc7ab9252873ae18a7fd3bac7692c8ff19",
            values:{},
            ready:function(){}
          };
          var d=document;
          var s=d.createElement("script");
          s.type="text/javascript";
          s.id="zsiqscript";
          s.defer=true;
          s.src="https://salesiq.zohopublic.in/widget";
          var t=d.getElementsByTagName("script")[0];
          t.parentNode.insertBefore(s,t);
        `}
      </Script>

      {/* Zoho CRM Analytics script */}
      <Script
        src="https://crm.zoho.in/crm/javascript/zcga.js"
        strategy="lazyOnload"
        onError={(e) => {
          console.warn("Zoho Analytics script failed to load:", e);
        }}
      />
    </>
  );
}
