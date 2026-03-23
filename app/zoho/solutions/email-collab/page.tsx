"use client";

import React from "react";
import { 
  Mail, 
  Users, 
  Globe2, 
  ShieldCheck,
  Zap,
  TrendingUp,
  MessageSquare,
  Video,
  FileText,
  Layout,
  Layers,
  Cloud
} from "lucide-react";
import ZohoCategoryTemplate from "@/app/zoho/components/solutions/ZohoCategoryTemplate";

export default function EmailCollabPage() {
  const stats = [
    { label: "Team Productivity", value: "35%+", icon: Zap },
    { label: "Security Uptime", value: "99.9%", icon: ShieldCheck },
    { label: "Storage Efficiency", value: "40%+", icon: Cloud },
    { label: "Active Users", value: "100M+", icon: Users },
  ];

  const solutions = [
    {
      title: "Zoho Mail",
      description: "Secure, ad-free, and privacy-first business email for your entire organization. Native integration with CRM and projects ensures your team stays in context.",
      link: "/zoho/solutions/email-collab/zoho-mail",
      image: "/images/people/laptopgirl.webp",
      icon: Mail,
      highlights: [
        "Ad-Free Secure Inbox",
        "Unified Admin Console",
        "Control Panel & eDiscovery",
        "Integrated Tasks & Notes"
      ],
    },
    {
      title: "Zoho Workplace",
      description: "Everything your team needs to create, collaborate, and communicate. A unified suite of productivity apps including mail, chat, documents, and meetings.",
      link: "/zoho/solutions/email-collab/zoho-workplace",
      image: "/images/lap/lap10_11zon.webp",
      icon: Globe2,
      highlights: [
        "Business Email & Chat",
        "Online Office Suite",
        "Video Meeting Platform",
        "Privacy-First Cloud Storage"
      ],
    },
  ];

  return (
    <ZohoCategoryTemplate
      title="Secure Email & Team Collaboration Solutions"
      subtitle="The Privacy-First Workspace for Global Teams."
      description="Empower your team with a unified, secure, and ad-free collaboration ecosystem. Zoho's workspace solutions provide the essential tools required to communicate clearly and create efficiently from anywhere in the world."
      category="Email & Collaboration"
      heroImage="/images/people/fourteam.webp"
      breadcrumb={[
        { label: "Home", href: "/zoho" },
        { label: "Solutions", href: "/zoho/solutions" },
        { label: "Email & Collaboration", href: "/zoho/solutions/email-collab" },
      ]}
      solutions={solutions}
      stats={stats}
    />
  );
}


