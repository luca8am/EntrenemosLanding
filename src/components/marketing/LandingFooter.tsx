import Link from "next/link";
import { FooterContact } from "./FooterContact";
import { BrandMark } from "@/components/ui/BrandMark";
import type { FooterContent } from "@/lib/marketing/landing-types";

interface Props {
  footer: FooterContent;
}

export function LandingFooter({ footer }: Props) {
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

            <div className="fat-footer__downloads">
              <span>Descargá la app</span>
              <div>
                {footer.appLinks.map((link) => (
                  <a href={link.href} key={link.href} target="_blank" rel="noopener noreferrer" aria-label={`Descargar Entrenemos desde ${link.label}`}>
                    {link.label === "App Store" ? (
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path fill="currentColor" d="M17.05 12.54c.03 3.22 2.83 4.29 2.86 4.3-.02.08-.45 1.53-1.48 3.03-.89 1.3-1.81 2.59-3.27 2.62-1.43.03-1.89-.85-3.53-.85-1.63 0-2.14.82-3.49.88-1.41.05-2.49-1.41-3.39-2.7-1.85-2.66-3.26-7.52-1.36-10.8.94-1.63 2.62-2.66 4.44-2.69 1.39-.03 2.7.94 3.54.94.84 0 2.42-1.16 4.08-.99.7.03 2.66.28 3.92 2.13-.1.06-2.34 1.36-2.32 4.13ZM14.36 4.5c.75-.91 1.26-2.17 1.12-3.43-1.08.04-2.39.72-3.17 1.63-.7.81-1.31 2.1-1.15 3.34 1.2.09 2.44-.61 3.2-1.54Z" />
                      </svg>
                    ) : (
                      <svg viewBox="0 0 24 26" aria-hidden="true">
                        <path fill="#32BBFF" d="M1 1 14 13 1 25Z" />
                        <path fill="#00D26A" d="m1 1 16 9-3 3Z" />
                        <path fill="#FFCE00" d="m17 10 6 3-6 3-3-3Z" />
                        <path fill="#FF4545" d="m1 25 13-12 3 3Z" />
                      </svg>
                    )}
                    <span className="store-link__text">
                      <small>Descargar desde</small>
                      <strong>{link.label}</strong>
                    </span>
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
          <FooterContact email={footer.contact} />
          <a href="https://www.8am-dev.com/" target="_blank" rel="noreferrer">
            Un producto de 8AM
          </a>
        </div>
      </div>
    </footer>
  );
}
