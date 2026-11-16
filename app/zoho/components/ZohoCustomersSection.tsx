"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const customerLogos = [
  { logo: "/images/zoho%20client%20images/all%20wave%20av.png", name: "All Wave AV" },
  { logo: "/images/zoho%20client%20images/aurionpro.png", name: "Aurionpro" },
  { logo: "/images/zoho%20client%20images/avaso.png", name: "Avaso" },
  { logo: "/images/zoho%20client%20images/Bettinelli.png", name: "Bettinelli" },
  { logo: "/images/zoho%20client%20images/dahchi.png", name: "Dahchi" },
  { logo: "/images/zoho%20client%20images/incuspaze.png", name: "Incuspaze" },
  { logo: "/images/zoho%20client%20images/indialand.png", name: "IndiaLand" },
  { logo: "/images/zoho%20client%20images/initium.png", name: "Initium" },
  { logo: "/images/zoho%20client%20images/krishgen.png", name: "Krishgen" },
  { logo: "/images/zoho%20client%20images/KTA.png", name: "KTA" },
  { logo: "/images/zoho%20client%20images/rentopia_v2.png", name: "Rentopia" },
  { logo: "/images/zoho%20client%20images/samson.png", name: "Samson" },
  { logo: "/images/zoho%20client%20images/shaurrya.png", name: "Shaurrya" },
  { logo: "/images/zoho%20client%20images/tardid.png", name: "Tardid" },
  { logo: "/images/zoho%20client%20images/vsn.png", name: "VSN" },
  { logo: "/images/zoho%20client%20images/Waco.png", name: "Waco" },
  { logo: "/images/zoho%20client%20images/ziptrip.png", name: "Ziptrip" },
];

export default function ZohoCustomersSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="customers" className="relative scroll-mt-28 overflow-hidden bg-white py-14">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-blue-50/50 blur-[100px]" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-indigo-50/50 blur-[100px]" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="mb-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 bg-clip-text text-3xl font-medium text-transparent md:text-5xl"
          >
            Trusted by Industry Leaders
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 100 }}
            viewport={{ once: true }}
            className="mx-auto mt-4 h-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600"
          />
        </div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative w-full overflow-hidden py-8"
        >
          <div className="zoho-customers-marquee flex items-center whitespace-nowrap">
            {customerLogos.concat(customerLogos).map((customer, index) => (
              <div key={`${customer.name}-${index}`} className="inline-flex px-4">
                <div className="flex h-20 w-44 items-center justify-center rounded-2xl border border-gray-100 bg-white/80 p-4 shadow-sm backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white hover:shadow-xl sm:h-24 sm:w-52">
                  <Image
                    src={customer.logo}
                    alt={`${customer.name} logo`}
                    width={180}
                    height={70}
                    sizes="(max-width: 640px) 100px, 150px"
                    className="max-h-full w-auto object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      <style jsx global>{`
        @keyframes zohoCustomersMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .zoho-customers-marquee {
          display: inline-flex;
          animation: zohoCustomersMarquee 50s linear infinite;
          will-change: transform;
        }
        .zoho-customers-marquee:hover { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) {
          .zoho-customers-marquee {
            animation: none;
            flex-wrap: wrap;
            justify-content: center;
            white-space: normal;
          }
          .zoho-customers-marquee > div:nth-child(n + 18) { display: none; }
        }
      `}</style>
    </section>
  );
}
