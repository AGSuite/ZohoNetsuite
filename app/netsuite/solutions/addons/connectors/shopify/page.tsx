import React from 'react';
import { Metadata } from 'next';
import NetSuiteShopifyClient from './NetSuiteShopifyClient';

export const metadata: Metadata = {
  title: "NetSuite Shopify Connector | AGSuiteTechnologies",
  description: "Automate your e-commerce operations. Sync orders, inventory, and customers between Shopify and NetSuite seamlessly.",
};

export default function ShopifyConnectorPage() {
  return <NetSuiteShopifyClient />;
}
