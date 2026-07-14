"use client";

import React from "react";





import ZohoIndustryTemplate, {
  IndustryPageData,
} from "@/app/zoho/components/industries/ZohoIndustryTemplate";
import { Monitor, BarChart3, Users, TrendingUp } from "lucide-react";




const data: IndustryPageData = {
  industry: "Software & Technology",
  heroTitle: "Accelerate SaaS Growth with Zoho",
  heroDescription:
    "Unify your sales, subscription billing, and customer support on a single cloud platform. Gain real-time visibility into MRR, Churn, and LTV to scale your tech business.",
  heroImage: "/images/industries/software-tech-main.png",
  heroCardTitle: "SaaS Ops Control",
  heroCardSub: "Sales · Subscriptions · Support · Metrics",
  heroTopCardTitle: "Trusted by 800+ Tech Firms",
  heroTopCardSub: "Cloud-Native · High-Scale · Global",
  introImage: "/images/Services/zoho_success_architecture.png",
  introTitle: "Purpose-Built Zoho Tools for SaaS Companies",
  introDescription:
    "Software companies face unique challenges — managing recurring revenue, tracking complex customer success metrics, and ensuring seamless lead-to-cash flows. Zoho's technology ecosystem provides a single, unified system that connects your product usage with your financial performance.",
  introDescription2:
    "With AGSuite's tech implementation, you get real-time visibility into SaaS KPIs and customer health. We help software firms build scalable, efficient business structures across global markets.",
  stats: [
    { icon: Monitor, value: 800, suffix: "+", label: "Tech Firms Served" },
    { icon: BarChart3, value: 45, suffix: "%", label: "Avg ARR Growth" },
    { icon: Users, value: 98, suffix: "%", label: "Customer Retention" },
    { icon: TrendingUp, value: 15, suffix: "+", label: "Years Experience" },
  ],
  benefits: [
    {
      title: "Subscription Lifecycle Management",
      description:
        "Manage the entire customer lifecycle — from trial to upgrade to renewal — using Zoho Subscriptions and Zoho CRM.",
      image: "/images/people/zoho_crm_hero_updated.png",
    },
    {
      title: "Real-time SaaS Dashboards",
      description:
        "Track MRR, ARR, Churn, and LTV in real-time with Zoho Analytics' built-in SaaS metrics engine.",
      image: "/images/people/zoho_analytics_hero.png",
    },
    {
      title: "Customer Success & Support",
      description:
        "Deliver world-class support and proactively manage customer health using Zoho Desk and Zoho CRM.",
      image: "/images/people/zoho_people_benefit_operations.png",
    },
    {
      title: "Automated Revenue Recognition",
      description:
        "Ensure compliance with ASC 606 and IFRS 15 using Zoho Books' automated revenue recognition features.",
      image: "/images/people/zoho_books_hero.png",
    },
    {
      title: "Global Multi-Currency Operations",
      description:
        "Support global customers with 160+ currency handling, automated FX revaluation, and multi-subsidiary consolidation within Zoho Finance Plus.",
      image: "/images/people/zoho_finance_plus_hero.png",
    },
  ],
  features: [
    {
      title: "Customized Solutions",
      description: "Tailored software and technology services to meet the unique needs and requirements of businesses.",
      image: "/images/Services/zoho_low_code_hero.png",
    },
    {
      title: "Integration Features",
      description: "Ensuring smooth integration with existing systems and platforms to ensure compatibility and seamless operation",
      image: "/images/people/zoho_flow_hero.png",
    },
    {
      title: "Cloud-Based Solutions",
      description: "Offering cloud-based software and technology solutions that provide flexibility, accessibility, and scalability to businesses.",
      image: "/images/people/zoho_one_hero.jpg",
    },
    {
      title: "Global Business Management",
      description: "Seamlessly manage multiple currencies and reporting as your business expands.",
      image: "/images/people/zoho_analytics_benefit_visibility.png",
    },
    {
      title: "Automated Support Workflows",
      description: "Optimize support ticket routing and resolution with Zoho Desk's intelligent automation.",
      image: "/images/people/zoho_analytics_benefit_decisions.png",
    },
  ],
  challenges: [
    {
      title: "Manual Subscription Billing",
      solution:
        "Zoho Subscriptions automates your recurring billing, proration, and dunning management — eliminating manual spreadsheet work.",
      image: "/images/challenges/manual-billing.png",
    },
    {
      title: "Poor SaaS Metric Visibility",
      solution:
        "Zoho Analytics provides a single source of truth for your critical growth metrics, from cohort analysis to funnel performance.",
      image: "/images/challenges/profitability.png",
    },
    {
      title: "Disconnected CRM and ERP",
      solution:
        "Zoho One unifies your sales and finance data, ensuring that your books are always in sync with your sales pipeline.",
      image: "/images/challenges/ecommerce-sync.png",
    },
    {
      title: "Revenue Recognition Complexity",
      solution:
        "Zoho Books handles complex deferred revenue and recognition schedules automatically based on your contract terms.",
      image: "/images/challenges/compliance.png",
    },
  ],
  pricingTiers: [
    {
      name: "Starter",
      price: "₹45,000",
      description: "For early-stage tech startups.",
      features: [
        "Zoho CRM (Standard)",
        "Zoho Subscriptions (Basic)",
        "Zoho Books (Accounting)",
        "Standard SaaS Reports",
        "Email Support",
      ],
    },
    {
      name: "Professional",
      price: "₹1,10,000",
      description: "Full suite for scaling SaaS companies.",
      features: [
        "Adv. Subscription Billing",
        "Zoho Desk (Enterprise Support)",
        "Advanced Analytics & KPIs",
        "Custom Workflow Automation",
        "SLA-backed Support",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For high-volume or global tech groups.",
      features: [
        "Zoho One (Global SaaS)",
        "Advanced Rev-Rec Workflows",
        "High-Volume API Access",
        "Dedicated Success Manager",
        "24/7 Priority Support",
      ],
    },
  ],
  faqs: [
    {
      question: "Does Zoho support ASC 606 compliance?",
      answer: "Yes. Zoho Books has built-in features to help software companies automate revenue recognition in compliance with ASC 606 and IFRS 15 standards.",
    },
    {
      question: "Can we track MRR and Churn in real-time?",
      answer: "Absolutely. Zoho Analytics and Zoho Subscriptions provide real-time dashboards for all your critical SaaS growth metrics.",
    },
    {
      question: "Can Zoho integrate with our software product?",
      answer: "Yes. Zoho's open APIs allow you to connect your software product directly to Zoho CRM and Subscriptions for automated provisioning and usage tracking.",
    },
  ],
  relatedIndustries: [
    { label: "IT Services", href: "/zoho/industries/it-services" },
    { label: "Media & Publishing", href: "/zoho/industries/media" },
    { label: "Advertising & Marketing", href: "/zoho/industries/advertising-marketing" },
    { label: "Retail & E-Commerce", href: "/zoho/industries/retail" },
  ],
};

export default function ZohoSoftwarePage() {
  return <ZohoIndustryTemplate data={data} />;
}




