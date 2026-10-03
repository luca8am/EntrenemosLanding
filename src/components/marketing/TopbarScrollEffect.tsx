"use client";

import { useEffect } from "react";

export function TopbarScrollEffect() {
  useEffect(() => {
    const topbar = document.getElementById("inicio") as HTMLElement | null;
    if (!topbar) return;

    let wasScrolled: boolean | undefined;
    const onScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled === wasScrolled) return;
      wasScrolled = isScrolled;
      topbar.classList.toggle("is-scrolled", isScrolled);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
