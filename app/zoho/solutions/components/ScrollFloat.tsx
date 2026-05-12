"use client";

import { useEffect, useMemo, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollFloatProps {
  children: string;
  containerClassName?: string;
  fromColor?: string; // hex e.g. '#111827'
  toColor?: string;   // hex e.g. '#2563eb'
  animationDuration?: number;
  start?: string;
  end?: string;
  scrub?: boolean | number;
}

/** Interpolate between two hex colors at a given 0–1 factor */
function lerpColor(from: string, to: string, t: number): string {
  const parse = (hex: string) => [
    parseInt(hex.slice(1, 3), 16),
    parseInt(hex.slice(3, 5), 16),
    parseInt(hex.slice(5, 7), 16),
  ];
  const a = parse(from);
  const b = parse(to);
  const r = Math.round(a[0] + (b[0] - a[0]) * t);
  const g = Math.round(a[1] + (b[1] - a[1]) * t);
  const bl = Math.round(a[2] + (b[2] - a[2]) * t);
  return `rgb(${r},${g},${bl})`;
}

const ScrollFloat = ({
  children,
  containerClassName = '',
  fromColor = '#111827', // gray-900
  toColor = '#2563eb',   // blue-600
  animationDuration = 1.2,
  start = 'top 85%',
  end = 'bottom 40%',
  scrub = 1.5,
}: ScrollFloatProps) => {
  const containerRef = useRef<HTMLHeadingElement>(null);

  const splitText = useMemo(() => {
    const total = children.length;
    return children.split('').map((char, index) => (
      <span
        className="char inline-block"
        key={index}
        style={{
          color: lerpColor(fromColor, toColor, total > 1 ? index / (total - 1) : 0),
        }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  }, [children, fromColor, toColor]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const chars = el.querySelectorAll('.char');

    const ctx = gsap.context(() => {
      // Never animate opacity — color is always visible, only transform & blur change
      gsap.fromTo(
        chars,
        {
          y: 50,
          rotateX: -45,
          filter: 'blur(12px)',
          transformOrigin: '50% 0%',
        },
        {
          y: 0,
          rotateX: 0,
          filter: 'blur(0px)',
          stagger: { each: 0.03, from: 'start' },
          duration: animationDuration,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start,
            end,
            scrub,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [animationDuration, end, start, scrub]);

  return (
    <h3
      ref={containerRef}
      className={`relative overflow-hidden ${containerClassName}`}
      style={{ perspective: '800px', perspectiveOrigin: '50% 50%' }}
    >
      <span style={{ display: 'flex', flexWrap: 'wrap', lineHeight: 'inherit' }}>
        {splitText}
      </span>
    </h3>
  );
};

export default ScrollFloat;




