'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * ScrollRestorer — scrolls the page to the very top on every route change.
 * Works with both native scroll and Lenis smooth scroll.
 */
export default function ScrollRestorer() {
  const pathname = usePathname();

  useEffect(() => {
    // Small tick to let Next.js finish rendering the new page before scrolling
    const id = setTimeout(() => {
      // If Lenis is attached to the window, use it so the scroll
      // respects the smooth-scroll engine and doesn't fight it.
      const lenis = (window as any).__lenis;
      if (lenis && typeof lenis.scrollTo === 'function') {
        lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      }
    }, 0);

    return () => clearTimeout(id);
  }, [pathname]);

  return null;
}
