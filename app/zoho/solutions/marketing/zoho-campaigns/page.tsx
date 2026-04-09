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
  Mail,
  Send,
  Megaphone,
  Layout,
  MousePointerClick
} from "lucide-react";
import ZohoSolutionTemplate from "@/app/zoho/components/solutions/ZohoSolutionTemplate";

export default function ZohoCampaignsPage() {
  const stats = [
    { label: "Email Open Rate", value: 25, suffix: "% higher", icon: Mail },
    { label: "Click-Through Rate", value: 15, suffix: "% higher", icon: MousePointerClick },
    { label: "Marketing ROI", value: 40, suffix: "%", icon: TrendingUp },
    { label: "Emails Sent", value: 1, suffix: "B+", icon: Send },
  ];

  const modules = [
    {
      title: "Email Marketing",
      description: "Design stunning emails with a drag-and-drop builder and choose from hundreds of pre-built templates.",
      image: "/images/modules/dashboard module.webp",
      color: "#1a7a55",
      rgb: "18,108,72",
    },
    {
      title: "Marketing Automation",
      description: "Build automated customer journeys based on behavior, interests, and past interactions.",
      image: "/images/modules/dashbord module.webp",
      color: "#a05a18",
      rgb: "145,75,18",
    },
    {
      title: "Subscriber Management",
      description: "Organize and segment your mailing lists with ease, ensuring the right message reaches the right person.",
      image: "/images/modules/working module.webp",
      color: "#4a3a8a",
      rgb: "65,45,130",
    },
    {
      title: "Autoresponders",
      description: "Schedule automated emails for welcome sequences, drip campaigns, and re-engagement flows.",
      image: "/images/modules/any module.webp",
      color: "#1a6080",
      rgb: "20,88,115",
    },
    {
      title: "A/B Testing",
      description: "Test different subject lines, content, and sender names to optimize your campaign performance.",
      image: "/images/modules/any modules.webp",
      color: "#6a2575",
      rgb: "95,30,105",
    },
    {
      title: "SMS Marketing",
      description: "Extend your reach beyond the inbox with integrated SMS campaigns for high-priority updates.",
      image: "/images/modules/module8.webp",
      color: "#154e8a",
      rgb: "18,68,130",
    },
    {
      title: "E-Commerce Marketing",
      description: "Recover abandoned carts and drive repeat sales with automated product recommendations.",
      image: "/images/modules/sheet module.webp",
      color: "#1a6545",
      rgb: "20,95,60",
    },
    {
      title: "Advanced Analytics",
      description: "Track opens, clicks, unsubscribes, and conversions with in-depth and visual performance reports.",
      image: "/images/modules/csm modules.webp",
      color: "#8a2a3a",
      rgb: "130,35,48",
    },
    {
      title: "CRM Sync",
      description: "Bi-directional sync with Zoho CRM ensures your sales and marketing teams always have the full context.",
      image: "/images/modules/managging together module.webp",
      color: "#0f4e8a",
      rgb: "12,68,130",
    },
    {
      title: "Lead Nurturing",
      description: "Guide prospects through the sales funnel with targeted content that builds trust and awareness.",
      image: "/images/modules/account modules.webp",
      color: "#523a8a",
      rgb: "75,48,130",
    },
    {
      title: "Custom Templates",
      description: "Create and save your own layout designs to maintain brand consistency across all communications.",
      image: "/images/modules/chatt mdoule.webp",
      color: "#1a7a55",
      rgb: "18,108,72",
    },
    {
      title: "Social Media Posting",
      description: "Simultaneously post your email campaigns to Facebook, Twitter, and LinkedIn to broaden your reach.",
      image: "/images/modules/mobile module.webp",
      color: "#a05a18",
      rgb: "145,75,18",
    },
  ];

  const benefits = [
    {
      title: "Engage Customers at Every Touchpoint",
      description: "Zoho Campaigns helps you build meaningful relationships. Personalize every interaction with automated flows that feel uniquely direct.",
      image: "/images/people/fourteam.webp",
      points: [
        "Dynamic content blocks based on interest",
        "Automated personalized birthday greetings",
        "Behavior-triggered re-engagement emails",
        "Omnichannel outreach via Email and SMS"
      ],
    },
    {
      title: "Unmatched Design Flexibility",
      description: "Your emails are a reflection of your brand. Our intuitive builder empowers you to create stunning displays without any coding.",
      image: "/images/lap/lap2.webp",
      points: [
        "Drag-and-drop editor for easy design",
        "100+ responsive, pre-designed templates",
        "Custom code editor for advanced developers",
        "Mobile-optimized previews and testing"
      ],
    },
    {
      title: "Smarter Automation, Higher ROI",
      description: "Stop sending generic blasts. Build complex automation workflows that nurture leads and drive actual revenue growth.",
      image: "/images/people/laptopmen2.webp",
      points: [
        "Visual workflow builder for complex journeys",
        "Advanced segmentation for targeted blasts",
        "Automatic A/B testing for subject optimization",
        "E-commerce abandoned cart recovery flows"
      ],
    },
    {
      title: "Holistic Marketing Intelligence",
      description: "Know exactly what's working and what's not. Detailed reports provide the data you need to optimize your spend and strategy.",
      image: "/images/lap/lap1.webp",
      points: [
        "In-depth open and click heatmaps",
        "Conversion tracking and revenue attribution",
        "Subscriber activity and engagement scores",
        "Unified sync with sales and CRM platforms"
      ],
    },
  ];

  return (
    <ZohoSolutionTemplate
      title="Zoho Campaigns — Email Marketing Automation"
      subtitle="Better Emails, Better Engagement, Better Growth."
      description="Zoho Campaigns is an email marketing software that helps you create, send, and track responsive email campaigns to build your customer base and drive sales."
      breadcrumb={[
        { label: "Home", href: "/zoho" },
        { label: "Solutions", href: "/zoho/solutions" },
        { label: "Marketing", href: "/zoho/solutions/marketing" },
        { label: "Zoho Campaigns", href: "/zoho/solutions/marketing/zoho-campaigns" },
      ]}
      stats={stats}
      modules={modules}
      benefits={benefits}
      heroImage="/images/people/laptopgirl.webp"
      heroCard1={{
        title: "Smarter Outreach",
        subtitle: "40% higher ROI on campaigns.",
        icon: Megaphone
      }}
      heroCard2={{
        title: "25% Higher Opens",
        subtitle: "Personalized content and AI timing.",
        icon: Send
      }}
      pricingInfo={{
        description: "Flexible, usage-based pricing that grows with your subscriber list. Experience professional marketing at a fair price.",
        plans: [
          "Free: Up to 6,000 emails/month",
          "Subscriber Plan: $5 /month",
          "Email Credits Plan: Pre-paid",
          "Industry-leading deliverability included",
        ],
        ctaText: "Start My Free Trial",
      }}
    />
  );
}
