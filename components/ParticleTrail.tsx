"use client";
import { useEffect, useRef, useState } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
}

const ParticleTrail = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();
  const [isMounted, setIsMounted] = useState(false);

  // Only run after component has mounted
  useEffect(() => {
    setIsMounted(true);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isMounted || !canvasRef.current) return;

    try {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      // Set canvas to full window size
      const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };

      handleResize();
      window.addEventListener("resize", handleResize);

      // Mouse movement handler
      const handleMouseMove = (e: MouseEvent) => {
        mouseRef.current = { x: e.clientX, y: e.clientY };
        // Add new particles on mouse move
        for (let i = 0; i < 3; i++) {
          addParticle(e.clientX, e.clientY);
        }
      };

      window.addEventListener("mousemove", handleMouseMove);

      // Add a particle
      const addParticle = (x: number, y: number) => {
        const colors = ["#8a2be2", "#ff69b4", "#1e90ff", "#32cd32"];
        particlesRef.current.push({
          x,
          y,
          size: Math.random() * 5 + 1,
          speedX: Math.random() * 2 - 1,
          speedY: Math.random() * 2 - 1,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      };

      // Animation loop
      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Update and draw particles
        for (let i = 0; i < particlesRef.current.length; i++) {
          const p = particlesRef.current[i];

          p.x += p.speedX;
          p.y += p.speedY;
          p.size -= 0.05;

          if (p.size <= 0) {
            particlesRef.current.splice(i, 1);
            i--;
            continue;
          }

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.fill();
        }

        animationRef.current = requestAnimationFrame(animate);
      };

      animate();

      // Cleanup
      return () => {
        window.removeEventListener("resize", handleResize);
        window.removeEventListener("mousemove", handleMouseMove);
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    } catch (error) {
      console.error("Error in ParticleTrail:", error);
      return () => {};
    }
  }, [isMounted]);

  if (!isMounted) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-40"
      style={{ opacity: 0.7 }}
    />
  );
};

export default ParticleTrail;
