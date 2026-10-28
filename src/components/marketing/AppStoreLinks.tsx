"use client";

import { useEffect, useState } from "react";
import { StoreIcon } from "@/components/ui/StoreIcon";
import type { LandingLink } from "@/lib/marketing/landing-types";

interface Props {
  appLinks: LandingLink[];
  className?: string;
}

// Íconos de las tiendas: se destaca la del dispositivo del visitante y la otra
// queda en segundo plano. Sin detección (desktop), ambas se ven igual.
export function AppStoreLinks({ appLinks, className }: Props) {
  const [device, setDevice] = useState<"ios" | "android" | null>(null);

  useEffect(() => {
    const userAgent = navigator.userAgent;
    if (/Android/i.test(userAgent)) {
      setDevice("android");
    } else if (/iPad|iPhone|iPod/i.test(userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)) {
      setDevice("ios");
    }
  }, []);

  return (
    <div className={["ecosystem-independent-note__stores", className].filter(Boolean).join(" ")} aria-label="Descargar Entrenemos">
      {appLinks.map((link) => {
        const isApple = link.label === "App Store";
        const storeDevice = isApple ? "ios" : "android";
        return (
          <a
            key={link.href}
            href={link.href}
            className="ecosystem-independent-note__store"
            data-preference={device === null ? "neutral" : device === storeDevice ? "preferred" : "secondary"}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Descargar Entrenemos desde ${link.label} (abre en otra pestaña)`}
            title={`Descargar desde ${link.label}`}
          >
            <StoreIcon store={isApple ? "apple" : "google"} />
          </a>
        );
      })}
    </div>
  );
}
