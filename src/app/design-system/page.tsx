import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { BrandMark } from "@/components/ui/BrandMark";
import { Button } from "@/components/ui/Button";
import { Disclosure } from "@/components/ui/Disclosure";
import { Surface } from "@/components/ui/Surface";
import { TextField } from "@/components/ui/TextField";
import styles from "./design-system.module.css";

export const metadata: Metadata = {
  title: "Sistema de diseño",
  description: "Fundamentos visuales, componentes y principios de marca de Entrenemos.",
  robots: { index: false, follow: false },
};

const colors = [
  { name: "Fondo", token: "--color-bg-page", value: "#101B22", className: styles.bg },
  { name: "Fondo profundo", token: "--color-bg-deep", value: "#081018", className: styles.bgDeep },
  { name: "Superficie", token: "--color-bg-surface", value: "#1B262E", className: styles.surface },
  { name: "Superficie alternativa", token: "--color-bg-surface-alt", value: "#162028", className: styles.surfaceAlt },
  { name: "Realce", token: "--color-bg-elevated", value: "#25313A", className: styles.highlight },
  { name: "Acción", token: "--color-action-primary", value: "#0D93F2", className: styles.primary },
  { name: "Texto", token: "--color-text-primary", value: "#FFFFFF", className: styles.text },
  { name: "Texto secundario", token: "--color-text-secondary", value: "#94A3B8", className: styles.textSecondary },
];

const typeScale = [
  { label: "Display", sample: "Entrenar es un proceso compartido", className: styles.typeDisplay, spec: "64 / 68 · 800" },
  { label: "Título 1", sample: "La nueva forma de entrenar", className: styles.typeH1, spec: "48 / 52 · 750" },
  { label: "Título 2", sample: "Atletas y entrenadores", className: styles.typeH2, spec: "34 / 40 · 700" },
  { label: "Título 3", sample: "Un mismo contexto", className: styles.typeH3, spec: "22 / 29 · 700" },
  { label: "Cuerpo", sample: "La rutina, cada sesión y el progreso viven en un flujo claro.", className: styles.typeBody, spec: "16 / 26 · 400" },
  { label: "Detalle", sample: "Datos de ejemplo · Sesión activa", className: styles.typeSmall, spec: "13 / 20 · 600" },
];

const spacing = [4, 8, 12, 16, 24, 32, 48, 64, 96];

