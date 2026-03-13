"use client";

import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion";

const netsuiteFaqs = [
  {
    q: "What is Oracle NetSuite ERP?",
    a: "Oracle NetSuite ERP is a cloud-native business management suite that unifies financials, inventory, supply chain, CRM, HR, and eCommerce into a single real-time platform — eliminating data silos and giving leadership full visibility across every function.",
  },
  {
    q: "How does NetSuite ERP help reduce operational costs?",
    a: "NetSuite automates manual, error-prone processes like invoice matching, purchase approvals, financial reconciliation, and inventory replenishment — cutting administrative overhead and freeing your team to focus on high-value work.",
  },
  {
    q: "Is NetSuite ERP suitable for mid-sized and growing businesses?",
    a: "Yes. NetSuite is purpose-built for scale — from 10-person startups to multi-entity global enterprises. Its modular architecture means you only activate and pay for what you need today, then expand seamlessly as your business grows.",
  },
  {
    q: "How long does a NetSuite ERP implementation take?",
    a: "A typical NetSuite ERP implementation takes 3 to 6 months depending on the complexity, number of modules, data migration scope, and integrations required. AGSuite follows a structured SuiteSuccess methodology to keep timelines predictable.",
  },
  {
    q: "Can NetSuite ERP integrate with our existing tools?",
    a: "Absolutely. NetSuite connects via native connectors and REST/SOAP APIs to platforms like Salesforce, Shopify, WooCommerce, ADP, Microsoft 365, and hundreds more — ensuring your entire tech stack works as one.",
  },
  {
    q: "How secure is NetSuite for sensitive business data?",
    a: "NetSuite maintains enterprise-grade security including 256-bit data encryption, role-based access control, multi-factor authentication, SOC 1 & 2 compliance, and 99.98% uptime SLAs — all hosted on Oracle's global cloud infrastructure.",
  },
  {
    q: "Can we migrate from our legacy ERP to NetSuite?",
    a: "Yes. AGSuite Technologies provides full data migration services — mapping, cleansing, and validating your historical data from ERPs like SAP, Microsoft Dynamics, QuickBooks, or custom systems — ensuring zero data loss.",
  },
  {
    q: "What ongoing support does AGSuite provide after go-live?",
    a: "We offer dedicated post-implementation support including system health monitoring, user training, customisation requests, module upgrades, and a priority helpdesk — ensuring your NetSuite environment continues to perform as your business evolves.",
  },
];

const accountingFaqs = [
  {
    q: "What is NetSuite Cloud Accounting Software?",
    a: "NetSuite Cloud Accounting is a real-time, cloud-native financial management platform that replaces spreadsheets and legacy accounting tools. It automates core accounting processes — from journal entries and bank reconciliation to financial reporting and multi-currency consolidation — giving finance teams a single, accurate source of truth.",
  },
  {
    q: "How does NetSuite Accounting help close the books faster?",
    a: "NetSuite automates recurring journal entries, bank feeds, inter-company eliminations, and period-end workflows — reducing a typical month-end close from weeks to days. Built-in financial dashboards give controllers real-time visibility without waiting for batch reports.",
  },
  {
    q: "Does NetSuite support multi-currency and multi-entity accounting?",
    a: "Yes. NetSuite natively handles 190+ currencies with real-time exchange rate management and automated revaluation. Multi-entity consolidation lets you manage subsidiaries, joint ventures, and international entities in one ledger — with full inter-company eliminations.",
  },
  {
    q: "How does NetSuite ensure tax and regulatory compliance?",
    a: "NetSuite includes a built-in SuiteTax engine that handles VAT, GST, withholding tax, and country-specific requirements for 190+ countries. It also supports ASC 606 revenue recognition, IFRS 16 lease accounting, and SOX controls — keeping you audit-ready at all times.",
  },
  {
    q: "Can NetSuite Accounting integrate with our existing banking and payment tools?",
    a: "Absolutely. NetSuite integrates with major banks via bank feeds, connects to payment gateways like Stripe and PayPal, and syncs with procurement systems for end-to-end accounts payable automation. REST APIs and pre-built connectors link to virtually any financial tool in your stack.",
  },
  {
    q: "How does NetSuite handle accounts receivable and payable?",
    a: "NetSuite automates invoice generation, payment matching, aging analysis, and dunning workflows for AR — while AP automation handles purchase invoice capture, three-way matching, approval routing, and supplier payment scheduling. Both are fully auditable with complete transaction trails.",
  },
  {
    q: "How long does NetSuite Accounting implementation take?",
    a: "A focused NetSuite Accounting implementation typically takes 6 to 12 weeks — faster if you are replacing a single legacy tool. AGSuite uses Oracle's SuiteSuccess implementation methodology to configure the platform to your chart of accounts, approval workflows, and reporting needs before go-live.",
  },
  {
    q: "What post-implementation support does AGSuite provide for NetSuite Accounting?",
    a: "AGSuite provides ongoing managed services including period-end support, user training, custom report building, system health reviews, and a dedicated support desk — ensuring your finance team always gets the most from the platform as your business scales.",
  },
];

