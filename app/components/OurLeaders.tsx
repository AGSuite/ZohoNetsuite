"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export const leadersData = [
  {
    name: "Ankur Goyal",
    title: "CEO",
    image: "/images/people/Ankur.jpg",
    linkedin: "https://www.linkedin.com/in/ankurgoyal2/",
    imgClass: "object-cover object-top",
  },
  {
    name: "Rajat Goyal",
    title: "Director",
    image: "/images/people/Rajat_v2.png",
    linkedin: "https://www.linkedin.com/in/rajat-goyal-9007a6101/",
    imgClass: "object-cover object-top",
  },
  {
    name: "Nikhil Jain",
    title: "CTO",
    image: "/images/people/Nikhil.png",
    linkedin: "#",
    imgClass: "object-contain p-2.5",
  },
  {
    name: "Shailesh Punse",
    title: "Head of Sales & Marketing",
    image: "/images/people/Shailesh.jpg",
    linkedin: "https://www.linkedin.com/in/shailesh-punse-79771413/",
    imgClass: "object-cover object-top",
  },
  {
    name: "Mayuri Bharadi",
    title: "Project Delivery Manager",
    image: "/images/people/mayuri%20mam.png",
    linkedin: "#",
    imgClass: "object-contain p-2.5",
  },
];

export default function OurLeaders() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 w-full max-w-7xl mx-auto items-stretch">
      {leadersData.map((leader, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group relative bg-white border border-gray-100 rounded-3xl p-5 transition-all duration-500 flex flex-col justify-between text-left w-full hover:-translate-y-2.5 shadow-xl shadow-black/20 hover:shadow-2xl hover:shadow-blue-500/20 hover:border-blue-300"
        >
          {/* Top Accent Line Glow */}
          <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent group-hover:via-blue-600 transition-all duration-500" />

          {/* Profile Image Box - Light Color Shadow on Hover ONLY */}
          <div className="relative w-full aspect-square max-w-[200px] mb-4 rounded-2xl overflow-hidden border border-gray-200 bg-slate-50 shadow-none group-hover:shadow-xl group-hover:shadow-blue-400/35 group-hover:border-blue-400/50 p-1 mx-auto flex items-center justify-center transition-all duration-500">
            <div className="relative w-full h-full rounded-xl overflow-hidden bg-white">
              <Image
                src={leader.image}
                alt={leader.name}
                fill
                className={`${leader.imgClass} transition-transform duration-700 group-hover:scale-105`}
                sizes="(max-width: 640px) 100vw, 200px"
              />
            </div>
          </div>

          {/* Leader Info Container */}
          <div className="w-full flex flex-col justify-between flex-grow pt-1">
            {/* Name on Left (Dark Blue Color), Social LinkedIn Icon on Right */}
            <div className="flex items-center justify-between gap-2 mb-1 w-full">
              <h3 className="text-base md:text-lg font-bold text-[#001e4d] group-hover:text-blue-600 transition-colors duration-300 text-left truncate">
                {leader.name}
              </h3>
              <a
                href={leader.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg bg-[#0077B5]/10 group-hover:bg-[#0077B5] text-[#0077B5] group-hover:text-white transition-all duration-300 shrink-0"
                aria-label={`${leader.name} LinkedIn`}
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>

            {/* Designation on Left */}
            <div className="w-full text-left">
              <span className="block text-xs md:text-sm font-medium text-gray-600 group-hover:text-gray-900 transition-colors duration-300 leading-snug text-left">
                {leader.title}
              </span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
