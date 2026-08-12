'use client';

import { useEffect } from 'react';

export default function SmoothScroll() {
  useEffect(() => {
    // 1. Respect user preference for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // 2. Skip on touch-primary mobile devices to preserve 100% native 120Hz mobile hardware scrolling
    const isTouchOnly = window.matchMedia('(pointer: coarse)').matches && window.innerWidth < 768;
    if (isTouchOnly) return;

    let lenisInstance: any = null;
    let animationFrameId: number | null = null;

    // Dynamically import Lenis to prevent initial bundle bloat & maintain top Lighthouse score
    import('lenis').then(({ default: Lenis }) => {
      lenisInstance = new Lenis({
        duration: 1.1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 0.85,
        touchMultiplier: 1.0,
        infinite: false,
      });

      // Expose instance so ScrollRestorer can call lenis.scrollTo(0) on route change
      (window as any).__lenis = lenisInstance;

      function raf(time: number) {
        if (lenisInstance) {
          lenisInstance.raf(time);
          animationFrameId = requestAnimationFrame(raf);
        }
      }

      animationFrameId = requestAnimationFrame(raf);

      // Pause animation loop when tab is hidden to conserve system resources
      const handleVisibility = () => {
        if (document.hidden && animationFrameId) {
          cancelAnimationFrame(animationFrameId);
          animationFrameId = null;
        } else if (!document.hidden && lenisInstance && !animationFrameId) {
          animationFrameId = requestAnimationFrame(raf);
        }
      };

      document.addEventListener('visibilitychange', handleVisibility);
    });

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      if (lenisInstance) {
        lenisInstance.destroy();
        (window as any).__lenis = null;
      }
    };
  }, []);

  return null;
}
