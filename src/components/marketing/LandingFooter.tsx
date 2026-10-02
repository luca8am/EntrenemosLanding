"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { BrandMark } from "@/components/ui/BrandMark";
import type { FooterContent } from "@/lib/marketing/landing-types";

interface Props {
  footer: FooterContent;
}

export function LandingFooter({ footer }: Props) {
  const [copyState, setCopyState] = useState<"idle" | "copied" | "error">("idle");
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (resetTimer.current) clearTimeout(resetTimer.current);
    };
  }, []);

  async function copyEmail() {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(footer.contact);
      } else {
        const input = document.createElement("textarea");
        input.value = footer.contact;
        input.style.position = "fixed";
        input.style.opacity = "0";
        document.body.appendChild(input);
        input.select();
        const copied = document.execCommand("copy");
        input.remove();
        if (!copied) throw new Error("copy-failed");
      }
      setCopyState("copied");
    } catch {
      setCopyState("error");
    }

    if (resetTimer.current) clearTimeout(resetTimer.current);
    resetTimer.current = setTimeout(() => setCopyState("idle"), 2200);
  }

  return (
    <footer className="footer">
      <div className="fat-footer">
        <div className="fat-footer__social">
          <div>
            <h2>Entrenemos juntos.</h2>
            <p>Novedades, producto y comunidad.</p>
          </div>

          <a
            className="fat-footer__instagram"
            href={footer.instagram.href}
            target="_blank"
            rel="noreferrer"
            aria-label="Seguir a Entrenemos en Instagram: @entrenemos.8am"
          >
            <span className="fat-footer__instagram-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.6" cy="6.8" r="0.8" />
              </svg>
            </span>
            <strong>{footer.instagram.label}</strong>
            <svg className="fat-footer__arrow" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M7 17 17 7M8 7h9v9" />
            </svg>
          </a>
        </div>

        <div className="fat-footer__directory">
          <div className="fat-footer__brand">
            <BrandMark className="fat-footer__brand-mark" />
            <p>{footer.description}</p>

            <div className="fat-footer__contact">
              <a href={"mailto:" + footer.contact}>{footer.contact}</a>
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

            <div className="fat-footer__downloads">
              <span>Descargá la app</span>
              <div>
                {footer.appLinks.map((link) => (
                  <a href={link.href} key={link.href} target="_blank" rel="noreferrer">
                    {link.label}
                    <svg viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M6 14 14 6M7 6h7v7" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <nav className="fat-footer__nav" aria-label="Navegación del pie">
            <h3>Explorar</h3>
            <ul>
              {footer.links.map((link) => (
                <li key={link.href}><Link href={link.href}>{link.label}</Link></li>
              ))}
            </ul>
          </nav>

          <nav className="fat-footer__nav" aria-label="Información del pie">
            <h3>Información</h3>
            <ul>
              {footer.legalLinks.map((link) => (
                <li key={link.href}><a href={link.href}>{link.label}</a></li>
              ))}
              <li><a href={"mailto:" + footer.contact}>Soporte</a></li>
            </ul>
          </nav>
        </div>

        <div className="fat-footer__bottom">
          <span>© 2026 Entrenemos</span>
          <a href="https://www.8am-dev.com/" target="_blank" rel="noreferrer">
            Un producto de 8AM Dev
          </a>
        </div>
      </div>
    </footer>
  );
}
