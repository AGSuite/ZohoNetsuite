"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";

const ScrollToTopButton = dynamic(
    () => import('./ScrollToTopButton'),
    { ssr: false }
);

const CursorFollower = dynamic(
    () => import('./CursorFollower'),
    { ssr: false }
);

const SocialSidebar = dynamic(
    () => import('./SocialSidebar'),
    { ssr: false }
);

const SmoothScroll = dynamic(
    () => import('./SmoothScroll'),
    { ssr: false }
);

const ScrollRestorer = dynamic(
    () => import('./ScrollRestorer'),
    { ssr: false }
);

export default function ClientOverlays() {
    const pathname = usePathname();
    const isStudio = pathname?.includes('/studio');

    if (isStudio) return null;

    return (
        <>
            <ScrollRestorer />
            <SmoothScroll />
            <SocialSidebar />
            <ScrollToTopButton />
        </>
    );
}
