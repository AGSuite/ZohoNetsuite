"use client";

import React from "react";
import {
  ShieldCheck,
  Zap,
  TrendingUp,
  CheckCircle2,
  Settings,
  Shield,
  BarChart3,
  Users,
  Clock,
  Wrench,
  LineChart,
  LifeBuoy
} from "lucide-react";
import ZohoServiceTemplate from "@/app/zoho/components/services/ZohoServiceTemplate";

export default function ZohoManagedServicesPage() {
  const stats = [
    { label: "Uptime Guaranteed", value: 99, suffix: "%", icon: Clock },
    { label: "Response Time", value: 4, suffix: "h", icon: Zap },
    { label: "Issue Resolution", value: 95, suffix: "%", icon: CheckCircle2 },
    { label: "Success Rate", value: 100, suffix: "%", icon: ShieldCheck },
  ];

  const modules = [
    {
      title: "System Health Checks",
      description: "Regular audits of your Zoho environment to identify bottlenecks and optimize performance.",
      image: "/images/lap/lap1.webp",
      color: "#1e3a8a",
      rgb: "14,50,130",
      Icon: BarChart3,
    },
    {
      title: "Upgrade Readiness",
      description: "Preparing your Zoho system for the bi-annual product updates with zero disruption.",
      image: "/images/lap/lap2.webp",
      color: "#0e7490",
      rgb: "14,116,144",
      Icon: Settings,
    },
    {
      title: "Custom Support",
      description: "Dedicated Zoho experts to handle your most complex troubleshooting and configuration needs.",
      image: "/images/people/laptopgirl.webp",
      color: "#065f46",
      rgb: "6,95,70",
      Icon: LifeBuoy,
    },
    {
      title: "System Fine-Tuning",
      description: "Continuous optimization of your Zoho workflows and automation for maximum efficiency.",
      image: "/images/lap/lap3.webp",
      color: "#581c87",
      rgb: "88,28,135",
      Icon: Wrench,
    },
  ];

  const benefits = [
    {
      title: "Peace of Mind",
      description: "Managed support means your Zoho environment is always monitored and supported by experts.",
      image: "/images/lap/lap1.webp",
      points: [
        "24/7 system monitoring",
        "Proactive issue detection",
        "Expert troubleshooting",
        "Disaster recovery planning",
      ],
    },
    {
      title: "Predictable Costs",
      description: "Fixed-monthly support plans that keep your Zoho maintenance budget transparent and consistent.",
      image: "/images/people/laptopgirl.webp",
      points: [
        "Fixed monthly retainer",
        "No hidden expenses",
        "Transparent billing",
        "ROI-focused support",
      ],
    },
    {
      title: "Expert Knowledge",
      description: "Access a team of certified Zoho consultants for strategic advice and technical depth.",
      image: "/images/lap/lap3.webp",
      points: [
        "Zoho certified experts",
        "Strategic system advice",
        "Advanced technical support",
        "Best practice guidance",
      ],
    },
  ];

  const faqs = [
    {
      question: "What is included in Zoho Managed Services?",
      answer: "Our managed services include proactive system monitoring, regular health checks, upgrade readiness, custom configurations, and priority helpdesk support.",
    },
    {
      question: "How do we handle system outages?",
      answer: "We have a structured incident response plan with defined SLAs to ensure any system issues are addressed and resolved within hours.",
    },
  ];

  return (
    <ZohoServiceTemplate
      title="Zoho Managed Support Services"
      subtitle="Get Expert Support"
      description="Protect your Zoho investment with AGSuite's mission-critical managed support. From proactive monitoring to continuous optimization, we ensure your Zoho system runs at peak performance 24/7."
      breadcrumb={[
        { label: "Home", href: "/zoho" },
        { label: "Services", href: "/zoho/services" },
        { label: "Managed Services", href: "/zoho/services/managed-services" },
      ]}
      stats={stats}
      modules={modules}
      benefits={benefits}
      heroImage="/images/Services/managedservices.webp"
      introImage="/images/Services/managed.webp"
      introTitle="Proactive Zoho Support You Can Trust."
      introDescription1="Maintaining a high-performing Zoho environment requires more than just reactive fixes. Our managed services provide the strategic and technical depth to keep your system ahead of your business needs."
      introDescription2="We act as an extension of your team, providing the peace of mind that your Zoho platform is optimized, secure, and ready for growth every day of the year."
      faqs={faqs}
    />
  );
}
