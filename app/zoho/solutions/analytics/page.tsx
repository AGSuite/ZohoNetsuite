"use client";

import React from "react";
import { 
  PieChart, 
  TrendingUp, 
  Target, 
  Zap,
  Globe2,
  ShieldCheck,
  BarChart3,
  Search,
  Database,
  Workflow
} from "lucide-react";
import ZohoCategoryTemplate from "@/app/zoho/components/solutions/ZohoCategoryTemplate";

export default function AnalyticsPage() {
  const stats = [
    { label: "Data-driven ROI", value: "3x", icon: TrendingUp },
    { label: "Analysis Speed", value: "5x faster", icon: Zap },
    { label: "Predictive Accuracy", value: "90%+", icon: Target },
    { label: "Data Connectors", value: "250+", icon: Database },
  ];

  const solutions = [
    {
      title: "Zoho Analytics",
      description: "Self-service business intelligence and data analytics software. Turn raw data into stunning visualizations and actionable insights in minutes.",
      link: "/zoho/solutions/analytics/zoho-analytics",
      image: "/images/lap/lap8_11zon.webp",
      icon: PieChart,
      highlights: [
        "Zia AI Data Assistant",
        "Collaborative Dashboards",
        "Powerful Predictive Tools",
        "Embedded Analytics"
      ],
    },
    {
      title: "Zoho Flow",
      description: "Connect your applications and automate complex business workflows. Build smart integrations without writing any code.",
      link: "/zoho/solutions/analytics/zoho-flow",
      image: "/images/lap/lap2.webp",
      icon: Workflow,
      highlights: [
        "Visual Automation Builder",
        "500+ App Integrations",
        "Logical Conditions",
        "Custom Scripting (Deluge)"
      ],
    },
  ];

  return (
    <ZohoCategoryTemplate
      title="Business Intelligence & Analytics Solutions"
      subtitle="Data-Driven Decisions for a Connected World."
      description="Unlock the power of your business data. Zoho Analytics and Flow enable you to visualize complex information and automate the cross-platform transitions required for global scale."
      category="Analytics"
      heroImage="/images/lap/lap8_11zon.webp"
      breadcrumb={[
        { label: "Home", href: "/zoho" },
        { label: "Solutions", href: "/zoho/solutions" },
        { label: "Analytics", href: "/zoho/solutions/analytics" },
      ]}
      solutions={solutions}
      stats={stats}
    />
  );
}


