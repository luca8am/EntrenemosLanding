import { createElement, type HTMLAttributes, type ReactNode } from "react";

interface SurfaceProps extends HTMLAttributes<HTMLElement> {
  as?: "article" | "div" | "section";
  children: ReactNode;
}

export function Surface({ as = "div", className, children, ...props }: SurfaceProps) {
  return createElement(as, { ...props, className: ["ui-surface", className].filter(Boolean).join(" ") }, children);
}
