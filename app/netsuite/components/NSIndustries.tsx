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
  "Software and Technology": "/netsuite/industries/software",
  "IT and Professional Services": "/netsuite/industries/it-services",
  "Wholesale Distribution": "/netsuite/industries/wholesale",
  "Advertising and Digital Marketing Agencies":
    "/netsuite/industries/advertising-marketing",
  "Media and Publishing": "/netsuite/industries/media",
  "Retail & E-Commerce": "/netsuite/industries/retail",
  "Transportation and Logistics": "/netsuite/industries/transport",
  "Manufacturing": "/netsuite/industries/manufacturing",
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

/* ------------------ INDUSTRY LIST (NETSUITE) ------------------ */
const industries = [
  {
    id: 1,
    title: "Software and Technology",
    description: "Scale your software business with NetSuite's module-based cloud ERP.",
  },
  {
    id: 2,
    title: "IT and Professional Services",
    description: "Streamline project management and resource allocation for service firms.",
  },
  {
    id: 3,
    title: "Wholesale Distribution",
    description: "Optimize inventory and supply chain management for distributors.",
  },
  {
    id: 4,
    title: "Advertising and Digital Marketing Agencies",
    description: "Manage client projects, billing, and creative resources efficiently.",
  },
  {
    id: 5,
    title: "Media and Publishing",
    description: "Unified platforms for subscription management and content monetization.",
  },
  {
    id: 6,
    title: "Retail & E-Commerce",
    description: "Omnichannel retail solutions to unify in-store and online experiences.",
  },
  {
    id: 7,
    title: "Transportation and Logistics",
    description: "Real-time visibility into fleet management and logistics operations.",
  },
  {
    id: 8,
    title: "Manufacturing",
    description: "End-to-end manufacturing planning and shop floor control systems.",
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
        transition-all duration-300 h-full shadow-xl hover:shadow-red-100
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
          className="text-black hover:text-red-600 text-sm font-medium transition-all"
        >
          Learn More →
        </Link>
      </div>
    </motion.div>
  );
};

/* ------------------ MAIN SECTION ------------------ */
const NSIndustries = () => {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-10 flex flex-col items-center gap-5">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-900 text-center">
          Industries We Serve with NetSuite
        </h2>

        <p className="text-gray-700 text-lg max-w-2xl text-center">
          We specialize in tailored consulting and technology to empower
          businesses across diverse sectors with Oracle NetSuite.
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

export default NSIndustries;
