import React from 'react';
import { Metadata } from 'next';
import { getZohoPosts } from '../../../sanity/lib/zohoFetch';
import ZohoInsightsClient from './components/ZohoInsightsClient';

export const metadata: Metadata = {
  title: "Zoho Insights & Resources | AGSuite Technologies",
  description: "Explore our latest Zoho blogs, case studies, webinars, and achievements. Stay ahead with expert Zoho solutions.",
};

export default async function ZohoInsightsPage() {
  const blogs = await getZohoPosts();
  return <ZohoInsightsClient blogs={blogs} />;
}
