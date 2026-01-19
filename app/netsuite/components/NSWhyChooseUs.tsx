"use client";
import Image from "next/image";
import { Award, Wrench, Headphones, Globe2 } from "lucide-react";
import { motion } from "framer-motion";

const NSWhyChooseUs = () => {
  const points = [
    {
      icon: <Award className="w-12 h-12 text-blue-500 stroke-1" />,
      title: "Certified Oracle NetSuite Solution Provider",
      desc: "Official Oracle partnership ensuring best practices and proven methodologies.",
    },
    {
      icon: <Wrench className="w-12 h-12 text-blue-500 stroke-1" />,
      title: "100+ Customization Projects Delivered",
      desc: "Extensive experience in tailored NetSuite implementations across diverse industries.",
    },
    {
      icon: <Headphones className="w-12 h-12 text-blue-500 stroke-1" />,
      title: "Onshore + Offshore Support",
      desc: "Timezone flexibility with dedicated teams providing 24/7 support coverage.",
    },
    {
      icon: <Globe2 className="w-12 h-12 text-blue-500 stroke-1" />,
      title: "Global Client Success Experience",
      desc: "Proven track record serving enterprise clients across North America and Europe.",
    },
  ];

  return (
    <section className="bg-white py-20">
      {/* Content Container */}
      <div className="min-h-screen flex items-center">
        {/* Centered Card/Container with Padding */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full">

          {/* Inner Card Container with Background */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">

            {/* Background Image Inside Container */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/Background/teambg2.webp"
                alt="Business technology background"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 z-10 bg-linear-to-r from-gray-900/95 via-gray-900/70 to-transparent" />

            {/* Content */}
            <div className="relative z-20 p-8 md:p-12 lg:p-16">

              {/* Left Side Content - Why Choose Us */}
              <div className="max-w-2xl">
                {/* Heading */}
                <motion.h2
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white leading-tight mb-12 ml-5"
                >
                  Why Choose AGSuite
                </motion.h2>

                {/* Points List */}
                <div className="space-y-8">
                  {points.map((point, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.8,
                        delay: idx * 0.3,
                        ease: "easeOut"
                      }}
                      className="flex items-start gap-5"
                    >
                      {/* Icon with circular colored background */}
                      <div className={`shrink-0 w-19 h-19 rounded-full  flex items-center justify-center`}>
                        {point.icon}
                      </div>

                      {/* Text Content */}
                      <div className="flex-1 pt-1">
                        <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                          {point.title}
                        </h3>
                        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                          {point.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NSWhyChooseUs;
