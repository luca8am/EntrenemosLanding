import type { ReactNode } from "react";

interface DisclosureProps {
  title: string;
  meta?: string;
  children: ReactNode;
  defaultOpen?: boolean;
}

export function Disclosure({ title, meta, children, defaultOpen = false }: DisclosureProps) {
  return (
    <details className="ui-disclosure" open={defaultOpen || undefined}>
      <summary className="ui-disclosure__summary">
        <span className="ui-disclosure__title">{title}</span>
        {meta ? <span className="ui-disclosure__meta">{meta}</span> : null}
      </summary>
      <div className="ui-disclosure__content">{children}</div>
    </details>
  );
}
