'use client';

import React, { useState, useRef } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Building2, Mail, Navigation, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const geoUrl = "https://unpkg.com/world-atlas@2.0.2/countries-110m.json";

interface Office {
  label: string;
  city: string;
  state: string;
  address: string;
  email: string;
  country: string;
  coordinates: [number, number];
  mapLink: string;
}

const officeData: Record<string, Office[]> = {
  INDIA: [
    { label: 'Pune', city: 'Pune', state: 'Maharashtra', country: 'INDIA', address: "Office No. 1110, 11th floor, Gera's Imperium Rise, Hinjewadi Rajiv Gandhi Infotech Park, Hinjewadi, Pune, Maharashtra, INDIA – 411057", email: 'contact@agsuitetech.com', coordinates: [73.8567, 18.5204], mapLink: "https://maps.google.com/?q=Gera’s+Imperium+Rise+Hinjewadi+Pune" },
    { label: 'Mumbai', city: 'Mumbai', state: 'Maharashtra', country: 'INDIA', address: '3rd Floor, Unit no. 4, Inspire, Main Road, G Block BKC, Bandra Kurla Complex, Mumbai, Maharashtra INDIA – 400051', email: 'contact@agsuitetech.com', coordinates: [72.8777, 19.0760], mapLink: "https://maps.google.com/?q=Inspire+BKC+Mumbai" },
    { label: 'Bangalore', city: 'Bangalore', state: 'Karnataka', country: 'INDIA', address: 'Whitefield, Survey No. 192, Whitefield Main Road, B Narayanapura, Mahadevapura, Bangalore, KA, INDIA – 560001', email: 'contact@agsuitetech.com', coordinates: [77.5946, 12.9716], mapLink: "https://maps.google.com/?q=Whitefield+Main+Road+Bangalore" },
    { label: 'Hyderabad', city: 'Hyderabad', state: 'Telangana', country: 'INDIA', address: '6th Floor, N Heights, Plot No 38, Phase 2 Hitec City, Siddiq Nagar, Hyderabad, Telangana, INDIA – 500081', email: 'contact@agsuitetech.com', coordinates: [78.4867, 17.3850], mapLink: "https://maps.google.com/?q=N+Heights+Hitec+City+Hyderabad" },
    { label: 'Gurugram', city: 'Gurugram', state: 'Haryana', country: 'INDIA', address: '07th Floor, Gate No. 03 & Gate No. 04, Ambience Island, NH 48, Gurugram, Haryana, INDIA – 122002', email: 'contact@agsuitetech.com', coordinates: [77.0266, 28.4595], mapLink: "https://maps.google.com/?q=Ambience+Island+Gurugram" },
    { label: 'Udaipur', city: 'Udaipur', state: 'Rajasthan', country: 'INDIA', address: 'F-18 Subcity Center, Opp. Income Tax Office, Udaipur, Rajasthan INDIA – 313001', email: 'contact@agsuitetech.com', coordinates: [73.7125, 24.5854], mapLink: "https://maps.google.com/?q=Subcity+Center+Udaipur" },
  ],
  USA: [
    { label: 'Fort Myers', city: 'Fort Myers', state: 'Florida', country: 'USA', address: '6421-1 Metro Plantation Road, Fort Myers, FL, US – 33966', email: 'contact@agsuitetech.com', coordinates: [-81.8723, 26.6406], mapLink: "https://maps.google.com/?q=6421-1+Metro+Plantation+Road+Fort+Myers" },
  ],
  UK: [
    { label: 'St Austell', city: 'St Austell', state: 'Cornwall', country: 'UK', address: 'The Old Dairy, Drummers Hill, St Austell, Cornwall, PL26 8XR', email: 'contact@agsuitetech.com', coordinates: [-4.7915, 50.3392], mapLink: "https://maps.google.com/?q=Drummers+Hill+St+Austell" },
  ],
};

