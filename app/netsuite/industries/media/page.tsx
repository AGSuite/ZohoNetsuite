"use client";

import IndustryTemplate, {
  IndustryPageData,
} from "@/app/netsuite/industries/_template/IndustryTemplate";
import { Globe, BarChart3, TrendingUp, Users } from "lucide-react";





const data: IndustryPageData = {
  industry: "Media & Publishing",
  heroTitle: "NetSuite for Media & Publishing Industries",
  heroDescription:
    "Manage subscriptions, advertising revenue, content licensing, and royalties on a single cloud ERP. NetSuite gives media and publishing industries the financial agility to monetise content across every channel.",
  heroImage: "/images/hero/industry_media_hero.png",
  heroCardTitle: "Media & Publishing ERP",
  heroCardSub: "Subscriptions · Advertising · Royalties · Content",
  heroTopCardTitle: "Trusted by Leading Publishers",
  heroTopCardSub: "Print · Digital · Broadcast · Streaming",
  introImage: "/images/lap/lap10_11zon.webp",
  introTitle: "One Platform for Every Media Revenue Stream",
  introDescription:
    "Media and publishing industries manage highly complex, multi-revenue-stream businesses — subscriptions, digital advertising, content licensing, events, print, and e-commerce. Managing these on separate systems creates financial chaos.",
  introDescription2:
    "NetSuite unifies subscription management, advertising revenue tracking, royalty calculations, and financial reporting on a single platform — giving media executives real-time visibility into every revenue stream, channel, and audience segment.",
  stats: [
    { icon: Globe, value: 200, suffix: "+", label: "Media Industries Served" },
    {
      icon: BarChart3,
      value: 45,
      suffix: "%",
      label: "Reduction in Close Time",
    },
    {
      icon: TrendingUp,
      value: 99,
      suffix: "%",
      label: "Revenue Recognition Accuracy",
    },
    { icon: Users, value: 15, suffix: "+", label: "Years of Media ERP" },
  ],
  benefits: [
    {
      title: "Unified Revenue & Billing Operations",
      description:
        "Consolidate diverse media revenue streams — subscriptions, advertising, licensing, and merchandising — onto a single ledger for complete financial visibility and zero revenue leakage.",
      image: "/images/netsuiteimages/ns_integration_services.png",
      points: [
        "Integrated subscription & ad billing",
        "Eliminated cross-department data silos",
        "Real-time revenue stream tracking",
      ],
    },
    {
      title: "Automated Royalty & Payout Cycles",
      description:
        "Configure complex royalty agreements by title, contributor, and territory. Automate statements and payouts directly from sales data, reducing processing time and billing disputes.",
      image: "/images/netsuiteimages/ns_managed_services.png",
      points: [
        "Tier-based royalty automation",
        "Automated statements & payouts",
        "Accelerated publisher close times",
      ],
    },
    {
      title: "Audit-Ready Revenue Recognition (ASC 606)",
      description:
        "Simplify compliance for complex contracts, bundled digital-print subscriptions, and multi-year licensing deals with NetSuite's Advanced Revenue Management.",
      image: "/images/netsuiteimages/data_accuracy_compliance_risk.png",
      points: [
        "ASC 606 & IFRS 15 compliance",
        "Automated deferred revenue schedules",
        "Dynamic multi-element allocation rules",
      ],
    },
    {
      title: "Audience Lifecycle & Churn Analytics",
      description:
        "Track audience metrics like MRR, Customer Acquisition Cost (CAC), Customer Lifetime Value (LTV), and churn rates to optimize subscription models and retention plans.",
      image: "/images/netsuiteimages/Servicesimg/data_analytics.png",
      points: [
        "Real-time subscriber LTV tracking",
        "Automated churn warning signals",
        "Advanced audience segmentation tools",
      ],
    },
    {
      title: "Scalable Multi-Entity Consolidation",
      description:
        "Scale operations across regions and channels. NetSuite OneWorld consolidates multiple subsidiaries, currencies, and tax jurisdictions in real time.",
      image: "/images/netsuiteimages/ns_rapid_scaling.png",
      points: [
        "Real-time global consolidation",
        "Multi-currency ad & subscription billing",
        "Local tax compliance auto-updates",
      ],
    },
  ],
  features: [
    {
      title: "Subscription Billing & SuiteBilling",
      description: "Automate subscription renewals, dunning, and upgrades across print, digital, and bundled plans. Reduce involuntary churn with intelligent payment retry workflows built into NetSuite SuiteBilling.",
      image: "/images/netsuiteimages/ns_automation_efficiency.png",
    },
    {
      title: "Advertising Revenue Tracking",
      description: "Manage insertion orders, digital impressions, and yield reconciliation across all ad channels. Track ad revenue against targets in real time and automate billing directly from delivery data.",
      image: "/images/netsuiteimages/ns_realtime_visibility.png",
    },
    {
      title: "Royalty & Rights Automation",
      description: "Configure royalty rate schedules by title, territory, and channel. Automatically calculate and generate royalty statements and AP payments for authors, artists, and licensors — on time, every time.",
      image: "/images/netsuiteimages/ns_endtoend_management.png",
    },
    {
      title: "Revenue Recognition (ASC 606 / IFRS 15)",
      description: "Eliminate spreadsheet-driven revenue schedules. NetSuite's Advanced Revenue Management automatically defers and recognises revenue for subscriptions, bundles, and licensing deals in full compliance with ASC 606.",
      image: "/images/netsuiteimages/ns_global_business.png",
    },
    {
      title: "Audience CRM & Churn Analytics",
      description: "Segment audiences by subscription tier, engagement, and lifetime value. Monitor real-time MRR, churn rate, and cohort retention — then trigger automated win-back campaigns before subscribers lapse.",
      image: "/images/netsuiteimages/ns_digital_transformation.png",
    },
  ],
  challenges: [
    {
      title: "Multiple Revenue Streams, No Unified View",
      description:
        "NetSuite consolidates all revenue streams into a single general ledger, with real-time dashboards showing revenue by channel, product, and customer segment.",
      image: "/images/challenges/data-silos.png",
    },
    {
      title: "Manual ASC 606 Subscription Recognition",
      description:
        "NetSuite's Advanced Revenue Management automates deferred revenue schedules for all subscription and licensing arrangements — eliminating spreadsheets and audit risk.",
      image: "/images/challenges/compliance.png",
    },
    {
      title: "Error-Prone Royalty Calculations",
      description:
        "NetSuite automates royalty calculations from sales and licensing data using configurable royalty schedules, generating accurate statements and payment runs on schedule.",
      image: "/images/challenges/manual-billing.png",
    },
    {
      title: "Long, Painful Financial Close",
      description:
        "With all revenue streams flowing into a single NetSuite general ledger, financial close is automated — reducing close time by up to 50% each month.",
      image: "/images/challenges/profitability.png",
    },
    {
      title: "Complex Licensing Terms",
      description:
        "Manually tracking complex usage rights and licensing agreements leads to compliance risks. NetSuite unifies rights management with financial data.",
      image: "/images/challenges/security.png",
    },
    {
      title: "Inaccurate Churn Analytics",
      description:
        "Siloed subscription data makes it hard to predict churn. NetSuite provides real-time churn metrics and cohort analysis for proactive retention.",
      image: "/images/challenges/revenue-leakage.png",
    },
    {
      title: "Fragmented Audience Data",
      description:
        "Disconnected audience insights prevent effective monetization. NetSuite integrates audience data to drive personalized content and ad targeting.",
      image: "/images/challenges/resource-visibility.png",
    },
    {
      title: "Delayed Rights Management",
      description:
        "Slow processing of content rights impacts your ability to monetize. NetSuite speeds up rights management with automated workflows and real-time visibility.",
      image: "/images/challenges/fulfillment-delay.png",
    },
  ],
  pricingTiers: [
    {
      name: "Starter",
      price: "₹95,000",
      description: "For independent publishers and small media industries.",
      features: [
        "Core ERP (Financials, AR/AP)",
        "Subscription Billing",
        "Advertising Revenue Tracking",
        "Standard Revenue Reporting",
        "Email Support",
      ],
    },
    {
      name: "Professional",
      price: "₹2,10,000",
      description: "Full media ERP for multi-channel publishers.",
      features: [
        "Advanced Subscription Management",
        "Ad Revenue Reconciliation",
        "Royalty Automation",
        "ASC 606 Revenue Recognition",
        "Rights Management",
        "SLA-backed Support",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large media groups and global publishers.",
      features: [
        "NetSuite OneWorld (Multi-subsidiary)",
        "Advanced Rights & Licensing",
        "Multi-Currency Ad Revenue",
        "Custom Audience Analytics",
        "Dedicated Implementation Manager",
        "24/7 Priority Support",
      ],
    },
  ],
  faqs: [
    {
      question: "How does NetSuite automate complex subscription billing and involuntary churn management?",
      answer: "NetSuite SuiteBilling handles recurring digital subscriptions, print schedules, and bundled hybrid plans. It automates dunning workflows, intelligent payment retries, and renewal notifications to lower involuntary churn.",
    },
    {
      question: "Can NetSuite reconcile programmatic and insertion-order advertising revenue?",
      answer: "Yes. NetSuite integrates with ad serving and programmatic platforms (like Google Ad Manager) to pull impressions and delivery data, automatically reconciling it with insertion orders to generate accurate invoices and recognize revenue.",
    },
    {
      question: "Does NetSuite support automated royalty calculations and payouts for content creators?",
      answer: "Absolutely. NetSuite configures custom royalty rate schedules by contributor, territory, and channels. It automatically processes stream or sales data to calculate payouts, compile statements, and trigger accounts payable runs.",
    },
    {
      question: "How does NetSuite ensure compliance with ASC 606 and IFRS 15 for media companies?",
      answer: "NetSuite's Advanced Revenue Management automatically handles deferred revenue for multi-element bundles (e.g., digital access + print delivery + event ticket). It splits contract value by standalone selling price and releases revenue over the service term.",
    },
    {
      question: "Can NetSuite consolidate financials for media companies with multiple brands or subsidiaries?",
      answer: "Yes. NetSuite OneWorld enables real-time consolidation across multiple media properties, brands, currencies, and tax jurisdictions, streamlining intercompany eliminations and giving an aggregate view of operations.",
    },
    {
      question: "How does NetSuite track audience analytics and customer lifetime value (LTV)?",
      answer: "NetSuite integrates customer demographics, subscription history, and engagement behavior into a single CRM. Real-time dashboards track metrics like Monthly Recurring Revenue (MRR), Customer Acquisition Cost (CAC), and subscriber LTV.",
    },
  ],
  relatedIndustries: [
    { label: "Software & Technology", href: "/netsuite/industries/software" },
    {
      label: "Advertising & Marketing",
      href: "/netsuite/industries/advertising-marketing",
    },
    {
      label: "Professional Services",
      href: "/netsuite/industries/it-services",
    },
    { label: "Retail & E-Commerce", href: "/netsuite/industries/retail" },
  ],
};

export default function MediaPage() {
  return <IndustryTemplate data={data} />;
}





