"use client";

import React from 'react';
import dynamic from 'next/dynamic';

const ZohoServices = dynamic(() => import('../zoho/components/ZohoServices'), { ssr: false });
const NSServices = dynamic(() => import('../netsuite/components/NSServices'), { ssr: false });

interface ServiceExploreSectionProps {
  theme: 'zoho' | 'netsuite';
}

export default function ServiceExploreSection({ theme }: ServiceExploreSectionProps) {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-6 pt-20 -mb-20 text-center relative z-20">
         <h2 className={`${theme === 'netsuite' ? 'text-blue-600' : 'text-red-600'} font-bold uppercase tracking-wider text-sm mb-4`}>
           Explore More
         </h2>
         <h3 className="text-4xl md:text-5xl font-black text-gray-900">
           Our Comprehensive {theme === 'netsuite' ? 'NetSuite' : 'Zoho'} Services
         </h3>
      </div>
      {theme === 'netsuite' ? <NSServices /> : <ZohoServices />}
    </div>
  );
}
