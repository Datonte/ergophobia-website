"use client";

import { motion, useScroll, useTransform, useMotionValueEvent, useInView } from "framer-motion";
import { useRef, useState, useEffect, type ReactNode } from "react";

/* ===== SCROLL REVEAL — blur-to-clear fade in ===== */
export function ScrollReveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 60, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            viewport={{ once: true, margin: "-50px" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

/* ===== STAGGERED CHILDREN — each child animates in sequence ===== */
export function StaggerContainer({ children, className }: { children: ReactNode; className?: string }) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.15 } },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 50, scale: 0.95 },
                visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

/* ===== HORIZONTAL SCROLL TEXT — infinite scrolling marquee ===== */
export function ScrollMarquee({ text, className }: { text: string; className?: string }) {
    return (
        <div className={`overflow-hidden whitespace-nowrap ${className}`}>
            <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="inline-flex gap-8"
            >
                {[...Array(8)].map((_, i) => (
                    <span key={i} className="text-6xl sm:text-8xl md:text-[10rem] font-black uppercase tracking-tighter text-neutral-900 select-none">
                        {text}
                    </span>
                ))}
            </motion.div>
        </div>
    );
}

/* ===== TEXT SCRAMBLE — characters scramble then resolve ===== */
export function TextScramble({ text, className }: { text: string; className?: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });
    const [displayText, setDisplayText] = useState("");
    const chars = "!@#$%^&*()_+-=[]{}|;:,.<>?/~`01";

    useEffect(() => {
        if (!isInView) return;

        let frame = 0;
        const totalFrames = text.length * 3;

        const interval = setInterval(() => {
            const progress = frame / totalFrames;
            const resolved = Math.floor(progress * text.length);

            let result = "";
            for (let i = 0; i < text.length; i++) {
                if (text[i] === " ") {
                    result += " ";
                } else if (i < resolved) {
                    result += text[i];
                } else {
                    result += chars[Math.floor(Math.random() * chars.length)];
                }
            }
            setDisplayText(result);
            frame++;

            if (frame > totalFrames) {
                setDisplayText(text);
                clearInterval(interval);
            }
        }, 30);

        return () => clearInterval(interval);
    }, [isInView, text]);

    return (
        <span ref={ref} className={className}>
            {isInView ? displayText : "\u00A0".repeat(text.length)}
        </span>
    );
}

/* ===== PARALLAX SECTION — content moves at different speed ===== */
export function ParallaxSection({ children, className, speed = 0.3 }: { children: ReactNode; className?: string; speed?: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed]);

    return (
        <div ref={ref} className={`relative overflow-hidden ${className}`}>
            <motion.div style={{ y }}>
                {children}
            </motion.div>
        </div>
    );
}

/* ===== SCALE ON SCROLL — grows as you scroll to it ===== */
export function ScaleOnScroll({ children, className }: { children: ReactNode; className?: string }) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center center"],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

    return (
        <motion.div ref={ref} style={{ scale, opacity }} className={className}>
            {children}
        </motion.div>
    );
}

/* ===== GLITCH ON SCROLL — subtle skew distortion ===== */
export function GlitchOnScroll({ children, className }: { children: ReactNode; className?: string }) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const skewX = useTransform(scrollYProgress, [0, 0.5, 1], [0, -2, 0]);

    return (
        <motion.div ref={ref} style={{ skewX }} className={className}>
            {children}
        </motion.div>
    );
}

/* ===== SCROLL PROGRESS BAR — red bar at top of page ===== */
export function ScrollProgressBar() {
    const { scrollYProgress } = useScroll();

    return (
        <motion.div
            style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
            className="fixed top-0 left-0 right-0 h-[3px] bg-red-600 z-[9998]"
        />
    );
}
