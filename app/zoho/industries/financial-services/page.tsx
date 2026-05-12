"use client";

import React from "react";





import ZohoIndustryTemplate, {
  IndustryPageData,
} from "@/app/zoho/components/industries/ZohoIndustryTemplate";
import { DollarSign, BarChart3, Shield, TrendingUp } from "lucide-react";



const data: IndustryPageData = {
  industry: "Financial Services",
  heroTitle: "Modernize Financial Operations with Zoho Finance Plus",
  heroDescription:
    "Empower your financial organization with an integrated cloud suite that delivers real-time visibility, automated compliance, and scalable operations — from accounting to analytics.",
  heroImage: "/images/industries/financial-services-industry.webp",
  heroCardTitle: "Financial Command Center",
  heroCardSub: "Compliance · Risk · Reporting · Multi-Entity Management",
  heroTopCardTitle: "Trusted by Financial Organizations",
  heroTopCardSub: "Compliant · Secure · Scalable",
  introImage: "/images/lap/lap10_11zon.webp",
  introTitle: "Why Zoho for Financial Services Industry?",
  introDescription:
    "In a rapidly evolving financial landscape, organizations face challenges like regulatory compliance, data security, and operational inefficiencies. To stay competitive, financial institutions require a modern, cloud-based solution that delivers real-time visibility, automation, and scalability — without the cost and complexity of traditional ERP systems.",
  introDescription2:
    "Zoho's integrated suite — including Zoho Books, Zoho Finance Plus, Zoho CRM, Zoho Analytics, and Zoho Creator — provides financial organizations with the tools to streamline accounting, improve compliance, and enable data-driven decision-making. At AGSuite Technologies, we help financial organizations implement and optimize Zoho to gain maximum value from their technology investment.",
  stats: [
    { icon: DollarSign, value: 35, suffix: "%", label: "Reduction in Compliance Costs" },
    { icon: BarChart3, value: 99, suffix: "%", label: "Reporting Accuracy" },
    { icon: Shield, value: 100, suffix: "+", label: "Financial Firms Served" },
    { icon: TrendingUp, value: 15, suffix: "+", label: "Years Zoho Experience" },
  ],
  benefits: [
    {
      title: "End-to-End Financial Management",
      description:
        "Automate accounts payable, receivable, and general ledger operations with Zoho Books. Eliminate manual reconciliation and close books faster with automated period-end processes and full audit trails.",
      image: "/images/lap/lap4.webp",
      points: [
        "Zoho Books AP/AR automation",
        "Fast period-end close",
        "Full audit trail & controls",
      ],
    },
    {
      title: "Regulatory Compliance Tools",
      description:
        "Built-in Zoho Books compliance features ensure adherence to GST, TDS, IFRS, and local reporting standards — with automated e-invoicing and statutory reporting for Indian financial regulations.",
      image: "/images/lap/lap7_11zon.webp",
      points: [
        "GST, TDS & e-Invoice automation",
        "IFRS & local compliance",
        "Automated regulatory reporting",
      ],
    },
    {
      title: "Real-Time Analytics & Reporting",
      description:
        "Gain accurate, data-driven insights with Zoho Analytics' customizable dashboards and reports. Access financial KPIs, risk metrics, and performance benchmarks in real time — across all entities.",
      image: "/images/people/laptopmen2.webp",
      points: [
        "Zoho Analytics custom dashboards",
        "Real-time KPI tracking",
        "Drill-down financial reports",
      ],
    },
    {
      title: "Process Automation & Workflows",
      description:
        "Reduce manual workloads with Zoho Flow's smart automation and Zoho Creator's custom approval workflows. Automate invoice processing, payment runs, and reconciliation across departments.",
      image: "/images/lap/lap9_11zon.webp",
      points: [
        "Zoho Flow workflow automation",
        "Multi-level approval workflows",
        "Automated payment & reconciliation",
      ],
    },
    {
      title: "Scalability & Multi-Entity Support",
      description:
        "Manage multiple financial entities, currencies, and tax environments with Zoho Finance Plus. Scale operations across India and globally with a single, unified Zoho organization.",
      image: "/images/lap/lap8_11zon.webp",
      points: [
        "Zoho Finance Plus multi-entity",
        "Multi-currency & multi-tax",
        "India localization built-in",
      ],
    },
  ],
  features: [
    {
      title: "Comprehensive Financial Accounting",
      description: "Manage end-to-end accounting processes from journals to financial statements with Zoho Books.",
      image: "/images/lap/lap1.webp",
    },
    {
      title: "Automated GST Compliance",
      description: "Stay compliant with India's GST regulations through automated filing and e-invoicing.",
      image: "/images/lap/lap2.webp",
    },
    {
      title: "Advanced Financial Analytics",
      description: "Gain deep insights into financial health and risk metrics with Zoho Analytics.",
      image: "/images/lap/lap3.webp",
    },
    {
      title: "Customizable Approval Workflows",
      description: "Ensure operational control with tailored multi-level approval processes in Zoho Creator.",
      image: "/images/lap/lap5.webp",
    },
    {
      title: "Multi-Entity Management",
      description: "Consolidate financials across multiple subsidiaries and currencies with Zoho Finance Plus.",
      image: "/images/lap/lap6_11zon.webp",
    },
  ],
  challenges: [
    {
      title: "Regulatory Compliance",
      solution:
        "Zoho Books provides built-in compliance for IFRS, GAAP, GST, and local regulations — with automated rule updates and statutory reporting so your team stays compliant without manual effort.",
      image: "/images/challenges/compliance.png",
    },
    {
      title: "Data Security & Privacy",
      solution:
        "Zoho delivers enterprise-grade cloud security with AES-256 encryption, role-based access controls, two-factor authentication, regular security audits, and 24/7 monitoring across all applications.",
      image: "/images/challenges/security.png",
    },
    {
      title: "Legacy Systems & Integration Gaps",
      solution:
        "Zoho Flow and Zoho Creator integrate with existing banking, trading, and CRM systems via REST APIs — creating a unified data layer that eliminates silos and reduces manual data entry.",
      image: "/images/challenges/data-silos.png",
    },
    {
      title: "Risk Management Complexity",
      solution:
        "Zoho Analytics and Zoho Creator provide real-time risk dashboards, configurable approval workflows, and automated controls that help financial firms identify and mitigate risks proactively.",
      image: "/images/challenges/profitability.png",
    },
    {
      title: "Real-Time Visibility & Forecasting",
      solution:
        "Zoho Analytics consolidates all financial data in real time, enabling accurate cash flow forecasting, scenario planning, and consolidated reporting across all entities and geographies.",
      image: "/images/challenges/resource-visibility.png",
    },
  ],
  pricingTiers: [
    {
      name: "Starter",
      price: "₹80,000",
      description: "For small financial firms or boutiques.",
      features: [
        "Zoho Books (Accounting)",
        "Zoho Finance Plus (Standard)",
        "Basic Regulatory Reporting",
        "Standard Analytics Dashboards",
        "Email Support",
      ],
    },
    {
      name: "Professional",
      price: "₹1,60,000",
      description: "Full finance suite for mid-size firms.",
      features: [
        "Multi-entity Consolidation",
        "Advanced Regulatory Automation",
        "Custom Workflow Automation (Zoho Flow)",
        "Advanced Analytics & KPI Tracking",
        "India Localization (GST/TDS/e-Invoice)",
        "SLA-backed Support",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large-scale or global financial groups.",
      features: [
        "Zoho One (Global Org)",
        "Custom Risk Management Modules",
        "Banking & Trading API Integrations",
        "Advanced Scenario Planning",
        "Dedicated Implementation Manager",
        "24/7 Priority Support",
      ],
    },
  ],
  faqs: [
    {
      question: "Is Zoho compliant with Indian financial regulations?",
      answer: "Yes. Zoho Books is fully GST-ready and supports e-invoicing, TDS/TCS, and statutory reporting requirements for Indian businesses, including the financial services sector.",
    },
    {
      question: "How secure is data in Zoho for financial institutions?",
      answer: "Zoho maintains high security standards including SOC 2 Type II, ISO 27001, and HIPAA compliance. Data is encrypted at rest (AES-256) and in transit (TLS 1.2/1.3).",
    },
    {
      question: "Can Zoho consolidate multiple legal entities?",
      answer: "Yes. Zoho Finance Plus and Zoho One allow you to manage multiple legal entities under a single organization, providing both entity-level and consolidated financial reporting.",
    },
  ],
  relatedIndustries: [
    { label: "IT & Professional Services", href: "/zoho/industries/it-services" },
    { label: "Software & Technology", href: "/zoho/industries/software" },
    { label: "Media & Publishing", href: "/zoho/industries/media" },
    { label: "Advertising & Marketing", href: "/zoho/industries/advertising-marketing" },
  ],
};

export default function ZohoFinancialServicesPage() {
  return <ZohoIndustryTemplate data={data} />;
}




