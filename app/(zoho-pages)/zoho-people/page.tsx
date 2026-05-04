"use client";

import React from "react";



import { 
  Users, 
  Heart, 
  Zap, 
  TrendingUp,
  Clock,
  Briefcase,
  Target,
  BarChart3,
  Calendar,
  ShieldCheck,
  Globe2,
  Phone
} from "lucide-react";
import ZohoSolutionTemplate from "@/app/zoho/components/solutions/ZohoSolutionTemplate";



export default function ZohoPeoplePage() {
  const stats = [
    { label: "HR Productivity", value: 35, suffix: "%", icon: TrendingUp },
    { label: "Employee Retention", value: 90, suffix: "%", icon: Heart },
    { label: "Compliance Rate", value: 100, suffix: "%", icon: ShieldCheck },
    { label: "Time Saved", value: 45, suffix: "%", icon: Clock },
  ];

  const modules = [
    {
      title: "Employee Onboarding",
      description: "Give new hires a warm welcome with automated checklists, digital document signing, and interactive portals.",
      image: "/images/modules/managging together module.webp",
      color: "#1a7a55",
      rgb: "18,108,72",
    },
    {
      title: "Attendance Management",
      description: "Track time and attendance with ease. Use geo-fencing, facial recognition, or mobile check-ins.",
      image: "/images/modules/mobile module.webp",
      color: "#a05a18",
      rgb: "145,75,18",
    },
    {
      title: "Performance Management",
      description: "Nurture talent with continuous feedback, 360-degree reviews, and goal tracking for every employee.",
      image: "/images/modules/dashboard module.webp",
      color: "#4a3a8a",
      rgb: "65,45,130",
    },
    {
      title: "Learning Management",
      description: "Build a culture of learning with course creators, interactive quizzes, and certification tracking.",
      image: "/images/modules/module8.webp",
      color: "#1a6080",
      rgb: "20,88,115",
    },
    {
      title: "Employee Self-Service",
      description: "Empower employees to manage their own profiles, apply for leave, and access payslips from any device.",
      image: "/images/modules/any modules.webp",
      color: "#6a2575",
      rgb: "95,30,105",
    },
    {
      title: "Leave Management",
      description: "Automate leave applications and approvals with customizable policies and real-time balance tracking.",
      image: "/images/modules/working module.webp",
      color: "#154e8a",
      rgb: "18,68,130",
    },
    {
      title: "HR Analytics",
      description: "Gain deep insights into workforce trends, turnover rates, and performance metrics with pre-built reports.",
      image: "/images/modules/dashbord module.webp",
      color: "#1a6545",
      rgb: "20,95,60",
    },
    {
      title: "Document Management",
      description: "Store and manage HR documents securely in the cloud with version control and access permissions.",
      image: "/images/modules/sheet module.webp",
      color: "#8a2a3a",
      rgb: "130,35,48",
    },
    {
      title: "Timesheets",
      description: "Track project hours and bill client accurately with integrated timesheets and approval workflows.",
      image: "/images/modules/account modules.webp",
      color: "#0f4e8a",
      rgb: "12,68,130",
    },
    {
      title: "Query Management",
      description: "Centralize employee requests and issues with an internal helpdesk that ensures timely resolutions.",
      image: "/images/modules/chatt mdoule.webp",
      color: "#523a8a",
      rgb: "75,48,130",
    },
    {
      title: "Exit Management",
      description: "Streamline the offboarding process with automated exit interviews, clearance forms, and final settlements.",
      image: "/images/modules/csm modules.webp",
      color: "#1a7a55",
      rgb: "18,108,72",
    },
    {
      title: "Mobile HR",
      description: "Access all HR functions on-the-go with native mobile apps, keeping your workforce connected and productive.",
      image: "/images/modules/any module.webp",
      color: "#a05a18",
      rgb: "145,75,18",
    },
  ];

  const benefits = [
    {
      title: "Unified Employee Experience",
      description: "Zoho People centralizes all your HR operations, providing one platform for the entire employee lifecycle from hire to retire.",
      image: "/images/people/fourteam.webp",
      points: [
        "Single source of truth for employee data",
        "Seamless integration with payroll and finance",
        "Consistent experience across web and mobile",
        "Reduce manual effort with automated workflows"
      ],
    },
    {
      title: "Data-Driven Talent Growth",
      description: "Make informed decisions about your workforce. Use powerful analytics to identify top performers and areas for improvement.",
      image: "/images/lap/lap2.webp",
      points: [
        "Continuous performance monitoring",
        "Skill gap analysis and training suggestions",
        "Predictive attrition and turnover reports",
        "Custom dashboards for HR leadership"
      ],
    },
    {
      title: "Frictionless HR Operations",
      description: "Automate administrative tasks so your HR team can focus on strategic initiatives and employee engagement.",
      image: "/images/people/laptopmen2.webp",
      points: [
        "Automated leave and attendance tracking",
        "Digital document signing and storage",
        "Customizable approval workflows",
        "24/7 employee self-service access"
      ],
    },
    {
      title: "Global Compliance & Security",
      description: "Stay compliant with local labor laws and protect sensitive employee data with enterprise-grade security features.",
      image: "/images/lap/lap1.webp",
      points: [
        "GDPR and local data privacy compliance",
        "Role-based access control and audit logs",
        "Automated compliance reporting",
        "Secure cloud-based document storage"
      ],
    },
  ];

  return (
    <ZohoSolutionTemplate
      title="Zoho People — Complete HR Management Software"
      subtitle="The Modern Way to Manage Your Workforce."
      description="Zoho People is a cloud-based HRMS that simplifies your HR operations, fosters employee development, and builds a better workplace environment."
      introDescription2="Zoho People transforms HR from a back-office function into a strategic asset, providing the tools needed to nurture talent, manage performance, and build a high-performance culture."
      breadcrumb={[
        { label: "Home", href: "/zoho" },
        { label: "Solutions", href: "/zoho/solutions" },
        { label: "HR", href: "/zoho/solutions/hr" },
        { label: "Zoho People", href: "/zoho/solutions/hr/zoho-people" },
      ]}
      stats={stats}
      modules={modules}
      benefits={benefits}
      heroImage="/images/people/laptopgirl.webp"
      whatIsImage="/images/zoho-dashboards/zoho-people.webp"
      heroCard1={{
        title: "Employee Centric",
        subtitle: "One platform for the entire lifecycle.",
        icon: Users
      }}
      heroCard2={{
        title: "90% Retention Rate",
        subtitle: "Nurture talent with continuous feedback.",
        icon: Heart
      }}
      pricingInfo={{
        description: "Scale your HR with plans that fit every business size. Start free for small teams.",
        plans: [
          "Essential HR: $1 /user/month",
          "Professional: $2 /user/month",
          "Premium: $3 /user/month",
          "Enterprise: $5 /user/month",
        ],
        ctaText: "Start 15-Day Free Trial",
      }}
    />
  );
}


