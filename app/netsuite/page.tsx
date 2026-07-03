import Link from 'next/link';
import dynamic from 'next/dynamic';
import { getPosts } from '../../sanity/lib/fetch'
import { NSHero } from './components/NSHero';
import { Metadata } from 'next';
import LazySection from '../components/shared/LazySection';

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
  loading: () => <div className="h-[950px] lg:h-[600px] w-full bg-slate-50/50 animate-pulse rounded-[3rem] mx-auto max-w-7xl my-16" />
});
const NSKeyCapabilities = dynamic(() => import('./components/NSKeyCapabilities').then(mod => mod.default), {
  loading: () => <div className="h-[1000px] lg:h-[700px] w-full bg-slate-50/50 animate-pulse rounded-[3rem] mx-auto max-w-7xl my-16" />
});
const NSCaseStudiesSlider = dynamic(() => import('./components/NSCaseStudiesSlider').then(mod => mod.default), {
  loading: () => <div className="h-[800px] lg:h-[500px] w-full bg-slate-50/50 animate-pulse rounded-[3rem] mx-auto max-w-7xl my-16" />
});
const NSDashboardHero = dynamic(() => import('./components/NSDashboardHero').then(mod => mod.default), {
  loading: () => <div className="h-[500px] w-full bg-slate-50/50 animate-pulse rounded-[3rem] mx-auto max-w-7xl my-16" />
});
const NSIntegrationDesign = dynamic(() => import('./components/NSIntegrationDesign').then(mod => mod.default), {
  loading: () => <div className="h-[500px] w-full bg-slate-50/50 animate-pulse rounded-[3rem] mx-auto max-w-7xl my-16" />
});
const NSLeadMagnet = dynamic(() => import('./components/NSLeadMagnet').then(mod => mod.default), {
  loading: () => <div className="h-[600px] w-full bg-slate-900/60 animate-pulse my-0" />
});
const NSChecklistLeadMagnet = dynamic(() => import('./components/NSChecklistLeadMagnet').then(mod => mod.default), {
  loading: () => <div className="h-[600px] w-full bg-slate-900/60 animate-pulse my-0" />
});

const NSIndustries = dynamic(() => import('./components/NSIndustries').then(mod => mod.default), {
  loading: () => <div className="h-[1400px] lg:h-[600px] w-full bg-slate-50/50 animate-pulse rounded-[3rem] mx-auto max-w-7xl my-16" />
});
const Testimonials = dynamic(() => import('../components/home/Testimonials').then(mod => mod.Testimonials), {
  loading: () => <div className="h-[1000px] lg:h-[600px] w-full bg-slate-50/50 animate-pulse rounded-[3rem] mx-auto max-w-7xl my-16" />
});
const FAQ = dynamic(() => import('../components/home/FAQ').then(mod => mod.FAQ), {
  loading: () => <div className="h-[1000px] lg:h-[600px] w-full bg-slate-50/50 animate-pulse rounded-[2rem] mx-auto max-w-7xl my-16" />
});
const NSServices = dynamic(() => import('./components/NSServices').then(mod => mod.default), {
  loading: () => <div className="h-[2200px] lg:h-[800px] w-full bg-slate-50/50 animate-pulse rounded-[3rem] mx-auto max-w-7xl my-16" />
});
const NetsuiteCTA = dynamic(() => import('./components/NetsuiteCTA').then(mod => mod.default), {
  loading: () => <div className="h-[300px] w-full bg-slate-50/50 animate-pulse rounded-[3rem] mx-auto max-w-7xl my-16" />
});
const NSWhyChooseUs = dynamic(() => import('./components/NSWhyChooseUs').then(mod => mod.default), {
  loading: () => <div className="h-[1500px] lg:h-[700px] w-full bg-slate-50/50 animate-pulse rounded-[3rem] mx-auto max-w-7xl my-16" />
});
const NSBlogsSlider = dynamic(() => import('./components/NSBlogsSlider').then(mod => mod.default), {
  loading: () => <div className="h-[400px] w-full bg-slate-50/50 animate-pulse rounded-[3rem] mx-auto max-w-7xl my-16" />
});
const NSTestimonialSection = dynamic(() => import('./components/NSTestimonialSection').then(mod => mod.default), {
  loading: () => <div className="h-[400px] w-full bg-slate-50/50 animate-pulse rounded-[3rem] mx-auto max-w-7xl my-16" />
});
const NSCustomerSuccess = dynamic(() => import('./components/NSCustomerSuccess').then(mod => mod.default), {
  loading: () => <div className="h-[1200px] lg:h-[600px] w-full bg-slate-50/50 animate-pulse rounded-[3rem] mx-auto max-w-7xl my-16" />
});
const FooterContactForm = dynamic(() => import('@/app/components/shared/FooterContactForm').then(mod => mod.default), {
  loading: () => <div className="h-[1200px] lg:h-[800px] w-full bg-slate-50/50 animate-pulse rounded-[3rem] mx-auto max-w-7xl my-16" />
});


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

      <LazySection height="600px">
        <NSMetrics />
      </LazySection>

      <LazySection height="600px">
        <NSCustomerSuccess />
      </LazySection>

      <LazySection height="500px">
        <NSCaseStudiesSlider />
      </LazySection>

      <LazySection height="500px">
        <NSIntegrationDesign />
      </LazySection>

      <LazySection height="600px">
        <NSLeadMagnet />
      </LazySection>

      <LazySection height="700px">
        <NSKeyCapabilities />
      </LazySection>

      <LazySection height="600px">
        <NSChecklistLeadMagnet />
      </LazySection>

      <LazySection height="800px">
        <NSServices />
      </LazySection>

      <LazySection height="600px">
        <NSIndustries />
      </LazySection>

      <LazySection height="300px">
        <NetsuiteCTA />
      </LazySection>

      <LazySection height="700px">
        <NSWhyChooseUs />
      </LazySection>

      <LazySection height="400px">
        <NSBlogsSlider blogs={blogs} variant="small" />
      </LazySection>

      <LazySection height="600px">
        <FAQ variant="netsuite" />
      </LazySection>

      <LazySection height="800px">
        <FooterContactForm platform="NetSuite" />
      </LazySection>
    </div>
  );
}
