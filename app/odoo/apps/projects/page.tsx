import type { Metadata } from "next";

import OdooAppTemplate from "@/app/odoo/components/apps/OdooAppTemplate";

export const metadata: Metadata = {
  title: "Odoo Projects & Service Delivery Implementation | AGSuite Technologies",
  description:
    "Streamline project planning, agile Kanban boards, Gantt chart scheduling, timesheet tracking, resource allocation, and project billing with Odoo Projects implementation from AGSuite Technologies.",
};

const capabilities = [
  {
    title: "Flexible Task Views (Kanban, List, Gantt)",
    description: "Organize tasks using visual drag-and-drop Kanban stages, detailed lists, calendar schedules, or interactive Gantt roadmaps.",
  },
  {
    title: "Gantt Timeline & Dependency Management",
    description: "Map task dependencies, identify critical paths, and dynamically adjust milestone deadlines with drag-and-drop Gantt scheduling.",
  },
  {
    title: "Integrated Timesheet Tracking",
    description: "Log billable and non-billable time via mobile apps, desktop timers, or grid views directly linked to tasks and projects.",
  },
  {
    title: "Resource Capacity & Workload Planning",
    description: "Visualize team availability, monitor work allocations, prevent staff burnout, and balance project resourcing across teams.",
  },
  {
    title: "Subtasks & Checklist Milestones",
    description: "Break complex deliverables into structured subtasks with checklist items, assigned owners, and sequential deadlines.",
  },
  {
    title: "Client Collaboration Portal",
    description: "Give external clients access to review project progress, download deliverables, submit feedback, and view logged hours.",
  },
  {
    title: "Automated Project Creation from Sales",
    description: "Automatically spin up configured project templates and milestone tasks as soon as a sales quotation is confirmed.",
  },
  {
    title: "Multi-Model Project Invoicing",
    description: "Bill clients seamlessly based on fixed milestones, prepaid hours, time & materials (T&M), or recurring retainer contracts.",
  },
  {
    title: "Project Budgeting & Profitability Analysis",
    description: "Track actual labor costs and vendor expenses against budgeted revenues to see real-time project margins.",
  },
  {
    title: "Automated Alerts & Deadline Notifications",
    description: "Trigger automated reminders and escalations when tasks approach deadlines, exceed hour budgets, or stall in a stage.",
  },
  {
    title: "Document Sharing & Collaborative Notes",
    description: "Attach design files, specifications, and versioned assets to tasks with built-in real-time team chatter and document preview.",
  },
  {
    title: "Customizable Stages & Role Permissions",
    description: "Define project-specific stage workflows, access rights, and manager approval sign-offs aligned with your delivery methodology.",
  },
];

const benefits = [
  {
    title: "Complete milestone transparency",
    description: "Track exact status, upcoming deadlines, and delivery bottlenecks across all active company projects from a single visual dashboard.",
    points: ["Visual drag-and-drop Kanban", "Interactive Gantt critical path", "Real-time milestone progress", "Instant bottleneck alerts"],
    image: "/images/Dashboard/odoo_command_dashboard.webp",
  },
  {
    title: "Maximized billable utilization",
    description: "Empower consultants and team members with seamless timer apps and grid timesheets that ensure every billable minute is captured accurately.",
    points: ["One-click mobile & web timers", "Billable vs. non-billable categorization", "Manager timesheet approvals", "Reduced unbilled leakage"],
    image: "/images/people/person_using_odoo.webp",
  },
  {
    title: "Live project profitability control",
    description: "Never wait until project completion to find out if you made a profit. Compare logged timesheet costs and supplier expenses against revenue in real time.",
    points: ["Real-time labor cost tracking", "Vendor expense attribution", "Live gross margin visibility", "Budget vs. actual variance"],
    image: "/images/Dashboard/accounting and planing dashboard.jpg",
  },
  {
    title: "Automated project-to-invoice billing",
    description: "Eliminate end-of-month invoicing disputes and manual spreadsheets by converting verified timesheets and milestones into client invoices.",
    points: ["Time & materials invoicing", "Milestone-based billing triggers", "Clear invoice detail reports", "Connected accounting entries"],
    image: "/images/Dashboard/odoo_live_operations_dashboard.webp",
  },
  {
    title: "Balanced team workloads & resource planning",
    description: "Prevent burnout and missed deadlines by allocating tasks based on live staff availability, scheduled leaves, and current project demands.",
    points: ["Resource utilization grids", "Over-allocation warnings", "Skill-based assignment", "Forecasted capacity views"],
    image: "/images/people/odoo_team_collaboration_customization.webp",
  },
  {
    title: "Enhanced client communication & trust",
    description: "Provide clients with transparent self-service access to milestone progress, approved deliverables, and project discussions.",
    points: ["Dedicated client portal", "Collaborative task discussions", "Digital document sharing", "Faster sign-offs & approvals"],
    image: "/images/people/people_using_odoo.jpg",
  },
];

