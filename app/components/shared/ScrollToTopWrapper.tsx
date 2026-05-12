"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";


// Dynamically import ScrollToTopButton (client-side only)
const ScrollToTopButton = dynamic(
    () => import('./ScrollToTopButton'),
    { ssr: false }
);

export default function ScrollToTopWrapper() {
    const pathname = usePathname();
    const isStudio = pathname.includes('/studio');

    if (isStudio) return null;

    return <ScrollToTopButton />;
}





