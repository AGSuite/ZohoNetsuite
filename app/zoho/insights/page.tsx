import React from 'react';
import { Metadata } from 'next';
import { getZohoPosts } from '../../../sanity/lib/zohoFetch';
import ZohoInsightsClient from './components/ZohoInsightsClient';

export const metadata: Metadata = {
  title: "Zoho Insights & Resources | AGSuite Technologies",
  description: "Explore our latest Zoho blogs, case studies, and achievements. Stay updated with the latest in Zoho cloud solutions.",
};

export default async function ZohoInsightsPage() {
  const blogs = await getZohoPosts();
  return <ZohoInsightsClient blogs={blogs} />;
}
