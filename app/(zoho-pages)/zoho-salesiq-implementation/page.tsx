"use client";

import React from "react";



import { 
  TrendingUp, 
  Heart, 
  Target, 
  Wallet, 
  ShieldCheck, 
  Zap,
  Globe2,
  Clock,
  Briefcase,
  Users,
  CheckCircle,
  BarChart3,
  MessageSquare,
  Search,
  Eye,
  Bot
} from "lucide-react";
import ZohoSolutionTemplate from "@/app/zoho/components/solutions/ZohoSolutionTemplate";



export default function ZohoSalesIqPage() {
  const stats = [
    { label: "Visitor Conversion", value: 30, suffix: "% higher", icon: TrendingUp },
    { label: "Customer Engagement", value: 50, suffix: "%", icon: MousePointerClick },
    { label: "Response Time", value: 40, suffix: "% faster", icon: Clock },
    { label: "Visitor Tracking", value: 100, suffix: "% real-time", icon: Eye },
  ];

  const modules = [
    {
      title: "Real-time Visitor Tracking",
      description: "See who's visiting your website in real-time, where they are from, and what pages they are currently viewing.",
      image: "/images/modules/dashboard module.webp",
      color: "#1a7a55",
      rgb: "18,108,72",
    },
    {
      title: "Live Chat Engagement",
      description: "Initiate conversations with prospects at the perfect moment based on their behavior and interest level.",
      image: "/images/modules/chatt mdoule.webp",
      color: "#a05a18",
      rgb: "145,75,18",
    },
    {
      title: "AI Chatbots (Zobot)",
      description: "Build intelligent bots to handle routine queries, qualify leads, and book meetings even when your team is offline.",
      image: "/images/modules/csm modules.webp",
      color: "#4a3a8a",
      rgb: "65,45,130",
    },
    {
      title: "Visitor Segmentation",
      description: "Group visitors based on demographics, behavior, and CRM data to provide highly personalized experiences.",
      image: "/images/modules/dashbord module.webp",
      color: "#1a6080",
      rgb: "20,88,115",
    },
    {
      title: "Lead Scoring",
      description: "Automatically score visitors based on their actions and prioritize high-value prospects for your sales team.",
      image: "/images/modules/managging together module.webp",
      color: "#6a2575",
      rgb: "95,30,105",
    },
    {
      title: "Audio & Screen Share",
      description: "Provide hands-on support with high-quality audio calls and screen sharing directly within the chat window.",
      image: "/images/modules/chat desk module.webp",
      color: "#154e8a",
      rgb: "18,68,130",
    },
    {
      title: "Mobile SDK",
      description: "Embed live chat and tracking into your native mobile applications to provide a consistent experience everywhere.",
      image: "/images/modules/mobile module.webp",
      color: "#1a6545",
      rgb: "20,95,60",
    },
    {
      title: "CRM Integration",
      description: "View visitor history and background information directly from Zoho CRM or other popular platforms.",
      image: "/images/modules/working module.webp",
      color: "#8a2a3a",
      rgb: "130,35,48",
    },
    {
      title: "Answer Bot",
      description: "Empower customers to find their own answers with an AI-driven bot that pulls information from your knowledge base.",
      image: "/images/modules/any modules.webp",
      color: "#0f4e8a",
      rgb: "12,68,130",
    },
    {
      title: "Advanced Reports",
      description: "Monitor agent performance, visitor trends, and chat ROI with comprehensive analytics and visual reports.",
      image: "/images/modules/module8.webp",
      color: "#523a8a",
      rgb: "75,48,130",
    },
    {
      title: "Proactive Triggers",
      description: "Set up automated triggers to send personalized messages when visitors perform specific actions on your site.",
      image: "/images/modules/any module.webp",
      color: "#1a7a55",
      rgb: "18,108,72",
    },
    {
      title: "Chat Transfers",
      description: "Seamlessly transfer chats between departments or agents to ensure every query is handled by the right expert.",
      image: "/images/modules/account modules.webp",
      color: "#a05a18",
      rgb: "145,75,18",
    },
  ];

  const benefits = [
    {
      title: "Contextual Sales Intelligence",
      description: "Stop guessing. Zoho SalesIQ tells you exactly who your visitors are and what they're looking for, enabling smarter sales conversations.",
      image: "/images/people/fourteam.webp",
      points: [
        "Real-time insight into visitor behavior",
        "CRM data integration in chat window",
        "Identify high-intent returning visitors",
        "Detailed visitor path and session tracking"
      ],
    },
    {
      title: "24/7 Automation with AI",
      description: "Never miss a lead. Use intelligent Zobots to engage, qualify, and convert visitors while your team sleeps.",
      image: "/images/lap/lap2.webp",
      points: [
        "Build complex conversation flows without code",
        "Qualify leads and sync with CRM automatically",
        "Automated meeting scheduling integration",
        "Multi-language support for global visitors"
      ],
    },
    {
      title: "Higher Conversion Rates",
      description: "Engagement is the key to conversion. Zoho SalesIQ helps you proactively reach out to visitors when they need you most.",
      image: "/images/people/laptopmen2.webp",
      points: [
        "Reduce bounce rates with proactive triggers",
        "Empower visitors with self-service bots",
        "Personalized greetings based on geo-location",
        "Instant response with canned messages"
      ],
    },
    {
      title: "Unified Team Productivity",
      description: "Help your agents work smarter. Provide them with all the tools and context they need to deliver exceptional support and sales.",
      image: "/images/lap/lap1.webp",
      points: [
        "Department-based chat routing & queues",
        "Internal team chat for instant collaboration",
        "Integrated knowledge base for fast answers",
        "Real-time agent monitoring and coaching"
      ],
    },
  ];

  return (
    <ZohoSolutionTemplate
      title="Zoho SalesIQ — Live Chat & Visitor Tracking"
      subtitle="Engage Your Visitors, Convert Your Leads, Scale Your Sales."
      description="Zoho SalesIQ is a customer engagement platform that combines visitor tracking and live chat to help you identify, engage, and convert website prospects into customers."
      introDescription2="Bridge the gap between your website visitors and your support team. SalesIQ provides live chat, visitor tracking, and AI-driven engagement to convert prospects into loyal customers."
      breadcrumb={[
        { label: "Home", href: "/zoho" },
        { label: "Solutions", href: "/zoho/solutions" },
        { label: "Service", href: "/zoho/solutions/service" },
        { label: "Zoho SalesIQ", href: "/zoho/solutions/service/zoho-sales-iq" },
      ]}
      stats={stats}
      modules={modules}
      benefits={benefits}
      heroImage="/images/lap/lap2.webp"
      whatIsImage="/images/zoho-dashboards/zoho-sales-IQ.webp"
      heroCard1={{
        title: "Real-time Tracking",
        subtitle: "Monitor website visitors instantly.",
        icon: Eye
      }}
      heroCard2={{
        title: "AI-Powered Zobot",
        subtitle: "24/7 engagement and lead qualification.",
        icon: Bot
      }}
      pricingInfo={{
        description: "Simple plans that scale with your traffic and team size. Start with our free-forever plan today.",
        plans: [
          "Free: Up to 3 operators",
          "Basic: $7 /operator/month",
          "Professional: $15 /operator/month",
          "Enterprise: $25 /operator/month",
        ],
        ctaText: "Start My Free Trial",
      }}
    />
  );
}

// Custom icon for engagement
const MousePointerClick = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m9 9 5 12 1.774-5.226L21 14 9 9z" />
    <path d="m16.071 16.071 4.243 4.243" />
    <path d="m7.188 2.239.777 2.897" />
    <path d="m2.239 7.188 2.897.777" />
    <path d="M5.19 5.19l2.12 2.12" />
  </svg>
)


