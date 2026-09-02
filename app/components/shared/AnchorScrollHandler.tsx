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
  // Contact & Footer Form aliases
  "contact": "contact-form",
  "contact-us": "contact-form",
  "contact_us": "contact-form",
  "contactform": "contact-form",
  "footer-form": "contact-form",
  "footer_form": "contact-form",
  "get-in-touch": "contact-form",
  "get_in_touch": "contact-form",
  "quote": "contact-form",
  "demo": "contact-form",
  "request-quote": "contact-form",
  "book-demo": "contact-form",
};

export default function AnchorScrollHandler() {
  const pathname = usePathname();

  useEffect(() => {
    // Find target element with fallback resolution for contact forms
    const findTargetElement = (targetId: string): HTMLElement | null => {
      if (!targetId) return null;

      // 1. Direct ID match
      let elem = document.getElementById(targetId);
      if (elem) return elem;

      // 2. Resolved alias match
      const resolvedId = HASH_ALIASES[targetId];
      if (resolvedId) {
        elem = document.getElementById(resolvedId);
        if (elem) return elem;
      }

      // 3. Smart fallback if looking for contact/footer form
      const isContactQuery = [
        "contact",
        "contact-us",
        "contact-form",
        "footer-form",
        "footer_form",
        "get-in-touch",
        "quote",
        "demo",
      ].includes(targetId.toLowerCase());

      if (isContactQuery) {
        elem =
          document.getElementById("contact-form") ||
          document.getElementById("contact-us") ||
          document.getElementById("contact") ||
          document.getElementById("footer-form") ||
          (document.querySelector("section[id*='contact']") as HTMLElement) ||
          (document.querySelector("#crmWebToEntityForm") as HTMLElement);
        if (elem) return elem;
      }

      return null;
    };

    const scrollToId = (targetId: string) => {
      if (!targetId || targetId === "hero" || targetId === "top") {
        const lenis = (window as any).__lenis;
        if (lenis && typeof lenis.scrollTo === "function") {
          lenis.scrollTo(0, { duration: 0.8 });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
        return;
      }

      const executeScroll = (isFollowUp = false) => {
        const element = findTargetElement(targetId);
        if (!element) return;

        const navbarHeight = 75;
        const elemRect = element.getBoundingClientRect();
        const currentScrollY = window.pageYOffset || document.documentElement.scrollTop;
        const targetY = currentScrollY + elemRect.top - navbarHeight - 5;

        const lenis = (window as any).__lenis;
        if (lenis && typeof lenis.scrollTo === "function") {
          lenis.scrollTo(targetY, {
            duration: isFollowUp ? 0.4 : 0.8,
            lock: false,
            immediate: isFollowUp,
          });
        } else {
          window.scrollTo({
            top: Math.max(0, targetY),
            behavior: isFollowUp ? "auto" : "smooth",
          });
        }
      };

      // Initial scroll pass
      executeScroll(false);

      // Subsequent recalibration passes to adjust as LazySection / dynamic components expand DOM
      setTimeout(() => executeScroll(false), 200);
      setTimeout(() => executeScroll(true), 450);
      setTimeout(() => executeScroll(true), 800);
      setTimeout(() => executeScroll(true), 1200);
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

      const currentPath = window.location.pathname;

      if (
        !pathPart ||
        pathPart === currentPath ||
        pathPart === `${currentPath}/` ||
        currentPath.endsWith(pathPart) ||
        (currentPath === "/" && (pathPart === "" || pathPart === "/"))
      ) {
        e.preventDefault();
        e.stopPropagation();
        scrollToId(hashPart);
        window.history.pushState(
          null,
          "",
          hashPart === "hero" ? currentPath : `${currentPath}#${hashPart}`
        );
      }
    };

    const handleHashChange = () => {
      if (window.location.hash) {
        const rawId = window.location.hash.substring(1);
        if (rawId) {
          scrollToId(rawId);
        }
      }
    };

    document.addEventListener("click", handleGlobalClick, true);
    window.addEventListener("hashchange", handleHashChange);

    // 2. Handle initial page load with #hash in URL
    if (window.location.hash) {
      const rawId = window.location.hash.substring(1);
      if (rawId) {
        const timer = setTimeout(() => {
          scrollToId(rawId);
        }, 300);
        return () => {
          clearTimeout(timer);
          document.removeEventListener("click", handleGlobalClick, true);
          window.removeEventListener("hashchange", handleHashChange);
        };
      }
    }

    return () => {
      document.removeEventListener("click", handleGlobalClick, true);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [pathname]);

  return null;
}
