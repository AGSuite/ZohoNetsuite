"use client";

import React from "react";
import { motion } from "framer-motion";

// ─── India Compliance Circular Diagram Constants ──────────────────────────
const ORBIT_ITEMS = [
  { label: "GST",       angle: 0   },
  { label: "TDS",       angle: 45  },
  { label: "E-Invoice", angle: 90  },
  { label: "E-Way Bill",angle: 135 },
  { label: "GSTR",      angle: 180 },
  { label: "TCS",       angle: 225 },
  { label: "ITC",       angle: 270 },
  { label: "HSN/SAC",   angle: 315 },
];

const INNER_SEGMENTS = [
  { label: "GST\nAutomation",    angle: -90  },
  { label: "E-Invoice\n(IRP)",   angle: -30  },
  { label: "TDS / TCS",          angle: 30   },
  { label: "E-Way Bill",         angle: 90   },
  { label: "GSTR\nReports",      angle: 150  },
  { label: "ITC\nManagement",    angle: 210  },
];

export default function IndiaComplianceCircle() {
  const CX = 260; // SVG centre x
  const CY = 260; // SVG centre y
  const HUB_R = 90;          // dark centre circle - slightly larger to hold more text
  const INNER_RING_OUTER_R = 190; // larger ring
  const INNER_RING_INNER_R = 105; // slightly smaller inner for thicker ring

  // Generate a donut-segment arc path
  function arcPath(innerR: number, outerR: number, startDeg: number, endDeg: number) {
    const toRad = (d: number) => (d * Math.PI) / 180;
    const s = toRad(startDeg), e = toRad(endDeg);
    const x1 = CX + outerR * Math.cos(s), y1 = CY + outerR * Math.sin(s);
    const x2 = CX + outerR * Math.cos(e), y2 = CY + outerR * Math.sin(e);
    const x3 = CX + innerR * Math.cos(e), y3 = CY + innerR * Math.sin(e);
    const x4 = CX + innerR * Math.cos(s), y4 = CY + innerR * Math.sin(s);
    const large = endDeg - startDeg > 180 ? 1 : 0;
    return `M${x1},${y1} A${outerR},${outerR} 0 ${large},1 ${x2},${y2} L${x3},${y3} A${innerR},${innerR} 0 ${large},0 ${x4},${y4} Z`;
  }

  return (
    <div className="relative w-[480px] h-[480px] flex items-center justify-center select-none">
      {/* ── SVG base ── */}
      <svg
        viewBox="0 0 520 520"
        className="absolute inset-0 w-full h-full pointer-events-none"
      >
        <defs>
          {/* Hub gradient — dark navy */}
          <radialGradient id="il-hubGrad" cx="50%" cy="40%" r="60%">
            <stop offset="0%"   stopColor="#1e40af" />
            <stop offset="100%" stopColor="#0a1f5c" />
          </radialGradient>
          {/* Inner ring gradient — solid white / very light gray */}
          <linearGradient id="il-ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor="#ffffff" />
            <stop offset="100%" stopColor="#f8fafc" />
          </linearGradient>
          {/* Glow filter */}
          <filter id="il-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="6" />
            <feOffset dx="0" dy="2" result="blur" />
            <feFlood floodColor="#3b82f6" floodOpacity="0.35" />
            <feComposite in2="blur" operator="in" />
            <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="il-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="3" stdDeviation="5" floodOpacity="0.18" />
          </filter>
        </defs>

        {/* ── Outer dotted orbit ring ── */}
        <circle
          cx={CX} cy={CY} r="245"
          fill="none"
          stroke="#93c5fd"
          strokeWidth="1"
          strokeDasharray="4 8"
          opacity="0.3"
        />

        {/* ── Inner white donut ring with 6 segments ── */}
        {INNER_SEGMENTS.map((seg, i) => {
          const gap = 4; // degrees gap between segments
          const segSpan = 60;
          const half = segSpan / 2 - gap / 2;
          const start = seg.angle - half;
          const end = seg.angle + half;
          return (
            <path
              key={i}
              d={arcPath(INNER_RING_INNER_R, INNER_RING_OUTER_R, start, end)}
              fill="url(#il-ringGrad)"
              stroke="#e2e8f0"
              strokeWidth="1.5"
              filter="url(#il-shadow)"
            />
          );
        })}

        {/* ── Segment divider lines (spokes) ── */}
        {INNER_SEGMENTS.map((seg, i) => {
          const rad = ((seg.angle - 30) * Math.PI) / 180;
          return (
            <line
              key={i}
              x1={CX + INNER_RING_INNER_R * Math.cos(rad)}
              y1={CY + INNER_RING_INNER_R * Math.sin(rad)}
              x2={CX + (INNER_RING_OUTER_R + 2) * Math.cos(rad)}
              y2={CY + (INNER_RING_OUTER_R + 2) * Math.sin(rad)}
              stroke="#cbd5e1"
              strokeWidth="1"
              opacity="0.4"
            />
          );
        })}

        {/* ── Inner ring text labels ── */}
        {INNER_SEGMENTS.map((seg, i) => {
          const rad = (seg.angle * Math.PI) / 180;
          const r = (INNER_RING_INNER_R + INNER_RING_OUTER_R) / 2;
          const x = CX + r * Math.cos(rad);
          const y = CY + r * Math.sin(rad);
          const lines = seg.label.split("\n");
          return (
            <text
              key={i}
              x={x} y={y - (lines.length > 1 ? 7 : 0)}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="10"
              fontWeight="700"
              fill="#1e3a8a"
              letterSpacing="0.3"
              style={{ textTransform: "uppercase" }}
            >
              {lines.map((ln, li) => (
                <tspan key={li} x={x} dy={li === 0 ? 0 : 13}>{ln}</tspan>
              ))}
            </text>
          );
        })}

        {/* ── Centre hub ── */}
        <circle
          cx={CX} cy={CY} r={HUB_R}
          fill="url(#il-hubGrad)"
          stroke="#3b82f6"
          strokeWidth="2"
          filter="url(#il-glow)"
        />
        
        {/* Centre Text: NetSuite India Localization */}
        <text 
          x={CX} y={CY} 
          textAnchor="middle" 
          dominantBaseline="middle" 
          fontWeight="900" 
          className="fill-white"
          style={{ fontSize: '12px', letterSpacing: '0.8px' }}
        >
          <tspan x={CX} dy="-1.3em" fontSize="13">NETSUITE</tspan>
          <tspan x={CX} dy="1.4em" fill="#93c5fd">INDIA</tspan>
          <tspan x={CX} dy="1.4em" fill="#93c5fd">LOCALIZATION</tspan>
        </text>
      </svg>

      {/* ── Slowly rotating orbit of 8 pill badges ── */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
      >
        {ORBIT_ITEMS.map((item, i) => {
          const rad = (item.angle * Math.PI) / 180;
          const r = 245; // slightly further out
          // Position relative to centre of our 480px div
          const cx = 240;
          const cy = 240;
          const x = cx + r * (480 / 520) * Math.cos(rad);
          const y = cy + r * (480 / 520) * Math.sin(rad);
          return (
            <motion.div
              key={i}
              className="absolute"
              style={{ left: x, top: y, translateX: "-50%", translateY: "-50%" }}
              // Counter-rotate each pill so text stays upright
              animate={{ rotate: -360 }}
              transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
            >
              <div
                className="whitespace-nowrap px-4 py-2 rounded-xl text-[11px] font-extrabold tracking-wide shadow-2xl border transition-colors"
                style={{
                  background: "#ffffff",
                  borderColor: "#3b82f6",
                  color: "#1e40af",
                  boxShadow: "0 10px 15px -3px rgba(37, 99, 235, 0.2)"
                }}
              >
                {item.label}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
