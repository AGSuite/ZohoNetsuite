"use client";

import React from "react";
import { 
  Megaphone, 
  TrendingUp, 
  Target, 
  Globe2,
  ShieldCheck,
  Zap,
  Users,
  Share2,
  ShoppingBag
} from "lucide-react";
import ZohoCategoryTemplate from "@/app/zoho/components/solutions/ZohoCategoryTemplate";

export default function MarketingPage() {
  const stats = [
    { label: "Campaign ROI", value: "45%+", icon: TrendingUp },
    { label: "Lead Generation", value: "2x faster", icon: Zap },
    { label: "Multi-channel Reach", value: "100%", icon: Globe2 },
    { label: "Brand Interaction", value: "250M+", icon: Users },
  ];

  const solutions = [
    {
      title: "Zoho Social",
      description: "Manage your entire brand presence across all social networks from a single dashboard. Plan, schedule, monitor, and analyze performance with ease.",
      link: "/zoho/solutions/marketing/zoho-social",
      image: "/images/lap/lap5.webp",
      icon: Share2,
      highlights: [
        "Bulk Scheduling Tools",
        "Social Listening Engine",
        "Engagement Dashboards",
        "Predictive Post Timing"
      ],
    },
    {
      title: "Zoho Campaigns",
      description: "Build beautiful email campaigns and automated customer journeys that feel direct and personal. Drive more revenue with intelligent segmentation.",
      link: "/zoho/solutions/marketing/zoho-campaigns",
      image: "/images/lap/lap2.webp",
      icon: Megaphone,
      highlights: [
        "Drag-and-drop Builder",
        "Marketing Automation",
        "A/B Testing Tools",
        "Email Deliverability Tech"
      ],
    },
    {
      title: "Zoho Commerce",
      description: "A complete platform to build, manage, and scale your online store. Integrated inventory, shipping, and payments in one world-class suite.",
      link: "/zoho/solutions/marketing/zoho-commerce",
      image: "/images/lap/lap3.webp",
      icon: ShoppingBag,
      highlights: [
        "Storefront Builder",
        "Inventory Sync",
        "Global Payment Gateways",
        "Order Management"
      ],
    },
    {
      title: "Zoho Sites",
      description: "Zero-code website building for professional brands. Launch faster with beautiful templates and powerful built-in marketing tools.",
      link: "/zoho/solutions/marketing/zoho-sites",
      image: "/images/lap/lap1.webp",
      icon: Globe2,
      highlights: [
        "Visual Page Builder",
        "Responsive Design",
        "Built-in SEO Tools",
        "Member Portal Support"
      ],
    },
  ];

  return (
    <ZohoCategoryTemplate
      title="Marketing & Experience Solutions"
      subtitle="Engage Your Audience, Amplify Your Brand."
      description="Connect with your audience wherever they are. From world-class social media management to intelligent email automation and commerce, Zoho Marketing provides the essential toolset for the modern digital brand."
      category="Marketing"
      heroImage="/images/people/laptopgirl.webp"
      breadcrumb={[
        { label: "Home", href: "/zoho" },
        { label: "Solutions", href: "/zoho/solutions" },
        { label: "Marketing", href: "/zoho/solutions/marketing" },
      ]}
      solutions={solutions}
      stats={stats}
    />
  );
}


