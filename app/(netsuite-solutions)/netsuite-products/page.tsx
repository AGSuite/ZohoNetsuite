import React from 'react';
import { Metadata } from 'next';
import NetSuiteSolutionsClient from '@/app/netsuite/solutions/components/NetSuiteSolutionsClient';

export const metadata: Metadata = {
  title: "Oracle NetSuite Business Solutions | AGSuite Technologies",
  description: "Explore our comprehensive range of Oracle NetSuite solutions including ERP, CRM, OneWorld, and Business Intelligence. Tailored to help your business scale.",
  alternates: {
    canonical: "https://agsuitetech.com/netsuite-products/",
  },
};

export default function NetSuiteProductsPage() {
  return <NetSuiteSolutionsClient />;
}
