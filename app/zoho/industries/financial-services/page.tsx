"use client";

import ZohoIndustryTemplate, {
  IndustryPageData,
} from "@/app/zoho/components/industries/ZohoIndustryTemplate";
import { DollarSign, BarChart3, Shield, TrendingUp } from "lucide-react";

const data: IndustryPageData = {
  industry: "Financial Services",
  heroTitle: "Streamline Finance Operations with Zoho's Unified Cloud Suite",
  heroDescription:
    "Empower your financial institution with Zoho's integrated applications — delivering automated compliance, real-time analytics, secure data management, and seamless workflows across finance, CRM, and operations.",
  heroImage: "/images/industries/financial-services-industry.webp",
  heroCardTitle: "Financial Operations Hub",
  heroCardSub: "Compliance · Risk · Reporting · Multi-Entity Management",
  heroTopCardTitle: "Trusted by Financial Organizations",
  heroTopCardSub: "Compliant · Secure · Scalable",
  introImage: "/images/lap/lap4.webp",
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
    {
      title: "Seamless Ecosystem Integrations",
      description:
        "Connect Zoho CRM with banking platforms, payment gateways, investment management systems, and third-party financial tools via Zoho Flow — achieving complete operational visibility with zero manual data entry.",
      image: "/images/people/laptopgirl3.webp",
      points: [
        "Banking & payment API integrations",
        "Zoho CRM client management",
        "Payroll & HR Zoho People sync",
      ],
    },
  ],
  challenges: [
    {
      title: "Regulatory Compliance",
      solution:
        "Zoho Books provides built-in compliance for IFRS, GAAP, GST, and local regulations — with automated rule updates and statutory reporting so your team stays compliant without manual effort.",
      image: "/images/people/laptopmen1.jpg",
    },
    {
      title: "Data Security & Privacy",
      solution:
        "Zoho delivers enterprise-grade cloud security with AES-256 encryption, role-based access controls, two-factor authentication, regular security audits, and 24/7 monitoring across all applications.",
      image: "/images/lap/lap1.webp",
    },
    {
      title: "Legacy Systems & Integration Gaps",
      solution:
        "Zoho Flow and Zoho Creator integrate with existing banking, trading, and CRM systems via REST APIs — creating a unified data layer that eliminates silos and reduces manual data entry.",
      image: "/images/people/fourteam.webp",
    },
    {
      title: "Risk Management Complexity",
      solution:
        "Zoho Analytics and Zoho Creator provide real-time risk dashboards, configurable approval workflows, and automated controls that help financial firms identify and mitigate risks proactively.",
      image: "/images/people/global.webp",
    },
    {
      title: "Real-Time Visibility & Forecasting",
      solution:
        "Zoho Analytics consolidates all financial data in real time, enabling accurate cash flow forecasting, scenario planning, and consolidated reporting across all entities and geographies.",
      image: "/images/lap/lap2.webp",
    },
    {
      title: "Scalability Across Regions",
      solution:
        "Zoho Finance Plus enables global financial firms to manage multiple subsidiaries, currencies, and tax regimes from a single platform — with centralized control and local flexibility.",
      image: "/images/people/laptopgirl3.webp",
    },
    {
      title: "Customer Expectations & Digital Experience",
      solution:
        "Zoho CRM and Zoho Desk enable financial firms to deliver transparent, personalized client experiences with real-time account visibility, omnichannel communication, and self-service portals.",
      image: "/images/lap/lap9_11zon.webp",
    },
    {
      title: "Fraud & Financial Crime Prevention",
      solution:
        "Zoho's role-based access controls, audit trails, and workflow-based approval processes create a robust internal control environment that reduces fraud risk and supports AML compliance requirements.",
      image: "/images/lap/lap8_11zon.webp",
    },
  ],
  pricingIntro:
    "Zoho pricing for Financial Services is modular — choose the apps you need (Zoho Books, Zoho Finance Plus, Zoho CRM, Zoho Analytics) or go all-in with Zoho One for a single flat rate per user. No hidden fees, no infrastructure costs, and scales as your organization grows.",
  pricingTiers: [
    {
      name: "Starter",
      price: "₹60,000",
      description: "For growing financial firms up to 25 users.",
      features: [
        "Zoho Books (Financials & GST)",
        "Zoho CRM (Client Management)",
        "Basic Compliance Reporting",
        "Automated Period-End Close",
        "Email Support",
      ],
    },
    {
      name: "Professional",
      price: "₹1,30,000",
      description: "Full financial services suite for mid-size institutions.",
      features: [
        "Zoho Finance Plus (Multi-Entity)",
        "Zoho Analytics (Custom Dashboards)",
        "Zoho Flow (Workflow Automation)",
        "Zoho CRM + Zoho Desk",
        "GST, TDS & e-Invoice Compliance",
        "SLA-backed Support",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large-scale or global financial organizations.",
      features: [
        "Zoho One (All 55+ Apps)",
        "Custom Banking & FinTech Integrations",
        "Advanced Audit & Risk Reporting",
        "India Localization + Global Multi-Entity",
        "Dedicated Implementation Manager",
        "24/7 Priority Support",
      ],
    },
  ],
  faqs: [
    {
      question: "How does Zoho help Financial Services companies?",
      answer:
        "Zoho helps financial services companies modernize operations with a unified suite — Zoho Books for financial management, Zoho CRM for client relationships, Zoho Analytics for insights, and Zoho Flow for automation. Together, these tools streamline compliance, improve decision-making, and reduce operational costs.",
    },
    {
      question: "Can Zoho integrate with existing banking or financial systems?",
      answer:
        "Yes. Zoho Flow and Zoho Creator provide robust REST API integration capabilities that connect with banking platforms, payment gateways, investment management systems, and third-party financial tools. Data flows securely across all platforms without manual entry.",
    },
    {
      question: "Is Zoho secure enough for sensitive financial data?",
      answer:
        "Absolutely. Zoho uses enterprise-grade cloud security, including AES-256 encryption, role-based access controls, two-factor authentication, regular security audits, and 24/7 monitoring. Zoho is ISO 27001 certified and GDPR compliant, ensuring your financial data remains safe and private.",
    },
    {
      question: "Does Zoho support India-specific compliance for financial services?",
      answer:
        "Yes. Zoho Books includes full GST automation, e-invoicing compliance, TDS/TCS computation, and statutory reporting for Indian businesses. AGSuite's Zoho localization expertise ensures your financial organization remains fully compliant with Indian tax and regulatory requirements.",
    },
    {
      question: "How does Zoho Finance Plus support multi-entity financial management?",
      answer:
        "Zoho Finance Plus enables financial firms to manage multiple business entities, currencies, and tax regimes from a single platform. Inter-company transactions, consolidated reports, and entity-level financial statements are all handled within one unified Zoho organization.",
    },
    {
      question: "What is AGSuite's approach to implementing Zoho for Financial Services?",
      answer:
        "AGSuite combines deep financial services domain expertise with certified Zoho implementation experience. We offer modular deployments tailored to your specific needs — from core accounting with Zoho Books to full-suite Zoho One implementations — with ongoing support and optimization to ensure long-term value.",
    },
  ],
  relatedIndustries: [
    { label: "Software & Technology", href: "/zoho/industries/software" },
    { label: "Telecom Industry", href: "/zoho/industries/telecom" },
    { label: "IT & Professional Services", href: "/zoho/industries/it-services" },
    { label: "Wholesale Distribution", href: "/zoho/industries/wholesale" },
  ],
};

export default function ZohoFinancialServicesPage() {
  return <ZohoIndustryTemplate data={data} />;
}
