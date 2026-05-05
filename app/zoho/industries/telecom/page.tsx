"use client";

import ZohoIndustryTemplate, {
  IndustryPageData,
} from "@/app/zoho/components/industries/ZohoIndustryTemplate";
import { Wifi, BarChart3, Globe2, TrendingUp } from "lucide-react";

const data: IndustryPageData = {
  industry: "Telecom",
  heroTitle: "Modernize & Streamline Telecom Operations with Zoho",
  heroDescription:
    "Empower your telecom business with Zoho's unified cloud suite — delivering automated billing, CRM integration, real-time analytics, and scalable multi-entity management without the cost of legacy ERP systems.",
  heroImage: "/images/industries/telecom-industry.webp",
  heroCardTitle: "Telecom Operations Hub",
  heroCardSub: "Billing · CRM · Analytics · OSS/BSS Integration",
  heroTopCardTitle: "Trusted by Telecom Businesses",
  heroTopCardSub: "Subscription-Ready · Cloud-Native · Scalable",
  introImage: "/images/lap/lap2.webp",
  introTitle: "Why Zoho for the Telecom Industry?",
  introDescription:
    "The telecom industry is transforming rapidly — with increasing service demands, complex billing models, multi-channel operations, and rising regulatory requirements. To stay competitive, telecom companies need a scalable, cloud-based solution that delivers real-time visibility, automation, and unified operations across finance, service delivery, and customer management.",
  introDescription2:
    "Zoho's integrated suite — including Zoho CRM, Zoho Books, Zoho Subscriptions, Zoho Analytics, and Zoho Creator — provides telecom organizations with an affordable yet powerful alternative to monolithic ERP systems. At AGSuite Technologies, we tailor Zoho to your telecom workflows, enabling faster service delivery, accurate billing, and better customer experiences.",
  stats: [
    { icon: Wifi, value: 98, suffix: "%", label: "Billing Accuracy Rate" },
    { icon: BarChart3, value: 40, suffix: "%", label: "Reduction in Revenue Leakage" },
    { icon: Globe2, value: 60, suffix: "+", label: "Telecom Deployments" },
    { icon: TrendingUp, value: 15, suffix: "+", label: "Years Zoho Experience" },
  ],
  benefits: [
    {
      title: "Service Performance Dashboards",
      description:
        "Real-time visibility into ARPU, churn, usage trends, and billing performance using Zoho Analytics. Custom dashboards surface key telecom KPIs for faster, data-driven leadership decisions.",
      image: "/images/lap/lap4.webp",
      points: [
        "ARPU & churn rate tracking",
        "Zoho Analytics custom dashboards",
        "Usage trend & billing KPIs",
      ],
    },
    {
      title: "Subscription & Usage-Based Billing",
      description:
        "Manage recurring plans, usage billing, bundled services, and tiered pricing using Zoho Subscriptions and Zoho Books — with automated invoicing, credit notes, and dunning workflows.",
      image: "/images/lap/lap7_11zon.webp",
      points: [
        "Zoho Subscriptions integration",
        "Usage-based billing automation",
        "Automated invoicing & dunning",
      ],
    },
    {
      title: "Integrated Order-to-Cash Automation",
      description:
        "Streamline orders, service provisioning, billing, renewals, and collections with connected Zoho CRM, Zoho Books, and Zoho Flow workflows — reducing cycle time and manual handoffs.",
      image: "/images/people/laptopmen2.webp",
      points: [
        "Zoho CRM order management",
        "Automated renewals via Zoho Flow",
        "Collections & payment tracking",
      ],
    },
    {
      title: "Telecom Revenue Recognition",
      description:
        "Track and recognize subscription, device, and hybrid revenue accurately using Zoho Books' revenue recognition module — ensuring compliant financial reporting across service types.",
      image: "/images/lap/lap9_11zon.webp",
      points: [
        "Subscription revenue recognition",
        "Hybrid model support",
        "Deferred revenue scheduling",
      ],
    },
    {
      title: "Multi-Entity & Global Operations",
      description:
        "Manage multiple telecom entities, currencies, and tax environments from a single Zoho One organization. Simplify inter-company transactions and generate consolidated financial reports.",
      image: "/images/lap/lap8_11zon.webp",
      points: [
        "Zoho One multi-org support",
        "Multi-currency & multi-tax",
        "Consolidated reporting",
      ],
    },
    {
      title: "CRM & OSS/BSS Integrations",
      description:
        "Connect Zoho CRM with provisioning systems, network tools, and billing engines via Zoho Flow and Zoho Creator API integrations — enabling real-time data exchange across your entire tech stack.",
      image: "/images/people/laptopgirl3.webp",
      points: [
        "Zoho Flow automation pipelines",
        "REST API CRM integrations",
        "Network & provisioning connectors",
      ],
    },
  ],
  challenges: [
    {
      title: "Complex Billing Requirements",
      solution:
        "Zoho Subscriptions handles tiered, usage-based, and bundled pricing models with automated invoicing and error-free revenue tracking — eliminating billing errors and revenue leakage.",
      image: "/images/people/laptopmen1.jpg",
    },
    {
      title: "Fragmented OSS/BSS Systems",
      solution:
        "Zoho Flow and Zoho Creator integrate with existing OSS/BSS platforms via REST APIs, creating a unified data layer that eliminates silos and manual rekeying between provisioning and financial systems.",
      image: "/images/lap/lap1.webp",
    },
    {
      title: "Regulatory & Compliance Demands",
      solution:
        "Zoho Books automates tax calculations, GST e-invoicing, and audit-ready reporting across multiple jurisdictions — keeping telecom operations legally compliant globally.",
      image: "/images/people/fourteam.webp",
    },
    {
      title: "High Service Volumes & Scalability",
      solution:
        "Zoho's cloud-native architecture scales automatically to handle growing subscriber bases, billing transactions, and service events without additional infrastructure investments.",
      image: "/images/people/global.webp",
    },
    {
      title: "Need for Real-Time Insights",
      solution:
        "Zoho Analytics provides real-time dashboards surfacing ARPU, churn, usage, and financial metrics — empowering telecom leaders to make faster, evidence-based decisions.",
      image: "/images/lap/lap2.webp",
    },
    {
      title: "Revenue Leakage & Recognition Gaps",
      solution:
        "Zoho Books links billing events directly to revenue recognition schedules, ensuring every dollar is captured, recognized correctly, and reported with a full audit trail.",
      image: "/images/people/laptopgirl3.webp",
    },
  ],
  pricingIntro:
    "Zoho pricing for Telecom is based on the apps you need — Zoho CRM, Zoho Subscriptions, Zoho Books, Zoho Analytics, and Zoho Creator — priced per user per month with no hidden fees. Zoho One bundles all apps at a flat rate, making it the most cost-effective choice for growing telecom businesses.",
  pricingTiers: [
    {
      name: "Starter",
      price: "₹70,000",
      description: "For growing telecom operators up to 25 users.",
      features: [
        "Zoho CRM (Customer & Order Mgmt)",
        "Zoho Books (Financials & GST)",
        "Zoho Subscriptions (Recurring Billing)",
        "Standard Reporting",
        "Email Support",
      ],
    },
    {
      name: "Professional",
      price: "₹1,50,000",
      description: "Full telecom suite for mid-size operators.",
      features: [
        "Zoho CRM + Zoho Subscriptions",
        "Zoho Analytics (Custom Dashboards)",
        "Zoho Flow (OSS/BSS Integration)",
        "Zoho Creator (Custom Apps)",
        "Multi-Entity Zoho Books",
        "SLA-backed Support",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large-scale or global telecom enterprises.",
      features: [
        "Zoho One (All Apps Included)",
        "Custom OSS/BSS & CRM Integrations",
        "India Localization (GST/TDS)",
        "Advanced Zoho Analytics Reporting",
        "Dedicated Implementation Manager",
        "24/7 Priority Support",
      ],
    },
  ],
  faqs: [
    {
      question: "How does Zoho support the telecom industry?",
      answer:
        "Zoho provides telecom companies with a unified suite of apps — including Zoho CRM, Zoho Subscriptions, Zoho Books, and Zoho Analytics — that cover customer management, billing, financial operations, and data insights. Together, they eliminate manual processes and deliver real-time visibility across the business.",
    },
    {
      question: "Can Zoho handle complex telecom billing and subscription models?",
      answer:
        "Yes. Zoho Subscriptions is purpose-built for managing recurring, usage-based, and hybrid billing models. It automates invoicing, credit management, and dunning workflows, while integrating seamlessly with Zoho Books for accurate financial reporting and revenue recognition.",
    },
    {
      question: "What are the key benefits of using Zoho for telecom operations?",
      answer:
        "Key benefits include: unified visibility across billing, CRM, and financials; automation of order-to-cash workflows; scalable subscription billing; real-time analytics via Zoho Analytics; and affordable, per-user pricing through Zoho One — making it ideal for both growing and established telecom businesses.",
    },
    {
      question: "Can Zoho integrate with existing OSS/BSS platforms?",
      answer:
        "Yes. Zoho Flow and Zoho Creator provide REST API-based integration capabilities that connect with OSS/BSS platforms, provisioning systems, and third-party billing engines. AGSuite's integration team specializes in building these connectors for telecom environments.",
    },
    {
      question: "How does AGSuite help telecom companies implement Zoho?",
      answer:
        "AGSuite brings deep telecom domain knowledge and certified Zoho implementation expertise. We design end-to-end Zoho solutions tailored to your workflows — from CRM and billing automation to analytics and integrations — and provide ongoing support to ensure your Zoho environment grows with your business.",
    },
    {
      question: "Does Zoho support India-specific compliance for telecom?",
      answer:
        "Yes. Zoho Books includes full GST automation, e-invoicing compliance, TDS/TCS computation, and statutory reporting for Indian businesses. AGSuite's Zoho localization expertise ensures your telecom operations remain fully compliant with Indian tax regulations.",
    },
  ],
  relatedIndustries: [
    { label: "Software & Technology", href: "/zoho/industries/software" },
    { label: "Financial Services", href: "/zoho/industries/financial-services" },
    { label: "IT & Professional Services", href: "/zoho/industries/it-services" },
    { label: "Media & Publishing", href: "/zoho/industries/media" },
  ],
};

export default function ZohoTelecomPage() {
  return <ZohoIndustryTemplate data={data} />;
}
