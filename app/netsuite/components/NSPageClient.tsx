"use client";

import React from "react";
import dynamic from "next/dynamic";
import LazySection from "@/app/components/shared/LazySection";

const NSMetrics = dynamic(() => import('./NSMetrics'), {
  ssr: false,
  loading: () => <div className="h-[950px] lg:h-[600px] w-full bg-slate-50/50 animate-pulse rounded-[3rem] mx-auto max-w-7xl my-16" />
});
const NSKeyCapabilities = dynamic(() => import('./NSKeyCapabilities'), {
  ssr: false,
  loading: () => <div className="h-[1000px] lg:h-[700px] w-full bg-slate-50/50 animate-pulse rounded-[3rem] mx-auto max-w-7xl my-16" />
});
const NSCaseStudiesSlider = dynamic(() => import('./NSCaseStudiesSlider'), {
  ssr: false,
  loading: () => <div className="h-[800px] lg:h-[500px] w-full bg-slate-50/50 animate-pulse rounded-[3rem] mx-auto max-w-7xl my-16" />
});
const NSDashboardHero = dynamic(() => import('./NSDashboardHero'), {
  ssr: false,
  loading: () => <div className="h-[500px] w-full bg-slate-50/50 animate-pulse rounded-[3rem] mx-auto max-w-7xl my-16" />
});
const NSIntegrationDesign = dynamic(() => import('./NSIntegrationDesign'), {
  ssr: false,
  loading: () => <div className="h-[500px] w-full bg-slate-50/50 animate-pulse rounded-[3rem] mx-auto max-w-7xl my-16" />
});
const NSLeadMagnet = dynamic(() => import('./NSLeadMagnet'), {
  ssr: false,
  loading: () => <div className="h-[600px] w-full bg-slate-900/60 animate-pulse my-0" />
});
const NSChecklistLeadMagnet = dynamic(() => import('./NSChecklistLeadMagnet'), {
  ssr: false,
  loading: () => <div className="h-[600px] w-full bg-slate-900/60 animate-pulse my-0" />
});

const NSIndustries = dynamic(() => import('./NSIndustries'), {
  ssr: false,
  loading: () => <div className="h-[1400px] lg:h-[600px] w-full bg-slate-50/50 animate-pulse rounded-[3rem] mx-auto max-w-7xl my-16" />
});
const Testimonials = dynamic(() => import('../../components/home/Testimonials').then(mod => mod.Testimonials), {
  ssr: false,
  loading: () => <div className="h-[1000px] lg:h-[600px] w-full bg-slate-50/50 animate-pulse rounded-[3rem] mx-auto max-w-7xl my-16" />
});
const FAQ = dynamic(() => import('../../components/home/FAQ').then(mod => mod.FAQ), {
  ssr: false,
  loading: () => <div className="h-[1000px] lg:h-[600px] w-full bg-slate-50/50 animate-pulse rounded-[2rem] mx-auto max-w-7xl my-16" />
});
const NSServices = dynamic(() => import('./NSServices'), {
  ssr: false,
  loading: () => <div className="h-[2200px] lg:h-[800px] w-full bg-slate-50/50 animate-pulse rounded-[3rem] mx-auto max-w-7xl my-16" />
});
const NetsuiteCTA = dynamic(() => import('./NetsuiteCTA'), {
  ssr: false,
  loading: () => <div className="h-[300px] w-full bg-slate-50/50 animate-pulse rounded-[3rem] mx-auto max-w-7xl my-16" />
});
const NSWhyChooseUs = dynamic(() => import('./NSWhyChooseUs'), {
  ssr: false,
  loading: () => <div className="h-[1500px] lg:h-[700px] w-full bg-slate-50/50 animate-pulse rounded-[3rem] mx-auto max-w-7xl my-16" />
});
const NSBlogsSlider = dynamic(() => import('./NSBlogsSlider'), {
  ssr: false,
  loading: () => <div className="h-[400px] w-full bg-slate-50/50 animate-pulse rounded-[3rem] mx-auto max-w-7xl my-16" />
});
const NSTestimonialSection = dynamic(() => import('./NSTestimonialSection'), {
  ssr: false,
  loading: () => <div className="h-[400px] w-full bg-slate-50/50 animate-pulse rounded-[3rem] mx-auto max-w-7xl my-16" />
});
const NSCustomerSuccess = dynamic(() => import('./NSCustomerSuccess'), {
  ssr: false,
  loading: () => <div className="h-[1200px] lg:h-[600px] w-full bg-slate-50/50 animate-pulse rounded-[3rem] mx-auto max-w-7xl my-16" />
});
const FooterContactForm = dynamic(() => import('@/app/components/shared/FooterContactForm'), {
  ssr: false,
  loading: () => <div className="h-[1200px] lg:h-[800px] w-full bg-slate-50/50 animate-pulse rounded-[3rem] mx-auto max-w-7xl my-16" />
});

interface NSPageClientProps {
  blogs: any[];
}

export default function NSPageClient({ blogs }: NSPageClientProps) {
  return (
    <>
      <LazySection height="1200px">
        <section
          className="relative overflow-hidden font-['DM_Sans',sans-serif] pt-12 md:pt-16 pb-16 md:pb-24"
          style={{
            background: "radial-gradient(at 0% 82.58333206176758%, #4a055c 0px, transparent 50%), radial-gradient(at 97.58620673212512% 84.0833330154419%, #10011f 0px, transparent 50%), radial-gradient(at 10.73275845626305% 10.12499968210856%, #000000 0px, transparent 50%), radial-gradient(at 48.66379293902167% 89.91666634877524%, #1000ed 0px, transparent 50%), #021526"
          }}
        >
          {/* Continuous Square Grid Pattern Overlay */}
          <div
            className="absolute inset-0 z-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px"
            }}
          />

          <div className="relative z-10 space-y-12 md:space-y-16">
            <NSChecklistLeadMagnet hideBackground />
            <div className="w-full max-w-5xl mx-auto h-px bg-gradient-to-r from-transparent via-blue-400/20 via-purple-400/20 to-transparent" />
            <NSMetrics hideBackground />
          </div>
        </section>
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
    </>
  );
}