const indiaCities = [
  { name: "UDAIPUR", offset: [-70, -40], coords: [73.7125, 24.5854] },
  { name: "GURUGRAM", offset: [40, -40], coords: [77.0266, 28.4595] },
  { name: "MUMBAI", offset: [-80, -10], coords: [72.8777, 19.0760] },
  { name: "BANGALORE", offset: [50, -10], coords: [77.5946, 12.9716] },
  { name: "PUNE", offset: [-50, 20], coords: [73.8567, 18.5204] },
  { name: "HYDERABAD", offset: [50, 20], coords: [78.4867, 17.3850] },
];

const GlobalOfficeMap = () => {
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);
  const [activeOffice, setActiveOffice] = useState<Office | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (office: Office) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveOffice(office);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveOffice(null);
    }, 300); // 300ms delay to allow clicking
  };

  const regions = [
    { name: "UK", color: "#4B89FF", country: "UK", coordinates: [-2, 53] as [number, number] },
    { name: "USA", color: "#10B981", country: "USA", coordinates: [-95, 38] as [number, number] },
    { name: "INDIA", color: "#EF4444", country: "INDIA", coordinates: [78, 21] as [number, number] }
  ];

  return (
    <div className="w-full flex flex-col items-center bg-white py-12">


      {/* Map Section */}
      <div className="relative w-full max-w-7xl aspect-[25/16] mb-8">
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            scale: 140,
            center: [20, 17]
          }}
          className="w-full h-full rounded-3xl border border-gray-100 shadow-2xl bg-gray-50/50"
        >
          <Geographies geography={geoUrl}>
            {({ geographies }: { geographies: any[] }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#d9dde5"
                  stroke="#FFFFFF"
                  strokeWidth={0.5}
                  onMouseEnter={() => {
                    const { name, NAME } = geo.properties;
                    setHoveredCountry(name || NAME || null);
                  }}
                  onMouseMove={(e) => {
                    setMousePos({ x: e.clientX, y: e.clientY });
                  }}
                  onMouseLeave={() => {
                    setHoveredCountry(null);
                  }}
                  style={{
                    default: { outline: "none" },
                    hover: { fill: "#263955", outline: "none" },
                    pressed: { outline: "none" },
                  }}
                />
              ))
            }
          </Geographies>

          {/* Static Name Labels (from reference image) */}
          <Marker coordinates={[-2, 53]}>
            <g
              onMouseEnter={() => handleMouseEnter(officeData.UK[0])}
              onMouseLeave={handleMouseLeave}
              className="cursor-pointer"
            >
              <line x1="0" y1="0" x2="20" y2="-30" stroke="#4B89FF" strokeWidth={1} opacity={0.5} />
              <foreignObject x={10} y={-45} width={50} height={25}>
                <div className="px-2 py-0.5 border border-blue-200 bg-white text-[9px] font-bold text-blue-600 shadow-sm hover:bg-blue-50 transition-colors text-center">UK</div>
              </foreignObject>
            </g>
          </Marker>

          <Marker coordinates={[-95, 38]}>
            <g
              onMouseEnter={() => handleMouseEnter(officeData.USA[0])}
              onMouseLeave={handleMouseLeave}
              className="cursor-pointer"
            >
              <line x1="0" y1="0" x2="30" y2="-30" stroke="#10B981" strokeWidth={1} opacity={0.5} />
              <foreignObject x={20} y={-45} width={50} height={25}>
                <div className="px-2 py-0.5 border border-green-200 bg-white text-[9px] font-bold text-green-600 shadow-sm hover:bg-green-50 transition-colors text-center">USA</div>
              </foreignObject>
            </g>
          </Marker>

          <Marker coordinates={[78, 21]}>
            {indiaCities.map((city) => (
              <g
                key={city.name}
                onMouseEnter={() => {
                  const office = officeData.INDIA.find(o => o.label.toUpperCase() === city.name.toUpperCase());
                  if (office) handleMouseEnter(office);
                }}
                onMouseLeave={handleMouseLeave}
                className="cursor-pointer"
              >
                <foreignObject x={city.offset[0] - 35} y={city.offset[1] - 8} width={70} height={22}>
                  <div className="px-2 py-0.5 border border-red-100 bg-white text-[8px] font-bold text-[#EF4444] tracking-tight shadow-sm text-center hover:bg-red-50 transition-colors">
                    {city.name}
                  </div>
                </foreignObject>
              </g>
            ))}
          </Marker>

          {/* Interactive Markers */}
          {Object.entries(officeData).flatMap(([country, offices]) =>
            offices.map((office, idx) => {
              const region = regions.find(r => r.country === country);
              return (
                <Marker
                  key={`${office.label}-${idx}`}
                  coordinates={office.coordinates}
                  onMouseEnter={() => handleMouseEnter(office)}
                  onMouseLeave={handleMouseLeave}
                >
                  <g className="cursor-pointer group">
                    <motion.circle
                      r={country === "INDIA" ? 10 : 18}
                      fill={region?.color}
                      initial={{ scale: 1, opacity: 0.2 }}
                      animate={{ scale: [1, 1.8, 1], opacity: [0.2, 0, 0.2] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    <circle
                      r={country === "INDIA" ? 5 : 8}
                      fill={region?.color}
                      stroke="#FFFFFF"
                      strokeWidth={2}
                    />
                  </g>
                </Marker>
              );
            })
          )}

          {/* Popup Card on Map */}
          <AnimatePresence>
            {activeOffice && (
              <Marker coordinates={activeOffice.coordinates}>
                <foreignObject x={15} y={-140} width={240} height={160}>
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.9 }}
                    onMouseEnter={() => { if (timeoutRef.current) clearTimeout(timeoutRef.current); }}
                    onMouseLeave={handleMouseLeave}
                    className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 font-sans pointer-events-auto"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                        <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">{activeOffice.country}</span>
                      </div>
                      <Link href={activeOffice.mapLink} target="_blank">
                        <Navigation className="w-3.5 h-3.5 text-blue-600 hover:scale-110 transition-transform" />
                      </Link>
                    </div>
                    <h4 className="text-sm font-black text-gray-900 mb-1 leading-tight">{activeOffice.label} Office</h4>
                    <p className="text-[10px] text-gray-500 mb-4 line-clamp-3 leading-relaxed font-medium">
                      {activeOffice.address}
                    </p>
                    <div className="flex gap-2">
                      <Link
                        href="/netsuite/contact"
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-[10px] font-bold py-1.5 rounded-xl text-center shadow-lg shadow-blue-100 transition-all flex items-center justify-center gap-2"
                      >
                        Contact Us <ArrowUpRight className="w-2.5 h-2.5" />
                      </Link>
                      <Link
                        href={activeOffice.mapLink}
                        target="_blank"
                        className="flex-1 bg-gray-50 hover:bg-gray-100 text-gray-700 text-[10px] font-bold py-1.5 rounded-xl text-center transition-all border border-gray-200"
                      >
                        View Map
                      </Link>
                    </div>
                  </motion.div>
                </foreignObject>
              </Marker>
            )}
          </AnimatePresence>
        </ComposableMap>

        {/* Floating Tooltip for Country Names */}
        <AnimatePresence>
          {hoveredCountry && !activeOffice && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              style={{
                position: 'fixed',
                left: mousePos.x + 15,
                top: mousePos.y + 15,
                pointerEvents: 'none',
                zIndex: 9999,
              }}
              className="bg-gray-900/95 backdrop-blur-md text-white px-4 py-2 rounded-xl text-xs font-bold shadow-2xl border border-white/10"
            >
              {hoveredCountry}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Simplified Legend (only color/country) */}
      <div className="flex items-center justify-center w-full max-w-2xl mt-8">
        <div className="flex items-center gap-12 sm:gap-20">
          {regions.map((region, idx) => (
            <React.Fragment key={region.name}>
              <div className="flex flex-col items-center gap-4">
                <div
                  className="w-4 h-4 rounded-full shadow-lg"
                  style={{ backgroundColor: region.color }}
                />
                <span className="text-[13px] font-bold text-gray-600 tracking-[0.2em]">{region.name}</span>
              </div>
              {idx < regions.length - 1 && (
                <div className="h-10 w-[1px] bg-gray-200 mt-2" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GlobalOfficeMap;
