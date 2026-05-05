"use client";

import React from "react";




import ZohoIndustryTemplate, {
  IndustryPageData,
} from "@/app/zoho/components/industries/ZohoIndustryTemplate";
import { MonitorPlay, BarChart3, Users, TrendingUp } from "lucide-react";




const data: IndustryPageData = {
  industry: "Media & Publishing",
  heroTitle: "Optimize Ad Sales & Subscriptions with Zoho",
  heroDescription:
    "Manage the entire content lifecycle—from ad sales to subscriber management—on a single cloud platform. Drive digital transformation for your media house.",
  heroImage: "/images/industries/media.webp",
  heroCardTitle: "Media Ops Suite",
  heroCardSub: "Ad Sales · Subs · Rev Rec · Reporting",
  heroTopCardTitle: "Trusted by 300+ Media Firms",
  heroTopCardSub: "Content-First · Cloud-Native · High-Scale",
  introImage: "/images/lap/lap2.webp",
  introTitle: "Purpose-Built Zoho Tools for Media & Publishing",
  introDescription:
    "Media houses face complex revenue structures—managing diverse ad campaigns, recurring digital subscriptions, and physical circulations. Zoho's ecosystem provides a single tool that connects your front-office sales (Zoho CRM) with back-office finance (Zoho Books).",
  introDescription2:
    "With AGSuite's media implementation, brands get real-time visibility into ad campaign performance and subscriber churn. We help media industries build scalable, digital-ready business structures.",
  stats: [
    { icon: MonitorPlay, value: 300, suffix: "+", label: "Media Firms Served" },
    { icon: BarChart3, value: 40, suffix: "%", label: "Avg Churn Reduction" },
    { icon: Users, value: 94, suffix: "%", label: "Ad Sales Efficiency" },
    { icon: TrendingUp, value: 15, suffix: "+", label: "Years Experience" },
  ],
  benefits: [
    {
      title: "Ad Sales & Campaign Management",
      description:
        "Manage the complete ad sales lifecycle—inventory management, contract pricing, and campaign results—with Zoho CRM and Zoho Analytics.",
      image: "/images/lap/lap4.webp",
    },
    {
      title: "Digital Subscription Automations",
      description:
        "Automate recurring billing, multi-tier pricing, and payment collections for digital readers with Zoho Subscriptions.",
      image: "/images/lap/lap7_11zon.webp",
    },
    {
      title: "Complex Revenue Recognition",
      description:
        "Automatically recognize revenue according to content delivery or ad impressions natively inside Zoho Books and custom modules.",
      image: "/images/people/laptopmen2.webp",
    },
    {
      title: "Unified Media Finance",
      description:
        "See the profitability of every publication, brand, or edition with Zoho Books' multi-currency and multi-entity global reporting.",
      image: "/images/lap/lap9_11zon.webp",
    },
  ],
  challenges: [
    {
      title: "Fragmented Ad Inventory",
      solution:
        "Zoho CRM and custom Zoho Creator modules provide a unified view of available ad spots across print, web, and social.",
      image: "/images/people/laptopmen1.jpg",
    },
    {
      title: "High Subscriber Churn",
      solution:
        "Zoho Analytics identifies at-risk subscribers before they lapse, while Zoho Campaigns automates re-engagement loops.",
      image: "/images/lap/lap1.webp",
    },
    {
      title: "Manual Subscription Billing",
      solution:
        "Zoho Subscriptions handles automated recurring billing and dunning (payment recovery) for thousands of subscribers simultaneously.",
      image: "/images/people/fourteam.webp",
    },
    {
      title: "Disconnected Front & Back Office",
      solution:
        "Zoho One unifies your ad sales team with your finance department, ensuring accurate billing and commission reporting.",
      image: "/images/people/global.webp",
    },
  ],
  pricingTiers: [
    {
      name: "Starter",
      price: "₹50,000",
      description: "For niche publishers or digital-only magazines.",
      features: [
        "Zoho Subscriptions (Standard)",
        "Zoho CRM (Digital Sales)",
        "Basic Subscription Analytics",
        "Social Media Ads Manager",
        "Email Support",
      ],
    },
    {
      name: "Professional",
      price: "₹1,05,000",
      description: "Full suite for large media houses.",
      features: [
        "Zoho CRM (Enterprise)",
        "Adv. Subscription Billing",
        "Ad Inventory Management",
        "SLA-backed Rev Rec",
        "SLA-backed Support",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For multi-brand global media groups.",
      features: [
        "Zoho One (Global Media)",
        "Advanced Revenue Recognition",
        "Multi-entity Financials",
        "Custom Deluge Automations",
        "Dedicated Success Manager",
        "24/7 Priority Support",
      ],
    },
  ],
  faqs: [
    {
      question: "Can Zoho manage both print and digital subscriptions?",
      answer: "Yes. Zoho Subscriptions can manage recurring billing for both digital access and physical deliveries, integrated with your logistics suite.",
    },
    {
      question: "Do you support ad inventory management?",
      answer: "Absolutely. We build custom Zoho Creator modules to track ad availability, bookings, and placement status across your media assets.",
    },
    {
      question: "Can Zoho handle multi-currency global publishers?",
      answer: "Yes. Zoho Books supports multi-currency accounting and global taxation compliance, perfect for publishers with international audiences.",
    },
  ],
  relatedIndustries: [
    { label: "Advertising & Marketing", href: "/zoho/industries/advertising-marketing" },
    { label: "Software & Technology", href: "/zoho/industries/software" },
    { label: "IT Services", href: "/zoho/industries/it-services" },
    { label: "Manufacturing", href: "/zoho/industries/manufacturing" },
  ],
};

export default function ZohoMediaPage() {
  return <ZohoIndustryTemplate data={data} />;
}

