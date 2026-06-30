"use client";

import { useEffect } from "react";

export function ScrollRevealInit() {
  useEffect(() => {
    // 1. Scroll Reveal Observer
    let io: IntersectionObserver | null = null;
    const hasReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (hasReducedMotion) {
      document.querySelectorAll<HTMLElement>(".reveal").forEach((el) => el.classList.add("in"));
    } else {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("in");
              if (io) io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.16, rootMargin: "0px 0px -8% 0px" },
      );

      const observer = io;
      document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    }

    // 2. Interactive Spotlight Glow Effect with Lerping (Interpolation)
    const cards = document.querySelectorAll<HTMLElement>(".glow-card");
    const cleanupFns: (() => void)[] = [];

    cards.forEach((card) => {
      let currentX = 0;
      let currentY = 0;
      let targetX = 0;
      let targetY = 0;
      let frameId: number | null = null;
      let isHovered = false;

      const updatePosition = () => {
        if (!isHovered) return;

        // Smooth transition towards target position (0.12 is the speed factor)
        currentX += (targetX - currentX) * 0.12;
        currentY += (targetY - currentY) * 0.12;

        card.style.setProperty("--mouse-x", `${currentX}px`);
        card.style.setProperty("--mouse-y", `${currentY}px`);

        if (Math.abs(targetX - currentX) > 0.1 || Math.abs(targetY - currentY) > 0.1) {
          frameId = requestAnimationFrame(updatePosition);
        } else {
          frameId = null;
        }
      };

      const handleMouseMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        targetX = e.clientX - rect.left;
        targetY = e.clientY - rect.top;

        if (frameId === null && isHovered) {
          frameId = requestAnimationFrame(updatePosition);
        }
      };

      const handleMouseEnter = (e: MouseEvent) => {
        isHovered = true;
        const rect = card.getBoundingClientRect();
        // Initialize position on enter to prevent jumping from (0,0)
        targetX = e.clientX - rect.left;
        targetY = e.clientY - rect.top;
        currentX = targetX;
        currentY = targetY;
        card.style.setProperty("--mouse-x", `${currentX}px`);
        card.style.setProperty("--mouse-y", `${currentY}px`);

        if (frameId === null) {
          frameId = requestAnimationFrame(updatePosition);
        }
      };

      const handleMouseLeave = () => {
        isHovered = false;
        if (frameId !== null) {
          cancelAnimationFrame(frameId);
          frameId = null;
        }
      };

      card.addEventListener("mousemove", handleMouseMove, { passive: true });
      card.addEventListener("mouseenter", handleMouseEnter, { passive: true });
      card.addEventListener("mouseleave", handleMouseLeave, { passive: true });

      cleanupFns.push(() => {
        card.removeEventListener("mousemove", handleMouseMove);
        card.removeEventListener("mouseenter", handleMouseEnter);
        card.removeEventListener("mouseleave", handleMouseLeave);
        if (frameId !== null) cancelAnimationFrame(frameId);
      });
    });

    return () => {
      if (io) io.disconnect();
      cleanupFns.forEach((fn) => fn());
    };
  }, []);

  return null;
}

