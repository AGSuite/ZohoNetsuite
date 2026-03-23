"use client";

import React from "react";
import { 
  Code2, 
  Cpu, 
  Zap, 
  ShieldCheck,
  Globe2,
  Database,
  Layers,
  Layout,
  MousePointerClick,
  Smartphone,
  TrendingUp,
  Users
} from "lucide-react";
import ZohoCategoryTemplate from "@/app/zoho/components/solutions/ZohoCategoryTemplate";

export default function DevPlatformsPage() {
  const stats = [
    { label: "Deployment Speed", value: "10x faster", icon: Zap },
    { label: "Cost Reduction", value: "40%+", icon: TrendingUp },
    { label: "Reliability SLA", value: "99.9%", icon: ShieldCheck },
    { label: "Developers", value: "50k+", icon: Users },
  ];

  const solutions = [
    {
      title: "Zoho Creator",
      description: "A low-code application development platform that empowers businesses to build custom solutions with zero infrastructure management. Design, build, and deploy enterprise-grade apps in record time.",
      link: "/zoho/solutions/dev-platforms/zoho-creator",
      image: "/images/lap/lap1.webp",
      icon: Layout,
      highlights: [
        "Visual Application Builder",
        "Multi-platform Deployment",
        "Automated Workflows",
        "Extensive App Ecosystem"
      ],
    },
    {
      title: "Zoho Catalyst",
      description: "A serverless full-stack development platform for the modern era. Focus on your code while Catalyst handles the heavy lifting of infrastructure, scaling, and security.",
      link: "/zoho/solutions/dev-platforms/zoho-catalyst",
      image: "/images/lap/lap2.webp",
      icon: Cpu,
      highlights: [
        "Serverless Functions",
        "Integrated NoSQL DB",
        "Cloud Storage SDKs",
        "Automatic Auto-scaling"
      ],
    },
  ];

  return (
    <ZohoCategoryTemplate
      title="Modern Application Development Platforms"
      subtitle="Build Faster, Scale Smarter, Deploy Globally."
      description="Accelerate your digital transformation with Zoho's pro-code and low-code platforms. From visual app creation to ultra-reliable serverless infrastructure, we provide the tools required for world-class development."
      category="Developer Platforms"
      heroImage="/images/lap/lap1.webp"
      breadcrumb={[
        { label: "Home", href: "/zoho" },
        { label: "Solutions", href: "/zoho/solutions" },
        { label: "Dev Platforms", href: "/zoho/solutions/dev-platforms" },
      ]}
      solutions={solutions}
      stats={stats}
    />
  );
}


