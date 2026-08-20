import type { Metadata } from "next";
import LocalizationNavbar from "./components/LocalizationNavbar";
import LocalizationHero from "./components/LocalizationHero";
import LocalizationMetrics from "./components/LocalizationMetrics";
import LocalizationSimplify from "./components/LocalizationSimplify";
import LocalizationModules from "./components/LocalizationModules";
import LocalizationChallenges from "./components/LocalizationChallenges";
import LocalizationBenefits from "./components/LocalizationBenefits";
import LocalizationFooter from "./components/LocalizationFooter";

export const metadata: Metadata = {
  title: "AGSuite India Localization for Oracle NetSuite | 100% Tax & Statutory Compliance",
  description:
    "Automate Indian statutory tax compliance with AGSuite India Localization SuiteApp for Oracle NetSuite. 100% GST, e-Invoicing, e-Way Bill, TDS/TCS, MCA Audit Trail, and Schedule III reporting.",
  keywords: [
    "agsuite india localization for netsuite",
    "netsuite india localization suiteapp",
    "netsuite gst compliance india",
    "netsuite e invoicing suiteapp",
    "netsuite e way bill integration",
    "netsuite tds tcs 194q 206c",
    "netsuite mca audit trail rule 3",
    "oracle netsuite solution provider india",
    "agsuite technologies",
  ],
  alternates: {
    canonical: "https://www.agsuitetech.com/agsuite-india-localization-for-netsuite/",
  },
  openGraph: {
    title: "AGSuite India Localization for Oracle NetSuite",
    description:
      "Achieve 100% statutory tax and regulatory compliance with automated GST, e-Invoicing, e-Way Bill, TDS/TCS, and Schedule III reporting natively on NetSuite.",
    url: "https://www.agsuitetech.com/agsuite-india-localization-for-netsuite/",
    siteName: "AGSuite Technologies",
    type: "website",
    images: [
      {
        url: "/images/Dashboard/netsuite_executive_erp_dashboard.webp",
        width: 1200,
        height: 630,
        alt: "AGSuite India Localization SuiteApp for Oracle NetSuite",
      },
    ],
  },
};

export default function IndiaLocalizationLandingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-600 selection:text-white font-['DM_Sans',sans-serif]">
      {/* Landing Page Navbar with requested nav items */}
      <LocalizationNavbar />

      {/* Main Landing Sections */}
      <main>
        {/* Section 1: Home (#home) - Hero with Consultation Form */}
        <LocalizationHero />

        {/* Section 2: Platform & Metrics - Stats, India Localization Dashboard & Client Marquee */}
        <LocalizationMetrics />

        {/* Section 3: Simplify Compliance - NetSuite India Localization Circular Design & Overview */}
        <LocalizationSimplify />

        {/* Section 4: Modules (#modules) - India Localization for NetSuite Compliance Modules */}
        <LocalizationModules />

        {/* Section 5: Challenges (#challenges) - Addressing Global Challenges */}
        <LocalizationChallenges />

        {/* Section 6: Benefits (#benefits) - Value ROI, Metrics, FAQs & High-Impact CTA */}
        <LocalizationBenefits />
      </main>

      {/* Landing Page Footer */}
      <LocalizationFooter />
    </div>
  );
}
