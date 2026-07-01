"use client";

import React from "react";



import {
  Cpu,
  Code2,
  ShieldCheck,
  Zap,
  Layers,
  Database,
  Globe2,
  TrendingUp,
  Target,
  BarChart3,
  Calendar,
  Lock,
  Smartphone
} from "lucide-react";
import ZohoSolutionTemplate from "@/app/zoho/components/solutions/ZohoSolutionTemplate";



export default function ZohoCatalystPage() {
  const stats = [
    { label: "Deployment Speed", value: 10, suffix: "x faster", icon: Zap },
    { label: "Cost Reduction", value: 40, suffix: "%", icon: TrendingUp },
    { label: "Infrastructure Uptime", value: 99.9, suffix: "%", icon: ShieldCheck },
    { label: "Execution Reliability", value: 99, suffix: "%", icon: Target },
  ];

  const modules = [
    {
      title: "Serverless Functions",
      description: "Write and deploy backend logic in Node.js, Java, Python, or PHP without managing any servers.",
      image: "/images/modules/cat_mod_serverless.svg",
      color: "#1a7a55",
      rgb: "18,108,72",
    },
    {
      title: "NoSQL Database",
      description: "A secure, scalable, and schema-less database designed for high-performance applications.",
      image: "/images/modules/cat_mod_nosql.svg",
      color: "#a05a18",
      rgb: "145,75,18",
    },
    {
      title: "Cloud Storage",
      description: "Store and manage large volumes of unstructured data like images, videos, and documents securely.",
      image: "/images/modules/cat_mod_storage.svg",
      color: "#4a3a8a",
      rgb: "65,45,130",
    },
    {
      title: "Authentication",
      description: "Integrated user management and authentication services with support for multiple providers.",
      image: "/images/modules/cat_mod_auth.svg",
      color: "#1a6080",
      rgb: "20,88,115",
    },
    {
      title: "Cloud Scale",
      description: "Automatically scale your application resources based on traffic demands, ensuring perfect performance.",
      image: "/images/modules/cat_mod_scale.svg",
      color: "#6a2575",
      rgb: "95,30,105",
    },
    {
      title: "Smart Objects",
      description: "Simplify complex data operations with intelligent data models and automated relationships.",
      image: "/images/modules/cat_mod_objects.svg",
      color: "#154e8a",
      rgb: "18,68,130",
    },
    {
      title: "CLI & SDKs",
      description: "Powerful command-line tools and software development kits for seamless local development.",
      image: "/images/modules/cat_mod_cli.svg",
      color: "#1a6545",
      rgb: "20,95,60",
    },
    {
      title: "Event Listeners",
      description: "Trigger functions automatically in response to events from various Zoho and third-party services.",
      image: "/images/modules/cat_mod_events.svg",
      color: "#8a2a3a",
      rgb: "130,35,48",
    },
    {
      title: "Zia AI Services",
      description: "Access powerful pre-built AI models for OCR, image recognition, and sentiment analysis via API.",
      image: "/images/modules/cat_mod_zia.svg",
      color: "#0f4e8a",
      rgb: "12,68,130",
    },
    {
      title: "Monitoring & Logs",
      description: "In-depth tracking of function executions, logs, and overall application health in real-time.",
      image: "/images/modules/cat_mod_logs.svg",
      color: "#523a8a",
      rgb: "75,48,130",
    },
    {
      title: "Environment Management",
      description: "Manage development, testing, and production environments with complete isolation and security.",
      image: "/images/modules/cat_mod_envs.svg",
      color: "#1a7a55",
      rgb: "18,108,72",
    },
    {
      title: "API Gateway",
      description: "Create, publish, and manage secure APIs to connect your serverless logic with any client application.",
      image: "/images/modules/cat_mod_gateway.svg",
      color: "#a05a18",
      rgb: "145,75,18",
    },
  ];

  const benefits = [
    {
      title: "Focus on Code, Not Infra",
      description: "Catalyst handles all the heavy lifting of infrastructure management, from provisioning and scaling to security and patching.",
      image: "/images/people/zoho_catalyst_benefit_code.svg",
      points: [
        "Zero server maintenance",
        "Automated resource scaling",
        "Isolated execution environments",
        "Integrated CI/CD pipelines"
      ],
    },
    {
      title: "Extreme Operational Speed",
      description: "Build and deploy mission-critical applications at the speed of your ideas. Reduce your time-to-market significantly.",
      image: "/images/people/zoho_catalyst_benefit_speed.svg",
      points: [
        "Instant function deployments",
        "Pre-built authentication & DB",
        "Native Zoho app integrations",
        "Comprehensive local dev tools"
      ],
    },
    {
      title: "Enterprise-Grade Reliability",
      description: "Your applications run on Zoho's world-class cloud infrastructure, ensuring high availability and robust security.",
      image: "/images/people/zoho_catalyst_benefit_reliability.svg",
      points: [
        "99.9% infrastructure uptime",
        "End-to-end data encryption",
        "Global data center presence",
        "Granular access & RBAC controls"
      ],
    },
    {
      title: "Zero-Waste Pricing",
      description: "Pay only for what you use. No upfront costs, no minimum commitments — just transparent, execution-based billing.",
      image: "/images/people/zoho_catalyst_benefit_pricing.svg",
      points: [
        "Millions of free executions/month",
        "Pay-as-you-go model",
        "No hidden infrastructure fees",
        "Ideal for startups & enterprises"
      ],
    },
  ];

  return (
    <ZohoSolutionTemplate
      title="Zoho Catalyst — The Serverless Full-Stack Platform"
      subtitle="The Modern Way to Build and Scale Full-Stack Apps."
      description="Zoho Catalyst is a pro-code serverless platform that allows you to build, deploy, and scale high-performance applications without worrying about infrastructure."
      introDescription2="Zoho Catalyst is a pro-code platform that lets you build and deploy powerful serverless microservices and applications with zero infrastructure management overhead."
      breadcrumb={[
        { label: "Home", href: "/zoho" },
        { label: "Solutions", href: "/zoho/solutions" },
        { label: "Zoho Catalyst", href: "/zoho-catalyst" },
      ]}
      stats={stats}
      modules={modules}
      benefits={benefits}
      heroImage="/images/people/zoho_catalyst_hero.svg"
      whatIsImage="/images/zoho-dashboards/zoho-catalyst-dashboard.svg"
      heroCard1={{
        title: "10x Faster Dev",
        subtitle: "Zero server management overhead.",
        icon: Cpu
      }}
      heroCard2={{
        title: "Serverless Power",
        subtitle: "Automated scaling and reliability.",
        icon: Zap
      }}
      pricingInfo={{
        description: "Flexible, execution-based pricing. Start for free with a generous tier and only pay as your application scales.",
        plans: [
          "Free Tier: 250k calls/month",
          "Function Call: $0.000002 /call",
          "DB Storage: $0.20 /GB/month",
          "Pay for exactly what you use",
        ],
        ctaText: "Get a Quote",
      }}
    />
  );
}








