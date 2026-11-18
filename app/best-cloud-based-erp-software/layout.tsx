import React from 'react';
import Script from 'next/script';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NetSuite ERP & CRM Implementation - AGSuite Technologies',
  description: 'AGSuite Technologies is NetSuite One-Stop-Shop which helps clients in achieving their targets.',
  keywords: [
    'NetSuite ERP',
    'NetSuite Implementation Partner',
    'Best Cloud ERP Software',
    'Oracle NetSuite CRM',
    'AGSuite Technologies',
    'Cloud-based ERP Solution',
  ],
  openGraph: {
    title: 'NetSuite ERP & CRM Implementation - AGSuite Technologies',
    description: 'AGSuite Technologies is NetSuite One-Stop-Shop which helps clients in achieving their targets.',
    url: 'https://www.agsuitetech.com/best-cloud-based-erp-software',
    siteName: 'AGSuite Technologies',
    type: 'website',
  },
};

export default function LandingLayout({
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

      {/* Zoho SalesIQ */}
      <script
        dangerouslySetInnerHTML={{
          __html:
            'window.$zoho=window.$zoho || {};$zoho.salesiq=$zoho.salesiq||{ready:function(){}}',
        }}
      />
      <script
        id="zsiqscript"
        src="https://salesiq.zohopublic.in/widget?wc=siq35ed179fbb63b96bebd9bc669caab3cc7ab9252873ae18a7fd3bac7692c8ff19"
        defer
      />

      {/* Zoho CRM Analytics script */}
      <Script
        src="https://crm.zoho.in/crm/javascript/zcga.js"
        strategy="lazyOnload"
      />
    </>
  );
}
