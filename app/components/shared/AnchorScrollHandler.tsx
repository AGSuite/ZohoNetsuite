"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function AnchorScrollHandler() {
  const pathname = usePathname();

  useEffect(() => {
    const scrollToId = (targetId: string) => {
      const element = document.getElementById(targetId);
      if (element) {
        const lenis = (window as any).__lenis;
        if (lenis && typeof lenis.scrollTo === "function") {
          lenis.scrollTo(element, { offset: -80, duration: 1.2 });
        } else {
          element.scrollIntoView({ behavior: "smooth" });
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
      const hashPart = href.substring(hashIndex + 1);

      if (!hashPart) return;

      const currentPath = window.location.pathname;

      if (
        !pathPart ||
        pathPart === currentPath ||
        pathPart === `${currentPath}/` ||
        currentPath.endsWith(pathPart)
      ) {
        const targetElement = document.getElementById(hashPart);
        if (targetElement) {
          e.preventDefault();
          scrollToId(hashPart);
          window.history.pushState(null, "", `${currentPath}#${hashPart}`);
        }
      }
    };

    document.addEventListener("click", handleGlobalClick, true);

    // 2. Handle initial page load with #hash in URL
    if (window.location.hash) {
      const targetId = window.location.hash.substring(1);
      if (targetId) {
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
