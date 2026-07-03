import React from "react";
import dynamic from "next/dynamic";
import { Metadata } from "next";
import AboutUsHero from "./AboutUsHero";
import NSNavbar from "../components/NSNavbar";

export const metadata: Metadata = {
  title: "About AGSuite Technologies | NetSuite Partner",
  description: "Learn about AGSuite Technologies, a certified Oracle NetSuite Partner. Explore our mission, vision, core values, and our global leadership team.",
  openGraph: {
    title: "About AGSuite Technologies | NetSuite Partner",
    description: "Certified NetSuite Partner - Empowering growth through integrated Cloud ERP solutions.",
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

      <NSNavbar />
      <main id="main" role="main" className="flex flex-col bg-white">
        <AboutUsHero />
        <AboutUsClient />
      </main>
    </>
  );
}
