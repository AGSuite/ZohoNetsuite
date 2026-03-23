"use client";

import React from "react";
import { 
  Users, 
  TrendingUp, 
  Target, 
  Database,
  ShieldCheck,
  Zap,
  Globe2,
  PieChart,
  ShoppingBag
} from "lucide-react";
import ZohoCategoryTemplate from "@/app/zoho/components/solutions/ZohoCategoryTemplate";

export default function SalesPage() {
  const stats = [
    { label: "Revenue Growth", value: "35%+", icon: TrendingUp },
    { label: "Sales Velocity", value: "40%+", icon: Zap },
    { label: "Lead Conversion", value: "2.5x", icon: Target },
    { label: "Satisfied Users", value: "250k+", icon: Users },
  ];

  const solutions = [
    {
      title: "Zoho CRM",
      description: "Convert more leads and engage customers with the world's most versatile CRM. Automate your sales processes, track deals, and gain real-time visibility with AI-powered insights.",
      link: "/zoho/solutions/sales/zoho-crm",
      image: "/images/people/laptopmen.webp",
      icon: Database,
      highlights: [
        "Zia AI Sales Assistant",
        "Pipeline Management",
        "Sales Automation",
        "Performance Analytics"
      ],
    },
    {
      title: "Zoho Bigin",
      description: "The simplest pipeline-centric CRM for small business teams. Focus on the details that matter and close deals faster with zero complexity.",
      link: "/zoho/solutions/sales/zoho-bigin",
      image: "/images/lap/lap2.webp",
      icon: Target,
      highlights: [
        "Pipeline-Centric View",
        "Email & Call Sync",
        "Mobile App Support",
        "Easy Data Migration"
      ],
    },
    {
      title: "Zoho CRM Plus",
      description: "A unified platform to manage every stage of your customer lifecycle. Align your sales, marketing, and support teams to deliver a cohesive experience.",
      link: "/zoho/solutions/sales/zoho-crm-plus",
      image: "/images/people/fourteam.webp",
      icon: Zap,
      highlights: [
        "Multi-department Sync",
        "Customer Experience Center",
        "Advanced Journey Planning",
        "Cross-team Intelligence"
      ],
    },
  ];

  return (
    <ZohoCategoryTemplate
      title="Sales & Customer Success Solutions"
      subtitle="Close More Deals, Build Lasting Relationships."
      description="Empower your sales organization with the tools required to identify, engage, and convert high-value prospects. From intelligent CRM to advanced pipeline management, Zoho Sales provides a unified platform for sustainable growth."
      category="Sales"
      heroImage="/images/people/laptopmen2.webp"
      breadcrumb={[
        { label: "Home", href: "/zoho" },
        { label: "Solutions", href: "/zoho/solutions" },
        { label: "Sales", href: "/zoho/solutions/sales" },
      ]}
      solutions={solutions}
      stats={stats}
    />
  );
}


