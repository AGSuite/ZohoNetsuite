"use client";

import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface LazySectionProps {
  children: React.ReactNode;
  height?: string; // placeholder height to prevent CLS
}

export default function LazySection({ children, height = "400px" }: LazySectionProps) {
  const [hasBeenViewed, setHasBeenViewed] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "300px 0px", // trigger 300px before scrolling into view for seamless user experience
  });

  useEffect(() => {
    if (inView) {
      setHasBeenViewed(true);
    }
  }, [inView]);

  return (
    <div ref={ref} style={{ minHeight: !hasBeenViewed ? height : undefined }}>
      {hasBeenViewed ? children : <div className="w-full bg-transparent" style={{ height }} />}
    </div>
  );
}
