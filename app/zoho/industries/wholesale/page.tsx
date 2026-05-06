"use client";

import React from "react";





import ZohoIndustryTemplate, {
  IndustryPageData,
} from "@/app/zoho/components/industries/ZohoIndustryTemplate";
import { Truck, BarChart3, Package, TrendingUp } from "lucide-react";




const data: IndustryPageData = {
  industry: "Wholesale Distribution",
  heroTitle: "Maximize Supply Chain Efficiency with Zoho",
  heroDescription:
    "Run your entire distribution business on a unified cloud suite. Automate procurement, optimize warehouse operations, and improve order fulfillment to scale globally.",
  heroImage: "/images/industries/Wholesale-Distribution-compressed.webp",
  heroCardTitle: "Warehouse Ops Control",
  heroCardSub: "Procurement · Orders · Inventory · Logistics",
  heroTopCardTitle: "Trusted by 400+ Distributors",
  heroTopCardSub: "B2B · Logistics-Ready · High-Volume",
  introImage: "/images/lap/lap6_11zon.webp",
  introTitle: "Purpose-Built Zoho Tools for Distributors",
  introDescription:
    "Wholesale distributors face a constant juggle between supplier management and customer demand. Zoho's distribution ecosystem provides a single source of truth that connects your purchasing (Zoho Inventory), sales (Zoho CRM), and financials (Zoho Books).",
  introDescription2:
    "With AGSuite's distribution implementation, you get real-time visibility into landed costs and stock aging. We help distributors build efficient, high-margin business structures across global borders.",
  stats: [
    { icon: Truck, value: 400, suffix: "+", label: "Distributors Served" },
    { icon: BarChart3, value: 35, suffix: "%", label: "Avg Cost Reduction" },
    { icon: Package, value: 99, suffix: ".5%", label: "Inventory Accuracy" },
    { icon: TrendingUp, value: 15, suffix: "+", label: "Years Experience" },
  ],
  benefits: [
    {
      title: "Intelligent Procurement",
      description:
        "Automate vendor selection and purchase order creation based on dynamic stocking levels and historical lead times in Zoho Inventory.",
      image: "/images/lap/lap4.webp",
    },
    {
      title: "Multi-Warehouse Management",
      description:
        "Track inventory levels across multiple geographical locations and warehouses in real-time, with automated stock transfer workflows.",
      image: "/images/lap/lap7_11zon.webp",
    },
    {
      title: "Consolidated Billing & Tallying",
      description:
        "Automate high-volume billing, manage multi-currency accounts, and get real-time bank reconciliation through your Zoho Books environment.",
      image: "/images/people/laptopmen2.webp",
    },
    {
      title: "End-to-End Fulfillment",
      description:
        "Streamline pick-pack-ship sequences and integrate with major global shipping carriers to provide live tracking updates to customers.",
      image: "/images/lap/lap9_11zon.webp",
    },
    {
      title: "Demand Planning & Forecasting",
      description:
        "Predict future demand and optimize stocking levels using AI-driven analytics and historical sales trends in Zoho Inventory.",
      image: "/images/lap/lap8_11zon.webp",
    },
  ],
  features: [
    {
      title: "Financial Management",
      description: "Automate bookkeeping and gain real-time visibility into your cash flow with Zoho Books.",
      image: "/images/lap/lap2.webp",
    },
    {
      title: "Inventory Management",
      description: "Manage stock across multiple locations and automate reordering with Zoho Inventory.",
      image: "/images/lap/lap1.webp",
    },
    {
      title: "Customer Relationship Management",
      description: "Centralize your sales and customer data to improve relationships and sales performance with Zoho CRM.",
      image: "/images/people/laptopgirl.webp",
    },
    {
      title: "E-commerce Integration",
      description: "Connect your online store with Zoho to automate order fulfillment and inventory updates.",
      image: "/images/lap/lap3.webp",
    },
    {
      title: "Order Management",
      description: "Automate the entire order-to-fulfillment cycle for faster delivery and improved customer satisfaction.",
      image: "/images/lap/lap5.webp",
    },
  ],
  challenges: [
    {
      title: "Landed Cost Blindness",
      solution:
        "Zoho Books and Inventory account for every cost—freight, duty, and handling—to provide you with accurate true-product margins.",
      image: "/images/challenges/profitability.png",
    },
    {
      title: "Inefficient Picking & Packing",
      solution:
        "Zoho's automated pick-lists and barcode scanning simplify warehouse flow and eliminate human-error in order fulfillment.",
      image: "/images/challenges/fulfillment-delay.png",
    },
    {
      title: "Inaccurate Demand Forecasting",
      solution:
        "AI-enhanced reports analyze historical data to provide you with smart reorder points and sales forecasting across your distribution channels.",
      image: "/images/challenges/inventory-blind-spots.png",
    },
    {
      title: "Complex B2B Vendor Relations",
      solution:
        "A dedicated B2B Portal within Zoho allows your distributors and vendors to manage their own orders, invoices, and payment statuses.",
      image: "/images/challenges/data-silos.png",
    },
  ],
  pricingTiers: [
    {
      name: "Starter",
      price: "₹50,000",
      description: "For small local wholesale businesses.",
      features: [
        "Zoho Books (Inventory + Sales)",
        "Single-warehouse Tracking",
        "E-Way bill integration",
        "GST statutory reporting",
        "Email Support",
      ],
    },
    {
      name: "Professional",
      price: "₹1,10,000",
      description: "Full suite for multi-state distributors.",
      features: [
        "Adv. Multi-location Inventory",
        "Warehouse Pick/Pack Sequences",
        "Shipping carrier integrations",
        "Landed cost automation",
        "SLA-backed Support",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large-scale or global bulk distributors.",
      features: [
        "Zoho One (Global Distribution)",
        "Advanced Demand Planning",
        "WMS + Barcode Optimization",
        "B2B Order Portals",
        "Dedicated Success Manager",
        "24/7 Priority Support",
      ],
    },
  ],
  faqs: [
    {
      question: "Can Zoho handle multi-currency for international trade?",
      answer: "Yes. Zoho Books supports 160+ currencies and provides real-time exchange rate updates, making it ideal for global distribution businesses.",
    },
    {
      question: "Does Zoho integrate with shipping carriers like FedEx or DHL?",
      answer: "Yes. Zoho Inventory has direct integrations with 30+ global shipping carriers, providing live rates and automated tracking number generation.",
    },
    {
      question: "Can we implement a B2B portal for our bulk customers?",
      answer: "Absolutely. We can configure a Zoho-powered B2B portal where your bulk clients can browse your catalog, place orders, and pay their invoices online.",
    },
  ],
  relatedIndustries: [
    { label: "Manufacturing", href: "/zoho/industries/manufacturing" },
    { label: "Retail & E-Commerce", href: "/zoho/industries/retail" },
    { label: "IT Services", href: "/zoho/industries/it-services" },
    { label: "Software & Technology", href: "/zoho/industries/software" },
  ],
};

export default function ZohoWholesalePage() {
  return <ZohoIndustryTemplate data={data} />;
}
