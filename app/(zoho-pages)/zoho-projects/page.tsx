"use client";

import React from "react";



import { 
  Calendar, 
  Heart, 
  Target, 
  Clock, 
  TrendingUp,
  Zap,
  Users,
  Briefcase,
  CheckCircle,
  BarChart3,
  Layers,
  PieChart
} from "lucide-react";
import ZohoSolutionTemplate from "@/app/zoho/components/solutions/ZohoSolutionTemplate";



export default function ZohoProjectsPage() {
  const stats = [
    { label: "On-Time Delivery", value: 40, suffix: "% higher", icon: CheckCircle },
    { label: "Team Productivity", value: 55, suffix: "%", icon: Zap },
    { label: "Project Cost Savings", value: 30, suffix: "%", icon: TrendingUp },
    { label: "Resource Utilization", value: 92, suffix: "%", icon: Users },
  ];

  const modules = [
    {
      title: "Task Management",
      description: "Break complex projects down into manageable tasks, milestones, and subtasks for better clarity and tracking.",
      image: "/images/modules/working module.webp",
      color: "#1a7a55",
      rgb: "18,108,72",
    },
    {
      title: "Gantt Charts",
      description: "Visualize your project timeline, manage dependencies, and adjust schedules with a simple drag-and-drop interface.",
      image: "/images/modules/dashboard module.webp",
      color: "#a05a18",
      rgb: "145,75,18",
    },
    {
      title: "Timesheets & Logging",
      description: "Track every billable and non-billable minute spent on tasks to ensure accurate project costing and invoicing.",
      image: "/images/modules/account modules.webp",
      color: "#4a3a8a",
      rgb: "65,45,130",
    },
    {
      title: "Resource Management",
      description: "Balance workloads and optimize team capacity with visual resource utilization charts and heatmaps.",
      image: "/images/modules/module8.webp",
      color: "#1a6080",
      rgb: "20,88,115",
    },
    {
      title: "Collaborative Feed",
      description: "Keep the conversation flowing with real-time updates, @mentions, and discussions centered around project work.",
      image: "/images/modules/managging together module.webp",
      color: "#6a2575",
      rgb: "95,30,105",
    },
    {
      title: "Issue & Bug Tracking",
      description: "Identify and resolve issues fast with a dedicated bug tracking system integrated into your project workflow.",
      image: "/images/modules/csm modules.webp",
      color: "#154e8a",
      rgb: "18,68,130",
    },
    {
      title: "Project Dashboards",
      description: "Get a bird's-eye view of your project health with customizable dashboards and status reports.",
      image: "/images/modules/dashbord module.webp",
      color: "#1a6545",
      rgb: "20,95,60",
    },
    {
      title: "Automation (Blueprints)",
      description: "Automate repetitive project workflows and ensure adherence to best practices with visual blueprints.",
      image: "/images/modules/any modules.webp",
      color: "#8a2a3a",
      rgb: "130,35,48",
    },
    {
      title: "Document Management",
      description: "Share and collaborate on files, spreadsheets, and presentations directly within your project workspace.",
      image: "/images/modules/sheet module.webp",
      color: "#0f4e8a",
      rgb: "12,68,130",
    },
    {
      title: "Budget & Billing",
      description: "Manage project budgets, track expenses, and generate client invoices with seamless finance integration.",
      image: "/images/modules/chatt mdoule.webp",
      color: "#523a8a",
      rgb: "75,48,130",
    },
    {
      title: "Mobile App for Teams",
      description: "Stay updated and log time on project tasks from anywhere with our full-featured mobile applications.",
      image: "/images/modules/mobile module.webp",
      color: "#1a7a55",
      rgb: "18,108,72",
    },
    {
      title: "Client Collaboration",
      description: "Invite clients to specific projects for better transparency, feedback, and project alignment.",
      image: "/images/modules/any module.webp",
      color: "#a05a18",
      rgb: "145,75,18",
    },
  ];

  const benefits = [
    {
      title: "End-to-End Visibility",
      description: "Never lose track of a project again. Zoho Projects gives you complete visibility into tasks, timelines, and team performance.",
      image: "/images/people/fourteam.webp",
      points: [
        "Consolidated view of all ongoing projects",
        "Clear milestone tracking and status updates",
        "Visual Gantt charts for timeline management",
        "Real-time alerts for overdue tasks"
      ],
    },
    {
      title: "Optimized Team Capacity",
      description: "Empower your team without burning them out. Our resource management tools help you balance work and maximize productivity.",
      image: "/images/lap/lap2.webp",
      points: [
        "Visual workload management and heatmaps",
        "Skill-based task assignment for efficiency",
        "Time tracking integrated with performance",
        "Capacity planning for future project intake"
      ],
    },
    {
      title: "Seamless Collaboration",
      description: "Move beyond messy email threads. Keep all project communication in one place, linked directly to the work being done.",
      image: "/images/people/laptopmen2.webp",
      points: [
        "Social-style project feed for updates",
        "Interactive document and file sharing",
        "Forum-based discussions for deeper topics",
        "In-context @mentions for faster response"
      ],
    },
    {
      title: "Profitability & Control",
      description: "Stay on budget and ensuring project profitability. Integrated time and expense tracking help you manage the bottom line efficiently.",
      image: "/images/lap/lap1.webp",
      points: [
        "Project budget tracking and forecasting",
        "Billable time logging and finance sync",
        "Expense management linked to projects",
        "Detailed project profitability reports"
      ],
    },
  ];

  return (
    <ZohoSolutionTemplate
      title="Zoho Projects — Cloud-Based Project Management"
      subtitle="Deliver Projects On Time, Every Time."
      description="Zoho Projects is a cloud-based project management software that helps you plan your work, track it efficiently, and collaborate with your team, no matter where they are."
      introDescription2="With powerful Gantt charts, task dependencies, and seamless collaboration tools, Zoho Projects ensures your teams stay aligned and your projects remain on track and within budget."
      breadcrumb={[
        { label: "Home", href: "/zoho" },
        { label: "Solutions", href: "/zoho/solutions" },
        { label: "Projects", href: "/zoho/solutions/projects" },
        { label: "Zoho Projects", href: "/zoho/solutions/projects/zoho-projects" },
      ]}
      stats={stats}
      modules={modules}
      benefits={benefits}
      heroImage="/images/people/laptopmen2.webp"
      whatIsImage="/images/zoho-dashboards/zoho-projects.webp"
      heroCard1={{
        title: "On-Time Delivery",
        subtitle: "40% higher project success rate.",
        icon: CheckCircle
      }}
      heroCard2={{
        title: "55% Team Productivity",
        subtitle: "Visualize timelines with Gantt charts.",
        icon: Zap
      }}
      pricingInfo={{
        description: "Simple, transparent pricing that grows with your team. Experience premium project management at an unbeatable value.",
        plans: [
          "Free: Up to 3 users",
          "Premium: $5 /user/month",
          "Enterprise: $10 /user/month",
          "Yearly discounts available",
        ],
        ctaText: "Start 10-Day Free Trial",
      }}
    />
  );
}


