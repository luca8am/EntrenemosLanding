"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Button } from "@/components/ui/Button";
import { copyText } from "@/lib/clipboard";

export function SupportCopyButton({ email, label }: { email: string; label: string }) {
  const [message, setMessage] = useState<string | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  async function copySupport() {
    try {
      await copyText(email);
      setMessage("Mail de soporte copiado.");
    } catch {
      setMessage(`No se pudo copiar. Escribinos a ${email}`);
    }
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setMessage(null), 3500);
  }

  return (
    <>
      <Button variant="secondary" onClick={copySupport}>{label}</Button>
      {message ? createPortal(
        <div className="support-toast" role="status" aria-live="polite" aria-atomic="true">{message}</div>,
        document.body,
      ) : null}
    </>
  );
}
