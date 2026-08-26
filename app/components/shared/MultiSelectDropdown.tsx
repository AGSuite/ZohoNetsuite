"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";

interface MultiSelectDropdownProps {
  id: string;
  name: string;
  options: string[];
  placeholder?: string;
  required?: boolean;
  className?: string;
  bgClassName?: string;
  textColorClassName?: string;
  darkMenu?: boolean;
}

export default function MultiSelectDropdown({
  id,
  name,
  options,
  placeholder = "-Select Services-",
  required = true,
  className = "",
  bgClassName = "bg-slate-50 border border-slate-200 focus:border-blue-600",
  textColorClassName = "text-slate-900",
  darkMenu = false
}: MultiSelectDropdownProps) {
  const [selected, setSelected] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const selectRef = useRef<HTMLSelectElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleOption = (opt: string) => {
    let next: string[];
    if (selected.includes(opt)) {
      next = selected.filter((item) => item !== opt);
    } else {
      next = [...selected, opt];
    }
    setSelected(next);

    // Sync with hidden select element so FormData & checkMandatory validation work
    if (selectRef.current) {
      Array.from(selectRef.current.options).forEach((option) => {
        option.selected = next.includes(option.value);
      });
      selectRef.current.dispatchEvent(new Event("change", { bubbles: true }));
    }
  };

  const displayText =
    selected.length === 0
      ? placeholder
      : selected.join(", ");

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Hidden native select for form submit / validation */}
      <select
        ref={selectRef}
        id={id}
        name={name}
        multiple
        required={required}
        value={selected}
        onChange={() => {}}
        className="sr-only opacity-0 absolute w-0 h-0 pointer-events-none"
        tabIndex={-1}
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>

      {/* Dropdown Button (Looks like original single-line dropdown) */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full text-left flex items-center justify-between transition-all rounded-xl ${
          className.includes("px-") ? "" : "px-4"
        } ${className.includes("py-") ? "" : "py-3.5"} ${
          className.includes("text-") ? "" : "text-sm"
        } cursor-pointer ${bgClassName} ${
          selected.length === 0 ? "text-gray-400" : textColorClassName
        } ${className}`}
      >
        <span className="truncate pr-2 font-medium">{displayText}</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 shrink-0 text-gray-400 ${
            isOpen ? "rotate-180 text-blue-600" : ""
          }`}
        />
      </button>

      {/* Floating Dropdown Menu */}
      {isOpen && (
        <>
          <style>{`
            .custom-dropdown-scrollbar::-webkit-scrollbar {
              width: 7px;
            }
            .custom-dropdown-scrollbar::-webkit-scrollbar-track {
              background: ${darkMenu ? 'rgba(255, 255, 255, 0.08)' : '#f1f5f9'};
              border-radius: 8px;
            }
            .custom-dropdown-scrollbar::-webkit-scrollbar-thumb {
              background: ${darkMenu ? '#475569' : '#94a3b8'};
              border-radius: 8px;
            }
            .custom-dropdown-scrollbar::-webkit-scrollbar-thumb:hover {
              background: ${darkMenu ? '#64748b' : '#64748b'};
            }
          `}</style>
          <div
            style={{
              scrollbarWidth: 'thin',
              scrollbarColor: darkMenu ? '#475569 transparent' : '#94a3b8 #f1f5f9',
            }}
            className={`custom-dropdown-scrollbar absolute z-50 left-0 right-0 mt-1 max-h-60 overflow-y-auto rounded-xl border shadow-xl py-1 text-sm ${
              darkMenu
                ? "bg-[#1e232d] border-white/10 text-white"
                : "bg-white border-gray-200 text-gray-800"
            }`}
          >
          {options.map((opt) => {
            const isChecked = selected.includes(opt);
            return (
              <div
                key={opt}
                onClick={() => toggleOption(opt)}
                className={`flex items-center justify-between px-4 py-2.5 cursor-pointer transition-colors ${
                  isChecked
                    ? darkMenu
                      ? "bg-blue-600/30 text-blue-300 font-semibold"
                      : "bg-blue-50 text-blue-700 font-semibold"
                    : darkMenu
                    ? "hover:bg-white/10 text-gray-200"
                    : "hover:bg-gray-50 text-gray-700"
                }`}
              >
                <span>{opt}</span>
                {isChecked && (
                  <Check
                    className={`w-4 h-4 ${
                      darkMenu ? "text-blue-400" : "text-blue-600"
                    }`}
                  />
                )}
              </div>
            );
          })}
        </div>
        </>
      )}
    </div>
  );
}
