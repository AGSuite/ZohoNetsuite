"use client";

import React from "react";





import ZohoIndustryTemplate, {
  IndustryPageData,
} from "@/app/zoho/components/industries/ZohoIndustryTemplate";
import { Phone, BarChart3, Users, TrendingUp } from "lucide-react";




const data: IndustryPageData = {
  industry: "Telecommunications",
  heroTitle: "Scale Your Telecom Operations with Zoho",
  heroDescription:
    "Manage millions of subscribers, automate usage-based billing, and gain real-time network and revenue insights with the unified Zoho cloud suite for Telecom.",
  heroImage: "/images/industries/telecom-hero-new.webp",
  heroCardTitle: "Telecom Ops Control",
  heroCardSub: "Subscribers · Billing · Revenue · Metrics",
  heroTopCardTitle: "Trusted by 100+ Telecom Firms",
  heroTopCardSub: "High-Volume · Scalable · Global",
  introImage: "/images/lap/lap2.webp",
  introTitle: "Purpose-Built Zoho Tools for Telecommunications",
  introDescription:
    "Telecom companies face constant pressure — managing massive subscriber bases, tracking complex usage-based billing, and ensuring accurate revenue recognition across multiple plans. Zoho's telecom ecosystem provides a single, unified system that connects your network data with your financial performance.",
  introDescription2:
    "With AGSuite's telecom implementation, you get real-time visibility into subscriber growth and plan profitability. We help telecom firms build scalable, efficient business structures across global markets.",
  stats: [
    { icon: Phone, value: 100, suffix: "+", label: "Telecom Firms Served" },
    { icon: BarChart3, value: 35, suffix: "%", label: "Avg Billing Efficiency" },
    { icon: Users, value: 95, suffix: "%", label: "Subscriber Retention" },
    { icon: TrendingUp, value: 15, suffix: "+", label: "Years Experience" },
  ],
  benefits: [
    {
      title: "Subscriber Lifecycle Management",
      description:
        "Manage the entire subscriber journey — from plan selection to billing to ongoing support — using Zoho CRM and Zoho Subscriptions.",
      image: "/images/lap/lap4.webp",
    },
    {
      title: "Usage-Based Billing Automation",
      description:
        "Automate complex usage-based billing and tiered plans effortlessly with Zoho's advanced billing engine and Deluge scripts.",
      image: "/images/lap/lap7_11zon.webp",
    },
    {
      title: "Real-time Revenue Analytics",
      description:
        "Use Zoho Analytics to build deep revenue profiles and deliver personalized, plan-based marketing and retention strategies.",
      image: "/images/people/laptopmen2.webp",
    },
    {
      title: "Unified Financial Reporting",
      description:
        "Instantly see profitability by plan, region, or subscriber segment with Zoho Books' automated telecom accounting features.",
      image: "/images/lap/lap9_11zon.webp",
    },
    {
      title: "Global Multi-Subsidiary Support",
      description:
        "Manage multiple financial entities, currencies, and tax environments seamlessly with Zoho Finance Plus for international operations.",
      image: "/images/lap/lap8_11zon.webp",
    },
  ],
  features: [
    {
      title: "Subscription and Usage-Based Billing",
      description: "Support recurring, consumption, tiered, and flat-rate billing models with Zoho Subscriptions.",
      image: "/images/lap/lap1.webp",
    },
    {
      title: "Revenue Recognition",
      description: "Automate deferred revenue recognition for multi-period subscriptions and bundled licenses with Zoho Books.",
      image: "/images/lap/lap3.webp",
    },
    {
      title: "Financial Management",
      description: "Automate transaction flow and gain real-time access to financial performance with Zoho Books.",
      image: "/images/lap/lap5.webp",
    },
    {
      title: "Customer Relationship Management (CRM)",
      description: "Manage subscriber interactions and provide real-time support with Zoho CRM.",
      image: "/images/people/laptopgirl.webp",
    },
    {
      title: "Order Management",
      description: "Automate the entire order-to-fulfillment cycle for faster delivery and improved customer satisfaction.",
      image: "/images/lap/lap4.webp",
    },
  ],
  challenges: [
    {
      title: "Complex Usage-Based Billing",
      solution:
        "Zoho Subscriptions handles multi-tiered and usage-based billing automatically, reducing billing errors and customer disputes.",
      image: "/images/challenges/manual-billing.png",
    },
    {
      title: "Disconnected OSS/BSS and CRM",
      solution:
        "Zoho One unifies your network operations and customer data, ensuring that your billing is always in sync with your service provisioning.",
      image: "/images/challenges/data-silos.png",
    },
    {
      title: "Revenue Recognition for Bundled Plans",
      solution:
        "Zoho Books handles complex bundled revenue and recognition schedules automatically based on your service terms.",
      image: "/images/challenges/compliance.png",
    },
    {
      title: "High-Volume Transaction Processing",
      solution:
        "Zoho's cloud-native architecture scales automatically to handle millions of transactions and billing events every month.",
      image: "/images/challenges/peak-season.png",
    },
  ],
  pricingTiers: [
    {
      name: "Starter",
      price: "₹75,000",
      description: "For small or local telecom providers.",
      features: [
        "Zoho CRM (Standard)",
        "Zoho Subscriptions (Basic)",
        "Zoho Books (Accounting)",
        "Standard Billing Reports",
        "Email Support",
      ],
    },
    {
      name: "Professional",
      price: "₹1,50,000",
      description: "Full suite for regional telecom operators.",
      features: [
        "Adv. Usage-Based Billing",
        "CRM for High-Volume Subscriber Data",
        "Advanced Analytics & Revenue KPIs",
        "Custom Workflow Automation",
        "SLA-backed Support",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For national or global telecom groups.",
      features: [
        "Zoho One (Global Telecom)",
        "Custom OSS/BSS Integrations",
        "High-Volume API Access",
        "Dedicated Success Manager",
        "24/7 Priority Support",
      ],
    },
  ],
  faqs: [
    {
      question: "Can Zoho handle millions of subscriber records?",
      answer: "Yes. Zoho One's high-scale architecture is designed to handle massive datasets, making it ideal for the telecommunications industry.",
    },
    {
      question: "Does Zoho support usage-based billing?",
      answer: "Yes. Zoho Subscriptions can handle complex usage-based and tiered pricing models, which can be further customized using Deluge scripting.",
    },
    {
      question: "Can we integrate Zoho with our network provisioning systems?",
      answer: "Absolutely. Zoho's open APIs allow you to connect your network OSS/BSS directly to Zoho CRM and Subscriptions for automated subscriber provisioning.",
    },
  ],
  relatedIndustries: [
    { label: "IT Services", href: "/zoho/industries/it-services" },
    { label: "Software & Technology", href: "/zoho/industries/software" },
    { label: "Media & Publishing", href: "/zoho/industries/media" },
    { label: "Retail & E-Commerce", href: "/zoho/industries/retail" },
  ],
};

export default function ZohoTelecomPage() {
  return <ZohoIndustryTemplate data={data} />;
}
