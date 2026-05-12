"use client";

import React from "react";



import {
  Globe2,
  Layout,
  Smartphone,
  TrendingUp,
  Target,
  BarChart3,
  Calendar,
  ShieldCheck,
  Zap,
  Palette,
  MousePointerClick,
  Share2
} from "lucide-react";
import ZohoSolutionTemplate from "@/app/zoho/components/solutions/ZohoSolutionTemplate";



export default function ZohoSitesPage() {
  const stats = [
    { label: "Design Time Reduction", value: 60, suffix: "%", icon: Palette },
    { label: "Mobile-First Score", value: 95, suffix: "/100", icon: Smartphone },
    { label: "Uptime SLA", value: 99.9, suffix: "%", icon: ShieldCheck },
    { label: "Load Speed Improvement", value: 40, suffix: "%", icon: Zap },
  ];

  const modules = [
    {
      title: "Visual Page Builder",
      description: "Build beautiful, responsive websites with a simple drag-and-drop interface. No coding required.",
      image: "/images/modules/dashboard module.webp",
      color: "#1a7a55",
      rgb: "18,108,72",
    },
    {
      title: "Responsive Templates",
      description: "Choose from hundreds of professionally-designed templates that look great on any device.",
      image: "/images/modules/dashbord module.webp",
      color: "#a05a18",
      rgb: "145,75,18",
    },
    {
      title: "SEO Optimizer",
      description: "Built-in SEO tools to help you rank higher on search engines and drive more organic traffic.",
      image: "/images/modules/working module.webp",
      color: "#4a3a8a",
      rgb: "65,45,130",
    },
    {
      title: "Site Customization",
      description: "Full control over fonts, colors, and layouts to ensure your site perfectly matches your brand identity.",
      image: "/images/modules/any module.webp",
      color: "#1a6080",
      rgb: "20,88,115",
    },
    {
      title: "Member Portals",
      description: "Create exclusive areas for your members, customers, or partners with secure login and restricted content.",
      image: "/images/modules/any modules.webp",
      color: "#6a2575",
      rgb: "95,30,105",
    },
    {
      title: "Commerce Ready",
      description: "Seamlessly integrate with Zoho Commerce to sell products directly from your custom website.",
      image: "/images/modules/module8.webp",
      color: "#154e8a",
      rgb: "18,68,130",
    },
    {
      title: "Analytics Integration",
      description: "Track visitor behavior and website performance with native Zoho Analytics and Google Analytics support.",
      image: "/images/modules/sheet module.webp",
      color: "#1a6545",
      rgb: "20,95,60",
    },
    {
      title: "Forms & Popups",
      description: "Capture leads and engage visitors with customizable forms, surveys, and promotional popups.",
      image: "/images/modules/csm modules.webp",
      color: "#8a2a3a",
      rgb: "130,35,48",
    },
    {
      title: "Domain Management",
      description: "Connect your own custom domain name and enjoy free SSL certificates for every website you build.",
      image: "/images/modules/managging together module.webp",
      color: "#0f4e8a",
      rgb: "12,68,130",
    },
    {
      title: "Collaboration Tools",
      description: "Invite team members to collaborate on your website design and manage their permissions with ease.",
      image: "/images/modules/account modules.webp",
      color: "#523a8a",
      rgb: "75,48,130",
    },
    {
      title: "Social Media Sync",
      description: "Pull in your social media feeds or automatically post website updates to your social networks.",
      image: "/images/modules/chatt mdoule.webp",
      color: "#1a7a55",
      rgb: "18,108,72",
    },
    {
      title: "Custom Code Access",
      description: "Extend your site's functionality with custom HTML, CSS, and JS snippets for more advanced requirements.",
      image: "/images/modules/mobile module.webp",
      color: "#a05a18",
      rgb: "145,75,18",
    },
  ];

  const benefits = [
    {
      title: "Stunning Visual Presence",
      description: "Create a world-class website that captures your brand's essence and wows your visitors from the very first click.",
      image: "/images/people/fourteam.webp",
      points: [
        "Modern, high-conversion layouts",
        "Pixel-perfect design control",
        "Professional template library",
        "Interactive animation support"
      ],
    },
    {
      title: "Frictionless Web Scaling",
      description: "As your business grows, your website scales with you. No need to worry about hosting, security, or performance limits.",
      image: "/images/lap/lap2.webp",
      points: [
        "Enterprise-grade cloud hosting",
        "Scales to handle peak traffic",
        "Global CDN for fast delivery",
        "Free SSL and secure backups"
      ],
    },
    {
      title: "Marketing-Ready Architecture",
      description: "Your website is your best salesperson. Zoho Sites is built to help you capture leads and convert them into customers.",
      image: "/images/people/laptopmen2.webp",
      points: [
        "Native CRM lead capture sync",
        "Built-in landing page builder",
        "Personalized visitor experience",
        "Seamless social media sharing"
      ],
    },
    {
      title: "Mobile-First Engineering",
      description: "Over 50% of web traffic is mobile. Zoho Sites ensures your brand looks incredible on every screen size automatically.",
      image: "/images/lap/lap1.webp",
      points: [
        "Fully responsive design library",
        "Mobile-specific view overrides",
        "Fast-loading mobile components",
        "Tested across all major browsers"
      ],
    },
  ];

  return (
    <ZohoSolutionTemplate
      title="Zoho Sites — The Professional Website Builder"
      subtitle="Your Brand's Digital Home, Built with Precision."
      description="Zoho Sites is a zero-code website builder that provides everything you need to build, launch, and manage professional websites that drive business growth."
      introDescription2="Create a stunning professionally-designed website for your business in minutes with Zoho Sites' intuitive drag-and-drop builder and extensive library of ready-made sections."
      breadcrumb={[
        { label: "Home", href: "/zoho" },
        { label: "Solutions", href: "/zoho/solutions" },
        { label: "Zoho Sites", href: "/zoho-sites" },
      ]}
      stats={stats}
      modules={modules}
      benefits={benefits}
      heroImage="/images/lap/lap2.webp"
      whatIsImage="/images/zoho-dashboards/zoho-sites-dashboard.png"
      heroCard1={{
        title: "Zero Coding Required",
        subtitle: "Build premium sites with ease.",
        icon: Palette
      }}
      heroCard2={{
        title: "99.9% Uptime",
        subtitle: "Secure, reliable cloud hosting.",
        icon: Globe2
      }}
      pricingInfo={{
        description: "Choose a plan that matches your site's complexity. Start with a functional free plan or go premium for advanced features.",
        plans: [
          "Starter: $5 /month",
          "Pro: $15 /month",
          "Enterprise: $25 /month",
          "Free Plan Available",
        ],
        ctaText: "Get a Quote",
      }}
    />
  );
}








