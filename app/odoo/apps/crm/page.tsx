import type { Metadata } from "next";

import OdooAppTemplate from "@/app/odoo/components/apps/OdooAppTemplate";

export const metadata: Metadata = {
  title: "Odoo CRM Implementation & Consulting | AGSuite Technologies",
  description:
    "Build a connected sales pipeline with Odoo CRM consulting, implementation, customization, integration, migration, training, and support from AGSuite Technologies.",
};

const capabilities = [
  {
    title: "Lead Capture & Assignment",
    description: "Collect enquiries from your channels and route each lead to the right salesperson or team.",
  },
  {
    title: "Visual Opportunity Pipeline",
    description: "Organize opportunities by stage and move deals through a clear, drag-and-drop sales process.",
  },
  {
    title: "Activity Scheduling",
    description: "Plan calls, meetings, emails, and next actions so every opportunity has a visible follow-up.",
  },
  {
    title: "Communication History",
    description: "Keep messages, notes, meetings, and customer context together on the opportunity record.",
  },
  {
    title: "Lead Scoring",
    description: "Prioritize prospects using relevant criteria, engagement signals, and team-defined qualification rules.",
  },
  {
    title: "Sales Teams & Territories",
    description: "Structure ownership, targets, access, and reporting around your sales organization.",
  },
  {
    title: "Pipeline Forecasting",
    description: "Review expected revenue, deal stages, probability, and upcoming activity from live pipeline data.",
  },
  {
    title: "Automated Follow-ups",
    description: "Trigger reminders and consistent actions when leads enter a stage or require attention.",
  },
  {
    title: "Quotation Handoff",
    description: "Move qualified opportunities into Odoo Sales for quotations, orders, and commercial follow-through.",
  },
  {
    title: "Marketing Attribution",
    description: "Understand which campaigns and sources contribute to leads, opportunities, and won business.",
  },
  {
    title: "Customer 360° View",
    description: "See related sales, invoices, support, activities, and account history across connected Odoo apps.",
  },
  {
    title: "Mobile Sales Access",
    description: "Help sales teams update activities, customer information, and opportunities while on the move.",
  },
];

const benefits = [
  {
    title: "One connected customer record",
    description: "Give teams a shared view of the customer journey instead of spreading context across disconnected tools and inboxes.",
    points: ["Unified contact context", "Connected sales history", "Fewer information silos", "Clear record ownership"],
    image: "/images/Dashboard/odoo_command_dashboard.webp",
  },
  {
    title: "Clearer sales priorities",
    description: "Make the next best action visible so salespeople can focus their time on qualified opportunities and timely follow-ups.",
    points: ["Visible next activities", "Consistent opportunity stages", "Lead prioritization", "Manager oversight"],
    image: "/images/people/person_using_odoo.webp",
  },
  {
    title: "Less manual administration",
    description: "Use structured workflows and automation to reduce repetitive updates, reminders, and handoffs throughout the sales cycle.",
    points: ["Automated reminders", "Reusable activity plans", "Cleaner data capture", "Faster internal handoffs"],
    image: "/images/Dashboard/odoo_live_operations_dashboard.webp",
  },
  {
    title: "Reliable pipeline visibility",
    description: "Bring opportunity status, forecast value, planned actions, and team performance into a consistent reporting view.",
    points: ["Live pipeline reporting", "Forecast visibility", "Stage-level analysis", "Team performance views"],
    image: "/images/Dashboard/odoo_command_dashboard.webp",
  },
  {
    title: "Connected quote-to-cash flow",
    description: "Extend CRM into quotations, orders, invoices, and customer service without rebuilding the customer record at every step.",
    points: ["CRM-to-Sales continuity", "Shared product information", "Connected invoicing", "Cross-team visibility"],
    image: "/images/people/odoo_team_collaboration_customization.webp",
  },
  {
    title: "Workflows that scale with you",
    description: "Adapt stages, permissions, activities, fields, and integrations as your sales process and operating model evolve.",
    points: ["Configurable stages", "Role-based access", "Custom fields and rules", "Integration-ready platform"],
    image: "/images/people/people_using_odoo.jpg",
  },
];

