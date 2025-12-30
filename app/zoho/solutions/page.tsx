import React from 'react';
import { Metadata } from 'next';
import ZohoSolutionsClient from './components/ZohoSolutionsClient';

export const metadata: Metadata = {
  title: "Zoho Business Solutions | AGSuite Technologies",
  description: "Comprehensive Zoho solutions for sales, HR, finance, and operations. Transform your business with the world's most versatile cloud suite.",
};

export default function ZohoSolutionsPage() {
  return <ZohoSolutionsClient />;
}
