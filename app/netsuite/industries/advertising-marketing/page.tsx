import IndustryTemplate, {
  IndustryPageData,
} from "../_template/IndustryTemplate";
import { Users, BarChart3, TrendingUp, Globe } from "lucide-react";
import { buildMetadata, INDUSTRY_PAGES } from "../../lib/seo";

const PAGE_PATH = "/netsuite/industries/advertising-marketing";
const pageMetadata = INDUSTRY_PAGES[PAGE_PATH];

export const metadata = pageMetadata ? buildMetadata({
  ...pageMetadata,
  path: PAGE_PATH,
  ogImage: "https://www.agsuitetech.com/images/og/og-netsuite.jpg",
}) : {};


const data: IndustryPageData = {
  industry: "Advertising & Marketing",
  heroTitle: "NetSuite for Advertising & Marketing Agencies",
  heroDescription:
    "Run a more profitable agency with a cloud ERP purpose-built for project-based billing, resource management, and client financial visibility. NetSuite empowers agencies to scale without losing control.",
  heroImage: "/images/industries/marketing.jpg",
  heroCardTitle: "Agency ERP & Project Management",
  heroCardSub: "Projects · Retainers · Billing · Resource Planning",
  heroTopCardTitle: "Trusted by Leading Agencies",
  heroTopCardSub: "Digital · Creative · Media · Integrated",
  introImage: "/images/lap/lap9_11zon.webp",
  introTitle: "Built for Creative & Digital Agencies",
  introDescription:
    "Advertising and digital marketing agencies operate in a fast-paced, project-driven environment where profitability lives and dies on utilisation rates, scope creep management, and timely billing. Most agencies outgrow their spreadsheets and fragmented tools well before they realise it.",
  introDescription2:
    "NetSuite gives agencies a single system for CRM, project management, time and expense tracking, client billing, and financial reporting. With real-time visibility into project margins and utilisation, you can make confident decisions on every engagement.",
  stats: [
    { icon: Users, value: 300, suffix: "+", label: "Agencies on NetSuite" },
    {
      icon: BarChart3,
      value: 25,
      suffix: "%",
      label: "Higher Billable Utilisation",
    },
    {
      icon: TrendingUp,
      value: 40,
      suffix: "%",
      label: "Faster Client Invoicing",
    },
    { icon: Globe, value: 15, suffix: "+", label: "Years of Agency ERP" },
  ],
  benefits: [
    {
      title: "Project & Campaign Management",
      description:
        "Plan and manage campaigns, creative projects, and retainers with tasks, milestones, budgets, and resource assignments — all connected to billing.",
      image: "/images/lap/lap6_11zon.webp",
    },
    {
      title: "Resource & Utilisation Management",
      description:
        "Allocate creative, strategy, and technical resources across projects based on skills and availability. Track utilisation rates and identify bottlenecks before they impact delivery.",
      image: "/images/lap/lap3.webp",
    },
    {
      title: "Flexible Client Billing",
      description:
        "Support retainer, T&M, fixed-fee, and milestone billing models. Generate client invoices directly from approved timesheets and campaign deliverables.",
      image: "/images/people/laptopmen2.webp",
    },
    {
      title: "Client Profitability Reporting",
      description:
        "Real-time client and project P&L dashboards showing revenue, costs, and margins — enabling leadership to spot unprofitable accounts before they escalate.",
      image: "/images/people/laptopgirl1.webp",
    },
    {
      title: "Retainer Billing Management",
      description:
        "Manage complex monthly retainer contracts with automated invoicing, usage tracking, and rollover alerts. Never miss a billing cycle or undercharge for overages.",
      image: "/images/people/laptopgirl3.webp",
    },
    {
      title: "Time & Expense Mobile Entry",
      description:
        "Empower your creative team to capture billable time and out-of-pocket expenses instantly via mobile. Speed up your reimbursement and client billing cycles.",
      image: "/images/people/laptopgirl.webp",
    },
  ],
  challenges: [
    {
      title: "Scope Creep Eroding Fixed-Fee Margins",
      description:
        "NetSuite provides live budget-vs-actuals dashboards per project, with configurable alerts when projects approach 80% of allocated hours — enabling early intervention before margin is lost.",
      image: "/images/people/laptopmen1.jpg",
    },
    {
      title: "Slow Error-Prone Client Invoicing",
      description:
        "NetSuite automates invoice generation from approved timesheets and milestones, reducing billing cycles from days to hours and virtually eliminating billing errors.",
      image: "/images/lap/lap1.webp",
    },
    {
      title: "No Client or Service Profitability Visibility",
      description:
        "NetSuite's client profitability reports break down revenue, direct costs, and margin by client, project type, and team — giving leadership the data to make strategic decisions.",
      image: "/images/lap/lap5.webp",
    },
    {
      title: "Disconnected Vendor & Media Buy Tracking",
      description:
        "NetSuite connects vendor bills to client projects, automates markup or pass-through billing, and ensures every vendor cost is accounted for before client invoices go out.",
      image: "/images/people/threeteam.webp",
    },
    {
      title: "Poor Resource Allocation",
      description:
        "Fragmented visibility leads to overbooked creative teams. NetSuite provides real-time resource availability and skill-mapping for smarter assignments.",
      image: "/images/people/laptopmen2.webp",
    },
    {
      title: "Delayed Expense Reimbursement",
      description:
        "Manual expense processing slows down cash flow and hurts team morale. NetSuite automates expense capture and approval workflows.",
      image: "/images/lap/lap2.webp",
    },
    {
      title: "Siloed Creative & Finance Data",
      description:
        "Creative teams and finance often work in different worlds. NetSuite unifies campaign and project data with financial records in one system.",
      image: "/images/lap/lap7_11zon.webp",
    },
    {
      title: "Inconsistent Client Reporting",
      description:
        "Generating manual client reports is slow and inconsistent. NetSuite automates custom-branded client reporting with real-time project metrics.",
      image: "/images/people/laptopgirl1.webp",
    },
  ],
  pricingTiers: [
    {
      name: "Starter",
      price: "₹90,000",
      description: "For boutique agencies with up to 15 users.",
      features: [
        "Core ERP (Financials, AR/AP)",
        "Project & Retainer Management",
        "Time & Expense Tracking",
        "Standard Billing",
        "Email Support",
      ],
    },
    {
      name: "Professional",
      price: "₹2,00,000",
      description: "Full agency suite for growing teams.",
      features: [
        "Advanced Project Management",
        "Resource Utilisation Management",
        "Multi-Model Client Billing",
        "Vendor & Media Buy Tracking",
        "Client Profitability Dashboards",
        "SLA-backed Support",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For multi-office or international agency groups.",
      features: [
        "NetSuite OneWorld",
        "Revenue Recognition",
        "Advanced Analytics",
        "Custom Client Portals",
        "Dedicated Implementation Manager",
        "24/7 Priority Support",
      ],
    },
  ],
  faqs: [
    {
      question:
        "Can NetSuite track media buying costs and pass-throughs per client?",
      answer:
        "Yes. NetSuite allows you to track third-party vendor invoices (media buys, production, freelancers) against specific client projects — with configurable markup or cost-pass-through billing to clients.",
    },
    {
      question: "Does NetSuite support retainer billing with rollover hours?",
      answer:
        "Yes. NetSuite SuiteBilling supports monthly retainer invoicing with configurable rollover rules, overage billing triggers, and detailed utilisation reporting against retainer hours.",
    },
    {
      question: "How does NetSuite help us manage scope creep?",
      answer:
        "NetSuite provides real-time budget-vs-actuals tracking at the project and task level. PMs can monitor hours burned, configure alerts at budget thresholds, and initiate change order workflows when scope expands.",
    },
    {
      question:
        "Can we use NetSuite alongside our existing PM tools like Monday.com or Asana?",
      answer:
        "Yes. NetSuite integrates with project management tools via API or Zapier connectors, allowing you to use your preferred PM tool while NetSuite handles billing, financials, and reporting.",
    },
    {
      question:
        "Does NetSuite handle multi-currency billing for international clients?",
      answer:
        "Yes. NetSuite supports 190+ currencies with real-time FX rates, enabling you to invoice international clients in their local currency while consolidating financials in your home currency.",
    },
  ],
  relatedIndustries: [
    {
      label: "Professional Services",
      href: "/netsuite/industries/it-services",
    },
    { label: "Software & Technology", href: "/netsuite/industries/software" },
    { label: "Media & Publishing", href: "/netsuite/industries/media" },
    { label: "Manufacturing", href: "/netsuite/industries/manufacturing" },
  ],
};

export default function AdvertisingMarketingPage() {
  return <IndustryTemplate data={data} />;
}

