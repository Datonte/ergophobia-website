"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black">
            {/* Single spinning hypnotic disc */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
                style={{
                    width: "200vmax",
                    height: "200vmax",
                    background: `conic-gradient(
                        #dc2626 0deg, #dc2626 20deg,
                        #000 20deg, #000 40deg,
                        #dc2626 40deg, #dc2626 60deg,
                        #000 60deg, #000 80deg,
                        #dc2626 80deg, #dc2626 100deg,
                        #000 100deg, #000 120deg,
                        #dc2626 120deg, #dc2626 140deg,
                        #000 140deg, #000 160deg,
                        #dc2626 160deg, #dc2626 180deg,
                        #000 180deg, #000 200deg,
                        #dc2626 200deg, #dc2626 220deg,
                        #000 220deg, #000 240deg,
                        #dc2626 240deg, #dc2626 260deg,
                        #000 260deg, #000 280deg,
                        #dc2626 280deg, #dc2626 300deg,
                        #000 300deg, #000 320deg,
                        #dc2626 320deg, #dc2626 340deg,
                        #000 340deg, #000 360deg
                    )`,
                }}
            />

            {/* Vignette — stronger to make center text readable */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.6)_0%,rgba(0,0,0,0.85)_60%,rgba(0,0,0,0.95)_100%)] pointer-events-none z-[1]" />

            {/* Center content — all on a dark backdrop for readability */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
                {/* Logo */}
                <motion.div
                    initial={{ scale: 0.3, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                    className="mb-8"
                >
                    <div
                        className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-red-600/60 shadow-[0_0_80px_rgba(220,38,38,0.5)]"
                        style={{ animation: "float 6s ease-in-out infinite" }}
                    >
                        <Image src="/logo.jpg" alt="Ergophobia Logo" fill className="object-cover" priority />
                    </div>
                </motion.div>

                {/* Title — ERGOPHOBIA */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                    className="text-5xl sm:text-7xl md:text-9xl font-black tracking-tighter uppercase leading-none"
                >
                    <span className="text-red-600 drop-shadow-[0_0_40px_rgba(220,38,38,0.6)] [text-shadow:_0_0_40px_rgba(220,38,38,0.4),_0_4px_20px_rgba(0,0,0,1)]">
                        ERGOPHOBIA
                    </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 1 }}
                    className="mt-3 text-lg sm:text-2xl md:text-3xl font-bold tracking-widest uppercase text-white [text-shadow:_0_0_20px_rgba(0,0,0,1),_0_2px_10px_rgba(0,0,0,1)]"
                >
                    Fear of Work
                </motion.p>

                {/* Tagline */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="mt-4 text-xs sm:text-sm md:text-base text-neutral-400 font-light tracking-[0.3em] uppercase font-mono [text-shadow:_0_0_15px_rgba(0,0,0,1),_0_2px_8px_rgba(0,0,0,1)]"
                >
                    System Error: Productivity Not Found
                </motion.p>
            </div>

            {/* Bottom gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none z-[3]" />
        </section>
    );
}
