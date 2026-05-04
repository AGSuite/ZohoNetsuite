"use client";

import React from "react";



import { 
  Cpu, 
  Heart, 
  Target, 
  Layers, 
  TrendingUp,
  Zap,
  Users,
  Smartphone,
  ShieldCheck,
  Globe2,
  BarChart3,
  Code2
} from "lucide-react";
import ZohoSolutionTemplate from "@/app/zoho/components/solutions/ZohoSolutionTemplate";



export default function ZohoCreatorPage() {
  const stats = [
    { label: "App Dev Speed", value: 10, suffix: "x faster", icon: Zap },
    { label: "Cost Efficiency", value: 65, suffix: "%", icon: TrendingUp },
    { label: "Process Automation", value: 80, suffix: "%", icon: Target },
    { label: "Deployment Reliability", value: 99, suffix: "%", icon: ShieldCheck },
  ];

  const modules = [
    {
      title: "Low-Code App Builder",
      description: "Build custom business applications with a simple drag-and-drop interface, reducing development time significantly.",
      image: "/images/modules/dashboard module.webp",
      color: "#1a7a55",
      rgb: "18,108,72",
    },
    {
      title: "Visual Workflow Designer",
      description: "Automate complex business processes with a visual builder that makes logic transparent and easy to manage.",
      image: "/images/modules/dashbord module.webp",
      color: "#a05a18",
      rgb: "145,75,18",
    },
    {
      title: "Cross-Platform Mobility",
      description: "Deploy your apps instantly on web, iOS, and Android without writing separate code for each platform.",
      image: "/images/modules/working module.webp",
      color: "#4a3a8a",
      rgb: "65,45,130",
    },
    {
      title: "Deep Data Integration",
      description: "Connect your custom apps with over 600+ third-party tools and services through pre-built connectors.",
      image: "/images/modules/any module.webp",
      color: "#1a6080",
      rgb: "20,88,115",
    },
    {
      title: "Unified Database",
      description: "Manage all your business data in a secure, relational database designed to scale with your apps.",
      image: "/images/modules/any modules.webp",
      color: "#6a2575",
      rgb: "95,30,105",
    },
    {
      title: "AI Integration",
      description: "Incorporate ready-to-use AI models like OCR, sentiment analysis, and object detection into your apps.",
      image: "/images/modules/module8.webp",
      color: "#154e8a",
      rgb: "18,68,130",
    },
    {
      title: "BI & Analytics",
      description: "Build interactive dashboards and detailed reports to visualize the data captured in your custom apps.",
      image: "/images/modules/sheet module.webp",
      color: "#1a6545",
      rgb: "20,95,60",
    },
    {
      title: "Multi-Persona Portals",
      description: "Create secure portals for your customers, partners, and vendors with tailored views and access.",
      image: "/images/modules/csm modules.webp",
      color: "#8a2a3a",
      rgb: "130,35,48",
    },
    {
      title: "Offline Access",
      description: "Ensure your field teams can work anywhere with apps that function offline and sync data when connected.",
      image: "/images/modules/managging together module.webp",
      color: "#0f4e8a",
      rgb: "12,68,130",
    },
    {
      title: "Governance & Security",
      description: "Control access with role-based permissions, IP restrictions, and enterprise-grade data encryption.",
      image: "/images/modules/account modules.webp",
      color: "#523a8a",
      rgb: "75,48,130",
    },
    {
      title: "Extension & Customization",
      description: "Add custom logic with Deluge, Zoho's powerful scripting language, for complex business requirements.",
      image: "/images/modules/chatt mdoule.webp",
      color: "#1a7a55",
      rgb: "18,108,72",
    },
    {
      title: "Serverless Functions",
      description: "Execute complex backend logic and integrate with external systems using reliable serverless functions.",
      image: "/images/modules/mobile module.webp",
      color: "#a05a18",
      rgb: "145,75,18",
    },
  ];

  const benefits = [
    {
      title: "Accelerated Innovation",
      description: "Bring your ideas to life faster than ever. Zoho Creator's low-code platform bridges the gap between IT and business teams.",
      image: "/images/people/fourteam.webp",
      points: [
        "Weeks of development reduced to days",
        "Empower citizen developers with safety",
        "Interactive prototypes in real-time",
        "Rapid iteration and deployment cycles"
      ],
    },
    {
      title: "Unmatched Flexibility",
      description: "Build the exact application your business needs. No compromised features, no 'off-the-shelf' limitations — just perfect fit.",
      image: "/images/lap/lap2.webp",
      points: [
        "Tailor-made modules and field sets",
        "Visual builders for forms and logic",
        "Seamlessly adjust apps as needs evolve",
        "Complete control over the user experience"
      ],
    },
    {
      title: "Seamless Connectivity",
      description: "Your custom apps don't live in a silo. Zoho Creator acts as the glue that connects your entire business tech stack effortlessly.",
      image: "/images/people/laptopmen2.webp",
      points: [
        "Built-in connectors for 600+ apps",
        "Robust APIs for custom integrations",
        "Automated data flows between systems",
        "Consolidated data for better BI"
      ],
    },
    {
      title: "Enterprise Reliability",
      description: "Scale from a single app to a company-wide ecosystem. Zoho Creator provides the performance and security that large organizations demand.",
      image: "/images/lap/lap1.webp",
      points: [
        "Reliable cloud infrastructure and uptime",
        "Fine-grained access and data security",
        "Compliance with global data standards",
        "Comprehensive audit logs and tracking"
      ],
    },
  ];

  return (
    <ZohoSolutionTemplate
      title="Zoho Creator — Low-Code Application Platform"
      subtitle="The Future of Custom Business Applications."
      description="Zoho Creator is a low-code application development platform that allows you to build custom business applications with an easy-to-use, drag-and-drop builder."
      introDescription2="Build custom business applications in minutes, not months. Zoho Creator's low-code platform empowers your team to digitize unique processes with secure, scalable solutions."
      breadcrumb={[
        { label: "Home", href: "/zoho" },
        { label: "Solutions", href: "/zoho/solutions" },
        { label: "Dev Platforms", href: "/zoho/solutions/dev-platforms" },
        { label: "Zoho Creator", href: "/zoho/solutions/dev-platforms/zoho-creator" },
      ]}
      stats={stats}
      modules={modules}
      benefits={benefits}
      heroImage="/images/lap/lap4.webp"
      pricingInfo={{
        description: "Choose a plan that fits your development scale and user base. Unleash the power of custom applications today.",
        plans: [
          "Standard: $8 /user/month",
          "Professional: $20 /user/month",
          "Enterprise: $25 /user/month",
          "Annual discounts available",
        ],
        ctaText: "Start 15-Day Free Trial",
      }}
    />
  );
}


