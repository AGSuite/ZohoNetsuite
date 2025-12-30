import React from 'react';
import PageTemplate from '../../../../components/PageTemplate';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "NetSuite E-Commerce | SuiteCommerce | AGSuite",
  description: "Unify your online and offline business with SuiteCommerce. A complete omnichannel e-commerce platform.",
};

export default function NetSuiteEcommercePage() {
  return (
    <PageTemplate
      theme="netsuite"
      title="Modern Omnichannel Commerce"
      subtitle="SuiteCommerce"
      description="Connect every aspect of your commerce business—from storefront to back-office. NetSuite SuiteCommerce provides a unified platform for B2B and B2C success."
      ctaText="Unify Your Commerce"
      isSolutionPage={true}
      heroImage="/images/Dashboard/ecommerce-hero.webp"
      heroCardTitle="Omnichannel"
      heroCardText="Seamless B2B & B2C experiences."
      heroQuote="Commerce is everywhere; your system should be too."
      features={[
        {
          title: "SuiteCommerce Advanced",
          description: "Build stunning, high-performance web stores that are fully integrated with your NetSuite ERP and CRM.",
          image: "/images/Solutions/sca.webp",
          cardTitle: "Pixel Perfect",
          cardText: "High-conversion storefront designs.",
          quote: "The interface is the first step in the customer journey."
        },
        {
          title: "Order Fulfillment",
          description: "Optimize shipping and fulfillment with a 360-degree view of inventory across all your digital and physical locations.",
          image: "/images/Solutions/fulfillment.webp",
          cardTitle: "Fulfillment Pro",
          cardText: "Scale deliveries with intelligent routing.",
          quote: "Fulfillment is the promise kept to the customer."
        }
      ]}
    />
  );
}
