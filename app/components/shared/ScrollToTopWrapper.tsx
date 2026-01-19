"use client";

import dynamic from "next/dynamic";

// Dynamically import ScrollToTopButton (client-side only)
const ScrollToTopButton = dynamic(
    () => import('./ScrollToTopButton'),
    { ssr: false }
);

export default function ScrollToTopWrapper() {
    return <ScrollToTopButton />;
}
