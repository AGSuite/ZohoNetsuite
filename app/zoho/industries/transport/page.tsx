"use client";

import React from "react";




import ZohoIndustryTemplate, {
  IndustryPageData,
} from "@/app/zoho/components/industries/ZohoIndustryTemplate";
import { Map, BarChart3, Truck, TrendingUp } from "lucide-react";




const data: IndustryPageData = {
  industry: "Transportation & Logistics",
  heroTitle: "Drive Operational Excellence with Zoho",
  heroDescription:
    "Gain complete visibility across your global shipments, fleet management, and logistics financials with the unified Zoho cloud suite tailored for the transportation industry.",
  heroImage: "/images/industries/logistics-means-transport-together-with-technological-futuristic-holograms (2)_11zon.jpg",
  heroCardTitle: "Fleet & Asset Control",
  heroCardSub: "Dispatch · Logistics · Billing · Financials",
  heroTopCardTitle: "Trusted by 350+ Logistics Firms",
  heroTopCardSub: "Logistics-Ready · Cloud-Native · High-Scale",
  introImage: "/images/lap/lap2.webp",
  introTitle: "Purpose-Built Zoho Tools for Logistics",
  introDescription:
    "Transportation and logistics industries face constant pressure—managing complex dispatch schedules, tracking fleet maintenance, and ensuring accurate billing across global borders. Zoho's ecosystem provides a single tool that connects your operations (Zoho Creator) with sales (Zoho CRM) and finance (Zoho Books).",
  introDescription2:
    "With AGSuite's logistics implementation, brands get real-time visibility into route-wise profitability and fleet utilization. We help logistics industries build scalable, future-ready business structures.",
  stats: [
    { icon: Map, value: 350, suffix: "+", label: "Logistics firms served" },
    { icon: BarChart3, value: 30, suffix: "%", label: "Avg Cost Reduction" },
    { icon: Truck, value: 5000, suffix: "+", label: "Assets Tracked" },
    { icon: TrendingUp, value: 15, suffix: "+", label: "Years Experience" },
  ],
  benefits: [
    {
      title: "Real-time Dispatch Management",
      description:
        "Manage dispatch schedules, track driver assignments, and visualize global route progress using custom Zoho Creator modules.",
      image: "/images/lap/lap4.webp",
    },
    {
      title: "Automated Fleet Maintenance",
      description:
        "Ensure your fleet is always safe with automated maintenance alerts, fuel consumption tracking, and vehicle history logs within Zoho.",
      image: "/images/lap/lap7_11zon.webp",
    },
    {
      title: "Unified Logistics Accounting",
      description:
        "Automate complex freight billing, manage multi-currency accounts, and get real-time bank reconciliation through your Zoho Books environment.",
      image: "/images/people/laptopmen2.webp",
    },
    {
      title: "GPS-Enabled Tracking visibility",
      description:
        "Provide your customers with live tracking updates and secure delivery confirmations with Zoho's native mobile app integrations.",
      image: "/images/lap/lap9_11zon.webp",
    },
  ],
  challenges: [
    {
      title: "Disconnected Dispatch & Finance",
      solution:
        "Zoho One unifies your operations team with your finance department, ensuring accurate billing and payroll based on actual dispatch data.",
      image: "/images/people/laptopmen1.jpg",
    },
    {
      title: "Fuel & Asset Blind Spots",
      solution:
        "Zoho Analytics identifies fuel efficiency patterns and maintenance gaps across your fleet, helping you reduce operational overhead.",
      image: "/images/lap/lap1.webp",
    },
    {
      title: "Manual E-Way Billing",
      solution:
        "Zoho Books and Inventory provide native integrations for Indian E-way bill and E-invoicing, essential for local logistics.",
      image: "/images/people/fourteam.webp",
    },
    {
      title: "Complexity in Multi-Border Ops",
      solution:
        "Zoho Books supports multi-currency and global taxation compliance, perfect for logistics industries with international routes.",
      image: "/images/people/global.webp",
    },
  ],
  pricingTiers: [
    {
      name: "Starter",
      price: "₹50,000",
      description: "For small local transport businesses.",
      features: [
        "Zoho Books (Logs + Sales)",
        "Basic Dispatch Management",
        "E-Way bill integration",
        "GST statutory reporting",
        "Email Support",
      ],
    },
    {
      name: "Professional",
      price: "₹1,15,000",
      description: "Full suite for multi-state logistics units.",
      features: [
        "Adv. Dispatch & Scheduling",
        "Fleet Maintenance Logs",
        "CRM integration for clients",
        "Adv. Analytics (Fleet KPIs)",
        "SLA-backed Support",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large-scale global transportation groups.",
      features: [
        "Zoho One (Global Logistics)",
        "Advanced Asset Lifecycle",
        "WMS + Driver Management",
        "B2B Order Portals",
        "Dedicated Success Manager",
        "24/7 Priority Support",
      ],
    },
  ],
  faqs: [
    {
      question: "Can Zoho track fleet fuel consumption?",
      answer: "Yes. Using custom Zoho Creator modules, we can build robust logs to track fuel entry, odometer readings, and average consumption per asset.",
    },
    {
      question: "Do you support delivery confirmations?",
      answer: "Yes. Zoho's mobile apps (CRM/Creator) allow drivers to upload photos or signatures upon delivery, syncing instantly with your office back-end.",
    },
    {
      question: "How do you handle multi-currency freight rates?",
      answer: "Zoho Books allows you to define price lists and manage transactions in any currency, updating exchange rates automatically for accurate financial reporting.",
    },
  ],
  relatedIndustries: [
    { label: "Wholesale Distribution", href: "/zoho/industries/wholesale" },
    { label: "Manufacturing", href: "/zoho/industries/manufacturing" },
    { label: "Retail & E-commerce", href: "/zoho/industries/retail" },
    { label: "IT Services", href: "/zoho/industries/it-services" },
  ],
};

export default function ZohoTransportPage() {
  return <ZohoIndustryTemplate data={data} />;
}

