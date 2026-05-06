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
  heroImage: "/images/industries/media.webp",
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
      title: "Subscription Management & Billing",
      description:
        "Automate subscription billing — print, digital, bundled, and freemium. Manage renewals, upgrades, cancellations, and churn analytics in one system.",
      image: "/images/lap/lap5.webp",
    },
    {
      title: "Advertising Revenue Management",
      description:
        "Track insertion orders, ad placements, yield, and collections. Reconcile advertising revenue across digital, print, and broadcast channels in real time.",
      image: "/images/lap/lap3.webp",
    },
    {
      title: "Content Licensing & Royalties",
      description:
        "Automate royalty calculations based on sales, licensing agreements, and distribution deals. Generate royalty statements and payments directly from NetSuite.",
      image: "/images/people/laptopmen2.webp",
    },
    {
      title: "Revenue Recognition (ASC 606)",
      description:
        "Automate deferred revenue recognition for multi-period subscriptions, bundled licences, and event revenue — fully compliant with ASC 606 / IFRS 15.",
      image: "/images/people/global.webp",
    },
    {
      title: "Multi-Channel Revenue Consolidation",
      description:
        "Unify revenue from subscriptions, digital ads, and physical sales in one place. Gain a holistic view of your audience's lifetime value across all platforms.",
      image: "/images/people/laptopgirl3.webp",
    },
  ],
  features: [
    {
      title: "Financial Management",
      description: "Automate transaction flow and gain real-time access to financial and operational performance metrics.",
      image: "/images/lap/lap1.webp",
    },
    {
      title: "Inventory Management",
      description: "Optimize inventory levels, minimize stockouts, and boost profitability with company-wide inventory visibility.",
      image: "/images/lap/lap4.webp",
    },
    {
      title: "Customer Relationship Management",
      description: "Track and analyze multi-channel marketing campaigns, automate case management, and provide real-time customer data.",
      image: "/images/lap/lap6_11zon.webp",
    },
    {
      title: "E-commerce Integration",
      description: "Unify e-commerce platforms with backend systems for a seamless online shopping experience.",
      image: "/images/lap/lap7_11zon.webp",
    },
    {
      title: "Subscription Analytics",
      description: "Gain real-time visibility into MRR, Churn, and LTV with NetSuite's advanced subscription analytics.",
      image: "/images/lap/lap8_11zon.webp",
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
      question:
        "Can NetSuite automate subscription renewal billing and dunning?",
      answer:
        "Yes. NetSuite SuiteBilling automates subscription renewals, sends renewal notices, and executes automated dunning workflows for failed payments — reducing churn caused by involuntary cancellations.",
    },
    {
      question:
        "Does NetSuite handle royalty payments to authors, artists, and content creators?",
      answer:
        "Yes. NetSuite's royalty module calculates payments based on configurable rate structures (flat royalty, escalating tiers, per-unit) and integrates with AP to generate royalty payments on schedule.",
    },
    {
      question:
        "How does NetSuite handle deferred revenue for annual subscriptions?",
      answer:
        "NetSuite automatically creates deferred revenue journal entries for prepaid subscriptions and amortises them over the subscription term according to your configured revenue recognition schedule — fully ASC 606 compliant.",
    },
    {
      question:
        "Can NetSuite integrate with our ad server or programmatic advertising platform?",
      answer:
        "Yes. NetSuite integrates with major ad serving platforms via REST APIs and certified SuiteApps. AGSuite can build custom connectors to reconcile ad impression data, insertion orders, and billing in NetSuite.",
    },
    {
      question:
        "Does NetSuite support event ticketing and event revenue management?",
      answer:
        "Yes. NetSuite can manage event revenue, ticket sales, sponsorship billing, and post-event financial reconciliation — either natively or through integration with Eventbrite or Cvent.",
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

