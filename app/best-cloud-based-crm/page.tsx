import type { Metadata } from "next";
import CrmNavbar from "./components/CrmNavbar";
import CrmHero from "./components/CrmHero";
import CrmClients from "./components/CrmClients";
import CrmWhatIs from "./components/CrmWhatIs";
import CrmMetrics from "./components/CrmMetrics";
import CrmModules from "./components/CrmModules";
import CrmBenefits from "./components/CrmBenefits";
import CrmServices from "./components/CrmServices";
import CrmPricing from "./components/CrmPricing";
import CrmFaq from "./components/CrmFaq";
import CrmFooter from "./components/CrmFooter";

export const metadata: Metadata = {
  title: "Best Cloud-Based CRM Software | Enterprise Sales Automation | AGSuite Technologies",
  description:
    "Accelerate revenue with the best cloud-based CRM software. AGSuite delivers enterprise-grade Zoho CRM implementation, automated sales pipelines, AI forecasting, and omnichannel customer engagement.",
  keywords: [
    "best cloud based crm",
    "cloud based crm software",
    "enterprise crm solutions",
    "zoho crm partner india",
    "zoho crm implementation",
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
        url: "/images/zoho-dashboards/zoho-crm-updated-dashboard.png",
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

        {/* Section 2: Clients (#clients) - 18 Trusted Enterprise Zoho Brands Marquee */}
        <CrmClients />

        {/* Section 3: What is Zoho CRM (#what-is) - Overview, Key Capabilities & Value Propositions */}
        <CrmWhatIs />

        {/* Section 4: Platform & Metrics (#platform) - Stats & 3D Tilt Zoho CRM Dashboard */}
        <CrmMetrics />

        {/* Section 5: Modules (#modules) - 12 Core Zoho CRM Modules */}
        <CrmModules />

        {/* Section 6: Benefits (#benefits) - 6 Key Business Benefits with Interactive Accordion */}
        <CrmBenefits />

        {/* Section 7: Services (#services) - Implementation, Integration, Customization, Support, Training, Consulting */}
        <CrmServices />

        {/* Section 8: Pricing (#pricing) - Transparent Tier Breakdown & License Advisory */}
        <CrmPricing />

        {/* Section 9: FAQ (#faq) - Frequently Asked Questions Accordion */}
        <CrmFaq />
      </main>

      {/* Landing Page Footer */}
      <CrmFooter />
    </div>
  );
}