export default function DesignSystemPage() {
  return (
    <div className={styles.shell}>
      <header className={styles.topbar}>
        <BrandMark className={styles.brand} />
        <nav aria-label="Secciones del sistema de diseño">
          <a href="#fundamentos">Fundamentos</a>
          <a href="#componentes">Componentes</a>
          <a href="#marca">Marca</a>
        </nav>
        <span className={styles.status}>Documento vivo</span>
      </header>

      <main>
        <section className={styles.intro} aria-labelledby="design-system-title">
          <div>
            <p className={styles.context}>Sistema de diseño de Entrenemos</p>
            <h1 id="design-system-title">Una base común para diseñar con claridad.</h1>
          </div>
          <p className={styles.introCopy}>
            Esta ruta reúne las decisiones visuales y de experiencia que conectan la landing,
            la app mobile y la plataforma de entrenadores. No es una galería: es el contrato
            compartido para construir una marca consistente y accesible.
          </p>
        </section>

        <section className={styles.section} id="fundamentos" aria-labelledby="foundations-title">
          <div className={styles.sectionHeading}>
            <h2 id="foundations-title">Fundamentos</h2>
            <p>Los valores base definen jerarquía, contraste y ritmo antes que cualquier componente.</p>
          </div>

          <div className={styles.colorGrid}>
            {colors.map((color) => (
              <article className={styles.colorItem} key={color.token}>
                <div className={`${styles.colorSwatch} ${color.className}`} aria-hidden="true" />
                <div>
                  <strong>{color.name}</strong>
                  <code>{color.value}</code>
                  <span>{color.token}</span>
                </div>
              </article>
            ))}
          </div>

          <div className={styles.foundationGrid}>
            <Surface as="article" className={styles.specimen}>
              <div className={styles.specimenHeading}>
                <h3>Tipografía</h3>
                <p>Plus Jakarta Sans</p>
              </div>
              <div className={styles.typeList}>
                {typeScale.map((type) => (
                  <div className={styles.typeRow} key={type.label}>
                    <div><span>{type.label}</span><code>{type.spec}</code></div>
                    <p className={type.className}>{type.sample}</p>
                  </div>
                ))}
              </div>
            </Surface>

            <Surface as="article" className={styles.specimen}>
              <div className={styles.specimenHeading}>
                <h3>Espaciado</h3>
                <p>Base de 4 px</p>
              </div>
              <div className={styles.spacingList}>
                {spacing.map((space) => (
                  <div className={styles.spacingRow} key={space}>
                    <code>{space}</code>
                    <span style={{ width: `${space}px` }} aria-hidden="true" />
                  </div>
                ))}
              </div>
              <div className={styles.radiusBlock}>
                <h4>Radios</h4>
                <div>
                  <span className={styles.radiusSmall}>12</span>
                  <span className={styles.radiusMedium}>16</span>
                  <span className={styles.radiusLarge}>22</span>
                  <span className={styles.radiusXLarge}>30</span>
                </div>
              </div>
            </Surface>
          </div>
        </section>

        <section className={styles.section} id="componentes" aria-labelledby="components-title">
          <div className={styles.sectionHeading}>
            <h2 id="components-title">Componentes</h2>
            <p>Estados visibles, acciones claras y una respuesta consistente al teclado y al tacto.</p>
          </div>

          <div className={styles.componentGrid}>
            <Surface as="article" className={styles.componentPanel}>
              <h3>Botones</h3>
              <div className={styles.buttonRows}>
                <div><Button>Acción principal</Button><span>Principal</span></div>
                <div><Button variant="secondary">Acción secundaria</Button><span>Secundario</span></div>
                <div><Button variant="tertiary">Acción discreta</Button><span>Terciario</span></div>
                <div><Button disabled>No disponible</Button><span>Deshabilitado</span></div>
              </div>
            </Surface>

            <Surface as="article" className={styles.componentPanel}>
              <h3>Campos</h3>
              <div className={styles.fieldStack}>
                <TextField id="weight-example" label="Peso en kg" type="number" placeholder="Ejemplo: 60" />
                <TextField id="session-goal-example" label="Objetivo de la sesión" type="text" defaultValue="Trabajar con buena técnica" />
                <TextField id="reps-example" label="Repeticiones" type="number" defaultValue="0" error="Ingresá un valor mayor a cero." />
              </div>
            </Surface>

            <Surface as="article" className={`${styles.componentPanel} ${styles.feedbackPanel}`}>
              <h3>Estado de sesión</h3>
              <div className={styles.sessionState}>
                <div><strong>Press de banca</strong><span>Serie 1 de 4</span></div>
                <span className={styles.sessionTag}>En curso</span>
              </div>
              <div className={styles.sessionData}>
                <div><span>Peso</span><strong>60 kg</strong></div>
                <div><span>Repeticiones</span><strong>10</strong></div>
              </div>
              <p>Los estados semánticos informan. El color nunca es la única señal.</p>
            </Surface>
          </div>
        </section>

        <section className={styles.section} id="marca" aria-labelledby="brand-title">
          <div className={styles.sectionHeading}>
            <h2 id="brand-title">Marca y lenguaje</h2>
            <p>Entrenemos es una invitación compartida: acompañamiento, constancia y datos útiles.</p>
          </div>

          <div className={styles.logoStage}>
            <div className={styles.primaryLogo}>
              <img src="/brand/logo-primary.webp" alt="Símbolo azul de Entrenemos" />
              <div><span>Uso principal</span><strong>Identidad digital</strong><p>La variante azul conecta la marca con el producto y las acciones principales.</p></div>
            </div>
            <div className={styles.secondaryLogo}>
              <img src="/brand/logo-secondary.webp" alt="Símbolo humano de Entrenemos" />
              <div><span>Uso contextual</span><strong>Narrativa humana</strong><p>Reservada para piezas donde la diversidad y el vínculo sean el centro del mensaje.</p></div>
            </div>
          </div>

          <div className={styles.disclosures}>
            <Disclosure title="Qué significa Entrenemos" meta="Principio de marca" defaultOpen>
              <p>El nombre funciona como verbo y como invitación. Propone hacer juntos, no competir entre personas.</p><p>La tecnología organiza el proceso, pero el progreso sigue siendo humano.</p>
            </Disclosure>
            <Disclosure title="Cómo hablamos" meta="Voz rioplatense">
              <p>Usamos frases directas, cercanas y concretas: entrená, registrá, seguí, compartí.</p><p>Evitamos gritos, culpa, promesas rápidas y lenguaje agresivo de fitness.</p>
            </Disclosure>
            <Disclosure title="Claims y datos" meta="Límites de comunicación">
              <p>No inventamos métricas, precios, testimonios ni disponibilidad. Los datos de una demostración siempre se identifican como ejemplos.</p><p>No hacemos recomendaciones médicas ni prometemos resultados físicos.</p>
            </Disclosure>
            <Disclosure title="Accesibilidad" meta="Parte del sistema">
              <p>Contraste AA, foco visible, controles con nombre accesible, objetivos táctiles amplios y orden semántico.</p><p>El movimiento es breve, funcional y se reduce cuando el sistema operativo lo solicita.</p>
            </Disclosure>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div><Image src="/brand/logo-primary.webp" alt="" width={96} height={96} sizes="96px" /><strong>Entrenemos</strong></div>
        <p>Una referencia compartida para que cada pantalla se sienta parte del mismo proceso.</p>
        <Link href="/">Volver a la landing</Link>
      </footer>
    </div>
  );
}
