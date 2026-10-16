"use client";

import Image from "next/image";
import FlipNumbers from "react-flip-numbers";
import { ArrowUp } from "lucide-react";
import { useInView } from "react-intersection-observer";

const clientLogos = [
  { name: "AiDash", src: "/images/netsuite-clients/aidashlogo.webp" },
  { name: "ControlCase", src: "/images/netsuite-clients/controlcase.webp" },
  { name: "Escalent", src: "/images/netsuite-clients/escalent.webp" },
  { name: "Flatworld", src: "/images/netsuite-clients/flatworld.webp" },
  { name: "Indovance", src: "/images/netsuite-clients/Indovance-new-logo.webp" },
  { name: "Keycraft", src: "/images/netsuite-clients/keycraft.webp" },
  { name: "Loylogic", src: "/images/netsuite-clients/loylogic.webp" },
  { name: "Modaxo", src: "/images/netsuite-clients/modaxo.webp" },
  { name: "Traxon", src: "/images/netsuite-clients/traxon.webp" },
  { name: "UniAcco", src: "/images/netsuite-clients/uniacco.webp" },
];

const companyMetrics = [
  { value: 700, suffix: "+", label: "Projects Completed" },
  { value: 250, suffix: "+", label: "Customers" },
  { value: 84, suffix: "%", label: "Customer Retention" },
  { value: 15, suffix: "+", label: "Industry Expertise" },
  { value: 10, suffix: "+", label: "Countries Serving" },
];

export default function OdooTrustMetrics() {
  const { ref: metricsRef, inView: metricsInView } = useInView({
    triggerOnce: false,
    threshold: 0.35,
  });

  return (
    <section aria-labelledby="trusted-brands-heading" className="border-y border-slate-200 bg-white px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 id="trusted-brands-heading" className="bg-gradient-to-r from-[#643b9f] via-[#7048c8] to-[#2563eb] bg-clip-text text-3xl font-medium tracking-tight text-transparent sm:text-4xl">
            Trusted by industry leading brands
          </h2>
        </div>

        <div className="relative mt-10 w-full overflow-hidden py-3 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="odoo-logo-marquee flex w-max items-center">
            {[...clientLogos, ...clientLogos].map((client, index) => (
              <div key={`${client.name}-${index}`} className="group mx-3 flex h-20 w-44 shrink-0 items-center justify-center rounded-2xl border border-slate-200/80 bg-white px-5 shadow-sm transition duration-300 hover:border-[#643b9f]/25 hover:shadow-lg sm:w-52">
                <Image src={client.src} alt={`${client.name} logo`} width={150} height={56} className="max-h-12 w-auto max-w-full object-contain opacity-100" />
              </div>
            ))}
          </div>
        </div>

        <div ref={metricsRef} className="mt-12 overflow-hidden rounded-[1.5rem] border border-[#643b9f]/10 bg-gradient-to-r from-[#f8f5ff] via-white to-[#f1f6ff] shadow-lg shadow-slate-200/40">
          <div className="grid grid-cols-2 lg:grid-cols-5">
            {companyMetrics.map((metric, index) => (
              <div key={metric.label} className="flex min-h-28 items-center justify-center gap-2.5 border-b border-r border-slate-200/80 px-3 py-5 last:col-span-2 lg:border-b-0 lg:last:col-span-1">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-emerald-100 text-emerald-600">
                  <ArrowUp size={15} strokeWidth={3} aria-hidden="true" />
                </span>
                <div>
                  <div className="flex items-center text-2xl font-semibold leading-none tracking-tight text-slate-900 sm:text-3xl">
                    <FlipNumbers
                      height={30}
                      width={19}
                      color="#0f172a"
                      background="transparent"
                      duration={2.4}
                      delay={index * 0.18}
                      play={metricsInView}
                      numbers={metricsInView ? metric.value.toString() : "0"}
                    />
                    <span>{metric.suffix}</span>
                  </div>
                  <p className="mt-1.5 whitespace-nowrap text-xs font-medium text-slate-600 sm:text-sm">{metric.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes odooLogoMarquee {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }

        .odoo-logo-marquee {
          display: inline-flex;
          animation: odooLogoMarquee 32s linear infinite !important;
          will-change: transform;
        }
      `}</style>
    </section>
  );
}