"use client";

import { useEffect, useRef, useState } from "react";
import { copyText } from "@/lib/clipboard";

export function FooterContact({ email }: { email: string }) {
  const [copyState, setCopyState] = useState<"idle" | "copied" | "error">("idle");
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => {
    return () => {
      if (resetTimer.current) clearTimeout(resetTimer.current);
    };
  }, []);

  async function copyEmail() {
    try {
      await copyText(email);
      setCopyState("copied");
    } catch {
      setCopyState("error");
    }

    if (resetTimer.current) clearTimeout(resetTimer.current);
    resetTimer.current = setTimeout(() => setCopyState("idle"), 2200);
  }

  return (
    <div className="fat-footer__contact">
      <a href={"mailto:" + email}>{email}</a>
      <button type="button" onClick={copyEmail} aria-label="Copiar correo de soporte">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="8" y="8" width="11" height="11" rx="2" />
          <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
        </svg>
        <span>{copyState === "copied" ? "Copiado" : copyState === "error" ? "No se pudo copiar" : "Copiar"}</span>
      </button>
      <span className="fat-footer__copy-status" aria-live="polite">
        {copyState === "copied" ? "Correo copiado al portapapeles." : copyState === "error" ? "No se pudo copiar el correo." : ""}
      </span>
    </div>
  );
}
