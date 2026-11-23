import { getPosts } from '../../sanity/lib/fetch'
import { NSHero } from './components/NSHero';
import NSPageClient from './components/NSPageClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Oracle NetSuite ERP Solutions | AGSuite Technologies",
  description: "Scale your business with the world's #1 Cloud ERP. AGSuite offers expert NetSuite implementation, integration, and managed services.",
  alternates: { canonical: "https://www.agsuitetech.com/netsuite" },
  openGraph: {
    title: "NetSuite ERP Solutions | AGSuite Technologies",
    description: "Cloud ERP for Fast-Growing Companies. Run your entire business in the cloud.",
    url: "https://www.agsuitetech.com/netsuite",
    images: ["/images/Background/herobluebg.webp"],
  },
};

export default async function NetSuitePage() {
  const blogs = await getPosts();

  return (
    <div className="relative">
      <NSHero />

      <NSPageClient blogs={blogs} />
    </div>
  );
}
