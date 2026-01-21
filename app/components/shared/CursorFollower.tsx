"use client";

import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorFollower() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 300 };
    const smoothMouseX = useSpring(mouseX, springConfig);
    const smoothMouseY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            mouseX.set(event.clientX);
            mouseY.set(event.clientY);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <motion.div
            className="fixed top-0 left-0 w-4 h-4 rounded-full border border-blue-500/40 pointer-events-none z-[9999] hidden lg:block"
            style={{
                x: smoothMouseX,
                y: smoothMouseY,
                translateX: "-50%",
                translateY: "-50%",
            }}
        >
            <div className="absolute inset-0 rounded-full bg-blue-500/5 backdrop-blur-[1px]" />
        </motion.div>
    );
}
