"use client";

import IndustryTemplate, {
  IndustryPageData,
} from "@/app/netsuite/industries/_template/IndustryTemplate";
import { Zap, BarChart3, TrendingUp, Globe } from "lucide-react";





const data: IndustryPageData = {
  industry: "Software & Technology",
  heroTitle: "NetSuite for Software & Technology Industries",
  heroDescription:
    "Scale your SaaS, software, or tech industry with a cloud ERP built for subscription revenue, ASC 606 compliance, and rapid growth. NetSuite is the platform of choice for 8,000+ software industries worldwide.",
  heroImage: "/images/hero/industry_software_hero.png",
  heroCardTitle: "SaaS & Software ERP Platform",
  heroCardSub: "Subscriptions · ARR · Revenue Recognition · Billing",
  heroTopCardTitle: "8,000+ Software Industries",
  heroTopCardSub: "SaaS · ISV · Tech Startups · Scaleups",
  introImage: "/images/lap/lap8_11zon.webp",
  introTitle: "The ERP Built for High-Growth Tech Industries",
  introDescription:
    "Software and technology industries have unique financial complexity — subscription billing models, deferred revenue, complex revenue recognition under ASC 606 / IFRS 15, multi-currency operations, and the need for real-time ARR and MRR dashboards.",
  introDescription2:
    "NetSuite's SuiteSuccess for Software edition is pre-configured for ISVs, SaaS industries, and tech firms — with subscription billing, revenue recognition automation, and SaaS metrics built in from day one.",
  stats: [
    {
      icon: Zap,
      value: 8000,
      suffix: "+",
      label: "Tech Companies on NetSuite",
    },
    {
      icon: BarChart3,
      value: 50,
      suffix: "% ",
      label: "Faster Financial Close",
    },
    { icon: TrendingUp, value: 99, suffix: "%", label: "Revenue Accuracy" },
    { icon: Globe, value: 100, suffix: "+", label: "Currencies Supported" },
  ],
  benefits: [
    {
      title: "Subscription Billing & Management",
      description:
        "Automate complex subscription billing — monthly, annual, usage-based, and hybrid. Manage upgrades, downgrades, cancellations, and renewals with automated billing schedules.",
      image: "/images/benefits/benefit_crm_quote_to_cash.png",
    },
    {
      title: "SaaS Metrics & ARR/MRR Dashboards",
      description:
        "Real-time dashboards for ARR, MRR, churn, NRR, CAC, and LTV — giving your finance and leadership team the metrics that matter for SaaS growth.",
      image: "/images/benefits/benefit_financial_visibility.png",
    },
    {
      title: "Revenue Recognition (ASC 606)",
      description:
        "Automate ASC 606 / IFRS 15 compliant revenue recognition schedules for multi-element arrangements, term licences, and subscription contracts — without spreadsheets.",
      image: "/images/benefits/benefit_compliance_security.png",
    },
    {
      title: "Global Multi-Currency Operations",
      description:
        "Support global customers with 190+ currency handling, automated FX revaluation, and multi-subsidiary consolidation — ideal for tech industries expanding internationally.",
      image: "/images/benefits/benefit_gbm_currency.png",
    },
    {
      title: "Unified CRM & ERP",
      description:
        "Seamlessly connect sales with finance. From lead-to-quote to order-to-cash, everything lives in one system, eliminating manual data re-entry and sync errors.",
      image: "/images/benefits/benefit_unified_platform.png",
    },
  ],
  features: [
    {
      title: "Customized Solutions",
      description: "Tailored software and technology services to meet the unique needs and requirements of businesses.",
      image: "/images/Services/ns_service_low_code_new.png",
    },
    {
      title: "Integration Features",
      description: "Ensuring smooth integration with existing systems and platforms to ensure compatibility and seamless operation",
      image: "/images/Services/ns_service_integration_new.png",
    },
    {
      title: "Cloud-Based Solutions",
      description: "Offering cloud-based software and technology solutions that provide flexibility, accessibility, and scalability to businesses.",
      image: "/images/Services/ns_service_digital_transformation_new.png",
    },
    {
      title: "Global Business Management",
      description: "Seamlessly manage multiple currencies and reporting as your business expands.",
      image: "/images/Services/ns_service_managed_new.png",
    },
    {
      title: "Automated Professional Services",
      description: "Maximize resource allocation, elevate on-time delivery, and streamline project accounting.",
      image: "/images/Services/ns_service_training_new.png",
    },
  ],
  challenges: [
    {
      title: "Manual ASC 606 Spreadsheet Risk",
      description:
        "NetSuite's Advanced Revenue Management automates ASC 606 / IFRS 15 schedules directly from contract terms, eliminating manual journal entries and audit risk.",
      image: "/images/challenges/compliance.png",
    },
    {
      title: "Subscription Billing Complexity",
      description:
        "NetSuite SuiteBilling automates proration calculations, upgrade/downgrade triggers, renewal reminders, and invoice generation for all subscription models.",
      image: "/images/challenges/manual-billing.png",
    },
    {
      title: "No Real-Time SaaS KPI Visibility",
      description:
        "NetSuite's SaaS metrics dashboards provide real-time ARR/MRR trending, cohort analysis, churn breakdown, and NRR calculations — board-ready at any time.",
      image: "/images/challenges/profitability.png",
    },
    {
      title: "Disconnected CRM and ERP Systems",
      description:
        "NetSuite's built-in CRM and ERP eliminates the CRM-to-ERP sync problem — sales, renewals, and billing all live in one system with zero integration lag.",
      image: "/images/challenges/ecommerce-sync.png",
    },
    {
      title: "Scale-up Friction",
      description:
        "Legacy systems can't keep up with rapid international expansion. NetSuite OneWorld handles multiple countries and currencies in a single instance.",
      image: "/images/challenges/peak-season.png",
    },
    {
      title: "Fragmented Customer Data",
      description:
        "Siloed data prevents a 360-degree view of the customer. NetSuite unifies all touchpoints from first contact to ongoing support.",
      image: "/images/challenges/resource-visibility.png",
    },
    {
      title: "Manual Consolidation",
      description:
        "Consolidating multiple entities manually is slow and error-prone. NetSuite automates intercompany eliminations and real-time consolidation.",
      image: "/images/challenges/reconciliation.png",
    },
    {
      title: "Audit Preparedness",
      description:
        "Manual processes make audits a nightmare. NetSuite's robust audit trails and automated compliance reduce audit time and stress.",
      image: "/images/challenges/security.png",
    },
  ],
  pricingTiers: [
    {
      name: "Starter",
      price: "₹95,000",
      description: "For early-stage SaaS startups up to 15 users.",
      features: [
        "Core ERP (Financials, AR/AP)",
        "Basic Subscription Billing",
        "Revenue Recognition",
        "Standard SaaS Dashboards",
        "Email Support",
      ],
    },
    {
      name: "Professional",
      price: "₹2,10,000",
      description: "Full SaaS ERP for scaling tech industries.",
      features: [
        "Advanced Subscription Billing (SuiteBilling)",
        "ASC 606 Revenue Recognition",
        "ARR/MRR/Churn Dashboards",
        "Multi-Currency Operations",
        "CRM + ERP Unified",
        "SLA-backed Support",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For global SaaS with complex operations.",
      features: [
        "NetSuite OneWorld",
        "Advanced Revenue Management",
        "Project Billing & PSA",
        "Custom BI & Reporting",
        "Dedicated Implementation Manager",
        "24/7 Priority Support",
      ],
    },
  ],
  faqs: [
    {
      question: "Does NetSuite support usage-based billing for SaaS products?",
      answer:
        "Yes. NetSuite SuiteBilling supports usage-based, consumption, tiered, flat-rate, and hybrid billing models. Usage data can be imported via API or entered manually, with automated invoice generation.",
    },
    {
      question: "How does NetSuite handle multi-element ASC 606 arrangements?",
      answer:
        "NetSuite's Advanced Revenue Management allocates transaction price across performance obligations and recognises revenue according to your configured ASC 606 schedules — fully automated.",
    },
    {
      question: "Can NetSuite integrate with Salesforce CRM?",
      answer:
        "Yes. NetSuite provides a certified SuiteApp for Salesforce integration that bi-directionally syncs accounts, contacts, opportunities, and quotes between Salesforce CRM and NetSuite ERP in real time.",
    },
    {
      question: "Is NetSuite suitable for VC-backed SaaS startups?",
      answer:
        "Absolutely. Many VC-backed SaaS industries choose NetSuite specifically to clean up financials before Series B/C rounds or M&A. NetSuite's audit trails and investor-grade reporting make due diligence smoother.",
    },
    {
      question: "Does NetSuite handle equity and stock compensation reporting?",
      answer:
        "NetSuite integrates with equity management platforms like Carta and Pulley to pull compensation expense data into financial reporting.",
    },
  ],
  relatedIndustries: [
    {
      label: "Professional Services",
      href: "/netsuite/industries/it-services",
    },
    { label: "Manufacturing", href: "/netsuite/industries/manufacturing" },
    { label: "Retail & E-Commerce", href: "/netsuite/industries/retail" },
    { label: "Wholesale Distribution", href: "/netsuite/industries/wholesale" },
  ],
};

export default function SoftwarePage() {
  return <IndustryTemplate data={data} />;
}





