"use client";

import React from "react";



import {
  ShoppingBag,
  ShoppingCart,
  Target,
  TrendingUp,
  BarChart3,
  Calendar,
  ShieldCheck,
  Zap,
  Globe2,
  Package,
  Truck,
  CreditCard
} from "lucide-react";
import ZohoSolutionTemplate from "@/app/zoho/components/solutions/ZohoSolutionTemplate";



export default function ZohoCommercePage() {
  const stats = [
    { label: "Online Sales Growth", value: 40, suffix: "%", icon: TrendingUp },
    { label: "Checkout Conversion", value: 25, suffix: "% higher", icon: ShoppingCart },
    { label: "Order Processing Speed", value: 50, suffix: "% faster", icon: Package },
    { label: "Mobile Commerce Sales", value: 65, suffix: "%", icon: Globe2 },
  ];

  const modules = [
    {
      title: "Storefront Builder",
      description: "Build a stunning, professionally-designed online store without writing a single line of code.",
      image: "/images/modules/dashboard module.webp",
      color: "#1a7a55",
      rgb: "18,108,72",
    },
    {
      title: "Inventory Sync",
      description: "Real-time stock synchronization across your online store, brick-and-mortar shops, and major marketplaces.",
      image: "/images/modules/dashbord module.webp",
      color: "#a05a18",
      rgb: "145,75,18",
    },
    {
      title: "Order Management",
      description: "Centrally manage every order from payment to shipping, tracking, and customer notification.",
      image: "/images/modules/working module.webp",
      color: "#4a3a8a",
      rgb: "65,45,130",
    },
    {
      title: "Payment Gateways",
      description: "Accept payments globally with native integrations for PayPal, Stripe, Authorize.net, and many more.",
      image: "/images/modules/any module.webp",
      color: "#1a6080",
      rgb: "20,88,115",
    },
    {
      title: "Shipping & Fulfillment",
      description: "Compute shipping rates, print labels, and offer real-time tracking from over 40+ global carriers.",
      image: "/images/modules/any modules.webp",
      color: "#6a2575",
      rgb: "95,30,105",
    },
    {
      title: "Product SEO & Marketing",
      description: "Optimize every product page for search engines and run marketing campaigns with coupon codes and discounts.",
      image: "/images/modules/module8.webp",
      color: "#154e8a",
      rgb: "18,68,130",
    },
    {
      title: "Abandoned Cart Recovery",
      description: "Automatically follow up with customers who leave items in their cart, recovering lost revenue effortlessly.",
      image: "/images/modules/managging together module.webp",
      color: "#1a6545",
      rgb: "20,95,60",
    },
    {
      title: "Customer Portals",
      description: "Provide every customer with their own secure account to track orders, manage profiles, and reorder easily.",
      image: "/images/modules/csm modules.webp",
      color: "#8a2a3a",
      rgb: "130,35,48",
    },
    {
      title: "Visual Product Catalog",
      description: "Showcase your products in high detail with image galleries, variants, and dynamic pricing models.",
      image: "/images/modules/sheet module.webp",
      color: "#0f4e8a",
      rgb: "12,68,130",
    },
    {
      title: "Cross-Channel Selling",
      description: "Sync your store with Amazon, eBay, and Etsy to reach more customers and manage all sales centrally.",
      image: "/images/modules/account modules.webp",
      color: "#523a8a",
      rgb: "75,48,130",
    },
    {
      title: "Commerce Analytics",
      description: "Gain deep insights into your store's performance, customer trends, and most profitable products.",
      image: "/images/modules/chatt mdoule.webp",
      color: "#1a7a55",
      rgb: "18,108,72",
    },
    {
      title: "Finance & CRM Sync",
      description: "Native integration with Zoho Books and Zoho CRM keeps your entire business in perfect sync.",
      image: "/images/modules/mobile module.webp",
      color: "#a05a18",
      rgb: "145,75,18",
    },
  ];

  const benefits = [
    {
      title: "Unified Retail Operations",
      description: "Zoho Commerce isn't just a website; it's the core of your retail business, connecting your front office to your back office.",
      image: "/images/people/fourteam.webp",
      points: [
        "Consolidated inventory and orders",
        "Seamless accounting integration",
        "Unified customer view in CRM",
        "Multi-channel fulfillment center"
      ],
    },
    {
      title: "Converted Online Shoppers",
      description: "Turn more website visitors into paying customers with optimized checkout paths and intelligent recovery tools.",
      image: "/images/lap/lap2.webp",
      points: [
        "Frictionless single-page checkout",
        "Automated abandoned cart flows",
        "Intelligent product recommendations",
        "Secure global payment processing"
      ],
    },
    {
      title: "Faster Order Fulfillment",
      description: "Get products to your customers faster and more accurately with a streamlined operation from click to delivery.",
      image: "/images/people/laptopmen2.webp",
      points: [
        "40+ integrated shipping carriers",
        "Global carrier rate comparison",
        "Automated labels and tracking",
        "Real-time shipping notifications"
      ],
    },
    {
      title: "Scaling Your Digital Brand",
      description: "As your brand grows, Zoho Commerce provides the infrastructure and reliability required for a world-class enterprise.",
      image: "/images/lap/lap1.webp",
      points: [
        "High-performance cloud hosting",
        "Enterprise-grade security and SSL",
        "Scales for peak seasonal traffic",
        "Robust developer APIs for extensibility"
      ],
    },
  ];

  return (
    <ZohoSolutionTemplate
      title="Zoho Commerce — The Complete E-Commerce Platform"
      subtitle="Build Your Store, Sell Your Way, Scale Your Brand."
      description="Zoho Commerce is a world-class e-commerce platform that handles every aspect of your online business — from store design and inventory to orders, shipping, and finances."
      introDescription2="Launch your online store with everything you need out of the box — from professional product listings and secure checkout to integrated inventory and order management."
      breadcrumb={[
        { label: "Home", href: "/zoho" },
        { label: "Solutions", href: "/zoho/solutions" },
        { label: "Zoho Commerce", href: "/zoho-commerce" },
      ]}
      stats={stats}
      modules={modules}
      benefits={benefits}
      heroImage="/images/lap/lap3.webp"
      whatIsImage="/images/zoho-dashboards/zoho-commerce-dashboard.png"
      heroCard1={{
        title: "Omnichannel Selling",
        subtitle: "Sync with Amazon and eBay instantly.",
        icon: ShoppingBag
      }}
      heroCard2={{
        title: "40% Sales Growth",
        subtitle: "Using integrated marketing and commerce.",
        icon: TrendingUp
      }}
      pricingInfo={{
        description: "Scale your e-commerce business with plans designed for growth. Experience professional retail management for one low price.",
        plans: [
          "Starter: $22 /month",
          "Professional: $60 /month",
          "Advanced: $140 /month",
          "Custom enterprise options available",
        ],
        ctaText: "Get a Quote",
      }}
    />
  );
}








