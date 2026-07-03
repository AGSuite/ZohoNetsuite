import React from "react";
import dynamic from "next/dynamic";
import { Metadata } from "next";
import AboutUsHero from "./AboutUsHero";
import ZohoNavbar from "../components/ZohoNavbar";

export const metadata: Metadata = {
  title: "About AGSuite Technologies | Zoho Premium Partner",
  description: "Learn about AGSuite Technologies, a certified Zoho Premium Partner. Explore our mission, vision, core values, and our global leadership team.",
  openGraph: {
    title: "About AGSuite Technologies | Zoho Partner",
    description: "Certified Zoho Premium Partner - Empowering growth through integrated cloud CRM and business systems.",
    images: ["/images/aboutus/aboutusbg.webp"],
  },
};

// Dynamically import client components to split bundle size
const AboutUsClient = dynamic(() => import("./AboutUsClient"), {
  loading: () => <div className="h-[2000px] w-full bg-slate-50/50 animate-pulse rounded-3xl" />
});

export default function AboutUsPage() {
  return (
    <>
      {/* Preload critical LCP background video poster */}
      <link
        rel="preload"
        href="/images/aboutus/aboutusbg.webp"
        as="image"
        fetchPriority="high"
      />

      <ZohoNavbar />
      <main id="main" role="main" className="flex flex-col bg-white">
        <AboutUsHero />
        <AboutUsClient />
      </main>
    </>
  );
}
