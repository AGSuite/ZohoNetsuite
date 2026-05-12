"use client";

import React from "react";





import ZohoIndustryTemplate, {
  IndustryPageData,
} from "@/app/zoho/components/industries/ZohoIndustryTemplate";
import { ShoppingCart, BarChart3, Users, TrendingUp } from "lucide-react";




const data: IndustryPageData = {
  industry: "Retail & E-commerce",
  heroTitle: "Deliver Perfect Omnichannel Experiences with Zoho",
  heroDescription:
    "Connect your online store, physical POS, and warehouse back-office on a single cloud platform. Deliver unified, personalized customer journeys across every channel.",
  heroImage: "/images/industries/ecommerce.webp",
  heroCardTitle: "Unified Commerce",
  heroCardSub: "Online · Offline · Inventory · CRM",
  heroTopCardTitle: "Trusted by 1000+ Retailers",
  heroTopCardSub: "Omnichannel · High-Scale · Global",
  introImage: "/images/lap/lap2.webp",
  introTitle: "Purpose-Built Zoho Tools for Modern Retail",
  introDescription:
    "Retailers face constant demand for seamless multi-channel experiences. Zoho's retail ecosystem provides a single source of truth that connects your storefront (Zoho Commerce), customer data (Zoho CRM), and inventory (Zoho Inventory).",
  introDescription2:
    "With AGSuite's retail implementation, you get real-time visibility into stock and sales across all stores and online marketplaces. We help retailers build scalable, future-ready business structures.",
  stats: [
    { icon: ShoppingCart, value: 1000, suffix: "+", label: "Retailers Served" },
    { icon: BarChart3, value: 50, suffix: "%", label: "Avg Sales Growth" },
    { icon: Users, value: 95, suffix: "%", label: "Customer Retention" },
    { icon: TrendingUp, value: 15, suffix: "+", label: "Years Experience" },
  ],
  benefits: [
    {
      title: "Omnichannel Order Management",
      description:
        "Consolidate orders from Shopify, Amazon, and your physical stores into a single Zoho flow — ensuring zero missed orders.",
      image: "/images/lap/lap4.webp",
    },
    {
      title: "Real-time Multi-store Inventory",
      description:
        "Automate stock sync across every location and channel, preventing overselling and ensuring stock accuracy.",
      image: "/images/lap/lap7_11zon.webp",
    },
    {
      title: "Personalized Customer 360",
      description:
        "Use Zoho CRM and Zoho Campaigns to build deep customer profiles and deliver personalized, segment-based marketing.",
      image: "/images/people/laptopmen2.webp",
    },
    {
      title: "Unified Financial Reporting",
      description:
        "Instantly see profitability by store, brand, or channel with Zoho Books' automated retail accounting features.",
      image: "/images/lap/lap9_11zon.webp",
    },
    {
      title: "Loyalty & Rewards Program",
      description:
        "Manage complex customer loyalty and reward programmes through Zoho CRM and custom Creator modules to drive repeat business.",
      image: "/images/lap/lap8_11zon.webp",
    },
  ],
  features: [
    {
      title: "Omnichannel Commerce",
      description: "Deliver a seamless shopping experience across all channels with Zoho Commerce.",
      image: "/images/lap/lap5.webp",
    },
    {
      title: "Inventory Management",
      description: "Optimize inventory levels and minimize stockouts across all locations with Zoho Inventory.",
      image: "/images/lap/lap1.webp",
    },
    {
      title: "Customer Relationship Management",
      description: "Centralize customer data and automate personalized marketing with Zoho CRM.",
      image: "/images/people/laptopgirl.webp",
    },
    {
      title: "Financial Management",
      description: "Automate bookkeeping and gain real-time visibility into your cash flow with Zoho Books.",
      image: "/images/lap/lap3.webp",
    },
    {
      title: "Order Management",
      description: "Automate the entire order-to-fulfillment cycle for faster delivery and improved customer satisfaction.",
      image: "/images/lap/lap6_11zon.webp",
    },
  ],
  challenges: [
    {
      title: "Siloed Channel Data",
      solution:
        "Zoho Commerce and Zoho Inventory unify your online and physical data — providing a real-time, global view of your business health.",
      image: "/images/challenges/ecommerce-sync.png",
    },
    {
      title: "Inventory Stockouts",
      solution:
        "Automated reorder points and intelligent demand forecasting in Zoho Inventory ensures you're never out of stock on high-velocity items.",
      image: "/images/challenges/inventory-blind-spots.png",
    },
    {
      title: "Complex Returns Processes",
      solution:
        "Zoho's automated RMA (Return Merchandise Authorization) workflows streamline refunds and stock replacement for customers.",
      image: "/images/challenges/fulfillment-delay.png",
    },
    {
      title: "Manual Financial Reconciliation",
      solution:
        "Zoho Books integrates with popular payment gateways to automate reconciliation — ensuring your books are always current.",
      image: "/images/challenges/reconciliation.png",
    },
  ],
  pricingTiers: [
    {
      name: "Starter",
      price: "₹45,000",
      description: "For small boutiques or standalone shops.",
      features: [
        "Zoho Books (Retail Accounting)",
        "Zoho Inventory (Standard)",
        "Social Media Ads Manager",
        "Point of Sale Connector",
        "Email Support",
      ],
    },
    {
      name: "Professional",
      price: "₹95,000",
      description: "Full omnichannel suite for growing brands.",
      features: [
        "Zoho Commerce Cloud",
        "Adv. Multi-location Inventory",
        "Marketplace Integrations (Shopify/Amazon)",
        "Customer 360 Dashboards",
        "SLA-backed Support",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For multi-brand or global retail operations.",
      features: [
        "Zoho One (Global Retail)",
        "Advanced Demand Planning",
        "Warehouse Management (WMS)",
        "High-Volume API Access",
        "Dedicated Success Manager",
        "24/7 Priority Support",
      ],
    },
  ],
  faqs: [
    {
      question: "Can Zoho integrate with Shopify and Amazon?",
      answer: "Yes. Zoho Inventory has native, bi-directional connectors for Shopify, Amazon, eBay, and Etsy, syncing orders and stock in real-time.",
    },
    {
      question: "Does Zoho support barcode scanning for retail?",
      answer: "Yes. Zoho Inventory supports mobile barcode scanning for receiving, picking, and packing, as well as for quick stock takes in-store.",
    },
    {
      question: "Can we manage loyalty programmes through Zoho?",
      answer: "Yes. Through Zoho CRM and custom Creator modules, we can build and manage complex customer loyalty and reward programmes.",
    },
  ],
  relatedIndustries: [
    { label: "Wholesale Distribution", href: "/zoho/industries/wholesale" },
    { label: "Manufacturing", href: "/zoho/industries/manufacturing" },
    { label: "IT Services", href: "/zoho/industries/it-services" },
    { label: "Software & Technology", href: "/zoho/industries/software" },
  ],
};

export default function ZohoRetailPage() {
  return <ZohoIndustryTemplate data={data} />;
}




