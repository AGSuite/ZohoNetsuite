"use client";

import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CodeBlockProps {
    value: {
        code?: string;
        language?: string;
        filename?: string;
    };
}

export default function CodeBlock({ value }: CodeBlockProps) {
    const [copied, setCopied] = useState(false);

    const codeText = value?.code || '';
    const language = value?.language || 'text';
    const filename = value?.filename;

    const handleCopy = async () => {
        if (!codeText) return;
        try {
            await navigator.clipboard.writeText(codeText);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy code: ', err);
        }
    };

    if (!codeText) return null;

    return (
        <div className="my-8 rounded-2xl overflow-hidden border border-slate-800 bg-[#0d1117] shadow-xl text-slate-100 font-mono text-left">
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 sm:px-5 py-3 bg-[#161b22] border-b border-slate-800/80 select-none">
                {/* Window Dots & Filename */}
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block shadow-sm" />
                        <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block shadow-sm" />
                        <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block shadow-sm" />
                    </div>
                    {filename ? (
                        <span className="text-xs text-slate-300 font-medium tracking-wide">
                            {filename}
                        </span>
                    ) : (
                        <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">
                            {language}
                        </span>
                    )}
                </div>

                {/* Language Badge & Copy Button */}
                <div className="flex items-center gap-3">
                    {filename && (
                        <span className="hidden sm:inline-block text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-500/15 text-blue-400 border border-blue-500/30">
                            {language}
                        </span>
                    )}
                    <button
                        type="button"
                        onClick={handleCopy}
                        className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white bg-slate-800/60 hover:bg-slate-700/80 px-3 py-1.5 rounded-lg transition-all active:scale-95 border border-slate-700/60"
                        title="Copy code to clipboard"
                    >
                        {copied ? (
                            <>
                                <Check className="w-3.5 h-3.5 text-emerald-400" />
                                <span className="text-emerald-400 font-semibold text-[11px]">Copied!</span>
                            </>
                        ) : (
                            <>
                                <Copy className="w-3.5 h-3.5" />
                                <span className="font-semibold text-[11px]">Copy</span>
                            </>
                        )}
                    </button>
                </div>
            </div>

            {/* Code Content */}
            <div className="relative p-4 sm:p-6 overflow-x-auto text-[13px] sm:text-sm leading-relaxed text-slate-200 select-text">
                <pre className="font-mono m-0 p-0 whitespace-pre overflow-x-auto">
                    <code>{codeText}</code>
                </pre>
            </div>
        </div>
    );
}
