"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SubHero from "../components/SubHero";
import { Briefcase, MapPin, Search, ArrowRight, Filter, Send } from "lucide-react";

// ------ DATA ------
const jobs = [
  { title: "NetSuite Solutions Consultant - Presales", type: "full-time", location: "pune", locationName: "Pune" },
  { title: "NetSuite Sales Executive", type: "full-time", location: "pune", locationName: "Pune" },
  { title: "NetSuite SCA Developer", type: "full-time", location: "pune", locationName: "Pune" },
  { title: "Zoho Sales Executive", type: "full-time", location: "pune", locationName: "Pune" },
  { title: "NetSuite Techno Functional Consultant", type: "full-time", location: "pune", locationName: "Pune" },
  { title: "Zoho Functional Consultant", type: "full-time", location: "remote", locationName: "Remote" },
  { title: "Business Development Manager", type: "full-time", location: "pune", locationName: "Pune" },
  { title: "Zoho Developer", type: "full-time", location: "pune", locationName: "Pune" },
  { title: "NetSuite Technical Consultant", type: "full-time", location: "pune", locationName: "Pune" },
  { title: "NetSuite Functional Consultant", type: "full-time", location: "pune", locationName: "Pune" },
  { title: "NetSuite Developer", type: "full-time", location: "pune", locationName: "Pune" },
  { title: "NetSuite Technical Lead", type: "full-time", location: "pune", locationName: "Pune" },
  { title: "NetSuite Functional Lead", type: "full-time", location: "pune", locationName: "Pune" },
];

const locations = [
  { value: 'all', label: 'All Locations' },
  { value: 'pune', label: 'Pune, Maharashtra' },
  { value: 'udaipur', label: 'Udaipur, Rajasthan' },
  { value: 'usa', label: 'USA' },
  { value: 'uk', label: 'UK' },
  { value: 'remote', label: 'Remote' },
];

const jobTypes = [
  { value: 'all', label: 'All Job Types' },
  { value: 'full-time', label: 'Full-Time' },
];

