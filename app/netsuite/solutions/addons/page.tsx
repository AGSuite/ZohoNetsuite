import React from 'react';
import { Metadata } from 'next';
import NetSuiteAddonsClient from './components/NetSuiteAddonsClient';

export const metadata: Metadata = {
  title: "NetSuite Add-Ons & Extensions | AGSuite Technologies",
  description: "Extend NetSuite capabilities with localized solutions, e-commerce connectors, and automation tools.",
};

export default function NetSuiteAddonsPage() {
  return <NetSuiteAddonsClient />;
}
