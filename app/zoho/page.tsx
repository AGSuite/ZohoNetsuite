import Link from 'next/link';
import dynamic from 'next/dynamic';
import { getZohoPosts } from '../../sanity/lib/zohoFetch';

import { ZohoHero } from './components/ZohoHero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Zoho Solutions | CRM, HR, Finance & Automation | AGSuite",
  description: "Transform your business with Zoho's integrated suite of applications. AGSuite is an Advanced Zoho Partner providing implementation, customization, and support.",
  openGraph: {
    title: "Zoho Solutions | AGSuite Technologies",
    description: "Complete Business Software Suite - Streamline operations and boost productivity.",
    images: ["/images/Background/heropinkbg.webp"],
  },
};

const ZohoMetrics = dynamic(() => import('./components/ZohoMetrics').then(mod => mod.default), {
  loading: () => <div className="h-96 bg-gray-50/50 animate-pulse rounded-[3rem] mx-auto max-w-7xl my-16" />
});
const ZohoCustomerSuccess = dynamic(() => import('./components/ZohoCustomerSuccess').then(mod => mod.default));
const ZohoCaseStudiesSlider = dynamic(() => import('./components/ZohoCaseStudiesSlider').then(mod => mod.default));
const ZohoKeyCapabilities = dynamic(() => import('./components/ZohoKeyCapabilities').then(mod => mod.default));
const ZohoServices = dynamic(() => import('./components/ZohoServices').then(mod => mod.default));
const ZohoIndustries = dynamic(() => import('./components/ZohoIndustries').then(mod => mod.default));
const ZohoCTA = dynamic(() => import('./components/ZohoCTA').then(mod => mod.default));
const ZohoWhyChooseUs = dynamic(() => import('./components/ZohoWhyChooseUs').then(mod => mod.default));
const ZohoBlogsSlider = dynamic(() => import('./components/ZohoBlogsSlider').then(mod => mod.default));
const FAQ = dynamic(() => import('../components/home/FAQ').then(mod => mod.FAQ));
const FooterContactForm = dynamic(() => import('@/app/components/shared/FooterContactForm').then(mod => mod.default));

export default async function ZohoPage() {
  const blogs = await getZohoPosts();


  return (
    <div className="relative">
      <ZohoHero
        title="Zoho Solutions"
        subtitle="Complete Business Software Suite"
        description="Transform your business with Zoho's integrated suite of applications. From CRM and HR to finance and marketing, streamline operations and boost productivity with powerful, easy-to-use tools designed for modern businesses."
        ctaText="Explore Solutions"
        ctaHref="/zoho/solutions"
      />

      <ZohoMetrics />

      <ZohoCustomerSuccess />

      <ZohoCaseStudiesSlider />

      <ZohoKeyCapabilities />

      <ZohoServices />

      <ZohoIndustries />

      <ZohoCTA />

      <ZohoWhyChooseUs />

      <ZohoBlogsSlider blogs={blogs} variant="small" />

      <FAQ variant="zoho" layout="sidebar" />

      <FooterContactForm platform="Zoho" />
    </div>
  );
}
