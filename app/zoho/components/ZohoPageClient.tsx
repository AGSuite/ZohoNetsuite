"use client";

import React from "react";
import dynamic from "next/dynamic";
import LazySection from "@/app/components/shared/LazySection";

const ZohoMetrics = dynamic(() => import('./ZohoMetrics'), {
  ssr: false,
  loading: () => <div className="h-[950px] lg:h-[600px] w-full bg-slate-50/50 animate-pulse rounded-[3rem] mx-auto max-w-7xl my-16" />
});
const ZohoCustomerSuccess = dynamic(() => import('./ZohoCustomerSuccess'), {
  ssr: false,
  loading: () => <div className="h-[1200px] lg:h-[600px] w-full bg-slate-50/50 animate-pulse rounded-[3rem] mx-auto max-w-7xl my-16" />
});
const ZohoCaseStudiesSlider = dynamic(() => import('./ZohoCaseStudiesSlider'), {
  ssr: false,
  loading: () => <div className="h-[800px] lg:h-[500px] w-full bg-slate-50/50 animate-pulse rounded-[3rem] mx-auto max-w-7xl my-16" />
});
const ZohoKeyCapabilities = dynamic(() => import('./ZohoKeyCapabilities'), {
  ssr: false,
  loading: () => <div className="h-[1000px] lg:h-[700px] w-full bg-slate-50/50 animate-pulse rounded-[3rem] mx-auto max-w-7xl my-16" />
});
const ZohoServices = dynamic(() => import('./ZohoServices'), {
  ssr: false,
  loading: () => <div className="h-[2200px] lg:h-[800px] w-full bg-slate-50/50 animate-pulse rounded-[3rem] mx-auto max-w-7xl my-16" />
});
const ZohoIndustries = dynamic(() => import('./ZohoIndustries'), {
  ssr: false,
  loading: () => <div className="h-[1400px] lg:h-[600px] w-full bg-slate-50/50 animate-pulse rounded-[3rem] mx-auto max-w-7xl my-16" />
});
const ZohoCTA = dynamic(() => import('./ZohoCTA'), {
  ssr: false,
  loading: () => <div className="h-[300px] w-full bg-slate-50/50 animate-pulse rounded-[3rem] mx-auto max-w-7xl my-16" />
});
const ZohoWhyChooseUs = dynamic(() => import('./ZohoWhyChooseUs'), {
  ssr: false,
  loading: () => <div className="h-[1500px] lg:h-[700px] w-full bg-slate-50/50 animate-pulse rounded-[3rem] mx-auto max-w-7xl my-16" />
});
const ZohoBlogsSlider = dynamic(() => import('./ZohoBlogsSlider'), {
  ssr: false,
  loading: () => <div className="h-[1000px] lg:h-[500px] w-full bg-slate-50/50 animate-pulse rounded-[3rem] mx-auto max-w-7xl my-16" />
});
const FAQ = dynamic(() => import('../../components/home/FAQ').then(mod => mod.FAQ), {
  ssr: false,
  loading: () => <div className="h-[1000px] lg:h-[600px] w-full bg-slate-50/50 animate-pulse rounded-[2rem] mx-auto max-w-7xl my-16" />
});
const FooterContactForm = dynamic(() => import('@/app/components/shared/FooterContactForm'), {
  ssr: false,
  loading: () => <div className="h-[1200px] lg:h-[800px] w-full bg-slate-50/50 animate-pulse rounded-[3rem] mx-auto max-w-7xl my-16" />
});

interface ZohoPageClientProps {
  blogs: any[];
}

export default function ZohoPageClient({ blogs }: ZohoPageClientProps) {
  return (
    <>
      <LazySection height="600px">
        <ZohoMetrics />
      </LazySection>

      <LazySection height="600px">
        <ZohoCustomerSuccess />
      </LazySection>

      <LazySection height="500px">
        <ZohoCaseStudiesSlider />
      </LazySection>

      <LazySection height="700px">
        <ZohoKeyCapabilities />
      </LazySection>

      <LazySection height="800px">
        <ZohoServices />
      </LazySection>

      <LazySection height="600px">
        <ZohoIndustries />
      </LazySection>

      <LazySection height="300px">
        <ZohoCTA />
      </LazySection>

      <LazySection height="700px">
        <ZohoWhyChooseUs />
      </LazySection>

      <LazySection height="500px">
        <ZohoBlogsSlider blogs={blogs} variant="small" />
      </LazySection>

      <LazySection height="600px">
        <FAQ variant="zoho" layout="sidebar" />
      </LazySection>

      <FooterContactForm platform="Zoho" />
    </>
  );
}
