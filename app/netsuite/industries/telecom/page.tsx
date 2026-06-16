"use client";

import IndustryTemplate, {
  IndustryPageData,
} from "@/app/netsuite/industries/_template/IndustryTemplate";
import { Wifi, BarChart3, Globe2, TrendingUp } from "lucide-react";

const data: IndustryPageData = {
  industry: "Telecom",
  heroTitle: "Modernize & Streamline Telecom Operations with Oracle NetSuite ERP",
  heroDescription:
    "Empower your telecom business with a unified cloud ERP that delivers real-time visibility, automated billing, and scalable operations — from subscription management to multi-subsidiary financials.",
  heroImage: "/images/hero/industry_telecom_hero.png",
  heroCardTitle: "Telecom ERP Command Center",
  heroCardSub: "Billing · Revenue Recognition · OSS/BSS Integration · Compliance",
  heroTopCardTitle: "Trusted by Telecom Leaders",
  heroTopCardSub: "Subscription-Ready · Cloud-Native · Scalable",
  introImage: "/images/netsuiteimages/ns_global_business.png",
  introTitle: "Why NetSuite ERP for the Telecom Industry?",
  introDescription:
    "The telecom industry is transforming rapidly — with increasing service demands, complex billing models, multi-channel operations, and rising regulatory requirements. To stay competitive, telecom companies need a scalable, cloud-based ERP that delivers real-time visibility, automation, and unified operations across finance, service delivery, and customer management.",
  introDescription2:
    "Oracle NetSuite ERP for the Telecom Industry is designed to support subscription-driven, high-volume businesses by streamlining financial operations, simplifying billing, and ensuring compliance across geographies. At AGSuite Technologies, we empower telecom organizations to deploy and optimize NetSuite, transforming complex processes into efficient and scalable digital operations.",
  stats: [
    { icon: Wifi, value: 98, suffix: "%", label: "Billing Accuracy Rate" },
    { icon: BarChart3, value: 40, suffix: "%", label: "Reduction in Revenue Leakage" },
    { icon: Globe2, value: 60, suffix: "+", label: "Telecom Deployments" },
    { icon: TrendingUp, value: 15, suffix: "+", label: "Years ERP Experience" },
  ],
  benefits: [
    {
      title: "Service Performance Dashboards",
      description:
        "Real-time visibility into ARPU, churn, usage trends, billing performance, and operational metrics — all consolidated in a single executive dashboard for faster, data-driven decisions.",
      image: "/images/netsuiteimages/ns_realtime_visibility.png",
      points: [
        "ARPU & churn rate tracking",
        "Billing performance KPIs",
        "Usage trend analytics",
      ],
    },
    {
      title: "Subscription & Usage-Based Billing",
      description:
        "Support recurring plans, data/usage billing, bundled services, and tiered pricing with complete accuracy. Automate invoice generation, credit management, and dunning processes.",
      image: "/images/netsuiteimages/scalability_and_adaptability.png",
      points: [
        "Tiered & bundled pricing",
        "Usage-based billing automation",
        "Recurring plan management",
      ],
    },
    {
      title: "Integrated Order-to-Cash Automation",
      description:
        "Streamline orders, provisioning, billing, renewals, and collections with a unified workflow — reducing cycle time and eliminating manual handoffs across departments.",
      image: "/images/netsuiteimages/ns_automation_efficiency.png",
      points: [
        "End-to-end order automation",
        "Provisioning workflow integration",
        "Automated collections & renewals",
      ],
    },
    {
      title: "Telecom-Focused Revenue Recognition",
      description:
        "Automate recognition for subscription, device, and hybrid revenue models with full ASC 606/IFRS 15 compliance. Eliminate spreadsheets and manual adjustments.",
      image: "/images/netsuiteimages/data_accuracy_compliance_risk.png",
      points: [
        "ASC 606 / IFRS 15 compliance",
        "Hybrid revenue model support",
        "Automated deferred revenue schedules",
      ],
    },
    {
      title: "Multi-Subsidiary & Global Expansion",
      description:
        "Manage multiple entities, currencies, tax environments, and telecom regulations from a single ERP system. Simplify inter-company eliminations and global financial consolidation.",
      image: "/images/netsuiteimages/ns_global_business.png",
      points: [
        "Multi-entity consolidation",
        "Multi-currency support",
        "Global tax compliance",
      ],
    },
  ],
  features: [
    {
      title: "Subscription & Rating Engine",
      description: "Manage complex subscription lifecycle events, high-volume usage rating (voice, data, SMS, API calls), and automated tiered pricing rules.",
      image: "/images/netsuiteimages/ns_rapid_scaling.png",
    },
    {
      title: "Advanced Revenue Recognition (ASC 606)",
      description: "Automate deferred revenue schedules, multi-element contracts (device sales + recurring services), and ensure compliance natively.",
      image: "/images/netsuiteimages/ns_training_services.png",
    },
    {
      title: "OSS/BSS & Provisioning Integration",
      description: "Connect customer provisioning platforms, network controllers, and third-party billing engines directly with NetSuite financials.",
      image: "/images/netsuiteimages/ns_integration_services.png",
    },
    {
      title: "Partner & Channel Commissions",
      description: "Calculate broker, retail distributor, and affiliate partner commissions based on customer acquisition and monthly recurring revenue (MRR).",
      image: "/images/netsuiteimages/ns_low_code_dev.png",
    },
    {
      title: "Dunning & Credit Control Management",
      description: "Automate customer payment notifications, retry logic for failed credit card transactions, and customized dunning strategies to prevent churn.",
      image: "/images/netsuiteimages/ns_managed_services.png",
    },
  ],
  challenges: [
    {
      title: "Complex Billing Requirements",
      description:
        "Telecom pricing models are dynamic — NetSuite simplifies recurring, usage-based, and hybrid billing with automated invoicing and error-free revenue recognition.",
      solution:
        "NetSuite's advanced billing engine handles tiered, usage-based, and bundled pricing models with automated invoicing, eliminating billing errors and revenue leakage.",
      image: "/images/challenges/manual-billing.png",
    },
    {
      title: "Fragmented OSS/BSS Systems",
      description:
        "Legacy OSS/BSS and billing systems reduce efficiency — NetSuite unifies them on a single cloud platform with open API integrations for real-time data flow.",
      solution:
        "NetSuite integrates with existing OSS/BSS via REST APIs, creating a unified data layer that eliminates silos and manual rekeying between provisioning and financial systems.",
      image: "/images/challenges/data-silos.png",
    },
    {
      title: "Regulatory & Compliance Demands",
      description:
        "Meet regional tax, audit, and regulatory requirements with built-in compliance tools. Manage GST, VAT, telecom-specific levies, and audit trails automatically.",
      solution:
        "NetSuite's compliance engine automates tax calculations, e-invoicing, and audit-ready reporting across multiple jurisdictions — keeping your operations legally sound globally.",
      image: "/images/challenges/compliance.png",
    },
    {
      title: "High Service Volumes & Scalability",
      description:
        "Manage massive service volumes with automated workflows and accurate reporting. NetSuite scales with your subscriber base without performance degradation.",
      solution:
        "NetSuite's cloud-native architecture scales automatically to handle millions of transactions, subscribers, and billing events without infrastructure investments.",
      image: "/images/challenges/peak-season.png",
    },
    {
      title: "Need for Real-Time Insights",
      description:
        "Telecom providers require instant visibility into revenue, usage, and customer metrics. NetSuite provides real-time dashboards and analytics for faster decision-making.",
      solution:
        "NetSuite's built-in analytics and customizable dashboards surface ARPU, churn, usage, and financial metrics in real time — empowering leaders to act fast.",
      image: "/images/challenges/profitability.png",
    },
    {
      title: "Revenue Leakage & Recognition Gaps",
      description:
        "Disconnected billing and revenue recognition processes lead to revenue leakage. NetSuite closes the gap with automated, compliant revenue recognition workflows.",
      solution:
        "NetSuite links billing events directly to revenue recognition schedules, ensuring every dollar is captured, recognized correctly, and reported with full audit trail.",
      image: "/images/challenges/revenue-leakage.png",
    },
  ],
  pricingIntro:
    "NetSuite pricing for Telecom is tailored to your subscriber base, number of users, and modules required — including billing automation, revenue recognition, and OSS/BSS integrations. Pricing scales as you grow, with no costly reinstalls or infrastructure upgrades.",
  pricingTiers: [
    {
      name: "Starter",
      price: "₹1,40,000",
      description: "For growing telecom operators up to 25 users.",
      features: [
        "Core ERP (Financials, AR/AP, GL)",
        "Subscription Billing Management",
        "Basic Revenue Recognition",
        "Standard Reporting & Dashboards",
        "Email Support",
      ],
    },
    {
      name: "Professional",
      price: "₹2,80,000",
      description: "Full telecom suite for mid-size operators.",
      features: [
        "Advanced Usage-Based Billing",
        "OSS/BSS Integration Framework",
        "ASC 606 Revenue Recognition",
        "Multi-Entity Management",
        "CRM & Customer Portal Integration",
        "SLA-backed Support",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large-scale or global telecom enterprises.",
      features: [
        "Multi-Subsidiary (OneWorld)",
        "Advanced Demand & Capacity Planning",
        "Custom OSS/BSS & CRM Integrations",
        "India Localization (GST/TDS/e-Invoice)",
        "Dedicated Implementation Manager",
        "24/7 Priority Support",
      ],
    },
  ],
  faqs: [
    {
      question: "How does Oracle NetSuite ERP support the telecom industry?",
      answer:
        "Oracle NetSuite ERP provides telecom companies with a unified platform to manage finance, billing, customer relationships, and operations. It helps automate manual processes, streamline revenue recognition, and improve visibility across departments. With real-time dashboards and analytics, telecom businesses can better manage costs, optimize resources, and make data-driven decisions.",
    },
    {
      question:
        "Can Oracle NetSuite ERP handle complex telecom billing and revenue models?",
      answer:
        "Yes. Oracle NetSuite ERP is designed to manage the complexity of telecom billing, including recurring, usage-based, and hybrid billing models. It automates invoicing, integrates with CRM and customer portals, and ensures compliance with ASC 606 revenue recognition standards. This reduces billing errors, improves accuracy, and enhances the customer experience.",
    },
    {
      question:
        "What are the key benefits of implementing Oracle NetSuite ERP in telecom operations?",
      answer:
        "Implementing Oracle NetSuite ERP offers telecom companies several benefits: end-to-end visibility across finance, billing, and operations; scalability to support growth and new service offerings; automation of routine financial and operational tasks; improved decision-making through real-time reporting and analytics; and cloud accessibility enabling teams to collaborate anytime, anywhere.",
    },
    {
      question: "Can NetSuite integrate with existing OSS/BSS platforms?",
      answer:
        "Yes. NetSuite provides robust REST and SOAP APIs along with SuiteCloud platform tools that allow seamless integration with OSS/BSS platforms, provisioning systems, CRM platforms, and third-party billing engines. AGSuite's integration team specializes in building these connectors for telecom environments.",
    },
    {
      question: "How does AGSuite help telecom companies implement NetSuite?",
      answer:
        "AGSuite brings deep telecom domain knowledge and Oracle NetSuite implementation expertise. We offer end-to-end services from consulting and implementation to integration and ongoing support. Our telecom-focused configurations, India Localization, and global multi-subsidiary consolidation expertise ensure a rapid, high-quality deployment.",
    },
    {
      question: "Does NetSuite support multi-country telecom operations?",
      answer:
        "Absolutely. NetSuite OneWorld supports multi-subsidiary, multi-currency, and multi-tax environments from a single platform. This is ideal for telecom operators with presence across India and international markets, enabling consolidated reporting and local compliance simultaneously.",
    },
  ],
  relatedIndustries: [
    { label: "Software & Technology", href: "/netsuite/industries/software" },
    { label: "Financial Services", href: "/netsuite/industries/financial-services" },
    { label: "IT & Professional Services", href: "/netsuite/industries/it-services" },
    { label: "Media & Publishing", href: "/netsuite/industries/media" },
  ],
};

export default function TelecomPage() {
  return <IndustryTemplate data={data} />;
}




