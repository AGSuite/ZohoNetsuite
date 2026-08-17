"use client";

import React from "react";





import ZohoIndustryTemplate, {
  IndustryPageData,
} from "@/app/zoho/components/industries/ZohoIndustryTemplate";
import { Megaphone, BarChart3, Users, TrendingUp } from "lucide-react";




const data: IndustryPageData = {
  industry: "Advertising & Marketing",
  heroTitle: "Scale Your Creative Agency with Zoho",
  heroDescription:
    "Unify project delivery, resource management, and client billing on a single cloud platform. Deliver high-impact campaigns while maintaining agency margins.",
  heroImage: "/images/industries/zoho_marketing_hero.png",
  heroCardTitle: "Agency Ops Control",
  heroCardSub: "Projects · Resources · Billing · Analytics",
  heroTopCardTitle: "Trusted by 500+ Agencies",
  heroTopCardSub: "Creative-First · High-Growth · Global",
  introImage: "/images/lap/lap2.webp",
  introTitle: "Purpose-Built Zoho Tools for Creative Agencies",
  introDescription:
    "Marketing agencies face constant pressure — managing project timelines, tracking creative hours, and ensuring accurate client billing. Zoho's agency ecosystem provides a single, unified system that connects your creative flow with your financial performance.",
  introDescription2:
    "With AGSuite's agency implementation, you get real-time visibility into project profitability and team utilization. We help agencies build scalable, high-margin business structures across global client portfolios.",
  stats: [
    { icon: Megaphone, value: 500, suffix: "+", label: "Agencies Served" },
    { icon: BarChart3, value: 30, suffix: "%", label: "Avg Margin Growth" },
    { icon: Users, value: 94, suffix: "%", label: "Resource Utilization" },
    { icon: TrendingUp, value: 15, suffix: "+", label: "Years Experience" },
  ],
  benefits: [
    {
      title: "Campaign Management",
      description:
        "Manage end-to-end campaigns, track milestones, and visualize creative workflows using Zoho Projects and Zoho Creator.",
      image: "/images/lap/lap4.webp",
    },
    {
      title: "Smart Resource Allocation",
      description:
        "Ensure your best creative talent is allocated to the highest-impact projects with real-time resource forecasting and heatmaps.",
      image: "/images/lap/lap7_11zon.webp",
    },
    {
      title: "Time & Billing Automation",
      description:
        "Capture every creative hour and billable expense on-the-go with Zoho's native mobile apps, ensuring zero revenue leakage.",
      image: "/images/people/laptopmen2.webp",
    },
    {
      title: "Client & Campaign ROI",
      description:
        "Instantly see which clients and campaigns are driving the most revenue with Zoho Analytics' agency-branded dashboards.",
      image: "/images/lap/lap9_11zon.webp",
    },
    {
      title: "Client Portfolio Management",
      description:
        "Manage your entire client portfolio with a unified view of contracts, communication, and project health across all agency accounts.",
      image: "/images/lap/lap8_11zon.webp",
    },
  ],
  features: [
    {
      title: "Campaign & Project Execution",
      description: "Coordinate multi-channel campaign rollouts, track creative deliverables, and collaborate across teams using Zoho Projects.",
      image: "/images/people/zoho_project_mgmt.png",
    },
    {
      title: "Resource Allocation & Utilization",
      description: "Map designers, copywriters, and media buyers to projects based on real-time availability and skillsets.",
      image: "/images/people/zoho_resource_alloc.png",
    },
    {
      title: "Retainer & Milestone Billing",
      description: "Automate invoicing, track billable hours, and manage media buying or creative expenses using Zoho Books.",
      image: "/images/people/zoho_books_hero.png",
    },
    {
      title: "Pitch & Client Relationship Management",
      description: "Manage pitches, retainer proposals, and client communications seamlessly from onboarding to project delivery with Zoho CRM.",
      image: "/images/people/zoho_crm_hero_updated.png",
    },
    {
      title: "Campaign ROI & Analytics",
      description: "Consolidate campaign metrics from Google Ads and social media alongside agency financial data using Zoho Analytics.",
      image: "/images/people/zoho_analytics_benefit_visibility.png",
    },
  ],
  challenges: [
    {
      title: "Inaccurate Job Costing",
      solution:
        "Zoho Books and Projects track external vendor spend, media buy costs, and internal creative hours per campaign to ensure real-time profitability reporting.",
      image: "/images/challenges/revenue-leakage.png",
    },
    {
      title: "Poor Resource Visibility",
      solution:
        "Zoho's centralized resource utilization dashboards offer a global view of creative availability, reducing bench time and designer burnout.",
      image: "/images/challenges/resource-visibility.png",
    },
    {
      title: "Manual Billing Delays",
      solution:
        "Zoho Books automates client billing by compiling timesheets and expenses into clean milestone invoices, speeding up agency cash flow.",
      image: "/images/challenges/manual-billing.png",
    },
    {
      title: "Disconnected Client Portals",
      solution:
        "A secure client portal within Zoho Projects lets clients review copy, approve graphic designs, track milestones, and view invoices in one hub.",
      image: "/images/challenges/siloed-communication.png",
    },
  ],
  pricingTiers: [
    {
      name: "Starter",
      price: "₹40,000",
      description: "For small agencies or boutique firms.",
      features: [
        "Zoho CRM (Express Sales)",
        "Zoho Projects (Track Creative)",
        "Basic Accounting Suite",
        "Social Media Management",
        "Email Support",
      ],
    },
    {
      name: "Professional",
      price: "₹85,000",
      description: "Full suite for mid-size agencies.",
      features: [
        "Zoho Projects (Premium)",
        "Advanced Resource Management",
        "Milestone Billing (Zoho Books)",
        "Zoho Social (Full Suite)",
        "SLA-backed Support",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For global or high-volume agency networks.",
      features: [
        "Zoho One (Global Agency)",
        "Advanced Analytics Dashboards",
        "Multi-currency Accounting",
        "Custom Deluge Automations",
        "Dedicated Success Manager",
        "24/7 Priority Support",
      ],
    },
  ],
  faqs: [
    {
      question: "Can Zoho track social media performance?",
      answer: "Yes. Zoho Social integrates with your agency workflow to provide detailed analytics on campaign performance across all major social platforms.",
    },
    {
      question: "Does Zoho support milestone-based billing?",
      answer: "Yes. Zoho Books allows you to set up billing triggers based on project milestones or task completions in Zoho Projects.",
    },
    {
      question: "Can we give clients access to project progress?",
      answer: "Absolutely. Zoho Projects' Client Portal provides a secure area where your clients can view project status, approve deliverables, and download invoices.",
    },
  ],
  relatedIndustries: [
    { label: "Media & Publishing", href: "/zoho/media-and-publishing" },
    { label: "IT Services", href: "/zoho/it-and-professional-services" },
    { label: "Software & Technology", href: "/zoho/software-and-technology" },
    { label: "Retail & E-Commerce", href: "/zoho/retail-and-e-commerce" },
  ],
};

export default function ZohoAdvertisingMarketingPage() {
  return <ZohoIndustryTemplate data={data} />;
}




