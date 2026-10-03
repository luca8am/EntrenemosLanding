"use client";

import { useEffect } from "react";

export function ScrollRevealInit() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const revealElements = document.querySelectorAll<HTMLElement>(".reveal");
    let io: IntersectionObserver | null = null;
    if (!reducedMotion.matches && "IntersectionObserver" in window) {
      io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io?.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -4% 0px" });
      revealElements.forEach((element) => {
        element.classList.add("reveal-ready");
        io?.observe(element);
      });
    }

    const showContent = () => {
      if (!reducedMotion.matches) return;
      io?.disconnect();
      revealElements.forEach((element) => element.classList.add("in"));
    };
    reducedMotion.addEventListener("change", showContent);

    return () => {
      if (io) io.disconnect();
      revealElements.forEach((element) => element.classList.remove("reveal-ready"));
      reducedMotion.removeEventListener("change", showContent);
    };
  }, []);

  return null;
}