const globalBusinessFaqs = [
  {
    q: "What is NetSuite Global Business Management?",
    a: "NetSuite Global Business Management — delivered through NetSuite OneWorld — is a cloud ERP built for multinational organisations. It unifies multi-subsidiary management, 190+ currencies, 100+ tax jurisdictions, intercompany transactions, and global financial consolidation in a single real-time platform — eliminating the need for separate regional systems.",
  },
  {
    q: "How does NetSuite manage multiple subsidiaries?",
    a: "NetSuite OneWorld lets you create and manage unlimited legal entities and subsidiaries from one environment. You can define unique charts of accounts, tax rules, currencies, and workflows per entity — while consolidating financials at the group level in real time with automatic intercompany elimination entries.",
  },
  {
    q: "How many currencies does NetSuite support?",
    a: "NetSuite supports 190+ currencies natively. The platform provides real-time exchange rate feeds, automated period-end revaluation of open balances, and reporting of realised and unrealised FX gains and losses — fully compliant with IFRS and US GAAP requirements.",
  },
  {
    q: "Can NetSuite handle different accounting standards across countries?",
    a: "Yes. NetSuite supports multi-GAAP accounting, allowing each entity to maintain its own local GAAP books while the parent reports under IFRS or US GAAP. Consolidation, currency translation, and elimination journals are all automated, giving you accurate group financials without manual adjustments.",
  },
  {
    q: "How does NetSuite handle tax compliance in different countries?",
    a: "NetSuite's built-in SuiteTax engine manages VAT, GST, withholding tax, and nexus requirements across 100+ jurisdictions. Country-specific localisation packs provide statutory chart-of-accounts templates and filing-ready report formats — keeping every entity audit-ready without custom development.",
  },
  {
    q: "How long does it take to set up a new subsidiary in NetSuite?",
    a: "With NetSuite OneWorld's pre-configured localisation packs for key markets, a new subsidiary can typically be set up and live within a few days. AGSuite copies approved configuration from an existing entity, applies the appropriate local tax and reporting settings, and runs a test cut-over before go-live.",
  },
  {
    q: "How does intercompany transaction management work in NetSuite?",
    a: "NetSuite automatically records matched intercompany journal entries when one subsidiary transacts with another. At period close, elimination entries are generated automatically during consolidation — ensuring accurate group P&L, balance sheet, and cash flow statements without manual adjustments.",
  },
  {
    q: "What post-implementation support does AGSuite provide for NetSuite Global Business?",
    a: "AGSuite provides ongoing managed services covering period-close support, new subsidiary onboarding, FX and tax configuration updates, custom consolidated report building, user training, and a dedicated helpdesk — ensuring your NetSuite environment scales as your global footprint grows.",
  },
];

const crmFaqs = [
  {
    q: "What is NetSuite CRM?",
    a: "NetSuite CRM is the customer relationship management module built natively into the NetSuite platform — covering sales force automation, marketing campaigns, customer service, partner management, and analytics. Because it shares the same database as NetSuite ERP, sales reps see live order history, finance sees open pipeline, and service sees billing status — all without any integration.",
  },
  {
    q: "How is NetSuite CRM different from Salesforce or HubSpot?",
    a: "Standalone CRMs like Salesforce or HubSpot require integrations to connect with your order management, inventory, and finance systems — creating data lag and reconciliation overhead. NetSuite CRM is embedded in the ERP, so quotes become orders, orders trigger invoices, and customer data is always up to date across every department with zero synchronisation effort.",
  },
  {
    q: "Does NetSuite CRM support marketing automation?",
    a: "Yes. NetSuite CRM includes campaign management, email execution, lead nurture sequences, and closed-loop ROI reporting — tracking every campaign through to closed revenue without exporting data to a separate marketing tool. Campaigns can be segmented by industry, purchase history, deal stage, or any custom field.",
  },
  {
    q: "Can NetSuite CRM manage customer support cases?",
    a: "Absolutely. NetSuite's Customer Service Management module handles case creation, SLA tracking, automated escalations, and self-service portal access. Support agents work with a 360° customer view — seeing open orders, billing status, and past cases — so every interaction is informed and resolution times improve significantly.",
  },
  {
    q: "How does NetSuite CRM handle sales forecasting?",
    a: "NetSuite CRM provides commit, best case, and pipeline forecast views at rep, team, and territory level — updated in real time as deals progress. Historical win rate analysis, weighted probability models, and quota attainment tracking give leadership a reliable revenue outlook every week, not just at quarter-end.",
  },
  {
    q: "Does NetSuite CRM work on mobile devices?",
    a: "Yes. NetSuite CRM offers full-featured mobile access for iOS and Android — allowing sales reps to view customer accounts, update opportunities, log calls, submit quotes, and access dashboards from any device. Mobile CRM keeps field sales teams productive without being tied to a desk.",
  },
  {
    q: "How long does NetSuite CRM implementation take?",
    a: "A CRM-focused NetSuite implementation typically takes 8 to 14 weeks, depending on the number of modules, data migration scope, and configuration complexity. AGSuite uses Oracle's SuiteSuccess methodology to structure the project — configuring sales workflows, campaign templates, and reporting dashboards before go-live.",
  },
  {
    q: "What post-implementation support does AGSuite provide for NetSuite CRM?",
    a: "AGSuite provides ongoing managed services including sales process optimisation, custom dashboard and report building, campaign setup support, user training, system health reviews, and a dedicated helpdesk — ensuring your CRM environment continues to deliver revenue impact as your team grows.",
  },
];

