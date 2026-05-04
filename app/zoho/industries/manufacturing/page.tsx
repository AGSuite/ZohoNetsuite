"use client";

import React from "react";




import ZohoIndustryTemplate, {
  IndustryPageData,
} from "@/app/zoho/components/industries/ZohoIndustryTemplate";
import { Factory, BarChart3, Package, TrendingUp } from "lucide-react";




const data: IndustryPageData = {
  industry: "Manufacturing",
  heroTitle: "Build the Future of Your Factory Floor with Zoho",
  heroDescription:
    "Streamline production cycles, tighten supply chains, and gain real-time visibility with the unified Zoho cloud suite built for modern manufacturers.",
  heroImage: "/images/industries/manufacture-compressed-1.webp",
  heroCardTitle: "Shop Floor Control",
  heroCardSub: "Production · Inventory · Financials · Supplies",
  heroTopCardTitle: "Trusted by 250+ Manufacturers",
  heroTopCardSub: "Certified · Cloud-Native · Scalable",
  introImage: "/images/lap/lap2.webp",
  introTitle: "Purpose-Built Zoho Tools for Modern Manufacturers",
  introDescription:
    "Manufacturing businesses face relentless pressure — rising costs, supply chain volatility, and the need for real-time data. Zoho's cloud ecosystem provides a single, unified system that connects every process from production planning to financial close.",
  introDescription2:
    "With AGSuite's certified Zoho implementation, manufacturers get a system tailored to their workflows — not the other way around. Our team has delivered Zoho for discrete and process manufacturers across India and globally.",
  stats: [
    { icon: Factory, value: 120, suffix: "+", label: "Manufacturers Served" },
    { icon: BarChart3, value: 40, suffix: "%", label: "Avg Cost Reduction" },
    { icon: Package, value: 99, suffix: "%", label: "Inventory Accuracy" },
    { icon: TrendingUp, value: 15, suffix: "+", label: "Years Experience" },
  ],
  benefits: [
    {
      title: "Production Planning & Scheduling",
      description:
        "Plan and schedule production runs, manage work orders, and track machine utilisation using Zoho Projects and Zoho Creator — all from a single dashboard.",
      image: "/images/lap/lap4.webp",
    },
    {
      title: "Multi-Location Inventory",
      description:
        "Real-time inventory visibility across all warehouses with Zoho Inventory. Manage raw materials, WIP, and finished goods with bin-level tracking.",
      image: "/images/lap/lap7_11zon.webp",
    },
    {
      title: "Quality Management",
      description:
        "Define quality standards, automate inspection workflows, and track defect rates natively inside Zoho Creator custom modules.",
      image: "/images/people/laptopmen2.webp",
    },
    {
      title: "Supply Chain Visibility",
      description:
        "Connect with suppliers, manage purchase orders, track deliveries, and get real-time landed cost visibility across your entire supply chain with Zoho Books.",
      image: "/images/lap/lap9_11zon.webp",
    },
  ],
  challenges: [
    {
      title: "Disconnected Systems",
      solution:
        "Zoho One unifies CRM, MRP, and financials on a single platform — eliminating data silos and manual rekeying across disconnected legacy systems.",
      image: "/images/people/laptopmen1.jpg",
    },
    {
      title: "Inventory Blind Spots",
      solution:
        "Zoho's real-time inventory management with demand-driven replenishment ensures you always have the right stock at the right location — no more stockouts.",
      image: "/images/lap/lap1.webp",
    },
    {
      title: "Multi-Level BOM Management",
      solution:
        "Zoho Creator supports multi-level BOMs, phantom assemblies, and routing with custom logic management and full version control.",
      image: "/images/people/fourteam.webp",
    },
    {
      title: "Inaccurate Job Costing",
      solution:
        "Zoho Books tracks materials, labour, and overhead per work order — giving you true product margins in real time through custom financial reporting.",
      image: "/images/people/global.webp",
    },
  ],
  pricingTiers: [
    {
      name: "Starter",
      price: "₹60,000",
      description: "For small manufacturers starting their digital journey.",
      features: [
        "Zoho Books (Financials)",
        "Zoho Inventory (Basic)",
        "Work Orders Management",
        "Standard Reporting",
        "Email Support",
      ],
    },
    {
      name: "Professional",
      price: "₹1,20,000",
      description: "Full manufacturing suite for mid-size units.",
      features: [
        "Zoho Creator (MRP/MPS)",
        "Multi-location Inventory",
        "BOM & Routing Management",
        "Zoho Books Integration",
        "Supply Chain Suite",
        "SLA-backed Support",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large-scale or global manufacturing operations.",
      features: [
        "Zoho One (Global Org)",
        "Advanced Demand Planning",
        "AI-Driven Shop Floor Control",
        "Custom Deluge Integrations",
        "Dedicated Implementation Manager",
        "24/7 Priority Support",
      ],
    },
  ],
  faqs: [
    {
      question: "Does Zoho support multi-level BOMs?",
      answer: "Yes. Through Zoho Creator and Zoho Inventory, we can implement multi-level bill of materials with assembly tracking and component substitution.",
    },
    {
      question: "Can Zoho integrate with our shop floor machines?",
      answer: "Absolutely. Zoho Creator can connect with IoT devices and shop floor equipment via APIs, allowing real-time data capture from production machines.",
    },
    {
      question: "How long is a typical Zoho manufacturing rollout?",
      answer: "Most implementations take 2–4 months, depending on the complexity of your custom manufacturing processes and existing data migration.",
    },
  ],
  relatedIndustries: [
    { label: "Wholesale Distribution", href: "/zoho/industries/wholesale" },
    { label: "Retail & E-Commerce", href: "/zoho/industries/retail" },
    { label: "IT Services", href: "/zoho/industries/it-services" },
    { label: "Software & Technology", href: "/zoho/industries/software" },
  ],
};

export default function ZohoManufacturingPage() {
  return <ZohoIndustryTemplate data={data} />;
}

