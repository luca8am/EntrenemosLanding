import { ButtonLink } from "@/components/ui/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acceso para entrenadores",
  robots: { index: false, follow: false },
};

export default function LoginPlaceholderPage() {
  return (
    <main className="page-shell">
      <section className="section">
        <div className="panel final-cta">
          <div>
            <span className="eyebrow">Acceso</span>
            <h1 style={{ maxWidth: "12ch" }}>Acceso pendiente de integración.</h1>
            <p>
              Este proyecto mantiene el acceso separado a propósito para poder iterar la
              landing sin acoplarla todavía a la app principal.
            </p>
            <p>
              Cuando se porte a <strong>EntrenemosWeb</strong>, esta ruta puede redirigir al
              login real o reemplazarse directamente por la pantalla existente.
            </p>
          </div>

          <div className="final-cta-actions">
            <ButtonLink href="/">
              Volver a la landing
            </ButtonLink>
            <ButtonLink variant="secondary" href="mailto:soporte@entrenemos.app">
              soporte@entrenemos.app
            </ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}
