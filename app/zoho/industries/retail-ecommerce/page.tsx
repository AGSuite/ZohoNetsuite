"use client";
import React from "react";
import ZohoIndustryTemplate, {
  IndustryPageData,
} from "../../components/industries/ZohoIndustryTemplate";
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
  ],
  challenges: [
    {
      title: "Siloed Channel Data",
      solution:
        "Zoho Commerce and Zoho Inventory unify your online and physical data — providing a real-time, global view of your business health.",
      image: "/images/people/laptopmen1.jpg",
    },
    {
      title: "Inventory Stockouts",
      solution:
        "Automated reorder points and intelligent demand forecasting in Zoho Inventory ensures you're never out of stock on high-velocity items.",
      image: "/images/lap/lap1.webp",
    },
    {
      title: "Complex Returns Processes",
      solution:
        "Zoho's automated RMA (Return Merchandise Authorization) workflows streamline refunds and stock replacement for customers.",
      image: "/images/people/fourteam.webp",
    },
    {
      title: "Manual Financial Reconciliation",
      solution:
        "Zoho Books integrates with popular payment gateways to automate reconciliation — ensuring your books are always current.",
      image: "/images/people/global.webp",
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
      question: "Can Zoho sync with Shopify or Amazon?",
      answer: "Yes. Zoho Inventory provides native connectors for Shopify, Amazon, eBay, and Etsy — ensuring live stock sync and automated order fulfillment.",
    },
    {
      question: "Do you support offline POS systems?",
      answer: "Yes. We can integrate your third-party POS or set up Zoho Checkout and custom Zoho Creator POS modules for physical retail stores.",
    },
    {
      question: "How does Zoho handle gift cards and loyalty programs?",
      answer: "We use Zoho CRM and custom Deluge scripts to build robust loyalty modules, providing customers with dynamic points and voucher redemptions.",
    },
  ],
  relatedIndustries: [
    { label: "Wholesale Distribution", href: "/zoho/industries/wholesale-distribution" },
    { label: "Software & Technology", href: "/zoho/industries/software-technology" },
    { label: "Manufacturing", href: "/zoho/industries/manufacturing" },
    { label: "Transportation", href: "/zoho/industries/transportation-logistics" },
  ],
};

export default function ZohoRetailEcommercePage() {
  return <ZohoIndustryTemplate data={data} />;
}
