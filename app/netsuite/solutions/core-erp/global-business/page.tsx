import React from 'react';
import PageTemplate from '../../../../components/PageTemplate';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "NetSuite Global Business Management | OneWorld | AGSuite",
  description: "Manage multiple subsidiaries, currencies, and tax regulations with NetSuite OneWorld.",
};

export default function NetSuiteGlobalBusinessPage() {
  return (
    <PageTemplate
      theme="netsuite"
      title="Global Scale with OneWorld"
      subtitle="Multinational Management"
      description="Run your global business from a single platform. NetSuite OneWorld handles multiple countries, currencies, languages, and tax laws with ease."
      ctaText="Go Global Today"
      isSolutionPage={true}
      heroImage="/images/Dashboard/global-hero.webp"
      heroCardTitle="OneWorld"
      heroCardText="Unified global operations in one system."
      heroQuote="The world is smaller and more manageable with NetSuite OneWorld."
      features={[
        {
          title: "Subsidiary Management",
          description: "Manage hundreds of subsidiaries across different regions with localized reporting and accounting.",
          image: "/images/Solutions/subsidiary.webp",
          cardTitle: "Local & Global",
          cardText: "Reporting at every level of the organization.",
          quote: "Unity across borders creates immense business value."
        },
        {
          title: "Currency Management",
          description: "Automatically handle 190+ currencies and real-time exchange rate updates.",
          image: "/images/Solutions/currency.webp",
          cardTitle: "Multi-Currency",
          cardText: "Real-time FX rate management.",
          quote: "Financial consistency in every corner of the world."
        },
        {
          title: "Global Compliance",
          description: "Stay compliant with local tax laws (GST, VAT, etc.) in every country you operate in.",
          image: "/images/Solutions/compliance.webp",
          cardTitle: "Audit Ready",
          cardText: "Always compliant with local regulations.",
          quote: "Risk mitigation is the key to successful global expansion."
        }
      ]}
    />
  );
}
