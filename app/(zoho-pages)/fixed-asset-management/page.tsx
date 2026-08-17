"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import {
  ShieldCheck,
  Zap,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  QrCode,
  Calendar,
  Layers,
  FileSpreadsheet,
  AlertTriangle,
  Clock,
  Building,
  RefreshCw,
  Cpu,
  Check,
  X,
  HelpCircle,
  Maximize2,
  Smartphone,
  Wrench,
  Search,
  Share2,
  Code,
  Globe,
  Bell,
  UserCheck,
  Sliders,
} from "lucide-react";
import { FAQ } from "@/app/components/home/FAQ";
import FooterContactForm from "@/app/components/shared/FooterContactForm";

function Counter({ value }: { value: number }) {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });
  const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
  const display = useTransform(spring, (v) => Math.round(v));

  useEffect(() => {
    if (inView) {
      spring.set(value);
    } else {
      spring.set(0);
    }
  }, [inView, spring, value]);

  return (
    <span ref={ref}>
      <motion.span>{display}</motion.span>
    </span>
  );
}

export default function FixedAssetManagementPage() {
  const { ref: statsRef } = useInView({ triggerOnce: false, threshold: 0.2 });
  const [activeTab, setActiveTab] = useState(0);
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);
  const [activeBenefit, setActiveBenefit] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [depreciationSubTab, setDepreciationSubTab] = useState<'dashboard' | 'company' | 'tax'>('dashboard');

  const benefitsList = [
    {
      title: "Complete Asset Lifecycle Management",
      description: "Track assets from purchase to disposal in one unified system.",
      points: [
        "End-to-end custody tracking from PO to scrap",
        "Unified system replacing fragmented spreadsheets",
        "Automated status transitions across departments"
      ],
      icon: Layers,
      color: "from-blue-600 to-indigo-600",
      image: "/images/assets/asset_tracker_dashboard.png"
    },
    {
      title: "Real-Time Visibility",
      description: "Web and mobile access ensures instant tracking across locations.",
      points: [
        "Live status sync across offices, plants & warehouses",
        "Instant custodian allocation updates",
        "24/7 web & mobile portal availability"
      ],
      icon: Globe,
      color: "from-teal-600 to-emerald-600",
      image: "/images/assets/auditor_dashboard_mobile.png"
    },
    {
      title: "QR-code-Based Accuracy",
      description: "Mobile QR-code scanning reduces manual errors and improves verification speed.",
      points: [
        "Instant camera scanning via smartphones & handheld devices",
        "60% reduction in audit duration & physical verification effort",
        "Eliminates duplicate asset entries and ghost inventory"
      ],
      icon: QrCode,
      color: "from-purple-600 to-violet-600",
      image: "/images/assets/asset_qr_barcode_master.png"
    },
    {
      title: "Automated Depreciation Calculation",
      description: "Accurate depreciation tracking as per Income Tax Act and Companies Act.",
      points: [
        "Automated SLM and WDV calculation engines",
        "Strict compliance with Indian statutory Income Tax Block rules",
        "Zero manual spreadsheet calculation risk"
      ],
      icon: FileSpreadsheet,
      color: "from-amber-600 to-orange-600",
      image: "/images/assets/depreciation_dashboard.png"
    },
    {
      title: "Audit Readiness",
      description: "Automated audits and audit scheduling simplify compliance and internal controls.",
      points: [
        "Audit trail logs for all value & custodian modifications",
        "Instant PDF/Excel export for internal & external statutory auditors",
        "Scheduled physical audit cycles with progress tracking"
      ],
      icon: ShieldCheck,
      color: "from-rose-600 to-red-600",
      image: "/images/assets/audit_trail_overview.png"
    },
    {
      title: "Service Due Control",
      description: "Prevent breakdowns with proactive maintenance tracking and reminders.",
      points: [
        "Preventive vs Breakdown maintenance classification",
        "Maintenance cost tracking per machine & vendor",
        "Service due scheduling to extend equipment lifespan"
      ],
      icon: Wrench,
      color: "from-yellow-600 to-amber-600",
      image: "/images/assets/preventive_maintenance.png"
    },
    {
      title: "Alerts & Notifications",
      description: "Automated reminders reduce missed servicing, renewals, or compliance deadlines.",
      points: [
        "Automated email & system notifications for AMC & Warranty expiry",
        "Service due alerts sent directly to engineers",
        "Customizable notification triggers for audit dates"
      ],
      icon: Bell,
      color: "from-indigo-600 to-blue-600",
      image: "/images/assets/audit_trail_history.png"
    },
    {
      title: "Improved Accountability",
      description: "Clear tracking of asset allocation and responsibility.",
      points: [
        "Individual employee asset acknowledgment & check-in/out",
        "Branch & department custodian assignment records",
        "Clear historical logs of asset transfer & usage"
      ],
      icon: UserCheck,
      color: "from-cyan-600 to-blue-600",
      image: "/images/assets/fixed_asset_register.png"
    },
    {
      title: "Customizable & Scalable",
      description: "Flexible structure allows adaptation to business needs.",
      points: [
        "Built on low-code Zoho Creator for rapid workflow adaptation",
        "Custom form fields, approval matrices & brand themeing",
        "Scales seamlessly from single location to multi-entity enterprises"
      ],
      icon: Sliders,
      color: "from-pink-600 to-rose-600",
      image: "/images/zoho-dashboards/zoho-creator-updated-dashboard.png"
    },
    {
      title: "Centralized Reporting & Decision Support",
      description: "Depreciation and asset reports enable better financial planning and budgeting.",
      points: [
        "Executive dashboard widgets for Net Book Value & Asset Type Mix",
        "Data-driven replacement & capital expenditure budgeting",
        "Configurable multi-dimensional reports for CFO decision making"
      ],
      icon: BarChart3,
      color: "from-emerald-600 to-teal-600",
      image: "/images/zoho-dashboards/zoho-analytics-dashboard.png"
    }
  ];

  const interactiveFeatures = [
    {
      id: "lifecycle",
      title: "Asset Lifecycle Management",
      badge: "Lifecycle & Machine Dashboard",
      description: "Tracks an asset from purchase and allocation to maintenance and final disposal with complete real-time status visibility.",
      points: [
        "Complete lifecycle tracking from procurement to scrapping",
        "Department-wise employee asset allocation & active status",
        "Machine Dashboard with availability, allocation & maintenance counts"
      ],
      icon: Layers,
      color: "from-blue-600 to-indigo-600",
      hasSubTabs: false,
      twoImages: false,
      images: [
        {
          src: "/images/assets/asset_tracker_dashboard.png",
          alt: "Asset Lifecycle Management & Machine Dashboard",
          caption: "AGS Asset Tracker 360 — Dashboard & Machine Allocation Overview"
        }
      ]
    },
    {
      id: "mobile",
      title: "Field Updates & Mobile Access",
      badge: "iOS & Android Auditor App",
      description: "Allows users to update asset information using mobile devices from any location. Field engineers and audit custodians can scan QR codes, verify asset status, and log physical audits in real time.",
      points: [
        "Native mobile interface for field engineers & audit custodians",
        "Real-time physical audit counts (Audited vs Not Audited)",
        "Instant condition reporting for working vs damaged assets"
      ],
      icon: Smartphone,
      color: "from-emerald-600 to-teal-600",
      hasSubTabs: false,
      twoImages: false,
      images: [
        {
          src: "/images/assets/auditor_dashboard_mobile.png",
          alt: "Mobile Auditor Dashboard Interface",
          caption: "Mobile Auditor Dashboard — On-the-Go Physical Verification Screen",
          isMobile: true
        }
      ]
    },
    {
      id: "categorization",
      title: "Asset Categorization",
      badge: "Structured Hierarchy",
      description: "Organizes assets into categories (such as IT equipment, furniture, or vehicles) for easier management, audit verification, and statutory reporting.",
      points: [
        "Categorize IT Equipment, Machinery, Servers, Vehicles & Office Assets",
        "Custom block-of-assets grouping for financial & tax hierarchy",
        "Multi-attribute search filters across offices, plants & custodians"
      ],
      icon: Building,
      color: "from-purple-600 to-violet-600",
      hasSubTabs: false,
      twoImages: false,
      images: [
        {
          src: "/images/assets/asset_category_distribution.png",
          alt: "Asset Category Distribution Chart",
          caption: "Asset Category Distribution — Class & Block Allocation"
        }
      ]
    },
    {
      id: "depreciation",
      title: "Depreciation Management",
      badge: "Statutory Dual Engine",
      description: "Automatically calculates asset depreciation over time for accounting and financial reporting, offering dual engines for Companies Act (SLM & WDV) and Income Tax Act rules.",
      points: [
        "Automated Straight Line Method (SLM) & Written Down Value (WDV) engines",
        "Dual schedule generation for Companies Act & Income Tax Act",
        "Live Depreciation Dashboard with Net Book Value & Asset Type Mix analytics"
      ],
      icon: FileSpreadsheet,
      color: "from-amber-600 to-orange-600",
      hasSubTabs: true,
      twoImages: false,
      images: []
    },
    {
      id: "register",
      title: "Centralized Asset Register",
      badge: "Single Source of Truth",
      description: "Stores all asset information (name, cost, location, purchase date, asset ID, purchase value, current value, opening value, depreciation value, and closing asset value) in one central database for easy access and management.",
      points: [
        "Single searchable digital database for all physical asset records",
        "Live tracking of Purchase Value, Current Asset Value & Closing Asset Value",
        "One-click Excel / CSV export capability for financial audits"
      ],
      icon: Zap,
      color: "from-cyan-600 to-blue-600",
      hasSubTabs: false,
      twoImages: false,
      images: [
        {
          src: "/images/assets/fixed_asset_register.png",
          alt: "Fixed Asset Register Table",
          caption: "Centralized Fixed Asset Register — Detailed Asset Value Schedule"
        }
      ]
    },
    {
      id: "audit",
      title: "Audit Trails & Compliance",
      badge: "Complete History & Event Log (2 Images)",
      description: "Keeps a complete, tamper-proof record of all asset activities, custodian assignments, invoice modifications, and value changes for auditing and compliance purposes.",
      points: [
        "Complete historical chain of custody tracking per asset ID",
        "Detailed activity timeline recording user changes, invoice numbers & depreciation %",
        "Direct linkage between physical QR code tags, custodians, and audit history"
      ],
      icon: ShieldCheck,
      color: "from-rose-600 to-red-600",
      hasSubTabs: false,
      twoImages: true,
      images: [
        {
          src: "/images/assets/audit_trail_overview.png",
          alt: "Asset Overview & QR Tag Details",
          caption: "Image 1: Asset Details & QR Tag Overview"
        },
        {
          src: "/images/assets/audit_trail_history.png",
          alt: "Asset Activity History Timeline",
          caption: "Image 2: Asset Timeline & User Activity History"
        }
      ]
    },
    {
      id: "barcode",
      title: "Asset Identification (Barcode / QR Code)",
      badge: "Instant Mobile Verification",
      description: "Assigns unique barcodes or QR codes to assets so they can be quickly scanned, verified, and tracked using mobile devices or physical scanners.",
      points: [
        "Automated generation of unique Barcodes and QR Codes per asset line item",
        "Scannable via native smartphone camera or handheld Bluetooth scanners",
        "Prevents ghost assets and accelerates physical audit speed by 60%"
      ],
      icon: QrCode,
      color: "from-indigo-600 to-blue-600",
      hasSubTabs: false,
      twoImages: false,
      images: [
        {
          src: "/images/assets/asset_qr_barcode_master.png",
          alt: "Asset Master with Barcodes & QR Codes",
          caption: "Asset Master — Line-Item Barcode & QR Code Tagging View"
        }
      ]
    },
    {
      id: "maintenance",
      title: "Preventive Maintenance Scheduling",
      badge: "Preventive & Scheduled Service",
      description: "Schedules regular maintenance and sends reminders to keep assets in good condition, preventing unexpected breakdowns.",
      points: [
        "Automated maintenance scheduling & vendor dispatch tracking",
        "Preventive vs Breakdown maintenance classification & cost logging",
        "Planned maintenance date alerts to extend overall asset lifecycle"
      ],
      icon: Wrench,
      color: "from-amber-500 to-yellow-600",
      hasSubTabs: false,
      twoImages: false,
      images: [
        {
          src: "/images/assets/preventive_maintenance.png",
          alt: "Asset Maintenance Dashboard",
          caption: "Asset Maintenance Dashboard — Status & Planned Service Schedule"
        }
      ]
    },
    {
      id: "search",
      title: "Advanced Global Search",
      badge: "Cross-Module Instant Lookup",
      description: "Enables users to instantly find assets, transactions, or records across all modules from a single search interface.",
      points: [
        "Instant global query across asset names, IDs, barcodes & vendors",
        "Search across all modules (Asset Master, Maintenance, Allocation) from one bar",
        "Highlights exact matching records with one-click record navigation"
      ],
      icon: Search,
      color: "from-blue-500 to-cyan-600",
      hasSubTabs: false,
      twoImages: false,
      images: [
        {
          src: "/images/assets/advanced_global_search.png",
          alt: "Advanced Global Search Interface",
          caption: "Advanced Global Search — Instant Cross-Module Record Lookup"
        }
      ]
    },
    {
      id: "integrations",
      title: "Integrations",
      badge: "Native Zoho & Ecosystem Connectivity",
      description: "Integration provides seamless connectivity with Zoho applications such as Zoho People and Zoho Books, while also offering scalable support for third-party integrations to adapt to evolving business requirements.",
      points: [
        "Direct sync with Zoho Books for automated financial entries & depreciation",
        "Seamless employee data sync with Zoho People for asset allocation",
        "REST API and webhook support for third-party ERP & ITAM tools"
      ],
      icon: Share2,
      color: "from-purple-500 to-indigo-600",
      hasSubTabs: false,
      twoImages: false,
      images: [
        {
          src: "/images/assets/zoho_integrations.png",
          alt: "Zoho Books & Zoho People Integrations",
          caption: "System Integrations — Automated Accounting & HR Synchronization"
        }
      ]
    },
    {
      id: "reports",
      title: "Custom Reports",
      badge: "Real-Time Analytics & Exports",
      description: "Enables dynamic report creation with configurable filters and field-level customization, powered by real-time data insights. Supports export in multiple formats and seamless integration with dashboards for deeper analytics.",
      points: [
        "Configurable field-level filtering & custom group-by reporting",
        "One-click multi-format exports (Excel, PDF, CSV) for audit readiness",
        "Live dashboard integration for executive asset insights"
      ],
      icon: BarChart3,
      color: "from-emerald-500 to-teal-600",
      hasSubTabs: false,
      twoImages: false,
      images: [
        {
          src: "/images/assets/asset_category_distribution.png",
          alt: "Custom Asset Analytics & Reports",
          caption: "Custom Reports & Category Distribution Analytics View"
        }
      ]
    },
    {
      id: "nocode",
      title: "No-Code / Low-Code",
      badge: "Zoho Creator Platform Agility",
      description: "Delivers a visual, drag-and-drop development environment with reusable workflows and minimal scripting requirements. Facilitates rapid application development, easy modifications, and smooth deployment without heavy coding effort.",
      points: [
        "Built on Zoho Creator visual low-code app engine",
        "Rapid customization of forms, workflows & approval matrices",
        "Scalable cloud infrastructure with zero heavy maintenance overhead"
      ],
      icon: Code,
      color: "from-rose-500 to-pink-600",
      hasSubTabs: false,
      twoImages: false,
      images: [
        {
          src: "/images/assets/asset_tracker_dashboard.png",
          alt: "No-Code Workflow Builder Platform",
          caption: "Zoho Creator Low-Code Platform Architecture"
        }
      ]
    },
    {
      id: "mobileapp",
      title: "Mobile-Based Application",
      badge: "Device-Agnostic Mobile App",
      description: "Provides a responsive, device-agnostic interface optimized for mobile use. Ensures real-time data synchronization, secure access, and reliable offline/online functionality for uninterrupted business operations.",
      points: [
        "Optimized for iOS, Android, and mobile web browsers",
        "Secure role-based access & real-time cloud data synchronization",
        "Mobile camera barcode/QR scanning for instant physical verification"
      ],
      icon: Smartphone,
      color: "from-teal-500 to-cyan-600",
      hasSubTabs: false,
      twoImages: false,
      images: [
        {
          src: "/images/assets/auditor_dashboard_mobile.png",
          alt: "Mobile Asset Management Interface",
          caption: "Mobile-Based Application — Real-Time Field Synchronization",
          isMobile: true
        }
      ]
    }
  ];

  const stats = [
    { label: "Asset Visibility", value: 100, suffix: "%", icon: CheckCircle2 },
    { label: "Audit Accuracy", value: 99, suffix: "%", icon: ShieldCheck },
    { label: "Depreciation Error Reduction", value: 95, suffix: "%", icon: Zap },
    { label: "Time Saved on Audits", value: 60, suffix: "hrs", icon: BarChart3 },
  ];

  const features = [
    {
      title: "Asset Lifecycle Management",
      description: "Govern assets seamlessly from procurement, assignment, and location transfer to maintenance, depreciation, and final disposal.",
      icon: Layers,
      color: "from-blue-600 to-indigo-600",
    },
    {
      title: "Field Updates & Mobile Access",
      description: "Empower field technicians and custodians to log asset movements, condition reports, and service requests in real time via iOS and Android apps.",
      icon: RefreshCw,
      color: "from-emerald-600 to-teal-600",
    },
    {
      title: "Asset Categorization",
      description: "Structure assets into custom categories, sub-categories, blocks, and asset groups to ensure clear hierarchy and accurate financial tracking.",
      icon: Building,
      color: "from-purple-600 to-violet-600",
    },
    {
      title: "Compliance Report",
      description: "Generate statutory compliance reports pre-formatted strictly for The Companies Act and Income Tax Act guidelines with zero manual compilation.",
      icon: ShieldCheck,
      color: "from-rose-600 to-red-600",
    },
    {
      title: "Depreciation Management",
      description: "Dual depreciation engines calculate Written Down Value (WDV) and Straight Line Method (SLM) automatically based on configured asset life rules.",
      icon: FileSpreadsheet,
      color: "from-amber-600 to-orange-600",
    },
    {
      title: "Centralized Asset Register",
      description: "Maintain a single, searchable digital repository recording serial numbers, purchase invoices, custodian history, and asset valuation.",
      icon: Zap,
      color: "from-cyan-600 to-blue-600",
    },
    {
      title: "Audit Trails & Compliance",
      description: "Complete, tamper-proof event logging tracks every change, custodian transfer, and disposal approval for complete auditor transparency.",
      icon: CheckCircle2,
      color: "from-teal-600 to-emerald-600",
    },
    {
      title: "Asset Identification (Barcode / QR Code)",
      description: "Generate, print, and scan custom QR codes or barcodes using mobile camera devices for instant physical audit verification.",
      icon: QrCode,
      color: "from-indigo-600 to-blue-600",
    },
    {
      title: "Preventive Maintenance Scheduling",
      description: "Schedule automated service-due alerts, technician assignments, and repair history tracking to extend equipment operational life.",
      icon: Calendar,
      color: "from-orange-600 to-amber-600",
    },
    {
      title: "Advanced Global Search",
      description: "Instantly locate any asset across multiple plants, offices, or departments using multi-attribute search filters and tags.",
      icon: BarChart3,
      color: "from-blue-600 to-cyan-600",
    },
    {
      title: "Integrations",
      description: "Connect seamlessly with Zoho Books, Zoho Inventory, custom ERPs, and third-party accounting systems via robust REST APIs.",
      icon: Layers,
      color: "from-violet-600 to-purple-600",
    },
    {
      title: "Custom Reports",
      description: "Create interactive visual dashboards, customized PDF exports, and department-wise asset allocation reports on demand.",
      icon: BarChart3,
      color: "from-rose-600 to-pink-600",
    },
    {
      title: "No-Code / Low-Code",
      description: "Built on Zoho Creator, allowing rapid customization of forms, approval workflows, fields, and notification triggers without deep coding.",
      icon: Cpu,
      color: "from-emerald-600 to-cyan-600",
    },
    {
      title: "Mobile-Based Application",
      description: "Native web and mobile synchronization ensures field teams can conduct audits, scan tags, and view asset history anywhere, online or offline.",
      icon: RefreshCw,
      color: "from-indigo-600 to-purple-600",
    },
  ];

  const benefits = [
    {
      title: "Eliminate Ghost & Phantom Assets",
      description:
        "Maintain 100% accurate physical inventory records and eliminate payment of taxes or insurance on missing or unserviceable equipment.",
      points: [
        "Real-time physical asset verification",
        "Custodian & department allocation tracking",
        "Disposal & write-off approval workflows",
        "Complete historical chain of custody",
      ],
      image: "/images/Dashboard/fixed_asset_management_dashboard.png",
    },
    {
      title: "Statutory Tax & Regulatory Compliance",
      description:
        "Automatically compute asset depreciation according to prescribed rates under both Companies Act and Income Tax rules without manual spreadsheets.",
      points: [
        "Automated Straight Line & WDV calculations",
        "Companies Act vs Income Tax schedule generation",
        "Block of assets classification for tax reporting",
        "Audit-ready trail for external auditors",
      ],
      image: "/images/Dashboard/fixed_asset_management_dashboard.png",
    },
    {
      title: "Proactive Service & Preventive Maintenance",
      description:
        "Never miss a scheduled service date or warranty expiration. Keep industrial, IT, and office assets operating at peak efficiency.",
      points: [
        "Automated email & push alerts for service due dates",
        "Maintenance cost log & vendor tracking",
        "Warranty and insurance policy management",
        "Downtime reduction and equipment longevity",
      ],
      image: "/images/Dashboard/fixed_asset_management_dashboard.png",
    },
  ];

  const challenges = [
    {
      challenge: "Manual Spreadsheet Tracking",
      impact: "High error rates, missing asset records, and difficulty maintaining version history during audits.",
      solution: "Centralized Zoho Creator digital database with real-time web & mobile sync.",
    },
    {
      challenge: "Complex Statutory Depreciation Rules",
      impact: "Errors in calculating Companies Act vs Income Tax Act rates lead to tax penalties and misstated financials.",
      solution: "Built-in dual depreciation engine that automates WDV & SLM calculations instantly.",
    },
    {
      challenge: "Ghost Assets & Unclaimed Depreciation",
      impact: "Paying insurance premiums and taxes on lost, stolen, or scrapped assets still listed on books.",
      solution: "QR-code mobile audit scanner for real-time physical verification.",
    },
    {
      challenge: "Unplanned Asset Maintenance & Downtime",
      impact: "Missed service cycles cause unexpected machine breakdowns and expensive emergency repairs.",
      solution: "Automated status alerts, service-due triggers, and maintenance scheduling.",
    },
  ];

  const faqs = [
    {
      question: "What is Fixed Asset Management software?",
      answer:
        "Fixed Asset Management software is a centralized platform that tracks the entire lifecycle of an organization's physical assets—from purchase, tagging, location transfer, and maintenance to depreciation and final retirement.",
    },
    {
      question: "How does the tool handle Companies Act and Income Tax depreciation?",
      answer:
        "Our Fixed Asset Management tool built on Zoho Creator features integrated depreciation engines that simultaneously calculate Written Down Value (WDV) and Straight Line Method (SLM) depreciation in compliance with both The Companies Act and The Income Tax Act.",
    },
    {
      question: "Can we track assets using mobile phones and QR codes?",
      answer:
        "Yes! The solution provides native mobile synchronization allowing staff to scan QR codes or barcodes on assets to update location, assign custodians, log maintenance requests, and complete physical audit verification on the go.",
    },
    {
      question: "Can this solution be customized for our organization's branding and workflow?",
      answer:
        "Absolutely. Developed on Zoho Creator, the tool offers deep customization including custom fields, approval workflows, automated email notifications, theme personalization, and seamless integration with your existing ERP or accounting system.",
    },
  ];

  return (
    <div className="min-h-screen selection:bg-blue-900 selection:text-white bg-white">
      {/* ── 1. HERO SECTION ─────────────────────────────────────────────────── */}
      <section
        className="relative min-h-[90vh] overflow-hidden flex flex-col justify-center"
        style={{
          background:
            "linear-gradient(135deg, #000814 0%, #000d2e 25%, #001a4d 55%, #000d2e 80%, #000814 100%)",
        }}
      >
        {/* Ambient glows & grid */}
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-800/10 rounded-full blur-[100px] pointer-events-none" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full pt-36 pb-16">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-2 text-sm font-medium mb-8"
          >
            <Link href="/zoho" className="text-blue-300 hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" />
            <Link href="/zoho/solutions" className="text-blue-300 hover:text-white transition-colors">
              Zoho Add-Ons
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" />
            <span className="text-white/80">Fixed Asset Management</span>
          </motion.nav>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            {/* Left Content */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4"
              >
                <Cpu className="w-4 h-4 text-blue-400" />
                Asset Management Software
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl sm:text-5xl md:text-6xl font-medium mb-4 leading-[1.12] tracking-tight text-white"
              >
                Fixed Asset Management
              </motion.h1>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "90px" }}
                transition={{ delay: 0.45, duration: 0.6 }}
                className="h-[4px] bg-gradient-to-r from-blue-500 to-cyan-300 mb-6 rounded-full"
              />

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="text-base sm:text-lg text-gray-300 font-normal leading-relaxed max-w-xl mb-8"
              >
                Govern your entire asset lifecycle—from procurement and QR tagging to depreciation, maintenance, and disposal—with an intelligent tool built on Zoho Creator.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                <Link
                  href="#contact-form"
                  className="group inline-flex items-center gap-3 px-8 py-4 text-base font-semibold rounded-full bg-white text-gray-900 hover:bg-gray-100 transition-all duration-300 shadow-xl hover:scale-105"
                >
                  Get in Touch
                  <motion.span
                    animate={{ x: [0, 6, 0] }}
                    transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                    className="flex items-center"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Hero Image Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.0, delay: 0.3 }}
              className="relative flex items-center justify-center"
            >
              <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/60 border border-white/10 group">
                <Image
                  src="/images/assets/fixed_asset_hero.jpg"
                  alt="Person using Fixed Asset Management software on laptop"
                  width={700}
                  height={500}
                  className="w-full h-auto object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </div>

          {/* Stats Bar */}
          <motion.div
            ref={statsRef}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="border-t border-white/15 pt-10 mt-16"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center group">
                  <div className="flex justify-center mb-2">
                    <div className="p-3 bg-blue-700/20 rounded-2xl group-hover:bg-blue-700/30 transition-colors">
                      <stat.icon className="w-6 h-6 text-blue-400" />
                    </div>
                  </div>
                  <div className="text-3xl sm:text-4xl font-medium text-white mb-1 flex items-center justify-center gap-1">
                    <Counter value={stat.value} />
                    <span className="text-blue-400">{stat.suffix}</span>
                  </div>
                  <div className="text-gray-400 font-medium text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 2. STICKY SUB-NAVBAR ─────────────────────────────────────────────── */}
      <nav className="sticky top-[72px] z-40 bg-white border-b border-gray-200 shadow-sm backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 py-3">
            {[
              { label: "What Is Fixed Asset Management?", href: "#what-is-fixed-asset-management" },
              { label: "Features", href: "#features" },
              { label: "Benefits", href: "#benefits" },
              { label: "Challenges", href: "#challenges" },
              { label: "FAQ", href: "#faq" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-xs sm:text-sm font-semibold text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ── 3. THIRD SECTION: WHAT IS FIXED ASSET MANAGEMENT ───────────────── */}
      <section id="what-is-fixed-asset-management" className="py-20 bg-gray-50 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-white p-3"
            >
              <Image
                src="/images/Dashboard/fixed_asset_management_dashboard.png"
                alt="Zoho Creator Fixed Asset Management Dashboard"
                width={700}
                height={500}
                className="w-full h-auto rounded-xl object-cover"
              />
            </motion.div>

            {/* Content Paragraphs */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-5"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
                Streamlining Fixed Asset Management with Zoho Creator
              </h2>

              <p className="text-base text-gray-700 leading-relaxed font-normal">
                Our Fixed Asset Management Tool, developed on Zoho Creator, is a centralised digital ecosystem engineered to govern the entire asset lifecycle—from procurement and tagging to depreciation, maintenance, and ultimate disposal. Operating as a comprehensive Fixed Asset Management Software, it provides organisations with unparalleled visibility and precision over their entire asset portfolio.
              </p>

              <p className="text-base text-gray-700 leading-relaxed font-normal">
                The solution serves as an intelligent Fixed Asset Management Tracker, offering seamless web and mobile synchronisation for real-time monitoring. By leveraging QR code-based identification and automated status alerts, the system streamlines asset handling across multiple locations, ensuring data integrity at every touchpoint.
              </p>

              <p className="text-base text-gray-700 leading-relaxed font-normal">
                Engineered for regulatory excellence, the platform delivers compliance-ready reporting strictly aligned with The Companies Act and The Income Tax Act. Integrated depreciation engines, automated audit scheduling, and proactive service-due management work in tandem to optimise financial accuracy and mitigate operational risk.
              </p>

              <p className="text-base text-gray-700 leading-relaxed font-normal">
                This scalable Fixed Asset Management solution is further enhanced by automated notifications, native email integration, and deep customisation options—including theme personalisation—to align with specific brand identities. Ultimately, it empowers businesses to transform fragmented processes into a structured, transparent, and high-performance asset management strategy.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 4. UNIFIED INTERACTIVE FEATURES SHOWCASE SECTION (#features) ───────── */}
      <section id="features" className="py-24 bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white scroll-mt-24 relative overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4">
              <Layers className="w-4 h-4 text-blue-400" />
              Interactive Feature & Module Showcase
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
              Explore Fixed Asset Features & Live Screenshots
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
              Click any feature below to inspect live system screens, audit timelines, mobile dashboards, and statutory depreciation schedules.
            </p>
          </div>

          {/* Interactive Feature Category Selector Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
            {interactiveFeatures.map((feat, idx) => (
              <button
                key={feat.id}
                onClick={() => setActiveFeatureIndex(idx)}
                className={`px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-300 flex items-center gap-2 ${
                  activeFeatureIndex === idx
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-105"
                    : "bg-white/5 hover:bg-white/10 text-gray-300 border border-white/10"
                }`}
              >
                <feat.icon className="w-4 h-4" />
                <span>{feat.title}</span>
              </button>
            ))}
          </div>

          {/* Active Feature Showcase Panel (WHITE THEME INSIDE CARD) */}
          {(() => {
            const activeFeat = interactiveFeatures[activeFeatureIndex];
            return (
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeat.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white border border-gray-200 p-8 sm:p-12 rounded-3xl shadow-2xl space-y-8 text-gray-900"
                >
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Details Column */}
                    <div className="space-y-6">
                      <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
                        <activeFeat.icon className="w-3.5 h-3.5 text-blue-600" />
                        {activeFeat.badge}
                      </div>

                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                        {activeFeat.title}
                      </h3>

                      <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
                        {activeFeat.description}
                      </p>

                      <ul className="space-y-3">
                        {activeFeat.points.map((pt, i) => (
                          <li key={i} className="flex items-center gap-3 text-sm text-gray-700 font-medium">
                            <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                              <Check className="w-3.5 h-3.5" />
                            </div>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="pt-4">
                        <Link
                          href="#contact-form"
                          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all duration-300 shadow-xl shadow-blue-600/20 hover:scale-105"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>

                    {/* Right Images Column */}
                    <div className="space-y-6">
                      {/* Sub-tabs for Depreciation Management */}
                      {activeFeat.hasSubTabs && (
                        <div className="flex flex-wrap gap-2 mb-4 bg-gray-100 p-1.5 rounded-xl border border-gray-200">
                          <button
                            onClick={() => setDepreciationSubTab('dashboard')}
                            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                              depreciationSubTab === 'dashboard' ? "bg-blue-600 text-white shadow-sm" : "text-gray-600 hover:text-gray-900"
                            }`}
                          >
                            Depreciation Dashboard
                          </button>
                          <button
                            onClick={() => setDepreciationSubTab('company')}
                            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                              depreciationSubTab === 'company' ? "bg-blue-600 text-white shadow-sm" : "text-gray-600 hover:text-gray-900"
                            }`}
                          >
                            Company Act Schedule
                          </button>
                          <button
                            onClick={() => setDepreciationSubTab('tax')}
                            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                              depreciationSubTab === 'tax' ? "bg-blue-600 text-white shadow-sm" : "text-gray-600 hover:text-gray-900"
                            }`}
                          >
                            Income Tax Act Schedule
                          </button>
                        </div>
                      )}

                      {/* Case A: Depreciation Management subtab image */}
                      {activeFeat.hasSubTabs ? (
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 group bg-slate-950">
                          <Image
                            src={
                              depreciationSubTab === 'dashboard'
                                ? "/images/assets/depreciation_dashboard.png"
                                : depreciationSubTab === 'company'
                                ? "/images/assets/depreciation_company_act.png"
                                : "/images/assets/depreciation_income_tax.png"
                            }
                            alt="Depreciation Management Interface"
                            width={800}
                            height={500}
                            className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 cursor-pointer"
                            onClick={() =>
                              setSelectedImage(
                                depreciationSubTab === 'dashboard'
                                  ? "/images/assets/depreciation_dashboard.png"
                                  : depreciationSubTab === 'company'
                                  ? "/images/assets/depreciation_company_act.png"
                                  : "/images/assets/depreciation_income_tax.png"
                              )
                            }
                          />
                          <button
                            onClick={() =>
                              setSelectedImage(
                                depreciationSubTab === 'dashboard'
                                  ? "/images/assets/depreciation_dashboard.png"
                                  : depreciationSubTab === 'company'
                                  ? "/images/assets/depreciation_company_act.png"
                                  : "/images/assets/depreciation_income_tax.png"
                              )
                            }
                            className="absolute bottom-4 right-4 px-3 py-1.5 rounded-lg bg-black/80 text-white text-xs font-medium flex items-center gap-1.5 backdrop-blur-md hover:bg-black transition-colors"
                          >
                            <Maximize2 className="w-3.5 h-3.5" />
                            Expand View
                          </button>
                        </div>
                      ) : activeFeat.twoImages ? (
                        /* Case B: Audit Trails & Compliance (TWO IMAGES) */
                        <div className="space-y-4">
                          <div className="text-xs font-bold text-gray-700 uppercase tracking-wider flex items-center gap-2">
                            <ShieldCheck className="w-4 h-4 text-rose-600" />
                            Audit Trail Interface Screens (2 System Views)
                          </div>
                          <div className="grid sm:grid-cols-2 gap-4">
                            {activeFeat.images.map((img, i) => (
                              <div
                                key={i}
                                className="relative rounded-xl overflow-hidden shadow-xl border border-gray-200 group bg-slate-950"
                              >
                                <Image
                                  src={img.src}
                                  alt={img.alt}
                                  width={400}
                                  height={300}
                                  className="w-full h-44 object-cover transform group-hover:scale-105 transition-transform duration-700 cursor-pointer"
                                  onClick={() => setSelectedImage(img.src)}
                                />
                                <div className="p-2 bg-slate-900 border-t border-gray-800 text-[11px] font-medium text-gray-300 truncate">
                                  {img.caption}
                                </div>
                                <button
                                  onClick={() => setSelectedImage(img.src)}
                                  className="absolute top-2 right-2 p-1.5 rounded-md bg-black/70 text-white hover:bg-black transition-colors"
                                >
                                  <Maximize2 className="w-3 h-3" />
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        /* Case C: Single Image Features */
                        <div
                          className={`relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 group bg-slate-950 ${
                            (activeFeat.images[0] as any)?.isMobile ? "max-w-xs mx-auto" : ""
                          }`}
                        >
                          <Image
                            src={activeFeat.images[0].src}
                            alt={activeFeat.images[0].alt}
                            width={800}
                            height={500}
                            className={`w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 cursor-pointer ${
                              (activeFeat.images[0] as any)?.isMobile ? "max-h-[460px] object-contain p-2" : ""
                            }`}
                            onClick={() => setSelectedImage(activeFeat.images[0].src)}
                          />
                          <div className="p-3 bg-slate-900 border-t border-gray-800 text-xs font-medium text-gray-300">
                            {activeFeat.images[0].caption}
                          </div>
                          <button
                            onClick={() => setSelectedImage(activeFeat.images[0].src)}
                            className="absolute top-4 right-4 px-3 py-1.5 rounded-lg bg-black/80 text-white text-xs font-medium flex items-center gap-1.5 backdrop-blur-md hover:bg-black transition-colors"
                          >
                            <Maximize2 className="w-3.5 h-3.5" />
                            Expand View
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            );
          })()}
        </div>
      </section>

      {/* ── 5. BENEFITS SECTION ────────────────────────────────────────────── */}
      <section id="benefits" className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-blue-800 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4">
              <CheckCircle2 className="w-4 h-4 text-blue-600" />
              Key Strategic & Operational Advantages
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Why Enterprise Leaders Choose Our Fixed Asset Management Tool
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
              Transform physical asset tracking from an administrative chore into a high-precision, audit-ready financial advantage.
            </p>
          </div>

          {/* Interactive Split Showcase: Live Preview Left (Wider) / Accordion List Right */}
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 xl:gap-12 items-stretch mb-20">
            {/* Left Image Preview Container (WIDER SIDE) */}
            <div className="relative min-h-[420px] lg:min-h-[560px] rounded-3xl overflow-hidden shadow-2xl border border-gray-200 bg-slate-950 flex items-center justify-center p-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeBenefit}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 flex items-center justify-center bg-slate-950 p-3"
                >
                  <Image
                    src={benefitsList[activeBenefit].image}
                    alt={benefitsList[activeBenefit].title}
                    fill
                    className={`cursor-pointer ${
                      benefitsList[activeBenefit].image.includes('mobile')
                        ? "object-contain p-4 max-h-[520px]"
                        : "object-cover object-top"
                    }`}
                    onClick={() => setSelectedImage(benefitsList[activeBenefit].image)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-6 left-6 right-6 text-white pointer-events-none">
                    <span className="inline-block px-3 py-1 rounded-full bg-blue-600 text-xs font-bold uppercase tracking-wider mb-2 shadow-md">
                      Live Interface View
                    </span>
                    <h4 className="text-xl sm:text-2xl font-bold text-white mb-1 drop-shadow-md">
                      {benefitsList[activeBenefit].title}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-300 line-clamp-2 drop-shadow">
                      {benefitsList[activeBenefit].description}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedImage(benefitsList[activeBenefit].image)}
                    className="absolute top-4 right-4 px-3.5 py-1.5 rounded-lg bg-black/80 hover:bg-black text-white text-xs font-semibold flex items-center gap-1.5 backdrop-blur-md transition-colors shadow-lg"
                  >
                    <Maximize2 className="w-4 h-4" />
                    Expand View
                  </button>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Accordion List */}
            <div className="rounded-3xl border border-gray-200 bg-white p-4 sm:p-6 flex flex-col gap-2 justify-center shadow-xl">
              {benefitsList.map((item, index) => {
                const IconComponent = item.icon;
                const isActive = activeBenefit === index;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveBenefit(index)}
                    className={`group w-full flex flex-col justify-center px-5 py-3.5 text-left rounded-xl transition-all duration-300 outline-none ${
                      isActive
                        ? "bg-blue-50 shadow-md border-l-4 border-blue-600"
                        : "bg-transparent border-l-4 border-transparent hover:bg-gray-50"
                    }`}
                  >
                    <div className="flex items-center gap-4 w-full">
                      <div className={`p-2 rounded-lg shrink-0 transition-colors ${isActive ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-600 group-hover:bg-gray-200"}`}>
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <span className={`text-sm sm:text-base flex-1 font-bold ${isActive ? "text-blue-950" : "text-gray-800"}`}>
                        {item.title}
                      </span>
                      <ChevronRight className={`w-4 h-4 shrink-0 transition-all ${isActive ? "text-blue-600 rotate-90" : "text-gray-400 opacity-0 group-hover:opacity-60"}`} />
                    </div>

                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden mt-3 pl-10"
                      >
                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-3">
                          {item.description}
                        </p>
                        <ul className="space-y-1.5">
                          {item.points.map((pt, pi) => (
                            <li key={pi} className="flex items-center gap-2 text-xs sm:text-sm text-gray-700 font-medium">
                              <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quick-Scan Grid of 10 Benefits Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefitsList.map((b, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (idx % 3) * 0.08 }}
                onClick={() => {
                  setActiveBenefit(idx);
                  const el = document.getElementById("benefits");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="p-6 rounded-2xl bg-white border border-gray-200 hover:shadow-xl hover:border-blue-300 transition-all duration-300 group cursor-pointer"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${b.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                  <b.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {b.title}
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed font-normal mb-4">
                  {b.description}
                </p>
                <ul className="space-y-1.5 border-t border-gray-100 pt-3">
                  {b.points.slice(0, 2).map((pt, j) => (
                    <li key={j} className="flex items-center gap-2 text-xs text-gray-700">
                      <Check className="w-3 h-3 text-blue-600 shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. CHALLENGES SECTION ──────────────────────────────────────────── */}
      <section id="challenges" className="py-20 bg-white scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
              Overcoming Traditional Asset Management Challenges
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              See how our Zoho Creator solution replaces manual pain points with structured digital automation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {challenges.map((c, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl border border-gray-200 bg-gray-50/50 hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-red-100 text-red-600 rounded-lg">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{c.challenge}</h3>
                </div>
                <div className="space-y-3 pl-2 border-l-2 border-red-200 mb-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-red-600">The Problem</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{c.impact}</p>
                </div>
                <div className="space-y-2 pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-2 text-emerald-600 text-xs font-bold uppercase tracking-wider">
                    <CheckCircle2 className="w-4 h-4" />
                    Zoho Creator Solution
                  </div>
                  <p className="text-sm text-gray-800 font-medium">{c.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. FAQ SECTION ─────────────────────────────────────────────────── */}
      <section id="faq" className="py-20 bg-gray-50 scroll-mt-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base text-gray-600">
              Everything you need to know about our Fixed Asset Management tool.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  {f.question}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed pl-8">{f.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. ZOHO ADD-ONS CARD SECTION ────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden p-8 sm:p-12 md:p-16 bg-gradient-to-r from-[#000814] via-[#001740] to-[#000814] shadow-2xl border border-blue-500/20 text-white flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-4 max-w-2xl text-center md:text-left">
              <span className="inline-block px-4 py-1.5 rounded-full bg-red-600 text-white text-xs font-extrabold uppercase tracking-widest shadow-md">
                ZOHO
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-white">
                All the tools you need for sales, HR, operations &amp; automation.
              </h3>
            </div>

            <div className="relative z-10 shrink-0">
              <Link
                href="/zoho/solutions"
                className="group inline-flex items-center gap-3 px-8 py-4 text-base font-semibold rounded-full bg-white text-gray-900 hover:bg-gray-100 transition-all duration-300 shadow-xl hover:scale-105"
              >
                Explore Zoho
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. CONTACT FORM SECTION ─────────────────────────────────────────── */}
      <div id="contact-form" className="scroll-mt-28">
        <FooterContactForm platform="Zoho" />
      </div>

      {/* ── 10. SCREENSHOT LIGHTBOX MODAL ───────────────────────────────────── */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-6xl w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-colors shadow-lg"
                aria-label="Close Preview"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="p-2 sm:p-4 bg-slate-950 flex justify-center">
                <Image
                  src={selectedImage}
                  alt="Enlarged System Screenshot"
                  width={1400}
                  height={900}
                  className="w-auto max-h-[85vh] object-contain rounded-lg"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