const zohoFaqs = [
  {
    q: "What is Zoho One?",
    a: "Zoho One is an all-in-one suite of 45+ integrated business applications designed to manage every aspect of your business from one platform.",
  },
  {
    q: "Can Zoho be customized for my business needs?",
    a: "Yes. Zoho apps are highly customizable — AGSuite can tailor forms, workflows, and automation to your exact business requirements.",
  },
  {
    q: "Is Zoho CRM suitable for large enterprises?",
    a: "Absolutely. Zoho CRM scales from startups to large organizations with features like AI insights, advanced analytics, and automation.",
  },
  {
    q: "Does Zoho integrate with third-party tools?",
    a: "Yes. Zoho offers strong API support and built-in integrations for tools like Google Workspace, Microsoft 365, Slack, and more.",
  },
  {
    q: "What type of support does AGSuite provide for Zoho?",
    a: "We provide setup, migration, customization, automation, and training for Zoho solutions to ensure maximum ROI.",
  },
  {
    q: "Is Zoho secure for sensitive business data?",
    a: "Yes. Zoho maintains strict security standards with data encryption, multi-factor authentication, and GDPR compliance.",
  },
  {
    q: "Can I migrate from another CRM to Zoho CRM?",
    a: "Yes, AGSuite helps businesses migrate from Salesforce, HubSpot, or other CRMs to Zoho with minimal disruption.",
  },
];

interface FAQProps {
  variant?: "zoho" | "netsuite" | "netsuite-accounting" | "netsuite-global-business" | "netsuite-crm";
  id?: string;
  customFaqs?: { q: string; a: string }[];
  customSubtitle?: string;
}

