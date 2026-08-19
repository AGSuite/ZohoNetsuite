import type { Metadata } from "next";
import LandingNavbar from "./components/LandingNavbar";
import LandingHero from "./components/LandingHero";
import LandingPlatformMetrics from "./components/LandingPlatformMetrics";
import LandingUnifiedSolution from "./components/LandingUnifiedSolution";
import LandingWhyNetSuite from "./components/LandingWhyNetSuite";
import LandingServicesIndustries from "./components/LandingServicesIndustries";
import LandingBenefitsPricingFAQ from "./components/LandingBenefitsPricingFAQ";
import LandingFooter from "./components/LandingFooter";

export const metadata: Metadata = {
  title: "Best Cloud-Based ERP Software | Oracle NetSuite Implementation Partner - AGSuite",
  description:
    "Optimize your business operations effortlessly with Oracle NetSuite, the #1 Cloud ERP solution. AGSuite Technologies provides certified NetSuite implementation, customization, integration, and managed support services.",
  keywords: [
    "best cloud based erp software",
    "oracle netsuite erp",
    "netsuite solution provider",
    "netsuite implementation partner",
    "cloud erp solution",
    "netsuite integration partner",
    "agsuite technologies",
  ],
  alternates: {
    canonical: "https://www.agsuitetech.com/best-cloud-based-erp-software/",
  },
  openGraph: {
    title: "Best Cloud-Based ERP Software | Oracle NetSuite Partner",
    description:
      "Optimize your business operations with Oracle NetSuite - the #1 cloud-based ERP & CRM platform. Certified NetSuite implementation partner.",
    url: "https://www.agsuitetech.com/best-cloud-based-erp-software/",
    type: "website",
    images: [
      {
        url: "/images/Dashboard/netsuite_executive_erp_dashboard.jpg",
        width: 1200,
        height: 630,
        alt: "Oracle NetSuite Cloud ERP Software",
      },
    ],
  },
};

export default function BestCloudBasedERPSoftwarePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-600 selection:text-white font-['DM_Sans',sans-serif]">
      {/* Dedicated Landing Page Navbar */}
      <LandingNavbar />

      {/* Main Landing Sections */}
      <main>
        {/* Hero Section with Contact Form */}
        <LandingHero />

        {/* Section 2 (#platform): Platform Overview, 8 Metrics, Central Dashboard, Client Logos */}
        <LandingPlatformMetrics />

        {/* Section 3: NetSuite ERP – Unified Cloud Solution (12 Core Modules Grid) */}
        <LandingUnifiedSolution />

        {/* Section 4 (#whyNetSuite): Why Choose NetSuite (Benefits, Challenges, ROI) & Business Grows Here CTA */}
        <LandingWhyNetSuite />

        {/* Section 5 (#businessGrow): Our NetSuite Services & 10 Industry Cards */}
        <LandingServicesIndustries />

        {/* Section 6 & 7 (#benefits, #ERPCost, #faq): Cloud ERP Benefits, Next AI CTA, Pricing Breakdown & FAQs */}
        <LandingBenefitsPricingFAQ />
      </main>

      {/* Dedicated Landing Page Footer */}
      <LandingFooter />
    </div>
  );
}
