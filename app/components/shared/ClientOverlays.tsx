"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const ScrollToTopButton = dynamic(
    () => import('./ScrollToTopButton'),
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

const AnchorScrollHandler = dynamic(
    () => import('./AnchorScrollHandler'),
    { ssr: false }
);

const CookieConsentBanner = dynamic(
    () => import('./CookieConsentBanner'),
    { ssr: false }
);

export default function ClientOverlays() {
    const pathname = usePathname();
    const isStudio = pathname?.includes('/studio');
    const isHome = pathname === '/';
    const [loadHomeConsent, setLoadHomeConsent] = useState(false);

    useEffect(() => {
        if (!isHome) return;

        let idleHandle: number | undefined;
        const revealConsent = () => setLoadHomeConsent(true);
        const timer = window.setTimeout(() => {
            if ('requestIdleCallback' in window) {
                idleHandle = window.requestIdleCallback(revealConsent, { timeout: 1500 });
            } else {
                revealConsent();
            }
        }, 5000);

        const interactionEvents: Array<keyof WindowEventMap> = ['pointerdown', 'keydown', 'touchstart'];
        interactionEvents.forEach((eventName) => {
            window.addEventListener(eventName, revealConsent, { once: true, passive: true });
        });

        return () => {
            window.clearTimeout(timer);
            if (idleHandle !== undefined && 'cancelIdleCallback' in window) {
                window.cancelIdleCallback(idleHandle);
            }
            interactionEvents.forEach((eventName) => window.removeEventListener(eventName, revealConsent));
        };
    }, [isHome]);

    if (isStudio) return null;
    
    if (isHome) {
        return loadHomeConsent ? <CookieConsentBanner /> : null;
    }

    return (
        <>
            <ScrollRestorer />
            <SmoothScroll />
            <AnchorScrollHandler />
            <SocialSidebar />
            <ScrollToTopButton />
            <CookieConsentBanner />
        </>
    );
}
