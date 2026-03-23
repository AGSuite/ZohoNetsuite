"use client";
import React from "react";
import ZohoIndustryTemplate, {
  IndustryPageData,
} from "../../components/industries/ZohoIndustryTemplate";
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
  introImage: "/images/lap/lap2.webp",
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
  ],
  challenges: [
    {
      title: "Landed Cost Blindness",
      solution:
        "Zoho Books and Inventory account for every cost—freight, duty, and handling—to provide you with accurate true-product margins.",
      image: "/images/people/laptopmen1.jpg",
    },
    {
      title: "Inefficient Picking & Packing",
      solution:
        "Zoho's automated pick-lists and barcode scanning simplify warehouse flow and eliminate human-error in order fulfillment.",
      image: "/images/lap/lap1.webp",
    },
    {
      title: "Inaccurate Demand Forecasting",
      solution:
        "AI-enhanced reports analyze historical data to provide you with smart reorder points and sales forecasting across your distribution channels.",
      image: "/images/people/fourteam.webp",
    },
    {
      title: "Complex B2B Vendor Relations",
      solution:
        "A dedicated B2B Portal within Zoho allows your distributors and vendors to manage their own orders, invoices, and payment statuses.",
      image: "/images/people/global.webp",
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
      question: "Does Zoho support E-way bill generation?",
      answer: "Yes. Zoho Inventory and Zoho Books provide native integrations for Indian E-way bill and E-invoicing, essential for local distributors.",
    },
    {
      question: "Can Zoho track landed costs including customs?",
      answer: "Yes. We can configure Zoho Books to track all associated costs (freight, duties, insurances) and allocate them to the unit price of items.",
    },
    {
      question: "How does Zoho handle serial and lot tracking?",
      answer: "Zoho Inventory provides full lot and serial number tracking across the entire lifecycle — from procurement to final customer delivery.",
    },
  ],
  relatedIndustries: [
    { label: "Manufacturing", href: "/zoho/industries/manufacturing" },
    { label: "Retail & E-commerce", href: "/zoho/industries/retail-ecommerce" },
    { label: "Transportation", href: "/zoho/industries/transportation-logistics" },
    { label: "IT Services", href: "/zoho/industries/it-services" },
  ],
};

export default function ZohoWholesaleDistributionPage() {
  return <ZohoIndustryTemplate data={data} />;
}
