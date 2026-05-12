"use client";

import React from "react";



import {
  TrendingUp,
  Heart,
  Target,
  Wallet,
  ShieldCheck,
  Zap,
  Globe2,
  Clock,
  Briefcase,
  Users,
  CheckCircle,
  BarChart3,
  Calendar,
  MapPin,
  Truck,
  ClipboardList,
  Wrench,
  Smartphone
} from "lucide-react";
import ZohoSolutionTemplate from "@/app/zoho/components/solutions/ZohoSolutionTemplate";



export default function ZohoFsmPage() {
  const stats = [
    { label: "Dispatch Efficiency", value: 40, suffix: "% higher", icon: Truck },
    { label: "On-Time Completion", value: 95, suffix: "%", icon: CheckCircle },
    { label: "First-Time Fix Rate", value: 85, suffix: "%", icon: Wrench },
    { label: "Service Revenue", value: 25, suffix: "% increase", icon: TrendingUp },
  ];

  const modules = [
    {
      title: "Work Order Management",
      description: "Centralize and track all maintenance, install, and repair requests from creation to closure.",
      image: "/images/modules/working module.webp",
      color: "#1a7a55",
      rgb: "18,108,72",
    },
    {
      title: "Smart Scheduling",
      description: "Automate appointment bookings based on travel time, skills, and availability for maximum productivity.",
      image: "/images/modules/dashboard module.webp",
      color: "#a05a18",
      rgb: "145,75,18",
    },
    {
      title: "Dispatcher Console",
      description: "Gain a birds-eye view of your entire field operation with map-based tracking and drag-and-drop dispatch.",
      image: "/images/modules/dashbord module.webp",
      color: "#4a3a8a",
      rgb: "65,45,130",
    },
    {
      title: "Mobile Force App",
      description: "Empower your field team with a native app for job updates, digital signatures, and asset history access.",
      image: "/images/modules/mobile module.webp",
      color: "#1a6080",
      rgb: "20,88,115",
    },
    {
      title: "Inventory & Spare Parts",
      description: "Track parts and tools in vans or warehouses in real-time, ensuring technicians always have what they need.",
      image: "/images/modules/account modules.webp",
      color: "#6a2575",
      rgb: "95,30,105",
    },
    {
      title: "Preventive Maintenance",
      description: "Schedule recurring service tasks automatically based on time intervals or asset usage metrics.",
      image: "/images/modules/any modules.webp",
      color: "#154e8a",
      rgb: "18,68,130",
    },
    {
      title: "Customer Portal",
      description: "Allow your customers to book appointments, track technicians, and view history from a branded landing page.",
      image: "/images/modules/chatt mdoule.webp",
      color: "#1a6545",
      rgb: "20,95,60",
    },
    {
      title: "Field Quoting & Billing",
      description: "Generate quotes and invoices on-site directly from the work order and accept digital payments instantly.",
      image: "/images/modules/sheet module.webp",
      color: "#8a2a3a",
      rgb: "130,35,48",
    },
    {
      title: "Service Contracts (SLA)",
      description: "Manage complex service level agreements and ensure your priority clients always get the fastest response.",
      image: "/images/modules/managging together module.webp",
      color: "#0f4e8a",
      rgb: "12,68,130",
    },
    {
      title: "FSM Analytics",
      description: "Measure everything from tech performance to regional profitability with detailed field service reports.",
      image: "/images/modules/module8.webp",
      color: "#523a8a",
      rgb: "75,48,130",
    },
    {
      title: "Route Optimization",
      description: "Cut down on fuel costs and travel time with intelligent routing and live traffic integration.",
      image: "/images/modules/csm modules.webp",
      color: "#1a7a55",
      rgb: "18,108,72",
    },
    {
      title: "Asset Management",
      description: "Maintain a complete history of all customer equipment, including warranty status and past repairs.",
      image: "/images/modules/any module.webp",
      color: "#a05a18",
      rgb: "145,75,18",
    },
  ];

  const benefits = [
    {
      title: "Optimized Field Operations",
      description: "Zoho FSM turns your field service into a profit center. Maximize every technician's day and reduce total operational costs.",
      image: "/images/people/fourteam.webp",
      points: [
        "Reduce travel time by over 25%",
        "Increase daily job completion counts",
        "Minimize no-shows with automated alerts",
        "Real-time map-based technician tracking"
      ],
    },
    {
      title: "Empowered Field Technicians",
      description: "Give your team the tools they deserve. A dedicated mobile app handles everything from job context to billing on-site.",
      image: "/images/lap/lap2.webp",
      points: [
        "Native offline mobile app support",
        "Access equipment manuals and history",
        "Digital signature and photo capture",
        "On-site inventory and part requests"
      ],
    },
    {
      title: "Delight Your Customers",
      description: "Transparency breeds trust. Keep your customers informed with live updates and an easy-to-use booking portal.",
      image: "/images/people/laptopmen2.webp",
      points: [
        "Self-service online booking portal",
        "Real-time technician arrival tracking",
        "Automated appointment reminders",
        "Instant digital service reports"
      ],
    },
    {
      title: "Integrated Business Flows",
      description: "Your field service should never be a silo. Zoho FSM syncs natively with CRM, Inventory, and Accounting.",
      image: "/images/lap/lap1.webp",
      points: [
        "Seamless lead-to-work order flow",
        "Real-time parts inventory sync",
        "Automated accounting journal entries",
        "Unified reports across entire business"
      ],
    },
  ];

  return (
    <ZohoSolutionTemplate
      title="Zoho FSM — Field Service Management Software"
      subtitle="Better Scheduling, Faster Service, Higher Profits."
      description="Zoho FSM is a comprehensive cloud-based platform to manage your entire field operations — from scheduling and dispatching to invoicing and customer management."
      introDescription2="Zoho FSM empowers your field technicians with mobile-first job management, real-time schedule optimization, and seamless invoicing directly from the field."
      breadcrumb={[
        { label: "Home", href: "/zoho" },
        { label: "Solutions", href: "/zoho/solutions" },
        { label: "Zoho FSM", href: "/zoho-fsm" },
      ]}
      stats={stats}
      modules={modules}
      benefits={benefits}
      heroImage="/images/lap/lap4.webp"
      whatIsImage="/images/zoho-dashboards/zoho-FSM.webp"
      heroCard1={{
        title: "95% Satisfaction",
        subtitle: "Accurate scheduling and on-time service.",
        icon: CheckCircle
      }}
      heroCard2={{
        title: "Smart Dispatch",
        subtitle: "AI-driven technician and route optimization.",
        icon: MapPin
      }}
      pricingInfo={{
        description: "Scale your field force with flexible per-user pricing. No long-term contracts, pay for what you use.",
        plans: [
          "Standard: $15 /user/month",
          "Professional: $30 /user/month",
          "Enterprise: $50 /user/month",
          "Yearly discounts available",
        ],
        ctaText: "Get a Quote",
      }}
    />
  );
}






