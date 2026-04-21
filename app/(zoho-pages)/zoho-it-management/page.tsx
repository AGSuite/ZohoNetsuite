"use client";

import React from "react";
import { 
  ShieldCheck, 
  Cpu, 
  Lock, 
  TrendingUp,
  Target,
  BarChart3,
  Calendar,
  Zap,
  Globe2,
  Users,
  Terminal,
  Server
} from "lucide-react";
import ZohoSolutionTemplate from "@/app/zoho/components/solutions/ZohoSolutionTemplate";

export default function ZohoITManagementPage() {
  const stats = [
    { label: "Uptime Increase", value: 30, suffix: "%", icon: Zap },
    { label: "Resolution Speed", value: 45, suffix: "% faster", icon: Cpu },
    { label: "Security Compliance", value: 100, suffix: "%", icon: ShieldCheck },
    { label: "Cost Optimization", value: 25, suffix: "%", icon: TrendingUp },
  ];

  const modules = [
    {
      title: "Service Desk (Servicely)",
      description: "A comprehensive ITIL-aligned service desk for managing incidents, problems, and changes with ease.",
      image: "/images/lap/lap1.webp",
      color: "#1a7a55",
      rgb: "18,108,72",
    },
    {
      title: "Endpoint Management",
      description: "Manage, secure, and monitor all your enterprise endpoints from a single centralized dashboard.",
      image: "/images/lap/lap2.webp",
      color: "#a05a18",
      rgb: "145,75,18",
    },
    {
      title: "IT Operations (OpManager)",
      description: "Gain 360-degree visibility into your network, servers, and applications for proactive issue resolution.",
      image: "/images/people/laptopgirl.webp",
      color: "#4a3a8a",
      rgb: "65,45,130",
    },
    {
      title: "Security & Compliance",
      description: "Ensure enterprise-grade security with vulnerability assessments and automated compliance audits.",
      image: "/images/lap/lap3.webp",
      color: "#1a6080",
      rgb: "20,88,115",
    },
    {
      title: "Identity Management",
      description: "Manage user identities, access controls, and single sign-on (SSO) for your entire organization.",
      image: "/images/people/fourteam.webp",
      color: "#6a2575",
      rgb: "95,30,105",
    },
    {
      title: "Cloud Management",
      description: "Optimize your cloud resources, track usage, and manage multi-cloud environments effortlessly.",
      image: "/images/lap/lap4.webp",
      color: "#154e8a",
      rgb: "18,68,130",
    },
    {
      title: "IT Asset Management",
      description: "Track the entire lifecycle of your IT assets, from procurement and deployment to disposal.",
      image: "/images/people/laptopmen.webp",
      color: "#1a6545",
      rgb: "20,95,60",
    },
    {
      title: "Patch Management",
      description: "Automate the deployment of patches across your enterprise to protect against vulnerabilities.",
      image: "/images/lap/lap5.webp",
      color: "#8a2a3a",
      rgb: "130,35,48",
    },
    {
      title: "Remote Support (Assist)",
      description: "Provide instant remote support to your team and customers with secure, high-performance screen sharing.",
      image: "/images/people/laptopgirl1.webp",
      color: "#0f4e8a",
      rgb: "12,68,130",
    },
    {
      title: "Application Monitoring",
      description: "Monitor the performance and availability of your business-critical applications in real-time.",
      image: "/images/lap/lap2.webp",
      color: "#523a8a",
      rgb: "75,48,130",
    },
    {
      title: "Network Security (NetFlow)",
      description: "Analyze network traffic patterns and identify potential security threats before they impact operations.",
      image: "/images/people/threeteam.webp",
      color: "#1a7a55",
      rgb: "18,108,72",
    },
    {
      title: "Strategic IT BI",
      description: "Gain actionable insights into your IT performance with powerful analytics and custom reporting.",
      image: "/images/lap/lap1.webp",
      color: "#a05a18",
      rgb: "145,75,18",
    },
  ];

  const benefits = [
    {
      title: "Unified IT Operations",
      description: "Eliminate tool sprawl and data silos. Zoho IT Management provides a single platform to manage your entire IT ecosystem.",
      image: "/images/people/fourteam.webp",
      points: [
        "Single source for IT operations",
        "Consistent security policies",
        "Unified dashboard for monitoring",
        "Seamless data flow between modules"
      ],
    },
    {
      title: "Proactive Issue Resolution",
      description: "Identify and resolve IT issues before they impact your business operations and employee productivity.",
      image: "/images/lap/lap2.webp",
      points: [
        "Real-time alerts and monitoring",
        "Automated incident workflows",
        "Root cause analysis tools",
        "Predictive maintenance models"
      ],
    },
    {
      title: "Hardened Security Posture",
      description: "Protect your organization from evolving cyber threats with integrated security and compliance management.",
      image: "/images/people/laptopmen2.webp",
      points: [
        "Automated patch management",
        "Vulnerability assessment tools",
        "Granular access control & MFA",
        "Continuous compliance monitoring"
      ],
    },
    {
      title: "Maximized IT ROI",
      description: "Optimize your IT spend and improve service delivery with powerful analytics and efficient workflows.",
      image: "/images/lap/lap1.webp",
      points: [
        "Detailed IT asset tracking",
        "Optimized cloud resource usage",
        "Improved service desk efficiency",
        "Actionable performance analytics"
      ],
    },
  ];

  return (
    <ZohoSolutionTemplate
      title="Zoho IT Management — Secure, Efficient, Scalable"
      subtitle="The Command Center for Modern IT Operations."
      description="Zoho IT Management provides a comprehensive suite of tools to monitor, manage, and secure your entire IT infrastructure from a single, unified platform."
      introDescription2="Empower your IT team with comprehensive monitoring, patch management, and help desk tools designed to keep your entire digital infrastructure running at peak performance."
      breadcrumb={[
        { label: "Home", href: "/zoho" },
        { label: "Solutions", href: "/zoho/solutions" },
        { label: "IT Management", href: "/zoho/solutions/it-management" },
        { label: "Zoho IT Management", href: "/zoho/solutions/it-management/zoho-it-management" },
      ]}
      stats={stats}
      modules={modules}
      benefits={benefits}
      heroImage="/images/lap/lap2.webp"
      heroCard1={{
        title: "100% Security",
        subtitle: "Integrated compliance and protection.",
        icon: ShieldCheck
      }}
      heroCard2={{
        title: "45% Faster Service",
        subtitle: "Using automated ITIL workflows.",
        icon: Cpu
      }}
      pricingInfo={{
        description: "Scale your IT management as your organization grows. Custom enterprise pricing tailored to your specific infrastructure needs.",
        plans: [
          "Standard: Starting $10 /node",
          "Professional: Custom pricing",
          "Enterprise: Custom solutions",
          "Free tier available for exploration",
        ],
        ctaText: "Contact Sales for a Quote",
      }}
    />
  );
}


