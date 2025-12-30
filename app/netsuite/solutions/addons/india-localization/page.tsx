import React from 'react';
import PageTemplate from '../../../../components/PageTemplate';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "NetSuite India Localization Add-on | AGSuite",
  description: "Stay compliant with Indian tax laws. GST, TDS, and E-invoicing within NetSuite.",
};

export default function IndiaLocalizationAddonPage() {
  return (
    <PageTemplate
      theme="netsuite"
      title="India Compliance Add-on"
      subtitle="Localization"
      description="Specifically designed for businesses operating in India. A robust suite of tools to handle all statutory requirements."
      ctaText="Check Compliance Tools"
      isSolutionPage={true}
      heroImage="/images/Solutions/india-addon.webp"
      features={[
        { title: "Statutory Reports", description: "Standardized reports for Indian authorities.", image: "/images/Solutions/statutory.webp" },
        { title: "E-Invoicing", description: "High-volume e-invoice generation for daily ops.", image: "/images/Solutions/einvoicing-addon.webp" }
      ]}
    />
  );
}
