"use client";

import { useEffect } from "react";

export function TopbarScrollEffect() {
  useEffect(() => {
    const topbar = document.getElementById("inicio") as HTMLElement | null;
    if (!topbar) return;

    const onScroll = () => {
      topbar.style.borderColor = window.scrollY > 20 ? "rgba(13,147,242,.28)" : "";
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
