"use client";

import React from "react";
import { 
  Rocket, 
  TrendingUp, 
  ShieldCheck, 
  Clock,
  Briefcase,
  Zap,
  Target,
  Layout,
  Layers,
  Users,
  CheckCircle2,
  ChevronRight
} from "lucide-react";
import ZohoCategoryTemplate from "@/app/zoho/components/solutions/ZohoCategoryTemplate";

export default function ProjectsPage() {
  const stats = [
    { label: "Delivery Speed", value: "40% faster", icon: Clock },
    { label: "Team Velocity", value: "35% higher", icon: TrendingUp },
    { label: "Resource Efficiency", value: "30%+", icon: Zap },
    { label: "Plan Accuracy", value: "95%", icon: Target },
  ];

  const solutions = [
    {
      title: "Zoho Projects",
      description: "Cloud-based project tracking that helps you plan, track, and collaborate on every project with ease. Deliver high-quality results on time, every time.",
      link: "/zoho/solutions/projects/zoho-projects",
      image: "/images/lap/lap1.webp",
      icon: Rocket,
      highlights: [
        "Gantt Charts & Milestones",
        "Task Automation",
        "Resource Utilization",
        "Social Collaboration"
      ],
    },
    {
      title: "Zoho Sprints",
      description: "A lightweight, agile project management tool for scrum teams. Plan your sprints, track task progress, and release great software iteratively.",
      link: "/zoho/solutions/projects/zoho-sprints",
      image: "/images/people/fourteam.webp",
      icon: Zap,
      highlights: [
        "Scrum Boards",
        "Backlog Management",
        "Agile Reports",
        "Sprint Planning"
      ],
    },
  ];

  return (
    <ZohoCategoryTemplate
      title="Project & Sprint Management Solutions"
      subtitle="Deliver Exceptional Results, Iteration by Iteration."
      description="Orchestrate your complex projects and agile sprints with absolute precision. Zoho Projects and Sprints provide the visibility and collaboration tools required to keep your teams aligned and your stakeholders informed."
      category="Projects"
      heroImage="/images/lap/lap1.webp"
      breadcrumb={[
        { label: "Home", href: "/zoho" },
        { label: "Solutions", href: "/zoho/solutions" },
        { label: "Projects", href: "/zoho/solutions/projects" },
      ]}
      solutions={solutions}
      stats={stats}
    />
  );
}


