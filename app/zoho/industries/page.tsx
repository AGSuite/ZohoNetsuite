"use client";

import React from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";


const ZohoIndustriesClient = dynamic(() => import("./components/ZohoIndustriesClient"), {
  loading: () => <div className="min-h-screen bg-white animate-pulse" />
});

export default function IndustriesPage() {
  return <ZohoIndustriesClient />;
}




