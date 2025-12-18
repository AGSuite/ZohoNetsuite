"use client";

import Image from "next/image";
import React from "react";
import { motion, Variants } from "framer-motion";

const cardVariants: Variants = {
  initial: { scale: 1 },
  hover: { scale: 1.06, transition: { duration: 0.35, ease: "easeOut" } },
};

interface Step {
  title: string;
  desc: string;
}

interface NSHowItWorksProps {
  steps?: Step[];
}

const defaultSteps: Step[] = [
  {
    title: "Requirement Understanding & Demo",
    desc: "We begin by understanding your needs, challenges, and workflows, followed by a personalized product demonstration.",
  },
  {
    title: "Pricing Discussion & Negotiation",
    desc: "We share a transparent quotation and finalize pricing, modules, and scope through mutual discussion.",
  },
  {
    title: "Closure & Project Kickoff",
    desc: "We finalize the SOW, complete documentation, and begin the project with onboarding and implementation kickoff.",
  },
];

const NSHowItWorks: React.FC<NSHowItWorksProps> = ({ steps = defaultSteps }) => {
  return (
    <section className="py-5 bg-white sm:py-5 lg:py-15">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-semibold leading-tight text-black sm:text-4xl lg:text-5xl">
            How{" "}
            <span className="bg-linear-to-r from-red-600 via-rose-500 to-purple-600 bg-clip-text text-transparent">
              AGSuite
            </span>{" "}
            Works
          </h2>
          <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">
            Our proven process ensures clarity, transparency, and a seamless project experience from start to finish.
          </p>
        </div>

        <div className="relative mt-8 lg:mt-10">

          {/* Background dotted line */}
          <div className="absolute inset-x-0 hidden md:block top-2 xl:px-44 md:px-20 lg:px-28">
            <Image
              src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
              alt="Process timeline"
              width={1400}
              height={200}
              className="w-full"
            />
          </div>

          {/* Steps Grid */}
          <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
            {steps.map((step, index) => (
              <motion.div 
                key={index} 
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.4, ease: "easeOut" }}
              >
                
                {/* Step Number Circle */}
                <div className="flex items-center justify-center w-20 h-20 mx-auto bg-white border-2 border-gray-200 rounded-full shadow-sm">
                  <span className="text-md font-semibold text-gray-700">
                    Step {index + 1}
                  </span>
                </div>

                {/* Motion Card */}
                <motion.div
                  variants={cardVariants}
                  initial="initial"
                  whileHover="hover"
                  className="
                    p-6 mt-8 border border-gray-200 rounded-2xl
                    shadow-[0_-8px_22px_rgba(255,160,90,0.20),0_10px_28px_rgba(255,105,180,0.20)]
                    min-h-[260px] flex flex-col transition-all cursor-pointer bg-white
                  "
                >
                  <h3 className="mt-3 md:mt-5 text-xl font-semibold leading-tight text-black">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-base text-gray-600 grow">
                    {step.desc}
                  </p>
                </motion.div>

              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default NSHowItWorks;
