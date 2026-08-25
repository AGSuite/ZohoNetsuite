import React from 'react';
import Script from 'next/script';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AGSuite India Localization SuiteApp for NetSuite | GST, e-Invoice & TDS Compliance',
  description:
    'Achieve 100% statutory compliance in India with AGSuite India Localization for Oracle NetSuite. Native GST, real-time e-Invoicing, e-Way Bill, TDS/TCS, MCA Audit Trail, and Schedule III reporting.',
  keywords: [
    'NetSuite India Localization',
    'NetSuite GST Solution',
    'NetSuite e-Invoicing India',
    'NetSuite e-Way Bill SuiteApp',
    'NetSuite TDS TCS Compliance',
    'NetSuite MCA Audit Trail Rule',
    'Oracle NetSuite India Partner',
    'AGSuite Technologies',
  ],
  alternates: {
    canonical: 'https://www.agsuitetech.com/agsuite-india-localization-for-netsuite/',
  },
  openGraph: {
    title: 'AGSuite India Localization SuiteApp for Oracle NetSuite',
    description:
      'Seamless GST, e-Invoicing, e-Way Bill, TDS, and MCA Audit Trail compliance built natively on Oracle NetSuite.',
    url: 'https://www.agsuitetech.com/agsuite-india-localization-for-netsuite/',
    siteName: 'AGSuite Technologies',
    type: 'website',
  },
};

export default function IndiaLocalizationLayout({
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

      {/* Zoho SalesIQ */}
      <Script id="zsiqchat" strategy="lazyOnload">
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
      />
    </>
  );
}
