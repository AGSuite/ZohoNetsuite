"use client";

import React from "react";



import {
  TrendingUp,
  Heart,
  Target,
  Calendar,
  Users,
  Zap,
  Layers,
  BarChart3,
  Globe2,
  Briefcase,
  Shield,
  DollarSign
} from "lucide-react";
import ZohoSolutionTemplate from "@/app/zoho/components/solutions/ZohoSolutionTemplate";



export default function ZohoERPPage() {
  const stats = [
    { label: "Operational Efficiency", value: 55, suffix: "%", icon: Zap },
    { label: "Cost Reduction", value: 30, suffix: "%", icon: DollarSign },
    { label: "Data Accuracy", value: 99, suffix: "%", icon: Shield },
    { label: "User Adoption", value: 90, suffix: "%", icon: Users },
  ];

  const modules = [
    {
      title: "Finance & Accounting",
      description: "Manage your accounts, invoices, and expenses with ease while ensuring local tax compliance.",
      image: "/images/modules/financial_reporting_custom.png",
      color: "#1e8a9e",
      rgb: "14,108,130",
    },
    {
      title: "Inventory Management",
      description: "Track stock levels, manage warehouses, and automate reordering processes across multiple locations.",
      image: "/images/modules/inventory_management.png",
      color: "#a05a18",
      rgb: "145,75,18",
    },
    {
      title: "People & Payroll",
      description: "Streamline HR processes from onboarding to retirement, including automated payroll processing.",
      image: "/images/modules/hr_management.png",
      color: "#8b3a6a",
      rgb: "125,42,88",
    },
    {
      title: "CRM & Sales",
      description: "Build lasting customer relationships and accelerate sales cycles with unified customer data.",
      image: "/images/modules/crm.png",
      color: "#1a7a55",
      rgb: "18,108,72",
    },
    {
      title: "Project Management",
      description: "Plan, track, and collaborate on projects with integrated time tracking and billing.",
      image: "/images/modules/project_management.png",
      color: "#4a3a8a",
      rgb: "65,45,130",
    },
    {
      title: "Business Intelligence",
      description: "Turn your data into actionable insights with 500+ pre-built reports and dashboards.",
      image: "/images/modules/analytics_visual_analysis.png",
      color: "#154e8a",
      rgb: "18,68,130",
    },
  ];

  const benefits = [
    {
      title: "Unified Business Ecosystem",
      description:
        "Break down silos with a single platform that connects every department — from sales and marketing to finance and HR.",
      image: "/images/modules/intelligent_automation.png",
      points: [
        "Real-time data flow between all applications",
        "Single source of truth for your entire business",
        "Eliminate duplicate data entry and errors",
        "Seamless cross-departmental collaboration",
      ],
    },
    {
      title: "Scalable Operations",
      description:
        "Start with what you need and expand as you grow. Zoho's modular approach allows you to scale without complexity.",
      image: "/images/modules/sc_mobile_commerce.png",
      points: [
        "Add modules and users as required",
        "Support for multi-currency and multi-entity",
        "Customizable workflows to fit your process",
        "Mobile access to manage your business anywhere",
      ],
    },
    {
      title: "Cost-Effective Innovation",
      description:
        "Get enterprise-grade capabilities without the enterprise price tag. Achieve a higher ROI with lower TCO.",
      image: "/images/modules/gst_management.png",
      points: [
        "Transparent, pay-as-you-go pricing",
        "Minimal IT overhead with cloud-native suite",
        "No hidden implementation or maintenance fees",
        "Regular updates and new features included",
      ],
    },
  ];

  return (
    <ZohoSolutionTemplate
      title="Zoho ERP — Unified Cloud Business Management"
      subtitle="One Suite. Infinite Possibilities."
      description="A complete cloud-based ERP solution that integrates all your core business processes into one unified platform for better visibility and control."
      introDescription2="Zoho ERP (commonly addressed through Zoho One) provides over 45+ integrated applications to manage your sales, marketing, finance, projects, and more — all from a single console."
      breadcrumb={[
        { label: "Home", href: "/zoho" },
        { label: "Solutions", href: "/zoho/solutions" },
        { label: "Zoho ERP", href: "/zoho-erp" },
      ]}
      stats={stats}
      modules={modules}
      benefits={benefits}
      heroImage="/images/people/zoho_erp_hero.jpg"
      whatIsImage="/images/zoho-dashboards/zoho-erp-ai.png"
      heroCard1={{
        title: "45+ Apps",
        subtitle: "Everything you need in one place.",
        icon: Layers
      }}
      heroCard2={{
        title: "99.9% Uptime",
        subtitle: "Enterprise reliability for your operations.",
        icon: Shield
      }}
      pricingInfo={{
        description: "Choose the plan that fits your business. Zoho ERP offers both all-employee and flexible user-based pricing models.",
        plans: [
          "All Employee Pricing: $37 /employee/month",
          "Flexible User Pricing: $90 /user/month",
        ],
        ctaText: "Get a Quote",
      }}
    />
  );
}






