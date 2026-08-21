"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const HASH_ALIASES: Record<string, string> = {
  // Best Cloud Based ERP Software Legacy Section Hashes
  "How_Much_Oracle_NetSuite_ERP_Cost": "ERPCost",
  "NetSuite_Unified_Platform": "platform",
  "Grow_Your_Business_with_NetSuite": "businessGrow",
  "Why_NetSuite": "whyNetSuite",
  "Our_Featured_Clients": "hero",
  "Why_you_will_Love_NetSuite": "whyNetSuite",
  "benefits": "benefits",
};

export default function AnchorScrollHandler() {
  const pathname = usePathname();

  useEffect(() => {
    const scrollToId = (targetId: string) => {
      if (!targetId || targetId === "hero" || targetId === "top") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      const element = document.getElementById(targetId);
      if (element) {
        const lenis = (window as any).__lenis;
        if (lenis && typeof lenis.scrollTo === "function") {
          lenis.scrollTo(element, { offset: -80, duration: 0.9, lock: false });
        } else {
          const targetY = element.getBoundingClientRect().top + window.pageYOffset - 80;
          window.scrollTo({ top: targetY, behavior: "smooth" });
        }
      }
    };

    // 1. Handle clicking any link pointing to an anchor #hash
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || !href.includes("#")) return;

      const hashIndex = href.indexOf("#");
      const pathPart = href.substring(0, hashIndex);
      let hashPart = href.substring(hashIndex + 1);

      if (!hashPart) return;

      // Resolve alias if present
      if (HASH_ALIASES[hashPart]) {
        hashPart = HASH_ALIASES[hashPart];
      }

      const currentPath = window.location.pathname;

      if (
        !pathPart ||
        pathPart === currentPath ||
        pathPart === `${currentPath}/` ||
        currentPath.endsWith(pathPart)
      ) {
        const targetElement = document.getElementById(hashPart);
        if (targetElement || hashPart === "hero") {
          e.preventDefault();
          scrollToId(hashPart);
          window.history.pushState(
            null,
            "",
            hashPart === "hero" ? currentPath : `${currentPath}#${hashPart}`
          );
        }
      }
    };

    document.addEventListener("click", handleGlobalClick, true);

    // 2. Handle initial page load with #hash in URL (including legacy aliases)
    if (window.location.hash) {
      const rawId = window.location.hash.substring(1);
      const targetId = HASH_ALIASES[rawId] || rawId;

      if (targetId) {
        // Clean and update the URL bar to the canonical hash
        if (targetId !== rawId) {
          const newUrl =
            targetId === "hero"
              ? window.location.pathname
              : `${window.location.pathname}#${targetId}`;
          window.history.replaceState(null, "", newUrl);
        }

        const timer = setTimeout(() => {
          scrollToId(targetId);
        }, 400);
        return () => clearTimeout(timer);
      }
    }

    return () => {
      document.removeEventListener("click", handleGlobalClick, true);
    };
  }, [pathname]);

  return null;
}