const faqs = [
  {
    q: "What is Odoo CRM?",
    a: "Odoo CRM is a customer relationship and opportunity management application for organizing leads, pipeline stages, activities, communication, forecasts, and sales reporting. It can connect with other Odoo applications so customer information continues into quotations, invoicing, marketing, and support.",
  },
  {
    q: "What is the difference between Odoo CRM and Odoo Sales?",
    a: "Odoo CRM focuses on leads, opportunities, activities, and pipeline management. Odoo Sales handles quotations, sales orders, pricing, and the commercial process that follows a qualified opportunity. Businesses commonly use the two applications together.",
  },
  {
    q: "Can Odoo CRM match our existing sales process?",
    a: "Yes. Pipeline stages, teams, access rights, activity types, fields, views, and automated actions can be configured around your operating process. Where standard configuration is not enough, AGSuite can assess controlled customization options.",
  },
  {
    q: "Can we migrate leads and customer data from our current CRM?",
    a: "Yes. A migration can include contacts, companies, leads, opportunities, activities, ownership, and selected historical information. The exact scope depends on the source system, data quality, and the history your teams need after go-live.",
  },
  {
    q: "Does Odoo CRM connect with email?",
    a: "Odoo CRM can associate email communication with leads and opportunities and support email-based workflows. The final setup depends on your Odoo edition, hosting environment, mail configuration, and security requirements.",
  },
  {
    q: "Can Odoo CRM automate lead follow-ups?",
    a: "Yes. Teams can use scheduled activities, assignment rules, reminders, stage-based actions, and connected marketing workflows. We design automation carefully so it supports your sales process without creating noise or unclear ownership.",
  },
  {
    q: "What reporting is available in Odoo CRM?",
    a: "Odoo CRM supports pipeline, opportunity, activity, source, salesperson, and forecast analysis. Dashboards and reports can be configured around the measures your leadership and sales teams use to manage performance.",
  },
  {
    q: "How long does an Odoo CRM implementation take?",
    a: "The timeline depends on users, process complexity, data migration, integrations, customization, testing, and training. A focused CRM rollout can move faster than a multi-app program; AGSuite confirms the delivery plan after discovery and scope validation.",
  },
];

export default function OdooCrmPage() {
  return (
    <OdooAppTemplate
      appName="Odoo CRM"
      appLogo="/images/odoo-apps/crm.svg"
      title="Turn Every Opportunity Into a Clear Next Step"
      description="Centralize leads, customer conversations, sales activities, and forecasts in a CRM that stays connected to the rest of your business."
      heroImage="/images/Dashboard/odoo_command_dashboard.webp"
      overviewImage="/images/people/odoo_team_collaboration_customization.webp"
      overviewTitle="A CRM that stays connected to the rest of your business"
      overviewParagraphs={[
        "Odoo CRM gives sales teams one structured workspace for managing leads, opportunities, activities, communication, and pipeline visibility. It helps every seller understand what needs attention and what should happen next.",
        "Because CRM can connect with Odoo Sales, Accounting, Marketing, Helpdesk, and other applications, your customer context does not stop when an opportunity is won. The same record can support the wider journey from first enquiry to ongoing service.",
      ]}
      heroCards={[
        { value: "360°", label: "Customer context" },
        { value: "1", label: "Connected pipeline" },
        { value: "Live", label: "Sales visibility" },
      ]}
      capabilities={capabilities}
      benefits={benefits}
      engagementPoints={[
        "Process and pipeline discovery",
        "CRM configuration and roles",
        "Data cleansing and migration",
        "Email and app integrations",
        "User training and adoption",
        "Post-launch support",
      ]}
      faqs={faqs}
    />
  );
}
