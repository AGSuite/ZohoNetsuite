import type { Metadata } from "next";
import CrmNavbar from "./components/CrmNavbar";
import CrmHero from "./components/CrmHero";
import CrmClients from "./components/CrmClients";
import CrmSimplify from "./components/CrmSimplify";
import CrmMetrics from "./components/CrmMetrics";
import CrmModules from "./components/CrmModules";
import CrmChallenges from "./components/CrmChallenges";
import CrmBenefits from "./components/CrmBenefits";
import CrmFooter from "./components/CrmFooter";

export const metadata: Metadata = {
  title: "Best Cloud-Based CRM Software | Enterprise Sales Automation | AGSuite Technologies",
  description:
    "Accelerate revenue with the best cloud-based CRM software. AGSuite delivers enterprise-grade Zoho CRM & Oracle NetSuite CRM implementation, automated sales pipelines, AI forecasting, and omnichannel support.",
  keywords: [
    "best cloud based crm",
    "cloud based crm software",
    "enterprise crm solutions",
    "zoho crm partner india",
    "netsuite crm solutions",
    "sales pipeline automation",
    "ai sales forecasting",
    "agsuite technologies",
  ],
  alternates: {
    canonical: "https://www.agsuitetech.com/best-cloud-based-crm/",
  },
  openGraph: {
    title: "Best Cloud-Based CRM Software | AGSuite Technologies",
    description:
      "Unify sales, marketing, and customer support with the best cloud-based CRM solutions by AGSuite.",
    url: "https://www.agsuitetech.com/best-cloud-based-crm/",
    siteName: "AGSuite Technologies",
    type: "website",
    images: [
      {
        url: "/images/Dashboard/CRM Dashboard_11zon.jpg",
        width: 1200,
        height: 630,
        alt: "Best Cloud-Based CRM Software — AGSuite Technologies",
      },
    ],
  },
};

export default function BestCloudBasedCrmPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-600 selection:text-white font-['DM_Sans',sans-serif] scroll-smooth">
      {/* Landing Page Sticky Navbar */}
      <CrmNavbar />

      {/* Main Landing Sections */}
      <main>
        {/* Section 1: Home (#home) - Hero with Consultation Form */}
        <CrmHero />

        {/* Section 2: Clients - Trusted Enterprise Brands White Theme with Gradient Background & Square Dotted Lines */}
        <CrmClients />

        {/* Section 3: Simplify Sales (#simplify) - 360° CRM Orbital Diagram & Value Proposition */}
        <CrmSimplify />

        {/* Section 4: Platform & Metrics (#platform) - Stats & 3D Tilt CRM Dashboard Frame */}
        <CrmMetrics />

        {/* Section 5: Modules (#modules) - Core Cloud CRM Modules */}
        <CrmModules />

        {/* Section 6: Challenges (#challenges) - Overcoming Sales & CRM Roadblocks */}
        <CrmChallenges />

        {/* Section 7: Benefits (#benefits & #faq) - Value ROI, FAQs Accordion & High-Impact CTA */}
        <CrmBenefits />
      </main>

      {/* Landing Page Footer */}
      <CrmFooter />
    </div>
  );
}