const faqs = [
  {
    q: "What is Odoo Projects and what industries does it serve best?",
    a: "Odoo Projects is a modern project and task management application designed for software teams, professional services, consultancies, engineering firms, creative agencies, and internal operations. It combines visual Kanban workflows, Gantt scheduling, timesheets, resource planning, and integrated client billing in a single platform.",
  },
  {
    q: "How does Odoo Projects integrate with Sales and Invoicing?",
    a: "When a customer approves a quotation in Odoo Sales, Odoo can automatically generate a corresponding project with pre-configured task templates. As consultants log billable hours or achieve deliverables, those items can be invoiced directly through Odoo Accounting based on your agreed commercial contract terms.",
  },
  {
    q: "Can teams track time using mobile timers or weekly grid views?",
    a: "Yes. Team members can start and stop live timers from their desktop browser or the Odoo mobile app. They can also use a weekly grid timesheet view to log hours against multiple projects and tasks simultaneously, with built-in manager validation workflows.",
  },
  {
    q: "How does Odoo calculate project profitability and margins?",
    a: "Odoo tracks employee hourly cost rates and project-related vendor purchases, comparing those expenses against billed revenue in real time. Dynamic profitability dashboards display exact gross margin percentages, billable ratios, and budget variances per task or project.",
  },
  {
    q: "Can external clients access our projects through a portal?",
    a: "Yes. External stakeholders can be granted secure access to a branded customer portal where they can monitor task progress, review project documents, download completed deliverables, and post feedback without seeing internal-only notes or confidential team rates.",
  },
  {
    q: "Does Odoo Projects support Gantt charts and task dependencies?",
    a: "Yes. Odoo Projects includes a drag-and-drop Gantt view that allows project managers to visualize task durations, link preceding and succeeding task dependencies, and highlight critical delivery paths for accurate timeline forecasting.",
  },
  {
    q: "Can Odoo handle multiple billing models like milestones, retainers, and T&M?",
    a: "Yes. Odoo supports prepaid service packages, recurring monthly retainers, fixed milestone billing, and standard Time & Materials (T&M) models. Invoicing rules can be configured per customer or contract.",
  },
  {
    q: "How long does an Odoo Projects implementation take?",
    a: "A focused Odoo Projects and Timesheets rollout typically takes between 3 to 8 weeks depending on custom stage workflows, timesheet approval hierarchies, client billing models, and accounting integration. AGSuite ensures full configuration and team onboarding to drive fast user adoption.",
  },
];

export default function OdooProjectsPage() {
  return (
    <OdooAppTemplate
      appName="Odoo Projects"
      appLogo="/images/odoo-apps/projects.svg"
      title="Deliver Client Projects on Time, on Scope, and Within Budget"
      description="Manage modern agile workflows, Gantt timelines, resource capacity, integrated timesheets, and project profitability in a platform natively linked to sales and billing."
      heroImage="/images/Dashboard/odoo_command_dashboard.webp"
      overviewImage="/images/modules/project_management.webp"
      overviewTitle="From proposal to delivery: complete project operational control"
      overviewParagraphs={[
        "Odoo Projects empowers service organizations, consultancies, engineering teams, and internal departments to manage tasks, collaborate transparently, and maintain complete visibility into milestones and deliverables.",
        "Because Odoo Projects links directly to Odoo Sales, Helpdesk, Timesheets, and Accounting, customer orders can automatically generate project milestones, billable hours convert directly into client invoices, and project margins update in real time.",
      ]}
      heroCards={[
        { value: "Real-time", label: "Profitability tracking" },
        { value: "Agile", label: "Kanban & Gantt views" },
        { value: "100%", label: "Timesheet accuracy" },
      ]}
      capabilities={capabilities}
      benefits={benefits}
      engagementPoints={[
        "Project workflow & methodology discovery",
        "Project template & milestone configuration",
        "Timesheet rules & approval setup",
        "Sales & accounting billing integration",
        "Resource management & capacity planning",
        "Team training & post-launch adoption",
      ]}
      faqs={faqs}
    />
  );
}

