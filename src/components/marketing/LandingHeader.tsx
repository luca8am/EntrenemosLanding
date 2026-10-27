import Link from "next/link";
import { BrandMark } from "@/components/ui/BrandMark";
import { ButtonLink } from "@/components/ui/Button";
import type { LandingLink } from "@/lib/marketing/landing-types";

interface Props {
  brand: {
    name: string;
    logoSrc: string;
  };
  navigation: LandingLink[];
  primaryAction: LandingLink;
}

export function LandingHeader({ brand, navigation, primaryAction }: Props) {
  // En mobile chico el texto se parte antes de la última palabra y el botón se
  // ajusta a esa línea (ver .topbar-action-label en marketing.css).
  const breakAt = primaryAction.label.lastIndexOf(" ");

  return (
    <header className="topbar" id="inicio">
      <BrandMark className="brand" href="#inicio" logoSrc={brand.logoSrc} name={brand.name} />

      <nav className="topnav" aria-label="Principal">
        {navigation.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>

      <ButtonLink variant="secondary" href={primaryAction.href}>
        {breakAt > 0 ? (
          <span className="topbar-action-label">
            <span>{primaryAction.label.slice(0, breakAt)}</span>{" "}
            <span>{primaryAction.label.slice(breakAt + 1)}</span>
          </span>
        ) : (
          primaryAction.label
        )}
      </ButtonLink>
    </header>
  );
}
