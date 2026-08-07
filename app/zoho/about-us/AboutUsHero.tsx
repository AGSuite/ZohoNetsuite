"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { Pause, Play } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function AboutUsHero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [videoSrc, setVideoSrc] = useState("/images/videos/vidosaboutus/zoho%20Aboutus%20Hero.mp4");
  const heroRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], [0, 64]);
  const padding = useTransform(scrollYProgress, [0, 1], ["0px", "80px"]);

  // Detect screen width and switch video for mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setVideoSrc("/images/videos/vidosaboutus/zoho%20mobile%20videoaboutus.mp4");
      } else {
        setVideoSrc("/images/videos/vidosaboutus/zoho%20Aboutus%20Hero.mp4");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const togglePlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying((prev) => !prev);
  }, [isPlaying]);

  return (
    <section
      ref={heroRef}
      className="relative w-full h-[120vh] mt-0 isolate bg-white"
      aria-labelledby="hero-title"
      role="banner"
    >
      {/* Background Video Container */}
      <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center translate-z-0">
        <motion.div
          style={!isMobile ? {
            scale,
            borderRadius,
            padding,
          } : {}}
          className="relative w-full h-full overflow-hidden z-0 flex items-center justify-center bg-white"
        >
          <video
            key={videoSrc}
            ref={videoRef}
            className="w-full h-full object-cover shadow-2xl"
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            poster="/images/aboutus/aboutusbg.webp"
            style={{ borderRadius: "inherit" }}
          />

          {/* Radial Glow Effect */}
          <div
            className="pointer-events-none absolute -bottom-10 left-0 right-0 h-48 z-1"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(60% 60% at 30% 100%, rgba(37,99,235,0.25), transparent 70%)",
            }}
          />

          {/* Play / Pause Button */}
          <button
            type="button"
            onClick={togglePlay}
            className="absolute bottom-10 right-10 z-20 p-3 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all duration-300"
            aria-label={isPlaying ? "Pause video" : "Play video"}
            suppressHydrationWarning={true}
          >
            {isPlaying ? (
              <Pause className="w-6 h-6 text-white" />
            ) : (
              <Play className="w-6 h-6 text-white" />
            )}
          </button>
        </motion.div>
      </div>

      {/* Content (optional) */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white pointer-events-none">
        <h1 id="hero-title" className="sr-only">
          About AGSuite Technologies
        </h1>
      </div>
    </section>
  );
}
