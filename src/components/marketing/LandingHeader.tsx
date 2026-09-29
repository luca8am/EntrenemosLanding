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
        {primaryAction.label}
      </ButtonLink>
    </header>
  );
}
