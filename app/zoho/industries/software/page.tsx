"use client";

import React from "react";




import ZohoIndustryTemplate, {
  IndustryPageData,
} from "@/app/zoho/components/industries/ZohoIndustryTemplate";
import { Code, BarChart3, Users, TrendingUp } from "lucide-react";




const data: IndustryPageData = {
  industry: "Software & Technology",
  heroTitle: "Accelerate Your SaaS Growth with Zoho",
  heroDescription:
    "Automate complex subscription billing, revenue recognition, and global financial consolidations with the unified Zoho cloud suite tailored for high-growth tech companies.",
  heroImage: "/images/people/fourteam.webp",
  heroCardTitle: "Subscription Management",
  heroCardSub: "Billing · Revenue Recognition · SaaS Metrics",
  heroTopCardTitle: "Trusted by 500+ Tech Firms",
  heroTopCardSub: "Cloud-Native · Global · Scalable",
  introImage: "/images/lap/lap2.webp",
  introTitle: "Purpose-Built Zoho Tools for SaaS & Tech",
  introDescription:
    "Software companies face unique challenges — from managing complex recurring billing cycles to tracking real-time SaaS metrics like MRR and churn. Zoho's cloud ecosystem provides a single, unified system that connects your front-office sales with back-office finance.",
  introDescription2:
    "With AGSuite's certified Zoho implementation, technology firms get a system that scales as they grow from startup to enterprise. Our team has delivered Zoho for software, SaaS, and platform companies globally.",
  stats: [
    { icon: Code, value: 500, suffix: "+", label: "Tech Firms Served" },
    { icon: BarChart3, value: 30, suffix: "%", label: "SaaS ROI Improvement" },
    { icon: Users, value: 92, suffix: "%", label: "Customer Expansion" },
    { icon: TrendingUp, value: 15, suffix: "+", label: "Years Experience" },
  ],
  benefits: [
    {
      title: "Subscription Billing & Management",
      description:
        "Automate recurring billing, manage renewals, and track subscription lifecycles with Zoho Subscriptions — all integrated with Zoho Books.",
      image: "/images/lap/lap4.webp",
    },
    {
      title: "Real-time SaaS Metrics",
      description:
        "Get instant visibility into MRR, ARR, Churn, and LTV with Zoho Analytics dashboards designed specifically for SaaS business models.",
      image: "/images/lap/lap7_11zon.webp",
    },
    {
      title: "Automated Revenue Recognition",
      description:
        "Simplify compliance (ASC 606/IFRS 15) with automated revenue recognition rules and schedules natively inside Zoho Books and custom modules.",
      image: "/images/people/laptopmen2.webp",
    },
    {
      title: "Unified CRM & Lead Management",
      description:
        "Connect your marketing, sales, and support teams with Zoho CRM — ensuring a 360-degree view of every customer's journey.",
      image: "/images/lap/lap9_11zon.webp",
    },
  ],
  challenges: [
    {
      title: "Complex Billing Structures",
      solution:
        "Zoho Subscriptions handles multi-tier pricing, usage-based billing, and flexible trial periods — eliminating manual billing errors.",
      image: "/images/people/laptopmen1.jpg",
    },
    {
      title: "Disconnected Customer Data",
      solution:
        "Zoho One unifies all customer touchpoints — marketing touch, sales follow-up, and support resolution — in a single source of truth.",
      image: "/images/lap/lap1.webp",
    },
    {
      title: "Scaling with Growth",
      solution:
        "Zoho's cloud architecture scales effortlessly. Add users, modules, and subsidiaries as your company expands globally.",
      image: "/images/people/fourteam.webp",
    },
    {
      title: "Global Financial Consolidation",
      solution:
        "Zoho Books supports multi-currency, multi-entity accounting and automated consolidations for companies with global footprints.",
      image: "/images/people/global.webp",
    },
  ],
  pricingTiers: [
    {
      name: "Starter",
      price: "₹60,000",
      description: "For early-stage tech startups.",
      features: [
        "Zoho Books (Accounting)",
        "Zoho CRM (Express)",
        "Zoho Subscriptions (Basic)",
        "Standard SaaS Reports",
        "Email Support",
      ],
    },
    {
      name: "Professional",
      price: "₹1,20,000",
      description: "Full suite for growing SaaS companies.",
      features: [
        "Zoho CRM (Enterprise)",
        "Advanced Subscription Billing",
        "Zoho Analytics (SaaS Dashboards)",
        "Integration with Support (Desk)",
        "SLA-backed Support",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large-scale global technology firms.",
      features: [
        "Zoho One (Global Org)",
        "Advanced Revenue Recognition",
        "Multi-entity Consolidation",
        "Custom Deluge Automations",
        "Dedicated Success Manager",
        "24/7 Priority Support",
      ],
    },
  ],
  faqs: [
    {
      question: "Does Zoho handle SaaS multi-currency billing?",
      answer: "Yes. Zoho Subscriptions and Zoho Books support multi-currency billing and automated exchange rate updates — essential for global SaaS companies.",
    },
    {
      question: "Can we integrate Zoho with our software portal?",
      answer: "Absolutely. Zoho's robust REST APIs allow for seamless integration between your user application and Zoho CRM/Subscriptions.",
    },
    {
      question: "Does Zoho support ASC 606 revenue recognition?",
      answer: "Yes, we can configure Zoho Books with custom revenue recognition schedules to help tech companies stay compliant with ASC 606/IFRS 15 standards.",
    },
  ],
  relatedIndustries: [
    { label: "IT Services", href: "/zoho/industries/it-services" },
    { label: "Manufacturing", href: "/zoho/industries/manufacturing" },
    { label: "Media & Publishing", href: "/zoho/industries/media" },
    { label: "Retail & E-commerce", href: "/zoho/industries/retail" },
  ],
};

export default function ZohoSoftwarePage() {
  return <ZohoIndustryTemplate data={data} />;
}

