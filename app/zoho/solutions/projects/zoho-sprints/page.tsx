"use client";

import React from "react";
import { 
  Zap, 
  Workflow, 
  Target, 
  TrendingUp,
  Clock,
  Layout,
  Layers,
  BarChart3,
  Calendar,
  ShieldCheck,
  Globe2,
  Users,
  MousePointerClick
} from "lucide-react";
import ZohoSolutionTemplate from "@/app/zoho/components/solutions/ZohoSolutionTemplate";

export default function ZohoSprintsPage() {
  const stats = [
    { label: "Agility Increase", value: 50, suffix: "%", icon: Zap },
    { label: "Delivery Speed", value: 40, suffix: "% faster", icon: Clock },
    { label: "Team Velocity", value: 35, suffix: "% higher", icon: TrendingUp },
    { label: "Plan Accuracy", value: 90, suffix: "%", icon: Target },
  ];

  const modules = [
    {
      title: "Sprint Planning",
      description: "Define your goals, estimate tasks using story points, and plan your sprints with a simple drag-and-drop interface.",
      image: "/images/people/fourteam.webp",
      color: "#1a7a55",
      rgb: "18,108,72",
    },
    {
      title: "Scrum Boards",
      description: "Visualize your workflow and track task progress in real-time with customizable Scrum boards for your team.",
      image: "/images/lap/lap1.webp",
      color: "#a05a18",
      rgb: "145,75,18",
    },
    {
      title: "Backlog Management",
      description: "Prioritize your user stories and manage your product backlog effectively to ensure you're always working on high-value tasks.",
      image: "/images/people/laptopgirl.webp",
      color: "#4a3a8a",
      rgb: "65,45,130",
    },
    {
      title: "Agile Reports",
      description: "Monitor your team's progress with Burndown, Burnup, and Velocity charts to identify bottlenecks and optimize performance.",
      image: "/images/lap/lap2.webp",
      color: "#1a6080",
      rgb: "20,88,115",
    },
    {
      title: "Timesheets",
      description: "Track the time spent on every task and story across your sprints for accurate billing and resource planning.",
      image: "/images/people/laptopmen.webp",
      color: "#6a2575",
      rgb: "95,30,105",
    },
    {
      title: "Release Management",
      description: "Plan and track your product releases with a centralized view of all related tasks, stories, and bugs.",
      image: "/images/lap/lap3.webp",
      color: "#154e8a",
      rgb: "18,68,130",
    },
    {
      title: "Team Collaboration",
      description: "Engage your team with built-in feeds, comments, and task assignments that keep everyone in sync.",
      image: "/images/people/laptopmen2.webp",
      color: "#1a6545",
      rgb: "20,95,60",
    },
    {
      title: "Custom Workflows",
      description: "Design and automate your unique agile processes with custom statuses, transitions, and field sets.",
      image: "/images/lap/lap4.webp",
      color: "#8a2a3a",
      rgb: "130,35,48",
    },
    {
      title: "Epics & Stories",
      description: "Organize your project into large Epics and granular User Stories to maintain a clear vision of your goals.",
      image: "/images/people/laptopgirl1.webp",
      color: "#0f4e8a",
      rgb: "12,68,130",
    },
    {
      title: "Dashboard Insights",
      description: "Get a high-level view of your project health with personalized dashboards that highlight key metrics.",
      image: "/images/lap/lap5.webp",
      color: "#523a8a",
      rgb: "75,48,130",
    },
    {
      title: "Bugs & Issue Tracking",
      description: "Manage and resolve software bugs effortlessly within your sprints using integrated issue tracking tools.",
      image: "/images/people/threeteam.webp",
      color: "#1a7a55",
      rgb: "18,108,72",
    },
    {
      title: "Mobile Agile",
      description: "Manage your sprints and track tasks on-the-go with native mobile apps for iOS and Android.",
      image: "/images/lap/lap2.webp",
      color: "#a05a18",
      rgb: "145,75,18",
    },
  ];

  const benefits = [
    {
      title: "Unmatched Team Agility",
      description: "Empower your team to adapt quickly to changing requirements and deliver high-quality software faster than ever.",
      image: "/images/people/fourteam.webp",
      points: [
        "True agile planning and execution",
        "Visual progress tracking for all",
        "Streamlined scrum methodologies",
        "Improved team collaboration"
      ],
    },
    {
      title: "Predictable Delivery Cycles",
      description: "Use real-time data to estimate completion dates accurately and ensure you meet your release deadlines consistently.",
      image: "/images/lap/lap2.webp",
      points: [
        "Data-driven velocity tracking",
        "Clear sprint burndown visibility",
        "Identifiable bottleneck analysis",
        "Informed planning for future cycles"
      ],
    },
    {
      title: "Maximized Value for Effort",
      description: "Ensure your team is always working on the most important tasks by prioritizing your backlog with precision.",
      image: "/images/people/laptopmen2.webp",
      points: [
        "Efficient story point estimation",
        "Prioritized product backlog",
        "Alignment with business goals",
        "Transparent stakeholder visibility"
      ],
    },
    {
      title: "Seamless Project Ecosystem",
      description: "Integrate Zoho Sprints with your favorite tools to create a truly connected agile development environment.",
      image: "/images/lap/lap1.webp",
      points: [
        "Native Zoho Projects integration",
        "Connect with GitHub and Bitbucket",
        "Slack and MS Teams notifications",
        "Open APIs for custom workflows"
      ],
    },
  ];

  return (
    <ZohoSolutionTemplate
      title="Zoho Sprints — The Agile Project Management Tool"
      subtitle="Better Planning, Smarter Execution, Faster Releases."
      description="Zoho Sprints is a lightweight, agile project management tool that helps scrum teams plan, track, and release great software iteratively."
      breadcrumb={[
        { label: "Home", href: "/zoho" },
        { label: "Solutions", href: "/zoho/solutions" },
        { label: "Projects", href: "/zoho/solutions/projects" },
        { label: "Zoho Sprints", href: "/zoho/solutions/projects/zoho-sprints" },
      ]}
      stats={stats}
      modules={modules}
      benefits={benefits}
      heroImage="/images/lap/lap2.webp"
      heroCard1={{
        title: "Agile Power",
        subtitle: "Built for high-velocity scrum teams.",
        icon: Zap
      }}
      heroCard2={{
        title: "Total Visibility",
        subtitle: "Real-time scrum boards and reports.",
        icon: Layout
      }}
      pricingInfo={{
        description: "Scale your agility as your team grows. Get everything you need for iterative development with flexible plans.",
        plans: [
          "Standard: $7 /user/month",
          "Professional: $15 /user/month",
          "Enterprise: $25 /user/month",
          "Free tier available for up to 5 users",
        ],
        ctaText: "Start My Free Trial",
      }}
    />
  );
}


