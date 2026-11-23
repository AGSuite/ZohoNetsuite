"use client";

import { useEffect } from "react";

const GOOGLE_TAG_SCRIPT_ID = "agsuite-google-tag";
const GOOGLE_TAG_LOAD_DELAY_MS = 8000;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export default function DeferredGoogleTag() {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || ((...args: unknown[]) => window.dataLayer?.push(args));

    // Queue the original pageview/config commands immediately. Google processes
    // them in order once the external library is loaded.
    window.gtag("js", new Date());
    window.gtag("config", "G-FWVDJQ8Q2R");
    window.gtag("config", "AW-10876325873");

    let fallbackTimer: number | undefined;
    let idleHandle: number | undefined;
    let hasRequestedScript = false;

    const loadGoogleTag = () => {
      if (hasRequestedScript || document.getElementById(GOOGLE_TAG_SCRIPT_ID)) return;
      hasRequestedScript = true;

      const script = document.createElement("script");
      script.id = GOOGLE_TAG_SCRIPT_ID;
      script.async = true;
      script.src = "https://www.googletagmanager.com/gtag/js?id=G-FWVDJQ8Q2R";
      document.head.appendChild(script);
    };

    const loadOnInteraction = () => loadGoogleTag();
    const interactionEvents: Array<keyof WindowEventMap> = ["pointerdown", "keydown", "touchstart"];
    interactionEvents.forEach((eventName) => {
      window.addEventListener(eventName, loadOnInteraction, { once: true, passive: true });
    });

    const scheduleIdleFallback = () => {
      fallbackTimer = window.setTimeout(() => {
        if (window.requestIdleCallback) {
          idleHandle = window.requestIdleCallback(loadGoogleTag, { timeout: 2000 });
        } else {
          loadGoogleTag();
        }
      }, GOOGLE_TAG_LOAD_DELAY_MS);
    };

    if (document.readyState === "complete") {
      scheduleIdleFallback();
    } else {
      window.addEventListener("load", scheduleIdleFallback, { once: true });
    }

    return () => {
      interactionEvents.forEach((eventName) => {
        window.removeEventListener(eventName, loadOnInteraction);
      });
      window.removeEventListener("load", scheduleIdleFallback);
      if (fallbackTimer !== undefined) window.clearTimeout(fallbackTimer);
      if (idleHandle !== undefined && window.cancelIdleCallback) window.cancelIdleCallback(idleHandle);
    };
  }, []);

  return null;
}
