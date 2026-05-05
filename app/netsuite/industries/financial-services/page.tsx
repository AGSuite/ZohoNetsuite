"use client";

import IndustryTemplate, {
  IndustryPageData,
} from "@/app/netsuite/industries/_template/IndustryTemplate";
import { DollarSign, BarChart3, Shield, TrendingUp } from "lucide-react";

const data: IndustryPageData = {
  industry: "Financial Services",
  heroTitle: "Streamline and Elevate Finance Operations with Oracle NetSuite ERP",
  heroDescription:
    "Empower your financial institution with a unified, cloud-based ERP that delivers real-time compliance, automated workflows, and enterprise-grade security — built for the demands of modern financial services.",
  heroImage: "/images/industries/financial-services-industry.webp",
  heroCardTitle: "Financial ERP Command Center",
  heroCardSub: "Compliance · Risk Management · Reporting · Multi-Entity Consolidation",
  heroTopCardTitle: "Trusted by Financial Leaders",
  heroTopCardSub: "Compliant · Secure · Scalable",
  introImage: "/images/lap/lap4.webp",
  introTitle: "Why NetSuite ERP for Financial Services Industry?",
  introDescription:
    "In a rapidly evolving financial landscape, organizations face challenges like regulatory compliance, data security, and operational inefficiencies. To stay competitive, financial institutions require a modern, cloud-based ERP solution that delivers real-time visibility, automation, and scalability.",
  introDescription2:
    "NetSuite for Financial Services is designed to address these needs by streamlining accounting, improving compliance, and enabling informed decision-making. Its unified platform eliminates data silos, ensuring accurate financial reporting and seamless integration across business functions. At AGSuite Technologies, we help financial organizations implement and optimize NetSuite to gain maximum value, transforming complex operations into efficient, data-driven processes.",
  stats: [
    { icon: DollarSign, value: 35, suffix: "%", label: "Reduction in Compliance Costs" },
    { icon: BarChart3, value: 99, suffix: "%", label: "Reporting Accuracy" },
    { icon: Shield, value: 100, suffix: "+", label: "Financial Firms Served" },
    { icon: TrendingUp, value: 15, suffix: "+", label: "Years ERP Experience" },
  ],
  benefits: [
    {
      title: "End-to-End Financial Management",
      description:
        "Automate accounts payable, receivable, and general ledger operations with full audit trails. Eliminate manual reconciliation and close books faster with automated period-end processes.",
      image: "/images/lap/lap4.webp",
      points: [
        "Automated AP/AR & GL",
        "Fast period-end close",
        "Full audit trail & controls",
      ],
    },
    {
      title: "Regulatory Compliance Tools",
      description:
        "Built-in features ensure adherence to international accounting and reporting standards including IFRS, GAAP, GST, TDS, and e-Invoicing — with automated regulatory updates.",
      image: "/images/lap/lap7_11zon.webp",
      points: [
        "IFRS & GAAP compliance",
        "India GST/TDS/e-Invoice",
        "Automated regulatory updates",
      ],
    },
    {
      title: "Real-Time Analytics & Reporting",
      description:
        "Gain accurate, data-driven insights with customizable dashboards and reports. Access financial KPIs, risk metrics, and performance benchmarks in real time — no waiting for end-of-month reports.",
      image: "/images/people/laptopmen2.webp",
      points: [
        "Custom financial dashboards",
        "Real-time KPI tracking",
        "Drill-down analytics",
      ],
    },
    {
      title: "Process Automation & Workflows",
      description:
        "Reduce manual workloads with smart workflows and automated approvals. Automate routine financial operations like invoice processing, payment runs, and reconciliation.",
      image: "/images/lap/lap9_11zon.webp",
      points: [
        "Multi-level approval workflows",
        "Automated payment runs",
        "Smart reconciliation engine",
      ],
    },
    {
      title: "Scalability & Multi-Entity Support",
      description:
        "Easily scale your ERP system as your financial organization grows. Manage multi-entity, multi-currency, and multi-jurisdiction operations from a single consolidated platform.",
      image: "/images/lap/lap8_11zon.webp",
      points: [
        "Multi-subsidiary consolidation",
        "Multi-currency & multi-tax",
        "Global & India localization",
      ],
    },
    {
      title: "Seamless Ecosystem Integrations",
      description:
        "Connect with CRM, payroll, banking platforms, investment management systems, and third-party financial tools for complete operational visibility and zero manual data entry.",
      image: "/images/people/laptopgirl3.webp",
      points: [
        "Banking & payment gateway APIs",
        "CRM & investment system integration",
        "Payroll & HR system connectors",
      ],
    },
  ],
  challenges: [
    {
      title: "Regulatory Compliance",
      description:
        "Adapting to ever-changing global financial regulations requires accuracy and agility. NetSuite's compliance engine keeps pace with regulatory changes automatically.",
      solution:
        "NetSuite provides built-in compliance frameworks for IFRS, GAAP, GST, and local regulations — with automated rule updates so your team stays compliant without manual effort.",
      image: "/images/people/laptopmen1.jpg",
    },
    {
      title: "Data Security & Privacy",
      description:
        "Protecting sensitive client and company data from cyber threats is a top concern. NetSuite uses enterprise-grade security with role-based access and encryption.",
      solution:
        "NetSuite delivers enterprise-grade cloud security with AES-256 encryption, role-based access controls, two-factor authentication, regular audits, and 24/7 monitoring.",
      image: "/images/lap/lap1.webp",
    },
    {
      title: "Legacy Systems & Integration Gaps",
      description:
        "Many firms still rely on outdated, fragmented systems — leading to inefficiencies, manual work, and poor data flow across departments and geographies.",
      solution:
        "NetSuite's open API platform integrates with existing banking, trading, and CRM systems — creating a unified data layer that eliminates silos and manual rekeying.",
      image: "/images/people/fourteam.webp",
    },
    {
      title: "Risk Management Complexity",
      description:
        "Managing credit, market, operational, and liquidity risks while maintaining profitability and stability is increasingly complex in today's volatile environment.",
      solution:
        "NetSuite provides real-time risk dashboards, automated controls, and configurable approval workflows that help financial firms identify and mitigate risks proactively.",
      image: "/images/people/global.webp",
    },
    {
      title: "Real-Time Visibility & Forecasting",
      description:
        "Lack of unified financial and operational data makes accurate forecasting and decision-making challenging. NetSuite consolidates data for instant insights.",
      solution:
        "NetSuite consolidates all financial data in real time, enabling accurate cash flow forecasting, scenario planning, and consolidated reporting across all entities and geographies.",
      image: "/images/lap/lap2.webp",
    },
    {
      title: "Scalability Across Regions",
      description:
        "Supporting multi-entity, multi-currency, and multi-jurisdiction operations while maintaining consistency and control is a major hurdle for global financial firms.",
      solution:
        "NetSuite OneWorld enables global financial firms to manage multiple subsidiaries, currencies, and tax regimes from a single platform with centralized control and local flexibility.",
      image: "/images/people/laptopgirl3.webp",
    },
    {
      title: "Customer Expectations & Digital Experience",
      description:
        "Clients expect seamless digital experiences, 24/7 access, and personalized financial solutions. Meeting these expectations requires advanced technology and automation.",
      solution:
        "NetSuite's customer portal and CRM integration enable financial firms to deliver transparent, self-service digital experiences with real-time account visibility and communication.",
      image: "/images/lap/lap9_11zon.webp",
    },
    {
      title: "Fraud & Financial Crime Prevention",
      description:
        "Increasing instances of digital fraud, AML requirements, and identity threats require advanced monitoring and automated detection systems.",
      solution:
        "NetSuite's audit trail, role-based access controls, and workflow-based approval processes create a robust internal control environment that reduces fraud risk and supports AML compliance.",
      image: "/images/lap/lap8_11zon.webp",
    },
  ],
  pricingIntro:
    "NetSuite pricing for Financial Services is tailored to your entity structure, user count, and compliance requirements — including multi-subsidiary consolidation, regulatory reporting, and banking integrations. Pricing scales with your growth, no expensive platform migrations required.",
  pricingTiers: [
    {
      name: "Starter",
      price: "₹1,20,000",
      description: "For growing financial firms up to 25 users.",
      features: [
        "Core ERP (Financials, AR/AP, GL)",
        "Basic Regulatory Reporting",
        "Automated Period-End Close",
        "Standard Dashboards",
        "Email Support",
      ],
    },
    {
      name: "Professional",
      price: "₹2,50,000",
      description: "Full financial services suite for mid-size institutions.",
      features: [
        "Multi-Entity Consolidation",
        "Advanced Compliance (IFRS/GAAP/GST)",
        "Banking & CRM Integration",
        "Risk Management Dashboards",
        "Workflow & Approval Automation",
        "SLA-backed Support",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large-scale or global financial organizations.",
      features: [
        "Multi-Subsidiary (OneWorld)",
        "Custom Regulatory & Audit Reporting",
        "Advanced Banking & FinTech Integrations",
        "India Localization (GST/TDS/e-Invoice)",
        "Dedicated Implementation Manager",
        "24/7 Priority Support",
      ],
    },
  ],
  faqs: [
    {
      question: "How does NetSuite help Financial Services companies?",
      answer:
        "NetSuite helps financial services companies modernize and streamline their operations by providing a single, cloud-based platform that integrates financial management, customer relationship management (CRM), and business analytics. It automates routine processes, improves compliance, and gives leaders real-time visibility into performance and risk.",
    },
    {
      question: "Can NetSuite integrate with existing banking or financial systems?",
      answer:
        "Yes. NetSuite offers robust APIs and integration tools that allow seamless connection with banking platforms, payment gateways, investment management systems, and third-party financial tools. This ensures data flows securely across all platforms without manual entry.",
    },
    {
      question: "Is NetSuite secure enough for financial data?",
      answer:
        "Absolutely. NetSuite uses enterprise-grade cloud security, including AES-256 data encryption, role-based access controls, two-factor authentication, regular security audits, and 24/7 monitoring. These measures ensure your financial data remains safe, private, and compliant with international security standards.",
    },
    {
      question: "Does NetSuite support India-specific compliance for financial services?",
      answer:
        "Yes. AGSuite's India Localization SuiteApp provides full GST automation, e-invoicing, TDS/TCS computation, E-Way bill generation, and statutory reporting natively inside NetSuite — keeping Indian financial organizations fully compliant.",
    },
    {
      question: "How does NetSuite handle multi-entity financial consolidation?",
      answer:
        "NetSuite OneWorld enables financial firms to manage multiple subsidiaries, currencies, and regulatory environments from a single platform. Inter-company transactions are automated, eliminations are handled in real time, and consolidated financial statements are generated instantly.",
    },
    {
      question: "What is AGSuite's approach to implementing NetSuite for Financial Services?",
      answer:
        "AGSuite combines deep financial services domain expertise with proven Oracle NetSuite implementation experience. We offer rapid deployment with industry-tailored configurations, seamless India Localization, global multi-subsidiary consolidation, and end-to-end services from consulting through implementation to ongoing support and optimization.",
    },
  ],
  relatedIndustries: [
    { label: "Software & Technology", href: "/netsuite/industries/software" },
    { label: "Telecom Industry", href: "/netsuite/industries/telecom" },
    { label: "IT & Professional Services", href: "/netsuite/industries/it-services" },
    { label: "Wholesale Distribution", href: "/netsuite/industries/wholesale" },
  ],
};

export default function FinancialServicesPage() {
  return <IndustryTemplate data={data} />;
}
