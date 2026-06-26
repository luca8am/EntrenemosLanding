# Entrenemos Landing

Landing pública de **Entrenemos** construida en **Next.js App Router**.

## Objetivo

Este repositorio existe para iterar la experiencia pública de marca, adquisición y acceso sin tocar todavía la app principal de `../EntrenemosWeb`.

La implementación está pensada para que luego sea fácil:

- moverla dentro de `EntrenemosWeb`,
- o mantenerla como proyecto separado y conectarla por dominio, subdominio o redirección.

## Stack

- Next.js
- React
- TypeScript
- CSS global modularizado por secciones

## Estructura

- `src/app`: entrypoints, metadata y páginas.
- `src/components/marketing`: secciones de la landing.
- `src/lib/marketing`: contenido y tipos desacoplados del layout.
- `public/brand`: logos y assets públicos.

## Criterios de portabilidad

- El contenido vive fuera del JSX.
- Los tokens visuales siguen la dirección documentada en `docs/`.
- No hay dependencias de backend ni contratos cerrados con la app principal.
- La interactividad está reducida a componentes client-side puntuales.

## Scripts

- `npm run dev`
- `npm run build`
- `npm run start`
- `npm run typecheck`

## Documentación

- [Contexto de producto](docs/producto.md)
- [Identidad visual](docs/identidad-visual.md)
- [Brief de implementación](docs/brief-landing.md)
- [Instrucciones para agentes](AGENTS.md)
