import Link from "next/link";
import { FooterContact } from "./FooterContact";
import { BrandMark } from "@/components/ui/BrandMark";
import { StoreIcon } from "@/components/ui/StoreIcon";
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
                    <StoreIcon store={link.label === "App Store" ? "apple" : "google"} />
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
                <li key={link.href}>
                  <a className="fat-footer__external-link" href={link.href} target="_blank" rel="noopener noreferrer" aria-label={`${link.label} (abre en otra pestaña)`}>
                    {link.label}
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9" /></svg>
                  </a>
                </li>
              ))}
              <li><FooterContact email={footer.contact} label="Soporte" /></li>
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
