import { ButtonLink } from "@/components/ui/Button";
import { Surface } from "@/components/ui/Surface";
import type { FooterContent } from "@/lib/marketing/landing-types";

interface Props {
  footer: FooterContent;
}

export function LandingFooter({ footer }: Props) {
  return (
    <footer className="footer">
      <Surface className="panel footer-shell">
        <div className="footer-copy">
          <strong>Entrenemos</strong>
          <p>{footer.description}</p>
          <p className="muted">{footer.contact}</p>
        </div>

        <div className="footer-links">
          {footer.links.map((link) => (
            <ButtonLink key={link.href} variant="tertiary" href={link.href}>
              {link.label}
            </ButtonLink>
          ))}
        </div>
      </Surface>
    </footer>
  );
}
