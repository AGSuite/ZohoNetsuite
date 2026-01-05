import React from 'react';
import { Metadata } from 'next';
import NetSuiteIntegrationClient from './NetSuiteIntegrationClient';

export const metadata: Metadata = {
  title: "NetSuite Integration Services | AGSuite Technologies",
  description: "Connect NetSuite with your entire business landscape. We build robust, real-time integrations for a unified data experience.",
};

export default function IntegrationServicesPage() {
  return <NetSuiteIntegrationClient />;
}
