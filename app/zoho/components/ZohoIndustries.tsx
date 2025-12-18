"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import {
  Laptop,
  Users,
  Package,
  Megaphone,
  Newspaper,
  ShoppingCart,
  Truck,
  Factory,
} from "lucide-react";

/* ------------------ ICON MAPPING ------------------ */
const industryIconMap: Record<string, React.ElementType> = {
  "Software and Technology": Laptop,
  "IT and Professional Services": Users,
  "Wholesale Distribution": Package,
  "Advertising and Digital Marketing Agencies": Megaphone,
  "Media and Publishing": Newspaper,
  "Retail & E-Commerce": ShoppingCart,
  "Transportation and Logistics": Truck,
  "Manufacturing": Factory,
};

/* ------------------ ROUTES ------------------ */
const industryRoutes: Record<string, string> = {
  "Software and Technology": "/zoho/industries/software",
  "IT and Professional Services": "/zoho/industries/it-services",
  "Wholesale Distribution": "/zoho/industries/wholesale",
  "Advertising and Digital Marketing Agencies":
    "/zoho/industries/advertising-marketing",
  "Media and Publishing": "/zoho/industries/media",
  "Retail & E-Commerce": "/zoho/industries/retail",
  "Transportation and Logistics": "/zoho/industries/transport",
  "Manufacturing": "/zoho/industries/manufacturing",
};

/* ------------------ LIGHT GRADIENTS ------------------ */
const cardBgColors = [
  "bg-linear-to-br from-[#ffffff] to-[#eef0ff]",
  "bg-linear-to-br from-[#ffffff] to-[#eaf6ff]",
  "bg-linear-to-br from-[#ffffff] to-[#e8ffef]",
  "bg-linear-to-br from-[#ffffff] to-[#f9eaff]",
  "bg-linear-to-br from-[#ffffff] to-[#ffece8]",
  "bg-linear-to-br from-[#ffffff] to-[#eaf8ff]",
  "bg-linear-to-br from-[#ffffff] to-[#fff6da]",
  "bg-linear-to-br from-[#ffffff] to-[#ededed]",
];

/* ------------------ INDUSTRY LIST (ZOHO) ------------------ */
const industries = [
  {
    id: 1,
    title: "Software and Technology",
    description: "Operate smartly with Zoho's integrated suite for tech startups and enterprises.",
  },
  {
    id: 2,
    title: "IT and Professional Services",
    description: "Manage projects, helpdesk, and billing for consultancy firms seamlessly.",
  },
  {
    id: 3,
    title: "Wholesale Distribution",
    description: "Centralized inventory and order management for modern distributors.",
  },
  {
    id: 4,
    title: "Advertising and Digital Marketing Agencies",
    description: "Collaborate on campaigns and track client ROI with Zoho's marketing tools.",
  },
  {
    id: 5,
    title: "Media and Publishing",
    description: "Streamline content workflows and subscription billing models.",
  },
  {
    id: 6,
    title: "Retail & E-Commerce",
    description: "Connect your online store with inventory and CRM for unified retail.",
  },
  {
    id: 7,
    title: "Transportation and Logistics",
    description: "Track shipments and manage fleet operations efficiently with Zoho.",
  },
  {
    id: 8,
    title: "Manufacturing",
    description: "Lean manufacturing solutions with inventory and process management.",
  },
];

/* ------------------ ANIMATIONS ------------------ */
const iconVariants: Variants = {
  initial: { rotate: 0, y: 0 },
  hover: {
    rotate: 360,
    y: -6,
    transition: { duration: 0.8, ease: [0.42, 0, 0.58, 1] },
  },
};

const cardVariants: Variants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.04,
    background: "linear-gradient(to bottom right, #ffffff, #ffffff)", // stronger hover gradient
    transition: { duration: 0.3, ease: [0.42, 0, 0.58, 1] },
  },
};

/* ------------------ SERVICE CARD ------------------ */
const ServiceCard = ({
  title,
  description,
  cardBg,
}: {
  title: string;
  description: string;
  cardBg: string;
}) => {
  const Icon = industryIconMap[title];
  const href = industryRoutes[title];

  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      whileHover="hover"
      className={`
        relative group rounded-2xl p-7 border border-gray-200 
        transition-all duration-300 h-full shadow-xl hover:shadow-blue-100
        ${cardBg}
      `}
    >
      {/* ICON */}
      <motion.div
        variants={iconVariants}
        className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-5"
      >
        <Icon className="w-6 h-6 text-white" />
      </motion.div>

      {/* TITLE */}
      <h2 className="text-lg font-semibold text-gray-900 leading-tight">
        {title}
      </h2>

      {/* DESCRIPTION */}
      <p className="text-gray-600 text-sm leading-relaxed mt-2">
        {description}
      </p>

      {/* LINK */}
      <div className="mt-6 border-t border-gray-300 pt-3">
        <Link
          href={href}
          className="text-black hover:text-blue-600 text-sm font-medium transition-all"
        >
          Learn More →
        </Link>
      </div>
    </motion.div>
  );
};

/* ------------------ MAIN SECTION ------------------ */
const ZohoIndustries = () => {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-10 flex flex-col items-center gap-5">
        <h2 className="text-5xl font-semibold text-gray-900 text-center">
          Industries We Transform with Zoho
        </h2>

        <p className="text-gray-700 text-lg max-w-2xl text-center">
          Tailored Zoho solutions to empower businesses across virtually every major industry vertical.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full mt-8">
          {industries.map((ind, idx) => (
            <motion.div
              key={ind.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2, ease: "easeOut" }}
            >
              <ServiceCard
                {...ind}
                cardBg={cardBgColors[idx % cardBgColors.length]}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ZohoIndustries;
