"use client";

import React from "react";
import { 
  Cpu, 
  Target, 
  Layers, 
  TrendingUp,
  Zap,
  ShieldCheck,
  Code2,
  Settings,
  Database,
  Search,
  HardDrive,
  Workflow
} from "lucide-react";
import ZohoSolutionTemplate from "@/app/zoho/components/solutions/ZohoSolutionTemplate";

export default function ZohoCreatorITManagementPage() {
  const stats = [
    { label: "IT Productivity", value: 40, suffix: "% Increase", icon: Zap },
    { label: "Shadow IT Reduction", value: 75, suffix: "%", icon: ShieldCheck },
    { label: "Custom App ROI", value: 100, suffix: "%+", icon: TrendingUp },
    { label: "Automation Coverage", value: 85, suffix: "%", icon: Target },
  ];

  const modules = [
    {
      title: "Asset Management Tools",
      description: "Build custom applications to track hardware, software licenses, and IT assets across your organization.",
      image: "/images/modules/dashboard module.webp",
      color: "#1a7a55",
      rgb: "18,108,72",
    },
    {
      title: "Incident Tracking",
      description: "Create specialized help desk and incident management tools tailored to your specific IT workflows.",
      image: "/images/modules/working module.webp",
      color: "#a05a18",
      rgb: "145,75,18",
    },
    {
      title: "Network Monitoring Dashboard",
      description: "Visualize network performance and system health data with custom-built IT operations dashboards.",
      image: "/images/modules/dashbord module.webp",
      color: "#4a3a8a",
      rgb: "65,45,130",
    },
    {
      title: "Workflow Automation",
      description: "Automate routine IT tasks like user onboarding, password resets, and hardware procurement requests.",
      image: "/images/modules/managging together module.webp",
      color: "#1a6080",
      rgb: "20,88,115",
    },
    {
      title: "Security & Compliance Apps",
      description: "Build tools to manage security audits, compliance checks, and access control requests securely.",
      image: "/images/modules/any module.webp",
      color: "#6a2575",
      rgb: "95,30,105",
    },
    {
      title: "IT Resource Planning",
      description: "Manage your IT team's projects, bandwidth, and resource allocation with a custom planning application.",
      image: "/images/modules/module8.webp",
      color: "#154e8a",
      rgb: "18,68,130",
    }
  ];

  const benefits = [
    {
      title: "Centralized IT Operations",
      description: "Bring all your IT management tools under one roof. Zoho Creator allows you to build a unified ecosystem for IT efficiency.",
      image: "/images/lap/lap1.webp",
      points: [
        "Eliminate disparate spreadsheets",
        "Unified view of IT infrastructure",
        "Streamlined internal service requests",
        "Better data governance and security"
      ],
    },
    {
      title: "Rapid Tool Development",
      description: "Respond to IT requirements in hours, not weeks. Our low-code platform lets you build and deploy internal tools at lightning speed.",
      image: "/images/lap/lap2.webp",
      points: [
        "Drag-and-drop interface for IT admins",
        "Visual builders for complex logic",
        "Instant mobile app deployment",
        "Secure, scalable cloud infrastructure"
      ],
    }
  ];

  return (
    <ZohoSolutionTemplate
      title="Zoho Creator for IT — Custom IT Management Solutions"
      subtitle="Empower Your IT Team with Custom Low-Code Tools."
      description="Zoho Creator for IT Management enables IT teams to build custom internal applications, automate operations, and manage infrastructure more effectively."
      introDescription2="Streamline your IT operations with custom-built applications that solve unique organizational challenges, from asset tracking to security compliance."
      breadcrumb={[
        { label: "Home", href: "/zoho" },
        { label: "Solutions", href: "/zoho/solutions" },
        { label: "IT Management", href: "/zoho/solutions/it-management" },
        { label: "Zoho Creator", href: "/zoho-creator-it-management" },
      ]}
      stats={stats}
      modules={modules}
      benefits={benefits}
      heroImage="/images/lap/lap3.webp"
      heroCard1={{
        title: "Workflow Engine",
        subtitle: "Automate complex IT processes.",
        icon: Workflow
      }}
      heroCard2={{
        title: "Asset Tracker",
        subtitle: "Custom hardware & software inventory.",
        icon: HardDrive
      }}
      pricingInfo={{
        description: "Scale your IT toolset without breaking the bank. Flexible plans for organizations of all sizes.",
        plans: [
          "Standard: $8 /user/month",
          "Professional: $20 /user/month",
          "Enterprise: $25 /user/month",
          "Specialized IT Bundles Available",
        ],
        ctaText: "Start Building IT Tools",
      }}
    />
  );
}
