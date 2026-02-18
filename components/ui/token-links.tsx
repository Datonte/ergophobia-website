"use client";

import { motion } from "framer-motion";
import { Copy, Check, Twitter, ExternalLink } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function TokenLinks() {
    return (
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-black border border-neutral-800 px-6 font-medium text-red-500 duration-300 hover:w-40 hover:bg-neutral-900 hover:border-red-600"
            >
                <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                    <div className="relative h-full w-8 bg-white/20" />
                </div>
                <Twitter className="mr-2 h-4 w-4" />
                <span className="text-sm">Twitter</span>
            </a>

            <a
                href="https://dexscreener.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-black border border-neutral-800 px-6 font-medium text-red-500 duration-300 hover:bg-neutral-900 hover:border-red-600"
            >
                <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                    <div className="relative h-full w-8 bg-white/20" />
                </div>
                <ExternalLink className="mr-2 h-4 w-4" />
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
        <div className="relative mt-6 max-w-md w-full mx-auto p-0.5 rounded-xl bg-gradient-to-r from-red-800 via-neutral-600 to-red-800">
            <div className="flex items-center justify-between gap-4 rounded-[10px] bg-black px-4 py-3 text-white">
                <code className="tex-sm sm:text-base font-mono truncate text-neutral-400">
                    {address}
                </code>
                <button
                    onClick={handleCopy}
                    className="flex h-8 w-8 items-center justify-center rounded-md border border-neutral-700 bg-neutral-800 text-neutral-400 hover:bg-neutral-700 hover:text-white transition-colors"
                    aria-label="Copy address"
                >
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </button>
            </div>
        </div>
    );
}
