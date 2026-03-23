"use client";

import React from "react";
import { 
  ShieldCheck, 
  Cpu, 
  Lock, 
  TrendingUp,
  Zap,
  Globe2,
  Users,
  Terminal,
  Server,
  Database,
  Layers,
  BarChart3,
  Search
} from "lucide-react";
import ZohoCategoryTemplate from "@/app/zoho/components/solutions/ZohoCategoryTemplate";

export default function ItManagementPage() {
  const stats = [
    { label: "Uptime Increase", value: "30%+", icon: Zap },
    { label: "Security Compliance", value: "100%", icon: ShieldCheck },
    { label: "MTTR Reduction", value: "-45%", icon: Cpu },
    { label: "Asset Visibility", value: "100%", icon: Search },
  ];

  const solutions = [
    {
      title: "Zoho One",
      description: "The operating system for business. Run your entire organization on a single integrated platform with 45+ enterprise-grade applications.",
      link: "/zoho/solutions/it-management/zoho-one",
      image: "/images/lap/lap6_11zon.webp",
      icon: Zap,
      highlights: [
        "Single Sign-on (SSO)",
        "Unified Admin Console",
        "Extensive Integrations",
        "Business Process Automation"
      ],
    },
    {
      title: "Zoho IT Management",
      description: "Secure, monitor, and manage your entire IT infrastructure. From endpoint management to network security, maintain absolute control.",
      link: "/zoho/solutions/it-management/zoho-it-management",
      image: "/images/lap/lap2.webp",
      icon: ShieldCheck,
      highlights: [
        "Endpoint Management",
        "Network Monitoring",
        "IT Service Desk",
        "Compliance Auditing"
      ],
    },
  ];

  return (
    <ZohoCategoryTemplate
      title="IT Operations & Infrastructure Solutions"
      subtitle="The Command Center for the Modern Digital Enterprise."
      description="Modernize your IT ecosystem with enterprise-grade management and security. Zoho IT solutions provide the unified visibility and control required to secure your assets and scale your operations globally."
      category="IT Management"
      heroImage="/images/lap/lap2.webp"
      breadcrumb={[
        { label: "Home", href: "/zoho" },
        { label: "Solutions", href: "/zoho/solutions" },
        { label: "IT Management", href: "/zoho/solutions/it-management" },
      ]}
      solutions={solutions}
      stats={stats}
    />
  );
}


