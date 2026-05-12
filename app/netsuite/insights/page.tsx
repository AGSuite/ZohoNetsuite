import React from 'react';
import { Metadata } from 'next';
import { getPosts } from '../../../sanity/lib/fetch';
import NetSuiteInsightsClient from './components/NetSuiteInsightsClient';

export const metadata: Metadata = {
  title: "NetSuite Insights & Resources | AGSuite Technologies",
  description: "Explore our latest blogs, case studies, webinars, and achievements. Use our pricing calculator to estimate your NetSuite ROI.",
};

export default async function InsightsPage() {
  const blogs = await getPosts();
  return <NetSuiteInsightsClient blogs={blogs} />;
}





