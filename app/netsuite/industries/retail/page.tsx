"use client";

import IndustryTemplate, {
  IndustryPageData,
} from "@/app/netsuite/industries/_template/IndustryTemplate";
import { ShoppingCart, BarChart3, Package, Globe } from "lucide-react";





const data: IndustryPageData = {
  industry: "Retail & E-Commerce",
  heroTitle: "NetSuite for Retail & E-Commerce",
  heroDescription:
    "Power your omnichannel retail operation from a single cloud platform. NetSuite connects your online store, physical locations, inventory, and financials — giving customers a seamless experience everywhere they shop.",
  heroImage: "/images/hero/industry_retail_hero.png",
  heroCardTitle: "Unified Omnichannel Retail ERP",
  heroCardSub: "POS · E-Commerce · Inventory · Financials",
  heroTopCardTitle: "Trusted by 500+ Retailers",
  heroTopCardSub: "B2B · B2C · Omnichannel · DTC",
  introImage: "/images/lap/lap6_11zon.webp",
  introTitle: "Unified Commerce for B2B & B2C Retail",
  introDescription:
    "Retail businesses operate across multiple channels — their website, marketplaces, physical stores, and wholesale. Managing these on disconnected systems leads to inventory errors, poor customer experiences, and missed revenue. NetSuite SuiteCommerce unifies them all.",
  introDescription2:
    "With real-time inventory visibility, a built-in POS, native e-commerce storefront, and integrated financials, NetSuite gives retailers the single source of truth they need to grow profitably across every channel.",
  stats: [
    {
      icon: ShoppingCart,
      value: 500,
      suffix: "+",
      label: "Retailers on NetSuite",
    },
    { icon: BarChart3, value: 30, suffix: "%", label: "Avg Revenue Growth" },
    { icon: Package, value: 99, suffix: "%", label: "Inventory Accuracy" },
    { icon: Globe, value: 100, suffix: "+", label: "Countries Supported" },
  ],
  benefits: [
    {
      title: "Omnichannel Commerce",
      description:
        "Sell seamlessly across web, mobile, in-store, and marketplace — with unified inventory, orders, and customer data across every channel.",
      image: "/images/people/laptopgirl3.webp",
    },
    {
      title: "SuiteCommerce (Built-in E-Commerce)",
      description:
        "Launch a responsive B2C or B2B webstore powered directly by your NetSuite data — no middleware, real-time product availability, and unified checkout.",
      image: "/images/lap/lap3.webp",
    },
    {
      title: "Inventory & Order Management",
      description:
        "Real-time multi-location inventory with automated replenishment, ship-from-store, click-and-collect, and drop-ship fulfilment options.",
      image: "/images/lap/lap9_11zon.webp",
    },
    {
      title: "Customer & Loyalty Management",
      description:
        "Full 360° customer view across channels. Manage loyalty programmes, personalised promotions, and customer purchase history in one system.",
      image: "/images/lap/lap5.webp",
    },
    {
      title: "Personalized Promotions & Marketing",
      description:
        "Leverage unified customer data to create targeted promotions and personalized marketing campaigns. Drive repeat purchases and increase customer lifetime value.",
      image: "/images/people/laptopgirl.webp",
    },
  ],
  features: [
    {
      title: "Omnichannel Commerce",
      description: "Deliver a seamless shopping experience across all channels, from online stores to physical locations.",
      image: "/images/lap/lap1.webp",
    },
    {
      title: "Inventory Management",
      description: "Optimize inventory levels, minimize stockouts, and boost profitability with company-wide inventory visibility.",
      image: "/images/lap/lap4.webp",
    },
    {
      title: "Customer Relationship Management",
      description: "Track and analyze multi-channel marketing campaigns, automate case management, and provide real-time customer data.",
      image: "/images/lap/lap7_11zon.webp",
    },
    {
      title: "Financial Management",
      description: "Automate transaction flow and gain real-time access to financial and operational performance metrics.",
      image: "/images/lap/lap10_11zon.webp",
    },
    {
      title: "Order Management",
      description: "Automate the entire order-to-fulfillment cycle for faster delivery and improved customer satisfaction.",
      image: "/images/lap/lap8_11zon.webp",
    },
  ],
  challenges: [
    {
      title: "Inventory Discrepancies Across Channels",
      description:
        "NetSuite maintains a single real-time inventory record across all channels and locations, eliminating discrepancies and enabling accurate promise dates.",
      image: "/images/challenges/inventory-blind-spots.png",
    },
    {
      title: "Disconnected E-Commerce & ERP",
      description:
        "SuiteCommerce is natively built on NetSuite — orders placed online instantly appear in the ERP with no sync delays or middleware required.",
      image: "/images/challenges/ecommerce-sync.png",
    },
    {
      title: "No Channel-Level Profitability Visibility",
      description:
        "NetSuite provides real-time margin analysis by channel, product category, SKU, and customer segment — enabling data-driven merchandising decisions.",
      image: "/images/challenges/profitability.png",
    },
    {
      title: "Inaccurate Stock on Website",
      description:
        "SuiteCommerce displays real-time stock levels from NetSuite, eliminating out-of-stock surprises and improving conversion rates significantly.",
      image: "/images/challenges/data-silos.png",
    },
    {
      title: "Slow Order Processing",
      description:
        "Manual data entry between your webstore and ERP causes delays. NetSuite automates the entire order-to-fulfillment cycle for faster delivery.",
      image: "/images/challenges/fulfillment-delay.png",
    },
    {
      title: "Inconsistent Customer Data",
      description:
        "Siloed customer data prevents a unified shopping experience. NetSuite unifies all customer touchpoints across both digital and physical stores.",
      image: "/images/challenges/resource-visibility.png",
    },
    {
      title: "Manual Reconciliations",
      description:
        "Reconciling sales from multiple channels and payment gateways is slow and error-prone. NetSuite automates financial reconciliation for all transactions.",
      image: "/images/challenges/reconciliation.png",
    },
    {
      title: "Peak Season Stress",
      description:
        "High volumes during BFCM can crash legacy systems. NetSuite's cloud infrastructure scales elastically to handle your heaviest traffic spikes.",
      image: "/images/challenges/peak-season.png",
    },
  ],
  pricingTiers: [
    {
      name: "Starter",
      price: "₹1,10,000",
      description: "For growing DTC brands and single-location retailers.",
      features: [
        "Core ERP & Inventory",
        "Basic E-Commerce Integration",
        "Order Management",
        "Standard Financial Reporting",
        "Email Support",
      ],
    },
    {
      name: "Professional",
      price: "₹2,30,000",
      description: "Full omnichannel for multi-location retailers.",
      features: [
        "SuiteCommerce Webstore",
        "Multi-location Inventory",
        "POS Integration",
        "Amazon / Shopify Connectors",
        "Loyalty & Promotions",
        "SLA-backed Support",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For global, multi-brand retail operations.",
      features: [
        "NetSuite OneWorld",
        "Advanced Order Management",
        "Custom Marketplace Connectors",
        "Demand Planning & Replenishment",
        "Dedicated Implementation Manager",
        "24/7 Priority Support",
      ],
    },
  ],
  faqs: [
    {
      question: "Can NetSuite integrate with Shopify, Amazon, and Magento?",
      answer:
        "Yes. AGSuite offers certified NetSuite connectors for Shopify, Amazon (FBA & FBM), and Magento (Adobe Commerce). These bi-directional connectors sync orders, inventory, customers, shipments, and settlements in real time.",
    },
    {
      question: "Does NetSuite offer a built-in e-commerce storefront?",
      answer:
        "Yes. NetSuite SuiteCommerce is a native e-commerce platform built directly on top of your NetSuite data. It supports B2C and B2B shopping experiences, responsive design, and real-time inventory.",
    },
    {
      question: "How does NetSuite handle returns and reverse logistics?",
      answer:
        "NetSuite supports authorised return management (RMA), return receipts, and credit memo generation. Returns automatically update inventory and trigger restocking or write-off workflows.",
    },
    {
      question: "Can NetSuite handle high order volumes during peak seasons?",
      answer:
        "Yes. NetSuite is a cloud-native SaaS platform hosted on Oracle Cloud Infrastructure, built to scale elastically for peak campaigns and flash sales without additional provisioning.",
    },
    {
      question:
        "Does NetSuite support drop-shipping and third-party fulfilment (3PL)?",
      answer:
        "Yes. NetSuite supports drop-ship purchase orders directly from sales orders, and integrates with 3PL providers via APIs for automated shipment notifications, tracking updates, and inventory reconciliation.",
    },
  ],
  relatedIndustries: [
    { label: "Wholesale Distribution", href: "/netsuite/industries/wholesale" },
    { label: "Manufacturing", href: "/netsuite/industries/manufacturing" },
    { label: "Software & Technology", href: "/netsuite/industries/software" },
    {
      label: "Professional Services",
      href: "/netsuite/industries/it-services",
    },
  ],
};

export default function RetailPage() {
  return <IndustryTemplate data={data} />;
}