export const FAQ = ({ variant, id, customFaqs, customSubtitle }: FAQProps) => {
  const [activeCategory, setActiveCategory] = useState<"zoho" | "netsuite" | "netsuite-accounting" | "netsuite-global-business" | "netsuite-crm">(
    variant || "netsuite"
  );
  const [openItems, setOpenItems] = useState<{ [key: number]: boolean }>({});

  const faqs = customFaqs
    ? customFaqs
    : activeCategory === "zoho"
      ? zohoFaqs
      : activeCategory === "netsuite-accounting"
        ? accountingFaqs
        : activeCategory === "netsuite-global-business"
          ? globalBusinessFaqs
          : activeCategory === "netsuite-crm"
            ? crmFaqs
            : netsuiteFaqs;

  const toggle = (idx: number) => {
    setOpenItems((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <div id={id} className="w-full relative text-gray-800 bg-[#f0f4ff] scroll-mt-36">
      <section className="py-16 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Sidebar - Sticky */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <aside
              className="relative p-8 rounded-2xl overflow-hidden shadow-2xl"
              style={{
                background: "linear-gradient(145deg, #0a1628 0%, #0f2a57 50%, #1a3a7a 100%)",
              }}
            >
              {/* Subtle glow orb */}
              <div
                className="absolute -top-10 -right-10 w-48 h-48 rounded-full"
                style={{
                  background: "radial-gradient(circle, rgba(59,130,246,0.25) 0%, transparent 70%)",
                  filter: "blur(20px)",
                }}
              />
              {/* Bottom glow */}
              <div
                className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full"
                style={{
                  background: "radial-gradient(circle, rgba(99,179,237,0.15) 0%, transparent 70%)",
                  filter: "blur(18px)",
                }}
              />

              <div className="relative z-10 space-y-5">
                {/* Glowing accent bar */}
                <div
                  className="w-10 h-1 rounded-full"
                  style={{
                    background: "linear-gradient(90deg, #60a5fa, #93c5fd)",
                    boxShadow: "0 0 8px rgba(96,165,250,0.7)",
                  }}
                />

                <h2 className="text-4xl md:text-5xl font-medium leading-tight">
                  <span className="text-white">
                    Frequently{" "}
                  </span>
                  <br />
                  <span className="text-white">
                    Asked{" "}
                  </span>
                  <span style={{ color: "#93c5fd" }}>
                    Questions
                  </span>
                </h2>

                <p
                  className="leading-relaxed text-sm"
                  style={{ color: "rgba(255,255,255,0.80)" }}
                >
                  {customSubtitle
                    ? customSubtitle
                    : variant === "zoho"
                      ? "Find answers to common questions about Zoho solutions and how AGSuite can help."
                      : variant === "netsuite-accounting"
                        ? "Everything you need to know about NetSuite Cloud Accounting — from closing faster and multi-entity consolidation to compliance and go-live timelines."
                        : variant === "netsuite-global-business"
                          ? "Everything you need to know about NetSuite Global Business Management — from multi-subsidiary setup and multi-currency to intercompany automation and global compliance."
                          : variant === "netsuite-crm"
                            ? "Everything you need to know about NetSuite CRM — from sales automation and pipeline forecasting to marketing ROI and customer service management."
                            : variant === "netsuite"
                              ? "Everything you need to know about NetSuite ERP — from pricing and licensing to implementation and long-term support."
                              : "Choose between Oracle NetSuite or Zoho to explore FAQs tailored for each solution."}
                </p>

                {/* Filter Buttons — only shown when no variant is locked */}
                {!variant && (
                  <div className="flex gap-3 pt-2">
                    <button
                      onClick={() => {
                        setActiveCategory("netsuite");
                        setOpenItems({});
                      }}
                      className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === "netsuite"
                        ? "text-white shadow-lg"
                        : "border border-blue-400/40 text-blue-200 hover:border-blue-300 hover:text-white"
                        }`}
                      style={
                        activeCategory === "netsuite"
                          ? { background: "linear-gradient(135deg, #2563eb, #1d4ed8)", boxShadow: "0 4px 14px rgba(37,99,235,0.5)" }
                          : { background: "rgba(255,255,255,0.07)" }
                      }
                    >
                      NetSuite
                    </button>
                    <button
                      onClick={() => {
                        setActiveCategory("zoho");
                        setOpenItems({});
                      }}
                      className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === "zoho"
                        ? "text-white shadow-lg"
                        : "border border-blue-400/40 text-blue-200 hover:border-blue-300 hover:text-white"
                        }`}
                      style={
                        activeCategory === "zoho"
                          ? { background: "linear-gradient(135deg, #2563eb, #1d4ed8)", boxShadow: "0 4px 14px rgba(37,99,235,0.5)" }
                          : { background: "rgba(255,255,255,0.07)" }
                      }
                    >
                      Zoho
                    </button>
                  </div>
                )}
              </div>
            </aside>
          </div>

          {/* FAQ Accordion List */}
          <div className="lg:col-span-8 space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openItems[idx];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.4, delay: idx * 0.07 }}
                  className={`rounded-xl border transition-all duration-300 ${isOpen
                    ? "bg-white border-blue-300 shadow-md shadow-blue-100"
                    : "bg-white border-gray-100 hover:border-blue-200 hover:shadow-sm"
                    }`}
                >
                  <button
                    onClick={() => toggle(idx)}
                    suppressHydrationWarning
                    className="flex justify-between items-center w-full px-6 py-5 text-left group"
                  >
                    <span
                      className={`text-base md:text-lg font-semibold transition-colors pr-4 ${isOpen
                        ? "text-blue-700"
                        : "text-gray-800 group-hover:text-blue-600"
                        }`}
                    >
                      {faq.q}
                    </span>
                    <div
                      className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen
                        ? "bg-blue-600 text-white rotate-180"
                        : "bg-blue-50 text-blue-400 group-hover:bg-blue-100"
                        }`}
                    >
                      <FaChevronDown className="w-3.5 h-3.5" />
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen
                      ? "max-h-96 opacity-100 pb-5 px-6"
                      : "max-h-0 opacity-0 px-6"
                      }`}
                  >
                    <div className="w-full h-px bg-blue-100 mb-4" />
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                      {faq.a}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
