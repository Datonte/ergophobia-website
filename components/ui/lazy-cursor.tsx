"use client";

import { useEffect, useRef, useState } from "react";

interface ZParticle {
    id: number;
    x: number;
    y: number;
    size: number;
    opacity: number;
    vx: number;
    vy: number;
    rotation: number;
    life: number;
}

export default function LazyCursor() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mousePos = useRef({ x: -100, y: -100 });
    const lastMousePos = useRef({ x: -100, y: -100 });
    const particles = useRef<ZParticle[]>([]);
    const idCounter = useRef(0);
    const isMoving = useRef(false);
    const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
    const sleepFrame = useRef(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if ("ontouchstart" in window) return;

        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener("resize", resize);

        const handleMouseMove = (e: MouseEvent) => {
            mousePos.current = { x: e.clientX, y: e.clientY };
            if (!isVisible) setIsVisible(true);
            isMoving.current = true;

            // Clear idle timer
            if (idleTimer.current) clearTimeout(idleTimer.current);
            idleTimer.current = setTimeout(() => {
                isMoving.current = false;
            }, 150);

            // Spawn trail Z particles
            const dx = e.clientX - lastMousePos.current.x;
            const dy = e.clientY - lastMousePos.current.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist > 15) {
                particles.current.push({
                    id: idCounter.current++,
                    x: e.clientX,
                    y: e.clientY,
                    size: 12 + Math.random() * 10,
                    opacity: 0.9,
                    vx: (Math.random() - 0.5) * 1.5,
                    vy: -1 - Math.random() * 1.5,
                    rotation: (Math.random() - 0.5) * 30,
                    life: 1,
                });
                lastMousePos.current = { x: e.clientX, y: e.clientY };
            }
        };

        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        // Idle sleep Zzz spawner
        let idleSpawnInterval: ReturnType<typeof setInterval>;
        idleSpawnInterval = setInterval(() => {
            if (!isMoving.current && isVisible) {
                const baseSize = 14;
                const offsets = [
                    { dx: 10, dy: -10, size: baseSize, delay: 0 },
                    { dx: 18, dy: -25, size: baseSize + 4, delay: 0.2 },
                    { dx: 26, dy: -42, size: baseSize + 8, delay: 0.4 },
                ];
                const offset = offsets[sleepFrame.current % 3];
                sleepFrame.current++;

                particles.current.push({
                    id: idCounter.current++,
                    x: mousePos.current.x + offset.dx,
                    y: mousePos.current.y + offset.dy,
                    size: offset.size,
                    opacity: 0.8,
                    vx: 0.3 + Math.random() * 0.3,
                    vy: -0.8 - Math.random() * 0.5,
                    rotation: -10 + Math.random() * 20,
                    life: 1,
                });
            }
        }, 400);

        let animId: number;
        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            if (!isVisible) {
                animId = requestAnimationFrame(draw);
                return;
            }

            // Draw main cursor Z
            const mx = mousePos.current.x;
            const my = mousePos.current.y;

            ctx.save();
            ctx.translate(mx, my);
            ctx.font = "bold 20px monospace";
            ctx.fillStyle = "#dc2626";
            ctx.shadowColor = "rgba(220, 38, 38, 0.6)";
            ctx.shadowBlur = 8;
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText("Z", 0, 0);
            ctx.restore();

            // Update and draw trail particles
            particles.current = particles.current.filter((p) => p.life > 0);

            for (const p of particles.current) {
                p.x += p.vx;
                p.y += p.vy;
                p.life -= 0.012;
                p.opacity = Math.max(0, p.life * 0.8);
                p.rotation += 0.5;

                ctx.save();
                ctx.translate(p.x, p.y);
                ctx.rotate((p.rotation * Math.PI) / 180);
                ctx.globalAlpha = p.opacity;
                ctx.font = `bold ${p.size}px monospace`;
                ctx.fillStyle = "#dc2626";
                ctx.shadowColor = "rgba(220, 38, 38, 0.4)";
                ctx.shadowBlur = 6;
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.fillText("z", 0, 0);
                ctx.restore();
            }

            // Keep particles manageable
            if (particles.current.length > 60) {
                particles.current = particles.current.slice(-60);
            }

            animId = requestAnimationFrame(draw);
        };

        draw();

        window.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseleave", handleMouseLeave);
        document.addEventListener("mouseenter", handleMouseEnter);

        return () => {
            cancelAnimationFrame(animId);
            clearInterval(idleSpawnInterval);
            if (idleTimer.current) clearTimeout(idleTimer.current);
            window.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseleave", handleMouseLeave);
            document.removeEventListener("mouseenter", handleMouseEnter);
            window.removeEventListener("resize", resize);
        };
    }, [isVisible]);

    return (
        <>
            <canvas
                ref={canvasRef}
                className="fixed inset-0 pointer-events-none z-[9999]"
            />
        </>
    );
}
