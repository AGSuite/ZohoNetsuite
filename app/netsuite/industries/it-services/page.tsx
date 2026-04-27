"use client";
import IndustryTemplate, {
  IndustryPageData,
} from "../_template/IndustryTemplate";
import { Users, BarChart3, TrendingUp, Database } from "lucide-react";

const data: IndustryPageData = {
  industry: "IT & Professional Services",
  heroTitle: "Scale Your IT Services Business Without Limits",
  heroDescription:
    "Optimize billable utilization, accelerate project delivery, and automate complex billing with the #1 cloud ERP built for IT and consulting firms.",
  heroImage: "/images/people/people4.webp",
  heroCardTitle: "Project Profitability",
  heroCardSub: "Projects · Resources · Billing · Revenue Recognition",
  heroTopCardTitle: "Trusted by 500+ Services Firms",
  heroTopCardSub: "Consulting · Legal · IT · Engineering",
  introImage: "/images/people/laptopmen2.webp",
  introTitle: "Run Projects, Resources, and Finances in One System",
  introDescription:
    "Professional services firms struggle with disconnected tools — separate project management, time tracking, billing, and accounting systems that create data silos and revenue leakage. NetSuite SRP brings it all together in one unified cloud ERP.",
  introDescription2:
    "From the initial statement of work through project delivery, time and expense capture, invoicing, and revenue recognition — every step is connected in real time. Your PMs have live project health. Your finance team has accurate revenue data.",
  stats: [
    { icon: Users, value: 500, suffix: "+", label: "Services Firms Served" },
    {
      icon: BarChart3,
      value: 35,
      suffix: "%",
      label: "Higher Billable Utilisation",
    },
    {
      icon: TrendingUp,
      value: 90,
      suffix: "%",
      label: "On-Time Project Delivery",
    },
    { icon: Database, value: 15, suffix: "+", label: "Years Experience" },
  ],
  benefits: [
    {
      title: "Project & Milestone Management",
      description:
        "Plan projects with tasks, milestones, dependencies, and resource assignments. Track actuals vs. budget in real time and get early warning on at-risk projects.",
      image: "/images/lap/lap5.webp",
    },
    {
      title: "Resource Management & Utilisation",
      description:
        "Allocate the right people to the right projects based on skills, availability, and utilisation targets. Avoid bench time and project bottlenecks.",
      image: "/images/lap/lap3.webp",
    },
    {
      title: "Flexible Project Billing",
      description:
        "Support T&M, fixed-fee, milestone, and retainer billing models. Generate client invoices directly from approved timesheets and project milestones.",
      image: "/images/people/laptopgirl1.webp",
    },
    {
      title: "Revenue Recognition (ASC 606)",
      description:
        "Automate complex revenue recognition schedules natively in NetSuite, ensuring ASC 606 and IFRS 15 compliance without manual spreadsheets.",
      image: "/images/people/global.webp",
    },
    {
      title: "Time & Expense Automation",
      description:
        "Enable consultants to submit time and expenses on-the-go via mobile. Automated approval workflows ensure faster reimbursement and quicker client billing cycles.",
      image: "/images/people/laptopgirl.webp",
    },
    {
      title: "360-Degree Client Visibility",
      description:
        "Gain a unified view of your clients — from initial lead to project history, support cases, and financial records. Make informed decisions and improve client retention.",
      image: "/images/people/threeteam.webp",
    },
  ],
  challenges: [
    {
      title: "Revenue Leakage from Unbilled Time",
      description:
        "NetSuite SRP automatically captures all billable time and expenses against projects, eliminating leakage with automated billing triggers and approval workflows.",
      image: "/images/people/laptopmen1.jpg",
    },
    {
      title: "Inaccurate Project Profitability",
      description:
        "NetSuite provides real-time project P&L dashboards showing actuals vs. budget by task, resource, and project — enabling proactive margin management.",
      image: "/images/lap/lap1.webp",
    },
    {
      title: "Complex Revenue Recognition",
      description:
        "NetSuite's Advanced Revenue Management automates ASC 606 / IFRS 15 compliant recognition schedules directly from project milestones and deliverables.",
      image: "/images/lap/lap4.webp",
    },
    {
      title: "Slow Financial Close",
      description:
        "With project actuals flowing directly into NetSuite financials, month-end close is automated — no more manual journal entries or spreadsheet reconciliation.",
      image: "/images/people/fourteam.webp",
    },
    {
      title: "Poor Resource Visibility",
      description:
        "Lack of visibility into resource availability leads to overbooking or underutilization. NetSuite provides real-time heat maps for smarter resource planning.",
      image: "/images/people/laptopgirl3.webp",
    },
    {
      title: "Manual Billing Errors",
      description:
        "Manually compiling timesheets for billing is slow and error-prone. NetSuite automates the entire invoice generation process from approved time.",
      image: "/images/lap/lap2.webp",
    },
    {
      title: "Spreadsheet-Based Tracking",
      description:
        "Running projects on spreadsheets leads to data silos and lack of control. NetSuite replaces spreadsheets with a unified project management platform.",
      image: "/images/lap/lap5.webp",
    },
    {
      title: "Siloed Communication",
      description:
        "Fragmented communication leads to project delays. NetSuite unifies all communications, project documentation, and task records in one place.",
      image: "/images/people/laptopmen2.webp",
    },
  ],
  pricingTiers: [
    {
      name: "Starter",
      price: "₹1,00,000",
      description: "For boutique consulting firms up to 20 users.",
      features: [
        "Core ERP (Financials, AR/AP)",
        "Project Management",
        "Time & Expense Tracking",
        "Standard Billing",
        "Email Support",
      ],
    },
    {
      name: "Professional",
      price: "₹2,20,000",
      description: "Full PSA for mid-size services organisations.",
      features: [
        "Advanced Project Management",
        "Resource Management & Utilisation",
        "Multi-Model Project Billing",
        "Revenue Recognition (ASC 606)",
        "CRM Integration",
        "SLA-backed Support",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For global, multi-subsidiary services firms.",
      features: [
        "NetSuite OneWorld",
        "OpenAir / SuiteProject Pro",
        "Advanced Revenue Management",
        "Custom Dashboards & Reports",
        "Dedicated Implementation Manager",
        "24/7 Priority Support",
      ],
    },
  ],
  faqs: [
    {
      question:
        "What is the difference between NetSuite SRP and NetSuite OpenAir?",
      answer:
        "NetSuite SRP (Services Resource Planning) is the project management module built natively into NetSuite ERP. NetSuite OpenAir (now SuiteProject Pro) is an advanced, standalone PSA solution. SRP suits most services firms while OpenAir is for complex enterprise services operations.",
    },
    {
      question:
        "Does NetSuite support percentage-of-completion revenue recognition?",
      answer:
        "Yes. NetSuite's Advanced Revenue Management supports multiple recognition methods including percentage-of-completion, milestone-based, straight-line, and event-based recognition — all configurable per contract or project.",
    },
    {
      question: "Can our consultants submit timesheets on mobile?",
      answer:
        "Yes. NetSuite provides a mobile-responsive timesheet and expense interface accessible via any browser on smartphones and tablets. Timesheets can be submitted, reviewed, and approved from anywhere.",
    },
    {
      question: "How does NetSuite handle change orders on fixed-fee projects?",
      answer:
        "Change orders can be tracked as project change events in NetSuite, updating the project budget, schedule, and billing schedule. They are linked to client approval workflows before being activated.",
    },
    {
      question: "Can NetSuite integrate with Jira or Microsoft Project?",
      answer:
        "Yes. NetSuite integrates with Jira, MS Project, and other tools via its REST/SOAP APIs and pre-built connectors. AGSuite can build custom integrations to fit your existing tool stack.",
    },
  ],
  relatedIndustries: [
    { label: "Software & Technology", href: "/netsuite/industries/software" },
    { label: "Manufacturing", href: "/netsuite/industries/manufacturing" },
    { label: "Wholesale Distribution", href: "/netsuite/industries/wholesale" },
    { label: "Retail & E-Commerce", href: "/netsuite/industries/retail" },
  ],
};

export default function ITServicesPage() {
  return <IndustryTemplate data={data} />;
}
