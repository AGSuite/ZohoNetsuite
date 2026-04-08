"use client";

import React from "react";
import { 
  TrendingUp, 
  Heart, 
  Target, 
  Layers, 
  Wallet,
  Package,
  FileText,
  CreditCard,
  RefreshCcw,
  ShieldCheck,
  Zap,
  Globe2,
  PieChart,
  BarChart3,
  Search
} from "lucide-react";
import ZohoSolutionTemplate from "@/app/zoho/components/solutions/ZohoSolutionTemplate";

export default function ZohoFinancePlusPage() {
  const stats = [
    { label: "Financial Visibility", value: 100, suffix: "%", icon: PieChart },
    { label: "Operational Savings", value: 35, suffix: "%", icon: TrendingUp },
    { label: "Tax Compliance", value: 99, suffix: "%", icon: ShieldCheck },
    { label: "Workflow Efficiency", value: 60, suffix: "%", icon: Zap },
  ];

  const modules = [
    {
      title: "Zoho Books",
      description: "Manage your complex business accounting, invoicing, and GST compliance with the world's most intuitive platform.",
      image: "/images/lap/lap1.webp",
      color: "#1a7a55",
      rgb: "18,108,72",
    },
    {
      title: "Zoho Inventory",
      description: "Control your stock levels, manage multi-channel orders, and fulfill shipments with precise inventory control.",
      image: "/images/lap/lap2.webp",
      color: "#a05a18",
      rgb: "145,75,18",
    },
    {
      title: "Zoho Expense",
      description: "Automate expense reporting, travel management, and corporate card reconciliations for your global team.",
      image: "/images/people/laptopgirl.webp",
      color: "#4a3a8a",
      rgb: "65,45,130",
    },
    {
      title: "Zoho Subscriptions",
      description: "Handle the entire customer lifecycle from recurring billing to complex subscription management with ease.",
      image: "/images/lap/lap3.webp",
      color: "#1a6080",
      rgb: "20,88,115",
    },
    {
      title: "Zoho Checkout",
      description: "Create personalized payment pages and collect online payments securely from customers worldwide.",
      image: "/images/people/laptopmen.webp",
      color: "#6a2575",
      rgb: "95,30,105",
    },
    {
      title: "Zoho Invoice",
      description: "Get paid on time with professional invoices and automated payment reminders for your small business.",
      image: "/images/people/threeteam.webp",
      color: "#154e8a",
      rgb: "18,68,130",
    },
    {
      title: "Global Banking",
      description: "Securely connect your bank accounts for automated feeds, statement downloads, and instant reconciliation.",
      image: "/images/lap/lap4.webp",
      color: "#1a6545",
      rgb: "20,95,60",
    },
    {
      title: "Unified Analytics",
      description: "Get a bird's eye view of your financial health with cross-app reporting and deep financial insights.",
      image: "/images/people/laptopmen2.webp",
      color: "#8a2a3a",
      rgb: "130,35,48",
    },
    {
      title: "Customer Portal",
      description: "Provide a secure space for your customers to manage their statements, invoices, and payment methods.",
      image: "/images/people/laptopgirl1.webp",
      color: "#0f4e8a",
      rgb: "12,68,130",
    },
    {
      title: "Vendor Portal",
      description: "Collaborate with your vendors, manage purchase orders, and track your payables in one secure place.",
      image: "/images/lap/lap5.webp",
      color: "#523a8a",
      rgb: "75,48,130",
    },
    {
      title: "E-Invoicing",
      description: "Stay ahead of global regulations with built-in support for PEPPOL and other major e-invoicing standards.",
      image: "/images/people/fourteam.webp",
      color: "#1a7a55",
      rgb: "18,108,72",
    },
    {
      title: "Multi-Currency Finance",
      description: "Handle international trade with ease, with automated exchange rates and localized tax treatments.",
      image: "/images/lap/lap2.webp",
      color: "#a05a18",
      rgb: "145,75,18",
    },
  ];

  const benefits = [
    {
      title: "Unified Finance Command Center",
      description: "Zoho Finance Plus is more than just a suite; it's a unified back-office platform. Every app is built on the same database, ensuring data flows without friction.",
      image: "/images/people/fourteam.webp",
      points: [
        "Single source of truth for all financial data",
        "Seamless synchronization between all suite apps",
        "Unified user management and security settings",
        "Deep integration with Zoho's CRM and HR apps"
      ],
    },
    {
      title: "Unrivaled Operational Speed",
      description: "Automate the entire quote-to-cash process. From lead conversion to revenue recognition, minimize manual effort and eliminate errors.",
      image: "/images/lap/lap2.webp",
      points: [
        "Automated recurring billing and renewals",
        "Dynamic workflow rules for complex approvals",
        "Real-time visibility into order fulfillment status",
        "Automated employee expense reimbursements"
      ],
    },
    {
      title: "Built-in Global Compliance",
      description: "Expand globally with confidence. Zoho Finance Plus handles regional tax laws, multi-currency accounting, and local regulations out of the box.",
      image: "/images/people/laptopmen2.webp",
      points: [
        "Automated VAT, GST, and Sales Tax calculation",
        "Audit-ready financial statements per entity",
        "Support for 11+ languages and 200+ currencies",
        "Local bank connectivity in 50+ countries"
      ],
    },
    {
      title: "Scalable Financial Architecture",
      description: "Choose a platform that grows with you. Whether you start with simple invoices or need complex global consolidation, Zoho scales on demand.",
      image: "/images/lap/lap1.webp",
      points: [
        "Handle millions of transactions with high-speed APIs",
        "Advanced multi-entity configuration for conglomerates",
        "Customizable fields and layouts for specialized needs",
        "Enterprise-level 256-bit SSL security as standard"
      ],
    },
  ];

  return (
    <ZohoSolutionTemplate
      title="Zoho Finance Plus — The Unified Finance Suite"
      subtitle="Complete Back-Office Automation, One Integrated Suite."
      description="Zoho Finance Plus offers an end-to-end back-office platform for your business. From invoicing to order management and accounting, it unifies all your financial operations."
      introDescription2="The ultimate finance suite for businesses, Finance Plus integrates accounting, invoicing, order management, and multi-currency support into one streamlined financial operating system."
      breadcrumb={[
        { label: "Home", href: "/zoho" },
        { label: "Solutions", href: "/zoho/solutions" },
        { label: "Finance", href: "/zoho/solutions/finance" },
        { label: "Zoho Finance Plus", href: "/zoho/solutions/finance/zoho-finance-plus" },
      ]}
      stats={stats}
      modules={modules}
      benefits={benefits}
      heroImage="/images/lap/lap1.webp"
      whatIsImage="/images/zoho-dashboards/zoho-finance-plus.webp"
      heroCard1={{
        title: "Unified Back-Office",
        subtitle: "One platform for all financial operations.",
        icon: Wallet
      }}
      heroCard2={{
        title: "60% Faster Workflows",
        subtitle: "Automated quote-to-cash lifecycle.",
        icon: Zap
      }}
      pricingInfo={{
        description: "Get the world's most comprehensive finance suite for one simple flat monthly fee. No hidden costs, just absolute value.",
        plans: [
          "Monthly: $250 /month/organization",
          "Includes 10 Users & All Apps",
          "Advanced Inventory Included",
          "Premium Support Included",
        ],
        ctaText: "Get Started Now",
      }}
    />
  );
}
