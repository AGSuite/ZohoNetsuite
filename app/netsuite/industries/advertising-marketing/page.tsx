"use client";

import IndustryTemplate, {
  IndustryPageData,
} from "@/app/netsuite/industries/_template/IndustryTemplate";
import { Users, BarChart3, TrendingUp, Globe } from "lucide-react";





const data: IndustryPageData = {
  industry: "Advertising & Marketing",
  heroTitle: "NetSuite for Advertising & Marketing Agencies",
  heroDescription:
    "Run a more profitable agency with a cloud ERP purpose-built for project-based billing, resource management, and client financial visibility. NetSuite empowers agencies to scale without losing control.",
  heroImage: "/images/hero/industry_marketing_hero.png",
  heroCardTitle: "Agency ERP & Project Management",
  heroCardSub: "Projects · Retainers · Billing · Resource Planning",
  heroTopCardTitle: "Trusted by Leading Agencies",
  heroTopCardSub: "Digital · Creative · Media · Integrated",
  introImage: "/images/benefits/adv_marketing_overview.png",
  introTitle: "Gain Real-Time Control Over Agency Operations and Profitability",
  introDescription:
    "In today's fast-moving agency environment, visibility is everything. Without a connected system, managing project performance, team utilization, client profitability, and financial reporting can quickly become complex and time-consuming.",
  introDescription2:
    "NetSuite provides a unified business platform that connects every stage of the client lifecycle—from opportunity management and project execution to invoicing and revenue tracking. Combined with intelligent automation and AI-powered insights, agencies can streamline operations, improve forecasting accuracy, and scale with confidence while maintaining strong profit margins.",
  stats: [
    
    { icon: Users, value: 300, suffix: "+", label: "Agencies on NetSuite" },
    {
      icon: BarChart3,
      value: 25,
      suffix: "%",
      label: "Higher Billable Utilisation",
    },
    {
      icon: TrendingUp,
      value: 40,
      suffix: "%",
      label: "Faster Client Invoicing",
    },
    { icon: TrendingUp, value: 15, suffix: "+", label: "Years Experience" },
  
  ],
  benefits: [
    {
      title: "Project & Campaign Management",
      description:
        "Plan and manage campaigns, creative projects, and retainers with tasks, milestones, budgets, and resource assignments — all connected to billing.",
      image: "/images/benefits/benefit_gbm_processes.png",
    },
    {
      title: "Resource & Utilisation Management",
      description:
        "Allocate creative, strategy, and technical resources across projects based on skills and availability. Track utilisation rates and identify bottlenecks before they impact delivery.",
      image: "/images/benefits/benefit_scalable_growth.png",
    },
    {
      title: "Flexible Client Billing",
      description:
        "Support retainer, T&M, fixed-fee, and milestone billing models. Generate client invoices directly from approved timesheets and campaign deliverables.",
      image: "/images/benefits/benefit_crm_quote_to_cash.png",
    },
    {
      title: "Client Profitability Reporting",
      description:
        "Real-time client and project P&L dashboards showing revenue, costs, and margins — enabling leadership to spot unprofitable accounts before they escalate.",
      image: "/images/benefits/benefit_financial_visibility.png",
    },
    {
      title: "Time & Expense Mobile Entry",
      description:
        "Empower your creative team to capture billable time and out-of-pocket expenses instantly via mobile. Speed up your reimbursement and client billing cycles.",
      image: "/images/benefits/benefit_crm_sales_automation.png",
    },
  ],
  features: [
    {
      title: "Campaign & Project Management (OpenAir)",
      description: "Track creative campaigns, retainers, and client projects from brief to invoice using NetSuite OpenAir. Set milestones, assign tasks to creative teams, monitor budget-vs-actuals in real time, and trigger scope-creep alerts before margin is lost.",
      image: "/images/adv-features/adv_feature_project_management.png",
    },
    {
      title: "Resource & Capacity Planning",
      description: "Allocate designers, copywriters, and strategists based on skills and real-time availability. NetSuite's resource scheduling engine surfaces utilisation rates, prevents team overloading, and maximises your billable capacity across every engagement.",
      image: "/images/adv-features/adv_feature_resource_management.png",
    },
    {
      title: "Multi-Model Client Billing (SuiteBilling)",
      description: "Automate retainer, time-and-materials, fixed-fee, and milestone invoices directly from approved timesheets via NetSuite SuiteBilling. Reduce billing cycles from days to hours with zero manual data entry and eliminate revenue leakage.",
      image: "/images/adv-features/adv_feature_project_accounting.png",
    },
    {
      title: "Client & Pipeline CRM",
      description: "Manage pitches, retainer renewals, and account growth in NetSuite's native CRM. Track client health scores, deal stages, and revenue forecasts — all connected to live project and financial data so your account team always has context.",
      image: "/images/adv-features/adv_feature_crm.png",
    },
    {
      title: "Agency Financial Visibility & Reporting",
      description: "Real-time P&L by client, project, or service line — without spreadsheets. NetSuite's financial dashboards give agency finance teams instant visibility into gross margin, WIP, accounts receivable ageing, and cash flow forecasts.",
      image: "/images/adv-features/adv_feature_financial_management.png",
    },
  ],
  challenges: [
    {
      title: "Scope Creep Eroding Fixed-Fee Margins",
      description:
        "NetSuite provides live budget-vs-actuals dashboards per project, with configurable alerts when projects approach 80% of allocated hours — enabling early intervention before margin is lost.",
      image: "/images/challenges/profitability.png",
    },
    {
      title: "Slow Error-Prone Client Invoicing",
      description:
        "NetSuite automates invoice generation from approved timesheets and milestones, reducing billing cycles from days to hours and virtually eliminating billing errors.",
      image: "/images/challenges/manual-billing.png",
    },
    {
      title: "No Client or Service Profitability Visibility",
      description:
        "NetSuite's client profitability reports break down revenue, direct costs, and margin by client, project type, and team — giving leadership the data to make strategic decisions.",
      image: "/images/challenges/revenue-leakage.png",
    },
    {
      title: "Disconnected Vendor & Media Buy Tracking",
      description:
        "NetSuite connects vendor bills to client projects, automates markup or pass-through billing, and ensures every vendor cost is accounted for before client invoices go out.",
      image: "/images/challenges/data-silos.png",
    },
    {
      title: "Poor Resource Allocation",
      description:
        "Fragmented visibility leads to overbooked creative teams. NetSuite provides real-time resource availability and skill-mapping for smarter assignments.",
      image: "/images/challenges/resource-visibility.png",
    },
    {
      title: "Delayed Expense Reimbursement",
      description:
        "Manual expense processing slows down cash flow and hurts team morale. NetSuite automates expense capture and approval workflows.",
      image: "/images/challenges/fulfillment-delay.png",
    },
    {
      title: "Siloed Creative & Finance Data",
      description:
        "Creative teams and finance often work in different worlds. NetSuite unifies campaign and project data with financial records in one system.",
      image: "/images/challenges/ecommerce-sync.png",
    },
    {
      title: "Inconsistent Client Reporting",
      description:
        "Generating manual client reports is slow and inconsistent. NetSuite automates custom-branded client reporting with real-time project metrics.",
      image: "/images/challenges/reconciliation.png",
    },
  ],
  pricingTiers: [
    {
      name: "Starter",
      price: "₹90,000",
      description: "For boutique agencies with up to 15 users.",
      features: [
        "Core ERP (Financials, AR/AP)",
        "Project & Retainer Management",
        "Time & Expense Tracking",
        "Standard Billing",
        "Email Support",
      ],
    },
    {
      name: "Professional",
      price: "₹2,00,000",
      description: "Full agency suite for growing teams.",
      features: [
        "Advanced Project Management",
        "Resource Utilisation Management",
        "Multi-Model Client Billing",
        "Vendor & Media Buy Tracking",
        "Client Profitability Dashboards",
        "SLA-backed Support",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For multi-office or international agency groups.",
      features: [
        "NetSuite OneWorld",
        "Revenue Recognition",
        "Advanced Analytics",
        "Custom Client Portals",
        "Dedicated Implementation Manager",
        "24/7 Priority Support",
      ],
    },
  ],
  faqs: [
    {
      question:
        "Can NetSuite track media buying costs and pass-throughs per client?",
      answer:
        "Yes. NetSuite allows you to track third-party vendor invoices (media buys, production, freelancers) against specific client projects — with configurable markup or cost-pass-through billing to clients.",
    },
    {
      question: "Does NetSuite support retainer billing with rollover hours?",
      answer:
        "Yes. NetSuite SuiteBilling supports monthly retainer invoicing with configurable rollover rules, overage billing triggers, and detailed utilisation reporting against retainer hours.",
    },
    {
      question: "How does NetSuite help us manage scope creep?",
      answer:
        "NetSuite provides real-time budget-vs-actuals tracking at the project and task level. PMs can monitor hours burned, configure alerts at budget thresholds, and initiate change order workflows when scope expands.",
    },
    {
      question:
        "Can we use NetSuite alongside our existing PM tools like Monday.com or Asana?",
      answer:
        "Yes. NetSuite integrates with project management tools via API or Zapier connectors, allowing you to use your preferred PM tool while NetSuite handles billing, financials, and reporting.",
    },
    {
      question:
        "Does NetSuite handle multi-currency billing for international clients?",
      answer:
        "Yes. NetSuite supports 190+ currencies with real-time FX rates, enabling you to invoice international clients in their local currency while consolidating financials in your home currency.",
    },
  ],
  relatedIndustries: [
    {
      label: "Professional Services",
      href: "/netsuite/industries/it-services",
    },
    { label: "Software & Technology", href: "/netsuite/industries/software" },
    { label: "Media & Publishing", href: "/netsuite/industries/media" },
    { label: "Manufacturing", href: "/netsuite/industries/manufacturing" },
  ],
};

export default function AdvertisingMarketingPage() {
  return <IndustryTemplate data={data} />;
}





