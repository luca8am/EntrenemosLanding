import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary" | "tertiary";

function buttonClassName(variant: ButtonVariant, className?: string) {
  return ["ui-button", `ui-button--${variant}`, className].filter(Boolean).join(" ");
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export function Button({ variant = "primary", className, type = "button", ...props }: ButtonProps) {
  return <button {...props} type={type} className={buttonClassName(variant, className)} />;
}

interface ButtonLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
}

export function ButtonLink({ variant = "primary", className, href, ...props }: ButtonLinkProps) {
  return <Link {...props} href={href} className={buttonClassName(variant, className)} />;
}
