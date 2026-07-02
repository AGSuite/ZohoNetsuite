"use client";

import React from "react";





import ZohoIndustryTemplate, {
  IndustryPageData,
} from "@/app/zoho/components/industries/ZohoIndustryTemplate";
import { Briefcase, BarChart3, Users, TrendingUp } from "lucide-react";



const data: IndustryPageData = {
  industry: "IT Services",
  heroTitle: "Maximize Billable Hours & Delivery with Zoho",
  heroDescription:
    "Streamline project accounting, automate resource allocation, and gain real-time visibility with the unified Zoho cloud suite built for modern IT service providers.",
  heroImage: "/images/industries/it-services-main.png",
  heroCardTitle: "Project Profibilty",
  heroCardSub: "Tracking · Billing · Resources · Revenue",
  heroTopCardTitle: "Trusted by 600+ Agencies",
  heroTopCardSub: "Project-First · Cloud-Native · High-Scale",
  introImage: "/images/lap/lap2.webp",
  introTitle: "Purpose-Built Zoho Tools for IT Services",
  introDescription:
    "IT service businesses face constant pressure — managing project timelines, tracking billable hours, and ensuring accurate revenue recognition. Zoho's ecosystem provides a single, unified system that connects your project delivery with your back-office finance.",
  introDescription2:
    "With AGSuite's service implementation, IT firms get a system tailored to their specific workflows. We help IT service providers build scalable, high-margin business structures across global projects.",
  stats: [
    { icon: Briefcase, value: 600, suffix: "+", label: "IT Firms Served" },
    { icon: BarChart3, value: 25, suffix: "%", label: "Avg Profit Growth" },
    { icon: Users, value: 92, suffix: "%", label: "Resource Utilization" },
    { icon: TrendingUp, value: 15, suffix: "+", label: "Years Experience" },
  ],
  benefits: [
    {
      title: "Project Management & Tracking",
      description:
        "Manage project timelines, track milestones, and visualize progress using Zoho Projects — all integrated with your CRM and finance suites.",
      image: "/images/lap/lap4.webp",
    },
    {
      title: "Automated Resource Allocation",
      description:
        "Ensure the right people are working on the right tasks with smart resource forecasting and workload management within Zoho Projects.",
      image: "/images/lap/lap7_11zon.webp",
    },
    {
      title: "Time & Expense Tracking",
      description:
        "Capture every billable minute and expense on-the-go with Zoho's native mobile apps, ensuring zero revenue leakage.",
      image: "/images/people/laptopmen2.webp",
    },
    {
      title: "Project-Wise Profitability",
      description:
        "Instantly see the profitability of every project with Zoho Books — providing detailed insights into material and labour costs.",
      image: "/images/lap/lap9_11zon.webp",
    },
    {
      title: "Unified Client Management",
      description:
        "Gain a 360-degree view of your clients — from initial inquiry through project delivery and ongoing support with Zoho CRM.",
      image: "/images/lap/lap8_11zon.webp",
    },
  ],
  features: [
    {
      title: "Project and Resource Management",
      description: "Comprehensive tools in Zoho Projects for task tracking and team collaboration.",
      image: "/images/lap/lap5.webp",
    },
    {
      title: "Time and Expense Tracking",
      description: "Easily log time and expenses associated with projects for accurate billing.",
      image: "/images/people/laptopgirl.webp",
    },
    {
      title: "Project Accounting",
      description: "Manage project budgets and track profitability in real-time with Zoho Books.",
      image: "/images/lap/lap3.webp",
    },
    {
      title: "Customer Relationship Management (CRM)",
      description: "Unify your client data and communication with Zoho CRM.",
      image: "/images/people/threeteam.webp",
    },
    {
      title: "Financial Management",
      description: "Automate bookkeeping and gain real-time visibility into your agency's cash flow with Zoho Books.",
      image: "/images/lap/lap1.webp",
    },
  ],
  challenges: [
    {
      title: "Manual Billing Cycles",
      solution:
        "Zoho Books automates your client billing based on project milestones or recorded time entries, ensuring faster payments and better cash flow.",
      image: "/images/challenges/manual-billing.png",
    },
    {
      title: "Poor Resource Visibility",
      solution:
        "Zoho's centralized resource management gives you a global view of team availability and skillsets across all your active projects.",
      image: "/images/challenges/resource-visibility.png",
    },
    {
      title: "Revenue Recognition Delays",
      solution:
        "Zoho Subscriptions and Books automate revenue recognition according to your project delivery cycles and contract terms.",
      image: "/images/challenges/compliance.png",
    },
    {
      title: "Complex Multi-Currency Projects",
      solution:
        "Zoho Books handles global projects with multi-currency accounting and automated bank feeds for international clients.",
      image: "/images/challenges/supply-chain.png",
    },
  ],
  pricingTiers: [
    {
      name: "Starter",
      price: "₹45,000",
      description: "For small agencies or consultancy firms.",
      features: [
        "Zoho CRM (Project Leads)",
        "Zoho Projects (Track Tasks)",
        "Single-user Financial Tracking",
        "Expense management",
        "Email Support",
      ],
    },
    {
      name: "Professional",
      price: "₹95,000",
      description: "Full suite for mid-size service units.",
      features: [
        "Zoho CRM (Enterprise)",
        "Zoho Projects (Premium)",
        "Resource Utilization Reports",
        "Milestone Billing (Zoho Books)",
        "SLA-backed Support",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large-scale global IT service firms.",
      features: [
        "Zoho One (Global Services)",
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
      question: "Can Zoho track project-wise profitability?",
      answer: "Yes. Zoho Books allows you to assign every income and expense entry to a specific project, giving you instant real-time profitability reports.",
    },
    {
      question: "How does Zoho handle timesheets for billing?",
      answer: "Zoho Projects has a native timesheet module that syncs directly with Zoho Books, allowing you to generate invoices based on approved time entries.",
    },
    {
      question: "Can we manage resources across multiple subsidiaries?",
      answer: "Absolutely. Zoho One's global structure allows for unified resource management across different physical locations or legal entities.",
    },
  ],
  relatedIndustries: [
    { label: "Software & Technology", href: "/zoho/industries/software" },
    { label: "Media & Publishing", href: "/zoho/industries/media" },
    { label: "Advertising & Marketing", href: "/zoho/industries/advertising-marketing" },
    { label: "Wholesale Distribution", href: "/zoho/industries/wholesale" },
  ],
};

export default function ZohoITServicesPage() {
  return <ZohoIndustryTemplate data={data} />;
}




