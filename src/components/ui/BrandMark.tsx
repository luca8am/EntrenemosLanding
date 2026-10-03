import Image from "next/image";
import Link from "next/link";

interface BrandMarkProps {
  href?: string;
  logoSrc?: string;
  name?: string;
  className?: string;
}

export function BrandMark({ href = "/", logoSrc = "/brand/logo-primary.webp", name = "Entrenemos", className }: BrandMarkProps) {
  return (
    <Link className={["ui-brand-mark", className].filter(Boolean).join(" ")} href={href} aria-label={name}>
      <Image src={logoSrc} alt="" width={36} height={36} sizes="42px" />
      <span>{name}</span>
    </Link>
  );
}
