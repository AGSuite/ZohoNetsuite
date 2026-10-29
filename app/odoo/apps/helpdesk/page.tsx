import type { Metadata } from "next";

import OdooAppTemplate from "@/app/odoo/components/apps/OdooAppTemplate";

export const metadata: Metadata = {
  title: "Odoo Helpdesk Implementation & Customer Support Automation | AGSuite Technologies",
  description:
    "Deliver faster issue resolution with SLA management, omnichannel ticket routing, CSAT surveys, knowledge base, and real-time team KPIs using Odoo Helpdesk implemented by AGSuite Technologies.",
};

const capabilities = [
  {
    title: "Omnichannel Ticket Creation",
    description:
      "Automatically capture and convert customer issues into tracked tickets from email, live chat, website portal, WhatsApp, and phone — all flowing into one unified queue.",
  },
  {
    title: "SLA Policy Management",
    description:
      "Define multi-tier SLA rules by team, ticket priority, or customer segment. Track first response, resolution time, and deadline compliance with colour-coded dashboards.",
  },
  {
    title: "Automatic Ticket Routing & Assignment",
    description:
      "Route incoming tickets to the right team or agent using keyword rules, product category, customer tier, or round-robin balanced workload assignments.",
  },
  {
    title: "Kanban Ticket Stage Workflow",
    description:
      "Visualize support queues with customizable Kanban stages — New, In Progress, Waiting Customer, Resolved — and drag tickets through stages with chatter updates.",
  },
  {
    title: "Escalation Rules & Auto-Reassignment",
    description:
      "Configure time-based escalation triggers that automatically reassign tickets, notify managers, or increase priority when SLA deadlines approach or are breached.",
  },
  {
    title: "Canned Responses & Macros",
    description:
      "Boost agent speed with pre-written canned responses for common queries and one-click macros that apply actions like stage change, priority update, and customer email simultaneously.",
  },
  {
    title: "Customer Satisfaction (CSAT) Surveys",
    description:
      "Automatically dispatch post-resolution satisfaction surveys. Track per-agent and per-team CSAT scores, identify dissatisfied customers, and action follow-ups before escalation.",
  },
  {
    title: "Helpdesk Dashboards & KPI Reporting",
    description:
      "Monitor open ticket volume, average resolution time, SLA breach rates, and agent workload across all support teams with real-time configurable dashboards.",
  },
  {
    title: "Knowledge Base & Self-Service Articles",
    description:
      "Build an internal and public-facing knowledge base of how-to guides, troubleshooting articles, and FAQs — reducing repetitive tickets and empowering customers to self-resolve.",
  },
  {
    title: "After-Sales & Warranty Service Integration",
    description:
      "Link helpdesk tickets directly to sales orders, delivery slips, or manufacturing warranties to handle returns, repair requests, and replacement workflows in one flow.",
  },
  {
    title: "Time Tracking & Billing on Tickets",
    description:
      "Log time spent resolving support tickets and optionally bill customers for premium support hours through direct integration with Odoo Timesheets and Invoicing.",
  },
  {
    title: "Live Chat & WhatsApp Integration",
    description:
      "Embed Odoo Live Chat on your website or connect WhatsApp Business to capture real-time customer conversations and automatically escalate unresolved chats to ticketed support.",
  },
];

const benefits = [
  {
    title: "Dramatically faster issue resolution",
    description:
      "Equip agents with instant ticket context, one-click macros, canned replies, and automated routing so that no customer query sits idle waiting for manual assignment or response.",
    points: [
      "Automated ticket routing",
      "One-click canned responses",
      "Full customer history in context",
      "Instant manager escalation alerts",
    ],
    image: "/images/Dashboard/odoo_live_operations_dashboard.webp",
  },
  {
    title: "SLA compliance at every level",
    description:
      "Never miss a service commitment. SLA breach dashboards, real-time countdown timers, and automated manager notifications keep your team ahead of every contractual deadline.",
    points: [
      "Multi-tier SLA policy engine",
      "Live deadline countdown indicators",
      "Breach rate trend reporting",
      "Priority auto-escalation triggers",
    ],
    image: "/images/Dashboard/odoo_command_dashboard.webp",
  },
  {
    title: "Unified omnichannel inbox",
    description:
      "Consolidate tickets from email, portal, live chat, WhatsApp, and phone into one queue. Agents switch channels effortlessly without ever losing ticket history or customer context.",
    points: [
      "Email-to-ticket auto-creation",
      "Live chat escalation flow",
      "WhatsApp Business connector",
      "Customer portal self-service",
    ],
    image: "/images/contact/support.webp",
  },
  {
    title: "Measurable CSAT improvement",
    description:
      "Automatically survey resolved customers and track satisfaction scores per agent, team, and ticket type. Identify underperforming areas with trend data and act before churn happens.",
    points: [
      "Automated post-resolution surveys",
      "Per-agent CSAT scoring",
      "Satisfaction trend analytics",
      "Proactive follow-up on low scores",
    ],
    image: "/images/people/people_using_odoo.jpg",
  },
  {
    title: "Reduced agent workload with self-service",
    description:
      "Deflect repetitive tickets by directing customers to a well-maintained public knowledge base. Empower agents to create articles directly from resolved tickets for continuous improvement.",
    points: [
      "Public & internal knowledge base",
      "Article suggestions in ticket view",
      "Ticket deflection analytics",
      "Agent-authored how-to guides",
    ],
    image: "/images/people/odoo_team_collaboration_customization.webp",
  },
  {
    title: "Connected after-sales operations",
    description:
      "Integrate support tickets with warranties, sales orders, and manufacturing repair records so your team always sees the full product lifecycle — from order to resolution.",
    points: [
      "Sales order ticket linkage",
      "Warranty & repair request flow",
      "Product return coordination",
      "After-sales billing automation",
    ],
    image: "/images/people/person_using_odoo.webp",
  },
];

