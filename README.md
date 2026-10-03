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
- `src/styles`: tokens, base global y estilos específicos de marketing y login.
- `public/brand`: logos y assets públicos.

## Superficies públicas actuales

- `/`: landing con Hero, Enfoque, Ecosistema, Visión, planes para entrenadores y footer.
- `/design-system`: referencia viva de tokens, tipografía y componentes reales.
- `/login`: página local informativa, excluida de indexación. El acceso para entrenadores dirige a `https://entrenemos.app/login`.

El cierre comercial ofrece una prueba informativa de 15 días para hasta 5 alumnos y presenta Coach, Plus y Pro según capacidad. Los precios, pagos y contratación siguen fuera de alcance hasta contar con definiciones comerciales y destinos reales.

## Criterios de portabilidad

La URL pública aprobada es **`https://landing.entrenemos.app`**, con este repositorio desplegado como proyecto independiente. El acceso para entrenadores sigue en `https://entrenemos.app/login`. La integración de `/landing` en EntrenemosWeb queda para otra etapa.

La configuración de dominio, los pasos de publicación y el relevamiento de la ruta existente están en [Dominio y despliegue](docs/dominio-y-despliegue.md).

- El contenido vive fuera del JSX.
- Los tokens visuales siguen la dirección documentada en `docs/`.
- No hay dependencias de backend ni contratos cerrados con la app principal.
- La interactividad está reducida a componentes client-side puntuales.

## Scripts

- `npm run dev`
- `npm run build`
- `npm run start`
- `npm run typecheck`

## Desarrollo local

El flujo de validación de este repositorio es manual y visual con `npm run dev`. Los agentes no deben ejecutar `npm run build` salvo que se solicite de forma explícita. Cuando un cambio requiera reiniciar el servidor de desarrollo (por ejemplo, cambios de configuración, dependencias o variables de entorno), deben indicarlo claramente en su devolución.

`next dev` y `next build` utilizan `.next` por defecto. No ejecutar el build mientras el servidor de desarrollo sigue abierto: ambos procesos pueden escribir manifests distintos en la misma carpeta y dejar el runtime de React Server Components desincronizado.

Si aparecen errores como `Could not find the module ... in the React Client Manifest` o `__webpack_modules__[moduleId] is not a function`:

1. Detener `npm run dev`.
2. Eliminar únicamente la carpeta generada `.next`.
3. Volver a ejecutar `npm run dev`.

En PowerShell:

```powershell
Remove-Item -LiteralPath .next -Recurse -Force
npm run dev
```

Si el repositorio se usa dentro de OneDrive y los errores reaparecen sin haber ejecutado dos procesos de Next en paralelo, pausar la sincronización durante el desarrollo o trabajar desde una carpeta local fuera de OneDrive evita bloqueos y sincronizaciones parciales de archivos temporales.

## Documentación

- [Cambios y validación del 3 de octubre de 2026](docs/cambios-2026-10-03.md)
- [Contexto de producto](docs/producto.md)
- [Identidad visual](docs/identidad-visual.md)
- [Brief de implementación](docs/brief-landing.md)
- [Instrucciones para agentes](AGENTS.md)
