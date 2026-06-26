import Link from "next/link";
import type { FooterContent } from "@/lib/marketing/landing-types";

interface Props {
  footer: FooterContent;
}

export function LandingFooter({ footer }: Props) {
  return (
    <footer className="footer">
      <div className="panel footer-shell">
        <div className="footer-copy">
          <strong>Entrenemos</strong>
          <p>{footer.description}</p>
          <p className="muted">{footer.contact}</p>
        </div>

        <div className="footer-links">
          {footer.links.map((link) => (
            <Link key={link.href} className="button button-tertiary" href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
