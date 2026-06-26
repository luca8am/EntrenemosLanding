import Link from "next/link";
import type { LandingLink } from "@/lib/marketing/landing-types";

interface Props {
  brand: {
    name: string;
    subtitle: string;
    logoSrc: string;
  };
  navigation: LandingLink[];
  primaryAction: LandingLink;
}

export function LandingHeader({ brand, navigation, primaryAction }: Props) {
  return (
    <header className="topbar" id="inicio">
      <Link className="brand" href="#inicio" aria-label={brand.name}>
        <img src={brand.logoSrc} alt={`Logo de ${brand.name}`} />
        <span className="brand-copy">
          <strong>{brand.name}</strong>
          <span>{brand.subtitle}</span>
        </span>
      </Link>

      <nav className="topnav" aria-label="Principal">
        {navigation.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>

      <Link className="button button-secondary" href={primaryAction.href}>
        {primaryAction.label}
      </Link>
    </header>
  );
}
