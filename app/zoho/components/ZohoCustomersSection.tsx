"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const customerLogos = [
  { logo: "/images/zoho%20client%20images/customers/edelweiss.webp", name: "Edelweiss" },
  { logo: "/images/zoho%20client%20images/customers/modefin.webp", name: "Modefin" },
  { logo: "/images/zoho%20client%20images/customers/kforce.webp", name: "Kforce" },
  { logo: "/images/zoho%20client%20images/customers/chemicea.webp", name: "Chemicea" },
  { logo: "/images/zoho%20client%20images/customers/pt-ecological.webp", name: "PT Ecological Services" },
  { logo: "/images/zoho%20client%20images/customers/worldpack.webp", name: "Worldpack Automation Systems" },
  { logo: "/images/zoho%20client%20images/customers/biozed.webp", name: "BioZed" },
  { logo: "/images/zoho%20client%20images/customers/rts-imaging.webp", name: "RTS Imaging" },
  { logo: "/images/zoho%20client%20images/customers/gatilek.webp", name: "GatiLek" },
  { logo: "/images/zoho%20client%20images/customers/cactus-partners.webp", name: "Cactus Partners" },
  { logo: "/images/zoho%20client%20images/customers/milo-jewels.webp", name: "Milo Jewels" },
  { logo: "/images/zoho%20client%20images/customers/sapl.webp", name: "SAPL" },
  { logo: "/images/zoho%20client%20images/customers/nina-percept.webp", name: "Nina Percept" },
  { logo: "/images/zoho%20client%20images/customers/aurionpro.webp", name: "Aurionpro" },
  { logo: "/images/zoho%20client%20images/customers/indialand.webp", name: "IndiaLand" },
  { logo: "/images/zoho%20client%20images/customers/bettinelli.webp", name: "Bettinelli" },
  { logo: "/images/zoho%20client%20images/customers/shaurrya.webp", name: "Shaurrya Teleservices" },
  { logo: "/images/zoho%20client%20images/customers/initium.webp", name: "Initium Digital" },
  { logo: "/images/zoho%20client%20images/customers/avaso.webp", name: "AVASO Technology Solutions" },
  { logo: "/images/zoho%20client%20images/customers/waco.webp", name: "Waco" },
  { logo: "/images/zoho%20client%20images/customers/tardid.webp", name: "Tardid" },
  { logo: "/images/zoho%20client%20images/customers/ziptrip.webp", name: "Ziptrip" },
  { logo: "/images/zoho%20client%20images/customers/dai-ichi.webp", name: "Dai-ichi Specialty Chemicals" },
  { logo: "/images/zoho%20client%20images/customers/samson.webp", name: "Samson" },
  { logo: "/images/zoho%20client%20images/customers/incuspaze.webp", name: "Incuspaze Office Spaces" },
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
            {[false, true].map((duplicateTrack) => (
              <div
                key={duplicateTrack ? "duplicate" : "primary"}
                className="zoho-customers-track flex shrink-0 items-center"
                aria-hidden={duplicateTrack || undefined}
              >
                {customerLogos.map((customer) => (
                  <div key={customer.name} className="inline-flex px-4">
                    <div className="flex h-20 w-44 items-center justify-center rounded-2xl border border-gray-100 bg-white/80 p-2.5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white hover:shadow-xl sm:h-24 sm:w-52 sm:p-3">
                      <Image
                        src={customer.logo}
                        alt={duplicateTrack ? "" : `${customer.name} logo`}
                        width={600}
                        height={240}
                        sizes="(max-width: 640px) 144px, 176px"
                        className="h-full w-full object-contain"
                      />
                    </div>
                  </div>
                ))}
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
          .zoho-customers-track:first-child {
            flex-wrap: wrap;
            justify-content: center;
          }
          .zoho-customers-track[aria-hidden="true"] { display: none; }
        }
      `}</style>
    </section>
  );
}
