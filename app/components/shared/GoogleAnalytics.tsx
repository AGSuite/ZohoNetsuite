"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";

export default function GoogleAnalytics() {
  const pathname = usePathname();

  // Exclude Google Analytics (G-FWVDJQ8Q2R) from the Best Cloud-Based ERP landing page
  if (pathname?.startsWith("/best-cloud-based-erp-software")) {
    return null;
  }

  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-FWVDJQ8Q2R"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-FWVDJQ8Q2R');
        `}
      </Script>
    </>
  );
}
