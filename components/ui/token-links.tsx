"use client";

import { Copy, Check, Twitter, ExternalLink } from "lucide-react";
import { useState } from "react";

export function TokenLinks() {
    return (
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Twitter / X Button */}
            <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-lg bg-black border-2 border-red-800 px-8 font-bold text-white uppercase tracking-wider duration-300 hover:border-red-500 hover:shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:scale-105 transition-all"
            >
                <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-700 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                    <div className="relative h-full w-10 bg-red-600/30" />
                </div>
                <Twitter className="mr-3 h-5 w-5 text-red-500" />
                <span className="text-sm">Twitter / X</span>
            </a>

            {/* Dexscreener Button */}
            <a
                href="https://dexscreener.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-lg bg-black border-2 border-red-800 px-8 font-bold text-white uppercase tracking-wider duration-300 hover:border-red-500 hover:shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:scale-105 transition-all"
            >
                <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-700 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                    <div className="relative h-full w-10 bg-red-600/30" />
                </div>
                <ExternalLink className="mr-3 h-5 w-5 text-red-500" />
                <span className="text-sm">Dexscreener</span>
            </a>
        </div>
    );
}

export function ContractAddress({ address = "0x0000000000000000000000000000000000000000" }: { address?: string }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(address);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="relative w-full max-w-lg mx-auto">
            {/* Label */}
            <p className="text-xs text-neutral-500 uppercase tracking-widest mb-2 text-center font-mono">
                Contract Address
            </p>

            {/* Address box */}
            <button
                onClick={handleCopy}
                className="group w-full p-[2px] rounded-xl bg-gradient-to-r from-red-900 via-red-600 to-red-900 hover:from-red-700 hover:via-red-500 hover:to-red-700 transition-all duration-300 cursor-pointer"
            >
                <div className="flex items-center justify-between gap-3 rounded-[10px] bg-black px-4 py-3">
                    <code className="text-xs sm:text-sm font-mono truncate text-neutral-400 group-hover:text-white transition-colors">
                        {address}
                    </code>
                    <div className="flex items-center gap-2 shrink-0">
                        {copied ? (
                            <span className="text-xs text-green-400 font-mono animate-pulse">Copied!</span>
                        ) : (
                            <span className="text-xs text-neutral-600 group-hover:text-neutral-400 transition-colors font-mono hidden sm:inline">
                                Click to copy
                            </span>
                        )}
                        {copied ? (
                            <Check className="h-4 w-4 text-green-400" />
                        ) : (
                            <Copy className="h-4 w-4 text-neutral-600 group-hover:text-red-500 transition-colors" />
                        )}
                    </div>
                </div>
            </button>
        </div>
    );
}