export default function ZohoCareersPage() {
  const [type, setType] = useState('all');
  const [location, setLocation] = useState('all');

  const filteredJobs = jobs.filter(
    (job) =>
      (type === 'all' || job.type === type) &&
      (location === 'all' || job.location === location)
  );

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <SubHero
        title="Building the"
        gradientText="Future of Cloud"
        subtitle="Join our award-winning Zoho consulting team. We're looking for passionate individuals ready to transform global business operations."
        breadcrumb="Careers"
      />

      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* LEFT: Open Positions */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-10">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2 italic">Open Positions</h2>
                <p className="text-gray-500">Explore career opportunities in the Zoho ecosystem.</p>
              </div>
              <div className="hidden sm:flex gap-3">
                <div className="p-2.5 bg-red-50 text-red-600 rounded-xl">
                  <Briefcase size={20} />
                </div>
              </div>
            </div>

            {/* Filters */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              <div className="relative">
                <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="w-full pl-11 pr-10 py-3.5 bg-white border border-gray-200 rounded-2xl appearance-none focus:ring-4 focus:ring-red-500/5 focus:border-red-500 outline-none transition-all font-medium text-gray-700 cursor-pointer"
                >
                  {jobTypes.map((jt) => (
                    <option key={jt.value} value={jt.value}>{jt.label}</option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full pl-11 pr-10 py-3.5 bg-white border border-gray-200 rounded-2xl appearance-none focus:ring-4 focus:ring-red-500/5 focus:border-red-500 outline-none transition-all font-medium text-gray-700 cursor-pointer"
                >
                  {locations.map((loc) => (
                    <option key={loc.value} value={loc.value}>{loc.label}</option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Job Cards */}
            <div className="space-y-4">
              <AnimatePresence mode="popLayout">
                {filteredJobs.length > 0 ? (
                  filteredJobs.map((job, idx) => (
                    <motion.div
                      key={job.title}
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                      className="group bg-white p-6 rounded-3xl border border-gray-100 hover:border-red-200 hover:shadow-xl hover:shadow-red-500/5 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-6"
                    >
                      <div className="flex items-center gap-5">
                        <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors text-red-600">
                          <Briefcase size={22} />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors uppercase tracking-tight">{job.title}</h3>
                          <div className="flex items-center gap-4 mt-1 text-sm text-gray-500">
                            <span className="flex items-center gap-1.5"><MapPin size={14} /> {job.locationName}</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                            <span className="capitalize">{job.type.replace('-', ' ')}</span>
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="sm:w-auto w-full px-6 py-3 rounded-xl bg-gray-50 text-gray-950 font-bold text-sm hover:bg-red-600 hover:text-white transition-all flex items-center justify-center gap-2 group-hover:px-8"
                      >
                        Apply Now <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </motion.div>
                  ))
                ) : (
                  <div className="py-20 text-center bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mx-auto mb-4 border border-gray-100 text-gray-300">
                      <Search />
                    </div>
                    <p className="text-gray-500 font-medium">No positions found matching your criteria.</p>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* RIGHT: Iframe Form Container */}
          <div id="apply-form" className="w-full lg:w-[450px] xl:w-[500px] shrink-0">
            <div className="sticky top-32">
              <div className="bg-white rounded-[2.5rem] border border-gray-100 overflow-hidden shadow-2xl">
                <div className="bg-gradient-to-br from-[#1a0000] to-[#2a0505] p-8 text-white relative">
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-2 italic">Quick Application</h3>
                    <p className="text-red-100 text-sm leading-relaxed">
                      Start your journey with <span className="font-bold text-white">AGSuite Technologies</span> by filling the form below.
                    </p>
                  </div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                </div>
                <div className="bg-white">
                  <iframe
                    title="AGSuite Zoho Application Form"
                    frameBorder={0}
                    className="w-full min-h-[700px] h-[830px]"
                    src="https://agsuitetech.zohorecruit.in/forms/58f06577622ce45d508407aae11148ceb8899baae51685ee90b1efbe959f4f75"
                    allow="fullscreen"
                  />
                </div>
              </div>

              <div className="mt-8 p-6 rounded-3xl bg-red-50 border border-red-100 flex items-start gap-4 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-red-600 shadow-sm shrink-0">
                  <Send size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Internships?</h4>
                  <p className="text-sm text-gray-600">Send your resume to <span className="font-extrabold text-red-700">hiring@agsuitetech.com</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
style = {{ background: "linear-gradient(135deg, #1a0000, #3a0a0a)" }}
                  >
                    <div className="relative z-10">
                      <h3 className="text-3xl font-bold mb-3 tracking-tight italic">Express Interest</h3>
                      <p className="text-red-200 text-base leading-relaxed font-medium">
                        Start your journey with <span className="font-bold text-white underline decoration-red-500/50">AGSuite Technologies</span>.
                      </p>
                    </div>
                    <div className="absolute top-0 right-0 w-40 h-40 bg-red-500/20 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                  </div >
  <div className="bg-white p-0">
    <iframe
      title="AGSuite Zoho Application Form"
      frameBorder={0}
      className="w-full h-[1500px] rounded-b-[3rem]"
      src="https://agsuitetech.zohorecruit.in/forms/58f06577622ce45d508407aae11148ceb8899baae51685ee90b1efbe959f4f75"
      allow="fullscreen"
      scrolling="no"
    />
  </div>
                </div >

  <div className="mt-8 p-6 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 flex items-start gap-4">
    <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center text-white shadow-sm shrink-0">
      <Send size={18} />
    </div>
    <div>
      <h4 className="font-bold text-white mb-1">Internships?</h4>
      <p className="text-sm text-gray-300">Send your resume to <span className="font-extrabold text-red-400">hiring@agsuitetech.com</span></p>
    </div>
  </div>
              </div >
            </div >

          </div >
        </div >
      </section >
    </div >
  );
}
