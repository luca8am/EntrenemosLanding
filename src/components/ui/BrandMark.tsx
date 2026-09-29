import Link from "next/link";

interface BrandMarkProps {
  href?: string;
  logoSrc?: string;
  name?: string;
  className?: string;
}

export function BrandMark({ href = "/", logoSrc = "/brand/logo-primary.png", name = "Entrenemos", className }: BrandMarkProps) {
  return (
    <Link className={["ui-brand-mark", className].filter(Boolean).join(" ")} href={href} aria-label={name}>
      <img src={logoSrc} alt="" />
      <span>{name}</span>
    </Link>
  );
}
