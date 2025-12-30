import React from 'react';
import PageTemplate from '../../../../components/PageTemplate';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "NetSuite India Localization | GST & E-Invoicing | AGSuite",
  description: "Stay compliant with Indian tax laws. Automated GST reporting, E-invoicing, and TDS management within NetSuite.",
};

export default function NetSuiteIndiaLocalizationPage() {
  return (
    <PageTemplate
      theme="netsuite"
      title="Compliance for India with NetSuite"
      subtitle="India Localization"
      description="Navigate the complexities of Indian tax regulations with confidence. From GST and TDS to E-invoicing, our NetSuite localization keeps you 100% compliant."
      ctaText="Ensure Compliance"
      isSolutionPage={true}
      heroImage="/images/Dashboard/india-hero.webp"
      heroCardTitle="GST Ready"
      heroCardText="Automated GST returns and reconciliation."
      heroQuote="Focus on growth; leave Indian compliance to NetSuite."
      features={[
        {
          title: "GST Automation",
          description: "Generate GSTR-1, GSTR-3B, and GSTR-9 reports directly from your NetSuite transactions with ease.",
          image: "/images/Solutions/gst.webp",
          cardTitle: "Total Tax",
          cardText: "End-to-end GST reporting automation.",
          quote: "Tax compliance is the foundation of institutional trust."
        },
        {
          title: "E-Invoicing & E-Way Bill",
          description: "Seamlessly generate and register E-invoices and E-way bills through direct API integration with the NIC portal.",
          image: "/images/Solutions/einvoicing.webp",
          cardTitle: "API Connect",
          cardText: "Real-time registration for every shipment.",
          quote: "Real-time compliance is the goal of modern trade."
        }
      ]}
    />
  );
}
