import { getPosts } from '../../sanity/lib/fetch'
import { NSHero } from './components/NSHero';
import NSPageClient from './components/NSPageClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Oracle NetSuite ERP Solutions | AGSuite Technologies",
  description: "Scale your business with the world's #1 Cloud ERP. AGSuite offers expert NetSuite implementation, integration, and managed services.",
  openGraph: {
    title: "NetSuite ERP Solutions | AGSuite Technologies",
    description: "Cloud ERP for Fast-Growing Companies. Run your entire business in the cloud.",
    images: ["/images/Background/herobluebg.webp"],
  },
};

export default async function NetSuitePage() {
  const blogs = await getPosts();

  return (
    <div className="relative">
      <NSHero
        title="NetSuite Solutions"
        subtitle="Enterprise ERP & CRM Platform"
        description="Transform your enterprise with Oracle NetSuite's comprehensive cloud platform. Streamline operations, gain real-time insights, and scale your business with integrated ERP, CRM, and e-commerce solutions designed for growing enterprises."
        ctaText="Explore Solutions"
        ctaHref="/netsuite/solutions"
      />

      <NSPageClient blogs={blogs} />
    </div>
  );
}
