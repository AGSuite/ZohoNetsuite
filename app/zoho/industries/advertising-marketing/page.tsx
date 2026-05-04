"use client";

import React from "react";




import ZohoIndustryTemplate, {
  IndustryPageData,
} from "@/app/zoho/components/industries/ZohoIndustryTemplate";
import { Megaphone, BarChart3, Users, TrendingUp } from "lucide-react";




const data: IndustryPageData = {
  industry: "Advertising & Marketing",
  heroTitle: "Manage Campaigns & Margins Effectively with Zoho",
  heroDescription:
    "Integrate your project management and financials to gain real-time visibility into campaign profitability. Zoho helps agencies optimize resource allocation and improve cash flow.",
  heroImage: "/images/industries/marketing.jpg",
  heroCardTitle: "Agency Ops Control",
  heroCardSub: "Campaigns · Projects · Billing · Leads",
  heroTopCardTitle: "Trusted by 450+ Agencies",
  heroTopCardSub: "Agency-First · Cloud-Native · High-Scale",
  introImage: "/images/lap/lap2.webp",
  introTitle: "Purpose-Built Zoho Tools for Agencies",
  introDescription:
    "Marketing and advertising agencies face constant pressure—delivering high-impact campaigns while maintaining tight project margins. Zoho's ecosystem provides a single tool that connects your client relationships (Zoho CRM) with campaign execution (Zoho Projects) and finance (Zoho Books).",
  introDescription2:
    "With AGSuite's agency implementation, brands get real-time visibility into client-wise profitability and resource utilization. We help agencies build scalable, future-ready business structures.",
  stats: [
    { icon: Megaphone, value: 450, suffix: "+", label: "Agencies Served" },
    { icon: BarChart3, value: 30, suffix: "%", label: "Avg Profit Improvement" },
    { icon: Users, value: 92, suffix: "%", label: "Resource Utilization" },
    { icon: TrendingUp, value: 15, suffix: "+", label: "Years Experience" },
  ],
  benefits: [
    {
      title: "Client & Lead Management",
      description:
        "Streamline your sales pipeline from initial lead to final billable client with Zoho CRM — ensuring zero missed opportunities.",
      image: "/images/lap/lap4.webp",
    },
    {
      title: "Campaign Project Management",
      description:
        "Manage campaign timelines, creative tasks, and team collaborations with Zoho Projects — making project delivery invisible and efficient.",
      image: "/images/lap/lap7_11zon.webp",
    },
    {
      title: "Automated Agency Billing",
      description:
        "Automate recurring retainers, project-based milestones, and expense pass-throughs with Zoho Books and Projects.",
      image: "/images/people/laptopmen2.webp",
    },
    {
      title: "Real-time Profitability Insights",
      description:
        "Instantly see which clients and campaigns are driving the most revenue with Zoho Analytics' agency-branded dashboards.",
      image: "/images/lap/lap9_11zon.webp",
    },
  ],
  challenges: [
    {
      title: "Inaccurate Job Costing",
      solution:
        "Zoho Books and Projects track materials, external vendor costs, and internal labour hours per job — ensuring true profitability reporting.",
      image: "/images/people/laptopmen1.jpg",
    },
    {
      title: "Poor Resource Visibility",
      solution:
        "Zoho's centralized resource management gives you a global view of team availability and creative skillsets across all your active projects.",
      image: "/images/lap/lap1.webp",
    },
    {
      title: "Manual Billing Delays",
      solution:
        "Zoho Books automates your client billing based on project milestones or recorded time entries, ensures faster payments.",
      image: "/images/people/fourteam.webp",
    },
    {
      title: "Disconnected Client Portals",
      solution:
        "A dedicated Client Portal within Zoho Projects allows your clients to track progress, approve designs, and view invoices directly.",
      image: "/images/people/global.webp",
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
      description: "Full suite for growing agencies.",
      features: [
        "Zoho CRM (Enterprise)",
        "Zoho Projects (Adv. Workflow)",
        "Resource Utilization Reports",
        "Retainer/Exp. Billing Automations",
        "SLA-backed Support",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large-scale global advertising groups.",
      features: [
        "Zoho One (Global Agency)",
        "Advanced Revenue Recognition",
        "Multi-entity Financials",
        "Custom Deluge Integrations",
        "Dedicated Success Manager",
        "24/7 Priority Support",
      ],
    },
  ],
  faqs: [
    {
      question: "Can Zoho track project-wise profitability for agencies?",
      answer: "Yes. Zoho Books allows you to assign every income and expense entry to a specific project, giving you instant real-time profitability reports for clients.",
    },
    {
      question: "Do you support client project portals?",
      answer: "Yes. Zoho Projects has a native client portal where your clients can view tasks, upload files, and provide feedback on creative work-in-progress.",
    },
    {
      question: "Can we manage resources across multiple subsidiaries?",
      answer: "Absolutely. Zoho One's global structure allows for unified resource management across different physical locations or legal entities.",
    },
  ],
  relatedIndustries: [
    { label: "Media & Publishing", href: "/zoho/industries/media" },
    { label: "Software & Technology", href: "/zoho/industries/software" },
    { label: "IT Services", href: "/zoho/industries/it-services" },
    { label: "Wholesale Distribution", href: "/zoho/industries/wholesale" },
  ],
};

export default function ZohoAdvertisingMarketingPage() {
  return <ZohoIndustryTemplate data={data} />;
}