const faqs = [
  {
    q: "What is Odoo Helpdesk and what types of businesses benefit most from it?",
    a: "Odoo Helpdesk is a full-featured customer support platform for managing, prioritizing, and resolving customer issues. It is ideal for software companies, e-commerce businesses, manufacturing firms with after-sales service, managed service providers, and any organization handling significant inbound support volume that requires SLA accountability and CSAT tracking.",
  },
  {
    q: "How does Odoo Helpdesk manage SLA policies and prevent breach?",
    a: "Odoo Helpdesk allows you to define multiple SLA policies tied to ticket team, priority level, or customer segment — each with target deadlines for first response and full resolution. Tickets are colour-coded based on SLA status, and automated escalation rules can reassign, notify managers, or increase ticket priority when deadlines approach or are breached.",
  },
  {
    q: "Which communication channels does Odoo Helpdesk support?",
    a: "Odoo Helpdesk integrates with email (converting inbound messages to tickets), the Odoo Website customer portal, Odoo Live Chat, WhatsApp Business via a connector, and VoIP telephony. All channels feed into a single agent inbox so support teams maintain complete conversation history regardless of the channel used.",
  },
  {
    q: "Can we build a customer-facing knowledge base with Odoo Helpdesk?",
    a: "Yes. Odoo includes a native knowledge base module where you can publish structured help articles, troubleshooting guides, and FAQs for customers. Agents can be prompted to suggest relevant articles when creating tickets, and customers can search the knowledge base through the portal before submitting a ticket — reducing repetitive support requests significantly.",
  },
  {
    q: "How does Odoo Helpdesk integrate with CRM and Sales?",
    a: "Support tickets can be linked to CRM leads or customer accounts so account managers have full visibility into support history when handling renewals or upsell opportunities. Tickets can also reference confirmed sales orders or product deliveries, enabling seamless after-sales service, warranty claims, and return merchandise authorization (RMA) workflows.",
  },
  {
    q: "Does Odoo Helpdesk support time tracking and billing for support hours?",
    a: "Yes. Agents can log time spent on tickets directly within the helpdesk module. For premium or paid support contracts, those logged hours can be transferred to Odoo Timesheets and billed to the customer through Odoo Invoicing based on an agreed hourly rate or support contract — no manual entry into a separate billing system is required.",
  },
  {
    q: "How do CSAT surveys work in Odoo Helpdesk?",
    a: "After a ticket is resolved and closed, Odoo automatically sends the customer a short satisfaction survey via email. Responses are scored and aggregated into per-agent, per-team, and company-wide CSAT dashboards. Managers can filter by date range, team, or agent to spot trends, identify recurring issues causing dissatisfaction, and coach underperforming team members.",
  },
  {
    q: "How long does an Odoo Helpdesk implementation typically take?",
    a: "A standard Odoo Helpdesk rollout with AGSuite takes between 3 to 6 weeks depending on the number of support teams, SLA policy complexity, channel integrations (email, chat, WhatsApp), knowledge base setup, and any custom escalation workflows. We include full configuration, data migration, agent training, and a go-live support window in every engagement.",
  },
];

export default function OdooHelpdeskPage() {
  return (
    <OdooAppTemplate
      appName="Odoo Helpdesk"
      appLogo="/images/odoo-apps/helpdesk.svg"
      title="Resolve Every Customer Issue Faster With Full SLA Visibility and Omnichannel Control"
      description="Manage every support ticket, enforce SLA commitments, deliver multi-channel customer service, and measure team satisfaction scores in one platform natively connected to your sales and operations."
      heroImage="/images/Dashboard/odoo_live_operations_dashboard.webp"
      overviewImage="/images/contact/support.webp"
      overviewTitle="From first contact to happy customer: end-to-end support operations"
      overviewParagraphs={[
        "Odoo Helpdesk gives support teams a single command center for every customer interaction — whether it arrives by email, live chat, portal, or WhatsApp. Tickets are automatically routed to the right agent, SLAs are tracked in real time, and escalations are automated so no issue ever falls through the cracks.",
        "Because Odoo Helpdesk connects directly to Sales, CRM, Manufacturing, and Accounting, your agents always have the full customer context — open orders, product history, warranties, and billing status — enabling faster, more informed resolutions without switching between systems.",
      ]}
      heroCards={[
        { value: "SLA", label: "Compliance tracking" },
        { value: "Multi", label: "Channel support" },
        { value: "Real-time", label: "Team KPIs & CSAT" },
      ]}
      capabilities={capabilities}
      benefits={benefits}
      engagementPoints={[
        "Support team & ticket workflow discovery",
        "SLA policy & escalation rule configuration",
        "Omnichannel integration (email, chat, WhatsApp)",
        "Knowledge base structure & article setup",
        "CRM, Sales & after-sales system integration",
        "Agent training & post-launch adoption support",
      ]}
      faqs={faqs}
    />
  );
}

