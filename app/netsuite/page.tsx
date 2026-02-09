import Link from 'next/link';
import dynamic from 'next/dynamic';
import { NSHero } from './components/NSHero';
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

const NSMetrics = dynamic(() => import('./components/NSMetrics').then(mod => mod.default), {
  loading: () => <div className="h-96 bg-gray-50/50 animate-pulse rounded-[3rem] mx-auto max-w-7xl my-16" />
});
const NSKeyCapabilities = dynamic(() => import('./components/NSKeyCapabilities').then(mod => mod.default));
const NSDashboardHero = dynamic(() => import('./components/NSDashboardHero').then(mod => mod.default));

const NSIndustries = dynamic(() => import('./components/NSIndustries').then(mod => mod.default));
const Testimonials = dynamic(() => import('../components/home/Testimonials').then(mod => mod.Testimonials));
const FAQ = dynamic(() => import('../components/home/FAQ').then(mod => mod.FAQ));
const NSServices = dynamic(() => import('./components/NSServices').then(mod => mod.default));
const NetsuiteCTA = dynamic(() => import('./components/NetsuiteCTA').then(mod => mod.default));
// const NSHowItWorks = dynamic(() => import('./components/NSHowItWorks').then(mod => mod.default));
const NSWhyChooseUs = dynamic(() => import('./components/NSWhyChooseUs').then(mod => mod.default));
const NSTestimonialSection = dynamic(() => import('./components/NSTestimonialSection').then(mod => mod.default));
const NSCustomerSuccess = dynamic(() => import('./components/NSCustomerSuccess').then(mod => mod.default));
const ContactFormDesign4 = dynamic(() => import('./components/ContactFormDesign4').then(mod => mod.default));


export default function NetSuitePage() {
  return (
    <div className="relative">
      <NSHero
        title="NetSuite Solutions"
        subtitle="Enterprise ERP & CRM Platform"
        description="Transform your enterprise with Oracle NetSuite's comprehensive cloud platform. Streamline operations, gain real-time insights, and scale your business with integrated ERP, CRM, and e-commerce solutions designed for growing enterprises."
        ctaText="Explore Solutions"
        ctaHref="/netsuite/solutions"
      />

      <NSMetrics />
      <NSCustomerSuccess />

      <NSKeyCapabilities />
      {/* <NSDashboardHero /> */}

      {/* Key Solutions Grid (Existing) */}



      <NSServices />

      <NSIndustries />

      <NetsuiteCTA />

      {/* <NSHowItWorks /> */}

      <NSWhyChooseUs />

      <NSTestimonialSection />





      <FAQ variant="netsuite" />

      <ContactFormDesign4 />
    </div>
  );
}
