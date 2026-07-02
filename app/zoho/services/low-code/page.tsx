"use client";

import React from "react";
import {
  Wrench,
  Zap,
  CheckCircle2,
  Code2,
  Smartphone,
  Layers,
  Rocket,
  ShieldCheck,
  MousePointer2,
  Cpu,
  MonitorSmartphone,
  Check
} from "lucide-react";
import ZohoServiceTemplate from "@/app/zoho/components/services/ZohoServiceTemplate";

export default function ZohoLowCodePage() {
  const stats = [
    { label: "App Delivery Speed", value: 10, suffix: "x", icon: Zap },
    { label: "Cost Savings", value: 50, suffix: "%", icon: CheckCircle2 },
    { label: "Custom Apps Built", value: 200, suffix: "+", icon: Layers },
    { label: "Mobile Compatibility", value: 100, suffix: "%", icon: Smartphone },
  ];

  const modules = [
    {
      title: "Zoho Creator Apps",
      description: "Build bespoke business applications that fill the gaps where off-the-shelf software falls short.",
      image: "/images/Services/zoho_low_code_hero.png",
      color: "#1e3a8a",
      rgb: "14,50,130",
      Icon: Wrench,
    },
    {
      title: "Mobile App Development",
      description: "Automatically deploy your business apps to iOS and Android with Zoho Creator's native mobile frameworks.",
      image: "/images/Services/zoho_low_code_mobile.png",
      color: "#0e7490",
      rgb: "14,116,144",
      Icon: MonitorSmartphone,
    },
    {
      title: "Deluge Scripting",
      description: "Advanced Deluge scripting for complex business logic, data validation, and automated background tasks.",
      image: "/images/modules/intelligent_automation.png",
      color: "#065f46",
      rgb: "6,95,70",
      Icon: Code2,
    },
    {
      title: "App Portal Design",
      description: "Design secure, user-friendly portals for your customers, vendors, and external partners to interact with your data.",
      image: "/images/modules/sc_mobile_commerce.png",
      color: "#581c87",
      rgb: "88,28,135",
      Icon: MousePointer2,
    },
  ];

  const benefits = [
    {
      title: "Rapid Prototyping",
      description: "Turn ideas into working prototypes in days instead of months using Zoho's low-code interface.",
      image: "/images/Services/zoho_srv_low_code_new.jpg",
      points: [
        "Iterative app development",
        "Visual drag-and-drop UI",
        "Instant background automation",
        "Quick testing cycles",
      ],
    },
    {
      title: "Reduced IT Overhead",
      description: "Lower your development costs and maintenance burdens by building on a hosted, managed platform.",
      image: "/images/modules/cost_efficiency.png",
      points: [
        "No server maintenance",
        "Automatic security patches",
        "Built-in hosting included",
        "Unified app management",
      ],
    },
    {
      title: "Native Cloud Ecosystem",
      description: "Your custom apps are natively connected to CRM, Finance, and Marketing data within Zoho One.",
      image: "/images/modules/unified_platform.png",
      points: [
        "Access shared databases",
        "Seamless cross-app sync",
        "Native Zoho reporting",
        "Unified user permissions",
      ],
    },
    {
      title: "Enterprise Grade Security",
      description: "Custom apps built on Zoho Creator inherit its robust security framework, including role-based access and data encryption.",
      image: "/images/modules/benefit_compliance.png",
      points: [
        "Role-based access control",
        "Encrypted data at rest",
        "Multi-factor authentication",
        "Full audit trails",
      ],
    },
    {
      title: "Future-Proof Scalability",
      description: "Start small with one process and scale your custom app to handle thousands of users and millions of records with no extra server setup.",
      image: "/images/benefits/benefit_sc_security_scale.png",
      points: [
        "Elastic cloud hosting",
        "Automated performance tuning",
        "Limitless record storage",
        "Global data center access",
      ],
    },
  ];

  const faqs = [
    {
      question: "Will the app work on iPhone and Android?",
      answer: "Yes, every Zoho Creator app is automatically optimized for mobile devices and can be accessed via the native Creator mobile app or a white-labelled version.",
    },
    {
      question: "Is low-code powerful enough for complex logic?",
      answer: "Absolutely. Using the Deluge scripting engine, we can build advanced business rules, complex workflows, and API integrations within the low-code framework.",
    },
    {
      question: "Can we migrate our existing spreadsheet data into the new app?",
      answer: "Yes, we handle the entire data migration process, including cleaning and mapping your legacy CSV or Excel data into your new Zoho Creator environment.",
    },
    {
      question: "How do we handle app updates and maintenance?",
      answer: "Since Zoho is a cloud platform, updates are pushed automatically. We also provide managed services to add new features as your business evolves.",
    },
  ];

  return (
    <ZohoServiceTemplate
      title="Zoho Low-Code Development"
      subtitle="Build Your Custom App"
      description="Innovate faster than ever. We build bespoke business applications using Zoho Creator — perfectly tailored to your unique requirements with native mobile support."
      breadcrumb={[
        { label: "Home", href: "/zoho" },
        { label: "Services", href: "/zoho/services" },
        { label: "Low-Code Development", href: "/zoho/services/low-code" },
      ]}
      stats={stats}
      modules={modules}
      benefits={benefits}
      heroImage="/images/Services/zoho_low_code_hero.png"
      introImage="/images/Services/zoho_srv_low_code_new.jpg"
      introTitle="Tailor-Made Software for Your Unique Business."
      introDescription1="Sometimes off-the-shelf software doesn't fit your processes. Our low-code development services bridge that gap with custom Zoho Creator applications."
      introDescription2="We help you digitize manual spreadsheets and fragmented legacy tools into a single, secure cloud app that works exactly how you do."
      faqs={faqs}
    />
  );
}




