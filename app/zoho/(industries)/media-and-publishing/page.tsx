"use client";

import React from "react";





import ZohoIndustryTemplate, {
  IndustryPageData,
} from "@/app/zoho/components/industries/ZohoIndustryTemplate";
import { PlayCircle, BarChart3, Users, TrendingUp } from "lucide-react";




const data: IndustryPageData = {
  industry: "Media & Publishing",
  heroTitle: "Future-Proof Your Media Business with Zoho",
  heroDescription:
    "Monetize content across multiple channels, automate subscription billing, and gain real-time audience insights with the unified Zoho cloud suite for media companies.",
  heroImage: "/images/industries/media.webp",
  heroCardTitle: "Media Ops Control",
  heroCardSub: "Subscriptions · Rights · Billing · Analytics",
  heroTopCardTitle: "Trusted by 300+ Media Firms",
  heroTopCardSub: "Content-First · Scalable · Global",
  introImage: "/images/industries/zoho_media_overview.png",
  introTitle: "Purpose-Built Zoho Tools for Media & Publishing",
  introDescription:
    "Media companies face constant pressure — managing multiple revenue streams, tracking complex content rights, and understanding audience behavior. Zoho's media ecosystem provides a single, unified system that connects your content delivery with your financial performance.",
  introDescription2:
    "With AGSuite's media implementation, you get real-time visibility into subscription revenue and content profitability. We help media firms build scalable, digital-first business structures across global markets.",
  stats: [
    { icon: PlayCircle, value: 300, suffix: "+", label: "Media Firms Served" },
    { icon: BarChart3, value: 40, suffix: "%", label: "Avg Subscription Growth" },
    { icon: Users, value: 96, suffix: "%", label: "Audience Retention" },
    { icon: TrendingUp, value: 15, suffix: "+", label: "Years Experience" },
  ],
  benefits: [
    {
      title: "Omnichannel Content Monetization",
      description:
        "Manage multiple revenue streams — including subscriptions, ads, and licensing — from a single, unified Zoho dashboard.",
      image: "/images/people/zoho_analytics_benefit_visibility.png",
    },
    {
      title: "Automated Subscription Billing",
      description:
        "Run your subscription business effortlessly with Zoho Subscriptions — handling proration, renewals, and dunning management automatically.",
      image: "/images/people/zoho_media_sub_billing.png",
    },
    {
      title: "Real-time Audience Analytics",
      description:
        "Use Zoho Analytics to build deep audience profiles and deliver personalized, segment-based content and marketing.",
      image: "/images/people/zoho_analytics_hero.png",
    },
    {
      title: "Unified Financial Reporting",
      description:
        "Instantly see profitability by channel, title, or platform with Zoho Books' automated media accounting features.",
      image: "/images/people/zoho_books_hero.png",
    },
    {
      title: "Digital Rights Management",
      description:
        "Manage content rights, licensing terms, and expiry dates centrally within Zoho Creator, preventing legal risks and revenue loss.",
      image: "/images/people/zoho_media_rights_mgmt.png",
    },
  ],
  features: [
    {
      title: "Ad Sales & Campaign Management",
      description: "Manage direct and programmatic advertising pipelines, track ad inventory, and report campaign performance using Zoho CRM.",
      image: "/images/people/zoho_crm_hero_updated.png",
    },
    {
      title: "Subscription & Circulation Management",
      description: "Automate paywalls, reader registrations, renewals, and recurring billing plans with Zoho Subscriptions.",
      image: "/images/people/zoho_media_sub_billing.png",
    },
    {
      title: "Audience Segmentation & Marketing",
      description: "Segment readers by behavior, demographics, and subscription tier to deliver targeted campaigns with Zoho Campaigns.",
      image: "/images/people/zoho_analytics_benefit_visibility.png",
    },
    {
      title: "Digital Rights & Royalty Tracking",
      description: "Centrally manage copyright licensing, contributor agreements, and royalty payout calculations within Zoho Creator.",
      image: "/images/people/zoho_media_rights_mgmt.png",
    },
    {
      title: "Real-time Content & Revenue Insights",
      description: "Unify traffic analytics, ad revenue, and subscription logs into a single executive dashboard with Zoho Analytics.",
      image: "/images/people/zoho_analytics_hero.png",
    },
  ],
  challenges: [
    {
      title: "Disconnected Revenue Streams",
      solution:
        "Zoho unifies your subscription, advertising, and licensing data — providing a real-time, global view of your media business health.",
      image: "/images/challenges/data-silos.png",
    },
    {
      title: "Manual Royalty Management",
      solution:
        "Automate complex royalty calculations and payments for authors, creators, and partners using Zoho Creator custom modules.",
      image: "/images/challenges/manual-billing.png",
    },
    {
      title: "Poor Subscription Analytics",
      solution:
        "Advanced SaaS-style metrics like MRR, Churn, and LTV are built-in natively with Zoho Subscriptions and Zoho Analytics.",
      image: "/images/challenges/revenue-leakage.png",
    },
    {
      title: "Fragmented Rights Control",
      solution:
        "Manage digital rights, licensing terms, and expiry dates centrally within Zoho Creator, preventing legal risks and revenue loss.",
      image: "/images/challenges/security.png",
    },
  ],
  pricingTiers: [
    {
      name: "Starter",
      price: "₹55,000",
      description: "For small publishers or niche content creators.",
      features: [
        "Zoho Books (Accounting)",
        "Zoho Subscriptions (Basic)",
        "Social Media Management",
        "Basic Analytics Reports",
        "Email Support",
      ],
    },
    {
      name: "Professional",
      price: "₹1,20,000",
      description: "Full suite for growing media houses.",
      features: [
        "Adv. Subscription Billing",
        "CRM for Ad Sales",
        "Campaign Performance Tracking",
        "Custom Workflow Automation",
        "SLA-backed Support",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large-scale or global media groups.",
      features: [
        "Zoho One (Global Media)",
        "Custom Rights Management (Creator)",
        "High-Volume API Access",
        "Advanced Audience Segments",
        "Dedicated Success Manager",
        "24/7 Priority Support",
      ],
    },
  ],
  faqs: [
    {
      question: "Does Zoho support recurring subscription billing?",
      answer: "Yes. Zoho Subscriptions is a dedicated module that handles recurring billing, proration, multi-currency payments, and automated renewal reminders.",
    },
    {
      question: "Can we track content rights in Zoho?",
      answer: "Yes. Through Zoho Creator, we build custom rights management systems that track licensing terms, expiry dates, and royalty obligations.",
    },
    {
      question: "How does Zoho handle audience segmentation?",
      answer: "Zoho CRM and Zoho Campaigns allow you to build deep audience segments based on behavior, demographics, and content consumption patterns.",
    },
  ],
  relatedIndustries: [
    { label: "Advertising & Marketing", href: "/zoho/advertising-and-digital-marketing-agencies" },
    { label: "Software & Technology", href: "/zoho/software-and-technology" },
    { label: "IT Services", href: "/zoho/it-and-professional-services" },
    { label: "Retail & E-Commerce", href: "/zoho/retail-and-e-commerce" },
  ],
};

export default function ZohoMediaPage() {
  return <ZohoIndustryTemplate data={data} />;
}




