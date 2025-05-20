"use client";
import React, { useEffect, useState } from "react";

const MouseTracker = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [mouseData, setMouseData] = useState({
    x: 0,
    y: 0,
    isDown: false,
  });

  // Only run after component has mounted
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMouseData((prev) => ({ ...prev, x: e.clientX, y: e.clientY }));
    };

    const handleMouseDown = () => {
      setMouseData((prev) => ({ ...prev, isDown: true }));
    };

    const handleMouseUp = () => {
      setMouseData((prev) => ({ ...prev, isDown: false }));
    };

    try {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mousedown", handleMouseDown);
      window.addEventListener("mouseup", handleMouseUp);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mousedown", handleMouseDown);
        window.removeEventListener("mouseup", handleMouseUp);
      };
    } catch (error) {
      console.error("Error in MouseTracker event listeners:", error);
      return () => {};
    }
  }, [isMounted]);

  if (!isMounted) return null;

  return (
    <div
      className={`mouse-tracker fixed w-8 h-8 pointer-events-none transition-all duration-200 ease-out rounded-full z-50 ${
        mouseData.isDown ? "scale-75" : "scale-100"
      }`}
      style={{
        left: mouseData.x - 16,
        top: mouseData.y - 16,
        border: "2px solid #fff",
        opacity: "0.5",
        transform: `scale(${mouseData.isDown ? 0.75 : 1})`,
      }}
    ></div>
  );
};

export default MouseTracker;
