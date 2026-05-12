import React from 'react';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

export const metadata: Metadata = {
  title: "Zoho Business Solutions | AGSuite Technologies",
  description: "Comprehensive Zoho solutions for sales, HR, finance, and operations. Transform your business with the world's most versatile cloud suite.",
};

const ZohoSolutionsClient = dynamic(() => import('./components/ZohoSolutionsClient'), {
  loading: () => <div className="min-h-screen bg-[#000814] animate-pulse" />
});

export default function ZohoSolutionsPage() {
  return <ZohoSolutionsClient />;
}




