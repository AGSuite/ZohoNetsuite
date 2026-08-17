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
      image: "/images/zoho-services/srv_managed_v2.png",
      color: "#1e3a8a",
      rgb: "14,50,130",
      Icon: BarChart3,
    },
    {
      title: "Upgrade Readiness",
      description: "Preparing your Zoho system for the bi-annual product updates with zero disruption.",
      image: "/images/zohoimages/zoho_cap_workflows_new.png",
      color: "#0e7490",
      rgb: "14,116,144",
      Icon: Settings,
    },
    {
      title: "Custom Support",
      description: "Dedicated Zoho experts to handle your most complex troubleshooting and configuration needs.",
      image: "/images/zoho-services/srv_managed_v4.png",
      color: "#065f46",
      rgb: "6,95,70",
      Icon: LifeBuoy,
    },
    {
      title: "System Fine-Tuning",
      description: "Continuous optimization of your Zoho workflows and automation for maximum efficiency.",
      image: "/images/zoho-services/srv_managed.png",
      color: "#581c87",
      rgb: "88,28,135",
      Icon: Wrench,
    },
  ];

  const benefits = [
    {
      title: "Peace of Mind",
      description: "Managed support means your Zoho environment is always monitored and supported by experts.",
      image: "/images/Services/zoho_srv_managed_new2.png",
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
      image: "/images/modules/cost_efficiency.png",
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
      image: "/images/netsuiteimages/ns_managed_services.png",
      points: [
        "Zoho certified experts",
        "Strategic system advice",
        "Advanced technical support",
        "Best practice guidance",
      ],
    },
    {
      title: "Reduced IT Burden",
      description: "Let our experts handle the day-to-day management of your Zoho environment, freeing up your internal IT team for other strategic initiatives.",
      image: "/images/modules/workforce_management.png",
      points: [
        "Focus on core business",
        "No internal Zoho expertise needed",
        "Efficient resource allocation",
        "Expert-led system governance",
      ],
    },
    {
      title: "Continuous Optimization",
      description: "We don't just maintain; we improve. Our team regularly reviews your processes to suggest and implement new Zoho features that drive efficiency.",
      image: "/images/modules/analytics_forecasting.png",
      points: [
        "New feature activation",
        "Process efficiency audits",
        "Performance tuning",
        "User experience refinement",
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
    {
      question: "Do you provide training as part of managed services?",
      answer: "Yes, we include ongoing user guidance and short 'how-to' sessions to help your team leverage any new features or optimizations we implement.",
    },
    {
      question: "Can we customize our support plan?",
      answer: "Absolutely. We offer flexible tiers based on the number of users, the complexity of your Zoho stack, and the required response times for your business operations.",
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
        { label: "Managed Services", href: "/zoho/managed-services" },
      ]}
      stats={stats}
      modules={modules}
      benefits={benefits}
      heroImage="/images/Services/managedservices.webp"
      introImage="/images/Services/managed.webp"
      bgImage="/images/zohoimages/background/zohobg.webp"
      introTitle="Proactive Zoho Support You Can Trust."
      introDescription1="Maintaining a high-performing Zoho environment requires more than just reactive fixes. Our managed services provide the strategic and technical depth to keep your system ahead of your business needs."
      introDescription2="We act as an extension of your team, providing the peace of mind that your Zoho platform is optimized, secure, and ready for growth every day of the year."
      faqs={faqs}
    />
  );
}




